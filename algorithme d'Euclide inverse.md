up::[[pgcd]]
sibling:: [[algorithme d'euclide]] 
title:: "pour trouver des [[coefficients de Bézout]]"
#maths/arithmétique 

---

Soit l'équation $13x + 9y = 108$
 - l'équation est déjà simplifiée

On calcule $\mathrm{pgcd}(13; 9)$ avec l'[[algorithme d'euclide]] :
$\color{orange}13 = 1\times 9 + 4$
$\color{green}9 = 2 \times 4 + 1$
$4 = 4 \times 1 + 0$ --> Donc $pgcd(13; 9) = 1$

On cherche à trouver une solution particulière à l'équation.
Pour cela, on part de l'avant dernière ligne de l'[[algorithme d'euclide]] :
$9 = 2\times 4 + \underbrace{1}_{\text{reste}}$
On sait que le reste divise 108 (car si $\mathrm{pgcd}(a, b) \not\mid c$, $ax+by=c$ n'a aucune solution)
On pose :
$1 = 9 - 2\times 4$ (car on à vu que $\color{green}9=2\times 4+1$)
$108 = 108\times 9 - 2\times 108 \times 4$
on remplace $4$ par $13 - 9$ (car on à vu que $\color{orange}13 = 1\times 9 + 4$)
$108 = 108 \times 9 - 216 \times (13 - 9)$
on regroupe les termes multiples de $13$ et de $9$ (nos coefficients) 
$108 = -216\times 13 + 324\times 9$
on remplace $108$ par $13x + 9y$ (car on veut $13x+9y = 108$)
$13x + 9y = -216\times 13 + 324\times 9$
on regrouppe les facteurs de $13$ et de $9$ :
$13(x+216) = 9(324 - y)$
On a donc $13(x+216) \mid 9(324 - y) \implies 13 \mid 9(324 - y)$
Puisque $13$ et 9 sont premiers entre eux, on a $13\mid 324-y$
donc :
$\exists k \in \mathbb{Z}, 324 - y = 13k$
$y = -13k + 324$
Ensuite, puisque $13(x+216) = 9(324 - y)$, on peut trouver $x$ :
$13(x+216) = 9 \times 13k$
$x+216 = 9k$ (on simplifie par $13$)
$x = 9k - 216$
Donc, les solutions sont de la forme :
$\begin{cases}x = 9k - 216\\ y = -13k + 324\end{cases}$
les solutions sont :
$S = \{ (9k - 216; -13k+324) \mid k \in \mathbb{Z} \}$

