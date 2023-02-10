up:: [[primitives C]]
title:: "Informations sur un fichier (inode, type, propriétaire, dates...)"
#informatique/unix 

---

```C
struct stat{  
    dev_t st_dev; // identifiant du périphérique  
    ino_t st_ino; // numéro inode  
    mode_t st_mode; // type de fichier et protection (droits)  
    nlink_t st_nlink; // nombre liens matériels  
    uid_t st_uid; // UID propriétaire  
    gid_t st_gid; // GID propriétaire  
    dev_t st_rdev; // type périphérique (fichiers spéciaux)  
    off_t st_size; // taille totale en octets  
    blksize_t st_blksize; // taille de bloc pour E/S  
    blkcnt_t st_blocks; // nombre de blocs actuellement alloués  
    time_t st_atime; // heure dernier accès  
    time_t st_mtime; // heure dernière modification  
    time_t st_ctime; // heure dernier changement état  
}  
```
 - `st_mode` : [[unix types de fichiers]]

 - [i]  Aucun droit d'accès n’est nécessaire sur le fichier pour récupérer ses informations (uniquement droit de parcours de tous les répertoires dans le chemin menant au fichier).