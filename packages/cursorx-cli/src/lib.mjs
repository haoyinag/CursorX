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

function logStatus(logger, level, message) {
  const prefixMap = {
    ok: "[OK]",
    missing: "[MISSING]",
    info: "[INFO]",
  };
  logger.log(`${prefixMap[level]} ${message}`);
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
  logger.log(`Installed ${entry.id} -> ${commandTarget}`);

  if (withScripts && Array.isArray(entry.scripts)) {
    for (const script of entry.scripts) {
      const scriptSource = path.join(repoRoot, script.source);
      const scriptTarget = path.join(targetRoot, "scripts", script.installAs);

      if (!fs.existsSync(scriptSource)) {
        throw new Error(`Missing companion script: ${path.relative(repoRoot, scriptSource)}`);
      }

      copyFile(scriptSource, scriptTarget);
      logger.log(`Installed script ${script.installAs} -> ${scriptTarget}`);
    }
  } else if (!withScripts && Array.isArray(entry.scripts) && entry.scripts.length > 0) {
    logger.warn(`Command ${entry.id} has companion scripts. Re-run with --with-scripts if needed.`);
  }

  logger.log(`Scope: ${scope}`);
  logger.log(`Cursor root: ${formatPath(targetRoot)}`);
  logVerificationHint(entry, logger);
}

export function listSlashCommands({ repoRoot, logger = console }) {
  const manifest = readManifest(repoRoot);
  logger.log("Available slash commands:");
  for (const command of manifest.commands) {
    logger.log(`- ${command.id}: ${command.summary}`);
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

  logger.log(`CursorX doctor (${scope})`);

  const targetRootExists = fs.existsSync(targetRoot);
  const commandsDirExists = fs.existsSync(commandsDir);
  const scriptsDirExists = fs.existsSync(scriptsDir);

  logStatus(logger, targetRootExists ? "ok" : "missing", `Cursor root: ${formatPath(targetRoot)}`);
  logStatus(logger, commandsDirExists ? "ok" : "missing", `Commands directory: ${formatPath(commandsDir)}`);
  logStatus(
    logger,
    scriptsDirExists ? "ok" : "info",
    scriptsDirExists
      ? `Scripts directory: ${formatPath(scriptsDir)}`
      : `Scripts directory not found yet: ${formatPath(scriptsDir)}`
  );

  logger.log(`Bundled commands: ${manifest.commands.map((command) => command.id).join(", ")}`);
  logger.log(`Try: cursorx verify ${manifest.commands[0]?.id ?? "git-push"} --scope ${scope}`);

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

  logger.log(`CursorX verify ${entry.id} (${scope})`);

  let passed = true;

  const targetRootExists = fs.existsSync(targetRoot);
  logStatus(logger, targetRootExists ? "ok" : "missing", `Cursor root: ${formatPath(targetRoot)}`);
  if (!targetRootExists) {
    passed = false;
  }

  const commandsDirExists = fs.existsSync(commandsDir);
  logStatus(logger, commandsDirExists ? "ok" : "missing", `Commands directory: ${formatPath(commandsDir)}`);
  if (!commandsDirExists) {
    passed = false;
  }

  const commandInstalled = fs.existsSync(commandTarget);
  logStatus(
    logger,
    commandInstalled ? "ok" : "missing",
    `Installed command file: ${formatPath(commandTarget)}`
  );
  if (!commandInstalled) {
    passed = false;
  }

  if (scriptTargets.length === 0) {
    logStatus(logger, "info", "No companion scripts required.");
  } else {
    const scriptsDirExists = fs.existsSync(scriptsDir);
    logStatus(logger, scriptsDirExists ? "ok" : "missing", `Scripts directory: ${formatPath(scriptsDir)}`);
    if (!scriptsDirExists) {
      passed = false;
    }

    for (const script of scriptTargets) {
      const scriptInstalled = fs.existsSync(script.target);
      logStatus(
        logger,
        scriptInstalled ? "ok" : "missing",
        `Installed companion script: ${formatPath(script.target)}`
      );
      if (!scriptInstalled) {
        passed = false;
      }
    }
  }

  if (passed) {
    logger.log("Verification passed.");
    logVerificationHint(entry, logger);
    return true;
  }

  logger.log("Verification failed.");
  logger.log(
    `Reinstall command: ${buildInstallCommandExample(entry, scope, repoPath, scriptTargets.length > 0)}`
  );
  return false;
}
