// src/preset/knobs.ts
var PRESET_BASES = [
  "factory",
  "linear",
  "gsap",
  "notion",
  "raycast",
  "stripe",
  "vanta",
  "vercel",
  "cosmos"
];
var PRESET_NEUTRALS = ["base", "cool", "neutral", "warm"];
var PRESET_RADII = ["base", "none", "sm", "md", "lg", "full"];
var PRESET_DENSITIES = ["base", "compact", "comfortable", "spacious"];
var PRESET_SANS = [
  "base",
  "Geist",
  "Inter",
  "Inter Tight",
  "DM Sans",
  "Manrope",
  "Plus Jakarta Sans",
  "Figtree",
  "Work Sans",
  "Space Grotesk",
  "Outfit",
  "Sora",
  "Lexend",
  "Montserrat"
];
var PRESET_HEADINGS = [
  "base",
  "sans",
  "DM Sans",
  "Inter Tight",
  "Space Grotesk",
  "Sora",
  "Outfit",
  "Manrope",
  "Playfair Display",
  "Fraunces",
  "Source Serif 4"
];
var PRESET_MONOS = [
  "base",
  "Geist Mono",
  "JetBrains Mono",
  "Fira Code",
  "Roboto Mono",
  "Source Code Pro"
];
var PRESET_WEIGHTS = ["base", 400, 500, 600, 700];
var PRESET_MODES = ["base", "light", "dark"];
var RADIUS_VALUES = {
  none: { button: "0px", card: "0px", badge: "0px", input: "0px", pill: "0px" },
  sm: { button: "4px", card: "6px", badge: "4px", input: "4px", pill: "9999px" },
  md: { button: "6px", card: "10px", badge: "6px", input: "6px", pill: "9999px" },
  lg: { button: "10px", card: "16px", badge: "8px", input: "10px", pill: "9999px" },
  full: { button: "9999px", card: "20px", badge: "9999px", input: "9999px", pill: "9999px" }
};
var NEUTRAL_TINTS = {
  cool: { h: 220, s: 9 },
  neutral: { h: 0, s: 0 },
  warm: { h: 35, s: 9 }
};

// src/preset/codec.ts
var PRESET_CODE_VERSION = 1;
var ALPHABET = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
var PresetCodeError = class extends Error {
  constructor(message) {
    super(message);
    this.name = "PresetCodeError";
  }
};
var FIELDS = {
  version: { bits: 3 },
  base: { bits: 5, list: PRESET_BASES },
  neutral: { bits: 2, list: PRESET_NEUTRALS },
  radius: { bits: 3, list: PRESET_RADII },
  density: { bits: 2, list: PRESET_DENSITIES },
  sans: { bits: 4, list: PRESET_SANS },
  heading: { bits: 4, list: PRESET_HEADINGS },
  mono: { bits: 3, list: PRESET_MONOS },
  headingWeight: { bits: 3, list: PRESET_WEIGHTS },
  mode: { bits: 2, list: PRESET_MODES },
  hasColor: { bits: 1 },
  color: { bits: 24 },
  tintLogo: { bits: 1 }
};
var ORDER = Object.keys(FIELDS);
for (const name of ORDER) {
  const field = FIELDS[name];
  if (field.list && field.list.length > 2 ** field.bits) {
    throw new Error(`preset knob "${name}" outgrew its ${field.bits} bits`);
  }
}
var HEX_RE = /^#[0-9a-f]{6}$/i;
function indexOf(name, value) {
  const list = FIELDS[name].list;
  if (!list) throw new Error(`"${name}" is not a list knob`);
  const i = list.indexOf(value ?? "base");
  if (i < 0) throw new PresetCodeError(`Unknown ${name}: ${String(value)}`);
  return i;
}
function encodePreset(preset) {
  const values = {
    version: PRESET_CODE_VERSION,
    base: indexOf("base", preset.base),
    neutral: indexOf("neutral", preset.neutral),
    radius: indexOf("radius", preset.radius),
    density: indexOf("density", preset.density),
    sans: indexOf("sans", preset.sans),
    heading: indexOf("heading", preset.heading),
    mono: indexOf("mono", preset.mono),
    headingWeight: indexOf("headingWeight", preset.headingWeight),
    mode: indexOf("mode", preset.mode),
    hasColor: preset.brandColor ? 1 : 0,
    color: 0,
    tintLogo: preset.tintLogo ? 1 : 0
  };
  if (preset.brandColor) {
    if (!HEX_RE.test(preset.brandColor)) {
      throw new PresetCodeError(`Brand colour must be #rrggbb, got ${preset.brandColor}`);
    }
    values.color = Number.parseInt(preset.brandColor.slice(1), 16);
  }
  let n = 0n;
  let shift = 0n;
  for (const name of ORDER) {
    n |= BigInt(values[name]) << shift;
    shift += BigInt(FIELDS[name].bits);
  }
  let out = "";
  while (n > 0n) {
    out = ALPHABET[Number(n % 62n)] + out;
    n /= 62n;
  }
  return out;
}
function decodePreset(code) {
  if (!/^[0-9a-zA-Z]{1,12}$/.test(code)) {
    throw new PresetCodeError(`"${code}" is not a preset code`);
  }
  let n = 0n;
  for (const ch of code) n = n * 62n + BigInt(ALPHABET.indexOf(ch));
  const values = {};
  for (const name of ORDER) {
    const bits = BigInt(FIELDS[name].bits);
    values[name] = Number(n & (1n << bits) - 1n);
    n >>= bits;
  }
  if (n !== 0n) throw new PresetCodeError(`"${code}" is longer than any preset`);
  if (values.version !== PRESET_CODE_VERSION) {
    throw new PresetCodeError(
      `"${code}" is preset format v${values.version}; this Sailor reads v${PRESET_CODE_VERSION}. Upgrade @nebutra/tokens.`
    );
  }
  const pick = (name) => {
    const list = FIELDS[name].list;
    const value = list[values[name]];
    if (value === void 0) throw new PresetCodeError(`"${code}" names an unknown ${name}`);
    return value;
  };
  const preset = { base: pick("base") };
  const optional = [
    "neutral",
    "radius",
    "density",
    "sans",
    "heading",
    "mono",
    "headingWeight",
    "mode"
  ];
  for (const name of optional) {
    const value = pick(name);
    if (value !== "base") preset[name] = value;
  }
  if (values.tintLogo) preset.tintLogo = true;
  if (values.hasColor) {
    preset.brandColor = `#${values.color.toString(16).padStart(6, "0")}`;
  }
  return preset;
}
function parsePreset(input) {
  const value = input.trim();
  if (PRESET_BASES.includes(value)) {
    return { base: value };
  }
  return decodePreset(value);
}

