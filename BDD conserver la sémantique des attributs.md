up:: [[conception des bases de données]]
title:: "shéma facile à expliquer", "ne pas mélanger plusieurs objets dans une même relation", "ne pas combiner plusieurs valeurs dans un seul attribut"
#informatique 

---

 - concevoir un shéma de relation de façon qu'il soit façile d'expliquer sa signification
 - ne pas combiner des attributs de plusieurs objets dans une même relation
 - ne pas combiner plusieurs valeurs dans un seul attribut

## Comment faire

 - décomposer en plusieurs relations / attributs
 - on doit pouvoir expliquer façilement ce que contient chaque relation / attribut
     - cela permet de voir quand un.e relation/attribut à plusieurs significations

> [!example] Exemple 
> (BDD coupes du monde de foot)
> VIDEOS(<u>videoId</u>, acqDate, title) 
> MOVIES(<u>title</u>, genre, length, rating)
> A_TOP(<u>cup</u>, winner runnerUp, thirdPlace, fourthPlace, goalScore, gloalScorerName, goalScorerTeam)
> A_CUPS(<u>cup, host</u>)
