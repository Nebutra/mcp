type NebuSpanKind = "agent" | "tool" | "llm";
interface NebuSpanRecord {
    readonly id: string;
    readonly traceId: string;
    readonly kind: NebuSpanKind;
    readonly name: string;
    readonly startedAt: string;
    readonly endedAt?: string;
    readonly durationMs?: number;
    readonly attributes?: Record<string, unknown>;
    readonly status: "started" | "ended" | "failed";
}
type TraceExporter = (batch: readonly NebuSpanRecord[]) => Promise<void>;
interface TraceStoreOptions {
    readonly exporter?: TraceExporter;
    readonly flushIntervalMs?: number;
}
declare function initTraceStoreTelemetry(serviceName?: string): Promise<void>;
declare function redactTracePayload(value: unknown): unknown;
declare function traceDebugPath(): string;
declare class NebuSpan {
    #private;
    constructor(store: TraceStore, record: NebuSpanRecord);
    end(attributes?: Record<string, unknown>): void;
    fail(error: unknown): void;
}
declare class TraceStore {
    #private;
    constructor(options?: TraceStoreOptions);
    static default(): TraceStore;
    start(kind: NebuSpanKind, name: string, attributes?: Record<string, unknown>): NebuSpan;
    enqueue(record: NebuSpanRecord): void;
    flush(): Promise<void>;
    doctor(): {
        ok: boolean;
        lastSpanAt?: string;
        suggestion?: string;
    };
}
declare function readTraceDebug(limit?: number): Promise<unknown[]>;

export { NebuSpan, type NebuSpanKind, type NebuSpanRecord, type TraceExporter, TraceStore, type TraceStoreOptions, initTraceStoreTelemetry, readTraceDebug, redactTracePayload, traceDebugPath };
