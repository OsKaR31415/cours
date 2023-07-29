---
alias: [ "unix commandes", "commandes terminal", "utilitaires ligne de commande" ]
---
up::[[unix]]
title::"commandes du shell unix"
#informatique/unix

----



> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```


