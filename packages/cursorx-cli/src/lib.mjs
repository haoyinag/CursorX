import fs from "node:fs";
import os from "node:os";
import path from "node:path";

export function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

export function copyFile(source, target) {
  ensureDir(path.dirname(target));
  fs.copyFileSync(source, target);
}

export function readManifest(repoRoot) {
  const manifestPath = path.join(repoRoot, "slash-commands", "index.json");
  return JSON.parse(fs.readFileSync(manifestPath, "utf8"));
}

export function getCommandEntry(manifest, commandId) {
  const entry = manifest.commands.find((command) => command.id === commandId);
  if (!entry) {
    throw new Error(`Unknown command: ${commandId}`);
  }
  return entry;
}

export function resolveTargetPaths(scope, repoPath) {
  const targetRoot = resolveTargetRoot(scope, repoPath);
  return {
    targetRoot,
    commandsDir: path.join(targetRoot, "commands"),
    scriptsDir: path.join(targetRoot, "scripts"),
  };
}

function formatPath(filePath) {
  return filePath.replaceAll("\\", "/");
}

function formatSlashCommand(entry) {
  return entry.title || `/${entry.id}`;
}

function getTerminalWidth() {
  const columns = Number(process.stdout?.columns ?? 0);
  return Number.isFinite(columns) && columns > 0 ? columns : 100;
}

function wrapText(text, width) {
  if (!text) {
    return [""];
  }

  if (width <= 0 || text.length <= width) {
    return [text];
  }

  const lines = [];
  let remaining = text.trim();

  while (remaining.length > width) {
    let breakIndex = remaining.lastIndexOf(" ", width);
    if (breakIndex <= 0) {
      const separators = ["/", "\\", "_", "."];
      for (const separator of separators) {
        const candidate = remaining.lastIndexOf(separator, width);
        if (candidate > breakIndex) {
          breakIndex = candidate + 1;
        }
      }
    }
    if (breakIndex <= 0 || breakIndex < Math.floor(width * 0.6)) {
      breakIndex = width;
    }

    lines.push(remaining.slice(0, breakIndex).trim());
    remaining = remaining.slice(breakIndex).trim();
  }

  if (remaining) {
    lines.push(remaining);
  }

  return lines;
}

function createColorPalette() {
  const useColor = Boolean(process.stdout?.isTTY) && !process.env.NO_COLOR;

  if (!useColor) {
    return {
      title: (value) => value,
      accent: (value) => value,
      muted: (value) => value,
      success: (value) => value,
      warning: (value) => value,
      danger: (value) => value,
    };
  }

  return {
    title: (value) => `\u001b[1m\u001b[36m${value}\u001b[0m`,
    accent: (value) => `\u001b[1m${value}\u001b[0m`,
    muted: (value) => `\u001b[90m${value}\u001b[0m`,
    success: (value) => `\u001b[32m${value}\u001b[0m`,
    warning: (value) => `\u001b[33m${value}\u001b[0m`,
    danger: (value) => `\u001b[31m${value}\u001b[0m`,
  };
}

function writeLoggerLine(logger, line) {
  if (typeof logger === "function") {
    logger(line);
    return;
  }

  logger.log(line);
}

function printWrappedLine(logger, text, width, indent = "  ") {
  for (const line of wrapText(text, width)) {
    writeLoggerLine(logger, `${indent}${line}`);
  }
}

function createCliUi() {
  const terminalWidth = getTerminalWidth();
  return {
    colors: createColorPalette(),
    terminalWidth,
    separatorWidth: Math.max(24, Math.min(terminalWidth, 72)),
    contentWidth: Math.max(24, terminalWidth - 2),
  };
}

function printCliHeader(logger, ui, title, subtitle = "") {
  writeLoggerLine(logger, ui.colors.accent(title));
  if (subtitle) {
    writeLoggerLine(logger, ui.colors.muted(subtitle));
  }
  writeLoggerLine(logger, "-".repeat(ui.separatorWidth));
}

