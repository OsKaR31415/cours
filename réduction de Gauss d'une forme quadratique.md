up:: [[forme quadratique]]
title:: "somme de carrés de combinaisons linéaires : $\pm\left( ax_1+bx_2+cx_3 \right)^{2} \pm \left( dx_2 + ex_3 \right)^{2} \pm fx_3^{2}$"
author:: [[Carl Friedrich Gauss]]
#maths/algèbre 

---

> [!definition] Forme de Gauss d'une forme quadratique
> La forme de Gauss d'une [[forme quadratique]] est une façon d'écrire la forme quadratique comme un polynôme en **somme de carrés** de combinaisons linéaires de ses variables.
> 
> Cela permet de déterminer facilement la [[forme quadratique positive|positivité]] et le signe de la forme quadratique.
^definition

> [!example] Exemple 
> Soit cette forme quadratique : $\psi \left( \begin{pmatrix}x\\y\end{pmatrix} \right) = x^{2} + 4 xy +2y^{2}$
> Sous la forme de gauss : $\psi \left( \begin{pmatrix}x\\y\end{pmatrix} \right) = (x+2y)^{2} - 2y^{2}$


> [!info] Méthode de calcul
> Pour mettre une [[forme quadratique]] sous forme de gauss, il faut procéder une variable à la fois, et faire en sorte, à chaque fois, d'utiliser une [[identités remarquables|identité remarquable]] pour que toutes les références à cette variable soient dans une parenthèse **mise au carré**.
> 
> Par exemple, pour $\psi \left( \begin{pmatrix}x\\y\end{pmatrix} \right) = x^{2} + 4xy + 2y^{2}$, on commence par $x$.
> On remarque la similitude avec l'[[identités remarquables|identité remarquable]] $(x + 2y)^{2} = x^{2} + 4xy + 4y^{2}$ : les parties avec des $x$ sont les mêmes.
> 
> Alors on a :
> $$\begin{align}
> \psi \left( \begin{pmatrix}x\\ y\end{pmatrix} \right) &= x^{2} + 4xy + 2y^{2}\\
> &= \left( x^{2} + 4xy + 4y^{2} \right)  - 2y^{2} && \text{terme en plus pour compenser l'id. remarquable} \\
> &= (x + 2y)^{2} - 2y^{2} && \text{on n'a plus que des carrés}
> \end{align}$$ 

