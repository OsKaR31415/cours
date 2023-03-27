---
alias: [ "PKM" ]
---
#PKM #MOC

----

> [!query]- Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM #PKM AND -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE file.link != this.file.link
>       AND !econtains(up, this.file.link)
> SORT up.up.up.up, up.up.up, up.up, up
> ```

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```

