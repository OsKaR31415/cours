---
sr-due: 2022-08-20
sr-interval: 4
sr-ease: 288
alias: [ "sous groupes" ]
---

up::[[groupe]], [[structure algébrique]]
#maths/algèbre

----
Soit $H$ un **sous-ensemble** non vide d'un groupe $G$ muni d'une loi $*$.
$(H, *)$ est un _sous-groupe_ de $(G, *)$ ssi :
 - $*$ est une [[loi de composition interne]] sur $H$ : $\forall (h_1,h_2)\in H^2, h_1*h_2\in H$
 - $\forall h\in H, h^{-1}\in H$ : tous les éléments de $H$ ont leur [[éléments symétrisables|symétrique]] dans $H$ aussi
     - Alors $h*h^{-1}\in H$, donc cette propriété implique que $(H,*)$ possède un [[élément neutre]]

On sait aussi que $(H,*)$ est commutatif et associatif car $(G,*)$ l'est, et que $H\subset G$

# Autres définition
Soit un groupe $(G, *)$,
$(H, *)$ est un sous-groupe de $(G, *)$ ssi :
 - $H\subset G$ et $H\neq\emptyset$
 - $H$ est stable par la loi $*$ : $\forall (a,b)\in H^2, a*b\in H$
 - $H$ est stable par passage au symétrique : $\forall a\in H? a^{*(-1)}\in H$ 

# Propriétés
 - Un sous ensemble **non vide** $H$ d'un groupe $(G, *)$ est un sous-groupe ssi $\forall(h_1,h_2)\in H^2, h_1*h_2^{-1}\in H$
 - Soit $(G, *)$ un groupe et $(H_i)$ une famille quelconque de sous-groupes. Alors : $\disp\cap_{i}H_{i}$ est également un sous-groupe de $(G, *)$

 
