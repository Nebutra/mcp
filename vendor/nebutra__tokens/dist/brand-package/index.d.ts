export { A as ApplyBrandOptions, B as BRAND_STORAGE_KEY, i as BRAND_STYLE_ELEMENT_ID, a as BrandIframePreviewOptions, j as UseBrandIframePreviewResult, U as UseBrandOptions, b as UseBrandResult, c as applyBrandCss, d as applyBrandPackage, f as clearBrand, g as getActiveBrandId, r as restorePersistedBrand } from '../use-brand-BIm_ccWq.js';
import { C as CompileResult, c as BrandPackage, f as ButtonDefaultStyle, E as ElevationStyle, D as Density, g as BrandPackageInput, h as BrandSemanticColors, B as BrandColorRoles, a as BrandElevationTokens, i as BrandModePalette } from '../types-Zi77gyTk.js';
export { j as BadgeDefaultStyle, k as BrandExtensions, b as BrandFontFace, l as BrandFontSource, m as BrandModes, d as BrandRadii, e as BrandRecipe, n as BrandRecipeInput, o as BrandTypography, p as CssColor, H as HslChannels } from '../types-Zi77gyTk.js';
import 'react';

/**
 * Shared helpers for Refero → Brand Package compilation.
 * Preset builders live in compile-refero.ts; keep color/font extraction here.
 */
type Json = Record<string, unknown>;

/**
 * Compile Refero DTCG tokens.json (+ optional DESIGN.md) into a Brand Package.
 *
 * Structure:
 *   compile-helpers.ts  — detectPreset, color/font leaf helpers
 *   presets/*           — named fixture builders (linear…notion) + generic
 *   compile-refero.ts   — orchestration only
 *
 * Named fixtures are stress-test carriers (not mood presets). Prefer extending
 * the generic path + DESIGN.md inference over adding one-off hacks.
 */

/**
 * Compile a Refero-style DTCG tokens.json (+ optional DESIGN.md text) into a Brand Package.
 * Known fixtures get opinionated recipes; generic brands get solid CTAs.
 */
declare function compileReferoTokens(input: {
    tokens: Json;
    id?: string;
    name?: string;
    designMd?: string;
}): CompileResult;

/**
 * Emit carrier CSS from a normalized Brand Package.
 * Components bind: --primary (= action), --brand-mark, --elevation-*, --radius-*.
 */

type EmitBrandCssMode = 
/** Single-skin import / Create Center inject — also binds :root (global swap) */
"global"
/** Multi-language catalog — only activates under html[data-brand] */
 | "scoped";
interface EmitBrandCssOptions {
    /**
     * `global` (default): `:root` + `<root>[data-brand]` — one import recolors the app.
     * Single-mode dark packs also include `.dark`.
     * Dual-mode packs (`modes.light` + `modes.dark`) emit separate light/dark color blocks.
     * `scoped`: only `<root>[data-brand]` (+ `<root>.dark[data-brand]` when dual).
     */
    mode?: EmitBrandCssMode;
    /**
     * Element the carrier attaches to. Defaults to `html` — the app-level swap.
     * A subtree preview passes its own root (e.g. `.theme-preview-artboard`) so
     * the emitted CSS cannot leak out of the preview.
     */
    root?: string;
}
/** Global single-skin selector list — single-mode packs only. */
declare function emitGlobalSkinSelector(brandId: string, darkDefault: boolean, root?: string): string;
/** Light mode selector (dual-mode). */
declare function emitLightModeSelector(brandId: string, mode: EmitBrandCssMode, root?: string): string;
/** Dark mode selector (dual-mode) — never paints light colors under .dark. */
declare function emitDarkModeSelector(brandId: string, mode: EmitBrandCssMode, root?: string): string;
/**
 * Emit a single opt-in skin CSS file from a Brand Package.
 */
declare function emitBrandCss(brand: BrandPackage, options?: EmitBrandCssOptions): string;

/** Convert #rgb / #rrggbb to HSL channel triple "H S% L%" for shadcn-style vars. */
declare function hexToHslChannels(hex: string): string;
/**
 * Normalize any common color input to HSL channel triple "H S% L%".
 * Accepts: #hex, "H S% L%", hsl()/hsla(), rgb()/rgba().
 */
declare function colorToHslChannels(color: string): string;
/** Prefer {@link colorToHslChannels}; hex-only name kept for call sites. */
declare function tryHexToHsl(hex: string | undefined, fallback: string): string;
declare function tryColorToHsl(color: string | undefined, fallback: string): string;

interface InferredRecipeHints {
    buttonDefault?: ButtonDefaultStyle;
    elevationPreset?: ElevationStyle;
    density?: Density;
    /** Free radii slots from DESIGN.md tables / free-text */
    radii?: {
        button?: string;
        card?: string;
    };
    notes: string[];
}
/**
 * Infer control recipe from DESIGN.md / agent prompt text.
 * Used for generic brands and to refine known fixtures.
 */
declare function inferRecipeFromDesignMd(designMd: string): InferredRecipeHints;

/**
 * Normalize Brand Packages into the carrier contract.
 * Accepts legacy recipe fields and missing roles; always outputs full roles + free elev/radii.
 */

/** Expand elevation preset → free CSS tokens. */
declare function elevationPresetToTokens(preset: ElevationStyle | undefined, cardShadow?: string): BrandElevationTokens;
declare function rolesFromSemantic(s: BrandSemanticColors, brandMark?: {
    brand?: string;
    brandForeground?: string;
}): BrandColorRoles;
/** roles → shadcn semantic: primary ALWAYS tracks action (CTA), never brand mark. */
declare function semanticFromRoles(r: BrandColorRoles): BrandSemanticColors;
/** Canonicalize one mode palette → full roles + semantic. */
declare function normalizeModePalette(palette: BrandModePalette, categoryBrand?: string): {
    roles: BrandColorRoles;
    semantic: BrandSemanticColors;
};
/** Ensure package has roles + free radii/elev; strip legacy recipe aliases from output. */
declare function normalizeBrandPackage(brand: BrandPackage | BrandPackageInput): BrandPackage;
/** True when package has full dual light+dark palettes. */
declare function isDualModeBrand(brand: BrandPackage): boolean;

interface ValidationResult {
    ok: boolean;
    errors: string[];
    warnings: string[];
}
/** Validate carrier contract before Create Center publish. */
declare function validateBrandPackage(brand: unknown): ValidationResult;

export { BrandColorRoles, BrandElevationTokens, BrandModePalette, BrandPackage, BrandPackageInput, BrandSemanticColors, ButtonDefaultStyle, CompileResult, Density, ElevationStyle, type EmitBrandCssMode, type EmitBrandCssOptions, type InferredRecipeHints, type ValidationResult, colorToHslChannels, compileReferoTokens, elevationPresetToTokens, emitBrandCss, emitDarkModeSelector, emitGlobalSkinSelector, emitLightModeSelector, hexToHslChannels, inferRecipeFromDesignMd, isDualModeBrand, normalizeBrandPackage, normalizeModePalette, rolesFromSemantic, semanticFromRoles, tryColorToHsl, tryHexToHsl, validateBrandPackage };
