#informatique 
# modèle entité association

[[exemple diagramme entité-association.excalidraw]]

- Modèle Conceptuel des Donnés
    - Introduit par _Peter Chen (1976)_
    - description **statique** du système d'informations
        - pas de représentation des traitements
    - très répandu
    - grande variété de dialectes? variaNtes et extensions
        - avec des notations graphiques


## entité
- Modélise un ensemble d'objets concrets ou abstraits de même nature
- représentate des phénomènes du monde réel
- représenté par un **rectangle**

## association ou relation
- représente les liens entre deux ou pluieurs entités
- représenté par un **rectangle arrondi** (ou un ellipse)

## Attibuts
- Décrit les entités et les associations
- Exemple
    - L'entité _Personne_ a pour attributs : numéro personne, nom, ville
    - L'entité _Vélo_ a pour attributs : numéro Vélo, marque
    - l'assocIation _Est propriétaire_ a un attribut : date achat
- représentation graphique : tableau en dessous de l'entité / de la relation

## Clé
- UN ou plusieurs attributs permattant d'identifier, de façon unique, chaque occurence d'une entité
- **obligatoire**
- représentation : **attribut.s souligné.s**

## cardinalité
- Les entités participant aux associations ont des **cardinalités minimales et masimales**
- représentation : (cardinalité minimale),(cardinalité maximale) (ex: $0,N$ ou $1,1$). Les cardinalités sont au début de la relation (ex: $\text{personne } 0,N \rightarrow 0,1\text{ vélo}$)


## [[contraintes d'intégrité]]
Contraintes que l'on ajoute, et qui doivent être respectées à tout instant.