#MOC #maths/arithmétique 
# MOC arithmétique

> [!query]- Sous-notes de [[MOC arithmétique]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(file.outlinks, [[MOC arithmétique]])
>    or contains(up,          [[MOC arithmétique]])
>    or contains(up.up,       [[MOC arithmétique]])
>    or contains(up.up.up,    [[MOC arithmétique]])
>    or contains(up.up.up.up, [[MOC arithmétique]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```

