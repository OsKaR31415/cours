up:: [[intégration généralisée|intégrale impropre]] 
title:: "$m(x) \leq f(x) \leq M(x) \implies \int_{0}^{+\infty} m(x) \, dx \leq \int_{0}^{+\infty} f(x) \, dx \leq \int_{0}^{+\infty} M(x) \, dx$"
#maths/analyse 

---

On peut généraliser la [[intégrales comparées|comparaison d'intégrales]] sur des bornes d'intégrales singulières.

> [!definition] convergence d'intégrales de fonctions comparées
> Soit $f: ]a, b[ \to \overline{\mathbb{R}}$ une fonction minorée par $m$ et majorée par $M$ :
>  - $\forall x \in ]a, b[, m(x) \leq f(x) \leq M(x)$
> Si les intégrales de $m$ et $M$ sur $[a,b]$ convergent
> alors, les intégrales de ces fonctions suivent le même encadrement :
> $\boxed{\int_{a}^{b} m(x) \, dx \leq \int_{a}^{b} f(x) \, dx \leq \int_{a}^{b} M(x) \, dx}$
> 
> **Note :** on peut choisir $a$ et $b$ dans $\overline{\mathbb{R}}$, ce qui est utile pour montrer la convergence d'intégrales généralisées, simplement en encadrant entre deux intégrales connues.
^definition

