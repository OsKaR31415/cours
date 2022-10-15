#informatique #no-review 

---

 - Traduire APL en notation mathématique
 - Utiliser la notation mathématique la plus standard possible

# Notes
 - TMN signifie "Traditionnal Mathematical Notation" : Notation Mathématique Traditionnelle
 - RTL et LTR :
     - RTL : Right-To-Left : quand ce qui est à droite (Right) est évalué en premier, et ce qui est à gauche en dernier 
         - APL est en RTL, la TMN est en LTR
         - Ex: `2×3+1` $\leftrightarrow 2\times(3+1) \leftrightarrow 1+2\times3$
     - LTR : Left-To-Right : quand ce qui est à gauche (Left) est évalué en premier
         - Ex: $10 - 1 - 10 \leftrightarrow$ `(10 - 1) - 10`
 - équivalence entre expressions : `expression APL` $\leftrightarrow$ $\text{expression TMN}$

# Equivalence entre APL et la notation mathématique

# Opérations mathématiques standard

## Sur les nombres réels

Les opérations sur l'ensemble des nombres réels sont presque équivalentes en TMN et en APL

Soient $a$ et $b$ deux Réels

| opération                 | APL     | TMN                           |
| ------------------------- | ------- | ----------------------------- |
| addition                  | `a + b` | $a+b$                         |
| soustraction              |         |                               |
| multiplication            | `a × b` | $a\times b$                   |
| division                  | `a ÷ b` | $\dfrac{a}{b}$                |
| inversion                 | `÷a`    | $\dfrac{1}{a}$ or $a^{-1}$    |
| valeur absolue            | `|a`    | $a$                             |
| partie entière            | `⌊a`    | $\lfloor a \rfloor$ ou $E(a)$ |
| partie entière supérieure | `⌈a`    | $\lceil a \rceil$             |

### Fonctions trigonométriques
Les fonctions trigonométriques ($\sin$, $\cos$, $\tan$, $\arcsin$...) sont toutes accessibles en APL avec le symbole `○`
Par exemple, `1○` $\leftrightarrow$ $\sin$, et `¯1○` $\arcsin$

## Opérations particulières à APL

La multiplication par $\pi$ est une primitive d'APL, notée `○`. 
Par exemple, `○ 2` $\leftrightarrow$ $2\pi$

## Opérations mathématiques

 - La **racine carrée** : $\sqrt{a}$ n'est pas une primitive. On peut l'exprimer de plusieurs manières :
     - Avec une puissance $\frac{1}{2}$ : `(a)*1÷2`, ou `(a)*÷2`
         - Problème : il faut mettre des parenthèses :
             - `a+b*÷2` $\leftrightarrow a+\sqrt{b} \nleftrightarrow \sqrt{a+b}$
             - `(a+b)*÷2` $\leftrightarrow (a+b)^{\frac{1}{2}} \leftrightarrow \sqrt{a+b}$
     - Avec une puissance [[APL to maths#Equivalence entre APL et la notation mathématique#Combinateurs|commutée]] : `(÷2)*⍨a`
         - Avantage : pas besoin de parenthèses autour de l'expression :
             - `(÷2)*⍨a+b` $\leftrightarrow \sqrt{a+b}$
         - Problème : parenthèses autour de `÷2`
             - Solution : utiliser `0.5` ou `.5`
                 - `.5*⍨a` $\leftrightarrow \sqrt{a}$
                 - `.5*⍨a+b` $\leftrightarrow \sqrt{a+b}$

 - Note sur les puissances
     - Puisque APL utilise une notation RTL, les puissances peuvent nécessiter des parenthèses. Pour cela, de la même manière que pour la racinne carrée, on utilise _commute_ :
         - `3*⍨6` $\leftrightarrow 6^3$



