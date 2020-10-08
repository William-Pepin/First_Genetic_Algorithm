export default class Edge {
  constructor(from, to) {
    this.to = to;
    this.from = from;
  }
  get to() {
    return this.to;
  }
  get from() {
    return this.from;
  }
}