// src/brand-package/hex-to-hsl.ts
function hexToHslChannels(hex) {
  let h = hex.trim().replace(/^#/, "");
  if (h.length === 3) {
    h = h.split("").map((c) => c + c).join("");
  }
  if (h.length !== 6 || !/^[0-9a-fA-F]+$/.test(h)) {
    throw new Error(`Invalid hex color: ${hex}`);
  }
  const r = Number.parseInt(h.slice(0, 2), 16) / 255;
  const g = Number.parseInt(h.slice(2, 4), 16) / 255;
  const b = Number.parseInt(h.slice(4, 6), 16) / 255;
  return srgbToHslChannels(r, g, b);
}
function srgbToHslChannels(r, g, b) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let s = 0;
  let hue = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        hue = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        hue = (b - r) / d + 2;
        break;
      default:
        hue = (r - g) / d + 4;
    }
    hue /= 6;
  }
  const H = Math.round(hue * 360);
  const S = Math.round(s * 100);
  const L = Math.round(l * 100);
  return `${H} ${S}% ${L}%`;
}
var HSL_CHANNELS_RE = /^(\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%$/;
function colorToHslChannels(color) {
  const t = color.trim();
  if (!t) throw new Error("Empty color");
  const channels = t.match(HSL_CHANNELS_RE);
  if (channels) {
    return `${Math.round(Number(channels[1]))} ${Math.round(Number(channels[2]))}% ${Math.round(Number(channels[3]))}%`;
  }
  const hslPrefix = t.match(/^hsla?\(/i);
  if (hslPrefix) {
    const inner = t.slice(hslPrefix[0].length).split(")")[0] ?? "";
    const nums = inner.match(/[\d.]+/g) ?? [];
    if (nums.length >= 3) {
      return `${Math.round(Number(nums[0]))} ${Math.round(Number(nums[1]))}% ${Math.round(Number(nums[2]))}%`;
    }
  }
  const rgbPrefix = t.match(/^rgba?\(/i);
  if (rgbPrefix) {
    const inner = t.slice(rgbPrefix[0].length).split(")")[0] ?? "";
    const nums = inner.match(/[\d.]+/g) ?? [];
    if (nums.length >= 3) {
      return srgbToHslChannels(Number(nums[0]) / 255, Number(nums[1]) / 255, Number(nums[2]) / 255);
    }
  }
  if (t.startsWith("#") || /^[0-9a-fA-F]{3,8}$/.test(t)) {
    return hexToHslChannels(t.startsWith("#") ? t : `#${t}`);
  }
  throw new Error(`Unsupported color: ${color}`);
}
function tryHexToHsl(hex, fallback) {
  return tryColorToHsl(hex, fallback);
}
function tryColorToHsl(color, fallback) {
  if (!color) return fallback;
  try {
    return colorToHslChannels(color);
  } catch {
    return fallback;
  }
}

// src/brand-package/normalize.ts
var NONE = "0 0 #0000";
var KEY_SHADOW = "rgba(255, 255, 255, 0.05) 0px 1px 0px 0px inset, rgba(255, 255, 255, 0.25) 0px 0px 0px 1px, rgba(0, 0, 0, 0.2) 0px -1px 0px 0px inset";
var HAIRLINE_SHADOW = "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0px 0px 0px 1px";
var SOFT_CARD = "0 1px 2px 0 rgb(0 0 0 / 0.05)";
var SOFT_CONTROL = "0 1px 2px 0 rgb(0 0 0 / 0.04)";
var SOFT_RAISED = "0 4px 6px -1px rgb(0 0 0 / 0.1)";
function asChannels(value) {
  if (value == null || value === "") return void 0;
  const v = value.trim();
  if (v.startsWith("#")) return tryHexToHsl(v, "0 0% 50%");
  return v;
}
function elevationPresetToTokens(preset, cardShadow) {
  switch (preset) {
    case "none":
      return { card: NONE, control: NONE, raised: NONE };
    case "key":
      return {
        card: cardShadow ?? KEY_SHADOW,
        control: NONE,
        raised: cardShadow ?? KEY_SHADOW
      };
    case "hairline":
      return {
        card: cardShadow ?? HAIRLINE_SHADOW,
        control: NONE,
        raised: cardShadow ?? HAIRLINE_SHADOW
      };
    case "raised":
      return { card: SOFT_RAISED, control: SOFT_CONTROL, raised: SOFT_RAISED };
    default:
      return { card: SOFT_CARD, control: SOFT_CONTROL, raised: SOFT_RAISED };
  }
}
function rolesFromSemantic(s, brandMark) {
  const roles = {
    canvas: s.background,
    canvasForeground: s.foreground,
    surface: s.card,
    surfaceForeground: s.cardForeground,
    action: s.primary,
    actionForeground: s.primaryForeground,
    quiet: s.secondary,
    quietForeground: s.secondaryForeground,
    muted: s.muted,
    mutedForeground: s.mutedForeground,
    border: s.border,
    ring: s.ring,
    destructive: s.destructive,
    destructiveForeground: s.destructiveForeground
  };
  if (s.input) roles.input = s.input;
  const brand = asChannels(brandMark?.brand);
  if (brand) roles.brand = brand;
  const brandFg = asChannels(brandMark?.brandForeground);
  if (brandFg) roles.brandForeground = brandFg;
  if (s.success) roles.success = s.success;
  if (s.successForeground) roles.successForeground = s.successForeground;
  if (s.warning) roles.warning = s.warning;
  if (s.warningForeground) roles.warningForeground = s.warningForeground;
  if (s.info) roles.info = s.info;
  if (s.infoForeground) roles.infoForeground = s.infoForeground;
  return roles;
}
function semanticFromRoles(r) {
  const accent = r.brand ?? r.quiet;
  const accentFg = r.brandForeground ?? r.quietForeground;
  const semantic = {
    background: r.canvas,
    foreground: r.canvasForeground,
    card: r.surface,
    cardForeground: r.surfaceForeground,
    popover: r.surface,
    popoverForeground: r.surfaceForeground,
    primary: r.action,
    primaryForeground: r.actionForeground,
    secondary: r.quiet,
    secondaryForeground: r.quietForeground,
    muted: r.muted,
    mutedForeground: r.mutedForeground,
    accent,
    accentForeground: accentFg,
    destructive: r.destructive,
    destructiveForeground: r.destructiveForeground,
    border: r.border,
    ring: r.ring
  };
  if (r.input) semantic.input = r.input;
  if (r.success) semantic.success = r.success;
  if (r.successForeground) semantic.successForeground = r.successForeground;
  if (r.warning) semantic.warning = r.warning;
  if (r.warningForeground) semantic.warningForeground = r.warningForeground;
  if (r.info) semantic.info = r.info;
  if (r.infoForeground) semantic.infoForeground = r.infoForeground;
  return semantic;
}
function normalizeRadii(recipe) {
  const button = recipe.radii?.button ?? recipe.buttonRadius ?? "0.375rem";
  const card = recipe.radii?.card ?? recipe.cardRadius ?? "0.75rem";
  const radii = {
    button,
    card,
    badge: recipe.radii?.badge ?? recipe.badgeRadius ?? "9999px",
    input: recipe.radii?.input ?? recipe.inputRadius ?? button,
    pill: recipe.radii?.pill ?? "9999px"
  };
  return radii;
}
function normalizeElevation(recipe) {
  if (recipe.elevationTokens?.card) {
    const elev = { card: recipe.elevationTokens.card };
    elev.control = recipe.elevationTokens.control ?? NONE;
    elev.raised = recipe.elevationTokens.raised ?? recipe.elevationTokens.card;
    return elev;
  }
  return elevationPresetToTokens(recipe.elevation, recipe.cardShadow);
}
function normalizeBadgeDefault(badge) {
  if (!badge || badge === "match-primary") return "match-action";
  return badge;
}
function categoryBrandMark(brand) {
  return typeof brand.extensions?.categories?.brand === "string" ? brand.extensions.categories.brand : void 0;
}
function normalizeModePalette(palette, categoryBrand) {
  let baseRoles;
  if (palette.roles) {
    baseRoles = { ...palette.roles };
  } else if (palette.semantic) {
    const mark = {
      brandForeground: palette.semantic.primaryForeground
    };
    if (categoryBrand) mark.brand = categoryBrand;
    baseRoles = rolesFromSemantic(palette.semantic, mark);
  } else {
    throw new Error("BrandModePalette requires roles or semantic");
  }
  const roles = {
    canvas: baseRoles.canvas,
    canvasForeground: baseRoles.canvasForeground,
    surface: baseRoles.surface,
    surfaceForeground: baseRoles.surfaceForeground,
    action: baseRoles.action,
    actionForeground: baseRoles.actionForeground,
    quiet: baseRoles.quiet,
    quietForeground: baseRoles.quietForeground,
    muted: baseRoles.muted,
    mutedForeground: baseRoles.mutedForeground,
    border: baseRoles.border,
    ring: baseRoles.ring,
    destructive: baseRoles.destructive,
    destructiveForeground: baseRoles.destructiveForeground
  };
  if (baseRoles.input) roles.input = baseRoles.input;
  const brandCh = asChannels(baseRoles.brand);
  if (brandCh) roles.brand = brandCh;
  const brandFg = asChannels(baseRoles.brandForeground) ?? baseRoles.actionForeground;
  if (brandCh) roles.brandForeground = brandFg;
  if (baseRoles.success) roles.success = baseRoles.success;
  if (baseRoles.successForeground) roles.successForeground = baseRoles.successForeground;
  if (baseRoles.warning) roles.warning = baseRoles.warning;
  if (baseRoles.warningForeground) roles.warningForeground = baseRoles.warningForeground;
  if (baseRoles.info) roles.info = baseRoles.info;
  if (baseRoles.infoForeground) roles.infoForeground = baseRoles.infoForeground;
  return { roles, semantic: semanticFromRoles(roles) };
}
function normalizeModes(brand, categoryBrand) {
  const raw = brand.modes;
  if (!raw?.light && !raw?.dark) return void 0;
  const modes = {};
  if (raw.light) {
    const n = normalizeModePalette(raw.light, categoryBrand);
    modes.light = { roles: n.roles, semantic: n.semantic };
  }
  if (raw.dark) {
    const n = normalizeModePalette(raw.dark, categoryBrand);
    modes.dark = { roles: n.roles, semantic: n.semantic };
  }
  if (modes.light && modes.dark) return modes;
  return modes;
}
function normalizeBrandPackage(brand) {
  const categoryBrand = categoryBrandMark(brand);
  const modes = normalizeModes(brand, categoryBrand);
  const defaultModeKey = brand.darkDefault ? "dark" : "light";
  const defaultMode = modes?.[defaultModeKey] ?? modes?.light ?? modes?.dark;
  let primaryPalette;
  if (defaultMode?.roles || defaultMode?.semantic) {
    primaryPalette = {};
    if (defaultMode.roles) primaryPalette.roles = defaultMode.roles;
    if (defaultMode.semantic) primaryPalette.semantic = defaultMode.semantic;
  } else {
    primaryPalette = { semantic: brand.semantic };
    if (brand.roles) primaryPalette.roles = brand.roles;
  }
  const { roles, semantic } = normalizeModePalette(primaryPalette, categoryBrand);
  const looseRecipe = brand.recipe;
  const radii = normalizeRadii(looseRecipe);
  const elevationTokens = normalizeElevation(looseRecipe);
  const recipe = {
    buttonDefault: looseRecipe.buttonDefault,
    density: looseRecipe.density ?? "comfortable",
    badgeDefault: normalizeBadgeDefault(looseRecipe.badgeDefault),
    radii,
    elevationTokens
  };
  if (looseRecipe.primaryStrokeGradient) {
    recipe.primaryStrokeGradient = looseRecipe.primaryStrokeGradient;
  }
  if (looseRecipe.outlineBorder) {
    recipe.outlineBorder = looseRecipe.outlineBorder;
  }
  const out = {
    ...brand,
    roles,
    semantic,
    recipe
  };
  if (modes) out.modes = modes;
  else delete out.modes;
  return out;
}
function isDualModeBrand(brand) {
  return Boolean(brand.modes?.light?.semantic && brand.modes?.dark?.semantic);
}

// src/values.generated.ts
var TOKEN_VALUES = {
  "--accent": { light: "220 14.3% 95.9%", dark: "225 6.2% 12.5%" },
  "--accent-foreground": { light: "225 7.7% 10.2%", dark: "228 23.8% 95.9%" },
  "--background": { light: "210 20% 98%", dark: "220 11.1% 5.3%" },
  "--blue-1": { light: "#fafcfe", dark: "#030815" },
  "--blue-10": { light: "#2253d4", dark: "#3f70e3" },
  "--blue-11": { light: "#1740ad", dark: "#89aaee" },
  "--blue-12": { light: "#031654", dark: "#d2e0fd" },
  "--blue-2": { light: "#f2f6fd", dark: "#060f25" },
  "--blue-3": { light: "#e7eefc", dark: "#09183b" },
  "--blue-4": { light: "#d8e4fb", dark: "#0d2254" },
  "--blue-5": { light: "#c6d7fa", dark: "#132e6f" },
  "--blue-6": { light: "#9fbcf9", dark: "#1c3c8a" },
  "--blue-7": { light: "#79a1f7", dark: "#254ba7" },
  "--blue-8": { light: "#5384f3", dark: "#2f5ac4" },
  "--blue-9": { light: "#2e65ee", dark: "#396ae2" },
  "--blue-contrast": { light: "#ffffff" },
  "--border": { light: "225 8% 90.2%", dark: "220 3.6% 16.3%" },
  "--brand-accent": { light: "#0bf1c3", dark: "#1af7c8" },
  "--brand-gradient": { light: "hsl(var(--primary))" },
  "--brand-gradient-end": { light: "hsl(var(--primary))" },
  "--brand-gradient-logo": {
    light: "linear-gradient(135deg, #0033fe 0%, #00a2e9 50%, #0bf1c3 100%)"
  },
  "--brand-gradient-logo-reverse": {
    light: "linear-gradient(135deg, #0bf1c3 0%, #00a2e9 50%, #0033fe 100%)"
  },
  "--brand-gradient-radial": { light: "hsl(var(--primary))" },
  "--brand-gradient-reverse": { light: "hsl(var(--primary))" },
  "--brand-gradient-start": { light: "hsl(var(--primary))" },
  "--brand-gradient-vertical": { light: "hsl(var(--primary))" },
  "--brand-primary": { light: "#0033fe", dark: "#5c7cfa" },
  "--brand-tertiary": { light: "#8b5cf6" },
  "--breakpoint-3xl": { light: "112.5rem" },
  "--breakpoint-shell": { light: "73.75rem" },
  "--breakpoint-tight": { light: "67.5rem" },
  "--breakpoint-xs": { light: "26.25rem" },
  "--card": { light: "0 0% 100%", dark: "220 7.3% 8%" },
  "--card-foreground": { light: "225 7.7% 10.2%", dark: "228 23.8% 95.9%" },
  "--category-1": {
    light: "color-mix(in oklab, color-mix(in oklab, hsl(var(--foreground)) 55%, hsl(var(--background))) 75%, oklch(from hsl(var(--primary)) l c h))"
  },
  "--category-2": {
    light: "color-mix(in oklab, color-mix(in oklab, hsl(var(--foreground)) 67%, hsl(var(--background))) 75%, oklch(from hsl(var(--primary)) l c calc(h + 72)))"
  },
  "--category-3": {
    light: "color-mix(in oklab, color-mix(in oklab, hsl(var(--foreground)) 79%, hsl(var(--background))) 75%, oklch(from hsl(var(--primary)) l c calc(h + 144)))"
  },
  "--category-4": {
    light: "color-mix(in oklab, color-mix(in oklab, hsl(var(--foreground)) 91%, hsl(var(--background))) 75%, oklch(from hsl(var(--primary)) l c calc(h + 216)))"
  },
  "--chart-1": { light: "228 100% 50%", dark: "228 95% 67%" },
  "--chart-2": { light: "168 91% 49%", dark: "168 96% 54%" },
  "--chart-3": { light: "263 70% 66%", dark: "228 100% 82%" },
  "--chart-4": { light: "168 91% 70%", dark: "168 100% 75%" },
  "--chart-5": { light: "228 100% 35%", dark: "228 100% 50%" },
  "--container-content": { light: "1152px" },
  "--container-text": { light: "896px" },
  "--container-wide": { light: "1400px" },
  "--cyan-1": { light: "#f9fdfb", dark: "#04100c" },
  "--cyan-10": { light: "#33e5bb", dark: "#5af8ce" },
  "--cyan-11": { light: "#027a61", dark: "#90fbdb" },
  "--cyan-12": { light: "#004133", dark: "#bdfde8" },
  "--cyan-2": { light: "#effbf7", dark: "#091e18" },
  "--cyan-3": { light: "#daf9ee", dark: "#0f2e25" },
  "--cyan-4": { light: "#c3f6e4", dark: "#1c4035" },
  "--cyan-5": { light: "#a3f2d8", dark: "#2b5347" },
  "--cyan-6": { light: "#8eefd1", dark: "#307864" },
  "--cyan-7": { light: "#77ecc9", dark: "#309e82" },
  "--cyan-8": { light: "#5be8c2", dark: "#28c7a2" },
  "--cyan-9": { light: "#0bf1c3" },
  "--cyan-contrast": { light: "#0d2b25" },
  "--destructive": { light: "0 84% 45%", dark: "0 63% 38%" },
  "--destructive-foreground": { light: "0 0% 100%", dark: "210 18% 96%" },
  "--destructive-strong": { light: "0 84% 45%", dark: "0 80% 66%" },
  "--ds-amber-200": {
    light: "oklch(96.81% 0.0495 90.24227879900472)",
    dark: "oklch(24.95% 0.0642 64.78)"
  },
  "--ds-amber-700": { light: "oklch(81.87% 0.1969 76.46)" },
  "--ds-amber-900": { light: "oklch(52.79% 0.1496 54.65)", dark: "oklch(77.21% 0.1991 64.28)" },
  "--ds-background-100": { light: "hsla(0, 0%, 100%, 1)", dark: "hsla(0, 0%, 4%, 1)" },
  "--ds-blue-200": { light: "oklch(96.29% 0.0195 250.59)", dark: "oklch(25.45% 0.0811 255.8)" },
  "--ds-blue-700": { light: "oklch(57.61% 0.2508 258.23)", dark: "oklch(57.61% 0.2321 258.23)" },
  "--ds-blue-900": {
    light: "oklch(53.18% 0.2399 256.9900584162342)",
    dark: "oklch(71.7% 0.1648 250.79360374054167)"
  },
  "--ds-gray-100": { light: "hsla(0, 0%, 95%, 1)", dark: "hsla(0, 0%, 10%, 1)" },
  "--ds-gray-1000": { light: "hsla(0, 0%, 9%, 1)", dark: "hsla(0, 0%, 93%, 1)" },
  "--ds-gray-200": { light: "hsla(0, 0%, 92%, 1)", dark: "hsla(0, 0%, 12%, 1)" },
  "--ds-gray-500": { light: "hsla(0, 0%, 79%, 1)", dark: "hsla(0, 0%, 27%, 1)" },
  "--ds-gray-600": { light: "hsla(0, 0%, 66%, 1)", dark: "hsla(0, 0%, 53%, 1)" },
  "--ds-gray-700": { light: "hsla(0, 0%, 56%, 1)" },
  "--ds-green-200": { light: "oklch(96.92% 0.037 147.15)", dark: "oklch(27.12% 0.0895 150.09)" },
  "--ds-green-700": { light: "oklch(64.58% 0.1746 147.27)", dark: "oklch(64.58% 0.199 147.27)" },
  "--ds-green-900": { light: "oklch(51.75% 0.1453 147.65)", dark: "oklch(73.1% 0.2158 148.29)" },
  "--ds-pink-300": { light: "oklch(93.83% 0.0451 356.29)", dark: "oklch(31.15% 0.1067 355.93)" },
  "--ds-pink-700": { light: "oklch(63.52% 0.238 1.01)", dark: "oklch(63.52% 0.2346 1.01)" },
  "--ds-pink-900": { light: "oklch(53.5% 0.2058 2.84)", dark: "oklch(69.36% 0.2223 3.91)" },
  "--ds-purple-200": { light: "oklch(96.73% 0.0228 309.8)", dark: "oklch(25.91% 0.0921 314.41)" },
  "--ds-purple-700": { light: "oklch(55.5% 0.3008 306.12)", dark: "oklch(55.5% 0.2186 306.12)" },
  "--ds-purple-900": { light: "oklch(47.18% 0.2579 304)", dark: "oklch(69.87% 0.2037 309.51)" },
  "--ds-red-200": {
    light: "oklch(95.41% 0.0299 14.252646656611997)",
    dark: "oklch(25.93% 0.0834 19.02)"
  },
  "--ds-red-700": { light: "oklch(62.56% 0.2524 23.03)", dark: "oklch(62.56% 0.2234 23.03)" },
  "--ds-red-900": { light: "oklch(54.99% 0.232 25.29)", dark: "oklch(69.96% 0.2136 22.03)" },
  "--ds-teal-300": { light: "oklch(94.92% 0.0478 182.07)", dark: "oklch(31.5% 0.0767 180.99)" },
  "--ds-teal-700": { light: "oklch(64.92% 0.1572 181.95)", dark: "oklch(64.92% 0.1403 181.95)" },
  "--ds-teal-900": { light: "oklch(52.08% 0.1251 182.93)", dark: "oklch(74.56% 0.1765 182.8)" },
  "--ds-trial-end": { light: "rgb(248, 28, 229)" },
  "--ds-trial-start": { light: "rgb(0, 112, 243)" },
  "--ds-turbo-end": { light: "#0096ff" },
  "--ds-turbo-start": { light: "#ff1e56" },
  "--duration-cinematic": { light: "500ms" },
  "--duration-flow": { light: "200ms" },
  "--duration-micro": { light: "100ms" },
  "--duration-reveal": { light: "300ms" },
  "--ease-in": { light: "cubic-bezier(0.4, 0, 1, 1)" },
  "--ease-in-out": { light: "cubic-bezier(0.4, 0, 0.2, 1)" },
  "--ease-out": { light: "cubic-bezier(0.16, 1, 0.3, 1)" },
  "--ease-spring": { light: "cubic-bezier(0.175, 0.885, 0.32, 1.275)" },
  "--edge-faint": { light: "rgb(0 0 0 / 0.04)", dark: "rgb(255 255 255 / 0.04)" },
  "--edge-medium": { light: "rgb(0 0 0 / 0.12)", dark: "rgb(255 255 255 / 0.1)" },
  "--edge-soft": { light: "rgb(0 0 0 / 0.07)", dark: "rgb(255 255 255 / 0.06)" },
  "--elevation-2xl": {
    light: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
    dark: "0 25px 50px -12px rgb(0 0 0 / 0.8)"
  },
  "--elevation-ambient-glow": {
    light: "0 0 80px hsl(222 47% 11% / 0.1)",
    dark: "0 0 80px rgb(255 255 255 / 0.06)"
  },
  "--elevation-ambient-lg": {
    light: "0 4px 8px -4px hsl(222 47% 11% / 0.06), 0 24px 56px -18px hsl(222 47% 11% / 0.16)",
    dark: "0 4px 8px -4px rgb(0 0 0 / 0.4), 0 24px 56px -18px rgb(0 0 0 / 0.6)"
  },
  "--elevation-ambient-md": {
    light: "0 2px 4px -2px hsl(222 47% 11% / 0.06), 0 12px 32px -10px hsl(222 47% 11% / 0.14)",
    dark: "0 2px 4px -2px rgb(0 0 0 / 0.4), 0 12px 32px -10px rgb(0 0 0 / 0.55)"
  },
  "--elevation-ambient-sm": {
    light: "0 1px 2px -1px hsl(222 47% 11% / 0.06), 0 6px 16px -6px hsl(222 47% 11% / 0.12)",
    dark: "0 1px 2px -1px rgb(0 0 0 / 0.4), 0 6px 16px -6px rgb(0 0 0 / 0.5)"
  },
  "--elevation-brand": {
    light: "0 0 0 1px rgb(0 51 254 / 0.15), 0 4px 20px -2px rgb(0 51 254 / 0.2)",
    dark: "0 0 0 1px rgb(92 124 250 / 0.25), 0 4px 20px -2px rgb(92 124 250 / 0.3)"
  },
  "--elevation-brand-lg": {
    light: "0 0 0 1px rgb(0 51 254 / 0.2), 0 8px 40px -4px rgb(0 51 254 / 0.3)",
    dark: "0 0 0 1px rgb(92 124 250 / 0.3), 0 8px 40px -4px rgb(92 124 250 / 0.4)"
  },
  "--elevation-glass-lg": {
    light: "inset 0 1px 0 rgb(255 255 255 / 0.5), 0 4px 8px -4px hsl(222 47% 11% / 0.06), 0 24px 56px -18px hsl(222 47% 11% / 0.16)",
    dark: "inset 0 1px 0 rgb(255 255 255 / 0.08), 0 4px 8px -4px rgb(0 0 0 / 0.4), 0 24px 56px -18px rgb(0 0 0 / 0.6)"
  },
  "--elevation-glass-md": {
    light: "inset 0 1px 0 rgb(255 255 255 / 0.5), 0 2px 4px -2px hsl(222 47% 11% / 0.06), 0 12px 32px -10px hsl(222 47% 11% / 0.14)",
    dark: "inset 0 1px 0 rgb(255 255 255 / 0.08), 0 2px 4px -2px rgb(0 0 0 / 0.4), 0 12px 32px -10px rgb(0 0 0 / 0.55)"
  },
  "--elevation-glass-sm": {
    light: "inset 0 1px 0 rgb(255 255 255 / 0.5), 0 1px 2px -1px hsl(222 47% 11% / 0.06), 0 6px 16px -6px hsl(222 47% 11% / 0.12)",
    dark: "inset 0 1px 0 rgb(255 255 255 / 0.08), 0 1px 2px -1px rgb(0 0 0 / 0.4), 0 6px 16px -6px rgb(0 0 0 / 0.5)"
  },
  "--elevation-glow-accent": {
    light: "0 8px 32px rgb(0 0 0 / 0.4), 0 0 60px color-mix(in srgb, var(--brand-accent) 8%, transparent)"
  },
  "--elevation-glow-accent-lg": {
    light: "0 12px 48px rgb(0 0 0 / 0.5), 0 0 80px color-mix(in srgb, var(--brand-accent) 12%, transparent)"
  },
  "--elevation-glow-accent-sm": {
    light: "0 0 20px color-mix(in srgb, var(--brand-accent) 10%, transparent)"
  },
  "--elevation-glow-primary": {
    light: "0 20px 25px -5px hsl(var(--primary) / 0.05), 0 8px 10px -6px hsl(var(--primary) / 0.05)"
  },
  "--elevation-lg": {
    light: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
    dark: "0 10px 15px -3px rgb(0 0 0 / 0.5), 0 4px 6px -4px rgb(0 0 0 / 0.5)"
  },
  "--elevation-md": {
    light: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
    dark: "0 4px 6px -1px rgb(0 0 0 / 0.4), 0 2px 4px -2px rgb(0 0 0 / 0.4)"
  },
  "--elevation-sheen": {
    light: "inset 0 1px 0 rgb(255 255 255 / 0.2)",
    dark: "inset 0 1px 0 rgb(0 0 0 / 0.12)"
  },
  "--elevation-sm": {
    light: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
    dark: "0 1px 3px 0 rgb(0 0 0 / 0.4), 0 1px 2px -1px rgb(0 0 0 / 0.4)"
  },
  "--elevation-xl": {
    light: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
    dark: "0 20px 25px -5px rgb(0 0 0 / 0.6), 0 8px 10px -6px rgb(0 0 0 / 0.6)"
  },
  "--elevation-xs": {
    light: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
    dark: "0 1px 2px 0 rgb(0 0 0 / 0.3)"
  },
  "--focus-ring": { light: "0 0 0 2px hsl(var(--ring) / 0.4)" },
  "--font-cn": {
    light: 'var(--font-geist-sans), "Geist", var(--font-misans, "MiSans"), "PingFang SC", "Microsoft YaHei", sans-serif'
  },
  "--font-display": {
    light: 'var(--font-dm-sans), "DM Sans", var(--font-misans, "MiSans"), "PingFang SC", sans-serif'
  },
  "--font-heading": {
    light: 'var(--font-dm-sans), "DM Sans", var(--font-misans, "MiSans"), "PingFang SC", sans-serif'
  },
  "--font-mono": {
    light: 'var(--font-geist-mono), "Geist Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
  },
  "--font-sans": {
    light: 'var(--font-geist-sans), "Geist", var(--font-misans, "MiSans"), "PingFang SC", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, system-ui, sans-serif'
  },
  "--foreground": { light: "225 7.7% 10.2%", dark: "228 23.8% 95.9%" },
  "--gradient-brand": { light: "var(--brand-gradient)" },
  "--gradient-brand-glow": { light: "var(--brand-gradient-radial)" },
  "--gradient-brand-hover": { light: "var(--brand-gradient-reverse)" },
  "--gradient-brand-logo": { light: "var(--brand-gradient-logo)" },
  "--gradient-brand-logo-reverse": { light: "var(--brand-gradient-logo-reverse)" },
  "--gradient-brand-radial": { light: "var(--brand-gradient-radial)" },
  "--gradient-brand-reverse": { light: "var(--brand-gradient-reverse)" },
  "--gradient-brand-vertical": { light: "var(--brand-gradient-vertical)" },
  "--gradient-glow": { light: "var(--brand-gradient-radial)" },
  "--gradient-section": { light: "var(--brand-gradient-vertical)" },
  "--halo-faint": { light: "rgb(0 0 0 / 0.03)", dark: "rgb(255 255 255 / 0.03)" },
  "--info": { light: "228 85% 56%", dark: "228 95% 72%" },
  "--info-foreground": { light: "0 0% 100%", dark: "222 14% 9%" },
  "--input": { light: "225 8% 90.2%", dark: "220 3.6% 16.3%" },
  "--layer-backdrop": { light: "1040" },
  "--layer-banner": { light: "90" },
  "--layer-devtools": { light: "9999" },
  "--layer-drawer": { light: "60" },
  "--layer-floating": { light: "30" },
  "--layer-modal": { light: "1050" },
  "--layer-nav": { light: "40" },
  "--layer-panel": { light: "200" },
  "--layer-popover": { light: "1060" },
  "--layer-raised": { light: "10" },
  "--layer-skip-link": { light: "100" },
  "--layer-sticky": { light: "20" },
  "--layer-tooltip": { light: "1070" },
  "--leading-display": { light: "1.05" },
  "--leading-heading": { light: "1.15" },
  "--motion-duration-cinematic": { light: "500ms" },
  "--motion-duration-flow": { light: "200ms" },
  "--motion-duration-micro": { light: "100ms" },
  "--motion-duration-reveal": { light: "300ms" },
  "--motion-ease-brand": { light: "cubic-bezier(0.16, 1, 0.3, 1)" },
  "--motion-ease-in": { light: "cubic-bezier(0.4, 0, 1, 1)" },
  "--motion-ease-in-out": { light: "cubic-bezier(0.4, 0, 0.2, 1)" },
  "--motion-ease-out": { light: "cubic-bezier(0.16, 1, 0.3, 1)" },
  "--motion-ease-spring": { light: "cubic-bezier(0.175, 0.885, 0.32, 1.275)" },
  "--muted": { light: "220 14.3% 95.9%", dark: "225 6.2% 12.5%" },
  "--muted-foreground": { light: "220 2.6% 45.5%", dark: "228 2.6% 62.5%" },
  "--nebutra-blue-100": { light: "#dbe4ff" },
  "--nebutra-blue-200": { light: "#bac8ff" },
  "--nebutra-blue-300": { light: "#91a7ff" },
  "--nebutra-blue-400": { light: "#5c7cfa" },
  "--nebutra-blue-50": { light: "#f0f4ff" },
  "--nebutra-blue-500": { light: "#0033fe" },
  "--nebutra-blue-600": { light: "#002ad4" },
  "--nebutra-blue-700": { light: "#0021ab" },
  "--nebutra-blue-800": { light: "#001882" },
  "--nebutra-blue-900": { light: "#000f59" },
  "--nebutra-blue-950": { light: "#000830" },
  "--nebutra-brand-blue": { light: "var(--nebutra-blue-500)" },
  "--nebutra-brand-cyan": { light: "var(--nebutra-cyan-500)" },
  "--nebutra-cyan-100": { light: "#b3ffec" },
  "--nebutra-cyan-200": { light: "#80ffe0" },
  "--nebutra-cyan-300": { light: "#4dfcd4" },
  "--nebutra-cyan-400": { light: "#1af7c8" },
  "--nebutra-cyan-50": { light: "#e6fff8" },
  "--nebutra-cyan-500": { light: "#0bf1c3" },
  "--nebutra-cyan-600": { light: "#09c9a3" },
  "--nebutra-cyan-700": { light: "#07a183" },
  "--nebutra-cyan-800": { light: "#057963" },
  "--nebutra-cyan-900": { light: "#035143" },
  "--nebutra-cyan-950": { light: "#012923" },
  "--nebutra-gray-100": { light: "#f5f5f5" },
  "--nebutra-gray-200": { light: "#e5e5e5" },
  "--nebutra-gray-300": { light: "#d4d4d4" },
  "--nebutra-gray-400": { light: "#a3a3a3" },
  "--nebutra-gray-50": { light: "#fafafa" },
  "--nebutra-gray-500": { light: "#737373" },
  "--nebutra-gray-600": { light: "#525252" },
  "--nebutra-gray-700": { light: "#404040" },
  "--nebutra-gray-800": { light: "#262626" },
  "--nebutra-gray-900": { light: "#171717" },
  "--nebutra-gray-950": { light: "#0a0a0a" },
  "--nebutra-neutral-100": { light: "#f3f4f6" },
  "--nebutra-neutral-200": { light: "#e4e5e8" },
  "--nebutra-neutral-300": { light: "#d2d4d8" },
  "--nebutra-neutral-400": { light: "#9fa1a5" },
  "--nebutra-neutral-50": { light: "#f9fafb" },
  "--nebutra-neutral-500": { light: "#717377" },
  "--nebutra-neutral-600": { light: "#515357" },
  "--nebutra-neutral-700": { light: "#3f4044" },
  "--nebutra-neutral-800": { light: "#26272a" },
  "--nebutra-neutral-900": { light: "#18191c" },
  "--nebutra-neutral-950": { light: "#0b0c0d" },
  "--neutral-1": { light: "#ffffff", dark: "#0b0c0d" },
  "--neutral-10": { light: "#515357", dark: "#d2d4d8" },
  "--neutral-11": { light: "#3f4044", dark: "#e4e5e8" },
  "--neutral-12": { light: "#18191c", dark: "#f9fafb" },
  "--neutral-2": { light: "#f9fafb", dark: "#18191c" },
  "--neutral-3": { light: "#f3f4f6", dark: "#26272a" },
  "--neutral-4": { light: "#e4e5e8", dark: "#3f4044" },
  "--neutral-5": { light: "#d2d4d8", dark: "#515357" },
  "--neutral-6": { light: "#b9bbbf", dark: "#666666" },
  "--neutral-7": { light: "#a0a2a6", dark: "#797979" },
  "--neutral-8": { light: "#888a8e", dark: "#8d8d8d" },
  "--neutral-9": { light: "#717377", dark: "#9fa1a5" },
  "--overlay-faint": { light: "rgb(0 0 0 / 0.06)", dark: "rgb(255 255 255 / 0.06)" },
  "--popover": { light: "0 0% 100%", dark: "225 7.7% 10.2%" },
  "--popover-foreground": { light: "225 7.7% 10.2%", dark: "228 23.8% 95.9%" },
  "--primary": { light: "225 7.7% 10.2%", dark: "228 23.8% 95.9%" },
  "--primary-foreground": { light: "0 0% 100%", dark: "220 11.1% 5.3%" },
  "--radius": { light: "0.375rem" },
  "--radius-2xl": { light: "1rem" },
  "--radius-3xl": { light: "1.5rem" },
  "--radius-button": { light: "0.5rem" },
  "--radius-card": { light: "0.75rem" },
  "--radius-full": { light: "9999px" },
  "--radius-lg": { light: "0.5rem" },
  "--radius-md": { light: "0.375rem" },
  "--radius-none": { light: "0" },
  "--radius-panel": { light: "1rem" },
  "--radius-sm": { light: "0.25rem" },
  "--radius-xl": { light: "0.75rem" },
  "--radius-xs": { light: "0.125rem" },
  "--ring": { light: "222.8 85% 55.7%", dark: "222.6 87.3% 69%" },
  "--ring-hairline": {
    light: "inset 0 0 0 1px rgb(255 255 255 / 0.04)",
    dark: "inset 0 0 0 1px rgb(255 255 255 / 0.06)"
  },
  "--secondary": { light: "220 14.3% 95.9%", dark: "225 6.2% 12.5%" },
  "--secondary-foreground": { light: "225 7.7% 10.2%", dark: "228 23.8% 95.9%" },
  "--sidebar": { light: "210 20% 98%", dark: "220 11.1% 5.3%" },
  "--sidebar-accent": { light: "220 14.3% 95.9%", dark: "225 6.2% 12.5%" },
  "--sidebar-accent-foreground": { light: "225 7.7% 10.2%", dark: "228 23.8% 95.9%" },
  "--sidebar-border": { light: "225 8% 90.2%", dark: "225 6.2% 12.5%" },
  "--sidebar-foreground": { light: "225 7.7% 10.2%", dark: "228 23.8% 95.9%" },
  "--sidebar-primary": { light: "225 7.7% 10.2%", dark: "228 23.8% 95.9%" },
  "--sidebar-primary-foreground": { light: "0 0% 100%", dark: "220 11.1% 5.3%" },
  "--sidebar-ring": { light: "222.8 85% 55.7%", dark: "222.6 87.3% 69%" },
  "--space-source-2xl": { light: "3rem" },
  "--space-source-lg": { light: "1.5rem" },
  "--space-source-md": { light: "1rem" },
  "--space-source-sm": { light: "0.75rem" },
  "--space-source-xl": { light: "2rem" },
  "--space-source-xs": { light: "0.5rem" },
  "--status-danger": { light: "#ef4444" },
  "--status-info": { light: "#0033fe", dark: "#5c7cfa" },
  "--status-success": { light: "#22c55e" },
  "--status-warning": { light: "#f59e0b" },
  "--success": { light: "142 71% 29%", dark: "142 60% 42%" },
  "--success-foreground": { light: "0 0% 100%", dark: "222 14% 9%" },
  "--success-strong": { light: "142 71% 27%", dark: "142 60% 42%" },
  "--tracking-display": { light: "-0.04em" },
  "--tracking-heading": { light: "-0.03em" },
  "--tracking-label": { light: "0.07em" },
  "--tracking-tight": { light: "-0.015em" },
  "--transition": { light: "150ms ease-out" },
  "--type-2xl-leading": { light: "1.33" },
  "--type-2xl-size": { light: "1.5rem" },
  "--type-2xl-tracking": { light: "-0.015em" },
  "--type-2xs-leading": { light: "1.45" },
  "--type-2xs-size": { light: "0.6875rem" },
  "--type-2xs-tracking": { light: "0.01em" },
  "--type-3xl-leading": { light: "1.25" },
  "--type-3xl-size": { light: "1.875rem" },
  "--type-3xl-tracking": { light: "-0.02em" },
  "--type-4xl-leading": { light: "1.15" },
  "--type-4xl-size": { light: "2.25rem" },
  "--type-4xl-tracking": { light: "-0.022em" },
  "--type-5xl-leading": { light: "1.08" },
  "--type-5xl-size": { light: "3rem" },
  "--type-5xl-tracking": { light: "-0.028em" },
  "--type-6xl-leading": { light: "1.04" },
  "--type-6xl-size": { light: "3.75rem" },
  "--type-6xl-tracking": { light: "-0.032em" },
  "--type-7xl-leading": { light: "1" },
  "--type-7xl-size": { light: "4.5rem" },
  "--type-7xl-tracking": { light: "-0.035em" },
  "--type-8xl-leading": { light: "1" },
  "--type-8xl-size": { light: "6rem" },
  "--type-8xl-tracking": { light: "-0.04em" },
  "--type-9xl-leading": { light: "1" },
  "--type-9xl-size": { light: "8rem" },
  "--type-9xl-tracking": { light: "-0.045em" },
  "--type-base-leading": { light: "1.6" },
  "--type-base-size": { light: "1rem" },
  "--type-base-tracking": { light: "-0.005em" },
  "--type-body-leading": { light: "1.5" },
  "--type-body-size": { light: "0.875rem" },
  "--type-body-tracking": { light: "0em" },
  "--type-display-leading": { light: "1.45" },
  "--type-display-size": { light: "1.25rem" },
  "--type-display-tracking": { light: "-0.012em" },
  "--type-label-leading": { light: "1.4" },
  "--type-label-size": { light: "0.75rem" },
  "--type-label-tracking": { light: "0.005em" },
  "--type-lg-leading": { light: "1.55" },
  "--type-lg-size": { light: "1.125rem" },
  "--type-lg-tracking": { light: "-0.01em" },
  "--type-meta-leading": { light: "1.45" },
  "--type-meta-size": { light: "0.6875rem" },
  "--type-meta-tracking": { light: "0.01em" },
  "--type-sm-leading": { light: "1.5" },
  "--type-sm-size": { light: "0.875rem" },
  "--type-sm-tracking": { light: "0em" },
  "--type-ui-leading": { light: "1.45" },
  "--type-ui-size": { light: "0.8125rem" },
  "--type-ui-tracking": { light: "0em" },
  "--type-xl-leading": { light: "1.45" },
  "--type-xl-size": { light: "1.25rem" },
  "--type-xl-tracking": { light: "-0.012em" },
  "--type-xs-leading": { light: "1.4" },
  "--type-xs-size": { light: "0.75rem" },
  "--type-xs-tracking": { light: "0.005em" },
  "--warning": { light: "38 92% 50%", dark: "38 80% 52%" },
  "--warning-foreground": { light: "222 47% 11%", dark: "222 14% 9%" },
  "--warning-strong": { light: "38 92% 30%", dark: "38 80% 52%" }
};

// src/values.ts
var table = TOKEN_VALUES;
function tokenValue(name, mode = "light") {
  const entry = table[name];
  const value = (mode === "dark" ? entry?.dark ?? entry?.light : entry?.light) ?? entry?.dark;
  if (value === void 0) throw new Error(`token ${name} has no value`);
  return value;
}

// src/preset/factory.ts
function factoryBrandPackage() {
  const semantic = (mode) => ({
    background: tokenValue("--background", mode),
    foreground: tokenValue("--foreground", mode),
    card: tokenValue("--card", mode),
    cardForeground: tokenValue("--card-foreground", mode),
    popover: tokenValue("--popover", mode),
    popoverForeground: tokenValue("--popover-foreground", mode),
    primary: tokenValue("--primary", mode),
    primaryForeground: tokenValue("--primary-foreground", mode),
    secondary: tokenValue("--secondary", mode),
    secondaryForeground: tokenValue("--secondary-foreground", mode),
    muted: tokenValue("--muted", mode),
    mutedForeground: tokenValue("--muted-foreground", mode),
    accent: tokenValue("--accent", mode),
    accentForeground: tokenValue("--accent-foreground", mode),
    destructive: tokenValue("--destructive", mode),
    destructiveForeground: tokenValue("--destructive-foreground", mode),
    border: tokenValue("--border", mode),
    input: tokenValue("--input", mode),
    ring: tokenValue("--ring", mode),
    success: tokenValue("--success", mode),
    successForeground: tokenValue("--success-foreground", mode),
    warning: tokenValue("--warning", mode),
    warningForeground: tokenValue("--warning-foreground", mode),
    info: tokenValue("--info", mode),
    infoForeground: tokenValue("--info-foreground", mode)
  });
  return normalizeBrandPackage({
    id: "factory",
    name: "Nebutra Factory",
    version: "1.0.0",
    darkDefault: false,
    semantic: semantic("light"),
    modes: { light: { semantic: semantic("light") }, dark: { semantic: semantic("dark") } },
    recipe: {
      buttonDefault: "solid",
      density: "comfortable",
      radii: {
        button: tokenValue("--radius-button"),
        card: tokenValue("--radius-card"),
        badge: tokenValue("--radius-md"),
        input: tokenValue("--radius-md"),
        pill: tokenValue("--radius-full")
      },
      elevationTokens: { card: tokenValue("--elevation-sm") }
    },
    typography: {
      fontSans: tokenValue("--font-sans"),
      fontMono: tokenValue("--font-mono"),
      fontDisplay: tokenValue("--font-heading")
    }
  });
}

// src/preset/resolve.ts
var NEUTRAL_ROLES = [
  "canvas",
  "canvasForeground",
  "surface",
  "surfaceForeground",
  "quiet",
  "quietForeground",
  "muted",
  "mutedForeground",
  "border",
  "input"
];
var WHITE = "0 0% 100%";
var INK = "225 7.7% 10.2%";
function parseChannels(value) {
  const m = /^\s*(-?[\d.]+)(?:deg)?\s+([\d.]+)%\s+([\d.]+)%\s*$/.exec(value);
  if (!m) return null;
  return { h: Number(m[1]), s: Number(m[2]), l: Number(m[3]) };
}
var round = (n) => Math.round(n * 10) / 10;
function retint(value, tint) {
  const c = parseChannels(value);
  if (!c) return value;
  return `${round(tint.h)} ${round(tint.s)}% ${round(c.l)}%`;
}
function relativeLuminance(hex) {
  const channel = (i) => {
    const v = Number.parseInt(hex.slice(1 + i * 2, 3 + i * 2), 16) / 255;
    return v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
  };
  return 0.2126 * channel(0) + 0.7152 * channel(1) + 0.0722 * channel(2);
}
function labelOn(hex) {
  const l = relativeLuminance(hex);
  const onWhite = 1.05 / (l + 0.05);
  const inkL = 0.0141;
  const onInk = (l + 0.05) / (inkL + 0.05);
  return onWhite >= onInk ? WHITE : INK;
}
function tintRoles(roles, preset) {
  if (preset.neutral && preset.neutral !== "base") {
    const tint = NEUTRAL_TINTS[preset.neutral];
    for (const key of NEUTRAL_ROLES) {
      const value = roles[key];
      if (value) roles[key] = retint(value, tint);
    }
  }
  if (preset.brandColor) {
    const channels = hexToHslChannels(preset.brandColor);
    roles.action = channels;
    roles.actionForeground = labelOn(preset.brandColor);
    roles.ring = channels;
  }
}
function stack(family, generic) {
  return `"${family}", ${generic}`;
}
function resolvePreset(preset, base, identity) {
  const warnings = [];
  const brand = normalizeBrandPackage(structuredClone(base));
  const palettes = [brand.modes?.light, brand.modes?.dark].filter(
    (p) => Boolean(p?.roles)
  );
  for (const palette of palettes) {
    tintRoles(palette.roles, preset);
    palette.semantic = semanticFromRoles(palette.roles);
  }
  if (brand.roles) {
    tintRoles(brand.roles, preset);
    brand.semantic = semanticFromRoles(brand.roles);
  }
  if (preset.mode && preset.mode !== "base") {
    const dark = preset.mode === "dark";
    if (isDualModeBrand(brand)) {
      brand.darkDefault = dark;
      const primary = brand.modes?.[dark ? "dark" : "light"];
      if (primary?.roles) brand.roles = primary.roles;
      if (primary?.semantic) brand.semantic = primary.semantic;
    } else if (brand.darkDefault !== dark) {
      warnings.push(
        `${base.name} has one palette (${brand.darkDefault ? "dark" : "light"}); the ${preset.mode} mode was not applied.`
      );
    }
  }
  brand.extensions = {
    ...brand.extensions,
    decorative: {
      ...brand.extensions?.decorative,
      "logo-ink": preset.tintLogo ? "hsl(var(--brand-mark))" : "hsl(var(--foreground))"
    }
  };
  if (preset.radius && preset.radius !== "base") {
    brand.recipe.radii = { ...RADIUS_VALUES[preset.radius] };
  }
  if (preset.density && preset.density !== "base") {
    brand.recipe.density = preset.density;
  }
  const typography = { ...brand.typography };
  if (preset.sans && preset.sans !== "base") {
    typography.fontSans = stack(preset.sans, "ui-sans-serif, system-ui, sans-serif");
  }
  if (preset.heading && preset.heading !== "base") {
    const serif = ["Playfair Display", "Fraunces", "Source Serif 4"].includes(preset.heading);
    typography.fontDisplay = preset.heading === "sans" ? typography.fontSans : stack(preset.heading, serif ? "ui-serif, Georgia, serif" : "ui-sans-serif, sans-serif");
  }
  if (preset.mono && preset.mono !== "base") {
    typography.fontMono = stack(preset.mono, "ui-monospace, SFMono-Regular, monospace");
  }
  if (preset.headingWeight && preset.headingWeight !== "base") {
    typography.headingWeight = preset.headingWeight;
  }
  brand.typography = typography;
  brand.id = identity.id;
  brand.name = identity.name;
  brand.extensions = {
    ...brand.extensions,
    notes: [
      `Resolved from preset ${identity.code ?? "(unnamed)"} over ${base.id} by @nebutra/tokens/preset.`
    ]
  };
  return { brand: normalizeBrandPackage(brand), warnings };
}

// src/preset/schema.ts
import { getBrandOrigin } from "@nebutra/brand/metadata-helpers";
var ENUMS = {
  base: PRESET_BASES,
  neutral: PRESET_NEUTRALS,
  radius: PRESET_RADII,
  density: PRESET_DENSITIES,
  sans: PRESET_SANS,
  heading: PRESET_HEADINGS,
  mono: PRESET_MONOS,
  headingWeight: PRESET_WEIGHTS,
  mode: PRESET_MODES
};
var DESCRIPTIONS = {
  base: "The design language to start from. `factory` is the House tokens; the others are complete brand packages.",
  brandColor: "#rrggbb. Becomes the action fill (buttons) and the ring (focus, links). Omit to keep the base's.",
  neutral: "Temperature of neutral surfaces and text.",
  radius: "Corner radius scale for buttons, cards, badges and inputs.",
  density: "Control height and spacing scale.",
  sans: "Body face. Only self-hosted faces are offered.",
  heading: "Heading face. `sans` sets headings in the body face.",
  mono: "Code face.",
  headingWeight: "Heading weight.",
  mode: "Which mode a visitor sees first. Only a dual-mode base can change it.",
  tintLogo: "Paint the wordmark in the base's brand colour. Off by default: the wordmark reads in ink."
};
var STUDIO_ORIGIN = getBrandOrigin("landing");
var PRESET_SCHEMA_ID = `${STUDIO_ORIGIN}/studio/preset.schema.json`;
function presetJsonSchema() {
  const properties = {
    brandColor: {
      type: "string",
      pattern: "^#[0-9a-fA-F]{6}$",
      description: DESCRIPTIONS.brandColor
    }
  };
  for (const [key, values] of Object.entries(ENUMS)) {
    properties[key] = { enum: [...values], description: DESCRIPTIONS[key] };
  }
  properties.tintLogo = { type: "boolean", default: false, description: DESCRIPTIONS.tintLogo };
  return {
    $schema: "https://json-schema.org/draft/2020-12/schema",
    $id: PRESET_SCHEMA_ID,
    title: "Sailor Studio preset",
    description: "A Sailor project's whole look in one object. Encode it with `nebutra studio preview` to review it in Sailor Studio, then `nebutra studio pull` or `create-sailor --preset` to apply it.",
    type: "object",
    required: ["base"],
    additionalProperties: false,
    properties
  };
}
function presetFromJson(input) {
  if (typeof input !== "object" || input === null || Array.isArray(input)) {
    throw new PresetCodeError("A preset is a JSON object with at least `base`.");
  }
  const raw = input;
  const allowed = /* @__PURE__ */ new Set(["brandColor", "tintLogo", ...Object.keys(ENUMS)]);
  for (const key of Object.keys(raw)) {
    if (!allowed.has(key)) {
      throw new PresetCodeError(`Unknown field "${key}". Fields: ${[...allowed].join(", ")}.`);
    }
  }
  const out = {};
  for (const [key, values] of Object.entries(ENUMS)) {
    const value = raw[key];
    if (value === void 0) continue;
    if (!values.includes(value)) {
      throw new PresetCodeError(
        `"${key}" must be one of ${values.map((v) => JSON.stringify(v)).join(", ")}; got ${JSON.stringify(value)}.`
      );
    }
    if (value !== "base") out[key] = value;
  }
  if (out.base === void 0) throw new PresetCodeError('"base" is required.');
  if (raw.tintLogo !== void 0) {
    if (typeof raw.tintLogo !== "boolean") {
      throw new PresetCodeError(
        `"tintLogo" must be true or false; got ${JSON.stringify(raw.tintLogo)}.`
      );
    }
    if (raw.tintLogo) out.tintLogo = true;
  }
  if (raw.brandColor !== void 0) {
    if (typeof raw.brandColor !== "string" || !/^#[0-9a-fA-F]{6}$/.test(raw.brandColor)) {
      throw new PresetCodeError(
        `"brandColor" must be #rrggbb; got ${JSON.stringify(raw.brandColor)}.`
      );
    }
    out.brandColor = raw.brandColor.toLowerCase();
  }
  return out;
}
function readPresetInput(input) {
  if (typeof input !== "string") return presetFromJson(input);
  const value = input.trim();
  if (value.startsWith("{")) {
    let parsed;
    try {
      parsed = JSON.parse(value);
    } catch {
      throw new PresetCodeError("That looks like JSON but does not parse.");
    }
    return presetFromJson(parsed);
  }
  if (/^https?:\/\//.test(value)) {
    const code = new URL(value).searchParams.get("preset");
    if (!code) throw new PresetCodeError("That URL carries no ?preset= to read.");
    return parsePreset(code);
  }
  return parsePreset(value);
}
var STUDIO_URL = `${STUDIO_ORIGIN}/sailor/studio`;
function presetArgument(preset) {
  return Object.keys(preset).length === 1 ? preset.base : encodePreset(preset);
}
function studioReviewUrl(preset) {
  const url = new URL(STUDIO_URL);
  url.searchParams.set("preset", presetArgument(preset));
  url.searchParams.set("proposed", "1");
  return url.toString();
}
export {
  NEUTRAL_TINTS,
  PRESET_BASES,
  PRESET_CODE_VERSION,
  PRESET_DENSITIES,
  PRESET_HEADINGS,
  PRESET_MODES,
  PRESET_MONOS,
  PRESET_NEUTRALS,
  PRESET_RADII,
  PRESET_SANS,
  PRESET_SCHEMA_ID,
  PRESET_WEIGHTS,
  PresetCodeError,
  RADIUS_VALUES,
  STUDIO_URL,
  decodePreset,
  encodePreset,
  factoryBrandPackage,
  parsePreset,
  presetArgument,
  presetFromJson,
  presetJsonSchema,
  readPresetInput,
  resolvePreset,
  studioReviewUrl
};
//# sourceMappingURL=index.js.map