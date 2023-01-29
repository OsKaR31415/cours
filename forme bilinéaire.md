---
alias: [ "bilinéaire" ]
---
up:: [[application bilinéaire]]
sibling:: [[forme linéaire]] 
title::"$f: E^{2} \to \mathbf{K}$ linéaire par rapport à ses deux paramètres"
#maths/algèbre

---
> [!definition] Forme bilinéaire
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> une [[application]] $f$ est une _forme bilinéaire_ ssi :
>  - $f: E^{2} \to \mathbf{K}$ (deux paramètres, à valeurs scalaires)
>  - $f(( \textcolor{green}{a_{1}}\textcolor{royalblue}{u_{1}} + \textcolor{orange}{a_{2}}\textcolor{royalblue}{u_{2}}; v )) = \textcolor{green}{a_{1}}f((\textcolor{royalblue}{u_{1}}; v)) + \textcolor{orange}{a_{2}}f((\textcolor{royalblue}{u_{2}}; v))$ ([[application linéaire|linéaire]] par rapport à $u$)
>  - $f(( u; \textcolor{green}{a_{1}}\textcolor{royalblue}{v_{1}} + \textcolor{orange}{a_{2}}\textcolor{royalblue}{v_{2}} )) = \textcolor{green}{a_{1}}f((u;\textcolor{royalblue}{v_{1}})) + \textcolor{orange}{a_{2}}f((u;\textcolor{royalblue}{v_{2}}))$ ([[application linéaire|linéaire]] par rapport à $v$)
^definition

> [!definition] Autre définition
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Une *forme bilinéaire* de $E$ est une [[application bilinéaire]] de $E^{2} \to \mathbf{K}$


# Propriétés

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```

