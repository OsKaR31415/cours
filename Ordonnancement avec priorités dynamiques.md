up::[[Ordonnancement d'exécution des processus|ordonnancement]]
title::""
sibling::[[Ordonnancement avec priorités statiques]]
#informatique 

----
Permet de résoudre le problème de _famine_ que pose l'[[Ordonnancement avec priorités statiques]] : on peut éviter que certaines tâches n'accèdent jamais au processeur.

# Principe
 - $n$ files de priorité différentes ($0$ pour haute jusqu'à $n$ pour la plus basse)
 - les processus sont tous mis dans la file $0$
 - A chaque fois qu'ils sont exécutés, les processus sont mis dans la file suivante (moins prioritaire)
     - on est sûr qu'aucun processus n'accappare le CPU

 - [d] on peut toujours avoir des processus bloqués dans la file la moins prioritaire si il y à régulièrement de nouveaux processus
    - Solution :
        - Régulièrement (après un certain nombre de quantas) on diminue de 1 la priorité de tous les processus (on augmente leur priorité)
        - cela permet de faire en sorte qu'aucun [[processus]] ne reste trop longtemps sans être exécuté (puisque alors il finit toujours par remonter dans la file $0$ et donc par être exécuté par le CPU)
