up::[[arbre binaire]]
#informatique/algorithmie #no-review 

---
Opération d'inversion d'un [[arbre binaire]].

L'inverse d'un [[arbre binaire]] est un autre arbre qui est obtenu en inversant la droite et la gauche de l'arbre original.

## Exemple
Soit cet arbre binaire :
```mermaid
graph TD
1 --> 2
1 --> 3
2 --> 4
2 --> 5
3 --> 8
3 --> 9
4 --> 6
6 --> 7
8 --> 10
8 --> 11
9 --> 12
10 --> 13
10 --> 14
```

Voici son inverse :
```mermaid
graph TD
1 --> 3
1 --> 2
2 --> 5
2 --> 4
3 --> 9
3 --> 8
4 --> 6
6 --> 7
8 --> 11
8 --> 10
9 --> 12
10 --> 14
10 --> 13
```

