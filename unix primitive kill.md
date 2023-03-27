up:: [[C primitives système]]
title:: "tuer un processus (envoyer un signal)"
#informatique 

---

 - dans la librairie `signal.h`
 - prends 2 arguments
     - le [[PID]] du [[processus]]
     - le [[unix signaux|signal]] à envoyer au processus

> [!info] Tester si un processus existe
> On peut utiliser `kill(<pid>, 0)` (une valeur `0` pour le signal) pour **tester si le processus de [[PID]] `<pid>` existe**

```C
#include<stdio.h> // pour printf
#include<stdlib.h> // pour atoi
#include<signal.h> // pour kill

int main(int argc, char **argv) {
    printf("%d\n", argc);
    if (argc < 2) {
        printf("Needs at least one argument");
        return -1;
    } else if (argc == 2) {
        int to_kill = atoi(argv[1]);
        printf("killing process: pid=%d\n", to_kill);
        kill(to_kill, 15);
        printf("[done]\n");
    } else if (argc == 3) {
        int to_kill = atoi(argv[1]);
        int signal = atoi(argv[2]);
        printf("killing process: pid=%d, sending signal %d\n", to_kill, signal);
        kill(to_kill, signal);
        printf("[done]\n");
    }

}
```