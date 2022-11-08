up:: [[intégrale de Riemann]]
title:: "Comment calculer des sommes de Riemann"
#maths/analyse 

---

# Forme des sommes de Riemann
Une somme de Riemann associée à la fonction $f$ et à la [[Subdivision d'un intervalle|subdivision]] $(s_{0}, \dots, s_{n})$ de $[a, b]$ est une somme de la forme :
$S(f) = \sum\limits_{k=0}^{m-1}f(\sigma_{k})(s_{k+1} - s_{k})$
où $\sigma _{k} \in [s_{k}, s_{k+1}]$ pour $k \in [\![0; m[\![$
$S(f)$ est l'intégrale de la fonction en escalier adaptée à $s$ et qui suit les valeurs de $f$
Donc, quand $n \to +\infty$, $S(f) \to \int_{0}^{1} f(x) \, dx$

## Trouver la valeur d'une somme grâce aux somme de Riemann
Si on a une somme quelconque, on peut chercher à la transformer en somme de Riemann.
Pour cela, on commence par la factoriser par le pas de la subdivision (souvent $\frac{1}{n}$, $\frac{b-a}{n}$ si l'intégrale est sur $[a, b]$).
Ensuite, on cherche à exprimer l'intérieur de la somme comme une fonction de $\frac{k}{n}$ (où $k$ est la variable de somme)

> [!example] Exemple 
> $\displaystyle S = \sum\limits_{k=1}^{n} \frac{n}{n^{2}+k^{2}}$
> on factorise par $\frac{1}{n}$ :
> $\displaystyle S = \frac{1}{n} \sum\limits_{k=1}^{n} \frac{n^{2}}{n^{2}+k^{2}}$ (factorisation forcée)
> on cherche ensuite à exprimer $\frac{n^{2}}{n^{2}+k^{2}}$ comme une fonction de $\frac{k}{n}$ :
> $\displaystyle S = \frac{1}{n} \sum\limits_{k=1}^{n} \frac{1}{1+\frac{k^{2}}{n^{2}}}$
> donc : 
> $\displaystyle S = \frac{1}{n} \sum\limits_{k=1}^{n} f\left( \frac{k}{n} \right)$ où $f(x) = \frac{1}{1+x^{2}}$
> Alors, on en déduit :
> $\displaystyle \lim\limits_{ n \to \infty }S = \int_{0}^{1} f(x) \, dx = \int_{0}^{1} \frac{1}{1+x^{2}} \, dx = \left[ \arctan(x) \right]_{0}^{1} = \arctan(1)$

