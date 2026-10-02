// src/index.ts
var FONT_REGISTRY = {
  // Self-hosted via geist/font (default brand faces, loaded by the app shell)
  geist: "--font-geist-sans",
  "geist sans": "--font-geist-sans",
  "geist mono": "--font-geist-mono",
  // Self-hosted via next/font/local (see ./next-cjk). MiSans is the
  // Simplified-Chinese face — CJK only via unicode-range, so it cannot take
  // Latin away from Geist. DM Sans is the Latin display/heading face.
  misans: "--font-misans",
  "dm sans display": "--font-dm-sans",
  // Self-hosted via next/font/local over @fontsource-variable/* (see ./next)
  inter: "--font-inter",
  "inter tight": "--font-reg-inter-tight",
  "space grotesk": "--font-space-grotesk",
  "playfair display": "--font-playfair-display",
  fraunces: "--font-reg-fraunces",
  "source serif 4": "--font-reg-source-serif-4",
  "jetbrains mono": "--font-jetbrains-mono",
  manrope: "--font-reg-manrope",
  sora: "--font-reg-sora",
  "work sans": "--font-reg-work-sans",
  "dm sans": "--font-reg-dm-sans",
  "plus jakarta sans": "--font-reg-plus-jakarta-sans",
  outfit: "--font-reg-outfit",
  figtree: "--font-reg-figtree",
  montserrat: "--font-reg-montserrat",
  lexend: "--font-reg-lexend",
  "fira code": "--font-reg-fira-code",
  "roboto mono": "--font-reg-roboto-mono",
  "source code pro": "--font-reg-source-code-pro"
};
function normalizeFamily(name) {
  return name.replace(/['"]/g, "").trim().toLowerCase();
}
function primaryFamily(stack) {
  return normalizeFamily(stack.split(",")[0] ?? "");
}
function resolveRegistryVar(stack) {
  return FONT_REGISTRY[primaryFamily(stack)];
}
function withRegistryFont(stack) {
  if (!stack) return stack;
  const variable = resolveRegistryVar(stack);
  return variable ? `var(${variable}), ${stack}` : stack;
}
function withNearestRegistryFont(stack) {
  if (!stack) return stack;
  for (const token of stack.split(",")) {
    const variable = FONT_REGISTRY[normalizeFamily(token)];
    if (variable) return `var(${variable}), ${stack}`;
  }
  return stack;
}
export {
  FONT_REGISTRY,
  primaryFamily,
  resolveRegistryVar,
  withNearestRegistryFont,
  withRegistryFont
};
//# sourceMappingURL=index.js.map