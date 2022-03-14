#maths/algèbre 
# résolution d'un SL


### Résolution par substitution
On cherche a exprimer une variable en fonction d'une autre, puis on remplace des expressions des variables ainsi trouvées.

### Méthode du pivot de Gauss
#### Exemple
$(S): \left\{ \begin{array}{rcllr} x&+y&+7z&=-1&L_1\\ 2x&-y&+5z&=-5&L_2\\ -x&-3y&-9z&=-5&L_3 \end{array} \right.$

On transforme $(S)$ en un système équivalent lorsque l'on effectue l'une des opérations suivantes :
 a. Interversion des lignes $L_i$ et $L_j$; on écrit $L_i \leftrightarrow L_j$
 b. Multiplication de $L_i$ par un nombre $\lambda \neq 0$; on écrit $\lambda L_x \rightarrow L_i$ (qui se lit "$\lambda L_i$ remplace $L_i$")
 c. Remplacement de $L_i$ par $L_i + \mu L_j$, où $\mu$ est un nombre réel, et $j\neq i$; on écrit $L_i + \mu L_j \rightarrow L_i$

La méthode du pivot de Gauss consiste à transfOrmer à l'aide de ces 3 règles le système $(S)$ en un système équivalent "écholonné", c'est-à-dire où la variable $x$ n'apparaît plus $L_1$ et $L_2$, et où $y$ n'apparaît plus dans $L_2$.
On a
$$\begin{aligned}
\left\{\begin{array}{rrrrr}x&+y&+7z&=&-1\\ 2x&-y&+5z&=&-5\\ -x&-3y&-9z&=&-5 \end{array}\right.
\iff
\left\{\begin{array}{rrrrrl}x&+y&+7z&=&-7&(L_1\rightarrow L_1)\\ &-3y&-9z&=&-3&(L_2-2L_1\rightarrow L_2)\\ &-2y&-2z&=&-6&(L_3+L_1\rightarrow L_3) \end{array}\right.\\
\iff
\left\{\begin{array}{rrrrrl}x&+y&+7z&=&-7&(L_1\rightarrow L_1)\\ &-3y&-9z&=&-3&(L_2-2L_1\rightarrow L_2)\\ &-2y&-2z&=&-6&(L_3+L_1\rightarrow L_3) \end{array}\right.\\
\end{aligned}$$

