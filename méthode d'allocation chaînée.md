up:: [[méthodes d'allocation de fichiers]] 
title:: "allocation bloc-par-bloc, avec une structure de liste chaînée"
#informatique/unix 

---

 - Le fichier est enregistré en blocs indépendants
 - chaque bloc contient une référence au bloc suivant

 - [c] ne tire pas parti de la localité (il faut beaucoup se déplacer dans le disque pour lire un fichier)
     - peut être amélioré avec une consolidation (regroupper les blocs d'un même fichier), mais cela consomme des ressources

