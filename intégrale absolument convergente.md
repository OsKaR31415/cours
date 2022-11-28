---
alias: [ "absolument convergente", "convergence absolue" ]
---
up:: [[intégration généralisée]] 
title:: "$\displaystyle \int_{a}^{b} f(x) \, dx$ est absolument convergente ssi $\displaystyle \int_{a}^{b} |f(x)| \, dx$"
#maths/analyse 

---

> [!definition] Absolue convergence
> Soit $f$ une fonction définie sur $]a, b[$
> On dit que l'intégrale de $f$ est *absolument convergente* ssi l'intégrale de $|f|$ est convergente.
> Donc :
> $\displaystyle \int_{a}^{b} f(x) \, dx \text{ est absolument convergente} \iff \int_{a}^{b} |f(x)| \, dx \text{ converge}$
^definition

# Propriétés

> [!definition] Convergence sur $[a;+\infty[$
> Soit $f \in C^{0}_{pm}([a; +\infty[)$
> Si $\displaystyle\int_{a}^{+\infty} f(x) \, dx$ est absolument convergente, alors elle est convergente.
> On a alors :
> $\displaystyle\left| \int_{a}^{+\infty} f(x) \, dx \right| \leq \int_{a}^{+\infty} |f(x)| \, dx$
> 
> [[démonstration convergence sur a;+oo d'une intégrale absolument convergene|démonstration]]
^convergence-sur-a-infini


# Remarques

 - Si $f$ est [[fonction continue par morceaux|continue par morceaux]], alors $|f|$ l'est aussi, ce qui justifie que l'on puisse toujours effectivement intégrer $|f|$ quand $f$ est intégrable