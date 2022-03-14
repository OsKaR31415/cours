#maths/analyse 
# dérivées successives

On utilise la notation pour les [[dérivation|dérivées]] : 
 - $f^{(0)}=f$
 - $f^{(n)} = (f^{(n-1)})'$ cette dérivée existe

 ## Propriétés

  - Si $f^{(n)}$ existe, alors toutes les dérivées d'ordre inférieur existent
  - $\left(f^{(p)}\right)^{(q)} = f^{(p+q)}$

### Théorème
Si $f$ et $g$ sont $n$ fois dérivables avec $n\in\mathbb N^*$
 - $(f+g)$ est $n$ fois dérivable
 - $(f+g)^{(n)} = f^{(n)}+g^{(n)}$
 - $\forall k\in\mathbb R, k\times f\text{ est dérivable}$
 - $\forall k\in\mathbb R, (k\times f)^{(n)} = k\times f^{(n)}$
 - Si $g$ ne s'annule pas, $\frac{f}{g}$ est $n$ fois dérivable
 
 
### Formule de Leibniz
$\displaystyle(f\times g)^{(n)} = \sum_{k=0}^n \left( \binom{n}{k}f^{(k)}\times g^{(n-k)} \right)$

#### Exemple : $h(x) = x^2 \times e^{3x}, \mathscr D_f = \mathbb R$
On pose $f(x) = x^2$ et $g(x) = e^{3x}$
- $f^{(0)}=x^2$
- $f^{(1)}=2x$
- $f^{(2)} = 2$
- $\vdots$
- $f^{(n)}(x) = 0$ pour $n\geq 3$

- $g^{(0)} = e^{3x}$
- $g^{(1)}=3e^{3x}$
- $g^{(2)}=9e^{3x}$
- $\vdots$
- $g^{(n)}=3^n \cdot e^{3x}$

Donc:
$$\begin{align}
h^{(4)}(x) &= \sum_{k=0}^4 \left( \binom4k \cdot f^{(k)}(x) \cdot g^{(4-k)}(x) \right)\\[2ex]
&= x^2 \cdot 81e^{3x} + 4 \cdot 2x \cdot 27e^{3x} + 6 \cdot 2 \cdot 9e^{3x} + 0\\[1ex]
&= 27e^{3x}\left( 3x^2 + 8x + 4 \right)
\end{align}$$

