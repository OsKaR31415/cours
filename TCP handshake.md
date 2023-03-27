up:: [[protocole TCP IP]]
title::
#informatique 

---

Pour l'initialisation d'une connection TCP A <--> B: ouverture de connexion.
3 trames échangées :
 1. trame `SYN` (synchronisation) A --> B
 2. B répond par un `ACK` (acknowledge) et un `SYN`
 3. A aquitte (`ACK`) la synchronisation

![[TCP handshake 2023-03-06 15.12.21.excalidraw]]