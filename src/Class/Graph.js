import _ from "lodash";
import { getRandomInteger } from "../Functions/functions";

/**
 * @Date 2020-10-15
 * @Author William Pépin 1634597
 * @Desc Classe définissant un graph, un graph est une structure de données contenant des noeuds et des arrêtes. Les arrêtes servent de connecteur entre les noeuds.
 */
export default class Graph {
  nodes;
  edges;
  score;
  numberOfColors;

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Constructeur du graph, permet d'instancier un nouveau graph avec un tableau de noeuds, d'arrêtes et le nombre de couleurs des noeuds.
   * @param {nodes[]} nodes Tableau de noeuds
   * @param {edges[]} edges Tableau de edges
   * @param {number} numberOfColors nombre de couleurs utilisés dans le graph
   * @returns
   */
  constructor(nodes, edges, numberOfColors) {
    this.nodes = _.cloneDeep(nodes); // permet d'instancier un nouveau tableau au lieu d'une référence en mémoire
    this.edges = _.cloneDeep(edges);
    this.score = 0;
    this.numberOfColors = numberOfColors;
  }

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction permettant de déterminer aléatoirement les couleurs des noeuds.
   * @param null
   * @returns null
   */
  randomizeNodesColor() {
    this.nodes.forEach((node) => node.randomizeColor(this.numberOfColors));
  }

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction permettant de calculer le score du graph.
   * @param null
   * @returns null
   */
  calculateScore() {
    this.score = 0;
    this.edges.forEach((edge) => {
      if (this.nodes[edge.to].group !== this.nodes[edge.from].group) {
        this.score++;
      }
    });
  }

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction permettant de reproduire le graph avec un autre.
   * @param breeder Le graph avec qui le reproduire.
   * @returns un nouveau graph avec des propriétés aléatoires de ce graph et du breeder.
   */
  reproduct(breeder) {
    let child = this;
    let numberOfBreederHeritedNodes = getRandomInteger(0, breeder.nodes.length);

    for (let index = 0; index < numberOfBreederHeritedNodes; index++) {
      index = getRandomInteger(0, breeder.nodes.length);
      child.nodes[index].group = breeder.nodes[index].group;
    }
    return child;
  }

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction permettant d'effectuer une mutation du graph. Modifie les couleurs des noeuds du graph aléatoirement.
   * @param null
   * @returns null
   */
  mutate() {
    let numberOfMutation = getRandomInteger(0, this.nodes.length);
    let index;
    for (let counter = 0; counter < numberOfMutation; counter++) {
      index = getRandomInteger(0, this.nodes.length);
      this.nodes[index].randomizeColor(this.numberOfColors);
    }
  }
}
