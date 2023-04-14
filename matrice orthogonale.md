---
alias: [ "orthogonale" ]
---
up:: [[matrice]]
title:: "$\,^T\!M M = Id$"
#maths/algèbre 

---

> [!definition] Matrice orthogonale
> Soit $\mathbf{K}$ un corps
> Soit $M \in \mathcal{M}_{n}(\mathbf{K})$ la [[matrice associée à une application linéaire]]
> $M$ est *orthogonale* ssi $^T\!M\cdot M = Id_{n}$
> On montre que les matrices orthogonales sont les matrices composées de vecteurs unitaires.
^definition

> [!definition] Définition géométrique
> Une matrice orthogonale est la matrice d'une [[base orthonormée]].
> 
> C'est-à-dire que tous ses vecteurs sont [[vecteur unitaire|unitaires]] et deux-à-deux [[vecteurs orthogonaux|orthogonaux]]

# Propriétés
Soit $M$ une matrice orthogonale
Soient $u$ et $v$ des vecteurs

 - $\det M = \pm1$
 - sur un [[espace euclidien]] :
     - $\|u\| = \left\| Mu \right\|$ conserve la [[norme]]  
     - $u.v = (Mu) . (Mv)$ conserve le [[produit scalaire]] 
         - on en déduit $u \bot v \iff (Mu) \bot (Mv)$
 - les vecteurs des colonnes (resp des lignes) de $M$ sont tous :
     - [[vecteur unitaire|unitaires]]
     - deux-à-deux [[vecteurs orthogonaux|orthogonaux]] 
 - conservation de la [[norme]] : $\|M u\| = \|u\|$
 - conservation du [[produit scalaire]] : $\langle Mu, Mv \rangle = \langle u, v \rangle$
 - l'[[endomorphisme]] associé à $M$ est [[endomorphisme normal]]

 - Toute matrice **orthogonale** est :
     - soit une [[matrice de rotation]]
     - soit une [[matrice de symétrie]]


