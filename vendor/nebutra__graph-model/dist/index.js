// src/index.ts
function inboundEdges(edges, nodeId) {
  return edges.filter((e) => e.to === nodeId);
}
function hasCycleFrom(edges, nodeId) {
  const adjacency = /* @__PURE__ */ new Map();
  for (const e of edges) {
    const list = adjacency.get(e.from) ?? [];
    list.push(e.to);
    adjacency.set(e.from, list);
  }
  const visiting = /* @__PURE__ */ new Set();
  const done = /* @__PURE__ */ new Set();
  const walk = (id) => {
    if (visiting.has(id)) return true;
    if (done.has(id)) return false;
    visiting.add(id);
    for (const next of adjacency.get(id) ?? []) {
      if (walk(next)) return true;
    }
    visiting.delete(id);
    done.add(id);
    return false;
  };
  return walk(nodeId);
}
function wouldCreateCycle(edges, from, to) {
  return hasCycleFrom([...edges, { from, to }], from);
}
export {
  hasCycleFrom,
  inboundEdges,
  wouldCreateCycle
};
//# sourceMappingURL=index.js.map