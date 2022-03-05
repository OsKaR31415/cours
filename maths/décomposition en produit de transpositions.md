# décomposition en produit de transpositions
Soit $\sigma$ une [[permutation]]
La _décomposition en produit de transpositions_ de $\sigma$ est une écriture de $\sigma$ dans laquelle on utilise uniquement des transpositions composées entre elles.

## Exemple

Soit $\sigma=\begin{pmatrix}1&2&3&4&5&6\\ 2&1&3&6&4&5\end{pmatrix}$

On commence par calculer la [[décomposition en produit de cycles disjoints]] de $\sigma$.
Ici, on a $\sigma = (1,2)\circ(4,6,5)$
Or, on sait que l'on peut décomposer un cycle de la manière suivante :
$(n_0,n_1,n_2,\ldots,n_k,\ldots) \longrightarrow (n_0,n_1)\circ(n_1,n_2)\circ\ldots\circ(n_k,n_{k+1})\circ\ldots$
On a donc :
$\sigma = (1,2)\circ(4,6)\circ(6,5)$
Ce qui est bien un _produit de transpositions_

