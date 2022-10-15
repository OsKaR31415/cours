---
alias: [ "symlink", "lien physique", "lien symbolique", "liens physiques", "liens symboliques" ]
---
up::[[unix]]
sibling::[[unix liens symboliques]], [[unix lien physiques]]
#informatique/unix 

----

> [!definition] Lien symbolique
> Sorte d'alias, pour avoir une version "_virtuelle_" d'un fichier (ou répertoire) à un autre endroit que sa place réelle
> Créer un **nouveau fichier**, avec son propre [[unix structure inode|inode]].
> **Pour les créer :**
> 
> ```bash
> $> ln -s target_file symlink_file
> ```

> [!definition] Lien physique
> Moyen de référencer un fichier dans plusieurs répertoires.
> Il met un fichier dans la table de plusieurs répertoires.
> 
> **Pour les créer :**
> ```bash
> $> ln target_file new_link_file
> ```
