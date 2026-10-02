import { c as BrandPackage } from '../types-Zi77gyTk.js';

/**
 * The knobs a preset turns (ADR 2026-09-27 Sailor Studio).
 *
 * Every list is APPEND-ONLY: a preset code stores indexes into these lists,
 * so reordering or removing an entry changes what every published code means.
 * Add at the end; a retired choice stays in place.
 */
/** Base languages a preset starts from. `factory` is the House tokens. */
declare const PRESET_BASES: readonly ["factory", "linear", "gsap", "notion", "raycast", "stripe", "vanta", "vercel", "cosmos"];
type PresetBase = (typeof PRESET_BASES)[number];
/** Temperature of the neutral surfaces and text (hue and chroma; lightness stays). */
declare const PRESET_NEUTRALS: readonly ["base", "cool", "neutral", "warm"];
type PresetNeutral = (typeof PRESET_NEUTRALS)[number];
declare const PRESET_RADII: readonly ["base", "none", "sm", "md", "lg", "full"];
type PresetRadius = (typeof PRESET_RADII)[number];
declare const PRESET_DENSITIES: readonly ["base", "compact", "comfortable", "spacious"];
type PresetDensity = (typeof PRESET_DENSITIES)[number];
/**
 * Faces self-hosted through @nebutra/fonts (FONT_REGISTRY). A face that is not
 * registered would render in the system font, so only these are offered.
 */
declare const PRESET_SANS: readonly ["base", "Geist", "Inter", "Inter Tight", "DM Sans", "Manrope", "Plus Jakarta Sans", "Figtree", "Work Sans", "Space Grotesk", "Outfit", "Sora", "Lexend", "Montserrat"];
type PresetSans = (typeof PRESET_SANS)[number];
/** Heading face. `sans` sets headings in the body face. */
declare const PRESET_HEADINGS: readonly ["base", "sans", "DM Sans", "Inter Tight", "Space Grotesk", "Sora", "Outfit", "Manrope", "Playfair Display", "Fraunces", "Source Serif 4"];
type PresetHeading = (typeof PRESET_HEADINGS)[number];
declare const PRESET_MONOS: readonly ["base", "Geist Mono", "JetBrains Mono", "Fira Code", "Roboto Mono", "Source Code Pro"];
type PresetMono = (typeof PRESET_MONOS)[number];
declare const PRESET_WEIGHTS: readonly ["base", 400, 500, 600, 700];
type PresetWeight = (typeof PRESET_WEIGHTS)[number];
/** Which mode a visitor sees first. Only a dual-mode language can change it. */
declare const PRESET_MODES: readonly ["base", "light", "dark"];
type PresetMode = (typeof PRESET_MODES)[number];
/** A project's look: a base language and what it overrides. Omitted = "base". */
interface Preset {
    base: PresetBase;
    /** `#rrggbb`. Becomes the action fill (buttons) and the ring (focus, links). */
    brandColor?: string;
    neutral?: PresetNeutral;
    radius?: PresetRadius;
    density?: PresetDensity;
    sans?: PresetSans;
    heading?: PresetHeading;
    mono?: PresetMono;
    headingWeight?: PresetWeight;
    mode?: PresetMode;
    /**
     * Paint the wordmark in the language's brand colour. Off by default: a
     * language's brand colour belongs to its own mark (Linear's lime), and on
     * your product the wordmark reads in ink.
     */
    tintLogo?: boolean;
}
/** Radius slots per choice. `pill` stays round in every choice but `none`. */
declare const RADIUS_VALUES: Record<Exclude<PresetRadius, "base">, {
    button: string;
    card: string;
    badge: string;
    input: string;
    pill: string;
}>;
/** Hue and saturation the neutral roles take; `neutral` is achromatic. */
declare const NEUTRAL_TINTS: Record<Exclude<PresetNeutral, "base">, {
    h: number;
    s: number;
}>;

