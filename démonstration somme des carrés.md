up::[[somme des carrés]] 
title::"démonstration de $\sum\limits_{k=1}^{n}k^{2} = \frac{n(n+1)(2n+1)}{6}$"
#maths #demonstration 

---
On utilise la formule du [[binôme de Newton]] pour chacun des cubes :

$1^{3} = (0+1)^{3} = 0^{3} + 3\times 0^{2} \times 1 + 3 \times 0 \times 1 + 1$
$2^{3} = (1+1)^{3} = 1^{3} + 3\times 1^{2}\times 1 + 3 \times 1 \times 1^{2} +  1^{3}$
$3^{3} = (2+1)^{3} = 2^{3}+3\times 2^{2}\times 1 + 3\times 2 \times 1^{2} + 1^{3}$
$\vdots$
$n^{3} = ((n-1)+1)^{3} = (n-1)^{3} + 3(n-1)^{2} + 3 \times (n-1) + 1$
$(n+1)^{3} = (n+1)^{3} = n^{3}+3n^{2} + 3n + 1$

Donc, par somme :

$\sum\limits_{k=1}^{n+1} k^{3} = \sum\limits_{k=0}^{n} k^{3} + 3\sum\limits_{k=0}^{n}k^{2} + 3\sum\limits_{k=0}^{n}k + \sum\limits_{k=0}^{n}1$

Soit :
$\sum\limits_{k=1}^{n}k^{3} + (n+1)^{3} = \sum\limits_{k=1}^{n}k^{3} + 3\sum\limits_{k=0}^{n}k^{2} + 3\sum\limits_{k=0}^{n}k + n + 1$

Donc :

$\sum\limits_{k=0}^{n}k^{2} + \frac{3n(n+1)}{2} + n + 1 = (n+1)^{3}$

Alors :

$$\begin{align}
3\sum\limits_{k=0}^{n}k^{2} &= + (n+1)^{3} - \frac{3n(n+1)}{2} - (n+1) \\
&= \frac{2(n+1)^{3} - 3n(n+1) - 2(n+1)}{2} \\
&= \frac{(n+1)\left( 2(n+1)^{2} - 3n - 2 \right) }{2} \\
&= \frac{(n+1)\left( 2n^{2}+n \right) }{2} \\
&= \frac{n(n+1)(2n+1)}{2} \\
\end{align}$$

Donc, on a :

$\displaystyle\sum\limits_{k=0}^{n} k^{2} = \frac{n(n+1)(2n+1)}{6}$

