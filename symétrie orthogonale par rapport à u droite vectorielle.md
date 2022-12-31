up::[[réflexion]], [[droite vectorielle]]
title::"$p_{1}$ et $p_{2}$ les [[projection d'un vecteur sur une droite vectorielle|projections]] sur les [[droite vectorielle|droites]] $D_{1}$ et $D_{2}$", "$s_{1}(u) = p_{1}(u)-p_{2}(u)$"
#maths/algèbre #no-review 

----
Dans un [[espace vectoriel orthonormé]]
Une *symétrie* est une [[application]] qui fait la [[réflexion]] d'un vecteur par rapport à une [[droite vectorielle]].


> [!définition]
> Soit $E$ un [[espace vectoriel]]
> Soit $(u_{1}, u_{2}) \in E^{2}$
> Soient $D_{1}=\mathrm{Vect}(u_{1})$ et $D_{2}=Vect(u_{2})$ deux [[droite vectorielle|droites vectorielles]]
> Soient $p_{1}$ et $p_{2}$ les [[projection d'un vecteur sur une droite vectorielle|projections]] sur $D_{1}$ resp. $D_{2}$
> On appelle _symétrique par rapport à_ $D_{1}$ et on note $s_{1}$ l'application :
> $\begin{align}s_{1} :\;& E \to E\\ & u \mapsto p_{1}(u) - p_{2}(u)\end{align}$
^definition

> [!definition] En 2 dimensions
> Soit $D_{\alpha}$ la [[droite vectorielle]] d'angle $\alpha$
> 
> $s_{D_{\alpha}} \;\widehat{=} \begin{pmatrix}\cos2\alpha & \sin2\alpha\\ \sin2\alpha & -\cos2\alpha\end{pmatrix}$


# Propriétés
Soient $s_{1}$ et $s_{2}$ des symétries

 - la [[composition de fonctions|composée]] de deux symétries est une [[rotation vectorielle]]
 - $s_{1} \circ s_{1} = \mathrm{id}$
     - Donc : $s_{1}^{-1} = s_{1}$
     - Mnémo : le déterminant de $s_1$ est $-1$, et $(-1) \times (-1) = 1$ donc $\text{symétrie}\times \text{symétrie} =\text{rotation}$


 - En [[dimension d'un espace vectoriel|dimension]] 2 :
     - le [[déterminant d'une matrice]] de symétrie est $-1$

