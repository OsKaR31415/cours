---
sr-due: 2022-09-12
sr-interval: 22
sr-ease: 277
alias: "équivalente"
---
up::[[fonction]]
sibling::[[négligabilité]]
#maths/analyse #review 
# fonctions équivalentes
Soient deux [[fonction|fonctions]] $f$ et $g$, on dit qu'elles sont _équivalentes en $x_0\in\overline{\mathbb{R}}$_, et on note $f(x)\sim_{x_0}g(x)$.

$$f(x)\sim_{x_0}g(x) \iff \lim_{x\rightarrow x_0} \dfrac{f(x)}{g(x)} = 1$$

> [!attention]
> On n'écrit pas $0 \sim_{x_{0}} f$ car c'est évidemment toujours faux
> **$f \sim_{x_{0}} 0$ n'a pas de sens**

## Propriétés
 - L'équivalence est une [[relation d'équivalence]].

 - $f \sim g \implies f \circ \varphi \sim g \circ \varphi$
     - [[composition de fonctions]] **à droite**
     - la composition à gauche ne fonctionne pas
         - $x+1 \sim_{+\infty} x$ alors que $e^{x+1}\not\sim_{+\infty}e^{x}$

 - Si $\disp\lim_{x \to x_{0}} f(x) = a \mid_{a \in \R^{*}}$ on a $f \sim_{x_{0}} a$
     - Si $a = 0$ ou $a = \pm\infty$ alors $f \nsim_{x_{0}} a$

