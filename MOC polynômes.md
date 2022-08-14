up::[[MOC fonctions]]
#MOC #maths/analyse 
# MOC polynômes
MOC sur les [[polynôme|polynômes]]

> [!query]- Sous-notes de [[polynôme]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(file.outlinks, [[polynôme]])
>    or contains(up,          [[polynôme]])
>    or contains(up.up,       [[polynôme]])
>    or contains(up.up.up,    [[polynôme]])
>    or contains(up.up.up.up, [[polynôme]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```

 - [[racines d'un polynôme|racines]]
 - [[discriminant]]

## Propriétés
 - [[dérivation]]
     - Tous les [[polynôme|polynômes]] sont [[fonction dérivable|dérivables]]
     - Tous les polynômes sont de [[classe d'une fonction|classe]] $C^{\infty}$
     - la [[dérivation|dérivée]] d'un polynôme est toujours un polyôme aussi

## Opérations
 - [[division de polynômes]]

## Types de polynômes 
 - [[polynôme inversible]]
 - [[polynôme irréductible]]
 - [[polynôme premier]]
 - [[polynôme unitaire]]
 - [[polynôme scindé]]

## Théorèmes 
 - [[théorème de d'Alembert]]

