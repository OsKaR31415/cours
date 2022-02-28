# déterminant d'une matrice

Soit $A$ une [[matrice]].

On note $\det(A)$ le _déterminant_ d'une matrice.

## Matrices de taille 2
Soit $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$
$\det A = ad - bc$

## Matrices de taille 3

### Méthode de Sarrus

$$\begin{align}
\det A &= \left|\begin{array}{cc}
                 a_{11}&a_{12}&a_{13}\\ 
                 a_{21}&a_{22}&a_{23}\\
                 a_{31}&a_{32}&a_{33}
                 \end{array}\right|\\
&= a_{11}a_{22}a_{33} + a_{12}a_{23}a_{34} + a_{13}a_{21}a_{32} - a_{31}a_{22}a_{13} - a_{32}a_{23}a_{11} - a_{33}a_{21}a_{12} 
\end{align}$$
On peut retrouver les coefficients avec le shéma suivant :
![[déterminant d'une matrice - méthode de Sarrus.excalidraw]]


### Méthode générale

