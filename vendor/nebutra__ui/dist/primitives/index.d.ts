import * as React$1 from 'react';
import React__default, { CSSProperties, ComponentPropsWithoutRef, ReactNode, HTMLAttributes, Ref, ReactElement, Component, ErrorInfo, SVGProps, ElementType } from 'react';
import { B as BadgeProps, A as AvatarProps, S as SpacingScale, a as Button, C as CommandItemProps, b as CommandEmptyProps, c as CommandEmpty, d as CommandGroupProps, e as CommandGroup, f as CommandInputProps, g as CommandInput, h as CommandItem, i as CommandListProps, j as CommandList, k as CommandResultsProps, l as CommandResults, m as CommandSeparatorProps, n as CommandSeparator, o as CommandShortcutProps, T as TextareaProps, p as Command } from '../canonical-Drca5UMj.js';
export { q as Accordion, r as AccordionContent, s as AccordionItem, t as AccordionSize, u as AccordionTrigger, v as Alert, w as AlertAppearance, x as AlertContent, y as AlertContentProps, z as AlertDescription, D as AlertDescriptionProps, E as AlertDialog, F as AlertDialogAction, G as AlertDialogCancel, H as AlertDialogContent, I as AlertDialogDescription, J as AlertDialogFooter, K as AlertDialogHeader, L as AlertDialogOverlay, M as AlertDialogPortal, N as AlertDialogTitle, O as AlertDialogTrigger, P as AlertIcon, Q as AlertIconProps, R as AlertProps, U as AlertSize, V as AlertTitle, W as AlertTitleProps, X as AlertToolbar, Y as AlertToolbarProps, Z as AlertVariant, _ as AnimateIn, $ as AnimateInGroup, a0 as AnimateInGroupProps, a1 as AnimateInProps, a2 as AnimateSwap, a3 as AnimateSwapProps, a4 as AnimatedThemeToggler, a5 as AnimatedThemeTogglerProps, a6 as AspectRatio, a7 as AspectRatioProps, a8 as Avatar, a9 as AvatarFallback, aa as AvatarFallbackProps, ab as AvatarGroup, ac as AvatarGroupItem, ad as AvatarGroupProps, ae as AvatarImage, af as AvatarSize, ag as Badge, ah as Breadcrumb, ai as BreadcrumbEllipsis, aj as BreadcrumbEllipsisProps, ak as BreadcrumbItem, al as BreadcrumbItemProps, am as BreadcrumbLink, an as BreadcrumbLinkProps, ao as BreadcrumbList, ap as BreadcrumbListProps, aq as BreadcrumbPage, ar as BreadcrumbPageProps, as as BreadcrumbProps, at as BreadcrumbSeparator, au as BreadcrumbSeparatorProps, av as ButtonLink, aw as ButtonLinkProps, ax as ButtonProps, ay as Card, az as CardContent, aA as CardDescription, aB as CardDescriptionProps, aC as CardFooter, aD as CardHeader, aE as CardTitle, aF as Checkbox, aG as CheckboxGroup, aH as CheckboxGroupProps, aI as CheckboxProps, aJ as CodeBlock, aK as CodeBlockFile, aL as CodeBlockFilesProps, aM as CodeBlockLanguageIcon, aN as CodeBlockLanguageIconComponent, aO as CodeBlockLanguageIconElement, aP as CodeBlockLanguageIconMap, aQ as CodeBlockLanguageIconProps, aR as CodeBlockLanguageIconValue, aS as CodeBlockProps, aT as CodeBlockSingleProps, aU as CodeBlockSwitcher, aV as CodeBlockSwitcherOption, aW as Collapse, aX as CollapseGroup, aY as CollapseGroupProps, aZ as CollapseProps, a_ as CollapseSize, a$ as Combobox, b0 as ComboboxEmpty, b1 as ComboboxGroupSub, b2 as ComboboxInput, b3 as ComboboxList, b4 as ComboboxOption, b5 as ComboboxOptionItem, b6 as ComboboxProps, b7 as ComboboxRoot, b8 as ComboboxSeparator, b9 as CommandDialog, ba as CommandDialogProps, bb as CommandProps, bc as CommandShortcut, bd as ContextMenu, be as ContextMenuCheckboxItem, bf as ContextMenuCheckboxItemProps, bg as ContextMenuContent, bh as ContextMenuContentProps, bi as ContextMenuGroup, bj as ContextMenuItem, bk as ContextMenuItemProps, bl as ContextMenuLabel, bm as ContextMenuLabelProps, bn as ContextMenuRadioGroup, bo as ContextMenuRadioGroupProps, bp as ContextMenuRadioItem, bq as ContextMenuRadioItemProps, br as ContextMenuRoot, bs as ContextMenuSeparator, bt as ContextMenuSeparatorProps, bu as ContextMenuShortcut, bv as ContextMenuSub, bw as ContextMenuSubContent, bx as ContextMenuSubTrigger, by as ContextMenuSubTriggerProps, bz as ContextMenuTrigger, bA as CopyButton, bB as CopyButtonProps, bC as CopyCodeButton, bD as CopyIdButton, bE as CopyLinkButton, bF as CopyMenuItem, bG as CopyMenuItemProps, bH as CopyableField, bI as CopyableFieldProps, bJ as DeploymentState, bK as Description, bL as DescriptionProps, bM as Dialog, bN as DialogClose, bO as DialogContent, bP as DialogDescription, bQ as DialogFooter, bR as DialogHeader, bS as DialogOverlay, bT as DialogPortal, bU as DialogTitle, bV as DialogTrigger, bW as Drawer, bX as DrawerBody, bY as DrawerBodyProps, bZ as DrawerClose, b_ as DrawerCloseProps, b$ as DrawerContent, c0 as DrawerContentProps, c1 as DrawerDescription, c2 as DrawerDescriptionProps, c3 as DrawerDirection, c4 as DrawerFooter, c5 as DrawerFooterProps, c6 as DrawerHeader, c7 as DrawerHeaderProps, c8 as DrawerHeight, c9 as DrawerOverlay, ca as DrawerOverlayProps, cb as DrawerPortal, cc as DrawerPortalProps, cd as DrawerProps, ce as DrawerTitle, cf as DrawerTitleProps, cg as DrawerTrigger, ch as DrawerTriggerProps, ci as DropdownMenu, cj as DropdownMenuCheckboxItem, ck as DropdownMenuContent, cl as DropdownMenuContentProps, cm as DropdownMenuEmpty, cn as DropdownMenuFilterInput, co as DropdownMenuGroup, cp as DropdownMenuItem, cq as DropdownMenuLabel, cr as DropdownMenuPortal, cs as DropdownMenuRadioGroup, ct as DropdownMenuRadioItem, cu as DropdownMenuSeparator, cv as DropdownMenuShortcut, cw as DropdownMenuSub, cx as DropdownMenuSubContent, cy as DropdownMenuSubTrigger, cz as DropdownMenuTrigger, cA as EmptyState, cB as EmptyStateAlign, cC as EmptyStateIcon, cD as EmptyStateIconProps, cE as EmptyStateRoot, cF as EmptyStateRootProps, cG as EmptyStateSize, cH as EmptyStateVariant, cI as Error, cJ as ErrorMessage, cK as ErrorMessageProps, cL as ErrorObject, cM as ErrorProps, cN as ErrorRecoveryAction, cO as ErrorSize, az as FeatureCardContent, cP as Field, cQ as FieldProps, cR as Form, cS as FormControl, cT as FormDescription, cU as FormField, cV as FormItem, cW as FormLabel, cX as FormMessage, cY as Gauge, cZ as GaugeArcPriority, c_ as GaugeColorMap, c$ as GaugeColorStop, d0 as GaugeProps, d1 as GaugeSize, d2 as HoverCard, d3 as HoverCardContent, d4 as HoverCardTrigger, d5 as Input, d6 as InputOTP, d7 as InputOTPGroup, d8 as InputOTPGroupProps, d9 as InputOTPProps, da as InputOTPSeparator, db as InputOTPSeparatorProps, dc as InputOTPSlot, dd as InputOTPSlotProps, de as InputProps, df as Kbd, dg as KbdProps, dh as Label, di as LabelProps, dj as LegacyGaugeArcPriority, dk as LoadingDots, dl as LoadingDotsProps, dm as Menu, dn as MenuButton, dp as MenuButtonProps, dq as MenuContainer, dr as MenuContainerProps, ds as MenuItem, dt as MenuItemLocked, du as MenuItemLockedProps, dv as MenuItemProps, dw as MenuLink, dx as MenuLinkProps, dy as MenuPosition, dz as MenuProps, dA as MenuSection, dB as MenuSectionProps, dC as Menubar, dD as MenubarCheckboxItem, dE as MenubarContent, dF as MenubarGroup, dG as MenubarItem, dH as MenubarLabel, dI as MenubarMenu, dJ as MenubarPortal, dK as MenubarRadioGroup, dL as MenubarRadioItem, dM as MenubarSeparator, dN as MenubarShortcut, dO as MenubarSub, dP as MenubarSubContent, dQ as MenubarSubTrigger, dR as MenubarTrigger, dS as Modal, dT as ModalActionProps, dU as ModalActionsProps, dV as ModalBodyProps, dW as ModalHeaderProps, dX as ModalInsetProps, dY as ModalRootProps, dZ as ModalSubtitleProps, d_ as ModalTitleProps, d$ as MultiSelectContent, e0 as MultiSelectContentProps, e1 as MultiSelectRoot, e2 as MultiSelectRootProps, e3 as MultiSelectRow, e4 as MultiSelectRowProps, e5 as MultiSelectTrigger, e6 as MultiSelectTriggerProps, e7 as NavigationMenu, e8 as NavigationMenuContent, e9 as NavigationMenuIndicator, ea as NavigationMenuItem, eb as NavigationMenuLink, ec as NavigationMenuList, ed as NavigationMenuTrigger, ee as NavigationMenuViewport, ef as Note, eg as NoteBaseProps, eh as NoteProps, ei as NoteSize, ej as NoteTone, ek as Pagination, el as PaginationDestination, em as PaginationProps, en as Popover, eo as PopoverAnchor, ep as PopoverContent, eq as PopoverContentProps, er as PopoverPositioner, es as PopoverTrigger, et as Progress, eu as ProgressColorMap, ev as ProgressProps, ew as ProgressStop, ex as ProjectBanner, ey as ProjectBannerCallToAction, ez as ProjectBannerProps, eA as ProjectBannerVariant, eB as RadioGroup, eC as RadioGroupItem, eD as ResizableHandle, eE as ResizablePanel, eF as ResizablePanelGroup, eG as Scroller, eH as ScrollerButtonAxis, eI as ScrollerEdgeAffordance, eJ as ScrollerOverflow, eK as ScrollerProps, eL as ScrollerSize, eM as Select, eN as SelectContent, eO as SelectGroup, eP as SelectItem, eQ as SelectLabel, eR as SelectScrollDownButton, eS as SelectScrollUpButton, eT as SelectSeparator, eU as SelectTrigger, eV as SelectValue, eW as Separator, eX as Sheet, eY as SheetBody, eZ as SheetBodyProps, e_ as SheetClose, e$ as SheetCloseProps, f0 as SheetContent, f1 as SheetContentProps, f2 as SheetDescription, f3 as SheetDescriptionProps, f4 as SheetFooter, f5 as SheetFooterProps, f6 as SheetHeader, f7 as SheetHeaderProps, f8 as SheetOverlay, f9 as SheetOverlayProps, fa as SheetPortal, fb as SheetPortalProps, fc as SheetProps, fd as SheetTitle, fe as SheetTitleProps, ff as SheetTrigger, fg as SheetTriggerProps, fh as ShowMore, fi as ShowMoreProps, fj as Skeleton, fk as SkeletonAvatar, fl as SkeletonCard, fm as SkeletonProps, fn as SkeletonText, fo as Slider, fp as SliderProps, fq as Spinner, fr as SpinnerProps, fs as SpinnerVariant, ft as SplitButton, fu as SplitButtonMenuAlignment, fv as SplitButtonMenuContentProps, fw as SplitButtonMenuItem, fx as SplitButtonMenuItemProps, fy as SplitButtonPrimaryProps, fz as SplitButtonProps, fA as SplitButtonSize, fB as SplitButtonType, fC as Stack, fD as StackProps, fE as StatusDot, fF as StatusDotProps, fG as Switch, fH as SwitchProps, fI as Table, fJ as TableBody, fK as TableBodyProps, fL as TableCaption, fM as TableCell, fN as TableCellAlignment, fO as TableCellProps, fP as TableCol, fQ as TableColgroup, fR as TableCssVar, fS as TableCssVarOverrides, fT as TableFooter, fU as TableHead, fV as TableHeadProps, fW as TableHeader, fX as TableProps, fY as TableRow, fZ as TableStyle, f_ as Tabs, f$ as TabsContent, g0 as TabsContentProps, g1 as TabsList, g2 as TabsListProps, g3 as TabsProps, g4 as TabsTrigger, g5 as TabsTriggerProps, g6 as Textarea, g7 as ThemeSwitcher, g8 as ThemeSwitcherProps, g9 as ThemeSwitcherValue, ga as ThemeToggle, gb as ThemeToggleProps, gc as ThemeToggleValue, gd as ToastMessage, ge as ToastOptions, gf as ToastTone, gg as Toaster, gh as Toggle, gi as ToggleChangeHandler, gj as ToggleDirection, gk as ToggleGroup, gl as ToggleGroupItem, gm as ToggleGroupItemProps, gn as ToggleGroupProps, go as ToggleLabelCasing, gp as ToggleProps, gq as Tooltip, gr as TooltipContent, gs as TooltipProvider, gt as TooltipTrigger, gu as TreeExpander, gv as TreeExpanderProps, gw as TreeIcon, gx as TreeIconProps, gy as TreeLabel, gz as TreeLabelProps, gA as TreeLines, gB as TreeNode, gC as TreeNodeContent, gD as TreeNodeContentProps, gE as TreeNodeProps, gF as TreeNodeTrigger, gG as TreeNodeTriggerProps, gH as TreeProvider, gI as TreeProviderProps, gJ as TreeView, gK as TreeViewProps, gL as UseCopyToClipboardOptions, gM as UseCopyToClipboardReturn, gN as UseToastsReturn, gO as alertVariants, gP as badgeVariants, gQ as buttonVariants, gR as containerWidths, gS as flexLayouts, gT as gridLayouts, gU as labelVariants, gV as navigationMenuTriggerStyle, gW as normalizeCodeBlockLanguage, gX as progressIndicatorVariants, gY as progressVariants, gZ as resolveCodeBlockLanguageIcon, g_ as tabsContentVariants, g$ as tabsListVariants, h0 as tabsTriggerVariants, h1 as toggleGroupItemVariants, h2 as toggleGroupVariants, h3 as useCopyToClipboard, h4 as useFormField, h5 as useToasts, h6 as zIndex } from '../canonical-Drca5UMj.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { motion, MotionProps as MotionProps$2 } from 'framer-motion';
import Link from 'next/link';
import { useRender } from '@base-ui/react/use-render';
import { VariantProps } from 'class-variance-authority';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { IconProps, Icon } from '@nebutra/icons';
import useEmblaCarousel, { UseEmblaCarouselType } from 'embla-carousel-react';
import * as RechartsPrimitive from 'recharts';
import { Options, GlobalOptions } from 'canvas-confetti';
import { DitheringProps, GrainGradientProps, MeshGradientProps, NeuroNoiseProps, WavesProps } from '@paper-design/shaders-react';
import { Tooltip } from '@base-ui/react/tooltip';
import { Command as Command$1 } from 'cmdk';
import { Radio } from '@base-ui/react/radio';
import { RadioGroup } from '@base-ui/react/radio-group';
import { Slider } from '@base-ui/react/slider';
import { TwitterComponents } from 'react-tweet';
export { ExternalToast, ToasterProps, toast } from 'sonner';
export { brandSpring } from '@nebutra/brand';
import '@base-ui/react/accordion';
import '@base-ui/react';
import '@base-ui/react/alert-dialog';
import '@base-ui/react/avatar';
import '@base-ui/react/dialog';
import '@base-ui/react/context-menu';
import '@base-ui/react/menu';
import 'vaul';
import 'react-hook-form';
import '@base-ui/react/popover';
import 'input-otp';
import '@base-ui/react/progress';
import 'react-resizable-panels';
import '@base-ui/react/select';
import '@base-ui/react/separator';

/**
 * Accessibility Primitives
 *
 * Utilities and patterns for building accessible UI.
 */

type StyleObject = CSSProperties & Record<string, unknown>;
/**
 * Visually hidden but accessible to screen readers
 */
declare const visuallyHidden: StyleObject;
/**
 * Focus ring styles for keyboard navigation
 */
declare const focusRing: StyleObject;
/**
 * Skip link for keyboard users
 */
declare const skipLinkStyle: StyleObject;
/**
 * Common ARIA attributes
 */
declare const ariaPatterns: {
    /** For loading states */
    loading: {
        "aria-busy": boolean;
        "aria-live": "polite";
    };
    /** For expandable sections */
    expandable: (expanded: boolean) => {
        "aria-expanded": boolean;
    };
    /** For current page in navigation */
    currentPage: {
        "aria-current": "page";
    };
    /** For required form fields */
    required: {
        "aria-required": boolean;
    };
    /** For invalid form fields */
    invalid: (message?: string) => {
        "aria-errormessage"?: string;
        "aria-invalid": boolean;
    };
};
/**
 * Minimum touch target size (WCAG 2.5.5)
 */
declare const minTouchTarget: {
    readonly minWidth: 44;
    readonly minHeight: 44;
};
/**
 * Reduced motion media query check
 */
declare function prefersReducedMotion(): boolean;
/**
 * Color contrast requirements
 */
declare const contrastRequirements: {
    /** WCAG AA for normal text */
    readonly normalText: 4.5;
    /** WCAG AA for large text (18px+ or 14px+ bold) */
    readonly largeText: 3;
    /** WCAG AAA for normal text */
    readonly normalTextAAA: 7;
    /** WCAG AAA for large text */
    readonly largeTextAAA: 4.5;
};

/**
 * Task status types
 */
type TaskStatus = "pending" | "in-progress" | "completed" | "need-help" | "failed";
/**
 * Task priority levels
 */
type TaskPriority = "low" | "medium" | "high";
/**
 * Subtask item
 */
interface AgentSubtask {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority?: TaskPriority;
    /** Optional array of MCP server tools */
    tools?: string[];
}
/**
 * Task item with subtasks
 */
interface AgentTask {
    id: string;
    title: string;
    description: string;
    status: TaskStatus;
    priority?: TaskPriority;
    /** Nesting level (0 = root) */
    level?: number;
    /** IDs of tasks this depends on */
    dependencies?: string[];
    subtasks: AgentSubtask[];
}
/**
 * Props for AgentPlan component
 *
 * @description
 * A hierarchical task planning UI for AI agents with expandable tasks,
 * subtasks, status indicators, and dependency visualization.
 *
 * **UX Scenarios:**
 * - AI agent task execution visualization
 * - Project planning interfaces
 * - Workflow management dashboards
 * - Multi-step process trackers
 * - MCP server tool execution plans
 *
 * **Features:**
 * - Expandable task/subtask hierarchy
 * - Status icons with animations
 * - Dependency badges
 * - Tool/MCP server tags
 * - Reduced motion support
 */
interface AgentPlanProps {
    /** Array of tasks to display */
    tasks: AgentTask[];
    /** Callback when task status changes */
    onTaskStatusChange?: (taskId: string, newStatus: TaskStatus) => void;
    /** Callback when subtask status changes */
    onSubtaskStatusChange?: (taskId: string, subtaskId: string, newStatus: TaskStatus) => void;
    /** Initially expanded task IDs */
    defaultExpandedTasks?: string[];
    /** Whether to allow status toggling */
    allowStatusToggle?: boolean;
    /** Container className */
    className?: string;
    /** Label for tools section */
    toolsLabel?: string;
}
/**
 * AgentPlan - Hierarchical task planning UI
 *
 * @example
 * ```tsx
 * const tasks = [
 *   {
 *     id: "1",
 *     title: "Research Requirements",
 *     description: "Gather project requirements",
 *     status: "in-progress",
 *     subtasks: [
 *       { id: "1.1", title: "Interview stakeholders", status: "completed", tools: ["meeting-scheduler"] },
 *       { id: "1.2", title: "Review docs", status: "in-progress", tools: ["file-system"] },
 *     ],
 *   },
 * ];
 *
 * <AgentPlan
 *   tasks={tasks}
 *   onTaskStatusChange={(id, status) => console.log(id, status)}
 *   defaultExpandedTasks={["1"]}
 * />
 * ```
 */
declare const AgentPlan: React__default.FC<AgentPlanProps>;

/**
 * Animated Beam Component Tokens - Layer 3
 *
 * Product data-flow connector. Keep defaults quiet and semantic; consumers
 * should choose tone/intensity before reaching for raw SVG paint overrides.
 */
type AnimatedBeamTone = "neutral" | "brand" | "success" | "warning";
type AnimatedBeamIntensity = "subtle" | "normal" | "strong";

/**
 * Props for the AnimatedBeam component
 */
interface AnimatedBeamProps {
    /** Additional CSS classes */
    className?: string;
    /** Ref to the container element */
    containerRef: React$1.RefObject<HTMLElement | null>;
    /** Ref to the element where the beam starts */
    fromRef: React$1.RefObject<HTMLElement | null>;
    /** Ref to the element where the beam ends */
    toRef: React$1.RefObject<HTMLElement | null>;
    /** Curvature of the beam path (default: 0) */
    curvature?: number;
    /** Reverse the animation direction */
    reverse?: boolean;
    /** Semantic beam color. Prefer this over raw color overrides. */
    tone?: AnimatedBeamTone;
    /** Visual emphasis for the static rail and travelling beam. */
    intensity?: AnimatedBeamIntensity;
    /** Animation duration in seconds. Defaults to the component motion token (4s). */
    duration?: number;
    /** Delay before animation starts */
    delay?: number;
    /** Advanced override: color of the static path line */
    pathColor?: string;
    /** Advanced override: width of the static path line */
    pathWidth?: number;
    /** Advanced override: opacity of the static path line */
    pathOpacity?: number;
    /** Advanced override: start color of the gradient */
    gradientStartColor?: string;
    /** Advanced override: stop color of the gradient */
    gradientStopColor?: string;
    /** X offset for the start point */
    startXOffset?: number;
    /** Y offset for the start point */
    startYOffset?: number;
    /** X offset for the end point */
    endXOffset?: number;
    /** Y offset for the end point */
    endYOffset?: number;
}
/**
 * AnimatedBeam - Animated beam of light connecting elements
 *
 * An animated beam that travels along a path between two elements.
 * Useful for showcasing integrations, data flow, or connections.
 *
 * @example Basic usage
 * ```tsx
 * const containerRef = useRef<HTMLDivElement>(null);
 * const fromRef = useRef<HTMLDivElement>(null);
 * const toRef = useRef<HTMLDivElement>(null);
 *
 * <div ref={containerRef} className="relative">
 *   <div ref={fromRef}>Start</div>
 *   <div ref={toRef}>End</div>
 *   <AnimatedBeam
 *     containerRef={containerRef}
 *     fromRef={fromRef}
 *     toRef={toRef}
 *   />
 * </div>
 * ```
 *
 * @example Curved beam
 * ```tsx
 * <AnimatedBeam
 *   containerRef={containerRef}
 *   fromRef={fromRef}
 *   toRef={toRef}
 *   curvature={50}
 * />
 * ```
 *
 * @example Custom colors
 * ```tsx
 * <AnimatedBeam
 *   containerRef={containerRef}
 *   fromRef={fromRef}
 *   toRef={toRef}
 *   tone="brand"
 *   intensity="normal"
 * />
 * ```
 */
declare function AnimatedBeam({ className, containerRef, fromRef, toRef, curvature, reverse, tone, intensity, duration, delay, pathColor, pathWidth, pathOpacity, gradientStartColor, gradientStopColor, startXOffset, startYOffset, endXOffset, endYOffset, }: AnimatedBeamProps): react_jsx_runtime.JSX.Element;

interface AnimatedCircularProgressBarProps {
    max?: number;
    value?: number;
    min?: number;
    /** e.g. "hsl(var(--primary))" or "currentColor" */
    gaugePrimaryColor?: string;
    /** e.g. "hsl(var(--secondary))" or "rgba(255,255,255,0.1)" */
    gaugeSecondaryColor?: string;
    className?: string;
}
declare function AnimatedCircularProgressBar({ max, min, value, gaugePrimaryColor, gaugeSecondaryColor, className, }: AnimatedCircularProgressBarProps): react_jsx_runtime.JSX.Element;

/**
 * Props for the AnimatedGradientText component
 */
interface AnimatedGradientTextProps extends ComponentPropsWithoutRef<"span"> {
    /** Speed multiplier for the gradient animation (default: 1) */
    speed?: number;
    /** Starting color of the gradient */
    colorFrom?: string;
    /** Ending color of the gradient */
    colorTo?: string;
}
/**
 * AnimatedGradientText - Scrolling gradient text effect
 *
 * A text component with a continuously scrolling gradient background.
 * The gradient moves horizontally creating a shimmering effect.
 *
 * **Note:** Requires CSS animation to be added to your global styles:
 * ```css
 * @keyframes gradient {
 *   to { background-position: var(--bg-size, 300%) 0; }
 * }
 * .animate-gradient {
 *   animation: gradient 8s linear infinite;
 * }
 * ```
 *
 * @example Basic usage
 * ```tsx
 * <AnimatedGradientText>Animated Text</AnimatedGradientText>
 * ```
 *
 * @example Custom colors
 * ```tsx
 * <AnimatedGradientText colorFrom="hsl(var(--primary))" colorTo="var(--brand-accent)">
 *   Pink to Purple
 * </AnimatedGradientText>
 * ```
 *
 * @example Faster animation
 * ```tsx
 * <AnimatedGradientText speed={2}>
 *   Fast Gradient
 * </AnimatedGradientText>
 * ```
 *
 * @example As heading
 * ```tsx
 * <h1 className="text-4xl font-bold">
 *   <AnimatedGradientText>Welcome</AnimatedGradientText>
 * </h1>
 * ```
 */
declare function AnimatedGradientText({ children, className, speed, colorFrom, colorTo, ...props }: AnimatedGradientTextProps): react_jsx_runtime.JSX.Element;
/**
 * CSS keyframes required for AnimatedGradientText.
 * Add this to your global CSS or Tailwind config.
 */
declare const ANIMATED_GRADIENT_CSS = "\n@keyframes gradient {\n  to {\n    background-position: var(--bg-size, 300%) 0;\n  }\n}\n\n.animate-gradient {\n  animation: gradient 8s linear infinite;\n}\n";

type MotionVariants$2 = NonNullable<React$1.ComponentProps<typeof motion.div>["variants"]>;
type PresetType = "fade" | "slide" | "scale" | "blur" | "blur-slide" | "zoom" | "flip" | "bounce" | "rotate" | "swing";
interface AnimatedGroupProps {
    /** Children elements to animate */
    children: ReactNode;
    /** Additional className */
    className?: string;
    /** Custom animation variants */
    variants?: {
        container?: MotionVariants$2;
        item?: MotionVariants$2;
    };
    /** Animation preset */
    preset?: PresetType;
}
/**
 * AnimatedGroup - Staggered animation container for children
 *
 * Wraps children in animated containers with staggered reveal animations.
 * Supports presets or custom variants.
 *
 * @example
 * ```tsx
 * <AnimatedGroup preset="blur-slide">
 *   <Card>Item 1</Card>
 *   <Card>Item 2</Card>
 *   <Card>Item 3</Card>
 * </AnimatedGroup>
 * ```
 */
declare function AnimatedGroup({ children, className, variants, preset }: AnimatedGroupProps): react_jsx_runtime.JSX.Element;

/**
 * Stat item displayed in the card
 */
interface Stat {
    icon: React$1.ReactNode;
    label: string;
}
/**
 * AnimatedHikeCard Props
 *
 * @example
 * ```tsx
 * <AnimatedHikeCard
 *   title="Mountain Hike"
 *   images={["/img1.jpg", "/img2.jpg", "/img3.jpg"]}
 *   stats={[
 *     { icon: <Clock className="h-4 w-4" />, label: "~6 Hours" },
 *     { icon: <Mountain className="h-4 w-4" />, label: "8 km" },
 *   ]}
 *   description="A beautiful mountain hiking experience."
 *   href="/hikes/mountain"
 * />
 * ```
 */
interface AnimatedHikeCardProps {
    /** Card title */
    title: string;
    /** Array of image URLs (3 recommended for best visual effect) */
    images: string[];
    /** Stats to display (icon + label pairs) */
    stats: Stat[];
    /** Card description text */
    description: string;
    /** Link destination */
    href: string;
    /** Additional CSS classes */
    className?: string;
}
/**
 * AnimatedHikeCard - Interactive card with stacked images that fan out on hover
 *
 * Use cases:
 * - Activity/experience cards (hiking, tours, adventures)
 * - Product showcases with multiple images
 * - Portfolio items with image galleries
 * - Travel destination cards
 */
