export { ActionIcon, ActionIconGroup, Alert, Avatar, Button, Checkbox, DraggablePanel, DraggablePanelBody, DraggablePanelContainer, DraggablePanelFooter, DraggablePanelHeader, Flexbox, FlexboxProps, Form, FormGroup, FormItem, Highlighter, Image, Input, List, Markdown, Menu, Modal, SearchBar, Segmented, Select, SideNav, Tag, TextArea, Tooltip } from '@lobehub/ui';
export { ChatInputArea, ChatItem, ChatItemProps, ChatList, ChatListProps, ChatMessage, MessageInput, MessageModal } from '@lobehub/ui/chat';
export { default as Spotlight } from '@lobehub/ui/es/awesome/Spotlight/Spotlight';
export { AnimatePresence, HTMLMotionProps, LayoutGroup, LazyMotion, MotionConfig, MotionProps, MotionStyle, MotionValue, Transition, Variants, animate, domAnimation, m, motion, useAnimationFrame, useInView, useMotionTemplate, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform, useVelocity } from 'framer-motion';
export { A as AnimatedCard, a as AnimatedDrawer, b as AnimatedList, c as AnimatedModal, d as AnimatedPopover, e as AnimationDuration, f as AnimationTransition, F as FadeIn, P as PageTransition, S as ScaleIn, g as SlideIn, h as animatedList, i as animatedListItem, j as animationDistances, k as animationDurations, l as animationEasings, m as animationSprings, n as animationTransitions, o as drawerSurface, p as fadeIn, q as modalSurface, r as pageTransition, s as popoverSurface, t as reducedMotionVariants, u as scaleIn, v as slideIn } from '../tokens-EAC6uPem.js';
import * as react_jsx_runtime from 'react/jsx-runtime';
import * as React from 'react';
import React__default, { ReactNode } from 'react';
import { GraphEdge, GraphNode, Graph } from '@nebutra/graph-model';

declare const isImageFile: (file: File) => boolean;
declare const getFilePreviewKey: (file: File) => string;
declare const preventDragDefaults: (e: React__default.DragEvent) => void;
interface ImageViewDialogProps {
    imageUrl: string | null;
    onClose: () => void;
}
declare const ImageViewDialog: React__default.FC<ImageViewDialogProps>;
type PromptAttachmentPreviewsProps = {
    files: File[];
    filePreviews: Record<string, string>;
    isRecording: boolean;
    onPreview: (imageUrl: string) => void;
    onRemove: (file: File) => void;
};
declare function PromptAttachmentPreviews({ files, filePreviews, isRecording, onPreview, onRemove, }: PromptAttachmentPreviewsProps): react_jsx_runtime.JSX.Element | null;

interface PromptInputBoxProps {
    onSend?: (message: string, files?: File[]) => void;
    isLoading?: boolean;
    placeholder?: string;
    className?: string;
    ref?: React__default.Ref<HTMLDivElement>;
}
declare const PromptInputBox: React__default.FC<PromptInputBoxProps>;

declare const MAX_VISUALIZER_BARS = 64;
declare const VISUALIZER_BAR_STYLES: {
    id: string;
    height: string;
    animationDelay: string;
    animationDuration: string;
}[];
declare const formatRecordingTime: (seconds: number) => string;
interface VoiceRecorderProps {
    isRecording: boolean;
    time: number;
    visualizerBars?: number;
}
declare const VoiceRecorder: React__default.FC<VoiceRecorderProps>;

declare const PRESETS: {
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
            duration: 0.5;
            ease: [number, number, number, number];
        };
    };
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
            duration: 0.3;
            ease: [number, number, number, number];
        };
    };
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
    readonly fadeUp: {
        readonly initial: {
            readonly opacity: 0;
            readonly y: 16;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly y: 0;
        };
        readonly exit: {
            readonly opacity: 0;
            readonly y: 16;
        };
        readonly transition: {
            type: "spring";
            stiffness: 200;
            damping: 24;
            mass: 1;
        };
    };
    readonly scale: {
        readonly initial: {
            readonly opacity: 0;
            readonly scale: 0.95;
        };
        readonly animate: {
            readonly opacity: 1;
            readonly scale: 1;
        };
        readonly exit: {
            readonly opacity: 0;
            readonly scale: 0.95;
        };
        readonly transition: {
            type: "spring";
            stiffness: 200;
            damping: 24;
            mass: 1;
        };
    };
};
type Preset = keyof typeof PRESETS;
declare const STAGGER: {
    readonly fast: 0.05;
    readonly normal: 0.1;
    readonly slow: 0.2;
};
interface AnimateInProps {
    children: React.ReactNode;
    preset?: Preset;
    delay?: number;
    duration?: number;
    inView?: boolean;
    className?: string;
}
declare function AnimateIn(props: AnimateInProps): react_jsx_runtime.JSX.Element;
interface AnimateInGroupProps {
    children: React.ReactNode;
    stagger?: keyof typeof STAGGER;
    inView?: boolean;
    className?: string;
}
declare function AnimateInGroup(props: AnimateInGroupProps): react_jsx_runtime.JSX.Element;

