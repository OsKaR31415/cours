#maths/arithmétique 
# nombres premiers entre eux
Deux nombres sont _premiers entre eux_ si leur [[pgcd]] est égal à $1$.

## Définitions
 - $a$ et $b$ sont premiers entre eux ssi ils n'ont aucun diviseurs en commun autres que $1$ et $-1$
 - $a$ et $b$ sont premiers entre eux ssi $\pgcd(a;b) = 1$
 - $a$ et $b$ sont premiers entre eux ssi $\exists (u,v)\in\Z^2, au+bv = 1$ ([[théorème de Bezout#Corollaires#Lemme de Gauss|lemme de Gauss]])

## Propriétés
 - Pour tout $a\in\Z$, $a$ et $a+1$ sont premiers entre eux.
     - 

```python
def foo(bar):
    yield from bar

def fact(n: int) -> int:
    if n < 0:
        raise ValueError
    if n == 0:
        return 1
    return n * fact(n - 1)
```

```scheme
(define (fact n)
  (if (<= n 0)
    1
    (* n (fact (- n 1)))))
```


