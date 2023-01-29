---
alias: [ "directe", "somme directe" ]
---
sibling:: [[sous espaces vectoriels supplémentaires]]
up::[[somme d'espaces vectoriels]]
title::"$F \oplus G : E$ ssi :", " - $F+G = E$ ([[somme d'espaces vectoriels]])", " - $F$ et $G$ sont [[sous espaces vectoriels supplémentaires|supplémentaires]] (toute décomposition est unique)"
#maths/algèbre #review 

----




> [!definition] Somme directe
> Soient $E_{1}, E_{2}, E_3, \dots, E_{n}$, $n \in \mathbb{N}^{*}$, des $\mathbf{K}$-[[espace vectoriel|espaces vectoriels]]
> On dit que la somme $E_1 + E_2 + E_3 + \cdots E_n$ est **directe** ssi tous les $E_{k}$ sont deux-à-deux d'intersection nulle, c'est-à-dire que $\forall (i, j) \in [\![1;n]\!]^{2}, \quad E_{i} \cap E_{j} = \{ 0 \}$
>
> En particulier, on dit que la somme de deux espaces $E_1 + E_2$ est **directe** ssi $E_1 \cap E_2 = \{ 0 \}$
^definition

> [!definition] Autre définition de la somme directe
> Soient $F$ et $G$ deux [[espace vectoriel|espaces vectoriels]]
> $F+G$ est une somme **directe** ssi La décomposition d'un vecteur de $F+G$ en un vecteur de $F$ et un vecteur de $G$ est unique :
> $\forall w \in F+G, \quad \exists!(u;v)\in F \times G, \quad u+v = w$


> [!definition] Sous-espaces en somme directe dans un [[espace vectoriel]]
> Soient $E_1, E_2, E_3, \dots, E_{n}$, $n \in \mathbb{N}^{*}$ des [[sous espace vectoriel|sous espaces vectoriels]]  d'un [[espace vectoriel]] $E$
> On dit que $E_1, E_2, E_3, \dots, E_{n}$ **sont en somme directe dans $E$** ssi :
>  - $E_1+E_2+E_3+\cdots+E_{n} = E$ (ils sont en _somme dans $E$_)
>  - La somme $E_1 + E_2+E_3+\cdots+E_{n}$ est [[somme directe d'espaces vectoriels|directe]], c'est-à-dire que les $E_{k}$ sont deux-à-deux d'intersection nulle : $\forall (i, j) \in [\![1;n]\!]^{2}, \quad E_{i} \cap E_{j} = \{ 0 \}$
> 
> On note alors : $\boxed{E_1 \oplus E_2 \oplus E_3 \oplus\cdots \oplus E_{n} = E}$
> 
> > [!info] Cas particulier : pour deux [[sous espace vectoriel|sous espaces vectoriels]] 
> > Pour deux [[sous espace vectoriel|sous espaces vectoriels]] $F$ et $G$ de $E$,
> > On dit que $F$ et $G$ sont [[sous espaces vectoriels supplémentaires|supplémentaires]] dans $E$ pour dire $F \oplus G = E$ 
>    


# Propriétés
Soient $E = F \oplus G$

 - la [[famille de vecteurs]] formée par l'union de deux [[base d'un espace vectoriel|bases]] de $F$ et $G$ est [[famille de vecteurs libre|libre]]
     - il n'y a pas de vecteur en commun entre $F$ et $G$ autre que le [[vecteur nul]]
