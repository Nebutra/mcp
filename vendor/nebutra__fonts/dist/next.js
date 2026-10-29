import {
  CjkFontFace,
  brandFontClassName,
  cjkFontClassName,
  dmSans
} from "./chunk-A4PPXTH5.js";
import "./chunk-FUPJK5RT.js";

// src/next.ts
import localFont from "next/font/local";
var inter = localFont({
  src: [
    {
      path: "../generated/registry/inter-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Inter'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-inter"
});
var interTight = localFont({
  src: [
    {
      path: "../generated/registry/inter-tight-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Inter Tight'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-inter-tight"
});
var spaceGrotesk = localFont({
  src: [
    {
      path: "../generated/registry/space-grotesk-latin-wght-normal.woff2",
      weight: "300 700",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Space Grotesk'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-space-grotesk"
});
var playfairDisplay = localFont({
  src: [
    {
      path: "../generated/registry/playfair-display-latin-wght-normal.woff2",
      weight: "400 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Playfair Display'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  adjustFontFallback: "Times New Roman",
  variable: "--font-playfair-display"
});
var fraunces = localFont({
  src: [
    {
      path: "../generated/registry/fraunces-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Fraunces'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  adjustFontFallback: "Times New Roman",
  variable: "--font-reg-fraunces"
});
var jetbrainsMono = localFont({
  src: [
    {
      path: "../generated/registry/jetbrains-mono-latin-wght-normal.woff2",
      weight: "100 800",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'JetBrains Mono'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-jetbrains-mono"
});
var manrope = localFont({
  src: [
    {
      path: "../generated/registry/manrope-latin-wght-normal.woff2",
      weight: "200 800",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Manrope'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-manrope"
});
var sora = localFont({
  src: [
    {
      path: "../generated/registry/sora-latin-wght-normal.woff2",
      weight: "100 800",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Sora'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-sora"
});
var workSans = localFont({
  src: [
    {
      path: "../generated/registry/work-sans-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Work Sans'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-work-sans"
});
var plusJakartaSans = localFont({
  src: [
    {
      path: "../generated/registry/plus-jakarta-sans-latin-wght-normal.woff2",
      weight: "200 800",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Plus Jakarta Sans'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-plus-jakarta-sans"
});
var outfit = localFont({
  src: [
    {
      path: "../generated/registry/outfit-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Outfit'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-outfit"
});
var figtree = localFont({
  src: [
    {
      path: "../generated/registry/figtree-latin-wght-normal.woff2",
      weight: "300 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Figtree'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-figtree"
});
var montserrat = localFont({
  src: [
    {
      path: "../generated/registry/montserrat-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Montserrat'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-montserrat"
});
var lexend = localFont({
  src: [
    {
      path: "../generated/registry/lexend-latin-wght-normal.woff2",
      weight: "100 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Lexend'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-lexend"
});
var firaCode = localFont({
  src: [
    {
      path: "../generated/registry/fira-code-latin-wght-normal.woff2",
      weight: "300 700",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Fira Code'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-fira-code"
});
var robotoMono = localFont({
  src: [
    {
      path: "../generated/registry/roboto-mono-latin-wght-normal.woff2",
      weight: "100 700",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Roboto Mono'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-roboto-mono"
});
var sourceSerif4 = localFont({
  src: [
    {
      path: "../generated/registry/source-serif-4-latin-wght-normal.woff2",
      weight: "200 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Source Serif 4'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  adjustFontFallback: "Times New Roman",
  variable: "--font-reg-source-serif-4"
});
var sourceCodePro = localFont({
  src: [
    {
      path: "../generated/registry/source-code-pro-latin-wght-normal.woff2",
      weight: "200 900",
      style: "normal"
    }
  ],
  display: "swap",
  preload: false,
  declarations: [
    { prop: "font-family", value: "'Source Code Pro'" },
    {
      prop: "unicode-range",
      value: "U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+0304, U+0308, U+0329, U+2000-206F, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF, U+FFFD"
    }
  ],
  variable: "--font-reg-source-code-pro"
});
var FONT_REGISTRY_FACES = [
  inter,
  interTight,
  spaceGrotesk,
  playfairDisplay,
  sourceSerif4,
  fraunces,
  jetbrainsMono,
  manrope,
  sora,
  workSans,
  plusJakartaSans,
  outfit,
  figtree,
  montserrat,
  lexend,
  firaCode,
  robotoMono,
  sourceCodePro
];
var fontRegistryClassName = FONT_REGISTRY_FACES.map((face) => face.variable).join(" ");
export {
  CjkFontFace,
  FONT_REGISTRY_FACES,
  brandFontClassName,
  cjkFontClassName,
  dmSans,
  fontRegistryClassName
};
//# sourceMappingURL=next.js.map