# formules de Taylor

## Formule de Taylor pour les polynômes
Soit $P$ un [[polyôme]], $a$ un réel? $n$ un entier tel que $n\geq deg(P)$
Alors :
$\displaystyle P(x) = \sum_{k=0}^n \left( \dfrac{p^{(k)}(a)}{k!}\cdot(x-a)^k \right)$

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