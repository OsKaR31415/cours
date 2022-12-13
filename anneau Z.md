---
alias: [ "anneau ℤ" ]
---
up::[[MOC arithmétique]], [[anneau]] 
title:: "$(\mathbb{Z}, +, \cdot, \leq)$ est un anneau [[relation d'ordre totale|totalement ordonné]]"
#maths/arithmétique #maths/algèbre 

---

> [!definition] Anneau $\mathbb{Z}$
> $\mathbb{Z}$ muni de $+$, $\cdot$ est un anneau [[relation d'ordre totale|totalement ordonné]] par la relation $\leq$
> On le note $(\mathbb{Z}, +, \cdot, \leq)$
^definition

# Propriétés

 - $\leq$ fonctionne comme une relation d'ordre sur $\mathbb{Z}$
     - $\forall (a, b, c) \in \mathbb{Z}^{3}, \quad a \leq b \implies a+c \leq b+c$
     - $\forall (a, b, c) \in \mathbb{Z}^{3}, ( a\leq b \,\wedge\, c>0) \implies ac \leq bc$
 - La [[valeur absolue]] sur $\mathbb{Z}$ a les propriétés classiques
     - $\forall z \in \mathbb{Z}, \quad |z|\geq 0 \quad \text{ et } \quad |z| = 0 \iff z = 0$
     - $\forall (z, z')\in\mathbb{Z}^{2}, \quad \big| |z| - |z'| \big| \,\leq\, \big| z+z' \big| \,\leq\, |z| + |z'|$
     - $\forall (z, z')\in\mathbb{Z}^{2}, \quad |zz'| = |z| \cdot|z|$

 - La [[division euclidienne]] est définie et son résultat unique sur $\mathbb{Z}$