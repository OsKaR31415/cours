up::[[trigonométrie]]
#maths/trigonométrie

----

> [!smallquery] Sous-notes de [[trigonométrie]]
> ```dataview
> TABLE title as "nom", description, derivative, primitive, properties
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC AND -#démonstration
> WHERE contains(up,          [[MOC trigonométrie]]) 
>    or contains(up.up,       [[MOC trigonométrie]])
>    or contains(up.up.up,    [[MOC trigonométrie]])
>    or contains(up.up.up.up, [[MOC trigonométrie]])
> WHERE contains(up,          [[MOC fonctions]])
>    or contains(up.up,       [[MOC fonctions]])
>    or contains(up.up.up,    [[MOC fonctions]])
>    or contains(up.up.up.up, [[MOC fonctions]])
> WHERE file.name != this.file.name
> SORT title, up.up.up.up, up.up.up, up.up, up
> ```


