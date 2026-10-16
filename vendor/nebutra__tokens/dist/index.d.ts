import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
export { B as BRAND_STORAGE_KEY, a as BrandIframePreviewOptions, U as UseBrandOptions, b as UseBrandResult, c as applyBrandCss, d as applyBrandPackage, e as applyBrandToIframe, f as clearBrand, g as getActiveBrandId, r as restorePersistedBrand, u as useBrand, h as useBrandIframePreview } from './use-brand-BIm_ccWq.js';
export { ValidationResult, compileReferoTokens, emitBrandCss, hexToHslChannels, inferRecipeFromDesignMd, normalizeBrandPackage, rolesFromSemantic, semanticFromRoles, validateBrandPackage } from './brand-package/index.js';
export { B as BrandColorRoles, a as BrandElevationTokens, b as BrandFontFace, c as BrandPackage, d as BrandRadii, e as BrandRecipe, C as CompileResult } from './types-Zi77gyTk.js';

type Theme = "light" | "dark" | "system";
type ResolvedTheme = "light" | "dark";
/**
 * Shared default storage key. Matches what `next-themes` uses, so any user
 * who already has a saved preference keeps it across the migration.
 */
declare const THEME_STORAGE_KEY = "theme";
interface ThemeContextValue {
    /** Whether a real ThemeProvider is present above the consumer. */
    isProviderBound: boolean;
    /** The raw user preference. May be "system". */
    theme: Theme;
    /** Provider-level override for demos, locked routes, or embedded previews. */
    forcedTheme?: Theme | undefined;
    /** The concretely-applied theme — always "light" or "dark". */
    resolvedTheme: ResolvedTheme;
    /** The OS-level preference (always concrete). */
    systemTheme: ResolvedTheme;
    setTheme: (theme: Theme) => void;
    themes: readonly Theme[];
}
/**
 * Read the active theme state. Safe to call outside a provider — returns
 * a sane default in that case so consumers don't need to null-check.
 */
declare function useTheme(): ThemeContextValue;
interface ThemeProviderProps {
    children: ReactNode;
    /** Which DOM attribute to set on `<html>`. Default: `"class"`. */
    attribute?: "class" | "data-theme";
    /**
     * Default theme when no preference is stored. Default: the project's
     * (`PROJECT_THEME.defaultMode`, set by its preset) — `"system"` for factory.
     */
    defaultTheme?: Theme;
    /** Whether `"system"` is a valid theme that tracks `prefers-color-scheme`. */
    enableSystem?: boolean;
    /**
     * Lock the rendered theme and expose read-only state to controls. Default:
     * the project's (`PROJECT_THEME.forcedMode`) — set when its language has one
     * palette, so the other mode cannot fall through to the House tokens.
     */
    forcedTheme?: Theme | undefined;
    /** Suppress CSS transitions during the swap. Default: `true`. */
    disableTransitionOnChange?: boolean;
    /** Storage key under which the preference is persisted. */
    storageKey?: string;
    /** CSP nonce — accepted for API compatibility, currently unused by client logic. */
    nonce?: string;
}
declare function ThemeProvider({ children, attribute, defaultTheme, enableSystem, forcedTheme, disableTransitionOnChange, storageKey, nonce, }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

/**
 * @nebutra/tokens — Runtime theme tokens & theme switching
 *
 * This package is the SINGLE SOURCE OF TRUTH for runtime design tokens.
 *
 * CSS tokens:  @import "@nebutra/tokens/styles.css"
 *   → Brand color scales (--nebutra-blue-*, --nebutra-cyan-*)
 *   → 12-step functional scales (--neutral-1..12, --blue-1..12, --cyan-1..12)
 *   → Semantic variables (--primary, --background, --border, etc.)
 *   → Light/dark mode via :root / .dark
 *   → Display-P3 wide gamut with sRGB fallback
 *   → Tailwind v4 @theme integration
 *
 * JS exports:  ThemeProvider, useTheme, THEME_STORAGE_KEY (custom — no next-themes)
 *   → App-level light/dark mode switching
 *   → ThemeProvider writes BOTH localStorage AND a cookie of the same name.
 *     Server Components read the cookie via `next/headers` cookies() and
 *     inject the resolved class directly into <html> — zero inline script,
 *     zero React 19 "script in component" warning, zero FOUC risk.
 *
 * Related packages:
 *   @nebutra/brand  → brand primitives (color definitions, motion language)
 *   @nebutra/theme  → design-language catalog (Brand Package global swap)
 *   @nebutra/ui     → component library (consumes tokens via CSS variables)
 */

declare const THEME_IDS: readonly ["light", "dark"];
type ThemeId = (typeof THEME_IDS)[number];
declare const DEFAULT_THEME: ThemeId;

export { DEFAULT_THEME, THEME_IDS, THEME_STORAGE_KEY, type ThemeId, ThemeProvider, type ThemeProviderProps, useTheme };
