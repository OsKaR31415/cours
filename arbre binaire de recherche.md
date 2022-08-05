up::[[structure de données]]
#informatique/algorithmie 
# arbre binaire de recherche
Un _arbre binaire de recherche_ est un [[arbre binaire]] particulier.
Il est tel que, pour tout noeud $N$ de l'arbre, l'ensemble des descendants à droite de $N$ ont des valeurs supérieures à celles de $N$, et l'ensemble des descentants à gauche de $N$ ont des valeurs inférieures à celles de $N$.

**Note :** On peut inverser la droite et la gauche dans cette définition. Cela équivaut à [[arbre binaire inverse|inverser]] l'arbre.


## Propriétés
### Complexité des opérations
[[complexité algorithmique]]
Dans un arbre binaire de recherche avec $n$ noeuds :
 - La **recherche** d'un élément
     - meilleur cas : $O(1)$
     - cas moyen : $O(\log_2 n)$
     - pire cas : $O(n)$ si l'arbre n'est pas [[arbre équilibré|équilibré]]
 - L'**insertion** d'un nouvel élément
     - meilleur cas : $O(1)$
     - cas moyen : $O(\log_2 n)$
     - pire cas : $O(n)$ si l'arbre n'est pas [[arbre équilibré|équilibré]]
 - La **suppression** d'un élément est en $O(\log_2 n)$
     - meilleur cas : $O(1)$
     - cas moyen : $O(\log_2 n)$
     - pire cas : $O(n)$ si l'arbre n'est pas [[arbre équilibré|équilibré]]
 - L'**[[arbre binaire inverse|inversion]]** d'un arbre est en $O(n)$
