up:: distance [[distance entre deux droites dans l'espace]] 
title:: 
#maths/géométrie 

---


Soit $d$ une droite dirigée par $\vec{v}$ et passant par $A$
Soit $d'$ une droite dirigée par $\vec{v}'$ et passant par $B$

On sait que la distance doit être mesurée sur une droite perpendiculaire à $d$ et à $d'$.
Or, on sait qu'un vecteur orthogonal à $\vec{v}$ et $\vec{v}'$ est le [[produit vectoriel]] $\vec{v} \wedge \vec{v}'$.

Soient $M\in d$ et $N \in d'$ les deux points les plus proches sur $d$ et $d'$ (la distance entre $d$ et $d'$ est donc $MN$), on a :
$\overrightarrow{AB} = \overrightarrow{AM} + \overrightarrow{MN} + \overrightarrow{NB}$
Or, les projetés de $\overrightarrow{AM}$ et $\overrightarrow{NB}$ sur $\vec{v} \wedge \vec{v}'$ sont $\vec{0}$, donc le projeté de $\overrightarrow{AB}$ sur $\vec{v} \wedge \vec{v}'$ est $\overrightarrow{MN}$
Or, le [[projeté orthogonal d'un vecteur]] sur un autre correspond au [[produit scalaire]].
Pour cela, on normalise $\vec{v}\wedge\vec{v}'$ en $\frac{1}{\|\vec{v}\wedge\vec{v}'\|}\vec{v}\wedge\vec{v}'$
Donc : $\displaystyle\|\overrightarrow{MN}\| = \left| \overrightarrow{AB} \cdot \left( \frac{1}{\| \vec{v} \wedge \vec{v}' \|} \vec{v} \wedge \vec{v}' \right) \right|$ 


