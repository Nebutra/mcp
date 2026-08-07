/**
 * @nebutra/ui — Tailwind CSS 4 Preset
 *
 * Consumes primitive design tokens from tokens/primitive.ts, which itself
 * sources values from @nebutra/brand → @nebutra/design-tokens (SSOT).
 *
 * Usage (Tailwind CSS 4, CSS import — the runtime token source):
 *   @import "@nebutra/tokens/styles.css"
 *
 * Usage (legacy tailwind.config.js):
 *   import { nebutraPreset } from "@nebutra/ui/tailwind.preset"
 *   export default { presets: [nebutraPreset] }
 */
declare const nebutraColors: {
    readonly blue: {
        readonly 50: "#f0f4ff";
        readonly 100: "#dbe4ff";
        readonly 200: "#bac8ff";
        readonly 300: "#91a7ff";
        readonly 400: "#5c7cfa";
        readonly 500: "#0033FE";
        readonly 600: "#002ad4";
        readonly 700: "#0021ab";
        readonly 800: "#001882";
        readonly 900: "#000f59";
        readonly 950: "#000830";
        readonly DEFAULT: "#0033FE";
        readonly foreground: "#FFFFFF";
    };
    readonly cyan: {
        readonly 50: "#e6fff8";
        readonly 100: "#b3ffec";
        readonly 200: "#80ffe0";
        readonly 300: "#4dfcd4";
        readonly 400: "#1af7c8";
        readonly 500: "#0BF1C3";
        readonly 600: "#09c9a3";
        readonly 700: "#07a183";
        readonly 800: "#057963";
        readonly 900: "#035143";
        readonly 950: "#012923";
        readonly DEFAULT: "#0BF1C3";
        readonly foreground: "#0f172a";
    };
    readonly neutral: {
        readonly 50: "#f8fafc";
        readonly 100: "#f1f5f9";
        readonly 200: "#e2e8f0";
        readonly 300: "#cbd5e1";
        readonly 400: "#94a3b8";
        readonly 500: "#64748b";
        readonly 600: "#475569";
        readonly 700: "#334155";
        readonly 800: "#1e293b";
        readonly 900: "#0f172a";
        readonly 950: "#020617";
    };
    readonly success: "#22c55e";
    readonly warning: "#f59e0b";
    readonly error: "#ef4444";
    readonly info: "#0033FE";
};
declare const nebutraGradients: {
    readonly brand: "linear-gradient(135deg, #0033FE 0%, #00A2E9 50%, #0BF1C3 100%)";
    readonly brandHover: "linear-gradient(135deg, #0BF1C3 0%, #00A2E9 50%, #0033FE 100%)";
    readonly section: "linear-gradient(180deg, #0033FE 0%, #00A2E9 50%, #0BF1C3 100%)";
    readonly glow: "radial-gradient(circle, #0BF1C3 0%, #00A2E9 50%, #0033FE 100%)";
    readonly darkCard: "linear-gradient(135deg, #020617 0%, #0a1628 100%)";
};
declare const nebutraSpacing: {
    readonly xs: "0.25rem";
    readonly sm: "0.5rem";
    readonly md: "1rem";
    readonly lg: "1.5rem";
    readonly xl: "2rem";
    readonly "2xl": "3rem";
    readonly "3xl": "4rem";
};
declare const nebutraBorderRadius: {
    readonly none: "0";
    readonly sm: `${number}rem`;
    readonly md: `${number}rem`;
    readonly lg: `${number}rem`;
    readonly xl: `${number}rem`;
    readonly "2xl": `${number}rem`;
    readonly full: "9999px";
};
declare const nebutraShadows: {
    readonly none: "none";
    readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
    readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
    readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
    readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
    readonly brandGlow: "0 0 0 3px rgb(0 51 254 / 0.15)";
};
declare const nebutraTypography: {
    readonly fontFamily: {
        readonly sans: string;
        readonly cn: "\"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", \"vivo Sans\", sans-serif";
        readonly display: string;
        readonly mono: string;
    };
    readonly fontSize: {
        readonly xs: `${number}rem`;
        readonly sm: `${number}rem`;
        readonly base: `${number}rem`;
        readonly lg: `${number}rem`;
        readonly xl: `${number}rem`;
        readonly "2xl": `${number}rem`;
        readonly "3xl": `${number}rem`;
        readonly "4xl": `${number}rem`;
    };
    readonly fontWeight: {
        readonly light: string;
        readonly normal: string;
        readonly medium: string;
        readonly semibold: string;
        readonly bold: string;
    };
};
declare const nebutraAnimations: {
    readonly "accordion-down": "accordion-down 0.2s ease-out";
    readonly "accordion-up": "accordion-up 0.2s ease-out";
    readonly "fade-in": "fade-in 0.15s ease-out";
    readonly "fade-out": "fade-out 0.15s ease-out";
    readonly "slide-in-from-top": "slide-in-from-top 0.3s ease-out";
    readonly "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out";
    readonly "slide-in-from-left": "slide-in-from-left 0.3s ease-out";
    readonly "slide-in-from-right": "slide-in-from-right 0.3s ease-out";
    readonly spin: "spin 1s linear infinite";
    readonly spinner: "spinner 0.6s linear infinite";
    readonly pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite";
    readonly bounce: "bounce 1s infinite";
};
declare const nebutraPreset: {
    readonly colors: {
        readonly blue: {
            readonly 50: "#f0f4ff";
            readonly 100: "#dbe4ff";
            readonly 200: "#bac8ff";
            readonly 300: "#91a7ff";
            readonly 400: "#5c7cfa";
            readonly 500: "#0033FE";
            readonly 600: "#002ad4";
            readonly 700: "#0021ab";
            readonly 800: "#001882";
            readonly 900: "#000f59";
            readonly 950: "#000830";
            readonly DEFAULT: "#0033FE";
            readonly foreground: "#FFFFFF";
        };
        readonly cyan: {
            readonly 50: "#e6fff8";
            readonly 100: "#b3ffec";
            readonly 200: "#80ffe0";
            readonly 300: "#4dfcd4";
            readonly 400: "#1af7c8";
            readonly 500: "#0BF1C3";
            readonly 600: "#09c9a3";
            readonly 700: "#07a183";
            readonly 800: "#057963";
            readonly 900: "#035143";
            readonly 950: "#012923";
            readonly DEFAULT: "#0BF1C3";
            readonly foreground: "#0f172a";
        };
        readonly neutral: {
            readonly 50: "#f8fafc";
            readonly 100: "#f1f5f9";
            readonly 200: "#e2e8f0";
            readonly 300: "#cbd5e1";
            readonly 400: "#94a3b8";
            readonly 500: "#64748b";
            readonly 600: "#475569";
            readonly 700: "#334155";
            readonly 800: "#1e293b";
            readonly 900: "#0f172a";
            readonly 950: "#020617";
        };
        readonly success: "#22c55e";
        readonly warning: "#f59e0b";
        readonly error: "#ef4444";
        readonly info: "#0033FE";
    };
    readonly spacing: {
        readonly xs: "0.25rem";
        readonly sm: "0.5rem";
        readonly md: "1rem";
        readonly lg: "1.5rem";
        readonly xl: "2rem";
        readonly "2xl": "3rem";
        readonly "3xl": "4rem";
    };
    readonly borderRadius: {
        readonly none: "0";
        readonly sm: `${number}rem`;
        readonly md: `${number}rem`;
        readonly lg: `${number}rem`;
        readonly xl: `${number}rem`;
        readonly "2xl": `${number}rem`;
        readonly full: "9999px";
    };
    readonly boxShadow: {
        readonly none: "none";
        readonly sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)";
        readonly md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)";
        readonly lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)";
        readonly xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)";
        readonly brandGlow: "0 0 0 3px rgb(0 51 254 / 0.15)";
    };
    readonly fontFamily: {
        readonly sans: string;
        readonly cn: "\"Noto Sans SC\", \"PingFang SC\", \"Microsoft YaHei\", \"vivo Sans\", sans-serif";
        readonly display: string;
        readonly mono: string;
    };
    readonly fontSize: {
        readonly xs: `${number}rem`;
        readonly sm: `${number}rem`;
        readonly base: `${number}rem`;
        readonly lg: `${number}rem`;
        readonly xl: `${number}rem`;
        readonly "2xl": `${number}rem`;
        readonly "3xl": `${number}rem`;
        readonly "4xl": `${number}rem`;
    };
    readonly fontWeight: {
        readonly light: string;
        readonly normal: string;
        readonly medium: string;
        readonly semibold: string;
        readonly bold: string;
    };
    readonly animation: {
        readonly "accordion-down": "accordion-down 0.2s ease-out";
        readonly "accordion-up": "accordion-up 0.2s ease-out";
        readonly "fade-in": "fade-in 0.15s ease-out";
        readonly "fade-out": "fade-out 0.15s ease-out";
        readonly "slide-in-from-top": "slide-in-from-top 0.3s ease-out";
        readonly "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out";
        readonly "slide-in-from-left": "slide-in-from-left 0.3s ease-out";
        readonly "slide-in-from-right": "slide-in-from-right 0.3s ease-out";
        readonly spin: "spin 1s linear infinite";
        readonly spinner: "spinner 0.6s linear infinite";
        readonly pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite";
        readonly bounce: "bounce 1s infinite";
    };
};
type NebutraPreset = typeof nebutraPreset;

export { type NebutraPreset, nebutraPreset as default, nebutraAnimations, nebutraBorderRadius, nebutraColors, nebutraGradients, nebutraPreset, nebutraShadows, nebutraSpacing, nebutraTypography };
