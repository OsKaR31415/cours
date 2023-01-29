---
alias: [ "antisymétrique" ]
---
up:: [[forme bilinéaire]] 
title:: "$f(u, v) = -f(v, u)$"
#maths/algèbre 

---

> [!definition] Forme bilinéaire antisymétrique
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Soit $f$ une [[forme bilinéaire]] de $E^{2} \to \mathbf{K}$
> $f$ est **antisymétrique** ssi : $\boxed{f(u, v) = -f(v, u)}$ quels que soient $(u, v) \in E^{2}$
^definition

> [!definition]- Définition Formelle
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Une [[application]] $f$ est une **forme bilinéaire antisymétrique** ssi :
>  - $f: E^{2} \to \mathbf{K}$ (2 paramètres, à valeurs scalaires)
>  - elle est linéaire par rapport à ses deux paramètres
>      - $f((a_{1}u_{1} + a_{2}u_{2}; v)) = a_{1}f((u_{1}, v))+a_{2}f((u_{2}, v))$ ([[application linéaire|linéaire]] par rapport à $u$)
>      - $f((u; a_{1}v_{1}+a_{2}v_{2})) = a_{1}f((u, v_{1}))+a_{2}f((u,v_{2}))$ ([[application linéaire|linéaire]] par rapport à $v$)
>  - elle est **antisymétrique**
>      - $f(u, v) = -f(v, u)$
^definition

# Propriétés
Soit $f$ une [[forme bilinéaire]] de $E^{2} \to \mathbf{K}$

 - $f$ est antisymétrique $\iff$ [[matrice d'une forme bilinéaire|matrice de]] $f$ est [[matrice antisymétrique|antisymétrique]]
