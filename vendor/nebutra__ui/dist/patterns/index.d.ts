import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import { HTMLAttributes, ReactNode, ComponentType } from 'react';
import { Icon } from '@nebutra/icons';

interface ArtifactShiftCardProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    contentClassName?: string;
}
interface ArtifactShiftCardPreviewProps extends HTMLAttributes<HTMLElement> {
    filename: string;
    language: string;
    code: string;
    label: string;
    maxLines?: number;
    signals?: readonly string[];
}
type ArtifactShiftCardFooterProps = HTMLAttributes<HTMLElement>;
declare function ArtifactShiftCard({ className, contentClassName, children, ...props }: ArtifactShiftCardProps): react_jsx_runtime.JSX.Element;
declare function ArtifactShiftCardPreview({ filename, language, code, label, maxLines, signals, className, ...props }: ArtifactShiftCardPreviewProps): react_jsx_runtime.JSX.Element;
declare function ArtifactShiftCardFooter({ className, ...props }: ArtifactShiftCardFooterProps): react_jsx_runtime.JSX.Element;

type CardVariant = "default" | "elevated" | "bordered" | "ghost" | "gradient";
type CardPadding = "none" | "sm" | "md" | "lg";
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: CardVariant;
    padding?: CardPadding;
    asChild?: boolean;
}
declare const CardRoot: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>>;
interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    spacing?: "sm" | "md" | "lg";
}
declare const CardHeader: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
type CardBodyProps = React.HTMLAttributes<HTMLDivElement>;
declare const CardBody: React.ForwardRefExoticComponent<CardBodyProps & React.RefAttributes<HTMLDivElement>>;
type CardFooterProps = React.HTMLAttributes<HTMLDivElement>;
declare const CardFooter: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
interface CardIconProps extends React.HTMLAttributes<HTMLDivElement> {
    size?: "sm" | "md" | "lg";
}
declare const CardIcon: React.ForwardRefExoticComponent<CardIconProps & React.RefAttributes<HTMLDivElement>>;
interface CardTitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
    as?: "h2" | "h3" | "h4" | "h5" | "h6";
}
declare const CardTitle: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
interface CardDescriptionProps extends React.HTMLAttributes<HTMLParagraphElement | HTMLDivElement> {
    as?: React.ElementType;
}
declare const CardDescription: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLDivElement | HTMLParagraphElement>>;
declare const Card: React.ForwardRefExoticComponent<CardProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<CardHeaderProps & React.RefAttributes<HTMLDivElement>>;
    Body: React.ForwardRefExoticComponent<CardBodyProps & React.RefAttributes<HTMLDivElement>>;
    Footer: React.ForwardRefExoticComponent<CardFooterProps & React.RefAttributes<HTMLDivElement>>;
    Icon: React.ForwardRefExoticComponent<CardIconProps & React.RefAttributes<HTMLDivElement>>;
    Title: React.ForwardRefExoticComponent<CardTitleProps & React.RefAttributes<HTMLHeadingElement>>;
    Description: React.ForwardRefExoticComponent<CardDescriptionProps & React.RefAttributes<HTMLDivElement | HTMLParagraphElement>>;
};

interface CommandBoxProps extends React.HTMLAttributes<HTMLDivElement> {
    command: string;
    prefix?: string;
    showCopyButton?: boolean;
    variant?: "default" | "minimal" | "pill";
    onCopy?: () => void;
}
declare const CommandBox: React.ForwardRefExoticComponent<CommandBoxProps & React.RefAttributes<HTMLDivElement>>;

type DashboardMetricTone = "neutral" | "blue" | "green" | "amber";
interface DashboardCommandSurfaceProps {
    status?: ReactNode;
    title: ReactNode;
    description?: ReactNode;
    actions?: ReactNode;
    children?: ReactNode;
    className?: string;
}
declare function DashboardCommandSurface({ status, title, description, actions, children, className, }: DashboardCommandSurfaceProps): react_jsx_runtime.JSX.Element;
interface DashboardPanelProps {
    title: ReactNode;
    description?: ReactNode;
    meta?: ReactNode;
    action?: ReactNode;
    children: ReactNode;
    className?: string;
    headerClassName?: string;
}
declare function DashboardPanel({ title, description, meta, action, children, className, headerClassName, }: DashboardPanelProps): react_jsx_runtime.JSX.Element;
interface DashboardMetricTileProps {
    label: ReactNode;
    value: ReactNode;
    detail?: ReactNode;
    source?: ReactNode;
    icon?: ComponentType<{
        className?: string;
        "aria-hidden"?: boolean;
    }>;
    tone?: DashboardMetricTone;
    className?: string;
}
declare function DashboardMetricTile({ label, value, detail, source, icon: Icon, tone, className, }: DashboardMetricTileProps): react_jsx_runtime.JSX.Element;

