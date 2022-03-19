#maths/algèbre #review 
# multiplication de matrices

La multiplication de matrices **n'est pas élément-par-élément**.

Pour que deux matrices puissent être multipliées, il faut que le nombre de colonnes de la première soit le même que le nombre de lignes de la seconde.

## Définition

Soient $A$ et $B$ deux [[matrice]] respectivement de taille $m\times n$ et $n\times p$. On a :

$\displaystyle AB = A_{i,1}B_{1,j}+A_{i,2}B_{2,j}+\ldots+A_{i,n}B_{n,j} = \sum_{k=1}^n A_{i,k}B_{k,j}$

## propriétés
### commutativité
L'addition de matrices n'est pas [[commutativité|commutative]] :
$AB \neq BA$
### élément neutre
L'élément neutre de la multiplication de matrices est la [[matrice identité]] :
Soit $A$ une matrice de dimension $m\times n$
$A\times Id_n = A$ et $Id_m\times A = A$


## Visulalisation
![[visualisation de la multiplication de matrices.excalidraw]]
