# Loi de composition interne

## Définition

Soit $E$ un ensemble non vide.
Une _loi de composition interne_ $*$ sur $E$ est la donnée d'une [[application]] de $E^2$ dans $E$, qui, à un couple $(x, y)\in E^2$ associe un élément $z\in E$.
On écrit : $x*y = z$ (composée de $x$ par $y$)

## Voir
 - [[stabilité pour une loi]]
 - [[table de cayley]]

## Propriétés

### [[associativité d'une loi]]
$\forall(a,b,c)\in E^3, a*(b*c)=(a*b)*c$

### [[élément neutre]]
$\exists e\in E, \forall a\in E, a*e=e*a=a$

### [[éléments symétrisables d'une loi]]
$a\in E$ est symétrisable ssi: $\exists a'\in E, a*a' = a'*a = e$
### [[commutativité d'une loi]]
$\forall(a,b)\in E^2, a*b = b*a$
### [[distributivité d'une loi]]



## Définition
L'itération d'un élément.
Soit $E$ un ensemble muni d'une LCI $*$ [[associativité d'une loi|associative]], et soit $a\in E$.
On définit _l'itéré $n$-ème_ de $a$, pour $n\in\mathbb N^*$, noté $a^{*n}$ par :
 - $a^{*1} = a$
 - $a^{*2} = a*a$
 - $a^{(*n)} = a^{*(n-1)}*a$
 Si $E$ possède un [[élément neutre]] $e$, on écrit $a^{*0} = e$.
 Si de plus, $a$ est [[éléments symétrisables d'une loi|symétrisable]], on note $a^{*(-1)} = a^{-1},\, a^{*(-2)} = (a^{-1})^{*2},\, \ldots,\, a^{*(-n)} = (a^{-1})^{*n}$

## Exemple

Soit $E$ un ensemble non vide.
On définit une loi de composition interne $\Delta$ sur $\mathscr P(E)$ :
Soit $(A, B)\in(\mathscr P(E))^2, A\Delta B = \complement_{A\cup B}(A\cap B)$ 
On appelle cette loi "Différence symétrique"


