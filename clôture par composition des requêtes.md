---
alias: "compositionalité des requêtes"
---
up::[[propriétés des requêtes conjonctives]]
title::"toute instance est close par l'application de requêtes"
description::"le résultat d'une requête est une nouvelle BDD sur laquelle on peut aussi faire des requêtes"
#informatique 

---

## Sur les requêtes conjonctives
La composition de [[requête conjonctive]] est équivalente à une [[requête conjonctive]] plus complexe.

> [!example] Exemple 
> le programme :
> $S(x, y) \leftarrow R(x, y), Q(y)$
> $T(y) \leftarrow Q(x), S(x, y)$
> $U(x, y) \leftarrow T(x), R(x, y)$
> est équivalent à : 
> $U(x, y) \leftarrow R(x, y), Q(x), R(z, x), Q(z)$

