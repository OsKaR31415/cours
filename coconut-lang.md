#informatique 
# coconut-lang
Langage de programmation : surcouche de python plus fonctionnelle

## Exemples

### Fonctions Lambda
La syntaxe des fonctions lambda est améliorée
```python
lambda x: 4 * x   # multiplication par 4
(x -> 4 * x)  # même chose 
```


### Composer des fonctions

#### Composition simple
la fonction `square_plus_1` correspond à `x -> 1 + x**2`
```python 
square = x -> x**2
plus_1 = x -> x+1
square_plus_1 = plus_1 .. square
```
La composition est faîte avec `..` et suit l'ordre mathématique de composition : $(f \circ g)(x) = f(g(x))$

#### Application partielle de fonction
Cette fonction met au carré chacun de ses arguments
```python
square_all = list .. map$(x -> x**2)
```

#### Chaîner des fonctions

Calcul de $\pi$ avec $\sum\limits_{k=1}^{n} \left(\frac{1}{k^{2}}\right) = \dfrac{\pi^{2}}{6}$, soit $\pi = \sqrt{ 6\times\sum\limits_{k=1}^{n} \left(\frac{1}{k^{2}}\right)}$
```python
range(1, n) |> map$(k -> 1/k**2) |> sum |> list |> print
```
 - on utilise `|>` pour chaîner des fonctions
 - on utilise `k -> 1/k**2` pour définir une fonction anonyme (`lambda k: 1/k**2)`
 - on utilise l'application partielle de fonction pour intégrer dans la chaîne de fonctions

### Gestion des itérables
On peut utiliser l'opérateur `::` (cons) pour chaîner des itérables

