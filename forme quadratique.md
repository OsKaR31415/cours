#maths/algèbre 
# forme quadratique

> [!definition] Forme quadratique
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] finie
> Une *forme quadratique* sur $E$ est une [[application]] $Q$ de $E \to \mathbf{K}$ qui s'exprique quelle que soit la [[base d'un espace vectoriel|base]], sous la forme d'un [[polynôme homogène]] de [[degré d'un polynôme|degré]] $2$
^definition

## Propriétés 
Soit $E$ un $\mathbf{K}$-[[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] finie

Soit $Q : \mathbf{E} \to K$ une [[application]] 

 - $Q$ est une [[forme quadratique]] ssi :
     1. $\forall x \in E,\quad \forall \lambda \in \mathbf{K},\quad  Q(\lambda x) = \lambda^{2}Q(x)$
     2. $\begin{align}B : & E^{2}  \to \mathbf{K} \\ &(x, y) \mapsto \frac{1}{2} \left( Q(x+y) - Q(x) - Q(y) \right) \end{align}$ est une [[application bilinéaire symétrique]]
     - on a alors $B(x, x) = Q(x)$

