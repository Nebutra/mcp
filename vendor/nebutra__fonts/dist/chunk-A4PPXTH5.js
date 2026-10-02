import {
  MISANS_FAMILY,
  MISANS_FILES,
  MISANS_UNICODE_RANGE
} from "./chunk-FUPJK5RT.js";

// src/next-cjk.ts
import localFont from "next/font/local";

// src/cjk-font-face.tsx
import { publicAssetUrl } from "@nebutra/brand/metadata-helpers";
import { jsx } from "react/jsx-runtime";
function misansFontFaceCss(origin) {
  return MISANS_FILES.map(
    (face) => `@font-face{font-family:"${MISANS_FAMILY}";font-style:normal;font-weight:${face.weight};font-display:swap;src:url("${publicAssetUrl(face.key, origin)}") format("woff2");unicode-range:${MISANS_UNICODE_RANGE}}`
  ).join("\n");
}
function CjkFontFace({ origin, nonce }) {
  return /* @__PURE__ */ jsx("style", { href: "nebutra-misans", precedence: "default", nonce: nonce || void 0, children: misansFontFaceCss(origin) });
}

// src/next-cjk.ts
var dmSans = localFont({
  src: [{ path: "../generated/dm-sans.woff2", weight: "100 1000", style: "normal" }],
  display: "swap",
  variable: "--font-dm-sans"
});
var brandFontClassName = dmSans.variable;
var cjkFontClassName = brandFontClassName;

export {
  misansFontFaceCss,
  CjkFontFace,
  dmSans,
  brandFontClassName,
  cjkFontClassName
};
//# sourceMappingURL=chunk-A4PPXTH5.js.map