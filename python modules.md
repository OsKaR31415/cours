up::[[python]]
#informatique/python
# python modules

> [!query] Sous-notes de [[python modules]]
> ```dataview
> TABLE title, description, author
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[python modules]])
>    or contains(up,          [[python modules]])
>    or contains(up.up,       [[python modules]])
>    or contains(up.up.up,    [[python modules]])
>    or contains(up.up.up.up, [[python modules]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```

