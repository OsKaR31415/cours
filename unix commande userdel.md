up::[[unix commandes d'identification]]
sibling::[[unix commande useradd]]
#informatique/linux #no-review 
# unix commande userdel
 - supprimer un utilisateur
 - supprime son répertoire home avec
     - [!] si on ne le supprime pas, l'UID peut être attribué à un autre nouvel utilisateur, donc les fichiers seront accessibles à un autre utilisateur
 - peut également supprimer d'autres fichiers utilisateur (dossier de mails...)

```bash
$> userdel -r bob
```

 - `-r` pour supprimer le répertoire et le fichier de mails