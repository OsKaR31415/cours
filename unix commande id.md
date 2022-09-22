up::[[unix commandes d'identification]]
usage::"id ( | -A | -F | -G | -P | -g | -p | -u ) [user]"
title::"affiche les informations sur un utilisateur"
#informatique/unix #no-review 
# unix commande id

> [!definition] Usage
> ```
> id [user]
> id -A
> id -F [user]
> id -G [-n] [user]
> id -P [user]
> id -g [-nr] [user]
> id -p [user]
> id -u [-nr] [user]
> ```

## Exemples

```bash
$ id
uid=500(pierre) gid=550(enseignants) groups=551(calcul), 600(licence)
```

```bash
$ id admin
uid=0(laurand) gid=0(administrateur) groups=110(scolarite)
```

