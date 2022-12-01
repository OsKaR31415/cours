up:: [[méthodes de gestion de l'espace libre pour les fichiers]] 
title:: "on chaîne les portions libres"
#informatique/unix 

---

 - les portions libres sont chaînées entre elles, en utilisant un pointeur et une taille mis dans chaque portion libre

 - [p] surcharge en espace négligeable (la [[table d'allocation de fichiers (FAT)|table d'allocation]] du disque n'est pas nécessaire, le pointeur vers la première portion libre suffit)
 - [c] demande beaucoup d'accès disque pour parcourir les blocs libres