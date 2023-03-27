up:: [[suite]], [[fonction]]
sibling:: [[série de fonctions]]
title:: "suite de $\left( \mathbb{R}^{\mathbb{R}} \right)^{\mathbb{N}}$"
#maths/analyse 

---


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```