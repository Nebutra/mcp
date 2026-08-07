/**
 * Font Configuration and Loading Utilities
 *
 * Handles web font loading, preloading, and performance optimization.
 */
/**
 * Font configuration object
 */
interface FontConfig {
    /** Font family name */
    family: string;
    /** Font weights to load */
    weights: number[];
    /** Include italic variants */
    italic?: boolean;
    /** Font display strategy */
    display?: "auto" | "block" | "swap" | "fallback" | "optional";
    /** Is this a variable font */
    variable?: boolean;
    /** Google Fonts URL parameter name */
    googleFontsParam?: string;
    /** Self-hosted font URL */
    selfHostUrl?: string;
    /** Font license */
    license: "OFL" | "Apache-2.0" | "Ubuntu" | "MIT" | "Other";
    /** Source URL for license */
    licenseUrl?: string;
}
/**
 * Registered fonts for the design system
 */
declare const fonts: Record<string, FontConfig>;
/**
 * Generate Google Fonts URL for specified fonts
 */
declare function getGoogleFontsUrl(fontKeys: (keyof typeof fonts)[]): string;
/**
 * Default fonts to load
 */
declare const defaultFonts: (keyof typeof fonts)[];
/**
 * Fonts for CJK (Chinese) support
 */
declare const cjkFonts: (keyof typeof fonts)[];
/**
 * All fonts including CJK
 */
declare const allFonts: (keyof typeof fonts)[];
/**
 * Generate preload link elements for critical fonts
 */
declare function getFontPreloadLinks(fontKeys: (keyof typeof fonts)[]): string[];
/**
 * Generate link element for Google Fonts
 */
declare function getGoogleFontsLink(fontKeys: (keyof typeof fonts)[]): string;
/**
 * Check if fonts are loaded
 */
declare function areFontsLoaded(fontFamilies: string[]): Promise<boolean>;
/**
 * Wait for fonts to load with timeout
 */
declare function waitForFonts(fontFamilies: string[], timeout?: number): Promise<boolean>;
/**
 * Font smoothing CSS for crisp text rendering
 */
declare const fontSmoothing: {
    readonly WebkitFontSmoothing: "antialiased";
    readonly MozOsxFontSmoothing: "grayscale";
    readonly textRendering: "optimizeLegibility";
};
/**
 * Font feature settings for Geist
 */
declare const fontFeatureSettings: {
    /** Enable common ligatures and contextual alternates */
    readonly normal: "\"calt\" 1, \"liga\" 1";
    /** Enable tabular figures for aligned numbers */
    readonly tabular: "\"tnum\" 1, \"calt\" 1";
    /** Enable case-sensitive forms */
    readonly case: "\"case\" 1";
    /** Enable stylistic set 01 (alternate digits) */
    readonly ss01: "\"ss01\" 1";
    /** Enable stylistic set 02 (alternate a) */
    readonly ss02: "\"ss02\" 1";
};
/**
 * Get license information for all used fonts
 */
declare function getFontLicenses(): Array<{
    family: string;
    license: string;
    url?: string | undefined;
}>;
/**
 * Font license compliance notice
 */
declare const fontLicenseNotice: string;

/**
 * Typography Tokens
 *
 * Centralized typography configuration for the entire design system.
 * All font-related values should come from here.
 */
/**
 * Primary font stack - Used for body text and UI.
 *
 * Token-first so next/font's generated face wins when available; the literal
 * family stack remains as a standalone fallback for docs/tests.
 */
declare const FONT_FAMILY_PRIMARY = "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
/**
 * Heading font stack - Used for titles and emphasis
 *
 * Geist Sans is the primary display typeface.
 */
declare const FONT_FAMILY_HEADING = "var(--font-heading, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
/**
 * Monospace font stack - Used for code and technical content
 */
declare const FONT_FAMILY_MONO = "var(--font-mono, var(--font-geist-mono, \"Geist Mono\", ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, monospace))";
/**
 * CJK (Chinese/Japanese/Korean) fallback stack
 *
 * vivo Sans is the primary Chinese font.
 * Provides consistent rendering for Chinese, Japanese, and Korean text.
 */
declare const FONT_FAMILY_CJK = "\"vivo Sans\", \"Source Han Sans SC\", \"Source Han Sans\", \"Noto Sans CJK SC\", \"Noto Sans SC\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif";
/**
 * Complete font stacks with CJK fallback
 */
declare const fontFamilies: {
    /** Primary UI and body text */
    readonly primary: "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
    /** Headings and titles */
    readonly heading: "var(--font-heading, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
    /** Code and monospace */
    readonly mono: "var(--font-mono, var(--font-geist-mono, \"Geist Mono\", ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, monospace))";
    /** CJK-specific fallback */
    readonly cjk: "\"vivo Sans\", \"Source Han Sans SC\", \"Source Han Sans\", \"Noto Sans CJK SC\", \"Noto Sans SC\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif";
    /** Primary with CJK fallback for multilingual content */
    readonly primaryCJK: "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif)), \"vivo Sans\", \"Source Han Sans SC\", \"Source Han Sans\", \"Noto Sans CJK SC\", \"Noto Sans SC\", \"PingFang SC\", \"Hiragino Sans GB\", \"Microsoft YaHei\", sans-serif";
    /** System font stack (fast fallback, no web fonts) */
    readonly system: "-apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif";
};
/**
 * Font size scale using rem units for accessibility
 *
 * Base: 16px = 1rem
 * Each step follows a modular scale (~1.25 ratio)
 */
