up::[[MOC MOCs]]
down::[[obsidian]]
#MOC #obsidian

----

> [!query] Sous-notes de [[obsidian]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw AND -#MOC
> WHERE contains(up,          [[obsidian]])
>    or contains(up.up,       [[obsidian]])
>    or contains(up.up.up,    [[obsidian]])
>    or contains(up.up.up.up, [[obsidian]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```

