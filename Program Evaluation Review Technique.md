---
alias: "PERT"
---
up::[[outils de gestion de projet]]
#PM #review 
# Program Evaluation Review Technique

title::![[Program Evaluation Review Technique 2022-09-13 17.46.14.excalidraw]]


> [!important] objectif
>  - étudier les précédences entre les tâches
>  - identifier les tâches critiques (qui doivent être faîtes sans perte de temps pour ne pas retarder l'ensemble du projet)


> [!note] graphe PERT
> **un projet =**
>  - des **tâches** (flèche)
>      - nom
>      - durée
>      - Exemple : tâche A qui dure 15 jours : ![[Program Evaluation Review Technique 2022-09-13 17.40.48.excalidraw|200]]
>  - des **étapes** (début/fin des tâches)
>      - un numéro
>      - temps de réalisation au plus tôt
>      - temps de réalisation au plus tard
>      - Exemple : étape 2 qui commence au plus tôt jour 5, commence au plus tard jour 9 : ![[Program Evaluation Review Technique 2022-09-13 17.42.07.excalidraw|100]]


> [!note] construire un graphe PERT
> #### Etablir la liste des tâches avec durée et précédences
>  - **Tableau des antécédents**
>  **Exemple :** rapport de stage
> 
> | lettre | intitulé             | Durée    | Antécédents |
> | ------ | -------------------- | -------- | ----------- |
> | A      | plan                 | 1 jour   | -           |
> | B      | rédaction            | 10 jours | tâche A     |
> | C      | création des figurec | 5 jours  | tâche B     |
> | D      | relecture            | 1 jour   | tâche B C   |
>  
> #### Dessiner les précédences
> ![[PERT exemple dessiner les précédences 2022-09-13 18.15.11.excalidraw]]
> #### Définir le temps de réalisation
>  - au plus tard
>  - au plus tôt

> [!info]- historique
>  - créé pour le projet POLARIS de la marine USA (1958)
>      - 250 fournisseurs
>      - 9000 sous-traitants
>      - 7 ans de réalisation
>  - besoin d'une nouvelle technique d'ordonnacement qui devait conduire à des gains de temps important
>  - méthode étendue à l'ensemble de l'industrie