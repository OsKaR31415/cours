up:: [[algorithme de remplacement de page]] 
title:: "on doit connaître le futur ==> impossible à implémenter"
#informatique 

---

> [!definition] Stratégie
>  - dans un nouveau cadre si il reste de la place
>  - remplace la page qui sera rappellée dans le plus de temps possible (maximiser le temps avant un nouveau [[SE - défaut de page|défaut de page]]) si il ne reste plus de place


# Exemple 
avec 3 cadres (1, 2, 3)

| pages demandées : | 5   | 0   | 1   | 2   | 0   | 3   | 0   | 4   | 2   | 3   | 0   | 3   | 2   | 1   | 2   |
| ----------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| page 0            |     | 2   |     |     |     |     |     | X   |     |     | 2   |     |     | X   |     |
| page 1            |     |     | 3   |     |     | X   |     |     |     |     |     |     |     | 2   |     |
| page 2            |     |     |     | 1   |     |     |     |     |     |     |     |     |     |     |     |
| page 3            |     |     |     |     |     | 3   |     |     |     |     |     |     |     |     |     |
| page 4            |     |     |     |     |     |     |     | 2   |     |     | X   |     |     |     |     |
| page 5            | 1   |     |     | X   |     |     |     |     |     |     |     |     |     |     |     |
|                   |     |     |     |     |     |     |     |     |     |     |     |     |     |     |     |
| défaut de page    | D   | D   | D   | D   |     | D   |     | D   |     |     | D   |     |     | D   |     |
 - 8 défauts de pages


