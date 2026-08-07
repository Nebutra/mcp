"use client";
import { Button as Button$1 } from '@lobehub/ui';
export { ActionIcon, ActionIconGroup, Alert, Avatar, Button, Checkbox, DraggablePanel, DraggablePanelBody, DraggablePanelContainer, DraggablePanelFooter, DraggablePanelHeader, Flexbox, Form, FormGroup, FormItem, Highlighter, Image, Input, List, Markdown, Menu, Modal, SearchBar, Segmented, Select, SideNav, Tag, TextArea, Tooltip } from '@lobehub/ui';
export { ChatInputArea, ChatItem, ChatList, MessageInput, MessageModal } from '@lobehub/ui/chat';
export { default as Spotlight } from '@lobehub/ui/es/awesome/Spotlight/Spotlight';
import { motion, AnimatePresence, useReducedMotion, m, LazyMotion, domAnimation } from 'framer-motion';
export { AnimatePresence, LayoutGroup, LazyMotion, MotionConfig, animate, domAnimation, m, motion, useAnimationFrame, useInView, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import { jsx, jsxs, Fragment } from 'react/jsx-runtime';
import { Cross, Bell, ChevronRight, CrossSmall, CheckCircle, PlayCircle, Users, MoreHorizontal, DoubleCheck, Check, FacePlus, PaperAirplane, Paperclip, StopFill, StopCircle, ArrowUp, Microphone, LoaderCircle, EyeOff, Eye, Globe, Brain, FolderClosed } from '@nebutra/icons';
import Image from 'next/image';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';
import * as React5 from 'react';
import React5__default, { useEffectEvent, useId, useState } from 'react';
import { colors, emerge, flow, brandSpring } from '@nebutra/brand';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { cva } from 'class-variance-authority';
import { Tooltip as Tooltip$1 } from '@base-ui/react/tooltip';
import { useAsciiText, slant } from 'react-ascii-text';
import { Popover as Popover$1 } from '@base-ui/react/popover';
import { ReactFlowProvider, ReactFlow, Background, Controls, Panel, Handle, Position } from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import { wouldCreateCycle } from '@nebutra/graph-model';
import { Input as Input$1 } from '@base-ui/react/input';

// src/components/index.ts

// src/shared/animation/motion/tokens.ts
var animationDurations = {
  instant: 0,
  micro: 0.1,
  fast: 0.16,
  standard: 0.2,
  reveal: 0.3,
  page: 0.44
};
var animationEasings = {
  linear: "linear",
  enter: [0, 0, 0.2, 1],
  exit: [0.4, 0, 1, 1],
  standard: [0.4, 0, 0.2, 1],
  emphasized: [0.16, 1, 0.3, 1]
};
var animationSprings = {
  interactive: { type: "spring", stiffness: 380, damping: 34, mass: 0.8 },
  layout: { type: "spring", stiffness: 480, damping: 42, mass: 1 },
  panel: { type: "spring", stiffness: 320, damping: 36, mass: 1 }
};
var animationDistances = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  panel: 32
};
var animationTransitions = {
  instant: { duration: animationDurations.instant },
  micro: { duration: animationDurations.micro, ease: animationEasings.enter },
  standard: { duration: animationDurations.standard, ease: animationEasings.enter },
  reveal: { duration: animationDurations.reveal, ease: animationEasings.emphasized },
  page: { duration: animationDurations.page, ease: animationEasings.emphasized },
  layout: animationSprings.layout,
  panel: animationSprings.panel
};

// src/shared/animation/motion/variants.ts
var fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: animationTransitions.standard },
  exit: { opacity: 0, transition: animationTransitions.micro }
};
var scaleIn = {
  initial: { opacity: 0, scale: 0.96 },
  animate: { opacity: 1, scale: 1, transition: animationTransitions.reveal },
  exit: { opacity: 0, scale: 0.98, transition: animationTransitions.micro }
};
var slideIn = {
  up: {
    initial: { opacity: 0, y: animationDistances.md },
    animate: { opacity: 1, y: 0, transition: animationTransitions.reveal },
    exit: { opacity: 0, y: animationDistances.sm, transition: animationTransitions.micro }
  },
  down: {
    initial: { opacity: 0, y: -animationDistances.md },
    animate: { opacity: 1, y: 0, transition: animationTransitions.reveal },
    exit: { opacity: 0, y: -animationDistances.sm, transition: animationTransitions.micro }
  },
  left: {
    initial: { opacity: 0, x: animationDistances.md },
    animate: { opacity: 1, x: 0, transition: animationTransitions.reveal },
    exit: { opacity: 0, x: animationDistances.sm, transition: animationTransitions.micro }
  },
  right: {
    initial: { opacity: 0, x: -animationDistances.md },
    animate: { opacity: 1, x: 0, transition: animationTransitions.reveal },
    exit: { opacity: 0, x: -animationDistances.sm, transition: animationTransitions.micro }
  }
};
var animatedList = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06, delayChildren: 0.02 } },
  exit: { transition: { staggerChildren: 0.03, staggerDirection: -1 } }
};
var animatedListItem = {
  initial: { opacity: 0, y: animationDistances.sm },
  animate: { opacity: 1, y: 0, transition: animationTransitions.standard },
  exit: { opacity: 0, y: animationDistances.xs, transition: animationTransitions.micro }
};
var modalSurface = {
  initial: { opacity: 0, scale: 0.98, y: animationDistances.sm },
  animate: { opacity: 1, scale: 1, y: 0, transition: animationTransitions.panel },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: animationDistances.xs,
    transition: animationTransitions.micro
  }
};
var drawerSurface = {
  left: {
    initial: { opacity: 0, x: "-100%" },
    animate: { opacity: 1, x: 0, transition: animationTransitions.panel },
    exit: { opacity: 0, x: "-100%", transition: animationTransitions.micro }
  },
  right: {
    initial: { opacity: 0, x: "100%" },
    animate: { opacity: 1, x: 0, transition: animationTransitions.panel },
    exit: { opacity: 0, x: "100%", transition: animationTransitions.micro }
  },
  top: {
    initial: { opacity: 0, y: "-100%" },
    animate: { opacity: 1, y: 0, transition: animationTransitions.panel },
    exit: { opacity: 0, y: "-100%", transition: animationTransitions.micro }
  },
  bottom: {
    initial: { opacity: 0, y: "100%" },
    animate: { opacity: 1, y: 0, transition: animationTransitions.panel },
    exit: { opacity: 0, y: "100%", transition: animationTransitions.micro }
  }
};
var popoverSurface = {
  initial: { opacity: 0, scale: 0.98, y: animationDistances.xs },
  animate: { opacity: 1, scale: 1, y: 0, transition: animationTransitions.standard },
  exit: {
    opacity: 0,
    scale: 0.98,
    y: animationDistances.xs,
    transition: animationTransitions.micro
  }
};
var pageTransition = {
  initial: { opacity: 0, y: animationDistances.sm },
  animate: { opacity: 1, y: 0, transition: animationTransitions.page },
  exit: { opacity: 0, y: -animationDistances.xs, transition: animationTransitions.standard }
};
var reducedMotionVariants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: animationTransitions.instant },
  exit: { opacity: 0, transition: animationTransitions.instant }
};
function useAccessibleVariants(variants, allowTransform = false) {
  const shouldReduceMotion = useReducedMotion();
  return shouldReduceMotion && !allowTransform ? reducedMotionVariants : variants;
}
function FadeIn({ children, ...props }) {
  const variants = useAccessibleVariants(fadeIn);
  return /* @__PURE__ */ jsx(motion.div, { initial: "initial", animate: "animate", exit: "exit", variants, ...props, children });
}
function SlideIn({
  children,
  direction = "up",
  ...props
}) {
  const variants = useAccessibleVariants(slideIn[direction]);
  return /* @__PURE__ */ jsx(motion.div, { initial: "initial", animate: "animate", exit: "exit", variants, ...props, children });
}
function ScaleIn({ children, ...props }) {
  const variants = useAccessibleVariants(scaleIn);
  return /* @__PURE__ */ jsx(motion.div, { initial: "initial", animate: "animate", exit: "exit", variants, ...props, children });
}
function AnimatedCard({ children, ...props }) {
  return /* @__PURE__ */ jsx(ScaleIn, { whileHover: { y: -2 }, whileTap: { scale: 0.99 }, ...props, children });
}
function AnimatedList({ children, ...props }) {
  const containerVariants2 = useAccessibleVariants(animatedList);
  const itemVariants2 = useAccessibleVariants(animatedListItem);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: containerVariants2,
      ...props,
      children: Array.isArray(children) ? children.map((child, index) => /* @__PURE__ */ jsx(motion.div, { variants: itemVariants2, children: child }, index)) : children
    }
  );
}
function AnimatedModal({ children, open, ...props }) {
  const variants = useAccessibleVariants(modalSurface);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open ? /* @__PURE__ */ jsx(motion.div, { initial: "initial", animate: "animate", exit: "exit", variants, ...props, children }) : null });
}
function AnimatedDrawer({
  children,
  open,
  side = "right",
  ...props
}) {
  const variants = useAccessibleVariants(drawerSurface[side]);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open ? /* @__PURE__ */ jsx(motion.div, { initial: "initial", animate: "animate", exit: "exit", variants, ...props, children }) : null });
}
function AnimatedPopover({
  children,
  open,
  ...props
}) {
  const variants = useAccessibleVariants(popoverSurface);
  return /* @__PURE__ */ jsx(AnimatePresence, { children: open ? /* @__PURE__ */ jsx(motion.div, { initial: "initial", animate: "animate", exit: "exit", variants, ...props, children }) : null });
}
function PageTransition({ children, ...props }) {
  const variants = useAccessibleVariants(pageTransition);
  return /* @__PURE__ */ jsx(motion.div, { initial: "initial", animate: "animate", exit: "exit", variants, ...props, children });
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
  20: 80,
  24: 96
};
var primitiveSizing = {
  xs: 20,
  /** Geist button-specific size (24px). Larger than xs by design. */
  tiny: 24,
  sm: 32,
  md: 40,
  lg: 48};
