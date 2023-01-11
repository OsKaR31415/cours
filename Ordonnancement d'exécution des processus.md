---
alias: [ "ordonnancement" ]
---
up::[[système d'exploitation]]
#informatique

----

 - Base des [[système d'exploitation|SE]] multiprogrammés --> optimiser l'utilisation de l'[[unité centrale]]

> [!query] sous-notes directes de `=this.file.link`
> ```dataview
> LIST title
> FROM ""
> WHERE econtains(up, this.file.link)
> ```


> [!info] Types d'ordonnancement
> ![[Ordonnancement d'exécution des processus 2022-10-05 15.15.34.excalidraw]]
>  - Ordonnancement à long terme
>      - Décision d'ajout de processus pour exécution
>      - Contrôle le degré de multiprogrammation



> [!definition] Ordonnacement préemptif
>  - Traduit le fait que le processeur peut être réquisitionné
> 
>  - Ordonnancement préemptif 
>      - interruption de l'exécution du processus en cours
>      - possibilit2 de réquisition du processeur
>  - Ordonnancement non préemptif
>      - changement du contexte à à fin de l'exécution du processus en cours
>      - changement de contexte vonlontaire du processus en cours


> [!info] Critères d'ordonnancement 
>   - utilisation de l'[[unité centrale]] --> occuper au mieux [40% <-> 90%]
>   - Débit/Rendement (_throughput_) --> nombre de processus terminés par unité de temps
>   - Temps de rotation / service (_turnaround time_) --> intervalle de temps entre la soumission et achèvement d'un processus 
>   - Temps d'attente (_waiting time_) --> somme des périodes passées en attente dans la file des processus prêts
>   - Temps de réponse (_response time_) --> intervalle de temps entre la soumission d'une requête et la production de lapremière réponse
