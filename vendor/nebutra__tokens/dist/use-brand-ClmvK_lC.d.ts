import { RefObject } from 'react';

/**
 * Brand Package — Create Center carrier contract.
 *
 * This is a *host* for third-party design languages (Linear, GSAP, Raycast, Vercel…),
 * not a list of brand presets. Presets only demonstrate the contract.
 *
 * Layers:
 *   1. roles     — color meaning (action vs brand-mark vs surface…)
 *   2. recipe    — control language (button/badge fill, radii slots, free elev CSS)
 *   3. typography / fonts
 *   4. semantic  — shadcn/Tailwind bridge (derived from roles; components keep using --primary)
 *
 * @see packages/design/ARCHITECTURE.md
 */
/** HSL channel triple without `hsl()` wrapper, e.g. "66 89% 54%" */
type HslChannels = string;
/** Full CSS color (hex / rgb / hsl / oklch / gradient) */
type CssColor = string;
type ButtonDefaultStyle = "solid" | "outline" | "gradient-stroke";
/**
 * Elevation *presets* are only shortcuts that expand to free CSS box-shadow tokens.
 * Carriers should prefer `recipe.elevationTokens` with arbitrary shadow stacks.
 */
type ElevationStyle = "none" | "soft" | "raised" | "key" | "hairline";
type Density = "compact" | "comfortable" | "spacious";
/** Badge fill language (may diverge from action CTA) */
type BadgeDefaultStyle = "match-action" | "match-primary" | "muted" | "outline" | "brand";
/**
 * First-class color roles — what Create Center fills.
 * Maps onto CSS vars and into shadcn semantic for component compatibility.
 */
interface BrandColorRoles {
    /** Page canvas */
    canvas: HslChannels;
    canvasForeground: HslChannels;
    /** Contained surfaces (cards, panels) */
    surface: HslChannels;
    surfaceForeground: HslChannels;
    /**
     * Product *action* fill (default Button / primary chrome).
     * Must be readable as a CTA — not necessarily the brand mark color.
     */
    action: HslChannels;
    actionForeground: HslChannels;
    /**
     * Brand mark only (logo accent, AI diamond, VI-adjacent product accent).
     * NEVER used for default form CTAs unless Create Center explicitly maps action ← brand.
     */
    brand?: HslChannels;
    brandForeground?: HslChannels;
    /** Quiet fills (secondary, badges muted) */
    quiet: HslChannels;
    quietForeground: HslChannels;
    muted: HslChannels;
    mutedForeground: HslChannels;
    border: HslChannels;
    /**
     * Field stroke. `--input` is consumed only as a border colour (`border-input`
     * on Input, Textarea, Select, Combobox, InputOTP) — never as a fill. Omit it
     * and it derives from `border`, which is what every language wants: six of
     * the seven built-ins had written their own card fill here, producing a field
     * whose outline was the same colour as the surface behind it. Set it only to
     * give fields a stroke that genuinely differs from every other hairline.
     */
    input?: HslChannels;
    ring: HslChannels;
    destructive: HslChannels;
    destructiveForeground: HslChannels;
    success?: HslChannels;
    successForeground?: HslChannels;
    warning?: HslChannels;
    warningForeground?: HslChannels;
    info?: HslChannels;
    infoForeground?: HslChannels;
}
/** Shape slots — components bind per role, not one global radius */
interface BrandRadii {
    button: string;
    card: string;
    badge?: string;
    input?: string;
    pill?: string;
}
/**
 * Free-form elevation — any CSS box-shadow string the brand requires.
 * Components only read --elevation-card / control / raised.
 */
interface BrandElevationTokens {
    card: string;
    control?: string;
    raised?: string;
}
/**
 * shadcn/Tailwind bridge. Prefer editing `roles`; semantic is kept in sync by normalize().
 * Components continue to use bg-primary etc. which map to action.
 */
