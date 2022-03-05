# dérivation

La dérivée d'une fonction $f$ est la fonction $f'$ telle que :

$\displaystyle f'(a) = \lim_{h\rightarrow0}\left( \dfrac{f(a+h) - f(a)}{h} \right)$

C'est le [[coefficient directeur]] de la [[tangente à une courbe|tangente à la courbe]] en chaque point.

## Notation
Soit $f$ une fonction.
On note $f'$ la *dérivée* de $f$.
On note $f''$ la *dérivée seconde* de $f$, c'est à dire la dérivée de $f'$.

### Dérivées successives
On note :
 - $f^{(0)}=f$
 - $f^{(1)}=f'$
 - $f^{(2)}=f''$
 - $\vdots$
 - $f^{(n)}=(f^{(n-1)})'$

## Méthodes de dérivation

On peut utiliser les dérivées des fonctions usuelles :

### Dérivées d'expressions
$$\begin{array}{r|l}
\text{expression} & \text{dérivée}\\
x^n & nx^{n-1}\\
sin(x) & cos(x)\\
cos(x) & -sin(x)\\
\arcsin' x & \dfrac1{\sqrt{1-x^2}}\\
\arccos' x & -\dfrac1{\sqrt{1-x^2}}\\
\tan x & 1 + \tan^2(x)\\
\arctan x & \dfrac1{1+x^2}\\
\end{array}$$

### Dérivées de fonctions
$$\begin{array}{|r|l|}\hline
\text{expression} & \text{dérivée}\\\hline
u \times v & u'v + uv'\\\hline
\dfrac uv & \dfrac{u'v - uv'}{v^2}\\\hline
e^u & u'\cdot e^u\\\hline
u^n & nu'\cdot u^{n-1}\\\hline
g\circ f & f' \times g'\circ f\\\hline
(f^{-1})' & \dfrac1{f'\circ f^{-1}}\\\hline
\end{array}$$

## notion de [[fonction dérivable]]
Une fonction est dérivable sur un intervalle si sa dérivée existe sur cet intervalle

