---
difficulty: 6
due: 2023-02-03
---
up:: [[devoirs]]
title::
link:: [[L2_info_matrices_ex_0.pdf]]
#devoir-fait

---

# Exercice 0.9

## 1.
 1. Donner les racines réelles des polynômes suivants et les factoriser :
$P(X) = X^{2}+X-6$
$Q(X) = X^{2}-8X+16$
$R(X)=X^{2}+2X+2$

### Racines de $P$
$P(X) = X^{2}+X-6$

Une racine évidente de $P(X)$ est $2$ : $P(2) = 2^{2}+2-6 = 0$.

On fait la division de polynômes :

$$
\begin{array}{ccc|l}
X^{2} &+ X &- 6 & X-2 \\
\hline
-(X^{2} &- 2X)&&X + 3\\
&3X&-6& \\
&-(3X&-6)& \\
&&0
\end{array}
$$
Donc, $P(X) = (X-2)(3X-6) = 3(X-2)(X-3)$, et donc les racines de $P$ sont $2$ et $3$.

### Racines de $Q$
$Q(X) = X^{2}-8X+16$

$\Delta = 8^{2}-4\times 16 = 0$, donc $Q$ admet une seule racine.

On remarque que $4$ est une racine évidente, $Q(4)=0$. Comme $\Delta = 0$, on sait que $4$ est une racine de multiplicité $2$.

### Racines de $R$
$R(X)=X^{2}+2X+2$

$\Delta = 2^{2}-4\times 2 = -4 < 0$, donc $R$ n'admet aucune racine réelle.



## 2.
 2. Factoriser le polynôme

$P(X) = X^{4}-2X^{3}+X = X(X^{3}-2X^{2}+1)$

On voit qu'une racine évidente de $P$ est $1$, car $(1)^{3}-2(1)^{2}+1 =0$. Donc, $X^{3}-2X^{2}+1$ est divisible par $X-1$

$$
\begin{array}{cccc|l}
X^{3} & -2X^{2} & & +1 & X-1 \\
\hline
-(X^{3}&-X^{2})&&&X^{2}-X-1 \\
&-X^{2}&&+1 \\
&-(-X^{2}&+X)&& \\
&&-X&+1& \\
&&-(-X&+1)& \\
&&&0
\end{array}
$$

Donc, $P(X) = X(X-1)(X^{2}-X-1)$

On cherche à factoriser $X^{2}-X-1$

$\Delta = 1^{2} - 4\times 1\times (-1) = 5$

Donc : $X^{2} - X - 1 = \left( X - \frac{1-\sqrt{ 5 }}{2} \right) \left( X - \frac{1+\sqrt{ 5 }}{2} \right)$

Si on note $\varphi = \frac{1+\sqrt{ 5 }}{2}$ et $\varphi' = \frac{1-\sqrt{ 5 }}{2}$, on obtient :

$\boxed{P(X) = X(X - 1)(X - \varphi)(X-\varphi')}$

## 2.

On considère le polynôme $P(X) = X^5 − X^4 − X^3 − X^2 + 4X − 2$.
Montrer que 1 est racine triple de P. En déduire une factorisation de P.

### $1$ est racine triple de $P$

$P(1) = (1)^{5} - (1)^{4} - (1)^{3} - (1)^{2}+4(1) - 2 = -2 + 4 - 2 = 0$, donc $1$ est racine de $P$

$P'(X) = 5X^{4} - 4X^{3} - 3X^{2}-2X+4$
$P'(1) = 5 - 4 - 3 - 2 + 4 = 0$, donc $1$ est au moins racine double de $P$

$P''(X) = 20X^{3} - 12X^{2} - 5X - 2$
$P''(1) = 20 - 12 - 6 - 2 = 0$, donc $1$ est au moins racine triple de $P$

$P^{(3)}(X) = 60X^{2} - 24X - 5$
$P^{(3)}(1) = 60 - 24 - 5 = 31 \neq 0$, donc $1$ n'est pas racine de multiplicité $4$.

$1$ est bien une racine de multiplicité $3$ de $P$. On en déduit que $P$ est divisible par $(X-1)^{3} = X^{3} - 3X^{2} + 3X - 1$

$$
\begin{array}{cccccc|l}
X^{5}&-X^{4}&-X^{3}&-X^{2}&+4X&-2 & X^{3} - 3X^{2} + 3X - 1 \\
\hline
-(X^{5}&-3X^{4}&+3X^{3}&-X^{2})&&&X^{2} + 2X + 2\\
&2X^{4}&-4X^{3}&&+4X&-2& \\
&-(2X^{4}&-6X^{3}&+6X^{2}&-2X) & \\
&&2X^{3}&-6X^{2}&+6X&-2 \\
&&-(2X^{3}&-6X^{2}&+6X&-2)& \\
&&&&&0
\end{array}
$$

Donc, $P(x) = (X - 1)^{3}(X^{2}+3X+2)$

On cherche à factoriser $X^{2}+3X+2$

$\Delta = 3^{2}-4\times 2 = 1 > 0$, donc :

$X^{2} + 3X + 2 = \left( X - \frac{-3-\sqrt{ 1 }}{2} \right)\left( X - \frac{-3+\sqrt{ 1 }}{2} \right) = (X + 2)(X + 1)$

Donc, on a :

$\boxed{P(X) = (X-1)^{3}(X+1)(X+2)}$

# Exercice 0.10

Soit $f$ l'application linéaire de $\mathbb{R}^{3} \to \mathbb{R}^{3}$ définie par :

$f(x_1; x_2; x_3) = (x_1-x_3; 2x_1+x_2-3x_3; -x_2-2x_3)$

$f\left(\begin{pmatrix}x_1\\x_2\\x_3\end{pmatrix}\right) = \begin{pmatrix}x_1-x_3\\2x_1+x_2-3x_3\\-x_2-2x_3\end{pmatrix}$


Soit $(e_1; e_2; e_3)$ la base canonique de $\mathbb{R}^{3}$.

## 1.
 1. calculer $f(e_1)$, $f(e_2)$ et $f(e_3)$

$f(e_1) = (1 - 0; 2 + 0 - 0; -0-0) = (1; 2; 0)$

$f(e_2) = (0; 1; -1)$

$f(e_3) = (-1; -3; -2)$

On sait alors que la représentation matricielle de $f$ dans la base canonique est :

$[f]_{(e_1; e_2; e_3)} = (f(e_1), f(e_2), f(e_3)) = \begin{pmatrix}1&0&-1\\ 2&1&-3\\ 0&-1&-2\end{pmatrix}$



# Réglages

A rendre pour le
```meta-bind
INPUT[date:due]
```

Difficulté :
```meta-bind
INPUT[slider(minValue(0), maxValue(10)):difficulty]
```
