up::[[MOC analyse]]
#maths/analyse #no-review 
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
$$\begin{array}{|r|l|}
\hline
\text{expression} & \text{dérivée}\\\hline
x^n & nx^{n-1}\\\hline
sin(x) & cos(x)\\\hline
cos(x) & -sin(x)\\\hline
\arcsin' x & \dfrac1{\sqrt{1-x^2}}\\\hline
\arccos' x & -\dfrac1{\sqrt{1-x^2}}\\\hline
\tan x & \dfrac{1}{\cos^{2}(x)} = 1 + \tan^{2}(x)\\\hline
\tan x & \dfrac{1}{\cos^{2}(x)} \\\hline
\arctan x & \dfrac1{1+x^2}\\\hline
\sh(x) & \ch(x) \\\hline
\ch(x) & \sh(x)\\\hline
\arg\sh'(x) & \dfrac{1}{\sqrt{1+x^{2}}}\\\hline
\arg\ch'(x) & -\dfrac{1}{\sqrt{1+x^{2}}}\\\hline
\th(x) & \dfrac{1}{\ch^{2}(x)} = 1 - \th^2(x)\\\hline
\end{array}$$


### Dérivées de fonctions
$$\begin{array}{|r|l|}\hline
\text{expression} & \text{dérivée}\\\hline
u \times v & u'v + uv'\\\hline
\dfrac uv & \dfrac{u'v - uv'}{v^2}\\\hline
e^u & u'\cdot e^u\\\hline
\ln u & \dfrac{u'}{u}\\\hline
\ln |u| & \dfrac{u'}{u}\\\hline
u^n & nu'\cdot u^{n-1}\\\hline
g\circ f & f' \times g'\circ f\\\hline
(f^{-1})' & \dfrac1{f'\circ f^{-1}}\\\hline
\end{array}$$


## Formules générales
### Formule de Leibniz
Dériver $n$ fois un produit de fonctions :
$$(fg)^{(n)} = \sum_{k=0}^n \left( \binom{n}{k} f^{(k)} g^{(n-k)} \right)$$


## Notion de [[fonction dérivable]]
Une fonction est dérivable sur un intervalle si sa dérivée existe sur cet intervalle


