#maths/analyse #review 
# multiplicité d'un point d'une courbe paramétrée

Soit $f$ une [[courbe paramétrée]] :
$\begin{align*} f:& D\subset\R \rightarrow \R^2\\ &t\mapsto M(t)  \end{align*}$ 

Soit $A$ un point du [[Support d'une courbe paramétrée|support]] de $f$ 
La _multiplicité_ de $A$ est $\card(f^{-1}(A))$

C'est donc le nombre de réels $t$ pour lesquels $M(t) = A$


 - Si $A$ Est atteint une et une seule fois, sa multiplicité est $1$ et on dit que A est un _point simple_
 - Si $A$ est atteint pour deux valeurs distinctes du paramètre et deux seu∊ment, on dit que $A$ est un _point double_
 - _points triples_, _points quadruples_, etc...
 - _point multiple_ quand il est atteint au moins deux fois

 - une courbe dont **tous les points sont simples** est une _courbe paramétrée simple_

## Trouver les points multiples

Pour trouver les points multiples d'une courbe, on cherche les couples $(t,u)\in D^2$ tels que $t>u$ et $M(t)=M(u)$

On se limite au couple $(t,u)$ avec $t>u$ pour ne pas compter les deux solutions redondantes $(u,t)$ et $(t,u)$


