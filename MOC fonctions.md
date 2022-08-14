up::[[MOC analyse]]
#MOC #maths/analyse 
# MOC fonctions
[[fonction|fonctions]] particulières

> [!query]- Sous-notes de [[fonction]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(file.outlinks, [[fonction]])
>    or contains(up,          [[fonction]])
>    or contains(up.up,       [[fonction]])
>    or contains(up.up.up,    [[fonction]])
>    or contains(up.up.up.up, [[fonction]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```

## Fonctions particulières

 - [[fonction signe]]
 - [[fonction rampe]]
 - [[fonction de Heaviside]]

### Fonctions trigonométriques

> [!query] Sous-notes de [[MOC fonctions]] et [[MOC trigonométrie]]
> ```dataview
> TABLE up, up.up, sibling
> FROM ""
> WHERE contains(file.outlinks, [[MOC fonctions]])
>    or contains(up,          [[MOC fonctions]])
>    or contains(up.up,       [[MOC fonctions]])
>    or contains(up.up.up,    [[MOC fonctions]])
>    or contains(up.up.up.up, [[MOC fonctions]])
> WHERE contains(file.outlinks, [[MOC trigonométrie]])
>    or contains(up,          [[MOC trigonométrie]])
>    or contains(up.up,       [[MOC trigonométrie]])
>    or contains(up.up.up,    [[MOC trigonométrie]])
>    or contains(up.up.up.up, [[MOC trigonométrie]])
> SORT file.etags, up.up.up.up, up.up.up, up.up, up
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


## Types de fonctions

 - [[fonction affine]]
 - [[fonction indicatrice]]
  



