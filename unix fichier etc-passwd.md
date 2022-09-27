---
alias: "/etc/passwd"
---
sibling:: [[unix fichier etc-shadow]]

up::[[unix]]
title::"le fichier `/etc/passwd`, contient les mdp et infos des utilisateurs"
sibling::[[unix fichier etc-shadow|/etc/shadow]]
#informatique/unix #no-review 
# unix fichier etc-passwd
Fichier de configuration [[unix]]

 - une ligne par utilisateur enregistré
 - droits : `-rw -r- r-- 1 root root`
     - seul [[unix user root|root]] peut écrire dedans

> [!note] format des lignes
> ![[fichiers etc-passwd 2022-09-07 15.16.34.excalidraw|100%]]

> [!important]
> ajourd'hui, pour éviter que le mot de passe soit décrypté, les mots de passe sont déplacés dans le fichier [[unix fichier etc-shadow|etc/shadow]]


