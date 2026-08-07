// src/typography/fonts.ts
var fonts = {
  geistSans: {
    family: "Geist",
    weights: [300, 400, 500, 600, 700],
    italic: false,
    display: "swap",
    variable: true,
    license: "OFL",
    licenseUrl: "https://github.com/vercel/geist-font/blob/main/LICENSE.txt"
  },
  geistMono: {
    family: "Geist Mono",
    weights: [400, 500, 600, 700],
    italic: false,
    display: "swap",
    variable: true,
    license: "OFL",
    licenseUrl: "https://github.com/vercel/geist-font/blob/main/LICENSE.txt"
  },
  inter: {
    family: "Inter",
    weights: [300, 400, 500, 600, 700],
    italic: false,
    display: "swap",
    variable: true,
    googleFontsParam: "Inter:wght@300;400;500;600;700",
    license: "OFL",
    licenseUrl: "https://github.com/rsms/inter/blob/master/LICENSE.txt"
  },
  publicSans: {
    family: "Public Sans",
    weights: [300, 400, 500, 600, 700],
    italic: true,
    display: "swap",
    variable: true,
    googleFontsParam: "Public+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400;1,500",
    license: "OFL",
    licenseUrl: "https://github.com/uswds/public-sans/blob/develop/LICENSE.md"
  },
  jetbrainsMono: {
    family: "JetBrains Mono",
    weights: [400, 500, 700],
    italic: false,
    display: "swap",
    variable: true,
    googleFontsParam: "JetBrains+Mono:wght@400;500;700",
    license: "OFL",
    licenseUrl: "https://github.com/JetBrains/JetBrainsMono/blob/master/OFL.txt"
  },
  sourceHanSans: {
    family: "Noto Sans SC",
    weights: [400, 500, 700],
    italic: false,
    display: "swap",
    variable: false,
    googleFontsParam: "Noto+Sans+SC:wght@400;500;700",
    license: "OFL",
    licenseUrl: "https://github.com/adobe-fonts/source-han-sans/blob/master/LICENSE.txt"
  }
};
function getGoogleFontsUrl(fontKeys) {
  const families = fontKeys.map((key) => fonts[key]?.googleFontsParam).filter(Boolean).join("&family=");
  if (!families) return "";
  return `https://fonts.googleapis.com/css2?family=${families}&display=swap`;
}
var defaultFonts = ["geistSans", "geistMono"];
var cjkFonts = ["sourceHanSans"];
var allFonts = [...defaultFonts, ...cjkFonts];
function getFontPreloadLinks(fontKeys) {
  return fontKeys.map((key) => {
    const font = fonts[key];
    if (!font) return "";
    const url = getGoogleFontsUrl([key]);
    return `<link rel="preload" href="${url}" as="style" crossorigin>`;
  }).filter(Boolean);
}
function getGoogleFontsLink(fontKeys) {
  const url = getGoogleFontsUrl(fontKeys);
  if (!url) return "";
  return `<link rel="stylesheet" href="${url}">`;
}
async function areFontsLoaded(fontFamilies2) {
  if (typeof document === "undefined") return false;
  try {
    await Promise.all(fontFamilies2.map((family) => document.fonts.load(`16px "${family}"`)));
    return true;
  } catch {
    return false;
  }
}
async function waitForFonts(fontFamilies2, timeout = 3e3) {
  if (typeof document === "undefined") return false;
  return new Promise((resolve) => {
    const timer = setTimeout(() => resolve(false), timeout);
    areFontsLoaded(fontFamilies2).then((loaded) => {
      clearTimeout(timer);
      resolve(loaded);
    });
  });
}
var fontSmoothing = {
  WebkitFontSmoothing: "antialiased",
  MozOsxFontSmoothing: "grayscale",
  textRendering: "optimizeLegibility"
};
var fontFeatureSettings = {
  /** Enable common ligatures and contextual alternates */
  normal: '"calt" 1, "liga" 1',
  /** Enable tabular figures for aligned numbers */
  tabular: '"tnum" 1, "calt" 1',
  /** Enable case-sensitive forms */
  case: '"case" 1',
  /** Enable stylistic set 01 (alternate digits) */
  ss01: '"ss01" 1',
  /** Enable stylistic set 02 (alternate a) */
  ss02: '"ss02" 1'
};
function getFontLicenses() {
  return Object.values(fonts).map((font) => ({
    family: font.family,
    license: font.license,
    url: font.licenseUrl
  }));
}
var fontLicenseNotice = `
Fonts used in this project are licensed under open-source licenses:

- Inter: SIL Open Font License 1.1
- Public Sans: SIL Open Font License 1.1
- Geist: SIL Open Font License 1.1
- Geist Mono: SIL Open Font License 1.1
- JetBrains Mono: SIL Open Font License 1.1
- Noto Sans SC (Source Han Sans): SIL Open Font License 1.1

All fonts are free for commercial use. See individual license files for details.
`.trim();

