up:: [[automorphisme]] 
down::[[endomorphisme linéaire]] 
title:: "[[automorphisme]] d'[[espace vectoriel]]"
#maths/algèbre 

----

> [!definition] 
> Un _endomorphisme_ est un [[morphisme]] d'un [[espace vectoriel]] dans lui-même.
^definition

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```

