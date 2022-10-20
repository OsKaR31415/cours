down:: [[down of représentations en binaire]]
up::[[binaire]]
down::[[représentation des nombres en binaire]]
#informatique #no-review 

----



> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```