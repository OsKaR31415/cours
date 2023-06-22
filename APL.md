up::[[langage de programmation]]
title::"`'a progminlue'[1 2 3 4 5 6 4 1 7 7 8 9 6 2 10 1 9 6 11 1 6 12]`"
#informatique

---


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```
