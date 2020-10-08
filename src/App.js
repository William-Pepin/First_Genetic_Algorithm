import React from "react";
import Graph from "react-graph-vis";
import AppGraph from "./Class/Graph";
import Node from "./Class/Node";
import Edge from "./Class/Edge";
import Population from "./Class/Population";
import "./App.css";

const nodes = [
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

const events = {
  select: function (event) {
    var { nodes, edges } = event;
  },
};

const graphSchema = new AppGraph(nodes, edges);
let population = new Population(100, graphSchema);

function App() {
  return (
    <Graph
      graph={graphSchema}
      options={options}
      events={events}
      getNetwork={(network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}

export default App;
