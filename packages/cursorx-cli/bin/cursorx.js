#!/usr/bin/env node
import { runCli } from "../src/cli.mjs";
import { createTerminalUi, printTerminalError } from "../src/lib.mjs";

try {
  const exitCode = runCli(process.argv.slice(2));
  process.exit(exitCode);
} catch (error) {
  const ui = createTerminalUi();
  printTerminalError(
    console.error,
    ui,
    "CursorX CLI failed.",
    error instanceof Error ? error.message : String(error),
    ["cursorx --help"]
  );
  process.exit(1);
}
