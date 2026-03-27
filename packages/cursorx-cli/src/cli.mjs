import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import { installSlashCommand, listSlashCommands } from "./lib.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const packageJson = JSON.parse(
  fs.readFileSync(path.join(packageRoot, "package.json"), "utf8")
);

function printHelp() {
  console.log("CursorX CLI");
  console.log("");
  console.log("Usage:");
  console.log("  cursorx list");
  console.log("  cursorx install <command-id> --scope <global|project> [--repo <path>] [--with-scripts]");
  console.log("");
  console.log("Examples:");
  console.log("  cursorx list");
  console.log("  cursorx install git-push --scope global");
  console.log("  cursorx install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts");
}

function parseInstallArgs(args) {
  const result = {
    commandId: args[0] ?? "",
    scope: "",
    repoPath: "",
    withScripts: false,
  };

  for (let index = 1; index < args.length; index += 1) {
    const arg = args[index];

    if (arg === "--scope") {
      result.scope = args[index + 1] ?? "";
      index += 1;
      continue;
    }

    if (arg === "--repo") {
      result.repoPath = args[index + 1] ?? "";
      index += 1;
      continue;
    }

    if (arg === "--with-scripts") {
      result.withScripts = true;
    }
  }

  return result;
}

export function runCli(argv) {
  const [command, ...rest] = argv;

  if (command === "--version" || command === "-v") {
    console.log(packageJson.version);
    return 0;
  }

  if (!command || command === "help" || command === "--help" || command === "-h") {
    printHelp();
    return 0;
  }

  if (command === "list") {
    listSlashCommands({ repoRoot: packageRoot });
    return 0;
  }

  if (command === "install") {
    const parsed = parseInstallArgs(rest);
    if (!parsed.commandId || !parsed.scope) {
      printHelp();
      return 1;
    }

    installSlashCommand({
      repoRoot: packageRoot,
      commandId: parsed.commandId,
      scope: parsed.scope,
      repoPath: parsed.repoPath,
      withScripts: parsed.withScripts,
    });
    return 0;
  }

  console.error(`Unknown command: ${command}`);
  printHelp();
  return 1;
}
