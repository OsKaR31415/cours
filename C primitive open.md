---
alias: [ "open()", "open" ]
---
up:: [[C primitives système]]
title:: "ouvrir (éventuellement créer) un fichier"
#informatique 

---

```C
#include <sys/types.h>
#include <sys/stat.h>
#include <fcntl.h>

int open(const char *pathname, int flags);
int open(const char *pathname, int flags, mode_t mode);

int creat(const char *pathname, mode_t mode);
```

Soit `pathname` le nom du fichier à ouvrir, `open` renvoie le [[file descriptor]] qui correspond au fichier (un `int`).

 - `open` créée une nouvelle description
 
 - Le paramètre `flags` doit inclure l'un des _mode d'accès_ suivants :
     - `O_RDONLY` : ouverture en lecture seule
     - `O_WRONLY` : ouverture en écriture seule
     - `O_RDWR` : ouverture en lecture-écriture
     