declare const fontSizes: {
    /** 12px - Micro text, badges */
    readonly xs: "0.75rem";
    /** 14px - Small text, captions, labels */
    readonly sm: "0.875rem";
    /** 16px - Base body text */
    readonly base: "1rem";
    /** 18px - Lead text, larger body */
    readonly lg: "1.125rem";
    /** 20px - Small headings, subtitles */
    readonly xl: "1.25rem";
    /** 24px - H4 equivalent */
    readonly "2xl": "1.5rem";
    /** 30px - H3 equivalent */
    readonly "3xl": "1.875rem";
    /** 36px - H2 equivalent */
    readonly "4xl": "2.25rem";
    /** 48px - H1 equivalent */
    readonly "5xl": "3rem";
    /** 60px - Display/Hero text */
    readonly "6xl": "3.75rem";
    /** 72px - Large display */
    readonly "7xl": "4.5rem";
    /** 96px - Extra large display */
    readonly "8xl": "6rem";
};
/**
 * Font size in pixels (for cases where rem isn't suitable)
 */
declare const fontSizesPx: {
    readonly xs: 12;
    readonly sm: 14;
    readonly base: 16;
    readonly lg: 18;
    readonly xl: 20;
    readonly "2xl": 24;
    readonly "3xl": 30;
    readonly "4xl": 36;
    readonly "5xl": 48;
    readonly "6xl": 60;
    readonly "7xl": 72;
    readonly "8xl": 96;
};
/**
 * Line height scale
 *
 * Using unitless values for better inheritance.
 */
declare const lineHeights: {
    /** 1 - Single line, icons */
    readonly none: 1;
    /** 1.25 - Tight, for large headings */
    readonly tight: 1.25;
    /** 1.375 - Slightly snug */
    readonly snug: 1.375;
    /** 1.5 - Normal body text */
    readonly normal: 1.5;
    /** 1.625 - Relaxed reading */
    readonly relaxed: 1.625;
    /** 1.75 - Loose, for small text */
    readonly loose: 1.75;
    /** 2 - Double spaced */
    readonly double: 2;
};
/**
 * Font weight scale
 *
 * Inter and Public Sans support all these weights.
 * Variable fonts can use any value 100-900.
 */
declare const fontWeights: {
    /** 100 - Thin (if available) */
    readonly thin: 100;
    /** 200 - Extra light */
    readonly extralight: 200;
    /** 300 - Light */
    readonly light: 300;
    /** 400 - Regular/Normal */
    readonly normal: 400;
    /** 500 - Medium */
    readonly medium: 500;
    /** 600 - Semibold */
    readonly semibold: 600;
    /** 700 - Bold */
    readonly bold: 700;
    /** 800 - Extra bold */
    readonly extrabold: 800;
    /** 900 - Black */
    readonly black: 900;
};
/**
 * Letter spacing scale
 *
 * Negative values for tight headlines, positive for small caps.
 */
declare const letterSpacing: {
    /** -0.05em - Very tight, large display only */
    readonly tighter: "-0.05em";
    /** -0.025em - Slightly tight, headings */
    readonly tight: "-0.025em";
    /** 0 - Normal */
    readonly normal: "0";
    /** 0.025em - Slightly wide */
    readonly wide: "0.025em";
    /** 0.05em - Wide, for small caps */
    readonly wider: "0.05em";
    /** 0.1em - Very wide, all caps */
    readonly widest: "0.1em";
};
/**
 * Pre-defined typography presets
 *
 * These combine font-family, size, weight, and line-height
 * for common use cases.
 */
