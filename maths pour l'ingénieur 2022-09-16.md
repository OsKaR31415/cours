#exercice #maths 

----

# Exercice 1
## 1)
Soient $f$ et $g$ deux fonctions définies au voisinage de $0$, et telles que :
 - $f(x) = o(x)$
 - $g(x)=o(x^2)$
On cherche à montrer que $g(x) = o(f(x))$

**Contre-exemple :**
Si on a $f(x)=x^{5}$ et $g(x) = x^{3}$
Alors, on a bien :
 - $\lim\limits_{ x \to 0 } \frac{f(x)}{x} = \lim\limits_{ x \to 0 } x^{4} = 0$ donc $f(x)=o(x)$
 - $\lim\limits_{ x \to 0 } \frac{g(x)}{x^{2}} = \lim\limits_{ x \to 0 } x = 0$ donc $g(x)=o(x^{2})$
Or :
$$
\begin{align}
\lim\limits_{ x \to 0 } \frac{g(x)}{f(x)} &= \lim\limits_{ x \to 0 } \frac{x^{3}}{x^{5}} \\
&= \lim\limits_{ x \to 0 } \frac{1}{x^{2}} \\
&= +\infty
\end{align}
$$
Donc : $g(x)\neq o(f(x))$ alors que $f(x)=o(x)$ et $g(x)=o(x^{2})$

> [!note]
> Au voisinage de $0$ :
> Si :
>  - $f(x) = o(x^{i})$
>  - $g(x) = o(x^{j})$ avec $j > i$
> alors on a :
> $g = o(f)$
> > [!attention]
> > Au voisinage de $+\infty$, la propriété est inversée, et on a :
> > $f = o(g)$


## 2)
*Au voisinage de $0$*
On à : $f(x) = o(x)$
On cherche à montrer que $f(x) = o(x^{2})$

**Contre-exemple :**
Si $f(x) = x^{2}$,
On a bien : $\lim\limits_{ x \to 0 }\frac{f(x)}{x} = \lim\limits_{ x \to 0} x = 0$
Or, on a :
$\lim\limits_{ x \to 0 }\frac{f(x)}{x^{2}} = \lim\limits_{ x \to 0 } \frac{x^{2}}{x^{2}} = 1 \neq 0$
Donc $f(x) \neq o(x^{2})$ alors que $f(x) = o(x)$


## 3)
*au voisinage de $0$*
On a : $f(x) = o(x)$
On cherche à montrer que $f(x) \sim x$
Si $f(x) = o(x)$, alors $\lim\limits_{ x \to 0 } \frac{f(x)}{x} = 0$
Or, $f(x)\sim x \iff \lim\limits_{ x \to 0 }\frac{f(x)}{x} = 1$
Donc $f(x) \not\sim x$

---
# Exercice 2

$f(x) = x (1+\sqrt{ x })$
$g(x) = (x-1)\ln(x)(x+e^{-x})$

## 1)
 1. montrer que $f(x) \sim x^{\frac{3}{2}}$
$$
\begin{align}
\lim\limits_{ x \to 0 } \frac{f(x)}{x^{\frac{3}{2}}} &= \lim\limits_{ x \to 0 } \frac{x(1+\sqrt{ x })}{\sqrt{ x }^{3}} \\
&= \lim\limits_{ x \to 0 } \frac{1+\sqrt{ x }}{\sqrt{ x }} \\
&= \lim\limits_{ x \to 0 } \frac{1}{\sqrt{ x }}+1 \\
&= 1
\end{align}
$$
Donc on à bien $f(x) \sim x^{\frac{3}{2}}$
