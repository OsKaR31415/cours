---
alias: [ "applications" ]
---
up::[[fonction]]
title::"$\forall x \in \mathscr{D}_f, \exists y \in f(\mathscr{D}_f), y=f(x)$"
description::"au moins une image"
#maths/analyse

---
Une application est une [[fonction]] telle que **tous les éléments de l'ensemble de définition ont une image**.

Soit $f: E\mapsto F$ une [[fonction]], $f$ est une _application_ si et seulement si $\forall x\in E, \exists y\in F, y = f(x)$

Une application est toujours une [[fonction]], donc on a $\forall x\in E, \exists!y\in F, y=f(x)$ (pour une fonction, les images sont uniques, d'où le $\exists!$)


# Propriétés

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```
