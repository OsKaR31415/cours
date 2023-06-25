#obsidian #PKM 
up::[[obsidian]], [[PKM|PKM]]
title::"how i work in obsidian"

----

> [!query] Sous-notes de `=this.file.name`
> ```dataview
> TABLE title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```



