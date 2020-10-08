import Edge from "./Edge";
import Node from "./Node";

export default class Graph {
  nodes = [];
  edges = [];
  score = 0;

  constructor() {
    this.nodes = [
      new Node(1),
      new Node(2),
      new Node(3),
      new Node(4),
      new Node(5),
      new Node(6),
      new Node(7),
      new Node(8),
      new Node(9),
    ];
    this.edges = [
      new Edge(0, 1),
      new Edge(0, 2),
      new Edge(1, 2),
      new Edge(4, 2),
      new Edge(1, 3),
      new Edge(4, 3),
      new Edge(4, 3),
      new Edge(1, 4),
      new Edge(4, 5),
      new Edge(5, 6),
      new Edge(6, 7),
      new Edge(6, 8),
      new Edge(7, 8),
      new Edge(8, 9),
      new Edge(7, 9),
    ];
  }
  constructor(graph) {
    this.nodes = graph.nodes;
    this.edges = graph.edges;
  }

  get nodes() {
    return this.nodes;
  }
  get edges() {
    return this.edges;
  }

  randomizeNodesColor() {
    this.nodes.map((node) => node.randomizeColor());
    return this;
  }
  calculateScore() {
    this.score = 0;
    edges.forEach((edge) => {
      if (nodes[edge.to].group != node[edge.from].group) {
        this.score += 1;
      }
    });
  }
}
