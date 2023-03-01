---
alias: [ "démonstration" ]
---
up:: [[norme]] 
title:: "$d(a, c) \leq d(a, b) + d(b, c)$", "$\|a+b\| \leq \|a\| + \|b\|$"
#maths/algèbre 

---

> [!definition] inégalité triangulaire
> Soit $(E, \langle \cdot,\cdot\rangle)$ un [[espace préhilbertien]] de norme $\|\cdot\|$
> Soit $d(x, y)$ la [[distance]] associée à cette norme
> On a l'inégalité suivante :
> $\boxed{\forall (a, b, c) \in E^{3},  \quad d(a, c) \leq d(a, b)+d(b, c)}$
> Ou bien, de façon vectorielle :
> $\|a+b\| \leq \|a\| + \|b\|$
>  - [i]  on peut passer de l'une à l'autre avec un changement de variable $b-a\to a$ et $c - b \to a$
^definition

# Démonstration
## $\|a+b\| \leq \|a\| + \|b\|$

On commence par montrer l'inégalité sur les carrés :
$\|a+b\|^{2} \leq (\|a\| + \|b\|)^{2}$

$$\begin{align}
\|a+b\|^{2} &= \|a\|^{2} + \|b\|^{2} + 2\langle a, b \rangle \\
&\leq \|a\|^{2} + \|b\|^{2} + 2\cdot\|a\|\cdot\|b\| && \text{par l'inégalité de Cauchy-Schwarz} \\
&\leq \left( \|a\| + \|b\| \right) ^{2} && \text{identité remarquable}
\end{align}$$
On peut en déduire que :
$\|a+b\| \leq \|a\|+\|b\|$

## $d(a, c) \leq d(a, b) + d(b, c)$

Par définition, $d(x, y) = \|y -x\|$
Donc :
$$ \begin{align}
d(a, c) \leq d(a, b) + d(b, c) &\iff \|c - a\| \leq \|b - a\| + \|c - b\| \\
&\iff \|(c - b) + (b - a) \| \leq \|b - a\| + \|c - b\| \\
&\iff \|A+B\| \leq \|A\| + \|B\| && \text{changement de variables :} \begin{cases} A = b -a\\ B = c - b \end{cases}
\end{align} $$
On a déjà démontré que $\|A+B\|\leq \|A\|+\|B\|$ est toujours vraie, donc l'inégalité triangulaire est vraie.
