type AgentDocsStatus = "stable" | "beta" | "deprecated" | "experimental";
type AgentDocsMaturity = "experimental" | "beta" | "stable" | "canonical";
type AgentDocsLayer = "foundation" | "primitive" | "composition" | "pattern" | "registry" | "api" | "guide";
type AgentDocsSubstrate = "native" | "custom" | "mixed";
interface AgentComponentSummary {
    name: string;
    title: string;
    description: string;
    status: AgentDocsStatus;
    maturity: AgentDocsMaturity;
    layer: AgentDocsLayer;
    source: string;
    href: string;
    tags: string[];
}
interface AgentManifest {
    $schema: string;
    name: "nebutra-ui-agent";
    version: 1;
    generatedAt: string;
    homepage: string;
    registry: string;
    commands: Array<{
        name: "search" | "component" | "validate" | "template" | "migrate";
        status: "available" | "planned";
        description: string;
        json: boolean;
    }>;
    rules: {
        sourceOfTruth: string[];
        importPolicy: string;
        registryPolicy: string;
        tokenPolicy: string;
    };
    components: AgentComponentSummary[];
}
interface AgentComponentContract extends AgentComponentSummary {
    package: "@nebutra/ui" | "@nebutra/tokens";
    substrate: AgentDocsSubstrate;
    imports: {
        package: string;
        registry: string;
    };
    dependencies: {
        npm: string[];
        registry: string[];
    };
    files: Array<{
        path: string;
        type: string;
        target?: string;
    }>;
    tokens: string[];
    evidence: {
        source: true;
        docs: boolean;
        storybook: boolean;
        registry: true;
        tokens: boolean;
    };
    docs: {
        source?: string;
        routes: string[];
        storybook?: string;
        lastVerified: string;
    };
    usage: {
        recommended: string;
        antiPatterns: string[];
    };
    migration: {
        requiredForBreakingChanges: true;
        codemods: string[];
        hints: string[];
    };
}
interface AgentContractPaths {
    manifestPath: string;
    componentDir: string;
}
interface LoadAgentContractOptions {
    root?: string;
    manifestPath?: string;
}
interface SearchAgentComponentsOptions {
    limit?: number;
    offset?: number;
    tag?: string;
    status?: AgentDocsStatus;
    maturity?: AgentDocsMaturity;
}
interface SearchAgentComponentsResult {
    query: string;
    total: number;
    count: number;
    offset: number;
    limit: number;
    hasMore: boolean;
    nextOffset?: number;
    items: AgentComponentSummary[];
}
interface AgentValidationResult {
    name: string;
    valid: boolean;
    errors: string[];
    warnings: string[];
    evidence: AgentComponentContract["evidence"];
    migration: AgentComponentContract["migration"];
}
declare function resolveAgentContractPaths(options?: LoadAgentContractOptions): AgentContractPaths;
declare function normalizeAgentComponentName(name: string): string;
declare function assertSafeAgentComponentName(name: string): string;
declare function loadAgentManifest(options?: LoadAgentContractOptions): AgentManifest;
declare function loadAgentComponentContract(name: string, options?: LoadAgentContractOptions): AgentComponentContract;
declare function findAgentComponent(manifest: AgentManifest, name: string): AgentComponentSummary | undefined;
declare function searchAgentComponents(manifest: AgentManifest, query?: string, options?: SearchAgentComponentsOptions): SearchAgentComponentsResult;
declare function validateAgentComponent(contract: AgentComponentContract): AgentValidationResult;

export { type AgentComponentContract, type AgentComponentSummary, type AgentContractPaths, type AgentDocsLayer, type AgentDocsMaturity, type AgentDocsStatus, type AgentDocsSubstrate, type AgentManifest, type AgentValidationResult, type LoadAgentContractOptions, type SearchAgentComponentsOptions, type SearchAgentComponentsResult, assertSafeAgentComponentName, findAgentComponent, loadAgentComponentContract, loadAgentManifest, normalizeAgentComponentName, resolveAgentContractPaths, searchAgentComponents, validateAgentComponent };
