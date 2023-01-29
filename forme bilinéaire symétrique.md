---
alias: [ "symétrique" ]
---
up::[[forme bilinéaire]]
title::"$f(u, v) = f(v, u)$"
#maths/algèbre

---

> [!definition] 
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Soit $f$ une [[forme bilinéaire]] de $E^{2} \to \mathbf{K}$
> $f$ est **symétrique** ssi : $\boxed{f(u, v) = f(v, u)}$ quels que soient $(u, v) \in E^{2}$
^definition

> [!definition]- Définition Formelle
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Une application $f$ *bilinéaire* est une [[application]]  de $E^{2} \to \mathbf{K}$  ssi :
>  - elle est linéaire par rapport à ses deux paramètres
>      - $f((a_{1}u_{1} + a_{2}u_{2}; v)) = a_{1}f((u_{1}, v))+a_{2}f((u_{2}, v))$ ([[application linéaire|linéaire]] par rapport à $u$)
>      - $f((u; a_{1}v_{1}+a_{2}v_{2})) = a_{1}f((u, v_{1}))+a_{2}f((u,v_{2}))$ ([[application linéaire|linéaire]] par rapport à $v$)
>  - elle est [[relation symétrique|symétrique]]
>      - $f(u, v) = f(v, u)$
^definition-formelle

# Propriétés
Soit $f$ une [[forme bilinéaire]] de $E^{2} \to \mathbf{K}$

 - $f$ est symétrique $\iff$ [[matrice d'une forme bilinéaire|matrice de]] $f$ est [[matrice symétrique|symétrique]]
