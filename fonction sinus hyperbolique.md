up::[[MOC trigonométrie]], [[MOC fonctions]]
sibling::[[fonction cosinus hyperbolique]]
#maths/analyse #maths/trigonométrie #review 
# fonction sinus hyperbolique
Noté $\sinh$, ou $\text{sh}$.
$\sh(x) = \dfrac{e^x - e^{-x}}2$

Elle est appelée _sinus_ car sa définition ressemble à celle de la [[fonction sinus]] dans la [[Formules d'Euler#sinus|formule d'Euler]]

```desmos-graph
    top=2
left=-2; right=2
    bottom=-2
width=350; height=350
---
y = \sinh(x)
(0, 0) | black
```

## Propriétés

$\boxed{\ch^{2} - \sh^{2} = 1}$
$\ch^2 x - \sh^2 x = \dfrac{e^{2x}+2+e^{-2x}}4 - \dfrac{e^{2x}-2+e^{-2x}}4 = 1$
(Voir [[fonction cosinus hyperbolique]])

 - $\sh$ est une [[fonction impaire]]
 - dérivée : $\sh' = \ch$ la [[fonction sinus hyperbolique]]
     - a pour [[tangente à une courbe|tangente]] en $0$ la courbe de $y = x$
 - [[asymptote]] à $\ch$ en $+\infty$ et à $-\ch$ en $-\infty$
     - $\sh \underset{+\infty}{\sim} \ch$ ([[fonctions équivalentes|équivalentes]]) et $\sh \underset{-\infty}{\sim} -\ch$
 
#### Note
$\sin(x) = \sinh(ix)$ soit $\sh(x) = \sin\left(\frac{x}{i}\right) = \sin(-ix)$
⚠️ $\sin$ ne peut pas être défini sur $\C$ car il perd ses propriétés
