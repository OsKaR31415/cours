up:: [[fonction signe]], [[Traditionnal Mathematical Notation]] 
title:: "comment construire la fonction signe sans utiliser des conditions"
#maths 

---

![[fonction signe#^definition]]

La fonction signe est donc la fonction qui vaut $1$ pour argument positif, $-1$ pour argument négatif, et $0$ pour l'argument $0$.

La fonction signe est généralement considérée comme une fonction classique de la [[Traditionnal Mathematical Notation|Notation Mathématique Traditionnelle]].
Parfois, on peut cependant ne pas vouloir de telles fonctions, car leur définition n'est pas conventionnelle : il faut utiliser des conditions pour la définir

# Définitions

## Avec la valeur absolue
On peut poser : $\displaystyle \mathrm{sgn}(x) = \frac{|x|}{x}$
Cette définition ne fonctionne pas pour $x = 0$, car on ne peut pas diviser par $0$
C'est donc une définition de la fonction signe réduite sur $\mathbb{R}^{*}$

## Avec des [[fonctions trigonométriques]] 
$\mathrm{sgn}(x) = \left\lfloor \mathrm{th}(x) \right\rfloor \times 2 + 1$
La fonction $\mathrm{th}(x)$ est définie sur $\mathbb{R}$, et vaut $0$ en $0$, est négative sur $\mathbb{R}^{-*}$ et positive sur $\mathbb{R}^{+*}$
Plus précisément :
 - $x < 0 \implies \mathrm{th}(x) \in ]-1; 0[$
 - $x = 0 \implies \mathrm{th}(x) = 0$
 - $x > 0 \implies \mathrm{th}(x) \in ]0; 1[$
On peut donc utiliser la fonction [[partie entière]] pour avoir uniquement les valeurs $-1$ ou $0$



