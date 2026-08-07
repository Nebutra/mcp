"use client";
import { Menu, Cross, Warning } from '@nebutra/icons';
import * as React4 from 'react';
import { createContext, useState, useEffect, useMemo, useCallback } from 'react';
import { Dialog } from '@base-ui/react/dialog';
import { cva } from 'class-variance-authority';
import { colors } from '@nebutra/brand';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import Link from 'next/link';

// src/layout/app-shell.tsx
({
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
  white: colors.white,
  black: colors.black
});
({
  /** Hero sections, primary CTA buttons, logo fills — VI signature gradient */
  primary: colors.gradient.primary,
  /** Hover states, secondary gradient elements */
  reverse: colors.gradient.primaryReverse,
  /** Vertical layout dividers, page section separators */
  vertical: colors.gradient.primaryVertical,
  /** Background halos, focus glow effects, radial emphasis */
  radial: colors.gradient.primaryRadial});
var primitiveSpacing = {
  1: 4,
  2: 8,
  3: 12,
  4: 16,
  5: 20,
  6: 24,
  8: 32,
  10: 40,
  12: 48,
  14: 56,
  16: 64,
  24: 96
};
var primitiveSizing = {
  sm: 32,
  lg: 48,
  "2xl": 80
};
var primitiveRadius = {
  md: 6,
  // Geist default — slightly more rounded than 4px
  lg: 8,
  "2xl": 16};
var primitiveFontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18};
var primitiveFontWeight = {
  semibold: 600};
var primitiveTransition = {
  duration: {
    // hover, focus, small state changes
    flow: 200},
  easing: {
    default: "ease-out"}
};

// src/tokens/components/overlay.ts
var overlayFocusRingClassName = "outline-none";
var overlayZIndex = {
  backdrop: 1040,
  modal: 1050};
var overlayTokens = {
  motion: {
    duration: primitiveTransition.duration.flow,
    easing: primitiveTransition.easing.default}};
var overlayClassNames = {
  focusRing: overlayFocusRingClassName,
  sheetBackdrop: [
    "fixed inset-0 bg-[var(--sheet-overlay-background)] backdrop-blur-[var(--sheet-overlay-blur)]",
    "transition-[opacity,backdrop-filter,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none"
  ].join(" "),
  sheetSurface: [
    "fixed flex flex-col overflow-hidden border border-border bg-[var(--sheet-background)] text-foreground shadow-[var(--sheet-shadow)]",
    "outline-none transition-[opacity,transform,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none"
  ].join(" ")};

// src/tokens/components/sheet.ts
var sheetTokens = {
  inset: primitiveSpacing[3],
  sideWidth: primitiveSizing["2xl"] * 6 + primitiveSpacing[8],
  // 512px
  edgeHeight: primitiveSizing["2xl"] * 4,
  // 320px
  paddingX: primitiveSpacing[6],
  paddingY: primitiveSpacing[5],
  bodyPaddingY: primitiveSpacing[4],
  gap: primitiveSpacing[4],
  headerGap: primitiveSpacing[1] + 2,
  footerGap: primitiveSpacing[2],
  radius: primitiveRadius["2xl"],
  close: {
    size: primitiveSizing.sm,
    iconSize: primitiveFontSize.base,
    offset: primitiveSpacing[4],
    radius: primitiveRadius.md
  },
  overlay: {
    background: "hsl(var(--background) / 0.68)",
    blur: "blur(6px)"
  },
  surface: {
    background: "hsl(var(--popover))",
    shadow: "var(--elevation-xl)"
  }};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/utils/primitive-props.ts
