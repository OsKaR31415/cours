---
alias: [ "RR", "Round Robin" ]
---
up::[[Ordonnancement d'exécution des processus|ordonnancement]]
title:: "[[Ordonnancement FCFS|FCFS]] avec préemption"
#informatique 

----

 - concu pour les systèmes à temps partagé
 - allouter le processeur à tour de rôle aux processus pour une durée prédéfinie = **quantum**
 - Similaire à [[Ordonnancement FCFS|FCFS]] + préemption 
 - Implémentation --> une seule file d'attente (processus prêts) FIFO
     - création processus --> insertion en queue
     - élection --> choisir le processus en têt de file 
     - Fin quantum --> réinsertion en queue de file

 - [!] Choix du quantum primordial 
     - trop petit ==> bcp de commutations ==> perte de temps
     - trop grand ==> + d'attente ==> temps de réponse plus grand

