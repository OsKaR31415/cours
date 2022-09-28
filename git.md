up::[[versioning]]
title::"Système de [[versioning]]"
#PM #informatique 
# git

 - gère des _instantannés_
     - stocke _a priori_ tous les fichiers 
     - taggé : permet de ne pas ré-écrire les fichiers non-modifiés
 - intégrité
     - [[checksum]] pour chaque fichier 
     - donne un _identifiant_ pour git

## Configuration

```bash
$> git config --global user.name "Thierry Brouard"  # nom d'utilisateur local
$> git config --global user.email brouard@univ-tours.fr  # email de l'utilisateur
$> git config --global core.editor vim  # éditeur utilisé
```