type GalleryCardIconTone = "neutral" | "blue" | "cyan" | "purple" | "amber" | "green" | "pink";
type GalleryCardBadgeTone = "beta" | "new" | "owner" | "featured" | "coming-soon";
interface GalleryCardMetadata {
    /** Author / publisher name, e.g. "By MiniMax" */
    author?: string;
    /** Pre-formatted secondary metric, e.g. "710478 浏览量" or "1.2k uses" */
    metric?: string;
    /** Custom metadata slot at end (e.g. star count, last updated) */
    trailing?: React.ReactNode;
}
interface GalleryCardBadge {
    label: string;
    tone: GalleryCardBadgeTone;
}
interface GalleryCardAction {
    id: string;
    label: string;
    onSelect: () => void;
    destructive?: boolean;
}
interface GalleryCardRenderLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string;
    "aria-label"?: string;
}
interface GalleryCardProps {
    title: string;
    description?: string;
    /** Icon at top-left (16-24px). Common: emoji, lucide icon, or 32x32 avatar */
    icon?: React.ReactNode;
    /** Color hint for the icon background tile */
    iconTone?: GalleryCardIconTone;
    /** Optional badge rendered inline next to title (e.g. "Featured", "Beta") */
    badge?: GalleryCardBadge;
    /** Pin/star indicator at top-right (boolean) — renders a small Pin icon */
    pinned?: boolean;
    metadata?: GalleryCardMetadata;
    /** Dropdown action menu items at top-right (••• kebab) */
    actions?: GalleryCardAction[];
    /** Click handler for the whole card — makes the card behave as a button */
    onClick?: () => void;
    /** If provided, makes the card a link (renders <a> with onClick, accessible) */
    href?: string;
    /** Replace the rendered link element (e.g. Next.js Link) */
    renderLink?: (props: GalleryCardRenderLinkProps) => React.ReactElement;
    className?: string;
}
declare function GalleryCard(props: GalleryCardProps): React.ReactElement;
declare namespace GalleryCard {
    var displayName: string;
}

type IconComponent = ComponentType<{
    className?: string;
    "aria-hidden"?: boolean;
}>;
type IconInput = IconComponent | ReactNode;
interface KineticFeatureCardProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    icon?: IconInput;
    eyebrow?: ReactNode;
    title: ReactNode;
    description: ReactNode;
    children?: ReactNode;
}
interface KineticCodePreviewProps extends HTMLAttributes<HTMLDivElement> {
    filename?: string;
    language?: string;
    lines: readonly string[];
}
interface KineticConsoleFrameProps extends HTMLAttributes<HTMLDivElement> {
    title?: string;
    status?: ReactNode;
    children: ReactNode;
}
type KineticStepRailProps = HTMLAttributes<HTMLDivElement>;
interface KineticMorphSurfaceProps extends HTMLAttributes<HTMLDivElement> {
    activeKey?: string | number;
    children: ReactNode;
}
interface KineticSignalMarqueeProps extends HTMLAttributes<HTMLDivElement> {
    eyebrow?: ReactNode;
    children: ReactNode;
}
interface KineticCommandBoxProps extends HTMLAttributes<HTMLDivElement> {
    command: string;
    copyLabel: string;
    copiedLabel: string;
}
interface KineticStepProps extends Omit<HTMLAttributes<HTMLElement>, "title"> {
    icon?: IconComponent;
    index: number;
    title: ReactNode;
    description: ReactNode;
    phaseLabel?: string;
}
declare function KineticFeatureCard({ icon, eyebrow, title, description, children, className, ...props }: KineticFeatureCardProps): react_jsx_runtime.JSX.Element;
declare function KineticCodePreview({ filename, language, lines, className, ...props }: KineticCodePreviewProps): react_jsx_runtime.JSX.Element;
declare function KineticConsoleFrame({ title, status, children, className, ...props }: KineticConsoleFrameProps): react_jsx_runtime.JSX.Element;
declare function KineticMorphSurface({ activeKey, className, children, ...props }: KineticMorphSurfaceProps): react_jsx_runtime.JSX.Element;
declare function KineticSignalMarquee({ eyebrow, className, children, ...props }: KineticSignalMarqueeProps): react_jsx_runtime.JSX.Element;
declare function KineticCommandBox({ command, copyLabel, copiedLabel, className, ...props }: KineticCommandBoxProps): react_jsx_runtime.JSX.Element;
declare function KineticStepRail({ className, children, ...props }: KineticStepRailProps): react_jsx_runtime.JSX.Element;
declare function KineticStep({ icon: Icon, index, title, description, phaseLabel, className, ...props }: KineticStepProps): react_jsx_runtime.JSX.Element;

