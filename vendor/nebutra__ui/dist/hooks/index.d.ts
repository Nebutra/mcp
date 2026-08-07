import * as React from 'react';
import { RefObject } from 'react';
import { HTMLMotionProps } from 'framer-motion';

type DwellHintPosition = "top" | "bottom" | "center";
interface DwellHintProps extends Omit<HTMLMotionProps<"div">, "children" | "initial" | "animate" | "exit" | "transition" | "position"> {
    /** Whether the hint is visible */
    show: boolean;
    /** The hint message to display */
    message: string;
    /** Optional icon to display before the message */
    icon?: React.ReactNode;
    /** Position of the hint relative to content (default: "bottom") */
    position?: DwellHintPosition;
}
declare const DwellHint: React.ForwardRefExoticComponent<Omit<DwellHintProps, "ref"> & React.RefAttributes<HTMLDivElement>>;

/**
 * Debounced Refresh Hook
 *
 * Wraps usehooks-ts (already a workspace dependency) so the rest of the
 * monorepo gets a single canonical debounced hook surface:
 * - cancellable
 * - configurable delay
 * - leading / trailing modes
 */
type DebouncedRefreshResult = {
    schedule: () => void;
    cancel: () => void;
    isPending: () => boolean;
    flush: () => void;
};
/**
 * 防抖刷新 Hook
 *
 * 用于限制频繁触发的刷新操作
 *
 * @param callback - 要执行的回调函数
 * @param delay - 延迟时间 (毫秒)
 * @returns 控制对象 { schedule, cancel, isPending, flush }
 *
 * @example
 * const { schedule, cancel } = useDebouncedRefresh(() => {
 *   refetch();
 * }, 400);
 *
 * // 在数据变化时调用
 * useEffect(() => {
 *   schedule();
 * }, [data]);
 */
declare function useDebouncedRefresh(callback: () => void, delay?: number): DebouncedRefreshResult;
/**
 * 防抖值 Hook
 *
 * Thin wrapper over usehooks-ts useDebounceValue so consumers can import
 * the canonical hook from @nebutra/ui/hooks alongside useDebouncedRefresh.
 *
 * @param value - 要防抖的值
 * @param delay - 延迟时间 (毫秒)
 * @returns 防抖后的值
 *
 * @example
 * const [searchTerm, setSearchTerm] = useState("");
 * const debouncedSearch = useDebouncedValue(searchTerm, 300);
 *
 * useEffect(() => {
 *   if (debouncedSearch) {
 *     performSearch(debouncedSearch);
 *   }
 * }, [debouncedSearch]);
 */
declare function useDebouncedValue<T>(value: T, delay?: number): T;

/**
 * Hook to detect media query matches.
 *
 * Delegates to usehooks-ts `useMediaQuery` with `initializeWithValue: false`
 * so the initial render always returns `false` — SSR-safe, matching the
 * previous hand-rolled behaviour (no `window` access during SSR/hydration).
 *
 * @example
 * ```tsx
 * const isMobile = useMediaQuery("(max-width: 768px)");
 * const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");
 * ```
 */
declare function useMediaQuery(query: string): boolean;

/**
 * Returns true if the user has enabled prefers-reduced-motion.
 * Use this to disable animations, skip transitions, or simplify motion.
 *
 * Wraps framer-motion's `useReducedMotion` so callers don't need framer-motion
 * as a direct import just for accessibility checks.
 *
 * @example
 * const shouldReduce = useReducedMotion();
 * const transition = shouldReduce ? { duration: 0 } : brandSpring.default;
 */
declare function useReducedMotion(): boolean;

interface DwellConfig {
    /** Time in ms before dwell is triggered (default: 800) */
    threshold?: number;
    /** Cooldown in ms between triggers (default: 5000) */
    cooldown?: number;
    /** Callback when dwell is detected */
    onDwell?: () => void;
    /** Only trigger when element is in viewport (default: true) */
    requireVisible?: boolean;
}
interface DwellState {
    /** Whether the user is currently dwelling */
    isDwelling: boolean;
    /** Progress toward trigger threshold (0-1) */
    dwellProgress: number;
    /** Whether dwell was triggered (resets after cooldown) */
    hasTriggered: boolean;
    /** Manually reset the triggered state */
    reset: () => void;
}
/**
 * useScrollDwell - Detects when a user pauses scrolling over an element.
 *
 * This hook monitors scroll activity and detects "dwell" behavior where
 * the user stops scrolling for a specified duration. Useful for showing
 * contextual hints, tooltips, or triggering animations when a user
 * appears to be reading or studying content.
 *
 * @param ref - Reference to the element to monitor
 * @param config - Configuration options
 * @returns DwellState object with current dwell status
 *
 * @example
 * function FeatureSection() {
 *   const sectionRef = useRef<HTMLDivElement>(null);
 *   const { isDwelling, hasTriggered } = useScrollDwell(sectionRef, {
 *     threshold: 1000,
 *     cooldown: 10000,
 *     onDwell: () => console.log("User is reading this section"),
 *   });
 *
 *   return (
 *     <div ref={sectionRef}>
 *       {hasTriggered && <DwellHint message="Take a closer look!" />}
 *     </div>
 *   );
 * }
 */
declare function useScrollDwell(ref: RefObject<HTMLElement | null>, config?: DwellConfig): DwellState;

export { type DwellConfig, DwellHint, type DwellHintProps, type DwellState, useDebouncedRefresh, useDebouncedValue, useMediaQuery, useReducedMotion, useScrollDwell };
