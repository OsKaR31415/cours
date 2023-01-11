up::[[modèle logique]], [[modèle entité association]]
#informatique

---
Méthode de conversion du [[modèle entité association]] vers le [[modèle logique]].

Voir [[conversion modèle ER, modèle logique.excalidraw]]


# Conversion des entités
 - Chaque entité devient une relation
     - propriété -> attribut
     - clé -> clé primaire
     - occurrences -> tuples

# Conversion des associations binaires
- Association ...,1 <=> ...,N
    - exemple:
        - recopie de la clé de personne en tant qu'attribut de vélo. clé étrangère
        - migration des attributs de l'association en tant qu'attributs de vélo
