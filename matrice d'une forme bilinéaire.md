---
alias: [ "matrice associée à une forme bilinéaire", "matrice associée" ]
---
up:: [[forme bilinéaire|forme bilinéaire]], [[matrice]]
title:: "$M_{i,j} = f(e_{i}, e_{j})$"
#maths/algèbre 

---

> [!definition] matrice d'une forme bilinéaire
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] $n$ muni d'une base $\mathcal{B} = (e_1, e_2, \dots, e_{n})$
> Soit $f$ une [[forme bilinéaire]] de $E^{2} \to \mathbf{K}$
> La **[[matrice]] de $f$ dans la base $\mathcal{B}$** est :
> $M = \begin{pmatrix}f(e_{1}, e_{1}) & f(e_1, e_2) & \cdots & f(e_1, e_{n})\\ f(e_2, e_1)&f(e_2,e_2)&\cdots&f(e_2,e_{n})\\ \vdots&\vdots&&\vdots\\ f(e_{n},e_1)&f(e_{n},e_2)&\cdots&f(e_{n},e_{n})\end{pmatrix}$
> Soit :
> $M_{i,j} = f(e_{i}, e_{j})$
^definition

# Explication

Soit $f$ une [[forme bilinéaire]] de matrice $M$

On a (par définition) :

$f((x_1, x_2, \dots,x_{n}), (y_1,y_2,\dots,y_{n})) = \begin{pmatrix}x_1&x_2&\cdots&x_{n}\\\end{pmatrix} \times M \times \begin{pmatrix}y_1\\ y_2 \\ \vdots \\ y_{n}\end{pmatrix}$

![[matrice d'une forme bilinéaire 2023-01-23 19.58.05.excalidraw|10000]]


