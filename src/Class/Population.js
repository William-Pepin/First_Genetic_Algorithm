import Graph from "./Graph";
import { getRandomInteger, getRandomBoolean } from "../Functions/functions";
export default class Population {
  generationCount;
  schema;
  population = [];
  winner;
  size;

  /**
   * @Date 2020-02-10
   * @Author William Pépin
   * @Desc Constructeur permettant d'initialiser une nouvelle population.
   * @param size Taille de la population.
   * @param schema Schema du graph pour chaque sujet de la population.
   */
  constructor(size, schema) {
    this.size = size;
    this.schema = new Graph(schema.nodes, schema.edges);
    this.generationCount = 0;

    for (let index = 0; index < size; index++) {
      let sample = new Graph(this.schema.nodes, this.schema.edges);
      sample.randomizeNodesColor();
      this.population.push(sample);
    }
  }

  generation() {
    this.generationCount++;

    fitnessCalculation(this.population);

    this.winner = checkForWinningCandidate(this.population, this.schema);
    if (this.winner !== undefined) {
      return this.winner;
    }

    this.population = selection(this.population);
    console.log(`Selection :`);
    console.log(this.population);
    console.log(this.population[1].nodes);

    this.population = reproduction(this.population);
    console.log(`Reproduction :`);
    console.log(this.population);

    this.population = this.population.concat(mutation(this.population));
    console.log(`Mutation :`);
    console.log(this.population);
  }
}

/**
 * @Date 2020-02-10
 * @Author William Pépin
 * @Desc Calcule le score de chaque élément de la population
 * @param {array<Graph>} population liste de graph.
 * @returns la population avec la calculation effectué.
 */
function fitnessCalculation(population) {
  population.forEach((sample) => {
    sample.calculateScore();
  });
}
/**
 * @Date 2020-02-10
 * @Author William Pépin
 * @Desc Sélectionne les 25 meilleurs candidats de la population
 * @param {array<Graph>} population liste de graph.
 * @returns une liste de 25 des meilleurs graph.
 */
function selection(population) {
  population.sort((a, b) => a.score - b.score);
  return population.slice(population.length * 0.75, population.length);
}
/**
 * @Date 2020-02-10
 * @Author William Pépin
 * @Desc Vérifie si un candidat parfait existe
 * @param {array<Graph>} population liste de graph.
 * @param schema schema du graph.
 * @returns le graph qui à toutes les couleurs différentes pour chaque arrêtes.
 */
function checkForWinningCandidate(population, schema) {
  for (let index = 0; index < population.length; index++) {
    if (population[index].score === schema.edges.length) {
      console.log(population[index]);
      console.log("1: " + population[index].score);
      population[index].calculateScore();
      console.log("2: " + population[index].score);
      return population[index];
    }
  }
}

/**
 * @Date 2020-02-10
 * @Author William Pépin
 * @Desc Reproduit une population et double sa grosseur.
 * @param {array<Graph>} population liste de graph.
 * @returns Une liste deux fois plus grandes de graph avec des reproductions aléatoire qui modifient les propriétés de la population.
 */
function reproduction(population) {
  let reproductionPopulation = [];
  population.forEach((sample) => {
    let breeder = getRandomInteger(0, population.length);
    reproductionPopulation.push(sample.reproduct(population[breeder]));
  });
  return population.concat(reproductionPopulation);
}

/**
 * @Date 2020-02-10
 * @Author William Pépin
 * @Desc Effectue des mutations sur la population de manière aléatoire
 * @param {array<Graph>} population liste de graph.
 * @returns Une liste de graph de la même taille avec des propriétés aléatoires différentes pour la population.
 */
function mutation(population) {
  population.forEach((sample) => {
    if (getRandomBoolean()) {
      // Mutation
      if (getRandomBoolean()) {
        // Mutation aggressive
        sample.mutate(sample.nodes.length - sample.nodes.length / 4);
      } else {
        // Mutation faible
        sample.mutate(sample.nodes.length / 2);
      }
    }
    // Aucune mutation
  });
  return population;
}
