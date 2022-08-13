up::[[APL]]
#informatique #no-review 
# workshop array programming

## [[notation as a tool of thought.pdf|Notation as a tool of thought]]

# Presentation :
[[array programming]]


# Notions importantes

 - iota `⍳`
 - reduce `+/` ET replicate `1 0 0 1 0 1 0 0 0 / 'caractere'`
     - `⊢/` et `⊣/`
 - reshape `⍴`
 - reverse `⌽` et les `⍉` et `⊖`
 - tally `≢`
 - take `↑` et drop `↓`
     - monadiques et dyadiques
 - produit externe `∘. `
 - dfns (fonction anonymes)
     - syntaxe `{⍵}`
     - appels récursifs avec `∇`
 - forks (2-forks et 3-forks, monadiques et dyadiques)
 - composition `∘`
 - inverseur `⍨`
 - puissance `⍣`


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


## Problem solving
 - score des entreprises
     - une entreprise est "proche" d'une autre si la différence de leurs scores < 95
     - on cherche pour chaque entreprise à savoir lequelles sont proches d'elle 

 - salaires des génies
     - filtrage par salaires (salaire > 3000)
     - filtrage par primes (primes > 200)
     - personnes dont les primes font au moins 6% du salaire


## Notes

 - "APL fait la même chose que n'importe quel langage. Il le fait juste plus"
     - "APL does the same thing as every programming language, it only does it more"
 - "Tout en programmation est tableau : les nombres sont des tableaux de chiffres, les strings sont des tableaux de caractères, les caractères sont des tableaux de bits..."
     - "everything in programming is array : integers are digits arrays, strings are chars arrays, binary numbers are bits arrays..."

 - `⍳` index generator
 - `⊢` et `⊣` le pistolet : renvoie celui qui est mort
     - `1⊢2` 1 a le pistolet, 2 est mort
     - `1⊣2` 2 a le pistolet, 1 est mort 
     - `1⊢2⊢3` 1 force 2 à tuer 3
     - `⊢/⍳5` une chaîne d'obligations qui tue 5
 - `⍨` est la tête que l'on fait quand on le voit la première fois
 - `⍣` est la tête que l'on fait quand on comprends ce qu'il fait




## Introduction
 what is `2+2` ?
-> 4 !
**no :** it is an **expression**, composed of `2`, `+`, `2`

but what are these components ? `2` is this kind of weird question mark with an underscore... Oh you mean, `2` represents the number `2`, right !? But then, the symbol `2` in `21` hasn't the same meaning the one in `254` or even the one in `0.042` !
And, for the `+`, can you give me a clear, precise and complete definition of what it means ? it would literally take pages and pages !



> notation is a tool of thought - iverson
> "a good notation sets it free to concentrate on more advanced problems, and in effect increases the mental power of the race." -Whitehead It is clear that the innovations of Indian Numerals, Algebraic and other mathematical notation have made it easier for the human brain to conceive of relationships between things, and the application and importance of those relationships over time.
> 
> Nobody argues WHETHER algebra is a worthy notation
 The value in the notation itself is evident (edited)
 So too do notational expressions in APL encodes layers of meaning that can be intuited, and layered upon over time
 If there was a notation for programming in the general sense, that would have value beyond whatever language would be used to implement
 Sharing ideas accross languages and disciplines would be trivialized just as the concepts between physics, engineering, material analysis, computer science, linguistic analysis all share concepts rooted in Algebra and symbolic transformation of expressions (edited)
 Every other field recognizes the value of notation