interface BrandSemanticColors {
    background: HslChannels;
    foreground: HslChannels;
    card: HslChannels;
    cardForeground: HslChannels;
    popover: HslChannels;
    popoverForeground: HslChannels;
    /** = roles.action (product CTA) */
    primary: HslChannels;
    primaryForeground: HslChannels;
    secondary: HslChannels;
    secondaryForeground: HslChannels;
    muted: HslChannels;
    mutedForeground: HslChannels;
    accent: HslChannels;
    accentForeground: HslChannels;
    destructive: HslChannels;
    destructiveForeground: HslChannels;
    border: HslChannels;
    /**
     * Field stroke. `--input` is consumed only as a border colour (`border-input`
     * on Input, Textarea, Select, Combobox, InputOTP) — never as a fill. Omit it
     * and it derives from `border`, which is what every language wants: six of
     * the seven built-ins had written their own card fill here, producing a field
     * whose outline was the same colour as the surface behind it. Set it only to
     * give fields a stroke that genuinely differs from every other hairline.
     */
    input?: HslChannels;
    ring: HslChannels;
    success?: HslChannels;
    successForeground?: HslChannels;
    warning?: HslChannels;
    warningForeground?: HslChannels;
    info?: HslChannels;
    infoForeground?: HslChannels;
}
/**
 * Canonical product-chrome recipe (post-normalize).
 * Free radii + free elevation tokens only — no buttonRadius/elevation aliases.
 */
interface BrandRecipe {
    buttonDefault: ButtonDefaultStyle;
    density: Density;
    radii: BrandRadii;
    elevationTokens: BrandElevationTokens;
    primaryStrokeGradient?: string;
    outlineBorder?: CssColor;
    badgeDefault?: BadgeDefaultStyle;
}
/**
 * Loose recipe accepted by normalize/compile before canonicalization.
 * Legacy keys (buttonRadius, elevation preset, cardShadow) are input-only.
 */
type BrandRecipeInput = {
    buttonDefault: ButtonDefaultStyle;
    density?: Density;
    radii?: BrandRadii;
    elevationTokens?: BrandElevationTokens;
    /** @deprecated input-only — expanded to elevationTokens */
    elevation?: ElevationStyle;
    primaryStrokeGradient?: string;
    outlineBorder?: CssColor;
    badgeDefault?: BadgeDefaultStyle;
    /** @deprecated input-only — use radii.button */
    buttonRadius?: string;
    /** @deprecated input-only — use radii.card */
    cardRadius?: string;
    /** @deprecated input-only — use radii.badge */
    badgeRadius?: string;
    /** @deprecated input-only — use radii.input */
    inputRadius?: string;
    /** @deprecated input-only — use elevationTokens.card */
    cardShadow?: string;
};
interface BrandFontSource {
    url: string;
    format?: "woff2" | "woff" | "truetype" | "opentype" | "svg";
}
interface BrandFontFace {
    family: string;
    src: BrandFontSource[];
    weight?: number | string;
    style?: "normal" | "italic" | "oblique";
    display?: "auto" | "block" | "swap" | "fallback" | "optional";
    unicodeRange?: string;
}
interface BrandTypography {
    fontSans: string;
    fontMono?: string;
    fontDisplay?: string;
    headingWeight?: number | string;
    faces?: BrandFontFace[];
}
/**
 * How a design language moves.
 *
 * Motion is a dimension of a language, not a constant: Linear resolves almost
 * before you notice, Notion settles, GSAP performs. Until this existed the
 * durations and curves were declared once in the shared token sheet and no skin
 * could override them, so switching brand changed every colour, radius, face and
 * type scale on the page — and left the timing identical.
 *
 * Durations are milliseconds and carry the same four names the token sheet
 * already ships, so a component written against `--duration-flow` picks up the
 * language it is under without changing.
 */
