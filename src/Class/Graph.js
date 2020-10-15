import { getRandomInteger } from "../Functions/functions";
import _ from "lodash";

export default class Graph {
  nodes;
  edges;
  score;
  numberOfColors;

  constructor(nodes, edges, numberOfColors) {
    this.nodes = _.cloneDeep(nodes);
    this.edges = _.cloneDeep(edges);
    this.score = 0;
    this.numberOfColors = numberOfColors;
  }

  randomizeNodesColor() {
    this.nodes.forEach((node) => node.randomizeColor(this.numberOfColors));
  }

  calculateScore() {
    this.score = 0;
    this.edges.forEach((edge) => {
      if (this.nodes[edge.to].group !== this.nodes[edge.from].group) {
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

  mutate() {
    let numberOfMutation = getRandomInteger(0, this.nodes.length);
    let index;
    for (let counter = 0; counter < numberOfMutation; counter++) {
      index = getRandomInteger(0, this.nodes.length);
      this.nodes[index].randomizeColor(this.numberOfColors);
    }
  }
}
