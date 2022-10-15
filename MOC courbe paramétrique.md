#MOC

----
 - [[courbe paramétrée]]

> [!query] Sous-notes de [[courbe paramétrée]]
> ```dataview
> TABLE title, description, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), [[courbe paramétrée]])
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

## Propriétés
### Propriétés des points
 - [[point régulier d'une courbe paramétrique|point régulier]]
 - [[multiplicité d'un point d'une courbe paramétrée|multiplicité d'un point]]
 
### Propriétés d'une courbe
 - [[courbe paramétrée simple|courbe simple]]
 - [[continuité d'une courbe paramétrée|courbe continue]]
 - [[Support d'une courbe paramétrée|support d'une courbe]]
 - [[point régulier d'une courbe paramétrique#Courbe régulière|courbe régulière]]

 - [[asymptote]]
     - [[calculer une asymptote]]

### Opérations
 - [[dérivée d'une courbe paramétrée|dérivée]]
 - [[tangente à une courbe paramétrée|tangente]]
     - [[position de la tangente d'une courbe paramétrée]]

