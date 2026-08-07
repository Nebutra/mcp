import { existsSync, readFileSync } from 'fs';
import { resolve, join } from 'path';

// src/agent/index.ts
function resolveAgentContractPaths(options = {}) {
  const manifestPath = options.manifestPath ? resolve(options.manifestPath) : join(
    resolve(options.root ?? process.cwd()),
    "apps",
    "design-docs",
    "public",
    "agent-manifest.json"
  );
  return {
    manifestPath,
    componentDir: join(manifestPath, "..", "agent", "components")
  };
}
function normalizeAgentComponentName(name) {
  return name.trim().toLowerCase();
}
function assertSafeAgentComponentName(name) {
  const normalized = normalizeAgentComponentName(name);
  if (!/^[a-z0-9-]+$/.test(normalized)) {
    throw new Error(
      `Invalid UI component name "${name}". Use a registry kebab-case id such as "button".`
    );
  }
  return normalized;
}
function loadAgentManifest(options = {}) {
  const { manifestPath } = resolveAgentContractPaths(options);
  if (!existsSync(manifestPath)) {
    throw new Error(
      `Missing Nebutra UI agent manifest at ${manifestPath}. Run pnpm --filter @nebutra/design-docs build:registry.`
    );
  }
  return JSON.parse(readFileSync(manifestPath, "utf8"));
}
function loadAgentComponentContract(name, options = {}) {
  const safeName = assertSafeAgentComponentName(name);
  const { componentDir } = resolveAgentContractPaths(options);
  const componentPath = join(componentDir, `${safeName}.json`);
  if (!existsSync(componentPath)) {
    throw new Error(`UI component contract not found: ${safeName}`);
  }
  return JSON.parse(readFileSync(componentPath, "utf8"));
}
function findAgentComponent(manifest, name) {
  const safeName = normalizeAgentComponentName(name);
  return manifest.components.find((component) => component.name === safeName);
}
function searchAgentComponents(manifest, query = "", options = {}) {
  const normalizedQuery = query.trim().toLowerCase();
  const limit = clampInteger(options.limit ?? 20, 1, 100);
  const offset = clampInteger(options.offset ?? 0, 0, Number.MAX_SAFE_INTEGER);
  const tag = options.tag?.trim().toLowerCase();
  const scored = manifest.components.filter((component) => {
    if (options.status && component.status !== options.status) return false;
    if (options.maturity && component.maturity !== options.maturity) return false;
    if (tag && !component.tags.includes(tag)) return false;
    if (!normalizedQuery) return true;
    return searchableText(component).includes(normalizedQuery);
  }).map((component) => ({ component, score: scoreComponent(component, normalizedQuery) })).sort((a, b) => b.score - a.score || a.component.name.localeCompare(b.component.name)).map(({ component }) => component);
  const items = scored.slice(offset, offset + limit);
  const nextOffset = offset + items.length;
  return {
    query,
    total: scored.length,
    count: items.length,
    offset,
    limit,
    hasMore: nextOffset < scored.length,
    ...nextOffset < scored.length && { nextOffset },
    items
  };
}
function validateAgentComponent(contract) {
  const errors = [];
  const warnings = [];
  if (!contract.evidence.source) errors.push("Missing source evidence.");
  if (!contract.evidence.docs) errors.push("Missing docs evidence.");
  if (!contract.evidence.registry) errors.push("Missing registry evidence.");
  if ((contract.status === "stable" || contract.maturity === "canonical") && !contract.evidence.storybook) {
    errors.push("Stable/canonical components must have Storybook evidence.");
  }
  if (!contract.evidence.tokens && contract.package === "@nebutra/ui") {
    warnings.push(
      "No token evidence was detected; confirm this primitive intentionally has no CSS variables."
    );
  }
  if (contract.migration.requiredForBreakingChanges && contract.migration.hints.length === 0) {
    warnings.push(
      "Breaking-change migration policy is enabled but no migration hints are present."
    );
  }
  return {
    name: contract.name,
    valid: errors.length === 0,
    errors,
    warnings,
    evidence: contract.evidence,
    migration: contract.migration
  };
}
function searchableText(component) {
  return [
    component.name,
    component.title,
    component.description,
    component.status,
    component.maturity,
    component.layer,
    component.source,
    ...component.tags
  ].join(" ").toLowerCase();
}
function scoreComponent(component, query) {
  if (!query) return component.maturity === "canonical" ? 20 : 10;
  if (component.name === query) return 100;
  if (component.name.startsWith(query)) return 80;
  if (component.title.toLowerCase().startsWith(query)) return 70;
  if (component.tags.includes(query)) return 60;
  if (component.name.includes(query)) return 50;
  if (component.title.toLowerCase().includes(query)) return 40;
  if (component.description.toLowerCase().includes(query)) return 20;
  return 1;
}
function clampInteger(value, min, max) {
  if (!Number.isFinite(value)) return min;
  return Math.min(Math.max(Math.trunc(value), min), max);
}

export { assertSafeAgentComponentName, findAgentComponent, loadAgentComponentContract, loadAgentManifest, normalizeAgentComponentName, resolveAgentContractPaths, searchAgentComponents, validateAgentComponent };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map