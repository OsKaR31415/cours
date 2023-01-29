up:: [[forme bilinéaire]]
title:: "$b$ une [[forme bilinéaire]] de [[matrice d'une forme bilinéaire|matrice]] $[b]_{\mathcal{O}}$ dans la base $\mathcal{O}$", "$[b]_{\mathcal{P}} = \,^T[\mathcal{P}]_{\mathcal{O}}^{-1} \times [b]_{\mathcal{O}} \times [\mathcal{P}]_{\mathcal{O}}^{-1}$"
#maths/algèbre 

---

> [!definition] changement de base d'une forme bilinéaire
> Soient $\mathcal{B}$ et $\mathcal{C}$ deux [[base d'un espace vectoriel|bases]] d'un même [[espace vectoriel]]
> Soit $b$ une [[forme bilinéaire]].
> Soit $M$ la [[matrice d'une forme bilinéaire|matrice associée]] à $b$ dans la [[base d'un espace vectoriel|base]] $\mathcal{B}$ (on peut noter $M = [b]_{\mathcal{B}}$)
> 
> On sait que la matrice de $b$ dans la base $\mathcal{C}$ est :
> 
> $\boxed{[b]_{\mathcal{C}} = \,^T[\mathcal{C}]_{\mathcal{B}}^{-1} \times M \times [\mathcal{C}]_{\mathcal{B}}^{-1}}$


# Démonstration
Soient $\mathcal{B}$ et $\mathcal{C}$ deux [[base d'un espace vectoriel|bases]] d'un même [[espace vectoriel]]
Soit $b$ une [[forme bilinéaire]].
Soient $X$ et $Y$ des vecteurs exprimés dans $\mathcal{B}$
Soient $X'$ et $Y'$ des vecteurs exprimés dans $\mathcal{C}$ qui correspondent à $X$ et $Y$

On sait que $b(X, Y) = \,^TX\times[b]_{\mathcal{B}} \times Y$

On sait que $X' = [\mathcal{C}]_{\mathcal{B}}X$
De même pour $Y' = [\mathcal{C}]_{\mathcal{B}}$$
On note que : $\,^TX' = \,^T\left( [\mathcal{C}]_{\mathcal{B}} X \right) = \,^TX\times \,^T[\mathcal{C}]_{\mathcal{B}}$ (la [[transposée]] inverse la multiplication)

Alors :
$$
\begin{align}
b(X',Y') &= \,^TX' \times [b]_{\mathcal{C}} \times Y' \\
&= \,^T([\mathcal{C}]_{\mathcal{B}}X) \times [b]_{\mathcal{C}} \times ([\mathcal{C}]_{\mathcal{B}}Y) \\
&= \,^TX\times \,^T[\mathcal{C}]_{B} \times [b]_{\mathcal{C}} \times [\mathcal{C}]_{\mathcal{B}} \times Y \\
\end{align}
$$
Comme $b(X', Y') = b(X, Y)$
On a :
$\,^T[\mathcal{C}]_{\mathcal{B}}\times[b]_{\mathcal{C}}\times[\mathcal{C}]_{\mathcal{B}} = [b]_{\mathcal{B}}$
Et, on en déduit aussi $\boxed{[b]_{\mathcal{C}} = \,^T[\mathcal{C}]_{\mathcal{B}}^{-1} \times [b]_{\mathcal{B}} \times [\mathcal{C}]_{\mathcal{B}}^{-1}}$

$X' = [\mathcal{C}]_{\mathcal{B}}X$
$X = [\mathcal{C}]_{B}^{-1}X'$


![[changement de base d'une forme bilinéaire 2023-01-27 15.21.07.excalidraw|100%]]


