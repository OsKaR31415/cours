up::[[unix commandes d'identification]]
title::"comamdne pour modifier des mots de passe"
#informatique/unix

----
Sans argument : change le mot de passe de l'utilisateur actuel
```bash
$ passwd
changing password for "pierre"
pierre's Old pasword: xxxxx
pierre's New password: xxxxxxx
Enter the new password again : xxxxxxx
```

> [!note]
> modifie le fichier [[unix fichier etc-shadow|/etc/shadow]]

> [!definition] Usage
> ```
>  passwd [-i infosystem] -l location]] [-u authname] [name]
>   infosystem:
>     file
>     NIS
>     OpenDirectory
>     PAM
>   location (for infosystem):
>     file           location is path to file (default is /etc/master.passwd)
>     NIS            location is NIS domain name
>     OpenDirectory  location is directory node name
>     PAM            location is not used
> ```
