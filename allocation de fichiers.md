up:: [[sous-système de gestion des fichiers]] 
title:: 
#informatique/unix 

---


> [!query] sous-notes directes de `=this.file.link`
> ```dataview
> LIST title
> FROM ""
> WHERE econtains(up, this.file.link)
> ```

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```

