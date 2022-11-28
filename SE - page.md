---
alias: [ "page" ]
---
up::[[sous-système de gestion de mémoire]]
title::"Cadre dans lequel on met des données / programmes"
#informatique 

---

 - souvent de taille fixe
 - notion conceptuelle : "_partie du code / de données_"
     - correspond à la notion concrète de cadre dans la mémoire 


> [!definition] Défaut de page
> quand un processus demande une page qui n'est pas chargée

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```

