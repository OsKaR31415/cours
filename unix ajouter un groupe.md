up::[[unix]]
title::"comment ajouter un nouveau groupe"
#informatique/unix #no-review 
# unix ajouter un groupe

Ajouter un nouveau groupe revient à ajouter une ligne au fichier [[unix fichier etc-group|/etc/group]]
```bash
$> vi /etc/group  # ajouter la ligne "licence2: x:600:pierre"
$> echo "licence2:!::" >> /etc/gshadow
```
