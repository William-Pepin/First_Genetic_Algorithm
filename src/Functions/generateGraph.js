import Graph from "../Class/Graph";
import Edge from "../Class/Edge";
import Node from "../Class/Node";
import { getRandomInteger } from "./functions";

/**
 * @Date 2020-10-15
 * @Author William Pépin 1634597
 * @Desc Fonction permettant de générer un graph à partir d'un nombres de noeuds et d'un nombres de couleurs données.
 */
export default function generateGraph(numberOfNodes, numberOfColors) {
  let graph;
  let edges = [];
  let nodes = [];

  if (numberOfNodes < 3 || numberOfNodes === undefined) {
    numberOfNodes = 3; // minimum de noeuds
  } else if (numberOfNodes >= 25) {
    numberOfNodes = 25; // maximum de noeuds
  }
  if (numberOfColors === undefined || numberOfColors < 2) {
    numberOfColors = 2; // minimum de couleurs
  }
  numberOfColors > numberOfNodes - 1 && (numberOfColors = numberOfNodes - 1); // maximum de couleurs

  nodes = generateNodes(numberOfNodes);
  edges = generateEdges(nodes, numberOfColors);

  graph = new Graph(nodes, edges, numberOfColors);
  return graph;
}

/**
 * @Date 2020-10-15
 * @Author William Pépin
 * @Desc Fonction permettant de générer une liste de noeuds.
 * @param numberOfNodes Grosseur de la liste de noeuds.
 * @returns une liste de noeuds de la grosseur déterminé.
 */
function generateNodes(numberOfNodes) {
  let nodes = [];
  for (let index = 0; index < numberOfNodes; index++) {
    nodes.push(new Node(index));
  }
  return nodes;
}

/**
 * @Date 2020-10-15
 * @Author William Pépin
 * @Desc Fonction permettant de générer les arrêtes du graph.
 * @param nodes tableau de noeuds.
 * @param maxEdgesPerNodes nombre maximale d'arrêtes par noeud.
 * @returns Une liste d'arrêtes avec chaque arrête unique.
 */
function generateEdges(nodes, maxEdgesPerNodes) {
  let edges = [];
  // Attache chaque noeud avec son précédent.
  nodes.forEach((node) => {
    nodes.length - 1 !== node.id &&
      edges.push(attachNodes(node, nodes[node.id + 1]));
  });

  // Attachement aléatoire selon le nombre maximale d'attachement.
  nodes.forEach((node) => {
    let numberOfAttachements = getRandomInteger(0, maxEdgesPerNodes - 1);

    for (let index = 0; index < numberOfAttachements; index++) {
      let nodeIndex;

      // Si le noeud reste encore des attachements.
      if (node.connexion < maxEdgesPerNodes) {
        do {
          // Jusqu'attend qu'il trouve un noeud qui n'est pas lui même et qui n'a pas déjà un nombre maximale d'arrête.
          nodeIndex = getRandomInteger(0, nodes.length);
        } while (
          nodes[nodeIndex].id === node.id ||
          nodes[nodeIndex].connexion >= maxEdgesPerNodes
        );
        edges.push(attachNodes(node, nodes[nodeIndex]));
      }
    }
  });
  // Filtre les doublons
  edges.filter((item, index) => edges.indexOf(item) !== index);
  return edges;
}

/**
 * @Date 2020-10-15
 * @Author William Pépin
 * @Desc Fonction permettant d'attacher les noeuds ensembles.
 * @param to noeud de départ
 * @param from noeud de destination
 * @returns un objet d'arrête (edge)
 */
function attachNodes(to, from) {
  let edge = new Edge(to.id, from.id);
  to.connexion++;
  from.connexion++;
  return edge;
}
