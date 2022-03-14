#maths/analyse
# formules de Taylor
Formules pour calculer des [[développements limités]].

## Formule de Taylor pour les polynômes
Soit $P$ un [[polyôme]], $a$ un réel, $n$ un entier tel que $n\geq deg(P)$
Alors :
$\boxed{ P(a) = \sum_{k=0}^n \left( \dfrac{p^{(k)}(a)}{k!}\cdot(x-a)^k \right) }$

### Exemple
$P(x) = 3x^4 + 5x^3 - 4x^2 + x - 7$
$a = 2$, $n = 4$
D'après la formule de Taylor :
$$P(x) = \dfrac{P^{(0)}(2)}{0!}(1-2)^0 + \dfrac{P^{(1)}(2)}{1!}(x-2)^1 + \dfrac{P^{(2)}(2)}{2!}(x-2)^2 + \dfrac{P^{(3)}(2)}{3!}(x-2)^3 + \dfrac{P^{(4)}(2)}{4!}(x-2)^4$$
- $P^{(0)}(x) = P(x) = 3x^4 + 5x^3 - 4x^2 + x - 7$
- $P^{(1)}(x) = 12x^3 + 15x^2 - 8x + 1$
- $P^{(2)}(x) = 36x^2 + 30x - 8$
- $P^{(3)}(x) = 72x + 30$
- $P^{(4)}(x)=72$
- $P^{(n)}(x) = 0$ pour $n\geq5$

$P(a)$

## Formule de Taylor Lagrange
Soit $[a; b]$ un intervalle de $\mathbb R$, $a<b$,
et soit $f$ une fonction définie sur $[a; b]$ :
 - de classe $C^n$ sur $[a;b]$ (voir [[classe d'une fonction]])
 - telle que $f^{(n+1)}$ existe sur $]a; b[$

Alors, il existe $c\in]a;b[$ tel que :
$$f(b) = f(a)+\dfrac{f^{(1)}(a)}{1!}(b-a) + \dfrac{f^{(2)}(a)}{2!}(b-a)^2 + \ldots + \dfrac{f^{(n)}(a)}{n!}(b-a)^n + \dfrac{f^{(n+1)}(c)}{(n+1)!}(b-a)^{n+1}$$

 Soit :
 $$f(b) = \sum_{k=0}^n \left(\dfrac{f^{(k)}(a)}{k!}(f-a)^k\right) + \dfrac{f^{(n+1)}(c)}{(n+1)!}(f-a)^{n+1}$$

 Ici, le terme supplémentaire dans la somme, $\dfrac{f^{(n+1)}(c)}{(n+1)!}(f-a)^{n+1}$, est appelé _reste de Lagrange_.


### Formule de Mac-Laurin (cas particulier)
Dans le cas particulier où $a=0$
 $$f(x) = f(0) + \dfrac{f^{(1)}(0)}{1!}x + \dfrac{f^{(2)}(0)}{2!}x^2 +\ldots + \dfrac{f^{(n)}(0)}{n!}x^n + \underbrace{\dfrac{f^{(n+1)}(c)}{(n+1)!}x^{n+1}}_{\text{reste de Taylor}}$$

 ## Formule de Taylor-Young
 A l'ordre $n$, au voisinage de $x_0$ :
 Soient $f$ une fonction définie sur un intervalle $I$, $n\in\mathbb N^*$, $x_0\in I$;
 On suppose que $f$ est de [[classe d'une fonction|classe]] $C^{n-1}$ sur $I$ et que $f^{(n)}(x_0)$ existe.
 Alors : Il existe une fonction $\varepsilon$ définie sur $I$ telle que :
 $\displaystyle f(x) = \sum_{k=0}^n \left(\dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k\right)+(x-x_0)^n\varepsilon(x)$ avec $\displaystyle\lim_{x\rightarrow x_0} \varepsilon(x) = 0$.
 
 