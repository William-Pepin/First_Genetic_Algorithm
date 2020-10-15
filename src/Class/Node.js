import { getRandomInteger } from "../Functions/functions";

export default class Node {
  constructor(id, group) {
    this.id = id;
    this.label = String(id);
    this.group = group;
    this.connexion = 0;
  }

  randomizeColor(numberOfColors) {
    this.group = getRandomInteger(0, numberOfColors);
  }
}
