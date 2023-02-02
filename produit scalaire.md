up::[[vecteur]]
title::$\langle u; v \rangle = \sum\limits_{i} (u_{i} \times v_{i}) = u^{T}\times v$
#maths/algèbre

----
Le *produit scalaire* de deux [[vecteur|vecteurs]] $u$ et $v$ est défini comme :
$<u, v> = u +.\times v = u^T \times v$ ([[multiplication de matrices]], avec $u$ en ligne et $v$ en colonnes)


> [!definition] produit scalaire
> $\begin{align}<u,v> &= \sum\limits_{i} \left( u_{i}\times v_{i} \right)\\ &= u^{T}\times v\end{align}$
> (sur un [[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] finie, sur $\mathbb{R}$ ou sur $\mathbb{C}$)
> (ce n'est pas le seul produit scalaire possible. Voir [[produit scalaire#^definition-formelle]])
^definition


> [!definition] définition géométrique
> $\vec{u} \cdot \vec{v} = \|\vec{u}\|\cdot\|\vec{v}\|\cdot \cos\left(\widehat{\vec{u}, \vec{v}}\right)$ 
> $\|\vec{v}\|\cdot \cos \left( \widehat{\vec{u}, \vec{v}} \right)$ est la mesure algébrique (norme avec un signe) du projeté de $\vec{v}$ sur $\vec{u}$
> Donc, $\vec{u}\cdot\vec{v}$ est le produit des normes des composantes en $\vec{u}$ de $\vec{u}$ et $\vec{v}$ (c'est pourquoi $\frac{u.v}{\|u\|} \times \frac{1}{\|u\|}\times u$ est le [[projeté orthogonal d'un vecteur|projeté]] de $v$ sur $u$)
> **Note :** $\vec{u}\cdot\vec{v} = \vec{v}\cdot\vec{u}$ donc on peut [[projection d'un vecteur sur une droite vectorielle|projeter]] sur $\vec{u}$ ou sur $\vec{v}$ indiféremment.
^definition-geometrique

> [!definition] Définition formelle
> Soit $E$ un $\mathbb{R}$-[[espace vectoriel]]
> Un **produit scalaire** est une [[forme bilinéaire]] [[forme bilinéaire symétrique|symétrique]], [[forme bilinéaire définie|définie]] et [[forme linéaire positive|positive]]
>  - [[forme bilinéaire]] $b$
>      - [[forme bilinéaire symétrique|symétrique]] : $b(x, y) = b(y, x)$
>      - [[forme bilinéaire définie|définie]] : $b(x, x) = 0 \iff x = \vec{0}$
>      - [[forme bilinéaire positive|positive]] : $b(x, x) \geq 0$
> 
> Si on munit $E$ de $\varphi$, on obtient un [[espace préhilbertien réel]]
^definition-formelle


# Propriétés

## Propriétés des produits scalaire
 - 

## Propriétés du produit scalaire
On considère le produit scalaire classique : $\langle u, v\rangle = \,^T\!u \times v$

 - le _produit scalaire_ est une [[forme bilinéaire symétrique]]
 - le _produit scalaire_ est une [[forme bilinéaire définie]]
     - $\langle x, x\rangle = 0 \iff x = \vec{0}$
 - le _produit scalaire_ est une [[forme bilinéaire positive]]
     - $\langle x, x\rangle \geq 0$

## Orthogonalité
On utilise le produit scalaire pour définir l'[[vecteurs orthogonaux|orthogonalité]].

On dit que : $\langle u, v\rangle = 0 \iff \begin{cases} \vec{u}=\vec{0} \text{ ou } \vec{v}=\vec{0}\\ \text{ ou }\\ \vec{u} \bot \vec{v} \end{cases}$

Ou bien simplement $u \bot v \iff \langle u, v\rangle$ si on considère que $\vec{0}$ est orthogonal à tous les autres vecteur, ou bien si on l'exclut.

## Colinéarité
On utilise le produit scalaire et la [[norme]] pour définir la [[vecteurs colinéaires|colinéarité]].

On dit que $u \text{ colinéaire à } v \iff \left|\langle u,v\rangle \right| = \|u\|\cdot\|v\|$, c'est-à-dire quand l'[[inégalité de cauchy schwartz]] est une égalité.


