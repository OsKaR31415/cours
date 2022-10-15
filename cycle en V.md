up::[[cycle de vie nominal d'un logiciel]]
#informatique #no-review 

---

title::![[cycle en V 2022-09-12 13.27.21.excalidraw|100%]]

## Phases

### Analyse des besoins et faisabilité
> [!important] Besoins
>  - cahier des charges : besoins métiers du client
>  - les _spécifications_ sont une réponse informatique
>  - A l'issue de cette phase
>      - Client et fournisseur sont d'accord sur le produit à réaliser (IHM comprise)
>      - Prend en compte des contraintes de faisabilité

> [!important] Faisabilité
>  - Economique
>  - Technique
>      - Risques de développement
>      - Disponibilité des ressources
>      - Technologie nécessaire
>          - [[dette technique]]
>  - Légale

### Spécification fonctionnelle
description des fonctions (modules) d'un logiciel
 - décrit dans le détails comment les exigences seront prises en compte
 - Deux niveau :
     - spécification fonctionnelle générale (ou _architecture métier_)
     - Spécification fonctionnelle détaillée
         - spécification technique pour le développement (signature des fonctions...)

> [!important] point de vue **statique**
>  - découper le logiciel en [[paradygme programmation modulaire|modules]]
>      - module gestion des clients
>      - module gestion des articles
>      - module création de facture
>      - module bilan des ventes
>      - $\vdots$
>  - définir des classes du système ([[paradygme programmation orientée objet|OOP]])

 - but 
     - réduire les délais
     - fractionner de manière récursive le projet
         - éléments traîtés par plusieurs équipes
 - Objectifs
     - maximum d'autonomie entre les sous-systèmes
         - regroupement en fonction
             - des caractéristiques communes
             - de la capacité des équipes
 - Règles
     - définir les protocoles de communication entre les éléments
         - interfaces qui vont autoriser l'intégration
     - le logiciel résulte de l'assemblage des parties de manière récursive
         - ==> intégration

#### Spécification fonctionnelle détaillée

> [!example] Exemple
> Module de création d'un client
> Il faut enchaîner plusieurs étapes :
>  - Affecter un numéro au client
>  - Saisir le nom, l'adresse et l'email
>  - Vérifier que le client n'existe pas
>  - Vérifier que l'emails (non obligatoire) est valide
>  - Vérifier que l'adresse est valide
>
> - [?] dans quel ordre ?
>     - certains ordres sont plus efficaces

### Tests unitaires


### Tests d'intégration
 - tester que les différents modules s'intègrent

