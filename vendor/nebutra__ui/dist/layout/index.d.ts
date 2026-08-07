import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { ReactNode } from 'react';
import { ThemeMode } from '../theme/index.js';
import '@lobehub/icons';
import '@nebutra/icons';

interface AppShellProps {
    /** Sidebar slot — typically a `SidebarNav` or equivalent navigation tree. */
    sidebar: React.ReactNode;
    /** Optional sticky top header (breadcrumbs, search, user menu). */
    header?: React.ReactNode;
    /** Main content rendered inside `<main>`. */
    children: React.ReactNode;
    /** Sidebar width in pixels when expanded. */
    sidebarWidth?: number;
    /** Sidebar width in pixels when collapsed (icon-only rail). */
    sidebarCollapsedWidth?: number;
    /** Controlled collapsed state. When provided, the component is fully controlled. */
    collapsed?: boolean;
    /** Default collapsed state for uncontrolled usage. */
    defaultCollapsed?: boolean;
    /** Fires whenever the collapsed state changes (both controlled + uncontrolled). */
    onCollapsedChange?: (collapsed: boolean) => void;
    /** Render the desktop sidebar as a floating overlay (absolute, z-40) instead of
     *  an in-flow rail that compresses main — for full-bleed builder routes that
     *  drive their own toggle. When collapsed to 0 width it's simply invisible. */
    overlay?: boolean;
    /** Height in pixels of the sticky header row. Defaults to 48. */
    headerHeight?: number;
    /** Override the default container styles applied to `<main>`. */
    contentClassName?: string;
    /** Extra classes for the outer wrapper. */
    className?: string;
}
/**
 * AppShell — top-level dashboard chrome: sidebar + sticky header + scrollable main.
 *
 * Modeled after Vercel / Linear / MiniMax application shells. The sidebar is a
 * fixed-width rail on `md+` viewports and collapses into a `Sheet` overlay on
 * mobile (triggered by the hamburger button shown in the header).
 *
 * The sidebar width animates smoothly (duration-flow, ease-out) when toggling
 * between the expanded and collapsed states so it can host an icon-only rail.
 *
 * @status stable
 *
 * @example
 * ```tsx
 * <AppShell
 *   sidebar={<SidebarNav items={navItems} />}
 *   header={<DashboardHeader />}
 * >
 *   <PageHeader title="Overview" />
 *   {children}
 * </AppShell>
 * ```
 */
declare function AppShell({ sidebar, header, children, sidebarWidth, sidebarCollapsedWidth, collapsed, defaultCollapsed, onCollapsedChange, headerHeight, contentClassName, className, overlay, }: AppShellProps): react_jsx_runtime.JSX.Element;

interface CardProps {
    children: React__default.ReactNode;
    className?: string;
    /** Whether the card has a hover/press effect */
    isInteractive?: boolean;
}
/**
 * Card — surface container with border, background, and shadow.
 *
 * @status stable
 * @planned apps/web dashboard — settings panels, billing summary, team member tiles.
 *   See governance/registry.ts for full allocation record.
 *
 * @example
 * ```tsx
 * <Card>
 *   <p>Card content</p>
 * </Card>
 * ```
 */
declare function Card({ children, isInteractive, className }: CardProps): react_jsx_runtime.JSX.Element;

type ContainerSize = "sm" | "md" | "lg" | "xl" | "full";
interface ContainerProps {
    children: React__default.ReactNode;
    /** Max-width breakpoint */
    size?: ContainerSize;
    className?: string;
}
/**
 * Container — centred max-width layout wrapper.
 *
 * @status stable
 * @planned apps/web dashboard — canonical max-width wrapper for all page layouts.
 *
 * @example
 * ```tsx
 * <Container size="lg">
 *   <p>Page content</p>
 * </Container>
 * ```
 */
declare function Container({ children, size, className }: ContainerProps): react_jsx_runtime.JSX.Element;

interface DesignSystemProviderProps {
    children: React__default.ReactNode;
    defaultMode?: ThemeMode;
    storageKey?: string;
    enableSystemPreference?: boolean;
}
declare function DesignSystemProvider({ children, defaultMode, storageKey, enableSystemPreference, }: DesignSystemProviderProps): react_jsx_runtime.JSX.Element;

type Tone = "default" | "branded" | "subtle";
type Size = "sm" | "md" | "lg";
interface EmptyStateProps {
    /** Primary message. */
    title: string;
    /** Supporting description. */
    description?: string;
    /** Visual anchor. When omitted and `tone="branded"`, a default `<BrandMark>` is rendered. */
    mascot?: ReactNode;
    /** Inline icon shown above the title. Ignored when `mascot` is provided. */
    icon?: ReactNode;
    /** Primary call-to-action node. */
    action?: ReactNode;
    /** Secondary call-to-action node. */
    secondaryAction?: ReactNode;
    /**
     * Visual tone.
     * - `default`: neutral bordered state
     * - `branded`: BrandMark anchor for first-touch panels
     * - `subtle`: quieter inline state
     */
    tone?: Tone;
    /** Size variant. */
    size?: Size;
    /** Extra classes for the root element. */
    className?: string;
}
/**
 * EmptyState — layout-compatible wrapper around the canonical compound
 * primitive. New composition work should prefer `EmptyState.Root` from
 * `@nebutra/ui/primitives`; product layout code can keep this simpler API.
 */
declare function EmptyState({ title, description, mascot, icon, action, secondaryAction, tone, size, className, }: EmptyStateProps): react_jsx_runtime.JSX.Element;

