import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// src/utils/auth-surfaces.ts
var AUTH_FORM_COLUMN_CLASS = "relative mx-auto min-w-0 w-[min(100%,360px)] shrink-0";
var AUTH_PRIMARY_CTA_CLASS = "h-11 w-full";
var AUTH_OAUTH_GRID_CLASS = "grid grid-cols-2 gap-2";
var AUTH_OAUTH_BUTTON_CLASS = "h-9 w-full justify-center gap-2 border-border bg-background px-2.5 text-sm font-medium text-foreground shadow-none hover:bg-muted";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/utils/primitive-props.ts
function asPlainStyle(style) {
  if (style == null || typeof style === "function") return {};
  return style;
}
function withHtmlProps(Component) {
  return Component;
}

// src/utils/brand-colors.ts
var BRAND_FALLBACK = {
  /** VI 云毓蓝 — identity only */
  primary: "#0033FE",
  accent: "#0BF1C3",
  tertiary: "#5c7cfa",
  primaryDark: "#002ad4",
  backDark: "#000830",
  /** Soft product action (matches themes/light --primary ≈ #254bfa) */
  productPrimary: "#254bfa",
  /**
   * Brand mark fallback (= product action when factory brand has action≡brand).
   * Skins may diverge (e.g. Linear purple action + indigo mark).
   */
  brandMark: "#254bfa",
  brandMarkForeground: "#ffffff"
};
function readCssVar(name, fallback) {
  if (typeof window === "undefined" || typeof document === "undefined") {
    return fallback;
  }
  const value = getComputedStyle(document.documentElement).getPropertyValue(name).trim();
  return value || fallback;
}
function asCssColor(value, fallback) {
  const v = value.trim() || fallback;
  if (v.startsWith("#") || v.startsWith("rgb") || v.startsWith("hsl") || v.startsWith("oklch") || v.startsWith("color(")) {
    return v;
  }
  return `hsl(${v})`;
}
function getProductPrimary() {
  return asCssColor(readCssVar("--primary", "228 85% 56%"), BRAND_FALLBACK.productPrimary);
}
function getBrandPrimary() {
  return asCssVarColor("--brand-primary", BRAND_FALLBACK.primary);
}
function getBrandMark() {
  const raw = readCssVar("--brand-mark", "228 85% 56%");
  if (/var\(\s*--primary\s*\)/u.test(raw)) {
    return getProductPrimary();
  }
  return asCssColor(raw, BRAND_FALLBACK.brandMark);
}
function getBrandMarkForeground() {
  const raw = readCssVar("--brand-mark-foreground", "0 0% 100%");
  if (/var\(\s*--primary-foreground\s*\)/u.test(raw)) {
    return asCssColor(
      readCssVar("--primary-foreground", "0 0% 100%"),
      BRAND_FALLBACK.brandMarkForeground
    );
  }
  return asCssColor(raw, BRAND_FALLBACK.brandMarkForeground);
}
function asCssVarColor(name, fallback) {
  return asCssColor(readCssVar(name, fallback), fallback);
}
function getBrandAccent() {
  return asCssVarColor("--brand-accent", BRAND_FALLBACK.accent);
}
function getBrandTertiary() {
  return asCssVarColor("--brand-tertiary", BRAND_FALLBACK.tertiary);
}

// src/utils/index.ts
var BREAKPOINTS = {
  xs: 0,
  sm: 544,
  md: 768,
  lg: 1012,
  xl: 1280
};
function isBreakpointUp(breakpoint) {
  if (typeof window === "undefined") return true;
  return window.innerWidth >= BREAKPOINTS[breakpoint];
}

export { AUTH_FORM_COLUMN_CLASS, AUTH_OAUTH_BUTTON_CLASS, AUTH_OAUTH_GRID_CLASS, AUTH_PRIMARY_CTA_CLASS, BRAND_FALLBACK, BREAKPOINTS, asPlainStyle, cn, getBrandAccent, getBrandMark, getBrandMarkForeground, getBrandPrimary, getBrandTertiary, getProductPrimary, isBreakpointUp, readCssVar, withHtmlProps };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map