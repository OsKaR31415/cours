#MOC 
# MOC trigonométrie
[[formules de trigonométrie]]

> [!query] Sous-notes de [[MOC trigonométrie]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[MOC trigonométrie]])
>    or contains(up,          [[MOC trigonométrie]])
>    or contains(up.up,       [[MOC trigonométrie]])
>    or contains(up.up.up,    [[MOC trigonométrie]])
>    or contains(up.up.up.up, [[MOC trigonométrie]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```