up:: [[variable aléatoire continue]]
title:: "[[dérivation|dérivée]] de la [[probabilités variable aléatoire fonction de répartition|fonction de répartition]]"
#maths/probabilités 

---

> [!definition] Fonction de densité de probabilités
> Soit $X$ une [[variable aléatoire continue]]
> Soit $F$ la [[probabilités variable aléatoire fonction de répartition|fonction de répartition]] de $X$
> 
> La **densité de probabilités** de $X$ en $x$ est :
> $f(x) = \displaystyle \lim\limits_{ h \to 0 } \Delta(x, x+h) = \lim\limits_{ h \to 0 } \frac{F(x+h) - F(x)}{h} = \boxed{F'(x)}$
>  - la limite d'une [[densité linéaire moyenne de probabilités|densité linéaire moyenne]] sur un intervalle infinitésimal
>  - la [[dérivation|dérivée]] de la [[probabilités variable aléatoire fonction de répartition|fonction de répartition]]
^definition

# Propriétés

 - $f(x) = 0$ dès que $x \notin X(\Omega )$
 - $f(x) \geq 0$ pour tout $x \in X(\Omega)$, car $F$ est croissante (non strictement)
 - $\displaystyle \int_{-\infty}^{+\infty} f(x) \, dx = \lim\limits_{ A \to +\infty } F(A) - \lim\limits_{ B \to -\infty } F(B) = 1 - 0 = 1$
     - la probabilité totale est $1$
 - $\displaystyle \int_{-\infty }^{x}  f(x) \, dx = P(X \leq x) = F(x)$
 - $\displaystyle \int_{a}^{b} f(x) \, dx = P(a \leq X \leq b) = F(b) - F(a)$


