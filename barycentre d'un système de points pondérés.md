---
alias: [ "barycentre" ]
---
up:: [[fonction de Leibniz]] 
title:: "$G$ tel que $\sum\limits_{i} \Big( \lambda _{i} \overrightarrow{A_{i}G} \Big) = \vec{0}$", "$G = Bar((A_1, \lambda_1), (A_2, \lambda_2), \dots, (A_{k}, \lambda _{k}))$"
#maths/algèbre 

---

> [!definition] Barycentre d'un système de points pondérés
> Soit $\mathcal{E}$ un [[espace affine]] de [[direction d'un espace affine|direction]] $\vec{E}$
> Soit $A = (A_1, A_2,\dots,A_{k}) \subset \mathcal{E}$ une famille de points de $\mathcal{E}$
> Soit $\Lambda = (\lambda_1, \lambda_2,\dots,\lambda _{k})$ une famille de scalaires
> Soit $P = ((A_1,\lambda_1), (A_2,\lambda_2), \dots, (A_{k}, \lambda _{k}))$ un système de points pondérés
> On appelle **barycentre du sytème de points pondérés $P$** l'unique point $G$ tel que :
> $\sum\limits_{i=1}^{k} \Big( \lambda _{i} \overrightarrow{A_{i}G} \Big) = \vec{0}$ ($G$ annule la [[fonction de Leibniz]])
> Ou bien, de façon équivalente :
> $\forall P \in \mathcal{E}, \quad \left( \sum\limits_{i=1}^{k} \lambda _{i} \right)\overrightarrow{PG} = \sum\limits_{i=1}^{k} \left( \lambda _{i} \overrightarrow{PA_{i}} \right)$
> 
> On note $G = Bar(P)$
^definition


# Propriétés

## Propriétés fondamentales
Soit $G = Bar((A_{i}, \lambda _{i})_{i})$
 - **Homogénéité** : $\forall \mu \neq 0, \quad G = Bar((A_{i}, \mu\lambda _{i})_{i})$
 - **Commutativité** : $\forall \sigma \in \mathfrak{S}_{k}, \quad G = Bar((A_{\sigma(i)}, \lambda _{\sigma(i)})_{i})$
     - on peut [[permutation|permuter]] points (en gardant leurs pondérations propres)
 - **Associativité** : $Bar((A_0, \lambda_0), (A_1, \lambda_1), \dots, (A_{i}, \lambda_i)) = Bar\Big( \big(Bar((A_0, \lambda_0), (A_1, \lambda_1)),\quad \lambda_0+\lambda_1\big), \quad (A_2, \lambda_2), \dots, (A_{i}, \lambda _{i}) \Big)$
     - on peut remplacer un ensemble de points par leur barycentre, avec la somme de leurs poids pour poids (l'ordre du calcul n'est pas important)
     - [!] Cela suppose que la somme partielle des poids (ici $\lambda_0+\lambda_1$) est non nulle

## Ensemble des barycentres
L'ensemble des barycentres d'une famille de points est le plan affine passant par tous ces points.

### Corrollaire
Soit $\mathcal{E}$ un [[espace affine]] 
Un sous ensemble $\mathcal{A}$ de $\mathcal{E}$ est un [[sous espace affine]] ssi $\mathcal{A}$ est sable par "barycentrification".
En particulier, $Aff(\mathcal{A})$ est l'ensemble des barycentres des points de $\mathcal{A}$

