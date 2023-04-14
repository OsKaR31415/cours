up::[[matrice]], [[symétrie vectorielle orthogonale]]
sibling:: [[matrice de rotation]]
title::
#maths/algèbre 

---

> [!definition] Matrice de rotation
> Une **matrice de symétrie** est une [[matrice orthogonale]] de [[déterminant d'une matrice|déterminant]] $-1$
> > [!idea]- Intuition
> > Il semble logique que déplacer une [[base d'un espace vectoriel|base]] en conservant les [[norme]] et les [[produit scalaire|produits scalaires]] soit une [[matrice de rotation|rotation]] ou une [[matrice symétrique|symétrie]] (c'est démontrable).
> > Le déterminant de $-1$ sert à ne prendre que les symétries.
^definition


> [!definition] Définition géométrique
> Soit $\mathbf{K}$ un corps 
> Soit $M \in \mathcal{M}_{n}(\mathbf{K})$ une matrice 
> $M$ est une *matrice de symétrie* ssi l'[[matrice associée à une application linéaire|application linéaire associée]] à $M$ ($f$) est une [[symétrie vectorielle orthogonale]] 

# Propriétés 
Soit $S$ la matrice de symétrie d'angle $\theta$

 - l'angle $\theta$ est l'angle entre un vecteur et son image (donc le double de l'angle entre le vecteur et l'axe)
 - $S \text{ est une symétrie } \iff \det S = -1$


# Types de matrices de symétrie 

## En dimension 2

> [!definition] Matrice de symétrie en 2D
> La symétrique d'angle $\theta$ (angle entre le vecteur et son symétrique) correspond à la matrice :
> $$\begin{pmatrix}\cos \theta & \sin \theta\\ \sin \theta & -\cos \theta \end{pmatrix}$$
> 
>  - [!]  l'angle $\theta$ est l'angle entre $\vec{e_1}$ et $s(\vec{e_1})$ mais n'est pas égal à l'angle entre $\vec{e_2}$ et $s(\vec{e_2})$ (qui est $\pi-\theta$)


