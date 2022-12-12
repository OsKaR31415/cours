---
sr-due: 2022-09-20
sr-interval: 28
sr-ease: 272
alias: ["négligeable", "négligeabilité", "fonction négligeable"]
---
sibling:: [[fonctions équivalentes]]

up::[[fonction]]
sibling::[[fonction dominée en un point|domination]], [[fonctions équivalentes|équivalence]]
title::"$f=o_{x_{0}}(g) \iff \lim\limits_{x \to x_{0}} \dfrac{f(x)}{g(x)}=0$"
#maths/analyse #review 

----


> [!definition] fonction négligeable
> Soient deux fonctions $f$ et $g$, on dit que _$f$ est négligable devant $g$ en $x_0\in\overline{\mathbb{R}}$_, et on note $f=_{x_{0}}o(g)$ :
> $\displaystyle f = o_{x_{0}}(g) \iff \lim_{x \to x_{0}} \frac{f(x)}{g(x)} = 0$
^definition


> [!définition] fonction négligeable - autre définition
>  
> $f = o_{x_{0}}(g)$ si il existe $h$ telle que :
>  - $\lim\limits_{x_{0}} h = 0$
>  - $f = hg$
^definition-alternative

> [!définition] fonction négligeable - définition formelle
> $f = o_{x_{0}}(g) \iff \forall \varepsilon>0, \forall b \in \mathbb{R}, \forall x \in X, x \geq b \implies |f(x)| \leq \varepsilon|g(x)|$
> [[démonstration formule négligeabilité avec epsilon|démonstration]]
^definition-avec-epsilon

# Propriétés

 - $f = o(g) \implies f = O(g)$
     - où $O$ désigne la [[fonction dominée en un point]]
     
 - Si $f = o_{+\infty}(g)$ et $h = o_{+\infty}(g)$, alors $\lambda f + \mu h = o_{+\infty}(g)$ ($(\lambda, \mu) \in \mathbb{C}^{2}$)
     - stable par [[combinaison linéaire]]
 
 - $o(1) = \varepsilon(x)$ car $\lim \frac{o(1)}{1} = 0$ donc $\lim o(1) = 0$

 - $f \sim_{x_{0}} g \iff f = g+o_{x_{0}}(g)$ ([[démonstration correspondance équivalence et domination|démonstration]])
