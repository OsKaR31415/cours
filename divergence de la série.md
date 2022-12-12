On cherche à connaître la convergence ou divergence de la série $\displaystyle \sum\limits_{n=0}^{+\infty} \left( \frac{4^{n}(n!)^{2}}{(2n)!} \right)$
On pose $u_{n} = \dfrac{4^{n}(n!)^{2}}{(2n)!}$

Alors :

$$
\begin{align}
\frac{u_{n+1}}{u_{n}} &= \frac{4^{n+1}((n+1)!)^{2}(2n)!}{4^{n}(n!)^{2}(2(n+1))!} \\
&= \frac{4(n+1)^{2}}{(2n+1)(2n+2)} \\
&= \frac{2(n+1)}{2n+1} \\
&= \frac{2n+2}{2n+1}
\end{align}
$$
Or, on sait qu $\forall n \in \mathbb{N}, 2n+2 > 2n+1$

Donc, $\displaystyle \forall n \in \mathbb{N}, \frac{2n+2}{2n+1} > 1$ soit $\displaystyle\forall n \in \mathbb{N}, \frac{u_{n+1}}{u_{n}} > 1$

Alors, $u_{n+1} > u_{n}$, et donc, par réccurence, $\forall n \in \mathbb{N}^{*}, u_{n} > u_{0}$

On a donc : $\displaystyle \sum\limits_{k=0}^{n} \Big( u_{k} \Big) > (n+1)u_0$

Or, $u_0 = 1$, donc la série $\displaystyle\sum\limits_{k=0}^{+\infty} \Big( (n+1)u_{0} \Big)$  diverge, et, par comparaison, $\displaystyle\sum\limits_{k=0}^{+\infty} \Big( u_{k} \Big)$ diverge.

CQFD.
