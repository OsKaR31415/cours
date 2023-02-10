---
mathLink: test
---
up::[[MOC algèbre]]
#maths/algèbre

----
Une matrice est l'objet mathématique désignant un tableau. ^431974

Une matrice à $m$ lignes et $n$ colonnes (souvent dit $m\times n$) est un tableau rectangulaire de $m\times n$ nombres.
On note ces nombres entre parenthèses :
$A=\begin{pmatrix} 0 &1 & 2 & 3\\ 4 & 5 & 6 & 7\\ 8 & 9 & 10 & 11\\ \end{pmatrix}$


# Élément d'une matrice
On note $A_{i,j}$ l'élément à la ligne $i$ et à la colonne $j$.
$A_{2,3} = 6$

# Opérations sur les matrices :

 - [[addition de matrices]]
 - [[multiplication de matrices]]


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```