import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, "..");
const commandsDir = path.join(rootDir, "commands");
const indexPath = path.join(commandsDir, "index.json");
const catalogPath = path.join(commandsDir, "catalog.md");

const errors = [];
const warnings = [];

function recordError(message) {
  errors.push(message);
}

function recordWarning(message) {
  warnings.push(message);
}

function readJson(filePath) {
  try {
    const raw = fs.readFileSync(filePath, "utf8");
    return JSON.parse(raw);
  } catch (error) {
    recordError(`无法解析 JSON: ${relative(filePath)} (${error.message})`);
    return null;
  }
}

function readText(filePath) {
  try {
    return fs.readFileSync(filePath, "utf8");
  } catch (error) {
    recordError(`无法读取文件: ${relative(filePath)} (${error.message})`);
    return null;
  }
}

function exists(filePath) {
  return fs.existsSync(filePath);
}

function relative(filePath) {
  return path.relative(rootDir, filePath).replaceAll("\\", "/");
}

function ensureString(value, label) {
  return typeof value === "string" && value.trim().length > 0
    ? value.trim()
    : recordError(`${label} 必须是非空字符串`);
}

function ensureArray(value, label) {
  if (Array.isArray(value) && value.length > 0) {
    return value;
  }

  recordError(`${label} 必须是非空数组`);
  return null;
}

function collectCommandFiles(categoryPaths) {
  const files = [];

  for (const categoryPath of categoryPaths) {
    const absoluteCategoryPath = path.join(rootDir, categoryPath);

    if (!exists(absoluteCategoryPath)) {
      continue;
    }

    const entries = fs.readdirSync(absoluteCategoryPath, { withFileTypes: true });

    for (const entry of entries) {
      if (!entry.isFile()) {
        continue;
      }

      if (!entry.name.endsWith(".json")) {
        continue;
      }

      files.push(path.join(absoluteCategoryPath, entry.name));
    }
  }

  return files;
}

function parseCatalogIds(markdown) {
  const ids = new Set();
  const headingRegex = /^###\s+`([^`]+)`/gm;
  let match;

  while ((match = headingRegex.exec(markdown)) !== null) {
    ids.add(match[1]);
  }

  return ids;
}

function validateRuntimeCommand(commandEntry, runtimeJson) {
  const runtimeLabel = `命令文件 ${commandEntry.path}`;

  ensureString(runtimeJson.title, `${runtimeLabel} 的 title`);
  ensureString(runtimeJson.description, `${runtimeLabel} 的 description`);
  ensureString(runtimeJson.command, `${runtimeLabel} 的 command`);
  ensureArray(runtimeJson.tags, `${runtimeLabel} 的 tags`);

  if (runtimeJson.when !== undefined && typeof runtimeJson.when !== "string") {
    recordError(`${runtimeLabel} 的 when 必须是字符串`);
  }

  if (runtimeJson.args !== undefined && typeof runtimeJson.args !== "object") {
    recordError(`${runtimeLabel} 的 args 必须是对象`);
  }

  if (runtimeJson.title !== commandEntry.title) {
    recordError(`${runtimeLabel} 的 title 与 index.json 中的 title 不一致`);
  }

  const runtimeTags = Array.isArray(runtimeJson.tags) ? runtimeJson.tags : [];
  const indexTags = Array.isArray(commandEntry.tags) ? commandEntry.tags : [];

  for (const tag of runtimeTags) {
    if (!indexTags.includes(tag)) {
      recordWarning(`${runtimeLabel} 中的 tag "${tag}" 未在 index.json 中声明`);
    }
  }
}

