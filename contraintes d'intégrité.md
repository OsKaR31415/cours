#informatique 
# contraintes d'intégrité
On peut poser des contraintes sur des valeurs. Par exemple, l'âge d'une personne ne peut pas être négatif

## Intégrité et clés
 - Propriétés d'intégrité générale
     - clés uniques
         - un **ensemble d'attributs** est dit _clé unique_ si. **deux tuples différents**
         - ex: soit $R=\{(1, 2, 3), (1, 2, 4)\}$, de shéma $R[A, B, C]$. On sait que $\{A,B\}$ ne peut pas être une clé unique, mais que $\{C\}$ peut être une clé unique.
         - une clé unique est dite _minimale_ si elle est la plus petite possible
             - def: ensemble minimal d'attributs qui permet d'identifier un tuple unique
     - clés candidates et clés primaires
         - une _clé candidate_ est une _clé unique minimale_
         - une des _clés candidates_ est choisie comme _clé primaire_ et est utilisée pour identifier le tuple.
             - ex: etudiant(<u>numéro d'étudiant</u>, nom prénom, )
     - clés étrangères
         - une _clé étrangère_ (CE) est un ensemble d'attributs d'une relation $T1$ qui fait référence à une clé primaire (CP) d'une autre relation $T2$
             - exemple :
                 - Employé(<u style="color: red">mat</u>, nom addr, <i style="color:green">dept</i>, *supérieur*)
                 - Projet(<u style="color:royalblue">num</u>, designation)
                 - Département(<u style="color:green">dept</u>, *directeur*, nom)
                 - Rôle(<u style="color:red">mat</u>, <u style="color:royalblue">num</u>, role_employé)