interface BrandMotion {
    /** Entering — decelerates into place. */
    easeOut?: string;
    /** Moving between two on-screen states. */
    easeInOut?: string;
    /** Overshoots and settles. Omit for languages that never overshoot. */
    easeSpring?: string;
    /** State flips the eye should not have to wait for: hover, press, check. */
    micro?: number;
    /** Something moving across the surface: a drawer, a tab indicator. */
    flow?: number;
    /** Something arriving that was not there: a panel, a toast. */
    reveal?: number;
    /** Deliberately slow, for a single focal moment. Never for chrome. */
    cinematic?: number;
}
/**
 * How much room a language leaves around its content.
 *
 * Spacing is a dimension of a language the same way motion is: Linear and
 * Raycast sit close to the content they chrome, Notion and Vanta give it room
 * to breathe. Before this existed, Tailwind's numeric scale (`p-4`, `gap-2`)
 * was the only spacing vocabulary in the repo, and it is a fixed arithmetic
 * multiplier (`--spacing: 0.25rem`) shared by width, height and line-height —
 * repointing it per brand would rescale icons and text along with padding.
 *
 * This is a second, narrower, opt-in scale emitted as `--space-source-*`.
 * Components read those vars directly. Never bridge them into `@theme` as
 * `--spacing-sm` / `--spacing-md` / etc.: Tailwind v4 treats those keys as
 * size tokens, which hijacks `max-w-sm` through `max-w-2xl`.
 *
 * Values are full CSS lengths (e.g. `"1rem"`), not multiples. Only the keys a
 * language declares are emitted; an omitted step inherits the shared default
 * rather than being reset to it.
 */
interface BrandSpacing {
    xs?: string;
    sm?: string;
    md?: string;
    lg?: string;
    xl?: string;
    "2xl"?: string;
}
interface BrandExtensions {
    /** Taxonomy / category accents (GSAP disciplines, etc.) — product chrome may ignore */
    categories?: Record<string, CssColor>;
    /** Marketing-only decorative gradients (spectrum, hero floor) — never product CTA */
    decorative?: Record<string, string>;
    displaySizePx?: number;
    sourceUrl?: string;
    notes?: string[];
}
/**
 * One appearance mode’s colors (light or dark).
 * Prefer roles; semantic is the shadcn bridge (derived when omitted).
 */
interface BrandModePalette {
    roles?: BrandColorRoles;
    semantic?: BrandSemanticColors;
}
/**
 * Optional dual-mode colors. When both light and dark are set, emit binds:
 *   light → :root / html[data-brand]
 *   dark  → .dark / html.dark[data-brand]
 * Single-mode packs omit this and use top-level semantic + darkDefault selector rules.
 */
interface BrandModes {
    light?: BrandModePalette;
    dark?: BrandModePalette;
}
interface BrandPackage {
    id: string;
    name: string;
    darkDefault: boolean;
    version: string;
    /**
     * Canonical color roles for the **default** mode (see darkDefault).
     * If omitted, derived from semantic on normalize().
     */
    roles?: BrandColorRoles;
    /**
     * shadcn bridge for the default mode — always present after normalize().
     */
    semantic: BrandSemanticColors;
    /**
     * Dual light/dark palettes (optional). When present after normalize, both modes
     * are fully specified and emitBrandCss writes separate light/dark color blocks.
     */
    modes?: BrandModes;
    /** Always canonical after normalizeBrandPackage(). */
    recipe: BrandRecipe;
    typography: BrandTypography;
    /** How the language moves. Falls back to the shared ramp when omitted. */
    motion?: BrandMotion;
    /** How much room the language leaves around content. Falls back to the shared scale when omitted. */
    spacing?: BrandSpacing;
    extensions?: BrandExtensions;
}
/** Pre-normalize package (recipe may still use legacy keys). */
type BrandPackageInput = Omit<BrandPackage, "recipe"> & {
    recipe: BrandRecipeInput;
    modes?: BrandModes;
};
interface CompileResult {
    brand: BrandPackage;
    css: string;
    warnings: string[];
}

