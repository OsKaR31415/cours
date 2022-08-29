---
alias: "analyse"
---
#MOC #no-review #maths/analyse
# MOC analyse
L'analyse est l'étude des [[fonction|fonctions]]
Voir **[[MOC fonctions]]** 

> [!query]- Sous-notes de [[MOC analyse]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw
> WHERE contains(file.outlinks, [[MOC analyse]])
>    or contains(up,          [[MOC analyse]])
>    or contains(up.up,       [[MOC analyse]])
>    or contains(up.up.up,    [[MOC analyse]])
>    or contains(up.up.up.up, [[MOC analyse]])
> SORT up.up.up.up, up.up.up, up.up, up.file
> ```

## Propriétés des [[fonction|fonctions]]
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
 - [[domination en un point]] (grand $O$)
 - [[négligabilité]] (petit $o$)


## Opérations
 - [[limite d'une fonction]]
 - [[dérivation]]
     - [[fonction dérivable]]
     - [[dérivées successives]]
     - [[dérivée d'une courbe paramétrée]]
 - [[intégration]]
     - [[intégration par parties]]
     - [[intégrale de Riemann]]
 
 - [[racine d'une fonction]]

 - [[asymptote]]
     - [[calculer une asymptote]]

## Equations
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
     - [[équation différentielle du second ordre]]




