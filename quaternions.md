up::[[MOC algèbre]]
#maths/algèbre #no-review 

----

L'ensemble $\mathbb{H}$ des quaternions peut être défini comme l'[[algèbre associative]] sur le [[corps]] des nombres réels $\mathbb{R}$ engendrée par les 3 éléments $i$, $j$ et $k$, satisfaisant les [[quaternions#Relations quaternioniques]] : $i^2 = j^2 = k^2 = ijk = -1$.


## Définitions
On peux définir les quaterions comme l'ensemble : $\mathbb{H} = \left\{\left.\begin{pmatrix}y&z\\-\overline{z}&\overline{y}\end{pmatrix} \right| (y, z)\in\mathbb{C}^2\right\}$ muni de la [[multiplication de matrices]].
On peux alors montrer les rela


## Propriétés

### Relations quaternioniques
 - $i^2 = j^2 = k^2 = ijk = -1$

### [[table de cayley]] des quaternions
| $\times$   |     | $\mathbb 1$ | $i$         | $j$         | $k$         |
| ---------- | --- | ----------- | ----------- | ----------- | ----------- |
|            |     |             |             |             |             |
| $\mathbb1$ |     | $\mathbb1$  | $i$         | $j$         | $k$         |
| $i$        |     | $i$         | $-\mathbb1$ | $k$         | $-j$        |
| $j$        |     | $j$         | $-k$        | $-\mathbb1$ | $i$         |
| $k$        |     | $k$         | $j$         | $-i$        | $-\mathbb1$ |

## Exercice
L'ensemble des quaternions est l'ensemble :
$\mathbb{H} = \left\{\left.\begin{pmatrix}y&z\\-\overline{z}&\overline{y}\end{pmatrix} \right| (y, z)\in\mathbb{C}^2\right\}$
On note $\mathbb{H}^*$ l'ensemble $\mathbb{H}$ privé de $\begin{pmatrix}0&0\\0&0\end{pmatrix}$
On pose :
$\mathbb{1}=\begin{pmatrix}1&0\\0&1\end{pmatrix}$, $i = \begin{pmatrix}i&0\\0&-i\end{pmatrix}$, $j=\begin{pmatrix}0&-1\\1&0\end{pmatrix}$, $k=\begin{pmatrix}0&-i\\-i&0\end{pmatrix}$

 1. Montrer que $\mathbb{H}^*$ est un sous-groupe $\text{GL}_2(\mathbb{C})$ (le groupe linéaire de matrices inversible $2\times2$ à coefficients dans $\mathbb{C}$)
 2. verrifier que :
     - $i^2 = j^2 = k^2 = -1$, $ij=k$, $ik=-j$, $ji=-k$, $jk=i$, $ki=j$, $kj=-i$
 3. montrer que le groupe engendré par $1, i, j, k$ est d'ordre 8. On appelle ce groupe $H_8$
 4. montrer que ces groupes sont deux-à-deux non-isomorphes : $(H_8, \times)$, $(\mathbb{Z}/2\mathbb{Z}\times\mathbb{Z}/2\mathbb{Z}\times\mathbb{Z}/2\mathbb{Z}, \dot+)$, $(\mathbb{Z}/2\mathbb{Z}\times\mathbb{Z}/4\mathbb{Z},\dot+), (\mathbb{Z}/8\mathbb{Z},\dot+)$
