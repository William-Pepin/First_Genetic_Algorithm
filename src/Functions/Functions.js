/**
 * @Date 2020-02-10
 * @Author w3school
 * @Desc Fonction permettant d'obtenir un nombre aléatoire entre deux nombres donnés.
 * @param min nombre minimum
 * @param max nombre maximum
 * @returns une nombre aléatoire entre min et max.
 */
export function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

/**
 * @Date 2020-02-10
 * @Author William Pépin
 * @Desc Fonction permettant d'obtenir un booléen aléatoire.
 * @param null
 * @returns Retourne 50% true %50 false
 */
export function getRandomBoolean() {
  return getRandomInteger(0, 1) === 1 ? true : false;
}
