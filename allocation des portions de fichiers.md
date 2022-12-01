up:: [[allocation de fichiers]] 
title:: "comment un fichier est réparti en [[portion d'un disque|portions]]"
#informatique/unix 

---


## Portions de taille fixe
 - Taille des [[portion d'un disque|portions]]
     - portion petites
         - [c] demande une plus grande [[table d'allocation de fichiers (FAT)|FAT]]
     - portion plus grandes
         - [c] 
## Portions de taille variable

### Allocation par portions variables
 - [p] meilleures performances
 - [p] taille variable ==> évite la perte
 - [p] [[table d'allocation de fichiers (FAT)|table d'allocation]] petite
 - [c] réutilisation de l'espace difficile
 
### Allocations par blocs
 - [p] plus grande flexibilité
 - [c] peut nécessiter des grandes [[table d'allocation de fichiers (FAT)|tables d'allocations]] ou des structures complexes