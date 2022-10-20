up::[[versioning]], [[unix commandes]]
title::"Système de [[versioning]]"
#PM #informatique #no-review 

----

 - gère des _instantannés_
     - stocke _a priori_ tous les fichiers 
     - taggé : permet de ne pas ré-écrire les fichiers non-modifiés
 - intégrité
     - [[checksum]] pour chaque fichier 
     - donne un _identifiant_ pour git



> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```