interface MarkdownEditorProps {
    value: string;
    onChange: (next: string) => void;
    placeholder?: string;
    /** @default 250 */
    minHeight?: number;
    className?: string;
}
declare function MarkdownEditor({ value, onChange, placeholder, minHeight, className, }: MarkdownEditorProps): react_jsx_runtime.JSX.Element;

interface MarkdownRendererProps {
    /** Markdown source. */
    content: string;
    className?: string;
}
declare function MarkdownRenderer({ content, className }: MarkdownRendererProps): react_jsx_runtime.JSX.Element;

/**
 * Q&A page shared types.
 *
 * Reusable across any consumer that builds a Stack Overflow-style forum or
 * help center surface. Authoring rules:
 *   - `content` is markdown — react-markdown + remark-gfm renders it
 *   - `timestamp` is an already-formatted display string (e.g. "2h ago",
 *     "Mar 14, 2026"). The pattern does not own time formatting — pair with
 *     RelativeTimeCard upstream for live updates.
 *   - `userVote` of `null` means the current viewer hasn't voted yet
 */
type VoteType = "up" | "down" | null;
interface Author {
    name: string;
    reputation: number;
    badges: {
        gold: number;
        silver: number;
        bronze: number;
    };
    /** Pre-resolved avatar URL. Falls back to initials when omitted. */
    avatar?: string | null;
}
interface QuestionType {
    id: number | string;
    title: string;
    /** Markdown source. */
    content: string;
    author: Author;
    tags: string[];
    votes: number;
    views: number;
    timestamp: string;
    bookmarked: boolean;
    userVote: VoteType;
}
interface AnswerType {
    id: number | string;
    /** Markdown source. */
    content: string;
    author: Author;
    votes: number;
    timestamp: string;
    isAccepted: boolean;
    userVote: VoteType;
}

interface QAPageProps {
    initialQuestion: QuestionType;
    initialAnswers: AnswerType[];
    /** Author resolved upstream for new answer drafts. */
    currentAuthor?: AnswerType["author"];
    /** Called when the user submits a new answer. Markdown source. */
    onSubmitAnswer?: (content: string) => void;
    /** Called when the user votes on the question. */
    onVoteQuestion?: (vote: VoteType) => void;
    /** Called when the user votes on an answer. */
    onVoteAnswer?: (id: AnswerType["id"], vote: VoteType) => void;
    /** Called when the user accepts/unaccepts an answer. */
    onAcceptAnswer?: (id: AnswerType["id"]) => void;
    /** Called when the user toggles the question bookmark. */
    onBookmark?: (next: boolean) => void;
    className?: string;
}
declare function QAPage({ initialQuestion, initialAnswers, currentAuthor, onSubmitAnswer, onVoteAnswer, onVoteQuestion, onAcceptAnswer, onBookmark, className, }: QAPageProps): react_jsx_runtime.JSX.Element;

interface UserInfoProps {
    author: Author;
    timestamp: string;
    /** Verb shown before the timestamp. @default "asked" */
    verb?: string;
    className?: string;
}
declare function UserInfo({ author, timestamp, verb, className }: UserInfoProps): react_jsx_runtime.JSX.Element;

interface VoteButtonsProps {
    votes: number;
    userVote: VoteType;
    onVote: (next: "up" | "down") => void;
    /** @default "default" */
    size?: "default" | "large";
    /** Label that describes what is being voted on (for screen readers). */
    label?: string;
}
declare function VoteButtons({ votes, userVote, onVote, size, label, }: VoteButtonsProps): react_jsx_runtime.JSX.Element;

type SidebarNavBadgeTone = "beta" | "new" | "owner" | "featured" | "coming-soon";
interface SidebarNavBadge {
    label: string;
    tone: SidebarNavBadgeTone;
}
type SidebarNavIcon = React.ComponentType<{
    className?: string;
}>;
interface SidebarNavItem {
    id: string;
    label: string;
    href?: string;
    icon?: SidebarNavIcon;
    badge?: SidebarNavBadge;
    isActive?: boolean;
    external?: boolean;
    onClick?: () => void;
    /** Nested children — 1 level deep max */
    children?: SidebarNavItem[];
    disabled?: boolean;
    /** Controlled expansion for parent items (with children). When provided
     * together with onExpandedChange, the inner Collapsible runs as a
     * controlled component. Falls back to uncontrolled otherwise. */
    expanded?: boolean;
    onExpandedChange?: (next: boolean) => void;
}
/** A single icon-button action rendered inline-right of the section label,
 * revealed only on section hover/focus-within. Max 3 per section. */
