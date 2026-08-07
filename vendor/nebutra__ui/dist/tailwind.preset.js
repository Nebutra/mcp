import { colors } from '@nebutra/brand';

// src/tokens/primitive.ts
var primitiveColors = {
  // Nebutra Blue (云毓蓝) — technology & trust — VI: #0033FE
  blue50: colors.primary[50],
  blue100: colors.primary[100],
  blue200: colors.primary[200],
  blue300: colors.primary[300],
  blue400: colors.primary[400],
  blue500: colors.primary[500],
  // brand primary
  blue600: colors.primary[600],
  blue700: colors.primary[700],
  blue800: colors.primary[800],
  blue900: colors.primary[900],
  blue950: colors.primary[950],
  // Nebutra Cyan (云毓青) — data flow & intelligence — VI: #0BF1C3
  cyan50: colors.accent[50],
  cyan100: colors.accent[100],
  cyan200: colors.accent[200],
  cyan300: colors.accent[300],
  cyan400: colors.accent[400],
  cyan500: colors.accent[500],
  // brand secondary
  cyan600: colors.accent[600],
  cyan700: colors.accent[700],
  cyan800: colors.accent[800],
  cyan900: colors.accent[900],
  cyan950: colors.accent[950],
  // Neutral (blue-undertone gray scale)
  neutral50: colors.neutral[50],
  neutral100: colors.neutral[100],
  neutral200: colors.neutral[200],
  neutral300: colors.neutral[300],
  neutral400: colors.neutral[400],
  neutral500: colors.neutral[500],
  neutral600: colors.neutral[600],
  neutral700: colors.neutral[700],
  neutral800: colors.neutral[800],
  neutral900: colors.neutral[900],
  neutral950: colors.neutral[950],
  // deepest — used as dark background
  // Semantic raw colors — VI §Color Specifications
  // NOTE: info = brand blue (#0033FE), not sky/teal
  red500: "#ef4444",
  green500: "#22c55e",
  amber500: "#f59e0b",
  white: colors.white,
  black: colors.black
};
var primitiveGradients = {
  /** Hero sections, primary CTA buttons, logo fills — VI signature gradient */
  primary: colors.gradient.primary,
  /** Hover states, secondary gradient elements */
  reverse: colors.gradient.primaryReverse,
  /** Vertical layout dividers, page section separators */
  vertical: colors.gradient.primaryVertical,
  /** Background halos, focus glow effects, radial emphasis */
  radial: colors.gradient.primaryRadial,
  /** Dark mode card surfaces — deep brand-blue tinted */
  darkCard: "linear-gradient(135deg, #020617 0%, #0a1628 100%)"
};
var primitiveRadius = {
  sm: 4,
  md: 6,
  // Geist default — slightly more rounded than 4px
  lg: 8,
  xl: 12,
  "2xl": 16};
var primitiveFontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36
};
var primitiveFontWeight = {
  light: 300,
  normal: 400,
  medium: 500,
  semibold: 600,
  bold: 700
};
var primitiveFontFamily = {
  /** Default body/UI stack — Geist with CJK auto-fallbacks */
  sans: '"Geist", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, system-ui, sans-serif',
  /** Chinese body/UI stack */
  cnSans: '"Noto Sans SC", "PingFang SC", "Microsoft YaHei", "vivo Sans", sans-serif',
  /** Display / hero headlines */
  display: '"Geist", "Noto Sans SC", sans-serif',
  /** Code / monospace — Geist Mono pairs with Geist for full family coverage */
  mono: '"Geist Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace'
};
var primitiveShadow = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  /** Brand glow — blue tone for focus/highlight states */
  brandGlow: "0 0 0 3px rgb(0 51 254 / 0.15)"
};

