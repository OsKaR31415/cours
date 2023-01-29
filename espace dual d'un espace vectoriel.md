---
alias: [ "ensemble des formes linéaire", "espace dual", "espace vectoriel dual" ]
---
up:: [[espace vectoriel]]
title:: 
#maths/algèbre 

---

> [!definition] ensemble des formes linéaire d'un espace vectoriel
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> On note $E^{*}$ l'ensemble des formes linéaires sur $E$
> 
> $E^{*}$ est appelé **espace dual de $E$**
> 
> On peut également utiliser la notation $\mathcal{L}(E, \mathbf{K})$ (l'[[ensemble des applications linéaires]] de $E \to \mathbf{K}$)
^definition

# Propriétés

 - $\dim E^{*} = \dim E$
     - Evident car une forme linéaire sur $E$ est une matrice de taille $1\times \dim E$, et donc $E^{*}$ peut être assimilé à $E$ par les matrices des formes linéaires
     - preuve : $\dim E* = \dim \left( \mathcal{L}(E, \mathbf{K}) \right) = \underbrace{\dim E \times \dim K}_{\text{taille des matrices de } E^{*}} = \dim E \times 1 = \dim E$

