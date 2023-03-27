---
alias: [ "série uniformément convergente", "uniformément convergente", "CVU" ]
---
up:: [[série de fonctions convergence]]
title:: "$\sum\limits_{n} f_{n}$ CVU ssi $\displaystyle \lim\limits_{ n \to \infty } \sum\limits_{n} \sup\limits_{x}(f_{n}(x)) = 0$"
#maths/analyse 

---

> [!definition] Convergence uniforme d'une série de fonctions
> Soit $I \subset \mathbb{R}$ un intervalle.
> Soit $f_{n} : I \to \mathbb{R}$ une [[suite de fonctions]].
> Soit $S_{n} = \sum\limits_{k=1}^{n}f_{n}$ la suite des sommes partielles de $f_{n}$
> Soit $S(x) = \lim\limits_{ n \to +\infty } S_{n}(x) = \sum\limits_{n}f_{n}(x)$ la limite de $S_{n}$ 
> la série $\sum\limits_{n}f_{n}$ **converge uniformément** ssi $S_{n}$ [[suite de fonctions convergence uniforme|CVU]], soit :
> $\forall \varepsilon > 0, \quad \exists n_0 \in \mathbb{N}, \quad \forall x \in I, \quad \forall n \geq n_0, \quad |S_{n}(x) - S(x)| < \varepsilon$
^definition

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```
