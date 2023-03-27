up:: [[C primitives système]]
title:: "exécuter un fichier binaire"
#informatique/unix 

---

Types de exec :
 - `execv` : prends un tableau en entrée
 - `execl` : prends une liste en entrée
 - ajouter un `p` (`execvp` et `execlp`) : cherche les exécutables binaires dans la [[variable d'environnement PATH]]
# Exemples


## execv

```C
#include<stdlib.h>
#include<unistd.h>

int main(){
    char *executable = "/bin/ls";
    // tableau de pointeurs vers des char, terminé par NULL
    // il faut mettre le nom de l'exécutable
    char *args[] = {executable, "-l",NULL};
    execv(executable, args);
}
```

### execvp

```C
#include<stdlib.h>
#include<unistd.h>

int main(){
    char *executable = "ls";
    // tableau de pointeurs vers des char, terminé par NULL
    // il faut mettre le nom de l'exécutable
    char *args[] = {executable, "-l", NULL};
    // avec le p, exec va chercher dans le $PATH
    // on peut donc utiliser "ls" plutôt que "/bin/ls"
    execvp(executable, args);
}
```


## execl

```C
#include<stdlib.h>
#include<unistd.h>

int main(){
    char *executable = "/bin/ls";
    // il faut mettre 2 fois le nom de l'exécutable
    // la seconde fois fait en fait partie des paramètres
    // /!\ il faut bien penser à finir avec NULL
    execl(executable, executable, "-l", NULL);
}
```

 - les arguments sont passés en paramètres de la fonction
 - il faut penser à mettre `NULL` à la fin

