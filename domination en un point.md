---
alias: ["domine", "domination"]
sr-due: 2022-09-07
sr-interval: 15
sr-ease: 270
---
up::[[fonction]]
sibling::[[négligabilité]], [[fonctions équivalentes|équivalence]]
#maths/analyse #review 
# domination en un point
Soient deux fonction $f$ et $g$ de $I \setminus\{a\}$ à valeurs dans $\R$ (avec $a\in\overline{\R}$)
$f$ est _dominée_ par $g$ en $a$, ssi **$\frac{f}{g}$ est bornée au voisinage de $a$**

> [!définition] Définitions
>  - $\exists M\in\R^{+}, |f(x)| \leq M|g(x)|$ au voisinage de $a$
>  - $\exists M\in\R^{+}, \exists \alpha\in\R^{+*}, \forall x \in ]a-\alpha; a+\alpha[, |f(x)| \leq M|g(x)|$


## Notation
On note $f = O_{a}(g)$ pour "_$f$ est dominée par $g$ au voisinage de $a$_".
c'est la notation du **grand O**


## Propriétés

 - $O_{a}(1)$ désigne toute [[fonction bornée]] au voisinage de $a$
 
 - Si $f = O_{x_{0}}(g)$ et $h = O_{x_{0}}(g)$, alors $\lambda f + \mu h = O_{x_{0}}(g)$ ($(\lambda, \mu) \in \C^{2}$)
     - stable par [[combinaison linéaire]]

## Voir :

 - [[ensemble des réels complété]] : $\overline{\R}$
 
