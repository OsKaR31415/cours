up::[[unix]]
title:: "primitives `C` d'UNIX"
#informatique/unix 

---

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```