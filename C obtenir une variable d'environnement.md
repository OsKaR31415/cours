---
alias: [ "C primitive getenv", "getenv" ]
---
up::[[primitives C]], [[C variable d'environnement]]
title:: "`getenv` pour obtenir la valeur d'une [[variables d'environnement|variable d'environnement]]"
#informatique/unix 

---

# Avec la fonction `getenv`

 - fonction `getenv` de la librairie standard
 - permet d'obtenir directement la valeur de la variable donnée en argument
 - retourne `NULL` si la variable n'est pas définie

signature de la fonction :
```c
char * getenv(const char *nom_variable)
```


## Exemple
```C
#include<stdio.h>
#include<stdlib.h>
void main (int argc, char *argv[], char **arge) {

    char *VAR;
    if ( (VAR = getenv("PATH")) != NULL )
        fprintf(stdout, "Valeur PATH = %s", VAR);
    else
        fprintf(stderr, "VARIABLE PATH NON DEFINIE !");
}
```


# Avec l'argument `arge` dans `main`

On utilise le tableau `arge`, qui est donné en argument par défaut est un tableau :
 - chaque élément est un pointeur
     - vers une chaîne de caractère de la forme :
         - `nom_de_la_variable=valeur_de_la_variable`
         - pour chaque 


## Exemple
```C
#include<stdio.h>

int main (int argc, char *argv[], char **arge) {
    int i;
    for ( i=0; arge[i] != NULL; i++) {
        puts(arge[i]);
    }
}
```

# Avec la variable `environ`

 - même tableau que `arge`
 - peut être défini comme une variable globale
     - ici, on le re-définit localement, pour ne pas modifier la variable globalement

## Exemple
```C
#include<stdio.h>

extern char **environ;

int main (int argc, char *argv[], char **arge) {

    extern char **environ;
    char **env;
    env = environ; /* préserve environ */
    
    while ( *env != NULL )
        puts( *env++);
}
```