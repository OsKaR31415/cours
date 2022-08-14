#MOC #maths/géométrie #not-done 
# MOC géométrie

> [!query] Sous-notes de [[MOC géométrie]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(file.outlinks, [[MOC géométrie]])
>    or contains(up,          [[MOC géométrie]])
>    or contains(up.up,       [[MOC géométrie]])
>    or contains(up.up.up,    [[MOC géométrie]])
>    or contains(up.up.up.up, [[MOC géométrie]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```