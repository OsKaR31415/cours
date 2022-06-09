#maths/arithmétique #review 
# théorème de Bézout
Soit $(a, b)\in(\mathbb N^*)^2$,
Soit $d = \pgcd(a; b)$,
$\exists(u, v)\in\mathbb Z^2, au+bv = d$

C'est-à-dire que, soient deux nombres entiers naturels non nuls, il existe toujours une [[combinaison linéaire]] (a coefficients entiers relatifs) des deux nombre qui est égale au [[PGCD]] de ces deux nombres.
Ces deux coefficients, $u$ et $v$, sont appelés [[coefficients de Bézout]]

## Notation
Le $\pgcd$ de $a$ et $b$ peut être noté :
 - $\pgcd(a;b)$ ou $\text{PGCD}(a;b)$
 - $a\wedge b$
 - `a ∨ b` en [[APL]]
     - plus cohérent quand on est sur $\{0; 1\}$
 - `a and b` en [[python]]


## Corollaires

### Corollaire 1
Pour tout $d\in\Z$, si $d\mid a$ et $d\mid b$, alors $d\mid \text{pgcd}(a; b)$
 - Si $d=0$, $d\not\mid a$ et $d\not\mid b$ donc, on peut dire $d\in\Z^*$
 - Démonstration : 
     - $d\mid au$ et $d\mid bv$ donc $d|au+bv$ soit $d|\text{pgcd}(a;b)$

### Corollaire 2
deux entiers sont [[nombres premiers entre eux|premiers entre eux]] ssi il existe $u, v\in\Z$ tels que $au + bv = 1$
 - Démonstration :
     - on suppose qu'il existe $u,b\in\Z$ tels que $au+bv=1$
     - comme $\text{pgcd}(a;b)|a$, alors $\text{pgcd}(a;b)|au$
     - de même, $\text{pgcd}(a;b)|bv$
     - donc $\text{pgcd}(a;b)|au + bv$ 
     - donc $\text{pgcd}(a;b) = 1$
     - dans l'autre sens, si $a$ et $b$ sont [[nombres premiers entre eux|premiers entre eux]], leur $\text{pgcd}$ est égal à un par définition

### Lemme de Gauss
si $a\mid bc$ et $\text{pgcd}(a;b) = 1$, alors $a\mid c$
 - lemme de [[Carl Friedrich Gauss|Gauss]]
 - autrement dit : si $a$ et $b$ sont [[nombres premiers entre eux|premiers entre eux]], alors $a\mid bc \implies a\mid c$



