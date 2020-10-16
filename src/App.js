import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Graph from "react-graph-vis";

import { options300, options600 } from "./Config/options";
import Population from "./Class/Population";
import generateGraph from "./Functions/generateGraph";

let population;

/**
 * @Date 2020-10-15
 * @Author William Pépin 1634597
 * @Desc Fonction permettant de gérer mon application, d'afficher les modules et de gérer la logique de l'algorithme.
 */
function App() {
  const [graphs, setGraphs] = useState(); // Graphique de la population
  const [numberOfNodes, setNumberOfNodes] = useState(3); // Nombre de noeuds que l'utilisateur détermine
  const [numberOfColors, setNumberOfColors] = useState(); // Nombre de couleurs que l'utilisateur détermine
  const [winner, setWinner] = useState(); // Gagnant de toutes les générations
  const [schema, setSchema] = useState(); // Schéma de base
  const [generationCount, setGenerationCount] = useState(0); // Compteur de génération

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction permettant d'appeler la génération de la population à l'aide des données de l'utilisateur.
   * @param e événement du bouton
   * @returns null
   */
  const generatePopulation = (e) => {
    e.preventDefault();

    population = new Population(
      8,
      generateGraph(numberOfNodes, numberOfColors)
    );

    setNumberOfNodes(population.schema.nodes.length);
    setNumberOfColors(population.schema.numberOfColors);
    setSchema(population.schema);
    setGraphs(population.population);
    setGenerationCount(population.generationCount);
  };

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction permettant d'effectuer un tour de génération.
   * @param null
   * @returns null
   */
  const generationLap = () => {
    population.generation();

    setGraphs(population.population);
    setWinner(population.winner);
    setGenerationCount(population.generationCount);
  };

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction permettant d'effectuer des tours de génération jusqu'attend qu'un gagnant soit trouvés.
   * @param null
   * @returns null
   */
  const generationLaps = () => {
    while (population.winner === undefined) {
      population.generation();
    }
    setGenerationCount(population.generationCount);
    setGraphs(population.population);
    setWinner(population.winner);
  };

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction permettant de gérer les changements dans le nombre de noeuds
   * @param e événement de la balise input
   * @returns null
   */
  const handleNumberOfNodesChange = (e) => {
    e.preventDefault();
    setNumberOfNodes(e.target.value);
  };

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction permettant de gérer les changements dans le nombre de couleurs
   * @param e événement de la balise input
   * @returns null
   */
  const handleNumberOfColorsChange = (e) => {
    e.preventDefault();
    setNumberOfColors(e.target.value);
  };

  return (
    <div style={styles.wrapper}>
      <div style={styles.control}>
        <form onSubmit={generatePopulation}>
          <label>
            Nombre de noeuds:
            <input
              value={numberOfNodes}
              type="number"
              onChange={handleNumberOfNodesChange}
            />
          </label>
          <label>
            Nombre de couleurs:
            <input
              value={numberOfColors}
              type="number"
              name="numberOfColors"
              onChange={handleNumberOfColorsChange}
            />
          </label>
          <input type="submit" value="Générer un nouveau graphique." />
        </form>
        <button onClick={generationLap}>Generate</button>
        <button onClick={generationLaps}>Generate ALL</button>
        <p>{generationCount}</p>
      </div>
      <div style={styles.mainGraph}>
        {schema && <Graph key={uuidv4()} graph={schema} options={options600} />}
        {winner && <Graph key={uuidv4()} graph={winner} options={options600} />}
      </div>
      {graphs && (
        <div style={styles.populationGraph}>
          {graphs.map((graph) => {
            console.log(graph);
            return <Graph key={uuidv4()} graph={graph} options={options300} />;
          })}
        </div>
      )}
    </div>
  );
}

// Style de l'application
const styles = {
  wrapper: {
    display: "grid",
    gridTemplateRows: "auto1 fr 1fr",
    gridAutoColumns: "1fr",
  },
  mainGraph: {
    display: "grid",
    gridTemplateRows: "1fr",
    gridTemplateColumns: "1fr 1fr",
  },
  populationGraph: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr 1fr 1fr",
    gridTemplateRows: "1fr 1fr",
  },
};

export default App;
