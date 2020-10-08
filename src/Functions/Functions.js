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
