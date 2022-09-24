up::[[MOC algèbre]]
#maths/algèbre #no-review 
# matrice
Une matrice est l'objet mathématique désignant un tableau.

Une matrice à $m$ lignes et $n$ colonnes (souvent dit $m\times n$) est un tableau rectangulaire de $m\times n$ nombres.
On note ces nombres entre parenthèses :
$A=\begin{pmatrix} 0 &1 & 2 & 3\\ 4 & 5 & 6 & 7\\ 8 & 9 & 10 & 11\\ \end{pmatrix}$

## Elément d'une matrice
On note $A_{i,j}$ l'élément à la ligne $i$ et à la colonne $j$.
$A_{2,3} = 6$

## Opérations sur les matrices :

 - [[addition de matrices]]
 - [[multiplication de matrices]]

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```
 
