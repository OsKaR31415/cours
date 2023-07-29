up::[[analyse]]
#maths/analyse 

----
[[fonction|fonctions]] particulières

> [!query]+ Sous-notes de `$= dv.el("span", "[[" + dv.current().file.name + "]]")`
> ```breadcrumbs
> title: false
> type: tree
> dir: down
> ```

# Fonctions particulières

> [!smallquery] Sous-notes de `=this.file.link` et [[trigonométrie]]
> ```dataview
> TABLE title, description
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC AND -#demonstration
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, [[MOC trigonométrie]])))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

