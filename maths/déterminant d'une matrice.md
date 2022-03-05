# déterminant d'une matrice

Soit $A$ une [[matrice]].

On note $\det(A)$ le _déterminant_ d'une matrice.

## Matrices de taille 2
Soit $A=\begin{pmatrix}a&b\\c&d\end{pmatrix}$
$\det A = ad - bc$

## Matrices de taille 3

### Méthode de Sarrus

$$\begin{align}
\det A &= \left|\begin{array}{cc}
                 a_{11}&a_{12}&a_{13}\\ 
                 a_{21}&a_{22}&a_{23}\\
                 a_{31}&a_{32}&a_{33}
                 \end{array}\right|\\
&= a_{11}a_{22}a_{33} + a_{12}a_{23}a_{34} + a_{13}a_{21}a_{32} - a_{31}a_{22}a_{13} - a_{32}a_{23}a_{11} - a_{33}a_{21}a_{12} 
\end{align}$$
On peut retrouver les coefficients avec le shéma suivant :
![[déterminant d'une matrice - méthode de Sarrus.excalidraw|1500]]


### Méthode générale

La méthode générale permet de calculer les déterminants de n'importe quelle matrice (carrée)
Cette méthode se base sur une formule de récurrence : 

 - On connaît le déterminant d'une matrice $2\times 2$
 - Pour des matrices de taille plus grandes, on applique cette règle :
```apl
det ← {
    ⍝ calculer le déterminant de ⍵
    coeffs ← ,1↑[2]⍵  ⍝ première colonne de ⍵ (coefficients utilisés plus tard)
    mat ← 1↓[2]⍵  ⍝ tout sauf la première colonne de ⍵
    ⍝ il faut récupérer toutes les sous-matrices carrées de mat obtenues en enlevant une ligne de mat
    nid ← ∘.≠⍨⍳≢⍵  ⍝ négation de la matrice identité de la taille de mat
    ⍝ On masque les lignes de mat avec successivement chaque ligne de nid (on enlève à chaque fois une ligne)
    submats ← ⌿∘mat¨↓nid ⍝ on obtient toutes les matrices sur lesquelles ont doit faire la récursion
    -/coeffs×∇¨submats ⍝ on obtient ici le déterminant
}
```

