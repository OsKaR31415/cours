up::[[unix commandes]]
title::"commandes pour avoir des informations sur l'identification des utilisateurs"
#informatique/linux #no-review 
# unix commandes d'identification

> [!query] Sous-notes de [[unix commandes d'identification]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[unix commandes d'identification]])
>    or contains(up,          [[unix commandes d'identification]])
>    or contains(up.up,       [[unix commandes d'identification]])
>    or contains(up.up.up,    [[unix commandes d'identification]])
>    or contains(up.up.up.up, [[unix commandes d'identification]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```

