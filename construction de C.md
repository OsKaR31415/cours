up::[[nombre complexe]]
#maths/analyse/complexes #no-review 
# construction de C
On utilise des [[matrice]] pour définir les nombres complexes.

On note $\text{Im} = \left( \begin{array}{cc}0&-1\\1&0\end{array} \right)$

On a $\text{Id} = \left(\begin{array}{cc}1&0\\0&1\end{array}\right)$ la [[matrice identité]].

$\text{Im}^2 = \left( \begin{array}{cc}0&-1\\1&0\end{array} \right)\left( \begin{array}{cc}0&-1\\1&0\end{array} \right) = \left( \begin{array}{cc}-1&0\\0&-1\end{array} \right) = -\text{Id}$

Il existe donc une matrice dont le carré est $-\text{Id}$. Si on travaille avec des matrices de la forme :

$\left( \begin{array}{cc}a&-b\\b&a\end{array} \right)$ avec $(a, b)\in\mathbb R^2$

Alors toute matrice $A$ s'écrit :

$\begin{aligned} \left( \begin{array}{cc}a&-b\\b&a\end{array} \right) &= \left( \begin{array}{cc}a&0\\0&a\end{array} \right) +\left( \begin{array}{cc}0&-b\\b&0\end{array} \right) \\[.5em] &= a\left( \begin{array}{cc}1&0\\0&1\end{array} \right) + \left( \begin{array}{cc}0&-1\\1&0\end{array} \right)b \\[.5em] &= a\text{Id} + b\text{Im} \end{aligned}$

On peut alors construire une [[bijection]] avec $\mathbb C$, et même un [[isomorphisme]]. Cela permet de construire $\mathbb C$.

