---
alias: ["ch", "cosinus hyperbolique"]
sr-due: 2022-09-10
sr-interval: 22
sr-ease: 302
---
up::[[MOC trigonométrie]], [[MOC fonctions]]
sibling::[[fonction sinus hyperbolique|sh]]
derivative::[[fonction sinus hyperbolique|-sh]]
primitive::
properties::[[fonction paire|paire]]
description::"$\mathbb{R} \to [1; +\infty[$", "$\dfrac{e^{x}+e^{-x}}{2}$"
title::$\mathrm{ch}$
#maths/analyse #maths/trigonométrie

----
Notée $\cosh$ ou $\text{ch}$.
$\mathrm{ch}(x) = \dfrac{e^x+e^{-x}}2$

Elle est appelée _cosinus_ car sa définition ressemble à celle de la [[fonction cosinus]]

# Graphe
```desmos-graph
    top=3
left=-2; right=2
    bottom=-1
width=350; height=350
---
y = \cosh(x)
(0, 1) | black
```

# Propriétés
$\cosh^2 x - \sinh^2 x = \dfrac{e^{2x}+2+e^{-2x}}4 - \dfrac{e^{2x}-2+e^{-2x}}4 = 1$
(Voir [[fonction sinus hyperbolique]])

 - $\mathrm{ch}$ est une [[fonction paire]]
 - dérivée : $\mathrm{ch}' = \mathrm{sh}$ la [[fonction sinus hyperbolique]] (existe sur $\mathbb{R}$)
     - **sans** changement de signe comme $\cos' = -\sin$
     - [[tangente à une courbe|tangente]] horizontale en $0$
 - [[asymptote]] à $\mathrm{sh}$ en $+\infty$ et à $-\mathrm{sh}$ en $-\infty$
 - $\mathrm{ch} \underset{+\infty}{\sim} \mathrm{sh}$ ([[fonctions équivalentes|équivalentes]]) et $\mathrm{ch} \underset{-\infty}{\sim} -\mathrm{sh}$


### Note :
$\cos(x) = \mathrm{ch}(ix)$ soit $\mathrm{ch}(x) = \cos\left(\frac{x}{i}\right) = \cos(-ix)$
⚠️ $\cos$ ne peut pas être défini sur $\mathbb{C}$ car il perd ses propriétés
