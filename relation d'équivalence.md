---
sr-due: 2023-01-06
sr-interval: 113
sr-ease: 291
---

up::[[relation]]
#maths/algèbre #review 

----
Soient $E$ un ensemble non vide, et $\mathscr R$ une [[relation]].
$\mathscr R$ est une _relation d'équivalence_ ssi elle est :
 - [[réflexivité d'une relation|réflexive]] : $\forall x\in E, x\mathscr Rx$
 - [[symétrie d'une relation|symétrique]] : $\forall (x, y)\in E^2, x\mathscr Ry\implies y\mathscr Rx$
     - On peut facilement prouver que cette proposition est équivalente à $\forall (x,y)\in E^2, x\mathscr Ry \iff y\mathscr Rx$
 - [[transitivité d'une relation|transitive]] : $\forall (x,y,z)\in E^3, x\mathscr Ry \vee y\mathscr Rz \implies x\mathscr Rz$

## Exemples
 - l'égalité est une relation d'équivalence
 - Soit $E$ l'ensemble des droites du plan, le parallélisme sur $E$ est une relation d'équivalence
 - Soit $E$ l'ensemble des étudiants d'une université, la relation _être dans la même promotion_ est une relation d'équivalence sur $E$
