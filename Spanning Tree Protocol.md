---
alias: "STP"
---
up::[[routage]]
title::"élire un meilleur chemin quand le réseau possède des cycles", "protocole de couche 2"
#informatique

----

[[protocole TCP IP|couche 2 du protocole TCP/IP]]

 - bloque certains ports 
 - permet de choisir une route optimale, et de changer en cas de défaillance
 - Cherche L'[[arbre couvrant]] minimum

# Fonctionnement

 - STP envoie régulièrement des annonces (BPDU) pour élire un commutateur racine (root)
     - BPDU = Bridge Protocol Data Unit
 - Les BPDUs sont envoyées par chaque switch au début **puis seulement par le commutateur racine**
 - En fonction de cette information, les [[switch réseau|switchs]] désactivent certains ports qui les relient par des chemins multiples, et une topologie à **chemin unique** émerge
     - (prends quelques secondes à près de 50 secondes selon les versions)


 1. élection du [[switch réseau|switch]] racine et état des ports
     - discussion entre [[switch réseau|switchs]] avec des messages BPDU
         - tous les [[switch réseau|switchs]] "votent" -> élection du commutateur root
     - **port racine (Root Port)**
         - le plus proche du commutateur racine
         - un seul port racine par commutateur
         - en cas d'égalité, c'est le port de plus petit numéro qui est choisi
     - **Port désigné (Designed port ou DP)**
         - connecté à un segment "X" du réseau
         - autorisé à propager le trafic vers le segment "X"
 2. Mise en service effective des ports
     1. port racine et ports désignés -> "forwarding"
         - propagent le trafic
     - autres ports -> "blocked"
         - ne propagent pas le trafic, seulement le BPDU



## Après assignation
 - un et un seul **root port** par commutateur
     - [!] sauf pour root
 - 

