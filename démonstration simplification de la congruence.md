up:: [[congruence]] 
title:: "démonstrations sur les simplifications possibles avec la congruence"
#démonstration 

---

# Simplification totale

> $ka \equiv kb [kn] \iff a \equiv b[n]$

$$
\begin{align}
ka \equiv kb [kn] &\iff kn \mid ka - kb  \\
&\iff \exists i \in \mathbb{Z}, ka - kb = ikn \\
&\iff \exists i \in \mathbb{Z}, a - b = in  \\
&\iff n|a-b  \\
&\iff a \equiv b [n]
\end{align}
$$
# Simplification partielle (sans le modulo)

> $ka \equiv kb [n] \iff a \equiv b [n]$ si $\text{pgcd}(k, n) = 1$

On suppose que $\mathrm{pgcd}(k, n) = 1$
Alors :
$$
\begin{align}
ka \equiv kb [n] &\iff n \mid ka - kb  \\
% &\iff \exists i\in\mathbb{Z}, ka - kb = in  \\
&\iff n \mid k(a-b)  \\
&\iff n | a-b & \text{car } n \text{ et } k \text{ sont premiers entre eux, et donc n'ont aucun diviseur commun}  \\ \\
&\iff a \equiv b [n]
\end{align}
$$