declare const BRAND_STYLE_ELEMENT_ID = "nebutra-brand-skin";
declare const BRAND_STORAGE_KEY = "nebutra-brand-package";
interface ApplyBrandOptions {
    /** Persist package JSON to localStorage for Create Center preview reload */
    persist?: boolean;
    /** Target document (iframe preview support) */
    doc?: Document;
}
/**
 * Inject brand skin CSS at runtime (Create Center preview / tenant switch).
 * Does not require rebuilding app CSS — overrides semantic + recipe vars.
 */
declare function applyBrandCss(css: string, brandId?: string, options?: ApplyBrandOptions): void;
/** Apply a full Brand Package (emit CSS + optional persist). */
declare function applyBrandPackage(brand: BrandPackage, options?: ApplyBrandOptions): void;
/** Remove runtime brand skin and restore default Nebutra tokens. */
declare function clearBrand(options?: ApplyBrandOptions): void;
/** Restore brand package previously persisted by applyBrandPackage({ persist: true }). */
declare function restorePersistedBrand(options?: ApplyBrandOptions): BrandPackage | null;
declare function getActiveBrandId(doc?: Document): string | null;

interface UseBrandOptions {
    /** Restore from localStorage on mount */
    autoRestore?: boolean;
    /** Persist apply/clear to localStorage */
    persist?: boolean;
}
interface UseBrandResult {
    brand: BrandPackage | null;
    brandId: string | null;
    apply: (brand: BrandPackage) => void;
    clear: () => void;
    restore: () => BrandPackage | null;
}
/**
 * Create Center / app-level brand state for the host document.
 */
declare function useBrand(options?: UseBrandOptions): UseBrandResult;
interface BrandIframePreviewOptions {
    /**
     * Stylesheets the iframe must load before the brand skin
     * (e.g. app CSS URL that already includes tokens + recipe).
     */
    baseStylesheetHrefs?: string[];
    /** Extra head HTML (fonts CDN, etc.) */
    headHtml?: string;
    /** Minimal body wrapper class */
    bodyClassName?: string;
    /** Called after brand CSS is injected into the iframe */
    onApplied?: (brand: BrandPackage | null) => void;
}
interface UseBrandIframePreviewResult {
    iframeRef: RefObject<HTMLIFrameElement | null>;
    brand: BrandPackage | null;
    /** Write/update brand inside the iframe document */
    apply: (brand: BrandPackage) => void;
    clear: () => void;
    /**
     * Optional: write a self-contained preview document.
     * Use when the iframe has no host app styles yet.
     */
    writePreviewDocument: (brand: BrandPackage, bodyHtml?: string) => void;
}
/**
 * Multi-tenant / Create Center iframe preview.
 * Applies Brand Packages into the iframe's document without touching the host shell.
 */
declare function useBrandIframePreview(options?: BrandIframePreviewOptions): UseBrandIframePreviewResult;
/** Imperative helper for non-hook call sites */
declare function applyBrandToIframe(iframe: HTMLIFrameElement, brand: BrandPackage, options?: ApplyBrandOptions & {
    baseStylesheetHrefs?: string[];
}): void;

export { type ApplyBrandOptions as A, BRAND_STORAGE_KEY as B, type CompileResult as C, type Density as D, type ElevationStyle as E, type BrandTypography as F, type CssColor as G, type HslChannels as H, type UseBrandIframePreviewResult as I, type UseBrandOptions as U, type BrandColorRoles as a, type BrandElevationTokens as b, type BrandFontFace as c, type BrandIframePreviewOptions as d, type BrandPackage as e, type BrandRadii as f, type BrandRecipe as g, type UseBrandResult as h, applyBrandCss as i, applyBrandPackage as j, applyBrandToIframe as k, clearBrand as l, getActiveBrandId as m, useBrandIframePreview as n, type ButtonDefaultStyle as o, type BrandPackageInput as p, type BrandSemanticColors as q, restorePersistedBrand as r, type BrandModePalette as s, BRAND_STYLE_ELEMENT_ID as t, useBrand as u, type BadgeDefaultStyle as v, type BrandExtensions as w, type BrandFontSource as x, type BrandModes as y, type BrandRecipeInput as z };
