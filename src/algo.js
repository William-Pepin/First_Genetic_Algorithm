function genGraph(n) {
  // Foreach node
  let graph;

  for (let index = 0; index < n; index++) {
    graph[index] = genNode(index);

    if (index !== 0) {
      rndNodeIndex = getRndInteger(0, index);
      attachNode(index, rndNodeIndex);
      for (let index2 = 0; index2 < index; index2++) {
        if (getRndInteger(0, 4) === 4) {
          attachNode(index, index2);
        }
      }
    }
  }
  return graph;
}

function genNode(index) {
  return {
    color: genColor(),
    id: index,
    pointers: null,
  };
}

function attachNode(node1, node2) {
  node1.pointers.push(node2);
  node2.pointers.push(node1);
}

function genColor() {
  colorIndex = getrndInteger(0, 8);
  switch (colorIndex) {
    case 1:
      return "red";
    case 2:
      return "blue";
    case 3:
      return "green";
    case 4:
      return "yellow";
    case 5:
      return "pink";
    case 6:
      return "purple";
    case 7:
      return "brown";
    case 8:
      return "orange";
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}
