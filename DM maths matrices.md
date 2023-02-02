---
difficulty: 6
due: 2023-02-03
---
title::
link:: [[L2_info_matrices_ex_0.pdf]]
#devoir

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
X^{3}
\end{array}
$$

# Exercice 0.10


# Réglages

A rendre pour le
```meta-bind
INPUT[date:due]
```

Difficulté :
```meta-bind
INPUT[slider(minValue(0), maxValue(10)):difficulty]
```
