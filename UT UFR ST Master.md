---
alias: [ "Master Science et Techniques université de Tours" ]
---
up:: [[UT UFR ST|Université de Tours UFR de Sciences et Techniques]]
title:: ""
#fac 

---

 - sauf masters très demandés, la plupart des étudiants obtiennent un master lorsqu'ils en cherchent un

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```