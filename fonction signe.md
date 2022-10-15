up::[[MOC fonctions]]
#maths/analyse #no-review 

----
La _fonction signe_, notée $\sgn$ ou $\sg$, est une [[fonction]] qui extrait le signe d'un nombre réel.

$$\sgn(x) = \left\{\begin{array}{lr}
-1 & \text{si } x < 0\\
0  & \text{si } x = 0\\
1  & \text{si } x > 0
\end{array}\right.$$

```desmos-graph
y = -1 | x < 0 | blue
(0, 0) | blue
y = 1  | x > 0 | blue
```

# Autres définitions
$$\sgn(x) = \left\{\begin{array}{ll}
0 & \text{si } x = 0\\
\dfrac{|x|}{x} \text{ ou } \dfrac{x}{|x|} & \text{si } x \neq 0
\end{array}
\right.$$

# Propriétés

Tout nombre réel peut être exprimé comme le produit de sa [[valeur absolue]] et de son signe :
$\forall x\in\mathbb{R}, x = \sgn(x)|x|$


La fonction signe peut être liée à la [[fonction de Heaviside]] :
$\forall x\in\mathbb{R}, \sgn(x) = 2H(x) - 1$

## Primitive
La fonction signe peut être vue comme la [[dérivation|dérivée]] en tout réel différent de $0$ de la fonction [[valeur absolue]] :
$\forall x\in\mathbb{R}^*, \dfrac{\d|x|}{\d x} = \sgn(x)$


