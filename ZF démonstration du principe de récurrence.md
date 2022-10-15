up::[[axiomes Zemerlo Frankel]]
title::"preuve que $P(0) \wedge \forall n, P(n) \implies P(n+1)$"
#maths #logique #demonstration 

----
On cherche à montrer le [[principe de récurrence]] :
![[principe de récurrence#^definition]]

Soit $P(x)$ un proposition.
Supposons que $P(0)$ et que $\forall x, P(x) \implies P(x+1)$

Soit $F = \{ x\mid P(x) \}$

$F$ est héréditaire par définition
Par l'axiome de l'infini, il contient $\mathbb{N}$

Donc, $P(x)$ est vraie pour tout $x \in \mathbb{N}$

