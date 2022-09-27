up::[[unix]]
#informatique/unix #no-review 
# unix droits

| Droits        | Fichier | Répertoire |
| ------------- | ------- | ---------- |
|`r` lecture|Voir le contenu du fichier|Voir le contenu du répertoire|
|`w` écriture|modifier le contenu du fichier|Ajouter/supprimer des fichiers/répertoires| 
|`x` exécution|exécuter le fichier|se déplacer dans un répertoire ou le traverser|

## Test des droits d'accès 
Chaque fois qu'un [[processus]] ouvre/crée/supprime un fichier, le noyau procède aux tests suivants :
 1. l'`EUID` est 0 ([[unix user root|super user]]) => accès autorisé
 2. l'`EUID` est égal à l'`UID` du fichier :
     1. le mode d'accès est compatible aux droits attribués au propriétaire (`user`) => accès autorisé
     2. sinon => accès refusé
 3. `EGID` ou l'un des Id de groupe supplémentaires du processus est égal au `GID` du fichier 
     1. accès si l'accès demandé est compatile au mode d'accès pour les membre du groupe (`group`)
 4. le mode d'accès demandé est compatible aux droits attribués a tous les utilisateurs (`other`)


