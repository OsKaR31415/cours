up::[[application linéaire]], [[matrice]]
#maths/algèbre #review 

----
Soient $E$ et $F$ deux $\mathbb{R}$-[[espace vectoriel|espaces vectoriels]] de [[dimension d'un espace vectoriel|dimension]] finie, de [[base d'un espace vectoriel|base]] respective $\mathcal B = \{e_1,\ldots,e_n\}$ et $\mathcal C = \{f_1,\ldots,f_n\}$,
Soit $f$ une [[application linéaire]] de $E$ dans $F$.
Soit $x\in E$,
On pose $[x]_{\cal B} = \begin{pmatrix} x_1\\\vdots\\x_n \end{pmatrix}$
On a $f(x) = x_1f(e_1) + \cdots + x_nf(e_n)$, soit :
$$\begin{align}
[f(x)]_{\cal C} &= \mathrm{Mat}_{\cal C}\big(x_1f(e_1) + \cdots + x_nf(e_n)\big) \\
    &= \underbrace{ x_1\mathrm{Mat}_{\cal C}(f(e_1)) + \cdots + x_n\mathrm{Mat}_{\cal C}(f(e_n)) }_{\text{ car Mat est une application linéaire}}\\
    &= \underbrace{\Big( \mathrm{Mat}_{\cal C}(f(e_1));\ldots;\mathrm{Mat}_{\cal C}(f(e_1))\Big)}_{\mathrm{Mat}_{\cal C\leftarrow B}(f)}
       \underbrace{\begin{pmatrix} x_1\\\vdots\\x_n \end{pmatrix}}_{[x]_{\cal B}}\\
    &= [f]_{\cal C\leftarrow B} \times [x]_{\cal B}
\end{align}
$$

La _matrice de $f$_ dans les bases $\cal B$ et $\cal C$, notée $\mathrm{Mat}_{\cal C\leftarrow B}(f)$ ou encore $[f]_{\cal C\leftarrow B}$, est la matrice de taille $p\times n$ dont les colonnes sont $\mathrm{Mat}_{\cal C}(f(e_1)),\mathrm{Mat}_{\cal C}(f(e_1)),\ldots,\mathrm{Mat}_{\cal C}(f(e_n))$.
La colonne numéro $j$ est donc $\mathrm{Mat}_{\cal C}(f(e_j))$ et correspond au vecteur $f(e_j)$ exprimé dans la base $\cal C$.




# Exemples

L'application $f: \begin{pmatrix} x_1\\x_2 \end{pmatrix} \mapsto \begin{pmatrix} 2x_1+x_2\\ x_1-3x_2\\ -x_1+2x_2 \end{pmatrix}$ est une [[application linéaire]] de $\mathbb{R}^2$ dans $\mathbb{R}^3$
Si $\mathcal B_2$ désigne la [[base canonique d'un espace vectoriel|matrice canonique]] de $\mathbb{R}^2$ et $\mathcal B_3$ celle de $\mathbb{R}^3$, alors :
$[f]_{\mathcal B_3\leftarrow\mathcal B_2} = \begin{pmatrix} 2&1\\1&-3\\-1&2 \end{pmatrix}$




Considérons la matrice $A = \begin{pmatrix} 1&2&3\\3&-5&6 \end{pmatrix}$
On peut lui associer de façon canonique une application linéaire $f$ de $\mathbb{R}^3$ (muni de sa base canonique $\mathcal B_3$) dans $\mathbb{R}^2$ (muni de sa base canonique $\mathcal B_2$) de telle sorte que $A = [f]_{\mathcal B_2\leftarrow \mathcal B_3}$.
L'application cherchée est : $f: \begin{pmatrix} x_1\\x_2\\x_3 \end{pmatrix} \mapsto \begin{pmatrix} x_1+2x_2+3x_3\\3x_1-5x_2+6x_3 \end{pmatrix}$



# Propriétés
Soient $E$, $F$ et $G$ des $\mathbb{R}$-[[espace vectoriel|espaces vectoriels]] de [[dimension d'un espace vectoriel|dimension]] finie, de bases repectives $\cal E$, $\cal F$ et $\cal G$,
Soient $f$ et $h$ des applications linéaires de $E$ dans $F$
Soit $g$ une application linéaire de $F$ dans $G$
On a :
 - $[f+h]_{\cal F\leftarrow E} = [f]_{\cal F\leftarrow E} + [h]_{\cal F\leftarrow E}$
 - $[\lambda f]_{\cal F\leftarrow E} = \lambda[f]_{\cal F\leftarrow E}$ pour tout $\lambda\in\mathbb{R}$
 - $\boxed{[g\circ f]_{\cal G\leftarrow E} = [g]_{\cal G\leftarrow F}\cdot[f]_{\cal F\leftarrow E}}$ 
     -  la composition d'[[application linéaire|applications linéaires]] est équivalente à la [[multiplication de matrices|multiplication des matrices]] associées





# Exemples
On munit $\mathbb{R}^2$ et $\mathbb{R}^3$ de leurs bases respectives $\mathcal B_2$ et $\mathcal B_3$,
Soient :

$f:\begin{pmatrix} x_1\\x_2\\x_3 \end{pmatrix}\mapsto \begin{pmatrix} 2x_1-x_2+x_3\\x_1+x_2-x_3 \end{pmatrix}$ et $g:\begin{pmatrix} x_1\\x_2 \end{pmatrix} \mapsto \begin{pmatrix} x_1-x_2\\x_1+x_2\\2x_1-x_2 \end{pmatrix}$

Alors $[f]_{\mathcal B_2 \leftarrow \mathcal B_3} = \begin{pmatrix} 2&-1&1\\1&1&-1 \end{pmatrix}$ et $[g]_{\mathcal B_3\leftarrow \mathcal B_2} = \begin{pmatrix} 1&-1\\1&1\\2&-1 \end{pmatrix}$

L'application linéaire $g\circ f : \mathbb{R}^3 \rightarrow \mathbb{R}^3$ a pour matrice dans la base canonique $\mathcal B_3$ :
$[g\circ f]_{\mathcal B_3\leftarrow\mathcal B_3} = \begin{pmatrix} 1&-1\\1&1\\2&-1 \end{pmatrix} \begin{pmatrix} 2&-1&1\\1&1&-1 \end{pmatrix} = \begin{pmatrix} 1&-2&2\\3&0&0\\3&-3&3 \end{pmatrix}$
On a donc :
$g\circ f : \begin{pmatrix} x_1\\x_2\\x_2 \end{pmatrix} \mapsto \begin{pmatrix} x_1-2x_2+2x_3\\3x_1\\3x_1-3x_2+3x_3 \end{pmatrix}$


