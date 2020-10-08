import React from "react";
import Graph from "react-graph-vis";
import "./App.css";

function App() {
  const graph = {
    nodes: [
      { id: 1, label: "Node 1", title: "node 1 tootip text", group: 0 },
      { id: 2, label: "Node 2", title: "node 2 tootip text", group: 1 },
      { id: 3, label: "Node 3", title: "node 3 tootip text", group: 2 },
      { id: 4, label: "Node 4", title: "node 4 tootip text", group: 3 },
      { id: 5, label: "Node 5", title: "node 5 tootip text", group: 4 },
    ],
    edges: [
      { from: 1, to: 2 },
      { from: 1, to: 3 },
      { from: 2, to: 4 },
      { from: 2, to: 5 },
    ],
  };

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
  return (
    <Graph
      graph={graph}
      options={options}
      events={events}
      getNetwork={(network) => {
        //  if you want access to vis.js network api you can set the state in a parent component using this property
      }}
    />
  );
}

export default App;
