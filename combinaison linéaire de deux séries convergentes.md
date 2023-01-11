up:: [[convergence d'une série numérique]] 
title:: "Si $\sum\limits u_{n}$ et $\sum\limits v_{n}$ convergent", "alors $\sum\limits (\lambda u_{n} + v_{n})$ converge"
#maths/analyse 

---

> [!definition] Convergence de la combinaison linéaire de deux séries convergentes
> Soient $(u_{n})$ et $(v_{n})$ deux suites
> Si $\sum\limits u_{n}$ et $\sum\limits v_{n}$ [[convergence d'une série numérique|convergent]], alors 
> $\forall \lambda \in \mathbb{C}, \quad \sum\limits \left( \lambda u_{n} + v_{n} \right)$ converge 
^definition

# Démonstration

Soient $S_{n}$ et $T_{n}$ les [[somme partielle d'une suite|sommes partielles]] respectives de $u$ et $v$
Alors, la somme partielle d'ordre $n$ de $\sum\limits \lambda  u_{n} + v_{n}$ est $\lambda S_{n} + T_{n}$
Comme $S$ et $T$ convergent, alors $\lambda S_{n} + T_{n}$ converge vers $\lambda \sum\limits (u_{n}) + \sum\limits (v_{n})$

