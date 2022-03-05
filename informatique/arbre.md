# arbre
Un arbre est une [[structure de données]]


## Définition récursive
Un arbre est défini comme une valeur, et une liste de sous-arbres.
On appelle ce couple (valeur, liste de sous arbre) un **noeud**
On considère généralement aussi l'arbre _nul_ (qui ne possède aucun noeuds) comme un arbre également.

### Détails d'implémentation
Pour une implémentation, on considère généralement un arbre comme une valeur et une liste (éventuellement vide) de sous-arbre


## Propriétés
- **racine** : la racine d'un arbre est le noeud que l'on définit comme celui de "départ".
    - Dans la définition récursive, c'est celui qui contient tous les sous-arbres
- **hauteur** : la profondeur maximale d'un arbre
    - Un arbre à un seul noeud à une hauteur de 0
    - Un arbre _nul_ à une hauteur de -1
- **profondeur** : la profondeur d'un noeud est la longueur du chemin le plus court qui le mène à la **racine** de l'arbre
- **degré** d'un noeud : le nombre d'enfants de ce noeud


## Arbres particuliers

### [[arbres binaires]]

