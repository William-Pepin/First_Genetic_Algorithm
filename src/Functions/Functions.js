export default function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

export default function initialization(size, godSample) {
  let population = [];
  for (let index = 0; index < size; index++) {
    population.push(godSample.randomizeNodesColor());
  }
  return population;
}

export default function fitnessCalculation(population) {
  population.forEach((sample) => {
    sample.calculateScore();
  });
}

/**
* @Date 2020-02-10
* @Author William Pépin
* @Desc Sélectionne les 25 meilleurs candidats de la population
* @param {array<Graph>} population liste de graph.
* @returns une liste de 25 des meilleurs graph
*/
export default function selection(population) {
  population.sort((a, b) => a.score - b.score);
  return population.slice(population.length - 25, population.length);
}

export default function reproduction(population) {
  population.forEach((sample) => {
      child.
  });
}

export default function mutation() {}

export default function testPopulation(population) {}

export default function mutatePopulation(population) {
  for (let index = 0; index < population.length; index++) {
    if (index % 2 === 0) {
      population[index].mutate(population[index + 1]);
    }
  }
}