interface AsciiTextProps {
    text: string;
    className?: string;
    font?: any;
}
declare function AsciiText({ text, className, font }: AsciiTextProps): react_jsx_runtime.JSX.Element;

interface ChangelogEntry {
    version: string;
    title: string;
    date: string;
    tag?: string;
    tagColor?: string;
    excerpt: string;
    url: string;
}
interface ChangelogWidgetProps {
    entries: ChangelogEntry[];
    changelogUrl?: string;
    className?: string;
}
declare function ChangelogWidget({ entries, changelogUrl, className, }: ChangelogWidgetProps): react_jsx_runtime.JSX.Element;

/**
 * Pure mapping layer between a neutral `@nebutra/graph-model` graph and the
 * `@xyflow/react` view model. Framework-free on purpose: no React, no DOM,
 * no domain types — every function is a referentially-transparent transform,
 * generic over the caller's node/edge specialization.
 *
 * Domain knowledge (how to build an edge from a connection, an edge's stable
 * identity) is INJECTED, so this library never depends on `@nebutra/reel` or
 * any feature package. The graph is the source of truth; xyflow shapes are
 * derived; gestures are translated back into a *new* immutable graph with all
 * non-structural fields preserved.
 */

/** Stable, collision-free identity for an edge (injected per domain). */
type EdgeIdentity<E extends GraphEdge> = (edge: E) => string;
/** Build a domain edge from an xyflow connection, or reject it (null). */
type MakeEdge<E extends GraphEdge> = (from: string, to: string, targetHandle: string | null) => E | null;
/** xyflow's connection payload (source/target may be null mid-drag). */
interface FlowConnection {
    source: string | null;
    target: string | null;
    sourceHandle: string | null;
    targetHandle: string | null;
}

/** Domain-supplied presentation for one node. */
interface NodeView {
    readonly label: string;
    readonly subtitle?: string;
    readonly icon?: ReactNode;
    /** Drives the accent border (e.g. "has produced output"). */
    readonly ready?: boolean;
}
interface NodeGraphCanvasProps<N extends GraphNode, E extends GraphEdge, G extends Graph<N, E>> {
    /** The graph to render. Treated as the single source of truth. */
    readonly graph: G;
    /** Called with a new immutable graph after every accepted mutation. */
    readonly onChange: (next: G) => void;
    /** Stable identity for an edge (also used for dedupe + removal). */
    readonly edgeIdentity: EdgeIdentity<E>;
    /** Build a domain edge from a connection, or veto it (return null). */
    readonly makeEdge: MakeEdge<E>;
    /** Map a node to its visual presentation. */
    readonly renderNode: (node: N) => NodeView;
    /** When true, the canvas is view/pan/zoom only — no edits. */
    readonly readOnly?: boolean;
    /** Optional extra class on the outer container. */
    readonly className?: string;
}
declare function NodeGraphCanvas<N extends GraphNode, E extends GraphEdge, G extends Graph<N, E>>({ graph, onChange, edgeIdentity, makeEdge, renderNode, readOnly, className, }: NodeGraphCanvasProps<N, E, G>): react_jsx_runtime.JSX.Element;

