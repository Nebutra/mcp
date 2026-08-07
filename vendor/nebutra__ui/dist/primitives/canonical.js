"use client";
import { Accordion as Accordion$1 } from '@base-ui/react/accordion';
import { ChevronUpDown, Check, ChevronRight, ChevronDown, MagnifyingGlass, Plus, Cross, MoreHorizontal, Status, Copy, Information, Warning, External, LoaderCircle, EyeOff, Eye, Minus, LockClosed, CheckCircle, MoreVertical, DeviceDesktop, Sun, Moon, Hash, Code, Link, FolderOpen, FolderClosed, File, ChevronLeft, ChevronUp, FileText } from '@nebutra/icons';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { cva } from 'class-variance-authority';
import { AlertDialog as AlertDialog$1 } from '@base-ui/react/alert-dialog';
import * as React24 from 'react';
import React24__default, { createContext, useId, useRef, useState, useMemo, use, useCallback, useEffect, Children, isValidElement, cloneElement } from 'react';
import { colors, brandSpring, flow, emerge } from '@nebutra/brand';
export { brandSpring } from '@nebutra/brand';
import { useReducedMotion, LazyMotion, domAnimation, AnimatePresence, motion, m } from 'framer-motion';
import { Avatar as Avatar$1 } from '@base-ui/react/avatar';
import { Prism } from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/esm/styles/prism';
import { SiYaml, SiYamlHex, SiVuedotjs, SiVuedotjsHex, SiTypescript, SiTypescriptHex, SiSwift, SiSwiftHex, SiSvelte, SiSvelteHex, SiSass, SiSassHex, SiRust, SiRustHex, SiRuby, SiRubyHex, SiReact, SiReactHex, SiPython, SiPythonHex, SiPhp, SiPhpHex, SiNodedotjs, SiNodedotjsHex, SiMarkdown, SiMarkdownHex, SiKotlin, SiKotlinHex, SiJavascript, SiJavascriptHex, SiOpenjdk, SiOpenjdkHex, SiHtml5, SiHtml5Hex, SiGraphql, SiGraphqlHex, SiGo, SiGoHex, SiCss, SiCssHex, SiCplusplus, SiCplusplusHex, SiDotnet, SiDotnetHex, SiC, SiCHex, SiBun, SiBunHex, SiGnubash, SiGnubashHex } from '@icons-pack/react-simple-icons';
import { Menu as Menu$1 } from '@base-ui/react/menu';
import { Command as Command$1 } from 'cmdk';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';
import { Popover as Popover$1 } from '@base-ui/react/popover';
import { ContextMenu as ContextMenu$1 } from '@base-ui/react/context-menu';
import { toast, Toaster as Toaster$1 } from 'sonner';
export { toast } from 'sonner';
import { Tooltip as Tooltip$1 } from '@base-ui/react/tooltip';
import { Drawer as Drawer$1 } from 'vaul';
import { FormProvider, Controller, useFormContext } from 'react-hook-form';
import { Input as Input$1 } from '@base-ui/react/input';
import { OTPInput, OTPInputContext } from 'input-otp';
import { Progress as Progress$1 } from '@base-ui/react/progress';
import { useDebounceValue } from 'usehooks-ts';
import { Panel, Group, Separator } from 'react-resizable-panels';
import { Select as Select$1 } from '@base-ui/react/select';
import { Separator as Separator$1 } from '@base-ui/react/separator';
import { Tabs as Tabs$1 } from '@base-ui/react/tabs';
import { useTheme } from '@nebutra/tokens';

// src/primitives/accordion.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}

// src/utils/primitive-props.ts
function asPlainStyle(style) {
  if (style == null || typeof style === "function") return {};
  return style;
}
function withHtmlProps(Component) {
  return Component;
}
var RadixItem = withHtmlProps(Accordion$1.Item);
var RadixHeader = withHtmlProps(Accordion$1.Header);
var RadixTrigger = withHtmlProps(Accordion$1.Trigger);
var RadixContent = withHtmlProps(Accordion$1.Panel);
var Accordion = Accordion$1.Root;
var AccordionItem = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  RadixItem,
  {
    ref,
    className: cn("border-b border-border/70 last:border-b-0", className),
    ...props
  }
);
AccordionItem.displayName = "AccordionItem";
var AccordionTrigger = ({
  className,
  children,
  size = "default",
  ref,
  ...props
}) => /* @__PURE__ */ jsx(RadixHeader, { className: "flex", children: /* @__PURE__ */ jsxs(
  RadixTrigger,
  {
    ref,
    className: cn(
      "font-medium flex flex-1 items-center justify-between transition-[color,box-shadow] duration-flow ease-out hover:text-muted-foreground focus-visible:outline-none [&[data-panel-open]>svg]:rotate-45",
      size === "small" ? "py-2.5 text-sm" : "py-4 text-[15px]",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(
        Plus,
        {
          className: cn(
            "shrink-0 text-muted-foreground transition-transform duration-flow ease-out",
            size === "small" ? "size-3.5" : "size-4"
          )
        }
      )
    ]
  }
) });
AccordionTrigger.displayName = "AccordionTrigger";
var AccordionContent = ({
  className,
  children,
  size = "default",
  keepMounted,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  RadixContent,
  {
    ref,
    ...keepMounted ? { keepMounted: true } : {},
    className: "text-sm leading-relaxed data-[ending-style]:animate-accordion-up data-[open]:animate-accordion-down overflow-hidden text-muted-foreground transition-[height,opacity] duration-flow ease-out",
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: cn(size === "small" ? "pb-2.5 pt-0" : "pb-4 pt-0", className), children })
  }
);
AccordionContent.displayName = "AccordionContent";
var alertVariants = cva("flex items-stretch w-full gap-2 group-[.toaster]:w-(--width)", {
  variants: {
    variant: {
      secondary: "",
      primary: "",
      destructive: "",
      success: "",
      info: "",
      mono: "",
      warning: ""
    },
    icon: {
      primary: "",
      destructive: "",
      success: "",
      info: "",
      warning: ""
    },
    appearance: {
      solid: "",
      outline: "",
      light: "",
      stroke: "text-foreground"
    },
    size: {
      lg: "rounded-[var(--radius-lg)] p-4 gap-3 text-base [&>[data-slot=alert-icon]>svg]:size-6 *:data-slot=alert-icon:mt-0.5 [&_[data-slot=alert-close]]:mt-1",
      md: "rounded-[var(--radius-lg)] p-3.5 gap-2.5 text-sm [&>[data-slot=alert-icon]>svg]:size-5 *:data-slot=alert-icon:mt-0 [&_[data-slot=alert-close]]:mt-0.5",
      sm: "rounded-[var(--radius-md)] px-3 py-2.5 gap-2 text-xs [&>[data-slot=alert-icon]>svg]:size-4 *:data-alert-icon:mt-0.5 [&_[data-slot=alert-close]]:mt-0.25 [&_[data-slot=alert-close]_svg]:size-3.5"
    }
  },
  compoundVariants: [
    /* Solid */
    {
      variant: "secondary",
      appearance: "solid",
      className: "bg-muted text-foreground"
    },
    {
      variant: "primary",
      appearance: "solid",
      className: "bg-primary text-primary-foreground"
    },
    {
      variant: "destructive",
      appearance: "solid",
      className: "bg-destructive text-destructive-foreground"
    },
    {
      variant: "success",
      appearance: "solid",
      className: "bg-[var(--color-success, var(--color-green-500))] text-[var(--color-success-foreground, var(--color-white))]"
    },
    {
      variant: "info",
      appearance: "solid",
      className: "bg-[var(--color-info, var(--color-violet-600))] text-[var(--color-info-foreground, var(--color-white))]"
    },
    {
      variant: "warning",
      appearance: "solid",
      className: "bg-[var(--color-warning, var(--color-yellow-500))] text-[var(--color-warning-foreground, var(--color-white))]"
    },
    {
      variant: "mono",
      appearance: "solid",
      className: "bg-muted text-muted-foreground dark:bg-muted dark:text-foreground *:data-slot-[alert=close]:text-muted-foreground"
    },
    {
      variant: "secondary",
      appearance: "outline",
      className: "border border-border bg-background text-foreground [&_[data-slot=alert-close]]:text-foreground"
    },
    {
      variant: "primary",
      appearance: "outline",
      className: "border border-border bg-background text-primary [&_[data-slot=alert-close]]:text-foreground"
    },
    {
      variant: "destructive",
      appearance: "outline",
      className: "border border-border bg-background text-destructive [&_[data-slot=alert-close]]:text-foreground"
    },
    {
      variant: "success",
      appearance: "outline",
      className: "border border-border bg-background text-[var(--color-success, var(--color-green-500))] [&_[data-slot=alert-close]]:text-foreground"
    },
    {
      variant: "info",
      appearance: "outline",
      className: "border border-border bg-background text-[var(--color-info, var(--color-violet-600))] [&_[data-slot=alert-close]]:text-foreground"
    },
    {
      variant: "warning",
      appearance: "outline",
      className: "border border-border bg-background text-[var(--color-warning, var(--color-yellow-500))] [&_[data-slot=alert-close]]:text-foreground"
    },
    {
      variant: "mono",
      appearance: "outline",
      className: "border border-border bg-background text-foreground [&_[data-slot=alert-close]]:text-foreground"
    },
    {
      variant: "secondary",
      appearance: "light",
      className: "bg-muted border border-border text-foreground"
    },
    {
      variant: "primary",
      appearance: "light",
      className: "bg-[hsl(var(--primary)/0.1)] border border-[hsl(var(--primary)/0.25)] text-foreground [&_[data-slot=alert-icon]]:text-[hsl(var(--primary))]"
    },
    {
      variant: "destructive",
      appearance: "light",
      className: "bg-[hsl(var(--destructive)/0.1)] border border-[hsl(var(--destructive)/0.25)] text-foreground [&_[data-slot=alert-icon]]:text-[hsl(var(--destructive))]"
    },
    {
      variant: "success",
      appearance: "light",
      className: "bg-[hsl(var(--success)/0.1)] border border-[hsl(var(--success)/0.25)] text-foreground [&_[data-slot=alert-icon]]:text-[hsl(var(--success))]"
    },
    {
      variant: "info",
      appearance: "light",
      className: "bg-[hsl(var(--info)/0.1)] border border-[hsl(var(--info)/0.25)] text-foreground [&_[data-slot=alert-icon]]:text-[hsl(var(--info))]"
    },
    {
      variant: "warning",
      appearance: "light",
      className: "bg-[hsl(var(--warning)/0.1)] border border-[hsl(var(--warning)/0.25)] text-foreground [&_[data-slot=alert-icon]]:text-[hsl(var(--warning))]"
    },
    {
      variant: "mono",
      icon: "primary",
      className: "[&_[data-slot=alert-icon]]:text-primary"
    },
    {
      variant: "mono",
      icon: "warning",
      className: "[&_[data-slot=alert-icon]]:text-[var(--color-warning, var(--color-yellow-600))]"
    },
    {
      variant: "mono",
      icon: "success",
      className: "[&_[data-slot=alert-icon]]:text-[var(--color-success, var(--color-green-600))]"
    },
    {
      variant: "mono",
      icon: "destructive",
      className: "[&_[data-slot=alert-icon]]:text-destructive"
    },
    {
      variant: "mono",
      icon: "info",
      className: "[&_[data-slot=alert-icon]]:text-[var(--color-info, var(--color-violet-600))]"
    }
  ],
  defaultVariants: {
    variant: "secondary",
    appearance: "solid",
    size: "md"
  }
});
function Alert({
  className,
  variant,
  size,
  icon,
  appearance,
  close = false,
  onClose,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant, size, icon, appearance }), className),
      ...props,
      children: [
        children,
        close && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            onClick: onClose,
            "aria-label": "Dismiss",
            "data-slot": "alert-close",
            className: cn(
              "group shrink-0 size-4 inline-flex items-center justify-center rounded-[var(--radius-sm)]",
              "opacity-70 hover:opacity-100 transition-opacity",
              "focus-visible:outline-none"
            ),
            children: /* @__PURE__ */ jsx(Cross, { className: "size-4" })
          }
        )
      ]
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "alert-title", className: cn("grow tracking-tight", className), ...props });
}
function AlertIcon({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "alert-icon", className: cn("shrink-0", className), ...props, children });
}
function AlertToolbar({ children, className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "alert-toolbar", className: cn(className), ...props, children });
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-description",
      className: cn("text-sm [&_p]:leading-relaxed [&_p]:mb-2", className),
      ...props
    }
  );
}
function AlertContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-content",
      className: cn("space-y-2 [&_[data-slot=alert-title]]:font-semibold", className),
      ...props
    }
  );
}
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
  20: 80,
  24: 96
};
var primitiveSizing = {
  xs: 20,
  /** Geist button-specific size (24px). Larger than xs by design. */
  tiny: 24,
  sm: 32,
  md: 40,
  lg: 48,
  "2xl": 80
};
var primitiveRadius = {
  sm: 4,
  md: 6,
  // Geist default — slightly more rounded than 4px
  lg: 8,
  xl: 12,
  "2xl": 16,
  full: 9999
};
var primitiveFontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20};
var primitiveFontWeight = {
  normal: 400,
  medium: 500,
  semibold: 600};
var primitiveShadow = {
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)"};
var primitiveTransition = {
  duration: {
    micro: 100,
    // hover, focus, small state changes
    flow: 200,
    // standard state transitions (default)
    reveal: 300,
    // larger motion (accordion, modal, drawer)
    cinematic: 500
    // hero entrance, big delight moments
  },
  easing: {
    default: "ease-out",
    inOut: "cubic-bezier(0.4, 0, 0.2, 1)"
  }
};
var primitiveFocusRing = {
  width: 2,
  // px
  offset: 2
  // px — gap between element and ring
};

// src/tokens/shadows.ts
var shadowClasses = {
  md: "shadow-md",
  xl: "shadow-xl",
  "2xl": "shadow-2xl"};

// src/tokens/components/overlay.ts
var overlayFocusRingClassName = "outline-none";
var overlayZIndex = {
  backdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
};
var overlayTokens = {
  motion: {
    duration: primitiveTransition.duration.flow,
    easing: primitiveTransition.easing.default,
    hoverOpenDelay: primitiveTransition.duration.flow,
    hoverCloseDelay: primitiveTransition.duration.micro
  }};
var overlayClassNames = {
  focusRing: overlayFocusRingClassName,
  backdrop: "fixed inset-0 bg-black/40 backdrop-blur-sm transition-[opacity,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)] data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none",
  modalSurface: [
    "fixed left-1/2 top-1/2 grid w-full max-w-lg -translate-x-1/2 -translate-y-1/2 gap-4",
    "border border-border/60 bg-background/95 p-6 text-foreground backdrop-blur-xl",
    "rounded-[var(--radius-xl)]",
    shadowClasses["2xl"],
    "outline-none",
    "transition-[opacity,transform,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
    "motion-reduce:transition-none motion-reduce:data-starting-style:transform-none motion-reduce:data-ending-style:transform-none"
  ].join(" "),
  menuSurface: [
    "min-w-32 overflow-hidden rounded-[var(--radius-lg)] border border-border/70 bg-popover/95 p-1 text-popover-foreground backdrop-blur-md",
    shadowClasses.xl,
    "outline-none transition-[opacity,transform,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
    "motion-reduce:transition-none motion-reduce:data-[starting-style]:transform-none motion-reduce:data-[ending-style]:transform-none"
  ].join(" "),
  selectSurface: [
    "max-h-[var(--select-content-max-height)] min-w-[var(--select-content-min-width)] overflow-hidden",
    "rounded-[var(--select-content-radius)] border border-border/70 bg-popover/95 text-popover-foreground backdrop-blur-md",
    "shadow-[var(--select-content-shadow)] outline-none",
    "transition-[opacity,transform,display] duration-[var(--select-duration)] ease-[var(--select-easing)]",
    "data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
    "motion-reduce:transition-none motion-reduce:data-starting-style:transform-none motion-reduce:data-ending-style:transform-none"
  ].join(" "),
  navigationMenuSurface: [
    "min-w-32 overflow-hidden rounded-[var(--radius-xl)] border border-border/70 bg-popover/95 text-popover-foreground backdrop-blur-md",
    shadowClasses.xl,
    "outline-none transition-[opacity,transform,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
    "motion-reduce:transition-none motion-reduce:data-[starting-style]:transform-none motion-reduce:data-[ending-style]:transform-none"
  ].join(" "),
  popoverSurface: [
    "w-72 rounded-[var(--radius-lg)] border border-border/70 bg-popover/95 p-4 text-popover-foreground backdrop-blur-md",
    shadowClasses.xl,
    "outline-none transition-[opacity,transform,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-[open]:opacity-100 data-[closed]:opacity-0 data-[closed]:scale-95 data-[open]:scale-100",
    "motion-reduce:transition-none motion-reduce:data-[closed]:transform-none motion-reduce:data-[open]:transform-none"
  ].join(" "),
  tooltipSurface: [
    "overflow-hidden rounded-[var(--radius-md)] border border-border/70 bg-popover/95 px-3 py-1.5 text-sm text-popover-foreground backdrop-blur-md",
    shadowClasses.md,
    "transition-[opacity,transform,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
    "motion-reduce:transition-none motion-reduce:data-starting-style:transform-none motion-reduce:data-ending-style:transform-none"
  ].join(" "),
  sheetBackdrop: [
    "fixed inset-0 bg-[var(--sheet-overlay-background)] backdrop-blur-[var(--sheet-overlay-blur)]",
    "transition-[opacity,backdrop-filter,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none"
  ].join(" "),
  sheetSurface: [
    "fixed flex flex-col overflow-hidden border border-border bg-[var(--sheet-background)] text-foreground shadow-[var(--sheet-shadow)]",
    "outline-none transition-[opacity,transform,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-ending-style:opacity-0 data-starting-style:opacity-0 motion-reduce:transition-none"
  ].join(" "),
  closeButton: `absolute right-4 top-4 rounded-[var(--radius-sm)] opacity-70 ring-offset-background ${overlayFocusRingClassName} transition-opacity duration-[var(--motion-duration-micro)] ease-[var(--ease-out)] hover:opacity-100 disabled:pointer-events-none data-[open]:bg-accent data-[open]:text-muted-foreground motion-reduce:transition-none`
};
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
var AlertDialog = AlertDialog$1.Root;
var AlertDialogPortal = AlertDialog$1.Portal;
var AlertDialogTrigger = ({
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React24.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      AlertDialog$1.Trigger,
      {
        ref,
        ...props,
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(AlertDialog$1.Trigger, { ref, ...props, children });
};
AlertDialogTrigger.displayName = "AlertDialogTrigger";
var AlertDialogOverlay = ({
  className,
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  AlertDialog$1.Backdrop,
  {
    ref,
    className: cn(overlayClassNames.backdrop, className),
    style: { zIndex: overlayZIndex.backdrop, ...style },
    ...props
  }
);
AlertDialogOverlay.displayName = "AlertDialogOverlay";
var AlertDialogContent = ({
  className,
  children,
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(AlertDialogPortal, { children: [
  /* @__PURE__ */ jsx(AlertDialogOverlay, {}),
  /* @__PURE__ */ jsx(
    AlertDialog$1.Popup,
    {
      ref,
      className: cn(overlayClassNames.modalSurface, className),
      style: { zIndex: overlayZIndex.modal, ...style },
      ...props,
      children
    }
  )
] });
AlertDialogContent.displayName = "AlertDialogContent";
var AlertDialogHeader = ({ className, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("flex flex-col space-y-2 text-center sm:text-left", className), ...props });
AlertDialogHeader.displayName = "AlertDialogHeader";
var AlertDialogFooter = ({ className, ...props }) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
AlertDialogFooter.displayName = "AlertDialogFooter";
var AlertDialogTitle = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(AlertDialog$1.Title, { ref, className: cn("text-lg font-semibold", className), ...props });
AlertDialogTitle.displayName = "AlertDialogTitle";
var AlertDialogDescription = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  AlertDialog$1.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
);
AlertDialogDescription.displayName = "AlertDialogDescription";
var AlertDialogAction = ({
  className,
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React24.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      AlertDialog$1.Close,
      {
        ref,
        ...props,
        className: cn(className),
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(AlertDialog$1.Close, { ref, className: cn(buttonVariants(), className), ...props, children });
};
AlertDialogAction.displayName = "AlertDialogAction";
var AlertDialogCancel = ({
  className,
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React24.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      AlertDialog$1.Close,
      {
        ref,
        ...props,
        className: cn(className),
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    AlertDialog$1.Close,
    {
      ref,
      className: cn(buttonVariants({ variant: "outline" }), "mt-2 sm:mt-0", className),
      ...props,
      children
    }
  );
};
AlertDialogCancel.displayName = "AlertDialogCancel";

// src/tokens/motion.ts
var motionDurations = {
  /** 200ms — state flow (modal, dropdown, tab — default) */
  flow: 200,
  /** 300ms — content unveil (slide, expand, accordion, drawer) */
  reveal: 300,
  /** 500ms — hero-grade cinematic (landing entrance, big delight) */
  cinematic: 500
};
var easings = {
  easeOut: [0, 0, 0.2, 1],
  easeInOut: [0.4, 0, 0.2, 1]};
var motionVariants = {
  fadeInUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 10 }
  },
  scaleIn: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 }
  }};
var staggerContainers = {
  fast: {
    initial: {},
    animate: { transition: { staggerChildren: 0.05, delayChildren: 0.1 } }
  },
  normal: {
    initial: {},
    animate: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
  },
  slow: {
    initial: {},
    animate: { transition: { staggerChildren: 0.15, delayChildren: 0.3 } }
  }
};
var viewportSettings = {
  once: { once: true, margin: "-100px" }};
var fadeInVariant = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};
var PRESETS = {
  /** 涌现 — materialize from the cloud (default) */
  emerge: {
    initial: emerge.initial,
    animate: emerge.animate,
    exit: emerge.exit,
    transition: emerge.transition
  },
  /** 流动 — stream horizontally */
  flow: {
    initial: flow.initial,
    animate: flow.animate,
    exit: flow.exit,
    transition: flow.transition
  },
  /** Simple fade */
  fade: fadeInVariant,
  /** Fade + rise */
  fadeUp: motionVariants.fadeInUp,
  /** Scale in */
  scale: motionVariants.scaleIn,
  /**
   * Keyed content swap — short, symmetric, blur-softened. Rises in, sinks out.
   * Shorter and shallower than `emerge` on purpose: a swap replaces content the
   * reader is already looking at, so it must resolve inside the reveal rail.
   * Pair with `AnimateSwap`.
   */
  swap: {
    initial: { opacity: 0, y: 10, filter: "blur(4px)" },
    animate: { opacity: 1, y: 0, filter: "blur(0px)" },
    exit: { opacity: 0, y: -10, filter: "blur(4px)" },
    transition: { duration: motionDurations.reveal / 1e3 }
  },
  /** Off-canvas panel entering from the right edge (drawer, sheet). */
  slideFromRight: {
    initial: { x: "100%" },
    animate: { x: 0 },
    exit: { x: "100%" },
    transition: brandSpring.default
  },
  /** Off-canvas panel entering from the left edge. */
  slideFromLeft: {
    initial: { x: "-100%" },
    animate: { x: 0 },
    exit: { x: "-100%" },
    transition: brandSpring.default
  },
  /** Off-canvas panel entering from the top edge (banner, command bar). */
  slideFromTop: {
    initial: { y: "-100%" },
    animate: { y: 0 },
    exit: { y: "-100%" },
    transition: brandSpring.default
  },
  /** Off-canvas panel entering from the bottom edge (mobile action sheet). */
  slideFromBottom: {
    initial: { y: "100%" },
    animate: { y: 0 },
    exit: { y: "100%" },
    transition: brandSpring.default
  }
};
function MotionDiv(props) {
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsx(m.div, { ...props }) });
}
function AnimateIn(props) {
  const {
    children,
    preset = "emerge",
    delay = 0,
    duration,
    inView = false,
    className,
    ...rest
  } = props;
  const shouldReduce = useReducedMotion();
  const base = PRESETS[preset] || PRESETS.emerge;
  const initial = shouldReduce ? { opacity: 0 } : base.initial;
  const animate2 = shouldReduce ? { opacity: 1 } : base.animate;
  const exit = shouldReduce ? { opacity: 0 } : "exit" in base ? base.exit : void 0;
  const transition = {
    ...shouldReduce ? { duration: 0.15 } : base.transition,
    delay,
    ...duration ? { duration } : {}
  };
  if (inView) {
    return /* @__PURE__ */ jsx(
      MotionDiv,
      {
        ...rest,
        className,
        initial,
        whileInView: animate2,
        ...exit && { exit },
        transition,
        viewport: viewportSettings.once,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(
    MotionDiv,
    {
      ...rest,
      className,
      initial,
      animate: animate2,
      ...exit && { exit },
      transition,
      children
    }
  );
}
function AnimateSwap(props) {
  const { swapKey, ...animateInProps } = props;
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsx(AnimateIn, { ...animateInProps }, swapKey) }) });
}
function AnimateInGroup(props) {
  const { children, stagger = "normal", inView = false, className } = props;
  const shouldReduce = useReducedMotion();
  const container = staggerContainers[stagger];
  if (shouldReduce) {
    return /* @__PURE__ */ jsx("div", { className, children });
  }
  if (inView) {
    return /* @__PURE__ */ jsx(
      MotionDiv,
      {
        className,
        initial: "initial",
        whileInView: "animate",
        viewport: viewportSettings.once,
        variants: container,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(MotionDiv, { className, initial: "initial", animate: "animate", variants: container, children });
}
var AspectRatio = ({
  ratio = 1,
  className,
  style,
  children,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("relative w-full", className),
    style: { aspectRatio: `${ratio}`, ...style },
    ...props,
    children
  }
);
AspectRatio.displayName = "AspectRatio";

// src/tokens/components/avatar.ts
var avatarTokens = {
  size: {
    xs: {
      dimension: 20,
      fontSize: 8,
      iconSize: 10,
      ringWidth: 1
    },
    sm: {
      dimension: 32,
      fontSize: primitiveFontSize.xs,
      // 12px
      iconSize: 14,
      ringWidth: 2
    },
    md: {
      dimension: 40,
      fontSize: primitiveFontSize.sm,
      // 14px
      iconSize: 16,
      ringWidth: 2
    },
    lg: {
      dimension: 56,
      fontSize: primitiveFontSize.xl,
      // 20px
      iconSize: 24,
      ringWidth: 2
    },
    xl: {
      dimension: 80,
      fontSize: 28,
      iconSize: 32,
      ringWidth: 3
    }
  }};
var sizeClasses = {
  xs: { root: "h-5 w-5", fallback: "text-[8px]" },
  sm: { root: "h-8 w-8", fallback: "text-xs" },
  md: { root: "h-10 w-10", fallback: "text-sm" },
  lg: { root: "h-14 w-14", fallback: "text-xl" },
  xl: { root: "h-20 w-20", fallback: "text-2xl" }
};
var numericAvatarClass = "h-[var(--avatar-size)] w-[var(--avatar-size)]";
var AvatarContext = React24.createContext(null);
function isPresetSize(size) {
  return typeof size === "string";
}
function getAvatarSizePx(size) {
  if (typeof size === "number") return size;
  return avatarTokens.size[size].dimension;
}
function getAvatarRootClass(size) {
  return isPresetSize(size) ? sizeClasses[size].root : numericAvatarClass;
}
function getAvatarFallbackClass(size) {
  return isPresetSize(size) ? sizeClasses[size].fallback : "text-[var(--avatar-font-size)]";
}
function getAvatarStyle(size, style) {
  if (typeof size !== "number") return style;
  const numericVars = {
    "--avatar-size": `${size}px`,
    "--avatar-font-size": `${Math.max(10, Math.round(size * 0.375))}px`
  };
  if (typeof style === "function") {
    return (state) => ({
      ...numericVars,
      ...style(state)
    });
  }
  return {
    ...numericVars,
    ...style
  };
}
function getAvatarInitials(value) {
  const cleaned = value.trim();
  if (!cleaned) return "";
  const parts = cleaned.split(/[\s._-]+/).filter(Boolean);
  if (parts.length === 1) return (parts[0] ?? "").slice(0, 2).toUpperCase();
  return parts.slice(0, 2).map((part) => part[0] ?? "").join("").toUpperCase();
}
function githubAvatarSrc(username, size) {
  return `https://github.com/${username}.png?size=${getAvatarSizePx(size) * 2}`;
}
function normalizeAvatarLabel({
  alt,
  title,
  username
}) {
  return title ?? alt ?? username ?? "Avatar";
}
var Avatar = ({
  className,
  size = "md",
  src,
  alt,
  title,
  letter,
  username,
  placeholder,
  fallbackDelayMs,
  children,
  style,
  ref,
  ...props
}) => {
  const label = normalizeAvatarLabel({ alt, title, username });
  const fallback = letter ?? getAvatarInitials(title ?? username ?? alt ?? "");
  const contextTitle = title ?? alt ?? username;
  const contextValue = contextTitle === void 0 ? { size } : { size, title: contextTitle };
  const shouldRenderConvenienceContent = children === void 0 && (src !== void 0 || placeholder === true || fallback.length > 0);
  return /* @__PURE__ */ jsx(AvatarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    Avatar$1.Root,
    {
      ref,
      className: cn(
        "relative flex shrink-0 overflow-hidden rounded-full bg-muted",
        getAvatarRootClass(size),
        className
      ),
      style: getAvatarStyle(size, style),
      ...props,
      children: shouldRenderConvenienceContent ? /* @__PURE__ */ jsxs(Fragment, { children: [
        src && /* @__PURE__ */ jsx(AvatarImage, { src, alt: label }),
        /* @__PURE__ */ jsx(AvatarFallback, { size, delay: fallbackDelayMs, children: placeholder ? /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Loading avatar" }) : fallback })
      ] }) : children
    }
  ) });
};
Avatar.displayName = "Avatar";
var AvatarImage = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Avatar$1.Image,
  {
    ref,
    className: cn("aspect-square h-full w-full object-cover", className),
    ...props
  }
);
AvatarImage.displayName = "AvatarImage";
var AvatarFallback = ({
  className,
  size,
  children,
  "aria-label": ariaLabel,
  style,
  ref,
  ...props
}) => {
  const context = React24.use(AvatarContext);
  const resolvedSize = size ?? context?.size ?? "md";
  const fallbackLabel = ariaLabel ?? (typeof children === "string" && children.trim().length > 0 ? `Avatar with initials: ${children}` : context?.title);
  return /* @__PURE__ */ jsx(
    Avatar$1.Fallback,
    {
      ref,
      "aria-label": fallbackLabel,
      className: cn(
        "flex h-full w-full items-center justify-center rounded-full bg-muted font-medium text-muted-foreground",
        getAvatarFallbackClass(resolvedSize),
        className
      ),
      style: getAvatarStyle(resolvedSize, style),
      ...props,
      children
    }
  );
};
AvatarFallback.displayName = "AvatarFallback";
function normalizeGroupItem(item, size) {
  const label = normalizeAvatarLabel({
    alt: item.alt,
    title: item.title,
    username: item.username
  });
  return {
    alt: label,
    title: item.title ?? label,
    fallback: item.fallback ?? getAvatarInitials(label),
    username: item.username ?? "",
    src: item.src ?? (item.username ? githubAvatarSrc(item.username, size) : "")
  };
}
function AvatarGroup({
  items,
  members,
  max,
  limit,
  size = "sm",
  className,
  "aria-label": ariaLabel
}) {
  const sourceItems = items ?? members ?? [];
  const resolvedMax = Math.max(1, max ?? limit ?? 4);
  const normalizedItems = sourceItems.map((item) => normalizeGroupItem(item, size));
  const Z = ["z-10", "z-20", "z-30", "z-40", "z-50", "z-60"];
  const visibleCount = normalizedItems.length >= resolvedMax ? resolvedMax - 1 : normalizedItems.length;
  const visible = normalizedItems.slice(0, visibleCount);
  const lastItem = normalizedItems.length === resolvedMax ? normalizedItems[resolvedMax - 1] : null;
  const overflowCount = normalizedItems.length > resolvedMax ? normalizedItems.length - resolvedMax + 1 : 0;
  const lastZ = Z[Math.min(resolvedMax - 1, Z.length - 1)];
  const groupLabel = ariaLabel ?? `${normalizedItems.length} ${normalizedItems.length === 1 ? "member" : "members"}`;
  return /* @__PURE__ */ jsxs("div", { role: "img", "aria-label": groupLabel, className: cn("flex items-center", className), children: [
    visible.map((item, index) => (
      // relative is required for z-index to take effect on non-flex-item contexts
      /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": "true",
          className: cn("relative inline-flex items-center", index !== 0 && "-ml-2", Z[index]),
          children: /* @__PURE__ */ jsxs(Avatar, { size, className: "border border-border bg-background", children: [
            item.src && /* @__PURE__ */ jsx(AvatarImage, { src: item.src, alt: "" }),
            /* @__PURE__ */ jsx(AvatarFallback, { size, children: item.fallback })
          ] })
        },
        item.alt
      )
    )),
    lastItem && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: cn("relative inline-flex items-center -ml-2", lastZ), children: /* @__PURE__ */ jsxs(Avatar, { size, className: "border border-border bg-background", children: [
      lastItem.src && /* @__PURE__ */ jsx(AvatarImage, { src: lastItem.src, alt: "" }),
      /* @__PURE__ */ jsx(AvatarFallback, { size, children: lastItem.fallback })
    ] }) }),
    overflowCount > 0 && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: cn("relative inline-flex items-center -ml-2", lastZ), children: /* @__PURE__ */ jsx(Avatar, { size, className: "border border-border", children: /* @__PURE__ */ jsxs(
      AvatarFallback,
      {
        size,
        className: "bg-muted text-[0.625rem] font-semibold leading-none text-foreground",
        children: [
          "+",
          overflowCount
        ]
      }
    ) }) })
  ] });
}
var badgeVariants = cva(
  "inline-flex justify-center items-center align-middle shrink-0 rounded-full font-sans font-medium whitespace-nowrap tabular-nums transition-colors focus-visible:outline-none border border-transparent",
  {
    variants: {
      variant: {
        // ─── Semantic / brand variants ────────────────────────────────────────
        // Recipe-driven default (solid | outline | … via --badge-default-*)
        default: "badge-brand-default border",
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        outline: "border-border text-foreground",
        success: "border-transparent bg-success text-success-foreground hover:bg-success/80",
        warning: "border-transparent bg-warning text-warning-foreground hover:bg-warning/80",
        info: "border-transparent bg-info text-info-foreground hover:bg-info/80",
        error: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
        // ─── Palette accents (decorative scale — not product chrome CTAs) ────
        gray: "bg-muted text-muted-foreground fill-current",
        "gray-subtle": "bg-muted/60 text-muted-foreground fill-current border-transparent",
        blue: "bg-primary text-primary-foreground fill-current",
        "blue-subtle": "bg-primary/10 text-primary fill-current border-transparent",
        purple: "bg-secondary text-secondary-foreground fill-current",
        "purple-subtle": "bg-secondary/40 text-secondary-foreground fill-current border-transparent",
        amber: "bg-warning text-warning-foreground fill-current",
        "amber-subtle": (
          // --warning is a FILL (2.13:1). As ink on its own tint it measured 1.91:1.
          // --warning-strong is the AA-safe amber foreground: 5.01:1 light / 6.20:1 dark.
          "bg-warning/10 text-[hsl(var(--warning-strong))] fill-current border-transparent"
        ),
        red: "bg-destructive text-destructive-foreground fill-current",
        "red-subtle": (
          // --destructive is fill-only in dark (2.01:1 as ink on its own tint).
          // --destructive-strong: 4.58:1 light / 4.97:1 dark.
          "bg-destructive/10 text-[hsl(var(--destructive-strong))] fill-current border-transparent"
        ),
        pink: "bg-accent text-accent-foreground fill-current",
        "pink-subtle": "bg-accent/40 text-accent-foreground fill-current border-transparent",
        green: "bg-success text-success-foreground fill-current",
        "green-subtle": (
          // --success-strong closes the 4.49:1 light gap: 4.99:1 light / 4.83:1 dark.
          "bg-success/10 text-[hsl(var(--success-strong))] fill-current border-transparent"
        ),
        teal: "bg-info text-info-foreground fill-current",
        "teal-subtle": "bg-info/10 text-info fill-current border-transparent",
        inverted: "bg-foreground text-background fill-current",
        // Special visual treatments (intentional product design, not brand hex)
        trial: "bg-gradient-to-br from-trial-start to-trial-end text-primary-foreground fill-current",
        turbo: "bg-gradient-to-br from-turbo-start to-turbo-end text-primary-foreground fill-current",
        pill: "bg-background text-foreground fill-foreground border-border hover:bg-muted/50 focus-visible:bg-muted/50",
        beta: "border-transparent bg-muted text-muted-foreground",
        new: "border-transparent bg-primary/10 text-primary",
        owner: "border-border bg-transparent text-foreground",
        featured: "badge-brand-default border [text-shadow:0_0_1px_hsl(var(--background)/0.2)]",
        "coming-soon": "border-transparent bg-muted/60 text-muted-foreground italic"
      },
      size: {
        sm: "text-[11px] h-5 px-1.5 tracking-[0.2px] gap-[3px] [&_svg]:h-[11px] [&_svg]:w-[11px]",
        md: "text-[12px] h-6 px-2.5 tracking-normal gap-1 [&_svg]:h-[14px] [&_svg]:w-[14px]",
        lg: "text-[14px] h-8 px-3 tracking-normal gap-1.5 [&_svg]:h-[16px] [&_svg]:w-[16px]"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "md"
    }
  }
);
var dotColorMap = {
  success: "bg-success-foreground",
  warning: "bg-warning-foreground",
  info: "bg-info-foreground",
  error: "bg-destructive-foreground",
  destructive: "bg-destructive-foreground",
  "gray-subtle": "bg-muted-foreground",
  "green-subtle": "bg-success",
  "amber-subtle": "bg-warning",
  "red-subtle": "bg-destructive",
  "blue-subtle": "bg-primary",
  "purple-subtle": "bg-secondary-foreground",
  "pink-subtle": "bg-accent-foreground",
  "teal-subtle": "bg-info",
  default: "bg-brand-mark-foreground",
  featured: "bg-brand-mark-foreground",
  secondary: "bg-secondary-foreground",
  outline: "bg-muted-foreground"
};
function Badge({
  className,
  variant = "default",
  size = "md",
  dot,
  icon,
  asChild,
  children,
  ...props
}) {
  const badgeClassName = cn(badgeVariants({ variant, size }), className);
  const renderContent = (label) => /* @__PURE__ */ jsxs(Fragment, { children: [
    dot && /* @__PURE__ */ jsx(
      "span",
      {
        "aria-hidden": "true",
        className: cn(
          "h-1.5 w-1.5 shrink-0 rounded-full",
          dotColorMap[variant ?? "default"] ?? "bg-current"
        )
      }
    ),
    icon && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "shrink-0 flex items-center justify-center", children: icon }),
    label
  ] });
  if (asChild) {
    const childArray = React24.Children.toArray(children);
    const child = childArray.length === 1 ? childArray[0] : null;
    if (React24.isValidElement(child)) {
      const childProps = child.props;
      return React24.cloneElement(child, {
        ...props,
        ...childProps,
        "data-slot": "badge",
        className: cn(badgeClassName, childProps.className),
        style: { ...props.style, ...childProps.style },
        children: renderContent(childProps.children)
      });
    }
  }
  return /* @__PURE__ */ jsx("span", { "data-slot": "badge", className: badgeClassName, ...props, children: renderContent(children) });
}
var Slot = React24.forwardRef(
  ({ children, className, style, ...props }, ref) => {
    const childArray = React24.Children.toArray(children);
    const child = childArray.length === 1 ? childArray[0] : null;
    if (child == null || !React24.isValidElement(child)) {
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
    return React24.cloneElement(
      child,
      merged
    );
  }
);
Slot.displayName = "Slot";
var Breadcrumb = ({
  ref,
  ...props
}) => /* @__PURE__ */ jsx("nav", { ref, "aria-label": "breadcrumb", ...props });
Breadcrumb.displayName = "Breadcrumb";
var BreadcrumbList = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "ol",
  {
    ref,
    className: cn(
      "flex flex-wrap items-center gap-1.5 break-words text-sm text-muted-foreground sm:gap-2.5",
      className
    ),
    ...props
  }
);
BreadcrumbList.displayName = "BreadcrumbList";
var BreadcrumbItem = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("li", { ref, className: cn("inline-flex items-center gap-1.5", className), ...props });
BreadcrumbItem.displayName = "BreadcrumbItem";
var BreadcrumbLink = ({
  asChild,
  className,
  ref,
  ...props
}) => {
  const Comp = asChild ? Slot : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      ref,
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
};
BreadcrumbLink.displayName = "BreadcrumbLink";
var BreadcrumbPage = ({
  className,
  ref,
  ...props
}) => (
  // biome-ignore lint/a11y/useSemanticElements: ARIA pattern
  /* @__PURE__ */ jsx(
    "span",
    {
      ref,
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className),
      ...props
    }
  )
);
BreadcrumbPage.displayName = "BreadcrumbPage";
var BreadcrumbSeparator = ({ children, className, ...props }) => /* @__PURE__ */ jsx(
  "li",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("[&>svg]:size-3.5", className),
    ...props,
    children: children ?? /* @__PURE__ */ jsx(ChevronRight, {})
  }
);
BreadcrumbSeparator.displayName = "BreadcrumbSeparator";
var BreadcrumbEllipsis = ({ className, ...props }) => /* @__PURE__ */ jsxs(
  "span",
  {
    role: "presentation",
    "aria-hidden": "true",
    className: cn("flex h-9 w-9 items-center justify-center", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "More" })
    ]
  }
);
BreadcrumbEllipsis.displayName = "BreadcrumbEllipsis";
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
var Card = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn(
      "rounded-[var(--radius-lg)] border border-border bg-card text-card-foreground shadow-sm",
      className
    ),
    ...props
  }
);
Card.displayName = "Card";
var CardHeader = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props });
CardHeader.displayName = "CardHeader";
var CardTitle = ({
  className,
  children,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "h3",
  {
    ref,
    className: cn("text-2xl font-semibold leading-none tracking-tight", className),
    ...props,
    children
  }
);
CardTitle.displayName = "CardTitle";
var CardDescription = ({
  className,
  as: Tag = "p",
  ref,
  ...props
}) => {
  return React24.createElement(Tag, {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  });
};
CardDescription.displayName = "CardDescription";
var CardContent = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props });
CardContent.displayName = "CardContent";
var CardFooter = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center p-6 pt-0", className), ...props });
CardFooter.displayName = "CardFooter";
var DEFAULT_STROKE_WIDTH = 1.6;
function CheckGlyph({
  size = 16,
  width,
  height,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": "true",
      className: "shrink-0",
      viewBox: "0 0 16 16",
      width: width ?? size,
      height: height ?? size,
      ...props,
      children: /* @__PURE__ */ jsx(
        "path",
        {
          d: "M11.2 5.6L6.8 10L4.8 8",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth
        }
      )
    }
  );
}
function IndeterminateGlyph({
  size = 16,
  width,
  height,
  strokeWidth = DEFAULT_STROKE_WIDTH,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": "true",
      className: "shrink-0",
      viewBox: "0 0 16 16",
      width: width ?? size,
      height: height ?? size,
      ...props,
      children: /* @__PURE__ */ jsx(
        "line",
        {
          x1: "4",
          x2: "12",
          y1: "8",
          y2: "8",
          strokeLinecap: "round",
          strokeLinejoin: "round",
          strokeWidth
        }
      )
    }
  );
}
var getInputClasses = (checked, disabled, indeterminate) => {
  let className = "relative border w-4 h-4 duration-micro rounded inline-flex items-center justify-center";
  if (disabled) {
    if (!checked || indeterminate) {
      className += " bg-geist-gray-100 border-geist-gray-500";
      className += indeterminate ? " stroke-geist-gray-500" : " fill-geist-gray-100 stroke-geist-gray-100";
    } else {
      className += " bg-geist-gray-600 border-geist-gray-600 fill-geist-gray-600 stroke-geist-gray-100";
    }
  } else {
    if (!checked || indeterminate) {
      className += " bg-geist-background-100 border-geist-gray-700 group-hover:bg-geist-gray-200";
      className += indeterminate ? " stroke-geist-gray-700" : " fill-geist-background-100 stroke-geist-background-100 group-hover:stroke-geist-gray-200 group-hover:fill-geist-gray-200";
    } else {
      className += " bg-geist-gray-1000 border-geist-gray-1000 fill-geist-gray-1000 stroke-geist-gray-100";
    }
  }
  return className;
};
var Checkbox = ({
  checked: controlledChecked,
  defaultChecked = false,
  onChange,
  disabled = false,
  indeterminate = false,
  children,
  className,
  id,
  name
}) => {
  const [internalChecked, setInternalChecked] = React24__default.useState(defaultChecked);
  const isControlled = controlledChecked !== void 0;
  const checked = isControlled ? controlledChecked : internalChecked;
  return /* @__PURE__ */ jsxs(
    "label",
    {
      className: cn(
        "flex items-center text-[13px] font-sans group",
        disabled ? "text-geist-gray-500 cursor-not-allowed" : "text-geist-gray-1000 cursor-pointer",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            id,
            name,
            disabled,
            type: "checkbox",
            checked,
            onChange: (e) => {
              if (!indeterminate) {
                if (!isControlled) {
                  setInternalChecked(e.target.checked);
                }
                if (onChange) {
                  onChange(e.target.checked);
                }
              }
            },
            "aria-label": typeof children === "string" ? children : "checkbox",
            className: "sr-only"
          }
        ),
        /* @__PURE__ */ jsx("span", { className: getInputClasses(checked, disabled, indeterminate), children: indeterminate ? /* @__PURE__ */ jsx(IndeterminateGlyph, {}) : /* @__PURE__ */ jsx(CheckGlyph, {}) }),
        children && /* @__PURE__ */ jsx("span", { className: "ml-2", children })
      ]
    }
  );
};
function CheckboxGroup({
  label,
  orientation = "vertical",
  children,
  className
}) {
  return (
    // biome-ignore lint/a11y/useSemanticElements: ARIA pattern
    /* @__PURE__ */ jsxs(
      "div",
      {
        role: "group",
        "aria-label": label,
        className: cn(
          "flex",
          orientation === "vertical" ? "flex-col gap-3" : "flex-row flex-wrap gap-4",
          className
        ),
        children: [
          label && /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: label }),
          children
        ]
      }
    )
  );
}
CheckboxGroup.displayName = "CheckboxGroup";
var LANGUAGE_ALIASES = {
  bash: "bash",
  bun: "bun",
  c: "c",
  "c++": "cpp",
  "c#": "csharp",
  cpp: "cpp",
  cs: "csharp",
  csharp: "csharp",
  cxx: "cpp",
  css: "css",
  go: "go",
  gql: "graphql",
  graphql: "graphql",
  htm: "html",
  html: "html",
  java: "java",
  javascript: "javascript",
  js: "javascript",
  json: "json",
  jsx: "react",
  kotlin: "kotlin",
  kt: "kotlin",
  markdown: "markdown",
  md: "markdown",
  node: "node",
  "node.js": "node",
  nodejs: "node",
  php: "php",
  py: "python",
  python: "python",
  rb: "ruby",
  react: "react",
  rs: "rust",
  ruby: "ruby",
  rust: "rust",
  sass: "sass",
  scss: "sass",
  sh: "bash",
  svelte: "svelte",
  swift: "swift",
  ts: "typescript",
  tsx: "typescript",
  typescript: "typescript",
  vue: "vue",
  yaml: "yaml",
  yml: "yaml",
  zsh: "bash"
};
function JsonBracesIcon({
  className,
  color,
  size: _size,
  title,
  ...svgProps
}) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ...svgProps,
      viewBox: "0 0 24 24",
      className,
      fill: "none",
      stroke: color ?? "currentColor",
      strokeWidth: 2,
      strokeLinecap: "round",
      strokeLinejoin: "round",
      "aria-hidden": "true",
      children: [
        title ? /* @__PURE__ */ jsx("title", { children: title }) : null,
        /* @__PURE__ */ jsx("path", { d: "M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1" }),
        /* @__PURE__ */ jsx("path", { d: "M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1" })
      ]
    }
  );
}
var LANGUAGE_ICON_REGISTRY = {
  bash: { color: SiGnubashHex, icon: SiGnubash, label: "Bash" },
  bun: { color: SiBunHex, icon: SiBun, label: "Bun" },
  c: { color: SiCHex, icon: SiC, label: "C" },
  csharp: { color: SiDotnetHex, icon: SiDotnet, label: "C#" },
  cpp: { color: SiCplusplusHex, icon: SiCplusplus, label: "C++" },
  css: { color: SiCssHex, icon: SiCss, label: "CSS" },
  go: { color: SiGoHex, icon: SiGo, label: "Go" },
  graphql: { color: SiGraphqlHex, icon: SiGraphql, label: "GraphQL" },
  html: { color: SiHtml5Hex, icon: SiHtml5, label: "HTML" },
  java: { color: SiOpenjdkHex, icon: SiOpenjdk, label: "Java" },
  javascript: { color: SiJavascriptHex, icon: SiJavascript, label: "JavaScript" },
  json: { color: "currentColor", icon: JsonBracesIcon, label: "JSON" },
  kotlin: { color: SiKotlinHex, icon: SiKotlin, label: "Kotlin" },
  markdown: { color: SiMarkdownHex, icon: SiMarkdown, label: "Markdown" },
  node: { color: SiNodedotjsHex, icon: SiNodedotjs, label: "Node.js" },
  php: { color: SiPhpHex, icon: SiPhp, label: "PHP" },
  python: { color: SiPythonHex, icon: SiPython, label: "Python" },
  react: { color: SiReactHex, icon: SiReact, label: "React" },
  ruby: { color: SiRubyHex, icon: SiRuby, label: "Ruby" },
  rust: { color: SiRustHex, icon: SiRust, label: "Rust" },
  sass: { color: SiSassHex, icon: SiSass, label: "Sass" },
  svelte: { color: SiSvelteHex, icon: SiSvelte, label: "Svelte" },
  swift: { color: SiSwiftHex, icon: SiSwift, label: "Swift" },
  typescript: { color: SiTypescriptHex, icon: SiTypescript, label: "TypeScript" },
  vue: { color: SiVuedotjsHex, icon: SiVuedotjs, label: "Vue" },
  yaml: { color: SiYamlHex, icon: SiYaml, label: "YAML" }
};
function normalizeCodeBlockLanguage(language) {
  const trimmed = language?.trim().toLowerCase();
  if (!trimmed) return "";
  const withoutPrefix = trimmed.replace(/^language-/, "");
  const extension = withoutPrefix.includes(".") ? withoutPrefix.split(".").pop() : void 0;
  const candidate = extension || withoutPrefix;
  return LANGUAGE_ALIASES[candidate] || candidate;
}
function getMapOverride(language, icons) {
  if (!icons) return void 0;
  const raw = language?.trim().toLowerCase();
  const normalized = normalizeCodeBlockLanguage(language);
  if (raw && Object.hasOwn(icons, raw)) return icons[raw];
  if (normalized && Object.hasOwn(icons, normalized)) return icons[normalized];
  return void 0;
}
function resolveCodeBlockLanguageIcon(language, options = {}) {
  const normalized = normalizeCodeBlockLanguage(language);
  const override = options.icon ?? getMapOverride(language, options.icons);
  if (override === false || override === null) return null;
  if (override) {
    return {
      color: void 0,
      icon: override,
      language: normalized,
      label: normalized || language || "code"
    };
  }
  const spec = LANGUAGE_ICON_REGISTRY[normalized];
  if (!spec) return null;
  return {
    ...spec,
    language: normalized
  };
}
function CodeBlockLanguageIcon({
  className,
  fallback,
  icon,
  icons,
  language
}) {
  const resolved = resolveCodeBlockLanguageIcon(language, { icon, icons });
  if (!resolved) return fallback ?? null;
  const Icon = resolved.icon;
  return /* @__PURE__ */ jsx(
    "span",
    {
      "aria-hidden": "true",
      className: cn("inline-flex size-4 shrink-0 items-center justify-center", className),
      "data-code-block-language-icon": true,
      "data-language": resolved.language,
      title: resolved.label,
      children: isValidElement(Icon) ? Icon : /* @__PURE__ */ jsx(
        Icon,
        {
          "aria-hidden": "true",
          className: "size-full",
          focusable: "false",
          ...resolved.color ? { color: resolved.color } : {}
        }
      )
    }
  );
}

// src/primitives/overlay.ts
var menuItemBaseClassName = [
  "relative flex cursor-default select-none items-center rounded-[var(--radius-sm)] px-2 py-1.5 text-sm",
  "outline-none transition-colors duration-micro ease-out",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
].join(" ");
var menuHighlightedClassName = "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground";
var menubarFocusClassName = "hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground";
var overlayPrimitiveClassNames = {
  modalSurface: "rounded-[var(--radius-md)] border-border/70 bg-popover/95 text-popover-foreground shadow-xl",
  popoverSurface: "rounded-[var(--radius-md)] border-border/70 bg-popover/95 shadow-md",
  menuSurface: "rounded-[var(--radius-md)] border-border/70 bg-popover/95 shadow-md",
  commandFrame: "rounded-[var(--radius-md)] bg-popover text-popover-foreground",
  commandDialogSurface: "overflow-hidden p-0",
  commandItem: [
    menuItemBaseClassName,
    "data-[selected='true']:bg-accent data-[selected=true]:text-accent-foreground",
    "data-[disabled=true]:pointer-events-none data-[disabled=true]:opacity-50"
  ].join(" "),
  contextMenuItem: [
    menuItemBaseClassName,
    "min-h-8 gap-2",
    menuHighlightedClassName,
    "data-[variant=destructive]:text-destructive",
    "data-[variant=destructive]:data-[highlighted]:bg-destructive/10",
    "data-[variant=destructive]:data-[highlighted]:text-destructive"
  ].join(" "),
  menuItem: [menuItemBaseClassName, menuHighlightedClassName].join(" "),
  menuSubTrigger: [
    menuItemBaseClassName,
    "data-[highlighted]:bg-accent data-[popup-open]:bg-accent"
  ].join(" "),
  menuCheckboxItem: [menuItemBaseClassName, menuHighlightedClassName, "pl-8"].join(" "),
  menuFilterInput: [
    "h-7 w-full rounded-[var(--radius-sm)] bg-muted px-2 text-sm text-foreground",
    "placeholder:text-muted-foreground outline-none"
  ].join(" "),
  menuEmpty: "px-2 py-3 text-center text-sm text-muted-foreground",
  menuIndicator: "pointer-events-none absolute left-2 flex size-3.5 items-center justify-center text-muted-foreground",
  menubarRoot: "flex h-10 items-center space-x-1 rounded-[var(--radius-md)] border border-border bg-background p-1 outline-none",
  menubarTrigger: [
    "flex cursor-default select-none items-center rounded-[var(--radius-sm)] px-3 py-1.5 text-sm font-medium",
    "outline-none transition-colors duration-micro ease-out",
    menubarFocusClassName,
    "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
  ].join(" "),
  menubarSubTrigger: [
    "flex cursor-default select-none items-center rounded-[var(--radius-sm)] px-2 py-1.5 text-sm",
    "outline-none transition-colors duration-micro ease-out",
    menubarFocusClassName,
    "data-[state=open]:bg-accent data-[state=open]:text-accent-foreground"
  ].join(" "),
  menubarItem: [
    "relative flex cursor-default select-none items-center rounded-[var(--radius-sm)] px-2 py-1.5 text-sm",
    "outline-none transition-colors duration-micro ease-out",
    menubarFocusClassName,
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
  ].join(" "),
  menubarCheckboxItem: [
    "relative flex cursor-default select-none items-center rounded-[var(--radius-sm)] py-1.5 pl-8 pr-2 text-sm",
    "outline-none transition-colors duration-micro ease-out",
    menubarFocusClassName,
    "data-[disabled]:pointer-events-none data-[disabled]:opacity-50"
  ].join(" ")
};
var DropdownMenuContext = React24.createContext(null);
function DropdownMenu({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
  ...props
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React24.useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  function setOpen(nextOpen, eventDetails) {
    if (controlledOpen === void 0) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen, eventDetails);
  }
  const contextValue = { setOpen };
  return /* @__PURE__ */ jsx(DropdownMenuContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(Menu$1.Root, { open, onOpenChange: setOpen, ...props, children }) });
}
DropdownMenu.displayName = "DropdownMenu";
var DropdownMenuTrigger = ({
  asChild,
  children,
  render,
  ref,
  ...props
}) => {
  const context = React24.use(DropdownMenuContext);
  function openFromTrigger() {
    context?.setOpen(true);
  }
  const childRenderElement = asChild && React24.isValidElement(children) ? React24.cloneElement(children, {
    onMouseDown: (event) => {
      children.props.onMouseDown?.(event);
      if (!event.defaultPrevented) {
        openFromTrigger();
      }
    },
    onKeyDown: (event) => {
      children.props.onKeyDown?.(event);
      if (!event.defaultPrevented && (event.key === "Enter" || event.key === " ")) {
        openFromTrigger();
      }
    }
  }) : null;
  const renderElement = childRenderElement ?? render;
  return /* @__PURE__ */ jsx(
    Menu$1.Trigger,
    {
      ref,
      render: renderElement,
      ...renderElement ? props : { ...props, children }
    }
  );
};
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";
var DropdownMenuGroup = Menu$1.Group;
var DropdownMenuPortal = Menu$1.Portal;
var DropdownMenuSub = Menu$1.SubmenuRoot;
var DropdownMenuRadioGroup = Menu$1.RadioGroup;
var DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  Menu$1.SubmenuTrigger,
  {
    ref,
    className: cn(overlayPrimitiveClassNames.menuSubTrigger, inset && "pl-8", className),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto size-4" })
    ]
  }
);
DropdownMenuSubTrigger.displayName = "DropdownMenuSubTrigger";
var DropdownMenuSubContent = ({
  className,
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(Menu$1.Portal, { children: /* @__PURE__ */ jsx(Menu$1.Positioner, { children: /* @__PURE__ */ jsx(
  Menu$1.Popup,
  {
    ref,
    className: cn(
      overlayClassNames.menuSurface,
      overlayPrimitiveClassNames.menuSurface,
      className
    ),
    style: { zIndex: overlayZIndex.popover, ...style },
    ...props
  }
) }) });
DropdownMenuSubContent.displayName = "DropdownMenuSubContent";
var DropdownMenuContent = ({
  className,
  style,
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  ref,
  ...props
}) => /* @__PURE__ */ jsx(Menu$1.Portal, { children: /* @__PURE__ */ jsx(
  Menu$1.Positioner,
  {
    sideOffset,
    align,
    alignOffset,
    side,
    children: /* @__PURE__ */ jsx(
      Menu$1.Popup,
      {
        ref,
        className: cn(
          overlayClassNames.menuSurface,
          overlayPrimitiveClassNames.menuSurface,
          className
        ),
        style: { zIndex: overlayZIndex.popover, ...style },
        ...props
      }
    )
  }
) });
DropdownMenuContent.displayName = "DropdownMenuContent";
var DropdownMenuItem = ({
  className,
  inset,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Menu$1.Item,
  {
    ref,
    className: cn(overlayPrimitiveClassNames.menuItem, inset && "pl-8", className),
    ...props
  }
);
DropdownMenuItem.displayName = "DropdownMenuItem";
var DropdownMenuCheckboxItem = ({
  className,
  children,
  checked,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  Menu$1.CheckboxItem,
  {
    ref,
    className: cn(overlayPrimitiveClassNames.menuCheckboxItem, className),
    ...checked !== void 0 && { checked },
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(Menu$1.CheckboxItemIndicator, { children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) }) }),
      children
    ]
  }
);
DropdownMenuCheckboxItem.displayName = "DropdownMenuCheckboxItem";
var DropdownMenuRadioItem = ({
  className,
  children,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  Menu$1.RadioItem,
  {
    ref,
    className: cn(overlayPrimitiveClassNames.menuCheckboxItem, className),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex size-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(Menu$1.RadioItemIndicator, { children: /* @__PURE__ */ jsx(Status, { className: "size-2 fill-current" }) }) }),
      children
    ]
  }
);
DropdownMenuRadioItem.displayName = "DropdownMenuRadioItem";
var MENU_RESERVED_KEYS = /* @__PURE__ */ new Set(["ArrowUp", "ArrowDown", "Enter", "Tab"]);
var DropdownMenuFilterInput = ({
  className,
  onKeyDown,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "input",
  {
    ref,
    type: "search",
    className: cn(overlayPrimitiveClassNames.menuFilterInput, className),
    onKeyDown: (event) => {
      onKeyDown?.(event);
      if (!MENU_RESERVED_KEYS.has(event.key)) {
        event.stopPropagation();
      }
    },
    ...props
  }
);
DropdownMenuFilterInput.displayName = "DropdownMenuFilterInput";
var DropdownMenuEmpty = ({
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    role: "presentation",
    className: cn(overlayPrimitiveClassNames.menuEmpty, className),
    ...props
  }
);
DropdownMenuEmpty.displayName = "DropdownMenuEmpty";
var DropdownMenuLabel = ({
  className,
  inset,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
);
DropdownMenuLabel.displayName = "DropdownMenuLabel";
var DropdownMenuSeparator = ({
  className,
  orientation = "horizontal",
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Menu$1.Separator,
  {
    ref,
    orientation,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
var DropdownMenuShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx("span", { className: cn("ml-auto text-xs tracking-widest opacity-60", className), ...props });
};
DropdownMenuShortcut.displayName = "DropdownMenuShortcut";
var CODE_FONT_FAMILY = "var(--font-mono)";
var lightTheme = {
  ...nightOwl,
  'pre[class*="language-"]': {
    ...nightOwl['pre[class*="language-"]'],
    background: "transparent",
    fontFamily: CODE_FONT_FAMILY
  },
  'code[class*="language-"]': {
    ...nightOwl['code[class*="language-"]'],
    color: "hsl(var(--foreground))",
    fontFamily: CODE_FONT_FAMILY
  },
  comment: {
    color: "hsl(var(--muted-foreground))",
    fontStyle: "italic"
  },
  punctuation: {
    color: "hsl(var(--foreground))"
  },
  property: {
    color: "#0550FF"
  },
  string: {
    color: "#14532D"
  },
  keyword: {
    color: "#9333EA"
  },
  function: {
    color: "#E45C3A"
  },
  boolean: {
    color: "#9333EA"
  },
  number: {
    color: "#9333EA"
  },
  operator: {
    color: "hsl(var(--foreground))"
  }
};
var darkTheme = {
  ...nightOwl,
  'pre[class*="language-"]': {
    ...nightOwl['pre[class*="language-"]'],
    background: "transparent",
    fontFamily: CODE_FONT_FAMILY
  },
  'code[class*="language-"]': {
    ...nightOwl['code[class*="language-"]'],
    fontFamily: CODE_FONT_FAMILY
  }
};
function getLanguageFromFileName(fileName) {
  const ext = fileName.split(".").pop()?.toLowerCase();
  const languageMap = {
    js: "javascript",
    jsx: "jsx",
    ts: "typescript",
    tsx: "tsx",
    html: "html",
    css: "css",
    scss: "scss",
    json: "json",
    md: "markdown",
    py: "python",
    rb: "ruby",
    go: "go",
    rs: "rust",
    sh: "bash",
    bash: "bash",
    zsh: "bash",
    yaml: "yaml",
    yml: "yaml",
    sql: "sql",
    graphql: "graphql",
    gql: "graphql"
  };
  return languageMap[ext || ""] || "javascript";
}
var SUPPORTED_LANGUAGES = [
  "javascript",
  "jsx",
  "typescript",
  "tsx",
  "html",
  "css",
  "scss",
  "json",
  "markdown",
  "python",
  "ruby",
  "go",
  "rust",
  "bash",
  "yaml",
  "sql",
  "graphql",
  "java",
  "c",
  "cpp",
  "csharp",
  "php",
  "swift",
  "kotlin"
];
function FileIcon({ fileName }) {
  const ext = fileName.split(".").pop()?.toLowerCase();
  switch (ext) {
    case "js":
    case "jsx":
    case "ts":
    case "tsx":
      return /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" });
    case "css":
    case "scss":
      return /* @__PURE__ */ jsx(FileText, { className: "h-4 w-4" });
    default:
      return /* @__PURE__ */ jsx(File, { className: "h-4 w-4" });
  }
}
function HeaderIcon({
  fileName,
  icon,
  language,
  languageIcons,
  showLanguageIcon
}) {
  const fallback = /* @__PURE__ */ jsx(FileIcon, { fileName });
  if (!showLanguageIcon) return fallback;
  return /* @__PURE__ */ jsx(
    CodeBlockLanguageIcon,
    {
      className: "size-4",
      fallback,
      icon,
      icons: languageIcons,
      language: language || fileName
    }
  );
}
function CodeBlock(props) {
  const isSingleFile = "children" in props && typeof props.children === "string";
  const normalizedFiles = isSingleFile ? (() => {
    const single = props;
    const f = {
      title: single.filename ?? "",
      code: single.children,
      language: single.language
    };
    if (single.highlightedLines !== void 0) f.highlightedLines = single.highlightedLines;
    if (single.addedLinesNumbers !== void 0) f.addedLines = single.addedLinesNumbers;
    if (single.removedLinesNumbers !== void 0) f.removedLines = single.removedLinesNumbers;
    if (single.languageIcon !== void 0) f.icon = single.languageIcon;
    return [f];
  })() : props.files;
  const showFilenameHeader = isSingleFile ? Boolean(props.filename) : true;
  const {
    className,
    maxHeight = 400,
    enableLineReferences = false,
    onLineReference,
    languageIcons,
    showLanguageIcon = true,
    "aria-label": ariaLabel
  } = props;
  const resolvedHide = props.hideLineNumbers;
  const resolvedShow = props.showLineNumbers;
  const showLineNumbers = resolvedShow !== void 0 ? resolvedShow : resolvedHide !== void 0 ? !resolvedHide : isSingleFile;
  const controlledSwitcher = isSingleFile ? props.switcher : void 0;
  const showLanguageSwitcher = !isSingleFile && Boolean(props.showLanguageSwitcher);
  const languages = isSingleFile ? void 0 : props.languages;
  const defaultTitle = isSingleFile ? void 0 : props.defaultTitle;
  const [activeTitle, setActiveTitle] = useState(defaultTitle || normalizedFiles[0]?.title || "");
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const [languageOverride, setLanguageOverride] = useState(null);
  const shouldReduceMotion = useReducedMotion();
  const scopeId = useId().replace(/:/g, "");
  const copyTimeoutRef = useRef(null);
  const showCopyFeedback = useCallback(() => {
    if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    setCopied(true);
    copyTimeoutRef.current = setTimeout(() => setCopied(false), 2e3);
  }, []);
  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) clearTimeout(copyTimeoutRef.current);
    };
  }, []);
  useEffect(() => {
    setLanguageOverride(null);
  }, []);
  useEffect(() => {
    if (typeof window === "undefined") return;
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };
    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"]
    });
    return () => observer.disconnect();
  }, []);
  const activeFile = normalizedFiles.find((file) => file.title === activeTitle);
  const code = activeFile?.code || "";
  const detectedLanguage = activeFile?.language || getLanguageFromFileName(activeTitle || "");
  const effectiveLanguage = controlledSwitcher?.value ?? languageOverride ?? detectedLanguage;
  const selectedControlledOption = controlledSwitcher?.options.find(
    (option) => option.value === controlledSwitcher.value
  );
  const selectedControlledLabel = selectedControlledOption?.label ?? controlledSwitcher?.value;
  const highlightedSet = useMemo(
    () => new Set(activeFile?.highlightedLines),
    [activeFile?.highlightedLines]
  );
  const addedSet = useMemo(() => new Set(activeFile?.addedLines), [activeFile?.addedLines]);
  const removedSet = useMemo(() => new Set(activeFile?.removedLines), [activeFile?.removedLines]);
  const hasLineFeatures = highlightedSet.size > 0 || addedSet.size > 0 || removedSet.size > 0 || enableLineReferences;
  const getLineProps = useCallback(
    (lineNumber) => {
      const styles = {
        display: "block",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        marginLeft: "-1rem",
        marginRight: "-1rem"
      };
      const dataAttrs = {};
      if (highlightedSet.has(lineNumber)) {
        styles.backgroundColor = isDark ? "rgba(59, 130, 246, 0.15)" : "rgba(59, 130, 246, 0.08)";
        styles.borderLeft = "2px solid rgba(59, 130, 246, 0.6)";
        styles.paddingLeft = "calc(1rem - 2px)";
      }
      if (addedSet.has(lineNumber)) {
        styles.backgroundColor = isDark ? "rgba(16, 185, 129, 0.15)" : "rgba(16, 185, 129, 0.08)";
        dataAttrs["data-diff"] = "+";
      }
      if (removedSet.has(lineNumber)) {
        styles.backgroundColor = isDark ? "rgba(239, 68, 68, 0.15)" : "rgba(239, 68, 68, 0.08)";
        dataAttrs["data-diff"] = "-";
      }
      return { style: styles, ...dataAttrs };
    },
    [highlightedSet, addedSet, removedSet, isDark]
  );
  const getLineNumberStyle = useCallback(
    (lineNumber) => {
      const style = {};
      if (addedSet.has(lineNumber)) {
        style.color = "rgb(16, 185, 129)";
      } else if (removedSet.has(lineNumber)) {
        style.color = "rgb(239, 68, 68)";
      }
      if (enableLineReferences && showLineNumbers) {
        style.cursor = "pointer";
        style.userSelect = "none";
      }
      return style;
    },
    [addedSet, removedSet, enableLineReferences, showLineNumbers]
  );
  const handleCodeClick = useCallback(
    (e) => {
      if (!enableLineReferences || !showLineNumbers) return;
      const target = e.target;
      const lineNumEl = target.closest(".react-syntax-highlighter-line-number, .linenumber");
      if (!lineNumEl) return;
      const lineNumber = parseInt(lineNumEl.textContent?.trim() ?? "", 10);
      if (Number.isNaN(lineNumber)) return;
      const anchor = `#L${lineNumber}`;
      navigator.clipboard.writeText(anchor).catch(() => {
      });
      onLineReference?.(lineNumber);
      showCopyFeedback();
    },
    [enableLineReferences, showLineNumbers, onLineReference, showCopyFeedback]
  );
  const copyToClipboard = useCallback(
    async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        showCopyFeedback();
      } catch {
      }
    },
    [showCopyFeedback]
  );
  const hasMultipleFiles = normalizedFiles.length > 1;
  const hasSwitcher = showLanguageSwitcher || Boolean(controlledSwitcher);
  const showHeader = !props.hideHeader && (hasMultipleFiles || showFilenameHeader || hasSwitcher || true);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "aria-label": ariaLabel,
      className: cn(
        "cb-root relative rounded-[var(--radius-lg)] border bg-card text-card-foreground",
        "backdrop-blur-md",
        className
      ),
      "data-scope": scopeId,
      children: [
        (addedSet.size > 0 || removedSet.size > 0) && /* @__PURE__ */ jsx("style", { children: `
          [data-scope="${scopeId}"] [data-diff]::before {
            position: absolute;
            left: 0.5rem;
            font-weight: 600;
            font-size: 0.75rem;
            line-height: inherit;
          }
          [data-scope="${scopeId}"] [data-diff="+"]::before {
            content: "+";
            color: rgb(16 185 129);
          }
          [data-scope="${scopeId}"] [data-diff="-"]::before {
            content: "-";
            color: rgb(239 68 68);
          }
        ` }),
        showHeader && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-b px-4 py-2", children: [
          /* @__PURE__ */ jsx("div", { className: "flex gap-1 overflow-x-auto", children: hasMultipleFiles ? normalizedFiles.map(({ icon, language, title }) => /* @__PURE__ */ jsxs(
            "button",
            {
              type: "button",
              onClick: () => setActiveTitle(title),
              className: cn(
                "inline-flex items-center gap-2 rounded-[var(--radius-md)] px-3 py-1.5 text-sm font-medium transition-colors",
                title === activeTitle ? "bg-secondary text-secondary-foreground" : "hover:bg-accent hover:text-accent-foreground"
              ),
              children: [
                /* @__PURE__ */ jsx(
                  HeaderIcon,
                  {
                    fileName: title,
                    icon,
                    language: language || title,
                    languageIcons,
                    showLanguageIcon
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: title })
              ]
            },
            title
          )) : showFilenameHeader && activeTitle ? /* @__PURE__ */ jsxs("span", { className: "inline-flex items-center gap-2 px-2 py-1.5 text-muted-foreground text-sm", children: [
            /* @__PURE__ */ jsx(
              HeaderIcon,
              {
                fileName: activeTitle,
                icon: activeFile?.icon,
                language: effectiveLanguage,
                languageIcons,
                showLanguageIcon
              }
            ),
            /* @__PURE__ */ jsx("span", { children: activeTitle })
          ] }) : null }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
            controlledSwitcher && /* @__PURE__ */ jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  "aria-label": `Switch language, current: ${selectedControlledLabel ?? controlledSwitcher.value}`,
                  "aria-haspopup": "menu",
                  className: "inline-flex items-center gap-1 rounded-[var(--radius-md)] px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  children: [
                    /* @__PURE__ */ jsx(
                      CodeBlockLanguageIcon,
                      {
                        className: "size-3.5",
                        icon: selectedControlledOption?.icon,
                        icons: languageIcons,
                        language: controlledSwitcher.value
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { children: selectedControlledLabel ?? controlledSwitcher.value }),
                    /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "max-h-60 overflow-y-auto", children: controlledSwitcher.options.map((opt) => /* @__PURE__ */ jsxs(
                DropdownMenuItem,
                {
                  onClick: () => controlledSwitcher.onChange(opt.value),
                  className: cn(
                    "text-xs",
                    opt.value === controlledSwitcher.value && "bg-accent font-medium"
                  ),
                  children: [
                    /* @__PURE__ */ jsx(
                      CodeBlockLanguageIcon,
                      {
                        className: "mr-1 size-3.5",
                        icon: opt.icon,
                        icons: languageIcons,
                        language: opt.value
                      }
                    ),
                    opt.label
                  ]
                },
                opt.value
              )) })
            ] }),
            showLanguageSwitcher && !controlledSwitcher && /* @__PURE__ */ jsxs(DropdownMenu, { children: [
              /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  "aria-label": `Switch language, current: ${effectiveLanguage}`,
                  "aria-haspopup": "menu",
                  className: "inline-flex items-center gap-1 rounded-[var(--radius-md)] px-2 py-1 text-xs font-medium text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  children: [
                    /* @__PURE__ */ jsx(
                      CodeBlockLanguageIcon,
                      {
                        className: "size-3.5",
                        icons: languageIcons,
                        language: effectiveLanguage
                      }
                    ),
                    /* @__PURE__ */ jsx("span", { children: effectiveLanguage }),
                    /* @__PURE__ */ jsx(ChevronDown, { className: "h-3 w-3" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "max-h-60 overflow-y-auto", children: (languages ?? SUPPORTED_LANGUAGES).map((lang) => /* @__PURE__ */ jsxs(
                DropdownMenuItem,
                {
                  onClick: () => setLanguageOverride(lang),
                  className: cn(
                    "text-xs",
                    lang === effectiveLanguage && "bg-accent font-medium"
                  ),
                  children: [
                    /* @__PURE__ */ jsx(
                      CodeBlockLanguageIcon,
                      {
                        className: "mr-1 size-3.5",
                        icons: languageIcons,
                        language: lang
                      }
                    ),
                    lang
                  ]
                },
                lang
              )) })
            ] }),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => copyToClipboard(code),
                className: "inline-flex h-8 w-8 items-center justify-center rounded-[var(--radius-md)] hover:bg-accent hover:text-accent-foreground",
                "aria-label": "Copy code",
                children: copied ? /* @__PURE__ */ jsx(
                  motion.div,
                  {
                    initial: shouldReduceMotion ? { opacity: 0 } : { scale: 0 },
                    animate: shouldReduceMotion ? { opacity: 1 } : { scale: 1 },
                    exit: shouldReduceMotion ? { opacity: 0 } : { scale: 0 },
                    transition: { duration: shouldReduceMotion ? 0 : 0.16 },
                    children: /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" })
                  }
                ) : /* @__PURE__ */ jsx(Copy, { className: "h-4 w-4" })
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          "div",
          {
            className: "overflow-auto",
            style: {
              maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight
            },
            onClick: handleCodeClick,
            children: /* @__PURE__ */ jsx(
              Prism,
              {
                language: effectiveLanguage,
                style: isDark ? darkTheme : lightTheme,
                showLineNumbers,
                wrapLines: hasLineFeatures,
                lineProps: hasLineFeatures ? getLineProps : void 0,
                lineNumberStyle: showLineNumbers ? getLineNumberStyle : void 0,
                customStyle: {
                  margin: 0,
                  padding: "1rem",
                  background: "transparent",
                  fontFamily: CODE_FONT_FAMILY,
                  fontSize: "0.875rem"
                },
                children: code
              }
            )
          }
        )
      ]
    }
  );
}
var CollapseGroup = function CollapseGroup2({
  ref,
  multiple = false,
  size,
  children,
  className
}) {
  const groupId = useId();
  const { stampedChildren, defaultValue } = useMemo(() => {
    const stamped = [];
    const expanded = [];
    let index = 0;
    Children.forEach(children, (child) => {
      if (!isValidElement(child) || child.type !== Collapse) {
        stamped.push(child);
        return;
      }
      const value = `${groupId}-${index++}`;
      if (child.props.defaultExpanded) expanded.push(value);
      stamped.push(
        cloneElement(child, {
          __value: value,
          size: child.props.size ?? size
        })
      );
    });
    return { stampedChildren: stamped, defaultValue: expanded };
  }, [children, groupId, size]);
  const accordionDefault = multiple ? defaultValue : defaultValue[0] ?? "";
  return /* @__PURE__ */ jsx(
    Accordion,
    {
      ref,
      multiple,
      defaultValue: accordionDefault,
      className: cn("w-full", className),
      children: stampedChildren
    }
  );
};
var Collapse = function Collapse2({
  ref,
  title,
  defaultExpanded = false,
  size = "default",
  keepMounted = true,
  disabled,
  children,
  className,
  __value
}) {
  const standaloneId = useId();
  const isStandalone = __value === void 0;
  const value = __value ?? standaloneId;
  const item = /* @__PURE__ */ jsxs(
    AccordionItem,
    {
      ref,
      value,
      ...disabled ? { disabled: true } : {},
      className: cn(isStandalone && "border-0", className),
      children: [
        /* @__PURE__ */ jsx(AccordionTrigger, { size, children: title }),
        /* @__PURE__ */ jsx(AccordionContent, { size, keepMounted, children })
      ]
    }
  );
  if (!isStandalone) return item;
  return /* @__PURE__ */ jsx(
    Accordion,
    {
      multiple: false,
      defaultValue: defaultExpanded ? value : "",
      className: "w-full",
      children: item
    }
  );
};

// src/primitives/command-styles.ts
var commandFrameClassName = cn(
  "[&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:font-medium",
  "[&_[cmdk-group-heading]]:text-muted-foreground",
  "[&_[cmdk-group]:not([hidden])_~[cmdk-group]]:pt-0",
  "[&_[cmdk-group]]:px-2",
  "[&_[data-cmdk-input-wrapper]_svg]:h-5 [&_[data-cmdk-input-wrapper]_svg]:w-5",
  "[&_[cmdk-input]]:h-12",
  "[&_[cmdk-item]]:px-2 [&_[cmdk-item]]:py-2.5",
  "[&_[cmdk-item]_svg]:h-4 [&_[cmdk-item]_svg]:w-4"
);
var commandInputWrapperClassName = cn(
  "flex items-center border-b border-border px-3",
  "transition-[border-color] duration-micro ease-out",
  "has-[:focus-visible]:border-ring/60"
);
var commandInputClassName = cn(
  "flex h-11 w-full appearance-none border-0 bg-transparent py-3 text-sm text-foreground shadow-none outline-none",
  "placeholder:text-muted-foreground disabled:cursor-not-allowed disabled:opacity-50",
  "outline-none focus-visible:outline-none",
  "[&::-webkit-search-cancel-button]:appearance-none",
  "[&::-webkit-search-decoration]:appearance-none",
  "[&::-webkit-search-results-button]:appearance-none",
  "[&::-webkit-search-results-decoration]:appearance-none"
);
var Dialog = Dialog$1.Root;
var DialogPortal = Dialog$1.Portal;
var DialogTrigger = ({
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React24.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      Dialog$1.Trigger,
      {
        ref,
        ...props,
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(Dialog$1.Trigger, { ref, ...props, children });
};
DialogTrigger.displayName = "DialogTrigger";
var DialogClose = ({
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React24.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      Dialog$1.Close,
      {
        ref,
        ...props,
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(Dialog$1.Close, { ref, ...props, children });
};
DialogClose.displayName = "DialogClose";
var DialogOverlay = ({
  className,
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Dialog$1.Backdrop,
  {
    ref,
    className: cn(overlayClassNames.backdrop, className),
    style: { zIndex: overlayZIndex.backdrop, ...style },
    ...props
  }
);
DialogOverlay.displayName = "DialogOverlay";
var DialogContent = ({
  className,
  children,
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(DialogPortal, { children: [
  /* @__PURE__ */ jsx(DialogOverlay, {}),
  /* @__PURE__ */ jsxs(
    Dialog$1.Popup,
    {
      ref,
      className: cn(
        overlayClassNames.modalSurface,
        overlayPrimitiveClassNames.modalSurface,
        className
      ),
      style: { zIndex: overlayZIndex.modal, ...style },
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsxs(DialogClose, { className: overlayClassNames.closeButton, children: [
          /* @__PURE__ */ jsx(Cross, { className: "h-4 w-4" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
        ] })
      ]
    }
  )
] });
DialogContent.displayName = "DialogContent";
var DialogHeader = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col space-y-1.5 text-center sm:text-left", className),
    ...props
  }
);
DialogHeader.displayName = "DialogHeader";
var DialogFooter = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2", className),
    ...props
  }
);
DialogFooter.displayName = "DialogFooter";
var DialogTitle = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Dialog$1.Title,
  {
    ref,
    className: cn("text-lg font-semibold leading-none tracking-tight", className),
    ...props
  }
);
DialogTitle.displayName = "DialogTitle";
var DialogDescription = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Dialog$1.Description,
  {
    ref,
    className: cn("text-sm text-muted-foreground", className),
    ...props
  }
);
DialogDescription.displayName = "DialogDescription";
var modifierOrder = ["meta", "shift", "alt", "ctrl"];
var appleModifierSymbols = {
  meta: "\u2318",
  shift: "\u21E7",
  alt: "\u2325",
  ctrl: "\u2303"
};
var otherModifierSymbols = {
  meta: "Ctrl",
  shift: "Shift",
  alt: "Alt",
  ctrl: "Ctrl"
};
var modifierLabels = {
  meta: "Command or Control",
  shift: "Shift",
  alt: "Option or Alt",
  ctrl: "Control"
};
function getClientPlatform() {
  const platform = window.navigator.platform.toLowerCase();
  const userAgent = window.navigator.userAgent.toLowerCase();
  const isApple = /mac|iphone|ipad|ipod/.test(platform) || /mac|iphone|ipad|ipod/.test(userAgent);
  return isApple ? "apple" : "other";
}
function subscribePlatform() {
  return () => void 0;
}
function usePlatform() {
  return React24.useSyncExternalStore(subscribePlatform, getClientPlatform, () => "apple");
}
function normalizeKey(children) {
  if (typeof children !== "string") {
    return children;
  }
  const trimmed = children.trim();
  if (/^[a-z]$/.test(trimmed)) {
    return trimmed.toUpperCase();
  }
  return trimmed;
}
function getModifierSymbols(platform) {
  return platform === "apple" ? appleModifierSymbols : otherModifierSymbols;
}
var Kbd = ({
  meta,
  shift,
  alt,
  ctrl,
  small,
  children,
  className,
  "aria-label": ariaLabel,
  ref,
  ...props
}) => {
  const platform = usePlatform();
  const symbols = getModifierSymbols(platform);
  const activeModifiers = modifierOrder.filter((modifier) => {
    if (modifier === "meta") return meta;
    if (modifier === "shift") return shift;
    if (modifier === "alt") return alt;
    return ctrl;
  });
  const normalizedKey = normalizeKey(children);
  const visualParts = [
    ...activeModifiers.map((modifier) => symbols[modifier]),
    normalizedKey
  ].filter(Boolean);
  const accessibleName = ariaLabel ?? [
    ...activeModifiers.map((modifier) => modifierLabels[modifier]),
    typeof normalizedKey === "string" ? normalizedKey : void 0
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ jsx(
    "kbd",
    {
      ref,
      "aria-label": accessibleName || void 0,
      className: cn(
        "inline-flex select-none items-center justify-center gap-0.5 rounded-[var(--radius-sm)] border border-border bg-muted font-mono font-medium leading-none text-muted-foreground tabular-nums",
        small ? "min-h-4 min-w-4 px-1 py-0 text-xs" : "min-h-5 min-w-5 px-1.5 py-0.5 text-xs",
        className
      ),
      ...props,
      children: visualParts.join("")
    }
  );
};
Kbd.displayName = "Kbd";
var Command = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Command$1,
  {
    ref,
    className: cn(
      "flex h-full w-full flex-col overflow-hidden",
      overlayPrimitiveClassNames.commandFrame,
      className
    ),
    ...props
  }
);
Command.displayName = Command$1.displayName;
var CommandDialog = ({ children, ...props }) => {
  return /* @__PURE__ */ jsx(Dialog, { ...props, children: /* @__PURE__ */ jsx(
    DialogContent,
    {
      className: cn(
        overlayPrimitiveClassNames.modalSurface,
        overlayPrimitiveClassNames.commandDialogSurface
      ),
      children: /* @__PURE__ */ jsx(Command, { className: commandFrameClassName, children })
    }
  ) });
};
var CommandInput = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs("div", { className: commandInputWrapperClassName, "data-cmdk-input-wrapper": "", children: [
  /* @__PURE__ */ jsx(MagnifyingGlass, { className: "mr-2 h-4 w-4 shrink-0 opacity-50" }),
  /* @__PURE__ */ jsx(Command$1.Input, { ref, className: cn(commandInputClassName, className), ...props })
] });
CommandInput.displayName = Command$1.Input.displayName;
var CommandList = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Command$1.List,
  {
    ref,
    className: cn("max-h-[300px] overflow-y-auto overflow-x-hidden", className),
    ...props
  }
);
CommandList.displayName = Command$1.List.displayName;
var CommandEmpty = ({
  ref,
  ...props
}) => /* @__PURE__ */ jsx(Command$1.Empty, { ref, className: "py-6 text-center text-sm", ...props });
CommandEmpty.displayName = Command$1.Empty.displayName;
var CommandGroup = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Command$1.Group,
  {
    ref,
    className: cn(
      "overflow-hidden p-1 text-foreground [&_[cmdk-group-heading]]:px-2 [&_[cmdk-group-heading]]:py-1.5 [&_[cmdk-group-heading]]:text-xs [&_[cmdk-group-heading]]:font-medium [&_[cmdk-group-heading]]:text-muted-foreground",
      className
    ),
    ...props
  }
);
CommandGroup.displayName = Command$1.Group.displayName;
var CommandSeparator = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Command$1.Separator,
  {
    ref,
    className: cn("-mx-1 h-px bg-border", className),
    ...props
  }
);
CommandSeparator.displayName = Command$1.Separator.displayName;
var CommandItem = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Command$1.Item,
  {
    ref,
    className: cn(overlayPrimitiveClassNames.commandItem, className),
    ...props
  }
);
CommandItem.displayName = Command$1.Item.displayName;
var defaultResultsLabel = (count, search) => {
  if (typeof count !== "number") return "Command results updated.";
  if (search.trim().length === 0) return `${count} command results available.`;
  return `${count} command results available for ${search}.`;
};
var CommandResults = ({
  className,
  count,
  search = "",
  label = defaultResultsLabel,
  children,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "aria-atomic": "true",
    "aria-live": "polite",
    className: cn("sr-only", className),
    ...props,
    children: children ?? label(count, search)
  }
);
CommandResults.displayName = "CommandResults";
var shortcutKeyId = (key) => {
  if (typeof key === "string" || typeof key === "number") return String(key);
  if (React24.isValidElement(key) && key.key != null) return String(key.key);
  return String(key);
};
var CommandShortcut = ({ className, keys, label, children, ...props }) => {
  const shortcutKeys = keys ?? (children != null ? [children] : []);
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn("ml-auto flex shrink-0 items-center gap-1 text-muted-foreground", className),
      ...props,
      children: [
        label ? /* @__PURE__ */ jsx("span", { className: "sr-only", children: label }) : null,
        shortcutKeys.map((key) => /* @__PURE__ */ jsx(Kbd, { "aria-hidden": label ? true : void 0, small: true, children: key }, shortcutKeyId(key)))
      ]
    }
  );
};
CommandShortcut.displayName = "CommandShortcut";
var labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
var Label = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("label", { ref, className: cn(labelVariants(), className), ...props });
Label.displayName = "Label";
function Popover({ ...props }) {
  return /* @__PURE__ */ jsx(Popover$1.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({ asChild, children, render, ...props }) {
  const renderElement = asChild && React24.isValidElement(children) ? children : render;
  return /* @__PURE__ */ jsx(
    Popover$1.Trigger,
    {
      "data-slot": "popover-trigger",
      render: renderElement,
      ...renderElement ? props : { ...props, children }
    }
  );
}
function PopoverPositioner({
  sideOffset = 4,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx(Popover$1.Portal, { children: /* @__PURE__ */ jsx(
    Popover$1.Positioner,
    {
      "data-slot": "popover-positioner",
      sideOffset,
      style: { zIndex: overlayZIndex.popover, ...style },
      ...props
    }
  ) });
}
function PopoverContent({
  className,
  align = "center",
  sideOffset = 8,
  alignOffset = 0,
  side = "bottom",
  children,
  showArrow = false,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx(Popover$1.Portal, { children: /* @__PURE__ */ jsx(
    Popover$1.Positioner,
    {
      "data-slot": "popover-positioner",
      sideOffset,
      align,
      alignOffset,
      side,
      children: /* @__PURE__ */ jsxs(
        Popover$1.Popup,
        {
          "data-slot": "popover-content",
          className: cn(
            overlayClassNames.popoverSurface,
            overlayPrimitiveClassNames.popoverSurface,
            className
          ),
          style: { zIndex: overlayZIndex.popover, ...style },
          ...props,
          children: [
            children,
            showArrow && /* @__PURE__ */ jsx(PopoverArrow, {})
          ]
        }
      )
    }
  ) });
}
function PopoverArrow({
  className,
  style,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Popover$1.Arrow,
    {
      "data-slot": "popover-arrow",
      className: cn(
        "data-[side=bottom]:top-[-8px] data-[side=left]:right-[-13px] data-[side=left]:rotate-90 data-[side=right]:left-[-13px] data-[side=right]:-rotate-90 data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180",
        className
      ),
      style: { zIndex: overlayZIndex.popover, ...style },
      ...props,
      children: /* @__PURE__ */ jsxs("svg", { "aria-hidden": "true", width: "20", height: "10", viewBox: "0 0 20 10", fill: "none", children: [
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M9.66437 2.60207L4.80758 6.97318C4.07308 7.63423 3.11989 8 2.13172 8H0V9H20V8H18.5349C17.5468 8 16.5936 7.63423 15.8591 6.97318L11.0023 2.60207C10.622 2.2598 10.0447 2.25979 9.66437 2.60207Z",
            className: "fill-popover"
          }
        ),
        /* @__PURE__ */ jsx(
          "path",
          {
            d: "M10.3333 3.34539L5.47654 7.71648C4.55842 8.54279 3.36693 9 2.13172 9H0V8H2.13172C3.11989 8 4.07308 7.63423 4.80758 6.97318L9.66437 2.60207C10.0447 2.25979 10.622 2.2598 11.0023 2.60207L15.8591 6.97318C16.5936 7.63423 17.5468 8 18.5349 8H20V9H18.5349C17.2998 9 16.1083 8.54278 15.1901 7.71648L10.3333 3.34539Z",
            className: "fill-border"
          }
        )
      ] })
    }
  );
}
function PopoverAnchor({ ...props }) {
  return /* @__PURE__ */ jsx("span", { "data-slot": "popover-anchor", ...props });
}
var comboboxSizeMap = {
  sm: "small",
  default: "medium",
  lg: "large",
  small: "small",
  medium: "medium",
  large: "large"
};
var comboboxSizeTokens = {
  small: {
    "--combobox-trigger-height": "2rem",
    "--combobox-trigger-padding-x": "0.625rem",
    "--combobox-font-size": "0.75rem"
  },
  medium: {
    "--combobox-trigger-height": "2.5rem",
    "--combobox-trigger-padding-x": "0.75rem",
    "--combobox-font-size": "0.875rem"
  },
  large: {
    "--combobox-trigger-height": "3rem",
    "--combobox-trigger-padding-x": "0.875rem",
    "--combobox-font-size": "1rem"
  }
};
var comboboxTriggerVariants = cva(
  [
    "flex w-full items-center justify-between gap-2 whitespace-nowrap",
    "h-[var(--combobox-trigger-height)] rounded-[var(--radius-md)] border border-input bg-background px-[var(--combobox-trigger-padding-x)]",
    "text-[length:var(--combobox-font-size)] ring-offset-background",
    "transition-colors duration-micro ease-out",
    "placeholder:text-muted-foreground",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "[&>span]:line-clamp-1 [&>span]:text-left"
  ].join(" "),
  {
    variants: {
      size: {
        small: "",
        medium: "",
        large: ""
      },
      error: {
        true: "border-destructive",
        false: ""
      }
    },
    defaultVariants: {
      size: "medium",
      error: false
    }
  }
);
var ComboboxContext = React24.createContext(null);
function useComboboxContext() {
  const ctx = React24.use(ComboboxContext);
  if (!ctx) {
    throw new Error("Combobox sub-components must be used within <Combobox>");
  }
  return ctx;
}
var ComboboxOptionItem = ({
  ref,
  value,
  label,
  disabled,
  className,
  children
}) => {
  const { selectedValue, onSelect } = useComboboxContext();
  const isSelected = selectedValue === value;
  const keywords = React24.useMemo(() => {
    if (label) return [label];
    if (typeof children === "string") return [children];
    return void 0;
  }, [label, children]);
  return /* @__PURE__ */ jsxs(
    CommandItem,
    {
      ref,
      value,
      ...keywords ? { keywords } : {},
      disabled: disabled ?? false,
      onSelect,
      className: cn("gap-2", className),
      children: [
        /* @__PURE__ */ jsx(
          Check,
          {
            "aria-hidden": "true",
            className: cn("h-4 w-4 shrink-0", isSelected ? "opacity-100" : "opacity-0")
          }
        ),
        children ?? label ?? value
      ]
    }
  );
};
ComboboxOptionItem.displayName = "Combobox.Option";
var ComboboxInput = ({
  ref,
  ...props
}) => /* @__PURE__ */ jsx(CommandInput, { ref, ...props });
ComboboxInput.displayName = "Combobox.Input";
var ComboboxEmpty = ({
  ref,
  ...props
}) => /* @__PURE__ */ jsx(CommandEmpty, { ref, ...props });
ComboboxEmpty.displayName = "Combobox.Empty";
var ComboboxGroupSub = ({
  ref,
  ...props
}) => /* @__PURE__ */ jsx(CommandGroup, { ref, ...props });
ComboboxGroupSub.displayName = "Combobox.Group";
var ComboboxSeparator = CommandSeparator;
var ComboboxList = ({
  children,
  className,
  emptyMessage = "No results found.",
  maxWidth,
  style,
  ref,
  ...props
}) => {
  const listStyle = {
    ...style,
    ...maxWidth ? { maxWidth: toCssLength(maxWidth) } : void 0
  };
  return /* @__PURE__ */ jsxs(CommandList, { ref, className, style: listStyle, ...props, children: [
    /* @__PURE__ */ jsx(CommandEmpty, { children: emptyMessage }),
    children
  ] });
};
ComboboxList.displayName = "Combobox.List";
function toCssLength(value) {
  return typeof value === "number" ? `${value}px` : value;
}
function ComboboxRoot({
  options,
  value: controlledValue,
  onChange,
  defaultValue = null,
  disabled = false,
  errored,
  error = false,
  size = "medium",
  width,
  listMaxWidth,
  label,
  hideLabel = false,
  placeholder = "Select...",
  emptyMessage = "No results found.",
  searchPlaceholder = "Search...",
  loading = false,
  loadingMessage = "Loading options...",
  children,
  className,
  style,
  "aria-label": ariaLabel,
  ...props
}) {
  const [internalValue, setInternalValue] = React24.useState(defaultValue);
  const selectedValue = controlledValue !== void 0 ? controlledValue : internalValue;
  const normalizedSize = comboboxSizeMap[size];
  const isErrored = errored ?? error;
  const selectedValueRef = React24.useRef(selectedValue);
  selectedValueRef.current = selectedValue;
  const [open, setOpen] = React24.useState(false);
  const handleSelect = React24.useCallback(
    (incoming) => {
      const current = selectedValueRef.current;
      const next = incoming === current ? null : incoming;
      if (controlledValue === void 0) setInternalValue(next);
      onChange?.(next);
      setOpen(false);
    },
    [controlledValue, onChange]
  );
  const selectedLabel = React24.useMemo(() => {
    if (!selectedValue) return "";
    if (!options) return selectedValue;
    return options.find((o) => o.value === selectedValue)?.label ?? selectedValue;
  }, [options, selectedValue]);
  const labelId = React24.useId();
  const triggerId = React24.useId();
  const listboxId = React24.useId();
  const contextValue = React24.useMemo(
    () => ({ selectedValue: selectedValue ?? null, onSelect: handleSelect }),
    [selectedValue, handleSelect]
  );
  const groupedOptions = React24.useMemo(() => {
    if (!options) return null;
    const grouped = /* @__PURE__ */ new Map();
    for (const opt of options) {
      const key = opt.group;
      const group = grouped.get(key);
      if (group) {
        group.push(opt);
      } else {
        grouped.set(key, [opt]);
      }
    }
    return grouped;
  }, [options]);
  const renderContent = () => {
    if (groupedOptions) {
      const listProps = {
        emptyMessage: loading ? loadingMessage : emptyMessage,
        ...listMaxWidth ? { maxWidth: listMaxWidth } : void 0
      };
      return /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(CommandInput, { placeholder: searchPlaceholder }),
        /* @__PURE__ */ jsx(ComboboxList, { ...listProps, children: !loading && Array.from(groupedOptions.entries()).map(([group, opts]) => /* @__PURE__ */ jsx(CommandGroup, { heading: group, children: opts.map((opt) => /* @__PURE__ */ jsx(
          ComboboxOptionItem,
          {
            value: opt.value,
            disabled: opt.disabled ?? false,
            children: opt.label
          },
          opt.value
        )) }, group ?? "__ungrouped__")) })
      ] });
    }
    return children;
  };
  const rootStyle = {
    ...style,
    ...comboboxSizeTokens[normalizedSize],
    ...width ? { "--combobox-width": toCssLength(width) } : void 0
  };
  return /* @__PURE__ */ jsx(ComboboxContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex w-[var(--combobox-width,100%)] flex-col gap-1.5", className),
      style: rootStyle,
      ...props,
      children: [
        label && /* @__PURE__ */ jsx(Label, { id: labelId, htmlFor: triggerId, className: cn(hideLabel && "sr-only"), children: label }),
        /* @__PURE__ */ jsxs(
          Popover,
          {
            open,
            onOpenChange: (isOpen) => {
              if (!disabled) setOpen(isOpen);
            },
            children: [
              /* @__PURE__ */ jsx(PopoverTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                "button",
                {
                  id: triggerId,
                  type: "button",
                  role: "combobox",
                  "aria-haspopup": "listbox",
                  "aria-expanded": open,
                  "aria-controls": listboxId,
                  "aria-labelledby": label ? labelId : void 0,
                  "aria-label": !label ? ariaLabel ?? placeholder : void 0,
                  "aria-invalid": isErrored || void 0,
                  "data-invalid": isErrored || void 0,
                  disabled,
                  className: cn(comboboxTriggerVariants({ size: normalizedSize, error: isErrored })),
                  children: [
                    /* @__PURE__ */ jsx("span", { className: cn(!selectedValue && "text-muted-foreground"), children: selectedValue ? selectedLabel : placeholder }),
                    /* @__PURE__ */ jsx(ChevronUpDown, { "aria-hidden": "true", className: "h-4 w-4 shrink-0 opacity-50" })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(
                PopoverContent,
                {
                  className: "p-0",
                  style: {
                    width: "var(--combobox-width, var(--radix-popover-trigger-width))",
                    maxWidth: listMaxWidth ? toCssLength(listMaxWidth) : void 0
                  },
                  children: /* @__PURE__ */ jsx(Command, { id: listboxId, children: renderContent() })
                }
              )
            ]
          }
        )
      ]
    }
  ) });
}
ComboboxRoot.displayName = "Combobox";
var Combobox = Object.assign(ComboboxRoot, {
  Input: ComboboxInput,
  List: ComboboxList,
  Option: ComboboxOptionItem,
  Empty: ComboboxEmpty,
  Group: ComboboxGroupSub,
  Separator: ComboboxSeparator
});
function ContextMenuItemContent({
  children,
  prefix,
  suffix,
  inset = false
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    prefix && /* @__PURE__ */ jsx("span", { className: "flex shrink-0 items-center text-muted-foreground", children: prefix }),
    !prefix && inset && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "size-4 shrink-0" }),
    /* @__PURE__ */ jsx("span", { className: "min-w-0 flex-1 truncate", children }),
    suffix && /* @__PURE__ */ jsx("span", { className: "ml-auto flex shrink-0 items-center text-muted-foreground", children: suffix })
  ] });
}
var ContextMenuRoot = ContextMenu$1.Root;
var ContextMenuTrigger = ({
  asChild,
  children,
  render,
  ref,
  ...props
}) => {
  const renderElement = asChild && React24.isValidElement(children) ? children : render;
  return /* @__PURE__ */ jsx(
    ContextMenu$1.Trigger,
    {
      ref,
      render: renderElement,
      ...renderElement ? props : { ...props, children }
    }
  );
};
ContextMenuTrigger.displayName = "ContextMenu.Trigger";
var ContextMenuContent = ({
  className,
  alignOffset = 0,
  align = "start",
  sideOffset = 4,
  side = "bottom",
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(ContextMenu$1.Portal, { children: /* @__PURE__ */ jsx(
  ContextMenu$1.Positioner,
  {
    alignOffset,
    align,
    sideOffset,
    side,
    children: /* @__PURE__ */ jsx(
      ContextMenu$1.Popup,
      {
        ref,
        className: cn(
          overlayClassNames.menuSurface,
          overlayPrimitiveClassNames.menuSurface,
          "min-w-40 max-w-80",
          className
        ),
        style: {
          zIndex: overlayZIndex.popover,
          maxHeight: "var(--context-menu-max-height, var(--available-height))",
          ...style
        },
        ...props
      }
    )
  }
) });
ContextMenuContent.displayName = "ContextMenu.Content";
var ContextMenuGroup = ContextMenu$1.Group;
ContextMenuGroup.displayName = "ContextMenu.Group";
var ContextMenuLabel = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  ContextMenu$1.GroupLabel,
  {
    ref,
    className: cn("px-2 py-1 text-xs font-medium text-muted-foreground", className),
    ...props
  }
);
ContextMenuLabel.displayName = "ContextMenu.Label";
var ContextMenuSeparator = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  ContextMenu$1.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-border", className),
    ...props
  }
);
ContextMenuSeparator.displayName = "ContextMenu.Separator";
var ContextMenuItem = ({
  children,
  onSelect,
  disabled,
  href,
  target,
  rel,
  prefix,
  suffix,
  variant = "default",
  value,
  className,
  ref,
  ...props
}) => {
  const inner = /* @__PURE__ */ jsx(ContextMenuItemContent, { prefix, suffix, children });
  if (href) {
    return /* @__PURE__ */ jsx(
      ContextMenu$1.LinkItem,
      {
        ref,
        href,
        target,
        rel,
        "data-value": value,
        "data-variant": variant,
        className: cn(overlayPrimitiveClassNames.contextMenuItem, className),
        ...props,
        children: inner
      }
    );
  }
  return /* @__PURE__ */ jsx(
    ContextMenu$1.Item,
    {
      ref,
      "data-value": value,
      "data-variant": variant,
      disabled,
      onClick: onSelect,
      className: cn(overlayPrimitiveClassNames.contextMenuItem, className),
      ...props,
      children: inner
    }
  );
};
ContextMenuItem.displayName = "ContextMenu.Item";
var ContextMenuCheckboxItem = ({
  children,
  prefix,
  suffix,
  onSelect,
  value,
  className,
  checked,
  defaultChecked,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  ContextMenu$1.CheckboxItem,
  {
    ref,
    checked,
    defaultChecked,
    "data-value": value,
    onClick: onSelect,
    className: cn(overlayPrimitiveClassNames.contextMenuItem, "pl-8", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ContextMenu$1.CheckboxItemIndicator, { className: overlayPrimitiveClassNames.menuIndicator, children: /* @__PURE__ */ jsx(Check, { className: "size-4" }) }),
      /* @__PURE__ */ jsx(ContextMenuItemContent, { prefix, suffix, children })
    ]
  }
);
ContextMenuCheckboxItem.displayName = "ContextMenu.CheckboxItem";
var ContextMenuRadioGroup = ({
  onValueChange,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(ContextMenu$1.RadioGroup, { ref, onValueChange, ...props });
ContextMenuRadioGroup.displayName = "ContextMenu.RadioGroup";
var ContextMenuRadioItem = ({
  children,
  prefix,
  suffix,
  onSelect,
  className,
  value,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  ContextMenu$1.RadioItem,
  {
    ref,
    value,
    onClick: onSelect,
    className: cn(overlayPrimitiveClassNames.contextMenuItem, "pl-8", className),
    ...props,
    children: [
      /* @__PURE__ */ jsx(ContextMenu$1.RadioItemIndicator, { className: overlayPrimitiveClassNames.menuIndicator, children: /* @__PURE__ */ jsx("span", { className: "size-2 rounded-full bg-current" }) }),
      /* @__PURE__ */ jsx(ContextMenuItemContent, { prefix, suffix, children })
    ]
  }
);
ContextMenuRadioItem.displayName = "ContextMenu.RadioItem";
var ContextMenuSub = ContextMenu$1.SubmenuRoot;
var ContextMenuSubTrigger = ({
  children,
  prefix,
  suffix,
  onSelect,
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  ContextMenu$1.SubmenuTrigger,
  {
    ref,
    onClick: onSelect,
    className: cn(overlayPrimitiveClassNames.contextMenuItem, className),
    ...props,
    children: /* @__PURE__ */ jsx(ContextMenuItemContent, { prefix, suffix: suffix ?? /* @__PURE__ */ jsx(ChevronRight, { className: "size-4" }), children })
  }
);
ContextMenuSubTrigger.displayName = "ContextMenu.SubTrigger";
var ContextMenuSubContent = ContextMenuContent;
ContextMenuSubContent.displayName = "ContextMenu.SubContent";
var ContextMenuShortcut = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "span",
  {
    ref,
    className: cn("ml-auto text-xs tabular-nums text-muted-foreground", className),
    ...props
  }
);
ContextMenuShortcut.displayName = "ContextMenu.Shortcut";
var ContextMenu = Object.assign(ContextMenuRoot, {
  Root: ContextMenuRoot,
  Trigger: ContextMenuTrigger,
  Content: ContextMenuContent,
  Group: ContextMenuGroup,
  Item: ContextMenuItem,
  CheckboxItem: ContextMenuCheckboxItem,
  RadioGroup: ContextMenuRadioGroup,
  RadioItem: ContextMenuRadioItem,
  Label: ContextMenuLabel,
  Separator: ContextMenuSeparator,
  Shortcut: ContextMenuShortcut,
  Sub: ContextMenuSub,
  SubTrigger: ContextMenuSubTrigger,
  SubContent: ContextMenuSubContent
});
var DEFAULT_TOOLTIP_DELAY_MS = 150;
var TooltipProvider = ({
  children,
  delayDuration = DEFAULT_TOOLTIP_DELAY_MS
}) => {
  return /* @__PURE__ */ jsx(Tooltip$1.Provider, { delay: delayDuration, children });
};
var Tooltip = ({
  delayDuration,
  children,
  ...props
}) => {
  const delay = delayDuration ?? DEFAULT_TOOLTIP_DELAY_MS;
  return /* @__PURE__ */ jsx(Tooltip$1.Provider, { delay, children: /* @__PURE__ */ jsx(Tooltip$1.Root, { ...props, children }) });
};
var TooltipTrigger = ({
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React24.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      Tooltip$1.Trigger,
      {
        ref,
        ...props,
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(Tooltip$1.Trigger, { ref, ...props, children });
};
TooltipTrigger.displayName = "TooltipTrigger";
var TooltipContent = ({
  className,
  style,
  side = "top",
  align = "center",
  sideOffset = 4,
  alignOffset = 0,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(Tooltip$1.Portal, { children: /* @__PURE__ */ jsx(
  Tooltip$1.Positioner,
  {
    side,
    align,
    sideOffset,
    alignOffset,
    style: { zIndex: overlayZIndex.tooltip },
    children: /* @__PURE__ */ jsx(
      Tooltip$1.Popup,
      {
        ref,
        className: cn(overlayClassNames.tooltipSurface, className),
        style: { zIndex: overlayZIndex.tooltip, ...style },
        ...props
      }
    )
  }
) });
TooltipContent.displayName = "TooltipContent";
var COPIED_TINT = "text-[hsl(var(--success-strong))]";
function CopiedAnnouncement({ copied, message }) {
  return /* @__PURE__ */ jsx("span", { "aria-live": "polite", className: "sr-only", children: copied ? message : "" });
}
function CopyButton({
  value,
  label,
  copiedLabel = "Copied",
  successMessage = "Copied to clipboard",
  tooltipText = "Copy",
  iconType = "copy",
  iconPosition = "leading",
  showToast = true,
  timeout = 2e3,
  onCopied,
  variant = "ghost",
  size = "icon",
  className,
  ...props
}) {
  const { copied, copy } = useCopyToClipboard({ successMessage, showToast, timeout });
  const IconComponent = {
    copy: Copy,
    link: Link,
    code: Code,
    hash: Hash
  }[iconType];
  const handleCopy = async () => {
    if (await copy(value)) onCopied?.(value);
  };
  const icon = copied ? /* @__PURE__ */ jsx(Check, { className: COPIED_TINT }) : /* @__PURE__ */ jsx(IconComponent, {});
  const iconSlot = iconPosition === "trailing" ? { suffix: icon } : { prefix: icon };
  const button = /* @__PURE__ */ jsxs(
    Button,
    {
      variant,
      size,
      onClick: handleCopy,
      className: cn("transition-colors", className),
      ...iconSlot,
      ...props,
      children: [
        label && /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate", children: copied && copiedLabel ? copiedLabel : label }),
        !label && /* @__PURE__ */ jsx("span", { className: "sr-only", children: tooltipText }),
        /* @__PURE__ */ jsx(CopiedAnnouncement, { copied, message: successMessage })
      ]
    }
  );
  if (!label) {
    return /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: button }),
      /* @__PURE__ */ jsx(TooltipContent, { children: /* @__PURE__ */ jsx("p", { children: copied ? "Copied" : tooltipText }) })
    ] });
  }
  return button;
}
function CopyIdButton({
  id,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CopyButton,
    {
      value: id,
      iconType: "hash",
      tooltipText: "Copy ID",
      successMessage: "ID copied",
      className: cn("size-6", className),
      ...props
    }
  );
}
function CopyLinkButton({
  url,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CopyButton,
    {
      value: url,
      iconType: "link",
      tooltipText: "Copy link",
      successMessage: "Link copied",
      className: cn("size-6", className),
      ...props
    }
  );
}
function CopyCodeButton({
  code,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    CopyButton,
    {
      value: code,
      iconType: "code",
      tooltipText: "Copy code",
      successMessage: "Code copied",
      className: cn("size-6", className),
      ...props
    }
  );
}
function CopyMenuItem({
  value,
  children,
  successMessage = "Copied to clipboard",
  showToast = false,
  timeout = 2e3,
  closeOnCopy = false,
  onCopied,
  className,
  ...props
}) {
  const { copied, copy } = useCopyToClipboard({ successMessage, showToast, timeout });
  const handleCopy = async () => {
    if (await copy(value)) onCopied?.(value);
  };
  return /* @__PURE__ */ jsxs(
    DropdownMenuItem,
    {
      closeOnClick: closeOnCopy,
      onClick: handleCopy,
      className: cn("cursor-pointer", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "flex-1", children }),
        copied ? /* @__PURE__ */ jsx(Check, { "aria-hidden": "true", className: cn("size-4", COPIED_TINT) }) : /* @__PURE__ */ jsx(Copy, { "aria-hidden": "true", className: "size-4 text-muted-foreground" }),
        /* @__PURE__ */ jsx(CopiedAnnouncement, { copied, message: successMessage })
      ]
    }
  );
}
function CopyableField({ value, label, truncate = true, className }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex items-center gap-2", className), children: [
    label && /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground shrink-0", children: [
      label,
      ":"
    ] }),
    /* @__PURE__ */ jsx(
      "code",
      {
        className: cn("rounded bg-muted px-2 py-1 text-sm font-mono", truncate && "truncate"),
        title: value,
        children: value
      }
    ),
    /* @__PURE__ */ jsx(CopyButton, { value, showToast: false, className: "shrink-0 size-7" })
  ] });
}
function useCopyToClipboard(options = {}) {
  const { successMessage = "Copied to clipboard", showToast = true, timeout = 2e3 } = options;
  const [copied, setCopied] = React24.useState(false);
  const copy = React24.useCallback(
    async (value) => {
      try {
        await navigator.clipboard.writeText(value);
        setCopied(true);
        if (showToast) {
          toast.success(successMessage);
        }
        setTimeout(() => setCopied(false), timeout);
        return true;
      } catch (error) {
        console.error("Failed to copy:", error);
        toast.error("Failed to copy to clipboard");
        return false;
      }
    },
    [successMessage, showToast, timeout]
  );
  return { copied, copy };
}

// src/tokens/components/context-card.ts
var contextCardTokens = {
  width: {
    sm: primitiveSizing["2xl"] * 3,
    // 240px
    md: primitiveSpacing[10] * 8
    // 320px
  },
  padding: {
    x: primitiveSpacing[3],
    // 12px
    y: primitiveSpacing[3]
    // 12px
  },
  gap: {
    stack: primitiveSpacing[3],
    // 12px
    section: primitiveSpacing[2],
    // 8px
    row: primitiveSpacing[1]
    // 4px
  },
  borderRadius: primitiveRadius.lg,
  // 8px
  fontSize: {
    body: primitiveFontSize.sm,
    // 14px
    metadata: primitiveFontSize.xs
    // 12px
  },
  motion: {
    openDelay: 150,
    closeDelay: 120,
    duration: primitiveTransition.duration.flow,
    easing: primitiveTransition.easing.default
  }
};
var contextCardCssVars = (width) => ({
  "--context-card-width": `${contextCardTokens.width[width]}px`,
  "--context-card-padding-x": `${contextCardTokens.padding.x}px`,
  "--context-card-padding-y": `${contextCardTokens.padding.y}px`,
  "--context-card-stack-gap": `${contextCardTokens.gap.stack}px`,
  "--context-card-section-gap": `${contextCardTokens.gap.section}px`,
  "--context-card-row-gap": `${contextCardTokens.gap.row}px`,
  "--context-card-radius": `${contextCardTokens.borderRadius}px`,
  "--context-card-body-size": `${contextCardTokens.fontSize.body}px`,
  "--context-card-metadata-size": `${contextCardTokens.fontSize.metadata}px`,
  "--context-card-duration": `${contextCardTokens.motion.duration}ms`,
  "--context-card-easing": contextCardTokens.motion.easing
});
function composeRefs(...refs) {
  return (node) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    }
  };
}
function isFocusableElement(element) {
  return element instanceof HTMLElement && !element.hasAttribute("disabled");
}
function focusFirstPanelTarget(panel) {
  if (!panel) return;
  const target = panel.querySelector(
    'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])'
  );
  if (target && isFocusableElement(target)) {
    target.focus();
    return;
  }
  panel.focus();
}
var ContextCardTrigger = ({
  ref: forwardedRef,
  content,
  side = "top",
  align = "center",
  sideOffset = 8,
  alignOffset = 0,
  width = "md",
  openDelay = contextCardTokens.motion.openDelay,
  closeDelay = contextCardTokens.motion.closeDelay,
  children,
  className
}) => {
  const [open, setOpen] = React24.useState(false);
  const triggerRef = React24.useRef(null);
  const panelRef = React24.useRef(null);
  const openTimerRef = React24.useRef(null);
  const closeTimerRef = React24.useRef(null);
  const clearTimers = React24.useCallback(() => {
    if (openTimerRef.current) window.clearTimeout(openTimerRef.current);
    if (closeTimerRef.current) window.clearTimeout(closeTimerRef.current);
    openTimerRef.current = null;
    closeTimerRef.current = null;
  }, []);
  const scheduleOpen = React24.useCallback(() => {
    clearTimers();
    openTimerRef.current = window.setTimeout(() => setOpen(true), openDelay);
  }, [clearTimers, openDelay]);
  const scheduleClose = React24.useCallback(() => {
    clearTimers();
    closeTimerRef.current = window.setTimeout(() => setOpen(false), closeDelay);
  }, [clearTimers, closeDelay]);
  const closeNow = React24.useCallback(() => {
    clearTimers();
    setOpen(false);
  }, [clearTimers]);
  React24.useEffect(() => clearTimers, [clearTimers]);
  const triggerElement = React24.isValidElement(children) ? children : /* @__PURE__ */ jsx("span", { children });
  const renderTrigger = triggerElement;
  return /* @__PURE__ */ jsxs(Popover$1.Root, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(
      Popover$1.Trigger,
      {
        ref: composeRefs(triggerRef, forwardedRef),
        render: renderTrigger,
        onMouseEnter: scheduleOpen,
        onMouseLeave: scheduleClose,
        onFocus: scheduleOpen,
        onBlur: scheduleClose,
        onKeyDown: (event) => {
          if (event.key === "Escape") {
            closeNow();
            triggerRef.current?.focus();
            return;
          }
          if ((event.key === "ArrowDown" || event.key === "Enter") && !open) {
            event.preventDefault();
            clearTimers();
            setOpen(true);
            window.requestAnimationFrame(() => focusFirstPanelTarget(panelRef.current));
          }
        }
      }
    ),
    /* @__PURE__ */ jsx(Popover$1.Portal, { children: /* @__PURE__ */ jsx(
      Popover$1.Positioner,
      {
        side,
        align,
        sideOffset,
        alignOffset,
        className: "z-50",
        children: /* @__PURE__ */ jsx(
          Popover$1.Popup,
          {
            ref: panelRef,
            tabIndex: -1,
            onMouseEnter: scheduleOpen,
            onMouseLeave: scheduleClose,
            onFocus: scheduleOpen,
            onBlur: scheduleClose,
            onKeyDown: (event) => {
              if (event.key === "Escape") {
                closeNow();
                triggerRef.current?.focus();
              }
            },
            style: contextCardCssVars(width),
            className: cn(
              "z-50 flex w-[var(--context-card-width)] flex-col gap-[var(--context-card-stack-gap)] overflow-hidden",
              "rounded-[var(--context-card-radius)] border border-border bg-popover",
              "px-[var(--context-card-padding-x)] py-[var(--context-card-padding-y)]",
              "text-[length:var(--context-card-body-size)] text-popover-foreground shadow-md outline-none",
              "transition-[opacity,transform,display] duration-[var(--context-card-duration)] ease-[var(--context-card-easing)]",
              "data-starting-style:opacity-0 data-ending-style:opacity-0 data-starting-style:scale-[0.98] data-ending-style:scale-[0.98]",
              "motion-reduce:transition-none motion-reduce:data-starting-style:scale-100 motion-reduce:data-ending-style:scale-100",
              "",
              "data-[side=bottom]:origin-top data-[side=left]:origin-right data-[side=right]:origin-left data-[side=top]:origin-bottom",
              className
            ),
            children: content
          }
        )
      }
    ) })
  ] });
};
ContextCardTrigger.displayName = "ContextCard.Trigger";
var ContextCard = {
  Trigger: ContextCardTrigger
};
var Description = function Description2({
  ref,
  title,
  content,
  tooltip,
  className
}) {
  return /* @__PURE__ */ jsxs("dl", { ref, className: cn("font-sans", className), children: [
    /* @__PURE__ */ jsxs("dt", { className: "flex items-center gap-1 text-muted-foreground text-sm capitalize", children: [
      title,
      tooltip && /* @__PURE__ */ jsx(ContextCard.Trigger, { content: tooltip, side: "top", sideOffset: 6, children: /* @__PURE__ */ jsx(Information, { "aria-hidden": "true", className: "size-3.5 shrink-0 text-muted-foreground" }) })
    ] }),
    /* @__PURE__ */ jsx("dd", { className: "mt-1 font-medium text-foreground text-sm", children: content })
  ] });
};
var DrawerRootContext = React24.createContext({});
function formatDrawerHeight(height) {
  if (height == null) {
    return void 0;
  }
  return typeof height === "number" ? `${height}px` : height;
}
function Drawer({
  show,
  onDismiss,
  height,
  customHeight,
  direction = "bottom",
  open,
  onOpenChange,
  modal = true,
  shouldScaleBackground = false,
  ...props
}) {
  const controlledOpen = open ?? show;
  const rootProps = {
    ...props,
    direction,
    modal,
    shouldScaleBackground
  };
  if (controlledOpen !== void 0) {
    rootProps.open = controlledOpen;
  }
  if (onOpenChange !== void 0 || onDismiss !== void 0) {
    rootProps.onOpenChange = (nextOpen) => {
      onOpenChange?.(nextOpen);
      if (!nextOpen) {
        onDismiss?.();
      }
    };
  }
  const contextValue = React24.useMemo(() => {
    const resolvedHeight = customHeight ?? height;
    return resolvedHeight === void 0 ? {} : { height: resolvedHeight };
  }, [customHeight, height]);
  return /* @__PURE__ */ jsx(DrawerRootContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(Drawer$1.Root, { "data-slot": "drawer", ...rootProps }) });
}
function DrawerTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Drawer$1.Trigger, { "data-slot": "drawer-trigger", ...props });
}
function DrawerPortal({ ...props }) {
  return /* @__PURE__ */ jsx(Drawer$1.Portal, { "data-slot": "drawer-portal", ...props });
}
function DrawerClose({ ...props }) {
  return /* @__PURE__ */ jsx(Drawer$1.Close, { "data-slot": "drawer-close", ...props });
}
function DrawerOverlay({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Drawer$1.Overlay,
    {
      "data-slot": "drawer-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-background/70 backdrop-blur-[2px]",
        "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
        className
      ),
      ...props
    }
  );
}
function DrawerContent({
  className,
  children,
  height,
  verticalScroll = true,
  showHandle = true,
  style,
  ...props
}) {
  const rootContext = React24.use(DrawerRootContext);
  const resolvedHeight = formatDrawerHeight(height ?? rootContext.height);
  const contentStyle = resolvedHeight === void 0 ? style : {
    "--drawer-height": resolvedHeight,
    ...style
  };
  return /* @__PURE__ */ jsxs(DrawerPortal, { "data-slot": "drawer-portal", children: [
    /* @__PURE__ */ jsx(DrawerOverlay, {}),
    /* @__PURE__ */ jsxs(
      Drawer$1.Content,
      {
        "data-slot": "drawer-content",
        className: cn(
          "group/drawer-content fixed z-50 flex bg-background text-foreground shadow-lg outline-none",
          verticalScroll && "overflow-hidden",
          "data-[vaul-drawer-direction=bottom]:inset-x-0 data-[vaul-drawer-direction=bottom]:bottom-0 data-[vaul-drawer-direction=bottom]:h-[var(--drawer-height,auto)] data-[vaul-drawer-direction=bottom]:max-h-[min(var(--drawer-height,80vh),calc(100dvh-1rem))] data-[vaul-drawer-direction=bottom]:flex-col data-[vaul-drawer-direction=bottom]:rounded-t-[var(--radius-xl)] data-[vaul-drawer-direction=bottom]:border-t",
          "data-[vaul-drawer-direction=top]:inset-x-0 data-[vaul-drawer-direction=top]:top-0 data-[vaul-drawer-direction=top]:h-[var(--drawer-height,auto)] data-[vaul-drawer-direction=top]:max-h-[min(var(--drawer-height,80vh),calc(100dvh-1rem))] data-[vaul-drawer-direction=top]:flex-col data-[vaul-drawer-direction=top]:rounded-b-[var(--radius-xl)] data-[vaul-drawer-direction=top]:border-b",
          "data-[vaul-drawer-direction=right]:inset-y-0 data-[vaul-drawer-direction=right]:right-0 data-[vaul-drawer-direction=right]:w-[min(24rem,calc(100vw-2rem))] data-[vaul-drawer-direction=right]:flex-col data-[vaul-drawer-direction=right]:border-l",
          "data-[vaul-drawer-direction=left]:inset-y-0 data-[vaul-drawer-direction=left]:left-0 data-[vaul-drawer-direction=left]:w-[min(24rem,calc(100vw-2rem))] data-[vaul-drawer-direction=left]:flex-col data-[vaul-drawer-direction=left]:border-r",
          className
        ),
        style: contentStyle,
        ...props,
        children: [
          showHandle ? /* @__PURE__ */ jsx(Drawer$1.Handle, { className: "mx-auto mt-2 hidden h-1 w-10 shrink-0 rounded-full bg-muted-foreground/30 group-data-[vaul-drawer-direction=bottom]/drawer-content:block" }) : null,
          children
        ]
      }
    )
  ] });
}
function DrawerHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "drawer-header",
      className: cn(
        "grid w-full gap-1 border-b px-5 pb-4 pt-3 text-center md:mx-auto md:max-w-md",
        className
      ),
      ...props
    }
  );
}
function DrawerBody({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "drawer-body",
      className: cn(
        "min-h-0 w-full flex-1 overscroll-contain px-5 py-4 md:mx-auto md:max-w-md",
        "group-data-[vaul-drawer-direction=bottom]/drawer-content:overflow-y-auto group-data-[vaul-drawer-direction=top]/drawer-content:overflow-y-auto",
        className
      ),
      ...props
    }
  );
}
function DrawerFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "drawer-footer",
      className: cn(
        "mt-auto grid w-full gap-2 border-t bg-background/95 px-5 py-4 md:mx-auto md:max-w-md",
        className
      ),
      ...props
    }
  );
}
function DrawerTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Drawer$1.Title,
    {
      "data-slot": "drawer-title",
      className: cn("text-base font-semibold leading-6 text-foreground", className),
      ...props
    }
  );
}
function DrawerDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Drawer$1.Description,
    {
      "data-slot": "drawer-description",
      className: cn("text-sm leading-5 text-muted-foreground", className),
      ...props
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
  const hasActions = React24.Children.toArray(actions).length > 0;
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
var textSize = {
  small: "text-xs",
  medium: "text-sm",
  large: "text-base"
};
var iconSize = {
  small: 12,
  medium: 14,
  large: 16
};
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
var ErrorMessage = ({
  ref,
  children,
  label,
  size = "medium",
  error,
  className
}) => {
  const sz = size;
  const message = error?.message ?? children;
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ref,
      role: "alert",
      className: cn("inline-flex items-center gap-1.5 text-destructive", textSize[sz], className),
      children: [
        /* @__PURE__ */ jsx(Warning, { size: iconSize[sz], "aria-hidden": "true", className: "shrink-0" }),
        /* @__PURE__ */ jsxs("span", { children: [
          label && /* @__PURE__ */ jsxs("span", { className: "font-medium", children: [
            label,
            ":\xA0"
          ] }),
          message,
          error?.action && error.link && /* @__PURE__ */ jsxs(Fragment, { children: [
            " ",
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: error.link,
                className: "underline underline-offset-2 hover:no-underline",
                target: "_blank",
                rel: "noopener noreferrer",
                children: [
                  error.action,
                  /* @__PURE__ */ jsx(External, { size: 10, "aria-hidden": "true", className: "ml-0.5 inline" })
                ]
              }
            )
          ] })
        ] })
      ]
    }
  );
};
ErrorMessage.displayName = "ErrorMessage";
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
var Field = ({
  className,
  label,
  description,
  error,
  htmlFor,
  children,
  ref,
  ...props
}) => {
  return /* @__PURE__ */ jsxs("div", { ref, className: cn("grid gap-2", className), ...props, children: [
    /* @__PURE__ */ jsx(Label, { htmlFor, className: cn(error && "text-destructive"), children: label }),
    children,
    description && !error && /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: description }),
    error && /* @__PURE__ */ jsx("p", { className: "text-sm font-medium text-destructive", children: error })
  ] });
};
Field.displayName = "Field";
var Form = FormProvider;
var FormFieldContext = React24.createContext({});
var FormField = ({
  ...props
}) => {
  return /* @__PURE__ */ jsx(FormFieldContext.Provider, { value: { name: props.name }, children: /* @__PURE__ */ jsx(Controller, { ...props }) });
};
var useFormField = () => {
  const fieldContext = React24.use(FormFieldContext);
  const itemContext = React24.use(FormItemContext);
  const { getFieldState, formState } = useFormContext();
  const fieldState = getFieldState(fieldContext.name, formState);
  if (!fieldContext) {
    throw new Error("useFormField should be used within <FormField>");
  }
  const { id } = itemContext;
  return {
    id,
    name: fieldContext.name,
    formItemId: `${id}-form-item`,
    formDescriptionId: `${id}-form-item-description`,
    formMessageId: `${id}-form-item-message`,
    ...fieldState
  };
};
var FormItemContext = React24.createContext({});
var FormItem = ({
  className,
  ref,
  ...props
}) => {
  const id = React24.useId();
  return /* @__PURE__ */ jsx(FormItemContext.Provider, { value: { id }, children: /* @__PURE__ */ jsx("div", { ref, className: cn("space-y-2", className), ...props }) });
};
FormItem.displayName = "FormItem";
var FormLabel = ({
  className,
  ref,
  ...props
}) => {
  const { error, formItemId } = useFormField();
  return /* @__PURE__ */ jsx(
    Label,
    {
      ref,
      className: cn(error && "text-destructive", className),
      htmlFor: formItemId,
      ...props
    }
  );
};
FormLabel.displayName = "FormLabel";
var FormControl = ({
  ref,
  ...props
}) => {
  const { error, formItemId, formDescriptionId, formMessageId } = useFormField();
  return /* @__PURE__ */ jsx(
    Slot,
    {
      ref,
      id: formItemId,
      "aria-describedby": !error ? `${formDescriptionId}` : `${formDescriptionId} ${formMessageId}`,
      "aria-invalid": !!error,
      ...props
    }
  );
};
FormControl.displayName = "FormControl";
var FormDescription = ({
  className,
  ref,
  ...props
}) => {
  const { formDescriptionId } = useFormField();
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formDescriptionId,
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
};
FormDescription.displayName = "FormDescription";
var FormMessage = ({
  className,
  children,
  ref,
  ...props
}) => {
  const { error, formMessageId } = useFormField();
  const body = error ? String(error?.message) : children;
  if (!body) {
    return null;
  }
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      id: formMessageId,
      className: cn("text-sm font-medium text-destructive", className),
      ...props,
      children: body
    }
  );
};
FormMessage.displayName = "FormMessage";
var gaugeSizes = {
  tiny: 20,
  small: 32,
  medium: 64,
  large: 128
};
var gapPercentBySize = {
  tiny: 9,
  small: 6,
  medium: 5,
  large: 5
};
var defaultGaugeColors = {
  "0": "hsl(var(--success))",
  "80": "hsl(var(--warning))",
  "95": "hsl(var(--destructive))"
};
function clampValue(value) {
  return Math.min(100, Math.max(0, value ?? 0));
}
function normalizeSize(size) {
  if (typeof size === "number") {
    if (size <= gaugeSizes.tiny) return { key: "tiny", pixels: size };
    if (size <= gaugeSizes.small) return { key: "small", pixels: size };
    if (size <= gaugeSizes.medium) return { key: "medium", pixels: size };
    return { key: "large", pixels: size };
  }
  const key = size ?? "medium";
  return { key, pixels: gaugeSizes[key] };
}
function normalizeArcPriority(arcPriority) {
  if (arcPriority === "equal" || arcPriority === "secondary") {
    return "equal";
  }
  return "default";
}
function resolveThresholdColor(value, colors2) {
  const stops = Array.isArray(colors2) ? colors2.map((stop) => [String(stop.value), stop.color]) : Object.entries(colors2).filter(([key]) => Number.isFinite(Number(key)));
  const sortedStops = stops.map(([key, color]) => ({ threshold: Number(key), color })).filter((stop) => Number.isFinite(stop.threshold)).sort((a, b) => a.threshold - b.threshold);
  let resolved = sortedStops[0]?.color ?? "currentColor";
  for (const stop of sortedStops) {
    if (value >= stop.threshold) {
      resolved = stop.color;
    }
  }
  return resolved;
}
function resolvePrimaryColor(value, colors2) {
  if (Array.isArray(colors2)) {
    return resolveThresholdColor(value, colors2);
  }
  if (colors2?.primary) {
    return colors2.primary;
  }
  return resolveThresholdColor(value, colors2 ?? defaultGaugeColors);
}
function resolveSecondaryColor(colors2, secondaryColor) {
  if (!Array.isArray(colors2) && colors2?.secondary) {
    return colors2.secondary;
  }
  return secondaryColor ?? "hsl(var(--muted))";
}
function getArcGeometry(value, circumference, gapPercent, arcPriority) {
  if (arcPriority === "equal") {
    const length = circumference * (100 - 2 * gapPercent) / 100 / 2;
    const halfGapDegrees = gapPercent * 3.6 / 2;
    return {
      primaryLength: length,
      secondaryLength: length,
      primaryRotation: -90 + halfGapDegrees,
      secondaryRotation: 270 - halfGapDegrees
    };
  }
  const gap = value === 0 ? 0 : 2 * gapPercent;
  const secondaryPercent = Math.max(100 - gap - value, 0);
  return {
    primaryLength: circumference * value / 100,
    secondaryLength: circumference * secondaryPercent / 100,
    primaryRotation: -90,
    secondaryRotation: 270 - gapPercent * 3.6
  };
}
function getValueTextClass(size) {
  switch (size) {
    case "small":
      return "text-xs font-medium";
    case "large":
      return "text-3xl font-semibold";
    case "medium":
      return "text-lg font-medium";
    case "tiny":
      return "text-xs font-medium";
  }
}
var Gauge = ({
  value,
  size = "medium",
  colors: colors2,
  secondaryColor,
  showValue = false,
  label,
  children,
  arcPriority = "default",
  indeterminate = false,
  className,
  style,
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  ref,
  ...props
}) => {
  const normalizedSize = normalizeSize(size);
  const normalizedPriority = normalizeArcPriority(arcPriority);
  const clampedValue = clampValue(value);
  const radius = normalizedSize.key === "tiny" ? 42.5 : 45;
  const circumference = 2 * Math.PI * radius;
  const geometry = getArcGeometry(
    clampedValue,
    circumference,
    gapPercentBySize[normalizedSize.key],
    normalizedPriority
  );
  const shouldShowValue = (showValue || label === true) && normalizedSize.key !== "tiny";
  const centerOverlay = label !== true && label !== false ? label : children;
  const primaryColor = resolvePrimaryColor(clampedValue, colors2);
  const trackColor = resolveSecondaryColor(colors2, secondaryColor);
  const accessibleLabel = ariaLabel ?? (indeterminate ? "Calculating value" : `${Math.round(clampedValue)} percent`);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      ref,
      role: "progressbar",
      "aria-label": ariaLabelledBy ? void 0 : accessibleLabel,
      "aria-labelledby": ariaLabelledBy,
      "aria-valuemin": 0,
      "aria-valuemax": 100,
      "aria-valuenow": indeterminate ? void 0 : clampedValue,
      "aria-busy": indeterminate || void 0,
      className: cn("relative inline-flex shrink-0 items-center justify-center", className),
      style: { width: normalizedSize.pixels, height: normalizedSize.pixels, ...style },
      children: [
        /* @__PURE__ */ jsxs(
          "svg",
          {
            "aria-hidden": "true",
            fill: "none",
            height: normalizedSize.pixels,
            width: normalizedSize.pixels,
            viewBox: "0 0 100 100",
            children: [
              /* @__PURE__ */ jsx(
                "circle",
                {
                  cx: "50",
                  cy: "50",
                  r: radius,
                  stroke: trackColor,
                  strokeDasharray: `${indeterminate ? circumference : geometry.secondaryLength} ${circumference}`,
                  strokeLinecap: "round",
                  strokeLinejoin: "round",
                  strokeWidth: "10",
                  className: "origin-center transition-[stroke-dasharray,stroke] duration-300 ease-out motion-reduce:transition-none",
                  style: { transform: `rotate(${geometry.secondaryRotation}deg) scaleY(-1)` }
                }
              ),
              (clampedValue > 0 || normalizedPriority === "equal" || indeterminate) && /* @__PURE__ */ jsx(
                "g",
                {
                  className: cn(indeterminate && "origin-center animate-spin motion-reduce:animate-none"),
                  children: /* @__PURE__ */ jsx(
                    "circle",
                    {
                      cx: "50",
                      cy: "50",
                      r: radius,
                      stroke: primaryColor,
                      strokeDasharray: `${indeterminate ? circumference * 0.25 : geometry.primaryLength} ${circumference}`,
                      strokeLinecap: "round",
                      strokeLinejoin: "round",
                      strokeWidth: "10",
                      className: "origin-center transition-[stroke-dasharray,stroke] duration-300 ease-out motion-reduce:transition-none",
                      style: { transform: `rotate(${geometry.primaryRotation}deg)` }
                    }
                  )
                }
              )
            ]
          }
        ),
        shouldShowValue && !indeterminate ? /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: cn(
              "pointer-events-none absolute inset-0 flex items-center justify-center tabular-nums text-foreground",
              getValueTextClass(normalizedSize.key)
            ),
            children: Math.round(clampedValue)
          }
        ) : null,
        centerOverlay && !shouldShowValue ? /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 flex items-center justify-center text-muted-foreground",
            children: centerOverlay
          }
        ) : null
      ]
    }
  );
};
Gauge.displayName = "Gauge";
var HoverCardContent = ({
  className,
  align = "center",
  sideOffset = 4,
  side = "bottom",
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(Popover$1.Portal, { children: /* @__PURE__ */ jsx(Popover$1.Positioner, { side, align, sideOffset, children: /* @__PURE__ */ jsx(
  Popover$1.Popup,
  {
    ref,
    className: cn(
      overlayClassNames.popoverSurface,
      overlayPrimitiveClassNames.popoverSurface,
      "w-64",
      className
    ),
    style: { zIndex: overlayZIndex.popover, ...style },
    ...props
  }
) }) });
HoverCardContent.displayName = "HoverCardContent";
var HoverCardTrigger = ({
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React24.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      Popover$1.Trigger,
      {
        ref,
        ...props,
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(Popover$1.Trigger, { ref, ...props, children });
};
HoverCardTrigger.displayName = "HoverCardTrigger";
var HoverCard = ({
  openDelay = overlayTokens.motion.hoverOpenDelay,
  closeDelay = overlayTokens.motion.hoverCloseDelay,
  children,
  ...props
}) => {
  const [open, setOpen] = React24.useState(false);
  const timeoutRef = React24.useRef(null);
  function handleMouseEnter() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(true), openDelay);
  }
  function handleMouseLeave() {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setOpen(false), closeDelay);
  }
  return (
    // biome-ignore lint/a11y/noStaticElementInteractions: hover state wrapper — interactive trigger lives inside HoverCardTrigger
    /* @__PURE__ */ jsx(
      "div",
      {
        onMouseEnter: handleMouseEnter,
        onMouseLeave: handleMouseLeave,
        className: "inline-block relative",
        children: /* @__PURE__ */ jsx(
          Popover$1.Root,
          {
            open,
            onOpenChange: (v) => {
              if (!v) setOpen(false);
            },
            ...props,
            children
          }
        )
      }
    )
  );
};
HoverCard.displayName = "HoverCard";

// src/tokens/components/input.ts
var inputTokens = {
  sizes: {
    sm: {
      height: primitiveSizing.sm,
      paddingX: primitiveSpacing[2],
      fontSize: primitiveFontSize.xs,
      radius: primitiveRadius.md,
      affixInset: primitiveSpacing[2],
      affixWidth: primitiveSizing.sm,
      controlInset: primitiveSpacing[2] - primitiveSpacing[1] / 2,
      controlSize: primitiveSizing.xs,
      controlIconSize: primitiveSizing.xs - primitiveSpacing[2],
      iconSize: primitiveFontSize.sm
    },
    md: {
      height: primitiveSizing.md,
      paddingX: primitiveSpacing[3],
      fontSize: primitiveFontSize.sm,
      radius: primitiveRadius.md,
      affixInset: primitiveSpacing[3],
      affixWidth: primitiveSizing.sm + primitiveSpacing[1],
      controlInset: primitiveSpacing[2],
      controlSize: primitiveSizing.tiny,
      controlIconSize: primitiveSizing.tiny - primitiveSpacing[2],
      iconSize: primitiveFontSize.base
    },
    lg: {
      height: primitiveSizing.lg,
      paddingX: primitiveSpacing[4],
      fontSize: primitiveFontSize.base,
      radius: primitiveRadius.lg,
      affixInset: primitiveSpacing[4],
      affixWidth: primitiveSizing.md,
      controlInset: primitiveSpacing[3],
      controlSize: primitiveSizing.tiny,
      controlIconSize: primitiveSizing.tiny - primitiveSpacing[2],
      iconSize: primitiveFontSize.base
    }
  },
  focusRingWidth: 3,
  fieldGap: primitiveSpacing[2] - primitiveSpacing[1] / 2};

// src/primitives/form-control.ts
var formControlFocusClassNames = {
  input: "outline-none focus:border-ring focus:ring-[length:var(--input-focus-ring-width)] focus:ring-ring/30",
  textarea: "outline-none focus:border-ring focus:ring-[length:var(--textarea-focus-ring-width)] focus:ring-ring/30",
  select: "outline-none focus:border-ring focus:ring-[length:var(--select-focus-ring-width)] focus:ring-ring/30"
};
var formControlInvalidClassNames = {
  input: "aria-invalid:border-destructive/60 aria-invalid:focus:border-destructive aria-invalid:focus:ring-destructive/20",
  textarea: "aria-invalid:border-destructive/60 aria-invalid:focus:border-destructive aria-invalid:focus:ring-destructive/20",
  select: "aria-invalid:border-destructive/60 aria-invalid:focus:border-destructive aria-invalid:focus:ring-destructive/20"
};
var inputVariants = cva(
  [
    "flex h-[var(--input-height)] w-full rounded-[var(--input-radius)]",
    "px-[var(--input-padding-x)] text-[length:var(--input-font-size)] text-foreground",
    "transition-[background-color,border-color,box-shadow,color] duration-micro ease-out",
    "placeholder:text-muted-foreground",
    "outline-none",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "read-only:bg-muted/70 read-only:cursor-default",
    "file:h-full file:border-0 file:border-e file:border-solid file:border-input file:bg-transparent",
    "file:me-[var(--input-padding-x)] file:pe-[var(--input-padding-x)] file:text-[length:var(--input-font-size)] file:font-medium file:text-foreground",
    formControlInvalidClassNames.input,
    "[&[type=search]::-webkit-search-cancel-button]:appearance-none",
    "[&[type=search]::-webkit-search-decoration]:appearance-none",
    "[&[type=search]::-webkit-search-results-button]:appearance-none",
    "[&[type=search]::-webkit-search-results-decoration]:appearance-none"
  ].join(" "),
  {
    variants: {
      size: {
        sm: "",
        md: "",
        lg: ""
      },
      affix: {
        none: "",
        prefix: "pl-[var(--input-padding-left)]",
        suffix: "pr-[var(--input-padding-right)]",
        both: "pl-[var(--input-padding-left)] pr-[var(--input-padding-right)]"
      },
      /**
       * `bare` drops the field's own stroke, fill and lift so it can sit inside
       * a container that already provides them — a footer subscribe group, a
       * search well, a segmented composer. Those surfaces were each being built
       * by hand with a raw <input>, because overriding the bordered look from
       * outside is not reliable: `border-transparent` passed via className and
       * `border-input` from the base are both border-color utilities, so which
       * one wins depends on their order in the generated stylesheet rather than
       * on the order they were written. That is why the stroke, fill and shadow
       * live in this variant instead of the base — the two tones now never emit
       * a competing declaration.
       *
       * A bare field draws no focus ring of its own. The container owns it, so
       * the ring surrounds the whole group rather than a box inside it.
       */
      tone: {
        bordered: `border border-input bg-background shadow-xs ${formControlFocusClassNames.input}`,
        bare: "border-0 bg-transparent shadow-none"
      }
    },
    defaultVariants: {
      size: "md",
      affix: "none",
      tone: "bordered"
    }
  }
);
var affixVariants = cva(
  [
    "pointer-events-none absolute top-1/2 flex -translate-y-1/2 items-center text-muted-foreground",
    "[&_svg:not([class*=size-])]:size-[var(--input-icon-size)]"
  ].join(" "),
  {
    variants: {
      side: {
        prefix: "left-[var(--input-affix-inset)]",
        suffix: "right-[var(--input-affix-inset)]"
      }
    }
  }
);
var inputControlButtonVariants = cva(
  [
    "absolute right-[var(--input-control-inset)] top-1/2 flex size-[var(--input-control-size)] -translate-y-1/2 items-center justify-center",
    "rounded-[var(--radius-sm)] text-muted-foreground transition-colors duration-micro ease-out",
    "hover:bg-accent hover:text-foreground",
    "focus-visible:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
    "[&_svg]:size-[var(--input-control-icon-size)]"
  ].join(" ")
);
var fieldMessageVariants = cva("text-xs", {
  variants: {
    tone: {
      description: "text-muted-foreground",
      error: "font-medium text-destructive"
    }
  }
});
function assignRef(ref, value) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  if (ref) {
    ref.current = value;
  }
}
function getInputStyle(size, style) {
  const token = inputTokens.sizes[size];
  return {
    "--input-height": `${token.height}px`,
    "--input-padding-x": `${token.paddingX}px`,
    "--input-padding-left": `${token.affixWidth}px`,
    "--input-padding-right": `${token.affixWidth}px`,
    "--input-font-size": `${token.fontSize}px`,
    "--input-radius": `${token.radius}px`,
    "--input-affix-inset": `${token.affixInset}px`,
    "--input-control-inset": `${token.controlInset}px`,
    "--input-control-size": `${token.controlSize}px`,
    "--input-control-icon-size": `${token.controlIconSize}px`,
    "--input-icon-size": `${token.iconSize}px`,
    "--input-focus-ring-width": `${inputTokens.focusRingWidth}px`,
    borderRadius: "var(--input-radius)",
    outline: "none",
    ...asPlainStyle(style)
  };
}
function getAffixMode(prefix, hasRightAdornment) {
  if (prefix != null && hasRightAdornment) return "both";
  if (prefix != null) return "prefix";
  if (hasRightAdornment) return "suffix";
  return "none";
}
function isInvalid(error, ariaInvalid) {
  return error === true || typeof error === "string" || ariaInvalid === true || ariaInvalid === "true";
}
function isTextAffix(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function joinDescriptionIds(...ids) {
  return ids.filter(Boolean).join(" ") || void 0;
}
var Input = ({
  ref: forwardedRef,
  ...props
}) => {
  const {
    className,
    type = "text",
    size = "md",
    tone = "bordered",
    prefix,
    suffix,
    clearable,
    onClear,
    onValueChange,
    shortcut,
    loading,
    revealable,
    revealLabel = "Show password",
    hideLabel = "Hide password",
    clearOnEscape,
    wrapperClassName,
    fieldClassName,
    label,
    description,
    error,
    value,
    defaultValue,
    onChange,
    onKeyDown,
    disabled,
    style,
    "aria-describedby": ariaDescribedBy,
    "aria-invalid": ariaInvalid,
    id,
    ...rest
  } = props;
  const isControlled = value !== void 0;
  const baseId = React24.useId();
  const inputRef = React24.useRef(null);
  const descriptionId = description && id ? `${id}-description` : void 0;
  const errorId = typeof error === "string" && id ? `${id}-error` : void 0;
  const prefixDescriptionId = isTextAffix(prefix) ? `${id ?? baseId}-prefix` : void 0;
  const suffixDescriptionId = isTextAffix(suffix) ? `${id ?? baseId}-suffix` : void 0;
  const [internalValue, setInternalValue] = React24.useState(
    typeof defaultValue === "string" || typeof defaultValue === "number" ? String(defaultValue) : ""
  );
  const [passwordVisible, setPasswordVisible] = React24.useState(false);
  const currentValue = isControlled ? String(value ?? "") : internalValue;
  const clearOnEscapeEnabled = clearOnEscape ?? type === "search";
  const canRevealPassword = Boolean(revealable && type === "password");
  const showClear = Boolean(clearable && !disabled && currentValue.length > 0 && !loading);
  const showShortcut = Boolean(shortcut && !loading && !showClear);
  const showSpinner = Boolean(loading);
  const showPasswordToggle = Boolean(canRevealPassword && !loading && !showClear && !showShortcut);
  const hasRightAdornment = showClear || showShortcut || showSpinner || showPasswordToggle || suffix != null;
  const hasControlWrapper = prefix != null || hasRightAdornment;
  const affix = getAffixMode(prefix, hasRightAdornment);
  const resolvedInvalid = isInvalid(error, ariaInvalid);
  const describedBy = joinDescriptionIds(
    ariaDescribedBy,
    prefixDescriptionId,
    suffixDescriptionId,
    descriptionId,
    errorId
  );
  const valueProps = isControlled ? { value } : clearable || shortcut || clearOnEscapeEnabled ? { value: currentValue } : { defaultValue };
  const setInputRef = React24.useCallback(
    (node) => {
      const input = node instanceof HTMLInputElement ? node : null;
      inputRef.current = input;
      assignRef(forwardedRef, input);
    },
    [forwardedRef]
  );
  const emitNativeInput = React24.useCallback(
    (nextValue) => {
      const input = inputRef.current;
      if (!input) {
        if (!isControlled) setInternalValue(nextValue);
        onValueChange?.(nextValue);
        return;
      }
      const valueSetter = Object.getOwnPropertyDescriptor(
        window.HTMLInputElement.prototype,
        "value"
      )?.set;
      valueSetter?.call(input, nextValue);
      input.dispatchEvent(new Event("input", { bubbles: true }));
    },
    [isControlled, onValueChange]
  );
  const syncInputValue = React24.useCallback(
    (event) => {
      if (!isControlled) setInternalValue(event.currentTarget.value);
      onValueChange?.(event.currentTarget.value);
      onChange?.(event);
    },
    [isControlled, onChange, onValueChange]
  );
  const handleClear = React24.useCallback(() => {
    emitNativeInput("");
    onClear?.();
    inputRef.current?.focus();
  }, [emitNativeInput, onClear]);
  const handleKeyDown = React24.useCallback(
    (event) => {
      onKeyDown?.(event);
      if (event.defaultPrevented || event.key !== "Escape" || !clearOnEscapeEnabled || currentValue.length === 0 || disabled) {
        return;
      }
      event.preventDefault();
      event.stopPropagation();
      handleClear();
    },
    [clearOnEscapeEnabled, currentValue.length, disabled, handleClear, onKeyDown]
  );
  const control = /* @__PURE__ */ jsx(
    Input$1,
    {
      ref: setInputRef,
      "data-slot": "input",
      type: canRevealPassword && passwordVisible ? "text" : type,
      id,
      disabled,
      "aria-invalid": resolvedInvalid || void 0,
      "aria-describedby": describedBy,
      "aria-busy": loading || void 0,
      className: cn(
        inputVariants({ size, affix, tone }),
        type === "file" && "p-0 pr-[var(--input-padding-x)] text-muted-foreground",
        className
      ),
      style: getInputStyle(size, style),
      onChange: syncInputValue,
      onKeyDown: handleKeyDown,
      ...rest,
      ...valueProps
    }
  );
  const inputControl = hasControlWrapper ? /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "input-wrapper",
      className: cn("relative flex items-center", wrapperClassName),
      style: getInputStyle(size, void 0),
      children: [
        prefix != null && /* @__PURE__ */ jsx(
          "span",
          {
            id: prefixDescriptionId,
            "aria-hidden": !isTextAffix(prefix),
            className: affixVariants({ side: "prefix" }),
            children: prefix
          }
        ),
        control,
        showSpinner && /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute right-[var(--input-control-inset)] top-1/2 flex size-[var(--input-control-size)] -translate-y-1/2 items-center justify-center text-muted-foreground",
            style: getInputStyle(size, void 0),
            children: /* @__PURE__ */ jsx(LoaderCircle, { className: "size-[var(--input-control-icon-size)] animate-spin" })
          }
        ),
        showClear && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Clear input",
            disabled,
            className: inputControlButtonVariants(),
            style: getInputStyle(size, void 0),
            onClick: handleClear,
            children: /* @__PURE__ */ jsx(Cross, { "aria-hidden": "true" })
          }
        ),
        showShortcut && /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute right-[var(--input-control-inset)] top-1/2 flex -translate-y-1/2 items-center",
            style: getInputStyle(size, void 0),
            children: /* @__PURE__ */ jsx(Kbd, { small: true, children: currentValue.length > 0 ? "Esc" : shortcut })
          }
        ),
        showPasswordToggle && /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": passwordVisible ? hideLabel : revealLabel,
            "aria-pressed": passwordVisible,
            disabled,
            className: inputControlButtonVariants(),
            style: getInputStyle(size, void 0),
            onClick: () => {
              setPasswordVisible((visible) => !visible);
              inputRef.current?.focus();
            },
            children: passwordVisible ? /* @__PURE__ */ jsx(EyeOff, { "aria-hidden": "true" }) : /* @__PURE__ */ jsx(Eye, { "aria-hidden": "true" })
          }
        ),
        suffix != null && !showClear && !showShortcut && !showSpinner && !showPasswordToggle && /* @__PURE__ */ jsx(
          "span",
          {
            id: suffixDescriptionId,
            "aria-hidden": !isTextAffix(suffix),
            className: affixVariants({ side: "suffix" }),
            children: suffix
          }
        )
      ]
    }
  ) : control;
  if (!label && !description && typeof error !== "string") {
    return inputControl;
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "input-field",
      className: cn("grid gap-[var(--input-field-gap)]", fieldClassName),
      style: {
        "--input-field-gap": `${inputTokens.fieldGap}px`
      },
      children: [
        label && /* @__PURE__ */ jsx("label", { htmlFor: id, className: "text-sm font-medium text-foreground", children: label }),
        inputControl,
        description && !error && /* @__PURE__ */ jsx("p", { id: descriptionId, className: fieldMessageVariants({ tone: "description" }), children: description }),
        typeof error === "string" && /* @__PURE__ */ jsx("p", { id: errorId, role: "alert", className: fieldMessageVariants({ tone: "error" }), children: error })
      ]
    }
  );
};
Input.displayName = "Input";
var InputOTP = ({
  className,
  containerClassName,
  children,
  render,
  ref,
  ...props
}) => {
  const otpProps = render ? { render, ...props } : { children, ...props };
  return /* @__PURE__ */ jsx(
    OTPInput,
    {
      ref,
      containerClassName: cn(
        "flex items-center gap-2 has-[:disabled]:opacity-50",
        containerClassName
      ),
      className: cn("disabled:cursor-not-allowed", className),
      ...otpProps
    }
  );
};
InputOTP.displayName = "InputOTP";
var InputOTPGroup = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-center", className), ...props });
InputOTPGroup.displayName = "InputOTPGroup";
var InputOTPSlot = ({
  index,
  className,
  ref,
  ...props
}) => {
  const inputOTPContext = React24.use(OTPInputContext);
  const slot = inputOTPContext.slots[index];
  const char = slot?.char ?? "";
  const hasFakeCaret = slot?.hasFakeCaret ?? false;
  const isActive = slot?.isActive ?? false;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn(
        "relative flex h-10 w-10 items-center justify-center border-y border-r border-input text-sm transition-[background-color,border-color,box-shadow,color,opacity,transform] first:rounded-l-md first:border-l last:rounded-r-md",
        isActive && "z-10 ring-2 ring-ring ring-offset-background",
        className
      ),
      ...props,
      children: [
        char,
        hasFakeCaret && /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "h-4 w-px animate-caret-blink bg-foreground duration-1000" }) })
      ]
    }
  );
};
InputOTPSlot.displayName = "InputOTPSlot";
var InputOTPSeparator = ({
  ref,
  ...props
}) => /* @__PURE__ */ jsx("div", { ref, "aria-hidden": "true", ...props, children: /* @__PURE__ */ jsx(Minus, { className: "h-4 w-4" }) });
InputOTPSeparator.displayName = "InputOTPSeparator";

// src/primitives/layout.ts
var flexLayouts = {
  row: {
    display: "flex",
    flexDirection: "row"
  },
  rowCenter: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center"
  },
  rowBetween: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  column: {
    display: "flex",
    flexDirection: "column"
  },
  columnCenter: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  }
};
var gridLayouts = {
  auto: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
    gap: 3
  },
  two: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr 1fr"],
    gap: 3
  },
  three: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr"],
    gap: 3
  },
  four: {
    display: "grid",
    gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"],
    gap: 3
  }
};
var containerWidths = {
  sm: 544,
  md: 768,
  lg: 1012,
  xl: 1280
};
var zIndex = {
  base: 0,
  dropdown: 1e3,
  sticky: 1020,
  fixed: 1030,
  modalBackdrop: 1040,
  modal: 1050,
  popover: 1060,
  tooltip: 1070
};
var KEYFRAMES = `
@keyframes loading-dot {
  0%, 100% { opacity: 0.25; transform: scale(0.75); }
  50%       { opacity: 1;    transform: scale(1); }
}
@media (prefers-reduced-motion: reduce) {
  .nbt-loading-dot { animation: none !important; opacity: 0.6; }
}
`;
var loadingDotDelayMultipliers = [0, 1, 2];
function LoadingDots({ ref, size = 6, children, className }) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx("style", { children: KEYFRAMES }),
    /* @__PURE__ */ jsxs(
      "span",
      {
        ref,
        "aria-live": "polite",
        className: cn("inline-flex items-center gap-1", className),
        children: [
          children,
          /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "inline-flex items-center gap-[3px]", children: loadingDotDelayMultipliers.map((delayMultiplier) => /* @__PURE__ */ jsx(
            "span",
            {
              className: "nbt-loading-dot rounded-full bg-current",
              style: {
                width: size,
                height: size,
                animation: "loading-dot var(--duration-cinematic) var(--ease-in-out) infinite",
                animationDelay: `calc(var(--duration-flow) * ${delayMultiplier})`
              }
            },
            delayMultiplier
          )) })
        ]
      }
    )
  ] });
}
function splitPosition(position) {
  const [side, align] = position.split("-");
  return { side, align };
}
var MenuContext = createContext(null);
function useMenuPosition() {
  return use(MenuContext) ?? "bottom-start";
}
function MenuContainer({ position = "bottom-start", children }) {
  return /* @__PURE__ */ jsx(MenuContext.Provider, { value: position, children: /* @__PURE__ */ jsx(DropdownMenu, { children }) });
}
var GEIST_TYPE_TO_VARIANT = {
  primary: "default",
  secondary: "secondary",
  tertiary: "tertiary",
  ghost: "ghost",
  warning: "warning",
  destructive: "destructive"
};
var GEIST_SIZE_TO_NEBUTRA = {
  tiny: "tiny",
  small: "sm",
  medium: "default",
  large: "lg"
};
var MenuButton = function MenuButton2({
  showChevron,
  type = "primary",
  variant,
  size = "medium",
  shape = "default",
  svgOnly,
  children,
  className,
  onClick,
  prefix,
  suffix,
  loading,
  "aria-label": ariaLabel,
  ref,
  ...rest
}) {
  const isUnstyled = variant === "unstyled";
  const buttonHtmlProps = {
    ...onClick !== void 0 ? { onClick } : {},
    ...ariaLabel !== void 0 ? { "aria-label": ariaLabel } : {}
  };
  return /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: isUnstyled ? (
    // "unstyled" — render a bare button so callers can wrap an avatar,
    // dots icon, etc. without inheriting Button chrome.
    /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        type: "button",
        className: cn(
          "inline-flex items-center justify-center rounded-[var(--radius-md)]",
          overlayClassNames.focusRing,
          className
        ),
        ...buttonHtmlProps,
        children
      }
    )
  ) : /* @__PURE__ */ jsx(
    Button,
    {
      ref,
      variant: GEIST_TYPE_TO_VARIANT[type],
      size: GEIST_SIZE_TO_NEBUTRA[size],
      shape,
      className,
      ...loading !== void 0 ? { loading } : {},
      ...prefix !== void 0 ? { prefix } : {},
      ...suffix !== void 0 ? { suffix } : {},
      ...ariaLabel !== void 0 ? { "aria-label": ariaLabel } : {},
      ...rest,
      children: svgOnly ? children : /* @__PURE__ */ jsxs(Fragment, { children: [
        children,
        showChevron && /* @__PURE__ */ jsx(ChevronDown, { className: "h-3.5 w-3.5 opacity-70" })
      ] })
    }
  ) });
};
var Menu = function Menu2({
  width,
  style,
  className,
  children,
  ref,
  ...rest
}) {
  const { side, align } = splitPosition(useMenuPosition());
  const widthStyle = width !== void 0 ? { width } : {};
  return /* @__PURE__ */ jsx(
    DropdownMenuContent,
    {
      ref,
      side,
      align,
      style: { ...widthStyle, ...style },
      className: cn("min-w-32", className),
      ...rest,
      children
    }
  );
};
function getTextFromNode(node) {
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) {
    const parts = [];
    for (const child of node) {
      const text = getTextFromNode(child);
      if (text) parts.push(text);
    }
    return parts.join(" ");
  }
  if (isValidElement(node)) return getTextFromNode(node.props.children);
  return "";
}
var MenuItem = function MenuItem2({
  ref,
  onClick,
  href,
  disabled,
  prefix,
  suffix,
  type = "default",
  className,
  children
}) {
  const content = /* @__PURE__ */ jsxs("span", { className: "flex flex-1 items-center gap-2", children: [
    prefix && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "inline-flex shrink-0 [&_svg]:size-4", children: prefix }),
    /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children }),
    suffix && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "inline-flex shrink-0 [&_svg]:size-4", children: suffix })
  ] });
  const errorClass = type === "error" ? "text-destructive data-[highlighted]:bg-destructive/10 data-[highlighted]:text-destructive" : "";
  const passthrough = {};
  if (onClick !== void 0) passthrough.onClick = onClick;
  if (disabled !== void 0) passthrough.disabled = disabled;
  if (href !== void 0) {
    const anchorLabel = getTextFromNode(children);
    return /* @__PURE__ */ jsx(
      DropdownMenuItem,
      {
        ref,
        render: /* @__PURE__ */ jsx("a", { href, "aria-label": anchorLabel || void 0 }),
        className: cn(errorClass, className),
        ...passthrough,
        children: content
      }
    );
  }
  return /* @__PURE__ */ jsx(DropdownMenuItem, { ref, className: cn(errorClass, className), ...passthrough, children: content });
};
var MenuLink = function MenuLink2({
  ref,
  ...props
}) {
  return /* @__PURE__ */ jsx(MenuItem, { ref, ...props });
};
var MenuItemLocked = function MenuItemLocked2({
  children,
  ref,
  ...rest
}) {
  return /* @__PURE__ */ jsx(MenuItem, { ref, disabled: true, suffix: /* @__PURE__ */ jsx(LockClosed, { "aria-hidden": "true" }), ...rest, children });
};
var MenuSection = function MenuSection2({
  title,
  showDivider,
  children,
  className,
  ref,
  ...rest
}) {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    showDivider && /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
    /* @__PURE__ */ jsxs(DropdownMenuGroup, { ref, className, ...rest, children: [
      title && /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "text-muted-foreground text-xs uppercase tracking-wide", children: title }),
      children
    ] })
  ] });
};
function assignRef2(ref, value) {
  if (typeof ref === "function") {
    ref(value);
    return;
  }
  if (ref) {
    ref.current = value;
  }
}
var MenubarContext = React24.createContext({ activeMenu: null, setActiveMenu: () => {
} });
var Menubar = ({
  className,
  children,
  ref,
  ...props
}) => {
  const [activeMenu, setActiveMenu] = React24.useState(null);
  const rootRef = React24.useRef(null);
  const contextValue = { activeMenu, setActiveMenu };
  React24.useEffect(() => {
    function handlePointerDown(event) {
      if (event.target instanceof Node && rootRef.current?.contains(event.target)) return;
      setActiveMenu(null);
    }
    document.addEventListener("pointerdown", handlePointerDown);
    return () => document.removeEventListener("pointerdown", handlePointerDown);
  }, []);
  function setRootRef(node) {
    rootRef.current = node;
    assignRef2(ref, node);
  }
  return /* @__PURE__ */ jsx(MenubarContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    "div",
    {
      ref: setRootRef,
      onClick: (e) => e.stopPropagation(),
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.stopPropagation();
        }
      },
      tabIndex: -1,
      role: "menubar",
      className: cn(overlayPrimitiveClassNames.menubarRoot, className),
      ...props,
      children
    }
  ) });
};
Menubar.displayName = "Menubar";
var MenubarMenuContext = React24.createContext({ value: "", isOpen: false });
var MenubarMenu = ({ children }) => {
  const { activeMenu } = React24.use(MenubarContext);
  const value = React24.useId();
  const isOpen = activeMenu === value;
  const contextValue = { value, isOpen };
  return /* @__PURE__ */ jsx(MenubarMenuContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx("div", { className: "relative inline-block text-left", children }) });
};
var MenubarPortal = ({ children }) => /* @__PURE__ */ jsx(Fragment, { children });
var MenubarGroup = ({ children }) => /* @__PURE__ */ jsx(Fragment, { children });
var MenubarTrigger = ({
  className,
  type = "button",
  ref,
  ...props
}) => {
  const { activeMenu, setActiveMenu } = React24.use(MenubarContext);
  const { value, isOpen } = React24.use(MenubarMenuContext);
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type,
      role: "menuitem",
      tabIndex: 0,
      "aria-haspopup": "menu",
      "aria-expanded": isOpen,
      "data-state": isOpen ? "open" : "closed",
      onClick: () => setActiveMenu(isOpen ? null : value),
      onMouseEnter: () => {
        if (activeMenu && activeMenu !== value) {
          setActiveMenu(value);
        }
      },
      className: cn(overlayPrimitiveClassNames.menubarTrigger, className),
      ...props
    }
  );
};
MenubarTrigger.displayName = "MenubarTrigger";
var MenubarSubContext = React24.createContext({ isOpen: false, setIsOpen: () => {
} });
var MenubarSub = ({ children }) => {
  const [isOpen, setIsOpen] = React24.useState(false);
  const contextValue = { isOpen, setIsOpen };
  return /* @__PURE__ */ jsx(MenubarSubContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
    "div",
    {
      className: "relative",
      onPointerEnter: () => setIsOpen(true),
      onPointerLeave: () => setIsOpen(false),
      children
    }
  ) });
};
var MenubarSubTrigger = ({
  className,
  inset,
  children,
  ref,
  ...props
}) => {
  const { isOpen } = React24.use(MenubarSubContext);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      role: "menuitem",
      tabIndex: 0,
      "aria-haspopup": "menu",
      "aria-expanded": isOpen,
      "data-state": isOpen ? "open" : "closed",
      className: cn(overlayPrimitiveClassNames.menubarSubTrigger, inset && "pl-8", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(ChevronRight, { className: "ml-auto h-4 w-4" })
      ]
    }
  );
};
MenubarSubTrigger.displayName = "MenubarSubTrigger";
var MenubarSubContent = ({
  className,
  style,
  ref,
  ...props
}) => {
  const { isOpen } = React24.use(MenubarSubContext);
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "menu",
      className: cn(
        overlayClassNames.menuSurface,
        overlayPrimitiveClassNames.menuSurface,
        "absolute top-0 left-full ml-1 min-w-[8rem]",
        className
      ),
      style: { zIndex: overlayZIndex.popover, ...style },
      ...props
    }
  );
};
MenubarSubContent.displayName = "MenubarSubContent";
var MenubarContent = ({
  className,
  align: _align = "start",
  alignOffset: _alignOffset = -4,
  sideOffset: _sideOffset = 8,
  style,
  ref,
  ...props
}) => {
  const { isOpen } = React24.use(MenubarMenuContext);
  const contentRef = React24.useRef(null);
  const [side, setSide] = React24.useState("bottom");
  React24.useLayoutEffect(() => {
    if (!isOpen) {
      setSide("bottom");
      return;
    }
    const content = contentRef.current;
    if (!content) return;
    const viewportPadding = 8;
    const rect = content.getBoundingClientRect();
    const availableAbove = rect.top - content.offsetHeight - viewportPadding;
    const isBottomClipped = rect.bottom > window.innerHeight - viewportPadding;
    setSide(isBottomClipped && availableAbove >= viewportPadding ? "top" : "bottom");
  }, [isOpen]);
  function setContentRef(node) {
    contentRef.current = node;
    assignRef2(ref, node);
  }
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref: setContentRef,
      role: "menu",
      "data-side": side,
      className: cn(
        overlayClassNames.menuSurface,
        overlayPrimitiveClassNames.menuSurface,
        "absolute left-0 min-w-[12rem]",
        side === "top" ? "bottom-full mb-[8px]" : "top-full mt-[8px]",
        className
      ),
      style: { zIndex: overlayZIndex.popover, ...style },
      ...props
    }
  );
};
MenubarContent.displayName = "MenubarContent";
var MenubarItem = ({
  className,
  inset,
  disabled,
  asChild,
  children,
  ref,
  ...props
}) => {
  const { setActiveMenu } = React24.use(MenubarContext);
  const activateMenuItem = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    setActiveMenu(null);
    if (props.onClick) props.onClick(e);
  };
  const closeMenuItem = () => {
    if (!disabled) {
      setActiveMenu(null);
    }
  };
  if (asChild && React24.isValidElement(children)) {
    const child = children;
    return React24.cloneElement(child, {
      ref,
      role: child.props.role ?? "menuitem",
      tabIndex: disabled ? -1 : child.props.tabIndex ?? 0,
      "aria-disabled": disabled || void 0,
      "data-disabled": disabled ? "" : void 0,
      onClick: (e) => {
        activateMenuItem(e);
        if (child.props.onClick) child.props.onClick(e);
      },
      className: cn(
        overlayPrimitiveClassNames.menubarItem,
        inset && "pl-8",
        className,
        child.props.className
      ),
      ...props
    });
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: "menuitem",
      tabIndex: disabled ? -1 : 0,
      "aria-disabled": disabled || void 0,
      "data-disabled": disabled ? "" : void 0,
      onClick: activateMenuItem,
      onKeyDown: (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          closeMenuItem();
        }
      },
      className: cn(overlayPrimitiveClassNames.menubarItem, inset && "pl-8", className),
      ...props,
      children
    }
  );
};
MenubarItem.displayName = "MenubarItem";
var MenubarCheckboxItem = ({
  className,
  children,
  checked,
  disabled,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    ref,
    role: "menuitemcheckbox",
    tabIndex: disabled ? -1 : 0,
    "aria-checked": checked || false,
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0,
    className: cn(overlayPrimitiveClassNames.menubarCheckboxItem, className),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: checked && /* @__PURE__ */ jsx(Check, { className: "h-4 w-4" }) }),
      children
    ]
  }
);
MenubarCheckboxItem.displayName = "MenubarCheckboxItem";
var MenubarRadioItem = ({
  className,
  children,
  checked,
  disabled,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    ref,
    role: "menuitemradio",
    tabIndex: disabled ? -1 : 0,
    "aria-checked": checked || false,
    "aria-disabled": disabled || void 0,
    "data-disabled": disabled ? "" : void 0,
    className: cn(overlayPrimitiveClassNames.menubarCheckboxItem, className),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsx(Status, { className: cn("h-2 w-2 fill-current", checked ? "opacity-100" : "opacity-0") }) }),
      children
    ]
  }
);
MenubarRadioItem.displayName = "MenubarRadioItem";
var MenubarRadioGroup = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsx("fieldset", { className: cn("m-0 min-w-0 border-0 p-0", className), ...props, children });
var MenubarLabel = ({
  className,
  inset,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
);
MenubarLabel.displayName = "MenubarLabel";
var MenubarSeparator = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("div", { ref, className: cn("-mx-1 my-1 h-px bg-muted", className), ...props });
MenubarSeparator.displayName = "MenubarSeparator";
var MenubarShortcut = ({ className, ...props }) => {
  return /* @__PURE__ */ jsx(
    "span",
    {
      className: cn("ml-auto text-xs tracking-widest text-muted-foreground", className),
      ...props
    }
  );
};
MenubarShortcut.displayName = "MenubarShortcut";
var ModalContext = createContext(null);
function useModalContext() {
  const ctx = use(ModalContext);
  if (!ctx) throw new Error("Modal.* must be used inside <Modal.Modal>");
  return ctx;
}
function ModalRoot({
  active,
  onClickOutside,
  sticky = false,
  initialFocusRef,
  children,
  className
}) {
  const titleId = useId();
  const value = useMemo(() => ({ titleId, sticky }), [titleId, sticky]);
  useEffect(() => {
    if (!active) return;
    const el = initialFocusRef?.current;
    if (!el) return;
    const id = requestAnimationFrame(() => {
      el.focus();
    });
    return () => cancelAnimationFrame(id);
  }, [active, initialFocusRef]);
  return /* @__PURE__ */ jsx(ModalContext.Provider, { value, children: /* @__PURE__ */ jsx(
    Dialog,
    {
      open: active,
      onOpenChange: (open) => {
        if (!open) onClickOutside?.();
      },
      children: /* @__PURE__ */ jsx(
        DialogContent,
        {
          "aria-labelledby": titleId,
          className: cn(
            "max-w-md gap-0 p-0",
            sticky && "max-h-[85vh] grid grid-rows-[1fr_auto]",
            className
          ),
          children
        }
      )
    }
  ) });
}
var ModalBody = function ModalBody2({
  className,
  ref,
  ...rest
}) {
  const { sticky } = useModalContext();
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "flex flex-col gap-4 px-6 pt-6 pb-4",
        sticky && "min-h-0 overflow-y-auto",
        className
      ),
      ...rest
    }
  );
};
var ModalHeader = function ModalHeader2({
  className,
  children,
  ref,
  ...rest
}) {
  return /* @__PURE__ */ jsx(DialogHeader, { ref, className: cn("space-y-2 text-left", className), ...rest, children });
};
var ModalTitle = function ModalTitle2({
  className,
  ref,
  ...rest
}) {
  const { titleId } = useModalContext();
  return /* @__PURE__ */ jsx(
    DialogTitle,
    {
      ref,
      id: titleId,
      className: cn("font-semibold text-foreground text-lg leading-tight", className),
      ...rest
    }
  );
};
var ModalSubtitle = function ModalSubtitle2({
  className,
  ref,
  ...rest
}) {
  return /* @__PURE__ */ jsx(
    "p",
    {
      ref,
      className: cn("text-muted-foreground text-sm leading-relaxed", className),
      ...rest
    }
  );
};
var ModalInset = function ModalInset2({
  className,
  ref,
  ...rest
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("-mx-6 my-2 border-border border-y bg-muted/40 px-6 py-4", className),
      ...rest
    }
  );
};
var ModalActions = function ModalActions2({
  className,
  children,
  ref,
  ...rest
}) {
  const { sticky } = useModalContext();
  return /* @__PURE__ */ jsx(
    DialogFooter,
    {
      ref,
      className: cn(
        "flex-row items-center justify-end gap-2 border-border border-t px-6 py-4",
        sticky && "bg-background/95 backdrop-blur-sm",
        className
      ),
      ...rest,
      children
    }
  );
};
var ModalAction = function ModalAction2({
  type = "primary",
  fullWidth,
  prefix,
  buttonType = "button",
  className,
  children,
  ref,
  ...rest
}) {
  return /* @__PURE__ */ jsxs(
    Button,
    {
      ref,
      type: buttonType,
      variant: type === "secondary" ? "secondary" : "default",
      size: "default",
      className: cn(fullWidth && "w-full", className),
      ...rest,
      children: [
        prefix && /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: "inline-flex shrink-0 [&_svg]:size-4", children: prefix }),
        children
      ]
    }
  );
};
var Modal = {
  Modal: ModalRoot,
  Body: ModalBody,
  Header: ModalHeader,
  Title: ModalTitle,
  Subtitle: ModalSubtitle,
  Inset: ModalInset,
  Actions: ModalActions,
  Action: ModalAction
};

// src/tokens/components/multi-select.ts
var multiSelectTokens = {
  width: {
    sm: primitiveSpacing[10] * 6,
    md: primitiveSpacing[10] * 7,
    lg: primitiveSpacing[10] * 8
  },
  trigger: {
    height: primitiveSizing.md,
    paddingX: primitiveSpacing[3],
    gap: primitiveSpacing[2],
    radius: primitiveRadius.md,
    fontSize: primitiveFontSize.sm,
    iconSize: primitiveSpacing[4]
  },
  content: {
    padding: primitiveSpacing[1],
    radius: primitiveRadius.lg,
    maxHeight: primitiveSpacing[24] * 4
  },
  row: {
    minHeight: primitiveSizing.md,
    paddingX: primitiveSpacing[2],
    paddingY: primitiveSpacing[1] + primitiveSpacing[1] / 2,
    gap: primitiveSpacing[2],
    radius: primitiveRadius.md,
    fontSize: primitiveFontSize.sm,
    descriptionSize: primitiveFontSize.xs,
    checkboxSize: primitiveSizing.xs,
    checkboxIconSize: primitiveFontSize.sm,
    actionMinWidth: primitiveSpacing[10] * 2 - primitiveSpacing[1]
  },
  motion: {
    duration: primitiveTransition.duration.micro,
    popoverDuration: primitiveTransition.duration.flow,
    easing: primitiveTransition.easing.default
  }
};
var MultiSelectContext = React24.createContext(null);
var ROW_SELECTOR = "[data-multi-select-row]";
var CHECKBOX_SELECTOR = "[data-multi-select-checkbox]";
var ACTION_SELECTOR = "[data-multi-select-action]";
var FOCUSABLE_SELECTOR = 'a[href], button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), [tabindex]:not([tabindex="-1"])';
function useMultiSelectContext(component) {
  const context = React24.use(MultiSelectContext);
  if (!context) {
    throw new Error(`${component} must be used inside MultiSelectRoot.`);
  }
  return context;
}
function composeRefs2(...refs) {
  return (node) => {
    for (const ref of refs) {
      if (typeof ref === "function") ref(node);
      else if (ref) ref.current = node;
    }
  };
}
function createMultiSelectCssVars(width) {
  return {
    "--multi-select-width": `${multiSelectTokens.width[width]}px`,
    "--multi-select-trigger-height": `${multiSelectTokens.trigger.height}px`,
    "--multi-select-trigger-padding-x": `${multiSelectTokens.trigger.paddingX}px`,
    "--multi-select-trigger-gap": `${multiSelectTokens.trigger.gap}px`,
    "--multi-select-trigger-radius": `${multiSelectTokens.trigger.radius}px`,
    "--multi-select-trigger-font-size": `${multiSelectTokens.trigger.fontSize}px`,
    "--multi-select-trigger-icon-size": `${multiSelectTokens.trigger.iconSize}px`,
    "--multi-select-content-padding": `${multiSelectTokens.content.padding}px`,
    "--multi-select-content-radius": `${multiSelectTokens.content.radius}px`,
    "--multi-select-content-max-height": `${multiSelectTokens.content.maxHeight}px`,
    "--multi-select-row-min-height": `${multiSelectTokens.row.minHeight}px`,
    "--multi-select-row-padding-x": `${multiSelectTokens.row.paddingX}px`,
    "--multi-select-row-padding-y": `${multiSelectTokens.row.paddingY}px`,
    "--multi-select-row-gap": `${multiSelectTokens.row.gap}px`,
    "--multi-select-row-radius": `${multiSelectTokens.row.radius}px`,
    "--multi-select-row-font-size": `${multiSelectTokens.row.fontSize}px`,
    "--multi-select-row-description-size": `${multiSelectTokens.row.descriptionSize}px`,
    "--multi-select-checkbox-size": `${multiSelectTokens.row.checkboxSize}px`,
    "--multi-select-checkbox-icon-size": `${multiSelectTokens.row.checkboxIconSize}px`,
    "--multi-select-action-min-width": `${multiSelectTokens.row.actionMinWidth}px`,
    "--multi-select-duration": `${multiSelectTokens.motion.duration}ms`,
    "--multi-select-popover-duration": `${multiSelectTokens.motion.popoverDuration}ms`,
    "--multi-select-easing": multiSelectTokens.motion.easing
  };
}
function getRows(content) {
  if (!content) return [];
  return Array.from(content.querySelectorAll(ROW_SELECTOR));
}
function getFocusableElements(content) {
  if (!content) return [];
  return Array.from(content.querySelectorAll(FOCUSABLE_SELECTOR)).filter(
    (element) => !element.hasAttribute("disabled") && element.tabIndex !== -1
  );
}
function getControl(row, part) {
  const selector = part === "checkbox" ? CHECKBOX_SELECTOR : ACTION_SELECTOR;
  return row.querySelector(selector);
}
function getActiveRow(rows) {
  const activeElement = document.activeElement;
  if (!(activeElement instanceof HTMLElement)) return null;
  return rows.find((row) => row.contains(activeElement)) ?? null;
}
function getActivePart(row) {
  const activeElement = document.activeElement;
  if (!(activeElement instanceof HTMLElement) || !row) return "checkbox";
  const action = getControl(row, "action");
  return action?.contains(activeElement) ? "action" : "checkbox";
}
function focusRowControl(row, part) {
  if (!row) return;
  const preferred = getControl(row, part);
  const fallback = getControl(row, part === "checkbox" ? "action" : "checkbox");
  (preferred ?? fallback)?.focus();
}
function focusFirstRow(content) {
  const [firstRow] = getRows(content);
  if (firstRow) {
    focusRowControl(firstRow, "checkbox");
    return;
  }
  getFocusableElements(content)[0]?.focus();
}
function getSmartAction({
  checked,
  selectedCount,
  totalCount,
  onChange,
  onSelectOnly,
  onSelectAll,
  selectLabel,
  deselectLabel,
  selectOnlyLabel,
  selectAllLabel
}) {
  if (checked && selectedCount > 1 && onSelectOnly) {
    return { label: selectOnlyLabel ?? "Select Only", handler: onSelectOnly };
  }
  if (!checked && selectedCount === totalCount - 1 && totalCount > 1 && onSelectAll) {
    return { label: selectAllLabel ?? "Select All", handler: onSelectAll };
  }
  return {
    label: checked ? deselectLabel ?? "Deselect" : selectLabel ?? "Select",
    handler: onChange
  };
}
function MultiSelectRoot({
  children,
  open,
  defaultOpen = false,
  onOpenChange
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React24.useState(defaultOpen);
  const triggerRef = React24.useRef(null);
  const contentRef = React24.useRef(null);
  const isControlled = open !== void 0;
  const resolvedOpen = open ?? uncontrolledOpen;
  const setOpen = React24.useCallback(
    (nextOpen) => {
      if (!isControlled) setUncontrolledOpen(nextOpen);
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange]
  );
  const contextValue = React24.useMemo(
    () => ({ open: resolvedOpen, setOpen, triggerRef, contentRef }),
    [resolvedOpen, setOpen]
  );
  return /* @__PURE__ */ jsx(MultiSelectContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(Popover$1.Root, { open: resolvedOpen, onOpenChange: setOpen, children: /* @__PURE__ */ jsx("div", { className: "relative inline-flex", children }) }) });
}
var MultiSelectTrigger = ({
  children,
  className,
  style,
  width = "md",
  "aria-label": ariaLabel,
  ref,
  ...props
}) => {
  const { open, triggerRef } = useMultiSelectContext("MultiSelectTrigger");
  const cssVars = createMultiSelectCssVars(width);
  const accessibleName = ariaLabel ?? (typeof children === "string" ? children : "Multi select");
  return /* @__PURE__ */ jsxs(
    Popover$1.Trigger,
    {
      ref: composeRefs2(triggerRef, ref),
      "aria-expanded": open,
      "aria-haspopup": "dialog",
      "aria-label": accessibleName,
      className: cn(
        "inline-flex h-[var(--multi-select-trigger-height)] w-[var(--multi-select-width)] items-center justify-between",
        "gap-[var(--multi-select-trigger-gap)] rounded-[var(--multi-select-trigger-radius)] border border-input bg-background",
        "px-[var(--multi-select-trigger-padding-x)] text-left text-[length:var(--multi-select-trigger-font-size)] text-foreground shadow-xs",
        "transition-[background-color,border-color,box-shadow,color] duration-[var(--multi-select-duration)] ease-[var(--multi-select-easing)]",
        "hover:bg-accent/60 focus-visible:border-ring focus-visible:outline-none",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      style: { ...cssVars, ...style },
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate", children }),
        /* @__PURE__ */ jsx(
          ChevronDown,
          {
            "aria-hidden": "true",
            className: cn(
              "size-[var(--multi-select-trigger-icon-size)] shrink-0 text-muted-foreground",
              "transition-transform duration-[var(--multi-select-duration)] ease-[var(--multi-select-easing)]",
              open && "rotate-180"
            )
          }
        )
      ]
    }
  );
};
MultiSelectTrigger.displayName = "MultiSelectTrigger";
var MultiSelectContent = ({
  children,
  className,
  style,
  align = "start",
  side = "bottom",
  sideOffset = 6,
  alignOffset = 0,
  width = "md",
  onKeyDown,
  ref,
  ...props
}) => {
  const { open, setOpen, triggerRef, contentRef } = useMultiSelectContext("MultiSelectContent");
  const cssVars = createMultiSelectCssVars(width);
  React24.useEffect(() => {
    if (!open) return;
    const frame = window.requestAnimationFrame(() => focusFirstRow(contentRef.current));
    return () => window.cancelAnimationFrame(frame);
  }, [contentRef, open]);
  return /* @__PURE__ */ jsx(Popover$1.Portal, { children: /* @__PURE__ */ jsx(
    Popover$1.Positioner,
    {
      align,
      alignOffset,
      className: "z-50",
      side,
      sideOffset,
      children: /* @__PURE__ */ jsx(
        Popover$1.Popup,
        {
          ref: composeRefs2(contentRef, ref),
          role: "dialog",
          "aria-label": "Multi select options",
          className: cn(
            "z-50 max-h-[var(--multi-select-content-max-height)] w-[var(--multi-select-width)] overflow-y-auto",
            "rounded-[var(--multi-select-content-radius)] border border-border bg-popover p-[var(--multi-select-content-padding)] text-popover-foreground shadow-md outline-none",
            "transition-[opacity,transform,display] duration-[var(--multi-select-popover-duration)] ease-[var(--multi-select-easing)]",
            "data-starting-style:translate-y-1 data-starting-style:opacity-0 data-ending-style:translate-y-1 data-ending-style:opacity-0",
            "motion-reduce:transition-none motion-reduce:data-starting-style:translate-y-0 motion-reduce:data-ending-style:translate-y-0",
            className
          ),
          style: { ...cssVars, ...style },
          onKeyDown: (event) => {
            onKeyDown?.(event);
            if (event.defaultPrevented) return;
            const rows = getRows(contentRef.current);
            const activeRow = getActiveRow(rows);
            const activePart = getActivePart(activeRow);
            if (event.key === "Escape") {
              event.preventDefault();
              setOpen(false);
              triggerRef.current?.focus();
              return;
            }
            if (event.key === "ArrowDown" || event.key === "ArrowUp") {
              event.preventDefault();
              const currentIndex = activeRow ? rows.indexOf(activeRow) : -1;
              const nextIndex = event.key === "ArrowDown" ? Math.min(rows.length - 1, currentIndex + 1) : Math.max(0, currentIndex - 1);
              focusRowControl(rows[nextIndex] ?? rows[0], activePart);
              return;
            }
            if (event.key === "ArrowLeft" || event.key === "ArrowRight") {
              event.preventDefault();
              focusRowControl(
                activeRow ?? rows[0],
                event.key === "ArrowLeft" ? "checkbox" : "action"
              );
              return;
            }
            if (event.key === "Tab") {
              const focusables = getFocusableElements(contentRef.current);
              if (focusables.length === 0) return;
              const activeElement = document.activeElement;
              const first = focusables[0];
              const last = focusables[focusables.length - 1];
              if (!(activeElement instanceof HTMLElement)) {
                event.preventDefault();
                first?.focus();
                return;
              }
              if (event.shiftKey && activeElement === first) {
                event.preventDefault();
                last?.focus();
              } else if (!event.shiftKey && activeElement === last) {
                event.preventDefault();
                first?.focus();
              }
            }
          },
          ...props,
          children
        }
      )
    }
  ) });
};
MultiSelectContent.displayName = "MultiSelectContent";
var MultiSelectRow = ({
  name,
  checked,
  onChange,
  selectedCount,
  totalCount,
  description,
  count,
  disabled = false,
  onSelectOnly,
  onSelectAll,
  selectLabel,
  deselectLabel,
  selectOnlyLabel,
  selectAllLabel,
  className,
  ref,
  ...props
}) => {
  const action = getSmartAction({
    checked,
    selectedCount,
    totalCount,
    onChange,
    onSelectOnly,
    onSelectAll,
    selectLabel,
    deselectLabel,
    selectOnlyLabel,
    selectAllLabel
  });
  return /* @__PURE__ */ jsxs(
    "fieldset",
    {
      ref,
      "aria-label": name,
      "data-multi-select-row": "",
      "data-state": checked ? "checked" : "unchecked",
      disabled,
      className: cn(
        "group m-0 flex min-h-[var(--multi-select-row-min-height)] w-full min-w-0 items-center gap-[var(--multi-select-row-gap)] rounded-[var(--multi-select-row-radius)] border-0",
        "px-[var(--multi-select-row-padding-x)] py-[var(--multi-select-row-padding-y)] text-[length:var(--multi-select-row-font-size)]",
        "transition-colors duration-[var(--multi-select-duration)] ease-[var(--multi-select-easing)]",
        "hover:bg-accent has-[:focus-visible]:bg-accent",
        disabled && "opacity-50",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("span", { className: "relative inline-flex size-[var(--multi-select-checkbox-size)] shrink-0 items-center justify-center", children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "checkbox",
              "aria-label": `Select ${name}`,
              "data-multi-select-checkbox": "",
              checked,
              disabled,
              onChange,
              onKeyDown: (event) => {
                if (event.key === "Enter") {
                  event.preventDefault();
                  onChange();
                }
              },
              className: cn(
                "peer size-[var(--multi-select-checkbox-size)] appearance-none rounded-[var(--radius-sm)] border border-input bg-background",
                "transition-[background-color,border-color,box-shadow] duration-[var(--multi-select-duration)] ease-[var(--multi-select-easing)]",
                "hover:border-ring checked:border-primary checked:bg-primary",
                "focus-visible:outline-none"
              )
            }
          ),
          /* @__PURE__ */ jsx(
            Check,
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute size-[var(--multi-select-checkbox-icon-size)] text-primary-foreground opacity-0 transition-opacity duration-[var(--multi-select-duration)] peer-checked:opacity-100",
              strokeWidth: 2.25
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "min-w-0 flex-1", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 items-baseline gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate font-medium text-foreground", children: name }),
            typeof count === "number" && /* @__PURE__ */ jsx("span", { className: "shrink-0 text-[length:var(--multi-select-row-description-size)] text-muted-foreground", children: count })
          ] }),
          description && /* @__PURE__ */ jsx("div", { className: "truncate text-[length:var(--multi-select-row-description-size)] text-muted-foreground", children: description })
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "data-multi-select-action": "",
            disabled,
            onClick: action.handler,
            className: cn(
              "min-w-[var(--multi-select-action-min-width)] shrink-0 rounded-[var(--radius-sm)] px-2 py-1 text-right text-[length:var(--multi-select-row-description-size)] font-medium text-muted-foreground",
              "opacity-0 transition-[background-color,color,opacity] duration-[var(--multi-select-duration)] ease-[var(--multi-select-easing)]",
              "hover:bg-background hover:text-foreground focus-visible:bg-background focus-visible:text-foreground focus-visible:opacity-100 focus-visible:outline-none",
              "group-hover:opacity-100 group-focus-within:opacity-100"
            ),
            children: action.label
          }
        )
      ]
    }
  );
};
MultiSelectRow.displayName = "MultiSelectRow";
var navigationMenuTriggerStyle = cva(
  `group inline-flex h-10 w-max items-center justify-center rounded-[var(--radius-md)] bg-transparent px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:bg-accent focus-visible:text-accent-foreground ${overlayClassNames.focusRing} disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50`
);
var NavigationMenuContext = React24.createContext({ value: "", onValueChange: () => {
} });
var NavigationMenu = ({
  className,
  children,
  value: controlledValue,
  onValueChange,
  ref,
  ...props
}) => {
  const [uncontrolledValue, setUncontrolledValue] = React24.useState("");
  const value = controlledValue !== void 0 ? controlledValue : uncontrolledValue;
  const setValue = onValueChange || setUncontrolledValue;
  const contextValue = { value, onValueChange: setValue };
  return /* @__PURE__ */ jsx(NavigationMenuContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn("relative z-10 flex max-w-max flex-1 items-center justify-center", className),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  ) });
};
NavigationMenu.displayName = "NavigationMenu";
var NavigationMenuList = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "ul",
  {
    ref,
    className: cn("group flex flex-1 list-none items-center justify-center space-x-1", className),
    ...props
  }
);
NavigationMenuList.displayName = "NavigationMenuList";
var NavigationMenuItemContext = React24.createContext({ value: "" });
var NavigationMenuItem = ({
  className,
  value,
  children,
  ref,
  ...props
}) => {
  const defaultId = React24.useId();
  const itemValue = value || defaultId;
  const contextValue = { value: itemValue };
  return /* @__PURE__ */ jsx(NavigationMenuItemContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx("li", { ref, className: cn("relative", className), ...props, children }) });
};
NavigationMenuItem.displayName = "NavigationMenuItem";
var NavigationMenuTrigger = ({
  className,
  children,
  ref,
  ...props
}) => {
  const { value: contextValue, onValueChange } = React24.use(NavigationMenuContext);
  const { value: itemValue } = React24.use(NavigationMenuItemContext);
  const isOpen = contextValue === itemValue;
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      ref,
      "data-state": isOpen ? "open" : "closed",
      onClick: () => onValueChange(isOpen ? "" : itemValue),
      onMouseEnter: () => onValueChange(itemValue),
      className: cn(navigationMenuTriggerStyle(), "group", className),
      ...props,
      children: [
        children,
        " ",
        /* @__PURE__ */ jsx(
          ChevronDown,
          {
            className: "relative top-[1px] ml-1 h-3 w-3 transition-transform duration-[var(--motion-duration-flow)] ease-[var(--ease-out)] group-data-[state=open]:rotate-180 motion-reduce:transition-none",
            "aria-hidden": "true"
          }
        )
      ]
    }
  );
};
NavigationMenuTrigger.displayName = "NavigationMenuTrigger";
var NavigationMenuContent = ({
  className,
  children,
  ref,
  ...props
}) => {
  const { value: contextValue } = React24.use(NavigationMenuContext);
  const { value: itemValue } = React24.use(NavigationMenuItemContext);
  const isOpen = contextValue === itemValue;
  if (!isOpen) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn("absolute left-0 top-full w-full pt-1.5 md:w-auto", className),
      ...props,
      children: /* @__PURE__ */ jsx(
        "div",
        {
          className: overlayClassNames.navigationMenuSurface,
          style: { zIndex: overlayZIndex.popover },
          children
        }
      )
    }
  );
};
NavigationMenuContent.displayName = "NavigationMenuContent";
var NavigationMenuLink = ({
  asChild,
  active,
  className,
  children,
  href,
  onClick,
  ref,
  ...props
}) => {
  const { onValueChange } = React24.use(NavigationMenuContext);
  if (asChild && React24.isValidElement(children)) {
    const child = children;
    return React24.cloneElement(child, {
      ref,
      "data-active": active ? "" : void 0,
      onClick: (e) => {
        onValueChange("");
        onClick?.(e);
        if (child.props.onClick) child.props.onClick(e);
      },
      className: cn(className, child.props.className),
      ...props
    });
  }
  return /* @__PURE__ */ jsx(
    "a",
    {
      ref,
      href,
      "data-active": active ? "" : void 0,
      onClick: (event) => {
        onValueChange("");
        onClick?.(event);
      },
      className,
      ...props,
      children
    }
  );
};
NavigationMenuLink.displayName = "NavigationMenuLink";
var NavigationMenuViewport = ({
  ref: _ref
}) => {
  return null;
};
NavigationMenuViewport.displayName = "NavigationMenuViewport";
var NavigationMenuIndicator = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    className: cn("top-full z-[1] flex h-1.5 items-end justify-center overflow-hidden", className),
    ...props,
    children: /* @__PURE__ */ jsx("div", { className: "relative top-[60%] h-2 w-2 rotate-45 rounded-tl-sm bg-border shadow-md" })
  }
);
NavigationMenuIndicator.displayName = "NavigationMenuIndicator";

// src/tokens/components/button.ts
var buttonTokens = {
  size: {
    tiny: {
      height: primitiveSizing.tiny},
    sm: {
      height: primitiveSizing.sm},
    md: {
      height: primitiveSizing.md},
    lg: {
      height: primitiveSizing.lg}}};

// src/tokens/components/note.ts
var semanticTone = (name) => {
  const color = `hsl(var(--${name}))`;
  return {
    background: `color-mix(in oklch, ${color} 7%, transparent)`,
    filledBackground: `color-mix(in oklch, ${color} 14%, transparent)`,
    border: `color-mix(in oklch, ${color} 36%, transparent)`,
    foreground: "var(--neutral-12)",
    label: "var(--neutral-12)",
    icon: color,
    link: color
  };
};
var noteTokens = {
  radius: primitiveRadius.md,
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  },
  size: {
    small: {
      minHeight: primitiveSizing.sm,
      paddingX: primitiveSpacing[3],
      paddingY: primitiveSpacing[2],
      gap: primitiveSpacing[2],
      iconSize: 14,
      fontSize: primitiveFontSize.xs,
      lineHeight: 18
    },
    medium: {
      minHeight: primitiveSizing.md,
      paddingX: primitiveSpacing[4],
      paddingY: primitiveSpacing[3],
      gap: primitiveSpacing[2],
      iconSize: 16,
      fontSize: primitiveFontSize.sm,
      lineHeight: 20
    },
    large: {
      minHeight: primitiveSizing.lg,
      paddingX: primitiveSpacing[4],
      paddingY: primitiveSpacing[3],
      gap: primitiveSpacing[3],
      iconSize: 18,
      fontSize: primitiveFontSize.base,
      lineHeight: 24
    }
  },
  label: {
    fontWeight: primitiveFontWeight.semibold
  },
  tone: {
    default: {
      background: "var(--neutral-1)",
      filledBackground: "var(--neutral-3)",
      border: "var(--neutral-7)",
      foreground: "var(--neutral-12)",
      label: "var(--neutral-12)",
      icon: "var(--neutral-10)",
      link: "hsl(var(--primary))"
    },
    secondary: {
      background: "var(--neutral-2)",
      filledBackground: "var(--neutral-3)",
      border: "var(--neutral-6)",
      foreground: "var(--neutral-11)",
      label: "var(--neutral-12)",
      icon: "var(--neutral-10)",
      link: "hsl(var(--primary))"
    },
    success: semanticTone("success"),
    warning: semanticTone("warning"),
    error: semanticTone("destructive"),
    cyan: {
      background: "color-mix(in oklch, hsl(var(--primary)) 7%, transparent)",
      filledBackground: "color-mix(in oklch, hsl(var(--primary)) 14%, transparent)",
      border: "color-mix(in oklch, hsl(var(--primary)) 36%, transparent)",
      foreground: "var(--neutral-12)",
      label: "var(--neutral-12)",
      icon: "var(--cyan-10)",
      link: "var(--cyan-11)"
    }
  }
};

// src/tokens/components/pagination.ts
var paginationTokens = {
  gap: primitiveSpacing[3],
  minHeight: primitiveSizing["2xl"],
  padding: {
    x: primitiveSpacing[3],
    y: primitiveSpacing[3]
  },
  radius: primitiveRadius.lg,
  iconSize: primitiveFontSize.lg,
  labelSize: primitiveFontSize.xs,
  titleSize: primitiveFontSize.sm,
  titleGap: primitiveSpacing[1],
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  }
};

// src/tokens/components/radio.ts
var radioTokens = {
  group: {
    gap: primitiveSpacing[3],
    labelGap: primitiveSpacing[2]
  },
  item: {
    gap: primitiveSpacing[2],
    minHeight: primitiveSizing.xs,
    fontSize: primitiveFontSize.sm,
    fontWeight: primitiveFontWeight.normal,
    descriptionSize: primitiveFontSize.xs,
    descriptionGap: primitiveSpacing[1]
  },
  control: {
    size: 16,
    dotSize: 6,
    borderWidth: 1},
  label: {
    fontSize: primitiveFontSize.sm,
    fontWeight: primitiveFontWeight.medium
  },
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  }
};

// src/tokens/components/scroller.ts
var scrollerTokens = {
  radius: primitiveRadius.lg,
  fadeSize: primitiveSpacing[8],
  button: {
    size: primitiveSizing.sm,
    offset: primitiveSpacing[2],
    radius: primitiveRadius.full,
    iconSize: primitiveFontSize.base,
    shadow: primitiveShadow.sm
  },
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  }
};

// src/tokens/components/select.ts
var selectTokens = {
  sizes: {
    xsmall: {
      height: primitiveSizing.tiny,
      paddingX: primitiveSpacing[2] - primitiveSpacing[1] / 2,
      fontSize: primitiveFontSize.xs,
      radius: primitiveRadius.md,
      iconInset: primitiveSpacing[2] - primitiveSpacing[1] / 2,
      iconBoxSize: primitiveSizing.xs,
      iconSize: primitiveFontSize.sm
    },
    small: {
      height: primitiveSizing.sm,
      paddingX: primitiveSpacing[3],
      fontSize: primitiveFontSize.sm,
      radius: primitiveRadius.md,
      iconInset: primitiveSpacing[3],
      iconBoxSize: primitiveSizing.sm,
      iconSize: primitiveFontSize.base
    },
    medium: {
      height: primitiveSizing.md,
      paddingX: primitiveSpacing[3],
      fontSize: primitiveFontSize.sm,
      radius: primitiveRadius.md,
      iconInset: primitiveSpacing[3],
      iconBoxSize: primitiveSizing.sm,
      iconSize: primitiveFontSize.base
    },
    large: {
      height: primitiveSizing.lg,
      paddingX: primitiveSpacing[3],
      fontSize: primitiveFontSize.base,
      radius: primitiveRadius.lg,
      iconInset: primitiveSpacing[3],
      iconBoxSize: primitiveSizing.md,
      iconSize: primitiveFontSize.base
    }
  },
  labelSize: 13,
  focusRingWidth: 3,
  fieldGap: primitiveSpacing[2],
  messageGap: primitiveSpacing[2],
  content: {
    minWidth: primitiveSpacing[16] * 2,
    maxHeight: primitiveSpacing[24] * 4,
    radius: primitiveRadius.xl,
    padding: primitiveSpacing[1],
    sideOffset: primitiveSpacing[1],
    shadow: primitiveShadow.xl,
    fontSize: primitiveFontSize.sm
  },
  item: {
    radius: primitiveRadius.md,
    paddingX: primitiveSpacing[2],
    paddingY: primitiveSpacing[2] - primitiveSpacing[1] / 2,
    indicatorInset: primitiveSpacing[2],
    indicatorSize: primitiveSizing.xs - primitiveSpacing[1] / 2,
    indicatorIconSize: primitiveFontSize.base
  },
  motion: {
    duration: primitiveTransition.duration.flow,
    easing: primitiveTransition.easing.default
  }
};

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

// src/tokens/components/show-more.ts
var showMoreTokens = {
  triggerHeight: primitiveSizing.sm,
  triggerPaddingX: primitiveSpacing[3],
  dividerInset: primitiveSpacing[5],
  gap: primitiveSpacing[2],
  radius: primitiveRadius.full,
  iconSize: primitiveSizing.xs,
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  }
};

// src/tokens/components/slider.ts
var sliderTokens = {
  height: primitiveSizing.sm,
  trackHeight: primitiveSpacing[1] + 2,
  thumbSize: primitiveSizing.xs,
  radius: primitiveRadius.full,
  gap: primitiveSpacing[2],
  labelGap: primitiveSpacing[1],
  valueFontSize: primitiveFontSize.sm,
  track: {
    background: "hsl(var(--muted))",
    fill: "hsl(var(--primary))"
  },
  thumb: {
    background: "hsl(var(--background))",
    shadow: primitiveShadow.md
  },
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  }
};

// src/tokens/components/spinner.ts
var spinnerSizes = {
  xs: 12,
  sm: 16,
  md: primitiveSizing.xs,
  lg: primitiveSizing.tiny
};
var spinnerTones = {
  default: "text-muted-foreground",
  foreground: "text-foreground",
  inverse: "text-primary-foreground"
};
var spinnerTokens = {
  defaultSize: "md",
  barCount: 12,
  barWidth: "24%",
  barHeight: "8%",
  barLeft: "10%",
  barTop: "4%",
  barTranslate: "146%",
  barRadius: primitiveRadius.full,
  opacity: {
    min: 0.18,
    max: 0.96
  },
  motion: {
    duration: primitiveTransition.duration.cinematic * 2,
    easing: "linear"
  }
};

// src/tokens/components/split-button.ts
var splitButtonTokens = {
  triggerWidth: {
    tiny: buttonTokens.size.tiny.height,
    sm: buttonTokens.size.sm.height,
    md: buttonTokens.size.md.height,
    lg: buttonTokens.size.lg.height
  },
  menu: {
    width: 264,
    minWidth: 192
  },
  item: {
    gap: primitiveSpacing[3],
    paddingX: primitiveSpacing[3],
    paddingY: primitiveSpacing[2],
    descriptionGap: primitiveSpacing[1],
    radius: primitiveRadius.md,
    iconSize: 16
  },
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  }
};

// src/tokens/components/switch.ts
var switchSizes = {
  small: {
    height: primitiveSizing.sm,
    controlHeight: primitiveSizing.tiny,
    padding: primitiveSpacing[1],
    paddingX: primitiveSpacing[3],
    iconSize: primitiveSizing.xs - 4,
    minWidth: 64,
    fontSize: primitiveFontSize.xs
  },
  medium: {
    height: primitiveSizing.md,
    controlHeight: primitiveSizing.sm,
    padding: primitiveSpacing[1],
    paddingX: primitiveSpacing[3],
    iconSize: primitiveSizing.xs,
    minWidth: 72,
    fontSize: primitiveFontSize.sm
  },
  large: {
    height: primitiveSizing.lg,
    controlHeight: primitiveSizing.md,
    padding: primitiveSpacing[1],
    paddingX: primitiveSpacing[4],
    iconSize: primitiveSizing.tiny,
    minWidth: 88,
    fontSize: primitiveFontSize.base
  }
};
var switchTokens = {
  radius: primitiveRadius.lg,
  controlRadius: primitiveRadius.md,
  gap: primitiveSpacing[1],
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  }
};

// src/tokens/components/table.ts
var tableTokens = {
  wrapper: {
    minWidth: 248,
    padding: primitiveSpacing[6],
    radius: primitiveRadius.lg
  },
  row: {
    radius: primitiveRadius.sm
  },
  cell: {
    paddingX: primitiveSpacing[2],
    paddingY: 10
  },
  header: {
    height: primitiveSpacing[10]
  },
  typography: {
    size: primitiveFontSize.sm,
    headingWeight: primitiveFontWeight.medium,
    bodyWeight: primitiveFontWeight.normal
  },
  spacer: {
    bodyTop: primitiveSpacing[3]
  },
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  }
};

// src/tokens/components/tabs.ts
var tabsSizes = {
  xs: {
    height: primitiveSizing.tiny,
    padding: primitiveSpacing[1],
    paddingX: primitiveSpacing[2],
    gap: primitiveSpacing[1],
    triggerGap: primitiveSpacing[1],
    iconSize: primitiveFontSize.sm,
    fontSize: primitiveFontSize.xs,
    minWidth: 56
  },
  sm: {
    height: primitiveSizing.sm,
    padding: primitiveSpacing[1],
    paddingX: primitiveSpacing[3],
    gap: primitiveSpacing[1],
    triggerGap: primitiveSpacing[1] + primitiveSpacing[1] / 2,
    iconSize: primitiveFontSize.sm,
    fontSize: primitiveFontSize.xs,
    minWidth: 64
  },
  md: {
    height: primitiveSizing.md,
    padding: primitiveSpacing[1],
    paddingX: primitiveSpacing[3],
    gap: primitiveSpacing[2],
    triggerGap: primitiveSpacing[1] + primitiveSpacing[1] / 2,
    iconSize: primitiveFontSize.base,
    fontSize: primitiveFontSize.sm,
    minWidth: 72
  },
  lg: {
    height: primitiveSizing.lg,
    padding: primitiveSpacing[1],
    paddingX: primitiveSpacing[4],
    gap: primitiveSpacing[2] + primitiveSpacing[1] / 2,
    triggerGap: primitiveSpacing[2],
    iconSize: primitiveFontSize.lg,
    fontSize: primitiveFontSize.sm,
    minWidth: 88
  }
};
var tabsTokens = {
  radius: primitiveRadius.lg,
  triggerRadius: primitiveRadius.md,
  pillRadius: primitiveRadius.full,
  lineThickness: 2,
  panelGap: primitiveSpacing[3],
  badgeHeight: primitiveSpacing[5],
  badgePaddingX: primitiveSpacing[1] + primitiveSpacing[1] / 2,
  badgeFontSize: primitiveFontSize.xs,
  focusRingWidth: primitiveFocusRing.width,
  focusRingOffset: primitiveFocusRing.offset,
  motion: {
    duration: primitiveTransition.duration.flow,
    easing: primitiveTransition.easing.inOut
  }
};

// src/tokens/components/textarea.ts
var textareaTokens = {
  sizes: {
    sm: {
      minHeight: primitiveSpacing[20],
      paddingX: primitiveSpacing[2],
      paddingY: primitiveSpacing[2],
      fontSize: primitiveFontSize.xs,
      radius: primitiveRadius.md
    },
    md: {
      minHeight: primitiveSpacing[24],
      paddingX: primitiveSpacing[3],
      paddingY: primitiveSpacing[2],
      fontSize: primitiveFontSize.sm,
      radius: primitiveRadius.md
    },
    lg: {
      minHeight: primitiveSpacing[24],
      paddingX: primitiveSpacing[4],
      paddingY: primitiveSpacing[3],
      fontSize: primitiveFontSize.base,
      radius: primitiveRadius.lg
    }
  },
  labelSize: primitiveFontSize.sm,
  focusRingWidth: 3,
  fieldGap: primitiveSpacing[2] - primitiveSpacing[1] / 2};

// src/tokens/components/theme-switcher.ts
var themeSwitcherSizes = {
  small: {
    controlHeight: primitiveSizing.sm,
    optionMinWidth: 64,
    optionPaddingX: primitiveSpacing[2],
    iconSize: primitiveFontSize.base,
    fontSize: primitiveFontSize.xs,
    gap: primitiveSpacing[1],
    padding: primitiveSpacing[1]
  },
  medium: {
    controlHeight: primitiveSizing.md,
    optionMinWidth: 80,
    optionPaddingX: primitiveSpacing[3],
    iconSize: primitiveFontSize.lg,
    fontSize: primitiveFontSize.sm,
    gap: primitiveSpacing[1],
    padding: primitiveSpacing[1]
  }
};
var themeSwitcherTokens = {
  radius: primitiveRadius.lg,
  optionRadius: primitiveRadius.md,
  labelGap: primitiveSpacing[2],
  focusRingWidth: primitiveFocusRing.width,
  focusRingOffset: primitiveFocusRing.offset,
  motion: {
    duration: primitiveTransition.duration.flow,
    easing: primitiveTransition.easing.inOut
  }
};

// src/tokens/components/theme-toggle.ts
var themeToggleTokens = {
  sizes: {
    sm: {
      control: primitiveSizing.sm,
      icon: primitiveSpacing[4],
      padding: primitiveSpacing[1],
      radius: primitiveRadius.md
    },
    md: {
      control: primitiveSizing.md,
      icon: primitiveSpacing[5],
      padding: primitiveSpacing[2],
      radius: primitiveRadius.md
    },
    lg: {
      control: primitiveSizing.lg,
      icon: primitiveSpacing[6],
      padding: primitiveSpacing[3],
      radius: primitiveRadius.lg
    }
  },
  icon: {
    center: 12,
    sunRadius: 5,
    moonRadius: 9,
    maskRadius: 9,
    strokeWidth: 2
  },
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default,
    hoverScale: 1.06,
    tapScale: 0.92,
    morph: { type: "spring", stiffness: 380, damping: 30 },
    press: { type: "spring", stiffness: 420, damping: 28 },
    instant: { duration: 0 }
  }
};

// src/tokens/components/toast.ts
var toastTokens = {
  width: 420,
  radius: primitiveRadius.xl,
  shadow: primitiveShadow.lg,
  stack: {
    visibleToasts: 3,
    gap: primitiveSpacing[2],
    offset: primitiveSpacing[4],
    mobileOffset: primitiveSpacing[4]
  },
  duration: {
    default: 3e3,
    undo: 7e3
  },
  action: {
    radius: primitiveRadius.md,
    paddingX: primitiveSpacing[3],
    paddingY: primitiveSpacing[1]
  },
  typography: {
    titleSize: primitiveFontSize.sm,
    descriptionSize: primitiveFontSize.xs,
    lineHeight: 21,
    titleWeight: primitiveFontWeight.medium
  },
  motion: {
    duration: primitiveTransition.duration.reveal,
    easing: "cubic-bezier(.25,.75,.6,.98)"
  }
};

// src/tokens/components/toggle.ts
var semanticColor = (name) => {
  const color = `hsl(var(--${name}))`;
  return {
    trackOn: color,
    trackOff: "var(--neutral-3)",
    trackBorder: `color-mix(in oklch, ${color} 34%, var(--neutral-7))`,
    thumb: "var(--neutral-1)",
    iconOn: color,
    iconOff: "var(--neutral-10)"
  };
};
var toggleTokens = {
  size: {
    small: {
      trackWidth: 28,
      trackHeight: 14,
      thumbSize: 12,
      thumbTranslate: 14,
      iconSize: 10,
      labelFontSize: primitiveFontSize.xs,
      paddingY: 3,
      gap: primitiveSpacing[2]
    },
    normal: {
      trackWidth: 32,
      trackHeight: 18,
      thumbSize: 16,
      thumbTranslate: 14,
      iconSize: 12,
      labelFontSize: primitiveFontSize.sm,
      paddingY: 3,
      gap: primitiveSpacing[2]
    },
    large: {
      trackWidth: 40,
      trackHeight: 24,
      thumbSize: primitiveSizing.xs + 2,
      thumbTranslate: 16,
      iconSize: 14,
      labelFontSize: primitiveFontSize.sm,
      paddingY: 3,
      gap: primitiveSpacing[3]
    }
  },
  radius: primitiveRadius.full,
  thumbShadow: primitiveShadow.sm,
  motion: {
    duration: primitiveTransition.duration.micro,
    easing: primitiveTransition.easing.default
  },
  color: {
    default: semanticColor("success"),
    blue: semanticColor("primary"),
    cyan: {
      trackOn: "hsl(var(--primary))",
      trackOff: "var(--neutral-3)",
      trackBorder: "color-mix(in oklch, hsl(var(--primary)) 34%, var(--neutral-7))",
      thumb: "var(--neutral-1)",
      iconOn: "var(--cyan-11)",
      iconOff: "var(--neutral-10)"
    },
    success: semanticColor("success"),
    warning: semanticColor("warning"),
    error: semanticColor("destructive"),
    neutral: {
      trackOn: "var(--neutral-10)",
      trackOff: "var(--neutral-3)",
      trackBorder: "var(--neutral-7)",
      thumb: "var(--neutral-1)",
      iconOn: "var(--neutral-12)",
      iconOff: "var(--neutral-10)"
    }
  }
};
var toggleColorAliases = {
  green: "success",
  amber: "warning",
  red: "error",
  teal: "cyan",
  gray: "neutral"
};
var defaultLabels = {
  default: false,
  secondary: "Info",
  success: "Success",
  warning: "Warning",
  error: "Error",
  cyan: "Signal"
};
var toneIcons = {
  default: Information,
  secondary: Information,
  success: CheckCircle,
  warning: Warning,
  error: Warning,
  cyan: Information
};
function resolveTone(tone, type) {
  return tone ?? type ?? "default";
}
function resolveLabel(label, tone) {
  return label === void 0 ? defaultLabels[tone] : label;
}
function getNoteStyle(size, tone, fill) {
  const sizeTokens = noteTokens.size[size];
  const toneTokens = noteTokens.tone[tone];
  return {
    "--note-bg": fill ? toneTokens.filledBackground : toneTokens.background,
    "--note-border": toneTokens.border,
    "--note-fg": toneTokens.foreground,
    "--note-label": toneTokens.label,
    "--note-icon": toneTokens.icon,
    "--note-link": toneTokens.link,
    "--note-radius": `${noteTokens.radius}px`,
    "--note-min-height": `${sizeTokens.minHeight}px`,
    "--note-px": `${sizeTokens.paddingX}px`,
    "--note-py": `${sizeTokens.paddingY}px`,
    "--note-gap": `${sizeTokens.gap}px`,
    "--note-icon-size": `${sizeTokens.iconSize}px`,
    "--note-font-size": `${sizeTokens.fontSize}px`,
    "--note-line-height": `${sizeTokens.lineHeight}px`,
    "--note-label-font-weight": noteTokens.label.fontWeight,
    "--note-motion-duration": `${noteTokens.motion.duration}ms`,
    "--note-motion-easing": noteTokens.motion.easing
  };
}
function Note({
  action,
  children,
  className,
  disabled = false,
  fill = false,
  icon,
  label,
  ref,
  role,
  size = "medium",
  style,
  tone,
  type,
  ...props
}) {
  const resolvedTone = resolveTone(tone, type);
  const Label2 = resolveLabel(label, resolvedTone);
  const Icon = toneIcons[resolvedTone];
  const resolvedRole = role ?? (resolvedTone === "error" ? "alert" : "note");
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ...props,
      ref,
      role: resolvedRole,
      "aria-disabled": disabled || void 0,
      "data-disabled": disabled || void 0,
      "data-fill": fill || void 0,
      "data-size": size,
      "data-slot": "note",
      "data-tone": resolvedTone,
      style: { ...getNoteStyle(size, resolvedTone, fill), ...style },
      className: cn(
        "flex min-h-[var(--note-min-height)] w-full items-start gap-[var(--note-gap)] rounded-[var(--note-radius)] border border-[color:var(--note-border)] bg-[var(--note-bg)] px-[var(--note-px)] py-[var(--note-py)] font-sans text-[length:var(--note-font-size)] leading-[var(--note-line-height)] text-[color:var(--note-fg)] transition-[background-color,border-color,color,opacity] duration-[var(--note-motion-duration)] ease-[var(--note-motion-easing)]",
        "[&_a]:font-medium [&_a]:text-[color:var(--note-link)] [&_a]:underline [&_a]:underline-offset-4",
        "data-[disabled=true]:opacity-60",
        className
      ),
      children: [
        icon !== false && /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            "data-slot": "note-icon",
            className: "mt-[calc((var(--note-line-height)-var(--note-icon-size))/2)] flex size-[var(--note-icon-size)] shrink-0 items-center justify-center text-[color:var(--note-icon)]",
            children: icon ?? /* @__PURE__ */ jsx(Icon, { size: "var(--note-icon-size)" })
          }
        ),
        /* @__PURE__ */ jsxs("div", { "data-slot": "note-copy", className: "min-w-0 flex-1", children: [
          Label2 && /* @__PURE__ */ jsxs(
            "span",
            {
              "data-slot": "note-label",
              className: "mr-1.5 inline font-[var(--note-label-font-weight)] text-[color:var(--note-label)]",
              children: [
                Label2,
                ":"
              ]
            }
          ),
          /* @__PURE__ */ jsx("span", { "data-slot": "note-content", children })
        ] }),
        action && /* @__PURE__ */ jsx(
          "div",
          {
            "data-slot": "note-action",
            inert: disabled || void 0,
            className: "ml-auto shrink-0 self-start data-[disabled=true]:pointer-events-none",
            "data-disabled": disabled || void 0,
            children: action
          }
        )
      ]
    }
  );
}
function paginationCssVars(style) {
  return {
    "--pagination-gap": `${paginationTokens.gap}px`,
    "--pagination-min-height": `${paginationTokens.minHeight}px`,
    "--pagination-padding-x": `${paginationTokens.padding.x}px`,
    "--pagination-padding-y": `${paginationTokens.padding.y}px`,
    "--pagination-radius": `${paginationTokens.radius}px`,
    "--pagination-icon-size": `${paginationTokens.iconSize}px`,
    "--pagination-label-size": `${paginationTokens.labelSize}px`,
    "--pagination-title-size": `${paginationTokens.titleSize}px`,
    "--pagination-title-gap": `${paginationTokens.titleGap}px`,
    "--pagination-duration": `${paginationTokens.motion.duration}ms`,
    "--pagination-easing": paginationTokens.motion.easing,
    ...style
  };
}
function PaginationRail({
  destination,
  direction,
  label
}) {
  if (!destination) {
    return /* @__PURE__ */ jsx("div", { "aria-hidden": "true", className: "hidden sm:block" });
  }
  const isPrevious = direction === "previous";
  const Icon = isPrevious ? ChevronLeft : ChevronRight;
  return /* @__PURE__ */ jsxs(
    "a",
    {
      href: destination.href,
      rel: direction === "previous" ? "prev" : "next",
      "aria-label": `Go to ${direction} page: ${destination.title}`,
      className: cn(
        "group flex min-h-[var(--pagination-min-height)] min-w-0 items-center gap-[var(--pagination-gap)] rounded-[var(--pagination-radius)] border border-border bg-background",
        "px-[var(--pagination-padding-x)] py-[var(--pagination-padding-y)] text-foreground shadow-xs",
        "transition-[background-color,border-color,box-shadow,color,transform] duration-[var(--pagination-duration)] ease-[var(--pagination-easing)]",
        "hover:border-ring hover:bg-accent focus-visible:outline-none",
        "motion-reduce:transition-none",
        isPrevious ? "justify-start text-left" : "justify-end text-right"
      ),
      children: [
        isPrevious && /* @__PURE__ */ jsx(
          Icon,
          {
            "aria-hidden": "true",
            className: "size-[var(--pagination-icon-size)] shrink-0 text-muted-foreground transition-transform duration-[var(--pagination-duration)] group-hover:-translate-x-0.5 motion-reduce:transition-none"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 flex-col gap-[var(--pagination-title-gap)]", children: [
          /* @__PURE__ */ jsx("span", { className: "text-[length:var(--pagination-label-size)] font-medium uppercase tracking-normal text-muted-foreground", children: label }),
          /* @__PURE__ */ jsx("span", { className: "truncate text-[length:var(--pagination-title-size)] font-medium text-foreground", children: destination.title })
        ] }),
        !isPrevious && /* @__PURE__ */ jsx(
          Icon,
          {
            "aria-hidden": "true",
            className: "size-[var(--pagination-icon-size)] shrink-0 text-muted-foreground transition-transform duration-[var(--pagination-duration)] group-hover:translate-x-0.5 motion-reduce:transition-none"
          }
        )
      ]
    }
  );
}
function Pagination({
  previous,
  next,
  previousLabel = "Previous",
  nextLabel = "Next",
  className,
  style,
  "aria-label": ariaLabel = "Page navigation",
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      "aria-label": ariaLabel,
      className: cn(
        "grid w-full grid-cols-1 gap-[var(--pagination-gap)] sm:grid-cols-2",
        className
      ),
      style: paginationCssVars(style),
      ...props,
      children: [
        /* @__PURE__ */ jsx(PaginationRail, { destination: previous, direction: "previous", label: previousLabel }),
        /* @__PURE__ */ jsx(PaginationRail, { destination: next, direction: "next", label: nextLabel })
      ]
    }
  );
}
Pagination.displayName = "Pagination";
var progressVariants = cva("relative overflow-hidden rounded-full", {
  variants: {
    variant: {
      default: "bg-primary/20",
      primary: "bg-primary/20",
      secondary: "bg-secondary/20",
      destructive: "bg-destructive/20",
      success: "bg-success/20",
      warning: "bg-warning/20",
      outline: "border border-border bg-transparent"
    },
    size: {
      sm: "h-1.5",
      default: "h-2.5",
      lg: "h-3"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
var progressIndicatorVariants = cva(
  "h-full w-full flex-1 rounded-full transition-[background-color,transform] duration-cinematic ease-out motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default: "bg-primary",
        primary: "bg-primary",
        secondary: "bg-foreground",
        destructive: "bg-destructive",
        success: "bg-success",
        warning: "bg-warning",
        outline: "bg-primary"
      }
    },
    defaultVariants: { variant: "default" }
  }
);
var GEIST_TYPE_TO_VARIANT2 = {
  success: "success",
  warning: "warning",
  error: "destructive",
  secondary: "secondary"
};
function pickThresholdColor(colors2, pct) {
  const keys = Object.keys(colors2).map((k) => Number(k)).filter((n) => Number.isFinite(n)).sort((a, b) => a - b);
  let pick;
  for (const k of keys) {
    if (k <= pct) pick = colors2[k];
    else break;
  }
  return pick;
}
function useThrottled(value, ms = 1e3) {
  const [throttled] = useDebounceValue(value, ms, {
    leading: true,
    trailing: true,
    maxWait: ms
  });
  return throttled;
}
var Progress = function Progress2({
  className,
  value = 0,
  max = 100,
  variant,
  type,
  colors: colors2,
  stops,
  size,
  showValue = false,
  animated = true,
  label,
  ref,
  ...props
}) {
  const isIndeterminate = value === void 0 || value === null;
  const rawPct = isIndeterminate ? 0 : value / max * 100;
  const pct = Math.min(Math.max(rawPct, 0), 100);
  const throttledPct = useThrottled(pct);
  const resolvedVariant = type ? GEIST_TYPE_TO_VARIANT2[type] : variant ?? "default";
  const thresholdColor = colors2 ? pickThresholdColor(colors2, pct) : void 0;
  return /* @__PURE__ */ jsxs("div", { className: "w-full space-y-2", children: [
    label && /* @__PURE__ */ jsx("div", { className: "text-left font-medium text-foreground text-sm", children: label }),
    /* @__PURE__ */ jsxs("div", { className: "relative", children: [
      /* @__PURE__ */ jsx(
        Progress$1.Root,
        {
          ...props,
          ref,
          value: isIndeterminate ? null : value,
          max,
          "aria-valuenow": isIndeterminate ? void 0 : Math.round(throttledPct),
          className: cn(progressVariants({ variant: resolvedVariant, size }), className),
          children: /* @__PURE__ */ jsx(
            Progress$1.Indicator,
            {
              className: cn(
                progressIndicatorVariants({
                  variant: resolvedVariant === "outline" ? "default" : resolvedVariant
                }),
                isIndeterminate && "animate-pulse"
              ),
              style: thresholdColor ? { backgroundColor: thresholdColor } : void 0,
              render: /* @__PURE__ */ jsx(
                motion.div,
                {
                  initial: { scaleX: 0 },
                  animate: { scaleX: pct / 100 },
                  style: { transformOrigin: "left center" },
                  transition: {
                    duration: animated ? motionDurations.cinematic / 1e3 : 0,
                    ease: easings.easeInOut
                  }
                }
              )
            }
          )
        }
      ),
      stops && stops.length > 0 && /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 150, children: /* @__PURE__ */ jsx("div", { className: "pointer-events-none absolute inset-0", children: stops.map((stop) => {
        const stopPct = Math.min(Math.max(stop.value, 0), 100);
        const reached = pct >= stopPct;
        return /* @__PURE__ */ jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": !stop.ariaLabel ? "true" : void 0,
              className: cn(
                "pointer-events-auto -translate-x-1/2 -translate-y-1/2 absolute top-1/2 inline-block h-1.5 w-1.5 rounded-full border border-background transition-colors",
                reached ? "bg-foreground" : "bg-muted-foreground/60"
              ),
              style: { left: `${stopPct}%` },
              children: stop.ariaLabel && /* @__PURE__ */ jsx("span", { className: "sr-only", children: stop.ariaLabel })
            }
          ) }),
          stop.tooltip && /* @__PURE__ */ jsx(TooltipContent, { side: "top", className: "text-xs", children: stop.tooltip })
        ] }, `${stopPct}-${stop.ariaLabel ?? "marker"}`);
      }) }) })
    ] }),
    showValue && !isIndeterminate && /* @__PURE__ */ jsxs(
      motion.div,
      {
        className: "text-right font-semibold text-muted-foreground text-xs tabular-nums",
        initial: { opacity: 0, y: -5 },
        animate: { opacity: 1, y: 0 },
        transition: {
          delay: animated ? motionDurations.reveal / 1e3 : 0,
          duration: motionDurations.flow / 1e3,
          ease: easings.easeOut
        },
        children: [
          Math.round(pct),
          "%"
        ]
      }
    )
  ] });
};
var variantMap = {
  success: {
    container: "border-success/40 bg-success/10 text-success fill-success",
    cta: "text-success decoration-success/50 hover:text-success hover:decoration-success"
  },
  warning: {
    container: "border-warning/40 bg-warning/10 text-warning fill-warning",
    cta: "text-warning decoration-warning/50 hover:text-warning hover:decoration-warning"
  },
  error: {
    container: "border-destructive/40 bg-destructive/10 text-destructive fill-destructive",
    cta: "text-destructive decoration-destructive/50 hover:text-destructive hover:decoration-destructive"
  },
  info: {
    container: "border-border bg-muted text-foreground fill-foreground",
    cta: "text-foreground decoration-border hover:text-foreground hover:decoration-foreground"
  }
};
var ctaBase = "font-medium underline underline-offset-[5px] transition-colors duration-micro";
function ProjectBanner({
  variant = "info",
  label,
  icon,
  callToAction,
  role,
  ref,
  className
}) {
  const tokens = variantMap[variant];
  const resolvedRole = role ?? (variant === "error" ? "alert" : "status");
  return /* @__PURE__ */ jsx(
    "aside",
    {
      ref,
      role: resolvedRole,
      className: cn(
        "z-30 flex min-h-10 -translate-y-px items-center justify-center gap-x-2 border-y py-2 font-sans text-sm",
        tokens.container,
        className
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "flex w-full flex-col gap-2 px-6 md:flex-row md:items-center md:justify-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          icon && /* @__PURE__ */ jsx("span", { className: "flex size-4 shrink-0 items-center justify-center", children: icon }),
          /* @__PURE__ */ jsx("span", { children: label })
        ] }),
        callToAction && /* @__PURE__ */ jsx("div", { className: "ml-6 md:ml-0", children: callToAction.href !== void 0 ? /* @__PURE__ */ jsx("a", { className: cn(ctaBase, tokens.cta), href: callToAction.href, children: callToAction.label }) : /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            className: cn(ctaBase, tokens.cta, "cursor-pointer"),
            onClick: callToAction.onClick,
            children: callToAction.label
          }
        ) })
      ] })
    }
  );
}
var RadioGroupContext = createContext(null);
var itemStyle = {
  "--radio-item-gap": `${radioTokens.item.gap}px`,
  "--radio-item-min-height": `${radioTokens.item.minHeight}px`,
  "--radio-item-size": `${radioTokens.item.fontSize}px`,
  "--radio-item-weight": radioTokens.item.fontWeight,
  "--radio-description-size": `${radioTokens.item.descriptionSize}px`,
  "--radio-description-gap": `${radioTokens.item.descriptionGap}px`,
  "--radio-control-size": `${radioTokens.control.size}px`,
  "--radio-dot-size": `${radioTokens.control.dotSize}px`,
  "--radio-border-width": `${radioTokens.control.borderWidth}px`,
  "--radio-motion-duration": `${radioTokens.motion.duration}ms`,
  "--radio-motion-easing": radioTokens.motion.easing
};
var radioControlClassName = cn(
  "relative inline-flex shrink-0 items-center justify-center rounded-[var(--radius-full)] border-[length:var(--radio-border-width)] border-border bg-background text-foreground",
  "size-[var(--radio-control-size)]",
  "transition-[background-color,border-color,box-shadow] duration-[var(--radio-motion-duration)] ease-[var(--radio-motion-easing)]",
  "after:size-[var(--radio-dot-size)] after:scale-0 after:rounded-[var(--radius-full)] after:bg-current after:opacity-0 after:transition-[opacity,transform] after:duration-[var(--radio-motion-duration)] after:ease-[var(--radio-motion-easing)] after:content-['']",
  "peer-checked:border-[var(--neutral-12)] peer-checked:after:scale-100 peer-checked:after:opacity-100",
  "peer-focus-visible:outline-none",
  "peer-disabled:border-[var(--neutral-5)] peer-disabled:bg-muted peer-disabled:text-[var(--neutral-8)]"
);
function useRadioGroupContext() {
  return use(RadioGroupContext);
}
function RadioRoot({ className, indicatorClassName, inputClassName, ...props }) {
  return /* @__PURE__ */ jsxs("span", { className: cn("inline-flex items-center", className), children: [
    /* @__PURE__ */ jsx("input", { type: "radio", className: cn("peer sr-only", inputClassName), ...props }),
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: cn(radioControlClassName, indicatorClassName) })
  ] });
}
RadioRoot.displayName = "Radio";
function RadioGroupItemRoot({
  children,
  className,
  controlClassName,
  description,
  disabled,
  disabledReason,
  id,
  inputClassName,
  style,
  value,
  ...props
}) {
  const generatedId = useId();
  const inputId = id ?? `radio-${generatedId.replace(/:/g, "")}`;
  const reasonId = disabledReason ? `${inputId}-reason` : void 0;
  const descriptionId = description ? `${inputId}-description` : void 0;
  const context = useRadioGroupContext();
  const isDisabled = Boolean(disabled || context?.disabled);
  const isChecked = context ? context.value === value : void 0;
  const required = context?.required;
  const name = context?.name;
  const describedBy = [descriptionId, reasonId].filter(Boolean).join(" ");
  const radio = /* @__PURE__ */ jsx(
    RadioRoot,
    {
      id: inputId,
      value,
      disabled: isDisabled,
      indicatorClassName: controlClassName,
      inputClassName,
      onChange: (event) => {
        if (event.currentTarget.checked) {
          context?.setValue(value);
        }
      },
      ...name ? { name } : {},
      ...isChecked === void 0 ? {} : { checked: isChecked },
      ...context || props.defaultChecked === void 0 ? {} : { defaultChecked: props.defaultChecked },
      ...required ? { required } : {},
      ...describedBy ? { "aria-describedby": describedBy } : {},
      ...!children && props["aria-label"] ? { "aria-label": props["aria-label"] } : {},
      ...props["aria-labelledby"] ? { "aria-labelledby": props["aria-labelledby"] } : {}
    }
  );
  const mergedStyle = { ...itemStyle, ...style };
  if (!children && !description) {
    return /* @__PURE__ */ jsxs(
      "span",
      {
        className: cn(
          "inline-flex min-h-[var(--radio-item-min-height)] items-center gap-[var(--radio-item-gap)]",
          isDisabled && "cursor-not-allowed opacity-60",
          className
        ),
        style: mergedStyle,
        title: isDisabled ? disabledReason : void 0,
        children: [
          radio,
          disabledReason ? /* @__PURE__ */ jsx("span", { id: reasonId, className: "sr-only", children: disabledReason }) : null
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "label",
    {
      htmlFor: inputId,
      className: cn(
        "group inline-flex min-h-[var(--radio-item-min-height)] items-start gap-[var(--radio-item-gap)] text-[length:var(--radio-item-size)] text-foreground leading-5",
        isDisabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        className
      ),
      style: mergedStyle,
      title: isDisabled ? disabledReason : void 0,
      ...props,
      children: [
        /* @__PURE__ */ jsx("span", { className: "pt-0.5", children: radio }),
        /* @__PURE__ */ jsxs("span", { className: "min-w-0", children: [
          /* @__PURE__ */ jsx("span", { style: { fontWeight: "var(--radio-item-weight)" }, children }),
          description ? /* @__PURE__ */ jsx(
            "span",
            {
              id: descriptionId,
              className: "mt-[var(--radio-description-gap)] block text-[length:var(--radio-description-size)] text-muted-foreground leading-4",
              children: description
            }
          ) : null,
          disabledReason ? /* @__PURE__ */ jsx("span", { id: reasonId, className: "sr-only", children: disabledReason }) : null
        ] })
      ]
    }
  );
}
RadioGroupItemRoot.displayName = "RadioGroupItem";
function RadioGroupRoot({
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  children,
  className,
  defaultValue = "",
  disabled = false,
  label,
  name,
  onChange,
  onValueChange,
  orientation = "vertical",
  required = false,
  rootClassName,
  style,
  value,
  ...props
}) {
  const generatedName = useId();
  const initialDefaultValue = useRef(defaultValue);
  const [internalValue, setInternalValue] = useState(initialDefaultValue.current);
  const isControlled = value !== void 0;
  const selectedValue = isControlled ? value : internalValue;
  const legendId = useId();
  const groupStyle = {
    "--radio-group-gap": `${radioTokens.group.gap}px`,
    "--radio-label-gap": `${radioTokens.group.labelGap}px`,
    "--radio-label-size": `${radioTokens.label.fontSize}px`,
    "--radio-label-weight": radioTokens.label.fontWeight,
    ...style
  };
  const contextValue = useMemo(
    () => ({
      name: name ?? `radio-group-${generatedName.replace(/:/g, "")}`,
      value: selectedValue,
      disabled,
      required,
      setValue: (nextValue) => {
        if (!isControlled) {
          setInternalValue(nextValue);
        }
        onChange?.(nextValue);
        onValueChange?.(nextValue);
      }
    }),
    [disabled, generatedName, isControlled, name, onChange, onValueChange, required, selectedValue]
  );
  return /* @__PURE__ */ jsxs(
    "fieldset",
    {
      disabled,
      "aria-label": label ? void 0 : ariaLabel,
      "aria-labelledby": label ? legendId : ariaLabelledBy,
      className: cn("m-0 min-w-0 border-0 p-0", rootClassName),
      style: groupStyle,
      ...props,
      children: [
        label ? /* @__PURE__ */ jsx(
          "legend",
          {
            id: legendId,
            className: "mb-[var(--radio-label-gap)] text-[length:var(--radio-label-size)] text-foreground",
            style: { fontWeight: "var(--radio-label-weight)" },
            children: label
          }
        ) : null,
        /* @__PURE__ */ jsx(RadioGroupContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(
          "div",
          {
            className: cn(
              "flex gap-[var(--radio-group-gap)]",
              orientation === "vertical" ? "flex-col" : "flex-row flex-wrap",
              className
            ),
            "data-orientation": orientation,
            children
          }
        ) })
      ]
    }
  );
}
RadioGroupRoot.displayName = "RadioGroup";
var RadioGroupItem = RadioGroupItemRoot;
var RadioGroup = Object.assign(RadioGroupRoot, {
  Item: RadioGroupItemRoot
});
function ResizablePanelGroup({
  className,
  direction,
  orientation,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Group,
    {
      orientation: orientation ?? direction ?? "horizontal",
      className: cn("flex h-full w-full data-[panel-group-direction=vertical]:flex-col", className),
      ...props
    }
  );
}
var ResizablePanel = Panel;
var ResizableHandle = ({
  withHandle,
  className,
  ...props
}) => /* @__PURE__ */ jsx(
  Separator,
  {
    className: cn(
      "relative flex w-px items-center justify-center bg-border after:absolute after:inset-y-0 after:left-1/2 after:w-1 after:-translate-x-1/2 focus-visible:outline-none data-[panel-group-direction=vertical]:h-px data-[panel-group-direction=vertical]:w-full data-[panel-group-direction=vertical]:after:left-0 data-[panel-group-direction=vertical]:after:h-1 data-[panel-group-direction=vertical]:after:w-full data-[panel-group-direction=vertical]:after:-translate-y-1/2 data-[panel-group-direction=vertical]:after:translate-x-0 [&[data-panel-group-direction=vertical]>div]:rotate-90",
      className
    ),
    ...props,
    children: withHandle && /* @__PURE__ */ jsx("div", { className: "z-10 flex h-4 w-3 items-center justify-center rounded-[var(--radius-sm)] border bg-border", children: /* @__PURE__ */ jsx(MoreVertical, { className: "size-2.5" }) })
  }
);
function toCssLength2(value, fallback) {
  if (value === void 0) return fallback;
  return typeof value === "number" ? `${value}px` : value;
}
function createScrollerCssVars({
  width,
  height,
  style
}) {
  return {
    "--scroller-width": toCssLength2(width, "100%"),
    "--scroller-height": toCssLength2(height, "auto"),
    "--scroller-radius": `${scrollerTokens.radius}px`,
    "--scroller-fade-size": `${scrollerTokens.fadeSize}px`,
    "--scroller-button-size": `${scrollerTokens.button.size}px`,
    "--scroller-button-offset": `${scrollerTokens.button.offset}px`,
    "--scroller-button-radius": `${scrollerTokens.button.radius}px`,
    "--scroller-button-icon-size": `${scrollerTokens.button.iconSize}px`,
    "--scroller-button-shadow": scrollerTokens.button.shadow,
    "--scroller-duration": `${scrollerTokens.motion.duration}ms`,
    "--scroller-easing": scrollerTokens.motion.easing,
    ...style
  };
}
function resolveButtonAxis(overflow, buttonAxis) {
  return buttonAxis ?? (overflow === "x" ? "x" : "y");
}
function resolveScrollClasses(overflow) {
  if (overflow === "x") return "overflow-x-auto overflow-y-hidden";
  if (overflow === "y") return "overflow-y-auto overflow-x-hidden";
  return "overflow-auto";
}
function resolveContainerClasses(overflow) {
  if (overflow === "x") return "flex min-w-max flex-row";
  if (overflow === "y") return "flex flex-col";
  return "min-w-max";
}
function getDirectChildElements(container) {
  if (!container) return [];
  return Array.from(container.children).filter(
    (child) => child instanceof HTMLElement
  );
}
function getChildPosition(child, axis) {
  return axis === "x" ? child.offsetLeft : child.offsetTop;
}
function getScrollPosition(viewport, axis) {
  return axis === "x" ? viewport.scrollLeft : viewport.scrollTop;
}
function getEdgeState(viewport) {
  const threshold = 1;
  const maxX = viewport.scrollWidth - viewport.clientWidth;
  const maxY = viewport.scrollHeight - viewport.clientHeight;
  return {
    left: viewport.scrollLeft > threshold,
    right: viewport.scrollLeft < maxX - threshold,
    top: viewport.scrollTop > threshold,
    bottom: viewport.scrollTop < maxY - threshold
  };
}
function findTargetChild(children, viewport, axis, direction) {
  if (children.length === 0) return void 0;
  const threshold = 2;
  const currentPosition = getScrollPosition(viewport, axis);
  const sortedChildren = [...children].sort(
    (a, b) => getChildPosition(a, axis) - getChildPosition(b, axis)
  );
  if (direction === "next") {
    return sortedChildren.find((child) => getChildPosition(child, axis) > currentPosition + threshold) ?? sortedChildren.at(-1);
  }
  for (let index = sortedChildren.length - 1; index >= 0; index -= 1) {
    const child = sortedChildren[index];
    if (child && getChildPosition(child, axis) < currentPosition - threshold) {
      return child;
    }
  }
  return sortedChildren[0];
}
function scrollToChild({
  child,
  viewport,
  axis,
  behavior
}) {
  const position = getChildPosition(child, axis);
  viewport.scrollTo({
    left: axis === "x" ? position : viewport.scrollLeft,
    top: axis === "y" ? position : viewport.scrollTop,
    behavior
  });
}
function edgeClasses(overflow, edgeState) {
  return [
    (overflow === "x" || overflow === "both") && edgeState.left && "before:absolute before:inset-y-0 before:left-0 before:z-10 before:w-[var(--scroller-fade-size)] before:pointer-events-none before:bg-gradient-to-r before:from-background before:to-transparent",
    (overflow === "x" || overflow === "both") && edgeState.right && "after:absolute after:inset-y-0 after:right-0 after:z-10 after:w-[var(--scroller-fade-size)] after:pointer-events-none after:bg-gradient-to-l after:from-background after:to-transparent"
  ];
}
function VerticalEdges({
  edgeState,
  overflow
}) {
  if (overflow === "x") return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    edgeState.top && /* @__PURE__ */ jsx(
      "span",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-x-0 top-0 z-10 h-[var(--scroller-fade-size)] bg-gradient-to-b from-background to-transparent"
      }
    ),
    edgeState.bottom && /* @__PURE__ */ jsx(
      "span",
      {
        "aria-hidden": "true",
        className: "pointer-events-none absolute inset-x-0 bottom-0 z-10 h-[var(--scroller-fade-size)] bg-gradient-to-t from-background to-transparent"
      }
    )
  ] });
}
function ScrollerButton({
  axis,
  direction,
  disabled,
  label,
  onClick
}) {
  const Icon = axis === "x" ? direction === "previous" ? ChevronLeft : ChevronRight : direction === "previous" ? ChevronUp : ChevronDown;
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": label,
      disabled,
      onClick,
      className: cn(
        "absolute z-20 grid size-[var(--scroller-button-size)] place-items-center rounded-[var(--scroller-button-radius)]",
        "border border-border bg-background text-muted-foreground shadow-[var(--scroller-button-shadow)]",
        "transition-[background-color,border-color,color,opacity,transform] duration-[var(--scroller-duration)] ease-[var(--scroller-easing)]",
        "hover:border-ring hover:text-foreground focus-visible:outline-none",
        "disabled:pointer-events-none disabled:opacity-0 motion-reduce:transition-none",
        axis === "x" && direction === "previous" && "left-[var(--scroller-button-offset)] top-1/2 -translate-y-1/2",
        axis === "x" && direction === "next" && "right-[var(--scroller-button-offset)] top-1/2 -translate-y-1/2",
        axis === "y" && direction === "previous" && "left-1/2 top-[var(--scroller-button-offset)] -translate-x-1/2",
        axis === "y" && direction === "next" && "bottom-[var(--scroller-button-offset)] left-1/2 -translate-x-1/2"
      ),
      children: /* @__PURE__ */ jsx(Icon, { "aria-hidden": "true", className: "size-[var(--scroller-button-icon-size)]" })
    }
  );
}
function Scroller({
  children,
  overflow = "y",
  width,
  height,
  childrenContainerClassName,
  withButtons = false,
  buttonAxis,
  contentLabel = "content",
  previousButtonLabel,
  nextButtonLabel,
  edgeAffordance = "fade",
  scrollBehavior = "smooth",
  className,
  style,
  ...props
}) {
  const viewportRef = React24.useRef(null);
  const childrenContainerRef = React24.useRef(null);
  const [edgeState, setEdgeState] = React24.useState({
    left: false,
    right: false,
    top: false,
    bottom: false
  });
  const resolvedButtonAxis = resolveButtonAxis(overflow, buttonAxis);
  const updateEdgeState = React24.useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    setEdgeState(getEdgeState(viewport));
  }, []);
  React24.useEffect(() => {
    updateEdgeState();
    const viewport = viewportRef.current;
    const childrenContainer = childrenContainerRef.current;
    if (!viewport) return;
    const resizeObserver = typeof ResizeObserver === "undefined" ? void 0 : new ResizeObserver(updateEdgeState);
    resizeObserver?.observe(viewport);
    if (childrenContainer) resizeObserver?.observe(childrenContainer);
    window.addEventListener("resize", updateEdgeState);
    return () => {
      resizeObserver?.disconnect();
      window.removeEventListener("resize", updateEdgeState);
    };
  }, [updateEdgeState]);
  const scrollToSibling = React24.useCallback(
    (direction) => {
      const viewport = viewportRef.current;
      if (!viewport) return;
      const directChildren = getDirectChildElements(childrenContainerRef.current);
      const targetChild = findTargetChild(directChildren, viewport, resolvedButtonAxis, direction);
      if (!targetChild) return;
      scrollToChild({
        child: targetChild,
        viewport,
        axis: resolvedButtonAxis,
        behavior: scrollBehavior
      });
    },
    [resolvedButtonAxis, scrollBehavior]
  );
  const hasPrevious = resolvedButtonAxis === "x" ? edgeState.left : edgeState.top;
  const hasNext = resolvedButtonAxis === "x" ? edgeState.right : edgeState.bottom;
  const previousLabel = previousButtonLabel ?? `Scroll ${contentLabel} ${resolvedButtonAxis === "x" ? "left" : "up"}`;
  const nextLabel = nextButtonLabel ?? `Scroll ${contentLabel} ${resolvedButtonAxis === "x" ? "right" : "down"}`;
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative isolate w-[var(--scroller-width)]",
        edgeAffordance === "fade" && edgeClasses(overflow, edgeState),
        className
      ),
      style: createScrollerCssVars({ width, height, style }),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "section",
          {
            ref: viewportRef,
            "aria-label": contentLabel,
            onScroll: updateEdgeState,
            className: cn(
              "h-[var(--scroller-height)] rounded-[var(--scroller-radius)] outline-none",
              "scroll-smooth overscroll-contain motion-reduce:scroll-auto",
              resolveScrollClasses(overflow)
            ),
            children: /* @__PURE__ */ jsx(
              "div",
              {
                ref: childrenContainerRef,
                className: cn(resolveContainerClasses(overflow), childrenContainerClassName),
                children
              }
            )
          }
        ),
        edgeAffordance === "fade" && /* @__PURE__ */ jsx(VerticalEdges, { edgeState, overflow }),
        withButtons && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(
            ScrollerButton,
            {
              axis: resolvedButtonAxis,
              direction: "previous",
              disabled: !hasPrevious,
              label: previousLabel,
              onClick: () => scrollToSibling("previous")
            }
          ),
          /* @__PURE__ */ jsx(
            ScrollerButton,
            {
              axis: resolvedButtonAxis,
              direction: "next",
              disabled: !hasNext,
              label: nextLabel,
              onClick: () => scrollToSibling("next")
            }
          )
        ] })
      ]
    }
  );
}
Scroller.displayName = "Scroller";
function getSelectTriggerStyle(size, style) {
  const token = selectTokens.sizes[size];
  return {
    "--select-height": `${token.height}px`,
    "--select-padding-x": `${token.paddingX}px`,
    "--select-font-size": `${token.fontSize}px`,
    "--select-radius": `${token.radius}px`,
    "--select-focus-ring-width": `${selectTokens.focusRingWidth}px`,
    borderRadius: "var(--select-radius)",
    outline: "none",
    ...asPlainStyle(style)
  };
}
function getNativeSelectStyle(size, style) {
  const token = selectTokens.sizes[size];
  return {
    "--select-height": `${token.height}px`,
    "--select-padding-x": `${token.paddingX}px`,
    "--select-font-size": `${token.fontSize}px`,
    "--select-radius": `${token.radius}px`,
    "--select-icon-inset": `${token.iconInset}px`,
    "--select-icon-box-size": `${token.iconBoxSize}px`,
    "--select-icon-size": `${token.iconSize}px`,
    "--select-label-size": `${selectTokens.labelSize}px`,
    "--select-focus-ring-width": `${selectTokens.focusRingWidth}px`,
    "--select-field-gap": `${selectTokens.fieldGap}px`,
    "--select-message-gap": `${selectTokens.messageGap}px`,
    "--select-duration": `${selectTokens.motion.duration}ms`,
    "--select-easing": selectTokens.motion.easing,
    ...asPlainStyle(style)
  };
}
function getSelectContentStyle(style) {
  return {
    "--select-content-max-height": `${selectTokens.content.maxHeight}px`,
    "--select-content-min-width": `${selectTokens.content.minWidth}px`,
    "--select-content-padding": `${selectTokens.content.padding}px`,
    "--select-content-radius": `${selectTokens.content.radius}px`,
    "--select-content-shadow": selectTokens.content.shadow,
    "--select-font-size": `${selectTokens.content.fontSize}px`,
    "--select-duration": `${selectTokens.motion.duration}ms`,
    "--select-easing": selectTokens.motion.easing,
    "--select-item-radius": `${selectTokens.item.radius}px`,
    "--select-item-padding-x": `${selectTokens.item.paddingX}px`,
    "--select-item-padding-y": `${selectTokens.item.paddingY}px`,
    "--select-item-indicator-inset": `${selectTokens.item.indicatorInset}px`,
    "--select-item-indicator-size": `${selectTokens.item.indicatorSize}px`,
    "--select-item-indicator-icon-size": `${selectTokens.item.indicatorIconSize}px`,
    zIndex: overlayZIndex.popover,
    ...asPlainStyle(style)
  };
}
function textOf(node) {
  if (node == null || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(textOf).join("");
  if (React24.isValidElement(node)) {
    const props = node.props;
    return textOf(props.children);
  }
  return "";
}
function optionsFromChildren(children) {
  const options = [];
  React24.Children.forEach(children, (child) => {
    if (!React24.isValidElement(child)) return;
    if (child.type !== "option") return;
    const props = child.props;
    const value = String(props.value ?? "");
    const label = textOf(props.children) || value;
    options.push(props.disabled === true ? { value, label, disabled: true } : { value, label });
  });
  return options;
}
function hasNativeOptionChildren(children) {
  let hasNativeChildren = false;
  React24.Children.forEach(children, (child) => {
    if (!React24.isValidElement(child)) return;
    if (child.type === "option" || child.type === "optgroup") {
      hasNativeChildren = true;
    }
  });
  return hasNativeChildren;
}
function isOptionsSelectApi(props) {
  if (props.native === true) return false;
  if ("options" in props && props.options !== void 0) return true;
  if ("label" in props && props.label !== void 0) return true;
  if ("placeholder" in props && props.placeholder !== void 0) return true;
  if ("error" in props && props.error !== void 0) return true;
  if ("prefix" in props && props.prefix !== void 0) return true;
  if ("suffix" in props && props.suffix !== void 0) return true;
  if ("onChange" in props && typeof props.onChange === "function") {
    return true;
  }
  if ("children" in props && hasNativeOptionChildren(props.children)) return true;
  return false;
}
function NativeSelect({
  id,
  variant = "default",
  options,
  label,
  placeholder,
  size = "medium",
  prefix,
  suffix,
  disabled = false,
  error,
  className,
  wrapperClassName,
  children,
  style,
  value,
  defaultValue,
  onChange,
  "aria-describedby": ariaDescribedBy,
  ...props
}) {
  const generatedId = React24.useId();
  const selectId = id ?? generatedId;
  const errorId = error ? `${selectId}-error` : void 0;
  const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || void 0;
  const fallbackDefaultValue = placeholder && value === void 0 && defaultValue === void 0 ? "" : defaultValue;
  const hasAffix = Boolean(prefix || suffix);
  const nativeSelectStyle = getNativeSelectStyle(size, style);
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("grid gap-[var(--select-field-gap)]", wrapperClassName),
      style: nativeSelectStyle,
      children: [
        label && /* @__PURE__ */ jsx(
          Label,
          {
            htmlFor: selectId,
            className: "text-[length:var(--select-label-size)] font-medium text-foreground capitalize",
            children: label
          }
        ),
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "relative flex items-center text-muted-foreground",
              !disabled && "hover:text-foreground"
            ),
            children: [
              /* @__PURE__ */ jsxs(
                "select",
                {
                  id: selectId,
                  disabled,
                  value,
                  defaultValue: fallbackDefaultValue,
                  "aria-invalid": error ? true : void 0,
                  "aria-describedby": describedBy,
                  style: { borderRadius: "var(--select-radius)" },
                  className: cn(
                    "h-[var(--select-height)] w-full appearance-none rounded-[var(--select-radius)] border font-sans",
                    "bg-background text-[length:var(--select-font-size)] text-foreground shadow-xs outline-none",
                    "transition-[background-color,border-color,box-shadow,color] duration-[var(--select-duration)] ease-[var(--select-easing)]",
                    formControlFocusClassNames.select,
                    "disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground",
                    formControlInvalidClassNames.select,
                    variant === "ghost" ? "border-transparent bg-transparent shadow-none" : "border-input",
                    prefix ? "pl-[calc(var(--select-icon-inset)+var(--select-icon-box-size))]" : "pl-[var(--select-padding-x)]",
                    hasAffix ? "pr-[calc(var(--select-icon-inset)+var(--select-icon-box-size))]" : "pr-[var(--select-padding-x)]",
                    className
                  ),
                  onChange: (event) => onChange?.(event),
                  ...props,
                  children: [
                    placeholder && /* @__PURE__ */ jsx("option", { value: "", disabled: true, children: placeholder }),
                    options?.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, disabled: option.disabled, children: option.label }, option.value)),
                    children
                  ]
                }
              ),
              prefix && /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-[var(--select-icon-inset)] inline-flex size-[var(--select-icon-box-size)] items-center justify-center", children: prefix }),
              /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-[var(--select-icon-inset)] inline-flex size-[var(--select-icon-box-size)] items-center justify-center", children: suffix ?? /* @__PURE__ */ jsx(ChevronDown, { "aria-hidden": "true", className: "size-[var(--select-icon-size)]" }) })
            ]
          }
        ),
        error && /* @__PURE__ */ jsx("span", { id: errorId, className: "mt-[var(--select-message-gap)]", children: /* @__PURE__ */ jsx(ErrorMessage, { size: size === "large" ? "medium" : "small", children: error }) })
      ]
    }
  );
}
function OptionsListboxSelect({
  id,
  variant = "default",
  options: optionsProp,
  label,
  placeholder,
  size = "medium",
  prefix,
  suffix,
  disabled = false,
  error,
  className,
  wrapperClassName,
  children,
  style,
  value,
  defaultValue,
  name,
  onChange,
  onValueChange,
  "aria-describedby": ariaDescribedBy,
  "data-testid": dataTestId
}) {
  const generatedId = React24.useId();
  const selectId = id ?? generatedId;
  const errorId = error ? `${selectId}-error` : void 0;
  const describedBy = [ariaDescribedBy, errorId].filter(Boolean).join(" ") || void 0;
  const labelId = label ? `${selectId}-label` : void 0;
  const options = React24.useMemo(() => {
    const fromProp = optionsProp?.map((o) => ({
      value: String(o.value),
      label: o.label,
      ...o.disabled === true ? { disabled: true } : {}
    }));
    if (fromProp?.length) return fromProp;
    return optionsFromChildren(children);
  }, [optionsProp, children]);
  const items = React24.useMemo(
    () => Object.fromEntries(options.map((o) => [o.value, o.label])),
    [options]
  );
  const isControlled = value !== void 0;
  const [uncontrolled, setUncontrolled] = React24.useState(
    () => defaultValue !== void 0 ? String(defaultValue) : ""
  );
  const current = isControlled ? String(value ?? "") : uncontrolled;
  const selectedLabel = current && items[current] || current || "";
  const handleValueChange = (next) => {
    const resolved = next ?? "";
    if (!isControlled) setUncontrolled(resolved);
    onValueChange?.(next);
    onChange?.({
      target: name === void 0 ? { value: resolved } : { value: resolved, name }
    });
  };
  const fieldStyle = getNativeSelectStyle(size, style);
  return /* @__PURE__ */ jsxs("div", { className: cn("grid gap-[var(--select-field-gap)]", wrapperClassName), style: fieldStyle, children: [
    label && /* @__PURE__ */ jsx(
      Label,
      {
        id: labelId,
        htmlFor: selectId,
        className: "text-[length:var(--select-label-size)] font-medium text-foreground capitalize",
        children: label
      }
    ),
    name ? /* @__PURE__ */ jsx("input", { type: "hidden", name, value: current, "data-allow-native": true }) : null,
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn(
          "relative flex items-center text-muted-foreground",
          !disabled && "hover:text-foreground"
        ),
        children: [
          prefix && /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute left-[var(--select-icon-inset)] z-10 inline-flex size-[var(--select-icon-box-size)] items-center justify-center", children: prefix }),
          /* @__PURE__ */ jsxs(
            Select$1.Root,
            {
              value: current || null,
              onValueChange: handleValueChange,
              disabled,
              items,
              children: [
                /* @__PURE__ */ jsx(
                  SelectTrigger,
                  {
                    id: selectId,
                    size,
                    "data-testid": dataTestId,
                    "aria-invalid": error ? true : void 0,
                    "aria-describedby": describedBy,
                    "aria-labelledby": labelId,
                    className: cn(
                      variant === "ghost" && "border-transparent bg-transparent shadow-none",
                      prefix && "pl-[calc(var(--select-icon-inset)+var(--select-icon-box-size))]",
                      className
                    ),
                    children: /* @__PURE__ */ jsx(SelectValue, { placeholder: placeholder ?? "Select\u2026", children: () => selectedLabel || placeholder || "Select\u2026" })
                  }
                ),
                /* @__PURE__ */ jsx(SelectContent, { children: options.map((option) => /* @__PURE__ */ jsx(SelectItem, { value: option.value, disabled: option.disabled, children: option.label }, option.value)) })
              ]
            }
          ),
          suffix && /* @__PURE__ */ jsx("span", { className: "pointer-events-none absolute right-[var(--select-icon-inset)] z-10 inline-flex size-[var(--select-icon-box-size)] items-center justify-center", children: suffix })
        ]
      }
    ),
    error && /* @__PURE__ */ jsx("span", { id: errorId, className: "mt-[var(--select-message-gap)]", children: /* @__PURE__ */ jsx(ErrorMessage, { size: size === "large" ? "medium" : "small", children: error }) })
  ] });
}
function Select(props) {
  if (props.native === true) {
    return /* @__PURE__ */ jsx(NativeSelect, { ...props });
  }
  if (isOptionsSelectApi(props)) {
    return /* @__PURE__ */ jsx(OptionsListboxSelect, { ...props });
  }
  const { native: _native, ...rootProps } = props;
  return /* @__PURE__ */ jsx(Select$1.Root, { ...rootProps });
}
Select.displayName = "Select";
var SelectGroup = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(Select$1.Group, { ref, className: cn("p-1", className), ...props });
SelectGroup.displayName = "SelectGroup";
var SelectValue = ({
  className,
  placeholder,
  children,
  ref,
  ...props
}) => {
  return /* @__PURE__ */ jsx(Select$1.Value, { ref, className: cn("truncate", className), ...props, children: children || ((value) => {
    if (Array.isArray(value)) return value.length ? value.join(", ") : placeholder;
    return value || placeholder;
  }) });
};
SelectValue.displayName = "SelectValue";
var SelectTrigger = ({
  className,
  children,
  size = "medium",
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  Select$1.Trigger,
  {
    ref,
    className: cn(
      "flex h-[var(--select-height)] w-full items-center justify-between whitespace-nowrap rounded-[var(--select-radius)] border border-input bg-background",
      "px-[var(--select-padding-x)] text-[length:var(--select-font-size)] text-foreground shadow-xs",
      "transition-[background-color,border-color,box-shadow,color] duration-micro ease-out placeholder:text-muted-foreground",
      formControlFocusClassNames.select,
      "disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1",
      formControlInvalidClassNames.select,
      className
    ),
    style: getSelectTriggerStyle(size, style),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsx(Select$1.Icon, { render: /* @__PURE__ */ jsx("span", {}), children: /* @__PURE__ */ jsx(ChevronDown, { className: "h-4 w-4 opacity-50" }) })
    ]
  }
);
SelectTrigger.displayName = "SelectTrigger";
var SelectScrollUpButton = ({
  ref: _ref
}) => null;
SelectScrollUpButton.displayName = "SelectScrollUpButton";
var SelectScrollDownButton = ({
  ref: _ref
}) => null;
SelectScrollDownButton.displayName = "SelectScrollDownButton";
var SelectContent = ({
  className,
  children,
  position = "popper",
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(Select$1.Portal, { children: /* @__PURE__ */ jsx(
  Select$1.Positioner,
  {
    alignItemWithTrigger: position === "item-aligned",
    sideOffset: selectTokens.content.sideOffset,
    children: /* @__PURE__ */ jsx(
      Select$1.Popup,
      {
        ref,
        className: cn("relative", overlayClassNames.selectSurface, className),
        style: getSelectContentStyle(style),
        ...props,
        children: /* @__PURE__ */ jsx(Select$1.List, { className: "h-full w-full p-[var(--select-content-padding)]", children })
      }
    )
  }
) });
SelectContent.displayName = "SelectContent";
var SelectLabel = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Select$1.GroupLabel,
  {
    ref,
    className: cn(
      "px-[var(--select-item-padding-x)] py-[var(--select-item-padding-y)] text-[length:var(--select-font-size)] font-semibold",
      className
    ),
    ...props
  }
);
SelectLabel.displayName = "SelectLabel";
var SelectItem = ({
  className,
  children,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(
  Select$1.Item,
  {
    ref,
    className: cn(
      "relative flex w-full cursor-pointer select-none items-center rounded-[var(--select-item-radius)] py-[var(--select-item-padding-y)] pl-[var(--select-item-padding-x)] pr-[calc(var(--select-item-indicator-inset)+var(--select-item-indicator-size)+var(--select-item-padding-x))] text-[length:var(--select-font-size)] outline-none data-highlighted:bg-accent data-highlighted:text-accent-foreground data-disabled:pointer-events-none data-disabled:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsx("span", { className: "absolute right-[var(--select-item-indicator-inset)] flex size-[var(--select-item-indicator-size)] items-center justify-center", children: /* @__PURE__ */ jsx(Select$1.ItemIndicator, { render: /* @__PURE__ */ jsx("span", {}), children: /* @__PURE__ */ jsx(Check, { className: "size-[var(--select-item-indicator-icon-size)]" }) }) }),
      /* @__PURE__ */ jsx(Select$1.ItemText, { render: /* @__PURE__ */ jsx("span", {}), children })
    ]
  }
);
SelectItem.displayName = "SelectItem";
var SelectSeparator = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Select$1.Separator,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
);
SelectSeparator.displayName = "SelectSeparator";
var Separator2 = ({
  className,
  orientation = "horizontal",
  decorative: _decorative = true,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Separator$1,
  {
    ref,
    orientation,
    className: cn(
      "shrink-0 bg-border",
      orientation === "horizontal" ? "h-[1px] w-full" : "h-full w-[1px]",
      className
    ),
    ...props
  }
);
Separator2.displayName = "Separator";
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
    Dialog$1.Root,
    {
      "data-slot": "sheet",
      modal,
      disablePointerDismissal,
      ...props
    }
  );
}
Sheet.displayName = "Sheet";
var SheetTrigger = ({
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React24.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      Dialog$1.Trigger,
      {
        ref,
        "data-slot": "sheet-trigger",
        ...props,
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(Dialog$1.Trigger, { ref, "data-slot": "sheet-trigger", ...props, children });
};
SheetTrigger.displayName = "SheetTrigger";
var SheetClose = ({
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React24.isValidElement(children)) {
    return /* @__PURE__ */ jsx(
      Dialog$1.Close,
      {
        ref,
        "data-slot": "sheet-close",
        ...props,
        render: children
      }
    );
  }
  return /* @__PURE__ */ jsx(Dialog$1.Close, { ref, "data-slot": "sheet-close", ...props, children });
};
SheetClose.displayName = "SheetClose";
function SheetPortal(props) {
  return /* @__PURE__ */ jsx(Dialog$1.Portal, { "data-slot": "sheet-portal", ...props });
}
SheetPortal.displayName = "SheetPortal";
var SheetOverlay = ({
  className,
  style,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Dialog$1.Backdrop,
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
      Dialog$1.Popup,
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
var SheetHeader = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-slot": "sheet-header",
    className: cn(
      "grid gap-[var(--sheet-header-gap)] border-b border-border px-[var(--sheet-padding-x)] py-[var(--sheet-padding-y)] pr-[calc(var(--sheet-padding-x)_+_var(--sheet-close-size))] text-left",
      className
    ),
    ...props
  }
);
SheetHeader.displayName = "SheetHeader";
var SheetBody = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-slot": "sheet-body",
    className: cn(
      "min-h-0 flex-1 overflow-y-auto overscroll-contain px-[var(--sheet-padding-x)] py-[var(--sheet-body-padding-y)]",
      className
    ),
    ...props
  }
);
SheetBody.displayName = "SheetBody";
var SheetFooter = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    ref,
    "data-slot": "sheet-footer",
    className: cn(
      "mt-auto flex flex-col-reverse gap-[var(--sheet-footer-gap)] border-t border-border px-[var(--sheet-padding-x)] py-[var(--sheet-padding-y)] sm:flex-row sm:justify-end",
      className
    ),
    ...props
  }
);
SheetFooter.displayName = "SheetFooter";
var SheetTitle = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Dialog$1.Title,
  {
    ref,
    "data-slot": "sheet-title",
    className: cn("font-semibold text-base leading-6 text-foreground", className),
    ...props
  }
);
SheetTitle.displayName = "SheetTitle";
var SheetDescription = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Dialog$1.Description,
  {
    ref,
    "data-slot": "sheet-description",
    className: cn("text-muted-foreground text-sm leading-5", className),
    ...props
  }
);
SheetDescription.displayName = "SheetDescription";
function getCollapsedLabel(hiddenCount, collapsedLabel) {
  if (collapsedLabel) {
    return collapsedLabel;
  }
  if (typeof hiddenCount === "number" && hiddenCount > 0) {
    return `Show ${hiddenCount} More`;
  }
  return "Show More";
}
function callExpandedChange(props, expanded) {
  const onExpandedChange = "onExpandedChange" in props ? props.onExpandedChange : void 0;
  if (typeof onExpandedChange === "function") {
    onExpandedChange(expanded);
    return;
  }
  const onClick = "onClick" in props ? props.onClick : void 0;
  onClick?.(expanded);
}
var ShowMore = ({
  expanded,
  controls,
  hiddenCount,
  noBorder = false,
  expandedLabel = "Show Less",
  collapsedLabel,
  focusTargetRef,
  focusOnExpand = true,
  disabled = false,
  className,
  buttonClassName,
  dividerClassName,
  onExpandedChange,
  onClick,
  style,
  ref,
  ...props
}) => {
  const wasExpanded = React24.useRef(expanded);
  const label = expanded ? expandedLabel : getCollapsedLabel(hiddenCount, collapsedLabel);
  React24.useEffect(() => {
    if (focusOnExpand && expanded && !wasExpanded.current) {
      focusTargetRef?.current?.focus();
    }
    wasExpanded.current = expanded;
  }, [expanded, focusOnExpand, focusTargetRef]);
  const cssVars = {
    "--show-more-trigger-height": `${showMoreTokens.triggerHeight}px`,
    "--show-more-trigger-padding-x": `${showMoreTokens.triggerPaddingX}px`,
    "--show-more-divider-inset": `${showMoreTokens.dividerInset}px`,
    "--show-more-gap": `${showMoreTokens.gap}px`,
    "--show-more-radius": `${showMoreTokens.radius}px`,
    "--show-more-icon-size": `${showMoreTokens.iconSize}px`,
    "--show-more-duration": `${showMoreTokens.motion.duration}ms`,
    "--show-more-easing": showMoreTokens.motion.easing,
    ...style
  };
  const actionProps = typeof onExpandedChange === "function" ? { onExpandedChange } : { onClick };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      ref,
      className: cn(
        "flex w-full items-center justify-center px-[var(--show-more-divider-inset)]",
        className
      ),
      style: cssVars,
      ...props,
      children: [
        !noBorder && /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: cn("h-px flex-1 bg-[var(--neutral-7)]", dividerClassName)
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "shrink-0 bg-background px-[var(--show-more-gap)]", children: /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            "aria-controls": controls,
            "aria-expanded": expanded,
            disabled,
            className: cn(
              "inline-flex items-center justify-center gap-1 whitespace-nowrap border border-border bg-background text-foreground font-medium text-sm",
              "h-[var(--show-more-trigger-height)] rounded-[var(--show-more-radius)] px-[var(--show-more-trigger-padding-x)]",
              "transition-[background-color,border-color,color] duration-[var(--show-more-duration)] ease-[var(--show-more-easing)]",
              "hover:border-border hover:bg-muted",
              "focus-visible:outline-none",
              "disabled:pointer-events-none disabled:opacity-50",
              "motion-reduce:transition-none",
              buttonClassName
            ),
            onClick: () => callExpandedChange(actionProps, !expanded),
            children: [
              label,
              /* @__PURE__ */ jsx(
                ChevronDown,
                {
                  "aria-hidden": "true",
                  className: cn(
                    "size-[var(--show-more-icon-size)] transition-transform duration-[var(--show-more-duration)] ease-[var(--show-more-easing)] motion-reduce:transition-none",
                    expanded && "rotate-180"
                  )
                }
              )
            ]
          }
        ) }),
        !noBorder && /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: cn("h-px flex-1 bg-[var(--neutral-7)]", dividerClassName)
          }
        )
      ]
    }
  );
};
ShowMore.displayName = "ShowMore";
function asCssLength(value) {
  if (value === void 0) return void 0;
  return typeof value === "number" ? `${value}px` : value;
}
function shapeRadiusClass(props) {
  if (props.pill) return "rounded-full";
  if (props.squared) return "rounded-[var(--radius-sm)]";
  return "rounded-[var(--radius-md)]";
}
function Skeleton(props) {
  const {
    width,
    height,
    boxHeight,
    pill: _pill,
    rounded: _rounded,
    squared: _squared,
    animated: animatedProp,
    show: showProp,
    children,
    isLoaded,
    disableAnimation,
    className,
    style,
    ...rest
  } = props;
  const show = showProp !== void 0 ? showProp : !isLoaded;
  const animated = animatedProp !== void 0 ? animatedProp : !disableAnimation;
  if (!show && children) {
    return /* @__PURE__ */ jsx(Fragment, { children });
  }
  const sizeStyle = {
    width: asCssLength(width),
    height: asCssLength(height),
    minHeight: asCssLength(boxHeight)
  };
  return /* @__PURE__ */ jsx(
    "div",
    {
      "aria-busy": "true",
      "aria-hidden": "true",
      "data-loaded": !show,
      className: cn(
        "bg-muted",
        shapeRadiusClass(props),
        animated && "animate-pulse motion-reduce:animate-none",
        className
      ),
      style: { ...sizeStyle, ...style },
      ...rest,
      children: children && // biome-ignore lint/a11y/useSemanticElements: this <div> isn't a landmark; `inert` is the relevant a11y signal.
      /* @__PURE__ */ jsx("div", { className: "invisible", inert: true, "aria-hidden": "true", children })
    }
  );
}
function SkeletonText({
  lines = 3,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("space-y-2", className), ...props, children: Array.from({ length: lines }).map((_, i) => /* @__PURE__ */ jsx(
    Skeleton,
    {
      height: 16,
      className: cn(i === lines - 1 ? "w-[60%]" : i === 0 ? "w-full" : "w-[80%]")
    },
    i
  )) });
}
function SkeletonAvatar({
  size = "md",
  className,
  ...props
}) {
  const px = size === "sm" ? 32 : size === "lg" ? 48 : 40;
  return /* @__PURE__ */ jsx(Skeleton, { pill: true, width: px, height: px, className, ...props });
}
function SkeletonCard({ className, ...props }) {
  return /* @__PURE__ */ jsxs("div", { className: cn("space-y-4 p-4", className), ...props, children: [
    /* @__PURE__ */ jsx(Skeleton, { height: 128, className: "w-full" }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
      /* @__PURE__ */ jsx(Skeleton, { height: 16, className: "w-3/4" }),
      /* @__PURE__ */ jsx(Skeleton, { height: 16, className: "w-1/2" })
    ] })
  ] });
}
function isArraySliderProps(props) {
  return props.valueMode === "array" || Array.isArray(props.value) || Array.isArray(props.defaultValue);
}
function normalizeSliderValue(value, fallback) {
  if (Array.isArray(value)) {
    return value[0] ?? fallback;
  }
  return value ?? fallback;
}
function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}
function getProgress(value, min, max) {
  if (max <= min) {
    return 0;
  }
  return clamp((value - min) / (max - min) * 100, 0, 100);
}
function getSliderStyle(progress, style) {
  return {
    "--slider-height": `${sliderTokens.height}px`,
    "--slider-track-height": `${sliderTokens.trackHeight}px`,
    "--slider-thumb-size": `${sliderTokens.thumbSize}px`,
    "--slider-radius": `${sliderTokens.radius}px`,
    "--slider-gap": `${sliderTokens.gap}px`,
    "--slider-label-gap": `${sliderTokens.labelGap}px`,
    "--slider-value-font-size": `${sliderTokens.valueFontSize}px`,
    "--slider-track-background": sliderTokens.track.background,
    "--slider-track-fill": sliderTokens.track.fill,
    "--slider-thumb-background": sliderTokens.thumb.background,
    "--slider-thumb-shadow": sliderTokens.thumb.shadow,
    "--slider-duration": `${sliderTokens.motion.duration}ms`,
    "--slider-easing": sliderTokens.motion.easing,
    "--slider-progress": `${progress}%`,
    ...asPlainStyle(style)
  };
}
function formatSliderValue(value, unit) {
  return unit ? `${value}${unit}` : value;
}
var Slider = ({
  ref,
  ...props
}) => {
  const {
    className,
    wrapperClassName,
    min = 0,
    max = 100,
    step = 1,
    label,
    unit,
    showValue = true,
    formatValue,
    style,
    id,
    value,
    defaultValue,
    disabled,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabelledBy,
    onBlur,
    onPointerUp,
    onKeyUp,
    // Slider's own callbacks + discriminant — pull them out so they are NOT
    // spread onto the native <input> below (React warns "Unknown event handler
    // property onValueChange"). The emit helpers still read props.onValueChange.
    onValueChange: _onValueChange,
    onValueCommit: _onValueCommit,
    valueMode: _valueMode,
    ...inputProps
  } = props;
  const generatedId = React24.useId();
  const sliderId = id ?? generatedId;
  const [internalValue, setInternalValue] = React24.useState(
    () => normalizeSliderValue(defaultValue, min)
  );
  const currentValue = clamp(normalizeSliderValue(value, internalValue), min, max);
  const progress = getProgress(currentValue, min, max);
  const valueContent = formatValue ? formatValue(currentValue) : formatSliderValue(currentValue, unit);
  const hasAccessibleName = Boolean(label || ariaLabel || ariaLabelledBy);
  function emitValueChange(nextValue) {
    if (isArraySliderProps(props)) {
      props.onValueChange?.([nextValue]);
      return;
    }
    props.onValueChange?.(nextValue);
  }
  function emitValueCommit(nextValue) {
    if (isArraySliderProps(props)) {
      props.onValueCommit?.([nextValue]);
      return;
    }
    props.onValueCommit?.(nextValue);
  }
  function handleChange(event) {
    const nextValue = Number(event.currentTarget.value);
    if (value === void 0) {
      setInternalValue(nextValue);
    }
    emitValueChange(nextValue);
  }
  function handlePointerUp(event) {
    onPointerUp?.(event);
    emitValueCommit(Number(event.currentTarget.value));
  }
  function handleKeyUp(event) {
    onKeyUp?.(event);
    if ([
      "ArrowDown",
      "ArrowLeft",
      "ArrowRight",
      "ArrowUp",
      "End",
      "Home",
      "PageDown",
      "PageUp"
    ].includes(event.key)) {
      emitValueCommit(Number(event.currentTarget.value));
    }
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("grid w-full gap-[var(--slider-gap)]", wrapperClassName),
      style: getSliderStyle(progress, style),
      children: [
        (label || showValue) && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-[var(--slider-label-gap)]", children: [
          label ? /* @__PURE__ */ jsx("label", { className: "font-medium text-foreground text-sm", htmlFor: sliderId, children: label }) : /* @__PURE__ */ jsx("span", { "aria-hidden": "true" }),
          showValue ? /* @__PURE__ */ jsx("span", { className: "text-[length:var(--slider-value-font-size)] text-muted-foreground tabular-nums", children: valueContent }) : null
        ] }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref,
            id: sliderId,
            type: "range",
            min,
            max,
            step,
            value: currentValue,
            disabled,
            "aria-label": hasAccessibleName ? ariaLabel : "Slider value",
            "aria-labelledby": ariaLabelledBy,
            onChange: handleChange,
            onPointerUp: handlePointerUp,
            onKeyUp: handleKeyUp,
            onBlur,
            className: cn(
              "h-[var(--slider-height)] w-full cursor-pointer appearance-none rounded-[var(--slider-radius)] bg-[linear-gradient(to_right,var(--slider-track-fill)_0,var(--slider-track-fill)_var(--slider-progress),var(--slider-track-background)_var(--slider-progress),var(--slider-track-background)_100%)] bg-[length:100%_var(--slider-track-height)] bg-center bg-no-repeat outline-none",
              "disabled:cursor-not-allowed disabled:opacity-50",
              "[&::-moz-range-thumb]:size-[var(--slider-thumb-size)] [&::-moz-range-thumb]:appearance-none [&::-moz-range-thumb]:rounded-full [&::-moz-range-thumb]:border [&::-moz-range-thumb]:border-border [&::-moz-range-thumb]:bg-[var(--slider-thumb-background)] [&::-moz-range-thumb]:shadow-[var(--slider-thumb-shadow)]",
              "[&::-webkit-slider-thumb]:size-[var(--slider-thumb-size)] [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:border [&::-webkit-slider-thumb]:border-border [&::-webkit-slider-thumb]:bg-[var(--slider-thumb-background)] [&::-webkit-slider-thumb]:shadow-[var(--slider-thumb-shadow)]",
              "[&::-moz-range-thumb]:transition-transform [&::-moz-range-thumb]:duration-[var(--slider-duration)] [&::-moz-range-thumb]:ease-[var(--slider-easing)]",
              "[&::-webkit-slider-thumb]:transition-transform [&::-webkit-slider-thumb]:duration-[var(--slider-duration)] [&::-webkit-slider-thumb]:ease-[var(--slider-easing)]",
              "active:[&::-moz-range-thumb]:scale-110 active:[&::-webkit-slider-thumb]:scale-110 motion-reduce:[&::-moz-range-thumb]:transition-none motion-reduce:[&::-webkit-slider-thumb]:transition-none",
              className
            ),
            ...inputProps
          }
        )
      ]
    }
  );
};
Slider.displayName = "Slider";
function resolveSize(size) {
  if (typeof size === "number") {
    return `${size}px`;
  }
  return `${spinnerSizes[size ?? spinnerTokens.defaultSize]}px`;
}
function getSpinnerStyle(size, style) {
  return {
    "--spinner-size": resolveSize(size),
    "--spinner-bar-width": spinnerTokens.barWidth,
    "--spinner-bar-height": spinnerTokens.barHeight,
    "--spinner-bar-left": spinnerTokens.barLeft,
    "--spinner-bar-top": spinnerTokens.barTop,
    "--spinner-bar-translate": spinnerTokens.barTranslate,
    "--spinner-bar-radius": `${spinnerTokens.barRadius}px`,
    "--spinner-duration": `${spinnerTokens.motion.duration}ms`,
    "--spinner-easing": spinnerTokens.motion.easing,
    ...asPlainStyle(style)
  };
}
function getBarOpacity(index) {
  const fadeRange = spinnerTokens.opacity.max - spinnerTokens.opacity.min;
  const progress = index / (spinnerTokens.barCount - 1);
  return Number((spinnerTokens.opacity.min + fadeRange * progress).toFixed(2));
}
function getBarTransform(index) {
  return `rotate(${index * (360 / spinnerTokens.barCount)}deg) translate(var(--spinner-bar-translate))`;
}
function Spinner2({
  className,
  style,
  size,
  tone = "default",
  label,
  decorative,
  variant = "default",
  "aria-label": ariaLabel,
  ...props
}) {
  const accessibleLabel = ariaLabel ?? label;
  const isDecorative = decorative ?? !accessibleLabel;
  const accessibilityProps = isDecorative ? { "aria-hidden": true } : {
    "aria-label": accessibleLabel,
    "aria-live": "polite",
    role: "status"
  };
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "spinner",
      "data-variant": variant,
      className: cn(
        "relative inline-block shrink-0 align-[-0.125em]",
        "[block-size:var(--spinner-size)] [inline-size:var(--spinner-size)]",
        spinnerTones[tone],
        className
      ),
      style: getSpinnerStyle(size, style),
      ...accessibilityProps,
      ...props,
      children: /* @__PURE__ */ jsx(
        "span",
        {
          "aria-hidden": "true",
          className: cn(
            "absolute inset-0 origin-center",
            "[animation:spin_var(--spinner-duration)_var(--spinner-easing)_infinite]",
            "motion-reduce:animate-none"
          ),
          children: Array.from({ length: spinnerTokens.barCount }, (_, index) => /* @__PURE__ */ jsx(
            "span",
            {
              "aria-hidden": "true",
              className: cn(
                "absolute bg-current",
                "h-[var(--spinner-bar-height)] w-[var(--spinner-bar-width)]",
                "rounded-[var(--spinner-bar-radius)]"
              ),
              style: {
                left: "calc(50% - var(--spinner-bar-left))",
                opacity: getBarOpacity(index),
                top: "calc(50% - var(--spinner-bar-top))",
                transform: getBarTransform(index)
              }
            },
            index
          ))
        }
      )
    }
  );
}
var SPLIT_SIZE_TO_BUTTON_SIZE = {
  tiny: "tiny",
  sm: "sm",
  small: "sm",
  default: "default",
  medium: "default",
  lg: "lg",
  large: "lg"
};
var SPLIT_SIZE_TO_TOKEN_SIZE = {
  tiny: "tiny",
  sm: "sm",
  small: "sm",
  default: "md",
  medium: "md",
  lg: "lg",
  large: "lg"
};
var menuAlignment = {
  "bottom-start": {
    align: "start",
    side: "bottom"
  },
  "bottom-end": {
    align: "end",
    side: "bottom"
  }
};
function createSplitButtonVars(size) {
  const tokenSize = SPLIT_SIZE_TO_TOKEN_SIZE[size];
  return {
    "--split-button-trigger-width": `${splitButtonTokens.triggerWidth[tokenSize]}px`,
    "--split-button-menu-min-width": `${splitButtonTokens.menu.minWidth}px`,
    "--split-button-item-gap": `${splitButtonTokens.item.gap}px`,
    "--split-button-item-padding-x": `${splitButtonTokens.item.paddingX}px`,
    "--split-button-item-padding-y": `${splitButtonTokens.item.paddingY}px`,
    "--split-button-item-description-gap": `${splitButtonTokens.item.descriptionGap}px`,
    "--split-button-item-radius": `${splitButtonTokens.item.radius}px`,
    "--split-button-item-icon-size": `${splitButtonTokens.item.iconSize}px`,
    "--split-button-duration": `${splitButtonTokens.motion.duration}ms`,
    "--split-button-easing": splitButtonTokens.motion.easing
  };
}
function SplitButtonRoot({
  children,
  className,
  disabled,
  menuAlignment: alignment = "bottom-start",
  menuButtonLabel,
  menuItems,
  menuProps,
  buttonProps,
  style,
  ...props
}) {
  const {
    className: buttonClassName,
    disabled: buttonDisabled,
    htmlType,
    loading,
    prefix,
    size = "medium",
    type = "default",
    ...primaryButtonProps
  } = buttonProps ?? {};
  const { className: menuClassName, style: menuStyle, width, ...contentProps } = menuProps ?? {};
  const buttonSize = SPLIT_SIZE_TO_BUTTON_SIZE[size];
  const isDisabled = disabled || Boolean(buttonDisabled) || Boolean(loading);
  const splitVars = createSplitButtonVars(size);
  const placement = menuAlignment[alignment];
  const menuWidth = width ?? splitButtonTokens.menu.width;
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsxs(
      "div",
      {
        className: cn("inline-flex items-stretch", className),
        style: { ...splitVars, ...style },
        ...props,
        children: [
          /* @__PURE__ */ jsx(
            Button,
            {
              className: cn(
                "rounded-r-none focus-visible:relative focus-visible:z-10",
                buttonClassName
              ),
              disabled: isDisabled,
              loading: Boolean(loading),
              prefix,
              size: buttonSize,
              type: htmlType ?? "button",
              variant: type,
              ...primaryButtonProps,
              children
            }
          ),
          /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
            Button,
            {
              "aria-label": menuButtonLabel,
              className: cn(
                "w-[var(--split-button-trigger-width)] rounded-l-none px-0 focus-visible:relative focus-visible:z-10",
                "transition-[background-color,border-color,color] duration-[var(--split-button-duration)] ease-[var(--split-button-easing)]",
                type === "default" ? "border-l border-primary-foreground/20" : "border-l border-border/80"
              ),
              disabled: isDisabled,
              size: buttonSize,
              type: "button",
              variant: type,
              children: /* @__PURE__ */ jsx(ChevronDown, { "aria-hidden": "true", className: "size-3.5 opacity-80" })
            }
          ) })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      DropdownMenuContent,
      {
        align: placement.align,
        className: cn("min-w-[var(--split-button-menu-min-width)] p-1", menuClassName),
        side: placement.side,
        sideOffset: 6,
        style: { width: menuWidth, ...menuStyle },
        ...contentProps,
        children: menuItems
      }
    )
  ] });
}
function SplitButtonMenuItem({
  title,
  description,
  icon,
  menuItemProps
}) {
  const { className, ...itemProps } = menuItemProps ?? {};
  return /* @__PURE__ */ jsxs(
    DropdownMenuItem,
    {
      className: cn(
        "items-start gap-[var(--split-button-item-gap)] rounded-[var(--split-button-item-radius)] px-[var(--split-button-item-padding-x)] py-[var(--split-button-item-padding-y)]",
        className
      ),
      ...itemProps,
      children: [
        icon != null && /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": "true",
            className: "mt-0.5 flex size-[var(--split-button-item-icon-size)] shrink-0 items-center justify-center text-muted-foreground [&>svg]:size-full",
            children: icon
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "grid min-w-0 gap-[var(--split-button-item-description-gap)]", children: [
          /* @__PURE__ */ jsx("span", { className: "truncate font-medium text-foreground", children: title }),
          description != null && /* @__PURE__ */ jsx("span", { className: "line-clamp-2 text-muted-foreground text-xs leading-5", children: description })
        ] })
      ]
    }
  );
}
var SplitButton = Object.assign(SplitButtonRoot, {
  MenuItem: SplitButtonMenuItem
});
var gapMap = {
  0: "gap-0",
  1: "gap-1",
  2: "gap-2",
  3: "gap-3",
  4: "gap-4",
  5: "gap-5",
  6: "gap-6",
  8: "gap-8",
  10: "gap-10",
  12: "gap-12",
  16: "gap-16",
  20: "gap-20",
  24: "gap-24",
  32: "gap-32"
};
var alignMap = {
  start: "items-start",
  center: "items-center",
  end: "items-end",
  stretch: "items-stretch"
};
var justifyMap = {
  start: "justify-start",
  center: "justify-center",
  end: "justify-end",
  between: "justify-between",
  around: "justify-around"
};
var Stack = ({
  as: Component = "div",
  className,
  gap = 4,
  align = "stretch",
  justify = "start",
  children,
  ref,
  ...props
}) => {
  return React24.createElement(
    Component,
    {
      ...props,
      ref,
      className: cn("flex flex-col", gapMap[gap], alignMap[align], justifyMap[justify], className)
    },
    children
  );
};
Stack.displayName = "Stack";
var STATE_META = {
  QUEUED: {
    dotBg: "bg-muted-foreground",
    title: "is queued.",
    label: "Queued"
  },
  BUILDING: {
    dotBg: "bg-warning",
    title: "is building.",
    label: "Building"
  },
  READY: {
    dotBg: "bg-success",
    title: "is ready.",
    label: "Ready"
  },
  ERROR: {
    dotBg: "bg-destructive",
    title: "had an error.",
    label: "Error"
  },
  CANCELED: {
    dotBg: "bg-muted-foreground/60",
    title: "was canceled.",
    label: "Canceled"
  },
  DELETED: {
    dotBg: "bg-muted-foreground/40",
    title: "was deleted.",
    label: "Deleted"
  }
};
var ANIMATED_STATES = /* @__PURE__ */ new Set(["QUEUED", "BUILDING"]);
var StatusDot = function StatusDot2({
  ref,
  state,
  label,
  titlePrefix = "This deployment",
  decorative = false,
  className
}) {
  const meta = STATE_META[state];
  const title = `${titlePrefix} ${meta.title}`;
  const animated = ANIMATED_STATES.has(state);
  return /* @__PURE__ */ jsxs(
    "span",
    {
      ref,
      title,
      ...decorative ? { "aria-hidden": "true" } : { "aria-label": title },
      className: cn("inline-flex items-center gap-2", className),
      children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "inline-block h-2.5 w-2.5 rounded-full",
              meta.dotBg,
              animated && "animate-pulse motion-reduce:animate-none"
            )
          }
        ),
        label && /* @__PURE__ */ jsx("span", { className: "font-sans text-foreground text-sm leading-4", children: meta.label })
      ]
    }
  );
};
var SwitchContext = React24.createContext(null);
function useSwitchContext() {
  const context = React24.use(SwitchContext);
  if (!context) {
    throw new Error("Switch.Control must be rendered inside Switch.");
  }
  return context;
}
function getSwitchStyle(size, style) {
  const sizeTokens = switchSizes[size];
  return {
    "--switch-height": `${sizeTokens.height}px`,
    "--switch-control-height": `${sizeTokens.controlHeight}px`,
    "--switch-control-min-width": `${sizeTokens.minWidth}px`,
    "--switch-control-padding-x": `${sizeTokens.paddingX}px`,
    "--switch-icon-size": `${sizeTokens.iconSize}px`,
    "--switch-font-size": `${sizeTokens.fontSize}px`,
    "--switch-padding": `${sizeTokens.padding}px`,
    "--switch-gap": `${switchTokens.gap}px`,
    "--switch-radius": `${switchTokens.radius}px`,
    "--switch-control-radius": `${switchTokens.controlRadius}px`,
    "--switch-duration": `${switchTokens.motion.duration}ms`,
    "--switch-easing": switchTokens.motion.easing,
    ...asPlainStyle(style)
  };
}
function getSwitchControlStyle(size, style) {
  const sizeTokens = switchSizes[size];
  return {
    "--switch-control-height": `${sizeTokens.controlHeight}px`,
    "--switch-control-min-width": `${sizeTokens.minWidth}px`,
    "--switch-control-padding-x": `${sizeTokens.paddingX}px`,
    "--switch-icon-size": `${sizeTokens.iconSize}px`,
    "--switch-font-size": `${sizeTokens.fontSize}px`,
    ...asPlainStyle(style)
  };
}
var SwitchRoot = function SwitchRoot2({
  children,
  name,
  size = "medium",
  defaultValue,
  value,
  disabled,
  onValueChange,
  style,
  className,
  ref,
  ...props
}) {
  const generatedName = React24.useId();
  const resolvedName = name ?? generatedName;
  const context = React24.useMemo(
    () => ({
      defaultValue,
      disabled,
      name: resolvedName,
      onValueChange,
      size,
      value
    }),
    [defaultValue, disabled, onValueChange, resolvedName, size, value]
  );
  return /* @__PURE__ */ jsx(SwitchContext.Provider, { value: context, children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      "data-slot": "switch",
      role: "radiogroup",
      className: cn(
        "inline-flex h-[var(--switch-height)] items-center gap-[var(--switch-gap)] rounded-[var(--switch-radius)] border border-border bg-muted p-[var(--switch-padding)] text-muted-foreground",
        disabled && "cursor-not-allowed opacity-60",
        className
      ),
      style: getSwitchStyle(size, style),
      ...props,
      children
    }
  ) });
};
var SwitchControl = function SwitchControl2({
  checked,
  className,
  defaultChecked,
  disabled,
  icon,
  label,
  name,
  onChange,
  size,
  style,
  value,
  ref,
  ...props
}) {
  const context = useSwitchContext();
  const resolvedSize = size ?? context.size;
  const isControlled = checked !== void 0 || context.value !== void 0;
  const isChecked = checked ?? (context.value !== void 0 ? context.value === value : void 0);
  const isDefaultChecked = !isControlled && (defaultChecked ?? (context.defaultValue !== void 0 && context.defaultValue === value));
  const isDisabled = disabled ?? context.disabled;
  const accessibleLabel = label ?? value;
  function handleChange(event) {
    onChange?.(event);
    if (!event.defaultPrevented) {
      context.onValueChange?.(event.currentTarget.value);
    }
  }
  return /* @__PURE__ */ jsxs(
    "label",
    {
      ref,
      "data-slot": "switch-control",
      "data-size": resolvedSize,
      className: cn(
        "relative isolate flex h-[var(--switch-control-height)] min-w-[var(--switch-control-min-width)] flex-1 cursor-pointer items-center",
        isDisabled && "cursor-not-allowed",
        className
      ),
      style: getSwitchControlStyle(resolvedSize, style),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "radio",
            name: name ?? context.name,
            value,
            checked: isControlled ? isChecked : void 0,
            defaultChecked: isControlled ? void 0 : isDefaultChecked,
            disabled: isDisabled,
            "aria-label": accessibleLabel,
            className: "peer sr-only",
            onChange: handleChange
          }
        ),
        /* @__PURE__ */ jsx(
          "span",
          {
            "aria-hidden": icon ? true : void 0,
            className: cn(
              "inline-flex h-full w-full items-center justify-center gap-1.5 whitespace-nowrap rounded-[var(--switch-control-radius)] px-[var(--switch-control-padding-x)] font-medium text-[length:var(--switch-font-size)]",
              "text-muted-foreground transition-[background-color,box-shadow,color] duration-[var(--switch-duration)] ease-[var(--switch-easing)]",
              "peer-checked:bg-background peer-checked:text-foreground peer-checked:shadow-sm",
              "",
              "peer-disabled:pointer-events-none peer-disabled:text-muted-foreground/60",
              "[&_svg]:size-[var(--switch-icon-size)]"
            ),
            children: icon ? /* @__PURE__ */ jsxs(Fragment, { children: [
              icon,
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: accessibleLabel })
            ] }) : accessibleLabel
          }
        )
      ]
    }
  );
};
SwitchRoot.displayName = "Switch";
SwitchControl.displayName = "Switch.Control";
var Switch = Object.assign(SwitchRoot, {
  Control: SwitchControl
});
var ALIGNMENT_CLASS = {
  start: "text-left",
  center: "text-center",
  end: "text-right"
};
function createTableVars(style, bare) {
  return {
    "--table-min-width": `${tableTokens.wrapper.minWidth}px`,
    "--table-padding": `${tableTokens.wrapper.padding}px`,
    "--table-radius": `${tableTokens.wrapper.radius}px`,
    "--table-row-radius": `${tableTokens.row.radius}px`,
    "--table-cell-padding-x": `${tableTokens.cell.paddingX}px`,
    "--table-cell-padding-y": `${tableTokens.cell.paddingY}px`,
    "--table-header-height": `${tableTokens.header.height}px`,
    "--table-font-size": `${tableTokens.typography.size}px`,
    "--table-heading-weight": tableTokens.typography.headingWeight,
    "--table-body-weight": tableTokens.typography.bodyWeight,
    "--table-body-spacer": bare ? "0px" : `${tableTokens.spacer.bodyTop}px`,
    "--table-motion-duration": `${tableTokens.motion.duration}ms`,
    "--table-motion-easing": tableTokens.motion.easing,
    ...style
  };
}
var TableRoot = ({
  className,
  wrapperClassName,
  wrapperStyle,
  style,
  bare = false,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "div",
  {
    className: cn(
      "relative w-full overflow-auto",
      !bare && "min-w-[var(--table-min-width)] rounded-[var(--table-radius)] border border-border bg-card p-[var(--table-padding)]",
      wrapperClassName
    ),
    style: createTableVars(wrapperStyle, bare),
    children: /* @__PURE__ */ jsx(
      "table",
      {
        ref,
        className: cn(
          "w-full border-collapse caption-bottom text-[length:var(--table-font-size)] font-[var(--table-body-weight)] text-foreground",
          className
        ),
        style,
        ...props
      }
    )
  }
);
TableRoot.displayName = "Table";
var TableColgroup = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("colgroup", { ref, className, ...props });
TableColgroup.displayName = "TableColgroup";
var TableCol = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("col", { ref, className, ...props });
TableCol.displayName = "TableCol";
var TableHeader = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("thead", { ref, className: cn("border-b border-border", className), ...props });
TableHeader.displayName = "TableHeader";
var TableBody = ({
  className,
  striped = false,
  bordered = false,
  interactive = false,
  virtualize = false,
  ref,
  ...props
}) => /* @__PURE__ */ jsxs(Fragment, { children: [
  /* @__PURE__ */ jsx("tbody", { "aria-hidden": "true", className: "table-row h-[var(--table-body-spacer)]" }),
  /* @__PURE__ */ jsx(
    "tbody",
    {
      ref,
      "data-virtualized": virtualize ? "" : void 0,
      className: cn(
        "[&_tr:last-child]:border-b-0",
        striped && "[&_tr:where(:nth-child(odd))]:bg-muted/45",
        bordered && "[&_tr]:border-b [&_tr]:border-border",
        interactive && "[&_tr]:cursor-default [&_tr:hover]:bg-muted/70 [&_tr:focus-within]:bg-muted/70",
        className
      ),
      ...props
    }
  )
] });
TableBody.displayName = "TableBody";
var TableFooter = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("tfoot", { ref, className: cn("border-t border-border", className), ...props });
TableFooter.displayName = "TableFooter";
var TableRow = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "tr",
  {
    ref,
    className: cn(
      "[&_td:first-child]:rounded-l-[var(--table-row-radius)] [&_td:last-child]:rounded-r-[var(--table-row-radius)] transition-colors duration-[var(--table-motion-duration)] ease-[var(--table-motion-easing)] motion-reduce:transition-none",
      className
    ),
    ...props
  }
);
TableRow.displayName = "TableRow";
var TableHead = ({
  className,
  numeric = false,
  alignment,
  scope = "col",
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "th",
  {
    ref,
    scope,
    className: cn(
      "h-[var(--table-header-height)] px-[var(--table-cell-padding-x)] text-left align-middle font-[var(--table-heading-weight)] text-muted-foreground",
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-px",
      !alignment && "last:text-right",
      numeric && "text-right font-mono tabular-nums",
      alignment && ALIGNMENT_CLASS[alignment],
      className
    ),
    ...props
  }
);
TableHead.displayName = "TableHead";
var TableCell = ({
  className,
  numeric = false,
  alignment,
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  "td",
  {
    ref,
    className: cn(
      "px-[var(--table-cell-padding-x)] py-[var(--table-cell-padding-y)] align-middle",
      "[&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-px",
      !alignment && "last:text-right",
      numeric && "text-right font-mono tabular-nums",
      alignment && ALIGNMENT_CLASS[alignment],
      className
    ),
    ...props
  }
);
TableCell.displayName = "TableCell";
var TableCaption = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("caption", { ref, className: cn("mt-4 text-sm text-muted-foreground", className), ...props });
TableCaption.displayName = "TableCaption";
var Table = TableRoot;
Table.Body = TableBody;
Table.Caption = TableCaption;
Table.Cell = TableCell;
Table.Col = TableCol;
Table.Colgroup = TableColgroup;
Table.Footer = TableFooter;
Table.Head = TableHead;
Table.Header = TableHeader;
Table.Row = TableRow;
var BaseRoot = withHtmlProps(Tabs$1.Root);
var BaseList = withHtmlProps(Tabs$1.List);
var BaseTrigger = withHtmlProps(Tabs$1.Tab);
var BaseContent = withHtmlProps(Tabs$1.Panel);
var BaseIndicator = withHtmlProps(Tabs$1.Indicator);
var tabsListVariants = cva(
  "relative z-0 inline-flex max-w-full shrink-0 items-center overflow-x-auto overscroll-x-contain scrollbar-none",
  {
    variants: {
      variant: {
        default: "gap-[var(--tabs-gap)] rounded-[var(--tabs-radius)] border border-border bg-muted p-[var(--tabs-padding)] text-muted-foreground",
        button: "gap-[var(--tabs-gap)] text-muted-foreground",
        line: "gap-[calc(var(--tabs-gap)*3)] border-b border-border text-muted-foreground",
        secondary: "gap-[var(--tabs-gap)] rounded-[var(--tabs-radius)] bg-transparent text-muted-foreground"
      },
      shape: {
        default: "",
        pill: "[&_[role=tab]]:rounded-[var(--tabs-pill-radius)]"
      }
    },
    compoundVariants: [
      {
        variant: "default",
        shape: "pill",
        className: "rounded-[var(--tabs-pill-radius)]"
      },
      {
        variant: "button",
        shape: "pill",
        className: "[&_[role=tab]]:rounded-[var(--tabs-pill-radius)]"
      },
      {
        variant: "secondary",
        shape: "pill",
        className: "rounded-[var(--tabs-pill-radius)]"
      }
    ],
    defaultVariants: {
      shape: "default",
      variant: "default"
    }
  }
);
var tabsTriggerVariants = cva(
  "relative inline-flex h-[calc(var(--tabs-height)-var(--tabs-padding)*2)] min-w-[var(--tabs-trigger-min-width)] shrink-0 cursor-pointer items-center justify-center gap-[var(--tabs-trigger-gap)] whitespace-nowrap rounded-[var(--tabs-trigger-radius)] px-[var(--tabs-trigger-padding-x)] font-medium text-[length:var(--tabs-font-size)] outline-none transition-[background-color,border-color,box-shadow,color,opacity] duration-[var(--tabs-duration)] ease-[var(--tabs-easing)] disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 data-[disabled]:pointer-events-none data-[disabled]:cursor-not-allowed data-[disabled]:opacity-50 [&_svg]:size-[var(--tabs-icon-size)] [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "hover:text-foreground data-[active]:text-foreground",
        button: "border border-border bg-background text-muted-foreground shadow-xs hover:border-ring/40 hover:text-foreground data-[active]:border-ring/40 data-[active]:text-foreground",
        line: "min-w-0 rounded-none px-0 hover:text-foreground data-[active]:text-foreground",
        secondary: "hover:bg-muted hover:text-foreground data-[active]:bg-muted data-[active]:text-foreground"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var tabsIndicatorVariants = cva(
  "pointer-events-none absolute transition-[left,top,width,height,bottom,background-color] duration-[var(--tabs-duration)] ease-[var(--tabs-easing)] motion-reduce:transition-none",
  {
    variants: {
      variant: {
        default: "z-[-1] rounded-[var(--tabs-trigger-radius)] bg-background shadow-xs",
        button: "z-[-1] rounded-[var(--tabs-trigger-radius)] bg-muted",
        line: "bottom-0 h-[var(--tabs-line-thickness)] rounded-[var(--tabs-pill-radius)] bg-foreground",
        secondary: "z-[-1] rounded-[var(--tabs-trigger-radius)] bg-muted"
      },
      shape: {
        default: "",
        pill: "rounded-[var(--tabs-pill-radius)]"
      }
    },
    defaultVariants: {
      shape: "default",
      variant: "default"
    }
  }
);
var tabsContentVariants = cva(
  "mt-[var(--tabs-panel-gap)] text-[length:var(--tabs-font-size)] text-muted-foreground focus-visible:outline-none",
  {
    variants: {
      variant: {
        default: ""
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var TabsContext = React24.createContext({
  activationMode: "manual",
  disabled: false,
  shape: "default",
  size: "md",
  variant: "default"
});
function getTabsStyle(size, style) {
  const token = tabsSizes[size];
  return {
    "--tabs-height": `${token.height}px`,
    "--tabs-padding": `${token.padding}px`,
    "--tabs-gap": `${token.gap}px`,
    "--tabs-trigger-gap": `${token.triggerGap}px`,
    "--tabs-trigger-padding-x": `${token.paddingX}px`,
    "--tabs-trigger-min-width": `${token.minWidth}px`,
    "--tabs-icon-size": `${token.iconSize}px`,
    "--tabs-font-size": `${token.fontSize}px`,
    "--tabs-radius": `${tabsTokens.radius}px`,
    "--tabs-trigger-radius": `${tabsTokens.triggerRadius}px`,
    "--tabs-pill-radius": `${tabsTokens.pillRadius}px`,
    "--tabs-line-thickness": `${tabsTokens.lineThickness}px`,
    "--tabs-focus-ring-width": `${tabsTokens.focusRingWidth}px`,
    "--tabs-focus-ring-offset": `${tabsTokens.focusRingOffset}px`,
    "--tabs-panel-gap": `${tabsTokens.panelGap}px`,
    "--tabs-badge-height": `${tabsTokens.badgeHeight}px`,
    "--tabs-badge-padding-x": `${tabsTokens.badgePaddingX}px`,
    "--tabs-badge-font-size": `${tabsTokens.badgeFontSize}px`,
    "--tabs-duration": `${tabsTokens.motion.duration}ms`,
    "--tabs-easing": tabsTokens.motion.easing,
    ...asPlainStyle(style)
  };
}
function getFirstEnabledValue(tabs) {
  return tabs?.find((tab) => !tab.disabled)?.value;
}
function Tabs({
  "aria-label": ariaLabel,
  activationMode = "manual",
  className,
  defaultValue,
  disabled = false,
  listClassName,
  onValueChange,
  orientation = "horizontal",
  selected,
  setSelected,
  shape = "default",
  size = "md",
  style,
  tabs,
  value,
  variant = "default",
  children,
  ...props
}) {
  const rootValue = selected ?? value;
  const rootDefaultValue = defaultValue ?? getFirstEnabledValue(tabs);
  const context = React24.useMemo(
    () => ({ activationMode, disabled, shape, size, variant }),
    [activationMode, disabled, shape, size, variant]
  );
  function handleValueChange(nextValue) {
    onValueChange?.(nextValue);
    setSelected?.(nextValue);
  }
  return /* @__PURE__ */ jsx(TabsContext.Provider, { value: context, children: /* @__PURE__ */ jsx(
    BaseRoot,
    {
      "data-slot": "tabs",
      "data-disabled": disabled ? "" : void 0,
      value: rootValue,
      defaultValue: rootValue === void 0 ? rootDefaultValue : void 0,
      onValueChange: handleValueChange,
      orientation,
      className: cn("w-full", className),
      style: getTabsStyle(size, style),
      ...props,
      children: tabs ? /* @__PURE__ */ jsx(
        TabsCollection,
        {
          tabs,
          ariaLabel,
          className: listClassName,
          variant,
          shape,
          disabled
        }
      ) : children
    }
  ) });
}
function TabsCollection({
  ariaLabel,
  tabs,
  className,
  variant,
  shape,
  disabled
}) {
  const hasTooltip = tabs.some((tab) => tab.tooltip);
  const list = /* @__PURE__ */ jsx(
    TabsList,
    {
      "aria-label": ariaLabel ?? "Sections",
      className,
      variant,
      shape,
      children: tabs.map((tab) => /* @__PURE__ */ jsx(TabsCollectionTrigger, { disabled, tab }, tab.value))
    }
  );
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    hasTooltip ? /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 150, children: list }) : list,
    tabs.map(
      (tab) => tab.content === void 0 ? null : /* @__PURE__ */ jsx(TabsContent, { value: tab.value, children: tab.content }, tab.value)
    )
  ] });
}
function TabsCollectionTrigger({ tab, disabled }) {
  const trigger = /* @__PURE__ */ jsx(
    TabsTrigger,
    {
      value: tab.value,
      disabled: disabled || tab.disabled,
      icon: tab.icon,
      badge: tab.badge,
      children: tab.title
    }
  );
  if (!tab.tooltip) return trigger;
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx("span", { className: "inline-flex", children: trigger }) }),
    /* @__PURE__ */ jsx(TooltipContent, { children: tab.tooltip })
  ] });
}
function TabsList({
  activateOnFocus,
  className,
  loop = true,
  shape,
  variant,
  children,
  ...props
}) {
  const context = React24.use(TabsContext);
  const resolvedVariant = variant ?? context.variant;
  const resolvedShape = shape ?? context.shape;
  const resolvedActivateOnFocus = activateOnFocus ?? context.activationMode === "automatic";
  const listContext = React24.useMemo(
    () => ({ ...context, shape: resolvedShape, variant: resolvedVariant }),
    [context, resolvedShape, resolvedVariant]
  );
  return /* @__PURE__ */ jsx(TabsContext.Provider, { value: listContext, children: /* @__PURE__ */ jsxs(
    BaseList,
    {
      "data-slot": "tabs-list",
      activateOnFocus: resolvedActivateOnFocus,
      loopFocus: loop,
      className: cn(
        tabsListVariants({ variant: resolvedVariant, shape: resolvedShape }),
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          BaseIndicator,
          {
            "aria-hidden": "true",
            "data-slot": "tabs-indicator",
            className: tabsIndicatorVariants({ variant: resolvedVariant, shape: resolvedShape }),
            style: {
              left: "var(--active-tab-left)",
              top: resolvedVariant === "line" ? "auto" : "var(--active-tab-top)",
              bottom: resolvedVariant === "line" ? "0" : "auto",
              width: "var(--active-tab-width)",
              height: resolvedVariant === "line" ? "var(--tabs-line-thickness)" : "var(--active-tab-height)"
            }
          }
        ),
        children
      ]
    }
  ) });
}
function TabsTrigger({ badge, children, className, disabled, icon, ...props }) {
  const context = React24.use(TabsContext);
  const isDisabled = disabled ?? context.disabled;
  return /* @__PURE__ */ jsxs(
    BaseTrigger,
    {
      "data-slot": "tabs-trigger",
      disabled: isDisabled,
      className: cn(tabsTriggerVariants({ variant: context.variant }), className),
      ...props,
      children: [
        icon,
        /* @__PURE__ */ jsx("span", { className: "truncate", children }),
        badge ? /* @__PURE__ */ jsx("span", { className: "inline-flex h-[var(--tabs-badge-height)] items-center rounded-[var(--tabs-pill-radius)] bg-muted px-[var(--tabs-badge-padding-x)] text-[length:var(--tabs-badge-font-size)] text-muted-foreground", children: badge }) : null
      ]
    }
  );
}
function TabsContent({ className, forceMount, keepMounted, variant, ...props }) {
  return /* @__PURE__ */ jsx(
    BaseContent,
    {
      "data-slot": "tabs-content",
      keepMounted: keepMounted ?? forceMount,
      className: cn(tabsContentVariants({ variant }), className),
      ...props
    }
  );
}
var fieldMessageClassName = "text-xs text-muted-foreground";
var fieldErrorClassName = "text-xs font-medium text-destructive";
function getTextareaStyle(size, style) {
  const token = textareaTokens.sizes[size];
  return {
    "--textarea-min-height": `${token.minHeight}px`,
    "--textarea-padding-x": `${token.paddingX}px`,
    "--textarea-padding-y": `${token.paddingY}px`,
    "--textarea-font-size": `${token.fontSize}px`,
    "--textarea-radius": `${token.radius}px`,
    "--textarea-focus-ring-width": `${textareaTokens.focusRingWidth}px`,
    borderRadius: "var(--textarea-radius)",
    outline: "none",
    ...asPlainStyle(style)
  };
}
function getTextareaFieldStyle() {
  return {
    "--textarea-field-gap": `${textareaTokens.fieldGap}px`,
    "--textarea-label-size": `${textareaTokens.labelSize}px`
  };
}
function joinDescriptionIds2(...ids) {
  return ids.filter(Boolean).join(" ") || void 0;
}
function isInvalid2(error, ariaInvalid) {
  return error === true || typeof error === "string" || ariaInvalid === true || ariaInvalid === "true";
}
var Textarea = ({
  className,
  style,
  size = "md",
  label,
  description,
  error,
  fieldClassName,
  id,
  onChange,
  onValueChange,
  "aria-describedby": ariaDescribedBy,
  "aria-invalid": ariaInvalid,
  ref,
  ...props
}) => {
  const baseId = React24.useId();
  const textareaId = id ?? (label || description || typeof error === "string" ? baseId : void 0);
  const resolvedInvalid = isInvalid2(error, ariaInvalid);
  const descriptionId = description && textareaId ? `${textareaId}-description` : void 0;
  const errorId = typeof error === "string" && textareaId ? `${textareaId}-error` : void 0;
  const describedBy = joinDescriptionIds2(ariaDescribedBy, descriptionId, errorId);
  const handleChange = React24.useCallback(
    (event) => {
      onValueChange?.(event.currentTarget.value);
      onChange?.(event);
    },
    [onChange, onValueChange]
  );
  const control = /* @__PURE__ */ jsx(
    "textarea",
    {
      className: cn(
        "flex min-h-[var(--textarea-min-height)] w-full resize-y rounded-[var(--textarea-radius)] border border-input bg-background",
        "px-[var(--textarea-padding-x)] py-[var(--textarea-padding-y)] text-[length:var(--textarea-font-size)] text-foreground shadow-xs",
        "transition-[background-color,border-color,box-shadow,color] duration-micro ease-out placeholder:text-muted-foreground",
        formControlFocusClassNames.textarea,
        "disabled:cursor-not-allowed disabled:opacity-50 read-only:cursor-default read-only:bg-muted/70",
        formControlInvalidClassNames.textarea,
        className
      ),
      ref,
      id: textareaId,
      "aria-invalid": resolvedInvalid || void 0,
      "aria-describedby": describedBy,
      style: getTextareaStyle(size, style),
      onChange: handleChange,
      ...props
    }
  );
  if (!label && !description && typeof error !== "string" && !fieldClassName) {
    return control;
  }
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-slot": "textarea-field",
      className: cn("grid gap-[var(--textarea-field-gap)]", fieldClassName),
      style: getTextareaFieldStyle(),
      children: [
        label && /* @__PURE__ */ jsx(
          "label",
          {
            htmlFor: textareaId,
            className: "text-[length:var(--textarea-label-size)] font-medium text-foreground",
            children: label
          }
        ),
        control,
        description && !error && /* @__PURE__ */ jsx("p", { id: descriptionId, className: fieldMessageClassName, children: description }),
        typeof error === "string" && /* @__PURE__ */ jsx("p", { id: errorId, role: "alert", className: fieldErrorClassName, children: error })
      ]
    }
  );
};
Textarea.displayName = "Textarea";
var THEME_OPTIONS = [
  { value: "system", label: "system", icon: DeviceDesktop },
  { value: "light", label: "light", icon: Sun },
  { value: "dark", label: "dark", icon: Moon }
];
function getThemeSwitcherStyle(size, style) {
  const token = themeSwitcherSizes[size];
  return {
    "--theme-switcher-height": `${token.controlHeight}px`,
    "--theme-switcher-padding": `${token.padding}px`,
    "--theme-switcher-gap": `${token.gap}px`,
    "--theme-switcher-option-min-width": `${token.optionMinWidth}px`,
    "--theme-switcher-option-padding-x": `${token.optionPaddingX}px`,
    "--theme-switcher-icon-size": `${token.iconSize}px`,
    "--theme-switcher-font-size": `${token.fontSize}px`,
    "--theme-switcher-radius": `${themeSwitcherTokens.radius}px`,
    "--theme-switcher-option-radius": `${themeSwitcherTokens.optionRadius}px`,
    "--theme-switcher-label-gap": `${themeSwitcherTokens.labelGap}px`,
    "--theme-switcher-focus-ring-width": `${themeSwitcherTokens.focusRingWidth}px`,
    "--theme-switcher-focus-ring-offset": `${themeSwitcherTokens.focusRingOffset}px`,
    "--theme-switcher-duration": `${themeSwitcherTokens.motion.duration}ms`,
    "--theme-switcher-easing": themeSwitcherTokens.motion.easing,
    ...asPlainStyle(style)
  };
}
function isThemeSwitcherValue(value) {
  return value === "system" || value === "light" || value === "dark";
}
var ThemeSwitcher = ({
  value,
  defaultValue = "system",
  onChange,
  disabled = false,
  size = "medium",
  name,
  className,
  style,
  ref,
  ...props
}) => {
  const generatedName = React24.useId();
  const radioName = name ?? generatedName;
  const { isProviderBound, theme, forcedTheme, setTheme } = useTheme();
  const [fallbackValue, setFallbackValue] = React24.useState(defaultValue);
  const providerTheme = isThemeSwitcherValue(theme) ? theme : "system";
  const selectedTheme = forcedTheme ?? value ?? (isProviderBound ? providerTheme : fallbackValue);
  const isReadOnly = disabled || forcedTheme !== void 0;
  function handleChange(nextTheme) {
    if (isReadOnly) return;
    setFallbackValue(nextTheme);
    setTheme(nextTheme);
    onChange?.(nextTheme);
  }
  return /* @__PURE__ */ jsxs(
    "fieldset",
    {
      ref,
      "aria-disabled": isReadOnly,
      className: cn("inline-grid gap-[var(--theme-switcher-label-gap)]", className),
      disabled: isReadOnly,
      style: getThemeSwitcherStyle(size, style),
      ...props,
      children: [
        /* @__PURE__ */ jsx("legend", { className: "text-[length:var(--theme-switcher-font-size)] font-medium text-foreground", children: "Select a display theme:" }),
        /* @__PURE__ */ jsx("div", { className: "inline-flex h-[var(--theme-switcher-height)] items-center gap-[var(--theme-switcher-gap)] rounded-[var(--theme-switcher-radius)] border border-border bg-muted p-[var(--theme-switcher-padding)] text-muted-foreground", children: THEME_OPTIONS.map(({ value: optionValue, label, icon: Icon }) => {
          const checked = selectedTheme === optionValue;
          return /* @__PURE__ */ jsxs(
            "label",
            {
              className: cn(
                "relative inline-flex h-full min-w-[var(--theme-switcher-option-min-width)] cursor-pointer items-center justify-center gap-[var(--theme-switcher-gap)] rounded-[var(--theme-switcher-option-radius)] px-[var(--theme-switcher-option-padding-x)] text-[length:var(--theme-switcher-font-size)] font-medium transition-[background-color,box-shadow,color,opacity] duration-[var(--theme-switcher-duration)] ease-[var(--theme-switcher-easing)]",
                "hover:text-foreground has-[:focus-visible]:ring-[length:var(--theme-switcher-focus-ring-width)] has-[:focus-visible]:ring-ring has-[:focus-visible]:ring-offset-[length:var(--theme-switcher-focus-ring-offset)] has-[:focus-visible]:ring-offset-background",
                checked && "bg-background text-foreground shadow-xs",
                isReadOnly && "cursor-not-allowed opacity-60"
              ),
              children: [
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    "aria-label": label,
                    checked,
                    className: "sr-only",
                    disabled: isReadOnly,
                    name: radioName,
                    onChange: () => handleChange(optionValue),
                    type: "radio",
                    value: optionValue
                  }
                ),
                /* @__PURE__ */ jsx(Icon, { "aria-hidden": true, className: "size-[var(--theme-switcher-icon-size)] shrink-0" }),
                /* @__PURE__ */ jsx("span", { children: label })
              ]
            },
            optionValue
          );
        }) })
      ]
    }
  );
};
ThemeSwitcher.displayName = "ThemeSwitcher";

// src/hooks/use-reduced-motion.ts
function useReducedMotion2() {
  return useReducedMotion() ?? false;
}
var DEFAULT_LABELS = {
  light: "Switch to light theme",
  dark: "Switch to dark theme"
};
var themeToggleAudioContext = null;
var themeToggleAudioBuffer = null;
function getThemeToggleStyle(size, style) {
  const token = themeToggleTokens.sizes[size];
  return {
    "--theme-toggle-size": `${token.control}px`,
    "--theme-toggle-icon-size": `${token.icon}px`,
    "--theme-toggle-padding": `${token.padding}px`,
    "--theme-toggle-radius": `${token.radius}px`,
    "--theme-toggle-duration": `${themeToggleTokens.motion.duration}ms`,
    "--theme-toggle-easing": themeToggleTokens.motion.easing,
    ...asPlainStyle(style)
  };
}
function readDocumentTheme() {
  if (typeof document === "undefined") return "light";
  return document.documentElement.classList.contains("dark") ? "dark" : "light";
}
function applyDocumentTheme(theme) {
  if (typeof document === "undefined") return;
  document.documentElement.classList.toggle("dark", theme === "dark");
}
function getAudioContext() {
  if (typeof window === "undefined") return null;
  const AudioContextConstructor = window.AudioContext ?? window.webkitAudioContext;
  if (!AudioContextConstructor) return null;
  themeToggleAudioContext ??= new AudioContextConstructor();
  if (themeToggleAudioContext.state === "suspended") {
    void themeToggleAudioContext.resume();
  }
  return themeToggleAudioContext;
}
function getAudioBuffer(audioContext) {
  if (themeToggleAudioBuffer?.sampleRate === audioContext.sampleRate) {
    return themeToggleAudioBuffer;
  }
  const sampleRate = audioContext.sampleRate;
  const length = Math.floor(sampleRate * 6e-3);
  const buffer = audioContext.createBuffer(1, length, sampleRate);
  const channel = buffer.getChannelData(0);
  for (let index = 0; index < length; index += 1) {
    const progress = index / length;
    const sine = Math.sin(2 * Math.PI * 3400 * progress);
    const noise = Math.random() * 2 - 1;
    channel[index] = (sine * 0.6 + noise * 0.4) * (1 - progress) ** 3;
  }
  themeToggleAudioBuffer = buffer;
  return buffer;
}
function playToggleSound(lastPlayedAt) {
  const now = performance.now();
  if (now - lastPlayedAt.current < 80) return;
  lastPlayedAt.current = now;
  try {
    const audioContext = getAudioContext();
    if (!audioContext) return;
    const source = audioContext.createBufferSource();
    const gain = audioContext.createGain();
    source.buffer = getAudioBuffer(audioContext);
    gain.gain.value = 0.08;
    source.connect(gain);
    gain.connect(audioContext.destination);
    source.start();
  } catch {
  }
}
var ThemeToggle = ({
  value,
  defaultValue,
  onChange,
  size = "md",
  sound = false,
  applyToDocument = false,
  labels,
  className,
  style,
  disabled,
  type = "button",
  onClick,
  ref,
  ...props
}) => {
  const rawId = React24.useId();
  const maskId = `theme-toggle-mask-${rawId.replace(/:/g, "")}`;
  const shouldReduceMotion = useReducedMotion2();
  const lastSoundAt = React24.useRef(0);
  const [mounted, setMounted] = React24.useState(false);
  const [internalValue, setInternalValue] = React24.useState(
    defaultValue ?? "light"
  );
  React24.useEffect(() => {
    if (value === void 0 && defaultValue === void 0) {
      setInternalValue(readDocumentTheme());
    }
    setMounted(true);
  }, [defaultValue, value]);
  const currentValue = value ?? internalValue;
  const isDark = currentValue === "dark";
  const actionLabel = isDark ? labels?.light ?? DEFAULT_LABELS.light : labels?.dark ?? DEFAULT_LABELS.dark;
  const transition = shouldReduceMotion || !mounted ? themeToggleTokens.motion.instant : themeToggleTokens.motion.morph;
  const pressTransition = shouldReduceMotion ? themeToggleTokens.motion.instant : themeToggleTokens.motion.press;
  const interactionMotionProps = !disabled && !shouldReduceMotion ? {
    whileHover: { scale: themeToggleTokens.motion.hoverScale },
    whileTap: { scale: themeToggleTokens.motion.tapScale }
  } : {};
  React24.useEffect(() => {
    if (applyToDocument && mounted) {
      applyDocumentTheme(currentValue);
    }
  }, [applyToDocument, currentValue, mounted]);
  const handleClick = (event) => {
    onClick?.(event);
    if (event.defaultPrevented || disabled) return;
    const nextValue = isDark ? "light" : "dark";
    if (value === void 0) {
      setInternalValue(nextValue);
    }
    if (applyToDocument) {
      applyDocumentTheme(nextValue);
    }
    onChange?.(nextValue);
    if (sound) {
      playToggleSound(lastSoundAt);
    }
  };
  return /* @__PURE__ */ jsx(
    motion.button,
    {
      ...props,
      ...interactionMotionProps,
      "aria-label": actionLabel,
      "aria-pressed": isDark,
      className: cn(
        "inline-flex size-[var(--theme-toggle-size)] shrink-0 items-center justify-center rounded-[var(--theme-toggle-radius)] p-[var(--theme-toggle-padding)] text-foreground",
        "transition-[background-color,color,box-shadow] duration-[var(--theme-toggle-duration)] ease-[var(--theme-toggle-easing)]",
        "hover:bg-accent hover:text-accent-foreground",
        "disabled:pointer-events-none disabled:opacity-50",
        "motion-reduce:transition-none",
        className
      ),
      disabled,
      onClick: handleClick,
      ref,
      style: getThemeToggleStyle(size, style),
      transition: pressTransition,
      type,
      children: /* @__PURE__ */ jsxs(
        motion.svg,
        {
          animate: { rotate: isDark ? 270 : 0 },
          "aria-hidden": "true",
          className: "size-[var(--theme-toggle-icon-size)] overflow-visible",
          fill: "none",
          initial: false,
          stroke: "currentColor",
          strokeLinecap: "round",
          strokeWidth: themeToggleTokens.icon.strokeWidth,
          transition,
          viewBox: "0 0 24 24",
          children: [
            /* @__PURE__ */ jsxs("mask", { id: maskId, children: [
              /* @__PURE__ */ jsx("rect", { fill: "white", height: "100%", width: "100%", x: "0", y: "0" }),
              /* @__PURE__ */ jsx(
                motion.circle,
                {
                  animate: { cx: isDark ? 17 : 33, cy: isDark ? 8 : 0 },
                  fill: "black",
                  initial: false,
                  r: themeToggleTokens.icon.maskRadius,
                  transition
                }
              )
            ] }),
            /* @__PURE__ */ jsx(
              motion.circle,
              {
                animate: {
                  r: isDark ? themeToggleTokens.icon.moonRadius : themeToggleTokens.icon.sunRadius
                },
                cx: themeToggleTokens.icon.center,
                cy: themeToggleTokens.icon.center,
                fill: "currentColor",
                initial: false,
                mask: `url(#${maskId})`,
                stroke: "none",
                transition
              }
            ),
            /* @__PURE__ */ jsxs(
              motion.g,
              {
                animate: {
                  opacity: isDark ? 0 : 1,
                  rotate: isDark ? -30 : 0,
                  scale: isDark ? 0 : 1
                },
                initial: false,
                style: { transformOrigin: "12px 12px" },
                transition,
                children: [
                  /* @__PURE__ */ jsx("line", { x1: "12", x2: "12", y1: "1", y2: "3" }),
                  /* @__PURE__ */ jsx("line", { x1: "12", x2: "12", y1: "21", y2: "23" }),
                  /* @__PURE__ */ jsx("line", { x1: "1", x2: "3", y1: "12", y2: "12" }),
                  /* @__PURE__ */ jsx("line", { x1: "21", x2: "23", y1: "12", y2: "12" }),
                  /* @__PURE__ */ jsx("line", { x1: "5.64", x2: "4.22", y1: "5.64", y2: "4.22" }),
                  /* @__PURE__ */ jsx("line", { x1: "18.36", x2: "19.78", y1: "5.64", y2: "4.22" }),
                  /* @__PURE__ */ jsx("line", { x1: "5.64", x2: "4.22", y1: "18.36", y2: "19.78" }),
                  /* @__PURE__ */ jsx("line", { x1: "18.36", x2: "19.78", y1: "18.36", y2: "19.78" })
                ]
              }
            )
          ]
        }
      )
    }
  );
};
ThemeToggle.displayName = "ThemeToggle";
var AnimatedThemeToggler = ThemeToggle;
var DEFAULT_RICH_COLORS = true;
var toastSequence = 0;
var defaultClassNames = {
  toast: "group w-[var(--toast-width)] rounded-[var(--toast-radius)] border border-border bg-card text-card-foreground shadow-[var(--toast-shadow)]",
  title: "text-[length:var(--toast-title-size)] font-[var(--toast-title-weight)] leading-[var(--toast-line-height)]",
  description: "text-[length:var(--toast-description-size)] leading-[var(--toast-line-height)] text-muted-foreground",
  actionButton: "rounded-[var(--toast-action-radius)] bg-primary px-[var(--toast-action-padding-x)] py-[var(--toast-action-padding-y)] text-xs font-medium text-primary-foreground",
  cancelButton: "rounded-[var(--toast-action-radius)] bg-muted px-[var(--toast-action-padding-x)] py-[var(--toast-action-padding-y)] text-xs font-medium text-foreground",
  closeButton: "border-border bg-card text-muted-foreground transition-colors duration-[var(--toast-motion-duration)] ease-[var(--toast-motion-easing)] hover:bg-muted hover:text-foreground",
  success: "border-success bg-success text-success-foreground",
  error: "border-destructive bg-destructive text-destructive-foreground",
  warning: "border-warning bg-warning text-warning-foreground",
  info: "border-info bg-info text-info-foreground",
  default: "border-border bg-card text-card-foreground"
};
function createToastVars(style) {
  return {
    "--toast-width": `${toastTokens.width}px`,
    "--toast-radius": `${toastTokens.radius}px`,
    "--toast-shadow": toastTokens.shadow,
    "--toast-action-radius": `${toastTokens.action.radius}px`,
    "--toast-action-padding-x": `${toastTokens.action.paddingX}px`,
    "--toast-action-padding-y": `${toastTokens.action.paddingY}px`,
    "--toast-title-size": `${toastTokens.typography.titleSize}px`,
    "--toast-description-size": `${toastTokens.typography.descriptionSize}px`,
    "--toast-line-height": `${toastTokens.typography.lineHeight}px`,
    "--toast-title-weight": toastTokens.typography.titleWeight,
    "--toast-motion-duration": `${toastTokens.motion.duration}ms`,
    "--toast-motion-easing": toastTokens.motion.easing,
    ...style
  };
}
function resolveDuration({
  preserve,
  duration,
  undo
}) {
  if (preserve) {
    return Number.POSITIVE_INFINITY;
  }
  return duration ?? (undo ? toastTokens.duration.undo : toastTokens.duration.default);
}
function toExternalToast({ preserve, description, duration, id }) {
  const toastOptions = {
    duration: resolveDuration({ preserve, duration })
  };
  if (id !== void 0) {
    toastOptions.id = id;
  }
  if (description !== void 0) {
    toastOptions.description = description;
  }
  return toastOptions;
}
function mergeToastOptions(toastOptions) {
  return {
    duration: toastTokens.duration.default,
    ...toastOptions,
    classNames: {
      ...defaultClassNames,
      ...toastOptions?.classNames
    }
  };
}
function createToastId() {
  toastSequence += 1;
  return `nebutra-toast-${toastSequence}`;
}
function Toaster({
  position = "bottom-right",
  richColors = DEFAULT_RICH_COLORS,
  closeButton = true,
  theme = "system",
  visibleToasts = toastTokens.stack.visibleToasts,
  gap = toastTokens.stack.gap,
  offset = toastTokens.stack.offset,
  mobileOffset = toastTokens.stack.mobileOffset,
  containerAriaLabel = "Notifications",
  toastOptions,
  style,
  ...props
} = {}) {
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      position,
      richColors,
      closeButton,
      theme,
      visibleToasts,
      gap,
      offset,
      mobileOffset,
      containerAriaLabel,
      toastOptions: mergeToastOptions(toastOptions),
      style: createToastVars(style),
      ...props
    }
  );
}
function useToasts() {
  const message = React24.useCallback(
    ({
      text,
      preserve,
      action,
      onAction,
      onUndoAction,
      description,
      duration,
      id
    }) => {
      const controlledId = onUndoAction || action ? id ?? createToastId() : id;
      const toastOptions = {
        duration: resolveDuration({
          preserve,
          duration,
          undo: Boolean(onUndoAction)
        })
      };
      if (controlledId !== void 0) {
        toastOptions.id = controlledId;
      }
      if (description !== void 0) {
        toastOptions.description = description;
      }
      if (onUndoAction) {
        toastOptions.action = {
          label: "Undo",
          onClick: () => {
            onUndoAction();
            toast.dismiss(controlledId);
          }
        };
      } else if (action) {
        toastOptions.action = {
          label: action,
          onClick: () => {
            onAction?.();
            toast.dismiss(controlledId);
          }
        };
      }
      return toast.message(text, toastOptions);
    },
    []
  );
  const success = React24.useCallback((text, options = {}) => {
    return toast.success(text, toExternalToast(options));
  }, []);
  const warning = React24.useCallback((text, options = {}) => {
    return toast.warning(text, toExternalToast(options));
  }, []);
  const error = React24.useCallback((text, options = {}) => {
    return toast.error(text, toExternalToast(options));
  }, []);
  const dismiss = React24.useCallback((id) => toast.dismiss(id), []);
  return {
    dismiss,
    error,
    message,
    success,
    warning
  };
}
function getColorToken(color) {
  const resolvedColor = color in toggleColorAliases ? toggleColorAliases[color] : color;
  return toggleTokens.color[resolvedColor];
}
function getToggleStyle(size, color, style) {
  const sizeTokens = toggleTokens.size[size];
  const colorTokens = getColorToken(color);
  return {
    "--toggle-track-width": `${sizeTokens.trackWidth}px`,
    "--toggle-track-height": `${sizeTokens.trackHeight}px`,
    "--toggle-thumb-size": `${sizeTokens.thumbSize}px`,
    "--toggle-thumb-translate": `${sizeTokens.thumbTranslate}px`,
    "--toggle-icon-size": `${sizeTokens.iconSize}px`,
    "--toggle-label-font-size": `${sizeTokens.labelFontSize}px`,
    "--toggle-padding-y": `${sizeTokens.paddingY}px`,
    "--toggle-gap": `${sizeTokens.gap}px`,
    "--toggle-radius": `${toggleTokens.radius}px`,
    "--toggle-thumb-shadow": toggleTokens.thumbShadow,
    "--toggle-duration": `${toggleTokens.motion.duration}ms`,
    "--toggle-easing": toggleTokens.motion.easing,
    "--toggle-track-on": colorTokens.trackOn,
    "--toggle-track-off": colorTokens.trackOff,
    "--toggle-track-border": colorTokens.trackBorder,
    "--toggle-thumb": colorTokens.thumb,
    "--toggle-icon-on": colorTokens.iconOn,
    "--toggle-icon-off": colorTokens.iconOff,
    ...asPlainStyle(style)
  };
}
var Toggle = ({
  "aria-label": ariaLabel,
  "aria-labelledby": ariaLabelledBy,
  checked: checkedProp,
  children,
  className,
  color = "default",
  defaultChecked = false,
  direction = "label-first",
  disabled,
  icon,
  id,
  labelCasing = "title",
  onChange,
  onCheckedChange,
  size = "small",
  style,
  ref,
  ...inputProps
}) => {
  const isControlled = checkedProp !== void 0;
  const [internalChecked, setInternalChecked] = React24.useState(defaultChecked);
  const generatedId = React24.useId();
  const inputId = id ?? generatedId;
  const checked = isControlled ? checkedProp : internalChecked;
  const hasVisibleLabel = children != null;
  const visualDirection = direction === "switch-last" ? "label-first" : direction;
  React24.useEffect(() => {
    if (process.env.NODE_ENV !== "production" && !hasVisibleLabel && ariaLabel === void 0 && ariaLabelledBy === void 0) {
      globalThis.console.warn(
        "Toggle requires an accessible name. Pass children, aria-label, or aria-labelledby."
      );
    }
  }, [ariaLabel, ariaLabelledBy, hasVisibleLabel]);
  function handleChange(event) {
    const nextChecked = event.currentTarget.checked;
    if (!isControlled) {
      setInternalChecked(nextChecked);
    }
    onCheckedChange?.(nextChecked, event);
    onChange?.(nextChecked, event);
  }
  const accessibilityProps = {
    ...hasVisibleLabel || ariaLabel === void 0 ? {} : { "aria-label": ariaLabel },
    ...ariaLabelledBy === void 0 ? {} : { "aria-labelledby": ariaLabelledBy }
  };
  const checkedProps = isControlled ? { checked } : { defaultChecked };
  const control = /* @__PURE__ */ jsxs("label", { className: "relative inline-flex shrink-0", htmlFor: inputId, children: [
    /* @__PURE__ */ jsx(
      "input",
      {
        ref,
        className: "peer sr-only",
        disabled,
        id: inputId,
        onChange: handleChange,
        type: "checkbox",
        ...accessibilityProps,
        ...checkedProps,
        ...inputProps
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        "aria-hidden": "true",
        className: cn(
          "relative inline-flex h-[var(--toggle-track-height)] w-[var(--toggle-track-width)] items-center rounded-[var(--toggle-radius)] border bg-[var(--toggle-track-off)] p-px",
          "border-[var(--toggle-track-border)] transition-[background-color,border-color] duration-[var(--toggle-duration)] ease-[var(--toggle-easing)]",
          "peer-checked:bg-[var(--toggle-track-on)]",
          "peer-checked:[&>span]:translate-x-[var(--toggle-thumb-translate)] peer-checked:[&>span]:text-[var(--toggle-icon-on)]",
          "",
          "peer-disabled:cursor-not-allowed peer-disabled:opacity-60",
          "motion-reduce:transition-none"
        ),
        children: /* @__PURE__ */ jsx(
          "span",
          {
            className: cn(
              "flex size-[var(--toggle-thumb-size)] translate-x-0 items-center justify-center rounded-[var(--toggle-radius)] bg-[var(--toggle-thumb)] shadow-[var(--toggle-thumb-shadow)]",
              "text-[var(--toggle-icon-off)] transition-[color,transform] duration-[var(--toggle-duration)] ease-[var(--toggle-easing)]",
              "motion-reduce:transition-none [&_svg]:size-[var(--toggle-icon-size)]"
            ),
            children: icon != null && /* @__PURE__ */ jsx("span", { className: "inline-flex", children: checked ? icon.checked : icon.unchecked })
          }
        )
      }
    )
  ] });
  const label = hasVisibleLabel ? /* @__PURE__ */ jsx(
    "label",
    {
      "data-label-casing": labelCasing,
      htmlFor: inputId,
      className: cn(
        "select-none font-medium text-[length:var(--toggle-label-font-size)] text-muted-foreground leading-none"
      ),
      children
    }
  ) : null;
  return /* @__PURE__ */ jsxs(
    "span",
    {
      className: cn(
        "inline-flex items-center gap-[var(--toggle-gap)] py-[var(--toggle-padding-y)]",
        disabled ? "cursor-not-allowed opacity-60" : "cursor-pointer",
        className
      ),
      style: getToggleStyle(size, color, style),
      children: [
        visualDirection === "label-first" && label,
        control,
        visualDirection === "switch-first" && label
      ]
    }
  );
};
Toggle.displayName = "Toggle";
var toggleGroupVariants = cva(
  "inline-flex items-center justify-center gap-1 rounded-[var(--radius-lg)] bg-muted p-1 text-muted-foreground",
  {
    variants: {
      variant: {
        default: "",
        outline: "bg-transparent border",
        // Segmented pill look — theme-toggle / mode-pills style. Rounded-full
        // track with a rounded-full active segment (see toggleGroupItemVariants).
        pill: "rounded-full bg-neutral-2 p-0.5"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
var toggleGroupItemVariants = cva(
  "inline-flex items-center justify-center gap-1.5 whitespace-nowrap rounded-[var(--radius-md)] px-3 py-1.5 text-sm font-medium ring-offset-background transition-[background-color,box-shadow,color,opacity] duration-flow ease-out motion-reduce:transition-none disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-background data-[state=on]:text-foreground data-[state=on]:shadow-sm",
  {
    variants: {
      variant: {
        default: "",
        outline: "border border-input bg-transparent hover:bg-accent hover:text-accent-foreground data-[state=on]:bg-accent data-[state=on]:text-accent-foreground",
        pill: "rounded-full text-neutral-11 hover:text-neutral-12 data-[state=on]:bg-primary/5 data-[state=on]:text-primary data-[state=on]:shadow-none"
      },
      size: {
        default: "h-9 px-3",
        sm: "h-8 px-2",
        lg: "h-10 px-4"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
var ToggleGroupTypeContext = React24.createContext(null);
var ToggleGroupValueContext = React24.createContext(null);
var ToggleGroupChangeContext = React24.createContext(
  null
);
var ToggleGroupDisabledContext = React24.createContext(void 0);
var ToggleGroupVariantContext = React24.createContext(void 0);
var ToggleGroupSizeContext = React24.createContext(void 0);
function useToggleGroup() {
  const type = React24.use(ToggleGroupTypeContext);
  const value = React24.use(ToggleGroupValueContext);
  const onValueChange = React24.use(ToggleGroupChangeContext);
  const disabled = React24.use(ToggleGroupDisabledContext);
  const variant = React24.use(ToggleGroupVariantContext);
  const size = React24.use(ToggleGroupSizeContext);
  if (type === null || value === null || onValueChange === null) {
    throw new Error("ToggleGroup internal components must be used within a ToggleGroup");
  }
  return { disabled, onValueChange, size, type, value, variant };
}
var ToggleGroup = ({
  className,
  variant,
  size,
  type = "single",
  value: controlledValue,
  defaultValue,
  onValueChange,
  disabled,
  children,
  ref,
  ...props
}) => {
  const [uncontrolledValue, setUncontrolledValue] = React24.useState(
    defaultValue !== void 0 ? defaultValue : type === "single" ? "" : []
  );
  const isControlled = controlledValue !== void 0;
  const value = isControlled ? controlledValue : uncontrolledValue;
  function changeToggleGroupValue(newValue) {
    if (!isControlled) {
      setUncontrolledValue(newValue);
    }
    onValueChange?.(newValue);
  }
  return /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      role: type === "single" ? "radiogroup" : "group",
      "data-toggle-group-root": "",
      className: cn(toggleGroupVariants({ variant }), className),
      ...props,
      children: /* @__PURE__ */ jsx(ToggleGroupTypeContext.Provider, { value: type, children: /* @__PURE__ */ jsx(ToggleGroupValueContext.Provider, { value, children: /* @__PURE__ */ jsx(ToggleGroupChangeContext.Provider, { value: changeToggleGroupValue, children: /* @__PURE__ */ jsx(ToggleGroupDisabledContext.Provider, { value: disabled, children: /* @__PURE__ */ jsx(ToggleGroupVariantContext.Provider, { value: variant, children: /* @__PURE__ */ jsx(ToggleGroupSizeContext.Provider, { value: size, children }) }) }) }) }) })
    }
  );
};
ToggleGroup.displayName = "ToggleGroup";
var ToggleGroupItem = ({
  className,
  variant,
  size,
  value,
  children,
  ref,
  ...props
}) => {
  const context = useToggleGroup();
  const isDisabled = context.disabled || props.disabled;
  const isSelected = context.type === "single" ? context.value === value : Array.isArray(context.value) && context.value.includes(value);
  function toggleItemSelection(event) {
    if (isDisabled) return;
    if (context.type === "single") {
      if (isSelected) return;
      context.onValueChange(value);
    } else {
      const currentArray = Array.isArray(context.value) ? context.value : [];
      context.onValueChange(
        isSelected ? currentArray.filter((currentValue) => currentValue !== value) : [...currentArray, value]
      );
    }
    props.onClick?.(event);
  }
  function handleItemKeyDown(event) {
    props.onKeyDown?.(event);
    if (context.type !== "single" || event.defaultPrevented) return;
    const container = event.currentTarget.closest("[data-toggle-group-root]");
    if (!container) return;
    const items = Array.from(
      container.querySelectorAll("[data-toggle-item]:not(:disabled)")
    );
    const currentIndex = items.indexOf(event.currentTarget);
    if (currentIndex === -1 || items.length === 0) return;
    const focusAndSelect = (targetIndex) => {
      const wrapped = (targetIndex % items.length + items.length) % items.length;
      const target = items[wrapped];
      if (!target) return;
      target.focus();
      const targetValue = target.dataset.toggleValue;
      if (targetValue !== void 0) context.onValueChange(targetValue);
    };
    switch (event.key) {
      case "ArrowRight":
      case "ArrowDown":
        event.preventDefault();
        focusAndSelect(currentIndex + 1);
        break;
      case "ArrowLeft":
      case "ArrowUp":
        event.preventDefault();
        focusAndSelect(currentIndex - 1);
        break;
      case "Home":
        event.preventDefault();
        focusAndSelect(0);
        break;
      case "End":
        event.preventDefault();
        focusAndSelect(items.length - 1);
        break;
    }
  }
  const rovingTabIndex = context.type === "single" ? isSelected || context.value === "" ? 0 : -1 : void 0;
  return (
    // biome-ignore lint/a11y/useAriaPropsSupportedByRole: see comment above.
    /* @__PURE__ */ jsx(
      "button",
      {
        ref,
        type: "button",
        disabled: isDisabled,
        "data-state": isSelected ? "on" : "off",
        "data-toggle-item": "",
        "data-toggle-value": value,
        role: context.type === "single" ? "radio" : void 0,
        "aria-checked": context.type === "single" ? isSelected : void 0,
        "aria-pressed": context.type === "multiple" ? isSelected : void 0,
        tabIndex: rovingTabIndex,
        className: cn(
          toggleGroupItemVariants({
            variant: variant ?? context.variant,
            size: size ?? context.size
          }),
          className,
          "focus-visible:z-10"
        ),
        onClick: toggleItemSelection,
        ...props,
        onKeyDown: handleItemKeyDown,
        children
      }
    )
  );
};
ToggleGroupItem.displayName = "ToggleGroupItem";
var TreeContext = createContext(void 0);
var useTree = () => {
  const context = use(TreeContext);
  if (!context) {
    throw new Error("Tree components must be used within a TreeProvider");
  }
  return context;
};
var TreeNodeContext = createContext(void 0);
var useTreeNode = () => {
  const context = use(TreeNodeContext);
  if (!context) {
    throw new Error("TreeNode components must be used within a TreeNode");
  }
  return context;
};
var TreeProvider = ({
  children,
  defaultExpandedIds = [],
  showLines = true,
  showIcons = true,
  selectable = true,
  multiSelect = false,
  selectedIds,
  onSelectionChange,
  indent = 20,
  animateExpand = true,
  className
}) => {
  const shouldReduceMotion = useReducedMotion() ?? false;
  const [expandedIds, setExpandedIds] = useState(new Set(defaultExpandedIds));
  const [internalSelectedIds, setInternalSelectedIds] = useState(selectedIds ?? []);
  const isControlled = selectedIds !== void 0 && onSelectionChange !== void 0;
  const currentSelectedIds = isControlled ? selectedIds : internalSelectedIds;
  const toggleExpanded = useCallback((nodeId) => {
    setExpandedIds((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(nodeId)) {
        newSet.delete(nodeId);
      } else {
        newSet.add(nodeId);
      }
      return newSet;
    });
  }, []);
  const handleSelection = useCallback(
    (nodeId, ctrlKey = false) => {
      if (!selectable) {
        return;
      }
      let newSelection;
      if (multiSelect && ctrlKey) {
        newSelection = currentSelectedIds.includes(nodeId) ? currentSelectedIds.filter((id) => id !== nodeId) : [...currentSelectedIds, nodeId];
      } else {
        newSelection = currentSelectedIds.includes(nodeId) ? [] : [nodeId];
      }
      if (isControlled) {
        onSelectionChange?.(newSelection);
      } else {
        setInternalSelectedIds(newSelection);
      }
    },
    [selectable, multiSelect, currentSelectedIds, isControlled, onSelectionChange]
  );
  return /* @__PURE__ */ jsx(
    TreeContext.Provider,
    {
      value: {
        expandedIds,
        selectedIds: currentSelectedIds,
        toggleExpanded,
        handleSelection,
        showLines,
        showIcons,
        selectable,
        multiSelect,
        indent,
        animateExpand,
        reduceMotion: shouldReduceMotion
      },
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0 },
          className: cn("w-full", className),
          initial: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: 10 },
          transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: "easeOut" },
          children
        }
      )
    }
  );
};
var TreeView = ({ className, children, ...props }) => /* @__PURE__ */ jsx("div", { className: cn("p-2", className), ...props, children });
var TreeNode = ({
  nodeId: providedNodeId,
  level = 0,
  isLast = false,
  parentPath = [],
  children,
  className,
  onClick: _onClick,
  ...props
}) => {
  const generatedId = useId();
  const nodeId = providedNodeId ?? generatedId;
  const currentPath = level === 0 ? [] : [...parentPath];
  if (level > 0 && parentPath.length < level - 1) {
    while (currentPath.length < level - 1) {
      currentPath.push(false);
    }
  }
  if (level > 0) {
    currentPath[level - 1] = isLast;
  }
  return /* @__PURE__ */ jsx(
    TreeNodeContext.Provider,
    {
      value: {
        nodeId,
        level,
        isLast,
        parentPath: currentPath
      },
      children: /* @__PURE__ */ jsx("div", { className: cn("select-none", className), ...props, children })
    }
  );
};
var TreeNodeTrigger = ({
  children,
  className,
  onClick,
  ...props
}) => {
  const { selectedIds, toggleExpanded, handleSelection, indent, reduceMotion } = useTree();
  const { nodeId, level } = useTreeNode();
  const isSelected = selectedIds.includes(nodeId);
  return /* @__PURE__ */ jsxs(
    motion.div,
    {
      className: cn(
        "group relative mx-1 flex cursor-pointer items-center rounded-[var(--radius-md)] px-3 py-2 transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-200",
        "hover:bg-accent/50",
        isSelected && "bg-accent/80",
        className
      ),
      onClick: (e) => {
        toggleExpanded(nodeId);
        handleSelection(nodeId, e.ctrlKey || e.metaKey);
        onClick?.(e);
      },
      style: { paddingLeft: level * (indent ?? 0) + 8 },
      ...!reduceMotion ? { whileTap: { scale: 0.98, transition: { duration: 0.1 } } } : {},
      ...props,
      children: [
        /* @__PURE__ */ jsx(TreeLines, {}),
        children
      ]
    }
  );
};
var TreeLines = () => {
  const { showLines, indent } = useTree();
  const { level, isLast, parentPath } = useTreeNode();
  if (!showLines || level === 0) {
    return null;
  }
  return /* @__PURE__ */ jsxs("div", { className: "pointer-events-none absolute top-0 bottom-0 left-0", children: [
    Array.from({ length: level }, (_, index) => {
      const shouldHideLine = parentPath[index] === true;
      if (shouldHideLine && index === level - 1) {
        return null;
      }
      return /* @__PURE__ */ jsx(
        "div",
        {
          className: "absolute top-0 bottom-0 border-border/40 border-l",
          style: {
            left: index * (indent ?? 0) + 12,
            display: shouldHideLine ? "none" : "block"
          }
        },
        index.toString()
      );
    }),
    /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-1/2 border-border/40 border-t",
        style: {
          left: (level - 1) * (indent ?? 0) + 12,
          width: (indent ?? 0) - 4,
          transform: "translateY(-1px)"
        }
      }
    ),
    isLast && /* @__PURE__ */ jsx(
      "div",
      {
        className: "absolute top-0 border-border/40 border-l",
        style: {
          left: (level - 1) * (indent ?? 0) + 12,
          height: "50%"
        }
      }
    )
  ] });
};
var TreeNodeContent = ({
  children,
  hasChildren = false,
  className,
  ...props
}) => {
  const { animateExpand, expandedIds, reduceMotion } = useTree();
  const { nodeId } = useTreeNode();
  const isExpanded = expandedIds.has(nodeId);
  return /* @__PURE__ */ jsx(AnimatePresence, { initial: !reduceMotion, children: hasChildren && isExpanded && /* @__PURE__ */ jsx(
    motion.div,
    {
      animate: { height: "auto", opacity: 1 },
      className: "overflow-hidden",
      exit: { height: 0, opacity: 0 },
      initial: { height: 0, opacity: 0 },
      transition: {
        duration: animateExpand && !reduceMotion ? 0.3 : 0,
        ease: "easeInOut"
      },
      children: /* @__PURE__ */ jsx(
        motion.div,
        {
          animate: reduceMotion ? { opacity: 1 } : { y: 0 },
          className,
          exit: reduceMotion ? { opacity: 0 } : { y: -10 },
          initial: reduceMotion ? { opacity: 0 } : { y: -10 },
          transition: {
            duration: animateExpand && !reduceMotion ? 0.2 : 0,
            delay: animateExpand && !reduceMotion ? 0.1 : 0
          },
          ...props,
          children
        }
      )
    }
  ) });
};
var TreeExpander = ({
  hasChildren = false,
  className,
  onClick,
  ...props
}) => {
  const { expandedIds, toggleExpanded, reduceMotion } = useTree();
  const { nodeId } = useTreeNode();
  const isExpanded = expandedIds.has(nodeId);
  if (!hasChildren) {
    return /* @__PURE__ */ jsx("div", { className: "mr-1 h-4 w-4" });
  }
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      animate: { rotate: isExpanded ? 90 : 0 },
      className: cn("mr-1 flex h-4 w-4 cursor-pointer items-center justify-center", className),
      onClick: (e) => {
        e.stopPropagation();
        toggleExpanded(nodeId);
        onClick?.(e);
      },
      transition: reduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeInOut" },
      ...props,
      children: /* @__PURE__ */ jsx(ChevronRight, { className: "h-3 w-3 text-muted-foreground" })
    }
  );
};
var TreeIcon = ({ icon, hasChildren = false, className, ...props }) => {
  const { showIcons, expandedIds, reduceMotion } = useTree();
  const { nodeId } = useTreeNode();
  const isExpanded = expandedIds.has(nodeId);
  if (!showIcons) {
    return null;
  }
  const getDefaultIcon = () => hasChildren ? isExpanded ? /* @__PURE__ */ jsx(FolderOpen, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(FolderClosed, { className: "h-4 w-4" }) : /* @__PURE__ */ jsx(File, { className: "h-4 w-4" });
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      className: cn(
        "mr-2 flex h-4 w-4 items-center justify-center text-muted-foreground",
        className
      ),
      transition: reduceMotion ? { duration: 0 } : { duration: 0.15 },
      ...!reduceMotion ? { whileHover: { scale: 1.1 } } : {},
      ...props,
      children: icon || getDefaultIcon()
    }
  );
};
var TreeLabel = ({ className, ...props }) => /* @__PURE__ */ jsx("span", { className: cn("font flex-1 truncate text-sm", className), ...props });

export { Accordion, AccordionContent, AccordionItem, AccordionTrigger, Alert, AlertContent, AlertDescription, AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, AlertDialogPortal, AlertDialogTitle, AlertDialogTrigger, AlertIcon, AlertTitle, AlertToolbar, AnimateIn, AnimateInGroup, AnimateSwap, AnimatedThemeToggler, AspectRatio, Avatar, AvatarFallback, AvatarGroup, AvatarImage, Badge, Breadcrumb, BreadcrumbEllipsis, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator, Button, ButtonLink, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Checkbox, CheckboxGroup, CodeBlock, Collapse, CollapseGroup, Combobox, ComboboxEmpty, ComboboxGroupSub, ComboboxInput, ComboboxList, ComboboxOptionItem, ComboboxRoot, ComboboxSeparator, Command, CommandDialog, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList, CommandResults, CommandSeparator, CommandShortcut, ContextMenu, ContextMenuCheckboxItem, ContextMenuContent, ContextMenuGroup, ContextMenuItem, ContextMenuLabel, ContextMenuRadioGroup, ContextMenuRadioItem, ContextMenuRoot, ContextMenuSeparator, ContextMenuShortcut, ContextMenuSub, ContextMenuSubContent, ContextMenuSubTrigger, ContextMenuTrigger, CopyButton, CopyCodeButton, CopyIdButton, CopyLinkButton, CopyMenuItem, CopyableField, Description, Dialog, DialogClose, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogOverlay, DialogPortal, DialogTitle, DialogTrigger, Drawer, DrawerBody, DrawerClose, DrawerContent, DrawerDescription, DrawerFooter, DrawerHeader, DrawerOverlay, DrawerPortal, DrawerTitle, DrawerTrigger, DropdownMenu, DropdownMenuCheckboxItem, DropdownMenuContent, DropdownMenuEmpty, DropdownMenuFilterInput, DropdownMenuGroup, DropdownMenuItem, DropdownMenuLabel, DropdownMenuPortal, DropdownMenuRadioGroup, DropdownMenuRadioItem, DropdownMenuSeparator, DropdownMenuShortcut, DropdownMenuSub, DropdownMenuSubContent, DropdownMenuSubTrigger, DropdownMenuTrigger, EmptyState, EmptyStateIcon, EmptyStateRoot, ErrorSurface as Error, ErrorMessage, Field, Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage, Gauge, HoverCard, HoverCardContent, HoverCardTrigger, Input, InputOTP, InputOTPGroup, InputOTPSeparator, InputOTPSlot, Kbd, Label, LoadingDots, Menu, MenuButton, MenuContainer, MenuItem, MenuItemLocked, MenuLink, MenuSection, Menubar, MenubarCheckboxItem, MenubarContent, MenubarGroup, MenubarItem, MenubarLabel, MenubarMenu, MenubarPortal, MenubarRadioGroup, MenubarRadioItem, MenubarSeparator, MenubarShortcut, MenubarSub, MenubarSubContent, MenubarSubTrigger, MenubarTrigger, Modal, MultiSelectContent, MultiSelectRoot, MultiSelectRow, MultiSelectTrigger, NavigationMenu, NavigationMenuContent, NavigationMenuIndicator, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, NavigationMenuTrigger, NavigationMenuViewport, Note, Pagination, Popover, PopoverAnchor, PopoverContent, PopoverPositioner, PopoverTrigger, Progress, ProjectBanner, RadioGroup, RadioGroupItem, ResizableHandle, ResizablePanel, ResizablePanelGroup, Scroller, Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectScrollDownButton, SelectScrollUpButton, SelectSeparator, SelectTrigger, SelectValue, Separator2 as Separator, Sheet, SheetBody, SheetClose, SheetContent, SheetDescription, SheetFooter, SheetHeader, SheetOverlay, SheetPortal, SheetTitle, SheetTrigger, ShowMore, Skeleton, SkeletonAvatar, SkeletonCard, SkeletonText, Slider, Spinner2 as Spinner, SplitButton, SplitButtonMenuItem, Stack, StatusDot, Switch, Table, TableBody, TableCaption, TableCell, TableCol, TableColgroup, TableFooter, TableHead, TableHeader, TableRow, Tabs, TabsContent, TabsList, TabsTrigger, Textarea, ThemeSwitcher, ThemeToggle, Toaster, Toggle, ToggleGroup, ToggleGroupItem, Tooltip, TooltipContent, TooltipProvider, TooltipTrigger, TreeExpander, TreeIcon, TreeLabel, TreeLines, TreeNode, TreeNodeContent, TreeNodeTrigger, TreeProvider, TreeView, alertVariants, badgeVariants, buttonVariants, containerWidths, flexLayouts, gridLayouts, labelVariants, navigationMenuTriggerStyle, progressIndicatorVariants, progressVariants, tabsContentVariants, tabsListVariants, tabsTriggerVariants, toggleGroupItemVariants, toggleGroupVariants, useCopyToClipboard, useFormField, useToasts, zIndex };
//# sourceMappingURL=canonical.js.map
//# sourceMappingURL=canonical.js.map