/**
 * 对当前 Git 仓库中的改动文件执行 eslint/stylelint 自动修复。
 * 优先使用本地安装的 CLI，其次尝试包管理器 exec 方式。
 */
import { execSync, spawnSync } from "node:child_process";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";

const cwd = process.cwd();
const repoRoot = getRepoRoot();

function run(command) {
  try {
    return execSync(command, {
      cwd: repoRoot ?? cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return "";
  }
}

function getRepoRoot() {
  try {
    return execSync("git rev-parse --show-toplevel", {
      cwd,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
  } catch {
    return null;
  }
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function isExecutableAvailable(command) {
  const result = spawnSync(command, ["--version"], {
    stdio: "ignore",
    shell: process.platform === "win32",
  });
  return result.status === 0;
}

function collectChangedFiles() {
  const set = new Set();
  const addLines = (output) => {
    for (const raw of output.split(/\r?\n/)) {
      const rel = raw.trim();
      if (!rel) {
        continue;
      }

      const normalized = rel.replace(/\\/g, "/");
      const absolute = path.resolve(repoRoot, normalized);

      if (!exists(absolute)) {
        continue;
      }

      const repoRelative = path.relative(repoRoot, absolute).replace(/\\/g, "/");

      if (repoRelative === "node_modules" || repoRelative.startsWith("node_modules/")) {
        continue;
      }

      if (repoRelative === "dist" || repoRelative.startsWith("dist/") || repoRelative.includes("/dist/")) {
        continue;
      }

      set.add(absolute);
    }
  };

  addLines(run("git diff --name-only"));
  addLines(run("git diff --cached --name-only"));
  addLines(run("git ls-files --others --exclude-standard"));

  return [...set];
}

function detectPackageManager() {
  const checks = [
    { lockfile: "pnpm-lock.yaml", command: "pnpm", args: ["exec"] },
    { lockfile: "yarn.lock", command: "yarn", args: [] },
    { lockfile: "package-lock.json", command: "npx", args: ["--no-install"] },
  ];

  for (const item of checks) {
    if (exists(path.join(repoRoot, item.lockfile)) && isExecutableAvailable(item.command)) {
      return item;
    }
  }

  return null;
}

function getLocalBinCandidates(toolName) {
  const ext = process.platform === "win32" ? ".cmd" : "";
  return [
    path.join(repoRoot, "node_modules", ".bin", `${toolName}${ext}`),
    path.join(repoRoot, "node_modules", toolName, "bin", `${toolName}.js`),
    path.join(repoRoot, "node_modules", toolName, "bin", `${toolName}.mjs`),
  ];
}

function spawnTool(command, args, useNode = false) {
  const finalArgs = useNode ? [command, ...args] : args;
  const executable = useNode ? process.execPath : command;
  const result = spawnSync(executable, finalArgs, {
    cwd: repoRoot,
    stdio: "inherit",
    env: process.env,
    shell: !useNode && process.platform === "win32" && executable.endsWith(".cmd"),
  });

  return result.status ?? 1;
}

function runLintTool(toolName, args) {
  for (const candidate of getLocalBinCandidates(toolName)) {
    if (!exists(candidate)) {
      continue;
    }

    const useNode = candidate.endsWith(".js") || candidate.endsWith(".mjs");
    return spawnTool(candidate, args, useNode);
  }

  const manager = detectPackageManager();
  if (manager) {
    const managerArgs =
      manager.command === "yarn"
        ? [toolName, ...args]
        : [...manager.args, toolName, ...args];
    return spawnTool(manager.command, managerArgs, false);
  }

  console.error(`[lint-fix-changed] 未找到 ${toolName} 的本地安装，也无法探测到可用的包管理器 exec。`);
  return 1;
}

function resolveScriptPathHint() {
  const globalScript = path.join(os.homedir(), ".cursor", "scripts", "lint-fix-changed.mjs");
  const projectScript = path.join(repoRoot, ".cursor", "scripts", "lint-fix-changed.mjs");

  if (exists(projectScript)) {
    return projectScript;
  }

  return globalScript;
}

function main() {
  if (!repoRoot) {
    console.error("[lint-fix-changed] 当前目录不是 Git 仓库。请在项目目录中执行。");
    process.exit(1);
  }

  const changed = collectChangedFiles();
  const eslintFiles = changed.filter((file) => /\.(mjs|cjs|js|jsx|ts|tsx|vue)$/i.test(file));
  const stylelintFiles = changed.filter((file) => /\.(css|scss|sass|less|vue)$/i.test(file));

  if (eslintFiles.length === 0 && stylelintFiles.length === 0) {
    console.log("[lint-fix-changed] 没有匹配的已更改文件。");
    process.exit(0);
  }

  console.log(`[lint-fix-changed] 仓库根目录: ${repoRoot}`);
  console.log(`[lint-fix-changed] 当前脚本建议安装位置: ${resolveScriptPathHint()}`);

  let exitCode = 0;

  if (eslintFiles.length > 0) {
    console.log(`[lint-fix-changed] eslint --fix (${eslintFiles.length} 个文件)`);
    const result = runLintTool("eslint", ["--fix", "--no-warn-ignored", ...eslintFiles]);
    if (result !== 0) {
      exitCode = result;
    }
  }

  if (stylelintFiles.length > 0) {
    console.log(`[lint-fix-changed] stylelint --fix (${stylelintFiles.length} 个文件)`);
    const result = runLintTool("stylelint", ["--fix", ...stylelintFiles]);
    if (result !== 0) {
      exitCode = result;
    }
  }

  process.exit(exitCode);
}

main();
