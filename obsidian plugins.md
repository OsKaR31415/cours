up::[[obsidian]]
title::"notes sur les plugins obsidian"
#obsidian

> [!smallquery]+ Sous-notes de `$= dv.el("span", "[[" + dv.current().file.name + "]]")`
> ```breadcrumbs
> title: false
> type: tree
> dir: down
> ```

> [!smallquery]- Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```





