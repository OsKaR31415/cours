---
alias: [ "signature" ]
---
up:: [[forme quadratique]]
title:: "(# coefficients positifs, # coefficients négatifs) dans la [[réduction de Gauss d'une forme quadratique|réduction de gauss]]""
#maths/algèbre  

---

> [!definition] signature d'une forme quadratique
> Soit $\psi$ une [[forme quadratique]].
> La **signature** de $\psi$ est le couple d'entiers qui contient :
>  1. le nombre de signes positifs devant les carrés
>  2. le nombre de signes négatifs devant les carrés
> dans la [[réduction de Gauss d'une forme quadratique]] 
^definition

# Exemples

> [!example] Exemple 
> Soit $\psi \left( \begin{pmatrix}x\\y\end{pmatrix} \right) = x^{2} + 4xy + 2y^{2} = \underbrace{(x+2y)^{2} - 2y^{2}}_{\text{forme de Gauss}}$
> Dans la forme de Gauss, on a $1$ parenthèse avec un signe positif, et $1$ parenthèse avec un signe négatif, donc la **signature** est : $\boxed{(1, 1)}$

> [!example] Exemple 
> Soit $\phi \left( \begin{pmatrix}x\\y\\z\end{pmatrix} \right) = x^{2} - 3y^{2} + 4z^{2} +2xy - 4xz - 8yz = \underbrace{\underbracket{\;\;\;}_{+}(x+y+2z)^{2} \underbracket{-} (2y + z)^{2} \underbracket{+} z^{2}}_{\text{forme de Gauss}}$
> Dans la forme de Gauss, on a $2$ parenthèses avec un signe positif, et $1$ parenthèse avec un signe négatif, donc la **signature** est : $\boxed{(2, 1)}$
> 


# Propriétés
Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
Soit $\psi$ une forme quadratique de $E \to \mathbf{K}$
Soit $(a, b)$ la signature de $\psi$

 - $\psi$ est une [[norme]] **ssi** sa signature est $(a,\; 0)$ avec $a = \dim E$
     - Si il y à des termes négatifs, elle ne sera pas [[forme quadratique positive|positive]]
     - Si $a < \dim E$, (elle est [[forme quadratique dégénérée|dégénérée]]) elle ne sera pas [[forme quadratique définie|définie]] 

 - $\psi$ est [[forme quadratique définie|définie]] **ssi** sa signature est $(n, 0)$ ou $(0, n)$ avec $n = \dim E$
     - une forme [[forme quadratique définie|définie]] est toujours [[forme quadratique positive|positive]] ou [[forme quadratique négative|négative]]
     - $n = \dim E$ veut dire qu'elle est [[forme quadratique non dégénérée]]