declare const AnimatedHikeCard: {
    ({ ref, title, images, stats, description, href, className, }: AnimatedHikeCardProps & {
        ref?: React$1.Ref<HTMLAnchorElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface AnimatedListItemProps {
    children: React__default.ReactNode;
}
/**
 * AnimatedListItem - Individual item with spring animation
 */
declare function AnimatedListItem({ children }: AnimatedListItemProps): react_jsx_runtime.JSX.Element;
interface AnimatedListProps extends ComponentPropsWithoutRef<"div"> {
    children: React__default.ReactNode;
    /** Delay between each item animation in ms */
    delay?: number;
}
/**
 * AnimatedList - Sequential list animation component
 *
 * @description
 * Animates each child item in sequence with a configurable delay.
 * Perfect for showcasing notifications, events, or activity feeds on landing pages.
 *
 * @example Basic usage
 * ```tsx
 * <AnimatedList>
 *   <NotificationCard title="New message" />
 *   <NotificationCard title="Payment received" />
 *   <NotificationCard title="User signed up" />
 * </AnimatedList>
 * ```
 *
 * @example Custom delay
 * ```tsx
 * <AnimatedList delay={500}>
 *   {notifications.map((n, i) => (
 *     <Card key={i}>{n.message}</Card>
 *   ))}
 * </AnimatedList>
 * ```
 */
declare const AnimatedList: React__default.MemoExoticComponent<({ children, className, delay, ...props }: AnimatedListProps) => react_jsx_runtime.JSX.Element>;

interface AnimatedShinyTextProps extends ComponentPropsWithoutRef<"span"> {
    /** Width of the shimmer highlight in pixels */
    shimmerWidth?: number;
    /** Animation duration in seconds */
    duration?: number;
}
/**
 * AnimatedShinyText - Text with animated light glare shimmer effect
 *
 * @description
 * Creates a shimmering light effect that pans across text,
 * making it appear as if light is reflecting off the surface.
 *
 * @example Basic usage
 * ```tsx
 * <AnimatedShinyText>✨ Introducing Magic UI</AnimatedShinyText>
 * ```
 *
 * @example Custom shimmer width
 * ```tsx
 * <AnimatedShinyText shimmerWidth={200} className="text-xl font-bold">
 *   Premium Feature
 * </AnimatedShinyText>
 * ```
 *
 * @example In a badge
 * ```tsx
 * <div className="rounded-full border px-4 py-1">
 *   <AnimatedShinyText>🎉 New Release</AnimatedShinyText>
 * </div>
 * ```
 */
declare function AnimatedShinyText({ children, className, shimmerWidth, duration, style, ...props }: AnimatedShinyTextProps): react_jsx_runtime.JSX.Element;

/**
 * Props for Announcement component
 *
 * @description
 * A pill-shaped announcement badge with optional tag and title sections.
 * Built on top of Badge with enhanced styling for announcements.
 *
 * **UX Scenarios:**
 * - Product update announcements
 * - Feature release notices
 * - Status indicators (error, success, warning)
 * - Promotional banners
 * - Version release tags
 *
 * **Composition:**
 * - `Announcement` - Container with badge styling
 * - `AnnouncementTag` - Left-side category/type label
 * - `AnnouncementTitle` - Main announcement text with optional icon
 */
interface AnnouncementProps extends BadgeProps {
    /**
     * Whether to apply themed styling (for colored backgrounds)
     * @default false
     */
    themed?: boolean;
}
/**
 * Props for AnnouncementTag
 */
type AnnouncementTagProps = HTMLAttributes<HTMLDivElement>;
/**
 * Props for AnnouncementTitle
 */
type AnnouncementTitleProps = HTMLAttributes<HTMLDivElement>;
/**
 * Announcement - Pill-style announcement badge container
 *
 * @example
 * ```tsx
 * // Basic announcement
 * <Announcement>
 *   <AnnouncementTag>New</AnnouncementTag>
 *   <AnnouncementTitle>
 *     Check out our latest feature
 *     <ArrowUpRightIcon size={16} />
 *   </AnnouncementTitle>
 * </Announcement>
 *
 * // Themed (colored background)
 * <Announcement themed className="bg-rose-100 text-rose-700">
 *   <AnnouncementTag>Error</AnnouncementTag>
 *   <AnnouncementTitle>Something went wrong</AnnouncementTitle>
 * </Announcement>
 *
 * // Success variant
 * <Announcement themed className="bg-green-100 text-green-700">
 *   <AnnouncementTag>Success</AnnouncementTag>
 *   <AnnouncementTitle>Operation completed</AnnouncementTitle>
 * </Announcement>
 * ```
 */
declare const Announcement: React$1.FC<AnnouncementProps>;
/**
 * AnnouncementTag - Category/type label on the left side
 */
declare const AnnouncementTag: React$1.FC<AnnouncementTagProps>;
/**
 * AnnouncementTitle - Main announcement text container
 */
declare const AnnouncementTitle: React$1.FC<AnnouncementTitleProps>;

type Theme = "light" | "dark" | "dim";
interface ThemeSwitcherProps {
    defaultValue?: Theme;
    value?: Theme;
    onValueChange?: (theme: Theme) => void;
}
declare function AppleLiquidGlassSwitcher({ defaultValue, value, onValueChange, }: ThemeSwitcherProps): react_jsx_runtime.JSX.Element;

interface AssistedPasswordConfirmationProps {
    /** The original password to match against */
    password: string;
    /** Placeholder text for the confirmation input */
    placeholder?: string;
    /** Callback when password confirmation changes */
    onConfirmChange?: (value: string) => void;
    /** Callback when passwords match */
    onMatch?: () => void;
    /** Additional className for the container */
    className?: string;
    /** Whether to show the password hint */
    showHint?: boolean;
}
/**
 * AssistedPasswordConfirmation - Visual password confirmation with character-by-character feedback
 *
 * Shows real-time visual feedback as the user types their password confirmation.
 * Green highlights for matching characters, red for mismatches.
 *
 * @example
 * ```tsx
 * <AssistedPasswordConfirmation
 *   password={password}
 *   onMatch={() => setIsValid(true)}
 * />
 * ```
 */
declare function AssistedPasswordConfirmation({ password, placeholder, onConfirmChange, onMatch, className, showHint, }: AssistedPasswordConfirmationProps): react_jsx_runtime.JSX.Element;

/**
 * Props for AuroraBackground component
 *
 * @description
 * Ambient "aurora halo" background for marketing sections. The 2026 visual
 * language replacement for the 2022-2024 single-blob `blur-[120px] bg-primary/10`
 * pattern. Renders as a stack of low-saturation multi-stop radial gradients with
 * an optional fractal-noise grain overlay.
 *
 * Server Component compatible (no hooks, no client APIs).
 *
 * **Placement contract:**
 * - Parent container MUST be `relative` (or `absolute` / `fixed`).
 * - The wrapper is `absolute inset-0 -z-10 pointer-events-none`.
 * - Decorative only — `aria-hidden="true"`.
 */
interface AuroraBackgroundProps {
    /** Visual variant — different mood. Default: `subtle`. */
    variant?: "subtle" | "vivid" | "monochrome";
    /** Opacity multiplier 0-1. Default: 0.5. */
    intensity?: number;
    /** Position of the dominant aurora — affects gradient anchor points. */
    position?: "top" | "center" | "bottom";
    /** Add noise grain overlay (default true). Set false if container already has grain. */
    noise?: boolean;
    /** Additional class names — merged onto the outer wrapper. */
    className?: string;
}
/**
 * AuroraBackground — ambient "aurora halo" backdrop for marketing sections.
 *
 * @example
 * ```tsx
 * // Hero section — vivid + top anchor
 * <section className="relative overflow-hidden py-32">
 *   <AuroraBackground variant="vivid" position="top" />
 *   <h1>Welcome to Nebutra</h1>
 * </section>
 *
 * // Pricing — neutral mono wash, no grain (already has grain on parent)
 * <section className="relative">
 *   <AuroraBackground variant="monochrome" noise={false} />
 *   <PricingGrid />
 * </section>
 * ```
 */
declare function AuroraBackground({ variant, intensity, position, noise, className, }: AuroraBackgroundProps): react_jsx_runtime.JSX.Element;
declare namespace AuroraBackground {
    var displayName: string;
}

/**
 * Props for AuroraText component
 *
 * @description
 * Animated gradient text with aurora-like color shifting effect.
 * Uses CSS animation with background-position and subtle transform.
 *
 * **UX Scenarios:**
 * - Hero section headlines
 * - Brand name highlights
 * - Feature titles
 * - Premium/special content emphasis
 * - Marketing copy accents
 *
 * **Requires Tailwind config:**
 * ```js
 * animation: {
 *   aurora: "aurora 8s ease-in-out infinite alternate",
 * },
 * keyframes: {
 *   aurora: {
 *     "0%": { backgroundPosition: "0% 50%", transform: "rotate(-5deg) scale(0.9)" },
 *     "25%": { backgroundPosition: "50% 100%", transform: "rotate(5deg) scale(1.1)" },
 *     "50%": { backgroundPosition: "100% 50%", transform: "rotate(-3deg) scale(0.95)" },
 *     "75%": { backgroundPosition: "50% 0%", transform: "rotate(3deg) scale(1.05)" },
 *     "100%": { backgroundPosition: "0% 50%", transform: "rotate(-5deg) scale(0.9)" },
 *   },
 * },
 * ```
 */
interface AuroraTextProps {
    /** Text content to display */
    children: React__default.ReactNode;
    /** Additional CSS classes */
    className?: string;
    /**
     * Array of colors for the gradient
     * @default ["hsl(var(--primary))", "var(--brand-accent)", "var(--brand-tertiary)", "var(--primary)"]
     */
    colors?: string[];
    /**
     * Animation speed multiplier (higher = faster)
     * @default 1
     */
    speed?: number;
}
/**
 * AuroraText - Animated aurora gradient text effect
 *
 * @example
 * ```tsx
 * // Basic usage
 * <AuroraText>Aurora Text</AuroraText>
 *
 * // Custom colors
 * <AuroraText colors={["hsl(var(--primary))", "var(--brand-accent)", "var(--brand-tertiary)"]}>
 *   Custom Colors
 * </AuroraText>
 *
 * // Faster animation
 * <AuroraText speed={2}>Fast Aurora</AuroraText>
 *
 * // As heading
 * <h1 className="text-6xl font-bold">
 *   <AuroraText>Welcome</AuroraText>
 * </h1>
 * ```
 */
declare const AuroraText: React__default.MemoExoticComponent<({ children, className, colors, speed, }: AuroraTextProps) => react_jsx_runtime.JSX.Element>;

/**
 * Avatar item configuration
 */
interface AvatarCircleItem {
    /** URL of the avatar image */
    imageUrl: string;
    /** URL to navigate to when avatar is clicked */
    profileUrl: string;
    /** Alt text for accessibility (defaults to "Avatar {index}") */
    alt?: string;
}
/**
 * Props for the AvatarCircles component
 */
interface AvatarCirclesProps {
    /** Additional CSS classes */
    className?: string;
    /** Number to display in the overflow indicator (e.g., "+99") */
    numPeople?: number;
    /** Array of avatar configurations */
    avatarUrls: AvatarCircleItem[];
    /** Size of each avatar in pixels (default: 40) */
    size?: number;
    /** URL for the overflow indicator click */
    overflowUrl?: string;
}
/**
 * AvatarCircles - Overlapping avatar stack component
 *
 * Displays a row of overlapping circular avatars with an optional
 * count indicator for additional people. Commonly used for showing
 * team members, contributors, or social proof.
 *
 * @example Basic usage
 * ```tsx
 * <AvatarCircles
 *   avatarUrls={[
 *     { imageUrl: "https://example.com/avatar1.jpg", profileUrl: "/user/1" },
 *     { imageUrl: "https://example.com/avatar2.jpg", profileUrl: "/user/2" },
 *   ]}
 * />
 * ```
 *
 * @example With overflow count
 * ```tsx
 * <AvatarCircles
 *   numPeople={99}
 *   avatarUrls={[
 *     { imageUrl: "https://avatars.githubusercontent.com/u/1", profileUrl: "https://github.com/user1" },
 *     { imageUrl: "https://avatars.githubusercontent.com/u/2", profileUrl: "https://github.com/user2" },
 *     { imageUrl: "https://avatars.githubusercontent.com/u/3", profileUrl: "https://github.com/user3" },
 *   ]}
 * />
 * ```
 *
 * @example Custom size
 * ```tsx
 * <AvatarCircles
 *   size={48}
 *   numPeople={50}
 *   avatarUrls={avatars}
 * />
 * ```
 *
 * @example Social proof section
 * ```tsx
 * <div className="flex items-center gap-4">
 *   <AvatarCircles avatarUrls={users} numPeople={1000} />
 *   <span className="text-sm text-muted-foreground">
 *     Join 1,000+ developers
 *   </span>
 * </div>
 * ```
 */
declare function AvatarCircles({ numPeople, className, avatarUrls, size, overflowUrl, }: AvatarCirclesProps): react_jsx_runtime.JSX.Element;

interface GitHubAvatarProps extends AvatarProps {
    username: string;
}
declare function GitHubAvatar({ username, size, className, ...props }: GitHubAvatarProps): react_jsx_runtime.JSX.Element;
interface GitLabAvatarProps extends AvatarProps {
    username: string;
}
declare function GitLabAvatar({ username, size, className, ...props }: GitLabAvatarProps): react_jsx_runtime.JSX.Element;
interface BitbucketAvatarProps extends AvatarProps {
    username: string;
}
declare function BitbucketAvatar({ username, size, className, ...props }: BitbucketAvatarProps): react_jsx_runtime.JSX.Element;
interface AvatarWithIconProps extends AvatarProps {
    icon: React$1.ReactNode;
    iconBackground?: boolean | string;
    src?: string;
    alt?: string;
    fallback?: string;
}
declare function AvatarWithIcon({ icon, iconBackground, src, alt, fallback, size, className, ...props }: AvatarWithIconProps): react_jsx_runtime.JSX.Element;
type DiceBearStyle = "avataaars" | "avataaars-neutral" | "bottts" | "bottts-neutral" | "identicon" | "lorelei" | "lorelei-neutral" | "notionists" | "notionists-neutral" | "open-peeps" | "pixel-art" | "pixel-art-neutral" | "shapes" | "thumbs" | "fun-emoji" | "micah" | "miniavs" | "rings" | "croodles" | "croodles-neutral" | "dylan" | "glass";
interface DiceBearAvatarProps extends Omit<AvatarProps, "style"> {
    seed: string;
    avatarStyle?: DiceBearStyle;
    options?: Record<string, string | number>;
    style?: React$1.CSSProperties;
}
declare function DiceBearAvatar({ seed, avatarStyle, options, size, className, ...props }: DiceBearAvatarProps): react_jsx_runtime.JSX.Element;

interface User {
    name: string;
    role?: string;
    image?: string;
}
interface AvatarSmartGroupProps {
    users: User[];
    variant?: "centered" | "uniform";
    size?: number;
    sizeStep?: number;
    overlap?: number;
    ringColor?: string;
    hoverScale?: number;
    tooltipBg?: string;
}
declare function AvatarSmartGroup({ users, variant, size, sizeStep, overlap, ringColor, hoverScale, tooltipBg, }: AvatarSmartGroupProps): react_jsx_runtime.JSX.Element;

interface AwardsComponentProps {
    variant?: "stamp" | "award" | "certificate" | "badge" | "sticker" | "id-card";
    title: string;
    subtitle?: string;
    description?: string;
    date?: string;
    recipient?: string;
    level?: "bronze" | "silver" | "gold" | "platinum";
    className?: string;
    showIcon?: boolean;
    customIcon?: React__default.ReactNode;
}
declare function Awards({ variant, title, subtitle, description, date, recipient, level, className, showIcon, }: AwardsComponentProps): react_jsx_runtime.JSX.Element | null;

interface Badge1Props extends Omit<BadgeProps, "asChild" | "icon" | "size" | "variant"> {
    variant?: BadgeProps["variant"];
    size?: BadgeProps["size"];
    capitalize?: boolean;
    icon?: React__default.ReactNode;
    as?: typeof Link;
    href?: string;
}
declare const Badge1: ({ children, className, variant, size, capitalize, icon, as, href, ...props }: Badge1Props) => react_jsx_runtime.JSX.Element;

declare const baseBadgeVariants: (props?: ({
    variant?: "outline" | "info" | "secondary" | "primary" | "destructive" | "success" | "warning" | null | undefined;
    appearance?: "outline" | "light" | "default" | "ghost" | null | undefined;
    disabled?: boolean | null | undefined;
    size?: "xs" | "sm" | "md" | "lg" | null | undefined;
    shape?: "default" | "circle" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const baseBadgeButtonVariants: (props?: ({
    variant?: "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

interface BaseBadgeButtonProps extends useRender.ComponentProps<"button">, VariantProps<typeof baseBadgeButtonVariants> {
    asChild?: boolean;
}
declare function BaseBadgeButton({ render, asChild, children, className, variant, ...props }: BaseBadgeButtonProps): React$1.ReactElement<unknown, string | React$1.JSXElementConstructor<any>>;

type BaseBadgeDotProps = React$1.HTMLAttributes<HTMLSpanElement>;
declare function BaseBadgeDot({ className, ...props }: BaseBadgeDotProps): react_jsx_runtime.JSX.Element;

interface BaseBadgeProps extends useRender.ComponentProps<"span">, VariantProps<typeof baseBadgeVariants> {
    asChild?: boolean;
    dotClassName?: string;
    disabled?: boolean;
}
declare function BaseBadge({ render, asChild, children, className, variant, size, appearance, shape, disabled, ...props }: BaseBadgeProps): React$1.ReactElement<unknown, string | React$1.JSXElementConstructor<any>>;

declare const baseButtonVariants: (props?: ({
    variant?: "dashed" | "outline" | "secondary" | "primary" | "destructive" | "mono" | "ghost" | "dim" | "foreground" | "inverse" | null | undefined;
    appearance?: "default" | "ghost" | null | undefined;
    underline?: "dashed" | "solid" | null | undefined;
    underlined?: "dashed" | "solid" | null | undefined;
    size?: "icon" | "sm" | "md" | "lg" | null | undefined;
    autoHeight?: boolean | null | undefined;
    shape?: "default" | "circle" | null | undefined;
    mode?: "default" | "icon" | "input" | "link" | null | undefined;
    placeholder?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

interface BaseButtonProps extends useRender.ComponentProps<"button">, VariantProps<typeof baseButtonVariants> {
    selected?: boolean;
    asChild?: boolean;
}
declare function BaseButton({ render, asChild, children, className, selected, variant, shape, appearance, mode, size, autoHeight, underlined, underline, placeholder, ...props }: BaseButtonProps): React$1.ReactElement<unknown, string | React$1.JSXElementConstructor<any>>;
interface BaseButtonArrowProps extends IconProps {
    icon?: Icon;
}
declare function BaseButtonArrow({ icon: Icon, className, ...props }: BaseButtonArrowProps): react_jsx_runtime.JSX.Element;

/**
 * Props for BentoGrid container
 *
 * @description
 * A responsive grid container for bento-style feature showcases.
 * Default is 3-column layout with auto-rows.
 *
 * **UX Scenarios:**
 * - Feature showcase sections
 * - Product capability grids
 * - Dashboard widget layouts
 * - Portfolio galleries
 * - Service offering displays
 */
interface BentoGridProps extends ComponentPropsWithoutRef<"div"> {
    children: ReactNode;
    className?: string;
}
/**
 * Props for BentoCard item
 *
 * @description
 * Individual card within the BentoGrid with background slot, icon,
 * title, description, and hover-reveal CTA.
 *
 * **Features:**
 * - Background slot for custom content (images, animations, etc.)
 * - Icon with scale animation on hover
 * - Text content slides up on hover (desktop)
 * - CTA button reveals on hover (desktop), always visible on mobile
 */
interface BentoCardProps extends ComponentPropsWithoutRef<"div"> {
    /** Card title */
    name: string;
    /** Card description */
    description: string;
    /** Icon component to display */
    Icon: React.ElementType;
    /** Background content (images, animations, gradients) */
    background?: ReactNode;
    /** Link URL for CTA */
    href?: string;
    /** CTA button text */
    cta?: string;
    /** Additional className for grid span control */
    className?: string;
}
/**
 * BentoGrid - Container for bento-style grid layouts
 *
 * @example
 * ```tsx
 * <BentoGrid className="lg:grid-cols-3">
 *   <BentoCard
 *     name="Feature 1"
 *     description="Description here"
 *     Icon={Sparkles}
 *     className="lg:col-span-2"
 *   />
 *   <BentoCard ... />
 * </BentoGrid>
 * ```
 */
declare const BentoGrid: ({ children, className, ...props }: BentoGridProps) => react_jsx_runtime.JSX.Element;
/**
 * BentoCard - Individual card with hover effects
 *
 * @example
 * ```tsx
 * <BentoCard
 *   name="AI Integration"
 *   description="Seamlessly integrate AI into your workflow"
 *   Icon={Brain}
 *   background={<GradientBackground />}
 *   href="/features/ai"
 *   cta="Learn more"
 *   className="lg:col-span-2 lg:row-span-2"
 * />
 * ```
 */
declare const BentoCard: ({ name, className, background, Icon, description, href, cta, ...props }: BentoCardProps) => react_jsx_runtime.JSX.Element;

interface ResponsiveProp<T> {
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
}
interface BookProps {
    title: string;
    /** @default "stripe" */
    variant?: "simple" | "stripe";
    /** @default 196 */
    width?: number | ResponsiveProp<number>;
    /** Cover color. Hex literal (categorical) or CSS `var(--…)` (token). */
    color?: string;
    /** Title + illustration color. @default project foreground */
    textColor?: string;
    illustration?: ReactNode;
    /** Hero-shot paper grain. Pulls a 3rd-party AVIF — registry-distribution caveat in docblock. */
    textured?: boolean;
}
declare function Book({ title, variant, width, color, textColor, illustration, textured, }: BookProps): react_jsx_runtime.JSX.Element;

type MotionTransition$1 = NonNullable<React$1.ComponentProps<typeof motion.div>["transition"]>;
interface BorderTrailProps {
    /** Additional className for the trail element */
    className?: string;
    /** Size of the trail element in pixels */
    size?: number;
    /** Custom framer-motion transition */
    transition?: MotionTransition$1;
    /** Delay before animation starts */
    delay?: number;
    /** Callback when animation completes */
    onAnimationComplete?: () => void;
    /** Additional inline styles for the trail element */
    style?: React$1.CSSProperties;
}
/**
 * BorderTrail - Animated border trail effect component
 *
 * Creates an animated element that travels along the border of its parent container.
 * Parent must have `position: relative` and `border-radius` for proper effect.
 *
 * @example
 * ```tsx
 * <div className="relative rounded-[var(--radius-md)]">
 *   <BorderTrail size={100} />
 *   <Content />
 * </div>
 * ```
 */
declare function BorderTrail({ className, size, transition, delay, onAnimationComplete, style, }: BorderTrailProps): react_jsx_runtime.JSX.Element;

/**
 * Box - Fundamental layout primitive
 *
 * A polymorphic box component that serves as the foundation for all layouts.
 * Supports spacing props that map to the token system.
 *
 * @see apps/landing/DESIGN.md Section 10.1
 */
interface BoxOwnProps {
    /** Render as a different element */
    as?: React$1.ElementType;
    /** Padding on all sides */
    p?: SpacingScale;
    /** Padding horizontal (left/right) */
    px?: SpacingScale;
    /** Padding vertical (top/bottom) */
    py?: SpacingScale;
    /** Padding top */
    pt?: SpacingScale;
    /** Padding right */
    pr?: SpacingScale;
    /** Padding bottom */
    pb?: SpacingScale;
    /** Padding left */
    pl?: SpacingScale;
    /** Margin on all sides */
    m?: SpacingScale;
    /** Margin horizontal (left/right) */
    mx?: SpacingScale;
    /** Margin vertical (top/bottom) */
    my?: SpacingScale;
    /** Margin top */
    mt?: SpacingScale;
    /** Margin right */
    mr?: SpacingScale;
    /** Margin bottom */
    mb?: SpacingScale;
    /** Margin left */
    ml?: SpacingScale;
    className?: string;
    children?: React$1.ReactNode;
}
type BoxProps<T extends React$1.ElementType = "div"> = BoxOwnProps & Omit<React$1.ComponentPropsWithoutRef<T>, keyof BoxOwnProps>;
type BoxRef<T extends React$1.ElementType> = React$1.ComponentPropsWithRef<T>["ref"];
type BoxComponent = <T extends React$1.ElementType = "div">(props: BoxProps<T> & {
    ref?: BoxRef<T>;
}) => React$1.ReactElement | null;
declare const Box: BoxComponent;

type Size = "sm" | "md" | "lg" | "xl";
type Variant$1 = "gradient" | "soft" | "outline";
interface BrandMarkProps {
    /** Optional icon or glyph rendered inside the mark. Defaults to an abstract dot. */
    children?: ReactNode;
    /** Visual variant — solid gradient, soft tinted, or outline. */
    variant?: Variant$1;
    /** Diameter preset. */
    size?: Size;
    /** Extra classes for the outer element. */
    className?: string;
    /** Whether to render a soft halo behind the mark. */
    halo?: boolean;
    /** Make the mark non-interactive for screen readers. */
    ariaHidden?: boolean;
}
/**
 * BrandMark — small branded visual primitive (AI badge / empty-state anchor).
 *
 * Binds **roles.brand** via `--brand-mark` / `--brand-mark-foreground`, never
 * product CTA (`--primary` / roles.action). Skins and Brand Package override
 * `--brand-mark` independently of buttons.
 *
 * Full VI lockups use `@nebutra/brand` Logo / LogomarkSVG (currentColor →
 * `text-brand-mark` or VI assets).
 *
 * @example
 * ```tsx
 * <BrandMark size="lg" halo>
 *   <Sparkles className="h-5 w-5" />
 * </BrandMark>
 * ```
 */
declare function BrandMark({ children, variant, size, className, halo, ariaHidden, }: BrandMarkProps): react_jsx_runtime.JSX.Element;

type BaseProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    /** URL displayed in the address bar (host + path). */
    address?: string;
    /**
     * Inner viewport aspect ratio. Number is width/height (e.g. `16/9 = 1.777`).
     * String passes directly to CSS `aspect-ratio` (e.g. `"16 / 9"`, `"4 / 3"`).
     *
     * Defaults: `"16 / 9"` in image mode (prevents layout shift on slow load),
     * undefined in children mode (consumer JSX owns sizing).
     */
    aspectRatio?: number | string;
};
type ChildrenProps = BaseProps & {
    children: ReactNode;
    imageSrc?: never;
    imageAlt?: never;
};
type ImageProps = BaseProps & {
    children?: never;
    imageSrc: string;
    imageAlt: string;
};
type BrowserProps = ChildrenProps | ImageProps;
/** @deprecated Use `BrowserProps` instead. */
type BrowserMockupProps = BrowserProps;
/**
 * @example Children mode
 * ```tsx
 * <Browser address="vercel.com"><MyDemo /></Browser>
 * ```
 *
 * @example Image mode (alt required)
 * ```tsx
 * <Browser
 *   address="vercel.com/dashboard"
 *   imageSrc="/dashboard.png"
 *   imageAlt="Dashboard showing the current month's deployments and bandwidth usage"
 * />
 * ```
 */
declare function Browser(props: BrowserProps): react_jsx_runtime.JSX.Element;
declare namespace Browser {
    var displayName: string;
}
/** @deprecated Use `Browser` instead. */
declare const BrowserMockup: typeof Browser;

interface CompactBulkActionBarProps {
    selectedCount: number;
    onClearSelection: () => void;
    actions: BulkAction[];
    className?: string;
}
declare function CompactBulkActionBar({ selectedCount, onClearSelection, actions, className, }: CompactBulkActionBarProps): react_jsx_runtime.JSX.Element | null;

interface FloatingBulkActionBarProps extends Omit<BulkActionBarProps, "fixed" | "position"> {
    /** Whether visible */
    visible?: boolean;
}
declare function FloatingBulkActionBar({ visible, className, ...props }: FloatingBulkActionBarProps): react_jsx_runtime.JSX.Element | null;

interface BulkAction {
    /** Action identifier */
    id?: string;
    /** Display label */
    label: string;
    /** Icon component */
    icon?: Icon;
    /** Click callback */
    onClick: () => void | Promise<void>;
    /** Button variant */
    variant?: "default" | "secondary" | "destructive" | "outline" | "ghost";
    /** Disabled state */
    disabled?: boolean;
    /** Tooltip when disabled */
    disabledReason?: string;
    /** Loading state */
    loading?: boolean;
    /** Minimum selection count required */
    minSelection?: number;
    /** Maximum selection count allowed */
    maxSelection?: number;
}
interface BulkActionBarProps {
    /** Number of selected items */
    selectedCount: number;
    /** Total number of items */
    totalCount?: number;
    /** Clear selection callback */
    onClearSelection: () => void;
    /** Select all callback */
    onSelectAll?: () => void;
    /** List of bulk actions */
    actions: BulkAction[];
    /** Item name for display (e.g., "items", "users") */
    itemName?: string;
    /** Custom class name */
    className?: string;
    /** Bar position */
    position?: "bottom" | "top";
    /** Fixed positioning */
    fixed?: boolean;
}
declare function BulkActionBar({ selectedCount, totalCount, onClearSelection, onSelectAll, actions, itemName, className, position, fixed, }: BulkActionBarProps): react_jsx_runtime.JSX.Element | null;
interface UseBulkSelectionOptions<T> {
    items: T[];
    getItemId: (item: T) => string;
}
interface UseBulkSelectionReturn<T> {
    selectedIds: Set<string>;
    selectedItems: T[];
    selectedCount: number;
    isSelected: (item: T) => boolean;
    isAllSelected: boolean;
    isPartiallySelected: boolean;
    toggleSelection: (item: T) => void;
    selectAll: () => void;
    clearSelection: () => void;
    selectItems: (items: T[]) => void;
}
declare function useBulkSelection<T>({ items, getItemId, }: UseBulkSelectionOptions<T>): UseBulkSelectionReturn<T>;

interface CanvasRevealEffectProps {
    /** Animation speed (0.1 = slower, 1.0 = faster) */
    animationSpeed?: number;
    /** Array of opacity values for the dot matrix */
    opacities?: number[];
    /** Array of RGB color arrays (0-255) */
    colors?: number[][];
    /** Container className */
    containerClassName?: string;
    /** Dot size in pixels */
    dotSize?: number;
    /** Show gradient overlay */
    showGradient?: boolean;
}
/**
 * CanvasRevealEffect - WebGL dot matrix animation effect
 *
 * A Three.js-powered animated dot matrix effect with customizable colors and animation speed.
 * Requires `three` and `@react-three/fiber` to be installed.
 *
 * @example
 * ```tsx
 * <CanvasRevealEffect
 *   animationSpeed={0.5}
 *   colors={[[59, 130, 246], [139, 92, 246]]}
 *   dotSize={3}
 * />
 * ```
 */
declare function CanvasRevealEffect({ animationSpeed, opacities, colors, containerClassName, dotSize, showGradient, }: CanvasRevealEffectProps): react_jsx_runtime.JSX.Element;
declare namespace CanvasRevealEffect {
    var displayName: string;
}

interface CardSpotlightProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Spotlight radius in pixels */
    radius?: number;
    /** Spotlight background color */
    color?: string;
    /** Card content */
    children: React$1.ReactNode;
}
/**
 * CardSpotlight - Card with mouse-tracking spotlight effect
 *
 * A card component that displays a spotlight effect following the mouse cursor,
 * with an optional canvas reveal animation on hover.
 *
 * Requires `three` and `@react-three/fiber` to be installed for the canvas effect.
 *
 * @example
 * ```tsx
 * <CardSpotlight className="h-96 w-96">
 *   <h2 className="text-xl font-bold text-white">Title</h2>
 *   <p className="text-muted-foreground">Description content</p>
 * </CardSpotlight>
 * ```
 */
declare function CardSpotlight({ children, radius, color, className, ...props }: CardSpotlightProps): react_jsx_runtime.JSX.Element;
declare namespace CardSpotlight {
    var displayName: string;
}

type CarouselApi = UseEmblaCarouselType[1];
type UseCarouselParameters = Parameters<typeof useEmblaCarousel>;
type CarouselOptions = UseCarouselParameters[0];
type CarouselPlugin = UseCarouselParameters[1];
type CarouselProps = {
    opts?: CarouselOptions;
    plugins?: CarouselPlugin;
    orientation?: "horizontal" | "vertical";
    setApi?: (api: CarouselApi) => void;
};
type CarouselContextProps = {
    carouselRef: ReturnType<typeof useEmblaCarousel>[0];
    api: ReturnType<typeof useEmblaCarousel>[1];
    scrollPrev: () => void;
    scrollNext: () => void;
    canScrollPrev: boolean;
    canScrollNext: boolean;
} & CarouselProps;
declare function useCarousel(): CarouselContextProps;
declare const Carousel: {
    ({ orientation, opts, setApi, plugins, className, children, ref, ...props }: React$1.HTMLAttributes<HTMLDivElement> & CarouselProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CarouselContent: {
    ({ className, ref, ...props }: React$1.HTMLAttributes<HTMLDivElement> & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CarouselItem: {
    ({ className, ref, ...props }: React$1.HTMLAttributes<HTMLDivElement> & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CarouselPrevious: {
    ({ className, variant, size, ref, ...props }: React$1.ComponentProps<typeof Button> & {
        ref?: React$1.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CarouselNext: {
    ({ className, variant, size, ref, ...props }: React$1.ComponentProps<typeof Button> & {
        ref?: React$1.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const THEMES: {
    readonly light: "";
    readonly dark: ".dark";
};
type ChartConfig = {
    [k in string]: {
        label?: React$1.ReactNode;
        icon?: React$1.ComponentType;
    } & ({
        color?: string;
        theme?: never;
    } | {
        color?: never;
        theme: Record<keyof typeof THEMES, string>;
    });
};
type ChartContextProps = {
    config: ChartConfig;
};
declare function useChart(): ChartContextProps;
interface ChartContainerProps extends React$1.ComponentProps<"div"> {
    config: ChartConfig;
    children: React$1.ComponentProps<typeof RechartsPrimitive.ResponsiveContainer>["children"];
}
declare const ChartContainer: {
    ({ id, className, children, config, ref, ...props }: ChartContainerProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ChartTooltip: typeof RechartsPrimitive.Tooltip;
interface ChartTooltipContentProps {
    active?: boolean;
    payload?: Array<{
        value?: number;
        name?: string;
        dataKey?: string;
        color?: string;
        payload?: Record<string, unknown>;
    }>;
    label?: string;
    labelFormatter?: (value: unknown, payload: unknown[]) => React$1.ReactNode;
    labelClassName?: string;
    formatter?: (value: number, name: string, item: unknown, index: number, payload: unknown) => React$1.ReactNode;
    color?: string;
    className?: string;
    hideLabel?: boolean;
    hideIndicator?: boolean;
    indicator?: "line" | "dot" | "dashed";
    nameKey?: string;
    labelKey?: string;
}
declare const ChartTooltipContent: {
    ({ ref, active, payload, className, indicator, hideLabel, hideIndicator, label, labelFormatter, labelClassName, formatter, color, nameKey, labelKey, }: ChartTooltipContentProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};
declare const ChartLegend: typeof RechartsPrimitive.Legend;
interface ChartLegendContentProps extends React$1.ComponentProps<"div"> {
    payload?: Array<{
        value?: unknown;
        dataKey?: string | number;
        name?: string;
        color?: string;
        payload?: Record<string, unknown>;
    }>;
    verticalAlign?: "top" | "middle" | "bottom";
    hideIcon?: boolean;
    nameKey?: string;
}
declare const ChartLegendContent: {
    ({ ref, className, hideIcon, payload, verticalAlign, nameKey, }: ChartLegendContentProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};

type ChoiceboxType = "radio" | "checkbox";
type ChoiceboxDirection = "row" | "column";
/**
 * Props for ChoiceboxGroup — the container component
 */
interface ChoiceboxGroupProps {
    /** Selection mode */
    type: ChoiceboxType;
    /** Layout direction */
    direction?: ChoiceboxDirection;
    /** Accessible label for the group */
    label: string;
    /** Visually display the label (always present as aria-label) */
    showLabel?: boolean;
    /** Current value — string for radio, string[] for checkbox */
    value?: string | string[];
    /** Default value for uncontrolled usage */
    defaultValue?: string | string[];
    /** Callback when value changes */
    onChange?: (value: string | string[]) => void;
    /** Disable all items */
    disabled?: boolean;
    /** Additional CSS classes for the group container */
    className?: string;
    /** ChoiceboxGroup.Item elements */
    children: React$1.ReactNode;
}
/**
 * Props for ChoiceboxGroup.Item — an individual selectable card
 */
interface ChoiceboxItemProps {
    /** Display title */
    title: string;
    /** Secondary description text */
    description?: string;
    /** Unique value identifier */
    value: string;
    /** Disable this specific item */
    disabled?: boolean;
    /** Additional CSS classes */
    className?: string;
    /** Custom content rendered below title/description when selected */
    children?: React$1.ReactNode;
}
declare const choiceboxItemVariants: (props?: ({
    selected?: boolean | null | undefined;
    isDisabled?: boolean | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare function ChoiceboxItem({ title, description, value, disabled: itemDisabled, className, children, }: ChoiceboxItemProps): react_jsx_runtime.JSX.Element;
declare namespace ChoiceboxItem {
    var displayName: string;
}
declare function ChoiceboxGroupRoot({ type, direction, label, showLabel, value: controlledValue, defaultValue, onChange, disabled, className, children, }: ChoiceboxGroupProps): react_jsx_runtime.JSX.Element;
declare namespace ChoiceboxGroupRoot {
    var displayName: string;
}
/**
 * ChoiceboxGroup — Geist-style card selection control
 *
 * A larger form of Radio or Checkbox where the user has a larger
 * tap target and more details per option.
 *
 * Why `role="radiogroup"` instead of `<fieldset><legend>`:
 *   The WAI-ARIA radiogroup pattern is the AT-equivalent of `<fieldset>` and
 *   composes more cleanly with `aria-labelledby` (the `<label>` slot is a
 *   rendered `<span>`, not a `<legend>`, so consumers can style it freely).
 *   `<fieldset>`'s automatic disabled-inheritance is replicated by passing
 *   `disabled` on the group, which propagates via context. Do NOT swap to
 *   `<fieldset>` without first confirming the styling regression budget.
 *
 * @example Single-select (radio)
 * ```tsx
 * <ChoiceboxGroup type="radio" direction="row" label="Plan" value={val} onChange={setVal}>
 *   <ChoiceboxGroup.Item title="Pro Trial" description="Free for two weeks" value="trial" />
 *   <ChoiceboxGroup.Item title="Pro" description="Get started now" value="pro" />
 * </ChoiceboxGroup>
 * ```
 *
 * @example Multi-select (checkbox)
 * ```tsx
 * <ChoiceboxGroup type="checkbox" direction="row" label="Features" value={vals} onChange={setVals}>
 *   <ChoiceboxGroup.Item title="Analytics" description="Track usage" value="analytics" />
 *   <ChoiceboxGroup.Item title="API" description="REST + GraphQL" value="api" />
 * </ChoiceboxGroup>
 * ```
 */
declare const ChoiceboxGroup: typeof ChoiceboxGroupRoot & {
    Item: typeof ChoiceboxItem;
};

declare const Collapsible: {
    ({ className, open: openProp, defaultOpen, onOpenChange, disabled, children, ref, ...props }: React$1.HTMLAttributes<HTMLDivElement> & {
        open?: boolean;
        defaultOpen?: boolean;
        onOpenChange?: (open: boolean) => void;
        disabled?: boolean;
    } & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CollapsibleTrigger: {
    ({ className, asChild, children, ref, ...props }: React$1.ButtonHTMLAttributes<HTMLButtonElement> & {
        asChild?: boolean;
    } & {
        ref?: React$1.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CollapsibleContent: {
    ({ className, children, ref, ...props }: React$1.HTMLAttributes<HTMLDivElement> & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * Color variant definitions for ColorBadge
 *
 * Note: Some variants use CSS custom properties (--ds-*) for advanced theming.
 * If not defined, fallback to standard Tailwind colors.
 */
declare const colorBadgeVariants: {
    readonly gray: "bg-muted text-white fill-white";
    readonly "gray-subtle": "bg-muted text-muted-foreground fill-gray-900";
    readonly blue: "bg-blue-700 text-white fill-white";
    readonly "blue-subtle": "bg-blue-200 text-blue-900 fill-blue-900";
    readonly purple: "bg-purple-700 text-white fill-white";
    readonly "purple-subtle": "bg-purple-200 text-purple-900 fill-purple-900";
    readonly amber: "bg-amber-600 text-black fill-black";
    readonly "amber-subtle": "bg-amber-200 text-amber-900 fill-amber-900";
    readonly red: "bg-red-700 text-white fill-white";
    readonly "red-subtle": "bg-red-200 text-red-900 fill-red-900";
    readonly pink: "bg-pink-700 text-white fill-white";
    readonly "pink-subtle": "bg-pink-300 text-pink-900 fill-pink-900";
    readonly green: "bg-green-700 text-white fill-white";
    readonly "green-subtle": "bg-green-200 text-green-900 fill-green-900";
    readonly teal: "bg-teal-700 text-white fill-white";
    readonly "teal-subtle": "bg-teal-300 text-teal-900 fill-teal-900";
    readonly inverted: "bg-muted text-muted-foreground fill-gray-100 dark:fill-gray-900";
    readonly trial: "bg-gradient-to-br from-blue-500 to-pink-500 text-white fill-white";
    readonly turbo: "bg-gradient-to-br from-rose-500 to-blue-500 text-white fill-white";
    readonly pill: "bg-background text-foreground fill-foreground border border-border";
};
declare const colorBadgeSizes: {
    readonly sm: "text-[11px] h-5 px-1.5 tracking-[0.2px] gap-[3px]";
    readonly md: "text-[12px] h-6 px-2.5 tracking-normal gap-1";
    readonly lg: "text-[14px] h-8 px-3 tracking-normal gap-1.5";
};
type ColorBadgeVariant = keyof typeof colorBadgeVariants;
type ColorBadgeSize = keyof typeof colorBadgeSizes;
/**
 * Props for the ColorBadge component.
 */
interface ColorBadgeProps {
    /** Content to display inside the badge */
    children?: React$1.ReactNode;
    /** Color variant */
    variant?: ColorBadgeVariant;
    /** Size variant */
    size?: ColorBadgeSize;
    /** Whether to capitalize the text */
    capitalize?: boolean;
    /** Optional icon to display before the text */
    icon?: React$1.ReactNode;
    /** Render as a Next.js Link (requires href) */
    asLink?: boolean;
    /** URL for link variant */
    href?: string;
    /** Additional CSS classes */
    className?: string;
}
/**
 * ColorBadge - Vercel-style multi-color badge component
 *
 * A versatile badge component with multiple color variants and sizes.
 * Supports icons and can be rendered as a link.
 *
 * @example Basic usage
 * ```tsx
 * <ColorBadge variant="blue">New</ColorBadge>
 * <ColorBadge variant="green-subtle" size="lg">Success</ColorBadge>
 * ```
 *
 * @example With icon
 * ```tsx
 * <ColorBadge variant="purple" icon={<ShieldIcon />}>
 *   Protected
 * </ColorBadge>
 * ```
 *
 * @example As link
 * ```tsx
 * <ColorBadge variant="blue" asLink href="/docs">
 *   View Docs
 * </ColorBadge>
 * ```
 *
 * @example Status badges
 * ```tsx
 * <ColorBadge variant="green">Active</ColorBadge>
 * <ColorBadge variant="amber">Pending</ColorBadge>
 * <ColorBadge variant="red">Error</ColorBadge>
 * ```
 */
declare function ColorBadge({ children, variant, size, capitalize, icon, asLink, href, className, }: ColorBadgeProps): react_jsx_runtime.JSX.Element;

interface CommandMenuRootProps {
    /** Whether the command menu is open */
    open: boolean;
    /** Setter to control the open state */
    setOpen: (open: boolean) => void;
    /** Accessible label announced by screen readers (defaults to "Command Menu") */
    label?: string;
    /** Optional hidden description for assistive technology */
    description?: string;
    /** Additional classes for the overlay panel */
    className?: string;
    /** Additional classes for the cmdk frame */
    commandClassName?: string;
    children?: React$1.ReactNode;
}
type CommandMenuItemProps = CommandItemProps & {
    /** Callback invoked when the item is selected. Prefer `onSelect` for new code. */
    callback?: () => void;
    className?: string;
    onSelect?: (value: string) => void;
};
declare function CommandMenuRoot({ open, setOpen, label, description, className, commandClassName, children, }: CommandMenuRootProps): react_jsx_runtime.JSX.Element;
declare namespace CommandMenuRoot {
    var displayName: string;
}
declare const CommandMenuItem: {
    ({ callback, className, onSelect, ref, ...props }: CommandMenuItemProps & {
        ref?: React$1.Ref<React$1.ElementRef<typeof CommandItem>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CommandMenuInput: {
    ({ ref, ...props }: CommandInputProps & {
        ref?: React$1.Ref<React$1.ElementRef<typeof CommandInput>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CommandMenuList: {
    ({ ref, ...props }: CommandListProps & {
        ref?: React$1.Ref<React$1.ElementRef<typeof CommandList>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CommandMenuEmpty: {
    ({ ref, ...props }: CommandEmptyProps & {
        ref?: React$1.Ref<React$1.ElementRef<typeof CommandEmpty>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CommandMenuResults: {
    ({ ref, ...props }: CommandResultsProps & {
        ref?: React$1.Ref<React$1.ElementRef<typeof CommandResults>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CommandMenuGroup: {
    ({ ref, ...props }: CommandGroupProps & {
        ref?: React$1.Ref<React$1.ElementRef<typeof CommandGroup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CommandMenuSeparator: {
    ({ ref, ...props }: CommandSeparatorProps & {
        ref?: React$1.Ref<React$1.ElementRef<typeof CommandSeparator>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CommandMenuShortcut: {
    ({ ...props }: CommandShortcutProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * CommandMenu — Geist-style full-screen command palette overlay.
 *
 * @example
 * ```tsx
 * const [open, setOpen] = useState(false);
 *
 * <Button onClick={() => setOpen(true)}>Open Command Menu</Button>
 * <CommandMenu.Root open={open} setOpen={setOpen}>
 *   <CommandMenu.Input placeholder="What do you need?" />
 *   <CommandMenu.List>
 *     <CommandMenu.Group heading="Suggestions">
 *       <CommandMenu.Item callback={() => doSomething()}>
 *         Figma Import
 *       </CommandMenu.Item>
 *     </CommandMenu.Group>
 *   </CommandMenu.List>
 * </CommandMenu.Root>
 * ```
 */
declare const CommandMenu: {
    readonly Root: typeof CommandMenuRoot;
    readonly Input: {
        ({ ref, ...props }: CommandInputProps & {
            ref?: React.Ref<React.ElementRef<{
                ({ className, ref, ...props }: CommandInputProps & {
                    ref?: React.Ref<React.ElementRef<React$1.ForwardRefExoticComponent<Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "key" | keyof React$1.InputHTMLAttributes<HTMLInputElement>> & {
                        ref?: React.Ref<HTMLInputElement>;
                    } & {
                        asChild?: boolean;
                    }, "key" | "asChild" | keyof React$1.InputHTMLAttributes<HTMLInputElement>>, "type" | "value" | "onChange"> & {
                        value?: string;
                        onValueChange?: (search: string) => void;
                    } & React$1.RefAttributes<HTMLInputElement>>>> | undefined;
                }): react_jsx_runtime.JSX.Element;
                displayName: string | undefined;
            }>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    readonly List: {
        ({ ref, ...props }: CommandListProps & {
            ref?: React.Ref<React.ElementRef<{
                ({ className, ref, ...props }: CommandListProps & {
                    ref?: React.Ref<React.ElementRef<React$1.ForwardRefExoticComponent<{
                        children?: React.ReactNode;
                    } & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
                        ref?: React.Ref<HTMLDivElement>;
                    } & {
                        asChild?: boolean;
                    }, "key" | keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild"> & {
                        label?: string;
                    } & React$1.RefAttributes<HTMLDivElement>>>> | undefined;
                }): react_jsx_runtime.JSX.Element;
                displayName: string | undefined;
            }>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    readonly Empty: {
        ({ ref, ...props }: CommandEmptyProps & {
            ref?: React.Ref<React.ElementRef<{
                ({ ref, ...props }: CommandEmptyProps & {
                    ref?: React.Ref<React.ElementRef<React$1.ForwardRefExoticComponent<{
                        children?: React.ReactNode;
                    } & Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
                        ref?: React.Ref<HTMLDivElement>;
                    } & {
                        asChild?: boolean;
                    }, "key" | keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild"> & React$1.RefAttributes<HTMLDivElement>>>> | undefined;
                }): react_jsx_runtime.JSX.Element;
                displayName: string | undefined;
            }>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    readonly Results: {
        ({ ref, ...props }: CommandResultsProps & {
            ref?: React.Ref<React.ElementRef<{
                ({ className, count, search, label, children, ref, ...props }: CommandResultsProps & {
                    ref?: React.Ref<HTMLDivElement> | undefined;
                }): react_jsx_runtime.JSX.Element;
                displayName: string;
            }>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    readonly Group: {
        ({ ref, ...props }: CommandGroupProps & {
            ref?: React.Ref<React.ElementRef<{
                ({ className, ref, ...props }: CommandGroupProps & {
                    ref?: React.Ref<React.ElementRef<React$1.ForwardRefExoticComponent<{
                        children?: React.ReactNode;
                    } & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
                        ref?: React.Ref<HTMLDivElement>;
                    } & {
                        asChild?: boolean;
                    }, "key" | keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild">, "value" | "heading"> & {
                        heading?: React.ReactNode;
                        value?: string;
                        forceMount?: boolean;
                    } & React$1.RefAttributes<HTMLDivElement>>>> | undefined;
                }): react_jsx_runtime.JSX.Element;
                displayName: string | undefined;
            }>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    readonly Item: {
        ({ callback, className, onSelect, ref, ...props }: CommandMenuItemProps & {
            ref?: React.Ref<React.ElementRef<{
                ({ className, ref, ...props }: CommandItemProps & {
                    ref?: React.Ref<React.ElementRef<React$1.ForwardRefExoticComponent<{
                        children?: React.ReactNode;
                    } & Omit<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
                        ref?: React.Ref<HTMLDivElement>;
                    } & {
                        asChild?: boolean;
                    }, "key" | keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild">, "disabled" | "value" | "onSelect"> & {
                        disabled?: boolean;
                        onSelect?: (value: string) => void;
                        value?: string;
                        keywords?: string[];
                        forceMount?: boolean;
                    } & React$1.RefAttributes<HTMLDivElement>>>> | undefined;
                }): react_jsx_runtime.JSX.Element;
                displayName: string | undefined;
            }>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    readonly Shortcut: {
        ({ ...props }: CommandShortcutProps): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    readonly Separator: {
        ({ ref, ...props }: CommandSeparatorProps & {
            ref?: React.Ref<React.ElementRef<{
                ({ className, ref, ...props }: CommandSeparatorProps & {
                    ref?: React.Ref<React.ElementRef<React$1.ForwardRefExoticComponent<Pick<Pick<React$1.DetailedHTMLProps<React$1.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React$1.HTMLAttributes<HTMLDivElement>> & {
                        ref?: React.Ref<HTMLDivElement>;
                    } & {
                        asChild?: boolean;
                    }, "key" | keyof React$1.HTMLAttributes<HTMLDivElement> | "asChild"> & {
                        alwaysRender?: boolean;
                    } & React$1.RefAttributes<HTMLDivElement>>>> | undefined;
                }): react_jsx_runtime.JSX.Element;
                displayName: string | undefined;
            }>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

/**
 * API exposed via ref
 */
type ConfettiApi = {
    /** Fire confetti with optional overrides */
    fire: (options?: Options) => Promise<void>;
};
type ConfettiRef = ConfettiApi | null;
/**
 * Props for Confetti canvas component
 *
 * @description
 * Canvas-based confetti animation wrapper using canvas-confetti library.
 * Supports auto-fire on mount or manual control via ref.
 *
 * **UX Scenarios:**
 * - Purchase/checkout success celebrations
 * - Achievement unlocks
 * - Form submission success
 * - Game win states
 * - Milestone celebrations
 *
 * **Features:**
 * - Web Worker support for performance
 * - Auto-resize canvas
 * - Ref-based imperative control
 * - Context provider for nested triggers
 */
interface ConfettiProps extends React__default.ComponentPropsWithoutRef<"canvas"> {
    /** Confetti animation options */
    options?: Options;
    /** Global canvas-confetti options */
    globalOptions?: GlobalOptions;
    /**
     * Whether to wait for manual fire() call
     * @default false
     */
    manualstart?: boolean;
    /** Content to render (can access fire via context) */
    children?: ReactNode;
}
/**
 * Props for ConfettiButton component
 */
interface ConfettiButtonProps extends React__default.ComponentProps<typeof Button> {
    /** Confetti options merged with position origin */
    options?: Options & GlobalOptions & {
        canvas?: HTMLCanvasElement;
    };
}
/**
 * Confetti - Canvas confetti animation
 *
 * @example
 * ```tsx
 * // Auto-fire on mount
 * <Confetti className="fixed inset-0 pointer-events-none" />
 *
 * // Manual control via ref
 * const confettiRef = useRef<ConfettiRef>(null);
 * <Confetti ref={confettiRef} manualstart />
 * <button onClick={() => confettiRef.current?.fire()}>
 *   Celebrate!
 * </button>
 *
 * // Custom options
 * <Confetti
 *   options={{
 *     particleCount: 100,
 *     spread: 70,
 *     colors: ['#ff0000', '#00ff00', '#0000ff']
 *   }}
 * />
 * ```
 */
declare const Confetti: {
    ({ ref, ...props }: ConfettiProps & {
        ref?: Ref<ConfettiRef> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/**
 * ConfettiButton - Button that fires confetti from its position
 *
 * @example
 * ```tsx
 * <ConfettiButton>
 *   🎉 Celebrate!
 * </ConfettiButton>
 *
 * <ConfettiButton
 *   options={{
 *     particleCount: 50,
 *     spread: 60,
 *     colors: ['#FFD700', '#FFA500']
 *   }}
 * >
 *   Win!
 * </ConfettiButton>
 * ```
 */
declare const ConfettiButton: React__default.FC<ConfettiButtonProps>;

interface ConfirmDialogProps {
    /** Dialog open state */
    open: boolean;
    /** State change callback */
    onOpenChange: (open: boolean) => void;
    /** Dialog title */
    title: string;
    /** Dialog description */
    description?: string;
    /** Confirm button text */
    confirmText?: string;
    /** Cancel button text */
    cancelText?: string;
    /** Confirm callback */
    onConfirm: () => void | Promise<void>;
    /** Cancel callback */
    onCancel?: () => void;
    /** Visual variant */
    variant?: "default" | "destructive" | "warning";
    /** Loading state */
    loading?: boolean;
    /** Custom icon */
    icon?: React$1.ReactNode;
    /** Additional content */
    children?: React$1.ReactNode;
}
declare function ConfirmDialog({ open, onOpenChange, title, description, confirmText, cancelText, onConfirm, onCancel, variant, loading, icon, children, }: ConfirmDialogProps): react_jsx_runtime.JSX.Element;
interface DestructiveActionModalProps {
    /** Dialog open state. The caller owns it and decides when to close after confirm. */
    open: boolean;
    /** Title Case Verb + Noun label, e.g. "Delete Project". */
    title: string;
    /** Consequence copy. Name the specific resource when possible. */
    description: React$1.ReactNode;
    /** Primary action label. Should match title 1:1. */
    confirmLabel: string;
    /** Exact phrase the user must type to unlock confirm. */
    verificationPhrase: string;
    /** Resource label used in the prompt, e.g. "project name". */
    verificationLabel?: string;
    /** Optional irreversible-action band. Omit for reversible actions. */
    irreversibleDescription?: React$1.ReactNode;
    /** Inline API failure. Keep the modal open so the user can retry. */
    error?: string | Error | null;
    /** In-flight state owned by the caller. */
    loading?: boolean;
    /** Cancel callback for cancel button, outside click, and Escape. */
    onCancel: () => void;
    /** Confirm callback. The component never closes itself from here. */
    onConfirm: () => void;
    /** Cancel button label. */
    cancelLabel?: string;
    /** Optional className for the modal panel. */
    className?: string;
}
declare function DestructiveActionModal({ open, loading, onCancel, ...props }: DestructiveActionModalProps): react_jsx_runtime.JSX.Element;
interface ConfirmDeleteDialogProps {
    /** Dialog open state */
    open: boolean;
    /** State change callback */
    onOpenChange: (open: boolean) => void;
    /** Name of item being deleted */
    itemName: string;
    /** Item type (e.g., "project", "user") */
    itemType?: string;
    /** Text to type for confirmation (default: "DELETE") */
    confirmationText?: string;
    /** Confirm callback */
    onConfirm: () => void | Promise<void>;
    /** Loading state */
    loading?: boolean;
    /** Additional warnings to display */
    warnings?: string[];
}
declare function ConfirmDeleteDialog({ open, onOpenChange, itemName, itemType, confirmationText, onConfirm, loading, warnings, }: ConfirmDeleteDialogProps): react_jsx_runtime.JSX.Element;
interface BulkActionConfirmDialogProps {
    /** Dialog open state */
    open: boolean;
    /** State change callback */
    onOpenChange: (open: boolean) => void;
    /** Action name (e.g., "delete", "archive") */
    action: string;
    /** Number of selected items */
    itemCount: number;
    /** Item type (e.g., "users", "records") */
    itemType: string;
    /** Confirm callback */
    onConfirm: () => void | Promise<void>;
    /** Visual variant */
    variant?: "default" | "destructive" | "warning";
    /** Loading state */
    loading?: boolean;
    /** Require input confirmation when count exceeds threshold */
    requireInputConfirmation?: boolean;
    /** Threshold for requiring input confirmation */
    inputConfirmationThreshold?: number;
    /** Additional description */
    description?: string;
    /** Items to preview */
    previewItems?: string[];
}
declare function BulkActionConfirmDialog(props: BulkActionConfirmDialogProps): react_jsx_runtime.JSX.Element;
interface UseConfirmDialogOptions<T = void> {
    onConfirm: (data: T) => void | Promise<void>;
}
interface UseConfirmDialogReturn<T = void> {
    isOpen: boolean;
    data: T | null;
    open: (data: T) => void;
    close: () => void;
    confirm: () => Promise<void>;
}
declare function useConfirmDialog<T = void>({ onConfirm, }: UseConfirmDialogOptions<T>): UseConfirmDialogReturn<T>;

/**
 * Context Card Component Tokens — Layer 3
 *
 * Compact metadata popover tuned for dense dashboard rows.
 * Components consume these values through local CSS variables, not raw
 * primitive values in class strings.
 */
declare const contextCardTokens: {
    readonly width: {
        readonly sm: number;
        readonly md: number;
    };
    readonly padding: {
        readonly x: 12;
        readonly y: 12;
    };
    readonly gap: {
        readonly stack: 12;
        readonly section: 8;
        readonly row: 4;
    };
    readonly borderRadius: 8;
    readonly fontSize: {
        readonly body: 14;
        readonly metadata: 12;
    };
    readonly motion: {
        readonly openDelay: 150;
        readonly closeDelay: 120;
        readonly duration: 200;
        readonly easing: "ease-out";
    };
};
type ContextCardWidth = keyof typeof contextCardTokens.width;

type ContextCardSide = "top" | "bottom" | "left" | "right";
type ContextCardAlign = "start" | "center" | "end";
interface ContextCardTriggerProps {
    /** Content shown in the context card */
    content: React$1.ReactNode;
    /** Which side the card appears on */
    side?: ContextCardSide;
    /** Alignment relative to the trigger */
    align?: ContextCardAlign;
    /** Offset from the trigger in pixels */
    sideOffset?: number;
    /** Cross-axis offset from the trigger in pixels */
    alignOffset?: number;
    /** Width token for the panel */
    width?: ContextCardWidth;
    /** Entry delay in milliseconds. Defaults to the component motion token. */
    openDelay?: number;
    /** Exit delay in milliseconds. Defaults to the component motion token. */
    closeDelay?: number;
    /** The element that triggers the card on hover/focus */
    children: React$1.ReactNode;
    /** Additional CSS classes for the card */
    className?: string;
}
interface ContextCardMetadataItem {
    id?: string;
    label: React$1.ReactNode;
    value?: React$1.ReactNode;
}
interface ContextCardEntityProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "title"> {
    title: React$1.ReactNode;
    description?: React$1.ReactNode;
    metadata?: readonly ContextCardMetadataItem[];
    action?: React$1.ReactNode;
}
/**
 * ContextCard — Geist-style hover card that shows rich content on hover/focus.
 *
 * @example
 * ```tsx
 * <ContextCard.Trigger
 *   content={<ContextCard.Entity title="Nebula Console" description="nebutra/production" />}
 *   side="top"
 * >
 *   <button type="button">Nebula Console</button>
 * </ContextCard.Trigger>
 * ```
 */
declare const ContextCard: {
    readonly Entity: {
        ({ title, description, metadata, action, className, ref, ...props }: ContextCardEntityProps & {
            ref?: React$1.Ref<HTMLDivElement> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    readonly Trigger: {
        ({ ref: forwardedRef, content, side, align, sideOffset, alignOffset, width, openDelay, closeDelay, children, className, }: ContextCardTriggerProps & {
            ref?: React$1.Ref<HTMLButtonElement> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

interface ControlGlyphProps extends React$1.SVGProps<SVGSVGElement> {
    /** Rendered size in px. The viewBox is 16, so 16 keeps stroke width at 1:1. */
    size?: number | string;
}
/** Checkmark for a checked checkbox. */
declare function CheckGlyph({ size, width, height, strokeWidth, ...props }: ControlGlyphProps): react_jsx_runtime.JSX.Element;
/** Horizontal dash for a partially-checked (indeterminate) checkbox. */
declare function IndeterminateGlyph({ size, width, height, strokeWidth, ...props }: ControlGlyphProps): react_jsx_runtime.JSX.Element;

type DataListStatus = "idle" | "loading" | "empty" | "error";
type DataListAlign = "start" | "center" | "end";
interface DataListColumn<Row> {
    /** Stable identity for the column. Used as the React key. */
    id: string;
    /** Header content. */
    header: ReactNode;
    /** Cell renderer. */
    cell: (row: Row, index: number) => ReactNode;
    /**
     * Horizontal alignment of both the header and the cell.
     * @default "start"
     */
    align?: DataListAlign | undefined;
    /** Tabular numerals + monospace digits for figures that must line up. */
    numeric?: boolean | undefined;
    /** Column width — a number is read as px. Applied to the header cell. */
    width?: number | string | undefined;
    /** Extra classes for this column's header cell. */
    headClassName?: string | undefined;
    /** Extra classes for this column's body cells. */
    cellClassName?: string | undefined;
    /**
     * Width of the skeleton bar used for this column while loading.
     * @default "60%"
     */
    loadingWidth?: number | string | undefined;
}
interface DataListProps<Row> {
    /** Column definitions, left to right. */
    columns: readonly DataListColumn<Row>[];
    /** The rows to render. Ignored while the resolved status is not "idle". */
    rows: readonly Row[];
    /** Stable React key per row. */
    getRowKey: (row: Row, index: number) => string;
    /**
     * Explicit state. When omitted it is derived: `error` present → "error",
     * otherwise no rows → "empty", otherwise "idle".
     * Precedence, applied here and nowhere else: error > loading > empty > rows.
     */
    status?: DataListStatus | undefined;
    /**
     * A background refetch or a settling optimistic mutation. Deliberately
     * separate from `status="loading"`: mounted rows stay mounted.
     */
    isRefreshing?: boolean | undefined;
    /**
     * Error copy. Presence alone is enough to resolve the status to "error";
     * `null` / `false` / `""` count as absence, so a `string | null` error from a
     * query hook can be passed straight through.
     */
    error?: ReactNode | undefined;
    /** Heading shown on the error body. */
    errorTitle?: ReactNode | undefined;
    /** Retry affordance rendered on the error body. */
    onRetry?: (() => void) | undefined;
    /** Label for the retry control — pass the translated string. */
    retryLabel?: string | undefined;
    /** Heading shown on the empty body. */
    emptyTitle?: ReactNode | undefined;
    /** Supporting copy shown on the empty body. */
    emptyDescription?: ReactNode | undefined;
    /** Icon shown on the empty body. Pass an `EmptyState.Icon`. */
    emptyIcon?: ReactNode | undefined;
    /** CTA rendered on the empty body. */
    emptyAction?: ReactNode | undefined;
    /**
     * Rows of height reserved for the loading, empty and error bodies.
     * @default 5
     */
    minBodyRows?: number | undefined;
    /**
     * Height in px of one reserved row. Also the height of a loading row.
     * @default 44
     */
    rowHeight?: number | undefined;
    /** Opaque footer slot — bring your own pagination control. */
    pagination?: ReactNode | undefined;
    /** Alternating row tint for scan-heavy datasets. */
    striped?: boolean | undefined;
    /** Hover/focus tint. Implied by `onRowClick`. */
    interactive?: boolean | undefined;
    /** Row activation. Rows become keyboard-operable when provided. */
    onRowClick?: ((row: Row, index: number) => void) | undefined;
    /** Accessible name for the table. */
    label?: string | undefined;
    /** Class for the outer region. */
    className?: string | undefined;
    /** Class for the scroll container. */
    scrollClassName?: string | undefined;
    /** Style for the outer region. */
    style?: CSSProperties | undefined;
    /** Test hook. */
    "data-testid"?: string | undefined;
}
declare function DataList<Row>({ columns, rows, getRowKey, status, isRefreshing, error, errorTitle, onRetry, retryLabel, emptyTitle, emptyDescription, emptyIcon, emptyAction, minBodyRows, rowHeight, pagination, striped, interactive, onRowClick, label, className, scrollClassName, style, "data-testid": dataTestId, }: DataListProps<Row>): react_jsx_runtime.JSX.Element;
declare namespace DataList {
    var displayName: string;
}

interface DisplayCardProps {
    /** Additional className */
    className?: string;
    /** Icon element */
    icon?: React$1.ReactNode;
    /** Card title */
    title?: string;
    /** Card description */
    description?: string;
    /** Date or timestamp */
    date?: string;
    /** Icon color className */
    iconClassName?: string;
    /** Title color className */
    titleClassName?: string;
}
interface DisplayCardsProps {
    /** Array of card props. Uses default stacked cards if not provided. */
    cards?: DisplayCardProps[];
    /** Additional className for container */
    className?: string;
}
/**
 * DisplayCards - Stacked card display with hover effects
 *
 * A decorative component showing multiple cards stacked on top of each other
 * with skew effect. Cards animate on hover revealing content underneath.
 *
 * @example
 * ```tsx
 * <DisplayCards
 *   cards={[
 *     { title: "Featured", description: "Amazing content", date: "Today" },
 *     { title: "Popular", description: "Trending now", date: "Yesterday" },
 *     { title: "New", description: "Latest updates", date: "Just now" },
 *   ]}
 * />
 * ```
 */
declare function DisplayCards({ cards, className }: DisplayCardsProps): react_jsx_runtime.JSX.Element;
declare namespace DisplayCards {
    var displayName: string;
}

type ThemeMode = "light" | "dark" | "system";
interface DitheringThemeConfig {
    /** Background color */
    bg: string;
    /** Shader back color */
    back: string;
    /** Shader front color (base) */
    frontBase: string;
    /** Shader front color (mix target) */
    frontMix: string;
    /** Mix factor for intensity */
    mixFactor: number;
    /** Base animation speed */
    baseSpeed: number;
    /** Speed multiplier for intensity */
    speedMultiplier: number;
    /** Base pixel size */
    basePxSize: number;
    /** Pixel size range for intensity */
    pxSizeRange: number;
    /** Base scale */
    baseScale: number;
    /** Scale range for intensity */
    scaleRange: number;
    /** Glow gradient */
    glow: string;
}
interface DitheringBackgroundProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "style"> {
    /** Theme mode: "light" | "dark" | "system" */
    themeMode?: ThemeMode;
    /** Visual intensity 0..1 */
    intensity?: number;
    /** Enable subtle parallax on mouse move */
    parallax?: boolean;
    /** Parallax strength in pixels */
    parallaxStrength?: number;
    /** Whether to sync Tailwind dark class */
    syncTailwindDark?: boolean;
    /** Dithering shape */
    shape?: DitheringProps["shape"];
    /** Dithering pattern type */
    type?: DitheringProps["type"];
    /** Custom dark theme config */
    darkConfig?: Partial<DitheringThemeConfig>;
    /** Custom light theme config */
    lightConfig?: Partial<DitheringThemeConfig>;
    /** Show film grain overlay */
    showGrain?: boolean;
    /** Show vignette overlay */
    showVignette?: boolean;
    /** Show top shine overlay */
    showShine?: boolean;
    /** Show glow overlay */
    showGlow?: boolean;
}
/**
 * DitheringBackground - Theme-aware animated dithering shader background
 *
 * A WebGL-powered dithering background with multiple overlay effects
 * including glow, vignette, film grain, and shine sweep.
 *
 * @example
 * ```tsx
 * <div className="relative min-h-screen">
 *   <DitheringBackground
 *     themeMode="system"
 *     intensity={0.8}
 *     parallax
 *   />
 *   <YourContent className="relative z-10" />
 * </div>
 * ```
 */
declare function DitheringBackground({ themeMode, intensity, parallax, parallaxStrength, syncTailwindDark, shape, type, darkConfig, lightConfig, showGrain, showVignette, showShine, showGlow, className, ...props }: DitheringBackgroundProps): react_jsx_runtime.JSX.Element;
declare namespace DitheringBackground {
    var displayName: string;
}

declare const DITHERING_SHAPES: {
    readonly simplex: 1;
    readonly warp: 2;
    readonly dots: 3;
    readonly wave: 4;
    readonly ripple: 5;
    readonly swirl: 6;
    readonly sphere: 7;
};
declare const DITHERING_TYPES: {
    readonly random: 1;
    readonly "2x2": 2;
    readonly "4x4": 3;
    readonly "8x8": 4;
};
type DitheringShaderShape = keyof typeof DITHERING_SHAPES;
type DitheringShaderType = keyof typeof DITHERING_TYPES;
interface DitheringShaderProps {
    /** Canvas width in pixels */
    width?: number;
    /** Canvas height in pixels */
    height?: number;
    /** Background color (hex) */
    colorBack?: string;
    /** Foreground/dither color (hex) */
    colorFront?: string;
    /** Dithering shape pattern */
    shape?: DitheringShaderShape;
    /** Dithering matrix type */
    type?: DitheringShaderType;
    /** Pixel size for dithering */
    pxSize?: number;
    /** Animation speed (0 = paused) */
    speed?: number;
    /** Additional class names */
    className?: string;
    /** Additional inline styles */
    style?: React$1.CSSProperties;
}
/**
 * DitheringShader - Pure WebGL2 dithering shader effect
 *
 * A zero-dependency WebGL2-powered animated shader with multiple shape patterns
 * (simplex, warp, dots, wave, ripple, swirl, sphere) and dithering types.
 *
 * @example
 * ```tsx
 * <DitheringShader
 *   shape="swirl"
 *   type="4x4"
 *   colorBack="#220011"
 *   colorFront="#00ffff"
 *   pxSize={4}
 *   speed={0.9}
 * />
 * ```
 */
declare function DitheringShader({ width, height, colorBack, colorFront, shape, type, pxSize, speed, className, style, }: DitheringShaderProps): react_jsx_runtime.JSX.Element;
declare namespace DitheringShader {
    var displayName: string;
}

interface DotPatternProps extends React__default.SVGProps<SVGSVGElement> {
    /** Horizontal spacing between dots (default: 16) */
    width?: number;
    /** Vertical spacing between dots (default: 16) */
    height?: number;
    /** X-offset of the entire pattern */
    x?: number;
    /** Y-offset of the entire pattern */
    y?: number;
    /** X-offset of individual dots (default: 1) */
    cx?: number;
    /** Y-offset of individual dots (default: 1) */
    cy?: number;
    /** Radius of each dot (default: 1) */
    cr?: number;
    /** Additional CSS classes */
    className?: string;
    /** Enable glowing animation effect */
    glow?: boolean;
}
/**
 * DotPattern - SVG dot pattern background
 *
 * @description
 * Creates an animated or static dot pattern background using SVG.
 * The pattern automatically adjusts to fill its container.
 * Supports optional glowing animation effect.
 *
 * @example Basic usage
 * ```tsx
 * <div className="relative h-[500px] w-full overflow-hidden">
 *   <DotPattern />
 * </div>
 * ```
 *
 * @example With glow effect
 * ```tsx
 * <div className="relative h-[500px] w-full overflow-hidden">
 *   <DotPattern glow className="text-primary/50" />
 * </div>
 * ```
 *
 * @example Custom spacing and size
 * ```tsx
 * <DotPattern
 *   width={20}
 *   height={20}
 *   cr={1.5}
 *   className="text-muted-foreground/30"
 * />
 * ```
 *
 * @example With linear gradient mask
 * ```tsx
 * <DotPattern
 *   className={cn(
 *     "[mask-image:linear-gradient(to_bottom_right,white,transparent,transparent)]"
 *   )}
 * />
 * ```
 */
declare function DotPattern({ width, height, x, y, cx, cy, cr, className, glow, ...props }: DotPatternProps): react_jsx_runtime.JSX.Element;

interface DottedMapMarker {
    lat: number;
    lng: number;
    size?: number;
}
interface DottedMapProps extends React$1.SVGProps<SVGSVGElement> {
    /** Width of the SVG map */
    width?: number;
    /** Height of the SVG map */
    height?: number;
    /** Number of sample points for map generation */
    mapSamples?: number;
    /** Array of markers to display on the map */
    markers?: DottedMapMarker[];
    /** Color of the map dots (uses currentColor if not set) */
    dotColor?: string;
    /** Color of the markers */
    markerColor?: string;
    /** Radius of the map dots */
    dotRadius?: number;
    /** Enable stagger offset for alternating rows */
    stagger?: boolean;
}
/**
 * DottedMap - SVG world map with dots and markers
 *
 * @description
 * Renders a world map using dots, with support for custom markers.
 * Perfect for showing global presence, office locations, or user distribution.
 *
 * @example Basic usage
 * ```tsx
 * <div className="h-[400px] w-full">
 *   <DottedMap />
 * </div>
 * ```
 *
 * @example With markers
 * ```tsx
 * <DottedMap
 *   markers={[
 *     { lat: 40.7128, lng: -74.006 },  // New York
 *     { lat: 51.5074, lng: -0.1278 },  // London
 *     { lat: 35.6762, lng: 139.6503 }, // Tokyo
 *   ]}
 *   markerColor="hsl(var(--primary))"
 * />
 * ```
 *
 * @example Smaller dots
 * ```tsx
 * <DottedMap dotRadius={0.15} mapSamples={8000} />
 * ```
 */
declare function DottedMap({ width, height, mapSamples, markers, markerColor, dotRadius, stagger, className, style, }: DottedMapProps): react_jsx_runtime.JSX.Element;

interface DottedWorldMapProps extends React$1.SVGProps<SVGSVGElement> {
    /** Dot radius */
    dotRadius?: number;
    /** Dot color (CSS color or variable) */
    dotColor?: string;
    /** Background color */
    backgroundColor?: string;
    /** Additional className */
    className?: string;
}
/**
 * DottedWorldMap - SVG world map with dotted pattern
 *
 * A decorative world map component using a dotted grid pattern.
 * Useful for showing global presence or location-based features.
 *
 * @example
 * ```tsx
 * <DottedWorldMap className="w-full" dotColor="currentColor" />
 * ```
 */
declare function DottedWorldMap({ dotRadius, dotColor, backgroundColor, className, ...props }: DottedWorldMapProps): react_jsx_runtime.JSX.Element;
declare namespace DottedWorldMap {
    var displayName: string;
}

type DynamicIslandTOCProps = {
    /**
     * CSS selector to find headings.
     * Defaults to common blog content wrappers and explicit [data-toc] elements.
     */
    selector?: string;
    /**
     * Accessible label for the navigation landmark.
     * @default "Table of contents"
     */
    ariaLabel?: string;
    /**
     * Visible header text for the expanded menu.
     * @default "TABLE OF CONTENTS"
     */
    menuHeading?: string;
    /**
     * Label shown in the closed pill when no heading is yet active.
     * @default "Contents"
     */
    emptyLabel?: string;
    /**
     * Optional className for the outer fixed wrapper.
     */
    className?: string;
};
declare function DynamicIslandTOC({ selector, ariaLabel, menuHeading, emptyLabel, className, }: DynamicIslandTOCProps): ReactElement;

type EditToolState = "completed" | "pending" | "waiting";
type EditToolVariant = "edit" | "write";
type ApprovalDecision = "approved" | "rejected" | null;
type EditToolApproval = {
    approveLabel?: string;
    rejectLabel?: string;
    /** Uncontrolled initial decision. */
    defaultDecision?: ApprovalDecision;
    /** Controlled decision. When provided, parent owns the value. */
    decision?: ApprovalDecision;
    /** Called on every decision change (including controlled mode). */
    onDecisionChange?: (decision: ApprovalDecision) => void;
    onApprove?: () => void;
    onReject?: () => void;
};
type EditToolProps = {
    /**
     * - `completed` → past-tense label + full diff
     * - `pending`   → shimmer header + diff rendered
     * - `waiting`   → shimmer header only (no body)
     * @default "completed"
     */
    state?: EditToolState;
    /**
     * - `edit`  → LCS diff of oldContent vs newContent
     * - `write` → newContent only, all lines as adds
     * @default "edit"
     */
    variant?: EditToolVariant;
    /** Path shown by basename in the header. Omit to render no filename. */
    filePath?: string;
    /** Required for `variant: "edit"`. Ignored for `variant: "write"`. */
    oldContent?: string;
    /** Required for both variants when a diff body should render. */
    newContent?: string;
    /** Optional approval footer. */
    approval?: EditToolApproval;
    /** LCS hard cap to prevent O(m·n) OOM on huge files. @default 2000 */
    maxDiffLines?: number;
    className?: string;
};
declare function EditTool({ state, variant, filePath, oldContent, newContent, approval, maxDiffLines, className, }: EditToolProps): ReactElement;

interface Enable2FAStep {
    /** Step title */
    title: string;
    /** Step description */
    description: string;
    /** Optional custom content */
    content?: React$1.ReactNode;
}
interface Enable2FACardProps {
    /** Custom steps (optional, defaults provided) */
    steps?: Enable2FAStep[];
    /** QR code image URL */
    qrCodeUrl?: string;
    /** OTP length */
    otpLength?: number;
    /** Callback when OTP is complete */
    onOtpComplete?: (otp: string) => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * Enable2FACard - Two-factor authentication setup card with steps
 *
 * @example
 * ```tsx
 * <Enable2FACard
 *   onOtpComplete={(otp) => console.log('OTP:', otp)}
 * />
 * ```
 */
declare function Enable2FACard({ steps, qrCodeUrl, otpLength, onOtpComplete, className, }: Enable2FACardProps): react_jsx_runtime.JSX.Element;
declare namespace Enable2FACard {
    var displayName: string;
}

interface EntityProps<T extends React$1.ElementType = "div"> {
    /** Override the root element (e.g. "li" when inside Entity.List) */
    as?: T;
    /** Content to render in the left slot (avatar, icon, etc.) */
    left?: React$1.ReactNode;
    /** Content to render in the right slot (actions, metadata, etc.) */
    right?: React$1.ReactNode;
    /**
     * When `as="button"`, append a trailing chevron affordance after `right`
     * (or alone, if `right` is omitted) that nudges on hover via the row's
     * `group` class. Use for nav-style rows — "go to X" — not for rows whose
     * click just toggles a value in place.
     */
    chevron?: boolean;
    children?: React$1.ReactNode;
    className?: string;
}
interface EntityContentProps {
    /** Primary label */
    title: string;
    /** Supporting text shown below the title */
    description?: React$1.ReactNode;
    /** When true, the content block expands to fill available space */
    fill?: boolean;
    className?: string;
}
interface EntityListProps {
    children?: React$1.ReactNode;
    className?: string;
}
declare function EntityRoot<T extends React$1.ElementType = "div">({ as, left, right, chevron, children, className, ...props }: EntityProps<T> & Omit<React$1.ComponentPropsWithoutRef<T>, keyof EntityProps<T>>): react_jsx_runtime.JSX.Element;
declare namespace EntityRoot {
    var displayName: string;
}
declare function EntityContent({ title, description, fill, className }: EntityContentProps): react_jsx_runtime.JSX.Element;
declare namespace EntityContent {
    var displayName: string;
}
declare function EntityList({ children, className }: EntityListProps): react_jsx_runtime.JSX.Element;
declare namespace EntityList {
    var displayName: string;
}
declare const Entity: typeof EntityRoot & {
    Content: typeof EntityContent;
    List: typeof EntityList;
};

interface ErrorBoundaryProps {
    children: ReactNode;
    /** Custom error fallback UI */
    fallback?: ReactNode | ((props: ErrorFallbackProps) => ReactNode);
    /** 组件名称，用于错误上报 */
    componentName?: string;
    /** 是否显示重试按钮 */
    showRetry?: boolean;
    /** 是否上报错误 */
    reportErrors?: boolean;
    /** 错误发生时的回调 */
    onError?: (error: Error, errorInfo: ErrorInfo) => void;
    /** 重置时的回调 */
    onReset?: () => void;
    /** 错误边界样式变体 */
    variant?: "default" | "compact" | "minimal" | "inline";
}
interface ErrorFallbackProps {
    error: Error;
    errorInfo: ErrorInfo | null;
    resetError: () => void;
}
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
    errorInfo: ErrorInfo | null;
}
declare class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    static defaultProps: Partial<ErrorBoundaryProps>;
    constructor(props: ErrorBoundaryProps);
    static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState>;
    componentDidCatch(error: Error, errorInfo: ErrorInfo): void;
    resetError: () => void;
    render(): ReactNode;
}
/**
 * 表格组件专用错误边界
 */
declare function TableErrorBoundary({ children, tableName, }: {
    children: ReactNode;
    tableName?: string;
}): React__default.ReactElement;
/**
 * Panel/抽屉组件专用错误边界
 */
declare function PanelErrorBoundary({ children, panelName, }: {
    children: ReactNode;
    panelName?: string;
}): React__default.ReactElement;
/**
 * Card组件专用错误边界
 */
declare function CardErrorBoundary({ children, cardName, }: {
    children: ReactNode;
    cardName?: string;
}): React__default.ReactElement;

declare function withErrorBoundary<P extends object>(WrappedComponent: React__default.ComponentType<P>, options?: Omit<ErrorBoundaryProps, "children">): React__default.FC<P>;

type GalleryPhoto = {
    id: string;
    src: string;
    alt: string;
    /** Degrees. Applied only in collapsed state. */
    rotation?: number;
    /** Pixels of horizontal offset in collapsed state. */
    x?: number;
    /** Pixels of vertical offset in collapsed state. */
    y?: number;
    /** Stacking order in collapsed state. */
    zIndex?: number;
};
type ExpandableGalleryProps = {
    photos: ReadonlyArray<GalleryPhoto>;
    /** Number of photos shown in the collapsed fanned stack. @default 3 */
    previewCount?: number;
    /** Controlled expansion state. Pair with `onExpandedChange`. */
    expanded?: boolean;
    /** Initial state when uncontrolled. @default false */
    defaultExpanded?: boolean;
    onExpandedChange?: (next: boolean) => void;
    /** Collapse when the user clicks outside the gallery in expanded state. @default true */
    closeOnOutsideClick?: boolean;
    /** Back-button label. @default "Go back" */
    backLabel?: string;
    /** Rendered below the stack while collapsed. Caller owns headline + CTA. */
    children?: ReactNode;
    className?: string;
};
declare const ExpandableGallery: ({ ref, photos, previewCount, expanded, defaultExpanded, onExpandedChange, closeOnOutsideClick, backLabel, children, className, }: ExpandableGalleryProps & {
    ref?: Ref<HTMLDivElement> | undefined;
}) => react_jsx_runtime.JSX.Element;

interface Tab {
    title: string;
    icon: Icon;
    type?: never;
}
interface Separator {
    type: "separator";
    title?: never;
    icon?: never;
}
type TabItem = Tab | Separator;
interface ExpandableTabsProps {
    tabs: TabItem[];
    className?: string;
    activeColor?: string;
    onChange?: (index: number | null) => void;
}
declare function ExpandableTabs({ tabs, className, activeColor, onChange, }: ExpandableTabsProps): react_jsx_runtime.JSX.Element;

type ExpandingTextareaProps = TextareaProps;
declare const ExpandingTextarea: {
    ({ className, onChange, ref, ...props }: ExpandingTextareaProps & {
        ref?: React$1.Ref<HTMLTextAreaElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface LetterGlitchProps {
    glitchColors: string[];
    glitchSpeed?: number;
    centerVignette?: boolean;
    outerVignette?: boolean;
    smooth?: boolean;
    characters?: string;
    className?: string;
}
declare function LetterGlitch({ glitchColors, glitchSpeed, centerVignette, outerVignette, smooth, characters, className, }: LetterGlitchProps): react_jsx_runtime.JSX.Element;
interface FallbackCardProps {
    /** Additional CSS classes */
    className?: string;
    /** Message to display */
    message?: string;
    /** Show monitor icon */
    showIcon?: boolean;
    /** Show glitch animation */
    showGlitch?: boolean;
    /** Color theme */
    theme?: "dark" | "light";
    /** Card height */
    height?: number | string;
}
/**
 * FallbackCard - A placeholder card with animated glitch text effect
 *
 * @example
 * ```tsx
 * <FallbackCard
 *   message="Preview not available"
 *   theme="dark"
 *   showGlitch
 *   showIcon
 * />
 * ```
 */
declare function FallbackCard({ className, message, showIcon, showGlitch, theme, height, }: FallbackCardProps): react_jsx_runtime.JSX.Element;
declare namespace FallbackCard {
    var displayName: string;
}

interface FeatureArrowCardProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Feature icon */
    icon: Icon;
    /** Feature title */
    title: string;
    /** Feature subtitle */
    subtitle: string;
    /** Feature description */
    description: string;
    /** Card content (displayed in bottom-right corner) */
    cardContent?: React$1.ReactNode;
    /** Click handler for the arrow button */
    onArrowClick?: () => void;
}
/**
 * FeatureArrowCard - Feature card with arrow action button
 *
 * Displays a feature with icon, title, subtitle, description,
 * and an interactive arrow button in the bottom-right corner.
 */
declare function FeatureArrowCard({ icon: Icon, title, subtitle, description, cardContent, onArrowClick, className, ...props }: FeatureArrowCardProps): react_jsx_runtime.JSX.Element;
declare namespace FeatureArrowCard {
    var displayName: string;
}

interface FeatureCardProps {
    /** Card content */
    children: ReactNode;
    /** Additional className */
    className?: string;
}
/**
 * FeatureCard - Card with corner bracket decorators
 *
 * A styled card container with decorative corner brackets.
 * Commonly used for feature showcases on landing pages.
 *
 * @example
 * ```tsx
 * <FeatureCard>
 *   <FeatureCardHeader icon={MapIcon} title="Tracking" description="Real-time location" />
 *   <FeatureCardContent>
 *     <Image src="/screenshot.png" alt="Feature"  width={400} height={400} />
 *   </FeatureCardContent>
 * </FeatureCard>
 * ```
 *
 * **UX Scenarios:**
 * - Feature comparison grids on pricing/features pages
 * - Product capability showcases
 * - Dashboard widget containers
 * - Bento grid layouts
 */
declare function FeatureCard({ children, className }: FeatureCardProps): react_jsx_runtime.JSX.Element;
/**
 * FeatureCardDecorator - Corner bracket decorations
 *
 * Adds decorative corner brackets to parent card.
 * Automatically included in FeatureCard, but can be used standalone.
 */
declare function FeatureCardDecorator(): react_jsx_runtime.JSX.Element;
interface FeatureCardHeaderProps {
    /** Icon component from lucide-react */
    icon: Icon;
    /** Feature title */
    title: string;
    /** Feature description */
    description: string;
    /** Additional className */
    className?: string;
}
/**
 * FeatureCardHeader - Header with icon, title, and description
 *
 * @example
 * ```tsx
 * <FeatureCardHeader
 *   icon={MapIcon}
 *   title="Real time location tracking"
 *   description="Advanced tracking system"
 * />
 * ```
 */
declare function FeatureCardHeader({ icon: Icon, title, description, className, }: FeatureCardHeaderProps): react_jsx_runtime.JSX.Element;

interface DualModeImageProps {
    /** Image source for dark mode */
    darkSrc: string;
    /** Image source for light mode */
    lightSrc: string;
    /** Alt text for accessibility */
    alt: string;
    /** Image width */
    width?: number;
    /** Image height */
    height?: number;
    /** Additional className */
    className?: string;
}
/**
 * DualModeImage - Theme-aware image component
 *
 * Displays different images based on light/dark mode.
 * Useful for screenshots, illustrations, or any visual
 * that needs different versions per theme.
 *
 * @example
 * ```tsx
 * <DualModeImage
 *   darkSrc="/screenshot-dark.png"
 *   lightSrc="/screenshot-light.png"
 *   alt="Dashboard screenshot"
 *   width={1200}
 *   height={800}
 * />
 * ```
 *
 * **UX Scenarios:**
 * - Product screenshots that match user's theme preference
 * - Documentation images
 * - Marketing visuals with theme variants
 */
declare function DualModeImage({ darkSrc, lightSrc, alt, width, height, className, }: DualModeImageProps): react_jsx_runtime.JSX.Element;
type CirclePattern = "none" | "border" | "primary" | "blue";
interface CircleConfig {
    /** Pattern style for the circle */
    pattern: CirclePattern;
}
interface CircularUIProps {
    /** Label text below the circles */
    label: string;
    /** Circle configurations */
    circles: CircleConfig[];
    /** Additional className */
    className?: string;
}
/**
 * CircularUI - Decorative overlapping circles
 *
 * Visual element showing overlapping circles with different patterns.
 * Commonly used to represent relationships, sets, or categories.
 *
 * @example
 * ```tsx
 * <CircularUI
 *   label="Inclusion"
 *   circles={[
 *     { pattern: "border" },
 *     { pattern: "primary" }
 *   ]}
 * />
 * ```
 *
 * **UX Scenarios:**
 * - Venn diagram representations
 * - Feature intersection visualizations
 * - Data relationship indicators
 * - Abstract decorative elements
 */
declare function CircularUI({ label, circles, className }: CircularUIProps): react_jsx_runtime.JSX.Element;

interface FeatureCheckItemProps {
    /** Feature title */
    title: string;
    /** Feature description */
    description?: string | undefined;
    /** Custom icon component (defaults to Check) */
    icon?: Icon | undefined;
    /** Icon className */
    iconClassName?: string;
    /** Additional className for container */
    className?: string;
}
/**
 * FeatureCheckItem - Atomic feature item with icon
 *
 * Displays a single feature with an icon, title, and optional description.
 * Commonly used in feature lists and comparison tables.
 */
declare function FeatureCheckItem({ title, description, icon: Icon, iconClassName, className, }: FeatureCheckItemProps): react_jsx_runtime.JSX.Element;
declare namespace FeatureCheckItem {
    var displayName: string;
}

type PlanTier = "free" | "starter" | "pro" | "enterprise" | (string & {});
interface FeatureGateProps {
    /** The user's current plan tier, read from billing. */
    currentPlan: PlanTier;
    /** Plan tiers that unlock the children. */
    requires: ReadonlyArray<PlanTier>;
    /** Content rendered when `currentPlan` satisfies `requires`. */
    children: ReactNode;
    /**
     * Fallback rendered when the gate is closed. Typically `<UpgradeBanner>`.
     * When omitted, the gate renders nothing (silent gate).
     */
    fallback?: ReactNode;
}
/**
 * FeatureGate — declarative plan-tier gate.
 *
 * Pure presentational primitive. The caller passes the user's current plan
 * (read from `@nebutra/billing` upstream). No context provider is required,
 * which keeps the gate composable across server and client boundaries.
 *
 * The unicorn-validated pattern from Linear / Notion: never hard-route block
 * — show the value behind the gate, fade it, surface an inline upsell, let
 * the user opt-in to upgrade without losing place.
 *
 * @example
 * ```tsx
 * <FeatureGate
 *   currentPlan={org.plan}
 *   requires={["pro", "enterprise"]}
 *   fallback={<UpgradeBanner feature="Custom workflows" />}
 * >
 *   <WorkflowEditor />
 * </FeatureGate>
 * ```
 */
declare function FeatureGate({ currentPlan, requires, children, fallback }: FeatureGateProps): react_jsx_runtime.JSX.Element;
/**
 * Hook variant — for cases where conditional rendering needs surrounding logic.
 */
declare function useFeatureGate(currentPlan: PlanTier, requires: ReadonlyArray<PlanTier>): {
    unlocked: boolean;
};

interface FeatureIconItemProps {
    /** Feature icon */
    icon: Icon;
    /** Feature title */
    title: string;
    /** Feature description */
    description?: string;
    /** Icon className */
    iconClassName?: string;
    /** Additional className */
    className?: string;
}
/**
 * FeatureIconItem - Atomic feature item with icon
 *
 * Displays a feature with an icon, title, and optional description.
 * Used in feature grids and lists.
 */
declare function FeatureIconItem({ icon: Icon, title, description, iconClassName, className, }: FeatureIconItemProps): react_jsx_runtime.JSX.Element;
declare namespace FeatureIconItem {
    var displayName: string;
}

type FeedbackEmotion = "love" | "okay" | "not-great" | "hate";
type FeedbackTopic = string | {
    value: string;
    label: string;
};
type FeedbackMetadata = Record<string, string | number | boolean | null | undefined>;
interface FeedbackPayload {
    label: string;
    emotion?: FeedbackEmotion;
    message: string;
    topic?: string;
    metadata?: FeedbackMetadata;
}
interface FeedbackBaseProps {
    /** Short visible label. Use Title Case, e.g. "Feedback" or "Report a Bug". */
    label: string;
    /** Prompt shown next to the emotion row. Defaults to "How was this experience?". */
    copy?: string;
    /** Pre-defined topics shown in the topic select. */
    topics?: readonly FeedbackTopic[];
    /** Show the default triage topics when `topics` is omitted. */
    showTopics?: boolean;
    /** Non-PII context attached to the submission. */
    metadata?: FeedbackMetadata;
    /** Called when the user submits feedback. */
    onSubmit?: (payload: FeedbackPayload) => void | Promise<void>;
    /** Skip `onSubmit` while preserving local interaction. */
    dryRun?: boolean;
    disabled?: boolean;
    className?: string;
}
interface FeedbackDefaultProps extends FeedbackBaseProps {
    type?: "default";
    defaultOpen?: boolean;
}
interface FeedbackInlineProps extends FeedbackBaseProps {
    type: "inline";
    defaultExpanded?: boolean;
}
type FeedbackProps = FeedbackDefaultProps | FeedbackInlineProps;
declare function Feedback(props: FeedbackProps): react_jsx_runtime.JSX.Element;
declare namespace Feedback {
    var displayName: string;
}

type FileAttachmentDisplay = "chip" | "image-only";
type FileAttachmentProps = {
    filename: string;
    /** Optional file size in bytes; rendered below filename when present. */
    size?: number;
    /** Pass true when MIME indicates an image; pair with `url` to show a thumbnail. */
    isImage?: boolean | undefined;
    /** Preview URL — required for thumbnail rendering. */
    url?: string | undefined;
    /** Removal callback. When omitted, no remove button renders. */
    onRemove?: () => void;
    /** @default "chip" */
    display?: FileAttachmentDisplay;
    className?: string;
};
declare function FileAttachment({ filename, size, isImage, url, onRemove, display, className, }: FileAttachmentProps): ReactElement;

type FileFormat = "doc" | "pdf" | "md" | "mdx" | "csv" | "xls" | "xlsx" | "txt" | "ppt" | "pptx" | "zip" | "rar" | "tar" | "gz" | "code" | "html" | "js" | "jsx" | "tsx" | "css" | "json" | "img" | "png" | "jpg" | "jpeg" | "video";
type FileCardProps = {
    format: FileFormat;
    className?: string;
};
declare const FileCard: ({ ref, format, className, }: FileCardProps & {
    ref?: Ref<HTMLDivElement> | undefined;
}) => react_jsx_runtime.JSX.Element;

interface FilterPillOption {
    value: string;
    label: string;
    /** Optional count badge after label, e.g. "All (24)" */
    count?: number;
    /** Optional leading icon */
    icon?: React$1.ComponentType<{
        className?: string;
    }>;
    disabled?: boolean;
}
type FilterPillsSize = "sm" | "md";
type FilterPillsVariant = "solid" | "subtle";
interface FilterPillsBaseProps {
    options: FilterPillOption[];
    size?: FilterPillsSize;
    className?: string;
    /** Visual variant. "solid" = filled active state; "subtle" = lighter active. Default "solid". */
    variant?: FilterPillsVariant;
}
interface FilterPillsSingleProps extends FilterPillsBaseProps {
    type?: "single";
    value: string;
    onValueChange: (value: string) => void;
}
interface FilterPillsMultipleProps extends FilterPillsBaseProps {
    type: "multiple";
    value: string[];
    onValueChange: (value: string[]) => void;
}
type FilterPillsProps = FilterPillsSingleProps | FilterPillsMultipleProps;
/**
 * FilterPills — pill-style category filter row.
 *
 * Models the pill filter row in MiniMax / OpenAI GPT Store.
 * Single-select by default; multi-select optional. Horizontally scrollable
 * on overflow.
 *
 * @example Single-select (default)
 * ```tsx
 * const [category, setCategory] = useState("all");
 * <FilterPills
 *   value={category}
 *   onValueChange={setCategory}
 *   options={[
 *     { value: "all", label: "全部" },
 *     { value: "featured", label: "官方精选" },
 *     { value: "dev", label: "技术开发" },
 *   ]}
 * />
 * ```
 *
 * @example Multi-select
 * ```tsx
 * const [tags, setTags] = useState<string[]>([]);
 * <FilterPills
 *   type="multiple"
 *   value={tags}
 *   onValueChange={setTags}
 *   options={[...]}
 * />
 * ```
 */
declare function FilterPills(props: FilterPillsProps): React$1.ReactElement;

/**
 * Flex - Horizontal layout primitive
 *
 * Arranges children in a horizontal row with consistent spacing.
 *
 * @see apps/landing/DESIGN.md Section 10.1
 */
interface FlexProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Render as a different element */
    as?: React$1.ElementType;
    /** Gap between children */
    gap?: SpacingScale;
    /** Vertical alignment */
    align?: "start" | "center" | "end" | "baseline" | "stretch";
    /** Horizontal distribution */
    justify?: "start" | "center" | "end" | "between" | "around" | "evenly";
    /** Allow wrapping */
    wrap?: boolean;
    /** Flex direction */
    direction?: "row" | "row-reverse" | "col" | "col-reverse";
    children?: React$1.ReactNode;
}
declare const Flex: {
    ({ as: Component, className, gap, align, justify, wrap, direction, children, ref, ...props }: FlexProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): React$1.ReactElement<any, string | React$1.JSXElementConstructor<any>>;
    displayName: string;
};

/**
 * Props for FlickeringGrid component
 *
 * @description
 * A canvas-based flickering grid background with randomly changing opacity squares.
 * Creates a subtle, animated tech-aesthetic background effect.
 *
 * **UX Scenarios:**
 * - Hero section backgrounds
 * - Card/panel decorative backgrounds
 * - Loading state ambient animation
 * - Dashboard backgrounds
 * - Tech/data visualization aesthetics
 *
 * **Performance:**
 * - Uses Canvas for efficient rendering
 * - IntersectionObserver pauses when offscreen
 * - ResizeObserver for responsive sizing
 * - DPR-aware for sharp rendering
 */
interface FlickeringGridProps extends React__default.HTMLAttributes<HTMLDivElement> {
    /**
     * Size of each square in pixels
     * @default 4
     */
    squareSize?: number;
    /**
     * Gap between squares in pixels
     * @default 6
     */
    gridGap?: number;
    /**
     * Probability of a square flickering per second (0-1)
     * @default 0.3
     */
    flickerChance?: number;
    /**
     * Color of the squares (any CSS color)
     * @default "rgb(0, 0, 0)"
     */
    color?: string;
    /**
     * Fixed width (auto if not specified)
     */
    width?: number;
    /**
     * Fixed height (auto if not specified)
     */
    height?: number;
    /**
     * Maximum opacity of the squares
     * @default 0.3
     */
    maxOpacity?: number;
}
/**
 * FlickeringGrid - Animated flickering grid background
 *
 * @example
 * ```tsx
 * // Basic usage as background
 * <div className="relative h-[400px]">
 *   <FlickeringGrid className="absolute inset-0" />
 *   <Content />
 * </div>
 *
 * // Custom colors and density
 * <FlickeringGrid
 *   color="rgb(59, 130, 246)"
 *   squareSize={6}
 *   gridGap={4}
 *   flickerChance={0.5}
 *   maxOpacity={0.4}
 * />
 *
 * // Rounded container
 * <div className="relative overflow-hidden rounded-[var(--radius-lg)]">
 *   <FlickeringGrid />
 * </div>
 * ```
 */
declare const FlickeringGrid: React__default.FC<FlickeringGridProps>;

type FolderColor = "blue" | "black" | "grey" | "yellow" | "orange" | "red";
type FolderSize = "sm" | "md" | "lg";
type FolderProps = {
    /** @default "blue" */
    color?: FolderColor;
    /** @default "lg" */
    size?: FolderSize;
    /** Optional pill label on the folder body. Doubles as `aria-label` when interactive. */
    label?: string;
    /** When provided, the folder renders as a real <button> with keyboard support. */
    onClick?: () => void;
    className?: string;
};
declare const Folder: ({ ref, color, size, label, onClick, className, }: FolderProps & {
    ref?: Ref<HTMLDivElement | HTMLButtonElement> | undefined;
}) => react_jsx_runtime.JSX.Element;

type GeistTooltipType = "default" | "success" | "warning" | "error" | "violet";
type GeistTooltipPosition = "top" | "bottom" | "left" | "right";
type GeistTooltipBoxAlign = "left" | "right" | "center";
interface GeistTooltipProps {
    /** The element that triggers the tooltip on hover/focus */
    children: React$1.ReactNode;
    /** The content of the tooltip */
    text: React$1.ReactNode;
    /** Positioning of the tooltip relative to the trigger */
    position?: GeistTooltipPosition;
    /** Alignment of the tooltip bounding box */
    boxAlign?: GeistTooltipBoxAlign;
    /** Tooltip appearance type */
    type?: GeistTooltipType;
    /** Whether to show a delay before the tooltip appears (or a custom delay in ms) */
    delay?: boolean | number;
    /** Whether to display the small arrow pointing to the trigger */
    tip?: boolean;
    /** Whether the text inside the tooltip is centered */
    center?: boolean;
    /** Custom className for the tooltip container */
    className?: string;
    /** Custom base-ui root props */
    rootProps?: React$1.ComponentPropsWithoutRef<typeof Tooltip.Root>;
    /** Custom base-ui popup props */
    popupProps?: React$1.ComponentPropsWithoutRef<typeof Tooltip.Popup>;
}
declare const GeistTooltip: ({ children, text, position, boxAlign, type, delay, tip, center, className, rootProps, popupProps, }: GeistTooltipProps) => react_jsx_runtime.JSX.Element;

/**
 * Single contribution day data
 */
interface ContributionDay {
    /** ISO date string (e.g., "2025-09-13") */
    date: string;
    /** Number of contributions on this day */
    count: number;
}
/**
 * Props for GitHubCalendar component
 *
 * @description
 * A GitHub-style contribution heatmap calendar visualization.
 * Displays a year of contribution data in a grid format with color intensity
 * representing activity levels.
 *
 * **UX Scenarios:**
 * - User profile activity visualization (commits, posts, workouts)
 * - Habit tracking dashboards
 * - Learning streak displays
 * - Content creation frequency visualization
 * - Gaming achievement calendars
 *
 * **Data Integration:**
 * - GitHub API contributions
 * - Custom activity tracking systems
 * - CMS content publishing history
 * - E-commerce order frequency
 */
interface GitHubCalendarProps {
    /** Array of contribution data for each day */
    data: ContributionDay[];
    /**
     * Custom color scale from least to most contributions
     * @default ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"]
     */
    colors?: string[];
    /**
     * Number of weeks to display
     * @default 53 (one year)
     */
    weeks?: number;
    /**
     * Custom thresholds for color mapping
     * Array of numbers defining count ranges for each color level
     * @default [0, 1, 2, 3, 4] (0=level0, 1=level1, 2=level2, 3=level3, 4+=level4)
     */
    thresholds?: number[];
    /**
     * Day labels for the left side
     * @default ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
     */
    dayLabels?: string[];
    /**
     * Whether to show day labels
     * @default true
     */
    showDayLabels?: boolean;
    /**
     * Whether to show month labels
     * @default true
     */
    showMonthLabels?: boolean;
    /**
     * Whether to show the legend
     * @default true
     */
    showLegend?: boolean;
    /**
     * Legend labels
     * @default { less: "Less", more: "More" }
     */
    legendLabels?: {
        less: string;
        more: string;
    };
    /**
     * Tooltip formatter function
     * @default (date, count) => `${date}: ${count} contributions`
     */
    tooltipFormatter?: (date: string, count: number) => string;
    /** Container className */
    className?: string;
    /** Cell className */
    cellClassName?: string;
}
/**
 * GitHubCalendar - Contribution heatmap calendar visualization
 *
 * @example
 * ```tsx
 * <GitHubCalendar
 *   data={[
 *     { date: "2025-01-01", count: 3 },
 *     { date: "2025-01-02", count: 1 },
 *   ]}
 *   colors={["#ebedf0", "#c6e48b", "#7bc96f", "#239a3b", "#196127"]}
 * />
 * ```
 */
declare const GitHubCalendar: React.FC<GitHubCalendarProps>;

type DiffLineKind = "hunk" | "context" | "add" | "del";
type DiffLine = {
    kind: "hunk";
    content: string;
} | {
    kind: "context";
    old: number | null;
    new: number | null;
    content: string;
} | {
    kind: "add";
    old: null;
    new: number;
    content: string;
} | {
    kind: "del";
    old: number;
    new: null;
    content: string;
};
interface DiffComment {
    id: string;
    author: string;
    initials: string;
    body: string;
    createdAt: string;
}
interface GithubInlineDiffProps {
    /** Array of diff lines */
    diff: readonly DiffLine[];
    /** File name to display in header */
    fileName: string;
    /** File status badge text */
    fileStatus?: string;
    /** Initial comments per line (keyed by line index) */
    initialComments?: Record<number, DiffComment[]>;
    /** Callback when a new comment is added */
    onAddComment?: (lineIndex: number, comment: DiffComment) => void;
    /** Callback when thread resolve status changes */
    onResolveChange?: (lineIndex: number, resolved: boolean) => void;
    /** Current user info for new comments */
    currentUser?: {
        name: string;
        initials: string;
    };
    /** Additional CSS classes */
    className?: string;
}
/**
 * GithubInlineDiff - GitHub-style diff viewer with inline comments
 *
 * A code diff viewer that allows inline commenting on individual lines,
 * similar to GitHub's pull request review interface.
 *
 * @example Basic usage
 * ```tsx
 * const diff = [
 *   { kind: "hunk", content: "@@ -12,7 +12,9 @@" },
 *   { kind: "context", old: 12, new: 12, content: "export function foo() {" },
 *   { kind: "del", old: 13, new: null, content: "  const x = 1" },
 *   { kind: "add", old: null, new: 13, content: "  const x = 2" },
 *   { kind: "context", old: 14, new: 14, content: "}" },
 * ];
 *
 * <GithubInlineDiff diff={diff} fileName="src/utils.ts" />
 * ```
 *
 * @example With callbacks
 * ```tsx
 * <GithubInlineDiff
 *   diff={diff}
 *   fileName="src/server.ts"
 *   fileStatus="modified"
 *   currentUser={{ name: "John", initials: "JD" }}
 *   onAddComment={(lineIdx, comment) => console.log(lineIdx, comment)}
 *   onResolveChange={(lineIdx, resolved) => console.log(lineIdx, resolved)}
 * />
 * ```
 */
declare function GithubInlineDiff({ diff, fileName, fileStatus, initialComments, onAddComment, onResolveChange, currentUser, className, }: GithubInlineDiffProps): react_jsx_runtime.JSX.Element;

type GlobeMarker = {
    location: [number, number];
    size: number;
};
interface GlobeConfig {
    /** Globe width in pixels */
    width?: number;
    /** Globe height in pixels */
    height?: number;
    /** Device pixel ratio */
    devicePixelRatio?: number;
    /** Initial phi rotation */
    phi?: number;
    /** Initial theta rotation */
    theta?: number;
    /** Dark mode (0-1) */
    dark?: number;
    /** Diffuse lighting */
    diffuse?: number;
    /** Map sample count for detail */
    mapSamples?: number;
    /** Map brightness */
    mapBrightness?: number;
    /** Base color RGB (0-1) */
    baseColor?: [number, number, number];
    /** Marker color RGB (0-1) */
    markerColor?: [number, number, number];
    /** Glow color RGB (0-1) */
    glowColor?: [number, number, number];
    /** Array of markers to display */
    markers?: GlobeMarker[];
}
interface GlobeProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Globe configuration */
    config?: GlobeConfig;
    /** Auto-rotation speed (set to 0 to disable) */
    rotationSpeed?: number;
}
/**
 * Globe - Interactive 3D globe visualization
 *
 * A WebGL-powered 3D globe with markers, rotation, and drag interaction.
 * Requires the `cobe` library.
 *
 * @example
 * ```tsx
 * <Globe
 *   config={{
 *     markers: [
 *       { location: [40.7128, -74.006], size: 0.1 }, // NYC
 *       { location: [51.5074, -0.1278], size: 0.08 }, // London
 *     ],
 *     markerColor: [0.1, 0.8, 1],
 *   }}
 * />
 * ```
 */
declare function Globe({ className, config, rotationSpeed, ...props }: GlobeProps): react_jsx_runtime.JSX.Element;
declare namespace Globe {
    var displayName: string;
}

type GradientVariant = 1 | 2 | 3;
type GradientTheme = "neon" | "ai" | "custom";
interface GradientAnimatedTextProps extends React$1.HTMLAttributes<HTMLSpanElement> {
    /** Text content */
    children: string;
    /** Gradient variant (1, 2, or 3) - each has different animation timing */
    variant?: GradientVariant;
    /** Color theme preset */
    theme?: GradientTheme;
    /** Custom gradient start color (CSS color) */
    gradientFrom?: string | undefined;
    /** Custom gradient end color (CSS color) */
    gradientTo?: string | undefined;
    /** Animation duration in seconds */
    duration?: number;
}
/**
 * GradientAnimatedText - Animated gradient text with cycling opacity
 *
 * Creates a text element with a gradient background that animates
 * through different opacity states, creating a cycling highlight effect.
 *
 * @example
 * ```tsx
 * <div className="flex">
 *   <GradientAnimatedText variant={1} theme="neon">Build.</GradientAnimatedText>
 *   <GradientAnimatedText variant={2} theme="neon">Ship.</GradientAnimatedText>
 *   <GradientAnimatedText variant={3} theme="neon">Scale.</GradientAnimatedText>
 * </div>
 * ```
 */
declare function GradientAnimatedText({ children, variant, theme, gradientFrom, gradientTo, duration, className, style, ...props }: GradientAnimatedTextProps): react_jsx_runtime.JSX.Element;
declare namespace GradientAnimatedText {
    var displayName: string;
}

interface GrainGradientBackgroundProps extends React$1.HTMLAttributes<HTMLDivElement>, Partial<Omit<GrainGradientProps, "style">> {
}
/**
 * GrainGradientBackground - Animated grain gradient shader background
 *
 * A WebGL-powered animated background with grain texture effect.
 * Supports multiple colors, softness, noise, and various shapes.
 *
 * @example
 * ```tsx
 * <div className="relative min-h-screen">
 *   <GrainGradientBackground
 *     colors={["#5100ff", "#00ff80", "#ffcc00"]}
 *     softness={0.8}
 *     noise={0.1}
 *     speed={0.5}
 *   />
 *   <Content />
 * </div>
 * ```
 */
declare function GrainGradientBackground({ className, ...props }: GrainGradientBackgroundProps): react_jsx_runtime.JSX.Element;
declare namespace GrainGradientBackground {
    var displayName: string;
}
/** @deprecated Use GrainGradientBackground instead */
declare const GrainCloudsBackground: typeof GrainGradientBackground;
/** @deprecated Use GrainGradientBackgroundProps instead */
type GrainCloudsBackgroundProps = GrainGradientBackgroundProps;

interface GridFeatureCardProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** Feature icon */
    icon: Icon;
    /** Feature title */
    title: string;
    /** Feature description */
    description: string;
    /** Grid pattern size */
    gridSize?: number;
}
/**
 * GridFeatureCard - Feature card with decorative grid pattern background
 *
 * Displays a feature with icon, title, description and a decorative
 * grid pattern overlay. Used in feature grids and lists.
 */
declare function GridFeatureCard({ icon: Icon, title, description, gridSize, className, ...props }: GridFeatureCardProps): react_jsx_runtime.JSX.Element;
declare namespace GridFeatureCard {
    var displayName: string;
}

type MotionDivProps$2 = React$1.ComponentProps<typeof motion.div>;
interface GridPatternCardProps extends Omit<MotionDivProps$2, "children"> {
    /** Card content */
    children: React$1.ReactNode;
    /** Additional className for card container */
    className?: string;
    /** Additional className for pattern layer */
    patternClassName?: string;
    /** Additional className for gradient overlay */
    gradientClassName?: string;
    /** Disable entrance animation */
    disableAnimation?: boolean;
}
/**
 * GridPatternCard - Card with grid ellipsis background pattern
 *
 * A card component with an animated grid pattern background that supports
 * light/dark themes automatically.
 *
 * @example
 * ```tsx
 * <GridPatternCard>
 *   <GridPatternCardBody>
 *     <h3>Title</h3>
 *     <p>Description</p>
 *   </GridPatternCardBody>
 * </GridPatternCard>
 * ```
 */
declare function GridPatternCard({ children, className, patternClassName, gradientClassName, disableAnimation, ...props }: GridPatternCardProps): react_jsx_runtime.JSX.Element;
declare namespace GridPatternCard {
    var displayName: string;
}
type GridPatternCardBodyProps = React$1.HTMLAttributes<HTMLDivElement>;
/**
 * GridPatternCardBody - Content wrapper for GridPatternCard
 */
declare function GridPatternCardBody({ className, ...props }: GridPatternCardBodyProps): react_jsx_runtime.JSX.Element;
declare namespace GridPatternCardBody {
    var displayName: string;
}

/**
 * Grid Component Tokens — Layer 3
 *
 * Two-dimensional guide layouts for docs, marketing, and feature breakdowns.
 * The primitive consumes these values through local CSS variables so guide
 * contrast, clipping, and responsive math stay centralized.
 */
declare const gridTokens: {
    readonly guide: {
        readonly width: 1;
        readonly color: "hsl(var(--border))";
    };
    readonly cell: {
        readonly minBlockSize: 48;
        readonly padding: 12;
        readonly solidBackground: "hsl(var(--background))";
        readonly debugBackground: "hsl(var(--muted) / 0.28)";
    };
    readonly radius: 6;
    readonly breakpoints: {
        readonly md: 768;
        readonly lg: 1024;
    };
};
type GridBreakpoint = keyof typeof gridTokens.breakpoints | "sm";

type GridResponsiveValue<T> = T | Partial<Record<GridBreakpoint, T>>;
type GridLine = number | `${number}` | `${number}/${number}` | `${number}/-${number}`;
type GridHeight = "preserve-aspect-ratio" | string | number;
type GridHideGuides = "row" | "column" | "both";
interface GridSystemProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "children" | "style"> {
    /** Show debug cell wash and container-query boundary. */
    debug?: boolean;
    /** Guide stroke width. Defaults to the Grid component token. */
    guideWidth?: number | string;
    /**
     * Use container queries for nested responsive Grid props.
     * Kept unstable because it depends on the caller's containment strategy.
     */
    unstable_useContainer?: boolean;
    children?: React$1.ReactNode;
    style?: React$1.CSSProperties;
    /**
     * Compatibility path for the historical API where Grid.System was also
     * the grid root. New code should render <Grid.System><Grid /></Grid.System>.
     */
    columns?: GridResponsiveValue<number>;
    rows?: GridResponsiveValue<number>;
    rowHeight?: number | string;
    showGuides?: boolean;
    hideGuides?: GridHideGuides;
}
interface GridProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "children" | "style"> {
    /** Number of equal-width columns. Can be responsive at sm/md/lg. */
    columns: GridResponsiveValue<number>;
    /** Number of rows. Can be responsive at sm/md/lg. */
    rows?: GridResponsiveValue<number>;
    /** Preserve the column/row ratio, or use a CSS height value. */
    height?: GridHeight;
    /** Hide one or both guide axes. */
    hideGuides?: GridHideGuides;
    /** Legacy auto-row height for old Grid.System compatibility. */
    rowHeight?: number | string;
    /** Override system debug for a single grid. */
    debug?: boolean;
    /** Override system guide width for a single grid. */
    guideWidth?: number | string;
    children?: React$1.ReactNode;
    style?: React$1.CSSProperties;
}
interface GridCellProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "children" | "style"> {
    /** Explicit CSS grid-column placement, e.g. 1, "1/3", "2/4". */
    column?: GridResponsiveValue<GridLine>;
    /** Explicit CSS grid-row placement, e.g. 1, "1/3", "1/-1". */
    row?: GridResponsiveValue<GridLine>;
    /** Compatibility alias for column span. Prefer column for new code. */
    span?: GridResponsiveValue<number>;
    /** Opaque cell background that clips guide lines behind the cell. */
    solid?: boolean;
    /** Compatibility alias that clips all guides behind this cell. */
    hideGuides?: boolean | GridHideGuides;
    /** Deprecated compatibility aliases from the pre-System/Grid split. */
    hideRowGuides?: boolean | "top" | "bottom";
    hideColumnGuides?: boolean | "left" | "right";
    children?: React$1.ReactNode;
    style?: React$1.CSSProperties;
}
declare const GridSystem: {
    ({ className, debug, guideWidth, unstable_useContainer, children, style, columns, rows, rowHeight, showGuides, hideGuides, ref, ...props }: GridSystemProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const GridRoot: {
    ({ className, columns, rows, height, hideGuides, rowHeight, debug, guideWidth, children, style, ref, ...props }: GridProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const GridCell: {
    ({ className, column, row, span, solid, hideGuides, hideRowGuides, hideColumnGuides, children, style, ref, ...props }: GridCellProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Grid: {
    ({ className, columns, rows, height, hideGuides, rowHeight, debug, guideWidth, children, style, ref, ...props }: GridProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
} & {
    System: {
        ({ className, debug, guideWidth, unstable_useContainer, children, style, columns, rows, rowHeight, showGuides, hideGuides, ref, ...props }: GridSystemProps & {
            ref?: React$1.Ref<HTMLDivElement> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Cell: {
        ({ className, column, row, span, solid, hideGuides, hideRowGuides, hideColumnGuides, children, style, ref, ...props }: GridCellProps & {
            ref?: React$1.Ref<HTMLDivElement> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

/**
 * Semantic text styles — legacy aliases (kept for backward compat)
 * Prefer the named scale below for new code.
 */
declare const textStyles: {
    readonly "display-1": "text-5xl md:text-6xl lg:text-7xl font-bold leading-tight";
    readonly "display-2": "text-4xl md:text-5xl font-bold leading-tight";
    readonly "heading-1": "text-3xl md:text-4xl font-bold leading-tight";
    readonly "heading-2": "text-2xl md:text-3xl font-semibold leading-snug";
    readonly "heading-3": "text-xl md:text-2xl font-semibold leading-snug";
    readonly "heading-4": "text-lg md:text-xl font-semibold leading-normal";
    readonly "body-lg": "text-lg leading-relaxed";
    readonly body: "text-base leading-relaxed";
    readonly "body-sm": "text-sm leading-normal";
    readonly caption: "text-xs font-medium leading-normal";
    readonly code: "font-mono text-sm leading-relaxed";
    readonly label: "text-sm font-medium leading-normal";
};
/**
 * Text color presets
 */
declare const textColors: {
    readonly default: "text-foreground";
    readonly muted: "text-muted-foreground";
    readonly subtle: "text-muted-foreground/80";
    readonly accent: "text-[var(--brand-accent)]";
    readonly gradient: "bg-primary bg-clip-text text-transparent";
};
type TextStyle = keyof typeof textStyles;
type TextColor = keyof typeof textColors;

/**
 * Heading - Semantic heading primitive
 *
 * Renders h1-h6 elements with appropriate typography styling.
 *
 * @see apps/landing/DESIGN.md Section 10.7
 */
type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;
type HeadingElement = "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
interface HeadingProps extends React$1.HTMLAttributes<HTMLHeadingElement> {
    /** Heading level (1-6) */
    level?: HeadingLevel;
    /** Override the rendered element (for SEO purposes) */
    as?: HeadingElement;
    /** Text color */
    color?: TextColor;
    /** Use display style instead of heading style */
    display?: boolean;
    /** Text alignment */
    align?: "left" | "center" | "right";
    children?: React$1.ReactNode;
}
declare const Heading: {
    ({ level, as, color, display, align, className, children, ref, ...props }: HeadingProps & {
        ref?: React$1.Ref<HTMLHeadingElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface HexGridProps extends React__default.SVGProps<SVGSVGElement> {
    /** Hex cell radius in pixels (default: 24) */
    size?: number;
    /** Hex stroke/fill color (default: hsl(var(--primary))) */
    color?: string;
    /** Hex opacity (default: 0.12) */
    opacity?: number;
    /** Stroke width in pixels (default: 1) */
    strokeWidth?: number;
    /** Enable subtle animated glow effect on individual hexagons (default: false) */
    glow?: boolean;
    /** Fill hexagons instead of just stroke (default: false) */
    filled?: boolean;
    /** Additional CSS classes */
    className?: string;
}
/**
 * HexGrid - SVG hexagonal tessellation background
 *
 * @description
 * Renders a flat-top hexagonal grid pattern that fills its container.
 * Derived from Nebutra's hexagonal N logo — the core visual DNA.
 * Supports optional glow animation and filled mode.
 *
 * @example Basic usage
 * ```tsx
 * <div className="relative h-[500px] w-full overflow-hidden">
 *   <HexGrid />
 * </div>
 * ```
 *
 * @example With glow effect
 * ```tsx
 * <div className="relative h-[500px] w-full overflow-hidden">
 *   <HexGrid glow color="var(--brand-accent)" opacity={0.15} />
 * </div>
 * ```
 *
 * @example Filled hexagons with gradient mask
 * ```tsx
 * <HexGrid
 *   filled
 *   size={32}
 *   className="[mask-image:radial-gradient(ellipse_at_center,white,transparent_70%)]"
 * />
 * ```
 */
declare function HexGrid({ size, color, opacity: hexOpacity, strokeWidth, glow, filled, className, ...props }: HexGridProps): react_jsx_runtime.JSX.Element;

type HighlighterAction = "highlight" | "underline" | "box" | "circle" | "strike-through" | "crossed-off" | "bracket";
interface HighlighterProps {
    /** Content to be highlighted/annotated */
    children: React__default.ReactNode;
    /** Type of annotation effect */
    action?: HighlighterAction;
    /** Color of the highlight */
    color?: string;
    /** Width of the annotation stroke in pixels */
    strokeWidth?: number;
    /** Duration of animation in milliseconds */
    animationDuration?: number;
    /** Number of draw iterations (adds sketchy effect when > 1) */
    iterations?: number;
    /** Padding between element and annotation in pixels */
    padding?: number;
    /** Whether to annotate across multiple lines */
    multiline?: boolean;
    /** Trigger animation only when element enters viewport */
    triggerOnView?: boolean;
}
/**
 * Highlighter - Hand-drawn style text annotation effect
 *
 * @description
 * Creates a human-drawn marker stroke effect on text using rough-notation.
 * Supports various annotation styles including highlight, underline, circle, etc.
 *
 * @example Basic highlight
 * ```tsx
 * <Highlighter>Important text</Highlighter>
 * ```
 *
 * @example Underline with custom color
 * ```tsx
 * <Highlighter action="underline" color="var(--brand-accent)">
 *   Underlined text
 * </Highlighter>
 * ```
 *
 * @example Multiple annotation types
 * ```tsx
 * <p>
 *   The{" "}
 *   <Highlighter action="underline" color="var(--brand-accent)">
 *     Magic UI Highlighter
 *   </Highlighter>{" "}
 *   makes important{" "}
 *   <Highlighter action="highlight" color="color-mix(in oklab, var(--brand-accent) 28%, white)">
 *     text stand out
 *   </Highlighter>{" "}
 *   effortlessly.
 * </p>
 * ```
 *
 * @example Circle annotation
 * ```tsx
 * <Highlighter action="circle" color="hsl(var(--destructive))" strokeWidth={2}>
 *   Circled!
 * </Highlighter>
 * ```
 */
declare function Highlighter({ children, action, color, strokeWidth, animationDuration, iterations, padding, multiline, triggerOnView, }: HighlighterProps): react_jsx_runtime.JSX.Element;

interface InfiniteSliderProps {
    /** Content to scroll infinitely */
    children: React$1.ReactNode;
    /** Gap between items in pixels */
    gap?: number;
    /** Animation duration in seconds (or use speed for px/s) */
    duration?: number;
    /** Duration when hovered */
    durationOnHover?: number;
    /** Speed in pixels per second (alternative to duration) */
    speed?: number;
    /** Speed when hovered in pixels per second */
    speedOnHover?: number;
    /** Scroll direction */
    direction?: "horizontal" | "vertical";
    /** Reverse scroll direction */
    reverse?: boolean;
    /** Additional className */
    className?: string;
}
/**
 * InfiniteSlider - Continuous scrolling content container
 *
 * Creates an infinite scrolling effect by duplicating children.
 * Supports both horizontal and vertical scrolling.
 *
 * @example
 * ```tsx
 * <InfiniteSlider gap={24} speed={50}>
 *   <img src="/logo1.svg" alt="Logo 1" />
 *   <img src="/logo2.svg" alt="Logo 2" />
 * </InfiniteSlider>
 * ```
 */
declare function InfiniteSlider({ children, gap, duration, durationOnHover, speed, speedOnHover, direction, reverse, className, }: InfiniteSliderProps): react_jsx_runtime.JSX.Element;

type MotionDivProps$1 = React$1.ComponentProps<typeof motion.div>;
interface InteractiveCardProps extends Omit<MotionDivProps$1, "ref"> {
    /** Step label (e.g., "STEP 1") */
    step: string;
    /** Card title */
    title: string;
    /** Card description */
    description: string;
    /** Custom icon (optional, default animated icon provided) */
    icon?: React$1.ReactNode;
}
/**
 * Default animated export icon with hover animation
 */
declare function AnimatedExportIcon(): react_jsx_runtime.JSX.Element;
/**
 * InteractiveCard - Step-based card with animated icon on hover
 *
 * @example
 * ```tsx
 * <InteractiveCard
 *   step="STEP 1"
 *   title="Create Project"
 *   description="Start by creating a new project"
 * />
 * ```
 */
declare const InteractiveCard: {
    ({ className, step, title, description, icon, ref, ...props }: InteractiveCardProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface InteractiveFrostedGlassCardProps {
    title: string;
    description: string;
    icon?: React__default.ReactNode;
    className?: string;
    variant?: "surface" | "elevated";
}
declare function InteractiveFrostedGlassCard({ title, description, icon, className, variant, }: InteractiveFrostedGlassCardProps): react_jsx_runtime.JSX.Element;

declare const phoneChromes: readonly ["graphite", "silver", "titanium"];
type PhoneChrome = (typeof phoneChromes)[number];

type PhoneFit = "cover" | "contain";
type PhoneBaseProps = Omit<HTMLAttributes<HTMLDivElement>, "children"> & {
    /**
     * Optional origin shown when the phone has no captured media. Use a host or
     * product surface, not prose.
     */
    address?: string;
    /** Chrome finish. Keep this tied to the surrounding theme. */
    chrome?: PhoneChrome;
    /** CSS object-fit for captured image or video media. */
    fit?: PhoneFit;
    /** CSS object-position for captured media. */
    position?: CSSProperties["objectPosition"];
};
type PhoneEmptyProps = PhoneBaseProps & {
    children?: never;
    imageSrc?: never;
    imageAlt?: never;
    src?: never;
    videoSrc?: never;
    videoPoster?: never;
    videoLabel?: never;
};
type PhoneChildrenProps = PhoneBaseProps & {
    children: ReactNode;
    imageSrc?: never;
    imageAlt?: never;
    src?: never;
    videoSrc?: never;
    videoPoster?: never;
    videoLabel?: never;
};
type PhoneImageProps = PhoneBaseProps & {
    children?: never;
    imageSrc: string;
    imageAlt: string;
    src?: never;
    videoSrc?: never;
    videoPoster?: never;
    videoLabel?: never;
};
type PhoneLegacyImageProps = PhoneBaseProps & {
    children?: never;
    /** @deprecated Use `imageSrc` with required `imageAlt`. */
    src: string;
    imageAlt: string;
    imageSrc?: never;
    videoSrc?: never;
    videoPoster?: never;
    videoLabel?: never;
};
type PhoneVideoProps = PhoneBaseProps & {
    children?: never;
    imageSrc?: never;
    imageAlt?: never;
    src?: never;
    videoSrc: string;
    videoLabel: string;
    /**
     * Poster shown before load and under `prefers-reduced-motion`. Required in
     * product use even though the prop stays optional for legacy callers.
     */
    videoPoster?: string;
};
type PhoneProps = PhoneEmptyProps | PhoneChildrenProps | PhoneImageProps | PhoneLegacyImageProps | PhoneVideoProps;
/** @deprecated Use `PhoneProps` instead. */
type IphoneMockupProps = PhoneProps;
/**
 * Phone — device chrome for captured mobile screens.
 *
 * Use this around screenshots, posters, or videos in marketing and docs. The
 * chrome is decorative; accessible naming belongs to the captured media.
 */
declare function Phone(props: PhoneProps): react_jsx_runtime.JSX.Element;
declare namespace Phone {
    var displayName: string;
}
/** @deprecated Use `Phone` instead. */
declare const IphoneMockup: typeof Phone;

interface KpiCardProps {
    title: string;
    value: string | number | never;
    icon: React.ReactNode;
    trend?: {
        value: number;
        isPositive: boolean;
    };
    description?: string;
    className?: string;
}
declare function KpiCard({ title, value, icon, trend, description, className }: KpiCardProps): react_jsx_runtime.JSX.Element;

interface LightRaysProps extends React.HTMLAttributes<HTMLDivElement> {
    ref?: React.Ref<HTMLDivElement> | undefined;
    /** Total number of animated rays */
    count?: number;
    /** Base colour used for the gradients */
    color?: string;
    /** Pixel radius applied to the blur filter */
    blur?: number;
    /** Average seconds each ray takes to complete a cycle */
    speed?: number;
    /** CSS length for the ray height */
    length?: string;
}
/**
 * LightRays - Animated light rays shining from above
 *
 * @description
 * Creates an atmospheric lighting effect with animated rays.
 * Perfect for hero sections, cards, or any container needing visual emphasis.
 *
 * @example Basic usage
 * ```tsx
 * <div className="relative h-[400px] w-full overflow-hidden rounded-[var(--radius-xl)] border">
 *   <LightRays />
 * </div>
 * ```
 *
 * @example Custom colors and count
 * ```tsx
 * <LightRays
 *   count={10}
 *   color="rgba(255, 200, 100, 0.3)"
 *   blur={48}
 *   speed={18}
 * />
 * ```
 */
declare function LightRays({ className, style, count, color, blur, speed, length, ref, ...props }: LightRaysProps): react_jsx_runtime.JSX.Element;

type MotionProps$1 = React$1.ComponentProps<typeof motion.div>;
/**
 * Props for the LineShadowText component
 */
interface LineShadowTextProps extends Omit<React$1.HTMLAttributes<HTMLElement>, keyof MotionProps$1>, MotionProps$1 {
    /** Color of the shadow effect (default: "black") */
    shadowColor?: string;
    /** HTML element to render as (default: "span") */
    as?: React$1.ElementType;
    /** Text content to display - must be a string */
    children: string;
    className?: string;
}
/**
 * LineShadowText - Animated line shadow text effect
 *
 * A text component with an animated diagonal line shadow effect.
 * Great for hero sections, headings, or emphasis text.
 *
 * **Note:** Requires CSS animation to be added to your global styles:
 * ```css
 * @keyframes line-shadow {
 *   0% { background-position: 0 0; }
 *   100% { background-position: 100% -100%; }
 * }
 * .animate-line-shadow {
 *   animation: line-shadow 15s linear infinite;
 * }
 * ```
 *
 * @example Basic usage
 * ```tsx
 * <LineShadowText>Magic UI</LineShadowText>
 * ```
 *
 * @example Custom shadow color
 * ```tsx
 * <LineShadowText shadowColor="#3b82f6">
 *   Blue Shadow
 * </LineShadowText>
 * ```
 *
 * @example As heading
 * ```tsx
 * <LineShadowText as="h1" className="text-5xl font-bold">
 *   Welcome
 * </LineShadowText>
 * ```
 *
 * @example With motion props
 * ```tsx
 * <LineShadowText
 *   initial={{ opacity: 0 }}
 *   animate={{ opacity: 1 }}
 *   transition={{ duration: 0.5 }}
 * >
 *   Animated Entry
 * </LineShadowText>
 * ```
 */
declare function LineShadowText({ children, shadowColor, className, as: Component, ...props }: LineShadowTextProps): react_jsx_runtime.JSX.Element;
/**
 * CSS keyframes required for LineShadowText animation.
 * Add this to your global CSS or Tailwind config.
 */
declare const LINE_SHADOW_CSS = "\n@keyframes line-shadow {\n  0% {\n    background-position: 0 0;\n  }\n  100% {\n    background-position: 100% -100%;\n  }\n}\n\n.animate-line-shadow::after {\n  animation: line-shadow 15s linear infinite;\n}\n";

interface LoaderProps {
    variant?: "circular" | "classic" | "pulse" | "pulse-dot" | "dots" | "typing" | "wave" | "bars" | "terminal" | "text-blink" | "text-shimmer" | "loading-dots";
    size?: "sm" | "md" | "lg";
    text?: string;
    className?: string;
}
interface LoaderSizeProps {
    className?: string | undefined;
    size?: "sm" | "md" | "lg";
}
interface TextLoaderProps extends LoaderSizeProps {
    text?: string | undefined;
}
/** @deprecated Use Spinner directly for single-action loading feedback. */
declare function CircularLoader(props: LoaderSizeProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use Spinner directly for single-action loading feedback. */
declare function ClassicLoader(props: LoaderSizeProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use Spinner directly for single-action loading feedback. */
declare function PulseLoader(props: LoaderSizeProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use Spinner directly for single-action loading feedback. */
declare function PulseDotLoader(props: LoaderSizeProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use LoadingDots directly for inline progress copy. */
declare function DotsLoader(props: LoaderSizeProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use LoadingDots directly for inline progress copy. */
declare function TypingLoader(props: LoaderSizeProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use Spinner directly for single-action loading feedback. */
declare function WaveLoader(props: LoaderSizeProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use Spinner directly for single-action loading feedback. */
declare function BarsLoader(props: LoaderSizeProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use Spinner directly for single-action loading feedback. */
declare function TerminalLoader(props: LoaderSizeProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use LoadingDots directly for inline progress copy. */
declare function TextBlinkLoader({ text, ...props }: TextLoaderProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use LoadingDots directly for inline progress copy. */
declare function TextShimmerLoader({ text, ...props }: TextLoaderProps): react_jsx_runtime.JSX.Element;
/** @deprecated Use LoadingDots directly for inline progress copy. */
declare function TextDotsLoader({ text, ...props }: TextLoaderProps): react_jsx_runtime.JSX.Element;
/**
 * Legacy loader facade.
 *
 * The design-system contract intentionally keeps one canonical spinner and one
 * inline dots primitive. Historical variants remain source-compatible but no
 * longer own private keyframes, durations, or easing curves.
 */
declare function Loader({ variant, size, text, className }: LoaderProps): react_jsx_runtime.JSX.Element;

interface MacbookProProps extends SVGProps<SVGSVGElement> {
    width?: number;
    height?: number;
    src?: string;
}
declare function MacbookPro({ width, height, src, ...props }: MacbookProProps): react_jsx_runtime.JSX.Element;

interface MagicCardProps {
    children?: React__default.ReactNode;
    className?: string;
    /** Size of the gradient spotlight effect */
    gradientSize?: number;
    /** Color of the inner gradient effect */
    gradientColor?: string;
    /** Opacity of the inner gradient effect */
    gradientOpacity?: number;
    /** Start color of the gradient border */
    gradientFrom?: string;
    /** End color of the gradient border */
    gradientTo?: string;
}
/**
 * MagicCard - Spotlight effect card that follows mouse cursor
 *
 * @description
 * A card component with a gradient spotlight effect that follows the mouse cursor
 * and highlights borders on hover. Perfect for feature cards, pricing cards, or
 * any interactive card element.
 *
 * @example Basic usage
 * ```tsx
 * <MagicCard>
 *   <div className="p-4">
 *     <p>Hello World</p>
 *     <span>Hover me</span>
 *   </div>
 * </MagicCard>
 * ```
 *
 * @example Custom gradient colors
 * ```tsx
 * <MagicCard
 *   gradientFrom="hsl(var(--primary))"
 *   gradientTo="var(--brand-accent)"
 *   gradientColor="color-mix(in oklab, hsl(var(--primary)) 16%, transparent)"
 * >
 *   <div className="p-6">Custom gradient</div>
 * </MagicCard>
 * ```
 */
declare function MagicCard({ children, className, gradientSize, gradientColor, gradientOpacity, gradientFrom, gradientTo, }: MagicCardProps): react_jsx_runtime.JSX.Element;

/**
 * Surface elevation system — maps Geist `type` tokens to @theme shadow + bg.
 * Shadow and background values come entirely from the theme; never hand-crafted.
 *
 * | type        | shadow      | bg            | use case                          |
 * |-------------|-------------|---------------|-----------------------------------|
 * | base        | shadow-sm   | bg-card       | Resting cards (was `card`)        |
 * | small       | shadow-sm   | bg-card       | Smallest raise                    |
 * | medium      | shadow-md   | bg-card       | Medium raise                      |
 * | large       | shadow-lg   | bg-card       | Strong raise                      |
 * | tooltip     | shadow-md   | bg-popover    | Floating tooltip                  |
 * | menu        | shadow-md   | bg-popover    | Dropdowns / popovers              |
 * | modal       | shadow-xl   | bg-popover    | Dialogs / drawers                 |
 * | fullscreen  | shadow-none | bg-background | Full-screen overlays / takeovers  |
 *
 * `card` is kept as a deprecated alias of `base` for back-compat with existing
 * call sites; new code should use the Geist canonical names.
 */
declare const materialVariants: (props?: ({
    type?: "medium" | "large" | "small" | "menu" | "tooltip" | "base" | "modal" | "fullscreen" | "card" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type MaterialType = "base" | "small" | "medium" | "large" | "tooltip" | "menu" | "modal" | "fullscreen"
/** @deprecated Use `base` instead. */
 | "card";
interface MaterialProps extends React$1.HTMLAttributes<HTMLDivElement>, VariantProps<typeof materialVariants> {
    /**
     * Surface elevation level. Picks chrome (radius / fill / stroke / shadow)
     * based on where the element sits in the layered hierarchy:
     *   - `base` — resting cards
     *   - `small` / `medium` / `large` — raised content tiers
     *   - `tooltip` / `menu` — floating popovers
     *   - `modal` — dialogs / drawers
     *   - `fullscreen` — takeovers
     *
     * Don't stack two Materials on the same element. If a child needs more
     * elevation, lift it into its own Material with a higher type.
     *
     * @default "base"
     */
    type?: MaterialType;
}
declare const Material: {
    ({ type, className, children, ref, ...props }: MaterialProps & {
        ref?: React$1.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const MCP_DEFAULT_MAX_ARGS_SHOWN = 2;
declare const MCP_DEFAULT_MAX_ARG_VALUE_CHARS = 30;
declare const MCP_DEFAULT_MAX_OUTPUT_CHARS = 3000;
type McpToolArgValue = string | number | boolean | null | undefined;
type McpToolArgs = Record<string, McpToolArgValue>;
type McpToolState = "completed" | "pending" | "interrupted";
type McpToolProps = {
    /**
     * - `pending`     → shimmer "Preparing X"
     * - `completed`   → past-tense header + optional expandable output (default)
     * - `interrupted` → "X interrupted" muted line, no body
     * @default "completed"
     */
    state?: McpToolState;
    /**
     * Raw MCP tool name. snake_case / camelCase / Title Case all accepted —
     * normalized internally. Pass exactly what your MCP server reports.
     */
    name: string;
    /** Tool arguments. Sorted by priority, capped at `maxArgsShown`. */
    args?: McpToolArgs;
    /** Tool output. JSON auto-pretty-printed; plain text rendered as-is. */
    output?: string;
    /** Initial expand state (uncontrolled). @default false */
    defaultOpen?: boolean;
    /** Controlled expand state. Pair with `onExpandedChange`. */
    expanded?: boolean;
    onExpandedChange?: (next: boolean) => void;
    /** @default 2 */
    maxArgsShown?: number;
    /** @default 30 */
    maxArgValueChars?: number;
    /** @default 3000 */
    maxOutputChars?: number;
    className?: string;
};
declare function McpTool({ state, name, args, output, defaultOpen, expanded, onExpandedChange, maxArgsShown, maxArgValueChars, maxOutputChars, className, }: McpToolProps): ReactElement;

interface MeshGradientBgProps extends React$1.HTMLAttributes<HTMLDivElement>, Partial<Omit<MeshGradientProps, "style">> {
}
/**
 * MeshGradientBg - Brand-matched mesh gradient shader background
 *
 * Wraps @paper-design/shaders-react MeshGradient with Nebutra brand defaults.
 * Absolutely positioned, fills parent, z-index -10.
 *
 * @example
 * ```tsx
 * <div className="relative min-h-screen">
 *   <MeshGradientBg />
 *   <Content />
 * </div>
 * ```
 *
 * @example Custom colors and speed
 * ```tsx
 * <MeshGradientBg
 *   colors={["hsl(var(--primary))", "hsl(var(--primary))", "#000830"]}
 *   speed={0.5}
 *   distortion={0.4}
 * />
 * ```
 */
declare function MeshGradientBg({ className, colors, speed, ...props }: MeshGradientBgProps): react_jsx_runtime.JSX.Element;
declare namespace MeshGradientBg {
    var displayName: string;
}

/**
 * MessageContent Component Tokens — Layer 3
 *
 * Spacing and shape constants for AI markdown surfaces. Runtime color stays
 * semantic through Tailwind token utilities in the primitive.
 */
type MessageContentDensity = "compact" | "comfortable";

interface MessageContentProps {
    ref?: React$1.Ref<HTMLDivElement> | undefined;
    /** Markdown source. Can be a partial chunk during streaming. */
    children: string;
    /** Visual density. `compact` removes most prose margins. */
    density?: MessageContentDensity;
    /**
     * If true, applies inverted (light-on-dark) prose. Use inside dark message
     * bubbles where the surrounding bg is `bg-blue-9` etc.
     */
    inverted?: boolean;
    className?: string;
    style?: React$1.CSSProperties;
}
declare function fixNumberedListBreaks(markdown: string): string;
declare function normalizeCodeFenceLanguages(markdown: string): string;
declare function normalizeMessageMarkdown(markdown: string): string;
declare function MessageContent({ ref, children, density, inverted, className, style, }: MessageContentProps): react_jsx_runtime.JSX.Element;

interface MetricCardProps {
    /** Label for the metric */
    label: string;
    /** The metric value */
    value: number | string | never;
    /** Optional trend direction */
    trend?: "up" | "down" | "neutral";
    /** Optional trend value (e.g., "+12%") */
    trendValue?: string;
    /** Optional description text */
    description?: string;
    /** Size variant */
    size?: "sm" | "default" | "lg";
    /** Optional icon */
    icon?: React$1.ReactNode;
    /** Optional className */
    className?: string;
}
declare function MetricCard({ label, value, trend, trendValue, description, size, icon, className, }: MetricCardProps): react_jsx_runtime.JSX.Element;
interface MetricGridProps {
    children: React$1.ReactNode;
    columns?: 2 | 3 | 4;
    className?: string;
}
declare function MetricGrid({ children, columns, className }: MetricGridProps): react_jsx_runtime.JSX.Element;
declare function MetricCardBordered({ className, ...props }: MetricCardProps): react_jsx_runtime.JSX.Element;
interface StatItemProps {
    label: string;
    value: number | string | never;
    color?: "success" | "warning" | "error" | "info" | "neutral";
    className?: string;
}
declare function StatItem({ label, value, color, className }: StatItemProps): react_jsx_runtime.JSX.Element;

interface MiddleTruncateProps extends Omit<React$1.HTMLAttributes<HTMLSpanElement>, "children"> {
    /**
     * Full text value. The visible text may be shortened, but copy and
     * assistive technology keep this original string.
     */
    value: string;
    /** Minimum characters to preserve at the start when space allows. */
    minStartChars?: number;
    /** Minimum characters to preserve at the end when space allows. */
    minEndChars?: number;
    /** Separator rendered between the preserved head and tail. */
    ellipsis?: string;
}
declare const MiddleTruncate: {
    ({ value, minStartChars, minEndChars, ellipsis, className, onCopy, "aria-label": ariaLabel, ref: forwardedRef, ...props }: MiddleTruncateProps & {
        ref?: React$1.Ref<HTMLSpanElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface MultipleSelectorOption {
    value: string;
    label: string;
    disable?: boolean;
    /** Fixed option that can't be removed */
    fixed?: boolean;
    /** Group the options by providing key */
    [key: string]: string | boolean | undefined;
}
interface MultipleSelectorProps {
    /** Controlled selected values */
    value?: MultipleSelectorOption[];
    /** Default options to display */
    defaultOptions?: MultipleSelectorOption[];
    /** Manually controlled options */
    options?: MultipleSelectorOption[];
    /** Placeholder text */
    placeholder?: string;
    /** Loading indicator component */
    loadingIndicator?: React$1.ReactNode;
    /** Empty state indicator component */
    emptyIndicator?: React$1.ReactNode;
    /** Debounce delay for async search (ms) */
    delay?: number;
    /** Trigger search on focus */
    triggerSearchOnFocus?: boolean;
    /** Async search function */
    onSearch?: (value: string) => Promise<MultipleSelectorOption[]>;
    /** Sync search function (no loading indicator) */
    onSearchSync?: (value: string) => MultipleSelectorOption[];
    /** Callback when selection changes */
    onChange?: (options: MultipleSelectorOption[]) => void;
    /** Maximum number of selected options */
    maxSelected?: number;
    /** Callback when max selection is reached */
    onMaxSelected?: (maxLimit: number) => void;
    /** Hide placeholder when options are selected */
    hidePlaceholderWhenSelected?: boolean;
    /** Disable the selector */
    disabled?: boolean;
    /** Group options by this key */
    groupBy?: string;
    /** Additional className for container */
    className?: string;
    /** Additional className for badges */
    badgeClassName?: string;
    /** Select first item by default (cmdk behavior) */
    selectFirstItem?: boolean;
    /** Allow creating new options */
    creatable?: boolean;
    /** Props for Command component */
    commandProps?: React$1.ComponentPropsWithoutRef<typeof Command>;
    /** Props for input element */
    inputProps?: Omit<React$1.ComponentPropsWithoutRef<typeof Command$1.Input>, "value" | "placeholder" | "disabled">;
    /** Hide clear all button */
    hideClearAllButton?: boolean;
}
interface MultipleSelectorRef {
    selectedValue: MultipleSelectorOption[];
    input: HTMLInputElement;
    focus: () => void;
    reset: () => void;
}
/**
 * Debounced value hook.
 *
 * @deprecated Re-export of the canonical {@link useDebouncedValue} from
 * `@nebutra/ui/hooks` (backed by `usehooks-ts`). Kept for backwards-compat of
 * the `@nebutra/ui/primitives` barrel; import `useDebouncedValue` directly.
 */
declare function useDebounce<T>(value: T, delay?: number): T;
/**
 * MultipleSelector - A multi-select component with search and create functionality
 *
 * @description
 * Feature-rich multi-select with support for async search, grouping,
 * creatable options, and keyboard navigation.
 *
 * @example Basic usage
 * ```tsx
 * <MultipleSelector
 *   defaultOptions={[
 *     { value: "react", label: "React" },
 *     { value: "vue", label: "Vue" },
 *   ]}
 *   placeholder="Select frameworks..."
 *   onChange={(options) => console.log(options)}
 * />
 * ```
 *
 * @example With async search
 * ```tsx
 * <MultipleSelector
 *   onSearch={async (query) => {
 *     const results = await fetchOptions(query);
 *     return results;
 *   }}
 *   placeholder="Search..."
 *   loadingIndicator={<Spinner />}
 * />
 * ```
 *
 * @example Creatable
 * ```tsx
 * <MultipleSelector
 *   creatable
 *   defaultOptions={options}
 *   placeholder="Select or create..."
 * />
 * ```
 *
 * @example With max selection
 * ```tsx
 * <MultipleSelector
 *   maxSelected={3}
 *   onMaxSelected={(max) => toast(`Max ${max} items`)}
 *   defaultOptions={options}
 * />
 * ```
 */
declare const MultipleSelector: {
    ({ ref, value, onChange, placeholder, defaultOptions: arrayDefaultOptions, options: arrayOptions, delay, onSearch, onSearchSync, loadingIndicator, emptyIndicator, maxSelected, onMaxSelected, hidePlaceholderWhenSelected, disabled, groupBy, className, badgeClassName, selectFirstItem, creatable, triggerSearchOnFocus, commandProps, inputProps, hideClearAllButton, }: MultipleSelectorProps & {
        ref?: React$1.Ref<MultipleSelectorRef> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface NeuroNoiseBgProps extends React$1.HTMLAttributes<HTMLDivElement>, Partial<Omit<NeuroNoiseProps, "style">> {
}
/**
 * NeuroNoiseBg - Brand-matched neuro noise shader background
 *
 * Wraps @paper-design/shaders-react NeuroNoise with Nebutra brand defaults.
 * Absolutely positioned, fills parent, z-index -10.
 *
 * @example
 * ```tsx
 * <div className="relative min-h-screen">
 *   <NeuroNoiseBg />
 *   <Content />
 * </div>
 * ```
 *
 * @example Custom colors
 * ```tsx
 * <NeuroNoiseBg
 *   colorFront="hsl(var(--primary))"
 *   colorMid="hsl(var(--primary))"
 *   colorBack="#000830"
 *   speed={0.4}
 * />
 * ```
 */
declare function NeuroNoiseBg({ className, colorFront, colorMid, colorBack, speed, ...props }: NeuroNoiseBgProps): react_jsx_runtime.JSX.Element;
declare namespace NeuroNoiseBg {
    var displayName: string;
}

interface NoisePatternCardProps {
    /** Card content */
    children: React$1.ReactNode;
    /** Additional className for the card container */
    className?: string;
    /** Additional className for the noise pattern layer */
    patternClassName?: string;
    /** Additional className for the overlay layer */
    overlayClassName?: string;
}
/**
 * NoisePatternCard - Card with animated noise texture background
 *
 * Creates a sophisticated noise pattern using SVG filters.
 * The organic texture adds depth while maintaining a modern feel.
 *
 * Note: Requires Tailwind config extension for `bg-noise-pattern`.
 *
 * @example
 * ```tsx
 * <NoisePatternCard>
 *   <NoisePatternCardBody>
 *     <h3>Title</h3>
 *     <p>Description</p>
 *   </NoisePatternCardBody>
 * </NoisePatternCard>
 * ```
 */
declare function NoisePatternCard({ children, className, patternClassName, overlayClassName, }: NoisePatternCardProps): react_jsx_runtime.JSX.Element;
type NoisePatternCardBodyProps = React$1.HTMLAttributes<HTMLDivElement>;
/**
 * NoisePatternCardBody - Content container for NoisePatternCard
 */
declare function NoisePatternCardBody({ className, ...props }: NoisePatternCardBodyProps): react_jsx_runtime.JSX.Element;

interface NotificationMessage {
    /** Message title */
    title: string;
    /** Time ago text */
    time: string;
    /** Message content */
    content: string;
    /** Gradient color classes (e.g. "from-pink-400 to-indigo-500") */
    gradientColor?: string;
}
interface NotificationMessageListProps extends React$1.HTMLAttributes<HTMLDivElement> {
    /** List of messages */
    messages: NotificationMessage[];
    /** Max height of the container */
    maxHeight?: string;
    /** Animation delay between items (ms) */
    animationDelay?: number;
}
/**
 * NotificationMessageList - Animated notification message list
 *
 * Displays a list of notification messages with staggered scale-up animation.
 * Includes a fade overlay at the bottom for overflow effect.
 */
declare function NotificationMessageList({ messages, maxHeight, animationDelay, className, ...props }: NotificationMessageListProps): react_jsx_runtime.JSX.Element;
declare namespace NotificationMessageList {
    var displayName: string;
}

interface PaginationControlProps {
    currentPage: number;
    totalPages: number;
    pageSize: number;
    totalItems: number;
    onPageChange: (page: number) => void;
    onPageSizeChange: (size: number) => void;
    pageSizeOptions?: number[];
    showPageSizeSelector?: boolean;
}
declare function PaginationControl({ currentPage, totalPages, pageSize, totalItems, onPageChange, onPageSizeChange, pageSizeOptions, showPageSizeSelector, }: PaginationControlProps): react_jsx_runtime.JSX.Element;

/**
 * PricingCard - A composable pricing card component for subscription/plan displays
 *
 * @description
 * Multi-part component for building pricing cards with flexible layouts.
 * Supports glass effect headers, badges, price display with strikethrough,
 * and feature lists with separators.
 *
 * @example
 * ```tsx
 * <PricingCard.Card>
 *   <PricingCard.Header>
 *     <PricingCard.Plan>
 *       <PricingCard.PlanName><Icon />Pro</PricingCard.PlanName>
 *       <PricingCard.Badge>Popular</PricingCard.Badge>
 *     </PricingCard.Plan>
 *     <PricingCard.Price>
 *       <PricingCard.MainPrice>$29</PricingCard.MainPrice>
 *       <PricingCard.Period>/month</PricingCard.Period>
 *     </PricingCard.Price>
 *   </PricingCard.Header>
 *   <PricingCard.Body>
 *     <PricingCard.List>
 *       <PricingCard.ListItem>Feature 1</PricingCard.ListItem>
 *     </PricingCard.List>
 *   </PricingCard.Body>
 * </PricingCard.Card>
 * ```
 */
declare function PricingCardRoot({ className, ...props }: React__default.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function PricingCardHeader({ className, children, glassEffect, ...props }: React__default.ComponentProps<"div"> & {
    /** Enable glass gradient overlay effect */
    glassEffect?: boolean;
}): react_jsx_runtime.JSX.Element;
declare function PricingCardPlan({ className, ...props }: React__default.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function PricingCardDescription({ className, ...props }: React__default.ComponentProps<"p">): react_jsx_runtime.JSX.Element;
declare function PricingCardPlanName({ className, ...props }: React__default.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function PricingCardBadge({ className, ...props }: React__default.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function PricingCardPrice({ className, ...props }: React__default.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function PricingCardMainPrice({ className, ...props }: React__default.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function PricingCardPeriod({ className, ...props }: React__default.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function PricingCardOriginalPrice({ className, ...props }: React__default.ComponentProps<"span">): react_jsx_runtime.JSX.Element;
declare function PricingCardBody({ className, ...props }: React__default.ComponentProps<"div">): react_jsx_runtime.JSX.Element;
declare function PricingCardList({ className, ...props }: React__default.ComponentProps<"ul">): react_jsx_runtime.JSX.Element;
declare function PricingCardListItem({ className, ...props }: React__default.ComponentProps<"li">): react_jsx_runtime.JSX.Element;
declare function PricingCardSeparator({ children, className, ...props }: React__default.ComponentProps<"div"> & {
    children?: string;
    className?: string;
}): react_jsx_runtime.JSX.Element;
declare const PricingCard: {
    Card: typeof PricingCardRoot;
    Header: typeof PricingCardHeader;
    Description: typeof PricingCardDescription;
    Plan: typeof PricingCardPlan;
    PlanName: typeof PricingCardPlanName;
    Badge: typeof PricingCardBadge;
    Price: typeof PricingCardPrice;
    MainPrice: typeof PricingCardMainPrice;
    Period: typeof PricingCardPeriod;
    OriginalPrice: typeof PricingCardOriginalPrice;
    Body: typeof PricingCardBody;
    List: typeof PricingCardList;
    ListItem: typeof PricingCardListItem;
    Separator: typeof PricingCardSeparator;
};

/**
 * Props for ProgressiveBlur component
 *
 * @description
 * Creates a multi-layered progressive blur effect using stacked backdrop-filter
 * layers with gradient masks. Useful for indicating scrollable content areas.
 *
 * **UX Scenarios:**
 * - Scrollable list fade-outs
 * - Modal/dialog content overflow indicators
 * - Card content truncation with blur
 * - Navigation menu scroll indicators
 * - Image gallery edge effects
 *
 * **Technical Notes:**
 * - Uses multiple stacked divs with increasing blur values
 * - Gradient masks create smooth transition between blur levels
 * - Supports webkit prefix for Safari compatibility
 */
interface ProgressiveBlurProps {
    /** Additional CSS classes */
    className?: string;
    /**
     * Height of the blur effect
     * @default "30%"
     */
    height?: string;
    /**
     * Position of the blur effect
     * @default "bottom"
     */
    position?: "top" | "bottom" | "both";
    /**
     * Array of blur values (in px) for progressive effect
     * @default [0.5, 1, 2, 4, 8, 16, 32, 64]
     */
    blurLevels?: number[];
    /** Optional content within the blur container */
    children?: React__default.ReactNode;
}
/**
 * ProgressiveBlur - Multi-layered progressive blur effect
 *
 * @example
 * ```tsx
 * // Basic usage at bottom of scroll container
 * <div className="relative h-[400px] overflow-auto">
 *   <div className="space-y-4 p-4">
 *     {items.map(item => <Card key={item.id} />)}
 *   </div>
 *   <ProgressiveBlur position="bottom" height="50%" />
 * </div>
 *
 * // Top and bottom blur
 * <div className="relative h-[300px] overflow-auto">
 *   <ProgressiveBlur position="both" />
 *   <Content />
 * </div>
 *
 * // Custom blur levels (less intense)
 * <ProgressiveBlur
 *   blurLevels={[0.5, 1, 2, 4, 8]}
 *   height="20%"
 * />
 * ```
 */
declare function ProgressiveBlur({ className, height, position, blurLevels, children, }: ProgressiveBlurProps): react_jsx_runtime.JSX.Element;

type QuestionOption = {
    id: string;
    label: string;
    description?: string;
};
type QuestionKind = "single" | "multi" | "text";
type QuestionConfig = {
    kind: QuestionKind;
    title: string;
    description?: string;
    options?: QuestionOption[];
    allowCustom?: boolean;
    customLabel?: string;
    customPlaceholder?: string;
    minSelections?: number;
    maxSelections?: number;
    placeholder?: string;
};
type QuestionAnswer = {
    kind: "single";
    selectedIds: string[];
    text?: string;
} | {
    kind: "multi";
    selectedIds: string[];
    text?: string;
} | {
    kind: "text";
    text: string;
} | {
    kind: "skip";
};
type QuestionPromptProps = {
    questions: QuestionConfig[];
    questionIndex?: number;
    totalQuestions?: number;
    onPreviousQuestion?: (() => void) | undefined;
    onNextQuestion?: (() => void) | undefined;
    initialAnswer?: QuestionAnswer;
    submitLabel?: string;
    nextLabel?: string;
    skipLabel?: string;
    previousLabel?: string;
    allowSkip?: boolean;
    onSubmit: (answer: QuestionAnswer) => void;
    onSkip?: () => void;
    className?: string;
};
declare function QuestionPrompt({ questions, questionIndex, totalQuestions, initialAnswer, ...props }: QuestionPromptProps): ReactElement | null;
type QuestionToolProps = {
    questions: QuestionConfig[];
    questionIndex?: number;
    totalQuestions?: number;
    onPreviousQuestion?: () => void;
    onNextQuestion?: () => void;
    submitLabel?: string;
    nextLabel?: string;
    skipLabel?: string;
    previousLabel?: string;
    allowSkip?: boolean;
    onSubmitAnswer?: (answer: QuestionAnswer, questionIndex: number) => void;
    /** When provided, renders the summary state with this answer. */
    output?: {
        answer?: QuestionAnswer | undefined;
    } | undefined;
    /** Stable id used to reset internal state when the question set changes. */
    toolCallId?: string;
    /** Header label shown in the chrome bar. @default "Question" */
    headerLabel?: string;
    className?: string;
};
declare function QuestionTool({ toolCallId, ...props }: QuestionToolProps): ReactElement | null;

declare const RadioGroupCard: {
    ({ className, ref, ...props }: React$1.ComponentPropsWithoutRef<typeof RadioGroup> & {
        ref?: React$1.Ref<React$1.ComponentRef<typeof RadioGroup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const RadioGroupCardItem: {
    ({ className, children, ref, ...props }: React$1.ComponentPropsWithoutRef<typeof Radio.Root> & {
        ref?: React$1.Ref<React$1.ComponentRef<typeof Radio.Root>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const RadioGroupStacked: {
    ({ className, ref, ...props }: React$1.ComponentPropsWithoutRef<typeof RadioGroup> & {
        ref?: React$1.Ref<React$1.ComponentRef<typeof RadioGroup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const RadioGroupStackedItem: {
    ({ className, children, ref, ...props }: React$1.ComponentPropsWithoutRef<typeof Radio.Root> & {
        ref?: React$1.Ref<React$1.ComponentRef<typeof Radio.Root>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface ReactionChipProps {
    /** Callback when an emoji is selected */
    onSelect: (emoji: string) => void;
    /** Available emoji options */
    emojis?: string[];
    /** Currently selected emoji */
    selected?: string | undefined;
    /** Additional CSS classes */
    className?: string;
}
interface ReactionBadgeProps {
    /** Emoji to display */
    emoji: string;
    /** Reaction count */
    count: number;
    /** Whether to show bump animation */
    bump?: boolean;
    /** Additional CSS classes */
    className?: string;
}
interface MessageWithReactionsProps {
    /** Message text content. Ignored when `children` are supplied. */
    text?: string | undefined;
    /** Available emoji options for reactions */
    reactionOptions?: string[];
    /** Additional CSS classes */
    className?: string;
    /** Children to render instead of text */
    children?: React$1.ReactNode;
}
/**
 * ReactionChip - Floating emoji reaction picker
 *
 * A compact chip with emoji buttons for adding reactions.
 * Typically shown on hover over messages.
 *
 * @example Basic usage
 * ```tsx
 * <ReactionChip
 *   onSelect={(emoji) => console.log(emoji)}
 *   selected="👍"
 * />
 * ```
 *
 * @example Custom emojis
 * ```tsx
 * <ReactionChip
 *   emojis={["🔥", "💯", "🙌", "✨"]}
 *   onSelect={handleReaction}
 * />
 * ```
 */
declare function ReactionChip({ onSelect, className, emojis, selected, }: ReactionChipProps): react_jsx_runtime.JSX.Element;
/**
 * ReactionBadge - Display a single reaction with count
 *
 * @example
 * ```tsx
 * <ReactionBadge emoji="👍" count={5} />
 * ```
 */
declare function ReactionBadge({ emoji, count, bump, className }: ReactionBadgeProps): react_jsx_runtime.JSX.Element;
/**
 * MessageWithReactions - Message card with hover reaction picker
 *
 * A pre-composed message component that shows a reaction chip
 * when hovered, allowing users to react with emojis.
 *
 * @example Basic usage
 * ```tsx
 * <MessageWithReactions text="Great work on this feature!" />
 * ```
 *
 * @example With custom emojis
 * ```tsx
 * <MessageWithReactions
 *   text="Check out this new design"
 *   reactionOptions={["🔥", "💯", "🙌", "✨", "👀"]}
 * />
 * ```
 *
 * @example With children
 * ```tsx
 * <MessageWithReactions reactionOptions={["👍", "❤️"]}>
 *   <p>Custom content here</p>
 *   <img src="/screenshot.png" alt="Screenshot" />
 * </MessageWithReactions>
 * ```
 */
declare function MessageWithReactions({ text, reactionOptions, className, children, }: MessageWithReactionsProps): react_jsx_runtime.JSX.Element;

type RelativeTimeCardProps = {
    /** Accepts Unix ms, Date, or any ISO/RFC string parseable by the Date constructor. */
    date: number | Date | string;
    /** Side the popover appears on. @default "top" */
    side?: ContextCardSide;
    /** Override the trigger label. Use only for non-time states (e.g. "Pending"). */
    children?: ReactNode;
    className?: string;
};
/** Geist short relative-time formatter. Always past or present, never future. */
declare function formatShortRelative(target: Date, now: Date): string;
declare const RelativeTimeCard: ({ ref, date, side, children, className, }: RelativeTimeCardProps & {
    ref?: Ref<HTMLTimeElement> | undefined;
}) => react_jsx_runtime.JSX.Element;

/**
 * Responsive Primitives
 *
 * Breakpoints and responsive utilities.
 */
/**
 * Breakpoint values (Primer-compatible)
 */
declare const breakpoints: {
    readonly xs: 0;
    readonly sm: 544;
    readonly md: 768;
    readonly lg: 1012;
    readonly xl: 1280;
};
type Breakpoint = keyof typeof breakpoints;
type BreakpointValue = (typeof breakpoints)[Breakpoint];
/**
 * Media query strings for each breakpoint
 */
declare const mediaQueries: {
    readonly xs: "@media (min-width: 0px)";
    readonly sm: "@media (min-width: 544px)";
    readonly md: "@media (min-width: 768px)";
    readonly lg: "@media (min-width: 1012px)";
    readonly xl: "@media (min-width: 1280px)";
};
/**
 * Check if current viewport is at or above breakpoint
 */
declare function isBreakpoint(bp: Breakpoint): boolean;
/**
 * Get current breakpoint
 */
declare function getCurrentBreakpoint(): Breakpoint;
/**
 * Responsive value helper
 * Creates array for Primer's responsive prop format
 */
declare function responsive<T>(values: {
    xs?: T;
    sm?: T;
    md?: T;
    lg?: T;
    xl?: T;
}): T[];
/**
 * Common responsive patterns
 */
declare const responsivePatterns: {
    /** Hide on mobile */
    readonly hideOnMobile: {
        readonly display: readonly ["none", "none", "block"];
    };
    /** Show only on mobile */
    readonly showOnMobile: {
        readonly display: readonly ["block", "block", "none"];
    };
    /** Stack on mobile, row on desktop */
    readonly stackToRow: {
        readonly flexDirection: readonly ["column", "column", "row"];
    };
    /** Full width on mobile, auto on desktop */
    readonly fullToAuto: {
        readonly width: readonly ["100%", "100%", "auto"];
    };
};

type SafariMode = "default" | "simple";
interface SafariProps extends HTMLAttributes<HTMLDivElement> {
    /** The URL to display in the Safari address bar */
    url?: string;
    /** The source URL of the image to display in the Safari window */
    imageSrc?: string;
    /** The source URL of the video to display in the Safari window */
    videoSrc?: string;
    /** The display mode of the Safari window */
    mode?: SafariMode;
}
/**
 * Safari - Browser mockup component
 *
 * @description
 * A Safari browser mockup to showcase websites, images, or videos.
 * Perfect for landing pages, product showcases, and documentation.
 *
 * @example Basic with URL
 * ```tsx
 * <Safari url="https://example.com" />
 * ```
 *
 * @example With image
 * ```tsx
 * <Safari url="https://example.com" imageSrc="/screenshot.png" />
 * ```
 *
 * @example With video
 * ```tsx
 * <Safari url="https://example.com" videoSrc="/demo.webm" />
 * ```
 *
 * @example Simple mode (no toolbar icons)
 * ```tsx
 * <Safari url="https://example.com" mode="simple" />
 * ```
 */
declare function Safari({ imageSrc, videoSrc, url, mode, className, style, ...props }: SafariProps): react_jsx_runtime.JSX.Element;

/**
 * Props for ScrollVelocityContainer
 *
 * @description
 * Container that provides shared scroll velocity context for child rows.
 * Wrap multiple ScrollVelocityRow components to sync their velocity.
 */
interface ScrollVelocityContainerProps extends React__default.HTMLAttributes<HTMLDivElement> {
    children: React__default.ReactNode;
}
/**
 * Props for ScrollVelocityRow
 *
 * @description
 * A row of content that scrolls horizontally with speed based on scroll velocity.
 * Content is duplicated to create seamless infinite scroll effect.
 *
 * **UX Scenarios:**
 * - Marquee text with scroll-reactive speed
 * - Logo/partner carousels
 * - Testimonial tickers
 * - Feature/keyword showcases
 * - Image galleries with velocity effect
 *
 * **Performance:**
 * - Pauses when offscreen (IntersectionObserver)
 * - Pauses when tab hidden (visibilitychange)
 * - Respects prefers-reduced-motion
 */
interface ScrollVelocityRowProps extends React__default.HTMLAttributes<HTMLDivElement> {
    children: React__default.ReactNode;
    /**
     * Base scroll velocity (percentage of content width per second)
     * @default 5
     */
    baseVelocity?: number;
    /**
     * Scroll direction (1 = left-to-right, -1 = right-to-left)
     * @default 1
     */
    direction?: 1 | -1;
}
/**
 * Wraps a value within a range (for seamless looping)
 */
declare const wrap: (min: number, max: number, v: number) => number;
/**
 * ScrollVelocityContainer - Provides shared velocity context
 *
 * @example
 * ```tsx
 * <ScrollVelocityContainer className="text-4xl font-bold">
 *   <ScrollVelocityRow baseVelocity={20} direction={1}>
 *     Forward Scroll
 *   </ScrollVelocityRow>
 *   <ScrollVelocityRow baseVelocity={20} direction={-1}>
 *     Reverse Scroll
 *   </ScrollVelocityRow>
 * </ScrollVelocityContainer>
 * ```
 */
declare function ScrollVelocityContainer({ children, className, ...props }: ScrollVelocityContainerProps): react_jsx_runtime.JSX.Element;
/**
 * ScrollVelocityRow - Scroll-speed driven horizontal content
 *
 * Can be used standalone or within ScrollVelocityContainer for shared velocity.
 */
declare function ScrollVelocityRow(props: ScrollVelocityRowProps): react_jsx_runtime.JSX.Element;

declare const SEARCH_DEFAULT_MAX_HEIGHT_PX = 200;
type SearchResult = {
    /** Stable id. Falls back to url or title-based key. */
    id?: string;
    title: string;
    /** Originating domain or system (e.g. "google.com/flights", "Notion"). */
    source: string;
    /** Optional ISO date or display string. */
    date?: string;
    /** If provided, row renders as a real external link. */
    url?: string | undefined;
};
type SearchToolState = "pending" | "completed";
type SearchToolProps = {
    /** @default "completed" */
    state?: SearchToolState;
    /** Query text rendered in the expanded panel's strip. */
    query: string;
    /** Result rows. Empty or omitted → panel is not expandable. */
    results?: readonly SearchResult[];
    /** @default false */
    defaultOpen?: boolean;
    /** Controlled expand. Pair with `onExpandedChange`. */
    expanded?: boolean;
    onExpandedChange?: (next: boolean) => void;
    /** Scroll-container cap. @default 200 */
    maxResultsHeightPx?: number;
    className?: string;
};
declare function SearchTool({ state, query, results, defaultOpen, expanded, onExpandedChange, maxResultsHeightPx, className, }: SearchToolProps): ReactElement;

interface ShineBorderProps extends Omit<React$1.HTMLAttributes<HTMLDivElement>, "color"> {
    /** Width of the border in pixels */
    borderWidth?: number;
    /** Duration of the animation in seconds */
    duration?: number;
    /** Color of the border, can be a single color or an array of colors */
    shineColor?: string | string[];
    /** Border radius in pixels (container mode) */
    borderRadius?: number;
    /** Deprecated: use shineColor instead */
    color?: string | string[];
    /** Content to render inside (container mode). If omitted, acts as overlay. */
    children?: React$1.ReactNode;
}
/**
 * ShineBorder - animated background border effect
 *
 * Two modes:
 * - Overlay (no children): absolute, stretches to parent with rounded inherit
 * - Container (with children): wraps content with rounded container
 */
declare function ShineBorder({ borderWidth, duration, shineColor, color, borderRadius, className, style, children, ...props }: ShineBorderProps): react_jsx_runtime.JSX.Element;

declare const SliderNumberFlow: {
    ({ className, value, ref, ...props }: React$1.ComponentPropsWithoutRef<typeof Slider.Root> & {
        ref?: React$1.Ref<React$1.ElementRef<typeof Slider.Root>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * Spacing Primitives
 *
 * Consistent spacing scale based on Primer's 4px base unit.
 */
/**
 * Spacing scale (Primer-compatible)
 * Each step is 4px * n
 */
declare const spacing: {
    readonly 0: 0;
    readonly 1: 4;
    readonly 2: 8;
    readonly 3: 16;
    readonly 4: 24;
    readonly 5: 32;
    readonly 6: 40;
    readonly 7: 48;
    readonly 8: 64;
    readonly 9: 80;
    readonly 10: 96;
    readonly 11: 112;
    readonly 12: 128;
};
type SpacingKey = keyof typeof spacing;
type SpacingValue = (typeof spacing)[SpacingKey];
/**
 * Get spacing value in pixels
 */
declare function getSpacing(key: SpacingKey): number;
/**
 * Convert spacing key to CSS value
 */
declare function spacingToCss(key: SpacingKey): string;
/**
 * Common spacing patterns
 */
declare const spacingPatterns: {
    /** Page padding */
    readonly pagePadding: {
        readonly px: readonly [3, 4, 5];
        readonly py: readonly [4, 5];
    };
    /** Section spacing */
    readonly sectionGap: {
        readonly gap: readonly [4, 5, 6];
    };
    /** Card padding */
    readonly cardPadding: {
        readonly p: readonly [3, 4];
    };
    /** Compact density */
    readonly compact: {
        readonly p: 2;
        readonly gap: 2;
    };
    /** Normal density */
    readonly normal: {
        readonly p: 3;
        readonly gap: 3;
    };
    /** Spacious density */
    readonly spacious: {
        readonly p: 4;
        readonly gap: 4;
    };
};
/**
 * Density modes for high-information UIs
 */
type DensityMode = "compact" | "normal" | "spacious";
declare function getDensitySpacing(mode: DensityMode): {
    readonly p: 2;
    readonly gap: 2;
} | {
    readonly p: 3;
    readonly gap: 3;
} | {
    readonly p: 4;
    readonly gap: 4;
};

/**
 * Props for StarsCanvas component
 *
 * @description
 * An animated canvas-based starfield background with orbiting, twinkling stars.
 * Uses HTML5 Canvas for performant rendering of many particles.
 *
 * **UX Scenarios:**
 * - Hero section backgrounds for tech/space themed sites
 * - Loading screens with ambient animation
 * - Dashboard backgrounds for data/analytics platforms
 * - Landing page atmospheric effects
 * - Night mode decorative backgrounds
 *
 * **Performance Notes:**
 * - Uses requestAnimationFrame for smooth 60fps animation
 * - Cached gradient texture for efficient star rendering
 * - Supports pause/resume for resource management
 * - Auto-resizes with window
 */
interface StarsCanvasProps {
    /**
     * Whether background should be transparent
     * @default false
     */
    transparent?: boolean;
    /**
     * Total number of stars to render
     * @default 1200
     */
    maxStars?: number;
    /**
     * Color hue for stars (0-360)
     * @default 217 (blue)
     */
    hue?: number;
    /**
     * Overall star brightness multiplier (0-1)
     * @default 1
     */
    brightness?: number;
    /**
     * Global animation speed multiplier
     * @default 1
     */
    speedMultiplier?: number;
    /**
     * Twinkle frequency - lower = more twinkling
     * @default 20
     */
    twinkleIntensity?: number;
    /**
     * Whether animation is paused
     * @default false
     */
    paused?: boolean;
    /** Additional CSS classes */
    className?: string;
    /**
     * Canvas positioning style
     * @default "fixed"
     */
    position?: "fixed" | "absolute" | "relative";
    /**
     * Z-index for layering
     * @default -1
     */
    zIndex?: number;
}
/**
 * StarsCanvas - Animated starfield background
 *
 * @example
 * ```tsx
 * // Basic usage as page background
 * <StarsCanvas />
 *
 * // Customized starfield
 * <StarsCanvas
 *   maxStars={800}
 *   hue={280}
 *   brightness={0.8}
 *   speedMultiplier={0.5}
 *   transparent
 * />
 *
 * // With pause control
 * const [paused, setPaused] = useState(false);
 * <StarsCanvas paused={paused} />
 * ```
 */
declare function StarsCanvas({ transparent, maxStars, hue, brightness, speedMultiplier, twinkleIntensity, paused, className, position, zIndex, }: StarsCanvasProps): react_jsx_runtime.JSX.Element;

declare const statusBadgeVariants: (props?: ({
    status?: "default" | "error" | "info" | "success" | "warning" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface StatusBadgeProps extends React$1.HTMLAttributes<HTMLSpanElement>, VariantProps<typeof statusBadgeVariants> {
    /** Icon displayed before left label */
    leftIcon?: Icon;
    /** Icon displayed before right label */
    rightIcon?: Icon;
    /** Primary label text */
    leftLabel: string;
    /** Secondary label text */
    rightLabel: string;
}
/**
 * StatusBadge - Two-part status indicator badge
 *
 * @description
 * A badge component that displays two labels separated by a divider, * with optional icons and status-based coloring.
 *
 * @example Basic usage
 * ```tsx
 * import { ShieldCheck, CrossCircle as XCircle } from "@nebutra/icons";
 *
 * <StatusBadge
 *   leftIcon={ShieldCheck}
 *   rightIcon={XCircle}
 *   leftLabel="Protection"
 *   rightLabel="SSO disabled"
 *   status="success"
 * />
 * ```
 *
 * @example Multiple badges
 * ```tsx
 * <div className="flex gap-2">
 *   <StatusBadge
 *     leftIcon={CheckCircle2}
 *     leftLabel="Live"
 *     rightLabel="v2.1.0"
 *     status="success"
 *   />
 *   <StatusBadge
 *     leftIcon={AlertCircle}
 *     leftLabel="Degraded"
 *     rightLabel="3 incidents"
 *     status="warning"
 *   />
 * </div>
 * ```
 */
declare function StatusBadge({ className, status, leftIcon: LeftIcon, rightIcon: RightIcon, leftLabel, rightLabel, ...props }: StatusBadgeProps): react_jsx_runtime.JSX.Element;

type StepStatus = "pending" | "current" | "completed" | "error";
interface Step {
    id: string;
    title: string;
    description?: string;
    optional?: boolean;
}
interface StepperContextValue {
    steps: Step[];
    currentStep: number;
    goToStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
    getStepStatus: (index: number) => StepStatus;
}
declare function useStepperContext(): StepperContextValue;
interface StepperProviderProps {
    steps: Step[];
    initialStep?: number;
    children: React.ReactNode;
    onStepChange?: (step: number) => void;
}
declare function StepperProvider({ steps, initialStep, children, onStepChange, }: StepperProviderProps): react_jsx_runtime.JSX.Element;
interface StepperProps {
    /** orientation */
    orientation?: "horizontal" | "vertical";
    /** 大小 */
    size?: "sm" | "md" | "lg";
    /** 是否可点击切换 */
    clickable?: boolean;
    /** 是否显示Connector */
    showConnector?: boolean;
    /** Custom className */
    className?: string;
}
/**
 * 步骤指示器组件 (Stripe 风格)
 *
 * 功能：
 * - 水平/垂直布局
 * - 多种尺寸
 * - 可点击切换
 * - 完成状态动画
 */
declare function Stepper({ orientation, size, clickable, showConnector, className, }: StepperProps): react_jsx_runtime.JSX.Element;
interface StepperContentProps {
    /** 步骤索引 */
    step: number;
    /** 子内容 */
    children: React.ReactNode;
    /** Custom className */
    className?: string;
}
/**
 * Step content container
 */
declare function StepperContent({ step, children, className }: StepperContentProps): react_jsx_runtime.JSX.Element | null;
interface StepperNavigationProps {
    /** 上一步按钮文本 */
    prevLabel?: string;
    /** 下一步按钮文本 */
    nextLabel?: string;
    /** 完成按钮文本 */
    finishLabel?: string;
    /** 完成回调 */
    onFinish?: () => void;
    /** 是否正在加载 */
    loading?: boolean;
    /** 是否禁用下一步 */
    disableNext?: boolean;
    /** Custom className */
    className?: string;
}
/**
 * 步骤导航按钮
 */
declare function StepperNavigation({ prevLabel, nextLabel, finishLabel, onFinish, loading, disableNext, className, }: StepperNavigationProps): react_jsx_runtime.JSX.Element;
interface UseStepperOptions {
    steps: Step[];
    initialStep?: number;
    onComplete?: () => void;
}
/**
 * Step management hook
 */
declare function useStepper({ steps, initialStep, onComplete }: UseStepperOptions): {
    steps: Step[];
    currentStep: number;
    currentStepData: Step | undefined;
    goToStep: (step: number) => void;
    nextStep: () => void;
    prevStep: () => void;
    reset: () => void;
    isFirstStep: boolean;
    isLastStep: boolean;
    progress: number;
};
interface ProgressStepperProps {
    /** 当前步骤 */
    currentStep: number;
    /** 总步骤数 */
    totalSteps: number;
    /** 步骤Labels */
    labels?: string[];
    /** Custom className */
    className?: string;
}
/**
 * 进度条风格步骤指示器
 */
declare function ProgressStepper({ currentStep, totalSteps, labels, className, }: ProgressStepperProps): react_jsx_runtime.JSX.Element;

type SubagentToolState = "completed" | "pending" | "interrupted";
type SubagentToolProps = {
    /** @default "completed" */
    state?: SubagentToolState;
    /**
     * Detail text — typically the currently-running nested tool name while
     * pending, or the subagent's task description once completed.
     */
    description?: string;
    /**
     * Trailing elapsed-time label, already formatted (e.g. "6s", "1m 24s").
     * Suppressed in interrupted state.
     */
    elapsedTime?: string;
    className?: string;
};
declare const SubagentTool: React$1.NamedExoticComponent<SubagentToolProps>;

type MotionProps = React.ComponentProps<typeof motion.div>;
interface AnimatedSpanProps extends MotionProps {
    /** Content to be faded in */
    children: React.ReactNode;
    /** Delay in ms before animation starts (when sequence is false) */
    delay?: number;
    /** Custom CSS class */
    className?: string;
    /** Wait for viewport visibility before animating when unsequenced */
    startOnView?: boolean;
}
interface TypingAnimationProps extends MotionProps {
    /** Text to be typed (must be string) */
    children: string;
    /** Custom CSS class */
    className?: string;
    /** Milliseconds per character */
    duration?: number;
    /** Delay in ms before typing starts (when sequence is false) */
    delay?: number;
    /** The component type to render */
    as?: React.ElementType;
    /** Wait for viewport visibility before typing when unsequenced */
    startOnView?: boolean;
}
interface TerminalProps {
    /** Terminal content: list of TypingAnimation/AnimatedSpan */
    children: React.ReactNode;
    /** Custom CSS class */
    className?: string;
    /** Enable auto sequencing so each line starts after previous */
    sequence?: boolean;
    /** Start sequencing when terminal enters viewport */
    startOnView?: boolean;
}
/**
 * AnimatedSpan - Fade-in animated content for Terminal
 *
 * @example
 * ```tsx
 * <AnimatedSpan>✔ Task completed successfully.</AnimatedSpan>
 * ```
 */
declare function AnimatedSpan({ children, delay, className, startOnView, ...props }: AnimatedSpanProps): react_jsx_runtime.JSX.Element;
/**
 * TypingAnimation - Character-by-character typing effect
 *
 * @example
 * ```tsx
 * <TypingAnimation duration={50}>pnpm install @nebutra/ui</TypingAnimation>
 * ```
 */
declare function TypingAnimation({ children, className, duration, delay, as: Component, startOnView, ...props }: TypingAnimationProps): react_jsx_runtime.JSX.Element;
/**
 * Terminal - MacOS-style terminal UI with typing animations
 *
 * @description
 * A terminal component that displays command-line style content with
 * sequenced typing animations. Each child (TypingAnimation or AnimatedSpan)
 * starts when the previous one completes.
 *
 * @example Basic usage
 * ```tsx
 * <Terminal>
 *   <TypingAnimation>pnpm dlx shadcn@latest init</TypingAnimation>
 *   <AnimatedSpan>✔ Preflight checks.</AnimatedSpan>
 *   <AnimatedSpan>✔ Validating Tailwind CSS.</AnimatedSpan>
 *   <TypingAnimation>Success! Project initialized.</TypingAnimation>
 * </Terminal>
 * ```
 *
 * @example Without sequencing
 * ```tsx
 * <Terminal sequence={false}>
 *   <AnimatedSpan delay={0}>Line 1</AnimatedSpan>
 *   <AnimatedSpan delay={500}>Line 2</AnimatedSpan>
 *   <AnimatedSpan delay={1000}>Line 3</AnimatedSpan>
 * </Terminal>
 * ```
 */
declare function Terminal({ children, className, sequence, startOnView, }: TerminalProps): react_jsx_runtime.JSX.Element;

/**
 * Text - Typography primitive
 *
 * Renders text with semantic styling based on the typography token system.
 *
 * @see apps/landing/DESIGN.md Section 10.7
 */
interface TextProps extends React$1.HTMLAttributes<HTMLElement> {
    /** Render as a different element */
    as?: React$1.ElementType;
    /** Text style variant */
    variant?: TextStyle;
    /** Text color */
    color?: TextColor;
    /** Truncate with ellipsis */
    truncate?: boolean;
    /** Line clamp (number of lines) */
    lineClamp?: 1 | 2 | 3 | 4 | 5 | 6;
    /** Text alignment */
    align?: "left" | "center" | "right";
    children?: React$1.ReactNode;
}
declare const Text: {
    ({ as: Component, variant, color, truncate, lineClamp, align, className, children, ref, ...props }: TextProps & {
        ref?: React$1.Ref<HTMLElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type MotionDivProps = React.ComponentProps<typeof motion.div>;
type MotionTransition = NonNullable<MotionDivProps["transition"]>;
type MotionVariants$1 = NonNullable<MotionDivProps["variants"]>;
/**
 * Props for the TextLoop component.
 */
interface TextLoopProps {
    /** Array of React nodes to cycle through */
    children: React.ReactNode[];
    /** Additional CSS classes */
    className?: string;
    /** Interval between transitions in seconds (default: 2) */
    interval?: number;
    /** Framer Motion transition config */
    transition?: MotionTransition;
    /** Custom animation variants */
    variants?: MotionVariants$1;
    /** Callback fired when the active index changes */
    onIndexChange?: (index: number) => void;
}
/**
 * TextLoop - Animated text cycling component
 *
 * Cycles through an array of text/content items with smooth animations.
 * Useful for hero sections, testimonials, or any rotating content display.
 *
 * @example Basic usage
 * ```tsx
 * <TextLoop>
 *   {["Hello", "World", "Welcome"].map(text => (
 *     <span key={text}>{text}</span>
 *   ))}
 * </TextLoop>
 * ```
 *
 * @example With custom interval and animation
 * ```tsx
 * <TextLoop
 *   interval={1.5}
 *   transition={{ duration: 0.5, ease: "easeInOut" }}
 * >
 *   {items.map(item => <span key={item.id}>{item.label}</span>)}
 * </TextLoop>
 * ```
 *
 * @example Inline with static text
 * ```tsx
 * <p>
 *   Beautiful templates for{" "}
 *   <TextLoop interval={1}>
 *     {["Designers", "Developers", "Everyone"].map(t => (
 *       <span key={t}>{t}</span>
 *     ))}
 *   </TextLoop>
 * </p>
 * ```
 */
declare function TextLoop({ children, className, interval, transition, variants, onIndexChange, }: TextLoopProps): react_jsx_runtime.JSX.Element;

interface TextScrambleProps extends MotionProps$2 {
    /** Text content to display and animate */
    children: string;
    /** Total duration of the scramble animation in seconds */
    duration?: number;
    /** Speed of character updates in seconds */
    speed?: number;
    /** Character set to use for scrambled characters */
    characterSet?: string;
    /** HTML element to render as */
    as?: ElementType;
    /** Additional CSS classes */
    className?: string;
    /** Whether to trigger the scramble animation */
    trigger?: boolean;
    /** Callback when scramble animation completes */
    onScrambleComplete?: () => void;
}
/**
 * TextScramble - Animated text scrambling effect
 *
 * @description
 * A text component that animates character-by-character with a scramble effect.
 * Characters transition from random symbols to the final text progressively.
 *
 * @example Basic usage
 * ```tsx
 * <TextScramble className="font-mono text-sm uppercase">
 *   Hello World
 * </TextScramble>
 * ```
 *
 * @example Hover trigger
 * ```tsx
 * const [trigger, setTrigger] = useState(false);
 * <TextScramble
 *   as="span"
 *   speed={0.01}
 *   trigger={trigger}
 *   onHoverStart={() => setTrigger(true)}
 *   onScrambleComplete={() => setTrigger(false)}
 * >
 *   Hover me
 * </TextScramble>
 * ```
 *
 * @example Custom character set (dots for loading effect)
 * ```tsx
 * <TextScramble characterSet=". " duration={1.2}>
 *   Generating...
 * </TextScramble>
 * ```
 */
declare function TextScramble({ children, duration, speed, characterSet, className, as: Component, trigger, onScrambleComplete, ...props }: TextScrambleProps): react_jsx_runtime.JSX.Element;

interface TextShimmerProps {
    children: string;
    as?: React.ElementType;
    className?: string;
    duration?: number;
    spread?: number;
}
declare function TextShimmer({ children, as: Component, className, duration, spread, }: TextShimmerProps): react_jsx_runtime.JSX.Element;

/**
 * Status enum matching the Claude TodoWrite tool wire format.
 * NOTE: distinct from AgentPlan's `TaskStatus` (hyphenated, 5 states).
 */
type TodoStatus = "pending" | "in_progress" | "completed";
type TodoItem = {
    /** Optional stable id. Fallback to index + content slice for keying. */
    id?: string;
    content: string;
    status: TodoStatus;
};
type TodoToolState = "loading" | "ready";
type TodoToolMode = "creating" | "updating";
type TodoToolProps = {
    /** @default "ready" */
    state?: TodoToolState;
    /** Used only when state="loading" to pick the shimmer label. @default "updating" */
    mode?: TodoToolMode;
    /** Task list. Empty array in `ready` state renders nothing. */
    todos?: readonly TodoItem[];
    /** When true, all items render in the muted "soft" treatment. @default false */
    dimmed?: boolean;
    className?: string;
};
declare const TodoTool: React$1.NamedExoticComponent<TodoToolProps>;

type Variant = "inline" | "card";
interface UpgradeBannerProps {
    /** Feature name shown in the title (e.g. "Custom workflows"). */
    feature?: string;
    /** Title override — defaults to "Unlock {feature}" or "Upgrade your plan". */
    title?: string;
    /** Description text. */
    description?: string;
    /** Call-to-action label. */
    ctaLabel?: string;
    /** Click handler or href for the CTA. Pass a string for a plain anchor. */
    onCta?: (() => void) | string;
    /** Whether the banner can be dismissed by the user. */
    dismissible?: boolean;
    /** Optional dismiss callback (analytics, persistence). */
    onDismiss?: () => void;
    /** Visual variant — `inline` is a slim banner row; `card` is a padded block. */
    variant?: Variant;
    /** Optional secondary slot (e.g. "Learn more" link). */
    secondaryAction?: ReactNode;
    /** Extra classes for the root element. */
    className?: string;
}
/**
 * UpgradeBanner — inline upsell primitive.
 *
 * Echoes the Perplexity "Pro 高级搜索的免费预览已启用" inline banner pattern:
 * shows value, never blocks workflow. Renders with our blue→cyan
 * `--brand-gradient` and the canonical `<BrandMark>` motif.
 *
 * Pair with `<FeatureGate fallback={<UpgradeBanner …/>}>` for declarative
 * plan-gated UI.
 */
declare function UpgradeBanner({ feature, title, description, ctaLabel, onCta, dismissible, onDismiss, variant, secondaryAction, className, }: UpgradeBannerProps): react_jsx_runtime.JSX.Element | null;

/**
 * Props for VideoPlayer component
 *
 * @description
 * A custom video player with animated controls, volume slider, progress bar,
 * and playback speed options. Controls auto-hide on mouse leave.
 *
 * **UX Scenarios:**
 * - Product demo videos
 * - Course/tutorial content
 * - Marketing video showcases
 * - Portfolio video presentations
 * - Onboarding video guides
 *
 * **Features:**
 * - Play/pause with click on video
 * - Animated progress and volume sliders
 * - Playback speed selection (0.5x - 2x)
 * - Auto-hiding controls on mouse leave
 * - Mute toggle with volume memory
 */
interface VideoPlayerProps {
    /** Video source URL */
    src: string;
    /** Poster image URL */
    poster?: string;
    /** Additional CSS classes for container */
    className?: string;
    /** Whether to autoplay (muted required for autoplay) */
    autoPlay?: boolean;
    /** Whether to loop the video */
    loop?: boolean;
    /** Available playback speeds */
    speeds?: number[];
    /** Initial volume (0-1) */
    initialVolume?: number;
    /** Whether to show controls initially */
    showControlsOnMount?: boolean;
}
/**
 * VideoPlayer - Custom video player with animated controls
 *
 * @example
 * ```tsx
 * // Basic usage
 * <VideoPlayer src="/demo.mp4" />
 *
 * // With poster and custom speeds
 * <VideoPlayer
 *   src="/tutorial.mp4"
 *   poster="/thumbnail.jpg"
 *   speeds={[0.5, 1, 1.25, 1.5, 2]}
 *   initialVolume={0.8}
 * />
 *
 * // Autoplay (muted)
 * <VideoPlayer
 *   src="/background.mp4"
 *   autoPlay
 *   loop
 * />
 * ```
 */
declare const VideoPlayer: React__default.FC<VideoPlayerProps>;

interface VideoTextProps {
    /** The video source URL */
    src: string;
    /** Additional className for the container */
    className?: string;
    /** Whether to autoplay the video */
    autoPlay?: boolean;
    /** Whether to mute the video */
    muted?: boolean;
    /** Whether to loop the video */
    loop?: boolean;
    /** Whether to preload the video */
    preload?: "auto" | "metadata" | "none";
    /** The content to display (will have the video "inside" it) */
    children: ReactNode;
    /** Font size for the text mask (in viewport width units) */
    fontSize?: string | number;
    /** Font weight for the text mask */
    fontWeight?: string | number;
    /** Text anchor for the text mask */
    textAnchor?: string;
    /** Dominant baseline for the text mask */
    dominantBaseline?: string;
    /** Font family for the text mask */
    fontFamily?: string;
    /** The element type to render for the text */
    as?: ElementType;
}
/**
 * VideoText - Text component with video background
 *
 * @description
 * Renders text with a video playing inside the letters using SVG mask.
 * Perfect for hero sections and eye-catching headlines.
 *
 * @example Basic usage
 * ```tsx
 * <div className="relative h-[500px] w-full overflow-hidden">
 *   <VideoText src="/ocean.webm">OCEAN</VideoText>
 * </div>
 * ```
 *
 * @example Custom font settings
 * ```tsx
 * <VideoText
 *   src="/fire.webm"
 *   fontSize={15}
 *   fontWeight={900}
 *   fontFamily="Impact"
 * >
 *   FIRE
 * </VideoText>
 * ```
 */
declare function VideoText({ src, children, className, autoPlay, muted, loop, preload, fontSize, fontWeight, textAnchor, dominantBaseline, fontFamily, as: Component, }: VideoTextProps): react_jsx_runtime.JSX.Element;

/**
 * Props for WarpBackground component
 *
 * @description
 * A card container with a 3D perspective grid background and animated beams.
 * Creates a time-warping, sci-fi aesthetic effect with beams traveling
 * along the grid from all four sides.
 *
 * **UX Scenarios:**
 * - Hero section feature cards
 * - Pricing cards with premium feel
 * - CTA sections with futuristic aesthetic
 * - Dashboard widgets with tech branding
 * - Product showcase containers
 *
 * **Visual Effect:**
 * - 3D perspective grid on all four sides
 * - Animated color beams traveling along grid lines
 * - Creates depth illusion with CSS transforms
 */
interface WarpBackgroundProps extends HTMLAttributes<HTMLDivElement> {
    /**
     * Content to display inside the warp container
     */
    children: React__default.ReactNode;
    /**
     * Perspective depth in pixels (lower = more dramatic)
     * @default 100
     */
    perspective?: number;
    /**
     * Number of beams per side
     * @default 3
     */
    beamsPerSide?: number;
    /**
     * Size of each beam as percentage
     * @default 5
     */
    beamSize?: number;
    /**
     * Maximum delay before beam starts (seconds)
     * @default 3
     */
    beamDelayMax?: number;
    /**
     * Minimum delay before beam starts (seconds)
     * @default 0
     */
    beamDelayMin?: number;
    /**
     * Duration of beam animation (seconds)
     * @default 3
     */
    beamDuration?: number;
    /**
     * Colour of the grid lines. Must be an actual colour: it lands in a gradient
     * stop, and --border holds bare HSL channels, so an unwrapped var(--border)
     * makes the whole background declaration invalid and the grid does not draw.
     * @default "hsl(var(--border))"
     */
    gridColor?: string;
}
/**
 * WarpBackground - 3D perspective grid container with animated beams
 *
 * @example
 * ```tsx
 * // Basic usage
 * <WarpBackground>
 *   <h2>Welcome to the Future</h2>
 *   <p>Experience the next generation.</p>
 * </WarpBackground>
 *
 * // Custom configuration
 * <WarpBackground
 *   perspective={150}
 *   beamsPerSide={5}
 *   beamSize={3}
 *   beamDuration={4}
 *   gridColor="rgba(59, 130, 246, 0.3)"
 *   className="p-12"
 * >
 *   <PricingCard />
 * </WarpBackground>
 *
 * // Dramatic close perspective
 * <WarpBackground perspective={50} beamSize={8}>
 *   <CTAContent />
 * </WarpBackground>
 * ```
 */
declare const WarpBackground: React__default.FC<WarpBackgroundProps>;

/**
 * Props for WaveAnimation component
 *
 * @description
 * An animated canvas-based wave bars visualization with trailing effect.
 * Creates a colorful audio-visualizer-like wave animation.
 *
 * **UX Scenarios:**
 * - Music/audio app backgrounds
 * - Creative agency hero sections
 * - Loading/processing state visualization
 * - Festival/event promotional pages
 * - Podcast/streaming platform backgrounds
 *
 * **Performance Notes:**
 * - Uses requestAnimationFrame for smooth animation
 * - Semi-transparent overlay creates trailing effect
 * - Auto-resizes with window
 */
interface WaveAnimationProps {
    /**
     * Color palette for wave bars
     * @default Ocean/sunset gradient palette
     */
    palette?: string[];
    /**
     * Number of wave bars
     * @default 20
     */
    barCount?: number;
    /**
     * Width of each bar in pixels
     * @default 100
     */
    barWidth?: number;
    /**
     * Animation speed multiplier
     * @default 1
     */
    speed?: number;
    /**
     * Trail opacity (0-1, lower = longer trails)
     * @default 0.03
     */
    trailOpacity?: number;
    /**
     * Wave amplitude multiplier
     * @default 1
     */
    amplitude?: number;
    /**
     * Whether animation is paused
     * @default false
     */
    paused?: boolean;
    /**
     * Canvas positioning
     * @default "fixed"
     */
    position?: "fixed" | "absolute" | "relative";
    /**
     * Z-index for layering
     * @default 0
     */
    zIndex?: number;
    /** Additional CSS classes for container */
    className?: string;
}
/**
 * WaveAnimation - Animated wave bars background
 *
 * @example
 * ```tsx
 * // Basic usage
 * <WaveAnimation />
 *
 * // Custom colors and speed
 * <WaveAnimation
 *   palette={["hsl(var(--primary))", "var(--brand-accent)", "var(--brand-tertiary)"]}
 *   speed={1.5}
 *   barCount={30}
 * />
 *
 * // As section background
 * <div className="relative">
 *   <WaveAnimation position="absolute" zIndex={-1} />
 *   <Content />
 * </div>
 * ```
 */
declare function WaveAnimation({ palette, barCount, barWidth, speed, trailOpacity, amplitude, paused, position, zIndex, className, }: WaveAnimationProps): react_jsx_runtime.JSX.Element;

interface WavesBgProps extends React$1.HTMLAttributes<HTMLDivElement>, Partial<Omit<WavesProps, "style">> {
}
/**
 * WavesBg - Brand-matched waves shader background
 *
 * Wraps @paper-design/shaders-react Waves with Nebutra brand defaults.
 * Absolutely positioned, fills parent, z-index -10.
 *
 * @example
 * ```tsx
 * <div className="relative min-h-screen">
 *   <WavesBg />
 *   <Content />
 * </div>
 * ```
 *
 * @example Custom wave settings
 * ```tsx
 * <WavesBg
 *   colorFront="hsl(var(--primary))"
 *   colorBack="hsl(var(--primary))"
 *   frequency={3}
 *   amplitude={0.5}
 * />
 * ```
 */
declare function WavesBg({ className, colorFront, colorBack, ...props }: WavesBgProps): react_jsx_runtime.JSX.Element;
declare namespace WavesBg {
    var displayName: string;
}

type MotionVariants = NonNullable<React.ComponentProps<typeof motion.div>["variants"]>;
/**
 * Props for WordFadeIn component
 *
 * @description
 * Animates text by fading in each word sequentially with staggered timing.
 * Creates an elegant reveal effect for headlines and important text.
 *
 * **UX Scenarios:**
 * - Hero section headlines
 * - Page title reveals
 * - Testimonial quotes
 * - Feature descriptions
 * - Onboarding welcome messages
 *
 * **Animation Details:**
 * - Each word fades in with configurable delay
 * - Supports custom animation variants for advanced effects
 * - Renders as h1 by default, customizable via `as` prop
 */
interface WordFadeInProps {
    /** Text to animate (words separated by spaces) */
    words: string;
    /** Additional CSS classes */
    className?: string;
    /**
     * Delay between each word in seconds
     * @default 0.15
     */
    delay?: number;
    /**
     * Custom framer-motion variants
     * @default Fade in with staggered delay
     */
    variants?: MotionVariants;
    /**
     * HTML element to render as
     * @default "h1"
     */
    as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
    /**
     * Whether to trigger animation
     * @default true
     */
    animate?: boolean;
    /**
     * Animation trigger mode
     * @default "mount" - animate on component mount
     */
    trigger?: "mount" | "inView";
}
/**
 * WordFadeIn - Sequential word fade-in animation
 *
 * @example
 * ```tsx
 * // Basic usage
 * <WordFadeIn words="Welcome to our platform" />
 *
 * // Slower animation
 * <WordFadeIn words="Take your time" delay={0.3} />
 *
 * // As paragraph
 * <WordFadeIn
 *   as="p"
 *   words="This is a longer description that fades in word by word"
 *   className="text-lg text-muted-foreground"
 * />
 *
 * // With viewport trigger
 * <WordFadeIn
 *   words="Scroll to reveal"
 *   trigger="inView"
 * />
 * ```
 */
declare function WordFadeIn({ words, delay, variants, className, as: Component, animate, trigger, }: WordFadeInProps): react_jsx_runtime.JSX.Element;

interface XPostCardProps {
    /** The ID of the X post to display */
    id: string;
    /** Additional CSS classes */
    className?: string;
    /** Custom API URL for fetching tweet data */
    apiUrl?: string;
    /** Custom fetch options */
    fetchOptions?: RequestInit;
    /** Fallback content while loading */
    fallback?: React.ReactNode;
    /** Custom components to override defaults */
    components?: TwitterComponents;
    /** Error handler callback */
    onError?: (error: Error | undefined) => Error | undefined;
}
/**
 * ClientXPostCard - Client-side rendered X (formerly Twitter) post card
 *
 * @description
 * Embeds an X post using client-side rendering with the react-tweet library.
 * Use this component when you need to render posts in a client component.
 *
 * @example
 * ```tsx
 * "use client"
 *
 * import { ClientXPostCard } from "@nebutra/ui/primitives";
 *
 * export default function Page() {
 *   return <ClientXPostCard id="1441032681968212480" />;
 * }
 * ```
 */
declare function ClientXPostCard({ id, apiUrl, fetchOptions, fallback, components, onError, className, }: XPostCardProps): react_jsx_runtime.JSX.Element;
/**
 * XPostCard - X (formerly Twitter) post card with Suspense
 *
 * @description
 * A wrapper around ClientXPostCard with built-in Suspense boundary.
 * This is the recommended component for most use cases.
 *
 * @example
 * ```tsx
 * import { XPostCard } from "@nebutra/ui/primitives";
 *
 * export default function Page() {
 *   return <XPostCard id="1441032681968212480" />;
 * }
 * ```
 *
 * @example With custom fallback
 * ```tsx
 * <XPostCard
 *   id="1441032681968212480"
 *   fallback={<div>Loading post...</div>}
 * />
 * ```
 */
declare function XPostCard(props: XPostCardProps): react_jsx_runtime.JSX.Element;
/**
 * XPostSkeleton - Loading skeleton for X post cards
 */
declare function XPostSkeleton({ className }: {
    className?: string;
}): react_jsx_runtime.JSX.Element;

export { ANIMATED_GRADIENT_CSS, AgentPlan, type AgentPlanProps, type AgentSubtask, type AgentTask, AnimatedBeam, type AnimatedBeamProps, AnimatedCircularProgressBar, type AnimatedCircularProgressBarProps, AnimatedExportIcon, AnimatedGradientText, type AnimatedGradientTextProps, AnimatedGroup, type AnimatedGroupProps, AnimatedHikeCard, type AnimatedHikeCardProps, AnimatedList, AnimatedListItem, type AnimatedListItemProps, type AnimatedListProps, AnimatedShinyText, type AnimatedShinyTextProps, AnimatedSpan, type AnimatedSpanProps, Announcement, type AnnouncementProps, AnnouncementTag, type AnnouncementTagProps, AnnouncementTitle, type AnnouncementTitleProps, AppleLiquidGlassSwitcher, type ApprovalDecision, AssistedPasswordConfirmation, type AssistedPasswordConfirmationProps, AuroraBackground, type AuroraBackgroundProps, AuroraText, type AuroraTextProps, type AvatarCircleItem, AvatarCircles, type AvatarCirclesProps, AvatarProps, AvatarSmartGroup, type AvatarSmartGroupProps, AvatarWithIcon, type AvatarWithIconProps, Awards, type AwardsComponentProps, Badge1, type Badge1Props, BadgeProps, BarsLoader, BaseBadge, BaseBadgeButton, type BaseBadgeButtonProps, BaseBadgeDot, type BaseBadgeDotProps, type BaseBadgeProps, BaseButton, BaseButtonArrow, type BaseButtonProps, BentoCard, type BentoCardProps, BentoGrid, type BentoGridProps, BitbucketAvatar, type BitbucketAvatarProps, Book, type BookProps, BorderTrail, type BorderTrailProps, Box, type BoxOwnProps, type BoxProps, BrandMark, type BrandMarkProps, type Breakpoint, type BreakpointValue, Browser, BrowserMockup, type BrowserMockupProps, type BrowserProps, type BulkAction, BulkActionBar, type BulkActionBarProps, BulkActionConfirmDialog, type BulkActionConfirmDialogProps, Button, CanvasRevealEffect, type CanvasRevealEffectProps, CardErrorBoundary, CardSpotlight, type CardSpotlightProps, Carousel, type CarouselApi, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious, type ChartConfig, ChartContainer, type ChartContainerProps, ChartLegend, ChartLegendContent, type ChartLegendContentProps, ChartTooltip, ChartTooltipContent, type ChartTooltipContentProps, CheckGlyph, ChoiceboxGroup, type ChoiceboxGroupProps, type ChoiceboxItemProps, type CircleConfig, CircularLoader, CircularUI, type CircularUIProps, ClassicLoader, ClientXPostCard, Collapsible, CollapsibleContent, CollapsibleTrigger, ColorBadge, type ColorBadgeProps, type ColorBadgeSize, type ColorBadgeVariant, Command, CommandEmpty, CommandEmptyProps, CommandGroup, CommandGroupProps, CommandInput, CommandInputProps, CommandItem, CommandItemProps, CommandList, CommandListProps, CommandMenu, CommandMenuEmpty, CommandMenuGroup, CommandMenuInput, CommandMenuItem, type CommandMenuItemProps, CommandMenuList, CommandMenuResults, CommandMenuRoot, type CommandMenuRootProps, CommandMenuSeparator, CommandMenuShortcut, CommandResults, CommandResultsProps, CommandSeparator, CommandSeparatorProps, CommandShortcutProps, CompactBulkActionBar, type CompactBulkActionBarProps, Confetti, type ConfettiApi, ConfettiButton, type ConfettiButtonProps, type ConfettiProps, type ConfettiRef, ConfirmDeleteDialog, type ConfirmDeleteDialogProps, ConfirmDialog, type ConfirmDialogProps, ContextCard, type ContextCardAlign, type ContextCardEntityProps, type ContextCardMetadataItem, type ContextCardSide, type ContextCardTriggerProps, type ContributionDay, type ControlGlyphProps, DITHERING_SHAPES, DITHERING_TYPES, DataList, type DataListAlign, type DataListColumn, type DataListProps, type DataListStatus, type DensityMode, DestructiveActionModal, type DestructiveActionModalProps, DiceBearAvatar, type DiceBearAvatarProps, type DiceBearStyle, type DiffComment, type DiffLine, type DiffLineKind, type DisplayCardProps, DisplayCards, type DisplayCardsProps, DitheringBackground, type DitheringBackgroundProps, DitheringShader, type DitheringShaderProps, type DitheringShaderShape, type DitheringShaderType, type DitheringThemeConfig, DotPattern, type DotPatternProps, DotsLoader, DottedMap, type DottedMapMarker, type DottedMapProps, DottedWorldMap, type DottedWorldMapProps, DualModeImage, type DualModeImageProps, DynamicIslandTOC, type DynamicIslandTOCProps, EditTool, type EditToolApproval, type EditToolProps, type EditToolState, type EditToolVariant, Enable2FACard, type Enable2FACardProps, type Enable2FAStep, Entity, type EntityContentProps, type EntityListProps, type EntityProps, ErrorBoundary, type ErrorBoundaryProps, type ErrorFallbackProps, ExpandableGallery, type ExpandableGalleryProps, ExpandableTabs, type ExpandableTabsProps, ExpandingTextarea, type ExpandingTextareaProps, FallbackCard, type FallbackCardProps, FeatureArrowCard, type FeatureArrowCardProps, FeatureCard, FeatureCardDecorator, FeatureCardHeader, type FeatureCardHeaderProps, type FeatureCardProps, FeatureCheckItem, type FeatureCheckItemProps, FeatureGate, type FeatureGateProps, FeatureIconItem, type FeatureIconItemProps, Feedback, type FeedbackDefaultProps, type FeedbackEmotion, type FeedbackInlineProps, type FeedbackMetadata, type FeedbackPayload, type FeedbackProps, type FeedbackTopic, FileAttachment, type FileAttachmentDisplay, type FileAttachmentProps, FileCard, type FileCardProps, type FileFormat, type FilterPillOption, FilterPills, type FilterPillsMultipleProps, type FilterPillsProps, type FilterPillsSingleProps, type FilterPillsSize, type FilterPillsVariant, Flex, type FlexProps, FlickeringGrid, type FlickeringGridProps, FloatingBulkActionBar, type FloatingBulkActionBarProps, Folder, type FolderColor, type FolderProps, type FolderSize, type GalleryPhoto, GeistTooltip, type GeistTooltipBoxAlign, type GeistTooltipPosition, type GeistTooltipProps, type GeistTooltipType, GitHubAvatar, type GitHubAvatarProps, GitHubCalendar, type GitHubCalendarProps, GitLabAvatar, type GitLabAvatarProps, GithubInlineDiff, type GithubInlineDiffProps, Globe, type GlobeConfig, type GlobeMarker, type GlobeProps, GradientAnimatedText, type GradientAnimatedTextProps, type GradientTheme, type GradientVariant, GrainCloudsBackground, type GrainCloudsBackgroundProps, GrainGradientBackground, type GrainGradientBackgroundProps, Grid, GridCell, type GridCellProps, GridFeatureCard, type GridFeatureCardProps, type GridHeight, type GridHideGuides, type GridLine, GridPatternCard, GridPatternCardBody, type GridPatternCardBodyProps, type GridPatternCardProps, type GridProps, type GridResponsiveValue, GridRoot, GridSystem, type GridSystemProps, Heading, type HeadingProps, HexGrid, type HexGridProps, Highlighter, type HighlighterAction, type HighlighterProps, IndeterminateGlyph, InfiniteSlider, type InfiniteSliderProps, InteractiveCard, type InteractiveCardProps, InteractiveFrostedGlassCard, IphoneMockup, type IphoneMockupProps, KpiCard, type KpiCardProps, LINE_SHADOW_CSS, LetterGlitch, type LetterGlitchProps, LightRays, type LightRaysProps, LineShadowText, type LineShadowTextProps, Loader, type LoaderProps, type LoaderSizeProps, MCP_DEFAULT_MAX_ARGS_SHOWN, MCP_DEFAULT_MAX_ARG_VALUE_CHARS, MCP_DEFAULT_MAX_OUTPUT_CHARS, MacbookPro, type MacbookProProps, MagicCard, type MagicCardProps, Material, type MaterialProps, type MaterialType, McpTool, type McpToolArgValue, type McpToolArgs, type McpToolProps, type McpToolState, MeshGradientBg, type MeshGradientBgProps, MessageContent, type MessageContentProps, MessageWithReactions, type MessageWithReactionsProps, MetricCard, MetricCardBordered, type MetricCardProps, MetricGrid, type MetricGridProps, MiddleTruncate, type MiddleTruncateProps, MultipleSelector, type MultipleSelectorOption, type MultipleSelectorProps, type MultipleSelectorRef, NeuroNoiseBg, type NeuroNoiseBgProps, NoisePatternCard, NoisePatternCardBody, type NoisePatternCardBodyProps, type NoisePatternCardProps, type NotificationMessage, NotificationMessageList, type NotificationMessageListProps, PaginationControl, PanelErrorBoundary, Phone, type PhoneProps, type PlanTier, PricingCard, PricingCardBadge, PricingCardBody, PricingCardDescription, PricingCardHeader, PricingCardList, PricingCardListItem, PricingCardMainPrice, PricingCardOriginalPrice, PricingCardPeriod, PricingCardPlan, PricingCardPlanName, PricingCardPrice, PricingCardRoot, PricingCardSeparator, ProgressStepper, type ProgressStepperProps, ProgressiveBlur, type ProgressiveBlurProps, PulseDotLoader, PulseLoader, type QuestionAnswer, type QuestionConfig, type QuestionKind, type QuestionOption, QuestionPrompt, type QuestionPromptProps, QuestionTool, type QuestionToolProps, RadioGroupCard, RadioGroupCardItem, RadioGroupStacked, RadioGroupStackedItem, ReactionBadge, type ReactionBadgeProps, ReactionChip, type ReactionChipProps, RelativeTimeCard, type RelativeTimeCardProps, type ResponsiveProp, SEARCH_DEFAULT_MAX_HEIGHT_PX, Safari, type SafariMode, type SafariProps, ScrollVelocityContainer, type ScrollVelocityContainerProps, ScrollVelocityRow, type ScrollVelocityRowProps, type SearchResult, SearchTool, type SearchToolProps, type SearchToolState, ShineBorder, type ShineBorderProps, SliderNumberFlow, type SpacingKey, type SpacingValue, StarsCanvas, type StarsCanvasProps, type Stat, StatItem, type StatItemProps, StatusBadge, type StatusBadgeProps, type Step, type StepStatus, Stepper, StepperContent, type StepperContentProps, type StepperContextValue, StepperNavigation, type StepperNavigationProps, type StepperProps, StepperProvider, type StepperProviderProps, SubagentTool, type SubagentToolProps, type SubagentToolState, type Tab, type TabItem, TableErrorBoundary, type TaskPriority, type TaskStatus, Terminal, TerminalLoader, type TerminalProps, Text, TextBlinkLoader, TextDotsLoader, type TextLoaderProps, TextLoop, type TextLoopProps, type TextProps, TextScramble, type TextScrambleProps, TextShimmer, TextShimmerLoader, type TextShimmerProps, TextareaProps, type ThemeMode, type TodoItem, type TodoStatus, TodoTool, type TodoToolMode, type TodoToolProps, type TodoToolState, TypingAnimation, type TypingAnimationProps, TypingLoader, UpgradeBanner, type UpgradeBannerProps, type UseBulkSelectionOptions, type UseBulkSelectionReturn, type UseConfirmDialogOptions, type UseConfirmDialogReturn, type UseStepperOptions, type User, VideoPlayer, type VideoPlayerProps, VideoText, type VideoTextProps, WarpBackground, type WarpBackgroundProps, WaveAnimation, type WaveAnimationProps, WaveLoader, WavesBg, type WavesBgProps, WordFadeIn, type WordFadeInProps, XPostCard, type XPostCardProps, XPostSkeleton, ariaPatterns, baseBadgeVariants, baseButtonVariants, breakpoints, choiceboxItemVariants, colorBadgeSizes, colorBadgeVariants, contrastRequirements, fixNumberedListBreaks, focusRing, formatShortRelative, getCurrentBreakpoint, getDensitySpacing, getSpacing, isBreakpoint, mediaQueries, minTouchTarget, normalizeCodeFenceLanguages, normalizeMessageMarkdown, prefersReducedMotion, responsive, responsivePatterns, skipLinkStyle, spacing, spacingPatterns, spacingToCss, statusBadgeVariants, useBulkSelection, useCarousel, useChart, useConfirmDialog, useDebounce, useFeatureGate, useStepper, useStepperContext, visuallyHidden, withErrorBoundary, wrap };
