---
alias: "algèbre"
---
#MOC #maths/algèbre 
# MOC algèbre

> [!smallquery]- Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

## Structures algébriques

> [!smallquery]- Sous-notes de [[structure algébrique]]
> ```dataview
> TABLE title, description, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), [[structure algébrique]])
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

## Algèbre linéaire

### Combinaison linéaire

> [!query]- Sous-notes de [[combinaison linéaire]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), [[combinaison linéaire]])
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

### Applications linéaires
> [!smallquery]- Sous-notes de [[application linéaire]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), [[application linéaire]])
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

 - [[application linéaire]]
     - [[rang d'une application linéaire]]
     - [[image d'une application linéaire]]
     - [[Noyau d'une application linéaire]]
     - [[matrice associée à une application linéaire]]
 - [[système linéaire]]
     - [[équation linéaire à 2 variables entières]]
 - [[combinaison linéaire]]



### Matrices

> [!smallquery] Sous-notes de [[matrice]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), [[matrice]])
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

### Espaces vectoriels

> [!smallquery]- Sous-notes de [[espace vectoriel]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), [[espace vectoriel]])
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```


#### Famille de vecteurs

> [!smallquery]- Sous-notes de [[famille de vecteurs]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), [[famille de vecteurs]] )
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```
