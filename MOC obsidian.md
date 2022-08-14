up::[[obsidian]]
#MOC #obsidian
# MOC obsidian

> [!query] Sous-notes de [[obsidian]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(file.outlinks, [[obsidian]])
>    or contains(up,          [[obsidian]])
>    or contains(up.up,       [[obsidian]])
>    or contains(up.up.up,    [[obsidian]])
>    or contains(up.up.up.up, [[obsidian]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```



