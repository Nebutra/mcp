import * as next_dist_compiled__next_font from 'next/dist/compiled/@next/font';
import * as react_jsx_runtime from 'react/jsx-runtime';

/**
 * MiSans @font-face, rendered at request time rather than shipped as CSS.
 *
 * The MiSans licence forbids distributing the font on its own and this
 * repository is public, so the subsets live in the deployment's public asset
 * bucket and only their keys are committed (../generated/index.ts). A static
 * stylesheet would have to spell out a host, and the host differs per
 * deployment: Nebutra's CDN for Nebutra, the scaffold's own for a template
 * user. publicAssetUrl() resolves it the way it resolves every other public
 * asset — NEXT_PUBLIC_R2_PUBLIC_URL, then R2_PUBLIC_URL, then the brand's cdn
 * origin.
 *
 * Before the subsets have been uploaded (a fresh scaffold, `pnpm subset:cjk
 * --upload` not yet run) the requests 404 and the token stacks fall through to
 * PingFang / YaHei. That is the intended degraded state, not an error.
 */
/** One @font-face per weight, CJK-only unicode-range, `swap` so text is never invisible. */
declare function misansFontFaceCss(origin?: string): string;
interface CjkFontFaceProps {
    /** Asset origin override; defaults to the publicAssetUrl() resolution. */
    origin?: string;
    /**
     * CSP nonce, for apps whose style-src allows inline styles only by nonce
     * (apps/web). Without it the whole @font-face block is refused. The page's
     * font-src must also allow publicAssetOrigin().
     */
    nonce?: string;
}
/**
 * Render once in each root layout, next to `cjkFontClassName` on <html>.
 * React 19 hoists a `<style>` carrying `href` + `precedence` into <head> and
 * dedupes it by `href`, so rendering it twice costs nothing.
 */
declare function CjkFontFace({ origin, nonce }: CjkFontFaceProps): react_jsx_runtime.JSX.Element;

/**
 * DM Sans — one variable file (opsz 9–40, wght 100–1000), Latin subset, 67KB.
 * Preloaded: headings render above the fold on most pages.
 */
declare const dmSans: next_dist_compiled__next_font.NextFontWithVariable;
/**
 * Apply to <html> next to the Geist loaders so `--font-dm-sans` exists:
 *
 *   className={`${GeistSans.variable} ${GeistMono.variable} ${cjkFontClassName}`}
 *
 * The name predates DM Sans; it now carries both brand faces so every app that
 * already applies it picks them up without a layout change.
 */
declare const brandFontClassName: string;
declare const cjkFontClassName: string;

export { CjkFontFace, brandFontClassName, cjkFontClassName, dmSans, misansFontFaceCss };
