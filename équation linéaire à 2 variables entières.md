up::[[système linéaire]]
#maths/arithmétique #no-review 

----
Equations de la forme
$$(E) : ax+by = c$$
où $(a, b, c)\in\mathbb{Z}^3$

# Propriétés
 - L'équation $(E)$ possède des solutions $(x, y)\in\mathbb{Z}^2$ **si et seulement si $\mathrm{pgcd}(a,b)|c$**
     - voir : [[pgcd]] et [[divisibilité]]
     - conséquence du [[théorème de Bézout]]
 - Si $\mathrm{pgcd}(a; b)|c$ alors il existe une **infinité** de solutions entières
 - Si il existe des solutions, elles sont **exactement** les couples $(x, y)$ dans $\{(x_0+\alpha k, y_0+\beta k) | k\in\mathbb{Z}\}$ avec $(x_0,y_0,\alpha,\beta)\in\mathbb{Z}^4$

# Trouver des solutions

On utilise l'[[algorithme d'euclide#Algorithme inverse|algorithme d'euclide inverse]] pour trouver des [[coefficients de Bézout]]

