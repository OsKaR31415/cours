up::[[matrice]]
#maths/algèbre #review 

----

# matrice d'un vecteur dans une base
Soit $E$ un [[espace vectoriel]] réel de [[dimension d'un espace vectoriel|dimension]] $n$,
Soit $\scr B = \{e_1,\ldots,e_n\}$ une [[base d'un espace vectoriel|base]] de $E$,
Un vecteur $x$ de $E$ se décompose de façon unique sous la forme $x = x_1e_1+\cdots+x_ne_n$ avec $(x_1,\ldots,x_n)\in\mathbb{R}^n$

$\mathrm{Mat}_{\scr B}(x) = [x]_{\scr B} = \begin{pmatrix} x_1\\\vdots\\x_n \end{pmatrix}$  
# Propriétés
L'[[application]] $x\mapsto [x]_{\scr B}$ est [[application linéaire|linéaire]] de $E$ dans $\mathbb{R}^n$.


# Exemple
Les vecteurs $u_1 = \begin{pmatrix} 0\\1\\1 \end{pmatrix}$, $u_2 = \begin{pmatrix} 1\\0\\1 \end{pmatrix}$, $u_3 = \begin{pmatrix} 1\\1\\0 \end{pmatrix}$ forment une [[base d'un espace vectoriel|base]] de $\mathbb{R}^3$
Le vecteur $v = \begin{pmatrix} 1\\1\\1 \end{pmatrix}$ se décompose sous la forme $xu_1+yu_2+zu_3$, soit :

$\begin{pmatrix} 1\\1\\1 \end{pmatrix} = x \begin{pmatrix} 0\\1\\1 \end{pmatrix} + y \begin{pmatrix} 1\\0\\1 \end{pmatrix} + z \begin{pmatrix} 1\\1\\0 \end{pmatrix}$


d'où $\left\{\begin{array}{rl} & y  & +z & = 1\\ x &    & +z & = 1\\ x & +y &    & = 1 \end{array}\right.$


Par la méthode du pivot de Gauss, on obtient $x = y = z = \frac12$. Les coordonnées de $v$ dans la base $\scr B$ sont donc $\left(\frac12,\frac12,\frac12\right)$, ce qui s'écrit encore :
$\mathrm{Mat}_{\scr B}(v) = [v]_{\scr B} = \begin{pmatrix} \frac12\\\frac12\\\frac12 \end{pmatrix}$

