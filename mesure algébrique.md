up:: [[espace affine]]
title:: "norme signée selon le sens du vecteur directeur de la droite"
#maths/algèbre #maths/géométrie 

---

> [!definition] Mesure algébrique
> Soit $\mathcal{E}$ un $\mathbb{R}^{n}$-[[espace affine]]
> Soit $\vec{v} \in \mathbb{R}^{n}$ un vecteur non nul
> Soit $d$ une droite de $\mathcal{E}$ dirigée par $\vec{v}$
> Soient $A\in \mathcal{E}$ et $B \in \mathcal{E}$ deux points distincts
> 
> On définit sur $d$ la **mesure algébrique** de $[AB]$ (notée $\overline{AB}$) comme l'unique scalaire tel que $\boxed{\overrightarrow{AB} = \overline{AB}\times\vec{v}}$
> --- 
> Si $\mathcal{E}$ est [[espace euclidien|euclidien]], on a :
> $\overline{AB} = \begin{cases} \dfrac{\|\overrightarrow{AB}\|}{\|\vec{v}\|} & \text{ si } \overrightarrow{AB} \text{ est dans le sens de } \vec{v} \\ - \frac{\|\overrightarrow{AB}\|}{\|\vec{v}\|} & \text{ sinon}\end{cases}$
> Et donc on a toujours $\|\overrightarrow{AB}\| = \left| \overline{AB} \right|$
> 
^definition

# Propriétés

 - Toute droite admet une mesure 
     - évident car toute droite admet un [[vecteur directeur]] 