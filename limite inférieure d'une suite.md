---
alias: [ "lim inf", "limite inf", "limite inférieure" ]
---
up::[[suite]]
sibling::[[limite supérieure d'une suite]]
title::"$\inf \big\{ u_{n} \mid n < k \big\}$ quand $k \to +\infty$"
#maths/analyse 

----
Soit $(x_{n})$ une suite réelle
On appelle _limite inférieure de $(x_{n})$_ le nombre $L \in \overline{\mathbb{R}}$ le nombre tel que :
 - Quelque soit $\lambda < L$, l'ensemble des $n \in \mathbb{N}$ tels que $x_{n} < \lambda$ est infini
 - Quelque soit $\lambda > L$, l'ensemble des $n \in \mathbb{N}$ tels que $x_{n} < \lambda$ est fini

On note : $\lim\inf\limits_{n \rightarrow \infty} (x_{n}) = L$

> [!définition]
> Soit $x_{n}$ une suite
> On pose : $v_{n} = \inf \left\{ x_{k} | k \geq n \right\}$
> alors :
> $\limsup_{n \to \infty} x_{n} = \lim\limits_{n \to \infty} v_{n}$

> [!définition]- Autre définition
> Soit $(x_{n}): \mathbb{N} \rightarrow \mathbb{R}$
> $L = \lim\inf\limits_{n \rightarrow \infty} (x_{n}) \in \overline{\mathbb{R}}$ ssi :
>  - $\forall \lambda < L, \text{card} \left( \left\{ n \in \mathbb{N} \mid x_{n} < \lambda \right\} \right) = +\infty$
>  - $\forall \lambda > L, \text{card} \left( \left\{ n \in \mathbb{N} \mid x_{n} < \lambda \right\} \right) \neq +\infty$
> 
> > [!idea] interprétation
> > La limite inférieure est la valeur $L$ telle que :
> >  - il n'y a une infinité de points de la suite en dessous de $L$
> >  - il y à un nombre fini de points au dessus de $L$
> 

# Propriétés 
Soit $(u_{n})_{n}$ une suite réelle.
 - $\lim \inf u_{n} \leq \lim \sup u_{n}$
 - $(u_{n})_{n}$ tend vers $l \in \overline{\mathbb{R}}$ ssi $\lim \inf u_{n} = \lim \sup u_{n} = l$
 - $\lim \inf u_{n} = - \lim \sup (-u_{n})$
 - $\lim \inf (\lambda u_{n}) = \lambda \lim \inf u_{n}$ (la limite supérieure est homogène)
