#logique
# logique des predicats du premier ordre

## Exemple de raisonnement en LP1
```
(P1) Toute personne coupable est condamnée
(P2) Cain est coupable
(P3) Abel n'est pas coupable
(P4) Si quelqu'un est coupable, son frère ne l'est pas toujours
------
(C) donc Cain est condamné
```

Dans la [[logique des propositions]], on ne peut pas représenter certains énoncés.



## Elements de la LP1
 - **variable** : représente des concepts quelconques de l'univers du discours qui ne sont pas définit précisément
 - **constantes** : Des concepts de l'univers du discours qui sont définits et fixés
     - Exemple: `Abel` et `Caïn` sont des constantes
     - En [[logique des propositions]], ils n'étaitent pas représentés directement, mais associés à des jugements portés sur eux (ex: `Cain_Coupable`)
 - Les **prédicats** : des [[jugement|jugements]] dont la valeur de vérité _dépend des variables qui leur sont associés_
     - Exemple: `Coupable(Abel)`
 - Les **quantificateurs** : $\forall$ et $\exists$ 
     - Utilisés pour parler de généralités
     - Exemple : $\forall x (A(x) \implies B(x))$ exprime "Si quelque chose respecte le prédicat $A$, alors il respecte aussi le prédicat $B$"


