up:: [[équation différentielle]]
down:: [[équation différentielle du second ordre a coefficients constants]]
title:: "$a(x) y''(x) + b(x)y'(x) + c(x)y(x) = d(x)$ avec $a$ non [[fonction nulle|nulle]]"
#maths/analyse 

---

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```

