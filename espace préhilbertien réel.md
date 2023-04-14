up:: [[espace préhilbertien]]
title:: "$(E, \varphi)$", "$E$ un [[espace vectoriel]]", "$\varphi$ une [[forme bilinéaire]] [[forme bilinéaire symétrique|symétrique]], [[forme bilinéaire définie|définie]], [[forme bilinéaire positive|positive]]"
#maths/algèbre 

---

> [!definition] espace préhilbertien réel
> Un **espace préhilbertien réel** est un $\mathbb{R}$-[[espace vectoriel]], muni d'une [[forme bilinéaire]] [[forme bilinéaire symétrique|symétrique]], [[forme bilinéaire définie|définie]] et [[forme bilinéaire positive|positive]].
> 
> $(E, \varphi)$ est un **espace préhilbertien réel** ssi :
>  - $E$ est un $\mathbb{R}$-[[espace vectoriel]]
>  - $\varphi$ est une [[forme bilinéaire]] [[forme bilinéaire symétrique|]], [[forme bilinéaire définie|définie]] et [[forme bilinéaire positive|positive]]
>      - [[forme bilinéaire|bilinéaire]]
>      - [[forme bilinéaire symétrique|symétrique]] : $\varphi(x, y) = \varphi(y, x)$
>      - [[forme bilinéaire définie|définie]] : $\varphi(x, x) = 0 \iff x = \vec{0}$
>      - [[forme bilinéaire positive|positive]] : $\varphi(x, x) \geq 0$
^definition

# Propriétés
Soit $(E, \varphi)$ un espace préhilbertien réel

 - On appelle $\varphi$ le [[produit scalaire]] de cet espace
     - avec le produit scalaire, on peut définir l'orthogonalité


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```