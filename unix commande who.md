sibling:: [[unix commande w]]
up::[[unix commandes d'identification]]
usage::"who [-abdHlmpqrsTtu] [file]", "who am i"
title::"affiche la liste des utilisateurs connectés"
#informatique/unix

----
 - affiche la liste des utilisateurs connectés
```bash
$ who
admin    tty0    jun 25 08:18
pierre   pts/2   jun 25 09:05    (papin.univ-tours.fr)
  ^        ^           ^                    ^
  |        |           |                    |
UNAME   ligne de   date de connexion   adresse du poste
        communication                  de travail
```

 - peut affichier uniquement la ligne pour l'utilisateur
```bash
$ who am i
pierre   pts/2   jun 25 09:05    (papin.univ-tours.fr)
$ whoami
pierre   pts/2   jun 25 09:05    (papin.univ-tours.fr)
```

