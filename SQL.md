up::[[langage de programmation]]
title::"langage de requête (et création) de [[base de données]]"
#informatique

----

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(up,          this.file.link)
>    or contains(up.up,       this.file.link)
>    or contains(up.up.up,    this.file.link)
>    or contains(up.up.up.up, this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```
