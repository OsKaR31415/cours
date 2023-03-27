up:: [[produit scalaire]], [[norme]] 
title:: "$|\langle u, v\rangle| \leq \|u\|\cdot\|v\|$"
#maths/algèbre 

---

> [!definition] inégalité de cauchy schwartz
> Soit $(E, \varphi)$ un [[espace préhilbertien]] avec un [[produit scalaire]] $\varphi(x, y) = \langle x, y \rangle$
> On a l'inégalité suivante : $|\langle u, v \rangle| \leq \|u\| \cdot \|v\|$
> 
^definition

# Démonstration

Soit un produit scalaire $\langle \cdot,\cdot \rangle$ et $\|\cdot\|$ sa norme associée.
On a :

$$\begin{align}
\|\lambda x + y\| &= \langle \lambda x+y, \lambda x+y \rangle \\
&= \lambda \langle x, \lambda x+y \rangle + \langle y, \lambda x+y \rangle \\
&= \lambda^{2}\langle x, x \rangle + 2\lambda \langle x, y \rangle + \langle y, y \rangle && \text{carré scalaire développé}\\
&= \lambda^{2}\|x\|^{2} + 2\lambda \langle x, y \rangle + \|y\|^{2} && \text{polynôme de degré 2 sur } \lambda \\
&\qquad \begin{array}{rl} \\
    \Delta &=& \left( 2\langle x, y \rangle \right)^{2} - 4\|x\|^{2}\|y\|^{2} \\
      &=& 4 \left(\langle x, y \rangle^{2} - \|x\|^{2}\|y\|^{2} \right)
  \end{array}
\end{align}$$
Or, on sait que $\|\lambda x + y\| \geq 0$, donc on sait que le trinôme de degré 2 est toujours positif.
Alors, $\Delta \leq 0$, et donc on a :

$$\begin{align}
\Delta \leq 0 &\iff 4\left( \langle x, y \rangle^{2} - \|x\|^{2}\cdot\|y\|^{2} \right) \leq 0 \\
&\iff \langle x, y \rangle^{2} - \|x\|^{2}\cdot\|y\|^{2} \leq 0 \\
&\iff \langle x, y \rangle^{2} \leq \|x\|^{2}\cdot\|y\|^{2} \\
&\iff |\langle x, y \rangle | \leq \|x\|\cdot\|y\| \\
\end{align}$$
On a donc bien démontré que $\boxed{|\langle x, y \rangle | \leq \|x\|\cdot\|y\|}$



## Démonstration visuelle en 2D

![[inégalité de cauchy schwartz 2023-01-30 17.04.54.excalidraw|100%]]

# Propriétés

## Cas d'égalité
Quand il y a égalité (quand $|\langle u, v\rangle | = \|u\|\cdot\|v\|$), les vecteurs $u$ et $v$ sont [[vecteurs colinéaires|colinéaires]].


