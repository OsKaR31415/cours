up::[[unix commandes]]
title::"commandes du shell unix"
# unix commandes


> [!query] Sous-notes de [[unix commandes]]
> ```dataview
> TABLE title, usage, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[unix commandes]])
>    or contains(up,          [[unix commandes]])
>    or contains(up.up,       [[unix commandes]])
>    or contains(up.up.up,    [[unix commandes]])
>    or contains(up.up.up.up, [[unix commandes]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```