// src/typography/tokens.ts
var FONT_FAMILY_PRIMARY = 'var(--font-sans, var(--font-geist-sans, "Geist", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif))';
var FONT_FAMILY_HEADING = 'var(--font-heading, var(--font-geist-sans, "Geist", "Noto Sans SC", "PingFang SC", "Microsoft YaHei", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif))';
var FONT_FAMILY_MONO = 'var(--font-mono, var(--font-geist-mono, "Geist Mono", ui-monospace, SFMono-Regular, "SF Mono", Menlo, monospace))';
var FONT_FAMILY_CJK = '"vivo Sans", "Source Han Sans SC", "Source Han Sans", "Noto Sans CJK SC", "Noto Sans SC", "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", sans-serif';
var fontFamilies = {
  /** Primary UI and body text */
  primary: FONT_FAMILY_PRIMARY,
  /** Headings and titles */
  heading: FONT_FAMILY_HEADING,
  /** Code and monospace */
  mono: FONT_FAMILY_MONO,
  /** CJK-specific fallback */
  cjk: FONT_FAMILY_CJK,
  /** Primary with CJK fallback for multilingual content */
  primaryCJK: `${FONT_FAMILY_PRIMARY}, ${FONT_FAMILY_CJK}`,
  /** System font stack (fast fallback, no web fonts) */
  system: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif'
};
var fontSizes = {
  /** 12px - Micro text, badges */
  xs: "0.75rem",
  /** 14px - Small text, captions, labels */
  sm: "0.875rem",
  /** 16px - Base body text */
  base: "1rem",
  /** 18px - Lead text, larger body */
  lg: "1.125rem",
  /** 20px - Small headings, subtitles */
  xl: "1.25rem",
  /** 24px - H4 equivalent */
  "2xl": "1.5rem",
  /** 30px - H3 equivalent */
  "3xl": "1.875rem",
  /** 36px - H2 equivalent */
  "4xl": "2.25rem",
  /** 48px - H1 equivalent */
  "5xl": "3rem",
  /** 60px - Display/Hero text */
  "6xl": "3.75rem",
  /** 72px - Large display */
  "7xl": "4.5rem",
  /** 96px - Extra large display */
  "8xl": "6rem"
};
var fontSizesPx = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
  "4xl": 36,
  "5xl": 48,
  "6xl": 60,
  "7xl": 72,
  "8xl": 96
};
var lineHeights = {
  /** 1 - Single line, icons */
  none: 1,
  /** 1.25 - Tight, for large headings */
  tight: 1.25,
  /** 1.375 - Slightly snug */
  snug: 1.375,
  /** 1.5 - Normal body text */
  normal: 1.5,
  /** 1.625 - Relaxed reading */
  relaxed: 1.625,
  /** 1.75 - Loose, for small text */
  loose: 1.75,
  /** 2 - Double spaced */
  double: 2
};
var fontWeights = {
  /** 100 - Thin (if available) */
  thin: 100,
  /** 200 - Extra light */
  extralight: 200,
  /** 300 - Light */
  light: 300,
  /** 400 - Regular/Normal */
  normal: 400,
  /** 500 - Medium */
  medium: 500,
  /** 600 - Semibold */
  semibold: 600,
  /** 700 - Bold */
  bold: 700,
  /** 800 - Extra bold */
  extrabold: 800,
  /** 900 - Black */
  black: 900
};
var letterSpacing = {
  /** -0.05em - Very tight, large display only */
  tighter: "-0.05em",
  /** -0.025em - Slightly tight, headings */
  tight: "-0.025em",
  /** 0 - Normal */
  normal: "0",
  /** 0.025em - Slightly wide */
  wide: "0.025em",
  /** 0.05em - Wide, for small caps */
  wider: "0.05em",
  /** 0.1em - Very wide, all caps */
  widest: "0.1em"
};
var typeStyles = {
  /** Hero/Display - Large marketing headlines */
  display: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes["6xl"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight
  },
  /** H1 - Page titles */
  h1: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes["5xl"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight
  },
  /** H2 - Section titles */
  h2: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes["4xl"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.tight
  },
  /** H3 - Subsection titles */
  h3: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes["3xl"],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal
  },
  /** H4 - Card titles, small sections */
  h4: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes["2xl"],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.snug,
    letterSpacing: letterSpacing.normal
  },
  /** H5 - Widget titles */
  h5: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal
  },
  /** H6 - Smallest heading */
  h6: {
    fontFamily: fontFamilies.heading,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal
  },
  /** Body - Default paragraph text */
  body: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.base,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal
  },
  /** Body Large - Lead paragraphs */
  bodyLarge: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal
  },
  /** Body Small - Secondary text */
  bodySmall: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal
  },
  /** Caption - Image captions, timestamps */
  caption: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.wide
  },
  /** Label - Form labels, UI labels */
  label: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.normal
  },
  /** Button - Button text */
  button: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.medium,
    lineHeight: lineHeights.tight,
    letterSpacing: letterSpacing.wide
  },
  /** Code - Inline code */
  code: {
    fontFamily: fontFamilies.mono,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.normal
  },
  /** Code Block - Code blocks */
  codeBlock: {
    fontFamily: fontFamilies.mono,
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.relaxed,
    letterSpacing: letterSpacing.normal
  },
  /** Overline - Small caps labels */
  overline: {
    fontFamily: fontFamilies.primary,
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.normal,
    letterSpacing: letterSpacing.widest,
    textTransform: "uppercase"
  }
};
var fluidFontSizes = {
  /** Display: 36px to 72px */
  display: "clamp(2.25rem, 5vw + 1rem, 4.5rem)",
  /** H1: 30px to 48px */
  h1: "clamp(1.875rem, 4vw + 0.5rem, 3rem)",
  /** H2: 24px to 36px */
  h2: "clamp(1.5rem, 3vw + 0.5rem, 2.25rem)",
  /** H3: 20px to 30px */
  h3: "clamp(1.25rem, 2vw + 0.5rem, 1.875rem)",
  /** Body: 14px to 18px */
  body: "clamp(0.875rem, 1vw + 0.5rem, 1.125rem)"
};

export { FONT_FAMILY_CJK, FONT_FAMILY_HEADING, FONT_FAMILY_MONO, FONT_FAMILY_PRIMARY, allFonts, areFontsLoaded, cjkFonts, defaultFonts, fluidFontSizes, fontFamilies, fontFeatureSettings, fontLicenseNotice, fontSizes, fontSizesPx, fontSmoothing, fontWeights, fonts, getFontLicenses, getFontPreloadLinks, getGoogleFontsLink, getGoogleFontsUrl, letterSpacing, lineHeights, typeStyles, waitForFonts };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map