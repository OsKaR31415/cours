up::[[permutation]]
#maths/algèbre 

----

Une _transposition_ est une [[permutation]] qui n'échange que 2 éléments.
Une transposition est donc un [[p-cycle|2-cycle]].

# Définition
Soit $\sigma\in\mathfrak S_n$.
$\sigma$ est une transposition ssi :
 - Il existe 2 éléments distincts $a$ et $b$ tels que $\sigma(a)=b$ et $\sigma(b)=a$
 - $\forall i\notin\{a;b\}, \sigma(i)=i$ (tous les autres éléments sont invariants par $\sigma$).

# Exemple :
$\sigma = \begin{pmatrix}1&2&3\\1&3&2\end{pmatrix}$ est une _transposition_


# Propriétés

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```