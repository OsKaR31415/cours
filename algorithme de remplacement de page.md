up::[[SE - page]] 
title:: "défaut de page ==> on choisit :", " - si on prends un nouveau cadre", " - sinon quelle cadre écraser"
#informatique 

---

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```