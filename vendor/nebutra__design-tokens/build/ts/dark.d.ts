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
/** Hairline override — more visible on dark background */
export const RingHairline: string;
/** Dark-mode faint overlay (6% white) — inverted from light */
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
/** Dark-mode brand primary — the identity blue lifted to nebutra-blue-400 so it stays visible on dark surfaces. This is the identity alias, not the functional fill: the dark solid fill is --blue-9 (#396ae2, white label 4.85:1). The two are deliberately separate now that the VI hex is no longer pinned into ramp slot 9. */
export const BrandPrimary: string;
/** Dark-mode brand accent — nebutra-cyan-400 (L* 87.1). The functional bright fill is --cyan-9 (#0bf1c3, L* 85.41), the same hex in both modes; dark ink for it is --cyan-contrast at 10.35:1. */
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
/** Dark-mode info color — equals dark brand-primary. */
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
export const ScaleNeutral1: string;
export const ScaleNeutral2: string;
export const ScaleNeutral3: string;
export const ScaleNeutral4: string;
export const ScaleNeutral5: string;
/** subtle border — DERIVED: OKLab lerp step5 → step9 at t=0.25, chroma forced to 0. The achromatic result is deliberate and preserves the documented intent of color.nebutra-gray ('used where blue undertone clashes — primarily dark-mode borders, dividers, elevation hairlines'). What was broken was the LIGHTNESS: gray-900/800/700 are darker than the slate background tier they sit above, so the border read as a hole rather than a hairline. */
export const ScaleNeutral6: string;
/** default border — DERIVED: OKLab lerp step5 → step9 at t=0.50, chroma 0. */
export const ScaleNeutral7: string;
/** hovered border — DERIVED: OKLab lerp step5 → step9 at t=0.75, chroma 0. */
export const ScaleNeutral8: string;
export const ScaleNeutral9: string;
export const ScaleNeutral10: string;
export const ScaleNeutral11: string;
export const ScaleNeutral12: string;
/** app tint — L* 13.59, C 0.031, hue 264. */
export const ScaleBlue1: string;
/** subtle background — L* 17.43, C 0.048. */
export const ScaleBlue2: string;
/** component background default — L* 22.04, C 0.071. */
export const ScaleBlue3: string;
/** component background hover — L* 26.99, C 0.095. */
export const ScaleBlue4: string;
/** component background active — L* 32.46, C 0.118. Anchor for the derived border tier. */
export const ScaleBlue5: string;
/** subtle border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step9 (deep scale, span 23.5 L*) at t=0.25. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 38.25, C 0.136. */
export const ScaleBlue6: string;
/** default border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step9 (deep scale, span 23.5 L*) at t=0.50. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 44.21, C 0.155. */
export const ScaleBlue7: string;
/** hovered border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step9 (deep scale, span 23.5 L*) at t=0.75. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 50.01, C 0.173. */
export const ScaleBlue8: string;
/** solid fill — L* 55.92, C 0.191, hue 264.3. White label 4.85:1. Same value as the dark shadcn --primary, so light and dark both take their deep fill from one source. Chroma ceiling for dark is 0.190; this is 0.191. */
export const ScaleBlue9: string;
/** solid fill hover — L* 57.44, C 0.183. White label 4.53:1. The hover has to move UP in a dark ramp, which costs contrast, so the step is deliberately small (1.52 L*) to keep white above 4.5:1. */
export const ScaleBlue10: string;
/** secondary text — L* 74.01, C 0.106. 8.62:1 on step 1. */
export const ScaleBlue11: string;
/** primary text — L* 90.52, C 0.043. 15.08:1 on step 1. */
export const ScaleBlue12: string;
/** Label ink for the solid fill tier. Absolute value, identical in both modes. 4.85:1 on step 9, 4.53:1 on step 10. */
export const ScaleBlueContrast: string;
/** app tint — L* 15.90, C 0.021, hue 172. */
export const ScaleCyan1: string;
/** subtle background — L* 21.54, C 0.030. */
export const ScaleCyan2: string;
/** component background default — L* 27.46, C 0.041. */
export const ScaleCyan3: string;
/** component background hover — L* 34.10, C 0.046. */
export const ScaleCyan4: string;
/** component background active — L* 40.88, C 0.050. Anchor for the derived border tier. */
export const ScaleCyan5: string;
/** subtle border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step9 (span 44.5 L*) at t=0.25. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 52.12, C 0.079. */
export const ScaleCyan6: string;
/** default border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step9 (span 44.5 L*) at t=0.50. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 63.04, C 0.107. */
export const ScaleCyan7: string;
/** hovered border — DERIVED at build time (scripts/derive-border-tier.mjs): OKLab lerp of step 5 toward step9 (span 44.5 L*) at t=0.75. The value here is a placeholder anchor only; the preprocessor overwrites it. Lands at L* 74.30, C 0.136. */
export const ScaleCyan8: string;
/** solid fill — same bright value as light mode, the way Radix ships one hex for mint-9 in both modes: L* 85.41, C 0.164. Ink 10.35:1 against --cyan-contrast. */
export const ScaleCyan9: string;
/** solid fill hover — L* 88.53, C 0.145, 3.12 L* above step 9 (Radix mint dark moves up 4.60 L*). Ink 11.34:1. */
export const ScaleCyan10: string;
/** secondary text — L* 91.46, C 0.110. 15.68:1 on step 1. */
export const ScaleCyan11: string;
/** primary text — L* 94.54, C 0.070. 16.95:1 on step 1. */
export const ScaleCyan12: string;
/** Label ink for the bright fill tier. Absolute near-black, identical in both modes. 10.35:1 on step 9, 11.34:1 on step 10. */
export const ScaleCyanContrast: string;
export const ShadcnBackground: string;
export const ShadcnForeground: string;
export const ShadcnCard: string;
export const ShadcnCardForeground: string;
export const ShadcnPopover: string;
export const ShadcnPopoverForeground: string;
/** Dark-mode action blue, paired with the near-black --primary-foreground, not white. #396ae2 keeps the VI hue and sits at L*55.9 C0.191. */
export const ShadcnPrimary: string;
/** White, matching light mode and matching --blue-contrast. It was near-black (222 14% 9%) when --primary was a LIGHT fill at L* 68.3, where dark ink read 6.20:1. Once --primary became a deep fill at L* 55.9 the pairing inverted and measured 3.74:1, below AA — the fill moved and the ink did not. The deep-fill tier takes white in both modes; --blue-contrast says the same thing, and they must agree because --primary and --blue-9 are now the same value. */
export const ShadcnPrimaryForeground: string;
export const ShadcnSecondary: string;
export const ShadcnSecondaryForeground: string;
export const ShadcnMuted: string;
export const ShadcnMutedForeground: string;
export const ShadcnAccent: string;
export const ShadcnAccentForeground: string;
export const ShadcnDestructive: string;
export const ShadcnDestructiveForeground: string;
/** Red as FOREGROUND on a dark surface. --destructive (0 63% 38%) is 2.15:1 on --card here — a fill only. Lightened to 5.18:1 on --card / 5.61:1 on --neutral-1, which sits alongside the light-mode 5.42:1 so red reads with the same weight in both themes. Use --destructive for fills with --destructive-foreground on top; use this for red text and icons. */
export const ShadcnDestructiveStrong: string;
export const ShadcnSuccess: string;
export const ShadcnSuccessForeground: string;
/** Green as foreground on a dark surface. Needs no adjustment — 142 60% 42% is already 4.83:1 as ink on its own 10% tint — so it deliberately equals --success, matching how --warning-strong behaves in this theme. */
export const ShadcnSuccessStrong: string;
export const ShadcnWarning: string;
export const ShadcnWarningForeground: string;
/** Amber as foreground on a dark surface. Unlike light mode this needs no adjustment — 38 80% 52% is already 7.98:1 against --neutral-1 — so it deliberately equals --warning. The token exists in both themes so consumers can reference one name. */
export const ShadcnWarningStrong: string;
export const ShadcnInfo: string;
export const ShadcnInfoForeground: string;
export const ShadcnBorder: string;
export const ShadcnInput: string;
/** Focus ring (dark mode) — neutral light gray. Mirrors light-mode neutral foreground choice. */
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
/** Centred offsetless halo — the only non-directional step on the ramp. Inverted from the light value: a black halo has nothing to darken against a dark surround, so the halo becomes light. Keep the alpha low; this is separation, not a bloom. */
export const ElevationAmbientGlow: string;
/** Identical to the light value by design. The pool is theme-invariant black because glow-accent surfaces are fixed dark glass in both themes; only the accent halo shifts, via --brand-accent. */
export const ElevationGlowAccent: string;
/** Hover escalation of glow-accent. Identical to the light value by design. */
export const ElevationGlowAccentLg: string;
/** Accent halo alone, no pool. Identical to the light value by design. */
export const ElevationGlowAccentSm: string;
/** xl geometry tinted with the action fill at 5 percent. Same reference as light; --primary carries the dark channels. */
export const ElevationGlowPrimary: string;
