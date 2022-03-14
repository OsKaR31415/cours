#informatique 
# langage à base de règles

Une [[requête conjonctive]] sur un shéma de base données $D$ est une expression de la forme :
$ans(u) \leftarrow R_1(u_1),\ldots,R_n(u_n)$
et se lit $ans$ est vrai si $R_1, R_2, \ldots, R_n$ sont vraies

- $ans(u)$ est appelé la _tête_ de la règle
- $R_1(u_1), \ldots, R_n(u_n)$ est appelé le _corps_ de la règle

- $R_i$ est un nom de relation de $D$
- $ans \notin D$ est un nom de relation
- $u_i$ est une expression de la forme $e_1, e_2, \ldots, e_{m_i}$

- condition de _champs restreint_
    - chaque variable apparaissant dans la tête doit nécessairement apparaître aussi dans le corps

Pour calculer le résultat de la requête, on doit tester toutes le [[valuation|valuations]] possibles qui respectent $R_1, R,2, \ldots, R_n$, et appliquer ces [[valuation|valuations]] sur la relation $ans$ pour obtenir l'instance de $ans$.

## Exemples

- qui est le réalisateur de dune ?
    - $ans(r) \leftarrow films("dune", r, a)$
    - le résultat est $"Lynch"$
        - Car seule une valuation respecte $films("dune", r, a)$ (c'est-à-dire un film nommé "dune" avec le réalisateur et l'année correspondante dans la relation), et que cette valuation done $r="Lynch"$
- en quelle année est sorti nikita ?
    - $ans(a) \leftarrow films("nikita", r, a)$

    
