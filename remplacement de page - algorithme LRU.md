up:: [[algorithme de remplacement de page]] 
title:: "Least Recently Used"
#informatique 

---

# Exemple
avec 3 cadres (1, 2,  3)

| pages demandées : |5| 0   | 1   | 2   | 0   | 3   | 0   | 4   | 2   | 3   | 0   | 3   | 2   | 1   | 2   |
| ----------------- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| file:             |5|0 <br>5|1 <br>0 <br>5|2 <br>1 <br>0|0 <br>2 <br>1|3 <br>0 <br>2|0 <br>3 <br>2|4 <br>0 <br>3|2 <br>4 <br>0|3 <br>2 <br>4|0 <br>3 <br>2|3 <br>0 <br>2|2 <br>3 <br>0|1 <br>2 <br>3|2 <br>1 <br>3|
|                   |  |     |     |     |     |     |     |     |     |     |     |     |     |  |     |
| défaut de page    |D|D|D|D|  |D|  |D|D|D|D|  |  |D|  | 
 - 10 défauts de page 
     - 25% de plus que l'[[remplacement de page - algorithme optimal|algorithme optimal]] 


