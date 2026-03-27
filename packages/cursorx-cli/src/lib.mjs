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
  const entry = manifest.commands.find((command) => command.id === commandId);

  if (!entry) {
    throw new Error(`Unknown command: ${commandId}`);
  }

  if (!entry.scopes.includes(scope)) {
    throw new Error(`Command ${commandId} does not support scope ${scope}`);
  }

  const targetRoot = resolveTargetRoot(scope, repoPath);
  const commandSource = path.join(repoRoot, entry.path);
  const commandTarget = path.join(targetRoot, "commands", entry.installAs);

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
  logger.log(`Cursor root: ${targetRoot}`);
}

export function listSlashCommands({ repoRoot, logger = console }) {
  const manifest = readManifest(repoRoot);
  logger.log("Available slash commands:");
  for (const command of manifest.commands) {
    logger.log(`- ${command.id}: ${command.summary}`);
  }
}
