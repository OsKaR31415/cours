up::[[droite vectorielle]]
title::"$D_{1} = D_{1}$ ou $D_{1} \cap D_{2} = \{ 0_{E} \}$"
outdescription::"deux droites vectorielles sont confondues ou ont pour intersection $0_{E}$"
#demonstration #maths/algèbre #no-review 

---

On veut montrer que deux [[droite vectorielle|droites vectorielles]] sont soit confondues, soit d'intersection le [[vecteur nul]].


Soient $\overrightarrow{D_{1}}=Vect(\vec{e_{1}})$ et $\overrightarrow{D_{2}}=Vect(\vec{e_{2}})$ deux [[droite vectorielle|droites vectorielles]]
On appelle $\overrightarrow{F}=\overrightarrow{D_{1}}\cap\overrightarrow{D_{2}}$ l'intersection de ces deux droites
On sait que l'[[intersection de sous espaces vectoriels]] est un [[sous espace vectoriel]], donc $0 \in F$
Alors :
 - Soit $\left( \vec{e_{1}}, \vec{e_{2}}\right)$ est [[famille de vecteurs liée|liée]]
     - Alors $\overrightarrow{D_{1}}=Vect(\vec{e_{1}})=Vect(\vec{e_{2}})=\overrightarrow{D_{2}}$ et les deux droites sont confondues
 - Soit $(\vec{e_{1}}, \vec{e_{2}})$ est [[famille de vecteurs libre|libre]]
     - Alors :
         - Si $\vec{u}\in\overrightarrow{D_{1}}\cap\overrightarrow{D_{2}}$
             - il existe deux réels $\lambda_{1}$ et $\lambda_{2}$ de sorte que $\vec{u}=\lambda_{1}\vec{e_{1}}$ 
             - $\lambda_{1}\vec{e_{1}}-\lambda_{2}\vec{e_{2}}=\vec{0}$ mais la famille $(\vec{e_{1}},\vec{e_{2}})$ est [[famille de vecteurs libre|libre]]
             - donc : $\lambda_{1}=0=\lambda_{2}$
             - et donc : $\vec{u}=0$ 
             - alors $\overrightarrow{D_{1}} = \overrightarrow{D_{2}}$
On à donc : 
Deux droites vectorielles $\overrightarrow{D_{1}}$ et $\overrightarrow{D_{2}}$ sont :
 - **confondues** si $(\vec{e_{1}}, \vec{e_{2}})$ est [[famille de vecteurs liée|liée]]
 - d'intersection réduite au [[vecteur nul]] si $(\vec{e_{1}},\vec{e_{2}})$ est [[famille de vecteurs libre|libre]]