---
alias: [ "droite comme ensemble de vecteurs selon un paramètre" ]
---
up:: [[barycentre d'un système de points pondérés|barycentre]] 
title:: "$(AB) = \{ M \in \mathbb{R}^{2} \mid \overrightarrow{OM} = t\overrightarrow{OA} + (1-t)\overrightarrow{OB} \;\wedge\; t \in \mathbb{R}\}$", "quelque soit $O$ (origine dans le calcul)"
#maths/géométrie 

---

> [!definition] Droite dirigée par un vecteur et passant par un point
> Soit $\mathcal{E}$ un $\mathbb{R}^{2}$-[[espace affine]]
> Soit $\vec{v} \in \mathbb{R}^{2}$ un vecteur et $A\in \mathcal{E}$ un point
> Soit $d = (\vec{v}; A)$ la droite dirigée par $\vec{v}$ et passant par $A$
> une équation paramétrique de $d$ est :
> $d = \{ M \in \mathcal{E} \mid \overrightarrow{AM} = t\vec{v} \quad\wedge\quad t \in \mathbb{R}\}$
> ![[équation paramétrique affine d'une droite 2022-12-29 18.44.11.excalidraw|100%]]
^definition

> [!definition] Droite passant par deux points
> Soit $\mathcal{E}$ un $\mathbb{R}^{2}$-[[espace affine]]
> Soient $O$, $A$ et $B$ des points de $\mathcal{E}$
> On peut trouver une [[courbe paramétrée|équation paramétrique]] de la droite $(AB)$ comme un ensemble de points selon un paramètre $t$
> $(AB) = \{ M \in \mathcal{E} \mid \overrightarrow{OM} = t\overrightarrow{OA} + (1-t)\overrightarrow{OB} \quad \wedge \quad t \in \mathbb{R} \}$
> ![[équation paramétrique affine d'une droite 2022-12-29 18.53.00.excalidraw|100%]]



# Démonstration

$$
\begin{align}
\overrightarrow{OM} = t\overrightarrow{OA} + (1-t)\overrightarrow{OB} &\iff \overrightarrow{OM} - \overrightarrow{OA} = (t-1)\overrightarrow{OA} + (1-t)\overrightarrow{OB} \\
&\iff \overrightarrow{OM} - \overrightarrow{OA} = (t-1) \left( \overrightarrow{OA} - \overrightarrow{OB} \right)\\
&\iff \overrightarrow{OM} - \overrightarrow{OA} = (t-1) \overrightarrow{BA} \\
&\iff \overrightarrow{OM} + \overrightarrow{AO} = (1-t)\overrightarrow{AB} \\
&\iff \overrightarrow{AM} = (1-t)\overrightarrow{AB}
\end{align}
$$
Donc les vecteurs $\overrightarrow{AM}$ sont bien l'ensemble des vecteurs colinéaires à $\overrightarrow{AB}$, et définissent bien la doite $(AB)$
