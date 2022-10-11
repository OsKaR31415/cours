---
alias: "BDD"
---
#informatique #no-review 
# base de données
> [!query]- Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```


## Définition intuitive
 - Une **grande quantité de [[donnée|données]]**
 - Centralisées
 - pour les besoins de plusieurs applications
 - Interrogeables et modifiables
 - groupe d'utilisateurs travaillant sur les mêmes données

## [[niveaux d'abstraction BD]]

## [[Construction d'une BD]]

### Développer un système d'information
 - avec un rgand quantité de données
     - comment les **représenter**
 - plusieurs utilisateurs différents
 - Rapidité
