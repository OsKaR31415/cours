up::[[MOC trigonométrie]]
#maths/trigonométrie #no-review 

----




> [!smallquery] Sous-notes de [[MOC trigonométrie]]
> ```dataview
> TABLE title as "nom", description, derivative, primitive, properties, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
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


