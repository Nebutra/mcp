import * as react_jsx_runtime from 'react/jsx-runtime';
import { ReactNode } from 'react';
import '@lobehub/icons';
import '@nebutra/icons';

interface NebutraThemeProviderProps {
    children: ReactNode;
    /** Force dark/light mode, or use system preference */
    appearance?: "dark" | "light" | "auto";
    /** Default theme mode when appearance is "auto" */
    defaultAppearance?: "dark" | "light";
}
/**
 * Theme provider that wraps Lobe UI with Nebutra design tokens
 *
 * @example
 * ```tsx
 * <NebutraThemeProvider appearance="auto">
 *   <App />
 * </NebutraThemeProvider>
 * ```
 */
declare function NebutraThemeProvider({ children, appearance, defaultAppearance, }: NebutraThemeProviderProps): react_jsx_runtime.JSX.Element;

/**
 * @internal — Lobe UI Ant Design Token Bridge
 *
 * These hex color values exist ONLY to configure Lobe UI's `customTheme` prop,
 * which requires JS-level token values (not CSS variables).
 *
 * ⚠️  DO NOT import these tokens in app code.
 *     App code should use CSS variables from `@nebutra/tokens/styles.css`
 *     (e.g., `var(--color-primary)`, `bg-primary`, `text-neutral-12`)
 *
 * Token hierarchy:
 *   @nebutra/brand          → brand primitives (source data)
 *   @nebutra/tokens         → runtime CSS variables (light/dark, 12-step scales)
 *   @nebutra/theme          → multi-theme presets (oklch, 6 variants)
 *   @nebutra/ui/theme       → THIS FILE: Lobe UI bridge (internal only)
 */
declare const colors: {
    readonly primary: {
        readonly 50: "#EFF6FF";
        readonly 100: "#DBEAFE";
        readonly 200: "#BFDBFE";
        readonly 300: "#93C5FD";
        readonly 400: "#60A5FA";
        readonly 500: "#3B82F6";
        readonly 600: "#2563EB";
        readonly 700: "#1D4ED8";
        readonly 800: "#1E40AF";
        readonly 900: "#1E3A8A";
        readonly 950: "#172554";
    };
    readonly secondary: {
        readonly 50: "#FAF5FF";
        readonly 100: "#F3E8FF";
        readonly 200: "#E9D5FF";
        readonly 300: "#D8B4FE";
        readonly 400: "#C084FC";
        readonly 500: "#A855F7";
        readonly 600: "#9333EA";
        readonly 700: "#7C3AED";
        readonly 800: "#6B21A8";
        readonly 900: "#581C87";
        readonly 950: "#3B0764";
    };
    readonly neutral: {
        readonly 50: "#F8FAFC";
        readonly 100: "#F1F5F9";
        readonly 200: "#E2E8F0";
        readonly 300: "#CBD5E1";
        readonly 400: "#94A3B8";
        readonly 500: "#64748B";
        readonly 600: "#475569";
        readonly 700: "#334155";
        readonly 800: "#1E293B";
        readonly 900: "#0F172A";
        readonly 950: "#020617";
    };
    readonly success: "#10B981";
    readonly warning: "#F59E0B";
    readonly error: "#EF4444";
    readonly info: "#3B82F6";
};
declare const spacing: {
    readonly xs: "0.25rem";
    readonly sm: "0.5rem";
    readonly md: "1rem";
    readonly lg: "1.5rem";
    readonly xl: "2rem";
    readonly "2xl": "3rem";
    readonly "3xl": "4rem";
};
declare const borderRadius: {
    readonly none: "0";
    readonly sm: "0.25rem";
    readonly md: "0.375rem";
    readonly lg: "0.5rem";
    readonly xl: "0.75rem";
    readonly "2xl": "1rem";
    readonly full: "9999px";
};
declare const shadows: {
    readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
};
declare const typography: {
    readonly fontFamily: {
        readonly sans: "var(--font-sans, var(--font-geist-sans, \"Geist\", system-ui, -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, sans-serif))";
        readonly mono: "var(--font-mono, var(--font-geist-mono, \"Geist Mono\", ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, monospace))";
    };
    readonly fontSize: {
        readonly xs: "0.75rem";
        readonly sm: "0.875rem";
        readonly base: "1rem";
        readonly lg: "1.125rem";
        readonly xl: "1.25rem";
        readonly "2xl": "1.5rem";
        readonly "3xl": "1.875rem";
        readonly "4xl": "2.25rem";
    };
};
type NebutraTokens = {
    colors: typeof colors;
    spacing: typeof spacing;
    borderRadius: typeof borderRadius;
    shadows: typeof shadows;
    typography: typeof typography;
};

/**
 * @nebutra/ui/theme — Lobe UI theme integration
 *
 * Exports the NebutraThemeProvider (wraps Lobe UI with brand tokens).
 *
 * For runtime CSS tokens, import from @nebutra/tokens instead:
 *   import { ThemeProvider } from "@nebutra/tokens";
 *   @import "@nebutra/tokens/styles.css";
 */

/**
 * Theme mode type used by DesignSystemProvider / layout components.
 * Matches next-themes convention.
 */
type ThemeMode = "light" | "dark" | "system";

export { NebutraThemeProvider, type NebutraThemeProviderProps, type NebutraTokens, type ThemeMode };
