# arbre binaire
Un _arbre binaire_ est un [[arbre]] dont le **degré** de tous les noeuds est inférieur ou égal à 2.
Cela veut dire que chaque noeud à **au plus 2 enfants**.

## Implémentation
On implémente généralement un arbre binaire comme :
 - une valeur
 - un sous-arbre gauche
 - un sous-arbre droit
Pour signifier qu'un sous-arbre n'existe pas, on lui donne généralement la valeur de l'arbre nul.

## Complexité des opérations
Dans un arbre binaire quelconque, avec $n$ le nombre de valeurs dans l'arbre
 - **recherche** : $O(n)$
 - **supression** : $O(n)$
 - **[[arbre binaire inverse|inversion]]** : $O(\log n)$ 

## Arbres binaires particuliers
 - [[arbre binaire de recherche]]
 - [[tas binaire]]

