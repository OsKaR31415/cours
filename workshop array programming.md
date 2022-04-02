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

# Exercices

 - somme des entiers
 - racines d'un polynôme : `(2×a)÷⍨b(+,-).5*⍨(b*2)-4×a×c`
 - factorielle
 - fibbonacci
 - triangle de pascal
     - `{1,(2+/⍵),1}` direct
     - `{(0,⍵)+(⍵,0)}` autre solution
 - calcul de $\varphi$
     - `(1+5*.5)÷2` voire `2÷⍨1+.5*⍨5` _tacite_
     - `1 ((1+÷)⍣=) 1` _tacite, trains_
    


