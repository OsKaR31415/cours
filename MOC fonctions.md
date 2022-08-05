up::[[MOC analyse]]
#MOC #maths/analyse 
# MOC fonctions
[[fonction|fonctions]] particulières

> [!query]- Sous-notes de [[fonction]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(up,          [[fonction]])
>    or contains(up.up,       [[fonction]])
>    or contains(up.up.up,    [[fonction]])
>    or contains(up.up.up.up, [[fonction]])
> SORT up.up.up.up, up.up.up, up.up, up
> ```


 - [[fonction signe]]
 - [[fonction rampe]]
 - [[fonction de Heaviside]]


## Types de fonctions

 - [[fonction affine]]
 - [[fonction indicatrice]]
  


## Fonctions [[MOC trigonométrie|trigonométriques]]

> [!query]- Sous-notes de [[MOC fonctions]] et [[MOC trigonométrie]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(up,          [[MOC fonctions]])
>    or contains(up.up,       [[MOC fonctions]])
>    or contains(up.up.up,    [[MOC fonctions]])
>    or contains(up.up.up.up, [[MOC fonctions]])
>    and contains(up,          [[MOC trigonométrie]])
>    or  contains(up.up,       [[MOC trigonométrie]])
>    or  contains(up.up.up,    [[MOC trigonométrie]])
>    or  contains(up.up.up.up, [[MOC trigonométrie]])
> SORT up.up.up.up, up.up.up, up.up, up
> ```

 - [[fonction sinus]]
     - [[fonction arcsinus]] 
     - [[fonction sinus hyperbolique]]
 - [[fonction cosinus]] 
     - [[fonction arccosinus]]
     - [[fonction cosinus hyperbolique]]
 - [[fonction tangente]] 
     - [[fonction arctangente]]
     - [[fonction tangente hyperbolique]]

