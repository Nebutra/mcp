"use client";
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs, Fragment as Fragment$1 } from 'react/jsx-runtime';
import * as React from 'react';
import { useState, useRef, useCallback, useMemo, Fragment, isValidElement } from 'react';
import { Check, Copy, Pencil, FileText, TextBold, TextItalic, Code, Hash, ListUnordered, Link, Image, ChevronUp, ChevronDown, Calendar, Eye, Bookmark, StarFill, Share, Flag, ChevronUpDown, Pin, ChevronRight, MoreHorizontal } from '@nebutra/icons';
import { cva } from 'class-variance-authority';
import { Menu } from '@base-ui/react/menu';
import { colors } from '@nebutra/brand';
import { Tabs as Tabs$1 } from '@base-ui/react/tabs';
import { Tooltip as Tooltip$1 } from '@base-ui/react/tooltip';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { Separator as Separator$1 } from '@base-ui/react/separator';
import { Avatar as Avatar$1 } from '@base-ui/react/avatar';
import { useReducedMotion, AnimatePresence, motion } from 'framer-motion';

// src/utils/cn.ts
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
function ArtifactShiftCard({
  className,
  contentClassName,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group/card relative flex h-full min-h-[560px] flex-col overflow-hidden rounded-[var(--radius-panel)] border bg-background/90 transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:border-foreground/25 hover:shadow-ambient-lg focus-within:-translate-y-1 focus-within:border-foreground/25",
        className
      ),
      "data-taste": "nebutra-shift-card",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--neutral-8)_1px,transparent_0)] bg-[length:22px_22px] opacity-[0.09]"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-primary/10 via-primary/5 to-transparent opacity-80"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: cn("relative flex h-full flex-col p-4 sm:p-5", contentClassName), children })
      ]
    }
  );
}
function ArtifactShiftCardPreview({
  filename,
  language,
  code,
  label,
  maxLines = 8,
  signals = ["typed", "scoped", "ready"],
  className,
  ...props
}) {
  const lines = code.split("\n").slice(0, maxLines);
  return /* @__PURE__ */ jsxs(
    "section",
    {
      "aria-label": label,
      className: cn(
        "relative min-h-[260px] overflow-hidden rounded-[var(--radius-xl)] border border-border/60 bg-background/80 p-3 shadow-ambient-sm transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:-translate-y-1 group-hover/card:border-foreground/20 group-hover/card:shadow-ambient-md group-focus-within/card:-translate-y-1 group-focus-within/card:border-foreground/20 sm:p-4",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--neutral-7)_1px,transparent_0)] bg-[length:18px_18px] opacity-[0.16]"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-primary/10 to-transparent opacity-80"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "relative flex items-center justify-between gap-3 rounded-[var(--radius-md)] border border-border/60 bg-background/85 px-3 py-2", children: [
          /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate font-mono text-[11px] text-foreground/80", translate: "no", children: filename }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "rounded-full border border-border/70 bg-muted/40 px-2 py-0.5 font-mono text-[10px] text-muted-foreground uppercase",
              translate: "no",
              children: language
            }
          )
        ] }),
        /* @__PURE__ */ jsx("div", { className: "relative mt-3 space-y-1.5 rounded-[var(--radius-lg)] border border-border/50 bg-muted/25 p-3 font-mono text-[11px] leading-5", children: lines.map((line, index) => /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "w-5 shrink-0 text-right text-muted-foreground/55 tabular-nums", children: index + 1 }),
          /* @__PURE__ */ jsx("code", { className: "min-w-0 truncate text-foreground/75", translate: "no", children: line || " " })
        ] }, `${line}-${index}`)) }),
        /* @__PURE__ */ jsx("div", { className: "relative mt-3 grid grid-cols-3 gap-2", children: signals.map((signal) => /* @__PURE__ */ jsx(
          "span",
          {
            className: "rounded-[var(--radius-md)] border border-border/55 bg-background/75 px-2 py-1.5 text-center font-mono text-[10px] text-muted-foreground uppercase tracking-[0.14em]",
            children: signal
          },
          signal
        )) })
      ]
    }
  );
}
function ArtifactShiftCardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "footer",
    {
      className: cn(
        "relative mt-4 flex flex-wrap items-center justify-between gap-3 rounded-[var(--radius-xl)] border border-border/60 bg-background/85 px-4 py-3 shadow-ambient-sm backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover/card:-translate-y-2 group-hover/card:border-foreground/20 group-hover/card:shadow-ambient-md group-focus-within/card:-translate-y-2 group-focus-within/card:border-foreground/20",
        className
      ),
      ...props
    }
  );
}
var CardContext = React.createContext(null);
var paddingMap = {
  none: "",
  sm: "p-4",
  md: "p-6",
  lg: "p-8"
};
var variantStyles = {
  default: "bg-card border border-border",
  elevated: "bg-card border border-border shadow-lg",
  bordered: "bg-transparent border-2 border-border",
  ghost: "bg-transparent",
  gradient: "bg-gradient-to-br from-card to-muted border border-border"
};
var CardRoot = React.forwardRef(
  ({ className, variant = "default", padding = "md", children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(CardContext.Provider, { value: { variant }, children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "rounded-[var(--radius-xl)] transition-[background-color,border-color,box-shadow,color] duration-micro",
          variantStyles[variant],
          paddingMap[padding],
          className
        ),
        ...props,
        children
      }
    ) });
  }
);
CardRoot.displayName = "Card";
var CardHeader = React.forwardRef(
  ({ className, spacing: gap = "md", children, ...props }, ref) => {
    const gapMap = { sm: "gap-2", md: "gap-3", lg: "gap-4" };
    return /* @__PURE__ */ jsx("div", { ref, className: cn("flex items-start", gapMap[gap], className), ...props, children });
  }
);
CardHeader.displayName = "Card.Header";
var CardBody = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx("div", { ref, className: cn("mt-4", className), ...props, children });
  }
);
CardBody.displayName = "Card.Body";
var CardFooter = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx("div", { ref, className: cn("mt-6 pt-4 border-t border-border/50", className), ...props, children });
  }
);
CardFooter.displayName = "Card.Footer";
var CardIcon = React.forwardRef(
  ({ className, size = "md", children, ...props }, ref) => {
    const sizeMap = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12"
    };
    return /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "flex items-center justify-center rounded-[var(--radius-lg)] bg-muted/50 shrink-0",
          sizeMap[size],
          className
        ),
        ...props,
        children
      }
    );
  }
);
CardIcon.displayName = "Card.Icon";
var CardTitle = React.forwardRef(
  ({ className, as: Tag = "h3", children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(Tag, { ref, className: cn("text-lg font-semibold text-foreground", className), ...props, children });
  }
);
CardTitle.displayName = "Card.Title";
var CardDescription = React.forwardRef(({ className, as: Tag = "p", children, ...props }, ref) => {
  return React.createElement(
    Tag,
    {
      ref,
      className: cn("text-sm text-muted-foreground leading-relaxed", className),
      ...props
    },
    children
  );
});
CardDescription.displayName = "Card.Description";
var Card = Object.assign(CardRoot, {
  Header: CardHeader,
  Body: CardBody,
  Footer: CardFooter,
  Icon: CardIcon,
  Title: CardTitle,
  Description: CardDescription
});
var CommandBox = React.forwardRef(
  ({
    className,
    command,
    prefix = "$",
    showCopyButton = true,
    variant = "default",
    onCopy,
    ...props
  }, ref) => {
    const [copied, setCopied] = React.useState(false);
    const handleCopy = React.useCallback(async () => {
      try {
        await navigator.clipboard.writeText(command);
        setCopied(true);
        onCopy?.();
        setTimeout(() => setCopied(false), 2e3);
      } catch (err) {
        if (process.env.NODE_ENV !== "production") {
          console.error("[CommandBox] clipboard write failed:", err);
        }
      }
    }, [command, onCopy]);
    const variantStyles3 = {
      default: "bg-muted border border-border rounded-[var(--radius-lg)]",
      minimal: "bg-background border border-border rounded-[var(--radius-md)]",
      pill: "bg-muted border border-border rounded-full"
    };
    return (
      // biome-ignore lint/a11y/useSemanticElements: ARIA pattern
      /* @__PURE__ */ jsxs(
        "div",
        {
          ref,
          className: cn(
            "group relative flex items-center gap-3 px-4 py-2.5 font-mono text-sm cursor-pointer transition-colors hover:bg-muted",
            variantStyles3[variant],
            className
          ),
          onClick: handleCopy,
          role: "button",
          tabIndex: 0,
          onKeyDown: (e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              handleCopy();
            }
          },
          "aria-label": `Copy command: ${command}`,
          ...props,
          children: [
            /* @__PURE__ */ jsx("span", { className: "text-emerald-400 shrink-0 select-none", children: prefix }),
            /* @__PURE__ */ jsx("span", { className: "flex-1 text-muted-foreground truncate", children: command }),
            showCopyButton && /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "shrink-0 text-xs transition-colors",
                  copied ? "text-emerald-400" : "text-muted-foreground group-hover:text-muted-foreground"
                ),
                children: copied ? /* @__PURE__ */ jsx(CopiedIcon, { className: "w-4 h-4" }) : /* @__PURE__ */ jsx(CopyIcon, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              "span",
              {
                className: cn(
                  "absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs rounded bg-zinc-700 text-muted-foreground opacity-0 transition-opacity pointer-events-none",
                  "group-hover:opacity-100",
                  copied && "opacity-100"
                ),
                children: copied ? "Copied!" : "Click to copy"
              }
            )
          ]
        }
      )
    );
  }
);
CommandBox.displayName = "CommandBox";
function CopyIcon({ className }) {
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      "aria-hidden": "true",
      className,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: [
        /* @__PURE__ */ jsx("rect", { x: "9", y: "9", width: "13", height: "13", rx: "2", ry: "2" }),
        /* @__PURE__ */ jsx("path", { d: "M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" })
      ]
    }
  );
}
function CopiedIcon({ className }) {
  return /* @__PURE__ */ jsx(
    "svg",
    {
      "aria-hidden": "true",
      className,
      xmlns: "http://www.w3.org/2000/svg",
      viewBox: "0 0 24 24",
      fill: "none",
      stroke: "currentColor",
      strokeWidth: "2",
      strokeLinecap: "round",
      strokeLinejoin: "round",
      children: /* @__PURE__ */ jsx("polyline", { points: "20 6 9 17 4 12" })
    }
  );
}
var metricToneClasses = {
  neutral: "bg-muted/70 text-muted-foreground ring-border",
  blue: "bg-info/10 text-info ring-info/20",
  green: "bg-success/10 text-success ring-success/20",
  amber: "bg-warning/10 text-warning ring-warning/20"
};
function DashboardCommandSurface({
  status,
  title,
  description,
  actions,
  children,
  className
}) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      "data-pattern": "nebutra-dashboard-command",
      className: cn(
        "relative overflow-hidden rounded-[var(--radius-lg)] border border-border bg-card p-4 text-card-foreground shadow-sm",
        "before:pointer-events-none before:absolute before:inset-x-0 before:top-0 before:h-px before:bg-[linear-gradient(90deg,transparent,hsl(var(--primary)/0.58),transparent)]",
        "after:pointer-events-none after:absolute after:inset-0 after:bg-[radial-gradient(circle_at_top_left,hsl(var(--primary)/0.08),transparent_42%)]",
        "sm:p-5",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between", children: [
          /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
            status ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
              /* @__PURE__ */ jsx("span", { className: "size-1.5 rounded-full bg-success shadow-[0_0_0_3px_hsl(var(--success)/0.18)]" }),
              /* @__PURE__ */ jsx("p", { className: "text-[11px] font-medium uppercase text-muted-foreground", children: status })
            ] }) : null,
            /* @__PURE__ */ jsx("h1", { className: "mt-2 text-2xl font-semibold tracking-normal text-card-foreground sm:text-[28px]", children: title }),
            description ? /* @__PURE__ */ jsx("p", { className: "mt-2 max-w-2xl text-[13px] leading-5 text-muted-foreground", children: description }) : null
          ] }),
          actions ? /* @__PURE__ */ jsx("div", { className: "flex shrink-0 flex-wrap items-center gap-1.5", children: actions }) : null
        ] }),
        children ? /* @__PURE__ */ jsx("div", { className: "relative z-10 mt-4", children }) : null
      ]
    }
  );
}
function DashboardPanel({
  title,
  description,
  meta,
  action,
  children,
  className,
  headerClassName
}) {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      "data-pattern": "nebutra-dashboard-panel",
      className: cn(
        "rounded-[var(--radius-lg)] border border-border bg-card p-3.5 text-card-foreground shadow-sm sm:p-4",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "mb-3 flex flex-col gap-2.5 border-b border-border pb-3 lg:flex-row lg:items-start lg:justify-between",
              headerClassName
            ),
            children: [
              /* @__PURE__ */ jsxs("div", { className: "min-w-0", children: [
                /* @__PURE__ */ jsx("h2", { className: "text-sm font-semibold tracking-normal text-card-foreground", children: title }),
                description ? /* @__PURE__ */ jsx("p", { className: "mt-0.5 text-xs leading-5 text-muted-foreground", children: description }) : null
              ] }),
              (meta || action) && /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-wrap items-center gap-2 lg:justify-end", children: [
                meta,
                action
              ] })
            ]
          }
        ),
        children
      ]
    }
  );
}
function DashboardMetricTile({
  label,
  value,
  detail,
  source,
  icon: Icon,
  tone = "neutral",
  className
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      "data-pattern": "nebutra-dashboard-metric",
      className: cn(
        "group h-full rounded-[var(--radius-lg)] border border-border bg-muted/40 p-3 transition-colors duration-micro",
        "hover:border-muted-foreground/30 hover:bg-muted/65",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "min-w-0 truncate text-xs font-medium text-muted-foreground", children: label }),
          Icon ? /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "inline-flex size-6 shrink-0 items-center justify-center rounded-[var(--radius-sm)] ring-1",
                metricToneClasses[tone]
              ),
              children: /* @__PURE__ */ jsx(Icon, { className: "size-3.5", "aria-hidden": true })
            }
          ) : null
        ] }),
        /* @__PURE__ */ jsx("p", { className: "mt-2 text-2xl font-semibold tabular-nums tracking-normal text-card-foreground", children: value }),
        (detail || source) && /* @__PURE__ */ jsxs("div", { className: "mt-1.5 space-y-0.5 text-xs leading-5 text-muted-foreground", children: [
          detail ? /* @__PURE__ */ jsx("span", { className: "block", children: detail }) : null,
          source ? /* @__PURE__ */ jsx("span", { className: "block text-[11px] text-muted-foreground/70", children: source }) : null
        ] })
      ]
    }
  );
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
  const renderContent = (label) => /* @__PURE__ */ jsxs(Fragment$1, { children: [
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
    const childArray = React.Children.toArray(children);
    const child = childArray.length === 1 ? childArray[0] : null;
    if (React.isValidElement(child)) {
      const childProps = child.props;
      return React.cloneElement(child, {
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
  20: 80,
  24: 96
};
var primitiveSizing = {
  /** Geist button-specific size (24px). Larger than xs by design. */
  tiny: 24,
  sm: 32,
  md: 40,
  lg: 48};
var primitiveRadius = {
  md: 6,
  // Geist default — slightly more rounded than 4px
  lg: 8,
  full: 9999
};
var primitiveFontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18};
var primitiveTransition = {
  duration: {
    // hover, focus, small state changes
    flow: 200},
  easing: {
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
  xl: "shadow-xl"};
var overlayZIndex = {
  popover: 1060,
  tooltip: 1070
};
var overlayClassNames = {
  menuSurface: [
    "min-w-32 overflow-hidden rounded-[var(--radius-lg)] border border-border/70 bg-popover/95 p-1 text-popover-foreground backdrop-blur-md",
    shadowClasses.xl,
    "outline-none transition-[opacity,transform,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-[starting-style]:scale-95 data-[starting-style]:opacity-0 data-[ending-style]:scale-95 data-[ending-style]:opacity-0",
    "motion-reduce:transition-none motion-reduce:data-[starting-style]:transform-none motion-reduce:data-[ending-style]:transform-none"
  ].join(" "),
  tooltipSurface: [
    "overflow-hidden rounded-[var(--radius-md)] border border-border/70 bg-popover/95 px-3 py-1.5 text-sm text-popover-foreground backdrop-blur-md",
    shadowClasses.md,
    "transition-[opacity,transform,display] duration-[var(--motion-duration-flow)] ease-[var(--ease-out)]",
    "data-starting-style:scale-95 data-starting-style:opacity-0 data-ending-style:scale-95 data-ending-style:opacity-0",
    "motion-reduce:transition-none motion-reduce:data-starting-style:transform-none motion-reduce:data-ending-style:transform-none"
  ].join(" ")};

// src/primitives/overlay.ts
var menuItemBaseClassName = [
  "relative flex cursor-default select-none items-center rounded-[var(--radius-sm)] px-2 py-1.5 text-sm",
  "outline-none transition-colors duration-micro ease-out",
  "data-[disabled]:pointer-events-none data-[disabled]:opacity-60"
].join(" ");
var menuHighlightedClassName = "data-[highlighted]:bg-accent data-[highlighted]:text-accent-foreground";
var overlayPrimitiveClassNames = {
  menuSurface: "rounded-[var(--radius-md)] border-border/70 bg-popover/95 shadow-md",
  menuItem: [menuItemBaseClassName, menuHighlightedClassName].join(" ")};
var DropdownMenuContext = React.createContext(null);
function DropdownMenu({
  open: controlledOpen,
  defaultOpen = false,
  onOpenChange,
  children,
  ...props
}) {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen);
  const open = controlledOpen ?? uncontrolledOpen;
  function setOpen(nextOpen, eventDetails) {
    if (controlledOpen === void 0) {
      setUncontrolledOpen(nextOpen);
    }
    onOpenChange?.(nextOpen, eventDetails);
  }
  const contextValue = { setOpen };
  return /* @__PURE__ */ jsx(DropdownMenuContext.Provider, { value: contextValue, children: /* @__PURE__ */ jsx(Menu.Root, { open, onOpenChange: setOpen, ...props, children }) });
}
DropdownMenu.displayName = "DropdownMenu";
var DropdownMenuTrigger = ({
  asChild,
  children,
  render,
  ref,
  ...props
}) => {
  const context = React.use(DropdownMenuContext);
  function openFromTrigger() {
    context?.setOpen(true);
  }
  const childRenderElement = asChild && React.isValidElement(children) ? React.cloneElement(children, {
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
    Menu.Trigger,
    {
      ref,
      render: renderElement,
      ...renderElement ? props : { ...props, children }
    }
  );
};
DropdownMenuTrigger.displayName = "DropdownMenuTrigger";
Menu.Group;
Menu.Portal;
Menu.SubmenuRoot;
Menu.RadioGroup;
var DropdownMenuContent = ({
  className,
  style,
  sideOffset = 4,
  align = "center",
  alignOffset = 0,
  side = "bottom",
  ref,
  ...props
}) => /* @__PURE__ */ jsx(Menu.Portal, { children: /* @__PURE__ */ jsx(
  Menu.Positioner,
  {
    sideOffset,
    align,
    alignOffset,
    side,
    children: /* @__PURE__ */ jsx(
      Menu.Popup,
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
  Menu.Item,
  {
    ref,
    className: cn(overlayPrimitiveClassNames.menuItem, inset && "pl-8", className),
    ...props
  }
);
DropdownMenuItem.displayName = "DropdownMenuItem";
var DropdownMenuSeparator = ({
  className,
  orientation = "horizontal",
  ref,
  ...props
}) => /* @__PURE__ */ jsx(
  Menu.Separator,
  {
    ref,
    orientation,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
);
DropdownMenuSeparator.displayName = "DropdownMenuSeparator";
var iconToneStyles = {
  neutral: "bg-muted text-muted-foreground",
  blue: "bg-blue-50 text-blue-700 dark:bg-blue-950/40 dark:text-blue-300",
  cyan: "bg-cyan-50 text-cyan-700 dark:bg-cyan-950/40 dark:text-cyan-300",
  purple: "bg-purple-50 text-purple-700 dark:bg-purple-950/40 dark:text-purple-300",
  amber: "bg-amber-50 text-amber-700 dark:bg-amber-950/40 dark:text-amber-300",
  green: "bg-green-50 text-green-700 dark:bg-green-950/40 dark:text-green-300",
  pink: "bg-pink-50 text-pink-700 dark:bg-pink-950/40 dark:text-pink-300"
};
var badgeToneToVariant = {
  beta: "beta",
  new: "new",
  owner: "owner",
  featured: "featured",
  "coming-soon": "coming-soon"
};
var cardClassName = cn(
  "group relative block rounded-[var(--radius-xl)] border border-border bg-card text-card-foreground p-5 text-left",
  "transition-[border-color,box-shadow,transform] duration-micro motion-reduce:transition-none motion-reduce:transform-none",
  "hover:border-neutral-7 hover:shadow-sm hover:-translate-y-px motion-reduce:hover:translate-y-0",
  "focus-visible:outline-none"
);
function GalleryCardActionsMenu({ actions, title }) {
  function stop(event) {
    event.stopPropagation();
  }
  return /* @__PURE__ */ jsx("div", { onClickCapture: stop, onPointerDownCapture: stop, children: /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(
      DropdownMenuTrigger,
      {
        render: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": `Actions for ${title}`,
            className: cn(
              "inline-flex h-7 w-7 items-center justify-center rounded-[var(--radius-md)]",
              "text-muted-foreground transition-colors",
              "hover:bg-accent hover:text-accent-foreground",
              "focus-visible:outline-none"
            ),
            children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "h-4 w-4" })
          }
        )
      }
    ),
    /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", sideOffset: 6, children: actions.map((action) => /* @__PURE__ */ jsx(
      DropdownMenuItem,
      {
        onClick: (event) => {
          event.stopPropagation();
          action.onSelect();
        },
        className: cn(
          action.destructive && "text-destructive data-[highlighted]:bg-destructive/10 data-[highlighted]:text-destructive"
        ),
        children: action.label
      },
      action.id
    )) })
  ] }) });
}
function GalleryCardBody({
  title,
  description,
  icon,
  iconTone,
  badge,
  pinned,
  metadata,
  actions
}) {
  const hasActions = Boolean(actions && actions.length > 0);
  const hasMetadataStrip = Boolean(metadata?.author || metadata?.metric || metadata?.trailing);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    /* @__PURE__ */ jsxs("div", { className: "mb-3 flex items-start justify-between gap-2", children: [
      icon ? /* @__PURE__ */ jsx(
        "div",
        {
          className: cn(
            "flex h-10 w-10 shrink-0 items-center justify-center rounded-[var(--radius-lg)] text-base",
            iconToneStyles[iconTone]
          ),
          "aria-hidden": "true",
          children: icon
        }
      ) : /* @__PURE__ */ jsx("span", { className: "h-10 w-10 shrink-0", "aria-hidden": "true" }),
      (pinned || hasActions) && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
        pinned && /* @__PURE__ */ jsx(Pin, { className: "h-3.5 w-3.5 fill-amber-400 text-amber-500", "aria-label": "Pinned" }),
        hasActions && actions ? /* @__PURE__ */ jsx(GalleryCardActionsMenu, { actions, title }) : null
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "mb-1.5 flex items-center gap-2", children: [
      /* @__PURE__ */ jsx("h3", { className: "line-clamp-1 text-[15px] font-semibold leading-tight", children: title }),
      badge && /* @__PURE__ */ jsx(Badge, { variant: badgeToneToVariant[badge.tone], size: "sm", children: badge.label })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "mb-4 line-clamp-2 min-h-[2.5rem] text-sm text-muted-foreground", children: description ?? "\xA0" }),
    hasMetadataStrip && /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 border-t border-border pt-3 text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsx("span", { className: "truncate", children: metadata?.author ?? "" }),
      /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
        metadata?.metric && /* @__PURE__ */ jsx("span", { className: "tabular-nums", children: metadata.metric }),
        metadata?.trailing
      ] })
    ] })
  ] });
}
function GalleryCard(props) {
  const {
    title,
    description,
    icon,
    iconTone = "neutral",
    badge,
    pinned,
    metadata,
    actions,
    onClick,
    href,
    renderLink,
    className
  } = props;
  const body = /* @__PURE__ */ jsx(
    GalleryCardBody,
    {
      title,
      description,
      icon,
      iconTone,
      badge,
      pinned,
      metadata,
      actions
    }
  );
  const composedClassName = cn(cardClassName, "cursor-pointer", className);
  if (href) {
    if (renderLink) {
      return renderLink({
        href,
        className: composedClassName,
        "aria-label": title,
        children: body
      });
    }
    return /* @__PURE__ */ jsx("a", { href, "aria-label": title, className: composedClassName, onClick, children: body });
  }
  if (onClick) {
    return /* @__PURE__ */ jsx("button", { type: "button", "aria-label": title, className: composedClassName, onClick, children: body });
  }
  return /* @__PURE__ */ jsx("div", { className: cn(cardClassName, "cursor-default", className), children: body });
}
GalleryCard.displayName = "GalleryCard";
function lineTone(line) {
  const trimmed = line.trim();
  if (trimmed.startsWith("//") || trimmed.startsWith("--")) {
    return "text-muted-foreground/55 italic";
  }
  if (/\b(await|const|export|return|CREATE|ALTER|POLICY|USING|ENABLE|TABLE)\b/.test(trimmed)) {
    return "text-primary font-medium";
  }
  if (trimmed.includes(":")) {
    return "text-emerald-600 dark:text-emerald-400";
  }
  return "text-foreground/78";
}
function renderIcon(icon) {
  if (!icon) {
    return null;
  }
  if (typeof icon === "function") {
    const Icon = icon;
    return /* @__PURE__ */ jsx(Icon, { "aria-hidden": true, className: "size-7 text-primary" });
  }
  if (isValidElement(icon)) {
    return /* @__PURE__ */ jsx(
      "span",
      {
        "aria-hidden": true,
        className: "inline-grid place-items-center text-primary [&_svg]:size-7 [&_svg]:text-primary",
        children: icon
      }
    );
  }
  return icon;
}
function KineticFeatureCard({
  icon,
  eyebrow,
  title,
  description,
  children,
  className,
  ...props
}) {
  const renderedIcon = renderIcon(icon);
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: cn(
        "group/kinetic relative flex h-full min-h-[540px] flex-col overflow-hidden rounded-[var(--radius-panel)] border border-border/65 bg-background/82 p-6 shadow-glass-md backdrop-blur-2xl transition-[transform,border-color,box-shadow,background-color] duration-500 ease-[cubic-bezier(0.23,1,0.32,1)] hover:-translate-y-1 hover:border-foreground/25 hover:bg-background/94 hover:shadow-glass-lg focus-within:-translate-y-1 focus-within:border-foreground/25 sm:p-7",
        className
      ),
      "data-taste": "nebutra-texture-cutout-card",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--neutral-8)_1px,transparent_0)] bg-[length:18px_18px] opacity-[0.12]"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-primary/12 via-primary/5 to-transparent",
            style: { maskImage: "linear-gradient(to bottom, black 45%, transparent 100%)" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "absolute right-0 top-0 z-10 rounded-bl-[2rem] border-b border-l border-border/60 bg-muted/55 px-4 py-2 backdrop-blur-xl", children: /* @__PURE__ */ jsx("span", { className: "font-mono text-[10px] font-semibold uppercase tracking-[0.18em] text-muted-foreground", children: eyebrow }) }),
        /* @__PURE__ */ jsxs("div", { className: "relative z-10 flex h-full flex-col", children: [
          /* @__PURE__ */ jsx("div", { className: "mb-8 flex items-start justify-between gap-4 pr-16", children: renderedIcon && /* @__PURE__ */ jsx("div", { className: "grid size-14 place-items-center rounded-[var(--radius-xl)] border border-border/65 bg-background/75 shadow-glass-sm transition-transform duration-500 group-hover/kinetic:-translate-y-1", children: renderedIcon }) }),
          /* @__PURE__ */ jsx(
            "h3",
            {
              className: "text-2xl font-semibold text-foreground text-balance",
              style: { letterSpacing: "var(--tracking-heading)", lineHeight: "var(--leading-heading)" },
              children: title
            }
          ),
          /* @__PURE__ */ jsx("p", { className: "mt-4 text-base font-medium leading-7 text-muted-foreground text-balance", children: description }),
          /* @__PURE__ */ jsx("div", { className: "mt-auto pt-8", children })
        ] })
      ]
    }
  );
}
function KineticCodePreview({
  filename = "artifact.ts",
  language = "ts",
  lines,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-[var(--radius-xl)] border border-border/60 bg-muted/30 shadow-ambient-md transition-[transform,border-color,box-shadow] duration-500 group-hover/kinetic:-translate-y-2 group-hover/kinetic:border-foreground/20 group-hover/kinetic:shadow-ambient-lg",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 border-b border-border/60 bg-background/70 px-4 py-3 backdrop-blur-xl", children: [
          /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-border/90", "aria-hidden": true }),
          /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-border/80", "aria-hidden": true }),
          /* @__PURE__ */ jsx("span", { className: "size-2.5 rounded-full bg-border/70", "aria-hidden": true }),
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "ml-3 min-w-0 truncate font-mono text-[11px] text-muted-foreground",
              translate: "no",
              children: filename
            }
          ),
          /* @__PURE__ */ jsx("span", { className: "ml-auto rounded-full border border-border/60 bg-background/60 px-2 py-0.5 font-mono text-[10px] uppercase text-muted-foreground", children: language })
        ] }),
        /* @__PURE__ */ jsx("pre", { className: "relative max-h-[190px] overflow-hidden p-4 font-mono text-[12px] leading-5", children: lines.map((line, index) => /* @__PURE__ */ jsxs("span", { className: "flex min-w-0 gap-3", children: [
          /* @__PURE__ */ jsx("span", { className: "w-5 shrink-0 text-right text-muted-foreground/45 tabular-nums", children: index + 1 }),
          /* @__PURE__ */ jsx("code", { className: cn("min-w-0 truncate", lineTone(line)), translate: "no", children: line || " " })
        ] }, `${line}-${index}`)) })
      ]
    }
  );
}
function KineticConsoleFrame({
  title = "operator@nebutra-sailor: ~",
  status,
  children,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group/kinetic relative flex h-full min-h-[460px] w-full flex-col overflow-hidden rounded-[2rem] border border-border/65 bg-background/84 shadow-glass-md backdrop-blur-3xl transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-glass-lg",
        className
      ),
      "data-taste": "nebutra-terminal-animation",
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex h-14 flex-none items-center gap-4 border-b border-border/60 bg-background/70 px-5 backdrop-blur-xl", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", "aria-hidden": true, children: [
            /* @__PURE__ */ jsx("span", { className: "size-3 rounded-full border border-border/80 bg-muted shadow-sm transition-colors group-hover/kinetic:bg-red-400/80" }),
            /* @__PURE__ */ jsx("span", { className: "size-3 rounded-full border border-border/80 bg-muted shadow-sm transition-colors group-hover/kinetic:bg-amber-400/80" }),
            /* @__PURE__ */ jsx("span", { className: "size-3 rounded-full border border-border/80 bg-muted shadow-sm transition-colors group-hover/kinetic:bg-emerald-400/80" })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "min-w-0 flex-1 text-center", children: /* @__PURE__ */ jsx("span", { className: "inline-flex max-w-full items-center rounded-[var(--radius-md)] border border-border/50 bg-muted/35 px-4 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-muted-foreground", children: /* @__PURE__ */ jsx("span", { className: "truncate", translate: "no", children: title }) }) }),
          /* @__PURE__ */ jsx("div", { className: "hidden min-w-20 justify-end sm:flex", children: status && /* @__PURE__ */ jsx("span", { className: "rounded-full border border-border/55 bg-background/65 px-2 py-0.5 font-mono text-[10px] uppercase text-muted-foreground", children: status }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "relative flex-1 overflow-hidden bg-gradient-to-br from-background/55 via-background/25 to-muted/28 p-6 sm:p-8", children: [
          /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--neutral-6)_1px,transparent_1px),linear-gradient(to_bottom,var(--neutral-6)_1px,transparent_1px)] bg-[size:16px_24px] opacity-45"
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              "aria-hidden": "true",
              className: "pointer-events-none absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-background/80 to-transparent"
            }
          ),
          /* @__PURE__ */ jsx("div", { className: "relative z-10 h-full w-full", children })
        ] })
      ]
    }
  );
}
function KineticMorphSurface({
  activeKey,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group/kinetic relative overflow-hidden rounded-[var(--radius-panel)] border border-border/65 bg-background/80 p-3 shadow-glass-md backdrop-blur-2xl transition-[border-color,box-shadow,background-color] duration-500 hover:border-foreground/20 hover:bg-background/92 hover:shadow-glass-lg sm:p-4 lg:p-5",
        className
      ),
      "data-active-key": activeKey,
      "data-taste": "nebutra-morph-surface",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--neutral-8)_1px,transparent_0)] bg-[length:20px_20px] opacity-[0.10]"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-x-0 top-0 h-36 bg-gradient-to-b from-primary/12 via-primary/4 to-transparent",
            style: { maskImage: "linear-gradient(to bottom, black 45%, transparent 100%)" }
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative z-10", children })
      ]
    }
  );
}
function KineticSignalMarquee({
  eyebrow,
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group/kinetic relative mx-auto overflow-hidden rounded-[var(--radius-panel)] border border-border/55 bg-background/72 px-3 py-8 shadow-glass-md backdrop-blur-2xl sm:px-5",
        className
      ),
      "data-taste": "nebutra-provider-grid",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--neutral-6)_1px,transparent_1px),linear-gradient(to_bottom,var(--neutral-6)_1px,transparent_1px)] bg-[size:32px_32px] opacity-25"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-y-0 left-0 w-28 bg-gradient-to-r from-background via-background/90 to-transparent z-20"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-y-0 right-0 w-28 bg-gradient-to-l from-background via-background/90 to-transparent z-20"
          }
        ),
        eyebrow && /* @__PURE__ */ jsx("div", { className: "relative z-30 mb-6 text-center font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground", children: eyebrow }),
        /* @__PURE__ */ jsx("div", { className: "relative z-10", children })
      ]
    }
  );
}
function KineticCommandBox({
  command,
  copyLabel,
  copiedLabel,
  className,
  ...props
}) {
  const [copied, setCopied] = useState(false);
  const handleCopy = async () => {
    await navigator.clipboard.writeText(command);
    setCopied(true);
    window.setTimeout(() => setCopied(false), 2e3);
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "group/kinetic relative flex flex-col items-stretch overflow-hidden rounded-[var(--radius-xl)] border border-border/65 bg-background/82 p-1.5 shadow-glass-sm backdrop-blur-2xl transition-[transform,border-color,box-shadow,background-color] duration-500 hover:-translate-y-1 hover:border-foreground/25 hover:bg-background/92 hover:shadow-glass-md sm:flex-row sm:items-center",
        className
      ),
      "data-taste": "nebutra-texture-command",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,var(--neutral-8)_1px,transparent_0)] bg-[length:16px_16px] opacity-[0.10]"
          }
        ),
        /* @__PURE__ */ jsxs("code", { className: "relative z-10 flex-1 overflow-x-auto whitespace-nowrap px-4 py-3.5 font-mono text-xs text-foreground sm:px-5 sm:text-sm md:text-base", children: [
          /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "$" }),
          " ",
          command
        ] }),
        /* @__PURE__ */ jsxs(
          "button",
          {
            type: "button",
            onClick: handleCopy,
            className: "relative z-10 mt-2 flex shrink-0 cursor-pointer items-center justify-center gap-2 rounded-[var(--radius-lg)] border border-primary/20 bg-foreground px-5 py-2.5 text-sm font-medium text-background shadow-sheen transition-[transform,opacity] hover:-translate-y-px hover:opacity-90 sm:mt-0",
            children: [
              copied ? /* @__PURE__ */ jsx(Check, { className: "size-4" }) : /* @__PURE__ */ jsx(Copy, { className: "size-4" }),
              copied ? copiedLabel : copyLabel
            ]
          }
        )
      ]
    }
  );
}
function KineticStepRail({ className, children, ...props }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "relative overflow-hidden rounded-[var(--radius-panel)] border border-border/65 bg-background/78 p-6 shadow-glass-md backdrop-blur-2xl md:p-10",
        className
      ),
      "data-taste": "nebutra-grid-beam",
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,var(--neutral-6)_1px,transparent_1px),linear-gradient(to_bottom,var(--neutral-6)_1px,transparent_1px)] bg-[size:36px_36px] opacity-30"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute left-8 right-8 top-[5.7rem] hidden h-px bg-gradient-to-r from-transparent via-primary/45 to-transparent md:block"
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": "true",
            className: "pointer-events-none absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-primary/35 to-transparent md:hidden"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "relative z-10", children })
      ]
    }
  );
}
function KineticStep({
  icon: Icon,
  index,
  title,
  description,
  phaseLabel,
  className,
  ...props
}) {
  const formatted = String(index).padStart(2, "0");
  return /* @__PURE__ */ jsxs(
    "article",
    {
      className: cn(
        "group/kinetic relative flex h-full flex-col items-center rounded-[var(--radius-xl)] border border-border/60 bg-background/82 p-5 text-center shadow-ambient-md backdrop-blur-xl transition-[transform,border-color,box-shadow] duration-500 hover:-translate-y-1 hover:border-foreground/25 hover:shadow-ambient-lg",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative mb-6 grid size-16 place-items-center rounded-[var(--radius-xl)] border border-border/65 bg-background shadow-glass-sm", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: "absolute -right-2 -top-2 rounded-full border border-border/60 bg-muted px-2 py-0.5 font-mono text-[10px] text-muted-foreground",
              "aria-hidden": true,
              children: formatted
            }
          ),
          Icon && /* @__PURE__ */ jsx(
            Icon,
            {
              "aria-hidden": true,
              className: "size-7 text-primary transition-colors group-hover/kinetic:text-foreground"
            }
          )
        ] }),
        /* @__PURE__ */ jsx("span", { className: "mb-4 rounded-full border border-primary/20 bg-primary/7 px-3 py-1 font-mono text-[10px] font-semibold uppercase tracking-[0.16em] text-primary", children: phaseLabel ?? `Phase ${formatted}` }),
        /* @__PURE__ */ jsx("h3", { className: "text-lg font-semibold text-foreground", children: title }),
        /* @__PURE__ */ jsx("p", { className: "mt-3 text-sm leading-6 text-muted-foreground text-balance", children: description })
      ]
    }
  );
}
var Slot = React.forwardRef(
  ({ children, className, style, ...props }, ref) => {
    const childArray = React.Children.toArray(children);
    const child = childArray.length === 1 ? childArray[0] : null;
    if (child == null || !React.isValidElement(child)) {
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
    return React.cloneElement(
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
function getIconSizeClass(size, iconSize) {
  if (iconSize === "sm") return "[&>svg]:size-3.5";
  if (iconSize === "md") return "[&>svg]:size-3.5";
  if (iconSize === "lg") return "[&>svg]:size-4";
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
function getSpinnerSizeClass(size, iconSize) {
  if (iconSize === "sm") return "size-3.5";
  if (iconSize === "md") return "size-3.5";
  if (iconSize === "lg") return "size-4";
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
function ButtonContent({ loading, prefix, suffix, size, iconSize, children }) {
  const iconSizeClass = getIconSizeClass(size, iconSize);
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    loading && /* @__PURE__ */ jsx(Spinner, { className: getSpinnerSizeClass(size, iconSize) }),
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
  iconSize,
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
      className: cn(buttonVariants({ variant, size, shape, iconSize }), shadowClass, className),
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
          iconSize,
          children
        }
      )
    }
  );
};
Button.displayName = "Button";

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

// src/utils/primitive-props.ts
function asPlainStyle(style) {
  if (style == null || typeof style === "function") return {};
  return style;
}
function withHtmlProps(Component) {
  return Component;
}
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
  if (asChild && React.isValidElement(children)) {
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
var TabsContext = React.createContext({
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
  const context = React.useMemo(
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
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
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
  const context = React.use(TabsContext);
  const resolvedVariant = variant ?? context.variant;
  const resolvedShape = shape ?? context.shape;
  const resolvedActivateOnFocus = activateOnFocus ?? context.activationMode === "automatic";
  const listContext = React.useMemo(
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
  const context = React.use(TabsContext);
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

// src/primitives/form-control.ts
var formControlFocusClassNames = {
  textarea: "outline-none focus:border-ring focus:ring-[length:var(--textarea-focus-ring-width)] focus:ring-ring/30"};
var formControlInvalidClassNames = {
  textarea: "aria-invalid:border-destructive/60 aria-invalid:focus:border-destructive aria-invalid:focus:ring-destructive/20"};
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
function joinDescriptionIds(...ids) {
  return ids.filter(Boolean).join(" ") || void 0;
}
function isInvalid(error, ariaInvalid) {
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
  const baseId = React.useId();
  const textareaId = id ?? (label || description || typeof error === "string" ? baseId : void 0);
  const resolvedInvalid = isInvalid(error, ariaInvalid);
  const descriptionId = description && textareaId ? `${textareaId}-description` : void 0;
  const errorId = typeof error === "string" && textareaId ? `${textareaId}-error` : void 0;
  const describedBy = joinDescriptionIds(ariaDescribedBy, descriptionId, errorId);
  const handleChange = React.useCallback(
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
function MarkdownRenderer({ content, className }) {
  return /* @__PURE__ */ jsx("div", { className: cn("prose prose-sm dark:prose-invert max-w-none", className), children: /* @__PURE__ */ jsx(
    ReactMarkdown,
    {
      remarkPlugins: [remarkGfm],
      components: {
        // Inline + block code use semantic tokens so they read in light + dark
        // themes without hardcoded slate/blue.
        code(props) {
          const { className: codeClassName, children, ...rest } = props;
          const isBlock = /language-/.test(codeClassName ?? "");
          if (isBlock) {
            return /* @__PURE__ */ jsx(
              "code",
              {
                ...rest,
                className: cn(
                  "block overflow-x-auto rounded-[var(--radius-md)] border border-border bg-muted p-4 font-mono text-foreground text-sm",
                  codeClassName
                ),
                children
              }
            );
          }
          return /* @__PURE__ */ jsx(
            "code",
            {
              ...rest,
              className: cn(
                "rounded bg-muted px-1.5 py-0.5 font-mono text-foreground text-sm",
                codeClassName
              ),
              children
            }
          );
        },
        // Anchor: open external links in a new tab; protect against
        // tabnabbing with rel="noopener noreferrer".
        a({ href, children, ...rest }) {
          const external = typeof href === "string" && /^https?:/.test(href);
          return /* @__PURE__ */ jsx(
            "a",
            {
              href,
              className: "text-primary underline-offset-4 hover:underline",
              ...external ? { target: "_blank", rel: "noopener noreferrer" } : {},
              ...rest,
              children
            }
          );
        },
        blockquote({ children, ...rest }) {
          return /* @__PURE__ */ jsx(
            "blockquote",
            {
              ...rest,
              className: "my-4 border-primary border-l-4 bg-muted py-2 pl-4 text-foreground italic",
              children
            }
          );
        }
      },
      children: content
    }
  ) });
}
function QuoteGlyph(props) {
  return /* @__PURE__ */ jsxs("svg", { viewBox: "0 0 16 16", fill: "currentColor", "aria-hidden": "true", className: props.className, children: [
    /* @__PURE__ */ jsx("title", { children: "Block quote" }),
    /* @__PURE__ */ jsx("path", { d: "M4 4h2l-1.5 4H6v4H2V8l2-4Zm6 0h2l-1.5 4H12v4H8V8l2-4Z" })
  ] });
}
function MarkdownEditor({
  value,
  onChange,
  placeholder = "Write your answer here\u2026",
  minHeight = 250,
  className
}) {
  const [tab, setTab] = useState("write");
  const textareaRef = useRef(null);
  const insertMarkdown = useCallback(
    (before, after = "", forceNewLine = false) => {
      const el = textareaRef.current;
      if (!el) return;
      const start = el.selectionStart;
      const end = el.selectionEnd;
      const selected = value.slice(start, end);
      const needsLeadingNl = forceNewLine && start > 0 && value[start - 1] !== "\n";
      const insert = (needsLeadingNl ? "\n" : "") + before + selected + after;
      const next = value.slice(0, start) + insert + value.slice(end);
      onChange(next);
      requestAnimationFrame(() => {
        el.focus();
        const caretStart = start + (needsLeadingNl ? 1 : 0) + before.length;
        el.setSelectionRange(caretStart, caretStart + selected.length);
      });
    },
    [value, onChange]
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("overflow-hidden rounded-[var(--radius-md)] border border-border", className),
      children: [
        /* @__PURE__ */ jsxs(Tabs, { value: tab, onValueChange: (v) => setTab(v), className: "w-full", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-2 border-border border-b bg-muted/30 px-3 py-2", children: [
            /* @__PURE__ */ jsxs(TabsList, { className: "grid w-fit grid-cols-2", children: [
              /* @__PURE__ */ jsxs(TabsTrigger, { value: "write", className: "text-xs", children: [
                /* @__PURE__ */ jsx(Pencil, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
                "Write"
              ] }),
              /* @__PURE__ */ jsxs(TabsTrigger, { value: "preview", className: "text-xs", children: [
                /* @__PURE__ */ jsx(FileText, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
                "Preview"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-1", children: [
              /* @__PURE__ */ jsx(ToolbarButton, { "aria-label": "Bold (Ctrl+B)", onClick: () => insertMarkdown("**", "**"), children: /* @__PURE__ */ jsx(TextBold, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsx(ToolbarButton, { "aria-label": "Italic (Ctrl+I)", onClick: () => insertMarkdown("*", "*"), children: /* @__PURE__ */ jsx(TextItalic, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsx(ToolbarButton, { "aria-label": "Inline code", onClick: () => insertMarkdown("`", "`"), children: /* @__PURE__ */ jsx(Code, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsx(ToolbarButton, { "aria-label": "Heading", onClick: () => insertMarkdown("\n## ", "", true), children: /* @__PURE__ */ jsx(Hash, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsx(
                ToolbarButton,
                {
                  "aria-label": "Block quote",
                  onClick: () => insertMarkdown("\n> ", "", true),
                  children: /* @__PURE__ */ jsx(QuoteGlyph, { className: "h-3.5 w-3.5" })
                }
              ),
              /* @__PURE__ */ jsx(
                ToolbarButton,
                {
                  "aria-label": "Bullet list",
                  onClick: () => insertMarkdown("\n- ", "", true),
                  children: /* @__PURE__ */ jsx(ListUnordered, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                }
              ),
              /* @__PURE__ */ jsx(ToolbarButton, { "aria-label": "Link", onClick: () => insertMarkdown("[", "](url)"), children: /* @__PURE__ */ jsx(Link, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsx(ToolbarButton, { "aria-label": "Image", onClick: () => insertMarkdown("![alt text](", ")"), children: /* @__PURE__ */ jsx(Image, { className: "h-3.5 w-3.5", "aria-hidden": "true" }) }),
              /* @__PURE__ */ jsx(
                ToolbarButton,
                {
                  "aria-label": "Fenced code block",
                  onClick: () => insertMarkdown("\n```javascript\n", "\n```\n", true),
                  children: /* @__PURE__ */ jsx(FileText, { className: "h-3.5 w-3.5", "aria-hidden": "true" })
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsx(TabsContent, { value: "write", className: "mt-0", children: /* @__PURE__ */ jsx(
            Textarea,
            {
              ref: textareaRef,
              value,
              onChange: (e) => onChange(e.target.value),
              placeholder,
              className: "resize-none rounded-none border-0 font-mono text-sm shadow-none",
              style: { minHeight }
            }
          ) }),
          /* @__PURE__ */ jsx(TabsContent, { value: "preview", className: "mt-0", children: /* @__PURE__ */ jsx("div", { className: "bg-background p-4", style: { minHeight }, children: value ? /* @__PURE__ */ jsx(MarkdownRenderer, { content: value }) : /* @__PURE__ */ jsx("div", { className: "flex h-32 items-center justify-center text-muted-foreground text-sm italic", children: "Nothing to preview." }) }) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between border-border border-t bg-muted/30 px-3 py-2 text-muted-foreground text-xs", children: [
          /* @__PURE__ */ jsx("span", { children: "Markdown supported" }),
          /* @__PURE__ */ jsxs("span", { children: [
            value.length,
            " characters"
          ] })
        ] })
      ]
    }
  );
}
function ToolbarButton({
  children,
  onClick,
  "aria-label": ariaLabel
}) {
  return /* @__PURE__ */ jsx(
    Button,
    {
      type: "button",
      variant: "ghost",
      size: "sm",
      className: "h-7 w-7 p-0",
      onClick,
      "aria-label": ariaLabel,
      children
    }
  );
}
var Card2 = ({
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
Card2.displayName = "Card";
var CardHeader2 = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("div", { ref, className: cn("flex flex-col space-y-1.5 p-6", className), ...props });
CardHeader2.displayName = "CardHeader";
var CardContent = ({
  className,
  ref,
  ...props
}) => /* @__PURE__ */ jsx("div", { ref, className: cn("p-6 pt-0", className), ...props });
CardContent.displayName = "CardContent";
var Separator = ({
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
Separator.displayName = "Separator";
var sizeClasses = {
  xs: { root: "h-5 w-5", fallback: "text-[8px]" },
  sm: { root: "h-8 w-8", fallback: "text-xs" },
  md: { root: "h-10 w-10", fallback: "text-sm" },
  lg: { root: "h-14 w-14", fallback: "text-xl" },
  xl: { root: "h-20 w-20", fallback: "text-2xl" }
};
var numericAvatarClass = "h-[var(--avatar-size)] w-[var(--avatar-size)]";
var AvatarContext = React.createContext(null);
function isPresetSize(size) {
  return typeof size === "string";
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
      children: shouldRenderConvenienceContent ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
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
  const context = React.use(AvatarContext);
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
function initials(name) {
  return name.split(/\s+/).map((part) => part.charAt(0).toUpperCase()).join("").slice(0, 2);
}
function UserInfo({ author, timestamp, verb = "asked", className }) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn("flex items-start gap-3 rounded-[var(--radius-md)] bg-muted/40 p-3", className),
      children: [
        /* @__PURE__ */ jsxs(Avatar, { className: "h-8 w-8 shrink-0", children: [
          author.avatar && /* @__PURE__ */ jsx(AvatarImage, { src: author.avatar, alt: author.name }),
          /* @__PURE__ */ jsx(AvatarFallback, { children: initials(author.name) })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col gap-1", children: [
          /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-xs", children: [
            verb,
            " ",
            timestamp
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap items-center gap-2", children: [
            /* @__PURE__ */ jsx("span", { className: "font-medium text-foreground text-sm", children: author.name }),
            /* @__PURE__ */ jsx("span", { className: "font-bold text-muted-foreground text-xs tabular-nums", children: author.reputation.toLocaleString() }),
            author.badges.gold > 0 && /* @__PURE__ */ jsx(Badge2, { color: "bg-yellow-500", count: author.badges.gold, label: "gold" }),
            author.badges.silver > 0 && /* @__PURE__ */ jsx(Badge2, { color: "bg-gray-400", count: author.badges.silver, label: "silver" }),
            author.badges.bronze > 0 && /* @__PURE__ */ jsx(Badge2, { color: "bg-amber-600", count: author.badges.bronze, label: "bronze" })
          ] })
        ] })
      ]
    }
  );
}
function Badge2({ color, count, label }) {
  return /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
    /* @__PURE__ */ jsx("span", { "aria-hidden": "true", className: cn("h-2 w-2 rounded-full", color) }),
    /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground text-xs", children: [
      /* @__PURE__ */ jsxs("span", { className: "sr-only", children: [
        label,
        " badges: "
      ] }),
      count
    ] })
  ] });
}
function voteDelta(userVote) {
  if (userVote === "up") return 1;
  if (userVote === "down") return -1;
  return 0;
}
function VoteButtons({
  votes,
  userVote,
  onVote,
  size = "default",
  label = "post"
}) {
  const iconSize = size === "large" ? "h-5 w-5" : "h-4 w-4";
  const scoreSize = size === "large" ? "text-lg" : "text-base";
  const score = votes + voteDelta(userVote);
  return /* @__PURE__ */ jsxs("fieldset", { className: "flex flex-col items-center gap-2", children: [
    /* @__PURE__ */ jsxs("legend", { className: "sr-only", children: [
      "Vote on ",
      label
    ] }),
    /* @__PURE__ */ jsx(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: size === "large" ? "default" : "sm",
        "aria-label": `Upvote ${label}`,
        "aria-pressed": userVote === "up",
        onClick: () => onVote("up"),
        className: cn("p-2", userVote === "up" && "bg-primary/10 text-primary hover:bg-primary/15"),
        children: /* @__PURE__ */ jsx(ChevronUp, { className: iconSize, "aria-hidden": "true" })
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "font-bold tabular-nums",
          scoreSize,
          userVote === "up" && "text-primary",
          userVote === "down" && "text-muted-foreground"
        ),
        "aria-live": "polite",
        "aria-atomic": "true",
        children: score
      }
    ),
    /* @__PURE__ */ jsx(
      Button,
      {
        type: "button",
        variant: "ghost",
        size: size === "large" ? "default" : "sm",
        "aria-label": `Downvote ${label}`,
        "aria-pressed": userVote === "down",
        onClick: () => onVote("down"),
        className: cn(
          "p-2",
          userVote === "down" && "bg-muted text-muted-foreground hover:bg-muted"
        ),
        children: /* @__PURE__ */ jsx(ChevronDown, { className: iconSize, "aria-hidden": "true" })
      }
    )
  ] });
}
function QAPage({
  initialQuestion,
  initialAnswers,
  currentAuthor = {
    name: "you",
    reputation: 0,
    badges: { gold: 0, silver: 0, bronze: 0 }
  },
  onSubmitAnswer,
  onVoteAnswer,
  onVoteQuestion,
  onAcceptAnswer,
  onBookmark,
  className
}) {
  const [question, setQuestion] = useState(initialQuestion);
  const [answers, setAnswers] = useState(initialAnswers);
  const [draft, setDraft] = useState("");
  const handleQuestionVote = (next) => {
    const userVote = question.userVote === next ? null : next;
    setQuestion((q) => ({ ...q, userVote }));
    onVoteQuestion?.(userVote);
  };
  const handleAnswerVote = (id, next) => {
    setAnswers(
      (list) => list.map((a) => a.id === id ? { ...a, userVote: a.userVote === next ? null : next } : a)
    );
    const fresh = answers.find((a) => a.id === id);
    const userVote = fresh && fresh.userVote === next ? null : next;
    onVoteAnswer?.(id, userVote);
  };
  const handleAccept = (id) => {
    setAnswers(
      (list) => list.map((a) => ({ ...a, isAccepted: a.id === id ? !a.isAccepted : false }))
    );
    onAcceptAnswer?.(id);
  };
  const handleBookmarkToggle = () => {
    setQuestion((q) => {
      const next = !q.bookmarked;
      onBookmark?.(next);
      return { ...q, bookmarked: next };
    });
  };
  const handleSubmit = () => {
    const trimmed = draft.trim();
    if (!trimmed) return;
    const newAnswer = {
      id: Date.now(),
      content: trimmed,
      author: currentAuthor,
      votes: 0,
      timestamp: "just now",
      isAccepted: false,
      userVote: null
    };
    setAnswers((list) => [...list, newAnswer]);
    setDraft("");
    onSubmitAnswer?.(trimmed);
  };
  const sortedAnswers = useMemo(() => {
    return [...answers].sort((a, b) => {
      if (a.isAccepted !== b.isAccepted) return a.isAccepted ? -1 : 1;
      const aScore = a.votes + (a.userVote === "up" ? 1 : a.userVote === "down" ? -1 : 0);
      const bScore = b.votes + (b.userVote === "up" ? 1 : b.userVote === "down" ? -1 : 0);
      return bScore - aScore;
    });
  }, [answers]);
  return /* @__PURE__ */ jsxs("div", { className: cn("mx-auto w-full max-w-[var(--container-content)] p-4 md:p-6", className), children: [
    /* @__PURE__ */ jsxs("header", { className: "mb-6", children: [
      /* @__PURE__ */ jsx("h1", { className: "mb-4 font-bold text-2xl leading-tight text-foreground", children: question.title }),
      /* @__PURE__ */ jsxs("div", { className: "mb-4 flex items-center gap-4 text-muted-foreground text-sm", children: [
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Calendar, { "aria-hidden": "true", className: "h-4 w-4" }),
          "Asked ",
          question.timestamp
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-1", children: [
          /* @__PURE__ */ jsx(Eye, { "aria-hidden": "true", className: "h-4 w-4" }),
          "Viewed ",
          question.views.toLocaleString(),
          " times"
        ] })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: question.tags.map((tag) => /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: tag }, tag)) })
    ] }),
    /* @__PURE__ */ jsx(Card2, { className: "mb-8", children: /* @__PURE__ */ jsxs(CardContent, { className: "flex gap-6 p-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
        /* @__PURE__ */ jsx(
          VoteButtons,
          {
            votes: question.votes,
            userVote: question.userVote,
            onVote: handleQuestionVote,
            size: "large",
            label: "question"
          }
        ),
        /* @__PURE__ */ jsx(
          Button,
          {
            type: "button",
            variant: "ghost",
            size: "sm",
            "aria-label": question.bookmarked ? "Remove bookmark" : "Bookmark question",
            "aria-pressed": question.bookmarked,
            onClick: handleBookmarkToggle,
            className: cn("p-2", question.bookmarked && "bg-warning/10 text-warning"),
            children: /* @__PURE__ */ jsx(Bookmark, { className: "h-4 w-4", "aria-hidden": "true" })
          }
        )
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
        /* @__PURE__ */ jsx(MarkdownRenderer, { content: question.content }),
        /* @__PURE__ */ jsx(
          PostActions,
          {
            className: "mt-6",
            author: question.author,
            timestamp: question.timestamp,
            verb: "asked",
            shareLabel: "Share Question",
            editLabel: "Edit Question",
            flagLabel: "Flag Question"
          }
        )
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-6 flex items-center justify-between", children: /* @__PURE__ */ jsxs("h2", { className: "font-semibold text-foreground text-xl", children: [
      answers.length,
      " ",
      answers.length === 1 ? "Answer" : "Answers"
    ] }) }),
    /* @__PURE__ */ jsx("div", { className: "mb-8", children: sortedAnswers.map((answer, index) => /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(Card2, { className: cn("mb-6", answer.isAccepted && "ring-2 ring-success/40"), children: /* @__PURE__ */ jsxs(CardContent, { className: "flex gap-6 p-6", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center gap-4", children: [
          /* @__PURE__ */ jsx(
            VoteButtons,
            {
              votes: answer.votes,
              userVote: answer.userVote,
              onVote: (v) => handleAnswerVote(answer.id, v),
              size: "large",
              label: "answer"
            }
          ),
          /* @__PURE__ */ jsx(
            Button,
            {
              type: "button",
              variant: "ghost",
              size: "sm",
              "aria-label": answer.isAccepted ? "Unaccept this answer" : "Accept this answer",
              "aria-pressed": answer.isAccepted,
              onClick: () => handleAccept(answer.id),
              className: cn("p-2", answer.isAccepted && "bg-success/10 text-success"),
              children: /* @__PURE__ */ jsx(Check, { className: "h-5 w-5", "aria-hidden": "true" })
            }
          ),
          answer.isAccepted && /* @__PURE__ */ jsxs("div", { className: "text-center", children: [
            /* @__PURE__ */ jsx(StarFill, { "aria-hidden": "true", className: "mx-auto mb-1 h-4 w-4 text-success" }),
            /* @__PURE__ */ jsx("span", { className: "font-medium text-success text-xs", children: "Accepted" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
          /* @__PURE__ */ jsx(MarkdownRenderer, { content: answer.content }),
          /* @__PURE__ */ jsx(
            PostActions,
            {
              className: "mt-6",
              author: answer.author,
              timestamp: answer.timestamp,
              verb: "answered",
              shareLabel: "Share Answer",
              editLabel: "Edit Answer",
              flagLabel: "Flag Answer"
            }
          )
        ] })
      ] }) }),
      index < sortedAnswers.length - 1 && /* @__PURE__ */ jsx(Separator, { className: "mb-6" })
    ] }, answer.id)) }),
    /* @__PURE__ */ jsxs(Card2, { children: [
      /* @__PURE__ */ jsx(CardHeader2, { children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground text-lg", children: "Your Answer" }) }),
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(MarkdownEditor, { value: draft, onChange: setDraft, placeholder: "Write your answer here\u2026" }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-xs", children: "Thanks for contributing an answer!" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "button",
                variant: "outline",
                onClick: () => setDraft(""),
                disabled: !draft,
                children: "Discard Draft"
              }
            ),
            /* @__PURE__ */ jsx(Button, { type: "button", onClick: handleSubmit, disabled: !draft.trim(), children: "Post Your Answer" })
          ] })
        ] })
      ] })
    ] })
  ] });
}
function PostActions({
  author,
  timestamp,
  verb,
  shareLabel,
  editLabel,
  flagLabel,
  className
}) {
  return /* @__PURE__ */ jsxs("div", { className: cn("flex flex-wrap items-center justify-between gap-3", className), children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
      /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", size: "sm", className: "text-xs", children: [
        /* @__PURE__ */ jsx(Share, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
        shareLabel
      ] }),
      /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", size: "sm", className: "text-xs", children: [
        /* @__PURE__ */ jsx(Pencil, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
        editLabel
      ] }),
      /* @__PURE__ */ jsxs(Button, { type: "button", variant: "ghost", size: "sm", className: "text-xs", children: [
        /* @__PURE__ */ jsx(Flag, { className: "mr-1 h-3 w-3", "aria-hidden": "true" }),
        flagLabel
      ] })
    ] }),
    /* @__PURE__ */ jsx(UserInfo, { author, timestamp, verb })
  ] });
}
var CollapsibleContext = React.createContext({});
var Collapsible = ({
  className,
  open: openProp,
  defaultOpen,
  onOpenChange,
  disabled,
  children,
  ref,
  ...props
}) => {
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(defaultOpen || false);
  const isControlled = openProp !== void 0;
  const open = isControlled ? openProp : uncontrolledOpen;
  const handleOpenChange = React.useCallback(
    (nextOpen) => {
      if (!isControlled) {
        setUncontrolledOpen(nextOpen);
      }
      onOpenChange?.(nextOpen);
    },
    [isControlled, onOpenChange]
  );
  return /* @__PURE__ */ jsx(CollapsibleContext.Provider, { value: { open, onOpenChange: handleOpenChange, disabled }, children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className,
      "data-state": open ? "open" : "closed",
      "data-disabled": disabled ? "" : void 0,
      ...props,
      children
    }
  ) });
};
Collapsible.displayName = "Collapsible";
var CollapsibleTrigger = ({
  className,
  asChild,
  children,
  ref,
  ...props
}) => {
  const { open, onOpenChange, disabled } = React.use(CollapsibleContext);
  const handleClick = React.useCallback(
    (e) => {
      if (disabled) return;
      onOpenChange?.(!open);
      props.onClick?.(e);
    },
    [disabled, open, onOpenChange, props.onClick]
  );
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, {
      ref,
      onClick: handleClick,
      "data-state": open ? "open" : "closed",
      "data-disabled": disabled ? "" : void 0,
      "aria-expanded": open,
      "aria-controls": props["aria-controls"],
      disabled: disabled || props.disabled,
      ...props
    });
  }
  return /* @__PURE__ */ jsx(
    "button",
    {
      ref,
      type: "button",
      onClick: handleClick,
      "data-state": open ? "open" : "closed",
      "data-disabled": disabled ? "" : void 0,
      "aria-expanded": open,
      disabled: disabled || props.disabled,
      className,
      ...props,
      children
    }
  );
};
CollapsibleTrigger.displayName = "CollapsibleTrigger";
var CollapsibleContent = ({
  className,
  children,
  ref,
  ...props
}) => {
  const { open } = React.use(CollapsibleContext);
  const shouldReduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsx(AnimatePresence, { initial: false, children: open && /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: "collapsed",
      animate: "open",
      exit: "collapsed",
      variants: {
        open: { opacity: 1, height: "auto" },
        collapsed: { opacity: 0, height: 0 }
      },
      transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.3, ease: [0.04, 0.62, 0.23, 0.98] },
      className: "overflow-hidden",
      children: /* @__PURE__ */ jsx("div", { ref, "data-state": "open", className: cn("", className), ...props, children })
    },
    "content"
  ) });
};
CollapsibleContent.displayName = "CollapsibleContent";
var ITEM_BASE_CLASSES = "group flex min-h-8 items-center gap-2 rounded-[var(--radius-md)] px-2.5 py-1.5 text-[13px] leading-5 transition-[background-color,color,box-shadow,transform]";
var ITEM_DEFAULT_CLASSES = "text-sidebar-foreground/72 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground";
var ITEM_ACTIVE_CLASSES = "bg-sidebar-primary text-sidebar-primary-foreground font-medium shadow-sm shadow-sidebar-primary/10 hover:bg-sidebar-primary hover:text-sidebar-primary-foreground";
var ITEM_DISABLED_CLASSES = "opacity-50 pointer-events-none";
var ITEM_COLLAPSED_CLASSES = "justify-center px-0 size-8 mx-auto";
var ICON_CLASSES = "size-4 shrink-0";
function defaultRenderLink({
  href,
  children,
  className,
  "aria-current": ariaCurrent,
  "aria-label": ariaLabel,
  onClick
}) {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href,
      className,
      "aria-current": ariaCurrent,
      "aria-label": ariaLabel,
      onClick,
      children
    }
  );
}
function ItemContent({
  item,
  collapsed,
  showChevron,
  chevronOpen
}) {
  const Icon = item.icon;
  if (collapsed) {
    return /* @__PURE__ */ jsxs(Fragment$1, { children: [
      Icon ? /* @__PURE__ */ jsx(Icon, { className: ICON_CLASSES }) : null,
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: item.label })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    Icon ? /* @__PURE__ */ jsx(Icon, { className: ICON_CLASSES }) : null,
    /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children: item.label }),
    item.badge ? /* @__PURE__ */ jsx(Badge, { variant: item.badge.tone, size: "sm", children: item.badge.label }) : null,
    showChevron ? /* @__PURE__ */ jsx(
      ChevronRight,
      {
        className: cn(
          "size-3.5 shrink-0 text-muted-foreground transition-transform",
          chevronOpen && "rotate-90"
        ),
        "aria-hidden": "true"
      }
    ) : null
  ] });
}
function InteractiveItem({
  item,
  collapsed,
  itemClassName,
  renderLink,
  nested = false
}) {
  const isActive = item.isActive === true;
  const isDisabled = item.disabled === true;
  const classes = cn(
    ITEM_BASE_CLASSES,
    isActive ? ITEM_ACTIVE_CLASSES : ITEM_DEFAULT_CLASSES,
    isDisabled && ITEM_DISABLED_CLASSES,
    collapsed && ITEM_COLLAPSED_CLASSES,
    !collapsed && nested && "pl-9",
    itemClassName
  );
  const ariaCurrent = isActive ? "page" : void 0;
  const ariaDisabled = isDisabled ? true : void 0;
  const inner = /* @__PURE__ */ jsx(ItemContent, { item, collapsed });
  let element;
  if (item.href && !isDisabled) {
    if (item.external) {
      element = /* @__PURE__ */ jsx(
        "a",
        {
          href: item.href,
          target: "_blank",
          rel: "noopener noreferrer",
          className: classes,
          "aria-current": ariaCurrent,
          "aria-label": collapsed ? item.label : void 0,
          onClick: item.onClick,
          children: inner
        }
      );
    } else {
      element = renderLink({
        href: item.href,
        className: classes,
        children: inner,
        "aria-current": ariaCurrent,
        "aria-label": collapsed ? item.label : void 0,
        onClick: item.onClick
      });
    }
  } else {
    element = /* @__PURE__ */ jsx(
      "button",
      {
        type: "button",
        className: cn(classes, "w-full text-left"),
        "aria-current": ariaCurrent,
        "aria-disabled": ariaDisabled,
        "aria-label": collapsed ? item.label : void 0,
        disabled: isDisabled,
        onClick: item.onClick,
        children: inner
      }
    );
  }
  if (collapsed) {
    return /* @__PURE__ */ jsxs(Tooltip, { children: [
      /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: element }),
      /* @__PURE__ */ jsx(TooltipContent, { side: "right", sideOffset: 8, children: item.label })
    ] });
  }
  return element;
}
function ParentItem({
  item,
  collapsed,
  itemClassName,
  renderLink
}) {
  const hasActiveChild = item.children?.some((c) => c.isActive === true) ?? false;
  const [uncontrolledOpen, setUncontrolledOpen] = React.useState(
    item.isActive === true || hasActiveChild
  );
  const isControlled = item.expanded !== void 0 && item.onExpandedChange !== void 0;
  const open = isControlled ? item.expanded : uncontrolledOpen;
  const setOpen = React.useCallback(
    (next) => {
      if (isControlled) {
        item.onExpandedChange?.(next);
      } else {
        setUncontrolledOpen(next);
      }
    },
    [isControlled, item.onExpandedChange]
  );
  if (collapsed) {
    return /* @__PURE__ */ jsx(
      InteractiveItem,
      {
        item,
        collapsed: true,
        itemClassName,
        renderLink
      }
    );
  }
  const isActive = item.isActive === true;
  const isDisabled = item.disabled === true;
  const triggerClasses = cn(
    ITEM_BASE_CLASSES,
    "w-full text-left",
    isActive ? ITEM_ACTIVE_CLASSES : ITEM_DEFAULT_CLASSES,
    isDisabled && ITEM_DISABLED_CLASSES,
    itemClassName
  );
  return /* @__PURE__ */ jsxs(Collapsible, { open, onOpenChange: setOpen, children: [
    /* @__PURE__ */ jsx(
      CollapsibleTrigger,
      {
        className: triggerClasses,
        "aria-current": isActive ? "page" : void 0,
        disabled: isDisabled,
        children: /* @__PURE__ */ jsx(ItemContent, { item, collapsed: false, showChevron: true, chevronOpen: open })
      }
    ),
    /* @__PURE__ */ jsx(CollapsibleContent, { children: /* @__PURE__ */ jsx("ul", { className: "mt-1 flex flex-col gap-0.5", children: item.children?.map((child) => /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx(
      InteractiveItem,
      {
        item: child,
        collapsed: false,
        itemClassName,
        renderLink,
        nested: true
      }
    ) }, child.id)) }) })
  ] });
}
function SidebarNav({
  sections,
  collapsed = false,
  className,
  itemClassName,
  header,
  footer,
  renderLink = defaultRenderLink
}) {
  return /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 200, children: /* @__PURE__ */ jsxs(
    "nav",
    {
      "aria-label": "Sidebar",
      "data-ui": "nebutra-sidebar-nav",
      className: cn(
        "flex h-full flex-col",
        collapsed ? "gap-3 px-2 py-3" : "gap-5 px-3 py-4",
        className
      ),
      children: [
        header ? /* @__PURE__ */ jsx("div", { className: "shrink-0", children: header }) : null,
        /* @__PURE__ */ jsx("div", { className: "flex-1 space-y-4 overflow-y-auto", children: sections.map((section) => {
          const visibleActions = !collapsed && section.actions && section.actions.length > 0 ? section.actions.slice(0, 3) : null;
          return /* @__PURE__ */ jsxs("section", { className: "group/section", children: [
            section.label && !collapsed ? /* @__PURE__ */ jsxs("div", { className: "mb-1.5 flex items-center justify-between px-2.5", children: [
              /* @__PURE__ */ jsx("span", { className: "text-[10px] font-semibold uppercase tracking-[0.18em] text-sidebar-foreground/45", children: section.label }),
              visibleActions ? /* @__PURE__ */ jsx("div", { className: "flex items-center gap-0.5 opacity-0 transition-opacity duration-micro group-hover/section:opacity-100 focus-within:opacity-100", children: visibleActions.map((action) => {
                const ActionIcon = action.icon;
                const defaultButton = /* @__PURE__ */ jsx(
                  "button",
                  {
                    type: "button",
                    "aria-label": action.label,
                    title: action.label,
                    onClick: action.onClick,
                    className: "inline-flex size-4 items-center justify-center rounded text-sidebar-foreground/50 transition-colors hover:bg-sidebar-accent hover:text-sidebar-accent-foreground focus-visible:outline-none",
                    children: /* @__PURE__ */ jsx(ActionIcon, { className: "size-3" })
                  }
                );
                return /* @__PURE__ */ jsx("span", { className: "contents", children: action.render ? action.render(defaultButton) : defaultButton }, action.id);
              }) }) : null
            ] }) : null,
            /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-0.5", children: section.items.map((item) => {
              const hasChildren = Array.isArray(item.children) && item.children.length > 0;
              return /* @__PURE__ */ jsx("li", { children: hasChildren ? /* @__PURE__ */ jsx(
                ParentItem,
                {
                  item,
                  collapsed,
                  itemClassName,
                  renderLink
                }
              ) : /* @__PURE__ */ jsx(
                InteractiveItem,
                {
                  item,
                  collapsed,
                  itemClassName,
                  renderLink
                }
              ) }, item.id);
            }) })
          ] }, section.id);
        }) }),
        footer ? /* @__PURE__ */ jsx("div", { className: "shrink-0 border-t border-sidebar-border pt-3", children: footer }) : null
      ]
    }
  ) });
}
var TerminalContext = React.createContext(null);
var variantStyles2 = {
  default: "bg-muted border border-border",
  minimal: "bg-background border border-border",
  glass: "bg-muted backdrop-blur-md border border-border"
};
var TerminalRoot = React.forwardRef(
  ({ className, variant = "default", children, ...props }, ref) => {
    return /* @__PURE__ */ jsx(TerminalContext.Provider, { value: { variant }, children: /* @__PURE__ */ jsx(
      "div",
      {
        ref,
        className: cn(
          "rounded-[var(--radius-xl)] overflow-hidden font-mono text-sm",
          variantStyles2[variant],
          className
        ),
        ...props,
        children
      }
    ) });
  }
);
TerminalRoot.displayName = "Terminal";
var TerminalHeader = React.forwardRef(
  ({ className, title, showControls = true, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "flex items-center gap-2 px-4 py-3 border-b border-border bg-muted",
          className
        ),
        ...props,
        children: [
          showControls && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5", children: [
            /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-red-500/80", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-yellow-500/80", "aria-hidden": true }),
            /* @__PURE__ */ jsx("span", { className: "w-3 h-3 rounded-full bg-green-500/80", "aria-hidden": true })
          ] }),
          title && /* @__PURE__ */ jsx("span", { className: "ml-2 text-xs text-muted-foreground", children: title }),
          children
        ]
      }
    );
  }
);
TerminalHeader.displayName = "Terminal.Header";
var TerminalBody = React.forwardRef(
  ({ className, children, ...props }, ref) => {
    return /* @__PURE__ */ jsx("div", { ref, className: cn("p-4 space-y-1", className), ...props, children });
  }
);
TerminalBody.displayName = "Terminal.Body";
var TerminalLine = React.forwardRef(
  ({ className, prompt = "$", output = false, highlight = false, children, ...props }, ref) => {
    return /* @__PURE__ */ jsxs(
      "div",
      {
        ref,
        className: cn(
          "flex items-start gap-2",
          highlight && "bg-muted -mx-2 px-2 py-0.5 rounded",
          className
        ),
        ...props,
        children: [
          !output && /* @__PURE__ */ jsx("span", { className: "text-emerald-400 shrink-0 select-none", children: prompt }),
          /* @__PURE__ */ jsx("span", { className: cn("flex-1", output ? "text-muted-foreground" : "text-muted-foreground"), children })
        ]
      }
    );
  }
);
TerminalLine.displayName = "Terminal.Line";
var Terminal = Object.assign(TerminalRoot, {
  Header: TerminalHeader,
  Body: TerminalBody,
  Line: TerminalLine
});
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
  return React.useSyncExternalStore(subscribePlatform, getClientPlatform, () => "apple");
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
function computeInitials(user) {
  if (user.initials && user.initials.trim().length > 0) {
    return user.initials.toUpperCase().slice(0, 2);
  }
  const source = (user.name ?? "").trim() || (user.email ?? "").trim();
  if (!source) return "?";
  const tokens = source.split(/\s+/).filter(Boolean);
  if (tokens.length >= 2) {
    const first = tokens[0]?.[0] ?? "";
    const second = tokens[1]?.[0] ?? "";
    return (first + second).toUpperCase();
  }
  return source.slice(0, 2).toUpperCase();
}
function DefaultTrigger({ user }) {
  const initials2 = computeInitials(user);
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      "aria-label": "Open user menu",
      className: cn(
        "inline-flex h-8 w-8 shrink-0 items-center justify-center overflow-hidden rounded-full",
        "outline-none transition-[box-shadow,opacity] hover:opacity-90",
        "",
        "hover:ring-1 hover:ring-border"
      ),
      children: /* @__PURE__ */ jsxs(Avatar, { size: "sm", children: [
        user.avatarUrl ? /* @__PURE__ */ jsx(AvatarImage, { src: user.avatarUrl, alt: user.name }) : null,
        /* @__PURE__ */ jsx(AvatarFallback, { size: "sm", className: "bg-primary text-white", children: initials2 })
      ] })
    }
  );
}
function UserMenuItemContent({ item }) {
  const Icon = item.icon;
  return /* @__PURE__ */ jsxs(Fragment$1, { children: [
    Icon ? /* @__PURE__ */ jsx(Icon, { className: "mr-2 h-4 w-4 shrink-0", "aria-hidden": true }) : null,
    /* @__PURE__ */ jsx("span", { className: "flex-1 truncate", children: item.label }),
    item.shortcut ? /* @__PURE__ */ jsx(Kbd, { className: "ml-2", small: true, children: item.shortcut }) : null
  ] });
}
function UserMenu(props) {
  const {
    user,
    groups,
    workspaceSlot,
    renderTrigger,
    renderLink,
    className,
    align = "end"
  } = props;
  const initials2 = computeInitials(user);
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: renderTrigger ? renderTrigger(user) : /* @__PURE__ */ jsx(DefaultTrigger, { user }) }),
    /* @__PURE__ */ jsxs(DropdownMenuContent, { align, sideOffset: 8, className: cn("w-[280px] p-1", className), children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 p-3", children: [
        /* @__PURE__ */ jsxs(Avatar, { size: "md", children: [
          user.avatarUrl ? /* @__PURE__ */ jsx(AvatarImage, { src: user.avatarUrl, alt: user.name }) : null,
          /* @__PURE__ */ jsx(AvatarFallback, { size: "md", className: "bg-primary text-white", children: initials2 })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
          /* @__PURE__ */ jsx("span", { className: "truncate text-sm font-medium text-foreground", children: user.name }),
          user.email ? /* @__PURE__ */ jsx("span", { className: "truncate text-xs text-muted-foreground", children: user.email }) : null
        ] })
      ] }),
      /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
      workspaceSlot ? /* @__PURE__ */ jsxs(Fragment$1, { children: [
        /* @__PURE__ */ jsx("div", { className: "px-1 py-1", children: workspaceSlot }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {})
      ] }) : null,
      groups.map((group, groupIndex) => {
        const isLastGroup = groupIndex === groups.length - 1;
        return /* @__PURE__ */ jsxs(React.Fragment, { children: [
          group.label ? /* @__PURE__ */ jsx("div", { className: "px-2 py-1 text-xs font-medium uppercase tracking-wider text-muted-foreground", children: group.label }) : null,
          group.items.map((item) => {
            const itemClassName = cn(
              "flex w-full cursor-pointer items-center",
              item.destructive && "text-destructive focus:bg-destructive focus:text-destructive-foreground data-[highlighted]:bg-destructive data-[highlighted]:text-destructive-foreground"
            );
            if (item.href && !item.disabled) {
              const linkContent = /* @__PURE__ */ jsx(UserMenuItemContent, { item });
              const linkElement = renderLink ? renderLink({ href: item.href, children: linkContent }) : /* @__PURE__ */ jsx("a", { href: item.href, children: linkContent });
              return /* @__PURE__ */ jsx(
                DropdownMenuItem,
                {
                  className: itemClassName,
                  onClick: item.onSelect,
                  render: linkElement
                },
                item.id
              );
            }
            return /* @__PURE__ */ jsx(
              DropdownMenuItem,
              {
                className: itemClassName,
                disabled: item.disabled,
                onClick: () => {
                  if (!item.disabled) item.onSelect?.();
                },
                children: /* @__PURE__ */ jsx(UserMenuItemContent, { item })
              },
              item.id
            );
          }),
          !isLastGroup ? /* @__PURE__ */ jsx(DropdownMenuSeparator, {}) : null
        ] }, group.id);
      })
    ] })
  ] });
}
UserMenu.displayName = "UserMenu";
function getInitials(workspace) {
  if (workspace.initials) return workspace.initials.slice(0, 2).toUpperCase();
  const trimmed = workspace.name.trim();
  if (!trimmed) return "??";
  const parts = trimmed.split(/\s+/).filter(Boolean);
  if (parts.length >= 2) {
    return `${parts[0]?.[0] ?? ""}${parts[1]?.[0] ?? ""}`.toUpperCase();
  }
  return trimmed.slice(0, 2).toUpperCase();
}
function roleLabel(role) {
  switch (role) {
    case "owner":
      return "Owner";
    case "admin":
      return "Admin";
    case "member":
      return "Member";
    case "guest":
      return "Guest";
  }
}
function WorkspaceAvatar({ workspace, size = "sm", className }) {
  const initials2 = getInitials(workspace);
  return /* @__PURE__ */ jsxs(Avatar, { size, className: cn("rounded-[var(--radius-md)]", className), children: [
    workspace.avatarUrl && /* @__PURE__ */ jsx(
      AvatarImage,
      {
        src: workspace.avatarUrl,
        alt: workspace.name,
        className: "rounded-[var(--radius-md)]"
      }
    ),
    /* @__PURE__ */ jsx(
      AvatarFallback,
      {
        size,
        className: "rounded-[var(--radius-md)] bg-primary text-white font-semibold",
        children: initials2
      }
    )
  ] });
}
function TriggerButton({
  activeWorkspace,
  variant,
  showRoleBadge,
  disabled,
  className,
  ref
}) {
  const isOwner = activeWorkspace.role === "owner";
  if (variant === "compact") {
    return /* @__PURE__ */ jsxs(
      "button",
      {
        ref,
        type: "button",
        "aria-label": "Switch workspace",
        disabled,
        className: cn(
          "inline-flex items-center gap-1 rounded-[var(--radius-md)] p-1 outline-none transition-colors",
          "hover:bg-accent hover:text-accent-foreground",
          "",
          "disabled:cursor-not-allowed disabled:opacity-50",
          className
        ),
        children: [
          /* @__PURE__ */ jsx(WorkspaceAvatar, { workspace: activeWorkspace, size: "sm" }),
          /* @__PURE__ */ jsx(ChevronUpDown, { "aria-hidden": "true", className: "h-3.5 w-3.5 text-muted-foreground" })
        ]
      }
    );
  }
  return /* @__PURE__ */ jsxs(
    "button",
    {
      ref,
      type: "button",
      "aria-label": "Switch workspace",
      disabled,
      className: cn(
        "inline-flex w-full items-center gap-2 rounded-[var(--radius-md)] border border-border bg-background px-2 py-1 text-left outline-none transition-colors",
        "hover:bg-accent hover:text-accent-foreground",
        "",
        "disabled:cursor-not-allowed disabled:opacity-50",
        className
      ),
      children: [
        /* @__PURE__ */ jsx(WorkspaceAvatar, { workspace: activeWorkspace, size: "sm" }),
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 items-center gap-2", children: [
          /* @__PURE__ */ jsx("span", { className: "truncate font-medium text-[13px] text-foreground", children: activeWorkspace.name }),
          showRoleBadge && isOwner && /* @__PURE__ */ jsx(Badge, { variant: "owner", size: "sm", children: "Owner" })
        ] }),
        /* @__PURE__ */ jsx(ChevronUpDown, { "aria-hidden": "true", className: "size-3.5 shrink-0 text-muted-foreground" })
      ]
    }
  );
}
TriggerButton.displayName = "WorkspaceSwitcherTrigger";
function WorkspaceItem({ workspace, isActive, onSelect }) {
  return /* @__PURE__ */ jsxs(
    DropdownMenuItem,
    {
      onClick: onSelect,
      "aria-current": isActive ? "true" : void 0,
      className: "flex items-center gap-2 py-1.5",
      children: [
        /* @__PURE__ */ jsx(WorkspaceAvatar, { workspace, size: "sm" }),
        /* @__PURE__ */ jsxs("div", { className: "flex min-w-0 flex-1 flex-col", children: [
          /* @__PURE__ */ jsx(
            "span",
            {
              className: cn(
                "truncate text-sm text-foreground",
                isActive ? "font-semibold" : "font-medium"
              ),
              children: workspace.name
            }
          ),
          workspace.plan && /* @__PURE__ */ jsxs("span", { className: "truncate text-xs text-muted-foreground", children: [
            workspace.plan,
            workspace.role && workspace.role !== "owner" ? ` \xB7 ${roleLabel(workspace.role)}` : ""
          ] }),
          !workspace.plan && workspace.role && /* @__PURE__ */ jsx("span", { className: "truncate text-xs text-muted-foreground", children: roleLabel(workspace.role) })
        ] }),
        isActive && /* @__PURE__ */ jsx(Check, { "aria-hidden": "true", className: "ml-auto h-4 w-4 shrink-0 text-foreground" })
      ]
    }
  );
}
function WorkspaceSwitcher({
  workspaces,
  activeWorkspaceId,
  onSwitch,
  variant = "expanded",
  footerSlot,
  headerSlot,
  className,
  showRoleBadge = true,
  disabled = false
}) {
  const activeWorkspace = workspaces.find((ws) => ws.id === activeWorkspaceId) ?? workspaces[0];
  const handleSelect = (id) => {
    const result = onSwitch(id);
    if (result instanceof Promise) {
      result.catch((err) => {
        console.error("WorkspaceSwitcher.onSwitch failed:", err);
      });
    }
  };
  if (!activeWorkspace) {
    return /* @__PURE__ */ jsx(
      "div",
      {
        className: cn(
          "inline-flex items-center gap-2 rounded-[var(--radius-md)] border border-dashed border-border px-2 py-1.5 text-sm text-muted-foreground",
          className
        ),
        children: "No workspaces"
      }
    );
  }
  return /* @__PURE__ */ jsxs(DropdownMenu, { children: [
    /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
      TriggerButton,
      {
        activeWorkspace,
        variant,
        showRoleBadge,
        disabled,
        className
      }
    ) }),
    /* @__PURE__ */ jsxs(
      DropdownMenuContent,
      {
        align: "start",
        sideOffset: 6,
        className: "w-[min(20rem,calc(100vw-2rem))] p-1",
        children: [
          headerSlot && /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5", children: headerSlot }),
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {})
          ] }),
          /* @__PURE__ */ jsx("div", { className: "px-2 py-1.5 text-xs font-medium uppercase tracking-wider text-muted-foreground", children: "Workspaces" }),
          /* @__PURE__ */ jsx("div", { className: "max-h-72 overflow-y-auto", children: workspaces.map((ws) => /* @__PURE__ */ jsx(
            WorkspaceItem,
            {
              workspace: ws,
              isActive: ws.id === activeWorkspaceId,
              onSelect: () => handleSelect(ws.id)
            },
            ws.id
          )) }),
          footerSlot && /* @__PURE__ */ jsxs(Fragment$1, { children: [
            /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
            /* @__PURE__ */ jsx("div", { className: "px-1 py-0.5", children: footerSlot })
          ] })
        ]
      }
    )
  ] });
}

export { ArtifactShiftCard, ArtifactShiftCardFooter, ArtifactShiftCardPreview, Card, CardBody, CardDescription, CardFooter, CardHeader, CardIcon, CardRoot, CardTitle, CommandBox, DashboardCommandSurface, DashboardMetricTile, DashboardPanel, GalleryCard, KineticCodePreview, KineticCommandBox, KineticConsoleFrame, KineticFeatureCard, KineticMorphSurface, KineticSignalMarquee, KineticStep, KineticStepRail, MarkdownEditor, MarkdownRenderer, QAPage, SidebarNav, Terminal, TerminalBody, TerminalHeader, TerminalLine, TerminalRoot, UserInfo, UserMenu, VoteButtons, WorkspaceSwitcher };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map