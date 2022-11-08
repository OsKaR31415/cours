---
alias: "structures algébriques"
---
up::[[MOC algèbre]]
#maths/algèbre #no-review 

----
Une structure algébrique est un [[ensemble]] _muni_ d'une ou plusieurs [[loi de composition|lois de composition]].


> [!query]- Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up.up, up.up.up.up, up.up.up, up.up, up
> ```


