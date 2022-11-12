---
alias: "inverse"
---
up::[[matrice]]
title::"$M^{-1}$ telle que $M^{-1}\times M=  M \times M^{-1} = \mathrm{Id}$"
#maths/algèbre #review 

----
Soit $M$ une [[matrice]]. On note $M^{-1}$ la matrice _inverse_ de $M$, si elle existe, la matrice telle que $M\times M^{-1} = M^{-1}\times M = Id$ la [[matrice identité]]


# Matrice inversible
Soit $A$ une matrice, elle est dite _inversible_ si $\exists B, AB=BA=Id$

## Théorème
Soit une matrice $A$ carrée de dimension $n\times n$. La matrice $A$ est _inversible_ ssi pour tout vecteur colonne $Y$ (de taile $n\times 1$), le système $AX=Y$ d'inconnue le vecteur colonne $X$ (de taille $n\times 1$) admet **une et une seule** solution. On a alors $X=A^{-1}Y$

## Théorème
Une matrice est inversible ssi son [[déterminant d'une matrice|déterminant]] est **non nul**
En effet : $A^{-1} = \dfrac1{\det(A)}B$ où $B$ est une matrice avec les mêmes coefficients que $A$ (cf. Théorème suivant).

## Théorème
Soit $A$ une matrice inversible, $A^{-1} = \dfrac1{\det(A)}\text{comat}(A)^T$
Soit : $A^{-1}=\dfrac{\text{comat}(A)^T}{\det(A)}$
Où $\text{comat}(A)$ est la [[comatrice]] de $A$
> L'inverse d'une matrice est la transposée de sa comatrice, divisée par son déterminant.

### Pour des matrices de taille $2\times 2$
Soit $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$, $\det(A) = ad-bc$, et on a : $A^{-1} = \dfrac1{ad-bc}\begin{pmatrix}d&-b\\-c&a\end{pmatrix}$


# Propriétés
 - Pour qu'une matrice soit _inversible_, elle doit être carrée
     - Soit $M$ et $M^{-1}$, la propriété est que $M\times M^{-1}=M^{-1}\times M=Id$, ont doit pouvoir multiplier $M$ et $M^{-1}$ dans les deux sens, elles doivent donc être carrées
 - Pour qu'une matrice soit _inversible_, il faut et suffit que sont [[déterminant d'une matrice|déterminant]] soit non nul
 - $(AB)^{-1} = B^{-1}A^{-1}$
     - ![[inverse d'une matrice 2022-11-09 20.33.24.excalidraw]]

# Exemple
$A = \begin{pmatrix}1&2\\0&3\end{pmatrix}$
A Est inversible ssi il existe $A^{-1}$ telle que $A\times A^{-1}=Id_2$
On pose $A^{-1} = \begin{pmatrix}a&b\\c&d\end{pmatrix}$
$$\begin{align}
A\times A^{-1} = Id_2 &\iff \left\{ \begin{gathered}
                                    a+2c = 1\\
                                    b+2d = 0\\
                                    3c = 0\\
                                    3d = 1
                                    \end{gathered} \right. \\
 &\iff \left\{\begin{gathered}
              a = 1\\
              b = \dfrac{-2}3\\
              c = 0\\
              d = \dfrac13\\
              \end{gathered}\right.\\
 & \iff A^{-1} = \begin{pmatrix}1&\dfrac{-2}3\\0&\dfrac13\end{pmatrix}
\end{align}$$

