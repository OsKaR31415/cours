up::[[architecture des ordinateurs]]
#informatique 
# mémoire

 - espace de [[stockage des données]] 
 - composées de circuits logiques

 - quantifiée en fonction de :
     - son coût
     - son temps de réponse
     - sa taille

 - mémoire de stockage (hors [[registres]])
     - se retrouve partout <== pour accélérer les échanges
     - différence entre certains processeurs
         - malgré des mêmes [[registres]] 

> [!note] différence ROM/RAM
>  - ROM : lecture seule
>  - RAM : écriture



## Types de mémoire
![[mémoire 2022-09-21 10.21.29.excalidraw|600]]

## Sous-notes
> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```