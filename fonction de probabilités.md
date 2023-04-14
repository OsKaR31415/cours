---
alias: [ "probabilité" ]
---
up:: [[espace probabilisé]]
title:: "$P: \mathscr{P}(\Omega) \to [0, 1]$", "$\displaystyle P(A) = \frac{\text{card}(A)}{\text{card}(\Omega )}$"
#maths/probabilités 

---

> [!définition] 
>  - $\forall \mathcal{A} \subset \Omega, \quad P(\mathcal{A}) \in [0, 1]$
>  - $P(\Omega) = 1$
>  - $P(\emptyset) = 0$
>  - Soient $A_1, A_2, \dots A_{n}$ des [[probabilités événement|événements]] deux-à-deux **disjoints** : $\displaystyle P\left( \bigcup _{i =1}^{n} A_{i} \right) = \sum\limits_{i}^{n} \Big( P(A_{i}) \Big)$
^definition

> [!definition] Définition calculatoire
> Soit $\Omega$ un [[probabilités univers|univers]], et $A \subset \Omega$ un [[probabilités événement|événement]]
> $\boxed{P(A) = \frac{\text{card(A)}}{\text{card}(\Omega)}}$


# Propriétés

 - $P(A \cup B) = P(A) + P(B) - P(A \cap B)$
