up::[[sous-système de gestion des fichiers]]
title::"opérations fondamentales"
#informatique 

---


 - **Création d'un fichier** : nécessite deux étapes
     - allocation de l'espace destiné au nouveau fichier
     - création d'une nouvelle entrée dans le rpépertoire
 - **Ecriture dans un fichier** : nécessite :
     - nom du fichier
     - informations à y enregistrer
 - **Lecture dans un fichier** : nécessite :
     - nom du fichier 
     - endroit (mémoire) où le prochain bloc du fichier doit être placé
     - Le système conserve un pointeur de lecture de l'emplacement dans le fichire de la prochaine lecture
 - **Repositionnement dans un fichier**
     - initialiser le pointeur de lecture/écriture a une valeur donnée
 - **Suppression d'un fichier**
     - recherche du fichier dans le répertoire
     - suppression de son entrée
         - rend son emplacement utilisable poru un autre fichier
 - **Troncature d'un fichier**
     - effacer les contenus
     - garer les attributs (sauf la taille)