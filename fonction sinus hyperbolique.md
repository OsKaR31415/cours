---
alias: ["sh", "sinus hyperbolique"]
sr-due: 2022-09-01
sr-interval: 13
sr-ease: 279
---
up::[[MOC trigonométrie]], [[MOC fonctions]]
sibling::[[fonction cosinus hyperbolique|ch]]
properties::[[fonction impaire|impaire]], [[bijection|bijective]]
derivative::[[fonction cosinus hyperbolique|ch]]
primitive::""
description::"$\mathbb{R} \to \mathbb{R}$", "$x \mapsto \dfrac{e^{x}-e^{-x}}{2}$"
title::$\mathrm{sh}$
#maths/analyse #maths/trigonométrie #no-review 

----
Noté $\sinh$, ou $\text{sh}$.
$\mathrm{sh}(x) = \dfrac{e^x - e^{-x}}2$

Elle est appelée _sinus_ car sa définition ressemble à celle de la [[fonction sinus]] dans la [[Formules d'Euler#sinus|formule d'Euler]]

# Graphe
```desmos-graph
    top=2
left=-2; right=2
    bottom=-2
width=350; height=350
---
y = \sinh(x)
(0, 0) | black
```

# Propriétés

$\boxed{\mathrm{ch}^{2} - \mathrm{sh}^{2} = 1}$
$\mathrm{ch}^2 x - \mathrm{sh}^2 x = \dfrac{e^{2x}+2+e^{-2x}}4 - \dfrac{e^{2x}-2+e^{-2x}}4 = 1$
(Voir [[fonction cosinus hyperbolique]])

 - $\mathrm{sh}$ est une [[fonction impaire]]
 - $\mathrm{sh}$ est [[fonction dérivable|dérivable]] sur $\mathbb{R}$
     - $\mathrm{sh}$ est donc [[fonction continue|continue]]
     - dérivée : $\mathrm{sh}' = \mathrm{ch}$ [[fonction sinus hyperbolique|sinus hyperbolique]] (existe sur $\mathbb{R}$)
         - a pour [[tangente à une courbe|tangente]] en $0$ la courbe de $y = x$
 - $\mathrm{sh}$ est [[fonction croissante|strictement croissante]]
 - [[asymptote]] à $\mathrm{ch}$ en $+\infty$ et à $-\mathrm{ch}$ en $-\infty$
     - $\mathrm{sh} \underset{+\infty}{\sim} \mathrm{ch}$ ([[fonctions équivalentes|équivalentes]]) et $\mathrm{sh} \underset{-\infty}{\sim} -\mathrm{ch}$
 - $\mathrm{sh}$ est une [[bijection]]
     - $\mathrm{sh}$ est [[fonction continue|continue]] car elle est [[fonction dérivable|dérivable]]
     - $\mathrm{sh}$ est [[fonction croissante|strictement croissante]]
     - toute fonction _continue_ et _strictement monotone_ est une [[bijection]]



### Note
$\sin(x) = \sinh(ix)$ soit $\mathrm{sh}(x) = \sin\left(\frac{x}{i}\right) = \sin(-ix)$
⚠️ $\sin$ ne peut pas être défini sur $\C$ car il perd ses propriétés
