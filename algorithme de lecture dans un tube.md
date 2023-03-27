up:: [[unix tubes]], [[C tubes]]
title::
#informatique/unix 

---

Cas d'un processus qui essaie de lire `N` octets à la sortie d'un tube
 1. le tube n'est pas vide et contient $n$ onctents
     1. `min(n, N)` octets sont lus 
     2. la primitive renvoie le nombre réel d'octets lus
 2. Le tube est vide
     1. le nombre d'écribains est nul (fin de fichier est atteinte)
         - aucun octet n'est lu 
         - la primitive renvoie 0
     - le nombre d'écrivains n'est pas nul
         - si la lecture est bloquante, le processus est mis en sommeil jusqu'à ce que le tube ne soit plus vide
         - si la lecture n'est pas bloquante, la primitive renvoie -1 et `errno = EAGAIN`



