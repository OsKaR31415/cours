---
alias: [ "centre de gravité d'un triangle" ]
---
up:: [[triangle]]
sibling:: [[médianes d'un triangle]]
title:: "intersection des [[médianes d'un triangle|médianes]]"
#maths/géométrie 

---

> [!definition] isobarycentre d'un triangle
> Soit $ABC$ un triangle
> Le **centre de gravité** de $ABC$ est l'[[isobarycentre]] de $(A, B, C)$, soit le point $G$ tel que :
> $\overrightarrow{AG} + \overrightarrow{BG} + \overrightarrow{CG} = \vec{0}$
^definition

# Propriétés
Soit $ABC$ un triangle
Soient $a$, $b$ et $c$ les longueur opposées à $A$, $B$ et $C$
Soient $\alpha$, $\beta$, $\gamma$ les angles en $A$, $B$, $C$


 - $\displaystyle AG^{2} = \frac{2(b^{2}+c^{2}) - a^{2}}{9}$ (distance d'un point au centre de gravité)
     - cela vient de la formule $\displaystyle AG^{2} = \frac{1}{9} \left( b^{2} + c^{2} + 2bc \cos(\alpha) \right)$
         - $b^{2}+c^{2}+2bc\cos(\alpha) = \| \overrightarrow{AB} + \overrightarrow{AC} \|^{2}$
             - c'est un carré [[produit scalaire|scalaire]]
             - $\dfrac{1}{9}$ car $\displaystyle\overrightarrow{AG} = \frac{1}{3} (\overrightarrow{AB}+\overrightarrow{AC})$
