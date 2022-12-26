up::[[MOC arithmétique]] 
title:: $a \equiv b [n] \iff n \mid a-b$
#maths/arithmétique 

---

> [!definition] Congruence
> La congruence modulo $n$ est la [[relation]] qui est vraie si $n \mid a-b$
> $\boxed{a \equiv b[n] \iff n\mid a-b}$
^definition


# Propriétés

 - la congruence est une [[relation d'équivalence]] pour tout $n \in \mathbb{N}$

## Opérations sur les congruences

 - $ka \equiv kb [kn] \iff a \equiv b[n]$ [[démonstration simplification de la congruence#Simplification totale|démonstration]]
     - [!] $ka\equiv kb[n] \;\;\;\not\!\!\!\!\!\iff a\equiv b[n]$


 - $\begin{cases} ka\equiv kb[n]\\ \text{pgcd}(k, n) = 1 \end{cases} \implies a\equiv b[n]$ [[démonstration simplification de la congruence#Simplification partielle (sans le modulo)|démonstration]]
     - [!] on ne peut simplifier que si $k$ et $n$ sont [[nombres premiers entre eux|premiers entre eux]]


 - Si $n$ est [[nombre premier|premier]], alors $\left( \left( \raise{2pt}\mathbb{Z}/\raise{-2pt}{n\mathbb{Z}} \right)^{*} , \times \right)$ est un [[groupe]], et donc tous ses éléments sont inversibles. les équations de la forme $kx \equiv i [n] \Big|_{i\in\mathbb{Z},\, k\in\mathbb{Z}^{*}}$ ont alors une unique solution, $x = k^{-1}\times i$

