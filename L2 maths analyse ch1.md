---
title: Chapitre I
subtitle: Suites de fonctions
---

# 1.0 Cadre étudié

$I \subset R$ (le plus souvent, $I$ est un intervalle)
Une suite de fonctions $(f_{n}(\cdot))_{n}$ :
$$\forall n \in \mathbb{N} \;(\text{ou} \mathbb{N}^{*}, \text{ ou}\dots), \quad f_{n}: I \to \mathbb{R}$$
On visualise $(f_{n}(\cdot))_{n}$ comme une famille de courbes (graphes des fonctions $f_{n}(\cdot)$)
On veut décrire la convergence des courbes en question vers une "courbe limite", qui serait le graphe d'une fonction $f(\cdot)$.
 - [!] Diverses notions de convergence peuvent être utiles ici

> [!info] Remarque
> On regardera parfois le cas des fonctions complexes (à valeurs dans $\mathbb{C}$, mais aussi définies sur $I \subset \mathbb{C}$);
> Il y a peu de différences avec les cas réels au niveau des notions mises en jeu.

> [!tldr] Exercice
>  1. $f_{n} : x \mapsto \frac{x}{n}$ sur $\mathbb{R}$
>  2. $f_{n} : x \to x^{n}$ sur $[0; 1]$
> Dessiner les graphes de $f_1, f_2, f_3, f_4, f_5,\dots$ et conjecturer la fonction limite dans chaque cas.
> On pourra se représenter les courbes "en mode film".

# I.1 Convergence simple

 - C'est la notion "facile" : la seule nouveauté, comparé au semestre 3, c'est la présence d'un paramètre $x \in I$ dans les calculs des $\lim\limits_{ n \to \infty } a_{n}$ (on aura $\forall n, \quad a_{n} = f_{n}(x)$)
 - La seule difficulté sera la disjonction des cas : on devra parfois choisir des techniues différentes de calcul de limite $\lim\limits_{ n \to \infty }f_{n}(x)$ selon la valeur fixée $x$
 - Le mot dordre de CVS est :
     - $x$ est fixé, $n$ bouge

> [!definition] Définition : Convergence simple
> Soit $I \subset \mathbb{R}$ et $\forall n \in \mathbb{N}\; (\text{ou } \mathbb{N}^{*},\dots) \quad f_{n}(\cdot)$ une fonction de $I$ dans $\mathbb{R}$
> On dit que $f_{n} \to f$ **simplement sur $I$** si :
> Pour tout $x \in I$ fixé, la suite numérique $(f_{n}(x))_{n}$ a une limite, et cette limite vaut $f(x)$ 
> On résume ceci dans $\boxed{\forall x \in I\quad \lim\limits_{ n \to \infty }f_{n}(x) = f(x)}$

On désignera la convergence simple par le sigle "CVS".
On pourra dire "convergence ponctuelle" à la place de "simple".

 - On remarque que le terme défini n'est pas "CVS", mais "CVS sur $I$". De fait, la notion dépend (un peu) de l'intervalle $I$ choisi

> [!example] Exemple 
> $f_{n} : x \mapsto x^{n}$ est définie sur $\mathbb{R}$.
>  -  Si l'on regarde cette suite sur $I = [0; 1]$, il y a CVS vers la fonction limite $f: x \mapsto \begin{cases} 0, x \in [0, 1[\\ 1, x = 1 \end{cases}$
>  - Si l'on regarde cette suite sur $I = \left[0; \frac{1}{2} \right]$, il y a CVS vers la fonction limite nulle en tout point
>  - Si l'on regarde cette suite sur $I = \mathbb{R}$, il n'y a pas CVS puisque pour certains $x \in I$, la suite $(x^{n})_{n}$ diverge

## Reformulation technique de CVS
A fin de comprendre la notion de convergence uniforme (CVU) qui fera l'objet du chapitre suivant, on va déchiffrer la notion de CVS en termes de $\varepsilon$ (ce langage s'impose dès que l'on tombe sur des preuves délicates !)

> [!definition] CVS en termes de $\varepsilon$
> On dit que la suite $(f_{n}(\cdot))_{n}$ de fonctions définies sur $I$ **converge simplement** (ponctuellement) sur $I$ vers la fonction limite $f(\cdot)$ si :
> $\boxed{\forall x \in I, \quad \left[ \forall \varepsilon > 0, \quad \exists N = N_{\varepsilon, x} \quad \text{tq} \quad \forall n \geq N \quad |f_{n}(x) - f(x)| \leq \varepsilon \right]}$

Il est essentiel, dans cette définition, que **N est autorisé à dépendre de $x$** 
 - pour chaque $x$ fixé, $N_{\varepsilon, x}$ augmente lorsque $\varepsilon$ diminue. La façon qu'a $N_{\varepsilon,x}$ d'augmenter avec $\varepsilon \downarrow 0$ décrit la **vitesse de convergence** de la suite $f_{n}(x)$

