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
var SOFT_CARD = "var(--shadow-sm, 0 1px 2px 0 rgb(0 0 0 / 0.05))";
var SOFT_CONTROL = "var(--shadow-xs, 0 1px 2px 0 rgb(0 0 0 / 0.04))";
var SOFT_RAISED = "var(--shadow-md, 0 4px 6px -1px rgb(0 0 0 / 0.1))";
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

// src/brand-package/emit-css.ts
function cssFontStack(stack) {
  return stack.replace(/'/g, '"');
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
    `  --radius-md: ${radii.button};`,
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
function emitFontFaces(faces) {
  if (!faces?.length) return [];
  const out = ["/* Brand font faces */"];
  for (const face of faces) {
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
function emitGlobalSkinSelector(brandId, darkDefault) {
  if (darkDefault) {
    return `:root,
.dark,
html[data-brand="${brandId}"] {`;
  }
  return `:root,
html[data-brand="${brandId}"] {`;
}
function emitLightModeSelector(brandId, mode) {
  if (mode === "scoped") return `html[data-brand="${brandId}"] {`;
  return `:root,
html[data-brand="${brandId}"] {`;
}
function emitDarkModeSelector(brandId, mode) {
  if (mode === "scoped") return `html.dark[data-brand="${brandId}"] {`;
  return `.dark,
html.dark[data-brand="${brandId}"] {`;
}
function emitColorVars(s, r) {
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
    `  --accent: ${s.accent};`,
    `  --accent-foreground: ${s.accentForeground};`,
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
    `  --sidebar-accent: ${s.accent};`,
    `  --sidebar-accent-foreground: ${s.accentForeground};`,
    `  --sidebar-border: ${s.border};`,
    `  --sidebar-ring: ${s.ring};`,
    `  --brand-gradient: hsl(var(--primary));`,
    `  --brand-gradient-reverse: hsl(var(--primary));`,
    `  --brand-gradient-vertical: hsl(var(--primary));`,
    `  --brand-gradient-radial: hsl(var(--primary));`
  );
  return [...roleLines, ...semantic];
}
function emitBrandCss(brand, options = {}) {
  const mode = options.mode ?? "global";
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
  const fontSans = cssFontStack(t.fontSans);
  const fontDisplay = cssFontStack(t.fontDisplay ?? t.fontSans);
  const typeLines = [
    `  --font-sans: ${fontSans};`,
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
    parts.push(emitLightModeSelector(b.id, mode));
    parts.push(
      ...emitColorVars(b.modes.light.semantic, b.modes.light.roles),
      ...sharedChrome,
      `}`,
      ``
    );
    parts.push(emitDarkModeSelector(b.id, mode));
    parts.push(...emitColorVars(b.modes.dark.semantic, b.modes.dark.roles), `}`, ``);
  } else {
    const selector = mode === "scoped" ? `html[data-brand="${b.id}"] {` : emitGlobalSkinSelector(b.id, b.darkDefault);
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

// src/brand-package/compile-helpers.ts
function leafHex(tree, path) {
  let cur = tree;
  for (const p of path) {
    if (!cur || typeof cur !== "object") return void 0;
    cur = cur[p];
  }
  if (!cur || typeof cur !== "object") return void 0;
  const v = cur.$value ?? cur.value;
  return typeof v === "string" ? v : void 0;
}
function detectPreset(idHint, colors) {
  const id = idHint.toLowerCase();
  if (id.includes("linear")) return "linear";
  if (id.includes("gsap")) return "gsap";
  if (id.includes("raycast")) return "raycast";
  if (id.includes("vercel")) return "vercel";
  if (id.includes("vanta")) return "vanta";
  if (id.includes("stripe")) return "stripe";
  if (id.includes("notion")) return "notion";
  if (colors["paper-white"] && colors.obsidian && colors.hairline) return "vercel";
  if (colors["coral-pulse"] || colors["void-black"] && colors.mist && colors.ink) {
    return "raycast";
  }
  if (colors["acid-lime"] || colors.void) return "linear";
  if (colors["shockingly-green"] || colors["surface-cream"] || colors["just-black"]) return "gsap";
  if (colors["just-black"] && colors["surface-cream"]) return "gsap";
  if ((colors["notion-blue"] || colors["paper-warmth"]) && (colors["paper-warmth"] || colors["ink-black"]) && (colors["sky-tint"] || colors.marigold || colors.coral)) {
    return "notion";
  }
  if (colors["indigo-ink"] && colors["pure-white"] && (colors.frost || colors["lavender-border"] || colors["midnight-ink"]) && !colors["paper-warmth"]) {
    return "stripe";
  }
  if ((colors["indigo-ink"] || colors["vivid-violet"]) && (colors.parchment || colors["lavender-wash"] || colors.paper) && !colors["pure-white"]) {
    return "vanta";
  }
  return "generic";
}
function pickUiFontFamily(font) {
  const preferUi = /(inter|geist|manrope|dm sans|sans|ui)/i;
  const avoidDisplay = /(reckless|serif|display|editorial|playfair|lora|source serif)/i;
  const entries = Object.entries(font);
  for (const [k, v] of entries) {
    if (!v || typeof v !== "object") continue;
    const name = String(v.$value ?? v.value ?? "");
    if (!name || avoidDisplay.test(k) || avoidDisplay.test(name)) continue;
    if (preferUi.test(k) || preferUi.test(name) || entries.length === 1) return name;
  }
  for (const [k, v] of entries) {
    if (!v || typeof v !== "object") continue;
    const name = String(v.$value ?? v.value ?? "");
    if (name && !avoidDisplay.test(k) && !avoidDisplay.test(name)) return name;
  }
  return void 0;
}
function pickDisplayFontFamily(font) {
  const prefer = /(reckless|serif|display|editorial|playfair|lora|source serif|mori)/i;
  for (const [k, v] of Object.entries(font)) {
    if (!v || typeof v !== "object") continue;
    const name = String(v.$value ?? v.value ?? "");
    if (name && (prefer.test(k) || prefer.test(name))) return name;
  }
  return void 0;
}
var COLOR_KEY_ALIASES = {
  background: ["background", "canvas", "page-canvas"],
  foreground: ["foreground", "ink", "ink-black"],
  card: ["card", "card-surface", "surface"],
  "card-foreground": ["card-foreground"],
  cardForeground: ["card-foreground"],
  primary: ["primary", "action"],
  "primary-foreground": ["primary-foreground"],
  primaryForeground: ["primary-foreground"],
  secondary: ["secondary", "quiet"],
  "secondary-foreground": ["secondary-foreground"],
  secondaryForeground: ["secondary-foreground"],
  muted: ["muted"],
  "muted-foreground": ["muted-foreground", "mutedForeground", "stone"],
  mutedForeground: ["muted-foreground", "stone"],
  accent: ["accent"],
  "accent-foreground": ["accent-foreground"],
  accentForeground: ["accent-foreground"],
  border: ["border", "hairline"],
  input: ["input"],
  ring: ["ring"],
  destructive: ["destructive"],
  "destructive-foreground": ["destructive-foreground"],
  destructiveForeground: ["destructive-foreground"],
  success: ["success"],
  popover: ["popover"],
  "popover-foreground": ["popover-foreground"],
  popoverForeground: ["popover-foreground"]
};
function isUsableColorValue(val) {
  const t = val.trim();
  if (!t) return false;
  if (t.startsWith("#")) return true;
  if (/^\d+(\.\d+)?\s+\d+(\.\d+)?%\s+\d+(\.\d+)?%$/.test(t)) return true;
  if (/^hsla?\(/i.test(t) || /^rgba?\(/i.test(t)) return true;
  return false;
}
function collectColors(colorRoot) {
  const raw = {};
  if (!colorRoot || typeof colorRoot !== "object") return raw;
  for (const [k, v] of Object.entries(colorRoot)) {
    if (!v || typeof v !== "object") continue;
    const val = v.$value ?? v.value;
    if (typeof val === "string" && isUsableColorValue(val)) raw[k] = val.trim();
  }
  const out = { ...raw };
  for (const [key, value] of Object.entries(raw)) {
    const aliases = COLOR_KEY_ALIASES[key];
    if (!aliases) continue;
    for (const alias of aliases) {
      if (!out[alias]) out[alias] = value;
    }
  }
  return out;
}
function collectSurfaces(surfaceRoot) {
  return collectColors(surfaceRoot);
}

// src/brand-package/infer-recipe.ts
function inferRecipeFromDesignMd(designMd) {
  const t = designMd.toLowerCase();
  const notes = [];
  const hints = { notes };
  const outlineFirst = t.includes("outlined-only") || t.includes("outline-only") || t.includes("ghost pill") || t.includes("ghost-pill") || t.includes("no filled") || t.includes("don't add filled") || t.includes("do not add filled") || t.includes("never fill") || t.includes("outlined") && t.includes("button") && !t.includes("filled cta");
  const gradientStroke = t.includes("gradient-stroked") || t.includes("gradient stroke") || t.includes("gradient-stroked cta") || t.includes("border-image") || t.includes("gradient border") && (t.includes("cta") || t.includes("button"));
  const neutralFilled = t.includes("no chromatic") || t.includes("deliberately neutral") || t.includes("neutral rather than chromatic") || t.includes("no chromatic action") || t.includes("don't use chromatic action") || t.includes("do not use chromatic action") || t.includes("mist") && t.includes("filled") && (t.includes("iron") || t.includes("neutral"));
  const solidCta = neutralFilled || t.includes("filled") && (t.includes("primary") || t.includes("cta") || t.includes("download") || t.includes("action button") || t.includes("primary action") || t.includes("filled button"));
  if (gradientStroke) {
    hints.buttonDefault = "gradient-stroke";
    notes.push("DESIGN.md: gradient-stroke CTA");
  } else if (outlineFirst && !solidCta) {
    hints.buttonDefault = "outline";
    notes.push("DESIGN.md: outline-first controls");
  } else if (solidCta) {
    hints.buttonDefault = "solid";
    if (neutralFilled) notes.push("DESIGN.md: neutral filled CTA (not chromatic)");
  }
  const forbidsAnyShadow = t.includes("avoids shadows") || t.includes("avoid shadows") || t.includes("avoids shadows entirely") || t.includes("no card has a box-shadow") || t.includes("no button has a shadow") || t.includes("never from box-shadow") || t.includes("never from elevation") || t.includes("depth comes from background tint") || t.includes("depth comes from background") || t.includes("no shadows, blurs") || t.includes("do not use shadows") || t.includes("don't use shadows") || t.includes("rejects drop shadows") || t.includes("reject drop shadows") || t.includes("don't drop shadows") || t.includes("do not drop shadows") || t.includes("don't apply drop shadows") || t.includes("do not apply drop shadows") || t.includes("don't add drop-shadows") || t.includes("do not add drop-shadows") || t.includes("never use drop-shadows") || t.includes("no drop shadow") || t.includes("no box-shadow") || t.includes("never via box-shadow") || t.includes("border is the elevation") || t.includes("no shadow \u2014 the border") || t.includes("no shadow - the border") || t.includes("depth is communicated only") || t.includes("no shadow") && t.includes("border") || t.includes("flat") && t.includes("1px") && t.includes("border");
  const keyElev = t.includes("keyboard key") || t.includes("key shadow") || t.includes("key cap") || t.includes("inset top") && t.includes("highlight") && t.includes("shadow");
  const hairlineRingElev = !forbidsAnyShadow && (t.includes("stacked box-shadow") || t.includes("double-ring") || t.includes("build depth with hairline") || t.includes("hairline") && t.includes("box-shadow") && (t.includes("never with drop-shadow") || t.includes("never use drop-shadow") || t.includes("not with drop-shadow")));
  if (keyElev) {
    hints.elevationPreset = "key";
    notes.push("DESIGN.md: key/inset elevation");
  } else if (forbidsAnyShadow) {
    hints.elevationPreset = "none";
    notes.push("DESIGN.md: elevation=none (no box-shadow / tint+border depth)");
  } else if (hairlineRingElev) {
    hints.elevationPreset = "hairline";
    notes.push("DESIGN.md: hairline ring elevation");
  }
  if (/\*\*density:\*\*\s*comfortable|density:\s*comfortable|\bdensity\b[^\n]{0,20}comfortable/i.test(
    designMd
  )) {
    hints.density = "comfortable";
  } else if (/\*\*density:\*\*\s*spacious|density:\s*spacious/i.test(designMd)) {
    hints.density = "spacious";
  } else if (/\*\*density:\*\*\s*compact|density:\s*compact/i.test(designMd)) {
    hints.density = "compact";
  } else if ((t.includes("compact density") || t.includes("8\u201312px") || t.includes("8-12px")) && !t.includes("comfortable")) {
    hints.density = "compact";
  } else if (t.includes("comfortable") || t.includes("spacious")) {
    hints.density = t.includes("spacious") ? "spacious" : "comfortable";
  }
  const tableButton = designMd.match(/\|\s*buttons\s*\|\s*(\d+px|9999?px)\s*\|/i);
  const tableCards = designMd.match(/\|\s*cards\s*\|\s*(\d+px|9999?px)\s*\|/i);
  const tableButtonRadius = tableButton?.[1];
  const tableCardsRadius = tableCards?.[1];
  const radii = {};
  if (tableButtonRadius) {
    radii.button = tableButtonRadius;
    notes.push(`DESIGN.md: table buttons radius ${tableButtonRadius}`);
  } else if (t.includes("4px border-radius on all buttons") || t.includes("use 4px border-radius on all") || t.includes("never pill") && t.includes("4px") && t.includes("button")) {
    radii.button = "4px";
    notes.push("DESIGN.md: 4px control radius (not pill)");
  } else if ((t.includes("999px") || t.includes("9999px")) && (t.includes("button") || t.includes("pill-shaped")) && !t.includes("never pill") && !t.includes("not pill") && !t.includes("pills only") || t.includes("pill-shaped") && t.includes("button")) {
    radii.button = t.includes("9999px") ? "9999px" : "999px";
    notes.push("DESIGN.md: full pill control radius");
  } else if (/\bbuttons?\b[^\n.|]{0,48}\b8px\b/.test(t) || t.includes("8px for buttons")) {
    radii.button = "8px";
  } else if (/\bbuttons?\b[^\n.|]{0,48}\b6px\b/.test(t) || t.includes("button radius to 6px")) {
    radii.button = "6px";
  } else if (t.includes("100px") && (t.includes("button") || t.includes("pill button"))) {
    radii.button = "100px";
  }
  if (tableCardsRadius) {
    radii.card = tableCardsRadius;
    notes.push(`DESIGN.md: table cards radius ${tableCardsRadius}`);
  }
  if (radii.button != null || radii.card != null) {
    hints.radii = radii;
  }
  return hints;
}

// src/brand-package/presets/recipe.ts
function buildRecipe(input) {
  const button = input.radii?.button ?? "0.375rem";
  const card = input.radii?.card ?? "0.75rem";
  const badge = input.radii?.badge ?? "9999px";
  const radii = {
    button,
    card,
    badge,
    input: input.radii?.input ?? button,
    pill: input.radii?.pill ?? "9999px"
  };
  const elevationPreset = input.elevationPreset ?? "soft";
  const elevationTokens = input.elevationTokens ?? elevationPresetToTokens(elevationPreset, input.cardShadow);
  const recipe = {
    buttonDefault: input.buttonDefault,
    density: input.density ?? "comfortable",
    radii,
    elevationTokens
  };
  if (input.badgeDefault) recipe.badgeDefault = input.badgeDefault;
  if (input.primaryStrokeGradient) recipe.primaryStrokeGradient = input.primaryStrokeGradient;
  if (input.outlineBorder) recipe.outlineBorder = input.outlineBorder;
  return recipe;
}

// src/brand-package/presets/generic.ts
function buildGeneric(ctx) {
  ctx.warnings.push(
    "Unknown brand layout \u2014 compiled with heuristic recipe. Review mapping in Create Center."
  );
  ctx.warnings.push(...ctx.recipeHints.notes);
  const entries = Object.entries(ctx.colors);
  const pick = (...keys) => {
    for (const k of keys) {
      if (ctx.colors[k]) return ctx.colors[k];
    }
    return void 0;
  };
  const bg = pick(
    "paper-warmth",
    "paper-white",
    "page-canvas",
    "parchment",
    "pure-white",
    "paper",
    "background",
    "canvas",
    "void-black",
    "void",
    "just-black",
    "off-black"
  ) ?? "#0a0a0a";
  const isLightCanvas = (() => {
    try {
      const m = tryHexToHsl(bg, "0 0% 4%").match(/(\d+)%\s*$/);
      return m ? Number(m[1]) >= 50 : false;
    } catch {
      return false;
    }
  })();
  const fg = isLightCanvas ? pick(
    "ink-black",
    "carbon",
    "charcoal",
    "obsidian",
    "foreground",
    "ink",
    "midnight-ink",
    "deep-violet",
    "slate"
  ) ?? "#181822" : pick("pure-white", "paper", "surface-cream", "bone", "mist", "foreground", "white") ?? "#ffffff";
  const primary = pick(
    "notion-blue",
    "indigo-ink",
    "vivid-violet",
    "primary",
    "acid-lime",
    "obsidian",
    "shockingly-green",
    "brand",
    "accent",
    "mid-violet",
    "amethyst-edge",
    "signal-blue"
  ) ?? entries.find(
    ([k]) => !/void|black|canvas|graphite|paper|hairline|ash|parchment|fog|lavender|steel|slate|carbon|mist|frost|smoke|white|midnight|warmth|tint|wash|marigold|coral|saffron|mocha|vermillion|sky/i.test(
      k
    )
  )?.[1] ?? (isLightCanvas ? "#171717" : "#3b82f6");
  const brandMarkHex = pick("ink-black", "coral-pulse", "brand-mark", "logo", "wordmark", "charcoal", "deep-violet") ?? void 0;
  const border = isLightCanvas ? pick("frost", "hairline", "border", "ash", "carbon", "lilac-border", "slate") ?? "#e5e5e5" : pick("hairline", "border", "slate", "graphite", "surface-25", "smoke") ?? "#333333";
  const mutedFg = pick(
    "stone",
    "charcoal",
    "graphite",
    "steel",
    "slate",
    "muted",
    "smoke",
    "ash",
    "fog",
    "surface-50"
  ) ?? "#888888";
  const card = isLightCanvas ? pick("pure-white", "paper", "card-surface", "card") ?? "#ffffff" : pick("ink", "carbon", "off-black", "obsidian", "card") ?? bg;
  const quiet = isLightCanvas ? pick("sky-tint", "periwinkle-wash", "lavender-wash", "mist", "fog", "ash", "secondary") ?? border : pick("graphite", "obsidian", "smoke", "secondary") ?? border;
  const uiFont = pickUiFontFamily(ctx.font) ?? "Inter";
  const displayFont = pickDisplayFontFamily(ctx.font);
  let elevationPreset = ctx.recipeHints.elevationPreset ?? "soft";
  if (elevationPreset === "key" && isLightCanvas) elevationPreset = "hairline";
  const brand = {
    id: ctx.id,
    name: ctx.siteName,
    darkDefault: !isLightCanvas,
    version: "0.1.0",
    semantic: isLightCanvas ? {
      background: tryHexToHsl(bg, "0 0% 98%"),
      foreground: tryHexToHsl(fg, "0 0% 9%"),
      card: tryHexToHsl(card, "0 0% 100%"),
      cardForeground: tryHexToHsl(fg, "0 0% 9%"),
      popover: tryHexToHsl(card, "0 0% 100%"),
      popoverForeground: tryHexToHsl(fg, "0 0% 9%"),
      primary: tryHexToHsl(primary, "0 0% 9%"),
      primaryForeground: tryHexToHsl(card, "0 0% 100%"),
      secondary: tryHexToHsl(quiet, "0 0% 92%"),
      secondaryForeground: tryHexToHsl(fg, "0 0% 9%"),
      muted: tryHexToHsl(quiet, "0 0% 92%"),
      mutedForeground: tryHexToHsl(mutedFg, "0 0% 40%"),
      accent: tryHexToHsl(quiet, "0 0% 92%"),
      accentForeground: tryHexToHsl(fg, "0 0% 9%"),
      destructive: "0 72% 51%",
      destructiveForeground: "0 0% 100%",
      border: tryHexToHsl(border, "0 0% 20%"),
      input: tryHexToHsl(card, "0 0% 100%"),
      ring: tryHexToHsl(primary, "0 0% 9%")
    } : {
      background: tryHexToHsl(bg, "0 0% 4%"),
      foreground: tryHexToHsl(fg, "0 0% 98%"),
      card: tryHexToHsl(card, "0 0% 8%"),
      cardForeground: tryHexToHsl(fg, "0 0% 98%"),
      popover: tryHexToHsl(card, "0 0% 8%"),
      popoverForeground: tryHexToHsl(fg, "0 0% 98%"),
      primary: tryHexToHsl(primary, "217 91% 60%"),
      primaryForeground: tryHexToHsl(bg, "0 0% 4%"),
      secondary: tryHexToHsl(border, "0 0% 20%"),
      secondaryForeground: tryHexToHsl(fg, "0 0% 98%"),
      muted: tryHexToHsl(card, "0 0% 8%"),
      mutedForeground: tryHexToHsl(mutedFg, "0 0% 53%"),
      accent: tryHexToHsl(border, "0 0% 20%"),
      accentForeground: tryHexToHsl(primary, "217 91% 60%"),
      destructive: "0 72% 51%",
      destructiveForeground: "0 0% 100%",
      border: tryHexToHsl(border, "0 0% 20%"),
      input: tryHexToHsl(border, "0 0% 20%"),
      ring: tryHexToHsl(primary, "217 91% 60%")
    },
    recipe: buildRecipe({
      buttonDefault: ctx.recipeHints.buttonDefault ?? "solid",
      radii: {
        button: ctx.recipeHints.radii?.button ?? leafHex(ctx.radius, ["buttons"]) ?? leafHex(ctx.radius, ["md"]) ?? "0.375rem",
        card: ctx.recipeHints.radii?.card ?? leafHex(ctx.radius, ["cards"]) ?? leafHex(ctx.radius, ["xl"]) ?? leafHex(ctx.radius, ["lg"]) ?? "0.75rem",
        badge: leafHex(ctx.radius, ["pills"]) ?? leafHex(ctx.radius, ["badges"]) ?? "9999px",
        input: leafHex(ctx.radius, ["inputs"]) ?? ctx.recipeHints.radii?.button ?? "0.375rem"
      },
      elevationPreset,
      density: ctx.recipeHints.density ?? "comfortable",
      outlineBorder: isLightCanvas ? border : fg,
      badgeDefault: brandMarkHex ? "muted" : "match-action"
    }),
    typography: {
      fontSans: `'${uiFont}', ui-sans-serif, system-ui, sans-serif`,
      ...displayFont ? { fontDisplay: `'${displayFont}', ui-serif, Georgia, serif` } : {},
      headingWeight: isLightCanvas ? 500 : 600
    },
    extensions: {
      ...typeof ctx.refero.url === "string" ? { sourceUrl: ctx.refero.url } : {},
      ...brandMarkHex ? { categories: { brand: brandMarkHex } } : {},
      notes: [
        "Generic compile \u2014 verify primary + buttonDefault in Create Center.",
        ...brandMarkHex ? ["Detected separate brand-mark color (categories.brand \u2192 --brand-mark)."] : []
      ]
    }
  };
  return brand;
}

// src/brand-package/presets/gsap.ts
function buildGsap(ctx) {
  const canvas = ctx.colors["just-black"] ?? ctx.colors.canvas ?? "#0e100f";
  const cream = ctx.colors["surface-cream"] ?? ctx.colors["cream-surface"] ?? "#fffce1";
  const muted = ctx.colors["surface-50"] ?? "#7c7c6f";
  const hairline = ctx.colors["surface-25"] ?? "#42433d";
  const nested = ctx.colors["off-black"] ?? ctx.colors["nested-panel"] ?? "#191919";
  const green = ctx.colors["shockingly-green"] ?? "#0ae448";
  ctx.warnings.push(
    "GSAP: shockingly-green is accent/link only \u2014 buttonDefault=outline (no solid green fill)."
  );
  const buttonDefault = ctx.recipeHints.buttonDefault ?? "gradient-stroke";
  const brand = {
    id: "gsap",
    name: "GSAP",
    darkDefault: true,
    version: "1.0.0",
    semantic: {
      // Primary for *links/accents* — filled solid CTAs are disabled by recipe
      background: tryHexToHsl(canvas, "150 8% 6%"),
      foreground: tryHexToHsl(cream, "54 100% 94%"),
      card: tryHexToHsl(nested, "0 0% 10%"),
      cardForeground: tryHexToHsl(cream, "54 100% 94%"),
      popover: tryHexToHsl(nested, "0 0% 10%"),
      popoverForeground: tryHexToHsl(cream, "54 100% 94%"),
      primary: tryHexToHsl(green, "136 91% 47%"),
      primaryForeground: tryHexToHsl(canvas, "150 8% 6%"),
      secondary: tryHexToHsl(hairline, "60 5% 25%"),
      secondaryForeground: tryHexToHsl(cream, "54 100% 94%"),
      muted: tryHexToHsl(nested, "0 0% 10%"),
      mutedForeground: tryHexToHsl(muted, "60 6% 46%"),
      accent: tryHexToHsl(hairline, "60 5% 25%"),
      accentForeground: tryHexToHsl(green, "136 91% 47%"),
      destructive: tryHexToHsl(ctx.colors["lipstick-pink"] ?? "#f100cb", "310 100% 47%"),
      destructiveForeground: tryHexToHsl(cream, "54 100% 94%"),
      border: tryHexToHsl(hairline, "60 5% 25%"),
      input: tryHexToHsl(hairline, "60 5% 25%"),
      ring: tryHexToHsl(green, "136 91% 47%"),
      info: tryHexToHsl(ctx.colors.blue ?? "#00bae2", "191 100% 44%"),
      infoForeground: tryHexToHsl(canvas, "150 8% 6%"),
      success: tryHexToHsl(green, "136 91% 47%"),
      successForeground: tryHexToHsl(canvas, "150 8% 6%")
    },
    recipe: buildRecipe({
      buttonDefault,
      radii: {
        button: ctx.recipeHints.radii?.button ?? leafHex(ctx.radius, ["full"]) ?? "100px",
        card: leafHex(ctx.radius, ["lg"]) ?? "8px"
      },
      elevationPreset: ctx.recipeHints.elevationPreset ?? "none",
      density: ctx.recipeHints.density ?? "comfortable",
      outlineBorder: cream,
      primaryStrokeGradient: "linear-gradient(114.41deg, #0ae448 20.74%, #abff84 65.5%)"
    }),
    // Performs. This is the one language where motion is the message, so the
    // ramp is long enough to be watched and the spring is allowed to overshoot
    // well past its resting state.
    motion: {
      easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
      easeInOut: "cubic-bezier(0.65, 0, 0.35, 1)",
      easeSpring: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
      micro: 120,
      flow: 250,
      reveal: 400,
      cinematic: 700
    },
    // Room for the performance to land — more air than the product-chrome trio.
    spacing: {
      xs: "0.5rem",
      sm: "0.875rem",
      md: "1.25rem",
      lg: "1.75rem",
      xl: "2.5rem",
      "2xl": "3.5rem"
    },
    typography: {
      fontSans: `'Mori', 'Inter Tight', 'DM Sans', ui-sans-serif, system-ui, sans-serif`,
      fontDisplay: `'Mori', 'Inter Tight', ui-sans-serif, system-ui, sans-serif`,
      headingWeight: 600,
      faces: [
        {
          family: "Mori",
          // Placeholder — Create Center replaces with tenant-uploaded WOFF2
          src: [{ url: "/brand-assets/mori-regular.woff2", format: "woff2" }],
          weight: 400,
          display: "swap"
        },
        {
          family: "Mori",
          src: [{ url: "/brand-assets/mori-semibold.woff2", format: "woff2" }],
          weight: 600,
          display: "swap"
        }
      ]
    },
    extensions: {
      categories: {
        gsap: green,
        scroll: ctx.colors.pink ?? "#fec5fb",
        svg: ctx.colors.orangey ?? "#ff8709",
        text: ctx.colors.lilac ?? "#9d95ff",
        ui: ctx.colors.blue ?? "#00bae2",
        other: ctx.colors["light-green"] ?? "#abff84"
      },
      displaySizePx: 224,
      sourceUrl: typeof ctx.refero.url === "string" ? ctx.refero.url : "https://gsap.com",
      notes: [
        "Outline-first product controls; category ctx.colors are marketing extensions.",
        "Replace typography.faces[].src with Create Center hosted ctx.font URLs."
      ]
    }
  };
  return brand;
}

// src/brand-package/presets/linear.ts
function linearDarkSemantic(voidC, carbon, graphite, ash, paper, lime, coral, pulse, colors) {
  return {
    background: tryHexToHsl(voidC, "210 11% 4%"),
    foreground: tryHexToHsl(paper, "0 0% 100%"),
    card: tryHexToHsl(carbon, "210 6% 6%"),
    cardForeground: tryHexToHsl(paper, "0 0% 100%"),
    popover: tryHexToHsl(colors.obsidian ?? "#161718", "210 5% 9%"),
    popoverForeground: tryHexToHsl(paper, "0 0% 100%"),
    primary: tryHexToHsl(lime, "66 89% 54%"),
    primaryForeground: tryHexToHsl(voidC, "210 11% 4%"),
    secondary: tryHexToHsl(graphite, "220 7% 15%"),
    secondaryForeground: tryHexToHsl(colors.mist ?? "#d0d6e0", "220 20% 85%"),
    muted: tryHexToHsl(colors.obsidian ?? "#161718", "210 5% 9%"),
    mutedForeground: tryHexToHsl(ash, "220 5% 41%"),
    accent: tryHexToHsl(graphite, "220 7% 15%"),
    accentForeground: tryHexToHsl(lime, "66 89% 54%"),
    destructive: tryHexToHsl(coral, "0 79% 63%"),
    destructiveForeground: tryHexToHsl(paper, "0 0% 100%"),
    border: tryHexToHsl(graphite, "220 7% 15%"),
    input: tryHexToHsl(graphite, "220 7% 15%"),
    ring: tryHexToHsl(lime, "66 89% 54%"),
    success: tryHexToHsl(pulse, "136 61% 40%"),
    successForeground: tryHexToHsl(paper, "0 0% 100%"),
    info: tryHexToHsl(colors["signal-teal"] ?? "#02b8cc", "187 98% 40%"),
    infoForeground: tryHexToHsl(paper, "0 0% 100%")
  };
}
function linearLightSemantic(voidC, ash, paper, lime, coral, pulse, colors) {
  return {
    background: "0 0% 100%",
    foreground: tryHexToHsl(voidC, "210 11% 4%"),
    card: "0 0% 98%",
    cardForeground: tryHexToHsl(voidC, "210 11% 4%"),
    popover: "0 0% 100%",
    popoverForeground: tryHexToHsl(voidC, "210 11% 4%"),
    primary: tryHexToHsl(lime, "66 89% 54%"),
    primaryForeground: tryHexToHsl(voidC, "210 11% 4%"),
    secondary: "220 14% 96%",
    secondaryForeground: tryHexToHsl(voidC, "210 11% 4%"),
    muted: "220 14% 96%",
    mutedForeground: tryHexToHsl(ash, "220 5% 41%"),
    accent: "220 14% 96%",
    accentForeground: tryHexToHsl(voidC, "210 11% 4%"),
    destructive: tryHexToHsl(coral, "0 79% 63%"),
    destructiveForeground: tryHexToHsl(paper, "0 0% 100%"),
    border: "220 13% 91%",
    input: "0 0% 100%",
    ring: tryHexToHsl(lime, "66 89% 54%"),
    success: tryHexToHsl(pulse, "136 61% 40%"),
    successForeground: tryHexToHsl(paper, "0 0% 100%"),
    info: tryHexToHsl(colors["signal-teal"] ?? "#02b8cc", "187 98% 40%"),
    infoForeground: tryHexToHsl(paper, "0 0% 100%")
  };
}
function buildLinear(ctx) {
  const voidC = ctx.colors.void ?? ctx.colors["just-black"] ?? "#08090a";
  const carbon = ctx.colors.carbon ?? "#0f1011";
  const graphite = ctx.colors.graphite ?? "#23252a";
  const ash = ctx.colors.ash ?? "#62666d";
  const paper = ctx.colors.paper ?? "#ffffff";
  const lime = ctx.colors["acid-lime"] ?? "#e4f222";
  const coral = ctx.colors["coral-red"] ?? "#eb5757";
  const pulse = ctx.colors["pulse-green"] ?? "#27a644";
  const dark = linearDarkSemantic(
    voidC,
    carbon,
    graphite,
    ash,
    paper,
    lime,
    coral,
    pulse,
    ctx.colors
  );
  const light = linearLightSemantic(voidC, ash, paper, lime, coral, pulse, ctx.colors);
  const brand = {
    id: "linear",
    name: "Linear",
    darkDefault: true,
    version: "1.0.0",
    semantic: dark,
    modes: {
      dark: { semantic: dark },
      light: { semantic: light }
    },
    recipe: buildRecipe({
      buttonDefault: "solid",
      radii: { button: "6px", card: "12px" },
      elevationPreset: "soft",
      density: "compact"
    }),
    // Resolves before the eye asks it to. Linear's interfaces answer on the
    // frame you click; the expo-out curve spends its whole budget decelerating,
    // which is what makes a 140ms move read as instant rather than abrupt. No
    // spring — nothing in this language overshoots.
    motion: {
      easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      micro: 80,
      flow: 140,
      reveal: 200,
      cinematic: 320
    },
    // Sits close to the content it chrome — the densest of the seven.
    spacing: {
      xs: "0.375rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.5rem",
      "2xl": "2rem"
    },
    typography: {
      fontSans: `'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif`,
      fontMono: `'Berkeley Mono', 'JetBrains Mono', ui-monospace, monospace`,
      headingWeight: 510,
      faces: [
        {
          family: "Inter Variable",
          src: [
            {
              url: "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2",
              format: "woff2"
            }
          ],
          weight: "100 900",
          display: "swap"
        }
      ]
    },
    extensions: {
      sourceUrl: typeof ctx.refero.url === "string" ? ctx.refero.url : "https://linear.app",
      notes: ["Dual-mode: dark void default + light paper; acid-lime solid CTA in both modes."]
    }
  };
  return brand;
}

// src/brand-package/presets/notion.ts
function buildNotion(ctx) {
  const paper = ctx.colors["paper-warmth"] ?? "#f6f5f4";
  const white = ctx.colors["pure-white"] ?? "#ffffff";
  const ink = ctx.colors["ink-black"] ?? "#000000";
  const charcoal = ctx.colors.charcoal ?? "#111111";
  const stone = ctx.colors.stone ?? "#757575";
  const graphite = ctx.colors.graphite ?? "#615d59";
  const blue = ctx.colors["notion-blue"] ?? "#0075de";
  const sky = ctx.colors["sky-tint"] ?? "#e6f3fe";
  const marigold = ctx.colors.marigold ?? "#ffb110";
  const coral = ctx.colors.coral ?? "#f64932";
  const midnight = ctx.colors["midnight-ink"] ?? "#02093a";
  const signal = ctx.colors["signal-blue"] ?? "#097fe8";
  ctx.warnings.push(
    "Notion: notion-blue is the only filled CTA; marigold/coral/midnight are decorative card washes (never default action)."
  );
  ctx.warnings.push(
    "Notion: content cards use 1px hairline + elev=none; soft shadows only for sticky nav / product mockups (raised slot)."
  );
  const brand = {
    id: "notion",
    name: "Notion",
    darkDefault: false,
    version: "1.0.0",
    roles: {
      canvas: tryHexToHsl(paper, "30 9% 96%"),
      canvasForeground: tryHexToHsl(ink, "0 0% 0%"),
      surface: tryHexToHsl(white, "0 0% 100%"),
      surfaceForeground: tryHexToHsl(ink, "0 0% 0%"),
      action: tryHexToHsl(blue, "208 100% 44%"),
      actionForeground: tryHexToHsl(white, "0 0% 100%"),
      // Logo / wordmark / ink hierarchy — not blue CTA
      brand: tryHexToHsl(ink, "0 0% 0%"),
      brandForeground: tryHexToHsl(white, "0 0% 100%"),
      // Ghost CTA wash
      quiet: tryHexToHsl(sky, "206 90% 95%"),
      quietForeground: tryHexToHsl(blue, "208 100% 44%"),
      muted: tryHexToHsl(sky, "206 90% 95%"),
      mutedForeground: tryHexToHsl(stone, "0 0% 46%"),
      // Approx hairline rgba(0,0,0,0.08) on warm paper
      border: "30 5% 88%",
      input: tryHexToHsl(white, "0 0% 100%"),
      ring: tryHexToHsl(blue, "208 100% 44%"),
      destructive: tryHexToHsl(coral, "6 91% 58%"),
      destructiveForeground: tryHexToHsl(white, "0 0% 100%"),
      warning: tryHexToHsl(marigold, "40 100% 53%"),
      warningForeground: tryHexToHsl(ink, "0 0% 0%"),
      info: tryHexToHsl(signal, "207 93% 47%"),
      infoForeground: tryHexToHsl(white, "0 0% 100%")
    },
    semantic: {
      background: tryHexToHsl(paper, "30 9% 96%"),
      foreground: tryHexToHsl(ink, "0 0% 0%"),
      card: tryHexToHsl(white, "0 0% 100%"),
      cardForeground: tryHexToHsl(ink, "0 0% 0%"),
      popover: tryHexToHsl(white, "0 0% 100%"),
      popoverForeground: tryHexToHsl(ink, "0 0% 0%"),
      primary: tryHexToHsl(blue, "208 100% 44%"),
      primaryForeground: tryHexToHsl(white, "0 0% 100%"),
      secondary: tryHexToHsl(sky, "206 90% 95%"),
      secondaryForeground: tryHexToHsl(blue, "208 100% 44%"),
      muted: tryHexToHsl(sky, "206 90% 95%"),
      mutedForeground: tryHexToHsl(stone, "0 0% 46%"),
      accent: tryHexToHsl(sky, "206 90% 95%"),
      accentForeground: tryHexToHsl(blue, "208 100% 44%"),
      destructive: tryHexToHsl(coral, "6 91% 58%"),
      destructiveForeground: tryHexToHsl(white, "0 0% 100%"),
      border: "30 5% 88%",
      input: tryHexToHsl(white, "0 0% 100%"),
      ring: tryHexToHsl(blue, "208 100% 44%"),
      warning: tryHexToHsl(marigold, "40 100% 53%"),
      warningForeground: tryHexToHsl(ink, "0 0% 0%"),
      info: tryHexToHsl(signal, "207 93% 47%"),
      infoForeground: tryHexToHsl(white, "0 0% 100%")
    },
    recipe: buildRecipe({
      buttonDefault: ctx.recipeHints.buttonDefault ?? "solid",
      radii: {
        button: ctx.recipeHints.radii?.button ?? leafHex(ctx.radius, ["buttons"]) ?? leafHex(ctx.radius, ["lg"]) ?? "8px",
        card: ctx.recipeHints.radii?.card ?? leafHex(ctx.radius, ["cards"]) ?? leafHex(ctx.radius, ["xl"]) ?? "12px",
        badge: leafHex(ctx.radius, ["pills"]) ?? leafHex(ctx.radius, ["full"]) ?? "9999px",
        input: leafHex(ctx.radius, ["buttons"]) ?? leafHex(ctx.radius, ["lg"]) ?? "8px"
      },
      elevationPreset: ctx.recipeHints.elevationPreset ?? "none",
      density: ctx.recipeHints.density ?? "comfortable",
      badgeDefault: "muted",
      outlineBorder: ink,
      // Sticky nav soft shadow lives in raised; cards stay flat
      elevationTokens: {
        card: "0 0 #0000",
        control: "0 0 #0000",
        raised: "0px 0.7px 1.462px 0px rgb(0 0 0 / 0.015), 0px 3px 9px 0px rgb(0 0 0 / 0.03)"
      }
    }),
    // Settles rather than snaps. A document surface is read, not operated, so
    // motion here is slow enough to follow with the eye and never competes with
    // the text it is moving.
    motion: {
      easeOut: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      micro: 120,
      flow: 200,
      reveal: 280,
      cinematic: 460
    },
    // Editorial — a document wants margin, not chrome density.
    spacing: {
      xs: "0.625rem",
      sm: "1rem",
      md: "1.5rem",
      lg: "2rem",
      xl: "2.75rem",
      "2xl": "3.75rem"
    },
    typography: {
      fontSans: `'NotionInter', 'Inter', ui-sans-serif, system-ui, sans-serif`,
      fontDisplay: `'NotionInter', 'Inter', ui-sans-serif, system-ui, sans-serif`,
      headingWeight: 700,
      faces: [
        {
          family: "NotionInter",
          src: [
            {
              url: "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2",
              format: "woff2"
            }
          ],
          weight: "100 900",
          display: "swap"
        },
        {
          family: "Lyon Text",
          src: [{ url: "/brand-assets/lyon-text-regular.woff2", format: "woff2" }],
          weight: 400,
          display: "swap"
        }
      ]
    },
    extensions: {
      categories: {
        brand: ink,
        action: blue,
        ghost: sky,
        marigold,
        coral,
        midnight,
        charcoal,
        graphite
      },
      decorative: {
        marigold,
        coral,
        saffron: ctx.colors.saffron ?? "#e89d01",
        "sky-wash": ctx.colors["sky-wash"] ?? "#62aef0",
        midnight
      },
      sourceUrl: typeof ctx.refero.url === "string" ? ctx.refero.url : "https://www.notion.com",
      notes: [
        "roles.action = Notion Blue (only filled CTA). Accent hues are decorative card washes.",
        "roles.brand = Ink Black (logo / wordmark / text hierarchy via alpha).",
        "Canvas = Paper Warmth; cards = Pure White \u2014 never invert.",
        "Card elev=none + hairline border; sticky nav soft shadow \u2192 elevation raised slot.",
        "Buttons 8px, cards 12px, pills 9999px.",
        "Lyon Text is editorial accent only \u2014 not product chrome UI."
      ]
    }
  };
  return brand;
}

// src/brand-package/presets/raycast.ts
function buildRaycast(ctx) {
  const canvas = ctx.colors["void-black"] ?? ctx.colors.canvas ?? "#040506";
  const ink = ctx.colors.ink ?? ctx.colors.card ?? "#07080a";
  const obsidian = ctx.colors.obsidian ?? ctx.colors.recessed ?? "#111214";
  const graphite = ctx.colors.graphite ?? ctx.colors.badge ?? "#1b1c1e";
  const smoke = ctx.colors.smoke ?? "#6a6b6c";
  const ash = ctx.colors.ash ?? "#9c9c9d";
  const mist = ctx.colors.mist ?? "#e6e6e6";
  const iron = ctx.colors.iron ?? "#454647";
  const slate = ctx.colors.slate ?? "#2f3031";
  const paper = ctx.colors["pure-white"] ?? "#ffffff";
  const coral = ctx.colors["coral-pulse"] ?? "#ff6363";
  const success = ctx.colors["success-green"] ?? "#59d499";
  const info = ctx.colors["info-blue"] ?? "#56c2ff";
  ctx.warnings.push(
    "Raycast: coral-pulse is brand mark only \u2014 primary CTA is Mist/Iron neutral solid."
  );
  const brand = {
    id: "raycast",
    name: "Raycast",
    darkDefault: true,
    version: "1.0.0",
    semantic: {
      background: tryHexToHsl(canvas, "210 20% 2%"),
      foreground: tryHexToHsl(paper, "0 0% 100%"),
      card: tryHexToHsl(ink, "220 18% 3%"),
      cardForeground: tryHexToHsl(paper, "0 0% 100%"),
      popover: tryHexToHsl(ink, "220 18% 3%"),
      popoverForeground: tryHexToHsl(paper, "0 0% 100%"),
      // Filled CTA = Mist on dark (not coral)
      primary: tryHexToHsl(mist, "0 0% 90%"),
      primaryForeground: tryHexToHsl(iron, "210 1% 27%"),
      secondary: tryHexToHsl(graphite, "220 4% 11%"),
      secondaryForeground: tryHexToHsl(paper, "0 0% 100%"),
      muted: tryHexToHsl(obsidian, "220 6% 7%"),
      mutedForeground: tryHexToHsl(smoke, "240 1% 42%"),
      // Coral as accent for brand-adjacent UI (badges that opt-in to accent)
      accent: tryHexToHsl(coral, "0 100% 69%"),
      accentForeground: tryHexToHsl(paper, "0 0% 100%"),
      destructive: "0 72% 51%",
      destructiveForeground: tryHexToHsl(paper, "0 0% 100%"),
      border: tryHexToHsl(slate, "210 2% 19%"),
      input: tryHexToHsl(obsidian, "220 6% 7%"),
      ring: tryHexToHsl(ash, "240 1% 61%"),
      success: tryHexToHsl(success, "150 58% 59%"),
      successForeground: tryHexToHsl(canvas, "210 20% 2%"),
      info: tryHexToHsl(info, "200 100% 67%"),
      infoForeground: tryHexToHsl(canvas, "210 20% 2%")
    },
    recipe: buildRecipe({
      buttonDefault: "solid",
      radii: {
        button: ctx.recipeHints.radii?.button ?? "8px",
        card: "16px",
        badge: "6px",
        input: "8px"
      },
      elevationPreset: ctx.recipeHints.elevationPreset ?? "key",
      density: ctx.recipeHints.density ?? "comfortable",
      badgeDefault: "muted"
    }),
    // Native-feeling: quick, with a small overshoot on things that appear. The
    // spring is the point — a launcher should feel like it was already there.
    motion: {
      easeOut: "cubic-bezier(0.16, 1, 0.3, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      easeSpring: "cubic-bezier(0.34, 1.56, 0.64, 1)",
      micro: 90,
      flow: 160,
      reveal: 220,
      cinematic: 340
    },
    // Command-palette density — compact, but not as tight as Linear.
    spacing: {
      xs: "0.375rem",
      sm: "0.5rem",
      md: "0.75rem",
      lg: "1rem",
      xl: "1.375rem",
      "2xl": "2rem"
    },
    typography: {
      fontSans: `'Inter', ui-sans-serif, system-ui, -apple-system, sans-serif`,
      fontMono: `'Geist Mono', 'GeistMono', ui-monospace, Menlo, monospace`,
      fontDisplay: `'Inter', ui-sans-serif, system-ui, sans-serif`,
      headingWeight: 400,
      faces: [
        {
          family: "Inter",
          src: [
            {
              url: "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2",
              format: "woff2"
            }
          ],
          weight: "100 900",
          display: "swap"
        }
      ]
    },
    extensions: {
      categories: {
        brand: coral,
        ember: ctx.colors["ember-hush"] ?? "#452324",
        sky: ctx.colors["electric-sky"] ?? "#63a1ff"
      },
      sourceUrl: typeof ctx.refero.url === "string" ? ctx.refero.url : "https://raycast.com",
      notes: [
        "Primary CTA = Mist fill + Iron text (neutral solid).",
        "Coral Pulse is brand mark only \u2014 do not use for general product chrome CTAs.",
        "Cards use elevation=key (keyboard-key inset shadow stack)."
      ]
    }
  };
  return brand;
}

// src/brand-package/presets/stripe.ts
function buildStripe(ctx) {
  const white = ctx.colors["pure-white"] ?? "#ffffff";
  const mist = ctx.colors.mist ?? "#f8fafd";
  const frost = ctx.colors.frost ?? "#e5edf5";
  const midnight = ctx.colors["midnight-ink"] ?? "#061b31";
  const slate = ctx.colors.slate ?? "#64748d";
  const steel = ctx.colors.steel ?? "#50617a";
  const indigo = ctx.colors["indigo-ink"] ?? "#533afd";
  const indigoHover = ctx.colors["indigo-hover"] ?? "#7389ff";
  const lavender = ctx.colors["lavender-border"] ?? "#b9b9f9";
  const periwinkle = ctx.colors["periwinkle-wash"] ?? "#e8e9ff";
  const deep = ctx.colors["deep-violet"] ?? "#182659";
  const smoke = ctx.colors.smoke ?? "#839bc8";
  ctx.warnings.push(
    "Stripe: indigo-ink is action CTA only; midnight-ink is brand-mark/wordmark (never default CTA fill)."
  );
  ctx.warnings.push(
    "Stripe: elevation=none \u2014 depth via white\u2192mist\u2192frost tints + 1px frost rules, never box-shadow."
  );
  const brand = {
    id: "stripe",
    name: "Stripe",
    darkDefault: false,
    version: "1.0.0",
    roles: {
      canvas: tryHexToHsl(white, "0 0% 100%"),
      canvasForeground: tryHexToHsl(midnight, "208 78% 11%"),
      surface: tryHexToHsl(white, "0 0% 100%"),
      surfaceForeground: tryHexToHsl(midnight, "208 78% 11%"),
      action: tryHexToHsl(indigo, "248 98% 61%"),
      actionForeground: tryHexToHsl(white, "0 0% 100%"),
      brand: tryHexToHsl(midnight, "208 78% 11%"),
      brandForeground: tryHexToHsl(white, "0 0% 100%"),
      quiet: tryHexToHsl(periwinkle, "238 100% 95%"),
      quietForeground: tryHexToHsl(indigo, "248 98% 61%"),
      muted: tryHexToHsl(mist, "210 56% 98%"),
      mutedForeground: tryHexToHsl(slate, "215 16% 47%"),
      border: tryHexToHsl(frost, "210 36% 93%"),
      input: tryHexToHsl(white, "0 0% 100%"),
      ring: tryHexToHsl(indigo, "248 98% 61%"),
      destructive: "0 72% 51%",
      destructiveForeground: tryHexToHsl(white, "0 0% 100%"),
      info: tryHexToHsl(indigoHover, "230 100% 73%"),
      infoForeground: tryHexToHsl(midnight, "208 78% 11%")
    },
    semantic: {
      background: tryHexToHsl(white, "0 0% 100%"),
      foreground: tryHexToHsl(midnight, "208 78% 11%"),
      card: tryHexToHsl(white, "0 0% 100%"),
      cardForeground: tryHexToHsl(midnight, "208 78% 11%"),
      popover: tryHexToHsl(white, "0 0% 100%"),
      popoverForeground: tryHexToHsl(midnight, "208 78% 11%"),
      primary: tryHexToHsl(indigo, "248 98% 61%"),
      primaryForeground: tryHexToHsl(white, "0 0% 100%"),
      secondary: tryHexToHsl(periwinkle, "238 100% 95%"),
      secondaryForeground: tryHexToHsl(indigo, "248 98% 61%"),
      muted: tryHexToHsl(mist, "210 56% 98%"),
      mutedForeground: tryHexToHsl(slate, "215 16% 47%"),
      accent: tryHexToHsl(indigo, "248 98% 61%"),
      accentForeground: tryHexToHsl(white, "0 0% 100%"),
      destructive: "0 72% 51%",
      destructiveForeground: tryHexToHsl(white, "0 0% 100%"),
      border: tryHexToHsl(frost, "210 36% 93%"),
      input: tryHexToHsl(white, "0 0% 100%"),
      ring: tryHexToHsl(indigo, "248 98% 61%"),
      info: tryHexToHsl(indigoHover, "230 100% 73%"),
      infoForeground: tryHexToHsl(midnight, "208 78% 11%")
    },
    recipe: buildRecipe({
      buttonDefault: ctx.recipeHints.buttonDefault ?? "solid",
      radii: {
        button: ctx.recipeHints.radii?.button ?? "4px",
        card: "4px",
        badge: "9999px",
        input: "4px"
      },
      elevationPreset: ctx.recipeHints.elevationPreset ?? "none",
      density: ctx.recipeHints.density ?? "comfortable",
      badgeDefault: "muted",
      // Ghost outline companion uses lavender hairline, not carbon
      outlineBorder: lavender
    }),
    // Deliberate and even. Stripe's motion never draws attention to itself;
    // the curve is symmetric so a panel leaves the way it arrived.
    motion: {
      easeOut: "cubic-bezier(0.215, 0.61, 0.355, 1)",
      easeInOut: "cubic-bezier(0.645, 0.045, 0.355, 1)",
      micro: 100,
      flow: 180,
      reveal: 260,
      cinematic: 400
    },
    // Clean commerce chrome — a touch more generous than the app-shell trio.
    spacing: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1.125rem",
      lg: "1.75rem",
      xl: "2.25rem",
      "2xl": "3.25rem"
    },
    typography: {
      fontSans: `'sohne-var', 'Inter Tight', 'Inter', ui-sans-serif, system-ui, sans-serif`,
      fontDisplay: `'sohne-var', 'Inter Tight', ui-sans-serif, system-ui, sans-serif`,
      // Whisper weight is the Stripe signature (even at 56px display)
      headingWeight: 300,
      faces: [
        {
          family: "sohne-var",
          // Placeholder — Create Center / licensed Söhne Variable
          src: [{ url: "/brand-assets/sohne-var.woff2", format: "woff2" }],
          weight: "300 400",
          display: "swap"
        }
      ]
    },
    extensions: {
      categories: {
        brand: midnight,
        action: indigo,
        link: indigo,
        hover: indigoHover,
        ghostBorder: lavender,
        wash: periwinkle,
        deep,
        smoke,
        steel
      },
      decorative: {
        "section-band": mist,
        frost
      },
      sourceUrl: typeof ctx.refero.url === "string" ? ctx.refero.url : "https://stripe.com",
      notes: [
        "roles.action = Indigo Ink filled CTA; roles.brand = Midnight Ink wordmark.",
        "Elevation none \u2014 tint ladder + 1px frost rules; never box-shadow.",
        "Control ctx.radius 4px (not pill); tags may stay full-pill.",
        "Typography weight 300 is the product signature (Inter Tight substitute).",
        "Pair solid CTA with ghost outline (lavender border) as secondary."
      ]
    }
  };
  return brand;
}

// src/brand-package/presets/vanta.ts
function buildVanta(ctx) {
  const parchment = ctx.colors.parchment ?? ctx.colors["page-canvas"] ?? "#f7f8fa";
  const paper = ctx.colors.paper ?? ctx.colors["card-surface"] ?? "#ffffff";
  const carbon = ctx.colors.carbon ?? "#181822";
  const graphite = ctx.colors.graphite ?? "#6d6e87";
  const steel = ctx.colors.steel ?? "#9e9fb7";
  const ash = ctx.colors.ash ?? "#dfdfe9";
  const fog = ctx.colors.fog ?? "#eaeaf1";
  const lavender = ctx.colors["lavender-wash"] ?? "#ddd6ff";
  const vivid = ctx.colors["vivid-violet"] ?? "#5e05c4";
  const indigo = ctx.colors["indigo-ink"] ?? "#260048";
  const mid = ctx.colors["mid-violet"] ?? "#8f47d5";
  const amber = ctx.colors["amber-signal"] ?? "#ffbe0f";
  ctx.warnings.push(
    "Vanta: vivid-violet is action CTA only; indigo-ink is brand-mark/logo (never default CTA fill)."
  );
  ctx.warnings.push("Vanta: elevation=none \u2014 cards use 1px carbon border, not box-shadow.");
  const brand = {
    id: "vanta",
    name: "Vanta",
    darkDefault: false,
    version: "1.0.0",
    roles: {
      canvas: tryHexToHsl(parchment, "220 23% 97%"),
      canvasForeground: tryHexToHsl(carbon, "240 14% 11%"),
      surface: tryHexToHsl(paper, "0 0% 100%"),
      surfaceForeground: tryHexToHsl(carbon, "240 14% 11%"),
      // Action = single saturated CTA moment
      action: tryHexToHsl(vivid, "268 95% 39%"),
      actionForeground: tryHexToHsl(paper, "0 0% 100%"),
      // Brand mark = logo / wordmark / decorative ink (≠ action)
      brand: tryHexToHsl(indigo, "273 100% 14%"),
      brandForeground: tryHexToHsl(paper, "0 0% 100%"),
      // Quiet = lavender informational chips (not violet fill)
      quiet: tryHexToHsl(lavender, "249 100% 92%"),
      quietForeground: tryHexToHsl(indigo, "273 100% 14%"),
      muted: tryHexToHsl(fog, "240 14% 93%"),
      mutedForeground: tryHexToHsl(graphite, "237 11% 48%"),
      border: tryHexToHsl(carbon, "240 14% 11%"),
      input: tryHexToHsl(paper, "0 0% 100%"),
      ring: tryHexToHsl(vivid, "268 95% 39%"),
      destructive: "0 72% 51%",
      destructiveForeground: tryHexToHsl(paper, "0 0% 100%"),
      warning: tryHexToHsl(amber, "44 100% 53%"),
      warningForeground: tryHexToHsl(carbon, "240 14% 11%"),
      info: tryHexToHsl(mid, "269 63% 56%"),
      infoForeground: tryHexToHsl(paper, "0 0% 100%")
    },
    // semantic filled by normalize from roles
    semantic: {
      background: tryHexToHsl(parchment, "220 23% 97%"),
      foreground: tryHexToHsl(carbon, "240 14% 11%"),
      card: tryHexToHsl(paper, "0 0% 100%"),
      cardForeground: tryHexToHsl(carbon, "240 14% 11%"),
      popover: tryHexToHsl(paper, "0 0% 100%"),
      popoverForeground: tryHexToHsl(carbon, "240 14% 11%"),
      primary: tryHexToHsl(vivid, "268 95% 39%"),
      primaryForeground: tryHexToHsl(paper, "0 0% 100%"),
      secondary: tryHexToHsl(lavender, "249 100% 92%"),
      secondaryForeground: tryHexToHsl(indigo, "273 100% 14%"),
      muted: tryHexToHsl(fog, "240 14% 93%"),
      mutedForeground: tryHexToHsl(graphite, "237 11% 48%"),
      accent: tryHexToHsl(indigo, "273 100% 14%"),
      accentForeground: tryHexToHsl(paper, "0 0% 100%"),
      destructive: "0 72% 51%",
      destructiveForeground: tryHexToHsl(paper, "0 0% 100%"),
      border: tryHexToHsl(carbon, "240 14% 11%"),
      input: tryHexToHsl(paper, "0 0% 100%"),
      ring: tryHexToHsl(vivid, "268 95% 39%"),
      warning: tryHexToHsl(amber, "44 100% 53%"),
      warningForeground: tryHexToHsl(carbon, "240 14% 11%"),
      info: tryHexToHsl(mid, "269 63% 56%"),
      infoForeground: tryHexToHsl(paper, "0 0% 100%")
    },
    recipe: buildRecipe({
      buttonDefault: ctx.recipeHints.buttonDefault ?? "solid",
      // Prefer structural ctx.radius tokens (full=pill, 2xl=cards) over free-text
      radii: {
        button: leafHex(ctx.radius, ["buttons"]) ?? leafHex(ctx.radius, ["full"]) ?? ctx.recipeHints.radii?.button ?? "999px",
        card: leafHex(ctx.radius, ["cards"]) ?? leafHex(ctx.radius, ["2xl"]) ?? "16px",
        badge: leafHex(ctx.radius, ["badges"]) ?? leafHex(ctx.radius, ["full"]) ?? ctx.recipeHints.radii?.button ?? "999px",
        input: leafHex(ctx.radius, ["inputs"]) ?? leafHex(ctx.radius, ["full"]) ?? ctx.recipeHints.radii?.button ?? "999px"
      },
      elevationPreset: ctx.recipeHints.elevationPreset ?? "none",
      density: ctx.recipeHints.density ?? "comfortable",
      // Informational chips = lavender wash + indigo (quiet), not violet CTA fill
      badgeDefault: "muted",
      outlineBorder: carbon
    }),
    // Atmospheric. Backdrops drift rather than move, so even the micro step is
    // slow and nothing snaps.
    motion: {
      easeOut: "cubic-bezier(0.33, 1, 0.68, 1)",
      easeInOut: "cubic-bezier(0.37, 0, 0.63, 1)",
      micro: 120,
      flow: 240,
      reveal: 380,
      cinematic: 620
    },
    // The most spacious of the seven — serif editorial wants the most air.
    spacing: {
      xs: "0.75rem",
      sm: "1.125rem",
      md: "1.75rem",
      lg: "2.5rem",
      xl: "3.5rem",
      "2xl": "5rem"
    },
    typography: {
      fontSans: `'Inter Variable', 'Inter', ui-sans-serif, system-ui, sans-serif`,
      fontDisplay: `'Reckless', 'Source Serif 4', 'Lora', ui-serif, Georgia, serif`,
      headingWeight: 500,
      faces: [
        {
          family: "Inter Variable",
          src: [
            {
              url: "https://cdn.jsdelivr.net/fontsource/fonts/inter:vf@latest/latin-wght-normal.woff2",
              format: "woff2"
            }
          ],
          weight: "100 900",
          display: "swap"
        },
        {
          family: "Reckless",
          // Placeholder — Create Center / tenant hosts the licensed Reckless cut
          src: [{ url: "/brand-assets/reckless-regular.woff2", format: "woff2" }],
          weight: 400,
          display: "swap"
        },
        {
          family: "Reckless",
          src: [{ url: "/brand-assets/reckless-medium.woff2", format: "woff2" }],
          weight: 500,
          display: "swap"
        }
      ]
    },
    extensions: {
      categories: {
        brand: indigo,
        action: vivid,
        link: mid,
        heroWash: lavender,
        warning: amber,
        steel,
        ash
      },
      decorative: {
        "hero-wash": lavender
      },
      sourceUrl: typeof ctx.refero.url === "string" ? ctx.refero.url : "https://www.vanta.com",
      notes: [
        "roles.action = Vivid Violet (filled CTA only).",
        "roles.brand = Indigo Ink (logo / wordmark / brand-mark).",
        "Elevation none \u2014 1px carbon borders frame cards; no drop-shadow.",
        "Full-pill controls (999px); cards 16px.",
        "UI = Inter Variable; marketing display = Reckless serif.",
        "Lavender wash is marketing hero surface (decorative), not product chrome fill."
      ]
    }
  };
  return brand;
}

// src/brand-package/presets/vercel.ts
function vercelLightSemantic(paper, pure, hairline, charcoal, stone, obsidian, terminal) {
  return {
    background: tryHexToHsl(paper, "0 0% 98%"),
    foreground: tryHexToHsl(obsidian, "0 0% 9%"),
    card: tryHexToHsl(pure, "0 0% 100%"),
    cardForeground: tryHexToHsl(obsidian, "0 0% 9%"),
    popover: tryHexToHsl(pure, "0 0% 100%"),
    popoverForeground: tryHexToHsl(obsidian, "0 0% 9%"),
    // Filled black button
    primary: tryHexToHsl(obsidian, "0 0% 9%"),
    primaryForeground: tryHexToHsl(pure, "0 0% 100%"),
    secondary: tryHexToHsl(hairline, "0 0% 92%"),
    secondaryForeground: tryHexToHsl(charcoal, "0 0% 30%"),
    muted: tryHexToHsl(hairline, "0 0% 92%"),
    mutedForeground: tryHexToHsl(stone, "0 0% 40%"),
    accent: tryHexToHsl(hairline, "0 0% 92%"),
    accentForeground: tryHexToHsl(obsidian, "0 0% 9%"),
    destructive: "0 72% 51%",
    destructiveForeground: tryHexToHsl(pure, "0 0% 100%"),
    border: tryHexToHsl(hairline, "0 0% 92%"),
    input: tryHexToHsl(pure, "0 0% 100%"),
    ring: tryHexToHsl(obsidian, "0 0% 9%"),
    success: tryHexToHsl(terminal, "133 49% 32%"),
    successForeground: tryHexToHsl(pure, "0 0% 100%"),
    info: tryHexToHsl(charcoal, "0 0% 30%"),
    infoForeground: tryHexToHsl(pure, "0 0% 100%")
  };
}
function vercelDarkSemantic(terminal) {
  return {
    background: "0 0% 0%",
    foreground: "0 0% 93%",
    card: "0 0% 4%",
    cardForeground: "0 0% 93%",
    popover: "0 0% 4%",
    popoverForeground: "0 0% 93%",
    primary: "0 0% 100%",
    primaryForeground: "0 0% 0%",
    secondary: "0 0% 12%",
    secondaryForeground: "0 0% 93%",
    muted: "0 0% 12%",
    mutedForeground: "0 0% 63%",
    accent: "0 0% 12%",
    accentForeground: "0 0% 93%",
    destructive: "0 72% 51%",
    destructiveForeground: "0 0% 100%",
    border: "0 0% 16%",
    input: "0 0% 4%",
    ring: "0 0% 100%",
    success: tryHexToHsl(terminal, "133 49% 40%"),
    successForeground: "0 0% 100%",
    info: "0 0% 70%",
    infoForeground: "0 0% 0%"
  };
}
function buildVercel(ctx) {
  const paper = ctx.colors["paper-white"] ?? ctx.colors["page-canvas"] ?? "#fafafa";
  const pure = ctx.colors["pure-white"] ?? ctx.colors["card-surface"] ?? "#ffffff";
  const hairline = ctx.colors.hairline ?? "#ebebeb";
  const charcoal = ctx.colors.charcoal ?? "#4d4d4d";
  const stone = ctx.colors.stone ?? "#666666";
  const obsidian = ctx.colors.obsidian ?? ctx.colors["inverted-surface"] ?? "#171717";
  const carbon = ctx.colors.carbon ?? "#000000";
  const terminal = ctx.colors["terminal-green"] ?? "#297a3a";
  ctx.warnings.push(
    "Vercel: monochrome dual-mode \u2014 no chromatic CTA; Terminal Green is support only."
  );
  const light = vercelLightSemantic(paper, pure, hairline, charcoal, stone, obsidian, terminal);
  const dark = vercelDarkSemantic(terminal);
  const brand = {
    id: "vercel",
    name: "Vercel",
    darkDefault: false,
    version: "1.0.0",
    semantic: light,
    modes: {
      light: { semantic: light },
      dark: { semantic: dark }
    },
    recipe: buildRecipe({
      buttonDefault: "solid",
      radii: {
        button: ctx.recipeHints.radii?.button ?? "6px",
        card: "6px",
        badge: "6px",
        input: "6px"
      },
      elevationPreset: ctx.recipeHints.elevationPreset === "key" ? "hairline" : ctx.recipeHints.elevationPreset ?? "hairline",
      density: ctx.recipeHints.density ?? "compact",
      badgeDefault: "muted",
      cardShadow: "rgba(0, 0, 0, 0.08) 0px 0px 0px 1px, rgb(250, 250, 250) 0px 0px 0px 1px",
      outlineBorder: hairline
    }),
    // Neutral and quick. Geist treats motion as feedback rather than
    // expression, so the ramp is short and the curve is the platform default.
    motion: {
      easeOut: "cubic-bezier(0, 0, 0.2, 1)",
      easeInOut: "cubic-bezier(0.4, 0, 0.2, 1)",
      micro: 100,
      flow: 150,
      reveal: 200,
      cinematic: 300
    },
    // Geist's default rhythm — the middle of the seven, same figures as the
    // shared fallback rail so a page with no language selected still matches it.
    spacing: {
      xs: "0.5rem",
      sm: "0.75rem",
      md: "1rem",
      lg: "1.5rem",
      xl: "2rem",
      "2xl": "3rem"
    },
    typography: {
      fontSans: `'Geist Sans', 'Geist', ui-sans-serif, system-ui, sans-serif`,
      fontMono: `'Geist Mono', ui-monospace, Menlo, monospace`,
      fontDisplay: `'Geist Sans', 'Geist', ui-sans-serif, system-ui, sans-serif`,
      headingWeight: 450,
      faces: [
        {
          family: "Geist Sans",
          src: [
            {
              url: "https://cdn.jsdelivr.net/fontsource/fonts/geist-sans:vf@latest/latin-wght-normal.woff2",
              format: "woff2"
            }
          ],
          weight: "100 900",
          display: "swap"
        }
      ]
    },
    extensions: {
      categories: {
        carbon,
        terminal
      },
      sourceUrl: typeof ctx.refero.url === "string" ? ctx.refero.url : "https://vercel.com",
      notes: [
        "Dual-mode monochrome \u2014 light: Obsidian CTA; dark: white CTA on carbon.",
        "Elevation is hairline double-ring, never drop-shadow.",
        "Spectrum/solar gradients are marketing-only decorative (not product chrome)."
      ]
    }
  };
  return brand;
}

// src/brand-package/presets/index.ts
var PRESET_BUILDERS = {
  linear: buildLinear,
  gsap: buildGsap,
  raycast: buildRaycast,
  vercel: buildVercel,
  notion: buildNotion,
  stripe: buildStripe,
  vanta: buildVanta
};
function buildPresetBrand(preset, ctx) {
  if (preset === "generic") return buildGeneric(ctx);
  return PRESET_BUILDERS[preset](ctx);
}

// src/brand-package/compile-refero.ts
function finish(brand, warnings) {
  const b = normalizeBrandPackage(brand);
  return { brand: b, css: emitBrandCss(b), warnings };
}
function compileReferoTokens(input) {
  const warnings = [];
  const color = input.tokens.color ?? {};
  const surface = input.tokens.surface ?? {};
  const font = input.tokens.font ?? {};
  const radius = input.tokens.radius ?? {};
  const ext = input.tokens.$extensions ?? {};
  const refero = ext["com.refero.extraction"] ?? {};
  const colors = { ...collectColors(color), ...collectSurfaces(surface) };
  const siteName = typeof refero.siteName === "string" && refero.siteName || input.name || "Custom Brand";
  const id = input.id || siteName.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "") || "custom";
  const preset = detectPreset(id, colors);
  const recipeHints = inferRecipeFromDesignMd(input.designMd ?? "");
  const brand = buildPresetBrand(preset, {
    colors,
    font,
    radius,
    refero,
    recipeHints,
    warnings,
    id,
    siteName
  });
  return finish(brand, warnings);
}

// src/brand-package/validate.ts
var BUTTON_STYLES = /* @__PURE__ */ new Set(["solid", "outline", "gradient-stroke"]);
function validateBrandPackage(brand) {
  const errors = [];
  const warnings = [];
  if (!brand || typeof brand !== "object") {
    return { ok: false, errors: ["Brand package must be an object"], warnings };
  }
  let b;
  try {
    b = normalizeBrandPackage(brand);
  } catch (e) {
    return { ok: false, errors: [`normalize failed: ${e.message}`], warnings };
  }
  if (!b.id || typeof b.id !== "string") errors.push("id is required");
  if (!b.name || typeof b.name !== "string") errors.push("name is required");
  if (!b.version || typeof b.version !== "string") errors.push("version is required");
  if (!b.roles) {
    errors.push("roles missing after normalize");
  } else {
    for (const key of ["canvas", "action", "actionForeground", "border"]) {
      if (!b.roles[key]) errors.push(`roles.${key} is required`);
    }
    if (b.roles.brand && b.roles.brand === b.roles.action) {
      warnings.push(
        "roles.brand equals roles.action \u2014 brand mark is not separated from CTA (often intentional)"
      );
    }
  }
  if (!b.semantic || typeof b.semantic !== "object") {
    errors.push("semantic is required");
  } else {
    for (const key of [
      "background",
      "foreground",
      "primary",
      "primaryForeground",
      "border",
      "ring"
    ]) {
      if (!b.semantic[key]) errors.push(`semantic.${key} is required`);
    }
    if (b.roles && b.semantic.primary !== b.roles.action) {
      errors.push("semantic.primary must equal roles.action (CTA bridge)");
    }
  }
  if (!b.recipe || typeof b.recipe !== "object") {
    errors.push("recipe is required");
  } else {
    if (!BUTTON_STYLES.has(b.recipe.buttonDefault)) {
      errors.push(`recipe.buttonDefault must be one of ${[...BUTTON_STYLES].join(", ")}`);
    }
    if (!b.recipe.radii?.button) errors.push("recipe.radii.button is required");
    if (!b.recipe.radii?.card) errors.push("recipe.radii.card is required");
    if (!b.recipe.elevationTokens?.card) {
      errors.push("recipe.elevationTokens.card is required (free CSS box-shadow)");
    }
    if (b.recipe.buttonDefault === "gradient-stroke" && !b.recipe.primaryStrokeGradient) {
      warnings.push(
        "gradient-stroke without primaryStrokeGradient \u2014 border falls back to solid primary"
      );
    }
  }
  if (!b.typography?.fontSans) errors.push("typography.fontSans is required");
  if (b.typography?.faces) {
    b.typography.faces.forEach((face, i) => {
      if (!face.family) errors.push(`typography.faces[${i}].family is required`);
      if (!face.src?.length) errors.push(`typography.faces[${i}].src must be non-empty`);
      else {
        for (const [j, src] of face.src.entries()) {
          if (!src.url) errors.push(`typography.faces[${i}].src[${j}].url is required`);
        }
      }
    });
  }
  for (const [key, value] of Object.entries(b.recipe?.elevationTokens ?? {})) {
    if (typeof value === "string" && /var\(\s*--(?:shadow|elevation)-/.test(value)) {
      errors.push(
        `recipe.elevationTokens.${key} references a shadow/elevation variable \u2014 that is a cycle once the skin sets the source. Inline the value.`
      );
    }
  }
  if (b.motion) {
    for (const key of ["micro", "flow", "reveal", "cinematic"]) {
      const value = b.motion[key];
      if (value == null) continue;
      if (typeof value !== "number" || !Number.isFinite(value) || value < 0) {
        errors.push(`motion.${key} must be a non-negative number of milliseconds`);
      } else if (value > 2e3) {
        warnings.push(`motion.${key} is ${value}ms \u2014 long enough to read as a stall`);
      }
    }
    for (const key of ["easeOut", "easeInOut", "easeSpring"]) {
      const value = b.motion[key];
      if (value == null) continue;
      if (typeof value !== "string" || !value.trim()) {
        errors.push(`motion.${key} must be a non-empty timing function`);
      }
    }
    const { micro, flow, reveal, cinematic } = b.motion;
    const ramp = [micro, flow, reveal, cinematic].filter((v) => typeof v === "number");
    if (ramp.length > 1 && ramp.some((v, i) => i > 0 && v < (ramp[i - 1] ?? v))) {
      warnings.push(
        "motion durations are not ascending \u2014 micro should be the shortest and cinematic the longest"
      );
    }
  }
  if (b.spacing) {
    const UNIT = /^-?\d*\.?\d+(rem|em|px|%|vh|vw|ch)$/;
    const order = [];
    for (const key of ["xs", "sm", "md", "lg", "xl", "2xl"]) {
      const value = b.spacing[key];
      if (value == null) continue;
      if (typeof value !== "string" || !UNIT.test(value.trim())) {
        errors.push(
          `spacing.${key} must be a CSS length with a unit (e.g. "1rem"), got ${JSON.stringify(value)}`
        );
        continue;
      }
      order.push([key, Number.parseFloat(value)]);
    }
    if (order.length > 1 && order.some(([, v], i) => i > 0 && v < (order[i - 1]?.[1] ?? v))) {
      warnings.push(
        "spacing steps are not ascending \u2014 xs should be the smallest and 2xl the largest"
      );
    }
  }
  if (b.recipe?.buttonDefault === "solid" && b.semantic?.primary === b.semantic?.primaryForeground) {
    warnings.push("primary and primaryForeground are identical \u2014 check contrast");
  }
  return { ok: errors.length === 0, errors, warnings };
}
export {
  BRAND_STORAGE_KEY,
  BRAND_STYLE_ELEMENT_ID,
  applyBrandCss,
  applyBrandPackage,
  clearBrand,
  colorToHslChannels,
  compileReferoTokens,
  elevationPresetToTokens,
  emitBrandCss,
  emitDarkModeSelector,
  emitGlobalSkinSelector,
  emitLightModeSelector,
  getActiveBrandId,
  hexToHslChannels,
  inferRecipeFromDesignMd,
  isDualModeBrand,
  normalizeBrandPackage,
  normalizeModePalette,
  restorePersistedBrand,
  rolesFromSemantic,
  semanticFromRoles,
  tryColorToHsl,
  tryHexToHsl,
  validateBrandPackage
};
//# sourceMappingURL=index.js.map