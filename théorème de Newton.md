---
alias: "algorithme de Newton"
---
up::[[MOC analyse|analyse]]
#maths/analyse 
author::[[Isaac Newton]]
# théorème de Newton

> [!definition] Théorème de Newton
> Soit $f$ une fonction de $\mathbb{R}^{+}$ dans $\mathbb{R}^{+}$, de [[classe d'une fonction|classe]] $\mathcal{C}^{1}$ 
> Soit $\alpha \in \mathbb{R}$ tel que $f(\alpha) = 0$
> On crée la suite $(x_{n})_{n\in\mathbb{N}}$ telle que :
> $\begin{cases} x_{0}\in\mathbb{R}^{+}\\ x_{n+1} = x_{n} - \frac{f(x_{n})}{f'(x_{n})}\end{cases}$
> 
> On choisit $x_{0}$ voisin de $\alpha$.
> Alors, $(x_{n})$ [[suite convergente|converge]] vers $\alpha$, et la [[suite convergente|convergence]] est [[équation quadratique|quadratique]].
> 
> Remarque : pour trouver $f$, si $\alpha$ est de la forme $\alpha = g(a)$, alors on peut prendre $f = g^{-1}(a) - a$ (on aura donc bien $f(\alpha) = 0$)
^definition

> [!example] Exemple 
> Calcul de $\frac{1}{a}$ à l'aide du [[théorème de Newton]].
> 
> On pose $f(x) = \frac{1}{x} - a$, on a bien $f\left( \frac{1}{a} \right) = 0$
> 
> On obtient $f'(x) = - \frac{1}{x^{2}}$
> 
> $x_{n+1} = x_{n} - \frac{f(x_{n})}{f'(x_{n})}$.
> Si 