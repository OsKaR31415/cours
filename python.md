up::[[langage de programmation]]
title::"langage de programmation interprété et dynamiquement typé"
# python


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description, author
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(up,          this.file.link)
>    or contains(up.up,       this.file.link)
>    or contains(up.up.up,    this.file.link)
>    or contains(up.up.up.up, this.file.link)
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```
