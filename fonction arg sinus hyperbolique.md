---
alias: ["argsh", "arg sinus hyperbolique"]
---
up::[[fonction sinus hyperbolique]]
sibling::[[fonction arg cosinus hyperbolique|argch]]
properties::[[bijection|bijective]]
derivative::$\dfrac{1}{\sqrt{1+x^{2}}}$
description::"$\mathbb{R} \to \mathbb{R}$", "$x \mapsto \ln\left(x+ \sqrt{1+x^{2}}\right)$"
title::$\arg \mathrm{sh}$
#maths/analyse #maths/trigonométrie #review 
# fonction arg sinus hyperbolique
fonction [[réciproque]] du [[fonction sinus hyperbolique|sinus hyperbolique]]

$\begin{align*} \arg\mathrm{sh} : \quad & \mathbb{R} \rightarrow \mathbb{R} \\ & y \mapsto x \text{ tel que } y = \mathrm{sh}(x) \\ & x \mapsto \ln\left(x+\sqrt{1+x^{2}}\right)\end{align*}$

**Note :** $\mathrm{sh}'$ ne s'annulle jamais, donc $\arg \mathrm{sh}$ existe sur $\mathbb{R}$

```desmos-graph
x = \sinh(y)
```

## Propriétés

 - $\arg\mathrm{sh}$ est [[fonction dérivable|dérivable]] sur $\mathbb{R}$
     - $(\arg\mathrm{sh})'(x) = \dfrac{1}{\sqrt{1+x^{2}}}$


[[démonstration de l'expression de l'arg sinus hyperbolique|démonstration]] de $\arg\mathrm{sh} x = \ln \left( x+ \sqrt{1+x^{2}} \right)$


