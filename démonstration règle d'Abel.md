up:: [[règle d'Abel]] 
title::
#maths/analyse #démonstration 

---

![[règle d'Abel#^definition]]

On cherche à démontrer la règle d'Abel pour l'intégrale $\displaystyle\int_{a}^{+\infty} f(t)g(t) \, dt$

Par IPP, on sait que : 
$\displaystyle\int_{a}^{x} f(t)g(t) \, dt = \left[ f(t)G(t) \right]_{a}^{x} - \int_{a}^{x} f'(t)g(t) \, dt = f(x)G(x) - f(a)G(a) - \int_{a}^{+\infty} f'(t)G(t) \, dt$

Quand $x \to +\infty$, on a: 
 - $f(x)G(x) \to 0$ car $G$ est bornée et $\lim\limits_{ x \to +\infty } f(x) = 0$
 - $f(a)G(a)$ est constant (ne dépend pas de $x$)
Donc, la convergence de l'intégrale 
Montrons l'absolue convergence de $\displaystyle \int_{a}^{+\infty} f'(t)G(t) \, dt$ :
On sait que :
 - $f'$ est négative car $f$ est décroissante 
 - $\exists M \in \mathbb{R}, \quad \forall x \in [a; +\infty[, \quad |G(x)| \leq M$ (Il existe un $M$ tel que $G$ est majoré par $M$ et minoré par $-M$)
On en déduit que :
$\displaystyle\int_{a}^{x} \left| f'(t)G(t) \right| \, dt \leq -M \int_{a}^{x} f'(t) \, dt = -M \left( f(x) - f(a) \right)$
Or, puisque $\lim\limits_{ x \to +\infty }f(x) = 0$, on sait que $\lim\limits_{ x \to +\infty } \big(-M(f(x) - f(a))\big) = Mf(a)$
Donc : 
$\displaystyle\lim\limits_{ x \to +\infty } \int_{a}^{x} |f'(t)G(t)| \, dt \leq 0$ 
On en déduit que $f'G = O_{+\infty}(-f')$
Donc l'intégrale de $f'G$ à la même convergence que celle de $-f'$
Or, $\lim\limits_{ x \to +\infty }f(x) = 0$, donc $\displaystyle\int_{a}^{+\infty} f'(x) \, dx$ converge.
Alors, on peut déduire que $\displaystyle\int_{a}^{+\infty} f'(t)G(t) \, dt$ est absolument convergente. $\text{CQFD.}$

