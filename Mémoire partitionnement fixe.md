---
alias: [ "Partitionnement fixe de la mémoire" ]
---
up:: [[Partitionnement de la mémoire]]
name:: "Partitionnement fixe de la mémoire"
title:: "Mémoire partitionnée en parties de taille fixe"
#informatique/unix 

---

Mémoire partitionnée en parties de taille fixe

 - chargement du processus dans une partition libre 
 - possibilité de [[swap d'un processus]]

 - [c] **Problèmes :**
 - Taille processus < taille partition
     - programmes complexes ==> overlays (programme chargant des sous-programmes selon les besoins)
 - utilisation inefficace de la mémoire 
     - fragmentation interne (certaines parties ne sont pas remplies)
 - limitation nombre de processus actifs