interface ErrorStateProps {
    /** Error title */
    title?: string;
    /** Error detail or message */
    message?: string;
    /** Optional retry callback */
    onRetry?: () => void;
    /** Stable request, trace, deployment, or run identifier */
    errorId?: string;
}
/**
 * ErrorState — inline error display with optional retry action.
 *
 * @status stable
 * @planned apps/web dashboard — React Error Boundary fallback, failed fetch/mutation states.
 *
 * @example
 * ```tsx
 * <ErrorState
 *   title="Failed to load projects"
 *   message={error.message}
 *   onRetry={refetch}
 * />
 * ```
 */
declare function ErrorState({ title, message, onRetry, errorId, }: ErrorStateProps): react_jsx_runtime.JSX.Element;

interface FullPageStatusAction {
    label: string;
    /** Either href (renders <Link>) or onClick (renders <button>). */
    href?: string;
    onClick?: () => void;
}
interface FullPageStatusMeta {
    /** e.g. "Error ID: abc123" — rendered monospace, muted. */
    errorId?: string;
    /** e.g. "status.nebutra.com" — rendered as link if `statusUrl` provided. */
    statusUrl?: string;
}
interface FullPageStatusProps {
    /** Eyebrow label, e.g. "Error 404" / "Error 500". Rendered monospace, uppercase. */
    code: string;
    /** Headline. Keep it direct; use Accent only for subtle neutral emphasis. */
    title: ReactNode;
    /** Single-sentence subcopy. */
    description: string;
    /** Primary CTA (filled neutral ink). */
    primaryAction: FullPageStatusAction;
    /** Secondary CTA (outlined). Optional. */
    secondaryAction?: FullPageStatusAction;
    /** Optional footer metadata: error ID + status page link. */
    meta?: FullPageStatusMeta;
    /**
     * Layout variant.
     * - `"viewport"` (default): full-viewport takeover with bg — for not-found.tsx / global-error.
     * - `"section"`: in-segment, no bg, ~60vh min height — for segment `error.tsx` inside a layout.
     */
    variant?: "viewport" | "section";
}
/**
 * FullPageStatus — restrained full-page status template for 404, 500, and other
 * authenticated error/not-found states that live inside the root layout.
 *
 * Pattern: monospace eyebrow → headline → subcopy → primary + optional secondary CTA →
 * optional monospace error ID + status link footer. Linear/Vercel/Stripe convention.
 *
 * NOT for `global-error.tsx` — that renders outside root layout and cannot consume
 * CSS variables or Tailwind. Keep that file standalone with inline styles.
 *
 * @example
 * ```tsx
 * <FullPageStatus
 *   code="Error 404"
 *   title={<>We couldn't find that page.</>}
 *   description="The page you're looking for doesn't exist or has been moved."
 *   primaryAction={{ label: "Go to dashboard", href: "/" }}
 *   secondaryAction={{ label: "Open docs", href: "/docs" }}
 * />
 * ```
 */
declare function FullPageStatus({ code, title, description, primaryAction, secondaryAction, meta, variant, }: FullPageStatusProps): react_jsx_runtime.JSX.Element;
declare namespace FullPageStatus {
    var Accent: ({ children }: {
        children: ReactNode;
    }) => react_jsx_runtime.JSX.Element;
}

interface LoadingStateProps {
    /** Optional message shown below the spinner */
    message?: string;
    /** Size of the spinner */
    size?: "small" | "medium" | "large";
}
/**
 * LoadingState — centred spinner for async content loading.
 *
 * @status stable
 * @planned apps/web dashboard — React Suspense fallback boundaries for async data routes.
 *
 * @example
 * ```tsx
 * <LoadingState message="Fetching projects…" />
 * ```
 */
declare function LoadingState({ message, size }: LoadingStateProps): react_jsx_runtime.JSX.Element;

interface PageHeaderProps {
    /** Page title */
    title: string;
    /** Optional subtitle or description */
    description?: string;
    /** Optional action slot (e.g. a Button) */
    actions?: React__default.ReactNode;
    className?: string;
}
/**
 * PageHeader — standardised top-of-page title + description + actions row.
 *
 * @status stable
 * @planned apps/web dashboard — every dashboard page top area (Settings, Billing, Team, Logs, etc.).
 *
 * @example
 * ```tsx
 * <PageHeader
 *   title="Team Settings"
 *   description="Manage your team members and permissions."
 *   actions={<button>Invite member</button>}
 * />
 * ```
 */
declare function PageHeader({ title, description, actions, className }: PageHeaderProps): react_jsx_runtime.JSX.Element;

interface SectionProps {
    children: React__default.ReactNode;
    /** Optional semantic section label (aria-label) */
    label?: string;
    className?: string;
}
/**
 * Section — semantic page section with vertical spacing.
 *
 * @status stable
 * @planned apps/web dashboard — semantic grouping of dashboard page content with aria-label.
 *
 * @example
 * ```tsx
 * <Section label="Features">
 *   <FeatureGrid />
 * </Section>
 * ```
 */
declare function Section({ children, label, className }: SectionProps): react_jsx_runtime.JSX.Element;

export { AppShell, type AppShellProps, Card, type CardProps, Container, type ContainerProps, type ContainerSize, DesignSystemProvider, EmptyState, type EmptyStateProps, ErrorState, type ErrorStateProps, FullPageStatus, type FullPageStatusAction, type FullPageStatusMeta, type FullPageStatusProps, LoadingState, type LoadingStateProps, PageHeader, type PageHeaderProps, Section, type SectionProps };
