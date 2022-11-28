---
alias: [ "convergence sur [a;+∞[ d'une intégrale absolument convergente" ]
---
up:: [[intégrale absolument convergente]] 
title:: "démonstration que $\displaystyle \int_{a}^{+\infty} |f(x)| \, dx \text{ CV.} \implies \int_{a}^{+\infty} f(x) \, dx \text{ CV.}$"
#maths/analyse 

---

# Théorème 

![[intégrale absolument convergente#^convergence-sur-a-infini]]


# Démonstration
Soit $f \in C^0_{pm}([a; +\infty[)$, telle que $\int_{a}^{+\infty} f(x) \, dx$ est absolument convergente

On considère :
 - $f^{+}(t) = \max(0, f(t))$ (partie positive de $f$)
 - $f^{-}(t) = \min(0, -f(t))$ (partie négative de $f$)
On a :
 - $f = f^{+} - f^{-}$
 - $f^{+} \in C^0_{pm}([a; +\infty[)$
 - $f^{-} \in C^0_{pm}([a; +\infty[)$
Or, on sait que :
 - $0 \leq f^{+}(x) \leq |f|(x)$
 - $0 \leq f^{-}(x) \leq |f|(x)$
Donc, puisque l'intégrale de $f$ est [[intégrale absolument convergente|absolument convergente]], l'intégrale de $|f|$ est convergente.
Alors, par [[convergence d'intégrales de fonctions comparées|intégrales de fonctions comparées]], on sait que les intégrales de $f^{+}$ et $f^{-}$ convergent.

