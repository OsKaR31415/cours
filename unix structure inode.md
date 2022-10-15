---
alias: "inode"
---
up::[[unix]]
title::![[unix structure inode 2022-09-21 16.01.38.excalidraw|400]]
#informatique/unix #no-review 

----
Tous les [[unix fichier|fichiers]] sont gérés par le [[système d'exploitation|SE]] au moyen des _inodes_.

 - numéro unique pour chaque fichier
 - structure qui contient :
     - plusieurs noms de fichiers peuvent être associés au même inode
     - Un inode est ssocié 0 exactement un seul fichier 
     - Un fichier est contrôlé par exactement un seul inode

# Attributs de l'inode
l'inode contient 16 bits

![[unix structure inode 2022-09-21 16.01.38.excalidraw|100%]]

 - 12-14 : File type
     - regular, directory, character or block special, FIFO pipe
 - 9-11 : Execution flags
 - 8-6 : owner
     - 8 : owner read permission
     - 7 : owner write permission
     - 6 : owner execute permission
 - 5-3 : group
     - 5 : group read permission
     - 4 : group write permission
     - 3 : owner execute permission
 - 2-0 : other
     - 2 : other read permission
     - 1 : other write permission
     - 0 : other execute permission

 - link count : number of directory references to this inode

 - [ ] #todo compléter le contenu de l'inode
