up::[[graphe]]
#maths/graphes
# graphe orienté

## Définitions
### Définition classique
Un _graphe orienté_ est un couple $(V, A)$ où :
 - $V$ est l'ensemble des _sommets_
 - $A$ est l'ensemble des _flèches_, qui sont des couples de sommets distincts (une flèche est associée à 2 sommets distincs)
     - $A \subseteq \left\{ (x;y) \;|\; (x;y)\in V^2 \wedge x\neq y \right\}$
Précisément, ce type de graphe est appelé _graphe simple orienté_

### Définition autorisant les arrêtes multiples
un _graphe orienté_ est un triplet $G = (V, A, \phi)$ où :
- $V$ est un ensemble de _sommets_
- $A$ est un ensemble de _flèches_
- $\phi : A \mapsto \left\{ (x; y) \;|\; (x; y) \in V^2 \wedge x\neq y \right\}$ une _fonction d'incidence_ associant à chaque flèche un couple de sommets distincts (c.à.d une flèche est associée à deux sommets distincts)