function asPlainStyle(style) {
  if (style == null || typeof style === "function") return {};
  return style;
}
function getSheetStyle(style) {
  return {
    "--sheet-inset": `${sheetTokens.inset}px`,
    "--sheet-side-width": `${sheetTokens.sideWidth}px`,
    "--sheet-edge-height": `${sheetTokens.edgeHeight}px`,
    "--sheet-padding-x": `${sheetTokens.paddingX}px`,
    "--sheet-padding-y": `${sheetTokens.paddingY}px`,
    "--sheet-body-padding-y": `${sheetTokens.bodyPaddingY}px`,
    "--sheet-gap": `${sheetTokens.gap}px`,
    "--sheet-header-gap": `${sheetTokens.headerGap}px`,
    "--sheet-footer-gap": `${sheetTokens.footerGap}px`,
    "--sheet-radius": `${sheetTokens.radius}px`,
    "--sheet-close-size": `${sheetTokens.close.size}px`,
    "--sheet-close-icon-size": `${sheetTokens.close.iconSize}px`,
    "--sheet-close-offset": `${sheetTokens.close.offset}px`,
    "--sheet-close-radius": `${sheetTokens.close.radius}px`,
    "--sheet-overlay-background": sheetTokens.overlay.background,
    "--sheet-overlay-blur": sheetTokens.overlay.blur,
    "--sheet-background": sheetTokens.surface.background,
    "--sheet-shadow": sheetTokens.surface.shadow,
    "--sheet-duration": `${overlayTokens.motion.duration}ms`,
    "--sheet-easing": overlayTokens.motion.easing,
    ...asPlainStyle(style)
  };
}
function Sheet({ modal = "trap-focus", disablePointerDismissal = true, ...props }) {
  return /* @__PURE__ */ jsx(
    Dialog.Root,
    {
      "data-slot": "sheet",
      modal,
      disablePointerDismissal,
      ...props
    }
  );
}
Sheet.displayName = "Sheet";
var SheetClose = ({
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React4.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      Dialog.Close,
      {
        ref,
        "data-slot": "sheet-close",
        ...props,
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(Dialog.Close, { ref, "data-slot": "sheet-close", ...props, children });
};
SheetClose.displayName = "SheetClose";
function SheetPortal(props) {
  return /* @__PURE__ */ jsx(Dialog.Portal, { "data-slot": "sheet-portal", ...props });
}
SheetPortal.displayName = "SheetPortal";
var SheetOverlay = ({
  className,
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Dialog.Backdrop,
  {
    ref,
    "data-slot": "sheet-overlay",
    className: cn(overlayClassNames.sheetBackdrop, className),
    style: { zIndex: overlayZIndex.backdrop, ...getSheetStyle(style) },
    ...props
  }
);
SheetOverlay.displayName = "SheetOverlay";
var sheetVariants = cva(overlayClassNames.sheetSurface, {
  variants: {
    side: {
      top: "inset-x-[var(--sheet-inset)] top-[var(--sheet-inset)] max-h-[min(var(--sheet-edge-height),calc(100dvh_-_var(--sheet-inset)_-_var(--sheet-inset)))] rounded-[var(--sheet-radius)] data-ending-style:-translate-y-full data-starting-style:-translate-y-full",
      bottom: "inset-x-[var(--sheet-inset)] bottom-[var(--sheet-inset)] max-h-[min(var(--sheet-edge-height),calc(100dvh_-_var(--sheet-inset)_-_var(--sheet-inset)))] rounded-[var(--sheet-radius)] data-ending-style:translate-y-full data-starting-style:translate-y-full",
      left: "inset-y-[var(--sheet-inset)] left-[var(--sheet-inset)] h-[calc(100dvh_-_var(--sheet-inset)_-_var(--sheet-inset))] w-[min(var(--sheet-side-width),calc(100vw_-_var(--sheet-inset)_-_var(--sheet-inset)))] rounded-[var(--sheet-radius)] data-ending-style:-translate-x-full data-starting-style:-translate-x-full",
      right: "inset-y-[var(--sheet-inset)] right-[var(--sheet-inset)] h-[calc(100dvh_-_var(--sheet-inset)_-_var(--sheet-inset))] w-[min(var(--sheet-side-width),calc(100vw_-_var(--sheet-inset)_-_var(--sheet-inset)))] rounded-[var(--sheet-radius)] data-ending-style:translate-x-full data-starting-style:translate-x-full"
    }
  },
  defaultVariants: {
    side: "right"
  }
});
var SheetContent = ({
  side = "right",
  className,
  children,
  overlay = true,
  noOverlay = false,
  showClose,
  close,
  style,
  ref,
  ...props
}) => {
  const shouldRenderClose = close ?? showClose ?? true;
  const shouldRenderOverlay = overlay && !noOverlay;
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    shouldRenderOverlay ? /* @__PURE__ */ jsx(SheetOverlay, {}) : null,
    /* @__PURE__ */ jsxs(
      Dialog.Popup,
      {
        ref,
        "data-slot": "sheet-content",
        className: cn(sheetVariants({ side }), className),
        style: { zIndex: overlayZIndex.modal, ...getSheetStyle(style) },
        ...props,
        children: [
          children,
          shouldRenderClose ? /* @__PURE__ */ jsxs(
            SheetClose,
            {
              "aria-label": "Close",
              className: cn(
                "absolute right-[var(--sheet-close-offset)] top-[var(--sheet-close-offset)] inline-flex size-[var(--sheet-close-size)] items-center justify-center rounded-[var(--sheet-close-radius)] text-muted-foreground",
                "transition-[background-color,color,box-shadow] duration-[var(--motion-duration-micro)] ease-[var(--ease-out)] hover:bg-muted hover:text-foreground",
                overlayClassNames.focusRing,
                "disabled:pointer-events-none motion-reduce:transition-none"
              ),
              children: [
                /* @__PURE__ */ jsx(Cross, { "aria-hidden": "true", className: "size-[var(--sheet-close-icon-size)]" }),
                /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
              ]
            }
          ) : null
        ]
      }
    )
  ] });
};
SheetContent.displayName = "SheetContent";
var DEFAULT_SIDEBAR_WIDTH = 224;
var DEFAULT_COLLAPSED_WIDTH = 52;
var DEFAULT_HEADER_HEIGHT = 48;
function AppShell({
  sidebar,
  header,
  children,
  sidebarWidth = DEFAULT_SIDEBAR_WIDTH,
  sidebarCollapsedWidth = DEFAULT_COLLAPSED_WIDTH,
  collapsed,
  defaultCollapsed = false,
  onCollapsedChange,
  headerHeight = DEFAULT_HEADER_HEIGHT,
  contentClassName,
  className,
  overlay = false
}) {
  const isControlled = collapsed !== void 0;
  const [internalCollapsed] = React4.useState(defaultCollapsed);
  const isCollapsed = isControlled ? collapsed : internalCollapsed;
  const [mobileOpen, setMobileOpen] = React4.useState(false);
  const railWidth = isCollapsed ? sidebarCollapsedWidth : sidebarWidth;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-ui": "nebutra-app-shell",
      className: cn(
        "relative flex h-screen w-full overflow-hidden bg-background text-foreground",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          "aside",
          {
            "aria-label": "Primary",
            className: cn(
              "hidden h-screen overflow-hidden bg-sidebar text-sidebar-foreground md:block",
              "transition-[width] duration-flow ease-out",
              overlay ? "absolute inset-y-0 left-0 z-40" : "shrink-0",
              railWidth > 0 && "border-r border-sidebar-border",
              overlay && railWidth > 0 && "shadow-2xl"
            ),
            style: { width: railWidth },
            children: /* @__PURE__ */ jsx(
              "div",
              {
                className: "h-full overflow-y-auto",
                style: { width: isCollapsed ? sidebarCollapsedWidth : sidebarWidth },
                children: sidebar
              }
            )
          }
        ),
        overlay && !isCollapsed ? /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Collapse navigation",
            onClick: () => onCollapsedChange?.(true),
            className: "absolute inset-0 z-30 hidden cursor-default bg-foreground/20 backdrop-blur-[1px] md:block"
          }
        ) : null,
        /* @__PURE__ */ jsx(Sheet, { open: mobileOpen, onOpenChange: setMobileOpen, children: /* @__PURE__ */ jsx(SheetContent, { side: "left", className: "w-72 border-r border-sidebar-border bg-sidebar p-0", children: /* @__PURE__ */ jsx("div", { className: "h-full overflow-y-auto", children: sidebar }) }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex min-h-0 min-w-0 flex-1 flex-col", children: [
          header !== void 0 && /* @__PURE__ */ jsxs(
            "header",
            {
              className: cn(
                "sticky top-0 z-30 flex shrink-0 items-center gap-2 border-b border-border",
                "bg-background/90 px-3 backdrop-blur-xl supports-[backdrop-filter]:bg-background/80 sm:px-4"
              ),
              style: { height: headerHeight },
              children: [
                /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": "Open navigation menu",
                    onClick: () => setMobileOpen(true),
                    className: cn(
                      "relative inline-flex size-8 items-center justify-center rounded-[var(--radius-md)] text-foreground/80 after:absolute after:-inset-1.5 after:content-['']",
                      "hover:bg-muted hover:text-foreground md:hidden",
                      "focus-visible:outline-none"
                    ),
                    children: /* @__PURE__ */ jsx(Menu, { className: "size-4", "aria-hidden": "true" })
                  }
                ),
                /* @__PURE__ */ jsx("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: header })
              ]
            }
          ),
          header === void 0 && /* @__PURE__ */ jsx("div", { className: "flex shrink-0 items-center border-b border-border bg-background px-4 py-2 md:hidden", children: /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": "Open navigation menu",
              onClick: () => setMobileOpen(true),
              className: cn(
                "relative inline-flex size-8 items-center justify-center rounded-[var(--radius-md)] text-foreground/80 after:absolute after:-inset-1.5 after:content-['']",
                "hover:bg-muted hover:text-foreground",
                "focus-visible:outline-none"
              ),
              children: /* @__PURE__ */ jsx(Menu, { className: "size-4", "aria-hidden": "true" })
            }
          ) }),
          /* @__PURE__ */ jsx(
            "main",
            {
              className: cn(
                "min-h-0 flex-1 overflow-y-auto w-full max-w-none px-3 py-4 sm:px-4 md:px-5 2xl:px-6",
                contentClassName
              ),
              children
            }
          )
        ] })
      ]
    }
  );
}
function Card({ children, isInteractive = false, className }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "rounded-[var(--radius-lg)] border border-border bg-background p-4 text-foreground shadow-sm dark:bg-black/40",
        isInteractive && "cursor-pointer transition-shadow hover:shadow-md",
        className
      ),
      children
    }
  );
}
var sizeClasses = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  full: "max-w-full"
};
function Container({ children, size = "lg", className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("mx-auto w-full px-4", sizeClasses[size], className), children });
}
var DesignSystemContext = createContext(null);
function DesignSystemProvider({
  children,
  defaultMode = "system",
  storageKey = "nebutra-theme-mode",
  enableSystemPreference = true
}) {
  const [mode, setModeState] = useState(defaultMode);
  const [systemPreference, setSystemPreference] = useState("light");
  useEffect(() => {
    if (typeof window === "undefined" || !enableSystemPreference) return;
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    setSystemPreference(mediaQuery.matches ? "dark" : "light");
    const handler = (e) => {
      setSystemPreference(e.matches ? "dark" : "light");
    };
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, [enableSystemPreference]);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const stored = localStorage.getItem(storageKey);
    if (stored && ["light", "dark", "system"].includes(stored)) {
      setModeState(stored);
    }
  }, [storageKey]);
  const resolvedMode = useMemo(() => {
    if (mode === "system") {
      return systemPreference;
    }
    return mode;
  }, [mode, systemPreference]);
  const setMode = useCallback(
    (newMode) => {
      setModeState(newMode);
      if (typeof window !== "undefined") {
        localStorage.setItem(storageKey, newMode);
      }
    },
    [storageKey]
  );
  const toggleMode = useCallback(() => {
    setMode(resolvedMode === "light" ? "dark" : "light");
  }, [resolvedMode, setMode]);
  const contextValue = useMemo(
    () => ({
      mode,
      setMode,
      toggleMode,
      resolvedMode
    }),
    [mode, resolvedMode, setMode, toggleMode]
  );
  return /* @__PURE__ */ jsx(DesignSystemContext.Provider, { value: contextValue, children });
}
var SIZE_MAP = {
  sm: { box: "h-8 w-8", halo: "h-16 w-16 -inset-4", glyph: "h-3.5 w-3.5" },
  md: { box: "h-10 w-10", halo: "h-20 w-20 -inset-5", glyph: "h-4 w-4" },
  lg: { box: "h-14 w-14", halo: "h-28 w-28 -inset-7", glyph: "h-5 w-5" },
  xl: { box: "h-20 w-20", halo: "h-40 w-40 -inset-10", glyph: "h-7 w-7" }
};
function BrandMark({
  children,
  variant = "gradient",
  size = "md",
  className,
  halo = false,
  ariaHidden = true
}) {
  const sizes = SIZE_MAP[size];
  return /* @__PURE__ */ jsxs(
    "span",
    {
      "aria-hidden": ariaHidden,
      className: cn("relative inline-flex shrink-0 items-center justify-center", className),
      children: [
        halo && /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: cn(
              "pointer-events-none absolute rounded-full bg-brand-mark opacity-30 blur-2xl",
              sizes.halo
            )
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "relative inline-flex items-center justify-center rounded-[var(--radius-2xl)]",
              sizes.box,
              variant === "gradient" && "bg-brand-mark text-brand-mark-foreground shadow-sm",
              variant === "soft" && "bg-brand-mark/10 text-brand-mark dark:bg-brand-mark/20",
              variant === "outline" && "border border-border bg-background text-foreground"
            ),
            children: children ?? /* @__PURE__ */ jsx(DefaultGlyph, { className: sizes.glyph })
          }
        )
      ]
    }
  );
}
function DefaultGlyph({ className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      viewBox: "0 0 16 16",
      fill: "none",
      "aria-hidden": "true",
      className,
      xmlns: "http://www.w3.org/2000/svg",
      children: [
        /* @__PURE__ */ jsx("circle", { cx: "8", cy: "8", r: "3", fill: "currentColor" }),
        /* @__PURE__ */ jsx("circle", { cx: "8", cy: "8", r: "6.5", stroke: "currentColor", strokeOpacity: "0.35" })
      ]
    }
  );
}

