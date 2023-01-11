---
alias: [ "sous espace propre", "sous espaces propres", "sous espace vectoriel des vecteurs propres associés à une valeur propre" ]
---
up:: [[`]], [[vecteur propre d'une matrice]], [[valeur propre d'une application linéaire]], [[valeur propre d'une matrice]] 
title:: "Les [[vecteur propre d'une matrice|vecteurs propres]] d'une [[valeur propre d'une matrice|valeur propre]] avec $\vec{0}$"
#maths/algèbre 

---

> [!definition] Sous espace propre
> Soit $\mathbf{K}$ un [[corps]] 
> Soit $M$ [[matrice]] de $\mathcal{M}_{n}(\mathbf{K})$ (ou bien un [[appplication linéaire]]  de $K^{n} \to \mathbf{K}^{n}$)
> Pour toute [[valeur propre d'une matrice|valeur propre]] $\lambda$ de $M$
> L'ensemble des [[vecteur propre d'une matrice|vecteurs propres]] associés à $\lambda$, complété par $\vec{0}$ est un [[sous espace vectoriel]] de $\mathbf{K}^{n}$.
> C'est l'[[espace vectoriel]] des $\{ u \in \mathbf{K^{n}} \mid Mu = \lambda u \}$
> On appelle cet [[espace vectoriel]] le **sous espace propre associé à $\lambda$**
^definition

# Propriétés

 - l'intersection de 2 [[sous espace propre|sous espaces propres]] est toujours $\{ \vec{0} \}$ 
 - l'[[somme d'espaces vectoriels|somme]] de tous les [[sous espace propre|sous espaces propres]] est $K^{n}$ 
     - les [[sous espace propre|sous espaces propres]] sont en somme directe dans $\mathbf{K}^{n}$

 - le sous espace propre associé à une valeur propre $\lambda$ a une dimension inférieure à la [[valeur propre d'une matrice#Multiplicité|multiplicité de la valeur propre]]
     - $\dim(E_{f}(\lambda)) \leq \mathrm{mult}(\lambda)$
     - Cela explique pourquoi certaines 

 - [ ] #todo finir et flashcards