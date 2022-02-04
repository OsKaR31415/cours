# sous groupe
Soit $H$ un **sous-ensemble** non vide d'un groupe $G$ muni d'une loi $*$.
$H$ est un _sous-groupe_ de $G$ ssi :
 - $*$ est une [[loi de composition interne]] sur $H$ : $\forall (h_1,h_2)\in H^2, h_1*h_2\in H$
 - $\forall h\in H, h^{-1}\in H$ : tous les éléments de $H$ ont leur [[éléments symétrisables|symétrique]] dans $H$ aussi
     - Alors $h*h^{-1}\in H$, donc cette propriété implique que $(H,*)$ possède un élément neutre
 - On sait aussi que $(H,*)$ est commutatif et associatif car $(G,*)$ l'est, et que $H\subset G$

## Propriétés
 - Un sous ensemble **non vide** $H$ d'un groupe $(G, *)$ est un sosu-groupe ssi $\forall(h_1,h_2)\in H^2, h_1*h_2^{-1}\in H$
 - Soit $(G, *)$ un groupe et $(H_i)$ une famille quelconque de sous-groupes. Alors : $\cap_iH_i$ est également un sous-groupe de $(G, *)$