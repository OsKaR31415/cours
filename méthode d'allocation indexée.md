up:: [[méthodes d'allocation de fichiers]] 
title:: "un bloc index des portions de fichier"
#informatique/unix 

---

 - la [[table d'allocation de fichiers (FAT)|table d'allocation]] contient, pour chaque fichier, un *bloc index*
     - le bloc index possède une entrée pour chaque portion allouée au fichier

 - l'allocation peut être faîte sur :
     - des portions de taille variable
         - [p] améliore la localité
         - [p] réduit la taille du bloc index
             - on ajoute la taille de la portion pour chaque index, cela évite d'avoir plusieurs lignes dans la table
     - des blocs seuls
         - [p] évite la fragmentation


