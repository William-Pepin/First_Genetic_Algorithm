/**
 * @Date 2020-10-15
 * @Author William Pépin 1634597
 * @Desc Classe définissant un arrête (edge) dans un graph. Il contient l'id des deux noeuds connectés.
 */
export default class Edge {
  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Constructeur permettant d'instancier les deux variables de l'arrête (edge).
   * @param from Noeud de départ
   * @param to Noeud de destination
   * @returns null
   */
  constructor(from, to) {
    this.to = to;
    this.from = from;
  }
}
