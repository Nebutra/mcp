/**
 * @nebutra/graph-model — neutral structural DAG contract.
 *
 * The minimal shape every node-graph feature shares: positioned nodes, plain
 * directed edges, and the two pure traversals (`inboundEdges`, `hasCycleFrom`)
 * plus the `wouldCreateCycle` guard used by interactive editors. Domain
 * packages (`@nebutra/reel`) specialize these types; the generic
 * `@nebutra/ui` node-graph editor depends on this contract — neither depends
 * on the other.
 */
/** A positioned graph node. Domain nodes extend this. */
interface GraphNode {
    readonly id: string;
    readonly x: number;
    readonly y: number;
}
/** A directed edge. Domain edges extend this (e.g. add an input-port tag). */
interface GraphEdge {
    readonly from: string;
    readonly to: string;
}
/** A structural graph; `N`/`E` carry the domain specialization. */
interface Graph<N extends GraphNode = GraphNode, E extends GraphEdge = GraphEdge> {
    readonly nodes: readonly N[];
    readonly edges: readonly E[];
}
/** Edges whose target is `nodeId`. Preserves the concrete edge subtype. */
declare function inboundEdges<E extends GraphEdge>(edges: readonly E[], nodeId: string): readonly E[];
/** Detect a cycle reachable from `nodeId` (depth-first, edge-following). */
declare function hasCycleFrom(edges: readonly GraphEdge[], nodeId: string): boolean;
/**
 * Would adding `from → to` make the graph cyclic? Pure: never mutates the
 * passed `edges`. The canonical guard for interactive edge creation.
 */
declare function wouldCreateCycle(edges: readonly GraphEdge[], from: string, to: string): boolean;

export { type Graph, type GraphEdge, type GraphNode, hasCycleFrom, inboundEdges, wouldCreateCycle };
