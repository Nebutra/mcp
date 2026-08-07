import * as react_jsx_runtime from 'react/jsx-runtime';
import { Accordion as Accordion$1 } from '@base-ui/react/accordion';
import * as React from 'react';
import React__default, { ElementType, SVGProps, ReactElement, ReactNode, Ref, HTMLAttributes, RefObject, FieldsetHTMLAttributes, LabelHTMLAttributes, ComponentProps } from 'react';
import * as class_variance_authority_types from 'class-variance-authority/types';
import { VariantProps } from 'class-variance-authority';
import * as _base_ui_react from '@base-ui/react';
import { AlertDialog as AlertDialog$1 } from '@base-ui/react/alert-dialog';
import * as framer_motion from 'framer-motion';
import { motion } from 'framer-motion';
import { Avatar as Avatar$1 } from '@base-ui/react/avatar';
import { Command as Command$1 } from 'cmdk';
import { Dialog as Dialog$1 } from '@base-ui/react/dialog';
import { ContextMenu as ContextMenu$1 } from '@base-ui/react/context-menu';
import { Menu as Menu$1 } from '@base-ui/react/menu';
import { Drawer as Drawer$1 } from 'vaul';
import * as react_hook_form from 'react-hook-form';
import { FieldValues, FieldPath, ControllerProps } from 'react-hook-form';
import { Popover as Popover$1 } from '@base-ui/react/popover';
import { RenderProps } from 'input-otp';
import { Progress as Progress$1 } from '@base-ui/react/progress';
import { Separator as Separator$1, Panel, Group } from 'react-resizable-panels';
import { SelectRoot, Select as Select$1 } from '@base-ui/react/select';
import { Separator as Separator$2 } from '@base-ui/react/separator';
import { ToasterProps } from 'sonner';
import { Tooltip as Tooltip$1 } from '@base-ui/react/tooltip';
import '@nebutra/brand';

