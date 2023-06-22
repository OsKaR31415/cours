up::[[espace vectoriel]]
title::"$\mathcal{N}(x)=0 \implies x=0$", "$\forall (\lambda, x)\in \mathbf{K}\times E, \mathcal{N}(\lambda x)=|\lambda|\mathcal{N}(x)$", "$\forall (x,y)\in E^{2}, \mathcal{N}(x+y)\leq \mathcal{N}(x)+\mathcal{N}(y)$"
#maths/algèbre 

----


> [!definition] Norme
> Soit $\mathbf{K}$ un [[corps commutatif]] muni d'une [[valeur absolue]] 
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Une **norme** sur $E$ est une [[application]] $\mathcal{N}$ de $E \to \mathbf{K}$ qui satisfait :
>  - [[espace séparé|séparation]] : $\forall x \in \mathbf{E}, \quad \mathcal{N}(x) = 0 \implies x = 0_{E}$
>      - la [[réciproque (logique)|réciproque]] est vraie aussi
>  - absolue [[application homogène|homogénéité]] : $\forall (\lambda, x) \in K \times E, \quad \mathcal{N}(\lambda x) = |\lambda|\mathcal{N}(x)$
>  - [[inégalité triangulaire]] ([[application sous-additive]]) : $\forall (x, y) \in \mathbf{E}^{2}, \quad \mathcal{N}(x + y) \leq \mathcal{N}(x)+\mathcal{N}(y)$
^definition

> [!definition] Norme d'un vecteur
> Soit $\vec{v} \in \mathbb{R}^{n}$ un vecteur
> On note $\|\vec{v}\|$ la norme de $\vec{v}$, et on a :
> $\|\vec{v}\| = \sqrt{ \sum\limits_{k=1}^{n} (\vec{v}_{k})^{2} }$

# Propriétés 

 - La norme est toujours positive 
 - [[inégalité triangulaire]] :  $\|a+b\| \leq  \|a\|+\|b\|$
