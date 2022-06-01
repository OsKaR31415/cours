#maths
# crochet d'Iverson
Notation qui renvoie $1$ si une condition est vérifiée, et $0$ sinon.
Précisément :
$$
[P] = \left\{
\begin{array}{rl}
1 \text{ si P est vrai,}\\
0 \text{ sinon}
\end{array}
\right.
$$


## Exemples

La notation est utile pour les sommes ou intégrales sans conditions de bornes. Par exemple :
$\disp\sum_{1\leq i\leq 10}i^2 = \sum_i i^2[1\leq i\leq 10]$


### Cas particuliers

 - Le [[symbole de kronecker]] : $\delta_{ij} = [i = j]$
 - La [[fonction indicatrice]] : $I_A(x) = [x\in A]$
 - La [[fonction signe]] : $\sgn(x) = [x>0]-[x<0]$
 - La [[fonction de Heaviside]] : $H(x) = [x>0] + \frac12[x=0]$
 - La fonction [[partie entière]] : $\disp E(x) = \sum_{n=-\infty}^\infty n[n \leq x < n+1]$ 


