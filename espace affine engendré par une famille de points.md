---
alias: [ "espace affine engendré", "engendré" ]
---
up:: [[espace affine]] 
sibling:: [[espace vectoriel engendré par une famille de vecteurs|espace vectoriel engendré]] 
title:: "$Aff(\{ A_0, A_1, \dots,A_{k} \})$"
description:: "plus petit espace affine contenant tous ces points"
#maths/algèbre 

---
L'[[espace affine]] engendré par une famille de points est le plus petit [[espace affine]] qui contienne tous ces points.


> [!definition] Espace affine engendré par une famille de points
> Soit $\mathcal{E}$ un [[espace affine]] 
> Soit $\mathcal{A} = \{ A_0, A_1,\dots, A_{k} \}$ une [[famille]] de points de $\mathcal{E}$
>  - l'intersection des [[sous espace affine|sous espaces affines]] de $\mathcal{E}$ contenant tous les points de $\mathcal{A}$ est un [[sous espace affine]] de $\mathcal{E}$
>  - cette intersection est le plus petit [[sous espace affine]] qui contient $\mathcal{A}$
>  - On note $Aff(\mathcal{A})$, et on nomme **sous-espace affine engendré par $A$** ce plus petit sous-espace
^definition


# Propriétés
Soit $\mathcal{E}$ un [[espace affine]] 
Soit $\mathcal{A} = \{ A_0, A_1,\dots,A_{k} \}$ une famille de points de $\mathcal{E}$  ($\mathcal{A} \subset \mathcal{E}$)

 - $\begin{align} Aff(\mathcal{A}) &= A_0+Vect(\{ \overrightarrow{A_0M} \mid M \in \mathcal{A} \}) \\ &= A_0 + Vect(\{ \overrightarrow{A_0A_1}, \overrightarrow{A_0A_2}, \dots, \overrightarrow{A_0A_{k}} \}) \end{align}$
     - L'espace affine engendré est [[direction d'un espace affine|associé]] à l'espace vectoriel engendré par les vecteurs $\overrightarrow{A_0A_1}, \overrightarrow{A_0A_2},\dots,\overrightarrow{A_0A_{k}}$


