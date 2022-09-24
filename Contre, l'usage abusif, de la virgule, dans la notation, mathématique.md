# Contre, l'usage abusif, de la virgule, dans la notation, mathématique 

La notation mathématique traditionnelle cherche à traduire des phrases et des calculs en symboles. Par exemple, on peut dire "tous les nombres entiers sont pairs ou impairs", mais on peut également écrire $\forall n \in \mathbb{N}, \quad (2\mid n) \vee (2 \nmid n)$, ce qui veut dire la même chose.

La notation mathématique intéressante principalement pour deux choses :
 - elle est plus lisible : on préfère $\forall x \in N, \forall i, j \in \mathbb{N}, \quad i\times j|n \implies (i\mid n) \wedge (j\mid n)$ plutôt que "si un entier est divisible par le produit de deux entiers, alors il est divisible par chacun des deux entiers"
 - elle en plus rigoureuse : écrire des théorèmes ou expressions mathématiques en français peut être ambigu et sujet à interprétation

C'est pour ce deuxième point que la virgule pose un problème : elle rend la notation mathématique moins rigoureuse, et parfois même ambiguë.

## Significations de la virgule
Pour comprendre les problèmes de la virgule, listons les significations possibles de ce symbole :

 - pour des vecteurs, elle sépare les valeurs : $(x, y, z)$
 - Elle sépare les quantificateurs : $\forall x \in \mathbb{R}, \exists y \in \mathbb{R} \dots$
 - Elle signifie "tel que" : $\displaystyle\forall x \in \mathbb{R} \underbracket{\;,\;}_{\text{séparateur}} \exists y \in \mathbb{R} \underbracket{\;,\;}_{\text{tel que}} y > x$
 - Elle "distribue" un $\in$ sur plusieurs valeurs : $\forall x \underbracket{\;,\;}_{x \text{ et} y} y \in \mathbb{R} \underbracket{\;,\;}_{\text{séparateur}} \exists z \in \mathbb{R} \underbracket{\;,\;}_{\text{tel que}} z = x+y$

## Ambiguités
Nous avons vu que la virgule possède plusieurs utilisations différentes. En fait, on peut aisément construire un exemple qui utilise toutes ces significations :

$\displaystyle\forall x \underbracket{\;,\;}_{x \text{ et } y} y \in \mathbb{R} \underbracket{\;,\;}_{\text{séparateur}} \exists y \in \mathbb{R} \underbracket{\,,\;}_{\text{tel que}} y \in (x \underbracket{\;,\;}_{\text{vecteur}} y)$

Ici, on a le même problème qu'avec l'écriture en français : le même mot (symbole) peut avoir beaucoup de significations selon le contexte. On peut tout de même donner des règles qui permet de reconnaître la





