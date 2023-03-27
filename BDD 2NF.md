up:: [[BDD normalisation]]
title:: "tous les attributs en [[dépendance fonctionnelle|DF]] avec **toute la clef primaire**"
#informatique 

---
 - est en [[1NF]]
 - Tous les attributs doivent être en dépendance fonctionnelle avec la totalité la clef primaire.
     - cela interdit d'avoir des répétitions
         - Si un attribut ne dépend que d'une partie de la clef primaire, il peut être répété pour différentes valeurs du reste de la clef primaire
         - le fait de demander la dépendance à la totalité de la clef primaire interdit cela


> [!question] Pourquoi ?
> Pour éviter les anomalies de suppression, d'insertion et de mise à jour
>  - La 2NF permet de ne pas avoir à modifier plusieurs lignes pour une seule requête

