#todo
# workshop array programming

| state | idea                                                |
|:-----:| --------------------------------------------------- |
|       | abt APL / array programming                         |
|       | workshop format                                     |
|   -   | programmation tacite (trains, combinators)          |
|   -   | linked to python -> how array prog helps for python |
|   -   | abt how APL is like mathematical notation           |
|   ?   | abt design patterns for a programming language      |
|   ?   | abt how APL fits more to the problem                |
|   ?   | abt how APL is a "tool of thought"                  |


## [[iverson.pdf|Notation as a tool of thought]]

# Presentation :
[[array programming]]

# Introduction/Exercices

 - somme des entiers
     - `+/⍳5`
     - `(⍳5)+⌽⍳5` -> `6 6 6 6 6` ($5\times 6$)
     - `{(⍵×⍵+1)÷2}` <=> $\frac{n(n+1)}{2}$
 - racines d'un polynôme :
     - `(b(+,-)((b*2)-4×a×c)*.5)÷2×a` (trains)
     - `(2×a)÷⍨b(+,-).5*⍨(b*2)-4×a×c` (tacite, trains)
 - factorielle
     - `×/`
     - `{⍵<1: 1 ⋄ ⍵×∇⍵-1}` (récursif)
 - fibbonacci
     - `{⍵<1: 0 ⋄ ⍵=1: 1 ⋄ +/∇¨⍵-1 2}¨⍳` (récursif)
     - `({⍵,+/¯2↑⍵}⍣5)1 1` (avec Power)
     - `((⊢,(+/¯2∘↑))⍣10) 1 1` (tacite, avec Power)
 - triangle de pascal
     - `{1,(2+/⍵),1}` direct
     - `{(0,⍵)+(⍵,0)}` autre solution
     - `((0∘,+,∘0)⍣10) 1` (tacite)
 - calcul de $\varphi$
     - `(1+5*.5)÷2` voire `2÷⍨1+.5*⍨5` (tacite)
     - `1 ((1+÷)⍣=) 1` (tacite, trains, fraction continue)
 - calcul de $e$
     - `+/÷!⍳20` : $\sum_{n=1}^{20}\frac{1}{n!}$
    


