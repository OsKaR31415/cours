---
alias: ["domine", "domination"]
sr-due: 2022-09-07
sr-interval: 15
sr-ease: 270
---
up::[[fonction]]
sibling::[[négligabilité]], [[fonctions équivalentes|équivalence]]
title::"$f = \bigO_{x_{0}}(g) \iff \dfrac{f}{g} \text{ est bornée au voisinage de } x_{0}$"
#maths/analyse #review 
# domination en un point
Soient deux fonction $f$ et $g$ de $I \setminus\{a\}$ à valeurs dans $\R$ (avec $a\in\overline{\R}$)
$f$ est _dominée_ par $g$ en $a$, ssi **$\frac{f}{g}$ est bornée au voisinage de $a$**

> [!définition] Définitions
>  - $f = \mathcal{O}_a(g) \iff \exists M\in\R^{+}, |f(x)| \leq M|g(x)|$ au voisinage de $a$
>  - $f = \mathcal{O}_a(g) \iff \exists M\in\R^{+}, \exists \alpha\in\R^{+*}, \forall x \in ]a-\alpha; a+\alpha[, |f(x)| \leq M|g(x)|$

> [!note]
> $f$ est _dominée_ par $g$ si $f$ "_ne l'emporte pas complètement sur $g$_"

## Notation
On note $f = O_{a}(g)$ pour "_$f$ est dominée par $g$ au voisinage de $a$_".
c'est la notation du **grand O**


## Propriétés
 - $f=\mathcal{O}_{x_{0}}(g) \iff g=\mathcal{O}_{x_{0}}(f)$
     - la domination est [[commutativité|commutative]]
     - évident, car si $\frac{f}{g}$ est [[fonction bornée|bornée]], alors $\frac{g}{f}$ l'est aussi

 - $\mathcal{O}_{a}(1)$ désigne toute [[fonction bornée]] au voisinage de $a$
 
 - Si $f = \mathcal{O}_{x_{0}}(g)$ et $h = \mathcal{O}_{x_{0}}(g)$, alors $\lambda f + \mu h = \mathcal{O}_{x_{0}}(g)$ ($(\lambda, \mu) \in \C^{2}$)
     - stable par [[combinaison linéaire]]

 - $\mathcal{O}(\mathcal{O}(f)) = \mathcal{O}(f)$
     - formellement si $f = \mathcal{O}(g)$ et $g = \mathcal{O}(h)$ alors $f = \mathcal{O}(h)$
     - la domination est [[transitivité d'une relation|transitive]]

 - avec les [[polynôme|polynômes]] : Soit $P(x)=a_{0}+a_{1}x+a_{2}x^{2}+\cdots+a_{n}x^{n}$
     - au voisinage de $0$ : $P(x)\sim a_{k_{0}}x^{k_{0}}$ où $a_{k_{0}}$ est le premier coefficient non nul de $P(x)$
     - au voisinage de $\pm\infty$ : $P(x)\sim a_{n}x^{n}$


> [!info] Voir
>  - [[ensemble des réels complété]] : $\overline{\R}$
 
