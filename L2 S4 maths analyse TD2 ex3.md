# 3
On considère la suite de fonctions $(P_{n})_{n\in \mathbb{N}}$ définie sur $[0, 1]$ par :
$$\begin{cases}
P_0(x) = 0 \\
P_{n+1}(x) = P_{n}(x) + \dfrac{1}{2} \left( x - (P_{n}(x))^{2} \right) 
\end{cases}$$

## 1)
> Montrer que pour tout $n \in \mathbb{N}$ et tout $x \in [0, 1]$, on a 
> $$\sqrt{ x } - P_{n+1}(x) = \left( \sqrt{ x } - P_{n}(x) \right) \left( 1 - \frac{\sqrt{ x }+P_{n}(x)}{2} \right) $$

$$\begin{align}
\sqrt{ x } - P_{n+1}(x) &= \sqrt{ x } - P_{n}(x) - \frac{1}{2}\left( x - (P_{n}(x))^{2} \right)  \\
&= \sqrt{ x } - P_{n}(x) - \frac{1}{2}\left( \sqrt{ x }^{2} - (P_{n}(x))^{2} \right)  \\
&= \sqrt{ x }-P_{n}(x) - \frac{1}{2}\left( \sqrt{ x }+P_{n}(x) \right) \left( \sqrt{ x }-P_{n}(x) \right)  \\
&= \left( \sqrt{ x }-P_{n}(x) \right) \left( 1 - \frac{1}{2}\left( \sqrt{ x } + P_{n}(x) \right)  \right)  \\
&= \left( \sqrt{ x }-P_{n}(x) \right) \left( 1 - \frac{\sqrt{ x } + P_{n}(x)}{2} \right) 
\end{align}$$


> En déduire que
> $\forall x \in [0, 1], \forall n \in \mathbb{N}, \quad 0 \leq P_{n}(x) \leq \sqrt{ x }$

On utilise une démonstration par réccurence.

### Initialisation
Soit $\mathscr{F}_{n}: \forall x \in [0, 1], 0 \leq P_{n}(x) \leq \sqrt{ x }$

pour $n = 0$, on a : $\mathscr{F}_{0}: 0 \leq P_0(x) \leq \sqrt{ x } \iff 0 \leq 0 \leq \sqrt{ x }$
ce qui est toujours vrai pour $x \in [0, 1]$. Donc $\mathscr{F}_{0}$ est vraie.

### Hérédité
On cherche a montrer que $\forall n \in \mathbb{N}, \mathscr{F}_{n} \implies \mathscr{F}_{n+1}$. Pour cela, on suppose que $\mathscr{F}_{n}$ est vraie pour un rang $n$. On cherche alors à montrer $\mathscr{F}_{n+1}$ :

$$\begin{align}
\mathscr{F}_{n+1} &: 0 \leq P_{n+1} \leq \sqrt{ x } \\
&: 0 \leq \sqrt{ x } - P_{n+1} \leq \sqrt{ x } \\
&: 0 \leq \left( \sqrt{ x } - P_{n}(x) \right)\left( 1 - \frac{\sqrt{ x } + P_{n}(x)}{2} \right) \leq \sqrt{ x } \\
\end{align}$$
Or, comme on suppose que $\mathcal{F}_{n}$ est vraie, on sait que $0 \leq P_{n} \leq \sqrt{ x }$.
Donc :
$0 \leq \sqrt{ x } - P_{n}(x) \leq \sqrt{ x }$
$\sqrt{ x } \leq \sqrt{ x } + P_{n}(x) \leq 2\sqrt{ x }$
$\displaystyle 1 - \sqrt{ x } \leq 1 - \frac{\sqrt{ x } + P_{n}(x)}{2} \leq 1 - \frac{1}{2}\sqrt{ x }$
Or, $0 \leq 1 - \sqrt{ x }$, et $1 - \frac{1}{2}\sqrt{ x } \leq 1$ car $x \in [0, 1]$
Donc, on a bien $0 \leq \left( \sqrt{ x }-P_{n}(x) \right) \left( 1 - \dfrac{\sqrt{ x }+P_{n}(x)}{2} \right) \leq 1$
Et donc, 

### Conclusion


