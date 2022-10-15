---
alias: "useradd"
---
sibling:: [[unix commande userdel]]

up::[[unix commandes]]
title::"commande pour ajouter un nouvel utilisater"
#informatique/unix #no-review 

----

> [!definition] parametres
> ```
>  -m, --create-home
>      Créé le répertoire personnel s'il n'existe pas (à partir du squelette)
>  -M, --no-create-home
>  -g, --gid GROUPE
>      Nom du groupe ou [[unix GID|GID]] du groupe
>  -G, --groups GROUPE1[,GROUPE2,...[,GROUPEN]]]
>      Listes de [[unix groupes]] **supplémentaires** ⚠️sans espace
>      
> ```

```bash
$> useradd -u 550 -g licence2 -c "Bob SLEIGH,Licence 2 Info" -d /home/bob -m -s /bin/bash bob
$> ls -l | /home | grep bob
```


