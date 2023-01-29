up:: [[C variable d'environnement]]
title::
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
