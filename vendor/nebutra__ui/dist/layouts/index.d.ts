import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';

interface BentoItem {
    /** Card title */
    title: string;
    /** Card description */
    description: string;
    /** Icon element to display */
    icon: React.ReactNode;
    /** Status badge text */
    status?: string;
    /** Array of tag strings */
    tags?: string[];
    /** Meta information (version, count, etc.) */
    meta?: string;
    /** Call-to-action text */
    cta?: string;
    /** Column span (1 or 2) */
    colSpan?: 1 | 2;
    /** Whether to show hover state persistently */
    hasPersistentHover?: boolean;
}
interface BentoGridProps {
    /** Array of bento items to display */
    items: BentoItem[];
    /** Additional className */
    className?: string;
}
/**
 * BentoGrid - Feature showcase grid layout
 *
 * A responsive grid layout for displaying feature cards with icons,
 * descriptions, tags, and status badges. Supports variable column spans.
 *
 * @example
 * ```tsx
 * <BentoGrid
 *   items={[
 *     {
 *       title: "Analytics",
 *       description: "Real-time metrics",
 *       icon: <TrendingUp className="w-4 h-4" />,
 *       status: "Live",
 *       tags: ["Stats", "AI"],
 *       colSpan: 2,
 *     },
 *     // ...
 *   ]}
 * />
 * ```
 */
declare function BentoGrid({ items, className }: BentoGridProps): react_jsx_runtime.JSX.Element;
declare namespace BentoGrid {
    var displayName: string;
}

type SectionSize = "sm" | "md" | "lg" | "xl" | "full";
type SectionSpacing = "sm" | "md" | "lg" | "xl";
interface SectionContainerProps extends React.HTMLAttributes<HTMLElement> {
    as?: "section" | "div" | "article";
    size?: SectionSize;
    spacing?: SectionSpacing;
    centered?: boolean;
    noPadding?: boolean;
}
declare const SectionContainerRoot: React.ForwardRefExoticComponent<SectionContainerProps & React.RefAttributes<HTMLElement>>;
interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    centered?: boolean;
    spacing?: "sm" | "md" | "lg";
}
declare const SectionHeader: React.ForwardRefExoticComponent<SectionHeaderProps & React.RefAttributes<HTMLDivElement>>;
type SectionContentProps = React.HTMLAttributes<HTMLDivElement>;
declare const SectionContent: React.ForwardRefExoticComponent<SectionContentProps & React.RefAttributes<HTMLDivElement>>;
interface SectionFooterProps extends React.HTMLAttributes<HTMLDivElement> {
    centered?: boolean;
    spacing?: "sm" | "md" | "lg";
}
declare const SectionFooter: React.ForwardRefExoticComponent<SectionFooterProps & React.RefAttributes<HTMLDivElement>>;
declare const SectionContainer: React.ForwardRefExoticComponent<SectionContainerProps & React.RefAttributes<HTMLElement>> & {
    Header: React.ForwardRefExoticComponent<SectionHeaderProps & React.RefAttributes<HTMLDivElement>>;
    Content: React.ForwardRefExoticComponent<SectionContentProps & React.RefAttributes<HTMLDivElement>>;
    Footer: React.ForwardRefExoticComponent<SectionFooterProps & React.RefAttributes<HTMLDivElement>>;
};

/**
 * Section theme configuration.
 *
 * Note: For decorative/artistic purposes, themes may use hex colors as they
 * represent specific visual identities. These are exempt from strict Primer
 * compliance per WARP.md "Exemptions" section.
 */
