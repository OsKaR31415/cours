# éléments symétrisables d'une [[loi de composition interne]]
Soit $E$ in ensemble muni d'une [[loi de composition interne]] $*$, et contenant un [[élément neutre|élément neutre]] $e$.
Un élément $a\in E$ est symétrisable ssi :
$\exists a'\in E, a*a' = a'*a = e$

## Notation
Soit $a\in E$, on note généralement $a^{-1}$ le symétrique de $a$ par la loi $*$

## Remarque
- Si $a*a'=e$, $a'$ est le symétrique à droite de $a$
- Si $a'*a=e$, $a'$ est le symétrique à gauche de $a$


## Propriété
Si un élément $a\in E$ possède un symétrique $a'$, ce symétrique est unique.

### Démonstration
On suppose qu'un élément $a\in E$ possède deux symétriques $a'$ et $a''$ pour la loi $*$. (On suppose que $e$ possède un élément neutre $e$).
Alors :
 - $a*a' = e = a'*a$
 - $a*a'' = e = a''*a$
 - $a''*(a*a') = (a''*a)*a'$
 - $a''*e = e*a'$, soit $a''=a$
Il n'est dont pas possible qu'un élément possède deux symétriques.

Donc tout élément de $E$ possède au maximum un symétrique




## Propriété
On suppose que deux éléments $x_1$ et $x_2$ dans $E$ possèdent chacun un symétrique. La loi $*$ est supposée associative.
$x_1*x_1^{-1} = e = x_1^{-1} * x_1$
$x_2*x_2^{-1} = e = x_2^{-1} * x_2$
$\begin{aligned}(x_1*x_2)*(x_2^{-1}*x_1^{-1}) &= x_1 * (x_2*x_2^{-1})*x_1{-1}\\ &= x_1*(e*x_1^{-1})\\ &= x_1*c_1^{-1}\\ &= e\end{aligned}$


Donc $x_2^{-1} * x_1{-1}$ est un symétrique à droite de $x_1*x_2$.

$\begin{aligned}(x_2^{-1}*x_1^{-1})*(x_1*x_2) &= x_2^{-1}*(x_1^{-1}*x_1)*x_2\\ &= x_2^{-1}*x_2\\ &= e\end{aligned}$
$(x_1*x_2)^{-1} = x_2^{-1}*x_1^{-1}$
(La symétrisation est distributive sur sa loi)
