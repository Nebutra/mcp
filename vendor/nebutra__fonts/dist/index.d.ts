/**
 * @nebutra/fonts — self-hosted OSS font registry (client-safe entry).
 *
 * Maps a normalized theme / DESIGN.md font-family name to the CSS variable that
 * the build-time self-hosted face defines (declared with next/font in
 * `@nebutra/fonts/next`, applied to <html> via `fontRegistryClassName`).
 *
 * WHY: next/font registers each face under a HASHED family name reachable ONLY
 * via its CSS variable — `font-family: 'Inter'` does NOT use the self-hosted
 * Inter. So when a theme / imported DESIGN.md font's primary family matches an
 * entry here, callers prepend `var(--font-…)` to the stack, making the
 * self-hosted font actually render — with ZERO runtime external requests
 * (next/font self-hosts at build time) and next/font's automatic metric-matched
 * fallback (no layout shift). Unmatched families keep their declared stack.
 *
 * This entry is FREE of `next/font` imports so client modules can use it.
 * The `./next` subpath holds the (server-only) next/font declarations and MUST
 * keep its CSS-variable names in sync with FONT_REGISTRY below.
 */
declare const FONT_REGISTRY: Record<string, string>;
/** The first (primary) family in a CSS font-family list, normalized. */
declare function primaryFamily(stack: string): string;
/** Registry CSS variable for a stack's primary family, or undefined. */
declare function resolveRegistryVar(stack: string): string | undefined;
/**
 * Return `stack` with the self-hosted registry font prepended when its primary
 * family is registered; otherwise return it unchanged.
 * e.g. "Space Grotesk, sans-serif" → "var(--font-space-grotesk), Space Grotesk, sans-serif"
 */
declare function withRegistryFont(stack: string | undefined): string | undefined;
/**
 * Like `withRegistryFont`, but matches the first registered family ANYWHERE in
 * the stack rather than only in first position.
 *
 * A brand package names the typeface the design language actually uses, and
 * those are frequently licensed faces we have no right to serve — Söhne, Mori,
 * Lyon Text, Reckless. The declared stack already says what to do when they are
 * absent: fall to the next family. But "the next family" is usually a bare name
 * like `Inter`, which does NOT reach next/font's hashed face, so the stack
 * skidded past every self-hosted option and landed on `ui-sans-serif`. All
 * seven built-in design languages rendered in the system font until 2026-08-18.
 *
 * Prepending the nearest registered family produces exactly the outcome the
 * declared chain intended, and leaves the licensed names in place so a customer
 * who does own the font still gets it by shipping the face themselves.
 */
declare function withNearestRegistryFont(stack: string | undefined): string | undefined;

export { FONT_REGISTRY, primaryFamily, resolveRegistryVar, withNearestRegistryFont, withRegistryFont };
