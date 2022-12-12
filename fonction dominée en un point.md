---
alias: [ "domination", "dominée" ]
---
up::[[fonction]]
sibling::[[fonction négligeable]], [[fonctions équivalentes|équivalence]]
title::"$f = \mathcal{O}_{x_{0}}(g) \iff \dfrac{f}{g} \text{ est bornée au voisinage de } x_{0}$"
#maths/analyse #review 

----
> [!definition] fonction dominée
> Soient deux fonction $f$ et $g$ de $I \setminus\{a\}$ à valeurs dans $\mathbb{R}$ (avec $a\in\overline{\mathbb{R}}$)
> $f$ est _dominée_ par $g$ en $a$, ssi **$\frac{f}{g}$ est bornée au voisinage de $a$**
> 
^definition

> [!définition] fonction négligeable - définition formelle
>  - $f = \mathcal{O}_a(g) \iff \exists M\in\mathbb{R}^{+}, |f(x)| \leq M|g(x)|$ au voisinage de $a$
>  - $f = \mathcal{O}_a(g) \iff \exists M\in\mathbb{R}^{+}, \exists \alpha\in\mathbb{R}^{+*}, \forall x \in ]a-\alpha; a+\alpha[, |f(x)| \leq M|g(x)|$
^definition-formelle

> [!note]
> $f$ est _dominée_ par $g$ si $f$ "_ne l'emporte pas complètement sur $g$_"
^definition-intuitive

# Notation
On note $f = O_{a}(g)$ pour "_$f$ est dominée par $g$ au voisinage de $a$_".
c'est la notation du **grand O**


# Propriétés
 - $f=\mathcal{O}_{x_{0}}(g) \iff g=\mathcal{O}_{x_{0}}(f)$
     - la domination est [[commutativité|commutative]]
     - évident, car si $\frac{f}{g}$ est [[fonction bornée|bornée]], alors $\frac{g}{f}$ l'est aussi

 - $\mathcal{O}_{a}(1)$ désigne toute [[fonction bornée]] au voisinage de $a$
 
 - Si $f = \mathcal{O}_{x_{0}}(g)$ et $h = \mathcal{O}_{x_{0}}(g)$, alors $\lambda f + \mu h = \mathcal{O}_{x_{0}}(g)$ ($(\lambda, \mu) \in \mathbb{C}^{2}$)
     - stable par [[combinaison linéaire]]

 - $\mathcal{O}(\mathcal{O}(f)) = \mathcal{O}(f)$
     - formellement si $f = \mathcal{O}(g)$ et $g = \mathcal{O}(h)$ alors $f = \mathcal{O}(h)$
     - la domination est [[transitivité d'une relation|transitive]]



> [!info] Voir
>  - [[ensemble des réels complété]] : $\overline{\mathbb{R}}$
 
