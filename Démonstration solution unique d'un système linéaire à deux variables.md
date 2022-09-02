#maths/algèbre 
# Démonstration solution unique d'un système linéaire à deux variables

Soit le système :
$(S) :\left\{ \begin{gathered}ax+by = c\\ a'x + b'y = c' \end{gathered}\right.$

$$\begin{align*}
(S) & \iff \begin{pmatrix} a&b\\a'&b' \end{pmatrix} \begin{pmatrix} x\\y \end{pmatrix} = \begin{pmatrix} c \\ c'\end{pmatrix}\\
&\iff \begin{pmatrix}x\\y\end{pmatrix} = \begin{pmatrix}a&b\\a'&b'\end{pmatrix}^{-1}\begin{pmatrix}c\\c'\end{pmatrix}\\
&\iff \begin{pmatrix}x\\y\end{pmatrix} = \frac{1}{\left|\small \begin{matrix}a&b\\a'&b'\end{matrix} \right|} \begin{pmatrix}cb' - c'b\\c'a-ca'\end{pmatrix}\\
&\iff \left\{\begin{gathered}
x = \frac{1}{\left|\small \begin{matrix}a &b\\a'&b'\end{matrix}\right|} \left| \begin{matrix}c & b\\ c' & b'\end{matrix} \right| \\
y = \frac{1}{\left|\small \begin{matrix}a &b\\a'&b'\end{matrix}\right|} \left| \begin{matrix}a&c\\a'&c'\end{matrix} \right| 
 \end{gathered}\right.
&\end{align*}$$

Donc, si $\begin{pmatrix} a&b\\a'&b' \end{pmatrix}^{-1}$ existe, il y a une unique solution au système $(S)$
