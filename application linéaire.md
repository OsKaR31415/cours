---
sr-due: 2022-09-05
sr-interval: 15
sr-ease: 286
alias: ["applications linéaires", "linéaire", "linéaires"]
---
up::[[application]]
sibling::[[combinaison linéaire]]
title::"$f(\lambda u+v) = \lambda f(u) + f(v)$"
#maths/algèbre 
# application linéaire
Soient $f$ une [[application]], et $E$ et $F$ deux [[espace vectoriel|espaces vectoriels]] réels,
$f: E \mapsto F$ est _linéaire_ ssi :
$\forall(u,v)\in E^{2}, \forall\lambda\in\mathbb{R},\;\;\; f(u+v) = f(u) + f(v) \;\;\wedge\;\; f(\lambda u) = \lambda f(u)$


## Autres définitions
Soient $f$ une [[application]], et $E$ et $F$ deux [[espace vectoriel|espaces vectoriels]] réels,
Une application $f: E \mapsto F$ est _linéaire_ ssi :
$\forall (u, v)\in E^{2}, \forall\lambda\in\mathbb{R}, \quad f(\lambda u + v) = \lambda f(u) + f(v)$

Une [[application]] $f$ est _linéaire_ ssi ses [[composition de fonctions|composées]] à gauche et à droite avec toute [[combinaison linéaire]] sont égales, soit si appliquer $f$ avant ou après une [[combinaison linéaire]]  des vecteurs donne le même résultat


## Exemples

L'application $\begin{aligned} Id: & E\mapsto E\\ & u \mapsto u \end{aligned}$ est une _application linéaire_

L'application $$\begin{aligned}
f: & \mathbb{R}^2 \mapsto \mathbb{R}\\
   & \begin{pmatrix} x\\y \end{pmatrix}
     \mapsto
     \begin{pmatrix}
         x + y\\
         x - y\\
         2x + 3y
     \end{pmatrix}
\end{aligned}$$

## Propriétés

Soient $E$ et $F$ deux [[espace vectoriel|espaces vectoriels]] réels de dimension finie, et $f: E\rightarrow F$ une _application linéaire_, alors :

  - $\dim \ker f + \dim \mathrm{Im} f = \dim E$ ([[théorème du rang]])
      - $\dim$ la [[dimension d'un espace vectoriel]]
      - $\ker$ le [[Noyau d'une application linéaire]]
      - $\mathrm{Im}$ l'[[image d'une application linéaire]]
  - Lorsque $E = F$, $f$ est un [[endomorphisme]] de $E$ (un [[endomorphisme linéaire]])
      - alors $f$ est [[injection|injective]]
      - alors $\ker f = \{0_E\}$
      - alors $\dim\ker f = 0$
      - alors $\dim\mathrm{Im} f = \dim E$ (grâce au [[théorème du rang]])
      - alors $\mathrm{Im} f = E$
      - alors $f$ est [[surjection|surjective]]
      - D'où : si $f$ est un [[endomorphisme]] de $E$, $f$ est une [[bijection]]