/**
 * A preset as a short code — the string Studio shows and `nebutra apply
 * --preset` / `create-sailor --preset` take.
 *
 * Every knob is an index into an append-only list (knobs.ts) except the brand
 * colour, so the whole preset packs into 56 bits, written in base62 (about
 * ten characters). No server stores it: the code IS the preset.
 *
 * Layout, least significant bits first. The version sits lowest so a decoder
 * reads it before anything whose meaning a later version might change.
 *
 *   version 3 · base 5 · neutral 2 · radius 3 · density 2 · sans 4 ·
 *   heading 4 · mono 3 · weight 3 · mode 2 · hasColor 1 · color 24 · tintLogo 1
 *
 * A field added later goes at the most significant end: every code written
 * before it decodes with that field at 0, which must mean "as before".
 */
declare const PRESET_CODE_VERSION = 1;
declare class PresetCodeError extends Error {
    constructor(message: string);
}
declare function encodePreset(preset: Preset): string;
declare function decodePreset(code: string): Preset;
/**
 * What `--preset` accepts: a code, or a base language id on its own
 * (`nebutra apply --preset linear`), which is that language unchanged.
 */
declare function parsePreset(input: string): Preset;

/**
 * The House tokens (`factory`) as a Brand Package, so a preset can start from
 * them like from any language. Built from TOKEN_VALUES — the same values
 * styles.css ships — so nothing here restates a colour.
 *
 * A preset that changes nothing over factory emits nothing (the project keeps
 * styles.css as is); this package is only the base the knobs act on.
 */
declare function factoryBrandPackage(): BrandPackage;

interface ResolvedPreset {
    brand: BrandPackage;
    /** Knobs the base cannot honour (a light mode for a dark-only language). */
    warnings: string[];
}
/**
 * A preset applied to its base language: the Brand Package the emit pipeline
 * turns into CSS. Pure — the caller supplies the base package (read from
 * brands/<id>/brand.json, or factoryBrandPackage() for `factory`), so this runs
 * the same in Studio's browser preview and in the project build.
 */
declare function resolvePreset(preset: Preset, base: BrandPackage, identity: {
    id: string;
    name: string;
    code?: string;
}): ResolvedPreset;

declare const PRESET_SCHEMA_ID: string;
/** JSON Schema (draft 2020-12) for a Preset. Every field but `base` may be omitted, meaning "base". */
declare function presetJsonSchema(): Record<string, unknown>;
/**
 * Read an agent's JSON into a Preset. Unknown fields and out-of-list values
 * are errors, not silently dropped: an agent must learn what it got wrong.
 * `"base"` values are dropped, since omitted already means base.
 */
declare function presetFromJson(input: unknown): Preset;
/**
 * What an agent may hand over: a preset object, its JSON text, a preset code,
 * a base id, or a Studio / acme URL carrying `?preset=`.
 */
declare function readPresetInput(input: unknown): Preset;
declare const STUDIO_URL: string;
/** The code `--preset` takes: a bare base id when nothing is overridden. */
declare function presetArgument(preset: Preset): string;
/** The Studio link that opens this preset for review, marked as an agent's proposal. */
declare function studioReviewUrl(preset: Preset): string;

export { NEUTRAL_TINTS, PRESET_BASES, PRESET_CODE_VERSION, PRESET_DENSITIES, PRESET_HEADINGS, PRESET_MODES, PRESET_MONOS, PRESET_NEUTRALS, PRESET_RADII, PRESET_SANS, PRESET_SCHEMA_ID, PRESET_WEIGHTS, type Preset, type PresetBase, PresetCodeError, type PresetDensity, type PresetHeading, type PresetMode, type PresetMono, type PresetNeutral, type PresetRadius, type PresetSans, type PresetWeight, RADIUS_VALUES, type ResolvedPreset, STUDIO_URL, decodePreset, encodePreset, factoryBrandPackage, parsePreset, presetArgument, presetFromJson, presetJsonSchema, readPresetInput, resolvePreset, studioReviewUrl };
