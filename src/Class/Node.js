import { getRandomInteger } from "../Functions/functions";

export default class Node {
  constructor(id, group) {
    this.id = id;
    this.title = id;
    this.group = group;
  }

  randomizeColor() {
    this.group = getRandomInteger(0, 5);
  }
}