// src/tokens/components/empty-state.ts
var emptyStateTokens = {
  root: {
    minHeight: {
      sm: primitiveSpacing[16] * 2,
      md: primitiveSpacing[24] * 2,
      lg: primitiveSpacing[16] * 4
    },
    paddingX: {
      sm: primitiveSpacing[4],
      md: primitiveSpacing[6],
      lg: primitiveSpacing[8]
    },
    paddingY: {
      sm: primitiveSpacing[8],
      md: primitiveSpacing[10],
      lg: primitiveSpacing[14]
    },
    radius: primitiveRadius.lg
  },
  content: {
    maxWidth: primitiveSpacing[14] * 8,
    descriptionMaxWidth: primitiveSpacing[12] * 8,
    stackGap: primitiveSpacing[4],
    copyGap: primitiveSpacing[2],
    actionsGap: primitiveSpacing[2]
  },
  icon: {
    size: primitiveSizing.lg,
    radius: primitiveRadius.lg
  },
  typography: {
    title: {
      sm: primitiveFontSize.sm,
      md: primitiveFontSize.base,
      lg: primitiveFontSize.lg
    },
    description: {
      sm: primitiveFontSize.xs,
      md: primitiveFontSize.sm,
      lg: primitiveFontSize.sm
    },
    titleWeight: primitiveFontWeight.semibold,
    titleLineHeight: primitiveSpacing[6],
    descriptionLineHeight: primitiveSpacing[6]
  }
};
var variantClassName = {
  "blank-slate": "border border-dashed border-border bg-background",
  informational: "border border-border bg-card",
  educational: "border border-border bg-card",
  guide: "border border-border bg-muted/30",
  "no-results": "border border-dashed border-border bg-background",
  cleared: "border border-dashed border-border bg-muted/20",
  permission: "border border-border bg-card",
  error: "border border-destructive/25 bg-destructive/5"
};
var iconToneClassName = {
  "blank-slate": "text-muted-foreground",
  informational: "text-primary",
  educational: "text-primary",
  guide: "text-primary",
  "no-results": "text-muted-foreground",
  cleared: "text-muted-foreground",
  permission: "text-muted-foreground",
  error: "text-destructive"
};
var emptyStateCssVars = (size) => ({
  "--empty-state-min-height": `${emptyStateTokens.root.minHeight[size]}px`,
  "--empty-state-padding-x": `${emptyStateTokens.root.paddingX[size]}px`,
  "--empty-state-padding-y": `${emptyStateTokens.root.paddingY[size]}px`,
  "--empty-state-radius": `${emptyStateTokens.root.radius}px`,
  "--empty-state-content-max-width": `${emptyStateTokens.content.maxWidth}px`,
  "--empty-state-description-max-width": `${emptyStateTokens.content.descriptionMaxWidth}px`,
  "--empty-state-stack-gap": `${emptyStateTokens.content.stackGap}px`,
  "--empty-state-copy-gap": `${emptyStateTokens.content.copyGap}px`,
  "--empty-state-actions-gap": `${emptyStateTokens.content.actionsGap}px`,
  "--empty-state-icon-size": `${emptyStateTokens.icon.size}px`,
  "--empty-state-icon-radius": `${emptyStateTokens.icon.radius}px`,
  "--empty-state-title-size": `${emptyStateTokens.typography.title[size]}px`,
  "--empty-state-description-size": `${emptyStateTokens.typography.description[size]}px`,
  "--empty-state-title-weight": `${emptyStateTokens.typography.titleWeight}`,
  "--empty-state-title-line-height": `${emptyStateTokens.typography.titleLineHeight}px`,
  "--empty-state-description-line-height": `${emptyStateTokens.typography.descriptionLineHeight}px`
});
var EmptyStateIcon = ({
  className,
  icon,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "aria-hidden": "true",
    className: cn(
      "flex size-[var(--empty-state-icon-size)] shrink-0 items-center justify-center rounded-[var(--empty-state-icon-radius)] bg-muted",
      className
    ),
    ...props,
    children: icon
  }
);
EmptyStateIcon.displayName = "EmptyState.Icon";
var EmptyStateRoot = ({
  className,
  title,
  description,
  icon,
  children,
  action,
  link,
  style,
  variant = "blank-slate",
  size = "md",
  align = "center",
  live = false,
  ref,
  ...props
}) => {
  const actions = children ?? [action, link].filter(Boolean);
  const hasActions = React4.Children.toArray(actions).length > 0;
  return /* @__PURE__ */ jsx(
    "section",
    {
      ref,
      "aria-live": live ? "polite" : void 0,
      className: cn(
        "flex min-h-[var(--empty-state-min-height)] w-full flex-col justify-center rounded-[var(--empty-state-radius)] px-[var(--empty-state-padding-x)] py-[var(--empty-state-padding-y)]",
        variantClassName[variant],
        align === "center" ? "items-center text-center" : "items-start text-left",
        className
      ),
      style: { ...emptyStateCssVars(size), ...style },
      ...props,
      children: /* @__PURE__ */ jsxs(
        "div",
        {
          className: cn(
            "flex max-w-[var(--empty-state-content-max-width)] flex-col gap-[var(--empty-state-stack-gap)]",
            align === "center" ? "items-center" : "items-start"
          ),
          children: [
            icon ? /* @__PURE__ */ jsx("div", { className: cn("[&>div]:bg-muted", iconToneClassName[variant]), children: icon }) : null,
            /* @__PURE__ */ jsxs("div", { className: "space-y-[var(--empty-state-copy-gap)]", children: [
              /* @__PURE__ */ jsx("h3", { className: "font-[var(--empty-state-title-weight)] text-[length:var(--empty-state-title-size)] leading-[var(--empty-state-title-line-height)] text-foreground", children: title }),
              description ? /* @__PURE__ */ jsx("p", { className: "max-w-[var(--empty-state-description-max-width)] text-[length:var(--empty-state-description-size)] leading-[var(--empty-state-description-line-height)] text-muted-foreground", children: description }) : null
            ] }),
            hasActions ? /* @__PURE__ */ jsx(
              "div",
              {
                className: cn(
                  "flex flex-wrap gap-[var(--empty-state-actions-gap)]",
                  align === "center" ? "justify-center" : "justify-start"
                ),
                children: actions
              }
            ) : null
          ]
        }
      )
    }
  );
};
EmptyStateRoot.displayName = "EmptyState.Root";
var EmptyState = {
  Root: EmptyStateRoot,
  Icon: EmptyStateIcon
};
var toneVariant = {
  default: "blank-slate",
  branded: "informational",
  subtle: "guide"
};
function EmptyState2({
  title,
  description,
  mascot,
  icon,
  action,
  secondaryAction,
  tone = "default",
  size = "md",
  className
}) {
  const visual = mascot ?? icon ?? (tone === "branded" ? /* @__PURE__ */ jsx(BrandMark, { size: size === "lg" ? "lg" : "md" }) : null);
  return /* @__PURE__ */ jsx(
    EmptyState.Root,
    {
      action,
      className: cn(tone === "subtle" && "border-0 bg-transparent", className),
      description,
      icon: visual ? /* @__PURE__ */ jsx(EmptyState.Icon, { icon: visual }) : void 0,
      link: secondaryAction,
      size,
      title,
      variant: toneVariant[tone]
    }
  );
}
var Slot = React4.forwardRef(
  ({ children, className, style, ...props }, ref) => {
    const childArray = React4.Children.toArray(children);
    const child = childArray.length === 1 ? childArray[0] : null;
    if (child == null || !React4.isValidElement(child)) {
      return /* @__PURE__ */ jsx("span", { ref, className, style, ...props, children });
    }
    const childProps = child.props;
    const mergedRef = (node) => {
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
      const childRef = childProps.ref;
      if (typeof childRef === "function") childRef(node);
      else if (childRef && "current" in childRef) {
        childRef.current = node;
      }
    };
    const mergedClass = [className, childProps.className].filter(Boolean).join(" ");
    const merged = {
      ...childProps,
      ...props,
      ref: mergedRef,
      className: mergedClass,
      style: { ...childProps.style, ...style }
    };
    return React4.cloneElement(
      child,
      merged
    );
  }
);
Slot.displayName = "Slot";
var buttonVariants = cva(
  [
    "inline-flex items-center justify-center gap-2 whitespace-nowrap",
    "rounded-[var(--btn-default-radius,var(--radius-md))]",
    "text-[length:var(--control-font-size-md,0.875rem)] font-[number:var(--font-weight-medium,500)]",
    "transition-colors duration-micro ease-out",
    "disabled:pointer-events-none disabled:opacity-50",
    "aria-busy:cursor-wait"
  ].join(" "),
  {
    variants: {
      variant: {
        // Recipe-driven via packages/design/tokens/recipe.css (.btn-brand-default)
        default: "btn-brand-default",
        ink: "bg-[var(--neutral-12)] text-[var(--neutral-1)] ring-1 ring-inset ring-[color:var(--neutral-1)]/5 hover:bg-[var(--neutral-11)] hover:-translate-y-px active:translate-y-0 transition-[transform,background-color] duration-micro",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        tertiary: "border border-transparent bg-transparent text-muted-foreground hover:bg-accent hover:text-accent-foreground hover:border-input",
        warning: "bg-warning text-warning-foreground hover:bg-warning/90"
      },
      size: {
        tiny: "h-[var(--control-height-tiny,1.5rem)] rounded-[var(--radius-sm)] px-2 text-[length:var(--control-font-size-tiny,0.6875rem)]",
        sm: "h-[var(--control-height-sm,2rem)] rounded-[var(--radius-sm)] px-3 text-[length:var(--control-font-size-sm,0.75rem)]",
        default: "h-[var(--control-height-md,2.5rem)] px-[var(--btn-default-padding-x,1rem)] py-[var(--btn-default-padding-y,0.5rem)]",
        lg: "h-[var(--control-height-lg,3rem)] rounded-[var(--radius-lg)] px-5 text-[length:var(--control-font-size-lg,1rem)]",
        icon: "h-[var(--control-height-md,2.5rem)] w-[var(--control-height-md,2.5rem)]"
      },
      shape: {
        default: "",
        // Radius from --btn-default-radius / --radius-md — brand-switchable.
        // Do not hardcode rounded-md here; a language must be able to retarget
        // the corner treatment of every icon trigger at once.
        square: "rounded-[var(--btn-default-radius,var(--radius-md))]",
        // Pill radius token, not Tailwind rounded-full — same 9999px default,
        // but a brand that ships a softer "circle" can override --radius-pill.
        circle: "rounded-[var(--radius-pill,9999px)]",
        pill: "rounded-[var(--radius-pill,9999px)]"
      },
      // Icon-only box size — orthogonal to `size` (which tunes text-button
      // height/padding/font together) and to `shape` (which picks the
      // corner treatment). Only takes effect combined with shape="square"
      // or shape="circle" (see compoundVariants below); every other
      // combination ignores it. 28/32/36 cover the icon-trigger sizes that
      // actually occur in the app — 24/40/48 are already reachable via
      // shape + size (tiny/default/lg). Heights read --control-height-icon-*
      // so density-aware Brand Packages can scale them with the ladder.
      iconSize: {
        sm: "",
        // 28px default
        md: "",
        // 32px default
        lg: ""
        // 36px default
      }
    },
    compoundVariants: [
      { shape: "square", size: "tiny", className: "w-[var(--control-height-tiny,1.5rem)] px-0" },
      { shape: "square", size: "sm", className: "w-[var(--control-height-sm,2rem)] px-0" },
      { shape: "square", size: "default", className: "w-[var(--control-height-md,2.5rem)] px-0" },
      { shape: "square", size: "lg", className: "w-[var(--control-height-lg,3rem)] px-0" },
      {
        shape: "circle",
        size: "tiny",
        className: "w-[var(--control-height-tiny,1.5rem)] px-0"
      },
      {
        shape: "circle",
        size: "sm",
        className: "w-[var(--control-height-sm,2rem)] px-0"
      },
      {
        shape: "circle",
        size: "default",
        className: "w-[var(--control-height-md,2.5rem)] px-0"
      },
      {
        shape: "circle",
        size: "lg",
        className: "w-[var(--control-height-lg,3rem)] px-0"
      },
      // iconSize wins over the size-driven box above — matched on shape +
      // iconSize only, so it applies regardless of whatever `size` was
      // passed (or left at its "default" fallback). Corner treatment stays
      // on the shape variant (token-backed); only the box is set here.
      {
        shape: "square",
        iconSize: "sm",
        className: "h-[var(--control-height-icon-sm,1.75rem)] w-[var(--control-height-icon-sm,1.75rem)] px-0"
      },
      {
        shape: "square",
        iconSize: "md",
        className: "h-[var(--control-height-icon-md,2rem)] w-[var(--control-height-icon-md,2rem)] px-0"
      },
      {
        shape: "square",
        iconSize: "lg",
        className: "h-[var(--control-height-icon-lg,2.25rem)] w-[var(--control-height-icon-lg,2.25rem)] px-0"
      },
      {
        shape: "circle",
        iconSize: "sm",
        className: "h-[var(--control-height-icon-sm,1.75rem)] w-[var(--control-height-icon-sm,1.75rem)] px-0"
      },
      {
        shape: "circle",
        iconSize: "md",
        className: "h-[var(--control-height-icon-md,2rem)] w-[var(--control-height-icon-md,2rem)] px-0"
      },
      {
        shape: "circle",
        iconSize: "lg",
        className: "h-[var(--control-height-icon-lg,2.25rem)] w-[var(--control-height-icon-lg,2.25rem)] px-0"
      }
    ],
    defaultVariants: {
      variant: "default",
      size: "default",
      shape: "default"
    }
  }
);
function Spinner({ className }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "aria-hidden": "true",
      className: cn(
        "block rounded-full border-2 border-current border-t-transparent animate-[spinner_0.6s_linear_infinite]",
        className
      )
    }
  );
}
function getIconSizeClass(size, iconSize2) {
  if (iconSize2 === "sm") return "[&>svg]:size-3.5";
  if (iconSize2 === "md") return "[&>svg]:size-3.5";
  if (iconSize2 === "lg") return "[&>svg]:size-4";
  switch (size) {
    case "tiny":
      return "[&>svg]:size-3";
    // 12px
    case "sm":
      return "[&>svg]:size-3.5";
    // 14px
    case "lg":
      return "[&>svg]:size-4.5";
    // 18px
    default:
      return "[&>svg]:size-4";
  }
}
function getSpinnerSizeClass(size, iconSize2) {
  if (iconSize2 === "sm") return "size-3.5";
  if (iconSize2 === "md") return "size-3.5";
  if (iconSize2 === "lg") return "size-4";
  switch (size) {
    case "tiny":
      return "size-3";
    // 12px
    case "sm":
      return "size-3.5";
    // 14px
    case "lg":
      return "size-4.5";
    // 18px
    default:
      return "size-4";
  }
}
var SHADOW_CLASSES = {
  sm: "shadow-sm",
  md: "shadow-md",
  lg: "shadow-md"
};
function resolveShadowClass(shadow) {
  if (!shadow) return void 0;
  const level = shadow === true ? "md" : shadow;
  return SHADOW_CLASSES[level];
}
function ButtonContent({ loading, prefix, suffix, size, iconSize: iconSize2, children }) {
  const iconSizeClass = getIconSizeClass(size, iconSize2);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    loading && /* @__PURE__ */ jsx(Spinner, { className: getSpinnerSizeClass(size, iconSize2) }),
    prefix != null && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: cn("shrink-0", iconSizeClass), children: prefix }),
    children,
    suffix != null && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: cn("shrink-0", iconSizeClass), children: suffix })
  ] });
}
var Button = ({
  className,
  variant,
  size,
  shape,
  iconSize: iconSize2,
  asChild = false,
  loading = false,
  disabled,
  prefix,
  suffix,
  shadow,
  children,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : "button";
  const isDisabled = Boolean(disabled || loading);
  const shadowClass = resolveShadowClass(shadow);
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn(buttonVariants({ variant, size, shape, iconSize: iconSize2 }), shadowClass, className),
      disabled: isDisabled,
      "aria-busy": loading || void 0,
      ...props,
      children: asChild ? children : /* @__PURE__ */ jsx(
        ButtonContent,
        {
          loading,
          prefix,
          suffix,
          size,
          iconSize: iconSize2,
          children
        }
      )
    }
  );
};
Button.displayName = "Button";
var ButtonLink = ({
  className,
  variant,
  size,
  shape,
  iconSize: iconSize2,
  prefix,
  suffix,
  shadow,
  loading = false,
  children,
  ref,
  ...props
}) => {
  const shadowClass = resolveShadowClass(shadow);
  const loadingProps = loading ? {
    "aria-busy": "true",
    "aria-disabled": "true",
    tabIndex: -1
  } : {};
  return /* @__PURE__ */ jsx(
    "a",
    {
      ref,
      className: cn(
        buttonVariants({ variant, size, shape, iconSize: iconSize2 }),
        shadowClass,
        loading && "pointer-events-none opacity-50",
        className
      ),
      ...loadingProps,
      ...props,
      children: /* @__PURE__ */ jsx(
        ButtonContent,
        {
          loading,
          prefix,
          suffix,
          size,
          iconSize: iconSize2,
          children
        }
      )
    }
  );
};
ButtonLink.displayName = "ButtonLink";
var surfaceSize = {
  small: "gap-2 rounded-[var(--radius-md)] p-3 text-sm",
  medium: "gap-3 rounded-[var(--radius-lg)] p-4 text-sm",
  large: "gap-3 rounded-[var(--radius-lg)] p-5 text-base"
};
var surfaceIconSize = {
  small: 14,
  medium: 16,
  large: 18
};
function getActionTarget(link) {
  if (link?.startsWith("http")) {
    return { target: "_blank", rel: "noopener noreferrer" };
  }
  return {};
}
var ErrorSurface = ({
  children,
  label,
  showLabel = true,
  title,
  size = "medium",
  error,
  errorId,
  errorIdLabel = "Request ID",
  live = "polite",
  action,
  link,
  onAction,
  actionLoading = false,
  className,
  role,
  ref,
  ...props
}) => {
  const message = error?.message ?? children;
  const resolvedTitle = title ?? error?.title;
  const resolvedAction = action ?? error?.action;
  const resolvedLink = link ?? error?.link;
  const resolvedErrorId = errorId ?? error?.id;
  const resolvedRole = role ?? (live === "assertive" ? "alert" : "status");
  const ariaLive = live === "off" ? void 0 : live;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      role: resolvedRole,
      "aria-live": ariaLive,
      className: cn(
        "flex w-full border border-destructive/25 bg-destructive/5 text-foreground",
        surfaceSize[size],
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "mt-0.5 flex size-7 shrink-0 items-center justify-center rounded-[var(--radius-sm)] border border-destructive/20 bg-background text-destructive",
            children: /* @__PURE__ */ jsx(Warning, { size: surfaceIconSize[size] })
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          label && showLabel ? /* @__PURE__ */ jsx("p", { className: "mb-1 text-xs font-medium uppercase tracking-normal text-destructive", children: label }) : null,
          resolvedTitle ? /* @__PURE__ */ jsx("p", { className: "font-semibold leading-6 text-foreground", children: resolvedTitle }) : null,
          message ? /* @__PURE__ */ jsx("p", { className: cn("leading-5 text-muted-foreground", resolvedTitle && "mt-1"), children: message }) : null,
          resolvedErrorId ? /* @__PURE__ */ jsxs("details", { className: "mt-3 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx("summary", { className: "cursor-pointer select-none text-foreground", children: "Diagnostic details" }),
            /* @__PURE__ */ jsxs("code", { className: "mt-2 block overflow-x-auto rounded-[var(--radius-sm)] border bg-background px-2 py-1 font-mono text-xs text-muted-foreground", children: [
              errorIdLabel,
              ": ",
              resolvedErrorId,
              error?.code ? ` (${error.code})` : ""
            ] })
          ] }) : null,
          resolvedAction ? /* @__PURE__ */ jsx("div", { className: "mt-4 flex flex-wrap gap-2", children: resolvedLink ? /* @__PURE__ */ jsx(
            ButtonLink,
            {
              href: resolvedLink,
              size: "sm",
              variant: "outline",
              ...getActionTarget(resolvedLink),
              children: resolvedAction
            }
          ) : /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              size: "sm",
              variant: "outline",
              loading: actionLoading,
              onClick: onAction,
              children: resolvedAction
            }
          ) }) : null
        ] })
      ]
    }
  );
};
ErrorSurface.displayName = "Error";
function ErrorState({
  title = "Couldn\u2019t Load Resource",
  message,
  onRetry,
  errorId
}) {
  const stableIdProps = errorId === void 0 ? {} : { errorId };
  return /* @__PURE__ */ jsx("div", { className: "px-4 py-6", children: onRetry ? /* @__PURE__ */ jsx(ErrorSurface, { title, action: "Try Again", onAction: onRetry, ...stableIdProps, children: message }) : /* @__PURE__ */ jsx(ErrorSurface, { title, ...stableIdProps, children: message }) });
}
function FullPageStatus({
  code,
  title,
  description,
  primaryAction,
  secondaryAction,
  meta,
  variant = "viewport"
}) {
  const isSection = variant === "section";
  const Wrapper = isSection ? "section" : "main";
  const wrapperClass = isSection ? "flex min-h-[60vh] items-center justify-center px-6 py-12 text-neutral-12" : "flex min-h-[100dvh] items-center justify-center bg-neutral-1 px-6 text-neutral-12";
  return /* @__PURE__ */ jsx(Wrapper, { role: isSection ? "alert" : "main", className: wrapperClass, children: /* @__PURE__ */ jsxs("div", { className: "w-full max-w-[480px]", children: [
    /* @__PURE__ */ jsx("div", { className: "mb-4 font-mono text-xs font-medium uppercase tracking-[0.08em] text-neutral-9", children: code }),
    /* @__PURE__ */ jsx("h1", { className: "mb-3 text-[clamp(28px,5vw,36px)] font-semibold leading-[1.15] tracking-[-0.02em]", children: title }),
    /* @__PURE__ */ jsx("p", { className: "mb-8 max-w-[52ch] text-base leading-[1.6] text-neutral-11", children: description }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-3", children: [
      /* @__PURE__ */ jsx(ActionButton, { action: primaryAction, variant: "primary" }),
      secondaryAction && /* @__PURE__ */ jsx(ActionButton, { action: secondaryAction, variant: "secondary" })
    ] }),
    meta && (meta.errorId || meta.statusUrl) && /* @__PURE__ */ jsxs("div", { className: "mt-10 flex flex-wrap justify-between gap-4 border-t border-neutral-6 pt-5 font-mono text-xs text-neutral-10", children: [
      meta.errorId && /* @__PURE__ */ jsxs("span", { children: [
        "Error ID: ",
        meta.errorId
      ] }),
      meta.statusUrl && /* @__PURE__ */ jsxs(
        "a",
        {
          href: `https://${meta.statusUrl}`,
          className: "text-neutral-10 hover:text-neutral-12",
          rel: "noreferrer",
          children: [
            meta.statusUrl,
            " \u2192"
          ]
        }
      )
    ] })
  ] }) });
}
function ActionButton({
  action,
  variant
}) {
  const buttonVariant = variant === "primary" ? "ink" : "outline";
  if (action.href) {
    return /* @__PURE__ */ jsx(Button, { asChild: true, variant: buttonVariant, children: /* @__PURE__ */ jsx(Link, { href: action.href, children: action.label }) });
  }
  return /* @__PURE__ */ jsx(Button, { type: "button", onClick: action.onClick, variant: buttonVariant, children: action.label });
}
FullPageStatus.Accent = function Accent({ children }) {
  return /* @__PURE__ */ jsx("span", { className: "text-neutral-12", children });
};
var spinnerSize = {
  small: "h-4 w-4 border-2",
  medium: "h-6 w-6 border-2",
  large: "h-8 w-8 border-4"
};
function LoadingState({ message, size = "large" }) {
  return /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center justify-center py-10", children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "inline-block animate-spin rounded-full border-solid border-primary border-r-transparent align-[-0.125em]",
          spinnerSize[size]
        ),
        role: "status",
        "aria-label": message ?? "Loading"
      }
    ),
    message && /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm text-muted-foreground", children: message })
  ] });
}
function PageHeader({ title, description, actions, className }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col gap-1 pb-6 sm:flex-row sm:items-start sm:justify-between",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx("h1", { className: "text-2xl font-semibold tracking-tight text-foreground", children: title }),
          description && /* @__PURE__ */ jsx("p", { className: "mt-1 text-sm text-muted-foreground", children: description })
        ] }),
        actions && /* @__PURE__ */ jsx("div", { className: "mt-2 flex shrink-0 gap-2 sm:mt-0", children: actions })
      ]
    }
  );
}
function Section({ children, label, className }) {
  return /* @__PURE__ */ jsx("section", { "aria-label": label, className: cn("py-8", className), children });
}

export { AppShell, Card, Container, DesignSystemProvider, EmptyState2 as EmptyState, ErrorState, FullPageStatus, LoadingState, PageHeader, Section };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map