interface SidebarNavSectionAction {
    id: string;
    icon: SidebarNavIcon;
    /** Accessible name (also used as title attribute). */
    label: string;
    /** Click handler — required unless `render` is provided. */
    onClick?: () => void;
    /** Optional wrapper to replace the default `<button>` rendering. Receives
     * the default icon-button element so consumers can compose, e.g., a
     * DropdownMenu trigger around it. When provided, `onClick` is ignored. */
    render?: (defaultButton: React.ReactElement) => React.ReactNode;
}
interface SidebarNavSection {
    id: string;
    /** Group label, e.g. "MiniMax 实验室". Hidden when collapsed. */
    label?: string;
    items: SidebarNavItem[];
    /** Hover/focus-revealed actions next to the section label. Skipped in
     * collapsed mode and when empty. Limit to ≤ 3 to keep visual rhythm. */
    actions?: SidebarNavSectionAction[];
}
interface SidebarNavRenderLinkProps {
    href: string;
    children: React.ReactNode;
    className?: string | undefined;
    "aria-current"?: "page" | undefined;
    "aria-label"?: string | undefined;
    onClick?: (() => void) | undefined;
}
interface SidebarNavProps {
    sections: SidebarNavSection[];
    /** Icon-only mode. Section labels hidden; items show tooltip on hover. */
    collapsed?: boolean;
    className?: string;
    itemClassName?: string;
    /** Slot rendered above sections (e.g. logo + workspace switcher). */
    header?: React.ReactNode;
    /** Slot rendered below sections (e.g. theme toggle, sign-out). */
    footer?: React.ReactNode;
    /** When provided, this is used to render link items. Default: <a>. */
    renderLink?: (props: SidebarNavRenderLinkProps) => React.ReactElement;
}
declare function SidebarNav({ sections, collapsed, className, itemClassName, header, footer, renderLink, }: SidebarNavProps): React.ReactElement;

type TerminalVariant = "default" | "minimal" | "glass";
interface TerminalProps extends React.HTMLAttributes<HTMLDivElement> {
    variant?: TerminalVariant;
}
declare const TerminalRoot: React.ForwardRefExoticComponent<TerminalProps & React.RefAttributes<HTMLDivElement>>;
interface TerminalHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
    title?: string;
    showControls?: boolean;
}
declare const TerminalHeader: React.ForwardRefExoticComponent<TerminalHeaderProps & React.RefAttributes<HTMLDivElement>>;
type TerminalBodyProps = React.HTMLAttributes<HTMLDivElement>;
declare const TerminalBody: React.ForwardRefExoticComponent<TerminalBodyProps & React.RefAttributes<HTMLDivElement>>;
interface TerminalLineProps extends React.HTMLAttributes<HTMLDivElement> {
    prompt?: string;
    output?: boolean;
    highlight?: boolean;
}
declare const TerminalLine: React.ForwardRefExoticComponent<TerminalLineProps & React.RefAttributes<HTMLDivElement>>;
declare const Terminal: React.ForwardRefExoticComponent<TerminalProps & React.RefAttributes<HTMLDivElement>> & {
    Header: React.ForwardRefExoticComponent<TerminalHeaderProps & React.RefAttributes<HTMLDivElement>>;
    Body: React.ForwardRefExoticComponent<TerminalBodyProps & React.RefAttributes<HTMLDivElement>>;
    Line: React.ForwardRefExoticComponent<TerminalLineProps & React.RefAttributes<HTMLDivElement>>;
};

interface UserMenuUser {
    id?: string;
    name: string;
    email?: string;
    avatarUrl?: string;
    /** Initials fallback — defaults to first 2 chars of name */
    initials?: string;
}
interface UserMenuItem {
    id: string;
    label: string;
    icon?: Icon | React.ComponentType<{
        className?: string;
    }>;
    /** Keyboard shortcut hint, e.g. "⌘," — rendered with <Kbd> */
    shortcut?: string;
    onSelect?: () => void;
    /** If present, item renders as a link */
    href?: string;
    /** Destructive items render in red (e.g. "Sign out") */
    destructive?: boolean;
    disabled?: boolean;
}
interface UserMenuGroup {
    id: string;
    label?: string;
    items: UserMenuItem[];
}
interface UserMenuProps {
    user: UserMenuUser;
    /** Groups of action items (e.g. [{ items: [Profile, Settings] }, { items: [Signout] }]) */
    groups: UserMenuGroup[];
    /** Slot rendered above groups — typically a <WorkspaceSwitcher /> or "Workspaces" section */
    workspaceSlot?: React.ReactNode;
    /** Optional render override for the trigger — default is Avatar */
    renderTrigger?: (user: UserMenuUser) => React.ReactNode;
    /** Optional render override for links (e.g. Next.js Link) */
    renderLink?: (props: {
        href: string;
        children: React.ReactNode;
    }) => React.ReactElement;
    className?: string;
    /** Dropdown align (default "end") */
    align?: "start" | "center" | "end";
}
declare function UserMenu(props: UserMenuProps): React.ReactElement;
declare namespace UserMenu {
    var displayName: string;
}