var primitiveRadius = {
  md: 6,
  // Geist default — slightly more rounded than 4px
  lg: 8};
var primitiveFontSize = {
  xs: 12,
  sm: 14,
  base: 16};

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
var overlayClassNames = {
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
  closeButton: `absolute right-4 top-4 rounded-[var(--radius-sm)] opacity-70 ring-offset-background ${overlayFocusRingClassName} transition-opacity duration-[var(--motion-duration-micro)] ease-[var(--ease-out)] hover:opacity-100 disabled:pointer-events-none data-[open]:bg-accent data-[open]:text-muted-foreground motion-reduce:transition-none`
};
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var overlayPrimitiveClassNames = {
  modalSurface: "rounded-[var(--radius-md)] border-border/70 bg-popover/95 text-popover-foreground shadow-xl",
  popoverSurface: "rounded-[var(--radius-md)] border-border/70 bg-popover/95 shadow-md"};
var Dialog = Dialog$1.Root;
var DialogPortal = Dialog$1.Portal;
var DialogTrigger = ({
  asChild,
  children,
  ref,
  ...props
}) => {
  if (asChild && React5.isValidElement(children)) {
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
  if (asChild && React5.isValidElement(children)) {
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
var isImageFile = (file) => file.type.startsWith("image/");
var getFilePreviewKey = (file) => `${file.name}-${file.size}-${file.lastModified}`;
var preventDragDefaults = (e) => {
  e.preventDefault();
  e.stopPropagation();
};
var ImageViewDialog = ({ imageUrl, onClose }) => {
  const shouldReduceMotion = useReducedMotion();
  if (!imageUrl) return null;
  return /* @__PURE__ */ jsx(Dialog, { open: !!imageUrl, onOpenChange: onClose, children: /* @__PURE__ */ jsxs(DialogContent, { className: "p-0 border-none bg-transparent shadow-none max-w-[90vw] md:max-w-[800px]", children: [
    /* @__PURE__ */ jsx(DialogTitle, { className: "sr-only", children: "Image Preview" }),
    /* @__PURE__ */ jsx(
      m.div,
      {
        initial: shouldReduceMotion ? { opacity: 1 } : { opacity: 0, scale: 0.95 },
        animate: { opacity: 1, ...shouldReduceMotion ? {} : { scale: 1 } },
        exit: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, scale: 0.95 },
        transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.2, ease: "easeOut" },
        className: "relative bg-background rounded-[var(--radius-2xl)] overflow-hidden shadow-2xl",
        children: /* @__PURE__ */ jsx(
          Image,
          {
            src: imageUrl,
            alt: "Full preview",
            className: "w-full max-h-[80vh] object-contain rounded-[var(--radius-2xl)]",
            fill: true,
            sizes: "(max-width: 768px) 90vw, 800px"
          }
        )
      }
    )
  ] }) });
};
ImageViewDialog.displayName = "ImageViewDialog";
function PromptAttachmentPreviews({
  files,
  filePreviews,
  isRecording,
  onPreview,
  onRemove
}) {
  if (files.length === 0 || isRecording) return null;
  return /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2 p-0 pb-1 transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-300 motion-reduce:transition-none", children: files.map((file) => {
    const previewKey = getFilePreviewKey(file);
    const preview = filePreviews[previewKey];
    return /* @__PURE__ */ jsx("div", { className: "relative group h-16 w-16", children: isImageFile(file) && preview && /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": `Preview ${file.name}`,
          className: "relative h-16 w-16 rounded-[var(--radius-xl)] overflow-hidden cursor-pointer transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-300 motion-reduce:transition-none",
          onClick: () => onPreview(preview),
          children: /* @__PURE__ */ jsx(
            Image,
            {
              src: preview,
              alt: file.name,
              className: "h-full w-full object-cover",
              fill: true,
              sizes: "64px"
            }
          )
        }
      ),
      /* @__PURE__ */ jsx(
        "button",
        {
          type: "button",
          "aria-label": `Remove ${file.name}`,
          onClick: (event) => {
            event.stopPropagation();
            onRemove(file);
          },
          className: "absolute top-1 right-1 rounded-full bg-black/70 p-0.5 opacity-100 transition-opacity motion-reduce:transition-none",
          children: /* @__PURE__ */ jsx(Cross, { className: "h-3 w-3 text-white" })
        }
      )
    ] }) }, previewKey);
  }) });
}
var Slot = React5.forwardRef(
  ({ children, className, style, ...props }, ref) => {
    const childArray = React5.Children.toArray(children);
    const child = childArray.length === 1 ? childArray[0] : null;
    if (child == null || !React5.isValidElement(child)) {
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
    return React5.cloneElement(
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
  return /* @__PURE__ */ jsxs(Fragment, { children: [
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

// src/utils/primitive-props.ts
function asPlainStyle(style) {
  if (style == null || typeof style === "function") return {};
  return style;
}

// src/primitives/form-control.ts
var formControlFocusClassNames = {
  input: "outline-none focus:border-ring focus:ring-[length:var(--input-focus-ring-width)] focus:ring-ring/30",
  textarea: "outline-none focus:border-ring focus:ring-[length:var(--textarea-focus-ring-width)] focus:ring-ring/30"};
var formControlInvalidClassNames = {
  input: "aria-invalid:border-destructive/60 aria-invalid:focus:border-destructive aria-invalid:focus:ring-destructive/20",
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
  const baseId = React5.useId();
  const textareaId = id ?? (label || description || typeof error === "string" ? baseId : void 0);
  const resolvedInvalid = isInvalid(error, ariaInvalid);
  const descriptionId = description && textareaId ? `${textareaId}-description` : void 0;
  const errorId = typeof error === "string" && textareaId ? `${textareaId}-error` : void 0;
  const describedBy = joinDescriptionIds(ariaDescribedBy, descriptionId, errorId);
  const handleChange = React5.useCallback(
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
  if (asChild && React5.isValidElement(children)) {
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
var MAX_VISUALIZER_BARS = 64;
var VISUALIZER_BAR_STYLES = Array.from({ length: MAX_VISUALIZER_BARS }, (_, index) => ({
  id: `voice-bar-${index}`,
  height: `${15 + index * 37 % 86}%`,
  animationDelay: `${index * 0.05}s`,
  animationDuration: `${0.5 + index * 17 % 6 / 10}s`
}));
var formatRecordingTime = (seconds) => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
};
var VoiceRecorder = ({
  isRecording,
  time,
  visualizerBars = 32
}) => {
  const barStyles = VISUALIZER_BAR_STYLES.slice(
    0,
    Math.min(visualizerBars, VISUALIZER_BAR_STYLES.length)
  );
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex flex-col items-center justify-center w-full transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-300 py-3",
        isRecording ? "opacity-100" : "opacity-0 h-0"
      ),
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
          /* @__PURE__ */ jsx("div", { className: "h-2 w-2 rounded-full bg-red-500 animate-pulse" }),
          /* @__PURE__ */ jsx("span", { className: "font-mono text-sm text-white/80", children: formatRecordingTime(time) })
        ] }),
        /* @__PURE__ */ jsx("div", { className: "w-full h-10 flex items-center justify-center gap-0.5 px-4", children: barStyles.map((bar) => /* @__PURE__ */ jsx(
          "div",
          {
            className: "w-0.5 rounded-full bg-white/50 animate-pulse",
            style: {
              height: bar.height,
              animationDelay: bar.animationDelay,
              animationDuration: bar.animationDuration
            }
          },
          bar.id
        )) })
      ]
    }
  );
};
VoiceRecorder.displayName = "VoiceRecorder";
var noopSetPromptValue = (_value) => {
};
var PromptInputIsLoadingContext = React5__default.createContext(false);
var PromptInputValueContext = React5__default.createContext("");
var PromptInputSetValueContext = React5__default.createContext(noopSetPromptValue);
var PromptInputMaxHeightContext = React5__default.createContext(240);
var PromptInputSubmitContext = React5__default.createContext(void 0);
var PromptInputDisabledContext = React5__default.createContext(false);
function usePromptInput() {
  return {
    isLoading: React5__default.use(PromptInputIsLoadingContext),
    value: React5__default.use(PromptInputValueContext),
    setValue: React5__default.use(PromptInputSetValueContext),
    maxHeight: React5__default.use(PromptInputMaxHeightContext),
    onSubmit: React5__default.use(PromptInputSubmitContext),
    disabled: React5__default.use(PromptInputDisabledContext)
  };
}
var PromptInput = ({
  className,
  isLoading = false,
  maxHeight = 240,
  value,
  onValueChange,
  onSubmit,
  children,
  disabled = false,
  onDragOver,
  onDragLeave,
  onDrop,
  ref
}) => {
  const [internalValue, setInternalValue] = React5__default.useState(value || "");
  const handleChange = (newValue) => {
    setInternalValue(newValue);
    onValueChange?.(newValue);
  };
  const promptValue = value ?? internalValue;
  const setPromptValue = onValueChange ?? handleChange;
  return /* @__PURE__ */ jsx(TooltipProvider, { children: /* @__PURE__ */ jsx(PromptInputIsLoadingContext.Provider, { value: isLoading, children: /* @__PURE__ */ jsx(PromptInputValueContext.Provider, { value: promptValue, children: /* @__PURE__ */ jsx(PromptInputSetValueContext.Provider, { value: setPromptValue, children: /* @__PURE__ */ jsx(PromptInputMaxHeightContext.Provider, { value: maxHeight, children: /* @__PURE__ */ jsx(PromptInputSubmitContext.Provider, { value: onSubmit, children: /* @__PURE__ */ jsx(PromptInputDisabledContext.Provider, { value: disabled, children: /* @__PURE__ */ jsx(
    "div",
    {
      ref,
      className: cn(
        "rounded-[var(--radius-3xl)] border border-input bg-background p-2 shadow-lg transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-300",
        isLoading && "border-destructive/70",
        className
      ),
      onDragOver,
      onDragLeave,
      onDrop,
      children
    }
  ) }) }) }) }) }) }) });
};
PromptInput.displayName = "PromptInput";
var PromptInputTextarea = ({ className, onKeyDown, disableAutosize = false, placeholder, style, ...props }) => {
  const { value, setValue, maxHeight, onSubmit, disabled } = usePromptInput();
  const textareaRef = React5__default.useRef(null);
  React5__default.useEffect(() => {
    if (disableAutosize || !textareaRef.current) return;
    textareaRef.current.style.height = "auto";
    textareaRef.current.style.height = typeof maxHeight === "number" ? `${Math.min(textareaRef.current.scrollHeight, maxHeight)}px` : `min(${textareaRef.current.scrollHeight}px, ${maxHeight})`;
  }, [maxHeight, disableAutosize]);
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      onSubmit?.();
    }
    onKeyDown?.(e);
  };
  return /* @__PURE__ */ jsx(
    Textarea,
    {
      ref: textareaRef,
      value,
      onChange: (e) => setValue(e.target.value),
      onKeyDown: handleKeyDown,
      rows: 1,
      style: { "--textarea-min-height": "2rem", ...style },
      className: cn("resize-none border-0 shadow-none", className),
      disabled,
      placeholder,
      ...props
    }
  );
};
var PromptInputActions = ({
  children,
  className,
  ...props
}) => /* @__PURE__ */ jsx("div", { className: cn("flex items-center gap-2", className), ...props, children });
var PromptInputAction = ({
  tooltip,
  children,
  className,
  side = "top",
  ...props
}) => {
  const { disabled } = usePromptInput();
  return /* @__PURE__ */ jsxs(Tooltip, { ...props, children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, disabled, children }),
    /* @__PURE__ */ jsx(TooltipContent, { side, className: className || "", children: tooltip })
  ] });
};
var CustomDivider = () => /* @__PURE__ */ jsx("div", { className: "relative h-6 w-[1.5px] mx-1", children: /* @__PURE__ */ jsx(
  "div",
  {
    className: "absolute inset-0 bg-gradient-to-t from-transparent via-cyan/40 to-transparent rounded-full",
    style: {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 40%, 140% 50%, 100% 60%, 100% 100%, 0% 100%, 0% 60%, -40% 50%, 0% 40%)"
    }
  }
) });
var promptModeToneClassName = {
  search: {
    active: "bg-info/15 border-info text-info",
    icon: "text-info",
    label: "text-info"
  },
  think: {
    active: "bg-indigo-500/15 border-indigo-500 text-indigo-500",
    icon: "text-indigo-500",
    label: "text-indigo-500"
  },
  canvas: {
    active: "bg-warning/15 border-warning text-warning",
    icon: "text-warning",
    label: "text-warning"
  }
};
function PromptModeIcon({ tone, active }) {
  const className = cn("w-4 h-4", active ? promptModeToneClassName[tone].icon : "text-inherit");
  if (tone === "search") return /* @__PURE__ */ jsx(Globe, { className });
  if (tone === "think") return /* @__PURE__ */ jsx(Brain, { className });
  return /* @__PURE__ */ jsx(FolderClosed, { className });
}
function PromptModeButton({
  active,
  label,
  tone,
  onClick
}) {
  const toneClassName = promptModeToneClassName[tone];
  const shouldReduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      onClick,
      className: cn(
        "rounded-full transition-[background-color,border-color,box-shadow,color,opacity,transform] flex items-center gap-1 px-2 py-1 border h-8",
        active ? toneClassName.active : "bg-transparent border-transparent text-muted-foreground hover:text-foreground"
      ),
      children: [
        /* @__PURE__ */ jsx("div", { className: "w-5 h-5 flex items-center justify-center flex-shrink-0", children: /* @__PURE__ */ jsx(
          m.div,
          {
            animate: shouldReduceMotion ? { opacity: active ? 1 : 0.82 } : { rotate: active ? 360 : 0, scale: active ? 1.1 : 1 },
            whileHover: shouldReduceMotion ? { opacity: 1 } : {
              rotate: active ? 360 : 15,
              scale: 1.1,
              transition: { type: "spring", stiffness: 300, damping: 10 }
            },
            transition: shouldReduceMotion ? { duration: 0 } : { type: "spring", stiffness: 260, damping: 25 },
            children: /* @__PURE__ */ jsx(PromptModeIcon, { tone, active })
          }
        ) }),
        /* @__PURE__ */ jsx(AnimatePresence, { children: active && /* @__PURE__ */ jsx(
          m.span,
          {
            initial: shouldReduceMotion ? { opacity: 1 } : { width: 0, opacity: 0 },
            animate: { width: "auto", opacity: 1 },
            exit: shouldReduceMotion ? { opacity: 0 } : { width: 0, opacity: 0 },
            transition: shouldReduceMotion ? { duration: 0 } : { duration: 0.2 },
            className: cn(
              "text-xs overflow-hidden whitespace-nowrap flex-shrink-0",
              toneClassName.label
            ),
            children: label
          }
        ) })
      ]
    }
  );
}
function PromptModeActions({
  uploadInputRef,
  isRecording,
  modes,
  onToggleMode,
  onToggleCanvas,
  onProcessFile
}) {
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "flex items-center gap-1 transition-opacity duration-300",
        isRecording ? "opacity-0 invisible h-0" : "opacity-100 visible"
      ),
      children: [
        /* @__PURE__ */ jsx(PromptInputAction, { tooltip: "Upload image", children: /* @__PURE__ */ jsx(
          "button",
          {
            type: "button",
            "aria-label": "Upload image",
            onClick: () => uploadInputRef.current?.click(),
            className: "flex h-8 w-8 text-muted-foreground cursor-pointer items-center justify-center rounded-full transition-colors hover:bg-accent hover:text-foreground",
            disabled: isRecording,
            children: /* @__PURE__ */ jsx(Paperclip, { className: "h-5 w-5 transition-colors" })
          }
        ) }),
        /* @__PURE__ */ jsx(
          "input",
          {
            ref: uploadInputRef,
            type: "file",
            className: "hidden",
            onChange: (event) => {
              const file = event.target.files?.[0];
              if (file) onProcessFile(file);
              if (event.target) event.target.value = "";
            },
            accept: "image/*",
            "aria-label": "Upload image"
          }
        ),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center", children: [
          /* @__PURE__ */ jsx(
            PromptModeButton,
            {
              active: modes.search,
              label: "Search",
              tone: "search",
              onClick: () => onToggleMode("search")
            }
          ),
          /* @__PURE__ */ jsx(CustomDivider, {}),
          /* @__PURE__ */ jsx(
            PromptModeButton,
            {
              active: modes.think,
              label: "Think",
              tone: "think",
              onClick: () => onToggleMode("think")
            }
          ),
          /* @__PURE__ */ jsx(CustomDivider, {}),
          /* @__PURE__ */ jsx(
            PromptModeButton,
            {
              active: modes.canvas,
              label: "Canvas",
              tone: "canvas",
              onClick: onToggleCanvas
            }
          )
        ] })
      ]
    }
  );
}
function PromptSubmitAction({
  isLoading,
  isRecording,
  hasContent,
  onActivate
}) {
  const shouldReduceMotion = useReducedMotion();
  return /* @__PURE__ */ jsx(
    PromptInputAction,
    {
      tooltip: isLoading ? "Stop generation" : isRecording ? "Stop recording" : hasContent ? "Send message" : "Voice message",
      children: /* @__PURE__ */ jsx(
        Button,
        {
          variant: "default",
          size: "icon",
          className: cn(
            "h-8 w-8 rounded-full transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-micro",
            isRecording ? "bg-transparent hover:bg-accent text-destructive hover:text-destructive/80" : hasContent ? "bg-primary hover:bg-primary/90 text-primary-foreground" : "bg-transparent hover:bg-accent text-muted-foreground hover:text-foreground"
          ),
          onClick: onActivate,
          disabled: isLoading && !hasContent,
          children: isLoading ? /* @__PURE__ */ jsx(
            StopFill,
            {
              className: cn(
                "h-4 w-4 fill-primary-foreground",
                shouldReduceMotion ? "opacity-100" : "animate-pulse"
              )
            }
          ) : isRecording ? /* @__PURE__ */ jsx(StopCircle, { className: "h-5 w-5 text-destructive" }) : hasContent ? /* @__PURE__ */ jsx(ArrowUp, { className: "h-4 w-4 text-primary-foreground" }) : /* @__PURE__ */ jsx(Microphone, { className: "h-5 w-5 text-primary-foreground transition-colors" })
        }
      )
    }
  );
}
var promptInputBoxInitialState = {
  input: "",
  files: [],
  filePreviews: {},
  selectedImage: null,
  isRecording: false,
  recordingTime: 0,
  showSearch: false,
  showThink: false,
  showCanvas: false
};
function promptInputBoxReducer(state, action) {
  switch (action.type) {
    case "set-input":
      return { ...state, input: action.value };
    case "set-active-file":
      return { ...state, files: [action.file], filePreviews: {} };
    case "set-file-preview":
      return { ...state, filePreviews: { [action.previewKey]: action.preview } };
    case "remove-file": {
      const nextPreviews = { ...state.filePreviews };
      delete nextPreviews[action.previewKey];
      return {
        ...state,
        filePreviews: nextPreviews,
        files: state.files.filter((file) => getFilePreviewKey(file) !== action.previewKey)
      };
    }
    case "set-selected-image":
      return { ...state, selectedImage: action.imageUrl };
    case "toggle-mode":
      if (action.mode === "search") {
        return { ...state, showSearch: !state.showSearch, showThink: false };
      }
      if (action.mode === "think") {
        return { ...state, showSearch: false, showThink: !state.showThink };
      }
      return { ...state, showCanvas: !state.showCanvas };
    case "start-recording":
      return { ...state, recordingTime: 0, isRecording: true };
    case "tick-recording":
      return { ...state, recordingTime: state.recordingTime + 1 };
    case "stop-recording":
      return { ...state, isRecording: false, recordingTime: 0 };
    case "reset-composer":
      return { ...state, input: "", files: [], filePreviews: {} };
  }
}
var PromptInputBox = (props) => {
  const {
    onSend = () => {
    },
    isLoading = false,
    placeholder = "Type your message here...",
    className,
    ref
  } = props;
  const [state, dispatch] = React5__default.useReducer(promptInputBoxReducer, promptInputBoxInitialState);
  const {
    input,
    files,
    filePreviews,
    selectedImage,
    isRecording,
    recordingTime,
    showSearch,
    showThink,
    showCanvas
  } = state;
  const uploadInputRef = React5__default.useRef(null);
  const promptBoxRef = React5__default.useRef(null);
  const handleToggleChange = (mode) => dispatch({ type: "toggle-mode", mode });
  const handleCanvasToggle = () => dispatch({ type: "toggle-mode", mode: "canvas" });
  const processFile = (file) => {
    if (!isImageFile(file)) {
      return;
    }
    if (file.size > 10 * 1024 * 1024) {
      return;
    }
    const previewKey = getFilePreviewKey(file);
    dispatch({ type: "set-active-file", file });
    const reader = new FileReader();
    reader.onload = (e) => {
      const preview = e.target?.result;
      if (typeof preview === "string") {
        dispatch({ type: "set-file-preview", previewKey, preview });
      }
    };
    reader.readAsDataURL(file);
  };
  const handleDrop = (e) => {
    preventDragDefaults(e);
    const droppedFiles = Array.from(e.dataTransfer.files);
    const firstFile = droppedFiles.find((file) => isImageFile(file));
    if (firstFile) processFile(firstFile);
  };
  const handleRemoveFile = (fileToRemove) => {
    const previewKey = getFilePreviewKey(fileToRemove);
    dispatch({ type: "remove-file", previewKey });
  };
  const openImageModal = (imageUrl) => dispatch({ type: "set-selected-image", imageUrl });
  const handlePasteEvent = useEffectEvent((e) => {
    const items = e.clipboardData?.items;
    if (!items) return;
    for (const item of Array.from(items)) {
      if (item.type.includes("image")) {
        const file = item.getAsFile();
        if (file) {
          e.preventDefault();
          processFile(file);
          break;
        }
      }
    }
  });
  React5__default.useEffect(() => {
    const handlePaste = (e) => handlePasteEvent(e);
    document.addEventListener("paste", handlePaste);
    return () => document.removeEventListener("paste", handlePaste);
  }, []);
  React5__default.useEffect(() => {
    if (!isRecording) return;
    const timer = window.setInterval(() => dispatch({ type: "tick-recording" }), 1e3);
    return () => window.clearInterval(timer);
  }, [isRecording]);
  const handleSubmit = () => {
    if (input.trim() || files.length > 0) {
      let messagePrefix = "";
      if (showSearch) messagePrefix = "[Search: ";
      else if (showThink) messagePrefix = "[Think: ";
      else if (showCanvas) messagePrefix = "[Canvas: ";
      const formattedInput = messagePrefix ? `${messagePrefix}${input}]` : input;
      onSend(formattedInput, files);
      dispatch({ type: "reset-composer" });
    }
  };
  const startRecording = () => dispatch({ type: "start-recording" });
  const stopRecording = () => {
    onSend(`[Voice message - ${recordingTime} seconds]`, []);
    dispatch({ type: "stop-recording" });
  };
  const hasContent = input.trim() !== "" || files.length > 0;
  return /* @__PURE__ */ jsxs(LazyMotion, { features: domAnimation, children: [
    /* @__PURE__ */ jsxs(
      PromptInput,
      {
        value: input,
        onValueChange: (value) => dispatch({ type: "set-input", value }),
        isLoading,
        onSubmit: handleSubmit,
        className: cn(
          "w-full bg-background border-input shadow-lg transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-300 ease-in-out",
          isRecording && "border-destructive/70",
          className
        ),
        disabled: isLoading || isRecording,
        ref: ref || promptBoxRef,
        onDragOver: preventDragDefaults,
        onDragLeave: preventDragDefaults,
        onDrop: handleDrop,
        children: [
          /* @__PURE__ */ jsx(
            PromptAttachmentPreviews,
            {
              files,
              filePreviews,
              isRecording,
              onPreview: openImageModal,
              onRemove: handleRemoveFile
            }
          ),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: cn(
                "transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-300",
                isRecording ? "h-0 overflow-hidden opacity-0" : "opacity-100"
              ),
              children: /* @__PURE__ */ jsx(
                PromptInputTextarea,
                {
                  placeholder: showSearch ? "Search the web..." : showThink ? "Think deeply..." : showCanvas ? "Create on canvas..." : placeholder,
                  className: "text-base"
                }
              )
            }
          ),
          isRecording && /* @__PURE__ */ jsx(VoiceRecorder, { isRecording, time: recordingTime }),
          /* @__PURE__ */ jsxs(PromptInputActions, { className: "flex items-center justify-between gap-2 p-0 pt-2", children: [
            /* @__PURE__ */ jsx(
              PromptModeActions,
              {
                uploadInputRef,
                isRecording,
                modes: { search: showSearch, think: showThink, canvas: showCanvas },
                onToggleMode: handleToggleChange,
                onToggleCanvas: handleCanvasToggle,
                onProcessFile: processFile
              }
            ),
            /* @__PURE__ */ jsx(
              PromptSubmitAction,
              {
                isLoading,
                isRecording,
                hasContent,
                onActivate: () => {
                  if (isRecording) stopRecording();
                  else if (hasContent) handleSubmit();
                  else startRecording();
                }
              }
            )
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsx(
      ImageViewDialog,
      {
        imageUrl: selectedImage,
        onClose: () => dispatch({ type: "set-selected-image", imageUrl: null })
      }
    )
  ] });
};
PromptInputBox.displayName = "PromptInputBox";
var emergeTransition = {
  duration: emerge.transition.duration,
  ease: [0.16, 1, 0.3, 1]
};
var flowTransition = {
  duration: flow.transition.duration,
  ease: [0, 0, 0.2, 1]
};
var defaultSpringTransition = {
  type: "spring",
  stiffness: brandSpring.default.stiffness,
  damping: brandSpring.default.damping,
  mass: brandSpring.default.mass
};
var PRESETS = {
  emerge: {
    initial: emerge.initial,
    animate: emerge.animate,
    exit: emerge.exit,
    transition: emergeTransition
  },
  flow: {
    initial: flow.initial,
    animate: flow.animate,
    exit: flow.exit,
    transition: flowTransition
  },
  fade: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3 }
  },
  fadeUp: {
    initial: { opacity: 0, y: 16 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 16 },
    transition: defaultSpringTransition
  },
  scale: {
    initial: { opacity: 0, scale: 0.95 },
    animate: { opacity: 1, scale: 1 },
    exit: { opacity: 0, scale: 0.95 },
    transition: defaultSpringTransition
  }
};
var STAGGER = { fast: 0.05, normal: 0.1, slow: 0.2 };
function MotionDiv(props) {
  return /* @__PURE__ */ jsx(LazyMotion, { features: domAnimation, children: /* @__PURE__ */ jsx(m.div, { ...props }) });
}
function AnimateIn(props) {
  const { children, preset = "emerge", delay = 0, duration, inView = false, className } = props;
  const shouldReduce = useReducedMotion();
  const { initial, animate: animate2, exit, transition } = PRESETS[preset];
  const t = {
    ...transition,
    ...delay ? { delay } : {},
    ...duration ? { duration } : {}
  };
  if (shouldReduce) return /* @__PURE__ */ jsx("div", { className, children });
  if (inView) {
    return /* @__PURE__ */ jsx(
      MotionDiv,
      {
        className,
        initial,
        whileInView: animate2,
        exit,
        viewport: { once: true, margin: "-10%" },
        transition: t,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(MotionDiv, { className, initial, animate: animate2, exit, transition: t, children });
}
function AnimateInGroup(props) {
  const { children, stagger = "normal", inView = false, className } = props;
  const shouldReduce = useReducedMotion();
  const variants = {
    initial: {},
    animate: { transition: { staggerChildren: STAGGER[stagger] } }
  };
  if (shouldReduce) return /* @__PURE__ */ jsx("div", { className, children });
  if (inView) {
    return /* @__PURE__ */ jsx(
      MotionDiv,
      {
        className,
        initial: "initial",
        whileInView: "animate",
        viewport: { once: true, margin: "-10%" },
        variants,
        children
      }
    );
  }
  return /* @__PURE__ */ jsx(MotionDiv, { className, initial: "initial", animate: "animate", variants, children });
}
function AsciiText({ text, className = "", font = slant }) {
  const asciiTextRef = useAsciiText({
    font,
    text
  });
  return /* @__PURE__ */ jsx(
    "pre",
    {
      ref: asciiTextRef,
      className: `font-mono leading-none m-0 p-0 ${className}`
    }
  );
}
function Popover({ ...props }) {
  return /* @__PURE__ */ jsx(Popover$1.Root, { "data-slot": "popover", ...props });
}
function PopoverTrigger({ asChild, children, render, ...props }) {
  const renderElement = asChild && React5.isValidElement(children) ? children : render;
  return /* @__PURE__ */ jsx(
    Popover$1.Trigger,
    {
      "data-slot": "popover-trigger",
      render: renderElement,
      ...renderElement ? props : { ...props, children }
    }
  );
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
var TAG_COLOR_MAP = {
  feature: "bg-[hsl(var(--primary))] text-white",
  fix: "bg-[var(--status-success)] text-white",
  breaking: "bg-[var(--status-danger)] text-white",
  improvement: "bg-[var(--status-warning)] text-white",
  security: "bg-[var(--status-danger)] text-white",
  experimental: "bg-[var(--neutral-8)] text-foreground"
};
var getTagColor = (tag) => {
  if (!tag) return "bg-[var(--neutral-7)] text-foreground";
  return TAG_COLOR_MAP[tag.toLowerCase()] || TAG_COLOR_MAP.feature;
};
var getUnreadCount = (entries, lastSeenVersion) => {
  if (!lastSeenVersion) return entries.length;
  const lastSeenIndex = entries.findIndex((entry) => entry.version === lastSeenVersion);
  return lastSeenIndex === -1 ? entries.length : lastSeenIndex;
};
function ChangelogWidget({
  entries,
  changelogUrl = "/changelog",
  className
}) {
  const [isOpen, setIsOpen] = React5.useState(false);
  const [lastSeenVersion, setLastSeenVersion] = React5.useState(null);
  const unreadCount = getUnreadCount(entries, lastSeenVersion);
  const recentEntries = entries.slice(0, 5);
  const latestVersion = recentEntries[0]?.version ?? null;
  const handleOpenChange = (open) => {
    setIsOpen(open);
    if (!open && latestVersion) setLastSeenVersion(latestVersion);
  };
  return /* @__PURE__ */ jsxs(Popover, { open: isOpen, onOpenChange: handleOpenChange, children: [
    /* @__PURE__ */ jsxs(
      PopoverTrigger,
      {
        "aria-label": "View changelog",
        className: cn(
          "relative inline-flex items-center justify-center rounded-[var(--radius-lg)] p-2 transition-colors hover:bg-muted",
          className
        ),
        children: [
          /* @__PURE__ */ jsx(Bell, { className: "h-5 w-5 text-muted-foreground" }),
          unreadCount > 0 && /* @__PURE__ */ jsx("span", { className: "absolute right-0 top-0 flex h-5 w-5 items-center justify-center rounded-full bg-[var(--status-danger)] text-xs font-bold text-white", children: unreadCount > 9 ? "9+" : unreadCount })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(
      PopoverContent,
      {
        align: "end",
        side: "bottom",
        sideOffset: 8,
        className: "w-80 overflow-hidden rounded-[var(--radius-lg)] border-border bg-white p-0 shadow-lg",
        children: [
          /* @__PURE__ */ jsx("div", { className: "bg-gradient-to-r from-[var(--blue-3)] to-[var(--cyan-3)] px-4 py-3", children: /* @__PURE__ */ jsx("h3", { className: "font-semibold text-foreground", children: "What's New" }) }),
          /* @__PURE__ */ jsx("div", { className: "max-h-96 overflow-y-auto", children: recentEntries.length === 0 ? /* @__PURE__ */ jsx("div", { className: "px-4 py-6 text-center text-sm text-muted-foreground", children: "No updates available" }) : recentEntries.map((entry) => /* @__PURE__ */ jsxs(
            "a",
            {
              href: entry.url,
              className: "block border-b border-border px-4 py-3 transition-colors hover:bg-muted",
              children: [
                /* @__PURE__ */ jsx("div", { className: "mb-2 flex items-center justify-between gap-2", children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
                  /* @__PURE__ */ jsxs("span", { className: "font-mono text-xs font-bold text-primary", children: [
                    "v",
                    entry.version
                  ] }),
                  entry.tag && /* @__PURE__ */ jsx(
                    "span",
                    {
                      className: cn(
                        "rounded px-2 py-0.5 text-xs font-medium",
                        getTagColor(entry.tag)
                      ),
                      children: entry.tag
                    }
                  )
                ] }) }),
                /* @__PURE__ */ jsx("p", { className: "mb-1 text-sm font-medium text-foreground", children: entry.title }),
                /* @__PURE__ */ jsx("p", { className: "mb-2 line-clamp-2 text-xs text-muted-foreground", children: entry.excerpt }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: entry.date })
              ]
            },
            entry.version
          )) }),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: changelogUrl,
              onClick: () => handleOpenChange(false),
              className: "flex items-center justify-between border-t border-border bg-background px-4 py-3 text-sm font-medium text-primary transition-colors hover:bg-muted",
              children: [
                /* @__PURE__ */ jsx("span", { children: "View all updates" }),
                /* @__PURE__ */ jsx(ChevronRight, { className: "h-4 w-4" })
              ]
            }
          )
        ]
      }
    )
  ] });
}
var GRAPH_NODE_FLOW_TYPE = "graph-node";
function graphToFlow(graph, edgeIdentity) {
  const nodes = graph.nodes.map((n) => ({
    id: n.id,
    type: GRAPH_NODE_FLOW_TYPE,
    position: { x: n.x, y: n.y },
    data: { node: n }
  }));
  const edges = graph.edges.map((e) => ({
    id: edgeIdentity(e),
    source: e.from,
    target: e.to,
    data: { edge: e }
  }));
  return { nodes, edges };
}
function applyNodePositions(graph, flowNodes) {
  const posById = new Map(flowNodes.map((n) => [n.id, n.position]));
  const nodes = graph.nodes.map((n) => {
    const pos = posById.get(n.id);
    if (!pos || pos.x === n.x && pos.y === n.y) return n;
    return { ...n, x: pos.x, y: pos.y };
  });
  return { ...graph, nodes };
}
function tryAddEdge(graph, connection, opts) {
  if (!connection.source || !connection.target) {
    return { ok: false, reason: "Connection needs both a source and a target node." };
  }
  if (connection.source === connection.target) {
    return { ok: false, reason: "A node cannot connect to itself." };
  }
  const candidate = opts.makeEdge(connection.source, connection.target, connection.targetHandle);
  if (!candidate) {
    return { ok: false, reason: "That connection is not allowed between these nodes." };
  }
  const candidateId = opts.edgeIdentity(candidate);
  if (graph.edges.some((e) => opts.edgeIdentity(e) === candidateId)) {
    return { ok: false, reason: "That connection already exists between these nodes." };
  }
  if (wouldCreateCycle(graph.edges, candidate.from, candidate.to)) {
    return {
      ok: false,
      reason: "That connection would create a cycle. The graph must stay acyclic (DAG)."
    };
  }
  return { ok: true, graph: { ...graph, edges: [...graph.edges, candidate] } };
}
function removeNode(graph, nodeId) {
  return {
    ...graph,
    nodes: graph.nodes.filter((n) => n.id !== nodeId),
    edges: graph.edges.filter((e) => e.from !== nodeId && e.to !== nodeId)
  };
}
function removeFlowEdge(graph, flowEdgeId, edgeIdentity) {
  return {
    ...graph,
    edges: graph.edges.filter((e) => edgeIdentity(e) !== flowEdgeId)
  };
}
var XYFLOW_TOKEN_THEME = {
  ["--xy-background-pattern-color"]: "var(--neutral-6)",
  ["--xy-edge-stroke"]: "var(--neutral-8)",
  ["--xy-connectionline-stroke"]: "var(--neutral-8)",
  ["--xy-handle-background-color"]: "var(--neutral-9)",
  ["--xy-handle-border-color"]: "var(--neutral-7)",
  ["--xy-controls-button-background-color"]: "var(--neutral-2)",
  ["--xy-controls-button-border-color"]: "var(--neutral-7)",
  ["--xy-controls-button-color"]: "var(--neutral-11)"
};
var nodeCardVariants = cva(
  "min-w-[160px] rounded-[var(--radius-lg)] border bg-neutral-2 px-3 py-2 text-neutral-12 shadow-sm transition-colors",
  {
    variants: { ready: { true: "border-success", false: "border-neutral-7" } },
    defaultVariants: { ready: false }
  }
);
function GraphNodeCard({ data }) {
  const view = data.view;
  return /* @__PURE__ */ jsxs("div", { className: nodeCardVariants({ ready: view.ready ?? false }), children: [
    /* @__PURE__ */ jsx(Handle, { type: "target", position: Position.Left }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 text-xs font-medium text-neutral-11 uppercase tracking-wide", children: [
      view.icon,
      view.label
    ] }),
    view.subtitle ? /* @__PURE__ */ jsx("div", { className: "mt-0.5 text-sm text-neutral-12", children: view.subtitle }) : null,
    /* @__PURE__ */ jsx(Handle, { type: "source", position: Position.Right })
  ] });
}
var NODE_TYPES = {
  [GRAPH_NODE_FLOW_TYPE]: GraphNodeCard
};
var REACT_FLOW_PRO_OPTIONS = { hideAttribution: true };
function NodeGraphCanvas({
  graph,
  onChange,
  edgeIdentity,
  makeEdge,
  renderNode,
  readOnly = false,
  className
}) {
  const statusId = useId();
  const [rejection, setRejection] = useState(null);
  const { nodes: graphNodes, edges } = graphToFlow(graph, edgeIdentity);
  const nodes = graphNodes.map((node) => ({
    ...node,
    data: {
      ...node.data,
      view: renderNode(node.data.node)
    }
  }));
  const onNodesChange = (changes) => {
    if (readOnly) return;
    const removed = changes.filter(
      (c) => c.type === "remove"
    );
    if (removed.length > 0) {
      let next = graph;
      for (const r of removed) next = removeNode(next, r.id);
      onChange(next);
      return;
    }
    const positional = changes.some((c) => c.type === "position" && c.dragging === false);
    if (positional) {
      const moved = nodes.map((n) => {
        const change = changes.find((c) => c.type === "position" && c.id === n.id);
        if (change && change.type === "position" && change.position) {
          return { ...n, position: change.position };
        }
        return n;
      });
      onChange(applyNodePositions(graph, moved));
    }
  };
  const onEdgesChange = (changes) => {
    if (readOnly) return;
    const removed = changes.filter(
      (c) => c.type === "remove"
    );
    if (removed.length === 0) return;
    let next = graph;
    for (const r of removed) next = removeFlowEdge(next, r.id, edgeIdentity);
    onChange(next);
  };
  const onConnect = (connection) => {
    if (readOnly) return;
    const result = tryAddEdge(graph, connection, { makeEdge, edgeIdentity });
    if (result.ok) {
      setRejection(null);
      onChange(result.graph);
    } else {
      setRejection(result.reason);
    }
  };
  return /* @__PURE__ */ jsx(AnimateIn, { preset: "emerge", children: /* @__PURE__ */ jsx(
    "div",
    {
      style: XYFLOW_TOKEN_THEME,
      className: cn(
        "relative h-[480px] w-full overflow-hidden rounded-[var(--radius-xl)] border border-neutral-7 bg-neutral-1",
        className
      ),
      children: /* @__PURE__ */ jsx(ReactFlowProvider, { children: /* @__PURE__ */ jsxs(
        ReactFlow,
        {
          nodes,
          edges,
          nodeTypes: NODE_TYPES,
          onNodesChange,
          onEdgesChange,
          onConnect,
          nodesDraggable: !readOnly,
          nodesConnectable: !readOnly,
          elementsSelectable: !readOnly,
          fitView: true,
          proOptions: REACT_FLOW_PRO_OPTIONS,
          children: [
            /* @__PURE__ */ jsx(Background, { color: "var(--neutral-6)" }),
            /* @__PURE__ */ jsx(Controls, { showInteractive: !readOnly }),
            rejection ? /* @__PURE__ */ jsx(Panel, { position: "top-center", children: /* @__PURE__ */ jsxs(
              "div",
              {
                id: statusId,
                role: "alert",
                "aria-live": "assertive",
                className: "flex items-center gap-2 rounded-[var(--radius-md)] border border-destructive bg-destructive/10 px-3 py-2 text-sm text-destructive",
                children: [
                  /* @__PURE__ */ jsx("span", { children: rejection }),
                  /* @__PURE__ */ jsx(
                    Button$1,
                    {
                      size: "small",
                      type: "text",
                      icon: /* @__PURE__ */ jsx(CrossSmall, { size: 14 }),
                      "aria-label": "Dismiss connection error",
                      onClick: () => setRejection(null),
                      children: "Dismiss"
                    }
                  )
                ]
              }
            ) }) : null
          ]
        }
      ) })
    }
  ) });
}
var containerVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};
var itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.4,
      ease: "easeOut"
    }
  }
};
var reducedContainerVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { duration: 0 }
  }
};
var reducedItemVariants = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: { duration: 0 }
  }
};
function OnboardingChecklist({
  title,
  description,
  items,
  videoThumbnailUrl,
  videoUrl,
  className
}) {
  const shouldReduceMotion = useReducedMotion();
  const activeContainerVariants = shouldReduceMotion ? reducedContainerVariants : containerVariants;
  const activeItemVariants = shouldReduceMotion ? reducedItemVariants : itemVariants;
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: "hidden",
      animate: "visible",
      variants: activeContainerVariants,
      className: cn(
        "w-full max-w-4xl mx-auto bg-card text-card-foreground border rounded-[var(--radius-2xl)] shadow-sm p-8 overflow-hidden",
        className
      ),
      children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-1 md:grid-cols-2 gap-8 items-center", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("h2", { className: "text-2xl font-bold tracking-tight", children: title }),
          /* @__PURE__ */ jsx("p", { className: "mt-2 text-muted-foreground", children: description }),
          /* @__PURE__ */ jsx("ul", { className: "mt-6 grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4", children: items.map((item) => /* @__PURE__ */ jsxs(motion.li, { variants: activeItemVariants, className: "flex flex-col", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-start", children: [
              /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" }),
              /* @__PURE__ */ jsx("span", { className: "ml-3 text-sm font-medium", children: item.text })
            ] }),
            item.helperText && item.helperLink && /* @__PURE__ */ jsxs("div", { className: "ml-8 mt-1 text-xs text-muted-foreground", children: [
              item.helperText,
              " ",
              /* @__PURE__ */ jsx(
                "a",
                {
                  href: item.helperLink.href,
                  className: "text-primary underline-offset-4 hover:underline rounded-[var(--radius-sm)]",
                  children: item.helperLink.text
                }
              )
            ] })
          ] }, item.id)) })
        ] }),
        /* @__PURE__ */ jsx(
          motion.div,
          {
            variants: activeItemVariants,
            className: "relative group rounded-[var(--radius-lg)] overflow-hidden cursor-pointer w-full aspect-video",
            children: /* @__PURE__ */ jsxs(Dialog, { children: [
              /* @__PURE__ */ jsx(DialogTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  "aria-label": "Play the video guide",
                  className: "w-full h-full rounded-[var(--radius-lg)]",
                  children: [
                    /* @__PURE__ */ jsx(
                      Image,
                      {
                        src: videoThumbnailUrl,
                        alt: "Video guide thumbnail",
                        className: "w-full h-full object-cover transition-transform duration-300 group-hover:scale-105 motion-reduce:transition-none motion-reduce:group-hover:scale-100",
                        fill: true
                      }
                    ),
                    /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-black/30 flex items-center justify-center", children: /* @__PURE__ */ jsx(PlayCircle, { className: "h-16 w-16 text-white/80 transform transition-[background-color,border-color,box-shadow,color,opacity,transform] duration-300 group-hover:scale-110 group-hover:text-white motion-reduce:transition-none motion-reduce:group-hover:scale-100" }) })
                  ]
                }
              ) }),
              /* @__PURE__ */ jsx(DialogContent, { className: "max-w-3xl p-0 border-0", children: /* @__PURE__ */ jsx("div", { className: "aspect-video", children: /* @__PURE__ */ jsx(
                "iframe",
                {
                  src: videoUrl,
                  title: "Onboarding Video Guide",
                  frameBorder: "0",
                  allow: "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",
                  allowFullScreen: true,
                  className: "w-full h-full rounded-[var(--radius-lg)]"
                }
              ) }) })
            ] })
          }
        )
      ] })
    }
  );
}

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
  return React5.useSyncExternalStore(subscribePlatform, getClientPlatform, () => "apple");
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
function isInvalid2(error, ariaInvalid) {
  return error === true || typeof error === "string" || ariaInvalid === true || ariaInvalid === "true";
}
function isTextAffix(value) {
  return typeof value === "string" && value.trim().length > 0;
}
function joinDescriptionIds2(...ids) {
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
  const baseId = React5.useId();
  const inputRef = React5.useRef(null);
  const descriptionId = description && id ? `${id}-description` : void 0;
  const errorId = typeof error === "string" && id ? `${id}-error` : void 0;
  const prefixDescriptionId = isTextAffix(prefix) ? `${id ?? baseId}-prefix` : void 0;
  const suffixDescriptionId = isTextAffix(suffix) ? `${id ?? baseId}-suffix` : void 0;
  const [internalValue, setInternalValue] = React5.useState(
    typeof defaultValue === "string" || typeof defaultValue === "number" ? String(defaultValue) : ""
  );
  const [passwordVisible, setPasswordVisible] = React5.useState(false);
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
  const resolvedInvalid = isInvalid2(error, ariaInvalid);
  const describedBy = joinDescriptionIds2(
    ariaDescribedBy,
    prefixDescriptionId,
    suffixDescriptionId,
    descriptionId,
    errorId
  );
  const valueProps = isControlled ? { value } : clearable || shortcut || clearOnEscapeEnabled ? { value: currentValue } : { defaultValue };
  const setInputRef = React5.useCallback(
    (node) => {
      const input = node instanceof HTMLInputElement ? node : null;
      inputRef.current = input;
      assignRef(forwardedRef, input);
    },
    [forwardedRef]
  );
  const emitNativeInput = React5.useCallback(
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
  const syncInputValue = React5.useCallback(
    (event) => {
      if (!isControlled) setInternalValue(event.currentTarget.value);
      onValueChange?.(event.currentTarget.value);
      onChange?.(event);
    },
    [isControlled, onChange, onValueChange]
  );
  const handleClear = React5.useCallback(() => {
    emitNativeInput("");
    onClear?.();
    inputRef.current?.focus();
  }, [emitNativeInput, onClear]);
  const handleKeyDown = React5.useCallback(
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
function Avatar({ src, alt, isOnline, size = "md" }) {
  const sizeClasses = size === "sm" ? "w-10 h-10" : "w-10 h-10";
  return /* @__PURE__ */ jsxs("div", { className: "relative", children: [
    /* @__PURE__ */ jsx(
      Image,
      {
        src,
        alt,
        className: cn(
          sizeClasses,
          "rounded-full ring-1 ring-gray-400 dark:ring-gray-600 object-cover"
        ),
        width: 400,
        height: 400
      }
    ),
    isOnline !== void 0 && /* @__PURE__ */ jsx(
      "span",
      {
        className: cn(
          "absolute bottom-0 right-0 w-3 h-3 rounded-full ring-2 ring-white dark:ring-black",
          isOnline ? "bg-green-500" : "bg-[var(--neutral-8)]"
        )
      }
    )
  ] });
}
function TeamChat({
  chatName,
  tagline = "Collaborate creatively, deliver clearly.",
  messages,
  inputPlaceholder = "Write your message...",
  onSendMessage,
  onReactionClick,
  onMoreOptions,
  className
}) {
  const [selectedSender, setSelectedSender] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const uniqueSenders = Array.from(
    new Map(messages.map((m2) => [m2.sender.name, m2.sender])).values()
  );
  const filteredMessages = selectedSender ? messages.filter((m2) => m2.sender.name === selectedSender) : messages;
  const handleSend = () => {
    if (inputValue.trim() && onSendMessage) {
      onSendMessage(inputValue.trim());
      setInputValue("");
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };
  return /* @__PURE__ */ jsxs(
    "div",
    {
      className: cn(
        "w-full max-w-[var(--container-content)] mx-auto p-6 bg-white dark:bg-black rounded-[var(--radius-3xl)] shadow-lg flex flex-col h-[550px] border border-border",
        className
      ),
      children: [
        /* @__PURE__ */ jsxs("header", { className: "flex justify-between items-center border-b border-border pb-3 mb-6", children: [
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Users, { className: "w-8 h-8 text-black" }),
            /* @__PURE__ */ jsxs("div", { children: [
              /* @__PURE__ */ jsx("h2", { className: "text-2xl font-semibold text-black", children: chatName }),
              tagline && /* @__PURE__ */ jsx("p", { className: "italic text-sm text-muted-foreground", children: tagline })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": "More options",
              onClick: onMoreOptions,
              className: "p-2 rounded-[var(--radius-lg)] hover:bg-muted transition",
              children: /* @__PURE__ */ jsx(MoreHorizontal, { className: "w-6 h-6 text-muted-foreground" })
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("main", { className: "flex flex-1 overflow-hidden rounded-[var(--radius-xl)] border border-border", children: [
          /* @__PURE__ */ jsx("aside", { className: "w-56 bg-muted border-r border-border p-4 overflow-y-auto", children: uniqueSenders.map((sender) => {
            const isSelected = selectedSender === sender.name;
            return /* @__PURE__ */ jsxs(
              "button",
              {
                type: "button",
                onClick: () => setSelectedSender(isSelected ? null : sender.name),
                className: cn(
                  "flex items-center gap-3 w-full p-3 mb-3 rounded-[var(--radius-lg)] transition-colors",
                  isSelected ? "bg-black text-white dark:text-black" : "hover:bg-muted text-foreground"
                ),
                children: [
                  /* @__PURE__ */ jsx(Avatar, { src: sender.avatar, alt: sender.name, isOnline: sender.isOnline }),
                  /* @__PURE__ */ jsx("span", { className: "text-left font-medium truncate", children: sender.name })
                ]
              },
              sender.name
            );
          }) }),
          /* @__PURE__ */ jsx("section", { className: "flex-1 p-6 overflow-y-auto bg-white dark:bg-black", children: filteredMessages.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-center text-muted-foreground", children: "No messages to display." }) : filteredMessages.map((message) => /* @__PURE__ */ jsxs("div", { className: "mb-6 last:mb-0 group border-b border-border pb-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-4 mb-2", children: [
              /* @__PURE__ */ jsx(Avatar, { src: message.sender.avatar, alt: message.sender.name }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-semibold text-black", children: message.sender.name }),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground", children: message.timestamp })
              ] })
            ] }),
            /* @__PURE__ */ jsx("p", { className: "text-foreground text-lg mb-1", children: message.content }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between text-sm text-muted-foreground", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
                message.status === "read" && /* @__PURE__ */ jsx(DoubleCheck, { className: "w-5 h-5 text-green-500" }),
                message.status === "delivered" && /* @__PURE__ */ jsx(Check, { className: "w-5 h-5" }),
                /* @__PURE__ */ jsx("span", { children: message.timestamp })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "flex gap-2", children: message.reactions?.map((reaction) => /* @__PURE__ */ jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => onReactionClick?.(message.id, reaction.emoji),
                  className: cn(
                    "px-2 py-1 rounded-[var(--radius-md)] text-sm transition-colors",
                    reaction.reacted ? "bg-[var(--neutral-5)] text-black" : "bg-muted text-muted-foreground",
                    "hover:bg-muted"
                  ),
                  children: [
                    reaction.emoji,
                    " ",
                    reaction.count
                  ]
                },
                reaction.emoji
              )) })
            ] })
          ] }, message.id)) })
        ] }),
        /* @__PURE__ */ jsxs("footer", { className: "mt-6 flex items-center gap-4 border-t border-border pt-4", children: [
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": "Add emoji",
              className: "p-3 rounded-full bg-muted hover:bg-muted transition",
              children: /* @__PURE__ */ jsx(FacePlus, { className: "w-6 h-6 text-muted-foreground" })
            }
          ),
          /* @__PURE__ */ jsx(
            Input,
            {
              type: "text",
              value: inputValue,
              onChange: (e) => setInputValue(e.target.value),
              onKeyDown: handleKeyDown,
              placeholder: inputPlaceholder
            }
          ),
          /* @__PURE__ */ jsx(
            "button",
            {
              type: "button",
              "aria-label": "Send message",
              onClick: handleSend,
              className: "p-3 rounded-full bg-black text-white dark:text-black hover:brightness-90 transition",
              children: /* @__PURE__ */ jsx(PaperAirplane, { className: "w-6 h-6" })
            }
          )
        ] })
      ]
    }
  );
}

export { AnimateIn, AnimateInGroup, AnimatedCard, AnimatedDrawer, AnimatedList, AnimatedModal, AnimatedPopover, AsciiText, ChangelogWidget, FadeIn, ImageViewDialog, MAX_VISUALIZER_BARS, NodeGraphCanvas, OnboardingChecklist, PageTransition, PromptAttachmentPreviews, PromptInputBox, ScaleIn, SlideIn, TeamChat, VISUALIZER_BAR_STYLES, VoiceRecorder, animatedList, animatedListItem, animationDistances, animationDurations, animationEasings, animationSprings, animationTransitions, drawerSurface, fadeIn, formatRecordingTime, getFilePreviewKey, isImageFile, modalSurface, pageTransition, popoverSurface, preventDragDefaults, reducedMotionVariants, scaleIn, slideIn };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map