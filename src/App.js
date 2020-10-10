import React, { useState } from "react";
import Graph from "react-graph-vis";
import AppGraph from "./Class/Graph";
import Node from "./Class/Node";
import Edge from "./Class/Edge";
import Population from "./Class/Population";
import _ from "lodash";
import { v4 as uuidv4 } from "uuid";
import "./App.css";

const nodes = [
  new Node(0),
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
const edges = [
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

const options = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: "#000000",
    arrows: {
      to: false,
    },
  },
  height: "500px",
};
const options2 = {
  layout: {
    hierarchical: false,
  },
  edges: {
    color: "#000000",
    arrows: {
      to: false,
    },
  },
  height: "200px",
};

const events = {
  select: function (event) {
    let { nodes, edges } = event;
  },
};

function App() {
  const graphSchema = new AppGraph(nodes, edges);
  const population = new Population(8, graphSchema);
  const [populationArray, setPopulation] = useState(population.population);
  const [winner, setWinner] = useState(undefined);
  return (
    <div
      style={{
        display: "grid",
        gridTemplateRows: "1fr auto 1fr",
        gridAutoColumns: "1fr",
      }}
    >
      <div
        style={{
          display: "grid",
          gridTemplateRows: "1fr",
          gridTemplateColumns: "1fr 1fr",
        }}
      >
        <Graph
          key={uuidv4()}
          graph={graphSchema}
          options={options}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        {winner && (
          <Graph
            key={uuidv4()}
            graph={winner}
            options={options}
            events={events}
            getNetwork={(network) => {
              //  if you want access to vis.js network api you can set the state in a parent component using this property
            }}
          />
        )}
      </div>
      <div>
        <button
          onClick={() => {
            if (winner === undefined) {
              population.generation();
              setPopulation(population.population);
              setWinner(population.winner);
            }
          }}
        >
          Generate
        </button>
      </div>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr 1fr 1fr",
          gridTemplateRows: "1fr 1fr",
        }}
      >
        <Graph
          key={uuidv4()}
          graph={_.cloneDeep(populationArray[0])}
          options={options2}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        <Graph
          key={uuidv4()}
          graph={_.cloneDeep(populationArray[1])}
          options={options2}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        <Graph
          key={uuidv4()}
          graph={_.cloneDeep(populationArray[2])}
          options={options2}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        <Graph
          key={uuidv4()}
          graph={_.cloneDeep(populationArray[3])}
          options={options2}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        <Graph
          key={uuidv4()}
          graph={_.cloneDeep(populationArray[4])}
          options={options2}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        <Graph
          key={uuidv4()}
          graph={_.cloneDeep(populationArray[5])}
          options={options2}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        <Graph
          key={uuidv4()}
          graph={_.cloneDeep(populationArray[6])}
          options={options2}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
        <Graph
          key={uuidv4()}
          graph={_.cloneDeep(populationArray[7])}
          options={options2}
          events={events}
          getNetwork={(network) => {
            //  if you want access to vis.js network api you can set the state in a parent component using this property
          }}
        />
      </div>
    </div>
  );
}

export default App;
