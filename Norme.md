up::[[espace vectoriel]]
title::""
#maths/algèbre 

----

> [!definition] Norme
> Soit $\mathbf{K}$ un [[corps commutatif]] muni d'une [[valeur absolue]] 
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Une **norme** sur $E$ est une [[application]] $\mathcal{N}$ de $E \to \mathbf{K}$ qui satisfait :
>  - [[espace séparé|séparation]] : $\forall x \in \mathbf{E}, \quad \mathcal{N}(x) = 0 \implies x = O_{E}$
>      - la [[réciproque]] est vraie aussi
>  - absolue [[application homogène|homogénéité]] : $\forall (\lambda, x) \in K \times E, \quad \mathcal{N}(\lambda x) = |\lambda|\mathcal{N}(x)$
>  - [[inégalité triangulaire]] ([[sous-additivité]]) : $\forall (x, y) \in \mathbf{E}^{2}, \quad \mathcal{N}(x + y) \leq \mathcal{N}(x)+\mathcal{N}(y)$
^definition

# Propriétés 

 - La norme est toujours positive 
 - 
