"use client";

// src/brand-package/use-brand.ts
import { useCallback, useEffect, useRef, useState } from "react";

// src/brand-package/emit-css.ts
import { withNearestRegistryFont } from "@nebutra/fonts/registry";

// src/brand-package/hover-surface.ts
var HSL_RE = /^(-?\d+(?:\.\d+)?)\s+(\d+(?:\.\d+)?)%\s+(\d+(?:\.\d+)?)%$/;
function hslToRgb(triple) {
  const m = triple.trim().match(HSL_RE);
  if (!m) return null;
  const h = (Number(m[1]) % 360 + 360) % 360 / 360;
  const s = Number(m[2]) / 100;
  const l = Number(m[3]) / 100;
  if (s === 0) return [l, l, l];
  const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
  const p = 2 * l - q;
  const hue = (t) => {
    let x = t;
    if (x < 0) x += 1;
    if (x > 1) x -= 1;
    if (x < 1 / 6) return p + (q - p) * 6 * x;
    if (x < 1 / 2) return q;
    if (x < 2 / 3) return p + (q - p) * (2 / 3 - x) * 6;
    return p;
  };
  return [hue(h + 1 / 3), hue(h), hue(h - 1 / 3)];
}
function rgbToHsl([r, g, b]) {
  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  const l = (max + min) / 2;
  let s = 0;
  let h = 0;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    if (max === r) h = (g - b) / d + (g < b ? 6 : 0);
    else if (max === g) h = (b - r) / d + 2;
    else h = (r - g) / d + 4;
    h /= 6;
  }
  const round1 = (n) => Math.round(n * 10) / 10;
  return `${Math.round(h * 360)} ${round1(s * 100)}% ${round1(l * 100)}%`;
}
function luminance([r, g, b]) {
  const lin = (c) => c <= 0.04045 ? c / 12.92 : ((c + 0.055) / 1.055) ** 2.4;
  return 0.2126 * lin(r) + 0.7152 * lin(g) + 0.0722 * lin(b);
}
function contrastRatio(a, b) {
  const ra = hslToRgb(a);
  const rb = hslToRgb(b);
  if (!ra || !rb) return null;
  const la = luminance(ra);
  const lb = luminance(rb);
  return (Math.max(la, lb) + 0.05) / (Math.min(la, lb) + 0.05);
}
var MAX_HOVER_SURFACE_CONTRAST = 2;
var MIN_HOVER_LABEL_CONTRAST = 4.5;
function hoverSurface(accent, accentForeground, background, foreground) {
  const distance = contrastRatio(accent, background);
  const label = contrastRatio(accentForeground, accent);
  if (distance === null || label === null) return { accent, accentForeground };
  if (distance <= MAX_HOVER_SURFACE_CONTRAST && label >= MIN_HOVER_LABEL_CONTRAST) {
    return { accent, accentForeground };
  }
  const bg = hslToRgb(background);
  const fg = hslToRgb(foreground);
  if (!bg || !fg) return { accent, accentForeground };
  const k = luminance(bg) > 0.5 ? 0.06 : 0.1;
  const mixed = [
    bg[0] + (fg[0] - bg[0]) * k,
    bg[1] + (fg[1] - bg[1]) * k,
    bg[2] + (fg[2] - bg[2]) * k
  ];
  return { accent: rgbToHsl(mixed), accentForeground: foreground };
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
  const accent = r.quiet;
  const accentFg = r.quietForeground;
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

// src/brand-package/emit-css.ts
function cssFontStack(stack) {
  return (withNearestRegistryFont(stack) ?? stack).replace(/'/g, '"');
}
var GENERIC_FAMILIES = /* @__PURE__ */ new Set([
  "ui-sans-serif",
  "ui-serif",
  "ui-monospace",
  "system-ui",
  "sans-serif",
  "serif",
  "monospace",
  "-apple-system",
  "BlinkMacSystemFont"
]);
function withCjkTail(stack) {
  const families = stack.split(",").map((f) => f.trim());
  const cut = families.findIndex((f) => GENERIC_FAMILIES.has(f.replace(/"/g, "")));
  if (cut === -1 || families.some((f) => f.includes("MiSans"))) return stack;
  const cjk = ['var(--font-misans, "MiSans")', '"PingFang SC"'];
  return [...families.slice(0, cut), ...cjk, ...families.slice(cut)].join(", ");
}
function motionVars(motion) {
  if (!motion) return [];
  const lines = [];
  const curves = [
    ["easeOut", "ease-out"],
    ["easeInOut", "ease-in-out"],
    ["easeSpring", "ease-spring"]
  ];
  for (const [key, name] of curves) {
    const value = motion[key];
    if (typeof value !== "string" || !value.trim()) continue;
    lines.push(`  --${name}: ${value};`);
    lines.push(`  --motion-${name}: ${value};`);
  }
  const durations = [
    ["micro", "micro"],
    ["flow", "flow"],
    ["reveal", "reveal"],
    ["cinematic", "cinematic"]
  ];
  for (const [key, name] of durations) {
    const value = motion[key];
    if (typeof value !== "number" || !Number.isFinite(value)) continue;
    lines.push(`  --duration-${name}: ${value}ms;`);
    lines.push(`  --motion-duration-${name}: ${value}ms;`);
  }
  return lines.length ? [``, `  /* Motion */`, ...lines] : [];
}
function spacingVars(spacing) {
  if (!spacing) return [];
  const lines = [];
  const steps = [
    ["xs", "xs"],
    ["sm", "sm"],
    ["md", "md"],
    ["lg", "lg"],
    ["xl", "xl"],
    ["2xl", "2xl"]
  ];
  for (const [key, name] of steps) {
    const value = spacing[key];
    if (typeof value !== "string" || !value.trim()) continue;
    lines.push(`  --space-source-${name}: ${value};`);
  }
  return lines.length ? [``, `  /* Spacing */`, ...lines] : [];
}
function recipeVars(recipe) {
  const radii = recipe.radii;
  const elev = recipe.elevationTokens;
  const lines = [
    `  /* Shape slots */`,
    `  --btn-default-radius: ${radii.button};`,
    `  --radius-button: ${radii.button};`,
    `  --radius-buttons: ${radii.button};`,
    // A step on the size scale, not the button role.
    //
    // Aliasing it straight to `radii.button` is fine while a language's buttons
    // are modestly rounded — five of the seven are 4–8px and never noticed. It
    // breaks for the two whose buttons are pills: GSAP emitted
    // `--radius-md: 100px` and Vanta 999px, and forty-two files read that step
    // for panels and surfaces. The Combobox popover under GSAP came out as a
    // lozenge, which is what a 100px radius does to a 260px-wide panel.
    //
    // `min()` keeps every language whose button is the tighter of the two
    // exactly where it was, and stops a pill from escaping its role. A pill is
    // a control decision; it has no business setting the radius of a surface.
    `  --radius-md: min(${radii.button}, ${radii.card});`,
    `  --radius-card: ${radii.card};`,
    `  --radius-lg: ${radii.card};`,
    `  --radius-badge: ${radii.badge ?? "9999px"};`,
    `  --badge-default-radius: ${radii.badge ?? "9999px"};`,
    `  --radius-inputs: ${radii.input ?? radii.button};`,
    `  --input-radius: ${radii.input ?? radii.button};`,
    `  --radius-pill: ${radii.pill ?? "9999px"};`,
    ``,
    `  /* Free elevation (carrier-provided CSS shadows) */`,
    `  --elevation-card: ${elev.card};`,
    `  --elevation-control: ${elev.control ?? "0 0 #0000"};`,
    `  --elevation-raised: ${elev.raised ?? elev.card};`,
    // --elevation-*, not --shadow-*. The theme block maps `--shadow-md` to
    // `var(--elevation-md)` and inlines that into `.shadow-md`, so a skin that
    // set --shadow-md was writing to the alias while the utility read the
    // source. Every language's shadows were therefore byte-identical in the
    // browser — measured across all seven with getComputedStyle — while the
    // token files disagreed convincingly. Setting the source is what a brand
    // switch needs; the alias takes care of itself.
    `  --elevation-xs: ${elev.control ?? "0 0 #0000"};`,
    `  --elevation-sm: ${elev.card};`,
    `  --elevation-md: ${elev.raised ?? elev.card};`,
    `  --elevation-lg: ${elev.raised ?? elev.card};`,
    `  --btn-default-shadow: 0 0 #0000;`
  ];
  switch (recipe.buttonDefault) {
    case "outline": {
      const edge = recipe.outlineBorder ?? "hsl(var(--foreground))";
      lines.push("  --btn-default-bg: transparent;");
      lines.push("  --btn-default-fg: hsl(var(--foreground));");
      lines.push("  --btn-default-border-width: 1px;");
      lines.push("  --btn-default-border: transparent;");
      lines.push(`  --btn-default-stroke-gradient: linear-gradient(${edge}, ${edge});`);
      lines.push("  --btn-default-hover-bg: hsl(var(--foreground) / 0.06);");
      break;
    }
    case "gradient-stroke": {
      const grad = recipe.primaryStrokeGradient ?? "linear-gradient(135deg, hsl(var(--primary)), color-mix(in srgb, hsl(var(--primary)) 55%, white))";
      lines.push("  --btn-default-bg: transparent;");
      lines.push("  --btn-default-fg: hsl(var(--foreground));");
      lines.push("  --btn-default-border-width: 1.5px;");
      lines.push("  --btn-default-border: transparent;");
      lines.push(`  --btn-default-stroke-gradient: ${grad};`);
      lines.push("  --btn-default-hover-bg: hsl(var(--primary) / 0.08);");
      break;
    }
    default:
      lines.push("  --btn-default-bg: hsl(var(--primary));");
      lines.push("  --btn-default-fg: hsl(var(--primary-foreground));");
      lines.push("  --btn-default-border-width: 0px;");
      lines.push("  --btn-default-border: transparent;");
      lines.push("  --btn-default-stroke-gradient: linear-gradient(transparent, transparent);");
      lines.push(
        "  --btn-default-hover-bg: color-mix(in srgb, hsl(var(--primary)) 90%, transparent);"
      );
      break;
  }
  const badgeMode = recipe.badgeDefault ?? "match-action";
  if (badgeMode === "outline") {
    const edge = recipe.outlineBorder ?? "hsl(var(--border))";
    lines.push("  --badge-default-bg: transparent;");
    lines.push("  --badge-default-fg: hsl(var(--foreground));");
    lines.push(`  --badge-default-border: ${edge};`);
    lines.push("  --badge-default-hover-bg: hsl(var(--foreground) / 0.06);");
  } else if (badgeMode === "muted") {
    lines.push("  --badge-default-bg: hsl(var(--secondary));");
    lines.push("  --badge-default-fg: hsl(var(--secondary-foreground));");
    lines.push("  --badge-default-border: transparent;");
    lines.push("  --badge-default-hover-bg: color-mix(in srgb, hsl(var(--secondary)) 90%, white);");
  } else if (badgeMode === "brand") {
    lines.push("  --badge-default-bg: hsl(var(--brand-mark, var(--accent)));");
    lines.push(
      "  --badge-default-fg: hsl(var(--brand-mark-foreground, var(--accent-foreground)));"
    );
    lines.push("  --badge-default-border: transparent;");
    lines.push(
      "  --badge-default-hover-bg: color-mix(in srgb, hsl(var(--brand-mark, var(--accent))) 85%, transparent);"
    );
  } else if (recipe.buttonDefault === "outline" || recipe.buttonDefault === "gradient-stroke") {
    const edge = recipe.outlineBorder ?? "hsl(var(--foreground))";
    lines.push("  --badge-default-bg: transparent;");
    lines.push("  --badge-default-fg: hsl(var(--foreground));");
    lines.push(`  --badge-default-border: ${edge};`);
    lines.push("  --badge-default-hover-bg: hsl(var(--foreground) / 0.06);");
  } else {
    lines.push("  --badge-default-bg: hsl(var(--primary));");
    lines.push("  --badge-default-fg: hsl(var(--primary-foreground));");
    lines.push("  --badge-default-border: transparent;");
    lines.push(
      "  --badge-default-hover-bg: color-mix(in srgb, hsl(var(--primary)) 80%, transparent);"
    );
  }
  if (recipe.density === "compact") {
    lines.push("  --btn-default-padding-y: 0.5rem;");
    lines.push("  --btn-default-padding-x: 0.875rem;");
    lines.push("  --control-height-tiny: 1.25rem;");
    lines.push("  --control-height-sm: 1.75rem;");
    lines.push("  --control-height-md: 2rem;");
    lines.push("  --control-height-lg: 2.5rem;");
    lines.push("  --control-height-icon-sm: 1.5rem;");
    lines.push("  --control-height-icon-md: 1.75rem;");
    lines.push("  --control-height-icon-lg: 2rem;");
    lines.push("  --control-font-size-md: 0.8125rem;");
  } else if (recipe.density === "spacious") {
    lines.push("  --btn-default-padding-y: 0.875rem;");
    lines.push("  --btn-default-padding-x: 1.5rem;");
    lines.push("  --control-height-tiny: 1.75rem;");
    lines.push("  --control-height-sm: 2.25rem;");
    lines.push("  --control-height-md: 2.75rem;");
    lines.push("  --control-height-lg: 3.25rem;");
    lines.push("  --control-height-icon-sm: 2rem;");
    lines.push("  --control-height-icon-md: 2.25rem;");
    lines.push("  --control-height-icon-lg: 2.5rem;");
  }
  return lines;
}
function isServableFaceUrl(url) {
  return url.startsWith("/") && !url.startsWith("//");
}
function emitFontFaces(faces) {
  const servable = faces?.filter((face) => face.src.every((s) => isServableFaceUrl(s.url)));
  if (!servable?.length) return [];
  const out = ["/* Brand font faces */"];
  for (const face of servable) {
    const src = face.src.map((s) => {
      const fmt = s.format ? ` format("${s.format}")` : "";
      return `url("${s.url}")${fmt}`;
    }).join(", ");
    out.push("@font-face {");
    out.push(`  font-family: "${face.family}";`);
    out.push(`  src: ${src};`);
    if (face.weight != null) out.push(`  font-weight: ${face.weight};`);
    if (face.style) out.push(`  font-style: ${face.style};`);
    out.push(`  font-display: ${face.display ?? "swap"};`);
    if (face.unicodeRange) out.push(`  unicode-range: ${face.unicodeRange};`);
    out.push("}");
    out.push("");
  }
  return out;
}
function emitGlobalSkinSelector(brandId, darkDefault, root = "html") {
  if (darkDefault) {
    return `:root,
.dark,
${root}[data-brand="${brandId}"] {`;
  }
  return `:root,
${root}[data-brand="${brandId}"] {`;
}
function emitLightModeSelector(brandId, mode, root = "html") {
  if (mode === "scoped") return `${root}[data-brand="${brandId}"] {`;
  return `:root,
${root}[data-brand="${brandId}"] {`;
}
function emitDarkModeSelector(brandId, mode, root = "html") {
  if (mode === "scoped") return `${root}.dark[data-brand="${brandId}"] {`;
  return `.dark,
${root}.dark[data-brand="${brandId}"] {`;
}
function neutralRamp(s, r) {
  const hsl = (triple) => `hsl(${triple})`;
  const anchors = [
    [1, hsl(r?.canvas ?? s.background)],
    [2, hsl(r?.surface ?? s.card)],
    [7, hsl(r?.border ?? s.border)],
    [11, hsl(r?.mutedForeground ?? s.mutedForeground)],
    [12, hsl(r?.canvasForeground ?? s.foreground)]
  ];
  const lines = [``, `  /* \u2500\u2500 Neutral ramp, anchored on this language's roles \u2500\u2500 */`];
  for (let step = 1; step <= 12; step++) {
    const exact = anchors.find(([n]) => n === step);
    if (exact) {
      lines.push(`  --neutral-${step}: ${exact[1]};`);
      continue;
    }
    const lower = [...anchors].reverse().find(([n]) => n < step);
    const upper = anchors.find(([n]) => n > step);
    if (!lower || !upper) continue;
    const t = Math.round((step - lower[0]) / (upper[0] - lower[0]) * 100);
    lines.push(`  --neutral-${step}: color-mix(in oklab, ${upper[1]} ${t}%, ${lower[1]});`);
  }
  return lines;
}
function emitColorVars(s, r) {
  const hover = hoverSurface(s.accent, s.accentForeground, s.background, s.foreground);
  const roleLines = [
    `  /* \u2500\u2500 Color roles (carrier) \u2500\u2500 */`,
    `  --role-canvas: ${r?.canvas ?? s.background};`,
    `  --role-canvas-fg: ${r?.canvasForeground ?? s.foreground};`,
    `  --role-surface: ${r?.surface ?? s.card};`,
    `  --role-surface-fg: ${r?.surfaceForeground ?? s.cardForeground};`,
    `  --role-action: ${r?.action ?? s.primary};`,
    `  --role-action-fg: ${r?.actionForeground ?? s.primaryForeground};`,
    `  --role-quiet: ${r?.quiet ?? s.secondary};`,
    `  --role-quiet-fg: ${r?.quietForeground ?? s.secondaryForeground};`,
    `  --role-muted: ${r?.muted ?? s.muted};`,
    `  --role-muted-fg: ${r?.mutedForeground ?? s.mutedForeground};`,
    `  --role-border: ${r?.border ?? s.border};`,
    `  --role-input: ${r?.input ?? s.input ?? s.border};`,
    `  --role-ring: ${r?.ring ?? s.ring};`
  ];
  if (r?.brand) {
    roleLines.push(`  --role-brand: ${r.brand};`);
    roleLines.push(
      `  --role-brand-fg: ${r.brandForeground ?? r.actionForeground ?? s.primaryForeground};`
    );
    roleLines.push(`  --brand-mark: ${r.brand};`);
    roleLines.push(
      `  --brand-mark-foreground: ${r.brandForeground ?? r.actionForeground ?? s.primaryForeground};`
    );
  }
  const semantic = [
    ``,
    `  /* \u2500\u2500 shadcn bridge (primary = action CTA) \u2500\u2500 */`,
    `  --background: ${s.background};`,
    `  --foreground: ${s.foreground};`,
    `  --card: ${s.card};`,
    `  --card-foreground: ${s.cardForeground};`,
    `  --popover: ${s.popover};`,
    `  --popover-foreground: ${s.popoverForeground};`,
    `  --primary: ${s.primary};`,
    `  --primary-foreground: ${s.primaryForeground};`,
    `  --secondary: ${s.secondary};`,
    `  --secondary-foreground: ${s.secondaryForeground};`,
    `  --muted: ${s.muted};`,
    `  --muted-foreground: ${s.mutedForeground};`,
    `  --accent: ${hover.accent};`,
    `  --accent-foreground: ${hover.accentForeground};`,
    `  --destructive: ${s.destructive};`,
    `  --destructive-foreground: ${s.destructiveForeground};`,
    `  --border: ${s.border};`,
    // Field stroke, not field fill: --input reaches the DOM only through
    // `border-input`. A language that omits it inherits the hairline colour,
    // which is always a visible boundary — writing the surface colour here
    // drew the outline in the same colour as what sits behind it.
    `  --input: ${s.input ?? s.border};`,
    `  --ring: ${s.ring};`
  ];
  if (s.success) semantic.push(`  --success: ${s.success};`);
  if (s.successForeground) semantic.push(`  --success-foreground: ${s.successForeground};`);
  if (s.warning) semantic.push(`  --warning: ${s.warning};`);
  if (s.warningForeground) semantic.push(`  --warning-foreground: ${s.warningForeground};`);
  if (s.info) semantic.push(`  --info: ${s.info};`);
  if (s.infoForeground) semantic.push(`  --info-foreground: ${s.infoForeground};`);
  semantic.push(
    `  --sidebar: ${s.card};`,
    `  --sidebar-foreground: ${s.foreground};`,
    `  --sidebar-primary: ${s.primary};`,
    `  --sidebar-primary-foreground: ${s.primaryForeground};`,
    `  --sidebar-accent: ${hover.accent};`,
    `  --sidebar-accent-foreground: ${hover.accentForeground};`,
    `  --sidebar-border: ${s.border};`,
    `  --sidebar-ring: ${s.ring};`,
    // The identity aliases, taken over by the language.
    //
    // These were the one family a Brand Package did not reach: --brand-primary
    // and --brand-accent are declared in styles.css as Nebutra's own #0033FE and
    // #0BF1C3, and no skin overrode them. Switching to Linear moved three
    // thousand semantic usages and left seventy-five sitting in Nebutra's cyan —
    // a page that reads as half-switched rather than as another language.
    //
    // A language has exactly two vivid hues to offer, and they are `roles.brand`
    // — the identity mark — and `roles.action`, the product fill. Notion is blue
    // on black, Raycast coral behind near-white chrome, Stripe indigo on
    // midnight. --brand-primary takes the mark, --brand-accent the action, and a
    // language declaring no separate mark simply shows one hue in both, which is
    // true of it rather than a gap to paper over.
    //
    // NOT `semantic.accent`: that is the shadcn hover-surface role, and mapping
    // it here produced --brand-accent: 220 14% 96% for Linear and 70 5% 25% for
    // GSAP. The glow elevations would have tinted themselves with a hover grey.
    // Same slot-versus-role confusion as --radius-md and --input, one family out.
    //
    // --brand-tertiary falls back to the accent rather than inventing a third
    // hue: two honest hues beat three where one is made up.
    //
    // Emitted as complete colours, not channel triples. --brand-accent is read
    // inside `color-mix(in srgb, var(--brand-accent) 8%, transparent)` by the
    // glow elevations, and a bare triple there voids the whole declaration —
    // silently, which is the failure this codebase keeps relearning.
    `  --brand-primary: hsl(${r?.brand ?? s.primary});`,
    `  --brand-accent: hsl(${s.primary});`,
    `  --brand-accent-foreground: hsl(${s.primaryForeground});`,
    `  --brand-tertiary: hsl(${s.primary});`,
    `  --brand-gradient: hsl(var(--primary));`,
    `  --brand-gradient-reverse: hsl(var(--primary));`,
    `  --brand-gradient-vertical: hsl(var(--primary));`,
    `  --brand-gradient-radial: hsl(var(--primary));`
  );
  return [...roleLines, ...semantic, ...neutralRamp(s, r)];
}
function emitBrandCss(brand, options = {}) {
  const mode = options.mode ?? "global";
  const root = options.root ?? "html";
  const b = normalizeBrandPackage(brand);
  const t = b.typography;
  const dual = isDualModeBrand(b);
  const parts = [
    `/**`,
    ` * Brand carrier skin: ${b.name} (${b.id}) v${b.version}`,
    ` * darkDefault=${b.darkDefault} dualMode=${dual} button=${b.recipe.buttonDefault}`,
    ` * fonts=${t.faces?.length ?? 0} mode=${mode}`,
    ` * Contract: roles.action \u2192 --primary; roles.brand \u2192 --brand-mark (never default CTA)`,
    ` */`,
    ``,
    ...emitFontFaces(t.faces)
  ];
  const fontSans = withCjkTail(cssFontStack(t.fontSans));
  const fontDisplay = withCjkTail(cssFontStack(t.fontDisplay ?? t.fontSans));
  const typeLines = [
    `  --font-sans: ${fontSans};`,
    // The CJK-locale rule in base.css sets body's font-family from --font-cn,
    // which sits above --font-sans in specificity. A skin that left it alone
    // was silently overruled on every Chinese page: picking a design language
    // changed nothing about the type. The tail is already in fontSans, so the
    // two stacks are the same stack.
    `  --font-cn: ${fontSans};`,
    `  --font-heading: ${fontDisplay};`,
    `  --font-display: ${fontDisplay};`
  ];
  if (t.fontMono) typeLines.push(`  --font-mono: ${cssFontStack(t.fontMono)};`);
  if (t.headingWeight != null) {
    typeLines.push(`  --font-weight-heading: ${t.headingWeight};`);
  }
  const cats = b.extensions?.categories;
  const decorative = b.extensions?.decorative;
  const extLines = [];
  if (cats) {
    for (const [key, value] of Object.entries(cats)) {
      const safe = key.replace(/[^a-z0-9_-]/gi, "-").toLowerCase();
      extLines.push(`  --brand-category-${safe}: ${value};`);
    }
  }
  if (decorative) {
    for (const [key, value] of Object.entries(decorative)) {
      const safe = key.replace(/[^a-z0-9_-]/gi, "-").toLowerCase();
      extLines.push(`  --brand-decorative-${safe}: ${value};`);
    }
  }
  const sharedChrome = [
    ``,
    `  /* Recipe (action language + free elev/radii) */`,
    ...recipeVars(b.recipe),
    ``,
    `  /* Typography */`,
    ...typeLines,
    ...motionVars(b.motion),
    ...spacingVars(b.spacing),
    ...extLines.length ? ["", "  /* Taxonomy / decorative (not product CTA) */", ...extLines] : []
  ];
  if (dual && b.modes?.light?.semantic && b.modes?.dark?.semantic) {
    parts.push(emitLightModeSelector(b.id, mode, root));
    parts.push(
      ...emitColorVars(b.modes.light.semantic, b.modes.light.roles),
      ...sharedChrome,
      `}`,
      ``
    );
    parts.push(emitDarkModeSelector(b.id, mode, root));
    parts.push(...emitColorVars(b.modes.dark.semantic, b.modes.dark.roles), `}`, ``);
  } else {
    const selector = mode === "scoped" ? `${root}[data-brand="${b.id}"] {` : emitGlobalSkinSelector(b.id, b.darkDefault, root);
    parts.push(selector);
    parts.push(...emitColorVars(b.semantic, b.roles), ...sharedChrome, `}`, ``);
  }
  return parts.join("\n");
}

// src/brand-package/apply-brand.ts
var BRAND_STYLE_ELEMENT_ID = "nebutra-brand-skin";
var BRAND_STORAGE_KEY = "nebutra-brand-package";
function targetDoc(doc) {
  if (doc) return doc;
  if (typeof document === "undefined") return null;
  return document;
}
function applyBrandCss(css, brandId, options = {}) {
  const d = targetDoc(options.doc);
  if (!d) return;
  let el = d.getElementById(BRAND_STYLE_ELEMENT_ID);
  if (!el) {
    el = d.createElement("style");
    el.id = BRAND_STYLE_ELEMENT_ID;
    el.setAttribute("data-nebutra-brand", brandId ?? "custom");
    d.head.appendChild(el);
  }
  el.textContent = css;
  if (brandId) {
    d.documentElement.dataset.brand = brandId;
  }
}
function applyBrandPackage(brand, options = {}) {
  const css = emitBrandCss(brand);
  applyBrandCss(css, brand.id, options);
  if (options.persist && typeof localStorage !== "undefined") {
    try {
      localStorage.setItem(BRAND_STORAGE_KEY, JSON.stringify(brand));
    } catch {
    }
  }
}
function clearBrand(options = {}) {
  const d = targetDoc(options.doc);
  if (!d) return;
  d.getElementById(BRAND_STYLE_ELEMENT_ID)?.remove();
  delete d.documentElement.dataset.brand;
  if (options.persist && typeof localStorage !== "undefined") {
    try {
      localStorage.removeItem(BRAND_STORAGE_KEY);
    } catch {
    }
  }
}
function restorePersistedBrand(options = {}) {
  if (typeof localStorage === "undefined") return null;
  try {
    const raw = localStorage.getItem(BRAND_STORAGE_KEY);
    if (!raw) return null;
    const brand = JSON.parse(raw);
    if (!brand?.id || !brand?.semantic || !brand?.recipe) return null;
    applyBrandPackage(brand, { ...options, persist: false });
    return brand;
  } catch {
    return null;
  }
}
function getActiveBrandId(doc) {
  const d = targetDoc(doc);
  return d?.documentElement.dataset.brand ?? null;
}

// src/brand-package/use-brand.ts
function useBrand(options = {}) {
  const { autoRestore = false, persist = true } = options;
  const [brand, setBrand] = useState(null);
  const [brandId, setBrandId] = useState(null);
  useEffect(() => {
    if (!autoRestore) return;
    const restored = restorePersistedBrand({ persist: false });
    if (restored) {
      setBrand(restored);
      setBrandId(restored.id);
    } else {
      setBrandId(getActiveBrandId());
    }
  }, [autoRestore]);
  const apply = useCallback(
    (next) => {
      applyBrandPackage(next, { persist });
      setBrand(next);
      setBrandId(next.id);
    },
    [persist]
  );
  const clear = useCallback(() => {
    clearBrand({ persist });
    setBrand(null);
    setBrandId(null);
  }, [persist]);
  const restore = useCallback(() => {
    const restored = restorePersistedBrand({ persist: false });
    if (restored) {
      setBrand(restored);
      setBrandId(restored.id);
    }
    return restored;
  }, []);
  return { brand, brandId, apply, clear, restore };
}
function ensureIframeDoc(iframe) {
  if (!iframe) return null;
  try {
    return iframe.contentDocument;
  } catch {
    return null;
  }
}
function injectBaseStyles(doc, hrefs) {
  if (!hrefs?.length) return;
  for (const href of hrefs) {
    const id = `nebutra-base-${hashHref(href)}`;
    if (doc.getElementById(id)) continue;
    const link = doc.createElement("link");
    link.id = id;
    link.rel = "stylesheet";
    link.href = href;
    doc.head.appendChild(link);
  }
}
function hashHref(href) {
  let h = 0;
  for (let i = 0; i < href.length; i++) h = h * 31 + href.charCodeAt(i) | 0;
  return Math.abs(h).toString(36);
}
function useBrandIframePreview(options = {}) {
  const iframeRef = useRef(null);
  const [brand, setBrand] = useState(null);
  const optsRef = useRef(options);
  optsRef.current = options;
  const apply = useCallback((next) => {
    const doc = ensureIframeDoc(iframeRef.current);
    if (!doc?.documentElement) {
      setBrand(next);
      return;
    }
    injectBaseStyles(doc, optsRef.current.baseStylesheetHrefs);
    applyBrandPackage(next, { doc, persist: false });
    setBrand(next);
    optsRef.current.onApplied?.(next);
  }, []);
  const clear = useCallback(() => {
    const doc = ensureIframeDoc(iframeRef.current);
    if (doc) clearBrand({ doc, persist: false });
    setBrand(null);
    optsRef.current.onApplied?.(null);
  }, []);
  const writePreviewDocument = useCallback((next, bodyHtml = "") => {
    const iframe = iframeRef.current;
    if (!iframe) return;
    const css = emitBrandCss(next);
    const links = (optsRef.current.baseStylesheetHrefs ?? []).map((href) => `<link rel="stylesheet" href="${href}" />`).join("\n");
    const html = `<!DOCTYPE html>
<html lang="en" data-brand="${next.id}" class="${next.darkDefault ? "dark" : ""}">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  ${links}
  ${optsRef.current.headHtml ?? ""}
  <style id="nebutra-brand-skin">${css}</style>
  <style>
    html, body { margin: 0; min-height: 100%; }
    body {
      font-family: var(--font-sans, system-ui, sans-serif);
      background: hsl(var(--background));
      color: hsl(var(--foreground));
    }
  </style>
</head>
<body class="${optsRef.current.bodyClassName ?? ""} bg-background text-foreground">
  ${bodyHtml}
</body>
</html>`;
    iframe.srcdoc = html;
    setBrand(next);
    optsRef.current.onApplied?.(next);
  }, []);
  return { iframeRef, brand, apply, clear, writePreviewDocument };
}
function applyBrandToIframe(iframe, brand, options = {}) {
  const doc = iframe.contentDocument;
  if (!doc) return;
  injectBaseStyles(doc, options.baseStylesheetHrefs);
  applyBrandPackage(brand, { ...options, doc, persist: false });
}
export {
  applyBrandToIframe,
  useBrand,
  useBrandIframePreview
};
//# sourceMappingURL=use-brand.js.map