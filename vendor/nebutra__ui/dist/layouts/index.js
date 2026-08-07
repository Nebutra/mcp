"use client";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import * as React from 'react';
import { useReducedMotion, motion } from 'framer-motion';

// src/utils/cn.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function BentoGrid({ items, className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "grid grid-cols-1 md:grid-cols-3 gap-3 p-4 max-w-[var(--container-wide)] mx-auto",
        className
      ),
      children: items.map((item, index) => /* @__PURE__ */ jsx(BentoCard, { item }, index))
    }
  );
}
BentoGrid.displayName = "BentoGrid";
function BentoCard({ item }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group relative p-4 rounded-[var(--radius-xl)] overflow-hidden transition-[box-shadow,transform] duration-300 motion-reduce:transition-none motion-reduce:transform-none",
        "border border-[var(--neutral-6)] bg-white dark:bg-black",
        "hover:shadow-ambient-sm",
        "hover:-translate-y-0.5 will-change-transform",
        item.colSpan === 2 ? "md:col-span-2" : "col-span-1",
        item.hasPersistentHover && ["shadow-ambient-sm -translate-y-0.5"]
      ),
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "absolute inset-0 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            ),
            children: /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,0,0,0.02)_1px,transparent_1px)] dark:bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[length:4px_4px]" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative flex flex-col space-y-3", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
            /* @__PURE__ */ jsx("div", { className: "w-8 h-8 rounded-[var(--radius-lg)] flex items-center justify-center bg-black/5 group-hover:bg-gradient-to-br transition-[background-color,background-image] duration-300", children: item.icon }),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "text-xs font-medium px-2 py-1 rounded-[var(--radius-lg)] backdrop-blur-sm",
                  "bg-black/5 text-[var(--neutral-10)]",
                  "transition-colors duration-300 group-hover:bg-black/10"
                ),
                children: item.status || "Active"
              }
            )
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsxs("h3", { className: "font-medium text-[var(--neutral-12)] tracking-tight text-[15px]", children: [
              item.title,
              item.meta && /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs text-[var(--neutral-9)] font-normal", children: item.meta })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-sm text-[var(--neutral-10)] leading-snug font-[425]", children: item.description })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between mt-2", children: [
            /* @__PURE__ */ jsx("div", { className: "flex items-center space-x-2 text-xs text-[var(--neutral-9)]", children: item.tags?.map((tag, i) => /* @__PURE__ */ jsxs(
              "span",
              {
                className: "px-2 py-1 rounded-[var(--radius-md)] bg-black/5 backdrop-blur-sm transition-colors duration-micro hover:bg-black/10",
                children: [
                  "#",
                  tag
                ]
              },
              i
            )) }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-[var(--neutral-9)] opacity-0 group-hover:opacity-100 transition-opacity", children: item.cta || "Explore \u2192" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "absolute inset-0 -z-10 rounded-[var(--radius-xl)] p-px bg-gradient-to-br from-transparent via-gray-100/50 to-transparent dark:via-white/10 transition-opacity duration-300",
              item.hasPersistentHover ? "opacity-100" : "opacity-0 group-hover:opacity-100"
            )
          }
        )
      ]
    }
  );
}
var maxWidthMap = {
  sm: "max-w-3xl",
  // 768px
  md: "max-w-[var(--container-text)]",
  // 896px
  lg: "max-w-[var(--container-content)]",
  // 1152px
  xl: "max-w-[var(--container-wide)]",
  // 1400px
  full: "max-w-none"
};
var verticalSpacingMap = {
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-48"
};
var SectionContainerRoot = React.forwardRef(
  ({
    className,
    as: Component = "section",
    size = "lg",
    spacing: verticalSpacing = "md",
    centered = true,
    noPadding = false,
    children,
    ...props
  }, ref) => {
    return /* @__PURE__ */ jsx(
      Component,
      {
        ref,
        className: cn(
          "relative w-full",
          !noPadding && "px-4 sm:px-6 lg:px-8",
          verticalSpacingMap[verticalSpacing],
          className
        ),
        ...props,
        children: /* @__PURE__ */ jsx("div", { className: cn("w-full", maxWidthMap[size], centered && "mx-auto"), children })
      }
    );
  }
);
SectionContainerRoot.displayName = "SectionContainer";
var SectionHeader = React.forwardRef(
  ({ className, centered = true, spacing = "md", children, ...props }, ref) => {
    const spacingMap = {
      sm: "mb-8",
      md: "mb-12",
      lg: "mb-16"
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(spacingMap[spacing], centered && "text-center", className),
        ...props,
        children
      }
    );
  }
);
SectionHeader.displayName = "SectionContainer.Header";
var SectionContent = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx("div", { ref, className: cn("relative", className), ...props, children });
  }
);
SectionContent.displayName = "SectionContainer.Content";
var SectionFooter = React.forwardRef(
  ({ className, centered = true, spacing = "md", children, ...props }, ref) => {
    const spacingMap = {
      sm: "mt-8",
      md: "mt-12",
      lg: "mt-16"
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(spacingMap[spacing], centered && "text-center", className),
        ...props,
        children
      }
    );
  }
);
SectionFooter.displayName = "SectionContainer.Footer";
var SectionContainer = Object.assign(SectionContainerRoot, {
  Header: SectionHeader,
  Content: SectionContent,
  Footer: SectionFooter
});
var GridPattern = React.forwardRef(
  ({
    className,
    variant = "lines",
    size = 32,
    strokeWidth = 1,
    fade = "none",
    color = "currentColor",
    ...props
  }, ref) => {
    const patternId = React.useId();
    const maskId = React.useId();
    const renderPattern = () => {
      switch (variant) {
        case "dots":
          return /* @__PURE__ */ jsx("circle", { cx: size / 2, cy: size / 2, r: strokeWidth, fill: color });
        case "crosses": {
          const crossSize = 6;
          const cx = size / 2;
          const cy = size / 2;
          return /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx(
              "line",
              {
                x1: cx - crossSize / 2,
                y1: cy,
                x2: cx + crossSize / 2,
                y2: cy,
                stroke: color,
                strokeWidth
              }
            ),
            /* @__PURE__ */ jsx(
              "line",
              {
                x1: cx,
                y1: cy - crossSize / 2,
                x2: cx,
                y2: cy + crossSize / 2,
                stroke: color,
                strokeWidth
              }
            )
          ] });
        }
        default:
          return /* @__PURE__ */ jsx(
            "path",
            {
              d: `M ${size} 0 L 0 0 0 ${size}`,
              fill: "none",
              stroke: color,
              strokeWidth
            }
          );
      }
    };
    const getMaskGradient = () => {
      switch (fade) {
        case "top":
          return /* @__PURE__ */ jsxs("linearGradient", { id: maskId, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "white", stopOpacity: "0" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "white", stopOpacity: "1" })
          ] });
        case "bottom":
          return /* @__PURE__ */ jsxs("linearGradient", { id: maskId, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "white", stopOpacity: "1" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
          ] });
        case "both":
          return /* @__PURE__ */ jsxs("linearGradient", { id: maskId, x1: "0", y1: "0", x2: "0", y2: "1", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "white", stopOpacity: "0" }),
            /* @__PURE__ */ jsx("stop", { offset: "50%", stopColor: "white", stopOpacity: "1" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
          ] });
        case "radial":
          return /* @__PURE__ */ jsxs("radialGradient", { id: maskId, cx: "50%", cy: "50%", r: "50%", children: [
            /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "white", stopOpacity: "1" }),
            /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "white", stopOpacity: "0" })
          ] });
        default:
          return null;
      }
    };
    const maskGradient = getMaskGradient();
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "pointer-events-none absolute inset-0 overflow-hidden text-border/40",
          className
        ),
        "aria-hidden": "true",
        ...props,
        children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", className: "absolute inset-0 h-full w-full", children: [
          /* @__PURE__ */ jsxs("defs", { children: [
            /* @__PURE__ */ jsx(
              "pattern",
              {
                id: patternId,
                x: "0",
                y: "0",
                width: size,
                height: size,
                patternUnits: "userSpaceOnUse",
                children: renderPattern()
              }
            ),
            maskGradient
          ] }),
          fade !== "none" ? /* @__PURE__ */ jsxs(Fragment, { children: [
            /* @__PURE__ */ jsx("mask", { id: `${maskId}-mask`, children: /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: `url(#${maskId})` }) }),
            /* @__PURE__ */ jsx(
              "rect",
              {
                width: "100%",
                height: "100%",
                fill: `url(#${patternId})`,
                mask: `url(#${maskId}-mask)`
              }
            )
          ] }) : /* @__PURE__ */ jsx("rect", { width: "100%", height: "100%", fill: `url(#${patternId})` })
        ] })
      }
    );
  }
);
GridPattern.displayName = "GridPattern";
var CrossPattern = React.forwardRef(
  ({
    crossSize = 6,
    gap = 32,
    strokeWidth = 1,
    color = "currentColor",
    opacity = 0.03,
    className,
    ...props
  }, ref) => {
    const patternSize = crossSize + gap;
    const halfCross = crossSize / 2;
    const halfStroke = strokeWidth / 2;
    const svgPattern = `
    <svg xmlns="http://www.w3.org/2000/svg" width="${patternSize}" height="${patternSize}" viewBox="0 0 ${patternSize} ${patternSize}">
      <rect 
        x="${halfCross - halfStroke}" 
        y="0" 
        width="${strokeWidth}" 
        height="${crossSize}" 
        fill="${color}" 
      />
      <rect 
        x="0" 
        y="${halfCross - halfStroke}" 
        width="${crossSize}" 
        height="${strokeWidth}" 
        fill="${color}" 
      />
    </svg>
  `.trim();
    const encodedSvg = encodeURIComponent(svgPattern);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("absolute inset-0 pointer-events-none", className),
        style: {
          backgroundImage: `url("data:image/svg+xml,${encodedSvg}")`,
          backgroundSize: `${patternSize}px ${patternSize}px`,
          opacity
        },
        "aria-hidden": "true",
        ...props
      }
    );
  }
);
CrossPattern.displayName = "CrossPattern";
var DotMatrix = React.forwardRef(
  ({ dotSize = 2, gap = 16, color = "currentColor", opacity = 0.04, className, ...props }, ref) => {
    const patternSize = dotSize + gap;
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("absolute inset-0 pointer-events-none", className),
        style: {
          backgroundImage: `radial-gradient(circle, ${color} ${dotSize / 2}px, transparent ${dotSize / 2}px)`,
          backgroundSize: `${patternSize}px ${patternSize}px`,
          backgroundPosition: `${gap / 2}px ${gap / 2}px`,
          opacity
        },
        "aria-hidden": "true",
        ...props
      }
    );
  }
);
DotMatrix.displayName = "DotMatrix";
var FloatingSpots = React.forwardRef(
  ({
    count = 12,
    minSize = 40,
    maxSize = 120,
    color = "hsl(var(--accent))",
    minOpacity = 0.05,
    maxOpacity = 0.15,
    cycleDuration = 20,
    blur = 40,
    className,
    ...props
  }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const spots = React.useMemo(() => {
      return Array.from({ length: count }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: minSize + Math.random() * (maxSize - minSize),
        opacity: minOpacity + Math.random() * (maxOpacity - minOpacity),
        duration: cycleDuration * (0.8 + Math.random() * 0.4),
        delay: Math.random() * -cycleDuration,
        driftX: (Math.random() - 0.5) * 30,
        driftY: (Math.random() - 0.5) * 30
      }));
    }, [count, minSize, maxSize, minOpacity, maxOpacity, cycleDuration]);
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn("absolute inset-0 overflow-hidden pointer-events-none", className),
        "aria-hidden": "true",
        ...props,
        children: spots.map((spot) => /* @__PURE__ */ jsx(
          motion.div,
          {
            className: "absolute rounded-full",
            style: {
              left: `${spot.x}%`,
              top: `${spot.y}%`,
              width: spot.size,
              height: spot.size,
              backgroundColor: color,
              opacity: shouldReduceMotion ? spot.opacity : void 0,
              filter: `blur(${blur}px)`,
              transform: "translate(-50%, -50%)"
            },
            animate: shouldReduceMotion ? { opacity: spot.opacity } : {
              x: [0, spot.driftX, 0, -spot.driftX / 2, 0],
              y: [0, spot.driftY / 2, spot.driftY, 0],
              opacity: [spot.opacity, spot.opacity * 1.3, spot.opacity],
              scale: [1, 1.1, 1]
            },
            transition: shouldReduceMotion ? { duration: 0 } : {
              duration: spot.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: spot.delay
            }
          },
          spot.id
        ))
      }
    );
  }
);
FloatingSpots.displayName = "FloatingSpots";
var sectionThemeDefs = {
  // Hero: "Cosmic Launch" - Deep blue gradient with floating particles
  hero: {
    backgroundColor: "bg-background",
    pattern: "floating",
    patternColor: "hsl(var(--accent))",
    patternOpacity: 0.1,
    gradient: "bg-gradient-to-b from-primary/5 via-transparent to-transparent"
  },
  // Architecture: "Terminal Matrix" - Monochrome with subtle pattern
  architecture: {
    backgroundColor: "bg-[var(--neutral-1)]",
    pattern: "dots",
    patternColor: "currentColor",
    patternOpacity: 0.03
  },
  // AI-Native: "Neon Network" - Dark with neon accents
  aiNative: {
    backgroundColor: "bg-background",
    pattern: "dots",
    patternColor: "hsl(var(--accent))",
    patternOpacity: 0.04,
    accentColor: "hsl(var(--accent))",
    gradient: "bg-gradient-to-br from-cyan-500/5 via-transparent to-fuchsia-500/5"
  },
  // Features: "Capability Map" - Subtle tech pattern
  features: {
    backgroundColor: "bg-background",
    pattern: "crosses",
    patternColor: "currentColor",
    patternOpacity: 0.03
  },
  // Multi-tenant: "Access Graph" - Amber isolation lines
  // Note: Uses specific amber for visual territory (exempt)
  multiTenant: {
    backgroundColor: "bg-background",
    pattern: "grid",
    patternColor: "hsl(var(--warning, 43 96% 56%))",
    // Warning/amber semantic
    patternOpacity: 0.03,
    accentColor: "hsl(var(--warning, 43 96% 56%))"
  },
  // Testimonials: "Depth Gallery" - Warm neutrals with vignette
  testimonials: {
    backgroundColor: "bg-background",
    pattern: "floating",
    patternColor: "hsl(var(--warning, 48 96% 58%))",
    // Warm yellow
    patternOpacity: 0.05,
    gradient: "bg-[radial-gradient(ellipse_at_center,transparent_0%,hsl(var(--background)/0.4)_100%)]"
  },
  // Vision: "Contemplation Space" - Maximum whitespace
  vision: {
    backgroundColor: "bg-background",
    pattern: "none",
    gradient: "bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent"
  },
  // Pricing: "Symmetry Order" - Clean, minimal
  pricing: {
    backgroundColor: "bg-background",
    pattern: "dots",
    patternColor: "currentColor",
    patternOpacity: 0.02
  },
  // CTA: "Action Climax" - Emphasis with gradient
  cta: {
    backgroundColor: "bg-background",
    pattern: "dots",
    patternColor: "hsl(var(--primary))",
    patternOpacity: 0.04,
    gradient: "bg-gradient-to-t from-primary/10 via-transparent to-transparent"
  },
  // Stats: "Data Visualization" - Clean with subtle pattern
  stats: {
    backgroundColor: "bg-muted/30",
    pattern: "crosses",
    patternColor: "currentColor",
    patternOpacity: 0.02
  },
  // Terminal: "Developer Immersion" - Code environment feel
  terminal: {
    backgroundColor: "bg-[var(--neutral-1)]",
    pattern: "none"
  }
};
var sectionThemes = sectionThemeDefs;
var ThemedSection = React.forwardRef(
  ({ theme, children, className, cssVars, showPattern = true, ...props }, ref) => {
    const config = typeof theme === "string" ? sectionThemes[theme] : theme;
    const renderPattern = () => {
      if (!showPattern || config.pattern === "none") return null;
      const baseProps = {
        className: "absolute inset-0 z-0"
      };
      switch (config.pattern) {
        case "dots":
          return /* @__PURE__ */ jsx(
            DotMatrix,
            {
              ...baseProps,
              color: config.patternColor,
              opacity: config.patternOpacity,
              ...config.patternProps
            }
          );
        case "crosses":
          return /* @__PURE__ */ jsx(
            CrossPattern,
            {
              ...baseProps,
              color: config.patternColor,
              opacity: config.patternOpacity,
              ...config.patternProps
            }
          );
        case "grid":
          return /* @__PURE__ */ jsx(
            GridPattern,
            {
              ...baseProps,
              color: config.patternColor,
              className: cn(baseProps.className, `opacity-[${config.patternOpacity}]`),
              ...config.patternProps
            }
          );
        case "floating":
          return /* @__PURE__ */ jsx(
            FloatingSpots,
            {
              ...baseProps,
              color: config.patternColor,
              maxOpacity: config.patternOpacity,
              ...config.patternProps
            }
          );
        default:
          return null;
      }
    };
    return /* @__PURE__ */ jsxs(
      "section",
      {
        ref,
        className: cn("relative overflow-hidden", config.backgroundColor, className),
        style: cssVars,
        ...props,
        children: [
          renderPattern(),
          config.gradient && /* @__PURE__ */ jsx(
            "div",
            {
              className: cn("absolute inset-0 z-0 pointer-events-none", config.gradient),
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "relative z-10", children })
        ]
      }
    );
  }
);
ThemedSection.displayName = "ThemedSection";

export { BentoGrid, SectionContainer, SectionContainerRoot, SectionContent, SectionFooter, SectionHeader, ThemedSection, sectionThemes };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map