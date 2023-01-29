---
alias: [ "sev", "sous espaces vectoriels" ]
sr-due: 2022-09-07
sr-interval: 19
sr-ease: 298
---
up::[[espace vectoriel]]
title::"espace vectoriel contenu dans un autre"
description::"$F$ est un [[sous espace vectoriel|sev]] de $E$ ssi : $F \neq \emptyset$ ET $(F,+,\cdot)$ est un [[espace vectoriel|ev]]"
#maths/algèbre

----

> [!definition] sous espace vectoriel
> Un sous-espace vectoriel $F$ d'un [[espace vectoriel]] $(E, +, \cdot)$ est un sous ensemble de $E$ tel que :
>  - $F\neq\emptyset$ (⚠️ $\emptyset$ n'est pas un [[espace vectoriel|ev]]) 
>  - $(F,+,\cdot)$ est un $\mathbb R$-espace vectoriel
^definition


> [!definition] Autre définition
> Un sous espace vectoriel $F$ de $E$ est un sous-ensemble de $E$ tel que :
>  - $0_E \in F$
>  - $\forall (u,v)\in E^2, \forall \lambda \in \mathbb R, \lambda \cdot u + v \in F$ (stabilité par [[combinaison linéaire|combinaisons linéaires]])
> 
> Donc, pour montrer qu'une partie non vide d'un [[espace vectoriel]] est un sous espace vectoriel, il suffit de montrer qu'elle contient $0_{E}$ et qu'elle est stable par $+$ et par $\cdot$


# Propriétés


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```

