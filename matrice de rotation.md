---
alias: [ "rotation" ]
---
up::[[matrice]], [[rotation]], [[matrice orthogonale]]
sibling:: [[matrice de symétrie]]
title::"[[matrice orthogonale]] de [[déterminant d'une matrice|déterminant]] 1", "$\begin{pmatrix}a&b\\ b&-a\end{pmatrix}$ avec $a^{2}+b^{2}=1$ en 2D"
#maths/algèbre 

---

> [!definition] Matrice de rotation
> Une **matrice de rotation** est une [[matrice orthogonale]] de [[déterminant d'une matrice|déterminant]] $1$
> > [!idea]- Intuition
> > Il semble logique que déplacer une [[base d'un espace vectoriel|base]] en conservant les [[norme]] et les [[produit scalaire|produits scalaires]] soit une [[matrice de rotation|rotation]] ou une [[matrice symétrique|symétrie]] (c'est démontrable).
> > Le déterminant de $1$ sert à ne prendre que les rotations.
^definition

> [!definition] Matrice de rotation
> Soit $\mathbf{K}$ un corps
> Soit $M \in \mathcal{M}_{n}(\mathbf{K})$ une matrice
> $M$ est une matrice de rotation ssi l'[[matrice associée à une application linéaire|application linéaire asociée]] à $M$, $f: u \mapsto Mu$ correspond à une [[rotation]] vectorielle. 


# Propriétés

 - $S \text{ est une rotation } \iff \det S = 1$

# Types de matrices de rotation

## En dimension 2

> [!definition] Matrice de rotation en 2D
> La [[rotation]] d'angle $\theta$ correspond à la matrice :
> 
> $\large\begin{pmatrix}\cos\theta & -\sin\theta \\ \sin\theta & \cos\theta\end{pmatrix}$
> ![[matrice de symétrie 2022-11-09 18.14.44.excalidraw|900]]

