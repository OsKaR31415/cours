up::[[MOC analyse]]
#MOC 

----

> [!query] Sous-notes de [[suite]]
> ```dataview
> TABLE description, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(up,          [[suite]])
>    or contains(up.up,       [[suite]])
>    or contains(up.up.up,    [[suite]])
>    or contains(up.up.up.up, [[suite]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```
