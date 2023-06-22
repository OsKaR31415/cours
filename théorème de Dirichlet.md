up:: [[série de Fourier]]
title:: "si $f$ admet une dérivée à droite ($f'(x^{+})$) et à gauche ($f'(x^{-})$), alors $SF_{f}(x) = \dfrac{f(x^{-}) + f(x^{+})}{2}$"
#maths/analyse 

---

> [!definition] théorème de Dirichlet
> Soit $f$ une fonction intégrable sur $I$, et [[dérivable par morceaux]] sur $I$
> Soit $SF_{f}$ la [[série de Fourier]] de $f$.
> On sait que, pour tout $x \in I$
>  - si $f$ est dérivable en $x$, alors $SF_{f}(x) = f(x)$
>  - si $f$ n'est pas dérivable en $x$, alors :
>      - si $f$ admet une dérivée à droite ($f'(x^{+})$) et à gauche ($f'(x^{-})$)
>          - $\boxed{SF_{f}(x) = \frac{f(x^{-}) + f(x^{+})}{2}}$
^definition


> [!definition] Corollaire
> En particulier, si une fonction $f$ est dérivable sur $I$, alors sa [[série de Fourier]] [[suite de fonctions convergente|converge]] toujours vers elle-même :
> $f \text{ dérivable en } x \implies SF_{f}(x) = f(x)$