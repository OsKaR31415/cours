#maths/analyse 
# développements limités

## Définition
Soient $n\in\mathbb N$,
$I$ un intervalle de $\mathbb R$ contenant $0$, ($0\in\dot I$, c.a.d que $0$ ne doit pas être une borne de $I$ : [[intérieur d'un intervalle|cf.]]),
et $f$ une fonction de $I$ dans $\mathbb R$.

On dit que $f$ possède un _développement limité à l'ordre $n$ **au voisinage de $0$**_ (noté $\text{DL}_n(0)$ de $f$) s'il existe un polynôme $P$ de degré inférieur ou égal à $n$, à coefficients réels, et une fonction $\varepsilon$ de $I$ dans $\mathbb R$ tels que :

$\begin{align}f(x) &= P(x)+x^n\epsilon(x)\\ &=a_0+a_1x+a_2x^2+\ldots+a_nx^n+\underbrace{x^n\epsilon(x)}_{\text{reste}}\end{align}$

avec $\boxed{\lim_{x\rightarrow 0} \varepsilon(x) = 0}$

## Exemple

$\begin{align}f: & \mathbb R \setminus \{1\}\mapsto \mathbb R\\ &x \mapsto \dfrac1{1-x}\end{align}$


$\displaystyle\sum_{k=0}^n x^k = \dfrac{1-x^{n+1}}{1-x}$

Donc $\dfrac1{1-x} = 1+x+x^2+\ldots+x^n+x^n\underbrace{\dfrac{x}{1-x}}_{\varepsilon(x)}$

Vérification :
Soit $S = 1+x+x^2+\ldots+x^n \hspace{2em}(1)$
$x\cdot S = x+x^2+\ldots+x^n+x^{n+1} \hspace{2em}(2)$

$$\begin{aligned}
(1)-(2) &= \ldots\\[1ex]
S-x\cdot S &= 1-x^{n+1}\\[1ex]
S (1-x) &= 1-x^{n+1}\\[2ex]
S &= \dfrac{1-x^{n+1}}{1-x}
\end{aligned}$$



## Propriétés
Soient $f$ et $g$ deux fonction admettant un $DL_n(x_0)$ :
 - $\text{DL}_n(x_0) (f+g) = (\text{DL}_n(x_0) f) + (\text{DL}_n(x_0) g)$
     - $\text{DL}_n(x_0) f + \text{DL}_p(x_0) g = \text{DL}_{\min (n; p)}(x_0) (f+g)$
 - $\text{DL}_n(x_0) (f\times g) = (\text{DL}_n(x_0) f) \times (\text{DL}_n(x_0) g)$
     - $\text{DL}_n(x_0) f \times \text{DL}_p(x_0) g = \text{DL}_{\min (n; p)}(x_0) (f\times g)$
 - Si $g(x_0)\neq0$, $\text{DL}_n(x_0) \left(\dfrac fg\right) = \dfrac{\text{DL}_n(x_0) f}{\text{DL}_n(x_0) g} = \text{DL}_n(x_0) f \times \text{DL}_n(x_0) \dfrac1g$
     - Avec des ordre différents, on prends toujours le minimum.

