// src/og/og-template.tsx
import { jsx, jsxs } from "react/jsx-runtime";
var OG_PALETTE_DARK = {
  bg: "#020617",
  // colors.neutral["950"]
  grid: "rgba(255,255,255,0.04)",
  glowA: "rgba(0,51,254,0.28)",
  // colors.primary["500"] at 28% opacity
  glowB: "rgba(11,241,195,0.22)",
  // colors.accent["500"] at 22% opacity
  title: "#ffffff",
  subtitle: "rgba(255,255,255,0.72)",
  accent: "#0bf1c3"
  // colors.accent["500"]
};
var OG_PALETTE_LIGHT = {
  bg: "#ffffff",
  grid: "rgba(0,0,0,0.05)",
  glowA: "rgba(0,51,254,0.22)",
  // colors.primary["500"] at 22% opacity
  glowB: "rgba(11,241,195,0.20)",
  // colors.accent["500"] at 20% opacity
  title: "#0a0a0a",
  subtitle: "rgba(10,10,10,0.66)",
  accent: "#0033fe"
  // colors.primary["500"]
};
function OgTemplate({ title, subtitle, brandName, palette }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      style: {
        height: "100%",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        justifyContent: "flex-end",
        padding: "80px",
        backgroundColor: palette.bg,
        backgroundImage: `radial-gradient(ellipse 80% 50% at 50% 42%, ${palette.glowA} 0%, transparent 72%), radial-gradient(ellipse 60% 40% at 72% 70%, ${palette.glowB} 0%, transparent 75%)`
      },
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              position: "absolute",
              inset: 0,
              backgroundImage: `linear-gradient(${palette.grid} 1px, transparent 1px), linear-gradient(90deg, ${palette.grid} 1px, transparent 1px)`,
              backgroundSize: "48px 48px",
              display: "flex"
            }
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              alignItems: "center",
              color: palette.accent,
              fontSize: "28px",
              fontWeight: 600,
              letterSpacing: "0.04em",
              textTransform: "uppercase"
            },
            children: brandName
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              color: palette.title,
              fontSize: "78px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.02em",
              marginTop: "24px",
              maxWidth: "1040px"
            },
            children: title
          }
        ),
        subtitle ? /* @__PURE__ */ jsx(
          "div",
          {
            style: {
              display: "flex",
              color: palette.subtitle,
              fontSize: "32px",
              fontWeight: 400,
              lineHeight: 1.35,
              marginTop: "20px",
              maxWidth: "1040px"
            },
            children: subtitle
          }
        ) : null
      ]
    }
  );
}
export {
  OG_PALETTE_DARK,
  OG_PALETTE_LIGHT,
  OgTemplate
};
//# sourceMappingURL=index.js.map