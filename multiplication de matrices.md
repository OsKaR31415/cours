up::[[matrice]]
title::$(A \cdot B)_{ij} = \sum\limits_{k}A_{i,k}\times B_{k,j}$
#maths/algèbre #no-review 
# multiplication de matrices

La multiplication de [[matrice|matrices]] **n'est pas élément-par-élément**.

Pour que deux matrices puissent être multipliées, il faut que le nombre de colonnes de la première soit le même que le nombre de lignes de la seconde.

## Définition

Soient $A$ et $B$ deux [[matrice|matrices]] respectivement de taille $m\times n$ et $n\times p$. On a, pour tout $i\in [\![1;m]\!]$ et $j\in[\![1;p]\!]$:

$\displaystyle (A\cdot B)_{i,j} = A_{i,1}B_{1,j}+A_{i,2}B_{2,j}+\ldots+A_{i,n}B_{n,j} = \sum_{k=1}^n A_{i,k}B_{k,j}$

Le produit matriciel de $A$ et $B$ est donc la somme du produit élément-par-élément des lignes de $A$ avec les colonnes de $B$.

Le produit matriciel est le [[produit externe]] avec les opérateurs $+$ et $\times$ : `+.×`

## Notation
Le produit des matrices $A$ et $B$ peut être noté :
 - $AB$
 - $A\times B$
 - $A\cdot B$
 - `A +.× B` en [[APL]]

## Propriétés
### Taille de la matrice
Si $A$ est de taille $m\times n$ et $B$ de taille $n\times p$, alors la matrice $A\cdot B$ est de taille $m\times p$ (par définition).

### Commutativité
L'addition de matrices n'est **pas [[commutativité|commutative]]** :
$AB \neq BA$

### Elément neutre
L'élément neutre de la multiplication de matrices est la [[matrice identité]] :
Soit $A$ une matrice de dimension $m\times n$
$A\times Id_n = A$ et $Id_m\times A = A$


## Visulalisation
![[visualisation de la multiplication de matrices.excalidraw]]


