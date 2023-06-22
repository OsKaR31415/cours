up::[[permutation]]
#maths/algèbre 

----
Soit $s$ une [[permutation]].
Soit $k$ le nombre de [[transposition|transpositions]] dans la [[décomposition en produit de transpositions]] de s.
La _signature_ de $s$ est $\varepsilon(s) = (-1)^k$, soit $\varepsilon(s) = \left\{\begin{gathered}1\text{ si } k\in2\mathbb Z\\ -1\text{ sinon}\end{gathered}\right.$

dans $\mathfrak S$.$\varsigma$

# Exemple
Soit $s = (1, 4, 7, 2, 8, 3, 5, 6)$ (ici, $s$ est un [[p-cycle|8-cycle]])
La [[décomposition en produit de transpositions]] de $s$ est :
$s = (1,4)\circ(4, 7)\circ(7,2)\circ(2,8)\circ(8,3)\circ(3,5)\circ(5,6)\circ(6,1)$
Ici, il y a 

# propriétés
 - la signature de la composée est le produit des signatures
     - Soient $s$ et $s'$ deux permutations, $\varepsilon$

 - la signature d'un [[p-cycle]] est $(-1)^{p-1}$
     - Signature d'une transposition : $(-1)^1 = -1$
     - Signature d'un 3-cycle : $(-1)^3 = 1$
     - Signature d'un 4-cycle : $(-1)^4 = -1$
     - $\vdots$
     - Signature d'un p-cycle : $(-1)^{p-1}$

# Méthodes de calcul
Soit $\sigma\in\mathfrak S_7$
$\sigma = \begin{pmatrix}1 & 2 & 3 & 4 & 5 & 6 & 7\\ 1 & 7 & 6 & 4 & 3 & 5 & 2\end{pmatrix}$

## Première méthode

Soit $I(\sigma)$ le [[nombre d'inversions d'une permutations|nombre d'inversions]] de $\sigma$, $\varepsilon(\sigma) = (-1)^{I(\sigma)}$ 
Il y a 12 inversions dans $\sigma$ (voir [[nombre d'inversions d'une permutations]]/méthode de calcul)


## Deuxième méthode
$\displaystyle\varepsilon(\sigma) = \prod_{1\leq i < j \leq n}\frac{\sigma(i)-\sigma(j)}{i-j}$

Dans notre cas, $\varepsilon(\sigma) = \dfrac{(-6)\times(-5)\times(-3)\times(-2)\times(-4)\times(-1)\times1\times3\times4\times2\times5\times2\times3\times1\times4\times1\times(-1)\times2\times(-2)\times1\times3}{(-1)\times(-2)\times(-3)\times(-4)\times(-5)\times(-6)\times(-1)\times(-2)\times(-3)\times(-4)\times(-5)\times(-1)\times(-2)\times(-3)\times(-4)\times(-1)\times(-2)\times(-3)\times(-1)\times(-2)\times(-1)}=-1$
## Troisième méthode
Si on fait la [[décomposition en produit de transpositions]] de $\sigma$, et que l'on note $t$ le nombre de [[transposition|transpositions]] dans cette décomposition, on aura :
$\varepsilon(\sigma) = (-1)^t$

Dans notre cas,
$\sigma = (2,7)\circ(3,6,5) = (2,7)\circ(3,6)\circ(6,5)$
Il y a 3 transpositions dans la décomposition en composée de transpositions, donc :
$\varepsilon(\sigma) = (-1)^3 = -1$
