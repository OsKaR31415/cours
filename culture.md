down:: [[réduction des inégalités culturelles]]
up:: [[politique]]
title:: "réduite à l'art professionnel au siècle dernier"
#politique

---

La culture est très large : la culture populaire, alternative, paysanne.

Au début de la [[5ème république]] : la culture est réduite aux arts pratiqués par des professionnels
 - [[culture légitime et illégitime]]


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```

