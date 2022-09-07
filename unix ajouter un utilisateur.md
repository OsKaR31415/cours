up::[[unix]]
title::"comment ajouter un nouvel utilisateur"
#informatique/linux 
# unix ajouter un utilisateur

> [!important] commande pour ajouter un utilisateur
> ![[unix commande useradd]]

ajouter un nouvel utilisateur revient à procéder manuellement aux étapes :
 - modifier le fichier [[unix fichier etc-passwd|/etc/passwd]] `vi /etc/passwd`, ajouter `bob::11654:-1:99999:-1:::`
 - créer un mot de passe initial `passwd bob` 
 - créer le répertoire personnel de l'utilisateur `mkdir /home/bob`
 - donner les bonnes permissions pour ce répertoire `chown bob.licence2 /home/bob`
 - copier les fichiers d'environnement `cp /etc/skel/.bas* /home/bab` puis `chown -R bob.licence2 /home/bob`

 - [!] il faut être [[unix user root|root]] pour faire ces opérations

