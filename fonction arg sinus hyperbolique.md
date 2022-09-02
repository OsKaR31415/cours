---
alias: ["argsh", "arg sinus hyperbolique"]
---
up::[[fonction sinus hyperbolique]]
sibling::[[fonction arg cosinus hyperbolique]]
#maths/analyse #maths/trigonométrie #review 
# fonction arg sinus hyperbolique
fonction [[réciproque]] du [[fonction sinus hyperbolique|sinus hyperbolique]]

$\begin{align*} \arg\sh : \quad & \R \rightarrow \R \\ & y \mapsto x \text{ tel que } y = \sh(x) \\ & x \mapsto \ln\left(x+\sqrt{1+x^{2}}\right)\end{align*}$

**Note :** $\sh'$ ne s'annulle jamais, donc $\arg \sh$ existe sur $\R$

```desmos-graph
x = \sinh(y)
```

## Propriétés

 - $\arg\sh$ est [[fonction dérivable|dérivable]] sur $\R$
     - $(\arg\sh)'(x) = \dfrac{1}{\sqrt{1+x^{2}}}$


[[démonstration de l'expression de l'arg sinus hyperbolique|démonstration]] de $\arg\sh x = \ln \left( x+ \sqrt{1+x^{2}} \right)$


