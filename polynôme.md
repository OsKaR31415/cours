up::[[MOC polynômes]]
#maths/analyse

----

> [!query]+ Sous-notes de `$= dv.el("span", "[[" + dv.current().file.name + "]]")`
> ```breadcrumbs
> title: false
> type: tree
> dir: down
> ```


Un polynôme est une expression de la forme :

$P(x) = a_0x^n + a_1x^{n-1} + \cdots + a_{n-2}x^2 + a_{n-1}x + a_n$

Soit : $\displaystyle P(x) = \sum_{n=0}^d(a_nx^{d-n})$


# Degré

Le _degré_ d'un polynôme est la plus haute puissance contenue dans ce polynôme.

**Exemple**: le polynôme $9x^3 + 5x - 12$ est de degré 3, car la plus grande puissance 



> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```



