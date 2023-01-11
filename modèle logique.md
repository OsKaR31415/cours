up::[[base de données]]
#informatique

----

Constantes utilisées
 - **att** un ensemble d'attributs totalement ordonnés par $\leq$
 - **dom** ensemble de constantes du domaine
 - **relname** ensemble de noms de relation
 - **var** ensemble de variables à valeur sur **dom**


- _sorte_ : ensemble des attributs
    - $sorte(R) = \{titre, réalisateur, année\}$
- _arité_ : cardinal de la sorte
    - $arité(R) = |sorte(R)|$
- _shéma_ : shéma de la forme $R[U]$ où $U=sorte(R)$
    - ex: $film[titre, réalisateur, année]$


# Différentes approches

 - est-ce que les noms d'attribut sont importants
     - utilisés pour manipuler les relations : approche **nommée**
         - si $R$ est un ensemble d'attributs, un tuple $t$ est vu comme une fonction du $U$ vers **dom**.
         - ex: soit la relation $films$
             - de schéma $films[titre, réalisateur, année]$
             - de 
     - on utilise leur index : approche **non-nommée**
         - soit $t$ un élément de **dom**, $t(3)$ est le 3ème élément de $t$
             - ex: $t=(titre, réalisateur, année)$, on utilise $t(3)$
 - comment manipule-t-on les relations ?
     - comme des ensembles de tuples : approche **conventionelle**
         - une _instance de relation_ de shéma $R[U]$ est un ensemble fini $I$ de tuples de sorte $U$
         - une _instance de base de donnêés_ de shéma $D$ est une fonction $I$ de domaine $D$ telle que pour tout $R\in  D$, $I(R)$ est une instance de relation
     - comme des ensembles de faits : approche **logique**
