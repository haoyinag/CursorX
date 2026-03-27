import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import {
  createTerminalUi,
  installSlashCommand,
  listSlashCommands,
  printTerminalError,
  printTerminalHeader,
  printTerminalNextSteps,
  printTerminalParagraph,
  runDoctor,
  verifySlashCommand,
} from "./lib.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const packageRoot = path.resolve(__dirname, "..");
const packageJson = JSON.parse(
  fs.readFileSync(path.join(packageRoot, "package.json"), "utf8")
);

function printHelp() {
  const ui = createTerminalUi();

  printTerminalHeader(console, ui, "CursorX CLI", `Package: cursorx-cli  Version: ${packageJson.version}`);
  printTerminalParagraph(console, ui, "Binary: cursorx");
  console.log("");
  console.log("Usage:");
  console.log("  cursorx list");
  console.log("  cursorx doctor [--scope <global|project>] [--repo <path>]");
  console.log("  cursorx install <command-id> --scope <global|project> [--repo <path>] [--with-scripts]");
  console.log("  cursorx verify <command-id> --scope <global|project> [--repo <path>]");
  printTerminalNextSteps(console, ui, [
    "cursorx list",
    "cursorx doctor",
    "cursorx install git-push --scope global",
    "npx cursorx-cli verify git-push --scope global",
  ]);
}

function printCliError(title, detail = "") {
  const ui = createTerminalUi();
  printTerminalError(console.error, ui, title, detail, ["cursorx --help"]);
}

function parseScopedArgs(args, startIndex = 0) {
  const result = {
    scope: "",
    repoPath: "",
    withScripts: false,
  };

  for (let index = startIndex; index < args.length; index += 1) {
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

function parseInstallArgs(args) {
  return {
    commandId: args[0] ?? "",
    ...parseScopedArgs(args, 1),
  };
}

function parseVerifyArgs(args) {
  return {
    commandId: args[0] ?? "",
    ...parseScopedArgs(args, 1),
  };
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

  if (command === "doctor") {
    const parsed = parseScopedArgs(rest);
    const success = runDoctor({
      repoRoot: packageRoot,
      scope: parsed.scope || "global",
      repoPath: parsed.repoPath,
    });
    return success ? 0 : 1;
  }

  if (command === "install") {
    const parsed = parseInstallArgs(rest);
    if (!parsed.commandId || !parsed.scope) {
      printCliError("Missing required arguments.", "Usage: cursorx install <command-id> --scope <global|project> [--repo <path>] [--with-scripts]");
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

  if (command === "verify") {
    const parsed = parseVerifyArgs(rest);
    if (!parsed.commandId || !parsed.scope) {
      printCliError("Missing required arguments.", "Usage: cursorx verify <command-id> --scope <global|project> [--repo <path>]");
      printHelp();
      return 1;
    }

    const success = verifySlashCommand({
      repoRoot: packageRoot,
      commandId: parsed.commandId,
      scope: parsed.scope,
      repoPath: parsed.repoPath,
    });
    return success ? 0 : 1;
  }

  printCliError("Unknown command.", `Received: ${command}`);
  printHelp();
  return 1;
}
