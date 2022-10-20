up:: [[Partitionnement de la mémoire]]
title::
#informatique/unix 

---
 - toute la mémoire est considérée comme une seule partition de taille $2^{U}$ 
 - un nouveau processus est ajouté dans une partition 
     - la taille de cette partition est la plus petite puissance de $2$ pouvant contenir le processus 
     - Si le processus est de taille $S$, avec $2^{U-1} < S \leq 2^{U}$, il va dans le renste de la mémoire, sinon la partition est scindée en deux

> [!note]
> Utilisé par Linux pour la gestion de la mémoire, mais pas pour celle des processus en mémoire centrale.

