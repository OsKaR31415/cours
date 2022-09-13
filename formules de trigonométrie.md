---
alias: "formule de trigonométrie"
---
up::[[MOC trigonométrie]]
#maths/trigonométrie #no-review 
# formules de trigonométrie

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, join(type) as "type"
> FROM #maths/trigonométrie AND -"templates"
> WHERE contains(up,          this.file.link)
>    or contains(up.up,       this.file.link)
>    or contains(up.up.up,    this.file.link)
>    or contains(up.up.up.up, this.file.link)
> WHERE file.link != this.file.link
> SORT join(type) DESC
> ```

## En fonction de $t=\tan\left(\dfrac{x}{2}\right)$
On pose $t=\tan\left(\dfrac{x}{2}\right)$
 - $\cos(x) = \dfrac{1-t^2}{1+t^2}$ ([[fonction paire]])

 - $\sin(x) = \dfrac{2t}{1+t^2}$ ([[fonction impaire]])

 - $\tan(x) = \dfrac{2t}{1-t^2}$ ([[fonction impaire]])

Avec ces définitions, on remarque bien la [[fonction paire|parité]] des fonctions ainsi que leur ensemble de définition (la [[fonction tangente]] n'est pas définie quand $t^2 = 1$ soit quand $x = \pm \dfrac\pi2 [\pi]$)

**Note :** utile pour [[intégration|intégrer]] des fonctions trigonométriques.


## Symétries

 - $\sin\left(\frac{\pi}{2}-x\right) = \cos(x)$
 - $\cos\left(\frac{\pi}{2} - x\right) = \sin(x)$
 - $\tan\left(\frac{\pi}{2} - x\right) = \dfrac{1}{\tan(x)}$

 - $\sin(\pi - x) = -\sin(x)$
 - $\cos(\pi - x) = -\cos(x)$
 - $\tan(\pi - x) = \tan(x)$


## Formules d'Euler
[[Formules d'Euler]]
 - $\cos x = \frac{e^{ix} + e^{-ix}}{2}$
 - $\sin x = \frac{e^{ix} - e^{-ix}}{2i}$













