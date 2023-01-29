up:: [[sous-système de gestion des fichiers]]
title:: "éviter la lecture et écriture simultanée"
#informatique/unix 

---

On pose un verrou sur les blocs d'un fichier pour éviter qu'un fichier soit lu et modifié en même temps.


# Propriétés

 - La **portée** d'un verrou est l'ensemble des positions d'un fichier sur lesquelles le verrou s'affiche


 - le **type** de verrou
     - verrous **partagés**
         - peuvent se superposer
         - utiles pour la **lecture**
     - verrous **exclusifs**
         - ne peuvent **jamais se superposer**
             - même avec un verrou partagé
         - utiles pour l'**écriture**


 - le **mode opératoire**
     - verrous **consultatifs** (advisory)
         - seule la _pose d'un nouveau verrou_ peut être interdite
             - en suivant les règles selon le *type* de verrou
         - n'a donc effet que sur les processus qui posent des verrous sur les zones qu'ils veulent modifier
     - verrous **impératifs**

