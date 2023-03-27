---
alias: [ "C primitive putenv", "putenv" ]
---
up:: [[C primitives système]], [[C variable d'environnement]]
title:: "`putenv` pour modifier la valeur d'une [[variables d'environnement|variable d'environnement]]"
#informatique/unix 

---

# Avec la fonction `putenv`

```C
#include<stdio.h>  
#include<stdlib.h>  

void main (int argc, char *argv[], char **arge) {  
    putenv("MYVAR=super_valeur_de_la_variable");  
    fprintf(stdout, "Vefir MYVAR = %s\n", getenv("MYVAR"));  
}
```
