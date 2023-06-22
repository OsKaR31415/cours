up::[[matrice]]
title::"telle que $i\neq j \implies M_{i,j} = 0$"
description::"seuls les éléments de sa diagonale sont non-nuls"
#maths/algèbre 

----
Une *matrice diagonale* est une [[matrice]] particulière telle que seuls les éléments de sa diagonale sont non nuls.

> [!definition] 
> Soit $M \in \mathcal{M}_{m,n}(\mathbf{K})$ une matrice de taille $m\times n$.
> $M$ est une _matrice diagonale_ si $\forall (i,j)\in [\![0,m]\!]\times[\![0,n]\!], i\neq j \implies M_{ij} = 0$
^definition

# Propriétés
Soit $D$ une matrice diagonale

 - $D^{-1} = \text{invs}(D)$ où $\text{invs}$ est l'inversion élément-par élément
     - $\displaystyle (D^{-1})_{i,i} = \frac{1}{D_{i,i}}$
     - l'inverse est aussi une matrice diagonale
