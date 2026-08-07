import { C as CompileResult, e as BrandPackage, o as ButtonDefaultStyle, E as ElevationStyle, D as Density, p as BrandPackageInput, q as BrandSemanticColors, a as BrandColorRoles, b as BrandElevationTokens, s as BrandModePalette } from '../use-brand-ClmvK_lC.js';
export { A as ApplyBrandOptions, B as BRAND_STORAGE_KEY, t as BRAND_STYLE_ELEMENT_ID, v as BadgeDefaultStyle, w as BrandExtensions, c as BrandFontFace, x as BrandFontSource, d as BrandIframePreviewOptions, y as BrandModes, f as BrandRadii, g as BrandRecipe, z as BrandRecipeInput, F as BrandTypography, G as CssColor, H as HslChannels, I as UseBrandIframePreviewResult, U as UseBrandOptions, h as UseBrandResult, i as applyBrandCss, j as applyBrandPackage, l as clearBrand, m as getActiveBrandId, r as restorePersistedBrand } from '../use-brand-ClmvK_lC.js';
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
     * `global` (default): `:root` + `html[data-brand]` — one import recolors the app.
     * Single-mode dark packs also include `.dark`.
     * Dual-mode packs (`modes.light` + `modes.dark`) emit separate light/dark color blocks.
     * `scoped`: only `html[data-brand]` (+ `html.dark[data-brand]` when dual).
     */
    mode?: EmitBrandCssMode;
}
/** Global single-skin selector list — single-mode packs only. */
declare function emitGlobalSkinSelector(brandId: string, darkDefault: boolean): string;
/** Light mode selector (dual-mode). */
declare function emitLightModeSelector(brandId: string, mode: EmitBrandCssMode): string;
/** Dark mode selector (dual-mode) — never paints light colors under .dark. */
declare function emitDarkModeSelector(brandId: string, mode: EmitBrandCssMode): string;
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
