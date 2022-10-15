up::[[MOC arithmétique]]
#maths/arithmétique #review 

----
Le Plus Grand Commun Diviseur de plusieurs nombres (souvent deux) est noté  $\text{pgcd}(a; b; c;\cdots)$ et est le plus grand nombre qui divise tous ces nombres

> [!definition] PGCD
> $\mathrm{pgcd}(a;b) = \mathrm{max} \{ d \in \mathbb{Z} \mid (d \mid a) \wedge (d \mid b) \}$
> 
> Ou bien, pour plus de deux nombres :
> $\mathrm{pgcd}(x_{1};x_{2};x_{3};\cdots) = \mathrm{max} \{ d \in \mathbb{Z} \mid (d\mid x_{1}) \wedge (d\mid x_{2}) \wedge (d\mid x_{3}) \cdots \}$
> 
^definition

> [!definition] autre définition
> Le $\text{pgcd}$ de $x_1, x_2, x_3,\ldots$ est le produit de l'intersection des [[ensemble avec répétitions]] des [[décomposition en facteurs premiers|décompositions en facteurs premiers]] de chacun des nombres $x_1,x_2,x_3,\ldots$
^definition

## Propriétés
Soient $a$ et $b$ deux entiers non nuls
 - $\mathrm{pgcd}(a,b)\times\mathrm{ppcm}(a,b)=|ab|$
     - [[ppcm]]

