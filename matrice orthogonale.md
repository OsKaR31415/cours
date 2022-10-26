up:: [[matrice]]
title:: "composée de vecteurs unitaires", "$^T\!M =$"
#maths/algèbre 

---

> [!definition] Matrice orthogonale
> Soit $\mathbf{K}$ un corps
> Soit $M \in \mathcal{M}_{n}(\mathbf{K})$ la [[matrice associée à une application linéaire]]
> $M$ est *orthogonale* ssi $^T\!M = M^{-1}$
^definition

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

# Types de matrices orthogonales
## En dimension 2
 - [[matrices de rotation]]
 - [[matrices de symétrie]]
