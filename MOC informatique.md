#informatique #MOC
# MOC informatique

> [!query] Sous-notes de [[MOC informatique]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(file.outlinks, [[MOC informatique]])
>    or contains(up,          [[MOC informatique]])
>    or contains(up.up,       [[MOC informatique]])
>    or contains(up.up.up,    [[MOC informatique]])
>    or contains(up.up.up.up, [[MOC informatique]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```
