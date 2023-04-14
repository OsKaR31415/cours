up:: [[indices d'une variable aléatoire]]
title:: "discret : $E(X) = \sum\limits_{i}(x_{i}\cdot p_{i})$", "continu : $E(X) = \int x f(x) \, dx$, où $f(x)$ est la [[fonction de densité de probabilités]]"
#maths/probabilités 

---

> [!definition] Espérance d'une [[variable aléatoire continue]]
> Soit $X$ une [[variable aléatoire continue]]
> Soit $f$ la [[fonction de densité de probabilités]] de $X$
> L'**espérance** de $X$ est :
> $\boxed{E(X) = \int_{\mathbb{R}} x f(x) \, dx}$
>  - [I]  peut être vu comme une généralisation du cas des variables discrettes

> [!definition] Espérance d'une [[variable aléatoire discrette]]
> Soit $X$ une [[variable aléatoire discrette]]
> Soit $f$ la [[fonction de densité de probabilités]] de $X$
> Soit $(x_{i})$ la suite des valeurs prises par $X$
> Soit $(p_{i})$ la suite des $P(X \leq x_{i})$
> L'**espérance** de $X$ est :
> $\boxed{E(X) = \sum\limits_{i}(x_{i} \cdot p_{i})}$
>  - [I]  C'est la somme des $\text{valeur prise} \times \text{probabilité associée}$


# Propriétés
Soient $X$ et $Y$ deux [[variable aléatoire réelle|variables aléatoires]]
Soient $f$ et $g$ leurs [[fonction de densité de probabilités|fonctions de densité de probabilités]] respectives


 - $E( \lambda X + Y) = \lambda  E(X) + E(Y)$ l'espérance est [[application linéaire|linéaire]]

 - Si $X$ et $Y$ sont [[variables aléatoires indépendantes|indépendantes]], alors $E(X \times Y) = E(X) \times E(Y)$
