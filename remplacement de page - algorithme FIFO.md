up:: [[algorithme de remplacement de page]] 
title:: "remplacer la plus ancienne page chargée"
#informatique 

---



# Exemple
avec 3 cadres (1, 2, 3)

|pages demandées :| 5   | 0   | 1   | 2   | 0   | 3   | 0   | 4   | 2   | 3   | 0   | 3   | 2   | 1   | 2   |
| ------------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| page 0             |     | 2   |     |     |     |X|3|     |  |X|1|     |     |  |     | 
| page 1             |     |     | 3   |     |     |     | X   |     |     |     |     |     |     |2|     |
| page 2             |     |     |     | 1   |     |     |     |X|2|  |     |     |     |X|3|
| page 3             |     |     |     |     |     | 2   |     |     |X|3|     |     |     |     |X|
| page 4             |     |     |     |     |     |     |     |1|     |     |X|     |     |     |     |
| page 5             | 1   |     |     | X   |     |     |     |     |     |     |     |     |     |     |     |
|                    |     |     |     |     |     |     |     |     |  |     |     |     |     |     |     |
| défaut de page     | D   | D   | D   | D   |     | D   | D   | D   |D|D|D|  |  |D|D|
 - 12 défauts de page 
     - 50% de plus que l'[[remplacement de page - algorithme optimal|algorithme optimal]] 



