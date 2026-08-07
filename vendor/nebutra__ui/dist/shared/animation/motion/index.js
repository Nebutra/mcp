"use client";
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
export { AnimatePresence, LayoutGroup, LazyMotion, MotionConfig, animate, domAnimation, m, motion, useAnimationFrame, useInView, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
import { jsx } from 'react/jsx-runtime';

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
  const containerVariants = useAccessibleVariants(animatedList);
  const itemVariants = useAccessibleVariants(animatedListItem);
  return /* @__PURE__ */ jsx(
    motion.div,
    {
      initial: "initial",
      animate: "animate",
      exit: "exit",
      variants: containerVariants,
      ...props,
      children: Array.isArray(children) ? children.map((child, index) => /* @__PURE__ */ jsx(motion.div, { variants: itemVariants, children: child }, index)) : children
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

export { AnimatedCard, AnimatedDrawer, AnimatedList, AnimatedModal, AnimatedPopover, FadeIn, PageTransition, ScaleIn, SlideIn, animatedList, animatedListItem, animationDistances, animationDurations, animationEasings, animationSprings, animationTransitions, drawerSurface, fadeIn, modalSurface, pageTransition, popoverSurface, reducedMotionVariants, scaleIn, slideIn };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map