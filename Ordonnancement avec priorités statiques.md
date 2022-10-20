up::[[Ordonnancement d'exécution des processus|ordonnancement]]
title::"tâches divisées en files par priorité", "la tâche exécutée est celle de la file non vide la plus prioritaire"
#informatique #no-review 

----

 - différentes files selon la priorité (0 la plus prioritaire, jusqu'à une file $n$ la moins prioritaire)
 - Temps maximum d'éxecution avec des quantas (comme dans l'[[Ordonnancement par Tourniquet]])
 - [!] risque de _famine_ : quand une tâche n'est jamais servie par le processeur
     - les [[processus]] de priorité basse peuvent ne jamais avoir de temps processeur si il y à beaucoup de tâches de priorités hautes.