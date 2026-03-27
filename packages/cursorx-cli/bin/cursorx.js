#!/usr/bin/env node
import { runCli } from "../src/cli.mjs";

try {
  const exitCode = runCli(process.argv.slice(2));
  process.exit(exitCode);
} catch (error) {
  console.error(error.message);
  process.exit(1);
}
