---
sr-due: 2022-09-02
sr-interval: 14
sr-ease: 270
alias: [ "sl", "systèmes linéaires" ]
---
up::[[MOC algèbre]]
title::"système d'équations linéaires (combinaisons linéaires des variables)"
#maths/algèbre

----
_système linéaire_, abb. _SL_

> [!definition] 
>  Un système linéaire est un système d'équations linéaires.
> Le mot _linéaire_ signifie que le système est formé de [[combinaison linéaire|combinaisons linéaires]] des inconnues.
^definition


### Exemple
Système linéaire à 2 équations et 2 inconnues :
$(S) :\left\{ \begin{array}{l} ax+by=u\\ cx+dy=v \end{array} \right.$
où $a, b, c, d$ sont fixés, et où $x, y$ sont les inconnues.


L.a.es solution.s d'un système linéaire à $n$ équations à $n$ inconnues peut être vu comme le.s point.s d'intersection de $n$ espaces de dimension $n-1$ dans $\mathbb R^n$. Dans le cas particulier d'un système à 2 inconnues ($n = 2$) est l'intersection de 2 droites (dimension 1) dans le plan ($\mathbb R^2$)

Voir les [[résolution d'un SL|méthodes de résolution]]

Un système linéaire peut être [[représentation matricielle d'un SL|représenté avec des matrices]].

# Systèmes particuliers
> [!query] Sous-notes de [[système linéaire]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[système linéaire]])
>    or contains(up,          [[système linéaire]])
>    or contains(up.up,       [[système linéaire]])
>    or contains(up.up.up,    [[système linéaire]])
>    or contains(up.up.up.up, [[système linéaire]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```


