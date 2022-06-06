#maths/algèbre 
# comatrice
Soit $A$ une [[matrice]] de taille $n\times n$.

On pose les coefficients suivants :
$$A = \begin{pmatrix}
a_{1,1}&a_{1,2}&a_{1,3}&\cdots&a_{1,n}\\
a_{2,1}&a_{2,2}&a_{2,3}&\cdots&a_{2,n}\\
a_{3,1}&a_{3,2}&a_{3,3}&\cdots&a_{3,n}\\
\vdots&\vdots&\vdots&&\vdots\\
a_{n-1,1}&a_{n-1,2}&a_{n-1,3}&\cdots&a_{n-1,n}\\
a_{n,1}&a_{n,2}&a_{n,3}&\cdots&a_{n,n}\\
\end{pmatrix}$$

On définit $E_{i,j}$ la matrice $A$ **sans la ligne $i$ ni la colonne $j$**.
On définit $D_{i,j} = \det(E_{i,j})$ le [[déterminant d'une matrice|déterminant]] de $E_{i,j}$
Alors : 
$$\text{comat}(A) = \begin{pmatrix}
D_{1,1}&D_{1,2}&D_{1,3}&\cdots&D_{1,n}\\
D_{2,1}&D_{2,2}&D_{2,3}&\cdots&D_{2,n}\\
\vdots&\vdots&\vdots&&\vdots\\
D_{n,1}&D_{n,2}&D_{n,3}&\cdots&D_{n,n}\\
\end{pmatrix}$$

