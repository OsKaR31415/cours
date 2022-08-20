#MOC #not-done
# MOC dénombrement

> [!query] Sous-notes de [[MOC dénombrement]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw
> WHERE contains(file.outlinks, [[MOC dénombrement]])
>    or contains(up,          [[MOC dénombrement]])
>    or contains(up.up,       [[MOC dénombrement]])
>    or contains(up.up.up,    [[MOC dénombrement]])
>    or contains(up.up.up.up, [[MOC dénombrement]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```



