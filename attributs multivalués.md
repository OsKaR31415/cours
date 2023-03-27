up:: [[BDD attributs]]
title:: ""
#informatique 

---

> [!example] Exemple 
> `ETUDIANTS(idE, tel, email)` 
>      - Chaque étudiant peut avoir **plusieurs** téléphones et **plusieurs emails**
>      - Il n'y a **pas de relation** entre les téléphones et les emails
> Implémentations possibles :
> 
> | idE | tel | email |
> | --- | --- | ----- |
> | 1   | t1  | e1    |
> | 1   | t2  | e2    |
> | 2   | t3  | e3    |
> | 2   | t4  |       |
> 
>  - sémantique trompeuse
>  - mise à jour difficile ([[BDD anomalie de mise à jour|anomalies de mise à jour]])
>  - requêtage difficile
>      - trouver tous les emails pour un téléphone donné
>
> | idE | tel | email |
> | --- | --- | ----- |
> | 1   | t1  | e1    |
> | 1   | t1  | e2    |
> | 1   | t2  | e1    |
> | 1   | t2  | e2    |
> | 2   | t3  | e3    |
> | 2   | t3  | e3    |
> 
>  - mise à jour difficile ([[BDD anomalie de mise à jour|anomalies de mise à jour]])
>      - pour chaque tel, il faut mettre à jour l'email
>  - [[BDD redondance|redondance]]
>    
> **Meilleure solution :**
> 
> | idE | tel |
> | --- | --- |
> | 1   | t1  |
> | 1   | t2  |
> | 2   | t3  |
> | 2   | t4  |
> 
> | idE | email |
> | --- | ----- |
> | 1   | e1    |
> | 1   | e2    |
> | 2   | e3    |
> 
>  - requêtage plus simple (avec une jointure)
>  - pas de [[BDD redondance|redondance]]
> 



