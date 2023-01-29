---
alias: [ "base duale" ]
---
up:: [[espace dual d'un espace vectoriel]]
sibling:: [[base antéduale d'une famille de formes linéaires|base antéduale]]
title:: 
#maths/algèbre 

---

> [!definition] base duale d'un espace vectoriel
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] $n$, muni d'une base $\mathcal{B} = (e_1, e_2, \dots, e_{n})$
> 
> Soit $E^{*}$ l'[[espace dual d'un espace vectoriel|espace dual]] de $E$.
> 
> On note $e_k^{*}$ les vecteurs de $\mathcal{B}^{*}$, la **base duale de $\mathcal{B}$**, définis comme :
>  - $e_{j}^{*}(e_{i}) = \delta _{i,j} = [i = j]$ ([[crochet d'Iverson]], [[symbole de kronecker]])
> 
> Alors :
>  - $\mathcal{B}^{*} = (e_{k}^{*} \mid k \in [\![1; n]\!])$
>  - $\mathcal{B}^{*} = \big( (e_{i} \mapsto [i = k])  \mid k \in [\![1; n]\!] \big)$
^definition
    
![[base duale d'une famille de formes linéaires 2023-01-23 17.35.35.excalidraw|100%]]

# Propriétés
Soient $\mathcal{B} = (e_1, e_2, \dots, e_{n})$ une base, et $\mathcal{B}^{*} = (e_1^{*}, e_2^{*}, \dots, e_{n}^{*})$ sa base duale

  - $\mathcal{B}^{*} = \big( (e_{i} \mapsto [i = k])  \mid k \in [\![1; n]\!] \big)$
  - $\mathcal{B} = \left(\,^T[e^{*}] \mid e^{*} \in \mathcal{B}^{*}\right) =  \left( \,^T[e_{k}^{*}] \mid k \in [\![1; n]\!] \right)$



> [!definition] Base duale de la [[base canonique d'un espace vectoriel|base canonique]] 
> Si $\mathcal{B}$ est la base canonique $(e_1, e_2, \dots, e_{n})$
> 
> On sait que $(e_1; e_2; \dots; e_{n}) = Id_{n}$ (par définition)
> 
> Alors, soit $\mathcal{B}^{*} = (e_1^{*}, e_2^{*}, \dots, e_{n}^{*})$ la base duale de $\mathcal{B}$
> 
> On sait que $(\,^T[e_1^{*}]; \,^T[e_2^{*}]; \dots; \,^T[e_{n}^{*}]) = Id_{n}$
> 
> Autrement dit, $\mathcal{B}^{*}$ est aussi une base canonique, mais en lignes.