// src/tailwind.preset.ts
var nebutraColors = {
  // 云毓蓝 (Nebutra Blue) — primary brand color — VI: #0033FE
  blue: {
    50: primitiveColors.blue50,
    100: primitiveColors.blue100,
    200: primitiveColors.blue200,
    300: primitiveColors.blue300,
    400: primitiveColors.blue400,
    500: primitiveColors.blue500,
    600: primitiveColors.blue600,
    700: primitiveColors.blue700,
    800: primitiveColors.blue800,
    900: primitiveColors.blue900,
    950: primitiveColors.blue950,
    DEFAULT: primitiveColors.blue500,
    foreground: primitiveColors.white
  },
  // 云毓青 (Nebutra Cyan) — secondary brand color — VI: #0BF1C3
  cyan: {
    50: primitiveColors.cyan50,
    100: primitiveColors.cyan100,
    200: primitiveColors.cyan200,
    300: primitiveColors.cyan300,
    400: primitiveColors.cyan400,
    500: primitiveColors.cyan500,
    600: primitiveColors.cyan600,
    700: primitiveColors.cyan700,
    800: primitiveColors.cyan800,
    900: primitiveColors.cyan900,
    950: primitiveColors.cyan950,
    DEFAULT: primitiveColors.cyan500,
    foreground: primitiveColors.neutral900
  },
  // Neutral (blue-undertone gray scale)
  neutral: {
    50: primitiveColors.neutral50,
    100: primitiveColors.neutral100,
    200: primitiveColors.neutral200,
    300: primitiveColors.neutral300,
    400: primitiveColors.neutral400,
    500: primitiveColors.neutral500,
    600: primitiveColors.neutral600,
    700: primitiveColors.neutral700,
    800: primitiveColors.neutral800,
    900: primitiveColors.neutral900,
    950: primitiveColors.neutral950
  },
  // Semantic colors — VI §Color Specifications
  success: primitiveColors.green500,
  // #22c55e — VI specifies this exact value
  warning: primitiveColors.amber500,
  // #f59e0b
  error: primitiveColors.red500,
  // #ef4444
  info: primitiveColors.blue500
  // #0033FE — VI: Info = Brand Blue
};
var nebutraGradients = {
  brand: primitiveGradients.primary,
  brandHover: primitiveGradients.reverse,
  section: primitiveGradients.vertical,
  glow: primitiveGradients.radial,
  darkCard: primitiveGradients.darkCard
};
var nebutraSpacing = {
  xs: "0.25rem",
  // 4px
  sm: "0.5rem",
  // 8px
  md: "1rem",
  // 16px
  lg: "1.5rem",
  // 24px
  xl: "2rem",
  // 32px
  "2xl": "3rem",
  // 48px
  "3xl": "4rem"
  // 64px
};
var nebutraBorderRadius = {
  none: "0",
  sm: `${primitiveRadius.sm / 16}rem`,
  // 4px → 0.25rem
  md: `${primitiveRadius.md / 16}rem`,
  // 6px → 0.375rem
  lg: `${primitiveRadius.lg / 16}rem`,
  // 8px → 0.5rem
  xl: `${primitiveRadius.xl / 16}rem`,
  // 12px → 0.75rem
  "2xl": `${primitiveRadius["2xl"] / 16}rem`,
  // 16px → 1rem
  full: "9999px"
};
var nebutraShadows = {
  none: primitiveShadow.none,
  sm: primitiveShadow.sm,
  md: primitiveShadow.md,
  lg: primitiveShadow.lg,
  xl: primitiveShadow.xl,
  brandGlow: primitiveShadow.brandGlow
};
function fontVar(variable, registryVariable, fallback) {
  return `var(${variable}, var(${registryVariable}, ${fallback}))`;
}
var nebutraTypography = {
  fontFamily: {
    sans: fontVar("--font-sans", "--font-geist-sans", primitiveFontFamily.sans),
    cn: primitiveFontFamily.cnSans,
    display: fontVar("--font-display", "--font-geist-sans", primitiveFontFamily.display),
    mono: fontVar("--font-mono", "--font-geist-mono", primitiveFontFamily.mono)
  },
  fontSize: {
    xs: `${primitiveFontSize.xs / 16}rem`,
    // 12px
    sm: `${primitiveFontSize.sm / 16}rem`,
    // 14px
    base: `${primitiveFontSize.base / 16}rem`,
    // 16px
    lg: `${primitiveFontSize.lg / 16}rem`,
    // 18px
    xl: `${primitiveFontSize.xl / 16}rem`,
    // 20px
    "2xl": `${primitiveFontSize["2xl"] / 16}rem`,
    // 24px
    "3xl": `${primitiveFontSize["3xl"] / 16}rem`,
    // 30px
    "4xl": `${primitiveFontSize["4xl"] / 16}rem`
    // 36px
  },
  fontWeight: {
    light: String(primitiveFontWeight.light),
    normal: String(primitiveFontWeight.normal),
    medium: String(primitiveFontWeight.medium),
    semibold: String(primitiveFontWeight.semibold),
    bold: String(primitiveFontWeight.bold)
  }
};
var nebutraAnimations = {
  "accordion-down": "accordion-down 0.2s ease-out",
  "accordion-up": "accordion-up 0.2s ease-out",
  "fade-in": "fade-in 0.15s ease-out",
  "fade-out": "fade-out 0.15s ease-out",
  "slide-in-from-top": "slide-in-from-top 0.3s ease-out",
  "slide-in-from-bottom": "slide-in-from-bottom 0.3s ease-out",
  "slide-in-from-left": "slide-in-from-left 0.3s ease-out",
  "slide-in-from-right": "slide-in-from-right 0.3s ease-out",
  spin: "spin 1s linear infinite",
  spinner: "spinner 0.6s linear infinite",
  // Button loading state
  pulse: "pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
  bounce: "bounce 1s infinite"
};
var nebutraPreset = {
  colors: nebutraColors,
  spacing: nebutraSpacing,
  borderRadius: nebutraBorderRadius,
  boxShadow: nebutraShadows,
  fontFamily: nebutraTypography.fontFamily,
  fontSize: nebutraTypography.fontSize,
  fontWeight: nebutraTypography.fontWeight,
  animation: nebutraAnimations
};
var tailwind_preset_default = nebutraPreset;

export { tailwind_preset_default as default, nebutraAnimations, nebutraBorderRadius, nebutraColors, nebutraGradients, nebutraPreset, nebutraShadows, nebutraSpacing, nebutraTypography };
//# sourceMappingURL=tailwind.preset.js.map
//# sourceMappingURL=tailwind.preset.js.map