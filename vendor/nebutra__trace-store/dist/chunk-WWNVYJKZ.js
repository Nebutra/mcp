// src/index.ts
import { mkdir, readFile, writeFile } from "fs/promises";
import { dirname, join } from "path";
import { CapabilityError } from "@nebutra/errors";
import pLimit from "p-limit";
async function initTraceStoreTelemetry(serviceName = "trace-store") {
  const { initGlobalOtel } = await import("@nebutra/logger/otel-bootstrap");
  initGlobalOtel({ serviceName });
}
var REDACT_KEYS = /api[_-]?key|token|secret|password|authorization|cookie|email/i;
var TRACE_DEBUG_WRITE_CONCURRENCY = 4;
function redactTracePayload(value) {
  if (Array.isArray(value)) return value.map(redactTracePayload);
  if (!value || typeof value !== "object") return value;
  const out = {};
  for (const [key, inner] of Object.entries(value)) {
    out[key] = REDACT_KEYS.test(key) ? "[redacted]" : redactTracePayload(inner);
  }
  return out;
}
function traceDebugPath() {
  return join(process.cwd(), ".nebutra", "debug", "trace-store.jsonl");
}
async function appendTraceDebug(record) {
  const path = traceDebugPath();
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, `${JSON.stringify(record)}
`, { flag: "a" });
}
function createTraceDebugExporter() {
  const limit = pLimit(TRACE_DEBUG_WRITE_CONCURRENCY);
  return async (batch) => {
    await Promise.all(batch.map((record) => limit(() => appendTraceDebug(record))));
  };
}
var NebuSpan = class {
  #store;
  #record;
  #start = Date.now();
  constructor(store, record) {
    this.#store = store;
    this.#record = record;
  }
  end(attributes = {}) {
    this.#store.enqueue({
      ...this.#record,
      endedAt: (/* @__PURE__ */ new Date()).toISOString(),
      durationMs: Date.now() - this.#start,
      status: "ended",
      attributes: {
        ...this.#record.attributes ?? {},
        ...redactTracePayload(attributes)
      }
    });
  }
  fail(error) {
    this.#store.enqueue({
      ...this.#record,
      endedAt: (/* @__PURE__ */ new Date()).toISOString(),
      durationMs: Date.now() - this.#start,
      status: "failed",
      attributes: {
        ...this.#record.attributes ?? {},
        error: error instanceof Error ? error.message : String(error)
      }
    });
  }
};
var TraceStore = class _TraceStore {
  #exporter;
  #queue = [];
  #flushIntervalMs;
  #timer;
  #lastSpanAt;
  constructor(options = {}) {
    this.#exporter = options.exporter ?? createTraceDebugExporter();
    this.#flushIntervalMs = options.flushIntervalMs ?? 250;
  }
  static default() {
    return new _TraceStore();
  }
  start(kind, name, attributes = {}) {
    const now = (/* @__PURE__ */ new Date()).toISOString();
    return new NebuSpan(this, {
      id: `span_${Date.now()}_${Math.random().toString(16).slice(2)}`,
      traceId: String(attributes.traceId ?? name),
      kind,
      name,
      startedAt: now,
      status: "started",
      attributes: redactTracePayload(attributes)
    });
  }
  enqueue(record) {
    this.#queue.push(record);
    this.#lastSpanAt = record.endedAt ?? record.startedAt;
    this.#timer ??= setTimeout(() => {
      this.flush().catch(() => void 0);
    }, this.#flushIntervalMs);
  }
  async flush() {
    if (this.#timer) {
      clearTimeout(this.#timer);
      this.#timer = void 0;
    }
    const batch = this.#queue.splice(0);
    if (batch.length === 0) return;
    await this.#exporter(batch);
  }
  doctor() {
    return this.#lastSpanAt ? { ok: true, lastSpanAt: this.#lastSpanAt } : {
      ok: false,
      suggestion: "Emit a span with TraceStore.start(...).end(...) or run the Layer 0 demo."
    };
  }
};
async function readTraceDebug(limit = 10) {
  try {
    const raw = await readFile(traceDebugPath(), "utf8");
    return raw.trim().split("\n").filter(Boolean).slice(-limit).map((line) => JSON.parse(line));
  } catch (cause) {
    const options = {
      suggestion: "Run `pnpm trace:doctor` after executing a traced workflow.",
      ...cause instanceof Error && { cause }
    };
    throw new CapabilityError("trace-store", "No trace debug log found", {
      ...options
    });
  }
}

export {
  initTraceStoreTelemetry,
  redactTracePayload,
  traceDebugPath,
  NebuSpan,
  TraceStore,
  readTraceDebug
};
//# sourceMappingURL=chunk-WWNVYJKZ.js.map