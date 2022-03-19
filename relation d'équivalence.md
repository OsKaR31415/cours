#maths/algèbre #review 
# relation d'équivalence
Soient $E$ un ensemble non vide, et $\mathscr R$ une relation.
$\mathscr R$ est une _relation d'équivalence_ ssi :
 - $\forall x\in E, x\mathscr Rx$ : la relation est **réflexive** : propriété de [[réflexivité d'une relation]]
 - $\forall (x, y)\in E^2, x\mathscr Ry\implies y\mathscr Rx$ : la relation est **symétrique** : propriété de [[symétrie d'une relation]]
     - On peut facilement prouver que cette proposition est équivalente à $\forall (x,y)\in E^2, x\mathscr Ry \iff y\mathscr Rx$
 - $\forall (x,y,z)\in E^3, x\mathscr Ry \vee y\mathscr Rz \implies x\mathscr Rz$ : la relation est **transitive** : propriété de [[transitivité d'une relation]]

## Exemples
 - l'égalité est une relation d'équivalence
 - Soit $E$ l'ensemble des droites du plan, le parallélisme sur $E$ est une relation d'équivalence
 - Soit $E$ l'ensemble des étudiants d'une université, la relation _être dans la même promotion_ est une relation d'équivalence sur $E$

## [[graphe d'une relation d'équivalence]]