function getStatusLabel(level, colors) {
  if (level === "ok") {
    return colors.success("[OK]");
  }

  if (level === "missing") {
    return colors.danger("[MISSING]");
  }

  return colors.warning("[INFO]");
}

function printStatusLine(logger, ui, level, message) {
  const label = getStatusLabel(level, ui.colors);
  const lines = wrapText(message, Math.max(16, ui.contentWidth - 10));

  if (lines.length === 0) {
    writeLoggerLine(logger, `${label}`);
    return;
  }

  writeLoggerLine(logger, `${label} ${lines[0]}`);
  for (const line of lines.slice(1)) {
    writeLoggerLine(logger, `          ${line}`);
  }
}

function printNextSteps(logger, ui, steps) {
  if (!Array.isArray(steps) || steps.length === 0) {
    return;
  }

  writeLoggerLine(logger, "");
  writeLoggerLine(logger, ui.colors.accent("Try next:"));
  for (const step of steps) {
    writeLoggerLine(logger, `  ${step}`);
  }
}

export function createTerminalUi() {
  return createCliUi();
}

export function printTerminalHeader(logger, ui, title, subtitle = "") {
  printCliHeader(logger, ui, title, subtitle);
}

export function printTerminalParagraph(logger, ui, text, indent = "  ") {
  printWrappedLine(logger, text, ui.contentWidth, indent);
}

export function printTerminalNextSteps(logger, ui, steps) {
  printNextSteps(logger, ui, steps);
}

export function printTerminalError(logger, ui, title, detail = "", steps = []) {
  writeLoggerLine(logger, ui.colors.danger(title));
  if (detail) {
    printWrappedLine(logger, detail, ui.contentWidth);
  }
  printNextSteps(logger, ui, steps);
}

function quoteCliArg(value) {
  if (!value) {
    return value;
  }

  return /\s/.test(value) ? `"${value.replaceAll('"', '\\"')}"` : value;
}

function buildCommandTarget(targetRoot, entry) {
  return path.join(targetRoot, "commands", entry.installAs);
}

function buildScriptTargets(targetRoot, entry) {
  return Array.isArray(entry.scripts)
    ? entry.scripts.map((script) => ({
        ...script,
        target: path.join(targetRoot, "scripts", script.installAs),
      }))
    : [];
}

function logVerificationHint(entry, logger) {
  logger.log(`Verify in Cursor chat: type ${formatSlashCommand(entry)}`);
  logger.log("If Cursor does not pick it up immediately, reload Cursor.");
}

function buildInstallCommandExample(entry, scope, repoPath, includeScripts) {
  const args = ["cursorx", "install", entry.id, "--scope", scope];

  if (scope === "project" && repoPath) {
    args.push("--repo", quoteCliArg(path.resolve(repoPath)));
  }

  if (includeScripts) {
    args.push("--with-scripts");
  }

  return args.join(" ");
}

export function resolveTargetRoot(scope, repoPath) {
  if (scope === "global") {
    return path.join(os.homedir(), ".cursor");
  }

  if (scope === "project") {
    const baseRepo = repoPath ? path.resolve(repoPath) : process.cwd();
    if (!fs.existsSync(baseRepo)) {
      throw new Error(`Project repo path does not exist: ${baseRepo}`);
    }
    return path.join(baseRepo, ".cursor");
  }

  throw new Error(`Unsupported scope: ${scope}`);
}

