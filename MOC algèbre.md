---
alias: "algèbre"
---
#MOC #maths/algèbre 
# MOC algèbre

> [!query]- Sous-notes de [[MOC algèbre]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw
> WHERE contains(file.outlinks, [[MOC algèbre]])
>    or contains(up,          [[MOC algèbre]])
>    or contains(up.up,       [[MOC algèbre]])
>    or contains(up.up.up,    [[MOC algèbre]])
>    or contains(up.up.up.up, [[MOC algèbre]])
> SORT up.up.up.up, up.up.up, up.up, up.file
> ```

## Structures algébriques

> [!query]- Sous-notes de [[structure algébrique]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[structure algébrique]])
>    or contains(up,          [[structure algébrique]])
>    or contains(up.up,       [[structure algébrique]])
>    or contains(up.up.up,    [[structure algébrique]])
>    or contains(up.up.up.up, [[structure algébrique]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up.file
> ```

 - [[semi groupe]]
 - [[monoïde]]
 
 - [[groupe]]
     - [[ordre d'un groupe]]
     - [[ordre d'un élément d'un groupe]]
     
     - [[sous groupe]]
         - [[sous groupe engendré]]
 - [[groupe abélien]]
         
 - [[espace vectoriel]]
     - [[sous espace vectoriel]]

 - [[corps]]
     - [[corps commutatif]]

 - propriétés des [[structure algébrique|structures algébriques]]
     - [[élément neutre]]
     - [[éléments symétrisables]]
     - [[associativité]]
     - [[commutativité]]

 - [[morphisme]]
     - [[isomorphisme]]
         - [[automorphisme]]
     - [[endomorphisme]]
         - [[endomorphisme linéaire]]


## Algèbre linéaire

### Combinaison linéaire
> [!query] Sous-notes de [[combinaison linéaire]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw AND -#MOC AND -"daily" AND -#cours AND -#exercice
> WHERE contains(file.outlinks, [[combinaison linéaire]])
>    or contains(up,          [[combinaison linéaire]])
>    or contains(up.up,       [[combinaison linéaire]])
>    or contains(up.up.up,    [[combinaison linéaire]])
>    or contains(up.up.up.up, [[combinaison linéaire]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```

### Applications linéaires
> [!query] Sous-notes de [[application linéaire]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw
> WHERE contains(file.outlinks, [[application linéaire]])
>    or contains(up,          [[application linéaire]])
>    or contains(up.up,       [[application linéaire]])
>    or contains(up.up.up,    [[application linéaire]])
>    or contains(up.up.up.up, [[application linéaire]])
> SORT up.up.up.up, up.up.up, up.up, up.file
> ```

 - [[application linéaire]]
     - [[rang d'une application linéaire]]
     - [[image d'une application linéaire]]
     - [[Noyau d'une application linéaire]]
     - [[matrice associée à une application linéaire]]
 - [[système linéaire]]
     - [[équation linéaire à 2 variables entières]]
 - [[combinaison linéaire]]



### Matrices
> [!query] Sous-notes de [[matrice]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[matrice]])
>    or contains(up,          [[matrice]])
>    or contains(up.up,       [[matrice]])
>    or contains(up.up.up,    [[matrice]])
>    or contains(up.up.up.up, [[matrice]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```

 - [[matrice]]
     - [[matrice identité]]
     - [[matrice diagonale]]
     - [[matrice symétrique]]
     - [[matrice antisymétrique]]
     - [[matrice d'un vecteur dans une base]]
     - [[matrice associée à une application linéaire]]
     - opérations sur les matrices :
         - [[addition de matrices]]
         - [[multiplication de matrices]]
         - [[trace d'une matrice]]
         - [[inverse d'une matrice]]
         - [[déterminant d'une matrice]]
         - [[comatrice]]
     - [[groupe linéaire des matrices inversibles]]
     

### Espaces vectoriels

> [!query] Sous-notes de [[espace vectoriel]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[espace vectoriel]])
>    or contains(up,          [[espace vectoriel]])
>    or contains(up.up,       [[espace vectoriel]])
>    or contains(up.up.up,    [[espace vectoriel]])
>    or contains(up.up.up.up, [[espace vectoriel]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```

 - [[espace vectoriel]]
     - [[dimension d'un espace vectoriel]]
     - [[base d'un espace vectoriel]]
         - [[base canonique d'un espace vectoriel]]
     - [[théorème du rang]]
     - [[espace vectoriel engendré par une famille de vecteurs]]
 - [[famille de vecteurs]]
     - [[famille de vecteurs liée]]
     - [[famille de vecteurs libre]]
     - [[famille de vecteurs génératrice]]
     - [[famille de vecteurs échelonnée]]
     - [[rang d'une famille de vecteurs]]
     - [[matrice d'un vecteur dans une base]]


 
