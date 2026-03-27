import path from "node:path";
import fs from "node:fs";
import { fileURLToPath } from "node:url";
import {
  installSlashCommand,
  listSlashCommands,
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
  console.log("CursorX CLI");
  console.log("");
  console.log("Package name: cursorx-cli");
  console.log("Binary name: cursorx");
  console.log("");
  console.log("Usage:");
  console.log("  cursorx list");
  console.log("  cursorx doctor [--scope <global|project>] [--repo <path>]");
  console.log("  cursorx install <command-id> --scope <global|project> [--repo <path>] [--with-scripts]");
  console.log("  cursorx verify <command-id> --scope <global|project> [--repo <path>]");
  console.log("");
  console.log("Examples:");
  console.log("  cursorx list");
  console.log("  cursorx doctor");
  console.log("  cursorx doctor --scope project --repo D:/work/code/my-repo");
  console.log("  cursorx install git-push --scope global");
  console.log("  cursorx install lint-fix --scope project --repo D:/work/code/my-repo --with-scripts");
  console.log("  cursorx verify git-push --scope global");
  console.log("  cursorx verify lint-fix --scope project --repo D:/work/code/my-repo");
  console.log("  npx cursorx-cli list");
  console.log("  npx cursorx-cli doctor");
  console.log("  npx cursorx-cli install git-push --scope global");
  console.log("  npx cursorx-cli verify git-push --scope global");
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

  console.error(`Unknown command: ${command}`);
  printHelp();
  return 1;
}
