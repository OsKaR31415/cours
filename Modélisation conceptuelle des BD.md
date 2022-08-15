#informatique #no-review 
# Modélisation conceptuelle des BD

- Tâches de conception
    - Définir une **représentation** des **données** à l'aide de **concepts** qui :
        - Regroupent des données simiLaires
        - 

- Avantages de la modélisation
    - Représentation de heut niveau des données
        - Plus **facile à comprendre**
            - équipes de plusieurs concepteurs, nouveaux recrutés
        - Plus **facile à communiquer**
            - entre plusieurs concepteurs, avec l'admin^ BD, avec les utilisAteurs
        - Plus **facile à maintenir**

## Phases de la modélisation conceptuelle

- **Comprendre**  le monde réel à représenter
- **Spécification** de l'information dans un langage de haut niveau
- **Validation** du shéma résultat


## Principes de la modélisation

- Principe du 100%
    - Un shéma conceptuel doit représenter **tous les aspects dU problème**
- Principe de conceptualisation
    - Un shéma conceptuel ne doit inclure **aucun élément associé à l'implémentation** ni à la performance de la future [[base de données]]
- Un shéma conceptuel doit
    - refléter la réalité
    - éviter la redondance
    - être simple

## L'abstraction dans la modélisation

- Processus mental pour. **sélectionner les caractéristiques et les propriétés d'un ensemble d'objets** et éliminer d'autres caractéristiques qui ne sont par importantes
- Nous Utilisons une abstraction pour nous **concentrer sur les propriétés considérées comme essentielles** et oublier les autres
    - exclusion des détails

### types d'abstraction
- Classification
    - Définir un concept comme une classe d'éléments du monde réel
        - définition des classes
        - description des classes
        - **association** des classes
            - Définir un concept comme **association entre membres de différentes classes**
            - La **cardinalité** d'une association
                - le nombre d'associations dans lesquelles un membre d'une classe peut participer
                - Soit l'association $A$ entre les classes $C1$ et $C1$
                    - **Cardinalité minimale** de $C1$ en $A$ : nombre minimal d'associations dans lesquelles chaque membre de $C1$ peut être associé
                    - **Cardinalité maximale**
    - Exemple :
        - Personne : classe dont les membres sont tous des humains
        - Vélo : classe dont les membres sont tous les vélos
        - **association**: un Personne _possède_ un Vélo
            - cardinalité de Personne $\rightarrow$ Vélo
                - Une personne **peut ne pas posséder** de vélo
                    - cardinalité minimale = 0
                - Une personne peut posséder **plusieurs** vélos
                    - cardinalité maximale = plusieurs ($N$ ou $*$)
            - Cardinalité de Vélo $\leftarrow$ Personne
                - Un vélo peut **ne pas être possédé**
                    - cardinalité minimale = 0
                - Un vélo peut être possédé par une seule personne
                    - cardinalité maximale = 1
- Aggrégation


[[modèle entité association]]