function main() {
  if (!exists(indexPath)) {
    recordError("缺少 commands/index.json");
  }

  if (!exists(catalogPath)) {
    recordError("缺少 commands/catalog.md");
  }

  if (errors.length > 0) {
    printAndExit();
    return;
  }

  const indexJson = readJson(indexPath);
  const catalogText = readText(catalogPath);

  if (!indexJson || catalogText === null) {
    printAndExit();
    return;
  }

  ensureArray(indexJson.categories, "commands/index.json 的 categories");
  ensureArray(indexJson.commands, "commands/index.json 的 commands");

  if (errors.length > 0) {
    printAndExit();
    return;
  }

  const categoryIds = new Set();
  const categoryPaths = [];

  for (const category of indexJson.categories) {
    const id = ensureString(category.id, "category.id");
    const title = ensureString(category.title, "category.title");
    const categoryPath = ensureString(category.path, "category.path");
    const description = ensureString(category.description, "category.description");

    if (!id || !title || !categoryPath || !description) {
      continue;
    }

    if (categoryIds.has(id)) {
      recordError(`重复的分类 id: ${id}`);
      continue;
    }

    categoryIds.add(id);
    categoryPaths.push(categoryPath);

    const absoluteCategoryPath = path.join(rootDir, categoryPath);

    if (!exists(absoluteCategoryPath)) {
      recordError(`分类目录不存在: ${categoryPath}`);
    }
  }

  const commandIds = new Set();
  const indexedPaths = new Set();
  const catalogIds = parseCatalogIds(catalogText);

  for (const commandEntry of indexJson.commands) {
    const id = ensureString(commandEntry.id, "command.id");
    const title = ensureString(commandEntry.title, "command.title");
    const category = ensureString(commandEntry.category, "command.category");
    const commandPath = ensureString(commandEntry.path, "command.path");
    const summary = ensureString(commandEntry.summary, "command.summary");
    const docPath = ensureString(commandEntry.docPath, "command.docPath");
    const tags = ensureArray(commandEntry.tags, `命令 ${id ?? "<unknown>"} 的 tags`);
    const platform = ensureArray(commandEntry.platform, `命令 ${id ?? "<unknown>"} 的 platform`);
    const requires = ensureArray(commandEntry.requires, `命令 ${id ?? "<unknown>"} 的 requires`);

    if (!id || !title || !category || !commandPath || !summary || !docPath || !tags || !platform || !requires) {
      continue;
    }

    if (commandIds.has(id)) {
      recordError(`重复的命令 id: ${id}`);
      continue;
    }

    commandIds.add(id);
    indexedPaths.add(commandPath);

    if (!categoryIds.has(category)) {
      recordError(`命令 ${id} 使用了未定义的分类: ${category}`);
    }

    const absoluteCommandPath = path.join(rootDir, commandPath);
    const absoluteDocPath = path.join(rootDir, docPath);

    if (!exists(absoluteCommandPath)) {
      recordError(`index.json 中引用的命令文件不存在: ${commandPath}`);
      continue;
    }

    if (!exists(absoluteDocPath)) {
      recordError(`命令 ${id} 的 docPath 不存在: ${docPath}`);
    }

    const runtimeJson = readJson(absoluteCommandPath);
    if (runtimeJson) {
      validateRuntimeCommand(commandEntry, runtimeJson);
    }

    if (!catalogIds.has(id)) {
      recordError(`catalog.md 中缺少命令条目: ${id}`);
    }
  }

  const actualCommandFiles = collectCommandFiles(categoryPaths);

  for (const commandFile of actualCommandFiles) {
    const rel = relative(commandFile);
    if (!indexedPaths.has(rel)) {
      recordError(`命令文件未在 index.json 中登记: ${rel}`);
    }
  }

  printAndExit(actualCommandFiles.length, indexJson.commands.length);
}

function printAndExit(actualFileCount = 0, indexedCount = 0) {
  if (errors.length === 0 && warnings.length === 0) {
    console.log(
      `Commands validation passed. Indexed ${indexedCount} commands across ${actualFileCount} files.`
    );
    process.exit(0);
  }

  for (const error of errors) {
    console.error(`ERROR: ${error}`);
  }

  for (const warning of warnings) {
    console.warn(`WARN: ${warning}`);
  }

  if (errors.length === 0) {
    console.log(
      `Commands validation passed with warnings. Indexed ${indexedCount} commands across ${actualFileCount} files.`
    );
    process.exit(0);
  }

  console.error(
    `Commands validation failed with ${errors.length} error(s) and ${warnings.length} warning(s).`
  );
  process.exit(1);
}

main();
