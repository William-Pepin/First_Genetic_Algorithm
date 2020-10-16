import { getRandomInteger } from "../Functions/functions";

/**
 * @Date 2020-10-15
 * @Author  William Pépin 1634597
 * @Desc Classe définissant la structure d'un noeud. Le noeud permet d'avoir un id, un label et un groupe, qui détermine sa couleur.
 */
export default class Node {
  constructor(id, group) {
    this.id = id;
    this.label = String(id);
    this.group = group;
    this.connexion = 0;
  }

  /**
   * @Date 2020-10-15
   * @Author William Pépin
   * @Desc Fonction modifiant la couleur du noeud aléatoirement.
   * @param numberOfColors nombre de couleurs dans le choix des couleurs.
   * @returns null
   */
  randomizeColor(numberOfColors) {
    this.group = getRandomInteger(0, numberOfColors);
  }
}
