# nombre d'inversions d'une permutations
Le _nombre d'inversions_ d'une permutation $\sigma\in\mathfrak S_n$ est le nombre de couples $(i, j)\in[\![1; n]\!]$ tels que $i<j$ et $\sigma(i) > \sigma(j)$, c'est-à-dire que la permutation $\sigma$ "inverse le sens" de $i$ et de $j$.

## Définition formelle
Soit $\sigma\in\mathfrak S_n$ avec $n\in[\![2; +\infty[\![$
Soit $I(\sigma)$ le nombre d'inversions de $\sigma$
$I(\sigma) = \left| \{(i,j)\in[\![1;n]\!] \;|\; [i<j]\wedge[\sigma(i)>\sigma(j)]\} \right|$


## Propriétés
Soit $I(\sigma)$ le nombre d'inversions de $\sigma$, $(-1)^{I(\sigma)} = \varepsilon(\sigma)$, où $\varepsilon$ désigne la [[signature d'une permutation]].


## Méthode de calcul
On cherche l'ensemble des couple de nombres dans $[\![1; n]\!]$ tels que le premier est strictement inférieur au second (soit $\{(a, b)\in[\![1; n]\!] \;|\; a < b\}$).
Le nombre de couples respectant cette propriété est $\displaystyle\binom{n}{2} = \frac{n!}{2!(n-2)!}$
Dans notre exemple, $\sigma\in\mathfrak S_7$, donc on cherche $\displaystyle\binom{7}{2} = \frac{7!}{2!(7-2)!} = \frac{6\times7}{2} = 3\times7 = 21$

On écrit ensuite ces 21 couples dans un tableau, et on regarde quels couples sont inversés par la permutation.

$$\begin{array}{r|l}
\text{Permutation} & \text{Image} & \text{Signe} \\\hline
(1,2) & (1,7) & + \longrightarrow 1 < 7\\
(1,3) & (1,6) & + \longrightarrow 1 < 6\\
(1,4) & (1,4) & +\\
(1,5) & (1,3) & +\\
(1,6) & (1,5) & +\\
(1,7) & (1,2) & +\\
(2,3) & (7,6) & - \longrightarrow 7 > 6\\
(2,4) & (7,4) & -\\
(2,5) & (7,3) & -\\
(2,6) & (7,5) & -\\
(2,7) & (7,2) & -\\
(3,4) & (6,4) & -\\
(3,5) & (6,3) & -\\
(3,6) & (6,5) & -\\
(3,7) & (6,2) & -\\
(4,5) & (4,3) & -\\
(4,6) & (4,5) & +\\
(4,7) & (4,2) & -\\
(5,6) & (3,5) & +\\
(5,7) & (3,2) & -\\
(6,7) & (5,2) & -\\
\end{array}
$$
Ici, le signe $+$ marque les [[transposition|transpositions]] qui ne sont pas inversées, quand le signe $-$ marque les inversions.
