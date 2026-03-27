import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const sourceDir = path.join(repoRoot, "slash-commands");
const targetDir = path.join(repoRoot, "packages", "cursorx-cli", "slash-commands");

function ensureDir(dirPath) {
  fs.mkdirSync(dirPath, { recursive: true });
}

function removeDirIfExists(dirPath) {
  if (fs.existsSync(dirPath)) {
    fs.rmSync(dirPath, { recursive: true, force: true });
  }
}

function copyRecursive(sourcePath, targetPath) {
  const stat = fs.statSync(sourcePath);

  if (stat.isDirectory()) {
    ensureDir(targetPath);
    for (const entry of fs.readdirSync(sourcePath, { withFileTypes: true })) {
      copyRecursive(path.join(sourcePath, entry.name), path.join(targetPath, entry.name));
    }
    return;
  }

  ensureDir(path.dirname(targetPath));
  fs.copyFileSync(sourcePath, targetPath);
}

function main() {
  if (!fs.existsSync(sourceDir)) {
    throw new Error(`Source slash-commands directory not found: ${sourceDir}`);
  }

  removeDirIfExists(targetDir);
  copyRecursive(sourceDir, targetDir);
  console.log(`Synced slash command data -> ${path.relative(repoRoot, targetDir).replaceAll("\\", "/")}`);
}

main();
