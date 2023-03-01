---
alias: [ "orthogonal", "sev orthogonal", "sous espace vectoriel orthogonal", "espace orthogonal" ]
---
up:: [[espace préhilbertien]], [[sous espace vectoriel|sev]]
title:: "ensemble des [[vecteurs orthogonaux]] à tous les vecteurs d'un [[sous espace vectoriel|sev]]", "$F^{\bot} = \{ u \in E \mid \forall f \in F, \quad \langle u, f\rangle = 0 \}$"
#maths/algèbre 

---

> [!definition] Orthogonal d'un sous espace vectoriel
> Soit $(E, \langle.\rangle)$ un [[espace préhilbertien]]
> Soit $F \subset E$ un [[sous espace vectoriel|sev]] de $E$
> On appelle **orthogonal de $F$** l'ensemble :
> $F^{\bot} := \{ v \in E \mid \forall f \in F, \quad u \bot f \}$
> On définit l'[[vecteurs orthogonaux|orthogonalité]] avec le produit scalaire :
> $F^{\bot} := \{ v \in E \mid \forall f \in F, \quad \langle u, f\rangle=0 \}$
^definition


# Propriétés
Soit $(E, \langle . \rangle)$ un [[espace préhilbertien]] 
Soit $F$ un [[sous espace vectoriel|sev]] de $E$

 - $F^{\bot}$ est aussi un [[sous espace vectoriel|sev]] de $E$

 - **en dimension finie :**
     - $F \oplus F^{\bot} = E$
         - $F$ et $F^{\bot}$ sont [[sous espaces vectoriels supplémentaires|supplémentaires]] dans $E$
     - $(F^{\bot})^{\bot} = F$
     - $F \subset G \iff F^{\bot} \supset G^{\bot}$


