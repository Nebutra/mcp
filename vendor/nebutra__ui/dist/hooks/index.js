"use client";
import * as React from 'react';
import { useRef, useEffect, useCallback, useState } from 'react';
import { useReducedMotion, AnimatePresence, motion } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useDebounceCallback, useDebounceValue, useMediaQuery as useMediaQuery$1 } from 'usehooks-ts';

// src/hooks/DwellHint.tsx
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
var POSITION_CLASSES = {
  top: "top-0 -translate-y-full mb-2",
  bottom: "bottom-0 translate-y-full mt-2",
  center: "top-1/2 -translate-y-1/2"
};
var DwellHint = React.forwardRef(
  ({ show, message, icon, position = "bottom", className, ...props }, ref) => {
    const shouldReduceMotion = useReducedMotion();
    const resolvedPosition = position ?? "bottom";
    return /* @__PURE__ */ jsx(AnimatePresence, { initial: !shouldReduceMotion, children: show && /* @__PURE__ */ jsx(
      motion.div,
      {
        ref,
        className: cn(
          "absolute left-1/2 -translate-x-1/2 z-10",
          POSITION_CLASSES[resolvedPosition],
          className
        ),
        initial: shouldReduceMotion ? { opacity: 1 } : {
          opacity: 0,
          y: resolvedPosition === "top" ? -10 : 10,
          scale: 0.95
        },
        animate: shouldReduceMotion ? { opacity: 1 } : { opacity: 1, y: 0, scale: 1 },
        exit: shouldReduceMotion ? { opacity: 0 } : { opacity: 0, y: resolvedPosition === "top" ? -5 : 5, scale: 0.98 },
        transition: shouldReduceMotion ? { duration: 0 } : {
          duration: 0.4,
          ease: [0.34, 1.56, 0.64, 1]
        },
        ...props,
        children: /* @__PURE__ */ jsxs(
          "div",
          {
            className: cn(
              "flex items-center gap-2 px-4 py-2.5",
              "bg-background/95 backdrop-blur-md",
              "border border-border/50 rounded-[var(--radius-lg)]",
              "shadow-lg shadow-black/5",
              "text-sm text-muted-foreground"
            ),
            children: [
              icon && /* @__PURE__ */ jsx("span", { className: "text-primary/70 shrink-0", children: icon }),
              /* @__PURE__ */ jsx("span", { children: message })
            ]
          }
        )
      }
    ) });
  }
);
DwellHint.displayName = "DwellHint";
function useDebouncedRefresh(callback, delay = 400) {
  const callbackRef = useRef(callback);
  useEffect(() => {
    callbackRef.current = callback;
  }, [callback]);
  const debounced = useDebounceCallback(
    () => {
      callbackRef.current();
    },
    delay,
    { leading: false, trailing: true }
  );
  const schedule = useCallback(() => {
    debounced();
  }, [debounced]);
  const cancel = useCallback(() => {
    debounced.cancel();
  }, [debounced]);
  const isPending = useCallback(() => {
    return debounced.isPending();
  }, [debounced]);
  const flush = useCallback(() => {
    debounced.flush();
  }, [debounced]);
  useEffect(() => cancel, [cancel]);
  return { schedule, cancel, isPending, flush };
}
function useDebouncedValue(value, delay = 500) {
  const [debouncedValue] = useDebounceValue(value, delay);
  return debouncedValue;
}
function useMediaQuery(query) {
  return useMediaQuery$1(query, { initializeWithValue: false });
}

// src/hooks/use-reduced-motion.ts
function useReducedMotion2() {
  return useReducedMotion() ?? false;
}
function useScrollDwell(ref, config = {}) {
  const { threshold = 800, cooldown = 5e3, onDwell, requireVisible = true } = config;
  const [isDwelling, setIsDwelling] = useState(false);
  const [dwellProgress, setDwellProgress] = useState(0);
  const [hasTriggered, setHasTriggered] = useState(false);
  const dwellTimerRef = useRef(null);
  const progressIntervalRef = useRef(null);
  const cooldownTimerRef = useRef(null);
  const lastScrollTimeRef = useRef(Date.now());
  const isInCooldownRef = useRef(false);
  const clearTimers = useCallback(() => {
    if (dwellTimerRef.current) {
      clearTimeout(dwellTimerRef.current);
      dwellTimerRef.current = null;
    }
    if (progressIntervalRef.current) {
      clearInterval(progressIntervalRef.current);
      progressIntervalRef.current = null;
    }
  }, []);
  const reset = useCallback(() => {
    setHasTriggered(false);
    setIsDwelling(false);
    setDwellProgress(0);
    isInCooldownRef.current = false;
    if (cooldownTimerRef.current) {
      clearTimeout(cooldownTimerRef.current);
      cooldownTimerRef.current = null;
    }
  }, []);
  const isElementVisible = useCallback(() => {
    if (!ref.current) return false;
    const rect = ref.current.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    const visibleHeight = Math.min(rect.bottom, windowHeight) - Math.max(rect.top, 0);
    const elementHeight = rect.height;
    return visibleHeight / elementHeight > 0.5;
  }, [ref]);
  const startDwellTimer = useCallback(() => {
    if (isInCooldownRef.current || hasTriggered) return;
    if (requireVisible && !isElementVisible()) return;
    clearTimers();
    const startTime = Date.now();
    progressIntervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / threshold, 1);
      setDwellProgress(progress);
      if (progress >= 1) {
        if (progressIntervalRef.current) clearInterval(progressIntervalRef.current);
      }
    }, 50);
    dwellTimerRef.current = setTimeout(() => {
      setIsDwelling(true);
      setHasTriggered(true);
      onDwell?.();
      isInCooldownRef.current = true;
      cooldownTimerRef.current = setTimeout(() => {
        isInCooldownRef.current = false;
        setHasTriggered(false);
        setDwellProgress(0);
      }, cooldown);
    }, threshold);
  }, [threshold, cooldown, onDwell, requireVisible, hasTriggered, isElementVisible, clearTimers]);
  const handleScroll = useCallback(() => {
    lastScrollTimeRef.current = Date.now();
    setIsDwelling(false);
    setDwellProgress(0);
    clearTimers();
    setTimeout(() => {
      const timeSinceScroll = Date.now() - lastScrollTimeRef.current;
      if (timeSinceScroll >= 100) {
        startDwellTimer();
      }
    }, 100);
  }, [clearTimers, startDwellTimer]);
  useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    if (requireVisible && isElementVisible()) {
      startDwellTimer();
    } else if (!requireVisible) {
      startDwellTimer();
    }
    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimers();
      if (cooldownTimerRef.current) {
        clearTimeout(cooldownTimerRef.current);
      }
    };
  }, [handleScroll, startDwellTimer, requireVisible, isElementVisible, clearTimers]);
  return {
    isDwelling,
    dwellProgress,
    hasTriggered,
    reset
  };
}

export { DwellHint, useDebouncedRefresh, useDebouncedValue, useMediaQuery, useReducedMotion2 as useReducedMotion, useScrollDwell };
//# sourceMappingURL=index.js.map
//# sourceMappingURL=index.js.map