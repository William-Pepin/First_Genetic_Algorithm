import getRandomInteger from "../Functions/Functions";

export default class Node {
  constructor(id, group) {
    this.id = id;
    this.title = id;
    this.group = group;
  }
  get id() {
    return this.id;
  }
  get title() {
    return this.title;
  }
  get group() {
    return this.group;
  }
  randomizeColor() {
    this.group = getRandomInteger(0, 8);
  }
}
