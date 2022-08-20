---
alias: ["ch", "cosinus hyperbolique"]
sr-due: 2022-09-10
sr-interval: 22
sr-ease: 302
---
up::[[MOC trigonométrie]], [[MOC fonctions]]
sibling::[[fonction sinus hyperbolique]]
#maths/analyse #maths/trigonométrie #review 
# fonction cosinus hyperbolique
Notée $\cosh$ ou $\text{ch}$.
$\ch(x) = \dfrac{e^x+e^{-x}}2$

Elle est appelée _cosinus_ car sa définition ressemble à celle de la [[fonction cosinus]]

```desmos-graph
    top=3
left=-2; right=2
    bottom=-1
width=350; height=350
---
y = \cosh(x)
(0, 1) | black
```

## Propriétés
$\cosh^2 x - \sinh^2 x = \dfrac{e^{2x}+2+e^{-2x}}4 - \dfrac{e^{2x}-2+e^{-2x}}4 = 1$
(Voir [[fonction sinus hyperbolique]])

 - $\ch$ est une [[fonction paire]]
 - dérivée : $\ch' = \sh$ la [[fonction sinus hyperbolique]] (existe sur $\R$)
     - **sans** changement de signe comme $\cos' = -\sin$
     - [[tangente à une courbe|tangente]] horizontale en $0$
 - [[asymptote]] à $\sh$ en $+\infty$ et à $-\sh$ en $-\infty$
 - $\ch \underset{+\infty}{\sim} \sh$ ([[fonctions équivalentes|équivalentes]]) et $\ch \underset{-\infty}{\sim} -\sh$


#### Note :
$\cos(x) = \ch(ix)$ soit $\ch(x) = \cos\left(\frac{x}{i}\right) = \cos(-ix)$
⚠️ $\cos$ ne peut pas être défini sur $\C$ car il perd ses propriétés
