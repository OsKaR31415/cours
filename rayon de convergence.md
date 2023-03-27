---
alias: [ "rayon de convergence d'une série entière", "rayon de convergence d'une série" ]
---
up:: [[série entière]]
title:: "intervalle de convergence de la série"
#maths/analyse 

---
> [!definition] Rayon de convergence d'une série numérique
> Soit une $\sum\limits_{n \geq 0} a_{n}x^{n}$ [[série numérique]] quelconque
> Le **rayon de convergence** de cette série est l'ensemble sur lequel la série converge.
^definition
> [!example]- Exemple
> Soit la série $\displaystyle\sum\limits_{n} \frac{x^{n}}{n!}$
> Son rayon de convergence est $\mathbb{R}$, car on sait que cette série converge vers $\exp$ sur $\mathbb{R}$ (et même $\mathbb{C}$ pour l'exponentielle complexe).

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```

