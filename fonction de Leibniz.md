up::
sibling:: [[combinaison linéaire]] 
author:: [[Leibniz]]
title::
#maths/algèbre 

---

> [!definition] Fonction de Leibniz
> Soit $\mathbf{K}$ un [[corps]] 
> Soit $\mathcal{E}$ un $\mathbf{K}$-[[espace affine]] de direction $\vec{E}$
> Soient $(A_1, A_{2}, \dots, A_{k}) \in \mathcal{E}^{k}$ des points de $\mathcal{E}$
> Soient $(\lambda_1, \lambda_2, \dots, \lambda _{k}) \in \mathbf{K}^{k}$ des scalaires
> La **fonction de Leibniz** est la fonction :
> $$
> \begin{align}
> \varphi :\; & \mathcal{E} \to E \\
>     & M \mapsto \sum\limits_{i=1}^{k} \lambda _{i}\overrightarrow{A_{i}M}
> \end{align}
> $$
>
> Par la [[relation de chasles]], on obtient : $\varphi(M) = \lambda\overrightarrow{OM} + \varphi(O)$, où $\lambda = \sum\limits_{i=1}^{k}\lambda _{i}$
>  
> C'est un analogue des [[combinaison linéaire|combinaisons linéaires]], mais sur des points plutôt que des vecteurs.
^definition


# Propriétés
On reprends la fonction $\varphi$ de la définition, ainsi que ses coefficients : $(A_{i})$ et $(\lambda _{i})$
On a $\lambda = \sum\limits_{i=1}^{k}\lambda _{i}$

 - $\varphi$ est constante si $\lambda=0$
     - facile à montrer car on sait que $\varphi(M) = \lambda\overrightarrow{OM}+\varphi(O)$
 - sinon, si $\lambda \neq 0$ il existe un unique points $G$ tel que $\varphi(G) = \vec{0}$
     - $\lambda \neq 0 \implies \exists!G \in \mathcal{E}, \varphi(G) =\vec{0}$
     - $G$ est alors le [[barycentre d'un système de points pondérés]] du système de points pondérés $(A_{i}, \lambda _{i})_{i}$