export function installSlashCommand({
  repoRoot,
  commandId,
  scope,
  repoPath = "",
  withScripts = false,
  logger = console,
}) {
  const manifest = readManifest(repoRoot);
  const entry = getCommandEntry(manifest, commandId);
  const ui = createCliUi();

  if (!entry.scopes.includes(scope)) {
    throw new Error(`Command ${commandId} does not support scope ${scope}`);
  }

  const { targetRoot } = resolveTargetPaths(scope, repoPath);
  const commandSource = path.join(repoRoot, entry.path);
  const commandTarget = buildCommandTarget(targetRoot, entry);

  if (!fs.existsSync(commandSource)) {
    throw new Error(`Command source not found: ${path.relative(repoRoot, commandSource)}`);
  }

  copyFile(commandSource, commandTarget);
  printCliHeader(
    logger,
    ui,
    `CursorX install ${entry.id} (${scope})`,
    `Installing ${formatSlashCommand(entry)} into ${scope} scope`
  );
  printStatusLine(logger, ui, "ok", `Installed command file: ${formatPath(commandTarget)}`);

  if (withScripts && Array.isArray(entry.scripts)) {
    for (const script of entry.scripts) {
      const scriptSource = path.join(repoRoot, script.source);
      const scriptTarget = path.join(targetRoot, "scripts", script.installAs);

      if (!fs.existsSync(scriptSource)) {
        throw new Error(`Missing companion script: ${path.relative(repoRoot, scriptSource)}`);
      }

      copyFile(scriptSource, scriptTarget);
      printStatusLine(logger, ui, "ok", `Installed companion script: ${formatPath(scriptTarget)}`);
    }
  } else if (!withScripts && Array.isArray(entry.scripts) && entry.scripts.length > 0) {
    printStatusLine(
      logger,
      ui,
      "info",
      `Companion scripts available. Re-run with --with-scripts to install ${entry.scripts.length} script${
        entry.scripts.length === 1 ? "" : "s"
      }.`
    );
  }

  printStatusLine(logger, ui, "ok", `Scope: ${scope}`);
  printStatusLine(logger, ui, "ok", `Cursor root: ${formatPath(targetRoot)}`);
  logger.log("");
  logVerificationHint(entry, logger);
  printNextSteps(logger, ui, [
    `cursorx verify ${entry.id} --scope ${scope}${scope === "project" && repoPath ? ` --repo ${quoteCliArg(path.resolve(repoPath))}` : ""}`,
  ]);
}

export function listSlashCommands({ repoRoot, logger = console }) {
  const manifest = readManifest(repoRoot);
  const ui = createCliUi();
  const showTags = ui.terminalWidth >= 72;

  printCliHeader(
    logger,
    ui,
    "CursorX slash commands",
    `${manifest.commands.length} bundled command${manifest.commands.length === 1 ? "" : "s"}`
  );

  for (const command of manifest.commands) {
    const slashCommand = formatSlashCommand(command);
    const scopeText = Array.isArray(command.scopes) ? command.scopes.join(", ") : "unknown";

    logger.log(`${ui.colors.title(slashCommand)} ${ui.colors.muted(`[${scopeText}]`)}`);
    printWrappedLine(logger, command.summary, ui.contentWidth);

    if (showTags && Array.isArray(command.tags) && command.tags.length > 0) {
      printWrappedLine(logger, `tags: ${command.tags.join(", ")}`, ui.contentWidth, "  ");
    }

    logger.log("");
  }

  const firstCommand = manifest.commands[0];
  if (firstCommand) {
    printNextSteps(logger, ui, [
      `cursorx install ${firstCommand.id} --scope global`,
      `cursorx verify ${firstCommand.id} --scope global`,
    ]);
  }
}

