up:: [[unix tubes]]
title:: 
#informatique/unix 

---

 - compteur de liens nul (aucune référence à ce noeud)
     - on ne peut pas l'ouvrir (avec [[C primitive open|open()]] par exemple)
 - supprimé lorsque aucun processus ne l'utilise 
     - perte irréversible
 - la conaissance de l'existence d'un tube se traduit par la possesion d'au moins un de ses descripteure, suite à :
 - on peut connaître l'existence d'un tube (avoir son [[file descriptor|descripteur]]) si :
     - on a créé ce tube 
     - on a hérité de ses descripteurs
 - tube ordinaire : communication uniquement entre processus **ayant un ancêtre commun**
