up::[[endomorphisme]], [[application linéaire]]
#maths/algèbre #review 

----
Un _endomorphisme linéaire_ est une [[application linéaire]] d'un [[espace vectoriel]] dans lui même.

> [!definition] endomorphisme linéaire
> Soient $E$ et $F$ des $\mathbf{K}$-[[espace vectoriel|espaces vectoriels]]
> Soit $f : E \to F$
> $f$ est un **endomorphisme linéaire** ssi :
>  - $f$ est une [[application linéaire]]
>  - $E = F$ (soit $f: E \to E$)
^definition

> [!definition] Autre définition
> Un **endomorphisme linéaire** est un [[morphisme]] d'un [[espace vectoriel]] dans lui-même
> 
> > [!info] Remarque
> > On montre que toute [[application linéaire]] d'un [[espace vectoriel]] dans lui-même est un [[morphisme]].

# Propriétés

 - toute [[application linéaire]] de $E \to E$ est un endomorphisme linéaire (et donc un [[morphisme]])

Sur un _endomorphisme linéaire_, on a la suite d'équivalences suivante :
  $f$ est [[injection|injective]].
 $\iff$ $\ker f = \{0_E\}$
 $\iff$ $\dim\ker f = 0$
 $\iff$ $\dim \text{Im } f = \dim E$ (car on sait que $\dim\ker f + \dim\text{Im } f = \dim E$)
 $\iff$ $\text{Im } f = E$
 $\iff$ $f$ est [[surjection|surjective]]
 $\iff$ puisque $f$ est [[injection|injective]] et [[surjection|surjective]], elle est [[bijection|bijective]].
Donc, il suffit qu'une [[application linéaire]] sur un _endomorphisme linéaire_ respecte une de ces propriétés soit vraie pour que l'application soit [[bijection|bijective]].

**Théorème :** Soit $E$ un [[espace vectoriel]] réel de dimension finie, et $f$ un _endomorphisme linéaire_ de $E$, on a : $f$ [[injection|injective]] $\iff$ $f$ [[surjection|surjective]] $\iff$ $f$ [[bijection|bijective]]


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```
