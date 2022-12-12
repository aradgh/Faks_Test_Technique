// A partir d'une liste de joueurs d'échecs avec leurs ages et scores (elo).
// tu dois extraire de la liste les "champions"
// un joueur est dit "champion" si et seulement si il n'y a personne qui soit
// plus jeune et plus fort dans la liste, c'est à dire:
// (personne d'autre n'est strictement plus fort et plus jeune ou même age) et
// (personne d'autre n'est strictement plus jeune et plus fort ou même score)

// ta mission: dans le langage de ton choix, coder la fonction permettant de
// trouver les champions de la liste

// [nom, âge, score]
const chessPlayersList = [
  ["Paul", 13, 1422],
  ["Pierre", 17, 549],
  ["Marie", 22, 1607],
  ["Clément", 35, 2204],
  ["Marcel", 45, 2109],
  ["Jacqueline", 23, 905],
  ["Valentine", 16, 1566],
  ["Lucie", 33, 450],
  ["Patrick", 38, 1759],
  ["Tristan", 17, 2612],
];

/* Solution naïve: Pour chaque joueur, on parcourt la liste
pour trouver un joueur plus jeune et plus fort */
function findTheChampions(playersList) {
  let championsList = [];

  //Pour chaque joueur de la liste
  for (let i = 0; i < playersList.length; i++) {
    let playerIsChampion = true;

    /* On va parcourir les autres joueurs de la liste 
    pour voir si l'un d'eux est plus jeune et plus fort */
    for (let j = 0; j < playersList.length; j++) {
      if (
        (j != i &&
          //"personne d'autre n'est strictement plus fort et plus jeune ou même age"
          playersList[j][1] <= playersList[i][1] &&
          playersList[j][2] > playersList[i][2]) ||
        (j != i &&
          //"personne d'autre n'est strictement plus jeune et plus fort ou même score"
          playersList[j][1] < playersList[i][1] &&
          playersList[j][2] >= playersList[i][2])
      ) {
        playerIsChampion = false;
        break;
      }
    }

    if (playerIsChampion === true) {
      championsList.push(playersList[i]);
    }
  }

  return championsList;
}

let weAreTheChampions = findTheChampions(chessPlayersList);

console.clear();
console.log("Voici les champions de la liste : ");
console.log(weAreTheChampions);

//On a ici un algorithme de résolution en O(n²), car on parcours n fois les n éléments de la liste
