export { AUTH_FORM_COLUMN_CLASS, AUTH_OAUTH_BUTTON_CLASS, AUTH_OAUTH_GRID_CLASS, AUTH_PRIMARY_CTA_CLASS } from './auth-surfaces.js';
import { ClassValue } from 'clsx';
import * as React from 'react';

declare function cn(...inputs: ClassValue[]): string;

/**
 * Base UI (and some Radix peers) type `style` as CSSProperties | state-function.
 * Token merge helpers only need the plain object branch — drop functions so DTS
 * builds stay green across monorepo and standalone package mirrors.
 * Returns `{}` (never undefined) so spreads stay exactOptionalPropertyTypes-safe.
 */
declare function asPlainStyle(style: unknown): React.CSSProperties;
type PrimitiveProps<T> = React.PropsWithChildren<T & {
    className?: string | undefined;
}>;
type PrimitiveComponent<TElement, TProps> = React.ForwardRefExoticComponent<PrimitiveProps<TProps> & React.RefAttributes<TElement>>;
/**
 * Resolve the HTMLElement type for a given intrinsic element tag.
 */
type ElementForTag<E extends keyof React.JSX.IntrinsicElements> = E extends "button" ? HTMLButtonElement : E extends "span" ? HTMLSpanElement : E extends "img" ? HTMLImageElement : E extends "label" ? HTMLLabelElement : E extends "input" ? HTMLInputElement : E extends "a" ? HTMLAnchorElement : E extends "p" ? HTMLParagraphElement : E extends "h1" | "h2" | "h3" | "h4" | "h5" | "h6" ? HTMLHeadingElement : HTMLElement;
/**
 * Workaround for Radix UI types not resolving HTML element props (className,
 * children, etc.) with React 19 + exactOptionalPropertyTypes.
 *
 * The optional second type parameter `Extra` allows preserving Radix-specific
 * props (e.g. `asChild`, `align`, `sideOffset`) that are not standard HTML attrs.
 *
 * Usage:
 *   const Header = withHtmlProps<"h3">(AccordionPrimitive.Header);
 *   const Trigger = withHtmlProps<"button", { asChild?: boolean }>(DialogPrimitive.Trigger);
 *   const Content = withHtmlProps<"div", { align?: string; sideOffset?: number }>(PopoverPrimitive.Content);
 */
declare function withHtmlProps<E extends keyof React.JSX.IntrinsicElements, Extra = object>(Component: any): React.ForwardRefExoticComponent<React.ComponentPropsWithoutRef<E> & Extra & React.RefAttributes<ElementForTag<E>>>;

/**
 * Runtime color resolution for APIs that cannot consume CSS variables
 * (Canvas, WebGL, some animation libs).
 *
 * Layers (do not mix):
 * - Product action / CTA: getProductPrimary() → semantic `--primary` (roles.action)
 * - Brand mark / AI badge / logo tint: getBrandMark() → `--brand-mark` (roles.brand)
 * - VI lock (print / legal assets): getBrandPrimary() → `--brand-primary` hex
 *
 * Prefer CSS / Tailwind in components:
 * - `bg-primary` for CTAs
 * - `bg-brand-mark` / `text-brand-mark` for Logo/AI badge (see recipe.css)
 *
 * @see packages/design/ARCHITECTURE.md
 * @see packages/design/tokens/recipe.css
 */
/** SSR fallbacks when document is unavailable */
declare const BRAND_FALLBACK: {
    /** VI 云毓蓝 — identity only */
    readonly primary: "#0033FE";
    readonly accent: "#0BF1C3";
    readonly tertiary: "#5c7cfa";
    readonly primaryDark: "#002ad4";
    readonly backDark: "#000830";
    /** Soft product action (matches themes/light --primary ≈ #254bfa) */
    readonly productPrimary: "#254bfa";
    /**
     * Brand mark fallback (= product action when factory brand has action≡brand).
     * Skins may diverge (e.g. Linear purple action + indigo mark).
     */
    readonly brandMark: "#254bfa";
    readonly brandMarkForeground: "#ffffff";
};
/**
 * Read a CSS variable from :root and return its trimmed value.
 */
declare function readCssVar(name: string, fallback: string): string;
/**
 * Product action color — follows the active skin (`--primary`).
 * Use for shaders/canvas that must match buttons/CTAs.
 */
declare function getProductPrimary(): string;
/** VI lock color — legal / print lockups only (not product chrome). */
declare function getBrandPrimary(): string;
/**
 * Product brand-mark (roles.brand) — Logo tile, AI badge, identity chips.
 * Never use for default CTA (that is getProductPrimary / --primary).
 */
declare function getBrandMark(): string;
/** Foreground on brand-mark surfaces. */
declare function getBrandMarkForeground(): string;
declare function getBrandAccent(): string;
declare function getBrandTertiary(): string;

/**
 * Utility Functions
 */
/** Auth split-shell + primary CTA contracts (width + ink CTA pairing). */

/**
 * Breakpoint values (matches Primer)
 */
declare const BREAKPOINTS: {
    readonly xs: 0;
    readonly sm: 544;
    readonly md: 768;
    readonly lg: 1012;
    readonly xl: 1280;
};
type Breakpoint = keyof typeof BREAKPOINTS;
/**
 * Check if viewport is at or above breakpoint
 */
declare function isBreakpointUp(breakpoint: Breakpoint): boolean;

export { BRAND_FALLBACK, BREAKPOINTS, type Breakpoint, type PrimitiveComponent, type PrimitiveProps, asPlainStyle, cn, getBrandAccent, getBrandMark, getBrandMarkForeground, getBrandPrimary, getBrandTertiary, getProductPrimary, isBreakpointUp, readCssVar, withHtmlProps };
