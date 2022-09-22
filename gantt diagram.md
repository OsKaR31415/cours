up::[[outils de gestion de projet]]
title::"planification, suivi, contrôle"
link::[présentation de gantt (yt)](https://www.youtube.com/watch?v=TAndnWJd1Lo)
#PM 
# gantt diagram


Gantt permet : 
 - **planification** des tâches (durée, précédence, équipes)
 - **suivi** de l'avancement
 - **contrôle** par comparaison planification vs réalisation : calculs d'écarts, modifications en conséquence

## Sous-notes
> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