declare const typeStyles: {
    /** Hero/Display - Large marketing headlines */
    readonly display: {
        readonly fontFamily: "var(--font-heading, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "3.75rem";
        readonly fontWeight: 700;
        readonly lineHeight: 1.25;
        readonly letterSpacing: "-0.025em";
    };
    /** H1 - Page titles */
    readonly h1: {
        readonly fontFamily: "var(--font-heading, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "3rem";
        readonly fontWeight: 700;
        readonly lineHeight: 1.25;
        readonly letterSpacing: "-0.025em";
    };
    /** H2 - Section titles */
    readonly h2: {
        readonly fontFamily: "var(--font-heading, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "2.25rem";
        readonly fontWeight: 700;
        readonly lineHeight: 1.25;
        readonly letterSpacing: "-0.025em";
    };
    /** H3 - Subsection titles */
    readonly h3: {
        readonly fontFamily: "var(--font-heading, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "1.875rem";
        readonly fontWeight: 600;
        readonly lineHeight: 1.375;
        readonly letterSpacing: "0";
    };
    /** H4 - Card titles, small sections */
    readonly h4: {
        readonly fontFamily: "var(--font-heading, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "1.5rem";
        readonly fontWeight: 600;
        readonly lineHeight: 1.375;
        readonly letterSpacing: "0";
    };
    /** H5 - Widget titles */
    readonly h5: {
        readonly fontFamily: "var(--font-heading, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "1.25rem";
        readonly fontWeight: 600;
        readonly lineHeight: 1.5;
        readonly letterSpacing: "0";
    };
    /** H6 - Smallest heading */
    readonly h6: {
        readonly fontFamily: "var(--font-heading, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "1.125rem";
        readonly fontWeight: 600;
        readonly lineHeight: 1.5;
        readonly letterSpacing: "0";
    };
    /** Body - Default paragraph text */
    readonly body: {
        readonly fontFamily: "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "1rem";
        readonly fontWeight: 400;
        readonly lineHeight: 1.5;
        readonly letterSpacing: "0";
    };
    /** Body Large - Lead paragraphs */
    readonly bodyLarge: {
        readonly fontFamily: "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "1.125rem";
        readonly fontWeight: 400;
        readonly lineHeight: 1.625;
        readonly letterSpacing: "0";
    };
    /** Body Small - Secondary text */
    readonly bodySmall: {
        readonly fontFamily: "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "0.875rem";
        readonly fontWeight: 400;
        readonly lineHeight: 1.5;
        readonly letterSpacing: "0";
    };
    /** Caption - Image captions, timestamps */
    readonly caption: {
        readonly fontFamily: "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "0.75rem";
        readonly fontWeight: 400;
        readonly lineHeight: 1.5;
        readonly letterSpacing: "0.025em";
    };
    /** Label - Form labels, UI labels */
    readonly label: {
        readonly fontFamily: "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "0.875rem";
        readonly fontWeight: 500;
        readonly lineHeight: 1.25;
        readonly letterSpacing: "0";
    };
    /** Button - Button text */
    readonly button: {
        readonly fontFamily: "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "0.875rem";
        readonly fontWeight: 500;
        readonly lineHeight: 1.25;
        readonly letterSpacing: "0.025em";
    };
    /** Code - Inline code */
    readonly code: {
        readonly fontFamily: "var(--font-mono, var(--font-geist-mono, \"Geist Mono\", ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, monospace))";
        readonly fontSize: "0.875rem";
        readonly fontWeight: 400;
        readonly lineHeight: 1.5;
        readonly letterSpacing: "0";
    };
    /** Code Block - Code blocks */
    readonly codeBlock: {
        readonly fontFamily: "var(--font-mono, var(--font-geist-mono, \"Geist Mono\", ui-monospace, SFMono-Regular, \"SF Mono\", Menlo, monospace))";
        readonly fontSize: "0.875rem";
        readonly fontWeight: 400;
        readonly lineHeight: 1.625;
        readonly letterSpacing: "0";
    };
    /** Overline - Small caps labels */
    readonly overline: {
        readonly fontFamily: "var(--font-sans, var(--font-geist-sans, \"Geist\", \"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Roboto, Helvetica, Arial, sans-serif))";
        readonly fontSize: "0.75rem";
        readonly fontWeight: 600;
        readonly lineHeight: 1.5;
        readonly letterSpacing: "0.1em";
        readonly textTransform: "uppercase";
    };
};
type TypeStyle = keyof typeof typeStyles;
/**
 * Fluid typography clamp values
 *
 * Format: clamp(min, preferred, max)
 * Uses viewport width for smooth scaling.
 */
declare const fluidFontSizes: {
    /** Display: 36px to 72px */
    readonly display: "clamp(2.25rem, 5vw + 1rem, 4.5rem)";
    /** H1: 30px to 48px */
    readonly h1: "clamp(1.875rem, 4vw + 0.5rem, 3rem)";
    /** H2: 24px to 36px */
    readonly h2: "clamp(1.5rem, 3vw + 0.5rem, 2.25rem)";
    /** H3: 20px to 30px */
    readonly h3: "clamp(1.25rem, 2vw + 0.5rem, 1.875rem)";
    /** Body: 14px to 18px */
    readonly body: "clamp(0.875rem, 1vw + 0.5rem, 1.125rem)";
};
type FontFamily = keyof typeof fontFamilies;
type FontSize = keyof typeof fontSizes;
type LineHeight = keyof typeof lineHeights;
type FontWeight = keyof typeof fontWeights;
type LetterSpacing = keyof typeof letterSpacing;

export { FONT_FAMILY_CJK, FONT_FAMILY_HEADING, FONT_FAMILY_MONO, FONT_FAMILY_PRIMARY, type FontConfig, type FontFamily, type FontSize, type FontWeight, type LetterSpacing, type LineHeight, type TypeStyle, allFonts, areFontsLoaded, cjkFonts, defaultFonts, fluidFontSizes, fontFamilies, fontFeatureSettings, fontLicenseNotice, fontSizes, fontSizesPx, fontSmoothing, fontWeights, fonts, getFontLicenses, getFontPreloadLinks, getGoogleFontsLink, getGoogleFontsUrl, letterSpacing, lineHeights, typeStyles, waitForFonts };
