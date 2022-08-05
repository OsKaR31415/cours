up::[[permutation]]
#maths/algèbre #review 
# transposition

Une _transposition_ est une [[permutation]] qui n'échange que 2 éléments.
Une transposition est donc un [[p-cycle|2-cycle]].

## Définition
Soit $\sigma\in\mathfrak S_n$.
$\sigma$ est une transposition ssi :
 - Il existe 2 éléments distincts $a$ et $b$ tels que $\sigma(a)=b$ et $\sigma(b)=a$
 - $\forall i\notin\{a;b\}, \sigma(i)=i$ (tous les autres éléments sont invariants par $\sigma$).

## Exemple :
$\sigma = \begin{pmatrix}1&2&3\\1&3&2\end{pmatrix}$ est une _transposition_


## Inversion
On dit qu'une transposition $s$ est une _inversion_ ssi on a :
$a>b \text{ et } s(a)<s(b)$, ou bien $a<b \text{ et } s(a)>s(b)$
Autrement dit, c'est une transposition qui inverse l'ordre des éléments.

Le nombre d'inversions dans la [[décomposition en produit de transpositions]] d'une permutation est égal
