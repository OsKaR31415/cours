up::[[vecteur]]
title::$\begin{pmatrix}x\\y\\z\end{pmatrix}\wedge \begin{pmatrix}x'\\y'\\z'\end{pmatrix}= \begin{pmatrix}yz'-y'z\\zx'-z'x\\xy'-x'y\end{pmatrix}$
description::"$u \wedge v \wedge w$ = volume du [[parallélépipède]] porté par $u, v, w$"
#maths/géométrie #maths/algèbre

----
Le *produit vectoriel* de deux [[vecteur|vecteurs]] $\overrightarrow{u}$ et $\overrightarrow{v}$ est noté :
$\overrightarrow{u} \wedge \overrightarrow{v}$


> [!definition] 
> 
> $\displaystyle \begin{pmatrix}x\\y\\z\end{pmatrix} \wedge \begin{pmatrix} x'\\y'\\z'\end{pmatrix} = \begin{pmatrix} yz' - y'z\\zx'-z'x\\xy'-x'y \end{pmatrix}$
>  - [!]  le produit vectoriel n'existe que pour des [[vecteur|vecteurs]] en dimension 3
>  - [i]  le produit vectoriel n'est pas [[associativité|associatif]] ni [[commutativité|commutatif]]
^definition


> [!idea] Calcul
> ![[produit vectoriel 2022-12-28 18.55.05.excalidraw|100%]]

# Propriétés 
 - $u \wedge v = -(v \wedge u)$
     - vient des propriétés du [[déterminant d'une matrice|déterminant]] (inverser deux colonnes fait l'oppposé)
 - $u \wedge u = \vec{0}$
     - obligatoire car un [[déterminant d'une matrice|déterminant]] avec 2 colonnes identiques est nul
     - obligatoire car $(u \wedge u) = -(u \wedge u)$ par inversion 
 - $(u \wedge v) \bot u$ et $(u \wedge v) \bot v$
     - le produit vectoriel permet de trouver un nouveau vecteur [[vecteurs orthogonaux|orthogonal]] à deux autres
 - $(a + b) \wedge v = (a \wedge v) + (b \wedge v)$ le produit vectoriel est [[distributivité|distributif]] (des deux côtés)
 
 - $\|\vec{u} \wedge \vec{v}\| = \|\vec{u}\| \times \|\vec{v}\| \times \sin\left( \widehat{\vec{u}, \vec{v}} \right)$
     - analogue au [[produit scalaire]], mais avec un $\sin$ à la place du $\cos$
     - la direction est connue car $(u \wedge v) \bot u$ et $(u \wedge v) \bot v$
 - $\|u \wedge v \wedge w\| = \left| \det \left( u; v; w \right) \right|$ (voir l'[[produit vectoriel#Interprétation géométrique|interprétation géométrique]])

## Interprétation géométrique
La [[norme]] du produit vectoriel de 3 vecteurs donne le volume d'un [[parallélépipède]] (non nécessairement rectangle) dont les côtés portent ces 3 vecteurs

Cela fonctionne aussi en dimension 2, avec deux vecteurs sur un même plan.

