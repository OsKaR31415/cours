up:: [[série de fonctions]]
author:: [[Joseph Fourier]]
title::
#maths/analyse 

---

> [!definition] Série de Fourier
> Soit $f$ une [[fonction continue par morceaux]] de [[fonction périodique|période]] $2\pi$
> On pose :
> $\displaystyle a_{n} = \frac{1}{\pi} \int_{-\pi }^{\pi } f(x) \cos(nx) \, dx$
> $\displaystyle b_{n} = \frac{1}{\pi } \int _{-\pi }^{\pi } f(x)\sin(nx) \, dx$
> Soit, la [[série trigonométrique]] :
> 
> $\boxed{F(x) =\frac{a_{0}}{2} + \sum\limits_{n \geq 1} a_{n}\cos(nx) + b_{n}\sin(nx)}$
> 
> On sait que, si $F$ [[série de fonctions convergence|converge]], alors elle converge vers $f$
> 
>  - $(a_{n})$ et $(b_{n})$ sont appelés les [[coefficients de fourier]] de $f$
^definition

> [!idea]- Pourquoi cette formule
> $(a_{n})$ et $(b_{n})$ servent à décomposer $f$ en [[série trigonométrique]].
> 
> Le coefficient devant les intégrales sert à les ramener à une période de 1 (c'est une sorte de moyenne sur la période). Il n'est pas de $2\pi$ car la [[Formules d'Euler|formule d'Euler]] pour le [[fonction cosinus|cosinus]] contient déjà une division par 2.
>  - [!]  Il ne faut pas oublier de diviser par 2 le premier terme, $a_0$, car il ne contient pas de $\cos $
>

> [!idea]- Intuition
> On peut voir la transformée de Fourier comme l'écriture d'une fonction dans une base $\cos(x), \sin(x), \cos(2x), \sin(2x), \cos(3x)\dots$.
> 
> C'est similaire à l'écriture d'une fonction comme une [[série entière]] (dans ce cas, c'est dans une base $x, x^{2}, x^{3}, x^{4}\dots$)

> [!definition] Forme exponentielle complexe
> On peut aussi exprimer la décomposition $F(x)$ avec une somme comme suit :
> 
> $\boxed{F(x) = \sum\limits_{n=-\infty }^{+\infty} \alpha _{n}e^{ inx }}$
> 


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```