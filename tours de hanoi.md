#maths #informatique 
# tours de hanoi

# Les Tours de Hanoi

## histoire et principe

histoire des moines avec les (64 ?) disques d'or sur des piques en diamant

Pour savoir quand sera la fin des temps, il faudrait pouvoir calculer le nombres d'étapes nécessaires.
Pour cela, il faut déjà savoir comment résoudre çe casse-tête !

## Algorithme de résolution

Supposons que l'on sait comment déplaçer $n$ disques depuis un pic vers un autre.

On saura alors coment déplacer $n+1$ disques, car il suffit de d'abord déplacer les $n$ pics du dessus, déplacer le plus grand tout seul, puis déplacer à nouveau les $n$ pics au dessus du plus grand.

il faut donc faire 2 fois le déplacement de $n$ disques, ainsi que une fois le déplacement d'un seul disque, pour déplacer $n+1$ disques.
en notation mathématiques, $D_{n+1} = 2\times D_n + 1$

## conclusion sur le nombre d'étapes

On à déjà posé que $D_{n+1} = 2\times D_n + 1$.
On peut aussi dire que $D_1 = 1$, puisqu'il faut une étape pour déplacer une tour à un seul disque.

On note : $$\left\{ \begin{array}{l}
D_1 = 1\\
D_{n+1} = 2 \times D_n + 1
\end{array}
\right.$$

Exemple : pour une tour à 5 disques, $D_5 = 2 \times D_4 + 1 = 2\times(2\times(2\times(2\times(2\times1+1)+1)+1)+1)+1$
On peut le simplifier en : $2^5 + (1+2+4+16+32)$, soit $2^5 + (2^0+2^1+2^2+2^3+2^4)$ ou encore $2^5 + 2^5-1$
La formule générale est en fait : $D_n = 2^{n+1} - 1$.
les nombres de la forme $2^n - 1$ sont appelés "nombres de Mersenne"

## Live coding de l'algorithme

Lien avec l'Informatique



