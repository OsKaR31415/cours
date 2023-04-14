---
alias: [ "fonction de répartition", "fonction de répartition d'une variable aléatoire" ]
---
up:: [[variable aléatoire]]
title:: "$\begin{align} F:\,& \mathbb{R} \to \mathbb{R}\\ &x \mapsto P(X \leq x) \end{align}$"
#maths/probabilités 

---

> [!definition] fonction de répartition
> Soit $(\Omega, \mathscr{P}(\Omega), P)$ un [[espace probabilisé]]
> Soit $X$ une [[variable aléatoire réelle]] sur $\Omega$
> La **fonction de répartition** de $X$ est :
> $\begin{align} F :\, & \mathbb{R} \to \mathbb{R}\ \\ & x \mapsto P(X ^{-1}(]-\infty, x[)) = \boxed{P(X \leq x)} \end{align}$
^definition

# Propriétés

 - $\forall (a, b) \in \mathbb{R}^{2}, \quad a \leq b, \quad P(a < X \leq b) = F(b) - F(a)$
