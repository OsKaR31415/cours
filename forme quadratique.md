#maths/algèbre

----


> [!definition] Forme quadratique
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] finie
> Une *forme quadratique* sur $E$ est une [[application]] $Q$ de $E \to \mathbf{K}$ qui s'exprique quelle que soit la [[base d'un espace vectoriel|base]], sous la forme d'un [[polynôme homogène]] de [[degré d'un polynôme|degré]] $2$
^definition

> [!definition] Forme quadratique
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] finie
> Une *forme quadratique* sur $E$ est une [[application]] $q$ de $E \to \mathbf{K}$ qui peut s'exprimer comme $q(x) = b(x, x)$, où $b$ est une [[forme bilinéaire]] de $E^{2} \to \mathbf{K}$

# Propriétés 

> [!definition] Théorème
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]] de [[dimension d'un espace vectoriel|dimension]] finie
> Soit $Q : \mathbf{E} \to K$ une [[application]] 
> $Q$ est une forme quadratique ssi : 
> 
> $\boxed{\forall x \in E, \quad \forall \lambda \in \mathbf{K}, \quad Q(\lambda x) = \lambda^{2}Q(x)}$
>  - similaire à l'[[application homogène|homogénéité]] pour des [[application linéaire|applications linéaires]]
> 
> $\boxed{\begin{align}B :\, & E^{2}  \to \mathbf{K} \\ &(x, y) \mapsto \frac{1}{2} \left( Q(x+y) - Q(x) - Q(y) \right) \end{align}}$ est une [[forme bilinéaire symétrique]]
>  - on a alors $B(x, x) = Q(x)$
>  - la [[forme bilinéaire symétrique|symétrie]] de $B$ est important pour qu'elle soit unique à respecter cette propriété
>  - $B$ est la [[forme bilinéaire symétrique associée à une forme quadratique|forme quadratique associée]] à $\varphi$

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```