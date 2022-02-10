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

## Exemples

- qui est le réalisateur de dune ?
    - $ans(r) \leftarrow films("dune", r, a)$
- en quelle année est sorti nikita ?
    - $ans(a) \leftarrow films("dune", r, a)$


