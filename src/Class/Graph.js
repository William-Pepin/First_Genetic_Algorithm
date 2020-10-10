import { getRandomInteger } from "../Functions/functions";
import _ from "lodash";
import Node from "./Node";
import Edge from "./Edge";

export default class Graph {
  nodes;
  edges;
  score;

  constructor(nodes, edges) {
    this.nodes = _.cloneDeep(nodes);
    this.edges = _.cloneDeep(edges);
    this.score = 0;
  }

  randomizeNodesColor() {
    this.nodes.forEach((node) => node.randomizeColor());
  }

  calculateScore() {
    this.score = 0;
    this.edges.forEach((edge) => {
      if (this.nodes[edge.to].group !== this.nodes[edge.from].group) {
        console.log(
          `to : ${this.nodes[edge.to].group}, from : ${
            this.nodes[edge.from].group
          }`
        );
        this.score++;
      }
    });
  }

  reproduct(breeder) {
    let child = this;
    let numberOfBreederHeritedNodes = getRandomInteger(0, breeder.nodes.length);

    for (let index = 0; index < numberOfBreederHeritedNodes; index++) {
      index = getRandomInteger(0, breeder.nodes.length);
      child.nodes[index].group = breeder.nodes[index].group;
    }
    return child;
  }

  mutate(numberOfMutation) {
    let index;
    for (let counter = 0; counter < numberOfMutation; counter++) {
      index = getRandomInteger(0, this.nodes.length);
      this.nodes[index].randomizeColor();
    }
  }
}
