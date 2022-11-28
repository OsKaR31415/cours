up:: [[algorithme de remplacement de page]] 
title:: "First In Not Used First Out"
#informatique 

---

 - utilise un bit R pour charger ou non
     - bit R mis à 1 quand la page est chargée ou utilisée
     
 - on trie les pages selon leur date de chargement
     - en tête la page la plus récemment chargée
     - lors d'un défaut de page :
         - parcourir les pages en commencant par la plus anciennement chargée
             - si le bit R est à 1, elle est remise en tête de liste, et son bit R passe à 0
             - sinon décharger la page et la remplacer par la nouvelle page
  - --> la page déchargée est la plus ancienne dont le bit R vaut 0


# Exemple
avec 3 cadres (1, 2, 3)

|pages demandées :|5|0| 1   | 2   | 0   | 3   | 0   | 4   | 2   | 3   | 0   | 3   | 2   | 1   | 2   |
| ------------------ | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
|Liste (avec bit R)|5,1|0,1 <br> 5,1|1,1 <br> 0,1 <br> 5,1|2,1 <br>1,0 <br>0,0|2,1 <br>1,0 <br>0,1|3,1 <br> 0,0 <br>2,1|3,1 <br>0,1 <br>2,1|4,1 <br> 3,0 <br>0,0|2,1 <br>4,1 <br>3,0|2,1 <br>4,1 <br>3,1|0,1<br> 2,0 <br>4,0|3,1 <br>0,1 <br>2,0|3,1 <br>0,1 <br>2,1|1,1 <br>3,0 <br>0,0|2,1 <br>1,1 <br>3,0|
|page 0|     |2|  |  |  |  |  |  |X|     |3|  |  |  |X|
| page 1             |     |     |3|     |     |X|  |  |     |     |     |     |     |2|     |
| page 2             |     |     |     |1|     |     |     |X|2|  |     |     |  |X|3|
| page 3             |     |     |     |     |     |3|     |     |  |  |X|1|     |     |  |
| page 4             |     |     |     |     |     |     |     |1|     |     |  |X|     |     |     |
| page 5             |1|     |     |X|     |     |     |     |     |     |     |     |     |     |     |
|                    |     |     |     |     |     |     |     |     |  |     |     |     |     |     |     |
|défaut de page|D| D   | D   | D   |     | D   |  | D   |D|  |D|D|  |D|D| 
 - 11 défauts de page 
     - 38% de plus que l'[[remplacement de page - algorithme optimal|algorithme optimal]] 
     - 1 de moins que l'[[remplacement de page - algorithme FIFO|algorithme FIFO]]


