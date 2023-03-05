up:: [[produit scalaire]] 
sibling:: [[inégalité triangulaire]] 
title:: "$\|u + v\| \leq \|u\| + \|v\|$"
#maths/algèbre 

---

> [!definition] inégalité de Minkowski
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Soit $\|\cdot\|$ une [[norme]] sur $E$
> Quels que soient $u$ et $v$ des vecteurs de $E$
> On a :
> $\boxed{\|u + v\| \leq \|u\| + \|v\|}$
> 
> C'est une définition de l'[[inégalité triangulaire]] sur les normes.
^definition

# Démonstration
![[inégalité triangulaire#Démonstration#$ a+b leq a + b $]]

## Cas d'égalité

$$\begin{align}
\|x+y\| = \|x\| + \|y\| &\iff \|x\|^{2} + 2\langle x, y \rangle + \|y\|^{2} = \|x\|^{2} + 2\cdot\|x\|\cdot\|y\| + \|y\|^{2} \\
&\iff 2\langle x, y \rangle = 2\cdot \|x\|\cdot \| y\| \\
&\iff \langle x, y \rangle = \|x\|\cdot \| y\|\\
\end{align}$$
On obtient une [[inégalité de cauchy schwartz#Cas d'égalité|égalité de Cauchy Schwartz]] sans la valeur absolue.
C'est donc équivalent à avoir $x$ et $y$ [[vecteurs colinéaires|colinéaires]] et **de même sens** (car on a retiré la valeur absolue).