interface ChecklistItem {
    /** Unique identifier for the item */
    id: number | string;
    /** Main text content */
    text: string;
    /** Optional helper text displayed below */
    helperText?: string;
    /** Optional link displayed after helper text */
    helperLink?: {
        href: string;
        text: string;
    };
}
interface OnboardingChecklistProps {
    /** Main heading for the checklist */
    title: string;
    /** Description displayed below the title */
    description: string;
    /** Array of checklist items to display */
    items: ChecklistItem[];
    /** URL for the video thumbnail image */
    videoThumbnailUrl: string;
    /** Embed URL for the video (YouTube, Vimeo, etc.) */
    videoUrl: string;
    /** Additional CSS classes */
    className?: string;
}
/**
 * OnboardingChecklist - Animated checklist with video guide
 *
 * @description
 * A responsive onboarding component that displays a checklist of items
 * alongside a video thumbnail that opens in a modal dialog.
 *
 * @example Basic usage
 * ```tsx
 * <OnboardingChecklist
 *   title="Get Started"
 *   description="Complete these steps to set up your account"
 *   items={[
 *     { id: 1, text: "Create your profile" },
 *     { id: 2, text: "Add your first project" },
 *     {
 *       id: 3,
 *       text: "Invite team members",
 *       helperText: "Need help?",
 *       helperLink: { href: "/docs", text: "Read the guide" }
 *     },
 *   ]}
 *   videoThumbnailUrl="https://example.com/thumbnail.jpg"
 *   videoUrl="https://youtube.com/embed/xxx"
 * />
 * ```
 */
declare function OnboardingChecklist({ title, description, items, videoThumbnailUrl, videoUrl, className, }: OnboardingChecklistProps): react_jsx_runtime.JSX.Element;

interface ChatSender {
    /** Display name */
    name: string;
    /** Avatar URL */
    avatar: string;
    /** Online status */
    isOnline: boolean;
}
interface ChatReaction {
    /** Emoji character */
    emoji: string;
    /** Number of reactions */
    count: number;
    /** Whether current user has reacted */
    reacted: boolean;
}
interface ChatMessage {
    /** Unique message identifier */
    id: string;
    /** Message text content */
    content: string;
    /** Sender information */
    sender: ChatSender;
    /** Display timestamp */
    timestamp: string;
    /** Delivery status */
    status: "sent" | "delivered" | "read";
    /** Optional reactions */
    reactions?: ChatReaction[];
}
interface TeamChatProps {
    /** Chat/channel name */
    chatName: string;
    /** Optional tagline under the name */
    tagline?: string;
    /** Array of messages to display */
    messages: ChatMessage[];
    /** Placeholder text for input */
    inputPlaceholder?: string;
    /** Callback when send button clicked */
    onSendMessage?: (message: string) => void;
    /** Callback when reaction clicked */
    onReactionClick?: (messageId: string, emoji: string) => void;
    /** Callback when more options clicked */
    onMoreOptions?: () => void;
    /** Additional CSS classes */
    className?: string;
}
/**
 * TeamChat - Team messaging interface with participant sidebar
 *
 * @description
 * A full-featured team chat UI component with participant list,
 * message display with reactions, and message input.
 *
 * @example
 * ```tsx
 * <TeamChat
 *   chatName="Engineering Team"
 *   tagline="Ship fast, ship often"
 *   messages={[
 *     {
 *       id: "1",
 *       content: "Hey team! Ready for standup?",
 *       sender: { name: "Alice", avatar: "/alice.jpg", isOnline: true },
 *       timestamp: "10:00 AM",
 *       status: "read",
 *     },
 *   ]}
 *   onSendMessage={(msg) => console.log(msg)}
 * />
 * ```
 */
declare function TeamChat({ chatName, tagline, messages, inputPlaceholder, onSendMessage, onReactionClick, onMoreOptions, className, }: TeamChatProps): react_jsx_runtime.JSX.Element;

export { AnimateIn, AnimateInGroup, type AnimateInGroupProps, type AnimateInProps, AsciiText, type ChangelogEntry, ChangelogWidget, type ChangelogWidgetProps, type ChatReaction, type ChatSender, type ChecklistItem, type EdgeIdentity, type FlowConnection, ImageViewDialog, type ImageViewDialogProps, MAX_VISUALIZER_BARS, type MakeEdge, NodeGraphCanvas, type NodeGraphCanvasProps, type NodeView, OnboardingChecklist, type OnboardingChecklistProps, PromptAttachmentPreviews, type PromptAttachmentPreviewsProps, PromptInputBox, type PromptInputBoxProps, TeamChat, type TeamChatProps, VISUALIZER_BAR_STYLES, VoiceRecorder, type VoiceRecorderProps, formatRecordingTime, getFilePreviewKey, isImageFile, preventDragDefaults };
