up:: [[matrice orthogonale]], [[matrice triangulaire]]
title:: "de la forme $\begin{pmatrix} \pm 1&0&\cdots &0\\0&\pm 1&\cdots&0\\ \vdots&\vdots&\ddots&\vdots\\ 0&0&\cdots&\pm 1\end{pmatrix}$"
#maths/algèbre 

---

> [!definition] Matrices orthogonales triangulaires
> Soit $M \in \mathcal{M}_{n}(\mathbb{R})$ une matrice.
> $M$ est [[matrice orthogonale|orthogonale]] et [[matrice triangulaire|triangulaire]] si et seulement si elle est
de la forme $\begin{pmatrix} \pm 1&0&\cdots &0\\0&\pm 1&\cdots&0\\ \vdots&\vdots&\ddots &\vdots\\ 0&0&\cdots&\pm 1\end{pmatrix}$
^definition


# Démonstration

On démontre façilement la forme de ces matrices :

Comme elles sont triangulaires, les valeurs en dessous de la diagonale sont nulles
le premier vecteur colonne est donc de la forme $\begin{pmatrix}a\\0\\0\\ \vdots\\0\end{pmatrix}$.

On sait que $a = \pm 1$ car ce vecteur doit être unitaire.

Comme on sait que ce vecteur doit être orthogonal à tous les autres vecteur colonne (la matrice doit être orthogonale), on sait que le deuxième vecteur, $\begin{pmatrix}b\\c\\0\\ \vdots\\ 0\end{pmatrix}$, doit avoir un produit scalaire nul avec le premier vecteur. Donc, $ab = 0$. Comme $a \neq 0$, on sait que $b = 0$, et comme le deuxième vecteur est unitaire, on sait qu'il est de la forme $\begin{pmatrix}0\\ \pm 1\\ 0\\ \vdots \\ 0\end{pmatrix}$.

On peut alors déduire colonne par colonne, en utilisant les produits scalaires nuls et l'unitarité des vecteurs, que la matrice est bien de la forme :

$\begin{pmatrix} \pm 1&0&\cdots &0\\0&\pm 1&\cdots&0\\ \vdots&\vdots&\ddots&\vdots\\ 0&0&\cdots&\pm 1\end{pmatrix}$


