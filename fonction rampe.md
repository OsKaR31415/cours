up::[[MOC fonctions]]
title::"$R(x) = \begin{cases} x \text{ si } x \geq 0,\quad\\ 0 \text{ si } x < 0 \end{cases}$"
#maths/analyse #no-review 

----
La fonction _rampe_ Est la [[fonction]] définie par :
$$\begin{align}
R : & \mathbb{R} \rightarrow \mathbb{R}\\
    & x \mapsto \left\{\begin{array}{cl}
        x & \text{si } x \geq 0\\
        0 & \text{si } x < 0
    \end{array}\right.
\end{align}
$$

```desmos-graph
y=x | x >= 0 | #58F
0   | x <  0 | #58F
```

# Définitions

$R(x) := \dfrac{x+|x|}{2}$ soit la moyenne arithmétique entre $x$ et $|x|$

$R(x):= xH(x)$  soit la [[fonction de Heaviside]] multipliée par l'application identité



# Propriétés

## Dérivée
$R'(x) = H(x)$ sur $\mathbb{R}^*$ (la [[fonction de Heaviside]])

