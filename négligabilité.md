---
alias: "négligeable"
sr-due: 2022-09-20
sr-interval: 28
sr-ease: 272
---
up::[[fonction]]
sibling::[[domination en un point]]
#maths/analyse #review 
# négligabilité
Soient deux fonctions $f$ et $g$, on dit que _$f$ est négligable devant $g$ en $x_0\in\overline{\mathbb{R}}$_, et on note $f=_{x_{0}}o(g)$ :
$\disp f =_{x_{0}} o(g) \iff \lim_{x \to x_{0}} \frac{f(x)}{g(x)} = 0$


## Notation
On note $f =_{x_0} o(g)$
C'est la notation du **petit O**

## Définition

$$f(x) =_{x_0} o(g(x)) \iff \lim_{x\rightarrow x_0}\dfrac{f(x)}{g(x)} = 0$$

## Propriétés

 - $f = o(g) \implies f = O(g)$
     - où $O$ désigne la [[domination en un point]]

