---
alias: [ "types d'adresses réseaux" ]
---
up::[[réseau informatique]]
title::"3 types d'adresses : [[adresses IP|IP]], [[adresse mac|mac]] et [[réseau numéro de port]]"
#informatique/réseau

---

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```

