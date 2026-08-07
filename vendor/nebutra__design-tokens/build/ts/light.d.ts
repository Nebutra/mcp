/**
 * Do not edit directly, this file was auto-generated.
 */

export const ColorNebutraBlue50: string;
export const ColorNebutraBlue100: string;
export const ColorNebutraBlue200: string;
export const ColorNebutraBlue300: string;
export const ColorNebutraBlue400: string;
/** Base brand color — 云毓蓝 */
export const ColorNebutraBlue500: string;
export const ColorNebutraBlue600: string;
export const ColorNebutraBlue700: string;
export const ColorNebutraBlue800: string;
export const ColorNebutraBlue900: string;
export const ColorNebutraBlue950: string;
export const ColorNebutraCyan50: string;
export const ColorNebutraCyan100: string;
export const ColorNebutraCyan200: string;
export const ColorNebutraCyan300: string;
export const ColorNebutraCyan400: string;
/** Base brand accent — 云毓青 */
export const ColorNebutraCyan500: string;
export const ColorNebutraCyan600: string;
export const ColorNebutraCyan700: string;
export const ColorNebutraCyan800: string;
export const ColorNebutraCyan900: string;
export const ColorNebutraCyan950: string;
export const ColorNebutraNeutral50: string;
export const ColorNebutraNeutral100: string;
export const ColorNebutraNeutral200: string;
export const ColorNebutraNeutral300: string;
export const ColorNebutraNeutral400: string;
export const ColorNebutraNeutral500: string;
export const ColorNebutraNeutral600: string;
export const ColorNebutraNeutral700: string;
export const ColorNebutraNeutral800: string;
export const ColorNebutraNeutral900: string;
export const ColorNebutraNeutral950: string;
export const ColorNebutraGray50: string;
export const ColorNebutraGray100: string;
export const ColorNebutraGray200: string;
export const ColorNebutraGray300: string;
export const ColorNebutraGray400: string;
export const ColorNebutraGray500: string;
export const ColorNebutraGray600: string;
export const ColorNebutraGray700: string;
export const ColorNebutraGray800: string;
export const ColorNebutraGray900: string;
export const ColorNebutraGray950: string;
export const ColorWhite: string;
export const ColorBlack: string;
/** Tertiary accent — data viz, infrastructure tags */
export const ColorTertiaryPurple: string;
export const ColorStatusDanger: string;
export const ColorStatusWarning: string;
/** Tailwind green-500 — VI manual canonical success color (replaces drifted #10b981 emerald). */
export const ColorStatusSuccess: string;
/** Reading-focused (hero copy, FAQ) */
export const SizeContainerText: string;
/** Pricing, blog */
export const SizeContainerContent: string;
/** Feature bento, navbar */
export const SizeContainerWide: string;
/** 420px — narrow-phone grid flip */
export const SizeBreakpointXs: string;
/** 1080px — dense dashboard header horizontal */
export const SizeBreakpointTight: string;
/** 1180px — three-pane shell threshold */
export const SizeBreakpointShell: string;
/** 1800px — 4K / Studio Display friendliness */
export const SizeBreakpoint3xl: string;
/** Job: flush. Edge-to-edge surfaces — a full-bleed table row, a segment welded to its neighbour, an inset that must not round twice. */
export const SizeRadiusNone: string;
/** Job: swatch. The smallest corner that still reads as intentional at 8-12px: chart legend keys, mark highlights, progress and sparkline bar caps. Added because 18 call sites had hand-written 1px, 2px and 3px corners with no step to reach for. Matches the bottom of the Tailwind scale, so rounded-xs and var(--radius-xs) agree. */
export const SizeRadiusXs: string;
/** Job: inner. The corner of something nested inside a control — a thumbnail inside a chip, a swatch inside a tile, a code span inside a paragraph. One step inside md. */
export const SizeRadiusSm: string;
/** Job: control. The default for anything you can click or type into at text height: input, select trigger, small button, menu item, badge with square corners. The most-used step on the ladder. */
export const SizeRadiusMd: string;
/** Job: container. Things that hold controls rather than being one: popover, dropdown surface, tooltip, toolbar, inline code block. Aliased as radius-button. */
export const SizeRadiusLg: string;
/** Job: card. A discrete surface in a list or grid that carries its own padding and elevation. Aliased as radius-card. */
export const SizeRadiusXl: string;
/** Job: panel. A region that holds cards — bento cell, dialog, sheet, dashboard section. Aliased as radius-panel. */
export const SizeRadius2xl: string;
/** Job: frame. The outermost shell of a marketing or docs composition — mockup window, hero frame, screenshot chrome. The top of the ladder. */
export const SizeRadius3xl: string;
/** Job: pill. Fully round by intent, not by size: avatar, dot, toggle track, tag. Kept as one step, not a pair, so there is exactly one way to say round. */
export const SizeRadiusFull: string;
/** Intent alias for the container step. Reach for this in product code instead of lg so the shape can be re-tuned in one place. */
export const SizeRadiusButton: string;
/** Intent alias for the card step. Reach for this in product code instead of xl. */
export const SizeRadiusCard: string;
/** Intent alias for the panel step. Reach for this in product code instead of 2xl. */
export const SizeRadiusPanel: string;
/** Micro-feedback: hover, focus, toggle, button press */
export const DurationMicro: string;
/** State flow: modal open, dropdown reveal, tab switch, default page transition */
export const DurationFlow: string;
/** Content unveil: slide-in, expand, accordion, drawer */
export const DurationReveal: string;
/** Hero-grade entrance: landing reveal, large delight moments */
export const DurationCinematic: string;
export const EasingIn: string;
export const EasingOut: string;
export const EasingInOut: string;
export const EasingSpring: string;
/** Hero H1 */
export const TrackingDisplay: string;
/** Section H2/H3 */
export const TrackingHeading: string;
/** Body emphasis */
export const TrackingTight: string;
export const LeadingDisplay: string;
export const LeadingHeading: string;
/** Etched-glass hairline (light mode value, dark mode override in themes/dark.json) */
export const RingHairline: string;
/** Light-mode faint overlay (6% black) */
export const OverlayFaint: string;
export const FontFamilySans: string;
/** CJK-locale stack — same order as sans, minus the Latin-only system faces */
export const FontFamilyCn: string;
export const FontFamilyDisplay: string;
export const FontFamilyHeading: string;
export const FontFamilyMono: string;
/** Default state-flow transition — 200ms ease-out (matches 200ms). Used by --transition shorthand. */
export const TransitionDefault: {
  duration: string;
  timingFunction: string;
  delay: string;
};
/** Brand primary — 云毓蓝 */
export const BrandPrimary: string;
/** Brand accent — 云毓青 */
export const BrandAccent: string;
export const BrandTertiary: string;
/** Legacy alias of --primary (shadcn product blue). Prefer bg-primary / Button default. */
export const BrandGradientStart: string;
/** Legacy alias of --primary. Prefer hover:bg-primary/90. */
export const BrandGradientEnd: string;
/** Legacy --brand-gradient. Same color as --primary — not a second palette. App CTAs should use Button / bg-primary. */
export const BrandGradientPrimary: string;
/** Legacy alias of --primary. */
export const BrandGradientReverse: string;
/** Legacy alias of --primary. */
export const BrandGradientVertical: string;
/** Legacy alias of --primary. */
export const BrandGradientRadial: string;
/** Logo/VI gradient (云毓蓝→云毓青). Mid stop #00a2e9 is the OKLab perceptual midpoint (avoids sRGB mid-path soft spots). Brand assets only — not product CTAs. */
export const BrandGradientLogo: string;
/** Logo/VI reverse gradient with same OKLab mid stop. */
export const BrandGradientLogoReverse: string;
export const StatusDanger: string;
export const StatusWarning: string;
export const StatusSuccess: string;
/** VI: Info = Brand Blue */
export const StatusInfo: string;
export const ContainerText: string;
export const ContainerContent: string;
export const ContainerWide: string;
/** Geist-matching 6px */
export const RadiusDefault: string;
export const MotionDurationMicro: string;
export const MotionDurationFlow: string;
export const MotionDurationReveal: string;
export const MotionDurationCinematic: string;
/** Single-layer translucent focus ring (2026 pattern). Legacy box-shadow consumers stay compatible; modern surfaces should prefer the global :focus-visible outline rule in static/base.css. */
export const FocusRingDefault: string;
/** app background */
export const ScaleNeutral1: string;
/** subtle background */
export const ScaleNeutral2: string;
/** component bg default */
export const ScaleNeutral3: string;
/** component bg hover */
export const ScaleNeutral4: string;
/** component bg active */
export const ScaleNeutral5: string;
/** subtle border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp step5 → step9 at t=0.25. The $value here is a placeholder anchor only; the preprocessor overwrites it. */
export const ScaleNeutral6: string;
/** default border — DERIVED: OKLab lerp step5 → step9 at t=0.50. */
export const ScaleNeutral7: string;
/** hovered border — DERIVED: OKLab lerp step5 → step9 at t=0.75. */
export const ScaleNeutral8: string;
/** solid fill */
export const ScaleNeutral9: string;
/** solid fill hover */
export const ScaleNeutral10: string;
/** secondary text */
export const ScaleNeutral11: string;
/** primary text */
export const ScaleNeutral12: string;
/** app tint — L* 99.01, C 0.003, hue 264. Radix blue-1 sits at L* 99.31 C 0.003. */
export const ScaleBlue1: string;
/** subtle background — L* 97.21, C 0.010. */
export const ScaleBlue2: string;
/** component background default — L* 94.79, C 0.020. */
export const ScaleBlue3: string;
/** component background hover — L* 91.69, C 0.034. */
export const ScaleBlue4: string;
/** component background active — L* 87.77, C 0.052. Anchor for the derived border tier. */
export const ScaleBlue5: string;
/** subtle border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step9 (deep scale, span 32.3 L*) at t=0.25. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 79.61, C 0.093. */
export const ScaleBlue6: string;
/** default border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step9 (deep scale, span 32.3 L*) at t=0.50. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 71.63, C 0.134. */
export const ScaleBlue7: string;
/** hovered border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step9 (deep scale, span 32.3 L*) at t=0.75. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 63.47, C 0.175. */
export const ScaleBlue8: string;
/** solid fill — L* 55.50, C 0.215, hue 264.0. White label 4.99:1, inside the 4.7-5.4 band comparable products ship. Same value as shadcn --primary so the deep solid fill has one source, not two. The VI hex #0033FE (C 0.290, L* 48.4) stays the identity token --brand-primary and is deliberately NOT pinned into this ramp slot: pinning it left steps 6-9 only 3.5 L* apart with chroma climbing to 0.290. */
export const ScaleBlue9: string;
/** solid fill hover — L* 49.52, C 0.205. White label 6.45:1. */
export const ScaleBlue10: string;
/** secondary text — L* 42.04, C 0.180. 8.60:1 on step 1. */
export const ScaleBlue11: string;
/** primary text — L* 23.91, C 0.115. 16.38:1 on step 1. */
export const ScaleBlue12: string;
/** Label ink for the solid fill tier. Absolute value, identical in both modes: a deep fill always takes white, never the scale's own step 12, which is light in dark mode. 4.99:1 on step 9, 6.45:1 on step 10. */
export const ScaleBlueContrast: string;
/** app tint — L* 99.05, C 0.005, hue 172. */
export const ScaleCyan1: string;
/** subtle background — L* 97.81, C 0.014. */
export const ScaleCyan2: string;
/** component background default — L* 95.68, C 0.035. */
export const ScaleCyan3: string;
/** component background hover — L* 93.29, C 0.058. */
export const ScaleCyan4: string;
/** component background active — L* 90.27, C 0.086. Anchor for the derived border tier. */
export const ScaleCyan5: string;
/** subtle border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step10 (bright scale: |L9-L5| = 4.9 L* < 6.0, so the tier continues toward step 10) at t=0.25. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 88.38, C 0.102. */
export const ScaleCyan6: string;
/** default border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step10 (bright scale: |L9-L5| = 4.9 L* < 6.0, so the tier continues toward step 10) at t=0.50. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 86.50, C 0.119. */
export const ScaleCyan7: string;
/** hovered border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step10 (bright scale: |L9-L5| = 4.9 L* < 6.0, so the tier continues toward step 10) at t=0.75. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 84.42, C 0.134. */
export const ScaleCyan8: string;
/** solid fill — bright scale, so the fill is LIGHT and takes dark ink: L* 85.41, C 0.164, hue 172.1. Ink 10.35:1 against --cyan-contrast. Step 9 legitimately sits above step 8 on a bright scale, exactly as Radix mint does (8 at L* 72.2, 9 at L* 87.0). */
export const ScaleCyan9: string;
/** solid fill hover — L* 82.61, C 0.150. 2.80 L* below step 9, matching Radix mint's own 2.95 L* step9-to-step10 drop, so hovering the bright fill deepens it slightly instead of collapsing past its own border tier. The previous value was 10.87 L* below step 9 and landed DARKER than step 8. Ink 9.40:1. */
export const ScaleCyan10: string;
/** secondary text — L* 51.64, C 0.100. 5.17:1 on step 1. */
export const ScaleCyan11: string;
/** primary text — L* 33.45, C 0.065. 11.35:1 on step 1. */
export const ScaleCyan12: string;
/** Label ink for the bright fill tier. Absolute near-black, identical in both modes, carrying a trace of the scale hue. A bright fill needs an explicit dark ink; comparing white against the scale's own step 12 picks white in dark mode, where step 12 is light, and measures 1.52:1. 10.35:1 on step 9, 9.40:1 on step 10. */
export const ScaleCyanContrast: string;
/** HSL channel triple — consume via hsl(var(--background)) */
export const ShadcnBackground: string;
export const ShadcnForeground: string;
export const ShadcnCard: string;
export const ShadcnCardForeground: string;
export const ShadcnPopover: string;
export const ShadcnPopoverForeground: string;
/** Product action blue. Derived, not borrowed: hue 264 is the VI hue, L* and C were chosen inside the band the industry actually ships (measured OKLCH C 0.167-0.235, L* 54-67 across Vercel, Stripe, Linear, GitHub, Tailwind, Radix, Figma, Notion). #2e65ee = L*55.5 C0.215, white label 4.99:1. The previous 228 85% 56% (#2f56ee, C0.232) also passed at 5.70:1 — this trims it to the middle of the band rather than its top edge. The VI lock --blue-9 (#0033FE, C0.290) is 23% above anything in that band and must never surface on a component. */
export const ShadcnPrimary: string;
export const ShadcnPrimaryForeground: string;
export const ShadcnSecondary: string;
export const ShadcnSecondaryForeground: string;
export const ShadcnMuted: string;
export const ShadcnMutedForeground: string;
export const ShadcnAccent: string;
/** Softer brand blue — desaturated to match --primary, avoids 100% saturation glare on focus/accent */
export const ShadcnAccentForeground: string;
export const ShadcnDestructive: string;
export const ShadcnDestructiveForeground: string;
/** Red as FOREGROUND. In light mode --destructive already passes (5.42:1 on white), so this equals it; the token exists so consumers reference one name across themes. In DARK, --destructive is 0 63% 38% = 2.15:1 on --card, unreadable as text — see dark.json. Mirrors --warning-strong. */
export const ShadcnDestructiveStrong: string;
export const ShadcnSuccess: string;
export const ShadcnSuccessForeground: string;
/** Green as FOREGROUND. --success (142 71% 29%) is 5.15:1 on white but only 4.49:1 as ink on its own 10% tint — one hundredth under AA, which is where badge green-subtle sat. Darkened two points: 5.71:1 on white, 4.99:1 on the tint, alongside --warning-strong (5.40) and --destructive-strong (5.42) so the three status foregrounds read with the same weight. Completes the trio; use --success for fills with --success-foreground on top. */
export const ShadcnSuccessStrong: string;
export const ShadcnWarning: string;
export const ShadcnWarningForeground: string;
/** Amber as FOREGROUND on a light surface. --warning is a fill: at 38 92% 50% it is 2.04:1 against --neutral-2, so it is unreadable as text or as an icon stroke. This darkened step is 5.17:1, which sits between --success (4.92) and --destructive (5.19) so the three status colours read with the same weight. Use --warning for fills with --warning-foreground on top; use this for amber text and icons. Destructive and success need no equivalent — they already pass AA as foreground. */
export const ShadcnWarningStrong: string;
export const ShadcnInfo: string;
export const ShadcnInfoForeground: string;
export const ShadcnBorder: string;
export const ShadcnInput: string;
/** Focus ring — neutral foreground (Vercel/Linear/Cursor 2026 pattern). Brand blue is reserved for selected/active states; focus indication is chrome and stays neutral. Consumed by global :focus-visible outline as hsl(var(--ring) / 0.5). */
export const ShadcnRing: string;
export const ShadcnSidebar: string;
export const ShadcnSidebarForeground: string;
export const ShadcnSidebarPrimary: string;
export const ShadcnSidebarPrimaryForeground: string;
export const ShadcnSidebarAccent: string;
export const ShadcnSidebarAccentForeground: string;
export const ShadcnSidebarBorder: string;
export const ShadcnSidebarRing: string;
export const ShadcnChart1: string;
export const ShadcnChart2: string;
export const ShadcnChart3: string;
export const ShadcnChart4: string;
export const ShadcnChart5: string;
export const DsBlue200: string;
export const DsBlue700: string;
export const DsBlue900: string;
export const DsRed200: string;
export const DsRed700: string;
export const DsRed900: string;
export const DsAmber200: string;
export const DsAmber700: string;
export const DsAmber900: string;
export const DsGreen200: string;
export const DsGreen700: string;
export const DsGreen900: string;
export const DsTeal300: string;
export const DsTeal700: string;
export const DsTeal900: string;
export const DsPurple200: string;
export const DsPurple700: string;
export const DsPurple900: string;
export const DsPink300: string;
export const DsPink700: string;
export const DsPink900: string;
export const DsGray100: string;
export const DsGray200: string;
export const DsGray500: string;
export const DsGray600: string;
export const DsGray700: string;
export const DsGray1000: string;
export const DsBackground100: string;
export const DsTrialStart: string;
export const DsTrialEnd: string;
export const DsTurboStart: string;
export const DsTurboEnd: string;
export const ElevationXs: string;
export const ElevationSm: string;
export const ElevationMd: string;
export const ElevationLg: string;
export const ElevationXl: string;
export const Elevation2xl: string;
export const ElevationBrand: string;
export const ElevationBrandLg: string;
/** Ambient elevation, small. Contact layer plus a wide soft pool — the marketing-surface counterpart to the tight xs..2xl product ramp. */
export const ElevationAmbientSm: string;
/** Ambient elevation, medium. Default resting depth for a floating marketing card. */
export const ElevationAmbientMd: string;
/** Ambient elevation, large. One step up from md; use for hover of a md surface, not as a resting default. */
export const ElevationAmbientLg: string;
/** Ambient-sm plus a lit top edge, for translucent panels over a blurred backdrop. */
export const ElevationGlassSm: string;
/** Ambient-md plus a lit top edge. */
export const ElevationGlassMd: string;
/** Ambient-lg plus a lit top edge. */
export const ElevationGlassLg: string;
/** Top-edge sheen for solid inverted fills (bg-foreground). Lifts with light on a dark fill, with shade on a light one. */
export const ElevationSheen: string;
/** Centred offsetless halo — the only non-directional step on the ramp. For a translucent panel that needs separation from its backdrop without reading as lifted off a surface. In dark mode this inverts to a low-alpha light halo, because a black halo cannot read against a dark surround. */
export const ElevationAmbientGlow: string;
/** Directional pool plus a wide brand-accent halo, for fixed dark-glass surfaces. The pool is theme-invariant black on purpose: the surfaces that carry an accent halo present the same dark glass in both themes, so a theme-flipping pool would lighten in light mode exactly where the panel needs the most separation. Accent sourced from --brand-accent, so it follows the light and dark accent values. */
export const ElevationGlowAccent: string;
/** Hover escalation of glow-accent. Deeper pool, wider and stronger accent halo. */
export const ElevationGlowAccentLg: string;
/** Accent halo alone, no pool. For a small accent-tinted chip or icon plate inside a glow-accent surface. */
export const ElevationGlowAccentSm: string;
/** xl geometry tinted with the action fill at 5 percent. For the emphasised card in a set (a highlighted plan) where the lift should read as coloured rather than neutral. */
export const ElevationGlowPrimary: string;
