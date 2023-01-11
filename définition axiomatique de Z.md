up::[[axiomatique]]
title::""
#maths #logique

---


> [!definition] Définition de $\mathbb{Z}$
> $\mathbb{Z} = \mathbb{N}^{*} \cup \{ 0 \} \cup (-\mathbb{N}^{*})$
^definition

# Opérations

On sait que, sur $\mathbb{N}$ :
 - Si $x \leq y$, il existe $z$ tel que $y = x+z$

On étend l'addition à $\mathbb{Z}$ par :
 - Si $b \leq a, a+(-b) := c$ où $a = b+c$ (l'existence de $c$ découle du théorème précédent)
 - Si $b > a, a+(-b) := -c$ où $a = b + c$
 - $(-a) + (-b) := -(a+b)$

On étend la multiplication à $\mathbb{Z}$ par :
 - $a \cdot (-b) := -(ab)$
 - $(-a)\cdot(-b):= a\cdot b$

On vérifie que $(\mathbb{Z}, +, \cdot)$ est un [[anneau commutatif]]

