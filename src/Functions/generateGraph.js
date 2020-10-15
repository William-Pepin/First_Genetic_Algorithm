import Graph from "../Class/Graph";
import Edge from "../Class/Edge";
import Node from "../Class/Node";
import { getRandomInteger } from "./functions";
import { max } from "lodash";

export default function generateGraph(numberOfNodes, numberOfColors) {
  let graph;
  let edges = [];
  let nodes = [];
  let minEdges;

  minEdges = numberOfNodes - 1;

  numberOfColors > minEdges && (numberOfColors = minEdges);

  nodes = generateNodes(numberOfNodes);

  edges = generateEdges(nodes, numberOfColors);

  graph = new Graph(nodes, edges, numberOfColors);

  return graph;
}

function generateNodes(numberOfNodes) {
  let nodes = [];
  for (let index = 0; index < numberOfNodes; index++) {
    nodes.push(new Node(index));
  }
  return nodes;
}

function generateEdges(nodes, maxEdgesPerNodes) {
  let edges = [];
  nodes.forEach((node) => {
    nodes.length - 1 !== node.id &&
      edges.push(attachNodes(node, nodes[node.id + 1]));
  });
  nodes.forEach((node) => {
    let numberOfAttachements = getRandomInteger(0, maxEdgesPerNodes - 1);

    for (let index = 0; index < numberOfAttachements; index++) {
      let nodeIndex;

      do {
        nodeIndex = getRandomInteger(0, nodes.length);
      } while (
        nodes[nodeIndex].id === node.id ||
        nodes[nodeIndex].connexion === maxEdgesPerNodes
      );

      if (node.connexion !== maxEdgesPerNodes) {
        edges.push(attachNodes(node, nodes[nodeIndex]));
      }
    }
  });
  edges.filter((item, index) => edges.indexOf(item) !== index);
  return edges;
}

function attachNodes(to, from) {
  let edge = new Edge(to.id, from.id);
  to.connexion++;
  from.connexion++;
  return edge;
}
