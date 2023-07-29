---
alias: "analyse"
---
up:: [[mathématiques]]
#maths/analyse

----
L'analyse est l'étude des [[fonction|fonctions]]
Voir **[[fonctions]]**

> [!smallquery]- Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

# Propriétés des [[fonction|fonctions]]
> [!query]- Sous-notes de [[fonction]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw
> WHERE contains(file.outlinks, [[fonction]])
>    or contains(up,          [[fonction]])
>    or contains(up.up,       [[fonction]])
>    or contains(up.up.up,    [[fonction]])
>    or contains(up.up.up.up, [[fonction]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```

 - [[fonction paire]] / [[fonction impaire]]
 - [[fonction croissante]] / [[fonction décroissante]]
 - [[fonction monotone]]
 
 - [[fonction continue]]
     - [[fonction continue par morceaux]]
 - [[fonction dérivable]]
 - [[fonction bornée]]
 - [[fonction convergente]]

 - [[fonctions équivalentes]] ($f \sim g$)
 - [[fonction dominée en un point]] (grand $O$)
 - [[fonction négligeable]] (petit $o$)


# Opérations
 - [[limite d'une fonction]]
 - [[dérivation]]
     - [[fonction dérivable]]
     - [[dérivées successives]]
     - [[dérivée d'une courbe paramétrée]]
 - [[intégration]]
     - [[intégration par parties]]
     - [[intégrale de Riemann]]
 
 - [[racine]]

 - [[asymptote]]
     - [[calculer une asymptote]]

# Equations
> [!query]- Sous-notes de [[équation différentielle]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw
> WHERE contains(file.outlinks, [[équation différentielle]])
>    or contains(up,          [[équation différentielle]])
>    or contains(up.up,       [[équation différentielle]])
>    or contains(up.up.up,    [[équation différentielle]])
>    or contains(up.up.up.up, [[équation différentielle]])
> SORT up.up.up.up, up.up.up, up.up, up.file
> ```

 - [[équation différentielle]]
     - [[équation différentielle du premier ordre]]
     - [[équation différentielle du second ordre a coefficients constants]]




