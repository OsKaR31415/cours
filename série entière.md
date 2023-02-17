---
alias: [ "séries entières" ]
---
up:: [[série de fonctions]]
title:: "$\sum\limits_{n\geq 0} a_{n}x^{n}$, où $a_{n}$ ne dépend pas de $x$"
#maths/analyse 

---

> [!definition] Série entière
> Une **série entière** est une [[série de fonctions]] de la forme :
> $\sum\limits_{n} a_{n}x^{kn}$ avec :
>  - $(a_{n})$ une suite sur $\mathbb{R}$ qui ne dépend pas de $x$
>  - $k \in \mathbb{N}$ un coefficient devant la puissance de $x$
^definition

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```
