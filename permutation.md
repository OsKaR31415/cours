#maths/algèbre 
# permutation
Une _permutation_ représente le réarrangement d'objets.

## Définition
Une permutation est une [[bijection]] d'un ensemble dans lui-même.
Notamment, une permutation de $n\in\mathbb N$ éléments est une [[bijection]] d'un ensemble fini de [[cardinal]] n sur lui-même.

On parle généralement des permutations sur un intervalle $[\![1;n]\!]$.


## Notation
On note $\mathfrak S_n$ l'ensemble des permutations sur $[\![1;n]\!]$.

un élément $\sigma\in\mathfrak S_n$ se note :
$\begin{pmatrix}1&2&\cdots&i&\cdots&n\\\sigma(1)&\sigma(2)&\cdots&\sigma(i)&\cdots&\sigma(n)\end{pmatrix}$

- exemple de permutations sur $\mathfrak S_3$ :
    - - permutation identité :
        - $id: \begin{pmatrix}1&2&3\\1&2&3\end{pmatrix}$
        - ici, $id(1) = 1$, $id(2)=2$, $id(3)=3$
    - - autres permutations : 
        - $s_1: \begin{pmatrix}1&2&3\\1&3&2\end{pmatrix}$
     
        - $s_2: \begin{pmatrix}1&2&3\\2&1&3\end{pmatrix}$
     
        - $s_3: \begin{pmatrix}1&2&3\\1&2&3\end{pmatrix}$
     
        - $s_4: \begin{pmatrix}1&2&3\\3&2&1\end{pmatrix}$
        
        - $s_5: \begin{pmatrix}1&2&3\\2&3&1\end{pmatrix}$
        
        - $s_6: \begin{pmatrix}1&2&3\\3&1&2\end{pmatrix}$

- $\sigma^n$ la composée $n$ fois de $\sigma$ avec elle-même
    - $\sigma^1 = \sigma$
    - $\sigma^n = \sigma\circ\sigma^{n-1}$
    
- Permutation réciproque : $\sigma^{-1}$
    - $\forall n, \sigma(\sigma^{-1}(n)) = \sigma^{-1}(\sigma(n)) = n$
    - comme une généralisation de $\sigma^n$

