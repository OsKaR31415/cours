#MOC #maths/arithmétique 
# MOC arithmétique

> [!query] Sous-notes de [[MOC arithmétique]]
> ```dataview
> TABLE title, description as "",  up as "Up"
> FROM -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[MOC arithmétique]])
>    or contains(up,          [[MOC arithmétique]])
>    or contains(up.up,       [[MOC arithmétique]])
>    or contains(up.up.up,    [[MOC arithmétique]])
>    or contains(up.up.up.up, [[MOC arithmétique]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```
