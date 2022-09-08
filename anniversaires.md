up::
title::"personnes par date d'anniversaire"
#PKM 
# anniversaires

> [!query] Personnes triées par date d'anniversaire
> ```dataview
> TABLE anniv, title
> FROM #personne 
> WHERE anniv
> SORT anniv
> ```
