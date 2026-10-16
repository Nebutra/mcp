import { RefObject } from 'react';
import { c as BrandPackage } from './types-Zi77gyTk.js';

declare const BRAND_STYLE_ELEMENT_ID = "nebutra-brand-skin";
declare const BRAND_STORAGE_KEY = "nebutra-brand-package";
interface ApplyBrandOptions {
    /** Persist package JSON to localStorage for Create Center preview reload */
    persist?: boolean;
    /** Target document (iframe preview support) */
    doc?: Document;
}
/**
 * Inject brand skin CSS at runtime (Create Center preview / tenant switch).
 * Does not require rebuilding app CSS — overrides semantic + recipe vars.
 */
declare function applyBrandCss(css: string, brandId?: string, options?: ApplyBrandOptions): void;
/** Apply a full Brand Package (emit CSS + optional persist). */
declare function applyBrandPackage(brand: BrandPackage, options?: ApplyBrandOptions): void;
/** Remove runtime brand skin and restore default Nebutra tokens. */
declare function clearBrand(options?: ApplyBrandOptions): void;
/** Restore brand package previously persisted by applyBrandPackage({ persist: true }). */
declare function restorePersistedBrand(options?: ApplyBrandOptions): BrandPackage | null;
declare function getActiveBrandId(doc?: Document): string | null;

interface UseBrandOptions {
    /** Restore from localStorage on mount */
    autoRestore?: boolean;
    /** Persist apply/clear to localStorage */
    persist?: boolean;
}
interface UseBrandResult {
    brand: BrandPackage | null;
    brandId: string | null;
    apply: (brand: BrandPackage) => void;
    clear: () => void;
    restore: () => BrandPackage | null;
}
/**
 * Create Center / app-level brand state for the host document.
 */
declare function useBrand(options?: UseBrandOptions): UseBrandResult;
interface BrandIframePreviewOptions {
    /**
     * Stylesheets the iframe must load before the brand skin
     * (e.g. app CSS URL that already includes tokens + recipe).
     */
    baseStylesheetHrefs?: string[];
    /** Extra head HTML (fonts CDN, etc.) */
    headHtml?: string;
    /** Minimal body wrapper class */
    bodyClassName?: string;
    /** Called after brand CSS is injected into the iframe */
    onApplied?: (brand: BrandPackage | null) => void;
}
interface UseBrandIframePreviewResult {
    iframeRef: RefObject<HTMLIFrameElement | null>;
    brand: BrandPackage | null;
    /** Write/update brand inside the iframe document */
    apply: (brand: BrandPackage) => void;
    clear: () => void;
    /**
     * Optional: write a self-contained preview document.
     * Use when the iframe has no host app styles yet.
     */
    writePreviewDocument: (brand: BrandPackage, bodyHtml?: string) => void;
}
/**
 * Multi-tenant / Create Center iframe preview.
 * Applies Brand Packages into the iframe's document without touching the host shell.
 */
declare function useBrandIframePreview(options?: BrandIframePreviewOptions): UseBrandIframePreviewResult;
/** Imperative helper for non-hook call sites */
declare function applyBrandToIframe(iframe: HTMLIFrameElement, brand: BrandPackage, options?: ApplyBrandOptions & {
    baseStylesheetHrefs?: string[];
}): void;

export { type ApplyBrandOptions as A, BRAND_STORAGE_KEY as B, type UseBrandOptions as U, type BrandIframePreviewOptions as a, type UseBrandResult as b, applyBrandCss as c, applyBrandPackage as d, applyBrandToIframe as e, clearBrand as f, getActiveBrandId as g, useBrandIframePreview as h, BRAND_STYLE_ELEMENT_ID as i, type UseBrandIframePreviewResult as j, restorePersistedBrand as r, useBrand as u };
