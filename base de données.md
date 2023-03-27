---
alias: "BDD"
---
#informatique

---

# Définition intuitive
 - Une **grande quantité de [[donnée|données]]**
 - Centralisées
 - pour les besoins de plusieurs applications
 - Interrogeables et modifiables
 - groupe d'utilisateurs travaillant sur les mêmes données
# Voir :
 - [[niveaux d'abstraction BD]]
 - [[Construction d'une BD]]
     - [[conception des bases de données]]

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```
