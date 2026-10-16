import {
  TraceStore,
  readTraceDebug
} from "./chunk-WWNVYJKZ.js";

// src/cli.ts
var command = process.argv[2] ?? "doctor";
if (command === "doctor") {
  process.stdout.write(
    `${JSON.stringify({ capability: "trace-store", ...TraceStore.default().doctor() }, null, 2)}
`
  );
} else if (command === "debug") {
  process.stdout.write(
    `${JSON.stringify({ capability: "trace-store", entries: await readTraceDebug() }, null, 2)}
`
  );
} else {
  process.stderr.write(`Unknown trace-store command: ${command}
`);
  process.exitCode = 1;
}
//# sourceMappingURL=cli.js.map