up::[[MOC analyse]]
#MOC #maths/analyse 
# MOC fonctions
[[fonction|fonctions]] particulières

> [!smallquery] Sous-notes de [[fonction]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), [[fonction]])
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

## Fonctions particulières

> [!smallquery] Sous-notes de `=this.file.link` et [[MOC trigonométrie]]
> ```dataview
> TABLE title, description
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC AND -#demonstration
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, [[MOC trigonométrie]])))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