type WorkspaceRole = "owner" | "admin" | "member" | "guest";
interface Workspace {
    id: string;
    name: string;
    slug?: string;
    /** Avatar URL — fallback to gradient initials if absent */
    avatarUrl?: string;
    /** Initials/abbreviation — defaults to first 2 chars of name */
    initials?: string;
    /** User's role in this workspace */
    role?: WorkspaceRole;
    /** Plan tier — rendered as a subtle subline ("Pro", "Free") */
    plan?: string;
}
interface WorkspaceSwitcherProps {
    workspaces: Workspace[];
    activeWorkspaceId: string;
    onSwitch: (workspaceId: string) => void | Promise<void>;
    /** Compact = avatar + chevron only; Expanded = avatar + name + role */
    variant?: "compact" | "expanded";
    /** Bottom of dropdown — e.g. <Link href="/workspaces/new">Create workspace</Link> */
    footerSlot?: React.ReactNode;
    /** Optional header in dropdown above the workspace list */
    headerSlot?: React.ReactNode;
    className?: string;
    /** Show "Owner" badge next to active workspace name in trigger */
    showRoleBadge?: boolean;
    /** Disable trigger (e.g. only one workspace) */
    disabled?: boolean;
}
declare function WorkspaceSwitcher({ workspaces, activeWorkspaceId, onSwitch, variant, footerSlot, headerSlot, className, showRoleBadge, disabled, }: WorkspaceSwitcherProps): React.ReactElement;

export { type AnswerType, ArtifactShiftCard, ArtifactShiftCardFooter, type ArtifactShiftCardFooterProps, ArtifactShiftCardPreview, type ArtifactShiftCardPreviewProps, type ArtifactShiftCardProps, type Author, Card, CardBody, type CardBodyProps, CardDescription, type CardDescriptionProps, CardFooter, type CardFooterProps, CardHeader, type CardHeaderProps, CardIcon, type CardIconProps, type CardProps, CardRoot, CardTitle, type CardTitleProps, CommandBox, type CommandBoxProps, DashboardCommandSurface, type DashboardCommandSurfaceProps, DashboardMetricTile, type DashboardMetricTileProps, DashboardPanel, type DashboardPanelProps, GalleryCard, type GalleryCardAction, type GalleryCardBadge, type GalleryCardBadgeTone, type GalleryCardIconTone, type GalleryCardMetadata, type GalleryCardProps, type GalleryCardRenderLinkProps, KineticCodePreview, type KineticCodePreviewProps, KineticCommandBox, type KineticCommandBoxProps, KineticConsoleFrame, type KineticConsoleFrameProps, KineticFeatureCard, type KineticFeatureCardProps, KineticMorphSurface, type KineticMorphSurfaceProps, KineticSignalMarquee, type KineticSignalMarqueeProps, KineticStep, type KineticStepProps, KineticStepRail, type KineticStepRailProps, MarkdownEditor, type MarkdownEditorProps, MarkdownRenderer, type MarkdownRendererProps, QAPage, type QAPageProps, type QuestionType, SidebarNav, type SidebarNavBadge, type SidebarNavBadgeTone, type SidebarNavIcon, type SidebarNavItem, type SidebarNavProps, type SidebarNavRenderLinkProps, type SidebarNavSection, type SidebarNavSectionAction, Terminal, TerminalBody, type TerminalBodyProps, TerminalHeader, type TerminalHeaderProps, TerminalLine, type TerminalLineProps, type TerminalProps, TerminalRoot, UserInfo, type UserInfoProps, UserMenu, type UserMenuGroup, type UserMenuItem, type UserMenuProps, type UserMenuUser, VoteButtons, type VoteButtonsProps, type VoteType, type Workspace, type WorkspaceRole, WorkspaceSwitcher, type WorkspaceSwitcherProps };