export function runDoctor({
  repoRoot,
  scope = "global",
  repoPath = "",
  logger = console,
}) {
  const manifest = readManifest(repoRoot);
  const { targetRoot, commandsDir, scriptsDir } = resolveTargetPaths(scope, repoPath);
  const ui = createCliUi();
  const commandCount = manifest.commands.length;

  printCliHeader(
    logger,
    ui,
    `CursorX doctor (${scope})`,
    `${commandCount} bundled command${commandCount === 1 ? "" : "s"}`
  );

  const targetRootExists = fs.existsSync(targetRoot);
  const commandsDirExists = fs.existsSync(commandsDir);
  const scriptsDirExists = fs.existsSync(scriptsDir);

  printStatusLine(logger, ui, targetRootExists ? "ok" : "missing", `Cursor root: ${formatPath(targetRoot)}`);
  printStatusLine(
    logger,
    ui,
    commandsDirExists ? "ok" : "missing",
    `Commands directory: ${formatPath(commandsDir)}`
  );
  printStatusLine(
    logger,
    ui,
    scriptsDirExists ? "ok" : "info",
    scriptsDirExists
      ? `Scripts directory: ${formatPath(scriptsDir)}`
      : `Scripts directory not found yet: ${formatPath(scriptsDir)}`
  );

  logger.log("");
  printWrappedLine(
    logger,
    `Bundled commands: ${manifest.commands.map((command) => command.id).join(", ")}`,
    ui.contentWidth
  );
  printNextSteps(logger, ui, [`cursorx verify ${manifest.commands[0]?.id ?? "git-push"} --scope ${scope}`]);

  return targetRootExists && commandsDirExists;
}

export function verifySlashCommand({
  repoRoot,
  commandId,
  scope,
  repoPath = "",
  logger = console,
}) {
  const manifest = readManifest(repoRoot);
  const entry = getCommandEntry(manifest, commandId);

  if (!entry.scopes.includes(scope)) {
    throw new Error(`Command ${commandId} does not support scope ${scope}`);
  }

  const { targetRoot, commandsDir, scriptsDir } = resolveTargetPaths(scope, repoPath);
  const commandTarget = buildCommandTarget(targetRoot, entry);
  const scriptTargets = buildScriptTargets(targetRoot, entry);
  const ui = createCliUi();

  printCliHeader(
    logger,
    ui,
    `CursorX verify ${entry.id} (${scope})`,
    `Checking ${formatSlashCommand(entry)} in ${scope} scope`
  );

  let passed = true;

  const targetRootExists = fs.existsSync(targetRoot);
  printStatusLine(logger, ui, targetRootExists ? "ok" : "missing", `Cursor root: ${formatPath(targetRoot)}`);
  if (!targetRootExists) {
    passed = false;
  }

  const commandsDirExists = fs.existsSync(commandsDir);
  printStatusLine(
    logger,
    ui,
    commandsDirExists ? "ok" : "missing",
    `Commands directory: ${formatPath(commandsDir)}`
  );
  if (!commandsDirExists) {
    passed = false;
  }

  const commandInstalled = fs.existsSync(commandTarget);
  printStatusLine(
    logger,
    ui,
    commandInstalled ? "ok" : "missing",
    `Installed command file: ${formatPath(commandTarget)}`
  );
  if (!commandInstalled) {
    passed = false;
  }

  if (scriptTargets.length === 0) {
    printStatusLine(logger, ui, "info", "No companion scripts required.");
  } else {
    const scriptsDirExists = fs.existsSync(scriptsDir);
    printStatusLine(
      logger,
      ui,
      scriptsDirExists ? "ok" : "missing",
      `Scripts directory: ${formatPath(scriptsDir)}`
    );
    if (!scriptsDirExists) {
      passed = false;
    }

    for (const script of scriptTargets) {
      const scriptInstalled = fs.existsSync(script.target);
      printStatusLine(
        logger,
        ui,
        scriptInstalled ? "ok" : "missing",
        `Installed companion script: ${formatPath(script.target)}`
      );
      if (!scriptInstalled) {
        passed = false;
      }
    }
  }

  logger.log("");
  if (passed) {
    logger.log(ui.colors.success("Verification passed."));
    logVerificationHint(entry, logger);
    return true;
  }

  logger.log(ui.colors.danger("Verification failed."));
  printNextSteps(logger, ui, [
    buildInstallCommandExample(entry, scope, repoPath, scriptTargets.length > 0),
  ]);
  return false;
}
