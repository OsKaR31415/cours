up::[[langage de programmation]]
title::"langage de programmation interprété et dynamiquement typé"
#informatique

----


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description, author
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```
