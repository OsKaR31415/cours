#fac/TD 
# architecture des ordinateurs TD1 2022-09-23

## Question 1

> Pourquoi a-t-on un circuit d’horloge dans une machine informatique ?

Pour faire en sorte que tous les composants travaillent au même rythme et puissent se mettre d'accord pour échanger des données à la même cadence et au bon moment.

> A quoi sert une carte mère ? Donnez les deux caractéristiques principales.

Une carte mère sert à relier les composant entre eux, à les interfacer avec l'extérieur de l'ordinateur, et à les alimenter 😋 🍔 .
La carte mère permet au composants de communiquer entre eux via des [[bus de données|bus]], et intègre des circuits qui traduisent les données entre les composant et les ports d'entrée/sortie de l'ordinateur.

> Qu'est ce que le BIOS d'une carte mère ?

Le BIOS d'une carte mère est le programme qui gère le démarrage du [[système d'exploitation]].
Il cherche le disque de démarrage, trouve le bootloader et l'exécute.

## Question 2

> Expliquer cette suite de shémas
> ![](app://local/Users/oscarplaisant/devoirs/cours/attachments/markmind/1663933338694.png?1663933343618)


![](app://local/Users/oscarplaisant/devoirs/cours/attachments/markmind/1663933400663.png?1663933413011)
 - présente la [[théorie de l'information]]
 - modélisation du passage d'un signal d'un émetteur à un récepteur
     - transcodage possible
     - bruit introduit
 - modélisation du fait que toute donnée passant d'un émetteur à un récepteur peut être modifiée de façon intésirable : c'est le bruit.

![](app://local/Users/oscarplaisant/devoirs/cours/attachments/markmind/1663933837982.png?1663933863625)
Explique comment le codage sur 2 bits (donc avec 4 états) modifie un signal analogique (réduit sa qualité) en le transformant en signal numérique

![](app://local/Users/oscarplaisant/devoirs/cours/attachments/markmind/1663934015682.png?1663934035214)
dans le codage sur 3 bits, on à plus d'états possibles, donc l'approximation est meilleure (8 états)
le bruit est toujours présent mais plus faîble


## Question 3
![](app://local/Users/oscarplaisant/devoirs/cours/attachments/markmind/1663934986024.png?1663935003266)
 - Modèle de fonctionnement des ordinateur : [[architecture de Von Neumann]] 

## Question 4

![](app://local/Users/oscarplaisant/devoirs/cours/attachments/markmind/1663935053289.png?1663935065358)
 - bus de données : transmet les données ente les composant
 - bus d'adresses : donne l'adresse de la donnée recherchée
 - bus de contrôle/requête : communique l'action à faire (lecture/écriture, interruptions)


## Question 5

![](app://local/Users/oscarplaisant/devoirs/cours/attachments/markmind/1663935204098.png?1663935217647)
 - flèches "Données" : représentent des envois de données
 - flèches "commande" : représentent des envois d'ordre, des demandes d'actions à faire


## Question 6

![](app://local/Users/oscarplaisant/devoirs/cours/attachments/markmind/1663935539410.png?1663935553690)
 - mémoire
     - suites [[binaire|binaires]] --> transmises dans le coeur du CPU ([[registres]])
         - transcodage [[binaire]] du langage [[assembleur]]
