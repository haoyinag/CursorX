import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";
import { installSlashCommand, listSlashCommands } from "../packages/cursorx-cli/src/lib.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");

function parseArgs(argv) {
  const result = {
    command: "",
    scope: "",
    repo: "",
    withScripts: false,
    list: false,
  };

  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];

    if (arg === "--command") {
      result.command = argv[i + 1] ?? "";
      i += 1;
      continue;
    }

    if (arg === "--scope") {
      result.scope = argv[i + 1] ?? "";
      i += 1;
      continue;
    }

    if (arg === "--repo") {
      result.repo = argv[i + 1] ?? "";
      i += 1;
      continue;
    }

    if (arg === "--with-scripts") {
      result.withScripts = true;
      continue;
    }

    if (arg === "--list") {
      result.list = true;
    }
  }

  return result;
}

function printUsage() {
  console.log("Usage:");
  console.log("  node scripts/install-slash-command.mjs --list");
  console.log("  node scripts/install-slash-command.mjs --command git-push --scope global");
  console.log("  node scripts/install-slash-command.mjs --command lint-fix --scope project --repo D:/work/code/my-repo --with-scripts");
}

function main() {
  const args = parseArgs(process.argv.slice(2));

  if (args.list) {
    listSlashCommands({ repoRoot: rootDir });
    return;
  }

  if (!args.command || !args.scope) {
    printUsage();
    process.exit(1);
  }
  installSlashCommand({
    repoRoot: rootDir,
    commandId: args.command,
    scope: args.scope,
    repoPath: args.repo,
    withScripts: args.withScripts,
  });
}

try {
  main();
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