type AccordionSize = "default" | "small";
declare const Accordion: <Value = any>(props: Accordion$1.Root.Props<Value>) => React.JSX.Element;
declare const AccordionItem: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<"div"> & {
        value: string;
        disabled?: boolean;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AccordionTrigger: {
    ({ className, children, size, ref, ...props }: React.ComponentPropsWithoutRef<"button"> & {
        /** Size variant matching Geist Collapse */
        size?: AccordionSize;
    } & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AccordionContent: {
    ({ className, children, size, keepMounted, ref, ...props }: React.ComponentPropsWithoutRef<"div"> & {
        /** Size variant matching Geist Collapse */
        size?: AccordionSize;
        /**
         * Keep the panel content in the DOM when closed. Lets browser find-in-page
         * and search crawlers hit hidden content. Forwarded to Base UI's Panel.
         * @default false (Base UI's default)
         */
        keepMounted?: boolean;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const alertVariants: (props?: ({
    variant?: "info" | "secondary" | "primary" | "destructive" | "success" | "mono" | "warning" | null | undefined;
    icon?: "info" | "primary" | "destructive" | "success" | "warning" | null | undefined;
    appearance?: "solid" | "outline" | "light" | "stroke" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
/**
 * Alert variant types
 */
type AlertVariant = "secondary" | "primary" | "destructive" | "success" | "info" | "mono" | "warning";
/**
 * Alert appearance types
 */
type AlertAppearance = "solid" | "outline" | "light" | "stroke";
/**
 * Alert size types
 */
type AlertSize = "sm" | "md" | "lg";
/**
 * Props for Alert component
 *
 * @description
 * A versatile alert component with multiple variants, appearances, and sizes.
 * Supports icons, close button, and rich content.
 *
 * **UX Scenarios:**
 * - Success/error/warning notifications
 * - Form validation messages
 * - System status alerts
 * - Informational banners
 * - Toast notifications
 *
 * **Accessibility:**
 * - role="alert" for screen readers
 * - Dismissible with close button
 * - Proper ARIA labeling
 */
interface AlertProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
    /**
     * Show close button
     * @default false
     */
    close?: boolean;
    /**
     * Callback when close button is clicked
     */
    onClose?: () => void;
}
interface AlertIconProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof alertVariants> {
}
type AlertTitleProps = React.HTMLAttributes<HTMLDivElement>;
type AlertDescriptionProps = React.HTMLAttributes<HTMLDivElement>;
type AlertContentProps = React.HTMLAttributes<HTMLDivElement>;
type AlertToolbarProps = React.HTMLAttributes<HTMLDivElement>;
/**
 * Alert - Contextual feedback messages
 *
 * @example
 * ```tsx
 * import {
 *   Alert, *   AlertIcon, *   AlertTitle, *   AlertDescription, *   AlertContent, * } from "@nebutra/ui";
 * import { CheckCircle as CircleCheck, Warning as CircleAlert, Warning as TriangleAlert } from "@nebutra/icons";
 *
 * // Basic alert
 * <Alert>
 *   <AlertIcon><CircleAlert /></AlertIcon>
 *   <AlertTitle>Default alert message</AlertTitle>
 * </Alert>
 *
 * // Success alert with close
 * <Alert variant="success" appearance="light" close onClose={() => {}}>
 *   <AlertIcon><CircleCheck /></AlertIcon>
 *   <AlertTitle>Operation successful!</AlertTitle>
 * </Alert>
 *
 * // Destructive alert with description
 * <Alert variant="destructive" appearance="outline">
 *   <AlertIcon><TriangleAlert /></AlertIcon>
 *   <AlertContent>
 *     <AlertTitle>Error occurred</AlertTitle>
 *     <AlertDescription>
 *       Please try again or contact support.
 *     </AlertDescription>
 *   </AlertContent>
 * </Alert>
 *
 * // Different sizes
 * <Alert size="sm" variant="info">...</Alert>
 * <Alert size="md" variant="warning">...</Alert>
 * <Alert size="lg" variant="primary">...</Alert>
 * ```
 */
declare function Alert({ className, variant, size, icon, appearance, close, onClose, children, ...props }: AlertProps): react_jsx_runtime.JSX.Element;
/**
 * AlertTitle - Alert heading/title
 */
declare function AlertTitle({ className, ...props }: AlertTitleProps): react_jsx_runtime.JSX.Element;
/**
 * AlertIcon - Icon container for alert
 */
declare function AlertIcon({ children, className, ...props }: AlertIconProps): react_jsx_runtime.JSX.Element;
/**
 * AlertToolbar - Actions area for alert
 */
declare function AlertToolbar({ children, className, ...props }: AlertToolbarProps): react_jsx_runtime.JSX.Element;
/**
 * AlertDescription - Detailed description text
 */
declare function AlertDescription({ className, ...props }: AlertDescriptionProps): react_jsx_runtime.JSX.Element;
/**
 * AlertContent - Container for title and description
 */
declare function AlertContent({ className, ...props }: AlertContentProps): react_jsx_runtime.JSX.Element;

declare const AlertDialog: typeof AlertDialog$1.Root;
declare const AlertDialogPortal: React.ForwardRefExoticComponent<Omit<_base_ui_react.DialogPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const AlertDialogTrigger: {
    ({ asChild, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog$1.Trigger> & {
        asChild?: boolean;
    } & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogOverlay: {
    ({ className, style, ref, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog$1.Backdrop> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogContent: {
    ({ className, children, style, ref, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog$1.Popup> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogHeader: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogFooter: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogTitle: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog$1.Title> & {
        ref?: React.Ref<HTMLHeadingElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogDescription: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog$1.Description> & {
        ref?: React.Ref<HTMLParagraphElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogAction: {
    ({ className, asChild, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog$1.Close> & {
        asChild?: boolean;
    } & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AlertDialogCancel: {
    ({ className, asChild, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof AlertDialog$1.Close> & {
        asChild?: boolean;
    } & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const PRESETS: {
    /** 涌现 — materialize from the cloud (default) */
    readonly emerge: {
        readonly initial: {
            readonly opacity: 0;
            readonly y: 16;
            readonly filter: "blur(6px)";
        };
        readonly animate: {
            readonly opacity: 1;
            readonly y: 0;
            readonly filter: "blur(0px)";
        };
        readonly exit: {
            readonly opacity: 0;
            readonly y: -8;
            readonly filter: "blur(4px)";
        };
        readonly transition: {
            readonly duration: 0.5;
            readonly ease: readonly [0.16, 1, 0.3, 1];
        };
    };
    /** 流动 — stream horizontally */
    readonly flow: {
        readonly initial: {
            readonly opacity: 0;
            readonly x: -20;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly x: 0;
        };
        readonly exit: {
            readonly opacity: 0;
            readonly x: 20;
        };
        readonly transition: {
            readonly duration: 0.3;
            readonly ease: readonly [0, 0, 0.2, 1];
        };
    };
    /** Simple fade */
    readonly fade: {
        readonly initial: {
            readonly opacity: 0;
        };
        readonly animate: {
            readonly opacity: 1;
        };
        readonly exit: {
            readonly opacity: 0;
        };
        readonly transition: {
            readonly duration: 0.3;
        };
    };
    /** Fade + rise */
    readonly fadeUp: framer_motion.Variants | undefined;
    /** Scale in */
    readonly scale: framer_motion.Variants | undefined;
    /**
     * Keyed content swap — short, symmetric, blur-softened. Rises in, sinks out.
     * Shorter and shallower than `emerge` on purpose: a swap replaces content the
     * reader is already looking at, so it must resolve inside the reveal rail.
     * Pair with `AnimateSwap`.
     */
    readonly swap: {
        readonly initial: {
            readonly opacity: 0;
            readonly y: 10;
            readonly filter: "blur(4px)";
        };
        readonly animate: {
            readonly opacity: 1;
            readonly y: 0;
            readonly filter: "blur(0px)";
        };
        readonly exit: {
            readonly opacity: 0;
            readonly y: -10;
            readonly filter: "blur(4px)";
        };
        readonly transition: {
            readonly duration: number;
        };
    };
    /** Off-canvas panel entering from the right edge (drawer, sheet). */
    readonly slideFromRight: {
        readonly initial: {
            readonly x: "100%";
        };
        readonly animate: {
            readonly x: 0;
        };
        readonly exit: {
            readonly x: "100%";
        };
        readonly transition: {
            readonly type: "spring";
            readonly stiffness: 200;
            readonly damping: 24;
            readonly mass: 1;
        };
    };
    /** Off-canvas panel entering from the left edge. */
    readonly slideFromLeft: {
        readonly initial: {
            readonly x: "-100%";
        };
        readonly animate: {
            readonly x: 0;
        };
        readonly exit: {
            readonly x: "-100%";
        };
        readonly transition: {
            readonly type: "spring";
            readonly stiffness: 200;
            readonly damping: 24;
            readonly mass: 1;
        };
    };
    /** Off-canvas panel entering from the top edge (banner, command bar). */
    readonly slideFromTop: {
        readonly initial: {
            readonly y: "-100%";
        };
        readonly animate: {
            readonly y: 0;
        };
        readonly exit: {
            readonly y: "-100%";
        };
        readonly transition: {
            readonly type: "spring";
            readonly stiffness: 200;
            readonly damping: 24;
            readonly mass: 1;
        };
    };
    /** Off-canvas panel entering from the bottom edge (mobile action sheet). */
    readonly slideFromBottom: {
        readonly initial: {
            readonly y: "100%";
        };
        readonly animate: {
            readonly y: 0;
        };
        readonly exit: {
            readonly y: "100%";
        };
        readonly transition: {
            readonly type: "spring";
            readonly stiffness: 200;
            readonly damping: 24;
            readonly mass: 1;
        };
    };
};
type Preset = keyof typeof PRESETS;
/**
 * DOM attributes forwarded to the underlying element.
 *
 * Without this, anything needing `role`, `aria-*`, `onClick` or `onKeyDown` —
 * every dialog, drawer and tabpanel — has to drop out of `AnimateIn` and
 * hand-roll its own `m.div`, which is how reduced-motion branching and raw
 * duration numbers keep reappearing at call sites.
 *
 * The four drag/animation handlers are omitted because framer-motion redefines
 * them with incompatible signatures. `style` is omitted because framer's
 * `MotionStyle` rejects `undefined` under `exactOptionalPropertyTypes`, and an
 * animated element's static styling belongs in `className` anyway.
 */
type ForwardedDivProps = Omit<React.ComponentPropsWithoutRef<"div">, "children" | "className" | "style" | "onAnimationStart" | "onDrag" | "onDragStart" | "onDragEnd">;
interface AnimateInProps extends ForwardedDivProps {
    /** Optional: a purely decorative animated surface (a backdrop) has no content. */
    children?: React.ReactNode;
    preset?: Preset;
    delay?: number;
    duration?: number;
    /** Trigger when enters viewport instead of immediately */
    inView?: boolean;
    className?: string;
}
/**
 * AnimateIn — wraps any content in a branded entrance animation.
 *
 * Respects `prefers-reduced-motion` by fading only (no translate/blur).
 *
 * @example
 * <AnimateIn preset="emerge" delay={0.1}>
 *   <Card>...</Card>
 * </AnimateIn>
 */
declare function AnimateIn(props: AnimateInProps): react_jsx_runtime.JSX.Element;
interface AnimateSwapProps extends AnimateInProps {
    /**
     * Identity of the content currently rendered. When it changes, the outgoing
     * content plays its exit and is fully unmounted before the incoming content
     * enters (`AnimatePresence mode="wait"`).
     */
    swapKey: React.Key;
}
/**
 * AnimateSwap — swap one piece of content for another, one at a time.
 *
 * `AnimateIn` can only animate an entrance: it has no `AnimatePresence`, so its
 * `exit` never plays and a keyed replacement cross-fades on top of itself. Any
 * tab panel, step body or filtered result set therefore had to hand-roll
 * `AnimatePresence mode="wait"` plus a raw `m.div`. This is that pattern, once.
 *
 * Reduced motion is inherited from `AnimateIn`: opacity only, no travel, no blur.
 *
 * @example
 * <AnimateSwap swapKey={activeTab} preset="swap" role="tabpanel">
 *   {panelFor(activeTab)}
 * </AnimateSwap>
 */
declare function AnimateSwap(props: AnimateSwapProps): react_jsx_runtime.JSX.Element;
interface AnimateInGroupProps {
    children: React.ReactNode;
    stagger?: "fast" | "normal" | "slow";
    preset?: Preset;
    inView?: boolean;
    className?: string;
}
/**
 * AnimateInGroup — staggered container. Each direct child animates in sequence.
 *
 * @example
 * <AnimateInGroup stagger="normal" inView>
 *   {items.map(item => <AnimateIn key={item.id} preset="fadeUp">{item}</AnimateIn>)}
 * </AnimateInGroup>
 */
declare function AnimateInGroup(props: AnimateInGroupProps): react_jsx_runtime.JSX.Element;

declare const badgeVariants: (props?: ({
    variant?: "blue" | "gray" | "green" | "pink" | "purple" | "red" | "teal" | "outline" | "default" | "error" | "info" | "secondary" | "destructive" | "success" | "warning" | "pill" | "gray-subtle" | "blue-subtle" | "purple-subtle" | "amber" | "amber-subtle" | "red-subtle" | "pink-subtle" | "green-subtle" | "teal-subtle" | "inverted" | "trial" | "turbo" | "beta" | "new" | "owner" | "featured" | "coming-soon" | null | undefined;
    size?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface BadgeProps extends React.HTMLAttributes<HTMLElement>, VariantProps<typeof badgeVariants> {
    /** @deprecated Prefer Status Dot for dot-only indicators. Keep text labels redundant with color. */
    dot?: boolean;
    /** Icon element rendered before the label. Decorative icons are hidden from assistive tech. */
    icon?: React.ReactNode;
    /** Render as child element — use with `<a>` for link badges */
    asChild?: boolean;
}
declare function Badge({ className, variant, size, dot, icon, asChild, children, ...props }: BadgeProps): react_jsx_runtime.JSX.Element;

interface AspectRatioProps extends React.HTMLAttributes<HTMLDivElement> {
    ratio?: number;
}
declare const AspectRatio: {
    ({ ratio, className, style, children, ref, ...props }: AspectRatioProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * Avatar Component Tokens — Layer 3
 *
 * Five-step size scale: xs=20px sm=32px md=40px lg=56px xl=80px
 * Fallback chain: image → initials → generic icon
 */
declare const avatarTokens: {
    readonly size: {
        readonly xs: {
            readonly dimension: 20;
            readonly fontSize: 8;
            readonly iconSize: 10;
            readonly ringWidth: 1;
        };
        readonly sm: {
            readonly dimension: 32;
            readonly fontSize: 12;
            readonly iconSize: 14;
            readonly ringWidth: 2;
        };
        readonly md: {
            readonly dimension: 40;
            readonly fontSize: 14;
            readonly iconSize: 16;
            readonly ringWidth: 2;
        };
        readonly lg: {
            readonly dimension: 56;
            readonly fontSize: 20;
            readonly iconSize: 24;
            readonly ringWidth: 2;
        };
        readonly xl: {
            readonly dimension: 80;
            readonly fontSize: 28;
            readonly iconSize: 32;
            readonly ringWidth: 3;
        };
    };
    readonly group: {
        /** Negative margin to create the overlapping stack effect */
        readonly overlapOffset: -8;
        /** Size of the "+N more" overflow badge */
        readonly overflowBadge: 20;
    };
};
type AvatarSize$1 = keyof typeof avatarTokens.size;

type AvatarSize = AvatarSize$1 | number;
type AvatarProps = Omit<React.ComponentPropsWithoutRef<typeof Avatar$1.Root>, "children"> & {
    /** Size preset or explicit pixel size. */
    size?: AvatarSize;
    /** Convenience image source. For composition, use AvatarImage as a child. */
    src?: string;
    /** Image alt text. Prefer title for entity name and alt for explicit image labels. */
    alt?: string;
    /** Literal entity name used for fallback initials and accessible labels. */
    title?: string;
    /** Explicit initials fallback. Keep this to 1-2 uppercase characters. */
    letter?: string;
    /** Convenience username fallback. */
    username?: string;
    /** Loading shell. Do not use as permanent fallback. */
    placeholder?: boolean;
    /** Delay before fallback appears. */
    fallbackDelayMs?: number;
    children?: React.ReactNode;
};
declare const Avatar: {
    ({ className, size, src, alt, title, letter, username, placeholder, fallbackDelayMs, children, style, ref, ...props }: AvatarProps & {
        ref?: React.Ref<HTMLSpanElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AvatarImage: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<typeof Avatar$1.Image> & {
        ref?: React.Ref<HTMLImageElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type AvatarFallbackProps = React.ComponentPropsWithoutRef<typeof Avatar$1.Fallback> & {
    /** Pass the same size as the parent Avatar for correct font size */
    size?: AvatarSize;
};
declare const AvatarFallback: {
    ({ className, size, children, "aria-label": ariaLabel, style, ref, ...props }: AvatarFallbackProps & {
        ref?: React.Ref<HTMLSpanElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
interface AvatarGroupItem {
    src?: string;
    alt?: string;
    fallback?: string;
    title?: string;
    username?: string;
}
interface AvatarGroupProps {
    /** Nebutra composable API. */
    items?: AvatarGroupItem[];
    /** Geist-compatible API. */
    members?: AvatarGroupItem[];
    /** Maximum avatars to show before collapsing to "+N" */
    max?: number;
    /** Geist-compatible alias for max. */
    limit?: number;
    /** Size of each avatar in the group */
    size?: AvatarSize;
    className?: string;
    "aria-label"?: string;
}
declare function AvatarGroup({ items, members, max, limit, size, className, "aria-label": ariaLabel, }: AvatarGroupProps): react_jsx_runtime.JSX.Element;

/**
 * Spacing Token System
 *
 * Based on 4px base unit. All values are in pixels for consistency.
 *
 * @see apps/landing/DESIGN.md Section 10.5
 */
declare const spacing: {
    readonly 0: "0";
    readonly 1: "4px";
    readonly 2: "8px";
    readonly 3: "12px";
    readonly 4: "16px";
    readonly 5: "20px";
    readonly 6: "24px";
    readonly 8: "32px";
    readonly 10: "40px";
    readonly 12: "48px";
    readonly 16: "64px";
    readonly 20: "80px";
    readonly 24: "96px";
    readonly 32: "128px";
};
type SpacingScale = keyof typeof spacing;

/**
 * Props for Breadcrumb component
 *
 * @description
 * A navigation component showing the user's location within a site hierarchy.
 * Supports custom separators, ellipsis for collapsed items, and flexible linking.
 *
 * **UX Scenarios:**
 * - Site navigation hierarchy
 * - File/folder path display
 * - Multi-step form progress
 * - Category/subcategory navigation
 * - Dashboard section navigation
 *
 * **Accessibility:**
 * - nav element with aria-label="breadcrumb"
 * - aria-current="page" on current page
 * - Proper list semantics (ol/li)
 * - Screen reader support
 */
interface BreadcrumbProps extends React.ComponentPropsWithoutRef<"nav"> {
    /**
     * Custom separator element (defaults to ChevronRight icon)
     */
    separator?: React.ReactNode;
}
type BreadcrumbListProps = React.ComponentPropsWithoutRef<"ol">;
type BreadcrumbItemProps = React.ComponentPropsWithoutRef<"li">;
interface BreadcrumbLinkProps extends React.ComponentPropsWithoutRef<"a"> {
    /**
     * Render as child component (for use with Next.js Link, etc.)
     */
    asChild?: boolean;
}
type BreadcrumbPageProps = React.ComponentPropsWithoutRef<"span">;
type BreadcrumbSeparatorProps = React.ComponentPropsWithoutRef<"li">;
type BreadcrumbEllipsisProps = React.ComponentPropsWithoutRef<"span">;
/**
 * Breadcrumb - Root navigation container
 *
 * @example
 * ```tsx
 * import {
 *   Breadcrumb,
 *   BreadcrumbList,
 *   BreadcrumbItem,
 *   BreadcrumbLink,
 *   BreadcrumbPage,
 *   BreadcrumbSeparator,
 * } from "@nebutra/ui";
 *
 * <Breadcrumb>
 *   <BreadcrumbList>
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/">Home</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbLink href="/docs">Documents</BreadcrumbLink>
 *     </BreadcrumbItem>
 *     <BreadcrumbSeparator />
 *     <BreadcrumbItem>
 *       <BreadcrumbPage>Current Page</BreadcrumbPage>
 *     </BreadcrumbItem>
 *   </BreadcrumbList>
 * </Breadcrumb>
 * ```
 */
declare const Breadcrumb: {
    ({ ref, ...props }: BreadcrumbProps & {
        ref?: React.Ref<HTMLElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/**
 * BreadcrumbList - Ordered list container for breadcrumb items
 */
declare const BreadcrumbList: {
    ({ className, ref, ...props }: BreadcrumbListProps & {
        ref?: React.Ref<HTMLOListElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/**
 * BreadcrumbItem - Individual breadcrumb item wrapper
 */
declare const BreadcrumbItem: {
    ({ className, ref, ...props }: BreadcrumbItemProps & {
        ref?: React.Ref<HTMLLIElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/**
 * BreadcrumbLink - Clickable link within a breadcrumb item
 *
 * @example
 * ```tsx
 * // Standard anchor
 * <BreadcrumbLink href="/path">Link</BreadcrumbLink>
 *
 * // With Next.js Link
 * <BreadcrumbLink asChild>
 *   <Link href="/path">Link</Link>
 * </BreadcrumbLink>
 *
 * // With icon
 * <BreadcrumbLink href="/" className="flex items-center gap-2">
 *   <HomeIcon className="size-4" />
 *   Home
 * </BreadcrumbLink>
 * ```
 */
declare const BreadcrumbLink: {
    ({ asChild, className, ref, ...props }: BreadcrumbLinkProps & {
        ref?: React.Ref<HTMLAnchorElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/**
 * BreadcrumbPage - Current page indicator (non-interactive)
 */
declare const BreadcrumbPage: {
    ({ className, ref, ...props }: BreadcrumbPageProps & {
        ref?: React.Ref<HTMLSpanElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/**
 * BreadcrumbSeparator - Visual separator between items
 *
 * @example
 * ```tsx
 * // Default (ChevronRight icon)
 * <BreadcrumbSeparator />
 *
 * // Custom separator
 * <BreadcrumbSeparator>/</BreadcrumbSeparator>
 * <BreadcrumbSeparator>→</BreadcrumbSeparator>
 * ```
 */
declare const BreadcrumbSeparator: {
    ({ children, className, ...props }: BreadcrumbSeparatorProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/**
 * BreadcrumbEllipsis - Collapsed items indicator
 *
 * @example
 * ```tsx
 * <BreadcrumbItem>
 *   <BreadcrumbEllipsis />
 * </BreadcrumbItem>
 * ```
 */
declare const BreadcrumbEllipsis: {
    ({ className, ...props }: BreadcrumbEllipsisProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const buttonVariants: (props?: ({
    variant?: "outline" | "link" | "default" | "ink" | "destructive" | "secondary" | "ghost" | "tertiary" | "warning" | null | undefined;
    size?: "default" | "sm" | "lg" | "icon" | "tiny" | null | undefined;
    shape?: "circle" | "default" | "square" | "pill" | null | undefined;
    iconSize?: "sm" | "md" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

interface ButtonProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "prefix">, VariantProps<typeof buttonVariants> {
    /** Render as a child element (Radix Slot — polymorphic) */
    asChild?: boolean;
    /** Show loading spinner and disable interaction */
    loading?: boolean;
    /** Icon or element rendered before children */
    prefix?: React.ReactNode;
    /** Icon or element rendered after children */
    suffix?: React.ReactNode;
    /** Elevation shadow level. `true` resolves to `"md"` */
    shadow?: boolean | "sm" | "md" | "lg";
    /**
     * Icon-only box size (28 / 32 / 36px) — only takes effect with
     * `shape="square"` or `shape="circle"`. Independent of `size`: use this
     * instead of `size` when the button carries only an icon, so its
     * dimensions don't inherit the text-button height/padding/font scale.
     */
    iconSize?: "sm" | "md" | "lg";
}
declare const Button: {
    ({ className, variant, size, shape, iconSize, asChild, loading, disabled, prefix, suffix, shadow, children, ref, ...props }: ButtonProps & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
interface ButtonLinkProps extends Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, "prefix">, VariantProps<typeof buttonVariants> {
    /** Icon or element rendered before children */
    prefix?: React.ReactNode;
    /** Icon or element rendered after children */
    suffix?: React.ReactNode;
    /** Elevation shadow level. `true` resolves to `"md"` */
    shadow?: boolean | "sm" | "md" | "lg";
    /** Show loading spinner */
    loading?: boolean;
    /**
     * Icon-only box size (28 / 32 / 36px) — only takes effect with
     * `shape="square"` or `shape="circle"`. Independent of `size`: use this
     * instead of `size` when the link carries only an icon, so its
     * dimensions don't inherit the text-button height/padding/font scale.
     */
    iconSize?: "sm" | "md" | "lg";
}
declare const ButtonLink: {
    ({ className, variant, size, shape, iconSize, prefix, suffix, shadow, loading, children, ref, ...props }: ButtonLinkProps & {
        ref?: React.Ref<HTMLAnchorElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Card: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CardHeader: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CardTitle: {
    ({ className, children, ref, ...props }: React.HTMLAttributes<HTMLHeadingElement> & {
        ref?: React.Ref<HTMLHeadingElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLDivElement> {
    as?: React.ElementType;
}
declare const CardDescription: {
    ({ className, as: Tag, ref, ...props }: CardDescriptionProps & {
        ref?: React.Ref<HTMLParagraphElement | HTMLDivElement> | undefined;
    }): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    displayName: string;
};
declare const CardContent: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CardFooter: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface CheckboxProps {
    checked?: boolean;
    defaultChecked?: boolean;
    onChange?: (checked: boolean) => void;
    disabled?: boolean;
    indeterminate?: boolean;
    children?: React__default.ReactNode;
    className?: string;
    id?: string;
    name?: string;
}
interface CheckboxGroupProps {
    /** Accessible group label */
    label?: string;
    /** Layout direction */
    orientation?: "vertical" | "horizontal";
    children: React__default.ReactNode;
    className?: string;
}
declare const Checkbox: ({ checked: controlledChecked, defaultChecked, onChange, disabled, indeterminate, children, className, id, name, }: CheckboxProps) => react_jsx_runtime.JSX.Element;
declare function CheckboxGroup({ label, orientation, children, className, }: CheckboxGroupProps): react_jsx_runtime.JSX.Element;
declare namespace CheckboxGroup {
    var displayName: string;
}

type CodeBlockLanguageIconComponent = ElementType<SVGProps<SVGSVGElement> & {
    color?: string;
    size?: number | string;
    title?: string;
}>;
type CodeBlockLanguageIconElement = ReactElement<{
    className?: string;
    color?: string;
    size?: number | string;
}>;
type CodeBlockLanguageIconValue = CodeBlockLanguageIconComponent | CodeBlockLanguageIconElement | false | null;
type CodeBlockLanguageIconMap = Partial<Record<string, CodeBlockLanguageIconValue | undefined>>;
declare function normalizeCodeBlockLanguage(language?: string | null): string;
declare function resolveCodeBlockLanguageIcon(language?: string | null, options?: {
    icon?: CodeBlockLanguageIconValue | undefined;
    icons?: CodeBlockLanguageIconMap | undefined;
}): {
    color: undefined;
    icon: "symbol" | "svg" | "animate" | "animateMotion" | "animateTransform" | "defs" | "desc" | "foreignObject" | "g" | "metadata" | "mpath" | "switch" | "view" | React.ComponentClass<SVGProps<SVGSVGElement> & {
        color?: string;
        size?: number | string;
        title?: string;
    }, any> | React.FunctionComponent<SVGProps<SVGSVGElement> & {
        color?: string;
        size?: number | string;
        title?: string;
    }> | CodeBlockLanguageIconElement;
    language: string;
    label: string;
} | {
    language: string;
    color: string;
    icon: CodeBlockLanguageIconComponent;
    label: string;
} | null;
interface CodeBlockLanguageIconProps {
    className?: string;
    fallback?: ReactNode | undefined;
    icon?: CodeBlockLanguageIconValue | undefined;
    icons?: CodeBlockLanguageIconMap | undefined;
    language?: string | null | undefined;
}
declare function CodeBlockLanguageIcon({ className, fallback, icon, icons, language, }: CodeBlockLanguageIconProps): string | number | bigint | boolean | Iterable<ReactNode> | Promise<string | number | bigint | boolean | React.ReactPortal | ReactElement<unknown, string | React.JSXElementConstructor<any>> | Iterable<ReactNode> | null | undefined> | react_jsx_runtime.JSX.Element | null;

/**
 * Per-file shape (multi-file tab mode).
 *
 * Geist's `<CodeBlock>` is single-file by design — pass `children`/`filename`/
 * `language` directly on the component instead. The `files[]` array remains
 * the canonical multi-file form, which Geist does not provide.
 *
 * Geist prop-name aliases:
 *   - `filename` (single-file) ↔ `title` (per file in `files[]`)
 *   - `addedLinesNumbers` ↔ `addedLines`
 *   - `removedLinesNumbers` ↔ `removedLines`
 */
interface CodeBlockFile {
    /** File name/title displayed in tab. Geist single-file equivalent: `filename`. */
    title: string;
    /** Code content. */
    code: string;
    /** Language for syntax highlighting (auto-detected from title if omitted). */
    language?: string;
    /** Line numbers to highlight with emphasis background (1-indexed). */
    highlightedLines?: number[];
    /** Line numbers to mark as added / diff-green (1-indexed). Geist alias: `addedLinesNumbers`. */
    addedLines?: number[];
    /** Line numbers to mark as removed / diff-red (1-indexed). Geist alias: `removedLinesNumbers`. */
    removedLines?: number[];
    /** Optional per-file language logo override. Defaults from `language` / file extension. */
    icon?: CodeBlockLanguageIconValue;
}
interface CodeBlockSwitcherOption {
    /** Human-readable label displayed in the switcher. */
    label: string;
    /** Language value passed to the syntax highlighter. */
    value: string;
    /** Optional language logo override for this option. */
    icon?: CodeBlockLanguageIconValue;
}
/**
 * Controlled language-switcher (Geist API).
 * The single-file form accepts this directly; the multi-file form keeps the
 * legacy uncontrolled `showLanguageSwitcher` + `languages` for back-compat.
 */
interface CodeBlockSwitcher {
    options: ReadonlyArray<CodeBlockSwitcherOption>;
    value: string;
    onChange: (next: string) => void;
}
interface CommonCodeBlockProps {
    /** Additional CSS classes on the outer container. */
    className?: string;
    /** Maximum height of code area. */
    maxHeight?: string | number;
    /** Show line numbers. Geist default: visible. Alias of `hideLineNumbers` (inverted). */
    showLineNumbers?: boolean;
    /** Geist single-file convention — inverse of `showLineNumbers`. */
    hideLineNumbers?: boolean;
    /** Enable clickable line numbers that copy `#L{n}` anchors. */
    enableLineReferences?: boolean;
    /** Callback when a line reference is clicked. */
    onLineReference?: (lineNumber: number) => void;
    /** Language logo overrides keyed by language name or alias (`python`, `py`, `tsx`, etc.). */
    languageIcons?: CodeBlockLanguageIconMap;
    /** Show language logos in the header/tabs/switcher. Defaults to true. */
    showLanguageIcon?: boolean;
    /** Hide the header bar entirely (filename + copy) — for embedded read-only views. */
    hideHeader?: boolean;
    /** Accessible label for the code block. Pass via the standard `aria-label` attribute. */
    "aria-label"?: string;
}
/** Multi-file (legacy) shape — tabs across `files[]`. */
interface CodeBlockFilesProps extends CommonCodeBlockProps {
    /** Array of code files to display as tabs. */
    files: CodeBlockFile[];
    /** Initially active file title. */
    defaultTitle?: string;
    /** Show an uncontrolled language switcher dropdown over the built-in list. */
    showLanguageSwitcher?: boolean;
    /** Languages available in the uncontrolled switcher (defaults to built-in list). */
    languages?: string[];
    children?: never;
    filename?: never;
    language?: never;
    addedLinesNumbers?: never;
    removedLinesNumbers?: never;
    highlightedLines?: never;
    switcher?: never;
}
/** Single-file (Geist) shape — `<CodeBlock filename="..." language="...">{code}</CodeBlock>`. */
interface CodeBlockSingleProps extends CommonCodeBlockProps {
    /** Source code as a string. */
    children: string;
    /** Language for syntax highlighting. Required by Geist guidance. */
    language: string;
    /** File name shown in the header; omit for ephemeral examples. */
    filename?: string;
    /** Line numbers to highlight with emphasis background (1-indexed). */
    highlightedLines?: number[];
    /** Geist canonical name for added lines. */
    addedLinesNumbers?: number[];
    /** Geist canonical name for removed lines. */
    removedLinesNumbers?: number[];
    /** Controlled language switcher. */
    switcher?: CodeBlockSwitcher;
    /** Optional single-file language logo override. Defaults from `language`. */
    languageIcon?: CodeBlockLanguageIconValue;
    files?: never;
    defaultTitle?: never;
    showLanguageSwitcher?: never;
    languages?: never;
}
type CodeBlockProps = CodeBlockFilesProps | CodeBlockSingleProps;
/**
 * CodeBlock — syntax-highlighted code viewer with copy + (optional) tabs.
 *
 * Two calling conventions are supported:
 *
 * @example Geist single-file (canonical for prose-embedded snippets)
 * ```tsx
 * <CodeBlock filename="Table.jsx" language="jsx" aria-label="Hello world">
 *   {code}
 * </CodeBlock>
 * ```
 *
 * @example Geist with a controlled language switcher
 * ```tsx
 * <CodeBlock
 *   filename="example.tsx"
 *   language={lang}
 *   switcher={{
 *     options: [{ label: "JS", value: "js" }, { label: "TS", value: "ts" }],
 *     value: lang,
 *     onChange: setLang,
 *   }}
 * >
 *   {code}
 * </CodeBlock>
 * ```
 *
 * @example Multi-file tabs (Nebutra extension — Geist has no tabs)
 * ```tsx
 * <CodeBlock
 *   files={[
 *     { title: "theme.ts", code: themeCode },
 *     { title: "styles.css", code: cssCode },
 *   ]}
 *   defaultTitle="theme.ts"
 * />
 * ```
 *
 * Line number defaults:
 *   - Single-file (Geist) → line numbers shown by default; opt out via `hideLineNumbers`.
 *   - Multi-file (legacy) → hidden by default; opt in via `showLineNumbers`.
 */
declare function CodeBlock(props: CodeBlockProps): react_jsx_runtime.JSX.Element;

type CollapseSize = AccordionSize;
type CollapseProps = {
    /** Panel heading. Title Case, names the topic (not the action). */
    title: ReactNode;
    /** Initial expanded state (uncontrolled). */
    defaultExpanded?: boolean;
    /** Visual variant. `small` for tight density (in-cards). */
    size?: CollapseSize;
    /**
     * Keep the panel content in the DOM when closed so browser find-in-page
     * and search crawlers still hit it. @default true
     */
    keepMounted?: boolean;
    /** Disable the trigger. */
    disabled?: boolean;
    children: ReactNode;
    className?: string;
    /** Internal — auto-set by CollapseGroup. Do not pass directly. */
    __value?: string;
};
type CollapseGroupProps = {
    /** Allow multiple panels open simultaneously. @default false */
    multiple?: boolean;
    /**
     * Visual variant applied to every child Collapse that doesn't set its own.
     */
    size?: CollapseSize;
    children: ReactNode;
    className?: string;
};
declare const CollapseGroup: ({ ref, multiple, size, children, className, }: CollapseGroupProps & {
    ref?: Ref<HTMLDivElement> | undefined;
}) => react_jsx_runtime.JSX.Element;
declare const Collapse: ({ ref, title, defaultExpanded, size, keepMounted, disabled, children, className, __value, }: CollapseProps & {
    ref?: Ref<HTMLDivElement> | undefined;
}) => react_jsx_runtime.JSX.Element;

declare const Dialog: typeof Dialog$1.Root;
declare const DialogPortal: React.ForwardRefExoticComponent<Omit<_base_ui_react.DialogPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DialogTrigger: {
    ({ asChild, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof Dialog$1.Trigger> & {
        asChild?: boolean;
    } & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogClose: {
    ({ asChild, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof Dialog$1.Close> & {
        asChild?: boolean;
    } & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogOverlay: {
    ({ className, style, ref, ...props }: React.ComponentPropsWithoutRef<typeof Dialog$1.Backdrop> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogContent: {
    ({ className, children, style, ref, ...props }: React.ComponentPropsWithoutRef<typeof Dialog$1.Popup> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogHeader: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogFooter: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogTitle: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<typeof Dialog$1.Title> & {
        ref?: React.Ref<HTMLHeadingElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DialogDescription: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<typeof Dialog$1.Description> & {
        ref?: React.Ref<HTMLParagraphElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type CommandProps = React.ComponentPropsWithoutRef<typeof Command$1>;
type CommandDialogProps = React.ComponentPropsWithoutRef<typeof Dialog> & {
    children?: React.ReactNode;
};
type CommandInputProps = React.ComponentPropsWithoutRef<typeof Command$1.Input>;
type CommandListProps = React.ComponentPropsWithoutRef<typeof Command$1.List>;
type CommandEmptyProps = React.ComponentPropsWithoutRef<typeof Command$1.Empty>;
type CommandGroupProps = React.ComponentPropsWithoutRef<typeof Command$1.Group>;
type CommandSeparatorProps = React.ComponentPropsWithoutRef<typeof Command$1.Separator>;
type CommandItemProps = React.ComponentPropsWithoutRef<typeof Command$1.Item>;
interface CommandShortcutProps extends React.HTMLAttributes<HTMLSpanElement> {
    /** Render each shortcut token as a separate Kbd key. */
    keys?: ReadonlyArray<React.ReactNode>;
    /** Accessible label for compact shortcut glyphs. */
    label?: string;
}
interface CommandResultsProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Current visible result count. Pass from product state when known. */
    count?: number;
    /** Current search query, used only for the default screen-reader message. */
    search?: string;
    /** Custom screen-reader announcement. */
    label?: (count: number | undefined, search: string) => React.ReactNode;
}
/**
 * Command - A command palette / autocomplete component
 *
 * @description
 * Based on cmdk, provides a fast, composable command palette interface.
 * Can be used standalone or inside a dialog.
 *
 * @example Basic usage
 * ```tsx
 * <Command>
 *   <CommandInput placeholder="Search..." />
 *   <CommandList>
 *     <CommandEmpty>No results found.</CommandEmpty>
 *     <CommandGroup heading="Suggestions">
 *       <CommandItem>Calendar</CommandItem>
 *       <CommandItem>Search</CommandItem>
 *     </CommandGroup>
 *   </CommandList>
 * </Command>
 * ```
 *
 * @example In dialog
 * ```tsx
 * <CommandDialog open={open} onOpenChange={setOpen}>
 *   <CommandInput placeholder="Type a command..." />
 *   <CommandList>
 *     <CommandGroup heading="Actions">
 *       <CommandItem>New File</CommandItem>
 *       <CommandItem>Settings</CommandItem>
 *     </CommandGroup>
 *   </CommandList>
 * </CommandDialog>
 * ```
 */
declare const Command: {
    ({ className, ref, ...props }: CommandProps & {
        ref?: React.Ref<React.ElementRef<typeof Command$1>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string | undefined;
};
declare const CommandDialog: ({ children, ...props }: CommandDialogProps) => react_jsx_runtime.JSX.Element;
declare const CommandInput: {
    ({ className, ref, ...props }: CommandInputProps & {
        ref?: React.Ref<React.ElementRef<typeof Command$1.Input>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string | undefined;
};
declare const CommandList: {
    ({ className, ref, ...props }: CommandListProps & {
        ref?: React.Ref<React.ElementRef<typeof Command$1.List>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string | undefined;
};
declare const CommandEmpty: {
    ({ ref, ...props }: CommandEmptyProps & {
        ref?: React.Ref<React.ElementRef<typeof Command$1.Empty>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string | undefined;
};
declare const CommandGroup: {
    ({ className, ref, ...props }: CommandGroupProps & {
        ref?: React.Ref<React.ElementRef<typeof Command$1.Group>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string | undefined;
};
declare const CommandSeparator: {
    ({ className, ref, ...props }: CommandSeparatorProps & {
        ref?: React.Ref<React.ElementRef<typeof Command$1.Separator>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string | undefined;
};
declare const CommandItem: {
    ({ className, ref, ...props }: CommandItemProps & {
        ref?: React.Ref<React.ElementRef<typeof Command$1.Item>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string | undefined;
};
declare const CommandResults: {
    ({ className, count, search, label, children, ref, ...props }: CommandResultsProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const CommandShortcut: {
    ({ className, keys, label, children, ...props }: CommandShortcutProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type ComboboxSize = "small" | "medium" | "large";
type LegacyComboboxSize = "sm" | "default" | "lg";
type ComboboxValue = string | null;
type ComboboxWidth = number | string;
interface ComboboxOption {
    /** Machine value — used for selection matching */
    value: string;
    /** Human-readable label displayed in trigger and list */
    label: string;
    /** Disable this specific option */
    disabled?: boolean;
    /** Assign to a group heading key */
    group?: string;
}
interface ComboboxBaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "defaultValue" | "onChange"> {
    /** Flat list of options — the component handles grouping internally via option.group */
    options?: ComboboxOption[];
    /** Disable the entire combobox */
    disabled?: boolean;
    /** Show error styling. Prefer `errored`; `error` is kept for existing consumers. */
    errored?: boolean;
    /** @deprecated Use `errored`. */
    error?: boolean;
    /** Size variant matching Nebutra form controls. Legacy `sm`/`default`/`lg` values still map through. */
    size?: ComboboxSize | LegacyComboboxSize;
    /** Custom root width. Numbers are treated as pixels; strings can be CSS lengths. */
    width?: ComboboxWidth;
    /** Custom list max width. Numbers are treated as pixels; strings can be CSS lengths. */
    listMaxWidth?: ComboboxWidth;
    /** Accessible label shown above the trigger */
    label?: string;
    /** Whether the label is visually hidden (still accessible) */
    hideLabel?: boolean;
    /** Text shown in trigger when nothing is selected */
    placeholder?: string;
    /** Text shown when no options match the search */
    emptyMessage?: string;
    /** Placeholder inside the search input */
    searchPlaceholder?: string;
    /** Composition mode — children provide their own CommandInput/List/etc. */
    children?: React.ReactNode;
    /** Loading state for async option providers. */
    loading?: boolean;
    /** Text shown while async options are loading. */
    loadingMessage?: string;
    /** Accessible name when no visible label is rendered. */
    "aria-label"?: string;
}
interface ControlledComboboxProps extends ComboboxBaseProps {
    value: ComboboxValue;
    onChange: (value: ComboboxValue) => void;
    defaultValue?: never;
}
interface UncontrolledComboboxProps extends ComboboxBaseProps {
    value?: never;
    onChange?: (value: ComboboxValue) => void;
    defaultValue?: ComboboxValue;
}
type ComboboxProps = ControlledComboboxProps | UncontrolledComboboxProps;
interface ComboboxOptionProps {
    value: string;
    label?: string;
    disabled?: boolean;
    className?: string;
    children?: React.ReactNode;
}
type ComboboxInputProps = React.ComponentPropsWithoutRef<typeof CommandInput>;
type ComboboxEmptyProps = React.ComponentPropsWithoutRef<typeof CommandEmpty>;
type ComboboxGroupProps = React.ComponentPropsWithoutRef<typeof CommandGroup>;
interface ComboboxListProps extends CommandListProps {
    children?: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
    emptyMessage?: React.ReactNode;
    maxWidth?: ComboboxWidth | undefined;
}
declare const ComboboxOptionItem: {
    ({ ref, value, label, disabled, className, children, }: ComboboxOptionProps & {
        ref?: React.Ref<React.ElementRef<typeof CommandItem>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ComboboxInput: {
    ({ ref, ...props }: ComboboxInputProps & {
        ref?: React.Ref<React.ElementRef<typeof CommandInput>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ComboboxEmpty: {
    ({ ref, ...props }: ComboboxEmptyProps & {
        ref?: React.Ref<React.ElementRef<typeof CommandEmpty>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ComboboxGroupSub: {
    ({ ref, ...props }: ComboboxGroupProps & {
        ref?: React.Ref<React.ElementRef<typeof CommandGroup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ComboboxSeparator: {
    ({ className, ref, ...props }: CommandSeparatorProps & {
        ref?: React.Ref<React.ElementRef<React.ForwardRefExoticComponent<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
            ref?: React.Ref<HTMLDivElement>;
        } & {
            asChild?: boolean;
        }, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild"> & {
            alwaysRender?: boolean;
        } & React.RefAttributes<HTMLDivElement>>>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string | undefined;
};
declare const ComboboxList: {
    ({ children, className, emptyMessage, maxWidth, style, ref, ...props }: ComboboxListProps & {
        ref?: React.Ref<React.ElementRef<typeof CommandList>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare function ComboboxRoot({ options, value: controlledValue, onChange, defaultValue, disabled, errored, error, size, width, listMaxWidth, label, hideLabel, placeholder, emptyMessage, searchPlaceholder, loading, loadingMessage, children, className, style, "aria-label": ariaLabel, ...props }: ComboboxProps): react_jsx_runtime.JSX.Element;
declare namespace ComboboxRoot {
    var displayName: string;
}
/**
 * Combobox — Geist-style searchable select with compound API.
 *
 * @example Simple mode (options prop — fully self-contained)
 * ```tsx
 * <Combobox
 *   label="Framework"
 *   options={[
 *     { value: "next", label: "Next.js" },
 *     { value: "remix", label: "Remix" },
 *   ]}
 *   value={value}
 *   onChange={setValue}
 *   placeholder="Select framework..."
 * />
 * ```
 *
 * @example Composition mode (manual children)
 * ```tsx
 * <Combobox value={value} onChange={setValue} placeholder="Search...">
 *   <Combobox.Input placeholder="Search frameworks..." />
 *   <Combobox.List emptyMessage="Nothing here.">
 *     <Combobox.Group heading="Frontend">
 *       <Combobox.Option value="next">Next.js</Combobox.Option>
 *       <Combobox.Option value="remix">Remix</Combobox.Option>
 *     </Combobox.Group>
 *   </Combobox.List>
 * </Combobox>
 * ```
 */
declare const Combobox: typeof ComboboxRoot & {
    Input: {
        ({ ref, ...props }: ComboboxInputProps & {
            ref?: React.Ref<React.ElementRef<typeof CommandInput>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    List: {
        ({ children, className, emptyMessage, maxWidth, style, ref, ...props }: ComboboxListProps & {
            ref?: React.Ref<React.ElementRef<typeof CommandList>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Option: {
        ({ ref, value, label, disabled, className, children, }: ComboboxOptionProps & {
            ref?: React.Ref<React.ElementRef<typeof CommandItem>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Empty: {
        ({ ref, ...props }: ComboboxEmptyProps & {
            ref?: React.Ref<React.ElementRef<typeof CommandEmpty>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Group: {
        ({ ref, ...props }: ComboboxGroupProps & {
            ref?: React.Ref<React.ElementRef<typeof CommandGroup>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Separator: {
        ({ className, ref, ...props }: CommandSeparatorProps & {
            ref?: React.Ref<React.ElementRef<React.ForwardRefExoticComponent<Pick<Pick<React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement>, "key" | keyof React.HTMLAttributes<HTMLDivElement>> & {
                ref?: React.Ref<HTMLDivElement>;
            } & {
                asChild?: boolean;
            }, "key" | keyof React.HTMLAttributes<HTMLDivElement> | "asChild"> & {
                alwaysRender?: boolean;
            } & React.RefAttributes<HTMLDivElement>>>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string | undefined;
    };
};

type ContextMenuItemVariant = "default" | "destructive";
interface ContextMenuItemProps extends Pick<React.ComponentPropsWithoutRef<typeof ContextMenu$1.Item>, "disabled" | "label" | "closeOnClick"> {
    children?: React.ReactNode;
    onSelect?: React.ComponentPropsWithoutRef<typeof ContextMenu$1.Item>["onClick"];
    href?: string;
    target?: React.HTMLAttributeAnchorTarget;
    rel?: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    variant?: ContextMenuItemVariant;
    value?: string;
    className?: string;
}
interface ContextMenuCheckboxItemProps extends Pick<React.ComponentPropsWithoutRef<typeof ContextMenu$1.CheckboxItem>, "checked" | "defaultChecked" | "disabled" | "label" | "closeOnClick" | "onCheckedChange"> {
    children?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    onSelect?: React.ComponentPropsWithoutRef<typeof ContextMenu$1.CheckboxItem>["onClick"];
    value?: string;
    className?: string;
}
interface ContextMenuRadioGroupProps extends Omit<React.ComponentPropsWithoutRef<typeof ContextMenu$1.RadioGroup>, "value" | "defaultValue" | "onValueChange"> {
    value?: string;
    defaultValue?: string;
    onValueChange?: (value: string, eventDetails: Parameters<NonNullable<React.ComponentPropsWithoutRef<typeof ContextMenu$1.RadioGroup>["onValueChange"]>>[1]) => void;
}
interface ContextMenuRadioItemProps extends Pick<React.ComponentPropsWithoutRef<typeof ContextMenu$1.RadioItem>, "disabled" | "label" | "closeOnClick"> {
    children?: React.ReactNode;
    value: string;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    onSelect?: React.ComponentPropsWithoutRef<typeof ContextMenu$1.RadioItem>["onClick"];
    className?: string;
}
interface ContextMenuSubTriggerProps extends Pick<React.ComponentPropsWithoutRef<typeof ContextMenu$1.SubmenuTrigger>, "disabled" | "label" | "delay" | "closeDelay" | "openOnHover"> {
    children?: React.ReactNode;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    onSelect?: React.ComponentPropsWithoutRef<typeof ContextMenu$1.SubmenuTrigger>["onClick"];
    className?: string;
}
interface ContextMenuLabelProps {
    children?: React.ReactNode;
    className?: string;
}
interface ContextMenuSeparatorProps {
    className?: string;
}
interface ContextMenuContentProps extends React.ComponentPropsWithoutRef<typeof ContextMenu$1.Popup> {
    align?: React.ComponentProps<typeof ContextMenu$1.Positioner>["align"];
    sideOffset?: React.ComponentProps<typeof ContextMenu$1.Positioner>["sideOffset"];
    alignOffset?: React.ComponentProps<typeof ContextMenu$1.Positioner>["alignOffset"];
    side?: React.ComponentProps<typeof ContextMenu$1.Positioner>["side"];
}
declare const ContextMenuRoot: typeof ContextMenu$1.Root;
declare const ContextMenuTrigger: {
    ({ asChild, children, render, ref, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenu$1.Trigger> & {
        asChild?: boolean;
    } & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Trigger>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuContent: {
    ({ className, alignOffset, align, sideOffset, side, style, ref, ...props }: ContextMenuContentProps & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Popup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuGroup: React.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const ContextMenuLabel: {
    ({ className, ref, ...props }: ContextMenuLabelProps & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.GroupLabel>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuSeparator: {
    ({ className, ref, ...props }: ContextMenuSeparatorProps & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Separator>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuItem: {
    ({ children, onSelect, disabled, href, target, rel, prefix, suffix, variant, value, className, ref, ...props }: ContextMenuItemProps & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Item>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuCheckboxItem: {
    ({ children, prefix, suffix, onSelect, value, className, checked, defaultChecked, ref, ...props }: ContextMenuCheckboxItemProps & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.CheckboxItem>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuRadioGroup: {
    ({ onValueChange, ref, ...props }: ContextMenuRadioGroupProps & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.RadioGroup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuRadioItem: {
    ({ children, prefix, suffix, onSelect, className, value, ref, ...props }: ContextMenuRadioItemProps & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.RadioItem>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuSub: typeof ContextMenu$1.SubmenuRoot;
declare const ContextMenuSubTrigger: {
    ({ children, prefix, suffix, onSelect, className, ref, ...props }: ContextMenuSubTriggerProps & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.SubmenuTrigger>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuSubContent: {
    ({ className, alignOffset, align, sideOffset, side, style, ref, ...props }: ContextMenuContentProps & {
        ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Popup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenuShortcut: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<"span"> & {
        ref?: React.Ref<HTMLSpanElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const ContextMenu: typeof ContextMenu$1.Root & {
    Root: typeof ContextMenu$1.Root;
    Trigger: {
        ({ asChild, children, render, ref, ...props }: React.ComponentPropsWithoutRef<typeof ContextMenu$1.Trigger> & {
            asChild?: boolean;
        } & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Trigger>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Content: {
        ({ className, alignOffset, align, sideOffset, side, style, ref, ...props }: ContextMenuContentProps & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Popup>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Group: React.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
    Item: {
        ({ children, onSelect, disabled, href, target, rel, prefix, suffix, variant, value, className, ref, ...props }: ContextMenuItemProps & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Item>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    CheckboxItem: {
        ({ children, prefix, suffix, onSelect, value, className, checked, defaultChecked, ref, ...props }: ContextMenuCheckboxItemProps & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.CheckboxItem>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    RadioGroup: {
        ({ onValueChange, ref, ...props }: ContextMenuRadioGroupProps & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.RadioGroup>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    RadioItem: {
        ({ children, prefix, suffix, onSelect, className, value, ref, ...props }: ContextMenuRadioItemProps & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.RadioItem>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Label: {
        ({ className, ref, ...props }: ContextMenuLabelProps & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.GroupLabel>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Separator: {
        ({ className, ref, ...props }: ContextMenuSeparatorProps & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Separator>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Shortcut: {
        ({ className, ref, ...props }: React.ComponentPropsWithoutRef<"span"> & {
            ref?: React.Ref<HTMLSpanElement> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    Sub: typeof ContextMenu$1.SubmenuRoot;
    SubTrigger: {
        ({ children, prefix, suffix, onSelect, className, ref, ...props }: ContextMenuSubTriggerProps & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.SubmenuTrigger>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    SubContent: {
        ({ className, alignOffset, align, sideOffset, side, style, ref, ...props }: ContextMenuContentProps & {
            ref?: React.Ref<React.ElementRef<typeof ContextMenu$1.Popup>> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

type DropdownMenuProps = React.ComponentPropsWithoutRef<typeof Menu$1.Root>;
declare function DropdownMenu({ open: controlledOpen, defaultOpen, onOpenChange, children, ...props }: DropdownMenuProps): react_jsx_runtime.JSX.Element;
declare namespace DropdownMenu {
    var displayName: string;
}
type DropdownMenuTriggerProps = React.ComponentProps<typeof Menu$1.Trigger> & {
    asChild?: boolean;
};
declare const DropdownMenuTrigger: {
    ({ asChild, children, render, ref, ...props }: DropdownMenuTriggerProps & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DropdownMenuGroup: React.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuPortal: React.ForwardRefExoticComponent<Omit<_base_ui_react.ContextMenuPortalProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSub: typeof Menu$1.SubmenuRoot;
declare const DropdownMenuRadioGroup: React.NamedExoticComponent<Omit<_base_ui_react.ContextMenuRadioGroupProps, "ref"> & React.RefAttributes<HTMLDivElement>>;
declare const DropdownMenuSubTrigger: {
    ({ className, inset, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof Menu$1.SubmenuTrigger> & {
        inset?: boolean;
    } & {
        ref?: React.Ref<React.ElementRef<typeof Menu$1.SubmenuTrigger>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DropdownMenuSubContent: {
    ({ className, style, ref, ...props }: React.ComponentPropsWithoutRef<typeof Menu$1.Popup> & {
        ref?: React.Ref<React.ElementRef<typeof Menu$1.Popup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
interface DropdownMenuContentProps extends React.ComponentPropsWithoutRef<typeof Menu$1.Popup> {
    align?: React.ComponentProps<typeof Menu$1.Positioner>["align"];
    sideOffset?: React.ComponentProps<typeof Menu$1.Positioner>["sideOffset"];
    alignOffset?: React.ComponentProps<typeof Menu$1.Positioner>["alignOffset"];
    side?: React.ComponentProps<typeof Menu$1.Positioner>["side"];
}
declare const DropdownMenuContent: {
    ({ className, style, sideOffset, align, alignOffset, side, ref, ...props }: DropdownMenuContentProps & {
        ref?: React.Ref<React.ElementRef<typeof Menu$1.Popup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DropdownMenuItem: {
    ({ className, inset, ref, ...props }: React.ComponentPropsWithoutRef<typeof Menu$1.Item> & {
        inset?: boolean;
    } & {
        ref?: React.Ref<React.ElementRef<typeof Menu$1.Item>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DropdownMenuCheckboxItem: {
    ({ className, children, checked, ref, ...props }: React.ComponentPropsWithoutRef<typeof Menu$1.CheckboxItem> & {
        ref?: React.Ref<React.ElementRef<typeof Menu$1.CheckboxItem>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DropdownMenuRadioItem: {
    ({ className, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof Menu$1.RadioItem> & {
        ref?: React.Ref<React.ElementRef<typeof Menu$1.RadioItem>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/**
 * Text filter for a long menu (language wheels, workspace lists).
 *
 * Menu popups own every printable keystroke: Base UI wires `useTypeahead` on the
 * popup and calls `preventDefault()` + `stopPropagation()` for any single
 * character key, so a bare `<input>` dropped into menu content cannot be typed
 * into at all. This primitive is the supported way to put one there — it stops
 * the keydown before the popup's typeahead and list-navigation handlers see it,
 * while deliberately letting ArrowUp / ArrowDown / Enter / Tab through so the
 * keyboard path from the filter into the filtered items still works. Escape is
 * unaffected either way: dismissal is bound on `document`, not on the popup.
 */
declare const DropdownMenuFilterInput: {
    ({ className, onKeyDown, ref, ...props }: Omit<React.ComponentPropsWithoutRef<"input">, "type"> & {
        ref?: React.Ref<HTMLInputElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/** Shown in place of items when a `DropdownMenuFilterInput` matches nothing. */
declare const DropdownMenuEmpty: {
    ({ className, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DropdownMenuLabel: {
    ({ className, inset, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        inset?: boolean;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DropdownMenuSeparator: {
    ({ className, orientation, ref, ...props }: React.ComponentPropsWithoutRef<typeof Menu$1.Separator> & {
        ref?: React.Ref<React.ElementRef<typeof Menu$1.Separator>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const DropdownMenuShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface CopyButtonProps extends Omit<React.ComponentProps<typeof Button>, "onClick" | "onCopy" | "prefix" | "suffix"> {
    /** Value to copy to clipboard */
    value: string;
    /** Button label (if not icon-only) */
    label?: string;
    /**
     * Visible label while the copied state is held. Only rendered when `label` is
     * set — an icon-only button has nowhere to put it and uses the check instead.
     *
     * Pass `false` when the label *is* the payload (a token name, a URL): swapping
     * it for "Copied" would hide the thing the user was reading, and the check
     * carries the confirmation on its own.
     */
    copiedLabel?: string | false;
    /** Success message for toast, and the text announced to screen readers */
    successMessage?: string;
    /** Tooltip text — also the accessible name of an icon-only button */
    tooltipText?: string;
    /** Icon type */
    iconType?: "copy" | "link" | "code" | "hash";
    /**
     * Which side of the label the icon sits on. `trailing` is for full-width rows
     * where the value is the label and the affordance belongs at the far edge.
     */
    iconPosition?: "leading" | "trailing";
    /** Show toast on copy */
    showToast?: boolean;
    /** How long the copied state is held, in ms */
    timeout?: number;
    /** Callback after successful copy */
    onCopied?: (value: string) => void;
}
declare function CopyButton({ value, label, copiedLabel, successMessage, tooltipText, iconType, iconPosition, showToast, timeout, onCopied, variant, size, className, ...props }: CopyButtonProps): react_jsx_runtime.JSX.Element;
/**
 * Copy ID button - for copying UUIDs, IDs
 */
declare function CopyIdButton({ id, className, ...props }: {
    id: string;
    className?: string;
} & Omit<CopyButtonProps, "value" | "iconType" | "tooltipText">): react_jsx_runtime.JSX.Element;
/**
 * Copy link button - for copying URLs
 */
declare function CopyLinkButton({ url, className, ...props }: {
    url: string;
    className?: string;
} & Omit<CopyButtonProps, "value" | "iconType" | "tooltipText">): react_jsx_runtime.JSX.Element;
/**
 * Copy code button - for copying code snippets
 */
declare function CopyCodeButton({ code, className, ...props }: {
    code: string;
    className?: string;
} & Omit<CopyButtonProps, "value" | "iconType" | "tooltipText">): react_jsx_runtime.JSX.Element;
interface CopyMenuItemProps extends Omit<React.ComponentProps<typeof DropdownMenuItem>, "onClick" | "onCopy"> {
    /** Value to copy to clipboard */
    value: string;
    /** Visible item text */
    children: React.ReactNode;
    /** Success message for toast, and the text announced to screen readers */
    successMessage?: string;
    /** Show toast on copy */
    showToast?: boolean;
    /** How long the copied state is held, in ms */
    timeout?: number;
    /**
     * Close the menu on copy. Defaults to `false`: a menu that closes on select
     * discards its own copied state before it can be seen, and these menus
     * typically offer several values of the same thing (hex, Tailwind class, CSS
     * variable) that a user wants to try in turn.
     */
    closeOnCopy?: boolean;
    /** Callback after successful copy */
    onCopied?: (value: string) => void;
}
/**
 * Copy-to-clipboard as a menu item rather than a button.
 *
 * This is a distinct component and not a `CopyButton` variant on purpose: a
 * `<button>` dropped inside `DropdownMenuContent` is invisible to the menu's
 * keyboard machinery — no arrow-key highlight, no type-ahead, no roving
 * tabindex. Composing over `DropdownMenuItem` keeps all of that.
 */
declare function CopyMenuItem({ value, children, successMessage, showToast, timeout, closeOnCopy, onCopied, className, ...props }: CopyMenuItemProps): react_jsx_runtime.JSX.Element;
/**
 * Copyable text field - displays value with copy button
 */
interface CopyableFieldProps {
    value: string;
    label?: string;
    truncate?: boolean;
    className?: string;
}
declare function CopyableField({ value, label, truncate, className }: CopyableFieldProps): react_jsx_runtime.JSX.Element;
interface UseCopyToClipboardOptions {
    successMessage?: string;
    showToast?: boolean;
    timeout?: number;
}
interface UseCopyToClipboardReturn {
    copied: boolean;
    copy: (value: string) => Promise<boolean>;
}
declare function useCopyToClipboard(options?: UseCopyToClipboardOptions): UseCopyToClipboardReturn;

interface DescriptionProps {
    /** Title Case noun naming the field (`Last Deployed`, `Region`). */
    title: string;
    /**
     * Value associated with the title. Sentence case unless the value is a
     * literal identifier, ID, or timestamp that should be preserved verbatim.
     * Accepts ReactNode so links and inline timestamps render correctly.
     */
    content: ReactNode;
    /** Optional one-sentence definition shown via a hover/focus tooltip on the info glyph. Sentence case, ends with a period. */
    tooltip?: ReactNode;
    className?: string;
}
/**
 * @example
 * ```tsx
 * <Description
 *   title="Section Title"
 *   content="Data about this section."
 *   tooltip="Additional context about what this section refers to."
 * />
 * ```
 */
declare const Description: ({ ref, title, content, tooltip, className, }: DescriptionProps & {
    ref?: Ref<HTMLDListElement> | undefined;
}) => react_jsx_runtime.JSX.Element;

type DrawerDirection = "top" | "bottom" | "left" | "right";
type DrawerHeight = number | string;
type DrawerProps = React.ComponentProps<typeof Drawer$1.Root> & {
    /** Controlled open state alias used by Geist-compatible examples. Prefer `open` for new Radix-style code. */
    show?: boolean;
    /** Called when the drawer is dismissed by escape, outside press, swipe, or close control. */
    onDismiss?: () => void;
    /** Bottom sheet height. Numbers resolve to px. */
    height?: DrawerHeight;
    /** Alias for `height` when the content needs a capped frame. */
    customHeight?: DrawerHeight;
    /** Direction the drawer slides from. Use bottom for Drawer; use Sheet for lateral desktop panels. */
    direction?: DrawerDirection;
};
type DrawerTriggerProps = React.ComponentProps<typeof Drawer$1.Trigger>;
type DrawerPortalProps = React.ComponentProps<typeof Drawer$1.Portal>;
type DrawerCloseProps = React.ComponentProps<typeof Drawer$1.Close>;
type DrawerOverlayProps = React.ComponentProps<typeof Drawer$1.Overlay>;
type DrawerContentProps = React.ComponentProps<typeof Drawer$1.Content> & {
    /** Overrides root height for this content. Numbers resolve to px. */
    height?: DrawerHeight;
    /** Keep body scroll inside the drawer frame rather than the page behind it. */
    verticalScroll?: boolean;
    /** Show the drag handle on bottom drawers. */
    showHandle?: boolean;
};
type DrawerHeaderProps = React.ComponentProps<"div">;
type DrawerBodyProps = React.ComponentProps<"div">;
type DrawerFooterProps = React.ComponentProps<"div">;
type DrawerTitleProps = React.ComponentProps<typeof Drawer$1.Title>;
type DrawerDescriptionProps = React.ComponentProps<typeof Drawer$1.Description>;
/**
 * Drawer - Mobile bottom sheet
 *
 * @description
 * A focused mobile bottom sheet built on Vaul. Use Modal for blocking desktop
 * flows and Sheet for lateral panels.
 *
 * @example Basic usage
 * ```tsx
 * <Drawer>
 *   <DrawerTrigger asChild>
 *     <Button>Open Drawer</Button>
 *   </DrawerTrigger>
 *   <DrawerContent>
 *     <DrawerHeader>
 *       <DrawerTitle>Title</DrawerTitle>
 *       <DrawerDescription>Description</DrawerDescription>
 *     </DrawerHeader>
 *     <DrawerBody>Content here</DrawerBody>
 *     <DrawerFooter>
 *       <DrawerClose asChild>
 *         <Button variant="outline">Cancel</Button>
 *       </DrawerClose>
 *       <Button>Save</Button>
 *     </DrawerFooter>
 *   </DrawerContent>
 * </Drawer>
 * ```
 *
 * @example Controlled
 * ```tsx
 * const [open, setOpen] = useState(false);
 * <Drawer open={open} onOpenChange={setOpen}>...</Drawer>
 * ```
 */
declare function Drawer({ show, onDismiss, height, customHeight, direction, open, onOpenChange, modal, shouldScaleBackground, ...props }: DrawerProps): react_jsx_runtime.JSX.Element;
declare function DrawerTrigger({ ...props }: DrawerTriggerProps): react_jsx_runtime.JSX.Element;
declare function DrawerPortal({ ...props }: DrawerPortalProps): react_jsx_runtime.JSX.Element;
declare function DrawerClose({ ...props }: DrawerCloseProps): react_jsx_runtime.JSX.Element;
declare function DrawerOverlay({ className, ...props }: DrawerOverlayProps): react_jsx_runtime.JSX.Element;
declare function DrawerContent({ className, children, height, verticalScroll, showHandle, style, ...props }: DrawerContentProps): react_jsx_runtime.JSX.Element;
declare function DrawerHeader({ className, ...props }: DrawerHeaderProps): react_jsx_runtime.JSX.Element;
declare function DrawerBody({ className, ...props }: DrawerBodyProps): react_jsx_runtime.JSX.Element;
declare function DrawerFooter({ className, ...props }: DrawerFooterProps): react_jsx_runtime.JSX.Element;
declare function DrawerTitle({ className, ...props }: DrawerTitleProps): react_jsx_runtime.JSX.Element;
declare function DrawerDescription({ className, ...props }: DrawerDescriptionProps): react_jsx_runtime.JSX.Element;

type EmptyStateVariant = "blank-slate" | "informational" | "educational" | "guide" | "no-results" | "cleared" | "permission" | "error";
type EmptyStateSize = "sm" | "md" | "lg";
type EmptyStateAlign = "center" | "start";
interface EmptyStateRootProps extends Omit<React.HTMLAttributes<HTMLElement>, "title" | "children"> {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    /** Preferred CTA slot. Use real Button/Link elements. */
    children?: React.ReactNode;
    /** Compatibility alias for the primary CTA. Prefer children for new code. */
    action?: React.ReactNode;
    /** Compatibility alias for the secondary CTA. Prefer children for new code. */
    link?: React.ReactNode;
    variant?: EmptyStateVariant;
    size?: EmptyStateSize;
    align?: EmptyStateAlign;
    /** Use for empty states that appear after async filtering changes. */
    live?: boolean;
}
interface EmptyStateIconProps extends React.HTMLAttributes<HTMLDivElement> {
    icon: React.ReactNode;
}
declare const EmptyStateIcon: {
    ({ className, icon, ref, ...props }: EmptyStateIconProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const EmptyStateRoot: {
    ({ className, title, description, icon, children, action, link, style, variant, size, align, live, ref, ...props }: EmptyStateRootProps & {
        ref?: React.Ref<HTMLElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const EmptyState: {
    readonly Root: {
        ({ className, title, description, icon, children, action, link, style, variant, size, align, live, ref, ...props }: EmptyStateRootProps & {
            ref?: React.Ref<HTMLElement> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
    readonly Icon: {
        ({ className, icon, ref, ...props }: EmptyStateIconProps & {
            ref?: React.Ref<HTMLDivElement> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

interface ErrorObject {
    /** Error description */
    message: string;
    /** Optional title for block error surfaces */
    title?: string;
    /** Label for the action link */
    action?: string;
    /** href for the action link */
    link?: string;
    /** Stable request, trace, deployment, or run identifier */
    id?: string;
    /** Short machine-readable code */
    code?: string;
}
interface ErrorMessageProps {
    /** Inline error text (alternative to `error` prop) */
    children?: React.ReactNode;
    /** Optional label prefix shown before the message (e.g. "Email Error") */
    label?: string;
    /** Font size variant */
    size?: "small" | "medium" | "large";
    /** Structured error object — `message` + optional `action`/`link` */
    error?: ErrorObject;
    /** Additional CSS classes */
    className?: string;
}
type ErrorSize = "small" | "medium" | "large";
type LinkRecoveryAction = {
    action: string;
    link: string;
    onAction?: never;
    actionLoading?: never;
};
type ButtonRecoveryAction = {
    action: string;
    onAction: () => void;
    link?: never;
    actionLoading?: boolean;
};
type NoRecoveryAction = {
    action?: undefined;
    link?: undefined;
    onAction?: undefined;
    actionLoading?: never;
};
type ErrorRecoveryAction = LinkRecoveryAction | ButtonRecoveryAction | NoRecoveryAction;
type ErrorProps = Omit<React.HTMLAttributes<HTMLDivElement>, "title"> & ErrorRecoveryAction & {
    /** Error title. Name the resource that failed. */
    title?: string;
    /** Optional compact label above the message, e.g. "Request Error". */
    label?: string;
    /** Hide the label while preserving the message and title. */
    showLabel?: boolean;
    /** Message content. Alternative to `error.message`. */
    children?: React.ReactNode;
    /** Visual density. */
    size?: ErrorSize;
    /** Structured error data. */
    error?: ErrorObject;
    /** Stable request, trace, deployment, or run identifier. */
    errorId?: string;
    /** Label used before the stable identifier. */
    errorIdLabel?: string;
    /** Async announcement mode. Use assertive only for blocking failures. */
    live?: "polite" | "assertive" | "off";
};
/**
 * ErrorMessage — inline error indicator with icon, optional label, and action link.
 *
 * @example
 * // Simple inline error
 * <ErrorMessage>This email is already in use.</ErrorMessage>
 *
 * @example
 * // With label prefix
 * <ErrorMessage label="Email Error">This email is already in use.</ErrorMessage>
 *
 * @example
 * // Structured with action link
 * <ErrorMessage error={{ message: "The request failed.", action: "Contact Us", link: "/contact" }} />
 */
declare const ErrorMessage: {
    ({ ref, children, label, size, error, className, }: ErrorMessageProps & {
        ref?: React.Ref<HTMLSpanElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
/**
 * Error — block-level error surface for failed sections, panels, and route boundaries.
 *
 * Use `ErrorMessage` only for legacy inline text. Field validation should prefer
 * the owning form/input primitive.
 */
declare const ErrorSurface: {
    ({ children, label, showLabel, title, size, error, errorId, errorIdLabel, live, action, link, onAction, actionLoading, className, role, ref, ...props }: ErrorProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * Textarea Component Tokens — Layer 3
 *
 * Mirrors the Input focus and radius contract while preserving textarea-specific
 * vertical sizing.
 */
type TextareaSize = "sm" | "md" | "lg";

type NativeTextareaProps = Omit<React.TextareaHTMLAttributes<HTMLTextAreaElement>, "size">;
type LabelledTextareaProps = {
    /** Visible label. Type-level nudge keeps labelled fields explicitly addressable. */
    label: string;
    id: string;
};
type UnlabelledTextareaProps = {
    label?: undefined;
    id?: string;
};
type TextareaOwnProps = {
    /** Visual size variant. Uses the same compact form scale as Input. */
    size?: TextareaSize;
    /** Helper text associated through aria-describedby. Replaced by string errors. */
    description?: string;
    /** Boolean marks invalid state; string also renders an inline field error. */
    error?: string | boolean;
    /** Value-first change callback for consumers that do not need the native event. */
    onValueChange?: (value: string) => void;
    /** Applied to the label/helper/error field wrapper. */
    fieldClassName?: string;
};
type TextareaProps = NativeTextareaProps & TextareaOwnProps & (LabelledTextareaProps | UnlabelledTextareaProps);
declare const Textarea: {
    ({ className, style, size, label, description, error, fieldClassName, id, onChange, onValueChange, "aria-describedby": ariaDescribedBy, "aria-invalid": ariaInvalid, ref, ...props }: TextareaProps & {
        ref?: React.Ref<HTMLTextAreaElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface FieldProps extends React.HTMLAttributes<HTMLDivElement> {
    label: string;
    description?: string;
    error?: string;
    htmlFor?: string;
}
declare const Field: {
    ({ className, label, description, error, htmlFor, children, ref, ...props }: FieldProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface SlotProps extends React.HTMLAttributes<HTMLElement> {
    children?: React.ReactNode;
}
/**
 * Custom Slot implementation to remove @radix-ui/react-slot dependency.
 * Merges props from the Slottable parent onto the immediate child element.
 */
declare const Slot: React.ForwardRefExoticComponent<SlotProps & React.RefAttributes<HTMLElement>>;

declare const labelVariants: (props?: class_variance_authority_types.ClassProp | undefined) => string;
interface LabelProps extends React.LabelHTMLAttributes<HTMLLabelElement>, VariantProps<typeof labelVariants> {
}
/**
 * Label - Accessible form label component
 *
 * @description
 * A label component built as a native HTML label element.
 * Automatically handles accessibility attributes and peer styling.
 *
 * @example Basic usage
 * ```tsx
 * <Label htmlFor="email">Email</Label>
 * <Input id="email" type="email" />
 * ```
 *
 * @example With peer styling (disabled state)
 * ```tsx
 * <div className="flex items-center gap-2">
 *   <Checkbox id="terms" disabled />
 *   <Label htmlFor="terms">Accept terms</Label>
 * </div>
 * ```
 *
 * @example Required field indicator
 * ```tsx
 * <Label htmlFor="name">
 *   Name <span className="text-destructive">*</span>
 * </Label>
 * ```
 */
declare const Label: {
    ({ className, ref, ...props }: LabelProps & {
        ref?: React.Ref<HTMLLabelElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Form: <TFieldValues extends FieldValues, TContext = any, TTransformedValues = TFieldValues>(props: react_hook_form.FormProviderProps<TFieldValues, TContext, TTransformedValues>) => React.JSX.Element;
declare const FormField: <TFieldValues extends FieldValues = FieldValues, TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>>({ ...props }: ControllerProps<TFieldValues, TName>) => react_jsx_runtime.JSX.Element;
declare const useFormField: () => {
    invalid: boolean;
    isDirty: boolean;
    isTouched: boolean;
    isValidating: boolean;
    error?: react_hook_form.FieldError;
    id: string;
    name: string;
    formItemId: string;
    formDescriptionId: string;
    formMessageId: string;
};
declare const FormItem: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const FormLabel: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<typeof Label> & {
        ref?: React.Ref<React.ElementRef<typeof Label>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const FormControl: {
    ({ ref, ...props }: React.ComponentPropsWithoutRef<typeof Slot> & {
        ref?: React.Ref<React.ElementRef<typeof Slot>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const FormDescription: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLParagraphElement> & {
        ref?: React.Ref<HTMLParagraphElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const FormMessage: {
    ({ className, children, ref, ...props }: React.HTMLAttributes<HTMLParagraphElement> & {
        ref?: React.Ref<HTMLParagraphElement> | undefined;
    }): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};

declare const gaugeSizes: {
    readonly tiny: 20;
    readonly small: 32;
    readonly medium: 64;
    readonly large: 128;
};
type GaugeSize = keyof typeof gaugeSizes;
type GaugeArcPriority = "default" | "equal";
type LegacyGaugeArcPriority = "value" | "secondary";
interface GaugeColorStop {
    /** Value threshold, 0-100. The stop applies when value >= this threshold. */
    value: number;
    /** CSS color string. Prefer semantic tokens or component CSS variables. */
    color: string;
}
type GaugeColorMap = Record<string, string> & {
    /** Explicit primary arc color override. */
    primary?: string;
    /** Explicit secondary arc color override. */
    secondary?: string;
};
interface GaugeProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "aria-busy" | "aria-valuemax" | "aria-valuemin" | "aria-valuenow" | "children" | "color" | "role"> {
    /** Current value, clamped to 0-100. */
    value?: number;
    /** Preset size or legacy pixel diameter. */
    size?: GaugeSize | number;
    /** Custom threshold colors. Prefer semantic token strings. */
    colors?: GaugeColorMap | GaugeColorStop[];
    /** Legacy track color override. Prefer `colors.secondary`. */
    secondaryColor?: string;
    /** Show the numeric value in the center. */
    showValue?: boolean;
    /** Legacy alias for `showValue`. A ReactNode is treated as center overlay content. */
    label?: boolean | React.ReactNode;
    /** Center overlay content, reserved for icon overlays. */
    children?: React.ReactNode;
    /** Arc geometry mode. Use `equal` for true ratios. */
    arcPriority?: GaugeArcPriority | LegacyGaugeArcPriority;
    /** Loading state when the value is unknown. */
    indeterminate?: boolean;
    /** Accessible name when not using aria-labelledby. */
    "aria-label"?: string;
    /** ID of adjacent label text. */
    "aria-labelledby"?: string;
}
/**
 * Gauge — circular ratio visual for fixed 0-100 comparisons.
 *
 * Use Progress for determinate task progress. Pair Gauge with adjacent text and
 * connect it via `aria-labelledby` whenever the visual is not self-evident.
 */
declare const Gauge: {
    ({ value, size, colors, secondaryColor, showValue, label, children, arcPriority, indeterminate, className, style, "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, ref, ...props }: GaugeProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const HoverCardContent: {
    ({ className, align, sideOffset, side, style, ref, ...props }: React.ComponentPropsWithoutRef<typeof Popover$1.Popup> & {
        align?: "start" | "center" | "end";
        sideOffset?: number;
        side?: "top" | "right" | "bottom" | "left";
    } & {
        ref?: React.Ref<React.ElementRef<typeof Popover$1.Popup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const HoverCardTrigger: {
    ({ asChild, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof Popover$1.Trigger> & {
        asChild?: boolean;
    } & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const HoverCard: {
    ({ openDelay, closeDelay, children, ...props }: React.ComponentPropsWithoutRef<typeof Popover$1.Root> & {
        openDelay?: number;
        closeDelay?: number;
        children: React.ReactNode;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * Input Component Tokens — Layer 3
 *
 * Component-level sizing and interaction constants. Input consumes semantic
 * colors at runtime and only derives dimensions from primitive tokens here.
 */
type InputSize = "sm" | "md" | "lg";

declare const inputVariants: (props?: ({
    size?: "sm" | "md" | "lg" | null | undefined;
    affix?: "prefix" | "none" | "both" | "suffix" | null | undefined;
    tone?: "bordered" | "bare" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
type NativeInputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "prefix" | "size">;
type LabelledInputProps = {
    /** Visible label. Requires `id` so the label and input remain associated. */
    label: string;
    id: string;
};
type UnlabelledInputProps = {
    label?: undefined;
    id?: string;
};
type InputOwnProps = {
    /** Visual size variant. Uses Nebutra's compact form row scale. */
    size?: InputSize;
    /** Non-interactive adornment rendered inside the left edge. */
    prefix?: React.ReactNode;
    /** Non-interactive adornment rendered inside the right edge. Hidden by clear/shortcut controls. */
    suffix?: React.ReactNode;
    /** Show a clear button when the field has a value. */
    clearable?: boolean;
    /** Called after the clear button or Escape clears the field. */
    onClear?: () => void;
    /** Value-first change callback for consumers that do not need the native event. */
    onValueChange?: (value: string) => void;
    /** Visual shortcut hint, e.g. "⌘K". Dirty search fields show Esc instead. */
    shortcut?: string;
    /** Show an async spinner on the right side without disabling the field. */
    loading?: boolean;
    /** Adds a tokenized password visibility control when `type="password"`. */
    revealable?: boolean;
    /** Accessible label for the password visibility control when the value is hidden. */
    revealLabel?: string;
    /** Accessible label for the password visibility control when the value is visible. */
    hideLabel?: string;
    /** Clear the current value when Escape is pressed. Defaults to true for search inputs. */
    clearOnEscape?: boolean;
    /** Helper text associated with the input through aria-describedby. */
    description?: string;
    /** Boolean marks invalid state; string also renders an inline error message. */
    error?: string | boolean;
    /** Applied to the control wrapper when affixes or control buttons are rendered. */
    wrapperClassName?: string;
    /** Applied to the label/helper/error field wrapper. */
    fieldClassName?: string;
};
type InputProps = NativeInputProps & InputOwnProps & (LabelledInputProps | UnlabelledInputProps) & VariantProps<typeof inputVariants>;
declare const Input: {
    ({ ref: forwardedRef, ...props }: InputProps & {
        ref?: React.Ref<HTMLInputElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface InputOTPProps {
    /** Maximum number of characters */
    maxLength: number;
    /** Current value */
    value?: string;
    /** Change handler */
    onChange?: (newValue: string) => void;
    /** Complete handler */
    onComplete?: (value: string) => void;
    /** Render function for slots */
    render?: (props: RenderProps) => React.ReactNode;
    /** Children (alternative to render) */
    children?: React.ReactNode;
    /** Container class name */
    containerClassName?: string;
    /** Input class name */
    className?: string;
    /** Input pattern validation */
    pattern?: string;
    /** Text alignment */
    textAlign?: "left" | "center" | "right";
    /** Disabled state */
    disabled?: boolean;
}
declare const InputOTP: {
    ({ className, containerClassName, children, render, ref, ...props }: InputOTPProps & {
        ref?: React.Ref<HTMLInputElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type InputOTPGroupProps = React.ComponentPropsWithoutRef<"div">;
declare const InputOTPGroup: {
    ({ className, ref, ...props }: InputOTPGroupProps & {
        ref?: React.Ref<React.ElementRef<"div">> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
interface InputOTPSlotProps extends React.ComponentPropsWithoutRef<"div"> {
    index: number;
}
declare const InputOTPSlot: {
    ({ index, className, ref, ...props }: InputOTPSlotProps & {
        ref?: React.Ref<React.ElementRef<"div">> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type InputOTPSeparatorProps = React.ComponentPropsWithoutRef<"div">;
declare const InputOTPSeparator: {
    ({ ref, ...props }: InputOTPSeparatorProps & {
        ref?: React.Ref<React.ElementRef<"div">> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface KbdProps extends React.HTMLAttributes<HTMLElement> {
    /** Command on macOS/iOS; Ctrl on Windows/Linux. */
    meta?: boolean;
    /** Shift modifier. */
    shift?: boolean;
    /** Option on macOS/iOS; Alt on Windows/Linux. */
    alt?: boolean;
    /** Control modifier. */
    ctrl?: boolean;
    /** Smaller size for dense surfaces. */
    small?: boolean;
    /** One key, digit, punctuation mark, or named key. */
    children?: React.ReactNode;
    className?: string;
}
declare const Kbd: {
    ({ meta, shift, alt, ctrl, small, children, className, "aria-label": ariaLabel, ref, ...props }: KbdProps & {
        ref?: React.Ref<HTMLElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

/**
 * Layout Primitives
 *
 * Core layout utilities and patterns.
 */
/**
 * Common flex layouts
 */
declare const flexLayouts: {
    readonly row: {
        readonly display: "flex";
        readonly flexDirection: "row";
    };
    readonly rowCenter: {
        readonly display: "flex";
        readonly flexDirection: "row";
        readonly alignItems: "center";
    };
    readonly rowBetween: {
        readonly display: "flex";
        readonly flexDirection: "row";
        readonly justifyContent: "space-between";
        readonly alignItems: "center";
    };
    readonly column: {
        readonly display: "flex";
        readonly flexDirection: "column";
    };
    readonly columnCenter: {
        readonly display: "flex";
        readonly flexDirection: "column";
        readonly alignItems: "center";
    };
    readonly center: {
        readonly display: "flex";
        readonly alignItems: "center";
        readonly justifyContent: "center";
    };
};
/**
 * Grid layout helpers
 */
declare const gridLayouts: {
    readonly auto: {
        readonly display: "grid";
        readonly gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))";
        readonly gap: 3;
    };
    readonly two: {
        readonly display: "grid";
        readonly gridTemplateColumns: ["1fr", "1fr 1fr"];
        readonly gap: 3;
    };
    readonly three: {
        readonly display: "grid";
        readonly gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr"];
        readonly gap: 3;
    };
    readonly four: {
        readonly display: "grid";
        readonly gridTemplateColumns: ["1fr", "1fr 1fr", "1fr 1fr 1fr 1fr"];
        readonly gap: 3;
    };
};
/**
 * Container max-widths (matches Primer breakpoints)
 */
declare const containerWidths: {
    readonly sm: 544;
    readonly md: 768;
    readonly lg: 1012;
    readonly xl: 1280;
};
/**
 * Z-index scale for layering
 */
declare const zIndex: {
    readonly base: 0;
    readonly dropdown: 1000;
    readonly sticky: 1020;
    readonly fixed: 1030;
    readonly modalBackdrop: 1040;
    readonly modal: 1050;
    readonly popover: 1060;
    readonly tooltip: 1070;
};

interface LoadingDotsProps {
    ref?: React.Ref<HTMLSpanElement> | undefined;
    /** Diameter of each dot in pixels. Default: 6 */
    size?: number;
    /** Optional content rendered before the dots (e.g. a label). */
    children?: React.ReactNode;
    className?: string;
}
declare function LoadingDots({ ref, size, children, className }: LoadingDotsProps): react_jsx_runtime.JSX.Element;

type MenuPosition = "bottom-start" | "bottom-end" | "top-start" | "top-end" | "right-start" | "right-end" | "left-start" | "left-end";
interface MenuContainerProps {
    /** Anchor + alignment of the popup. @default "bottom-start" */
    position?: MenuPosition;
    children: ReactNode;
}
declare function MenuContainer({ position, children }: MenuContainerProps): react_jsx_runtime.JSX.Element;
interface MenuButtonProps extends Omit<ButtonProps, "variant" | "size" | "shape" | "type"> {
    /** Append a chevron-down glyph after the label. */
    showChevron?: boolean;
    /** Geist Button "type" alias. */
    type?: "primary" | "secondary" | "tertiary" | "ghost" | "warning" | "destructive";
    /** "unstyled" strips chrome so an arbitrary trigger (avatar, dots) takes over. */
    variant?: "unstyled";
    /** Geist sizes. */
    size?: "small" | "medium" | "large" | "tiny";
    shape?: "default" | "square" | "circle";
    /** Trigger contains only an SVG; ensure an aria-label is set. */
    svgOnly?: boolean;
}
declare const MenuButton: ({ showChevron, type, variant, size, shape, svgOnly, children, className, onClick, prefix, suffix, loading, "aria-label": ariaLabel, ref, ...rest }: MenuButtonProps & {
    ref?: Ref<HTMLButtonElement> | undefined;
}) => react_jsx_runtime.JSX.Element;
interface MenuProps extends Omit<DropdownMenuContentProps, "side" | "align"> {
    /** Fixed pixel width for the popup; otherwise it sizes to content. */
    width?: number | string;
}
declare const Menu: ({ width, style, className, children, ref, ...rest }: MenuProps & {
    ref?: Ref<HTMLDivElement> | undefined;
}) => react_jsx_runtime.JSX.Element;
type MenuItemKind = "default" | "error";
interface MenuItemProps {
    onClick?: () => void;
    /** Render as an anchor; mutually exclusive with onClick semantically. */
    href?: string;
    disabled?: boolean;
    prefix?: ReactNode;
    suffix?: ReactNode;
    /** `error` renders the row in destructive red — for delete actions. */
    type?: MenuItemKind;
    /**
     * When `href` is present and you need framework-specific routing
     * (next/link, react-router), pass `as={Link}` instead of `<a>`.
     */
    as?: "a" | (() => ReactElement);
    className?: string;
    children: ReactNode;
}
declare const MenuItem: ({ ref, onClick, href, disabled, prefix, suffix, type, className, children, }: MenuItemProps & {
    ref?: Ref<HTMLDivElement> | undefined;
}) => react_jsx_runtime.JSX.Element;
interface MenuLinkProps extends Omit<MenuItemProps, "onClick" | "href"> {
    href: string;
}
declare const MenuLink: ({ ref, ...props }: MenuLinkProps & {
    ref?: Ref<HTMLDivElement> | undefined;
}) => react_jsx_runtime.JSX.Element;
interface MenuItemLockedProps extends Omit<MenuItemProps, "disabled" | "type" | "suffix"> {
    /** Wire an onClick anyway — useful for analytics on attempted activation. */
    onClick?: () => void;
}
declare const MenuItemLocked: ({ children, ref, ...rest }: MenuItemLockedProps & {
    ref?: Ref<HTMLDivElement> | undefined;
}) => react_jsx_runtime.JSX.Element;
interface MenuSectionProps extends Omit<HTMLAttributes<HTMLDivElement>, "children" | "title"> {
    /** Title Case, 1–2 words (Workspace, Recent Projects). */
    title?: ReactNode;
    /** Render a divider above the section. @default true after the first */
    showDivider?: boolean;
    children: ReactNode;
}
declare const MenuSection: ({ title, showDivider, children, className, ref, ...rest }: MenuSectionProps & {
    ref?: Ref<HTMLDivElement> | undefined;
}) => react_jsx_runtime.JSX.Element;

declare const Menubar: {
    ({ className, children, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarMenu: ({ children }: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const MenubarPortal: ({ children }: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const MenubarGroup: ({ children }: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const MenubarTrigger: {
    ({ className, type, ref, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarSub: ({ children }: {
    children: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const MenubarSubTrigger: {
    ({ className, inset, children, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        inset?: boolean;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarSubContent: {
    ({ className, style, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};
declare const MenubarContent: {
    ({ className, align: _align, alignOffset: _alignOffset, sideOffset: _sideOffset, style, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        align?: "start" | "center" | "end";
        alignOffset?: number;
        sideOffset?: number;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};
declare const MenubarItem: {
    ({ className, inset, disabled, asChild, children, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        inset?: boolean;
        disabled?: boolean;
        asChild?: boolean;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarCheckboxItem: {
    ({ className, children, checked, disabled, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        checked?: boolean;
        disabled?: boolean;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarRadioItem: {
    ({ className, children, checked, disabled, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        checked?: boolean;
        value?: string;
        disabled?: boolean;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarRadioGroup: ({ children, className, ...props }: React.FieldsetHTMLAttributes<HTMLFieldSetElement>) => react_jsx_runtime.JSX.Element;
declare const MenubarLabel: {
    ({ className, inset, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        inset?: boolean;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarSeparator: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const MenubarShortcut: {
    ({ className, ...props }: React.HTMLAttributes<HTMLSpanElement>): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface ModalRootProps {
    /** Open state — controlled. */
    active: boolean;
    /** Called when the user clicks the backdrop (or presses Escape). */
    onClickOutside?: () => void;
    /**
     * Sticky mode: body scrolls within a max-height; actions stay pinned at
     * the bottom. @default false
     */
    sticky?: boolean;
    /**
     * Focus this element after the modal opens. Default focus is the first
     * focusable element. For destructive modals, point this at Cancel.
     */
    initialFocusRef?: RefObject<HTMLElement | null>;
    children: ReactNode;
    className?: string;
}
declare function ModalRoot({ active, onClickOutside, sticky, initialFocusRef, children, className, }: ModalRootProps): react_jsx_runtime.JSX.Element;
type ModalBodyProps = HTMLAttributes<HTMLDivElement>;
type ModalHeaderProps = HTMLAttributes<HTMLDivElement>;
type ModalTitleProps = HTMLAttributes<HTMLHeadingElement>;
type ModalSubtitleProps = HTMLAttributes<HTMLParagraphElement>;
type ModalInsetProps = HTMLAttributes<HTMLDivElement>;
type ModalActionsProps = HTMLAttributes<HTMLDivElement>;
interface ModalActionProps extends Omit<ButtonProps, "variant" | "size" | "type"> {
    /** Geist Modal.Action "type" — primary or secondary. @default "primary" */
    type?: "primary" | "secondary";
    /** Stretch to fill the actions row (used in single-button modals). */
    fullWidth?: boolean;
    /** Optional leading glyph. */
    prefix?: ReactNode;
    /** HTML button type override (for forms). */
    buttonType?: "button" | "submit" | "reset";
    ref?: Ref<HTMLButtonElement>;
}
/**
 * @example Basic create-resource modal
 * ```tsx
 * <Modal.Modal active={open} onClickOutside={() => setOpen(false)}>
 *   <Modal.Body>
 *     <Modal.Header>
 *       <Modal.Title>Create Token</Modal.Title>
 *       <Modal.Subtitle>Enter a unique name for your token.</Modal.Subtitle>
 *     </Modal.Header>
 *   </Modal.Body>
 *   <Modal.Actions>
 *     <Modal.Action type="secondary" onClick={() => setOpen(false)}>Cancel</Modal.Action>
 *     <Modal.Action onClick={() => handleCreate()}>Create Token</Modal.Action>
 *   </Modal.Actions>
 * </Modal.Modal>
 * ```
 *
 * @example Destructive modal — default focus on Cancel
 * ```tsx
 * const cancelRef = useRef<HTMLButtonElement>(null);
 * <Modal.Modal active={open} onClickOutside={() => setOpen(false)} initialFocusRef={cancelRef}>
 *   <Modal.Body>
 *     <Modal.Header>
 *       <Modal.Title>Delete Project</Modal.Title>
 *       <Modal.Subtitle>This cannot be undone.</Modal.Subtitle>
 *     </Modal.Header>
 *   </Modal.Body>
 *   <Modal.Actions>
 *     <Modal.Action ref={cancelRef} type="secondary" onClick={() => setOpen(false)}>Cancel</Modal.Action>
 *     <Modal.Action onClick={() => handleDelete()}>Delete Project</Modal.Action>
 *   </Modal.Actions>
 * </Modal.Modal>
 * ```
 */
declare const Modal: {
    readonly Modal: typeof ModalRoot;
    readonly Body: ({ className, ref, ...rest }: ModalBodyProps & {
        ref?: Ref<HTMLDivElement> | undefined;
    }) => react_jsx_runtime.JSX.Element;
    readonly Header: ({ className, children, ref, ...rest }: ModalHeaderProps & {
        ref?: Ref<HTMLDivElement> | undefined;
    }) => react_jsx_runtime.JSX.Element;
    readonly Title: ({ className, ref, ...rest }: ModalTitleProps & {
        ref?: Ref<HTMLHeadingElement> | undefined;
    }) => react_jsx_runtime.JSX.Element;
    readonly Subtitle: ({ className, ref, ...rest }: ModalSubtitleProps & {
        ref?: Ref<HTMLParagraphElement> | undefined;
    }) => react_jsx_runtime.JSX.Element;
    readonly Inset: ({ className, ref, ...rest }: ModalInsetProps & {
        ref?: Ref<HTMLDivElement> | undefined;
    }) => react_jsx_runtime.JSX.Element;
    readonly Actions: ({ className, children, ref, ...rest }: ModalActionsProps & {
        ref?: Ref<HTMLDivElement> | undefined;
    }) => react_jsx_runtime.JSX.Element;
    readonly Action: ({ type, fullWidth, prefix, buttonType, className, children, ref, ...rest }: ModalActionProps & {
        ref?: Ref<HTMLButtonElement> | undefined;
    }) => react_jsx_runtime.JSX.Element;
};

/**
 * MultiSelect Component Tokens — Layer 3
 *
 * Compact menu selector for dense filters and permission scopes. Runtime
 * colors stay semantic in the primitive; this file owns dimensions, shape,
 * and motion only.
 */
type MultiSelectWidth = "sm" | "md" | "lg";

interface MultiSelectRootProps {
    children: React.ReactNode;
    open?: boolean;
    defaultOpen?: boolean;
    onOpenChange?: (open: boolean) => void;
}
declare function MultiSelectRoot({ children, open, defaultOpen, onOpenChange, }: MultiSelectRootProps): react_jsx_runtime.JSX.Element;
interface MultiSelectTriggerProps extends Omit<React.ComponentPropsWithoutRef<typeof Popover$1.Trigger>, "children"> {
    children: React.ReactNode;
    width?: MultiSelectWidth;
}
declare const MultiSelectTrigger: {
    ({ children, className, style, width, "aria-label": ariaLabel, ref, ...props }: MultiSelectTriggerProps & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
interface MultiSelectContentProps extends Omit<React.ComponentPropsWithoutRef<typeof Popover$1.Popup>, "children"> {
    children: React.ReactNode;
    align?: React.ComponentProps<typeof Popover$1.Positioner>["align"];
    side?: React.ComponentProps<typeof Popover$1.Positioner>["side"];
    sideOffset?: React.ComponentProps<typeof Popover$1.Positioner>["sideOffset"];
    alignOffset?: React.ComponentProps<typeof Popover$1.Positioner>["alignOffset"];
    width?: MultiSelectWidth;
}
declare const MultiSelectContent: {
    ({ children, className, style, align, side, sideOffset, alignOffset, width, onKeyDown, ref, ...props }: MultiSelectContentProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
interface MultiSelectRowProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "disabled" | "onChange"> {
    name: string;
    checked: boolean;
    onChange: () => void;
    selectedCount: number;
    totalCount: number;
    description?: React.ReactNode;
    count?: number;
    disabled?: boolean;
    onSelectOnly?: () => void;
    onSelectAll?: () => void;
    selectLabel?: string;
    deselectLabel?: string;
    selectOnlyLabel?: string;
    selectAllLabel?: string;
}
declare const MultiSelectRow: {
    ({ name, checked, onChange, selectedCount, totalCount, description, count, disabled, onSelectOnly, onSelectAll, selectLabel, deselectLabel, selectOnlyLabel, selectAllLabel, className, ref, ...props }: MultiSelectRowProps & {
        ref?: React.Ref<HTMLFieldSetElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const NavigationMenu: {
    ({ className, children, value: controlledValue, onValueChange, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        value?: string;
        onValueChange?: (value: string) => void;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const NavigationMenuList: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLUListElement> & {
        ref?: React.Ref<HTMLUListElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const NavigationMenuItem: {
    ({ className, value, children, ref, ...props }: React.HTMLAttributes<HTMLLIElement> & {
        value?: string;
    } & {
        ref?: React.Ref<HTMLLIElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const NavigationMenuTrigger: {
    ({ className, children, ref, ...props }: React.ButtonHTMLAttributes<HTMLButtonElement> & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const NavigationMenuContent: {
    ({ className, children, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element | null;
    displayName: string;
};
declare const NavigationMenuLink: {
    ({ asChild, active, className, children, href, onClick, ref, ...props }: React.AnchorHTMLAttributes<HTMLAnchorElement> & {
        asChild?: boolean;
        active?: boolean;
    } & {
        ref?: React.Ref<HTMLAnchorElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const NavigationMenuViewport: {
    ({ ref: _ref, }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): null;
    displayName: string;
};
declare const NavigationMenuIndicator: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLDivElement> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const navigationMenuTriggerStyle: (props?: class_variance_authority_types.ClassProp | undefined) => string;

declare const noteSizes: readonly ["small", "medium", "large"];
type NoteSize = (typeof noteSizes)[number];
declare const noteTones: readonly ["default", "secondary", "success", "warning", "error", "cyan"];
type NoteTone = (typeof noteTones)[number];

declare const radioOrientations: readonly ["vertical", "horizontal"];
type RadioOrientation = (typeof radioOrientations)[number];

/**
 * Select Component Tokens — Layer 3
 *
 * Native short-list select and compound listbox trigger share the same control
 * geometry. Complex searchable selection stays in Combobox.
 */
type SelectSize = "xsmall" | "small" | "medium" | "large";

/**
 * Spinner Component Tokens — Layer 3
 *
 * Indeterminate single-action loading feedback. Keep the surface deliberately
 * narrow: expressive loaders belong in marketing illustrations, not controls.
 */
declare const spinnerSizes: {
    readonly xs: 12;
    readonly sm: 16;
    readonly md: 20;
    readonly lg: 24;
};
type SpinnerSize = keyof typeof spinnerSizes;
declare const spinnerTones: {
    readonly default: "text-muted-foreground";
    readonly foreground: "text-foreground";
    readonly inverse: "text-primary-foreground";
};
type SpinnerTone = keyof typeof spinnerTones;

/**
 * Switch Component Tokens — Layer 3
 *
 * Segmented radio selector for 2–3 mutually exclusive views of the same
 * surface. Boolean settings belong to Toggle, not this primitive.
 */
declare const switchSizes: {
    readonly small: {
        readonly height: 32;
        readonly controlHeight: 24;
        readonly padding: 4;
        readonly paddingX: 12;
        readonly iconSize: number;
        readonly minWidth: 64;
        readonly fontSize: 12;
    };
    readonly medium: {
        readonly height: 40;
        readonly controlHeight: 32;
        readonly padding: 4;
        readonly paddingX: 12;
        readonly iconSize: 20;
        readonly minWidth: 72;
        readonly fontSize: 14;
    };
    readonly large: {
        readonly height: 48;
        readonly controlHeight: 40;
        readonly padding: 4;
        readonly paddingX: 16;
        readonly iconSize: 24;
        readonly minWidth: 88;
        readonly fontSize: 16;
    };
};
type SwitchSize = keyof typeof switchSizes;

/**
 * Tabs Component Tokens — Layer 3
 *
 * Same-scope view switching for 2–7 sibling panels. Route navigation belongs
 * in menus or side navigation, while boolean settings belong in Switch/Toggle.
 */
declare const tabsSizes: {
    readonly xs: {
        readonly height: 24;
        readonly padding: 4;
        readonly paddingX: 8;
        readonly gap: 4;
        readonly triggerGap: 4;
        readonly iconSize: 14;
        readonly fontSize: 12;
        readonly minWidth: 56;
    };
    readonly sm: {
        readonly height: 32;
        readonly padding: 4;
        readonly paddingX: 12;
        readonly gap: 4;
        readonly triggerGap: number;
        readonly iconSize: 14;
        readonly fontSize: 12;
        readonly minWidth: 64;
    };
    readonly md: {
        readonly height: 40;
        readonly padding: 4;
        readonly paddingX: 12;
        readonly gap: 8;
        readonly triggerGap: number;
        readonly iconSize: 16;
        readonly fontSize: 14;
        readonly minWidth: 72;
    };
    readonly lg: {
        readonly height: 48;
        readonly padding: 4;
        readonly paddingX: 16;
        readonly gap: number;
        readonly triggerGap: 8;
        readonly iconSize: 18;
        readonly fontSize: 14;
        readonly minWidth: 88;
    };
};
type TabsSize = keyof typeof tabsSizes;

/**
 * ThemeSwitcher Component Tokens — Layer 3
 *
 * Canonical Light / System / Dark selector. It is an app-level preference
 * control, not a local visual toy; state belongs to @nebutra/tokens.
 */
declare const themeSwitcherSizes: {
    readonly small: {
        readonly controlHeight: 32;
        readonly optionMinWidth: 64;
        readonly optionPaddingX: 8;
        readonly iconSize: 16;
        readonly fontSize: 12;
        readonly gap: 4;
        readonly padding: 4;
    };
    readonly medium: {
        readonly controlHeight: 40;
        readonly optionMinWidth: 80;
        readonly optionPaddingX: 12;
        readonly iconSize: 18;
        readonly fontSize: 14;
        readonly gap: 4;
        readonly padding: 4;
    };
};
type ThemeSwitcherSize = keyof typeof themeSwitcherSizes;

/**
 * ThemeToggle Component Tokens — Layer 3
 *
 * Binary theme toggles are compact toolbar controls. Geometry is fixed so the
 * sun/moon morph never shifts surrounding navigation content.
 */
declare const themeToggleTokens: {
    readonly sizes: {
        readonly sm: {
            readonly control: 32;
            readonly icon: 16;
            readonly padding: 4;
            readonly radius: 6;
        };
        readonly md: {
            readonly control: 40;
            readonly icon: 20;
            readonly padding: 8;
            readonly radius: 6;
        };
        readonly lg: {
            readonly control: 48;
            readonly icon: 24;
            readonly padding: 12;
            readonly radius: 8;
        };
    };
    readonly icon: {
        readonly center: 12;
        readonly sunRadius: 5;
        readonly moonRadius: 9;
        readonly maskRadius: 9;
        readonly strokeWidth: 2;
    };
    readonly motion: {
        readonly duration: 100;
        readonly easing: "ease-out";
        readonly hoverScale: 1.06;
        readonly tapScale: 0.92;
        readonly morph: {
            type: "spring";
            stiffness: number;
            damping: number;
        };
        readonly press: {
            type: "spring";
            stiffness: number;
            damping: number;
        };
        readonly instant: {
            duration: number;
        };
    };
};
type ThemeToggleSize = keyof typeof themeToggleTokens.sizes;

/**
 * Toggle Component Tokens — Layer 3
 *
 * Boolean setting switch. It consumes semantic status colors only; decorative
 * hue families without semantic ownership should not be added here.
 */
declare const toggleSizes: readonly ["small", "normal", "large"];
type ToggleSize = (typeof toggleSizes)[number];
declare const toggleColors: readonly ["default", "blue", "cyan", "success", "warning", "error", "neutral", "green", "amber", "red", "teal", "gray"];
type ToggleColor = (typeof toggleColors)[number];

type NoteToneProps = {
    /** Semantic tone. Prefer this over the Geist-compatible `type` alias. */
    tone?: NoteTone;
    type?: never;
} | {
    /** Geist-compatible alias for `tone`; do not pass both. */
    type?: NoteTone;
    tone?: never;
};
interface NoteBaseProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "role"> {
    /** Inline contextual message body. Keep it to one sentence when possible. */
    children: React.ReactNode;
    /** @default "medium" */
    size?: NoteSize;
    /** Filled variants use a stronger background, not a new semantic meaning. */
    fill?: boolean;
    /** Prefix label. Pass `false` for icon-only tone, or a short Title Case label. */
    label?: string | false;
    /** Optional single inline action. Disabled notes make this subtree inert. */
    action?: React.ReactNode;
    /** Custom leading icon. Pass `false` to remove the default tone icon. */
    icon?: React.ReactNode | false;
    /** Disabled notes communicate unavailable contextual information. */
    disabled?: boolean;
    /** `error` defaults to alert; every other tone defaults to note. */
    role?: "note" | "alert" | "status";
    ref?: React.Ref<HTMLDivElement> | undefined;
}
type NoteProps = NoteBaseProps & NoteToneProps;

declare function Note({ action, children, className, disabled, fill, icon, label, ref, role, size, style, tone, type, ...props }: NoteProps): react_jsx_runtime.JSX.Element;

interface PaginationDestination {
    title: string;
    href: string;
}
interface PaginationProps extends Omit<React.ComponentPropsWithoutRef<"nav">, "children"> {
    previous?: PaginationDestination;
    next?: PaginationDestination;
    previousLabel?: string;
    nextLabel?: string;
}
declare function Pagination({ previous, next, previousLabel, nextLabel, className, style, "aria-label": ariaLabel, ...props }: PaginationProps): react_jsx_runtime.JSX.Element;
declare namespace Pagination {
    var displayName: string;
}

declare function Popover({ ...props }: React.ComponentProps<typeof Popover$1.Root>): react_jsx_runtime.JSX.Element;
type PopoverTriggerProps = React.ComponentProps<typeof Popover$1.Trigger> & {
    asChild?: boolean;
};
declare function PopoverTrigger({ asChild, children, render, ...props }: PopoverTriggerProps): react_jsx_runtime.JSX.Element;
declare function PopoverPositioner({ sideOffset, style, ...props }: React.ComponentProps<typeof Popover$1.Positioner>): react_jsx_runtime.JSX.Element;
interface PopoverContentProps extends React.ComponentProps<typeof Popover$1.Popup> {
    align?: Popover$1.Positioner.Props["align"];
    sideOffset?: Popover$1.Positioner.Props["sideOffset"];
    alignOffset?: Popover$1.Positioner.Props["alignOffset"];
    side?: Popover$1.Positioner.Props["side"];
    showArrow?: boolean;
}
declare function PopoverContent({ className, align, sideOffset, alignOffset, side, children, showArrow, style, ...props }: PopoverContentProps): react_jsx_runtime.JSX.Element;
declare function PopoverAnchor({ ...props }: React.ComponentProps<"span">): react_jsx_runtime.JSX.Element;

declare const progressVariants: (props?: ({
    variant?: "outline" | "default" | "secondary" | "primary" | "destructive" | "success" | "warning" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const progressIndicatorVariants: (props?: ({
    variant?: "outline" | "default" | "secondary" | "primary" | "destructive" | "success" | "warning" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface ProgressStop {
    /** 0–100 percent (or value in `max` units when `valueIsPercent={false}`). */
    value: number;
    tooltip?: React.ReactNode;
    ariaLabel?: string;
}
type ProgressColorMap = Record<number, string>;
type ProgressProps = Omit<React.ComponentPropsWithoutRef<typeof Progress$1.Root>, "value" | "max"> & VariantProps<typeof progressVariants> & {
    /** Current value (in `max` units). Pass `null`/omit for indeterminate. */
    value?: number | null;
    /** Real ceiling. @default 100 */
    max?: number;
    /** Geist severity alias — maps to `variant`. */
    type?: "success" | "warning" | "error" | "secondary";
    /** Optional threshold color map keyed by % (e.g. `{ 0, 50, 100 }`). */
    colors?: ProgressColorMap;
    /** Genuine multi-stage stop markers (dots at given % + Tooltip). */
    stops?: ProgressStop[];
    /** Show a numeric `xx%` label below the bar. */
    showValue?: boolean;
    /** Animate fill transitions. @default true */
    animated?: boolean;
    /** Optional caption above the bar. */
    label?: string;
};
declare const Progress: ({ className, value, max, variant, type, colors, stops, size, showValue, animated, label, ref, ...props }: ProgressProps & {
    ref?: React.Ref<React.ElementRef<typeof Progress$1.Root>> | undefined;
}) => react_jsx_runtime.JSX.Element;

type ProjectBannerVariant = "success" | "warning" | "error" | "info";
/** Discriminated CTA — either a link or a button, never both. */
type ProjectBannerCallToAction = {
    label: string;
    href: string;
    onClick?: never;
} | {
    label: string;
    onClick: () => void;
    href?: never;
};
type ProjectBannerProps = {
    /** @default "info" */
    variant?: ProjectBannerVariant;
    /** One-sentence impact statement, sentence case. */
    label: ReactNode;
    /** Optional leading glyph. Caller controls sizing; the banner just slots it. */
    icon?: ReactNode;
    /** Required-by-convention resolver action. */
    callToAction?: ProjectBannerCallToAction;
    /**
     * ARIA live-region role. Defaults to `"alert"` for `error`, `"status"` for
     * all others. Pass explicitly if you need to override (e.g. a polite error).
     */
    role?: "alert" | "status";
    ref?: Ref<HTMLElement>;
    className?: string;
};
declare function ProjectBanner({ variant, label, icon, callToAction, role, ref, className, }: ProjectBannerProps): react_jsx_runtime.JSX.Element;

type RadioValue = string;
type RadioGroupBaseProps = Omit<FieldsetHTMLAttributes<HTMLFieldSetElement>, "children" | "defaultValue" | "disabled" | "onChange" | "value">;
type RadioGroupProps = RadioGroupBaseProps & {
    children: ReactNode;
    /** Visible group label rendered as a native legend. */
    label?: ReactNode;
    /** Form field name shared by all radios. Generated when omitted. */
    name?: string;
    /** Controlled selected value. */
    value?: RadioValue;
    /** Uncontrolled initial selected value. */
    defaultValue?: RadioValue;
    /** Geist-compatible change callback. */
    onChange?: (value: RadioValue) => void;
    /** Base UI / Radix-compatible change callback. */
    onValueChange?: (value: RadioValue) => void;
    disabled?: boolean;
    required?: boolean;
    orientation?: RadioOrientation;
    /** Applies to the options container. */
    className?: string;
    /** Applies to the fieldset root. */
    rootClassName?: string;
};
type RadioGroupItemProps = Omit<LabelHTMLAttributes<HTMLLabelElement>, "children" | "onChange"> & {
    value: RadioValue;
    defaultChecked?: boolean;
    children?: ReactNode;
    description?: ReactNode;
    disabled?: boolean;
    disabledReason?: string;
    controlClassName?: string;
    inputClassName?: string;
};
declare function RadioGroupItemRoot({ children, className, controlClassName, description, disabled, disabledReason, id, inputClassName, style, value, ...props }: RadioGroupItemProps): react_jsx_runtime.JSX.Element;
declare namespace RadioGroupItemRoot {
    var displayName: string;
}
declare function RadioGroupRoot({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, children, className, defaultValue, disabled, label, name, onChange, onValueChange, orientation, required, rootClassName, style, value, ...props }: RadioGroupProps): react_jsx_runtime.JSX.Element;
declare namespace RadioGroupRoot {
    var displayName: string;
}
declare const RadioGroupItem: typeof RadioGroupItemRoot;
declare const RadioGroup: typeof RadioGroupRoot & {
    Item: typeof RadioGroupItemRoot;
};

declare function ResizablePanelGroup({ className, direction, orientation, ...props }: React.ComponentProps<typeof Group> & {
    /** @deprecated Use `orientation` instead */
    direction?: "horizontal" | "vertical";
}): react_jsx_runtime.JSX.Element;
declare const ResizablePanel: typeof Panel;
declare const ResizableHandle: ({ withHandle, className, ...props }: React.ComponentProps<typeof Separator$1> & {
    withHandle?: boolean;
}) => react_jsx_runtime.JSX.Element;

type ScrollerOverflow = "x" | "y" | "both";
type ScrollerButtonAxis = "x" | "y";
type ScrollerEdgeAffordance = "fade" | "none";
type ScrollerSize = number | string;
interface ScrollerProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "style"> {
    children?: React.ReactNode;
    /** Scroll axis. Use "both" only when content genuinely overflows in two dimensions. */
    overflow?: ScrollerOverflow;
    /** Outer width. Numbers resolve to px. */
    width?: ScrollerSize;
    /** Outer height. Numbers resolve to px. */
    height?: ScrollerSize;
    /** Class applied to the direct-child container inside the scroll viewport. */
    childrenContainerClassName?: string;
    /** Render directional buttons that scroll to the next direct child. */
    withButtons?: boolean;
    /** Axis used by directional buttons. Defaults to x for horizontal, y otherwise. */
    buttonAxis?: ScrollerButtonAxis;
    /** Accessible noun used by the viewport and generated button labels. */
    contentLabel?: string;
    previousButtonLabel?: string;
    nextButtonLabel?: string;
    edgeAffordance?: ScrollerEdgeAffordance;
    scrollBehavior?: ScrollBehavior;
    style?: React.CSSProperties;
}
declare function Scroller({ children, overflow, width, height, childrenContainerClassName, withButtons, buttonAxis, contentLabel, previousButtonLabel, nextButtonLabel, edgeAffordance, scrollBehavior, className, style, ...props }: ScrollerProps): react_jsx_runtime.JSX.Element;
declare namespace Scroller {
    var displayName: string;
}

type SelectVariant = "default" | "ghost";
interface SelectOption {
    value: string;
    label: string;
    disabled?: boolean;
}
interface OptionsSelectProps extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "children" | "size" | "prefix" | "onChange"> {
    /**
     * Explicit OS-native `<select>`. Prefer the default listbox.
     * Only use when a true native control is required (rare).
     */
    native?: boolean;
    variant?: SelectVariant;
    options?: readonly SelectOption[];
    label?: string;
    placeholder?: string;
    size?: SelectSize;
    prefix?: React.ReactNode;
    suffix?: React.ReactNode;
    error?: string;
    children?: React.ReactNode;
    wrapperClassName?: string;
    /** HTML-select-compatible change handler (value on event.target.value). */
    onChange?: (event: {
        target: {
            value: string;
            name?: string;
        };
    }) => void;
    /** Listbox value change (preferred). */
    onValueChange?: (value: string | null) => void;
}
type CompoundSelectProps = SelectRoot.Props<string, false> & {
    native?: false;
};
declare function Select(props: OptionsSelectProps): React.JSX.Element;
declare function Select(props: CompoundSelectProps): React.JSX.Element;
declare namespace Select {
    var displayName: string;
}
declare const SelectGroup: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<typeof Select$1.Group> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SelectValue: {
    ({ className, placeholder, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof Select$1.Value> & {
        placeholder?: React.ReactNode;
    } & {
        ref?: React.Ref<HTMLSpanElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SelectTrigger: {
    ({ className, children, size, style, ref, ...props }: Omit<React.ComponentPropsWithoutRef<typeof Select$1.Trigger>, "size"> & {
        size?: SelectSize;
    } & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SelectScrollUpButton: {
    ({ ref: _ref, }: React.ComponentPropsWithoutRef<"div"> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): null;
    displayName: string;
};
declare const SelectScrollDownButton: {
    ({ ref: _ref, }: React.ComponentPropsWithoutRef<"div"> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): null;
    displayName: string;
};
declare const SelectContent: {
    ({ className, children, position, style, ref, ...props }: React.ComponentPropsWithoutRef<typeof Select$1.Popup> & {
        position?: "item-aligned" | "popper";
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SelectLabel: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<typeof Select$1.GroupLabel> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SelectItem: {
    ({ className, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof Select$1.Item> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const SelectSeparator: {
    ({ className, ref, ...props }: React.ComponentPropsWithoutRef<"div"> & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const Separator: {
    ({ className, orientation, decorative: _decorative, ref, ...props }: React.ComponentPropsWithoutRef<typeof Separator$2> & {
        decorative?: boolean;
    } & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type SheetProps = React.ComponentPropsWithoutRef<typeof Dialog$1.Root>;
declare function Sheet({ modal, disablePointerDismissal, ...props }: SheetProps): react_jsx_runtime.JSX.Element;
declare namespace Sheet {
    var displayName: string;
}
type SheetTriggerProps = React.ComponentPropsWithoutRef<typeof Dialog$1.Trigger> & {
    asChild?: boolean;
};
declare const SheetTrigger: {
    ({ asChild, children, ref, ...props }: SheetTriggerProps & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type SheetCloseProps = React.ComponentPropsWithoutRef<typeof Dialog$1.Close> & {
    asChild?: boolean;
};
declare const SheetClose: {
    ({ asChild, children, ref, ...props }: SheetCloseProps & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type SheetPortalProps = React.ComponentPropsWithoutRef<typeof Dialog$1.Portal>;
declare function SheetPortal(props: SheetPortalProps): react_jsx_runtime.JSX.Element;
declare namespace SheetPortal {
    var displayName: string;
}
type SheetOverlayProps = React.ComponentPropsWithoutRef<typeof Dialog$1.Backdrop>;
declare const SheetOverlay: {
    ({ className, style, ref, ...props }: SheetOverlayProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const sheetVariants: (props?: ({
    side?: "top" | "right" | "bottom" | "left" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface SheetContentProps extends React.ComponentPropsWithoutRef<typeof Dialog$1.Popup>, VariantProps<typeof sheetVariants> {
    /**
     * Render the backdrop. Prefer `noOverlay` in docs because it names the visual
     * removal directly; `overlay` remains available for boolean composition.
     */
    overlay?: boolean;
    /** Hide the backdrop while keeping the sheet surface and focus behavior. */
    noOverlay?: boolean;
    /** Render the built-in close icon button. */
    showClose?: boolean;
    /** Alias for `showClose`, matching newer generated examples. */
    close?: boolean;
}
declare const SheetContent: {
    ({ side, className, children, overlay, noOverlay, showClose, close, style, ref, ...props }: SheetContentProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type SheetHeaderProps = React.ComponentPropsWithoutRef<"div">;
declare const SheetHeader: {
    ({ className, ref, ...props }: SheetHeaderProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type SheetBodyProps = React.ComponentPropsWithoutRef<"div">;
declare const SheetBody: {
    ({ className, ref, ...props }: SheetBodyProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type SheetFooterProps = React.ComponentPropsWithoutRef<"div">;
declare const SheetFooter: {
    ({ className, ref, ...props }: SheetFooterProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type SheetTitleProps = React.ComponentPropsWithoutRef<typeof Dialog$1.Title>;
declare const SheetTitle: {
    ({ className, ref, ...props }: SheetTitleProps & {
        ref?: React.Ref<HTMLHeadingElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type SheetDescriptionProps = React.ComponentPropsWithoutRef<typeof Dialog$1.Description>;
declare const SheetDescription: {
    ({ className, ref, ...props }: SheetDescriptionProps & {
        ref?: React.Ref<HTMLParagraphElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type ShowMoreBaseProps = Omit<React.HTMLAttributes<HTMLDivElement>, "onClick"> & {
    /** Current disclosure state. */
    expanded: boolean;
    /** ID of the list/block whose hidden rows are controlled by the trigger. */
    controls: string;
    /** Number of rows/items hidden while collapsed. Used in the collapsed label. */
    hiddenCount?: number;
    /** Removes the divider rails while preserving the trigger affordance. */
    noBorder?: boolean;
    /** Label shown after expansion. */
    expandedLabel?: string;
    /** Label shown before expansion when `hiddenCount` is omitted. */
    collapsedLabel?: string;
    /** Focus target for the first newly revealed row. */
    focusTargetRef?: React.RefObject<HTMLElement | null>;
    /** Move focus to `focusTargetRef` after expansion. */
    focusOnExpand?: boolean;
    disabled?: boolean;
    buttonClassName?: string;
    dividerClassName?: string;
};
type ShowMoreControlledProps = {
    onExpandedChange: (expanded: boolean) => void;
    /** Use `onExpandedChange`; this legacy callback shape is intentionally exclusive. */
    onClick?: never;
} | {
    /** Legacy Geist-compatible callback. Prefer `onExpandedChange`. */
    onClick: (expanded: boolean) => void;
    onExpandedChange?: never;
};
type ShowMoreProps = ShowMoreBaseProps & ShowMoreControlledProps;
declare const ShowMore: {
    ({ expanded, controls, hiddenCount, noBorder, expandedLabel, collapsedLabel, focusTargetRef, focusOnExpand, disabled, className, buttonClassName, dividerClassName, onExpandedChange, onClick, style, ref, ...props }: ShowMoreProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

interface SkeletonProps extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
    /** Width in px (number) or any CSS length (string). */
    width?: number | string;
    /** Height in px (number) or any CSS length (string). */
    height?: number | string;
    /** Outer wrapper height — keeps surrounding layout from reflowing. */
    boxHeight?: number | string;
    /** Pill shape — fully rounded. Mutually exclusive with `rounded`/`squared`. */
    pill?: boolean;
    /** Rounded shape — radius-md. */
    rounded?: boolean;
    /** Squared shape — radius-sm. */
    squared?: boolean;
    /** Animate the shimmer. @default true */
    animated?: boolean;
    /**
     * Show the placeholder. When `false` and children are passed, the children
     * render unwrapped (loaded state). @default true
     */
    show?: boolean;
    /** Optional children — when present, the skeleton sizes itself to wrap them. */
    children?: ReactNode;
    /** @deprecated Use `show={!isLoaded}` instead. */
    isLoaded?: boolean;
    /** @deprecated Use `animated={false}` instead. */
    disableAnimation?: boolean;
}
declare function Skeleton(props: SkeletonProps): react_jsx_runtime.JSX.Element;
declare function SkeletonText({ lines, className, ...props }: SkeletonProps & {
    lines?: number;
}): react_jsx_runtime.JSX.Element;
declare function SkeletonAvatar({ size, className, ...props }: SkeletonProps & {
    size?: "sm" | "md" | "lg";
}): react_jsx_runtime.JSX.Element;
declare function SkeletonCard({ className, ...props }: SkeletonProps): react_jsx_runtime.JSX.Element;

type BaseSliderProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "children" | "defaultValue" | "max" | "min" | "onChange" | "step" | "type" | "value"> & {
    min?: number;
    max?: number;
    step?: number;
    label?: string;
    unit?: string;
    showValue?: boolean;
    formatValue?: (value: number) => React.ReactNode;
    wrapperClassName?: string;
};
type NumberSliderProps = BaseSliderProps & {
    valueMode?: "number";
    value?: number;
    defaultValue?: number;
    onValueChange?: (value: number) => void;
    onValueCommit?: (value: number) => void;
};
type ArraySliderProps = BaseSliderProps & {
    valueMode?: "array";
    value?: readonly number[];
    defaultValue?: readonly number[];
    onValueChange?: (value: number[]) => void;
    onValueCommit?: (value: number[]) => void;
};
type SliderProps = NumberSliderProps | ArraySliderProps;
declare const Slider: {
    ({ ref, ...props }: SliderProps & {
        ref?: React.Ref<HTMLInputElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type SpinnerVariant = "default" | "circle" | "pinwheel" | "circle-filled" | "ellipsis" | "ring" | "bars" | "infinite";
interface SpinnerProps extends Omit<ComponentProps<"span">, "children" | "color" | "role"> {
    /** Size token or explicit pixel size. Prefer tokens inside primitives. */
    size?: SpinnerSize | number;
    /** Semantic color tone. Use className only for local composition overrides. */
    tone?: SpinnerTone;
    /** Accessible status label. Omit when the parent already exposes aria-busy. */
    label?: string;
    /** Force decorative mode even when a label would otherwise announce status. */
    decorative?: boolean;
    /**
     * @deprecated Spinner is intentionally a single canonical loading indicator.
     * Legacy variants are accepted for source compatibility and render the same
     * tokenized spinner.
     */
    variant?: SpinnerVariant;
}
declare function Spinner({ className, style, size, tone, label, decorative, variant, "aria-label": ariaLabel, ...props }: SpinnerProps): react_jsx_runtime.JSX.Element;

type SplitButtonType = "default" | "secondary";
type SplitButtonMenuAlignment = "bottom-start" | "bottom-end";
type ButtonSizeProp = Extract<ButtonProps["size"], string>;
type SplitButtonNativeSize = Exclude<ButtonSizeProp, "icon">;
type SplitButtonSize = SplitButtonNativeSize | "small" | "medium" | "large";
interface SplitButtonPrimaryProps extends Omit<ButtonProps, "children" | "className" | "loading" | "prefix" | "shape" | "size" | "suffix" | "type" | "variant"> {
    /** Geist-compatible visual type. Intentionally limited to non-destructive variants. */
    type?: SplitButtonType;
    /** Native button type. Defaults to `button` to avoid accidental form submit. */
    htmlType?: ButtonProps["type"];
    size?: SplitButtonSize;
    className?: string;
    loading?: boolean;
    prefix?: React.ReactNode;
}
interface SplitButtonMenuContentProps extends Omit<DropdownMenuContentProps, "align" | "side"> {
    width?: number | string;
}
interface SplitButtonProps extends Omit<React.HTMLAttributes<HTMLDivElement>, "children" | "onChange"> {
    children: React.ReactNode;
    buttonProps?: SplitButtonPrimaryProps;
    disabled?: boolean;
    menuAlignment?: SplitButtonMenuAlignment;
    menuButtonLabel: string;
    menuItems: React.ReactNode;
    menuProps?: SplitButtonMenuContentProps;
}
interface SplitButtonMenuItemProps {
    title: React.ReactNode;
    description?: React.ReactNode;
    icon?: React.ReactNode;
    menuItemProps?: Omit<React.ComponentPropsWithoutRef<typeof DropdownMenuItem>, "children">;
}
declare function SplitButtonRoot({ children, className, disabled, menuAlignment: alignment, menuButtonLabel, menuItems, menuProps, buttonProps, style, ...props }: SplitButtonProps): react_jsx_runtime.JSX.Element;
declare function SplitButtonMenuItem({ title, description, icon, menuItemProps, }: SplitButtonMenuItemProps): react_jsx_runtime.JSX.Element;
declare const SplitButton: typeof SplitButtonRoot & {
    MenuItem: typeof SplitButtonMenuItem;
};

/**
 * Stack - Vertical layout primitive
 *
 * Arranges children in a vertical stack with consistent spacing.
 *
 * @see apps/landing/DESIGN.md Section 10.1
 */
interface StackProps extends React.HTMLAttributes<HTMLDivElement> {
    /** Render as a different element */
    as?: React.ElementType;
    /** Gap between children */
    gap?: SpacingScale;
    /** Horizontal alignment */
    align?: "start" | "center" | "end" | "stretch";
    /** Justify content */
    justify?: "start" | "center" | "end" | "between" | "around";
    children?: React.ReactNode;
}
declare const Stack: {
    ({ as: Component, className, gap, align, justify, children, ref, ...props }: StackProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): React.ReactElement<any, string | React.JSXElementConstructor<any>>;
    displayName: string;
};

type DeploymentState = "QUEUED" | "BUILDING" | "READY" | "ERROR" | "CANCELED" | "DELETED";
interface StatusDotProps {
    /** Deployment lifecycle state. */
    state: DeploymentState;
    /** Render the sentence-cased state name next to the dot. */
    label?: boolean;
    /**
     * Noun phrase identifying the entity. Default `"This deployment"`. In lists
     * pass the entity (e.g. `"vercel-site production"`). Don't end with a verb
     * or punctuation — the title sentence is composed from this + the state.
     */
    titlePrefix?: string;
    /**
     * Mark the dot decorative when the surrounding text already names the state.
     * The dot becomes `aria-hidden` so screen readers don't announce twice.
     * @default false
     */
    decorative?: boolean;
    className?: string;
}
declare const StatusDot: ({ ref, state, label, titlePrefix, decorative, className, }: StatusDotProps & {
    ref?: Ref<HTMLSpanElement> | undefined;
}) => react_jsx_runtime.JSX.Element;

interface SwitchProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children" | "defaultValue" | "onChange"> {
    children?: React.ReactNode;
    defaultValue?: string;
    disabled?: boolean;
    name?: string;
    onValueChange?: (value: string) => void;
    size?: SwitchSize;
    value?: string;
}
interface SwitchControlProps extends Omit<React.LabelHTMLAttributes<HTMLLabelElement>, "children" | "onChange"> {
    checked?: boolean;
    defaultChecked?: boolean;
    disabled?: boolean;
    icon?: React.ReactNode;
    label?: string;
    name?: string;
    onChange?: React.ChangeEventHandler<HTMLInputElement>;
    size?: SwitchSize;
    value: string;
}
declare const Switch: {
    ({ children, name, size, defaultValue, value, disabled, onValueChange, style, className, ref, ...props }: SwitchProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
} & {
    Control: {
        ({ checked, className, defaultChecked, disabled, icon, label, name, onChange, size, style, value, ref, ...props }: SwitchControlProps & {
            ref?: React.Ref<HTMLLabelElement> | undefined;
        }): react_jsx_runtime.JSX.Element;
        displayName: string;
    };
};

type TableCssVar = "--table-min-width" | "--table-padding" | "--table-radius" | "--table-row-radius" | "--table-cell-padding-x" | "--table-cell-padding-y" | "--table-header-height" | "--table-font-size" | "--table-heading-weight" | "--table-body-weight" | "--table-body-spacer" | "--table-motion-duration" | "--table-motion-easing";
/**
 * The table's density/geometry knobs, addressable by callers so a table can be
 * retuned without reaching past the primitive into raw cell classes.
 */
type TableCssVarOverrides = Partial<Record<TableCssVar, string | number>>;
type TableStyle = React.CSSProperties & TableCssVarOverrides;
type TableProps = Omit<React.TableHTMLAttributes<HTMLTableElement>, "style"> & {
    /** Class applied to the scroll container around the native table. */
    wrapperClassName?: string;
    /** Style applied to the scroll container around the native table. */
    wrapperStyle?: TableStyle;
    /** Style applied to the native table element. */
    style?: TableStyle;
    /**
     * Drops the container's own card chrome — surface, border, radius, inset
     * padding, minimum width, and the header/body spacer. Use when the table is
     * already inside a panel or `Card`, so the rows sit flush with the panel edge
     * instead of being double-framed.
     */
    bare?: boolean;
};
type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement> & {
    /** Alternates row background for scan-heavy datasets. */
    striped?: boolean;
    /** Adds row separators inside the body. */
    bordered?: boolean;
    /** Adds hover state for rows that open details or respond to click. */
    interactive?: boolean;
    /** Marks a truncated/virtualized body without changing native table semantics. */
    virtualize?: boolean;
};
/**
 * Explicit horizontal alignment. Setting it also opts the cell out of the
 * implicit "last column is the action column, so right-align it" rule, which a
 * plain `text-left` class cannot override — `:last-child` outranks it.
 */
type TableCellAlignment = "start" | "center" | "end";
type TableHeadProps = React.ThHTMLAttributes<HTMLTableCellElement> & {
    /** Aligns numeric headings and applies tabular numbers. */
    numeric?: boolean;
    /** Overrides the implicit last-column right alignment. */
    alignment?: TableCellAlignment;
};
type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement> & {
    /** Aligns numeric values and applies tabular numbers. */
    numeric?: boolean;
    /** Overrides the implicit last-column right alignment. */
    alignment?: TableCellAlignment;
};
type TableComponent = React.ComponentType<TableProps & {
    ref?: React.Ref<HTMLTableElement> | undefined;
}> & {
    Body: typeof TableBody;
    Caption: typeof TableCaption;
    Cell: typeof TableCell;
    Col: typeof TableCol;
    Colgroup: typeof TableColgroup;
    Footer: typeof TableFooter;
    Head: typeof TableHead;
    Header: typeof TableHeader;
    Row: typeof TableRow;
};
declare const TableColgroup: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLTableColElement> & {
        ref?: React.Ref<HTMLTableColElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TableCol: {
    ({ className, ref, ...props }: React.ColHTMLAttributes<HTMLTableColElement> & {
        ref?: React.Ref<HTMLTableColElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TableHeader: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLTableSectionElement> & {
        ref?: React.Ref<HTMLTableSectionElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TableBody: {
    ({ className, striped, bordered, interactive, virtualize, ref, ...props }: TableBodyProps & {
        ref?: React.Ref<HTMLTableSectionElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TableFooter: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLTableSectionElement> & {
        ref?: React.Ref<HTMLTableSectionElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TableRow: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLTableRowElement> & {
        ref?: React.Ref<HTMLTableRowElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TableHead: {
    ({ className, numeric, alignment, scope, ref, ...props }: TableHeadProps & {
        ref?: React.Ref<HTMLTableCellElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TableCell: {
    ({ className, numeric, alignment, ref, ...props }: TableCellProps & {
        ref?: React.Ref<HTMLTableCellElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TableCaption: {
    ({ className, ref, ...props }: React.HTMLAttributes<HTMLTableCaptionElement> & {
        ref?: React.Ref<HTMLTableCaptionElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const Table: TableComponent;

type TabsVariant = "default" | "button" | "line" | "secondary";
type TabsShape = "default" | "pill";
type TabsActivationMode = "automatic" | "manual";
declare const tabsListVariants: (props?: ({
    variant?: "button" | "default" | "line" | "secondary" | null | undefined;
    shape?: "default" | "pill" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const tabsTriggerVariants: (props?: ({
    variant?: "button" | "default" | "line" | "secondary" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const tabsContentVariants: (props?: ({
    variant?: "default" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
interface TabsItem {
    badge?: React.ReactNode;
    content?: React.ReactNode;
    disabled?: boolean;
    icon?: React.ReactNode;
    title: React.ReactNode;
    tooltip?: React.ReactNode;
    value: string;
}
interface TabsProps extends Omit<React.ComponentPropsWithoutRef<"div">, "children" | "defaultValue" | "onChange"> {
    activationMode?: TabsActivationMode;
    defaultValue?: string;
    disabled?: boolean;
    listClassName?: string;
    onValueChange?: (value: string) => void;
    orientation?: "horizontal" | "vertical";
    selected?: string;
    setSelected?: (value: string) => void;
    shape?: TabsShape;
    size?: TabsSize;
    tabs?: readonly TabsItem[];
    value?: string;
    variant?: TabsVariant;
    children?: React.ReactNode;
}
interface TabsListProps extends React.ComponentPropsWithoutRef<"div">, VariantProps<typeof tabsListVariants> {
    activateOnFocus?: boolean;
    loop?: boolean;
}
interface TabsTriggerProps extends Omit<React.ComponentPropsWithoutRef<"button">, "children"> {
    badge?: React.ReactNode;
    icon?: React.ReactNode;
    value: string;
    children?: React.ReactNode;
}
interface TabsContentProps extends React.ComponentPropsWithoutRef<"div">, VariantProps<typeof tabsContentVariants> {
    forceMount?: true;
    keepMounted?: boolean;
    value: string;
}
declare function Tabs({ "aria-label": ariaLabel, activationMode, className, defaultValue, disabled, listClassName, onValueChange, orientation, selected, setSelected, shape, size, style, tabs, value, variant, children, ...props }: TabsProps): react_jsx_runtime.JSX.Element;
declare function TabsList({ activateOnFocus, className, loop, shape, variant, children, ...props }: TabsListProps): react_jsx_runtime.JSX.Element;
declare function TabsTrigger({ badge, children, className, disabled, icon, ...props }: TabsTriggerProps): react_jsx_runtime.JSX.Element;
declare function TabsContent({ className, forceMount, keepMounted, variant, ...props }: TabsContentProps): react_jsx_runtime.JSX.Element;

type ThemeSwitcherValue = "system" | "light" | "dark";
interface ThemeSwitcherProps extends Omit<React.FieldsetHTMLAttributes<HTMLFieldSetElement>, "defaultValue" | "onChange"> {
    /** Controlled compatibility value. Prefer the app-level ThemeProvider state. */
    value?: ThemeSwitcherValue;
    /** Initial fallback when rendered outside ThemeProvider. */
    defaultValue?: ThemeSwitcherValue;
    /** Compatibility callback for tests or migrations. ThemeProvider remains the source of truth. */
    onChange?: (theme: ThemeSwitcherValue) => void;
    /** Read-only preview state. Provider `forcedTheme` also disables the control. */
    disabled?: boolean;
    /** Compact size for dense chrome. */
    size?: ThemeSwitcherSize;
    /** Form control name when participating in a native form. */
    name?: string;
}
declare const ThemeSwitcher: {
    ({ value, defaultValue, onChange, disabled, size, name, className, style, ref, ...props }: ThemeSwitcherProps & {
        ref?: React.Ref<HTMLFieldSetElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type ThemeToggleValue = "light" | "dark";
type NativeButtonProps = Omit<React.ComponentPropsWithoutRef<typeof motion.button>, "children" | "defaultValue" | "onChange" | "value">;
interface ThemeToggleProps extends NativeButtonProps {
    /** Controlled binary theme value. Use `ThemeSwitcher` when `system` is required. */
    value?: ThemeToggleValue;
    /** Initial binary theme value for uncontrolled usage. Reads the document class on mount when omitted. */
    defaultValue?: ThemeToggleValue;
    /** Fired with the next binary theme value. Integrate with `@nebutra/tokens` or `next-themes`. */
    onChange?: (value: ThemeToggleValue) => void;
    /** Compact icon-button size. */
    size?: ThemeToggleSize;
    /** Optional user-gesture sound. Disabled by default to avoid unexpected audio in SaaS surfaces. */
    sound?: boolean;
    /** Apply `.dark` to `document.documentElement` for standalone demos or non-provider apps. */
    applyToDocument?: boolean;
    /** Action labels. `dark` is announced while the control is in light mode, and vice versa. */
    labels?: Partial<Record<ThemeToggleValue, string>>;
}
declare const ThemeToggle: {
    ({ value, defaultValue, onChange, size, sound, applyToDocument, labels, className, style, disabled, type, onClick, ref, ...props }: ThemeToggleProps & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const AnimatedThemeToggler: {
    ({ value, defaultValue, onChange, size, sound, applyToDocument, labels, className, style, disabled, type, onClick, ref, ...props }: ThemeToggleProps & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
type AnimatedThemeTogglerProps = ThemeToggleProps;

type ToastTone = "message" | "success" | "warning" | "error";
interface ToastMessage {
    text: React.ReactNode;
    preserve?: boolean;
    action?: React.ReactNode;
    onAction?: () => void;
    onUndoAction?: () => void;
    description?: React.ReactNode;
    duration?: number;
    id?: string | number;
}
interface ToastOptions {
    preserve?: boolean;
    description?: React.ReactNode;
    duration?: number;
    id?: string | number;
}
interface UseToastsReturn {
    message: (message: ToastMessage) => string | number;
    success: (text: React.ReactNode, options?: ToastOptions) => string | number;
    warning: (text: React.ReactNode, options?: ToastOptions) => string | number;
    error: (text: React.ReactNode, options?: ToastOptions) => string | number;
    dismiss: (id?: string | number) => string | number;
}
declare function Toaster({ position, richColors, closeButton, theme, visibleToasts, gap, offset, mobileOffset, containerAriaLabel, toastOptions, style, ...props }?: ToasterProps): react_jsx_runtime.JSX.Element;
declare function useToasts(): UseToastsReturn;

type ToggleDirection = "label-first" | "switch-first" | "switch-last";
type ToggleLabelCasing = "title" | "normal";
type ToggleChangeHandler = (checked: boolean, event: React.ChangeEvent<HTMLInputElement>) => void;
interface ToggleProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "children" | "color" | "onChange" | "size" | "type"> {
    children?: React.ReactNode;
    className?: string;
    color?: ToggleColor;
    direction?: ToggleDirection;
    icon?: {
        checked?: React.ReactNode;
        unchecked?: React.ReactNode;
    };
    labelCasing?: ToggleLabelCasing;
    onChange?: ToggleChangeHandler;
    onCheckedChange?: ToggleChangeHandler;
    size?: ToggleSize;
}
declare const Toggle: {
    ({ "aria-label": ariaLabel, "aria-labelledby": ariaLabelledBy, checked: checkedProp, children, className, color, defaultChecked, direction, disabled, icon, id, labelCasing, onChange, onCheckedChange, size, style, ref, ...inputProps }: ToggleProps & {
        ref?: React.Ref<HTMLInputElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const toggleGroupVariants: (props?: ({
    variant?: "outline" | "default" | "pill" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;
declare const toggleGroupItemVariants: (props?: ({
    variant?: "outline" | "default" | "pill" | null | undefined;
    size?: "default" | "sm" | "lg" | null | undefined;
} & class_variance_authority_types.ClassProp) | undefined) => string;

type ToggleGroupType = "single" | "multiple";
type ToggleGroupValue = string | string[];
interface ToggleGroupProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof toggleGroupVariants>, VariantProps<typeof toggleGroupItemVariants> {
    type?: ToggleGroupType;
    value?: ToggleGroupValue;
    defaultValue?: ToggleGroupValue;
    onValueChange?: (value: ToggleGroupValue) => void;
    disabled?: boolean;
}
declare const ToggleGroup: {
    ({ className, variant, size, type, value: controlledValue, defaultValue, onValueChange, disabled, children, ref, ...props }: ToggleGroupProps & {
        ref?: React.Ref<HTMLDivElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
interface ToggleGroupItemProps extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "value" | "type">, VariantProps<typeof toggleGroupItemVariants> {
    value: string;
}
declare const ToggleGroupItem: {
    ({ className, variant, size, value, children, ref, ...props }: ToggleGroupItemProps & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const TooltipProvider: ({ children, delayDuration, }: {
    children: React.ReactNode;
    delayDuration?: number;
}) => react_jsx_runtime.JSX.Element;
declare const Tooltip: ({ delayDuration, children, ...props }: React.ComponentPropsWithoutRef<typeof Tooltip$1.Root> & {
    delayDuration?: number;
    children?: React.ReactNode;
}) => react_jsx_runtime.JSX.Element;
declare const TooltipTrigger: {
    ({ asChild, children, ref, ...props }: React.ComponentPropsWithoutRef<typeof Tooltip$1.Trigger> & {
        asChild?: boolean;
    } & {
        ref?: React.Ref<HTMLButtonElement> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};
declare const TooltipContent: {
    ({ className, style, side, align, sideOffset, alignOffset, ref, ...props }: React.ComponentPropsWithoutRef<typeof Tooltip$1.Popup> & {
        side?: "top" | "right" | "bottom" | "left";
        align?: "start" | "center" | "end";
        sideOffset?: number;
        alignOffset?: number;
    } & {
        ref?: React.Ref<React.ElementRef<typeof Tooltip$1.Popup>> | undefined;
    }): react_jsx_runtime.JSX.Element;
    displayName: string;
};

type TreeProviderProps = {
    children: ReactNode;
    defaultExpandedIds?: string[];
    showLines?: boolean;
    showIcons?: boolean;
    selectable?: boolean;
    multiSelect?: boolean;
    selectedIds?: string[];
    onSelectionChange?: (selectedIds: string[]) => void;
    indent?: number;
    animateExpand?: boolean;
    className?: string;
};
declare const TreeProvider: ({ children, defaultExpandedIds, showLines, showIcons, selectable, multiSelect, selectedIds, onSelectionChange, indent, animateExpand, className, }: TreeProviderProps) => react_jsx_runtime.JSX.Element;
type TreeViewProps = HTMLAttributes<HTMLDivElement>;
declare const TreeView: ({ className, children, ...props }: TreeViewProps) => react_jsx_runtime.JSX.Element;
type TreeNodeProps = HTMLAttributes<HTMLDivElement> & {
    nodeId?: string;
    level?: number;
    isLast?: boolean;
    parentPath?: boolean[];
    children?: ReactNode;
};
declare const TreeNode: ({ nodeId: providedNodeId, level, isLast, parentPath, children, className, onClick: _onClick, ...props }: TreeNodeProps) => react_jsx_runtime.JSX.Element;
type TreeNodeTriggerProps = ComponentProps<typeof motion.div>;
declare const TreeNodeTrigger: ({ children, className, onClick, ...props }: TreeNodeTriggerProps) => react_jsx_runtime.JSX.Element;
declare const TreeLines: () => react_jsx_runtime.JSX.Element | null;
type TreeNodeContentProps = ComponentProps<typeof motion.div> & {
    hasChildren?: boolean;
};
declare const TreeNodeContent: ({ children, hasChildren, className, ...props }: TreeNodeContentProps) => react_jsx_runtime.JSX.Element;
type TreeExpanderProps = ComponentProps<typeof motion.div> & {
    hasChildren?: boolean;
};
declare const TreeExpander: ({ hasChildren, className, onClick, ...props }: TreeExpanderProps) => react_jsx_runtime.JSX.Element;
type TreeIconProps = ComponentProps<typeof motion.div> & {
    icon?: ReactNode;
    hasChildren?: boolean;
};
declare const TreeIcon: ({ icon, hasChildren, className, ...props }: TreeIconProps) => react_jsx_runtime.JSX.Element | null;
type TreeLabelProps = HTMLAttributes<HTMLSpanElement>;
declare const TreeLabel: ({ className, ...props }: TreeLabelProps) => react_jsx_runtime.JSX.Element;

export { AnimateInGroup as $, type AvatarProps as A, type BadgeProps as B, type CommandItemProps as C, type AlertDescriptionProps as D, AlertDialog as E, AlertDialogAction as F, AlertDialogCancel as G, AlertDialogContent as H, AlertDialogDescription as I, AlertDialogFooter as J, AlertDialogHeader as K, AlertDialogOverlay as L, AlertDialogPortal as M, AlertDialogTitle as N, AlertDialogTrigger as O, AlertIcon as P, type AlertIconProps as Q, type AlertProps as R, type SpacingScale as S, type TextareaProps as T, type AlertSize as U, AlertTitle as V, type AlertTitleProps as W, AlertToolbar as X, type AlertToolbarProps as Y, type AlertVariant as Z, AnimateIn as _, Button as a, Combobox as a$, type AnimateInGroupProps as a0, type AnimateInProps as a1, AnimateSwap as a2, type AnimateSwapProps as a3, AnimatedThemeToggler as a4, type AnimatedThemeTogglerProps as a5, AspectRatio as a6, type AspectRatioProps as a7, Avatar as a8, AvatarFallback as a9, CardDescription as aA, type CardDescriptionProps as aB, CardFooter as aC, CardHeader as aD, CardTitle as aE, Checkbox as aF, CheckboxGroup as aG, type CheckboxGroupProps as aH, type CheckboxProps as aI, CodeBlock as aJ, type CodeBlockFile as aK, type CodeBlockFilesProps as aL, CodeBlockLanguageIcon as aM, type CodeBlockLanguageIconComponent as aN, type CodeBlockLanguageIconElement as aO, type CodeBlockLanguageIconMap as aP, type CodeBlockLanguageIconProps as aQ, type CodeBlockLanguageIconValue as aR, type CodeBlockProps as aS, type CodeBlockSingleProps as aT, type CodeBlockSwitcher as aU, type CodeBlockSwitcherOption as aV, Collapse as aW, CollapseGroup as aX, type CollapseGroupProps as aY, type CollapseProps as aZ, type CollapseSize as a_, type AvatarFallbackProps as aa, AvatarGroup as ab, type AvatarGroupItem as ac, type AvatarGroupProps as ad, AvatarImage as ae, type AvatarSize as af, Badge as ag, Breadcrumb as ah, BreadcrumbEllipsis as ai, type BreadcrumbEllipsisProps as aj, BreadcrumbItem as ak, type BreadcrumbItemProps as al, BreadcrumbLink as am, type BreadcrumbLinkProps as an, BreadcrumbList as ao, type BreadcrumbListProps as ap, BreadcrumbPage as aq, type BreadcrumbPageProps as ar, type BreadcrumbProps as as, BreadcrumbSeparator as at, type BreadcrumbSeparatorProps as au, ButtonLink as av, type ButtonLinkProps as aw, type ButtonProps as ax, Card as ay, CardContent as az, type CommandEmptyProps as b, DrawerContent as b$, ComboboxEmpty as b0, ComboboxGroupSub as b1, ComboboxInput as b2, ComboboxList as b3, type ComboboxOption as b4, ComboboxOptionItem as b5, type ComboboxProps as b6, ComboboxRoot as b7, ComboboxSeparator as b8, CommandDialog as b9, CopyButton as bA, type CopyButtonProps as bB, CopyCodeButton as bC, CopyIdButton as bD, CopyLinkButton as bE, CopyMenuItem as bF, type CopyMenuItemProps as bG, CopyableField as bH, type CopyableFieldProps as bI, type DeploymentState as bJ, Description as bK, type DescriptionProps as bL, Dialog as bM, DialogClose as bN, DialogContent as bO, DialogDescription as bP, DialogFooter as bQ, DialogHeader as bR, DialogOverlay as bS, DialogPortal as bT, DialogTitle as bU, DialogTrigger as bV, Drawer as bW, DrawerBody as bX, type DrawerBodyProps as bY, DrawerClose as bZ, type DrawerCloseProps as b_, type CommandDialogProps as ba, type CommandProps as bb, CommandShortcut as bc, ContextMenu as bd, ContextMenuCheckboxItem as be, type ContextMenuCheckboxItemProps as bf, ContextMenuContent as bg, type ContextMenuContentProps as bh, ContextMenuGroup as bi, ContextMenuItem as bj, type ContextMenuItemProps as bk, ContextMenuLabel as bl, type ContextMenuLabelProps as bm, ContextMenuRadioGroup as bn, type ContextMenuRadioGroupProps as bo, ContextMenuRadioItem as bp, type ContextMenuRadioItemProps as bq, ContextMenuRoot as br, ContextMenuSeparator as bs, type ContextMenuSeparatorProps as bt, ContextMenuShortcut as bu, ContextMenuSub as bv, ContextMenuSubContent as bw, ContextMenuSubTrigger as bx, type ContextMenuSubTriggerProps as by, ContextMenuTrigger as bz, CommandEmpty as c, type GaugeColorStop as c$, type DrawerContentProps as c0, DrawerDescription as c1, type DrawerDescriptionProps as c2, type DrawerDirection as c3, DrawerFooter as c4, type DrawerFooterProps as c5, DrawerHeader as c6, type DrawerHeaderProps as c7, type DrawerHeight as c8, DrawerOverlay as c9, EmptyState as cA, type EmptyStateAlign as cB, EmptyStateIcon as cC, type EmptyStateIconProps as cD, EmptyStateRoot as cE, type EmptyStateRootProps as cF, type EmptyStateSize as cG, type EmptyStateVariant as cH, ErrorSurface as cI, ErrorMessage as cJ, type ErrorMessageProps as cK, type ErrorObject as cL, type ErrorProps as cM, type ErrorRecoveryAction as cN, type ErrorSize as cO, Field as cP, type FieldProps as cQ, Form as cR, FormControl as cS, FormDescription as cT, FormField as cU, FormItem as cV, FormLabel as cW, FormMessage as cX, Gauge as cY, type GaugeArcPriority as cZ, type GaugeColorMap as c_, type DrawerOverlayProps as ca, DrawerPortal as cb, type DrawerPortalProps as cc, type DrawerProps as cd, DrawerTitle as ce, type DrawerTitleProps as cf, DrawerTrigger as cg, type DrawerTriggerProps as ch, DropdownMenu as ci, DropdownMenuCheckboxItem as cj, DropdownMenuContent as ck, type DropdownMenuContentProps as cl, DropdownMenuEmpty as cm, DropdownMenuFilterInput as cn, DropdownMenuGroup as co, DropdownMenuItem as cp, DropdownMenuLabel as cq, DropdownMenuPortal as cr, DropdownMenuRadioGroup as cs, DropdownMenuRadioItem as ct, DropdownMenuSeparator as cu, DropdownMenuShortcut as cv, DropdownMenuSub as cw, DropdownMenuSubContent as cx, DropdownMenuSubTrigger as cy, DropdownMenuTrigger as cz, type CommandGroupProps as d, MultiSelectContent as d$, type GaugeProps as d0, type GaugeSize as d1, HoverCard as d2, HoverCardContent as d3, HoverCardTrigger as d4, Input as d5, InputOTP as d6, InputOTPGroup as d7, type InputOTPGroupProps as d8, type InputOTPProps as d9, MenuSection as dA, type MenuSectionProps as dB, Menubar as dC, MenubarCheckboxItem as dD, MenubarContent as dE, MenubarGroup as dF, MenubarItem as dG, MenubarLabel as dH, MenubarMenu as dI, MenubarPortal as dJ, MenubarRadioGroup as dK, MenubarRadioItem as dL, MenubarSeparator as dM, MenubarShortcut as dN, MenubarSub as dO, MenubarSubContent as dP, MenubarSubTrigger as dQ, MenubarTrigger as dR, Modal as dS, type ModalActionProps as dT, type ModalActionsProps as dU, type ModalBodyProps as dV, type ModalHeaderProps as dW, type ModalInsetProps as dX, type ModalRootProps as dY, type ModalSubtitleProps as dZ, type ModalTitleProps as d_, InputOTPSeparator as da, type InputOTPSeparatorProps as db, InputOTPSlot as dc, type InputOTPSlotProps as dd, type InputProps as de, Kbd as df, type KbdProps as dg, Label as dh, type LabelProps as di, type LegacyGaugeArcPriority as dj, LoadingDots as dk, type LoadingDotsProps as dl, Menu as dm, MenuButton as dn, type MenuButtonProps as dp, MenuContainer as dq, type MenuContainerProps as dr, MenuItem as ds, MenuItemLocked as dt, type MenuItemLockedProps as du, type MenuItemProps as dv, MenuLink as dw, type MenuLinkProps as dx, type MenuPosition as dy, type MenuProps as dz, CommandGroup as e, type SheetCloseProps as e$, type MultiSelectContentProps as e0, MultiSelectRoot as e1, type MultiSelectRootProps as e2, MultiSelectRow as e3, type MultiSelectRowProps as e4, MultiSelectTrigger as e5, type MultiSelectTriggerProps as e6, NavigationMenu as e7, NavigationMenuContent as e8, NavigationMenuIndicator as e9, type ProjectBannerVariant as eA, RadioGroup as eB, RadioGroupItem as eC, ResizableHandle as eD, ResizablePanel as eE, ResizablePanelGroup as eF, Scroller as eG, type ScrollerButtonAxis as eH, type ScrollerEdgeAffordance as eI, type ScrollerOverflow as eJ, type ScrollerProps as eK, type ScrollerSize as eL, Select as eM, SelectContent as eN, SelectGroup as eO, SelectItem as eP, SelectLabel as eQ, SelectScrollDownButton as eR, SelectScrollUpButton as eS, SelectSeparator as eT, SelectTrigger as eU, SelectValue as eV, Separator as eW, Sheet as eX, SheetBody as eY, type SheetBodyProps as eZ, SheetClose as e_, NavigationMenuItem as ea, NavigationMenuLink as eb, NavigationMenuList as ec, NavigationMenuTrigger as ed, NavigationMenuViewport as ee, Note as ef, type NoteBaseProps as eg, type NoteProps as eh, type NoteSize as ei, type NoteTone as ej, Pagination as ek, type PaginationDestination as el, type PaginationProps as em, Popover as en, PopoverAnchor as eo, PopoverContent as ep, type PopoverContentProps as eq, PopoverPositioner as er, PopoverTrigger as es, Progress as et, type ProgressColorMap as eu, type ProgressProps as ev, type ProgressStop as ew, ProjectBanner as ex, type ProjectBannerCallToAction as ey, type ProjectBannerProps as ez, type CommandInputProps as f, TabsContent as f$, SheetContent as f0, type SheetContentProps as f1, SheetDescription as f2, type SheetDescriptionProps as f3, SheetFooter as f4, type SheetFooterProps as f5, SheetHeader as f6, type SheetHeaderProps as f7, SheetOverlay as f8, type SheetOverlayProps as f9, type SplitButtonSize as fA, type SplitButtonType as fB, Stack as fC, type StackProps as fD, StatusDot as fE, type StatusDotProps as fF, Switch as fG, type SwitchProps as fH, Table as fI, TableBody as fJ, type TableBodyProps as fK, TableCaption as fL, TableCell as fM, type TableCellAlignment as fN, type TableCellProps as fO, TableCol as fP, TableColgroup as fQ, type TableCssVar as fR, type TableCssVarOverrides as fS, TableFooter as fT, TableHead as fU, type TableHeadProps as fV, TableHeader as fW, type TableProps as fX, TableRow as fY, type TableStyle as fZ, Tabs as f_, SheetPortal as fa, type SheetPortalProps as fb, type SheetProps as fc, SheetTitle as fd, type SheetTitleProps as fe, SheetTrigger as ff, type SheetTriggerProps as fg, ShowMore as fh, type ShowMoreProps as fi, Skeleton as fj, SkeletonAvatar as fk, SkeletonCard as fl, type SkeletonProps as fm, SkeletonText as fn, Slider as fo, type SliderProps as fp, Spinner as fq, type SpinnerProps as fr, type SpinnerVariant as fs, SplitButton as ft, type SplitButtonMenuAlignment as fu, type SplitButtonMenuContentProps as fv, SplitButtonMenuItem as fw, type SplitButtonMenuItemProps as fx, type SplitButtonPrimaryProps as fy, type SplitButtonProps as fz, CommandInput as g, tabsListVariants as g$, type TabsContentProps as g0, TabsList as g1, type TabsListProps as g2, type TabsProps as g3, TabsTrigger as g4, type TabsTriggerProps as g5, Textarea as g6, ThemeSwitcher as g7, type ThemeSwitcherProps as g8, type ThemeSwitcherValue as g9, TreeLines as gA, TreeNode as gB, TreeNodeContent as gC, type TreeNodeContentProps as gD, type TreeNodeProps as gE, TreeNodeTrigger as gF, type TreeNodeTriggerProps as gG, TreeProvider as gH, type TreeProviderProps as gI, TreeView as gJ, type TreeViewProps as gK, type UseCopyToClipboardOptions as gL, type UseCopyToClipboardReturn as gM, type UseToastsReturn as gN, alertVariants as gO, badgeVariants as gP, buttonVariants as gQ, containerWidths as gR, flexLayouts as gS, gridLayouts as gT, labelVariants as gU, navigationMenuTriggerStyle as gV, normalizeCodeBlockLanguage as gW, progressIndicatorVariants as gX, progressVariants as gY, resolveCodeBlockLanguageIcon as gZ, tabsContentVariants as g_, ThemeToggle as ga, type ThemeToggleProps as gb, type ThemeToggleValue as gc, type ToastMessage as gd, type ToastOptions as ge, type ToastTone as gf, Toaster as gg, Toggle as gh, type ToggleChangeHandler as gi, type ToggleDirection as gj, ToggleGroup as gk, ToggleGroupItem as gl, type ToggleGroupItemProps as gm, type ToggleGroupProps as gn, type ToggleLabelCasing as go, type ToggleProps as gp, Tooltip as gq, TooltipContent as gr, TooltipProvider as gs, TooltipTrigger as gt, TreeExpander as gu, type TreeExpanderProps as gv, TreeIcon as gw, type TreeIconProps as gx, TreeLabel as gy, type TreeLabelProps as gz, CommandItem as h, tabsTriggerVariants as h0, toggleGroupItemVariants as h1, toggleGroupVariants as h2, useCopyToClipboard as h3, useFormField as h4, useToasts as h5, zIndex as h6, type CommandListProps as i, CommandList as j, type CommandResultsProps as k, CommandResults as l, type CommandSeparatorProps as m, CommandSeparator as n, type CommandShortcutProps as o, Command as p, Accordion as q, AccordionContent as r, AccordionItem as s, type AccordionSize as t, AccordionTrigger as u, Alert as v, type AlertAppearance as w, AlertContent as x, type AlertContentProps as y, AlertDescription as z };
