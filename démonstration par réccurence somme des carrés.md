up::[[somme des carrés]]
title::"démonstration de $\sum\limits_{k=1}^{n}k^{2} = \frac{n(n+1)(2n+1)}{6}$"
#maths #demonstration 

---

# Initialisation
On définit la propriété $\mathscr{P}$ 
$\mathscr{P}_{n} : \sum\limits_{k=1}^{n}k^{2} = \frac{n(n+1)(2n+1)}{6}$

$\begin{align}\mathscr{P}_{1} :& 1^{2} = \frac{1 \times 2 \times 3}{6}\\ &1 = 1\end{align}$

Donc, $\mathscr{P}_{1}$ est vraie et $\mathscr{P}$ est initialisée.

# Hérédité
On cherche à montrer que $\forall n \in \mathbb{N}^{*}, \mathscr{P}_{n} \implies \mathscr{P}_{n+1}$

Pour cela, on suppose $\mathscr{P}_{n}$ vraie pour un $n$ fixé.
On cherche alors à montrer $\mathscr{P}_{n+1}$.

$$ \begin{align} \mathscr{P}_{n} &\iff \sum\limits_{k=1}^{n}k^{2} = \frac{n(n+1)(2n+1)}{6} \\
&\iff \sum\limits_{k=1}^{n+1}k^{2} = \frac{n(n+1)(2n+1)}{6} + (n+1)^{2} \\
&\iff \sum\limits_{k=1}^{n+1}k^{2} = \frac{n(n+1)(2n+1)+6(n+1)^{2}}{6} \\
&\iff \sum\limits_{k=1}^{n+1}k^{2} = \frac{(n+1) \left(  n(2n+1)+6(n+1) \right)}{6} \\
&\iff \sum\limits_{k=1}^{n+1}k^{2} = \frac{(N)(2n^{2}+7n+6)}{6} \\
&\iff \sum\limits_{k=1}^{n} k^{2} = 
\end{align}$$

