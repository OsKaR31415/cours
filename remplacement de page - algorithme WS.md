---
alias: [ "algorithme Working Set", "Algorithme par gestion de fenêtre" ]
---
up:: algorithme de gestion [[algorithme de remplacement de page]] 
title::
#informatique 

---

 - On ne limite plus le nombre de cadre (il est limité par l'algorithme)
 - on garde toute la file des pages chargées
     - si une file est déjà chargée, on la déplace au début de la file
 - Toutes les $n$ périodes, on coupe la taille de la file après un nombre donné de pages

C'est une sorte de LRU, mais où, au lieu de limiter le nombre de cadres utilisés, on limite la taille de la file.


# Exemple
| pages demandées : |5| 0   | 1   | 2   | 0   | 3   | 0   | 4   | 2   | 3   | 0   | 3   | 2   | 1   | 2   |
| ----------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| file:             |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| page 2            |     |     |     |  |     |     |     |  |  |     |     |     |     |  |  |
| page 3            |     |     |     |     |     |  |     |     |  |  |     |     |     |     |  |
| page 4            |     |     |     |     |     |     |     |  |     |     |  |     |     |     |     |
| page 5            |  |     |     |  |     |     |     |     |     |     |     |     |     |     |     |
|                   |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| défaut de page    |  |  |  |  |     |  |  |  |  |  |  |     |     |  |  |