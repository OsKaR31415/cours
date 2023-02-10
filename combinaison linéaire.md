---
alias: "combinaisons linéaires"
---
up::[[MOC algèbre]]
sibling:: [[application linéaire]]
#maths/algèbre

---
Une _combinaison linéaire_ est une expression construite à partir d'un ensemble de termes en multipliant chaque terme par une constante et en sommant le tout.

# Exemples
Une combainaison linéaire de $x$ et $y$ serait une expression de la forme $ax + by$ où $a$ et $b$ sont des constantes.
Ce concept est central en [[MOC algèbre#Algèbre linéaire|algèbre linéaire]]

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```
