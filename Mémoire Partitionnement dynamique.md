up:: [[Partitionnement de la mémoire]]
title::
#informatique/unix 

---

 - taille variable des partitions
     - allouer la quantité de mémoire requise exactement
     - petits processus --> petites partitions 
         - [p] moins de fragmentation interne 

  - [c] **Problèmes :**
      - Complique l'allocation / libération
      - Fragmentation de la mémoire non utilisée (fragmentation externe)
          - nécessite un **compactage**
              - regroupper les espaces vides
              - ==> consommation de temps et perte de temps CPU

# Algorithmes de placement 

## Best fit
 - choisir partition de la taille la plus proche de la taille demandée (minimiser la mémoire perdue)
 - [c] compactage fréquent

## First fit
 - Choisir la 1ère partition libre (pouvant contenir le processus) 
 - [p] rapide 

## Next fit
 - Comme best fit, mais à partir de l'emplacement du dernier placement 
 - [i] place le plus souvent vers la fin de la mémoire 
 - grandes partitions sont scindées en partitions plus petites 
     - [c] compactage nécessaire pour obtenir une grande partition vide à la fin
 