interface SectionThemeConfig {
    /** Background color class (Tailwind) */
    backgroundColor?: string;
    /** Pattern type to use */
    pattern?: "dots" | "crosses" | "grid" | "floating" | "none";
    /**
     * Pattern color.
     * - Use "currentColor" to inherit from context
     * - Use "hsl(var(--accent))" for semantic colors
     * - Hex colors are allowed for artistic/decorative themes
     */
    patternColor?: string;
    /** Pattern opacity 0-1 */
    patternOpacity?: number;
    /**
     * Accent color for highlights.
     * Hex colors are allowed for artistic/decorative themes.
     */
    accentColor?: string;
    /** Additional gradient overlay (Tailwind class) */
    gradient?: string;
    /** Custom pattern props */
    patternProps?: Record<string, unknown>;
}
/**
 * Predefined section themes based on DESIGN.md Section 11.5.
 *
 * These themes define visual territories for different sections.
 * Some use specific hex colors for artistic effect (exempt from Primer
 * strict compliance per WARP.md).
 */
declare const sectionThemeDefs: {
    hero: {
        backgroundColor: string;
        pattern: "floating";
        patternColor: string;
        patternOpacity: number;
        gradient: string;
    };
    architecture: {
        backgroundColor: string;
        pattern: "dots";
        patternColor: string;
        patternOpacity: number;
    };
    aiNative: {
        backgroundColor: string;
        pattern: "dots";
        patternColor: string;
        patternOpacity: number;
        accentColor: string;
        gradient: string;
    };
    features: {
        backgroundColor: string;
        pattern: "crosses";
        patternColor: string;
        patternOpacity: number;
    };
    multiTenant: {
        backgroundColor: string;
        pattern: "grid";
        patternColor: string;
        patternOpacity: number;
        accentColor: string;
    };
    testimonials: {
        backgroundColor: string;
        pattern: "floating";
        patternColor: string;
        patternOpacity: number;
        gradient: string;
    };
    vision: {
        backgroundColor: string;
        pattern: "none";
        gradient: string;
    };
    pricing: {
        backgroundColor: string;
        pattern: "dots";
        patternColor: string;
        patternOpacity: number;
    };
    cta: {
        backgroundColor: string;
        pattern: "dots";
        patternColor: string;
        patternOpacity: number;
        gradient: string;
    };
    stats: {
        backgroundColor: string;
        pattern: "crosses";
        patternColor: string;
        patternOpacity: number;
    };
    terminal: {
        backgroundColor: string;
        pattern: "none";
    };
};
/** Names of the predefined section themes. */
type SectionThemeName = keyof typeof sectionThemeDefs;
/**
 * Predefined themes, keyed by a closed union so that `sectionThemes[name]`
 * is known to exist. Declaring this as `Record<string, …>` would erase the
 * literal keys and make every lookup `SectionThemeConfig | undefined`.
 */
declare const sectionThemes: Record<SectionThemeName, SectionThemeConfig>;
interface ThemedSectionProps extends Omit<React.HTMLAttributes<HTMLElement>, "children"> {
    /** Theme preset name or custom config */
    theme: SectionThemeName | SectionThemeConfig;
    /** Section content */
    children: React.ReactNode;
    /** Custom CSS variables for the section */
    cssVars?: Record<string, string>;
    /** Whether to include pattern (default: true) */
    showPattern?: boolean;
}
/**
 * ThemedSection - A section wrapper that applies visual territory theming.
 *
 * Applies consistent background patterns, colors, and gradients based on
 * predefined themes or custom configurations.
 *
 * @example
 * <ThemedSection theme="architecture">
 *   <h2>Architecture</h2>
 *   <CodeBlock />
 * </ThemedSection>
 *
 * @example
 * <ThemedSection
 *   theme={{
 *     backgroundColor: "bg-[var(--neutral-2)]",
 *     pattern: "grid",
 *     patternColor: "hsl(var(--accent))",
 *     patternOpacity: 0.05,
 *   }}
 * >
 *   Custom themed content
 * </ThemedSection>
 */
declare const ThemedSection: React.ForwardRefExoticComponent<ThemedSectionProps & React.RefAttributes<HTMLElement>>;

export { BentoGrid, type BentoGridProps, type BentoItem, SectionContainer, type SectionContainerProps, SectionContainerRoot, SectionContent, type SectionContentProps, SectionFooter, type SectionFooterProps, SectionHeader, type SectionHeaderProps, type SectionThemeConfig, ThemedSection, type ThemedSectionProps, sectionThemes };
