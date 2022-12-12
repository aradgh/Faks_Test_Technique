# Faks - Test technique

## Énoncé de l'exercice
À partir d'une liste de joueurs d'échecs avec leurs ages et scores (elo), tu dois extraire de la liste les "champions".
Un joueur est dit "champion" si et seulement si il n'y a personne qui soit plus jeune et plus fort dans la liste, c'est à dire:
(personne d'autre n'est strictement plus fort et plus jeune ou même age) et
(personne d'autre n'est strictement plus jeune et plus fort ou même score)

**Ta mission : dans le langage de ton choix, coder la fonction permettant de trouver les champions de la liste**

Commande pour lancer la solution depuis l'emplacement du fichier:
```console
node '.\GHORRESHI Arad Faks test technique - exo complexité Solution naïve.js'
```

### Solution naïve
La solution naïve consiste tout simplement, pour chaque joueur de la liste, à parcourir toute la liste à la recherche d'un joueur plus jeune et plus fort. Si ce type de joueur n'existe pas, alors le joueur de référence est ajouté dans la liste des champions, qui est affichée à la fin.

Cette solution requiert de parcourir n fois les n éléments de la liste. Cela donne donc un algorithme avec une complexité de O(n²).

### Solution avec utilisation de tri
L'idée de base était d'utiliser un algorithme de tri afin d'avoir une complexité en O(n log(n)), qui est meilleure qu'un O(n²).
La solution consistait à :
- Dupliquer la liste des joueurs, puis trier une liste par âge et une liste par score elo.
- Ensuite, pour chaque joueur, extraire la sous-liste des joueurs plus jeunes dans la 1ère liste triée puis extraire la sous-liste des joueurs plus forts dans la 2ème.
- Enfin, s'il existe un joueur en commun dans ces 2 sous-listes, c'est-à-dire qu'il soit à la fois 
plus jeune et plus fort, alors le joueur de référence n'est pas champion.

Cependant, pour chaque joueur de la liste, il fallait parcourir chaque liste triée afin de savoir où la couper pour avoir la sous-liste des joueurs plus jeune ou plus fort. En d'autres termes, on devait parcourir de nouveau n fois les n éléments de la liste, et on se retrouve donc avec une complexité de O(n²).
Cela veut dire que l'utilisation d'un algorithme de tri n'optimise pas le problème comme je pouvais le croire au début.

### Hypothèse d'une solution optimisée
J'en ai conclu que, tant que j'utilisais des listes pour résoudre le problème, je ne pourrais pas optimiser la complexité en O(n²).
Je pense donc qu'il faudrait une autre structure de donnée plus efficace afin de trouver plus rapidement si, pour chaque joueur, il existe un autre joueur plus jeune et plus fort.

Une idée serait qu'à partir de la liste de joueurs de base, on trouve une formule qui, à partir de l'âge et du score elo d'un joueur, lui décerne un "poids".
Puis, grâce à cette liste de poids, on disposerait tous les joueurs dans un graphe où tous ceux qui n'ont pas de joueurs plus jeune et plus fort qu'eux se retrouvent en haut du graphe, au même niveau.

De cette manière, on aurait directement la liste des champions avec une complexité en O(n), car on devrait faire n calculs pour avoir tous les poids de la liste et les mettre dans un graphe.
