up:: [[application linéaire]]
down:: [[forme bilinéaire]]
title:: "$f: E^{2} \to F$ linéaire par rapport à ses deux paramètres"
#maths/algèbre 

---

> [!definition] application bilinéaire
> Soient $E$ et $F$ des $\mathbf{K}$-[[espace vectoriel]]
> Une [[application]] $f$ est *bilinéaire* ssi :
>  - $f : E^{2} \to F$ (2 paramètres)
>  - $f$ est linéaire par rapport à ses deux paramètres
>      - $f(( \textcolor{green}{a_{1}}\textcolor{royalblue}{u_{1}} + \textcolor{orange}{a_{2}}\textcolor{royalblue}{u_{2}}; v )) = \textcolor{green}{a_{1}}f((\textcolor{royalblue}{u_{1}}; v)) + \textcolor{orange}{a_{2}}f((\textcolor{royalblue}{u_{2}}; v))$ ([[application linéaire|linéaire]] par rapport à $u$)
>      - $f(( u; \textcolor{green}{a_{1}}\textcolor{royalblue}{v_{1}} + \textcolor{orange}{a_{2}}\textcolor{royalblue}{v_{2}} )) = \textcolor{green}{a_{1}}f((u;\textcolor{royalblue}{v_{1}})) + \textcolor{orange}{a_{2}}f((u;\textcolor{royalblue}{v_{2}}))$ ([[application linéaire|linéaire]] par rapport à $v$)
^definition

# Propriétés

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```
