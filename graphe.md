#maths/graphes
# graphe

## Définitions
### Définition classique :
Un graphe est un couple $(V, E)$ où :
 - $V$ est un ensemble de sommets
 - $E$ est un sensemble d'arrêtes tel que : $E\subseteq \left\{\{x;y\} \;|\; (x;y)\in V^2 \wedge x\neq y\right\}$
Précisément, ce type de graphe est appelé _graphe simple non orienté_


### Définition autorisant les arrêtes multiples
Un graphe peut être défini comme un triplet $(V, E, \phi)$, où :
 - $V$ est l'ensemble des sommets
 - $E$ est l'ensemble des arrêtes
 - $\phi: E \mapsto \left\{ \{x;y\} \;|\; (x;y)\in V^2 \wedge x\neq y \right\}$ une _fonction d'incidence_ associant à chaque flèche un couple de sommets distincts (c.a.d une flèche est associée à deux sommets distincts)
Ce type de graphe est appelé _multigraphe non orienté_

### Graphe orienté
Voir [[graphe orienté]]

### Types de graphes
 - Les graphes _orientés_
     - Quand les arrêtes on un sens particulier (un arrête va de $a$ vers $b$ mais pas de $b$ vers $a$)
     - les arrêtes sont alors appelées _flèches_
     - par opposition aux graphes _non orientés_
 - Les graphes _simples_
     - Quand il y a au plus une arrête entre deux (ou une flèche d'un noeud vers un autre quand c'est un graphe _orienté_)
     - par opposition aux _multigraphes_
         - un _multigraphe_ peut avoir plusieurs arrêtes (ou flèches) entre deux noeuds.


