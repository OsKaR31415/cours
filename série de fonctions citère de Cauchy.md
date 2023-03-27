---
alias: [ "critère de Cauchy pour une série de fonctions", "critère de Cauchy", "règle de Cauchy" ]
---
up:: [[série de fonctions convergence]]
title:: "série CVA ssi son reste $R_{N} \leq \text{cste} \times \sum\limits_{n=N+1}^{+\infty} (q^{n})$", "CVA ssi $\underset{n \to \infty}{\lim\sup} \left| \frac{f_{n+1}}{f_{n}} \right| <  1$"
#maths/analyse 

---

> [!definition] critère de Cauchy
> Soit $\displaystyle \sum _{ n = 1 } ^{ + \infty } \left( f _{ n } \left( x \right) \right)$ une série de fonctions.
> Soit $R_{N} = \sum\limits_{n=N}^{+\infty} (f_{n}(x))$ le [[reste d'une série|reste]] de cette série.
> On sait que la série converge seulement si :
> $|R_{N}| \leq \text{cste} \times \sum\limits_{n=N+1}^{+\infty} (q^{n})$ avec $q < 1$
^definition

> [!definition] Critère inverse
> Si $|R_{N}| \geq \text{cste}\times \sum\limits_{n=N+1}^{+\infty} (q^{n})$ avec $q\geq1$
> alors la série de reste $(R_{N})$ **diverge**.


> [!definition] Définition calculatoire
> Soit $(f_{n})_{n}$ une suite de fonctions 
> Soit $L = \underset{n \to \infty}{\lim\sup} |f_{n}|^{\frac{1}{n}}$ (on a $0 \leq L \leq +\infty$)
>  - Si $L < 1$, alors $\sum\limits_{n}f_{n}$ [[série de fonction convergence absolue|CVA]]
>  - Si $L > 1$, alors $\sum\limits_{n}f_{n}$ diverge, car son terme général ne tend pas vers zéro
>  - Si $L = 1$, alors on ne sait rien

