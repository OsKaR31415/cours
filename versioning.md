up::[[outils de gestion de projet]]
title::"contrôle des versions d'un ensemble de documents"
down::[[git]]
#PM
# versioning

 - maintenir un **état cohérent** un ensemble de documents

## Avantages
 - assurer la cohérence d'un ensemble de documents (codes sources, mais pas que)
 - retrouver, une version précédente d'un document
 - comparer différentes versions d'un document
 - partager les versions au sein d'une communauté
 - participer à l'élaboration

## Solutions
 - Duplication complète
     - copier la version précédente dans un nouveau répertoire 
     - gaspillage d'espace disque
     - pas de protection contre l'effacement accidentel
     - difficile de visualiser les évolution
 - Base de code
     - [[base de données]] locale
     - conservation des modifications (mémoriser les différences entre fichiers)
     - RCS : Révision Control System
 - Gestion centralisée
     - permet à plusieurs personnes de partager un ensemble de fichiers
     - dépôt central contenant tous les fichiers
     - chaque personne peut se connecter poru modifier les contenus des dépôts
     - Systèmes très courants
     - CVCS : Centralised Version Control System
     - [u] contrôle fin des permissions d'accès 
     - [d] fragilité due à la centralisation : serveur en panne $\implies$ plus d'accès
 - Gestion distribuée
     - chaque personne extrait la copie du dépôt, pas seulement les fichiers modifiés
     - En cas de crash du serveur, on peut continuer à travailler, et récupérer les données
     - DVCS : Distributed Version Control System
         - [[git]]