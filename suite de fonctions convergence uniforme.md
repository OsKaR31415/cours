---
alias: [ "convergence uniforme", "uniformément convergente", "convergence uniforme d'une suite de fonctions", "suite de fonctions uniformément convergente", "uniformément convergente" ]
---
up:: [[suite de fonctions convergente]]
title:: "$(f_{n})$ CVU ssi : $\lim\limits_{ n \to +\infty } \sup\limits_{x \in I} \left| f_{n}(x) - f(x) \right| = 0$ où $f = \lim\limits_{ n \to \infty }f_{n}$"
#maths/analyse 

---

> [!definition] fonction uniformément convergente
> Soit $(f_{n})$ une suite de fonctions de $I \subset \mathbb{R} \to \mathbb{R}$
> On dit que $(f_{n})$ est **uniformément convergente vers $f$ sur $I$** ssi :
> $\boxed{\forall \varepsilon > 0, \quad \exists n_0 \in \mathbb{N}, \quad \forall x \in I, \quad \forall n \geq n_0, \quad |f_{n}(x)-f(x)| \leq \varepsilon}$
^definition


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```


