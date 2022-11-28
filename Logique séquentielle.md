up:: [[électronique]] 
sibling:: [[logique combinatoire]]
title::
#science #logique 

---


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description, schematics
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```

