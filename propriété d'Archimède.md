up::[[MOC arithmétique|arithmétique]] 
title:: "$\forall b \in \mathbb{N}^{*}, \quad \forall a \in \mathbb{N}, \quad \exists k \in \mathbb{N}, \quad kb > a$"
#maths/arithmétique 

---

> [!definition] Propriété d'Archimède
> Soit $b \in \mathbb{N}^{*}$
> Pour tout $a \in \mathbb{N}$
> $\exists k \in \mathbb{N}, kb > a$
> C'est-à-dire que l'on peut multiplier $b$ pour obtenir un nombre plus grand que $a$
^definition


# Démonstration
Soit $b\mathbb{N}$ l'ensemble des multiples de $b$ : $b\mathbb{N} = \{ kb \mid k \in \mathbb{N} \}$
Soit $\mathbf{B}_{a} = \{ x \in b\mathbb{N} \mid x \leq a \}$ l'ensemble des nombres de $b\mathbb{N}$ inférieurs à $a$
 - $\mathbf{B}_{a}$ est non-vide, car il contient $0$
 - $\mathbf{B}_{a}$ est majoré (par $a$)
Donc, $\mathbf{B}_{a}$ admet un plus grand élément.
Soit $m = qb$ ce plus grand élément.
On sait que, pour tout $k \in \mathbb{N}$ avec $k > q$, on a $kb > qb$
Or, $kb \in b\mathbb{N}$ et $kb > m$, donc $kb$ n'est pas dans $\mathbf{B}_{a}$, d'où $\boxed{kb > a}$

