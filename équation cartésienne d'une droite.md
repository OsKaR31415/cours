up::[[équation cartésienne]]
title::"$ax + by +c = 0$"
#maths #review 

----
Une droite dans le plan peut être vue comme l'ensemble des points satisfaisant une équation.


> [!definition] Equation cartésienne d'une droite
> Equation de la forme $ax + by + c = 0$ avec $(a, b, c) \in \mathbb{R}^{2}$ et $(a, b) \neq (0, 0)$
^definition

> [!definition] Equation cartésienne d'une droite passant par deux points
> Soient $A = (x_{A}, y_{A})$ et $B = (x_{B}, y_{B})$ et $A \neq B$
> L'équation de la droite $(AB)$ est :
> $\begin{vmatrix} x-x_{A}  &  x_{B}-x_{A} \\ y-y_{A}  &  y_{B}-y_{A}\end{vmatrix}  = 0$
> 
> > [!info] Justification
> > Soit $M = (x; y)$ un point
> > 
> > $$\begin{align}
> > M \in (AB) &\iff \overrightarrow{AM} \text{ et } \overrightarrow{AB} \text{ sont colinéaires}\\
> > &\iff \det(\overrightarrow{AM}, \overrightarrow{AB}) = 0\\
> > &\iff \begin{vmatrix} x-x_{A}  &  x_{B}-x_{A} \\
> >                     y-y_{A}  &  y_{B}-y_{A}\end{vmatrix}  = 0\\
> > \end{align}$$

# Propriétés
Soit $D : ax+by+c=0$

## Vecteur directeur
Un vecteur directeur de $D$ est $\begin{pmatrix}-b\\a\end{pmatrix}$

 - [!] c'est bien $\begin{pmatrix}-b\\a\end{pmatrix}$ et non $\begin{pmatrix}-a\\ b\end{pmatrix}$ ($a$ et $b$ inversés)

L'ensemble des vecteurs directeurs de $D$ est $\{ k \begin{pmatrix}-b\\ a\end{pmatrix} \mid k \in \mathbb{R}^{2}\}$

## Vecteur orthogonal
Un vecteur orthogonal à $D$ est $\begin{pmatrix}a\\ b\end{pmatrix}$

L'ensemble des vecteurs orthogonaux à $D$ est $\left\{ k \begin{pmatrix}b\\ a\end{pmatrix} \mid k \in \mathbb{R}^{2} \right\}$

## Pour les [[droite vectorielle|droites vectorielles]] 
Pour les droites vectorielles, la forme est $ax+by = 0$ car on est sur un plan sans origine.
En fait : $D = \left\{ \begin{pmatrix}x\\y\end{pmatrix} \in \mathbb{R}^{2} \;\Bigg|\; ax + by = 0 \right\}$ où $(a; b) \neq (0; 0)$

Les formules pour les [[équation cartésienne d'une droite#Vecteur directeur|vecteurs directeurs]] et pour les [[équation cartésienne d'une droite#Vecteur orthogonal|vecteurs orthogonaux]] sont les mêmes car elles ne contiennent pas $c$.

