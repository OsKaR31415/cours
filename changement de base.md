up:: [[base d'un espace vectoriel]] 
#maths/algèbre #no-review 

---

Soient $E$ et $F$ des $\mathbf{K}$-[[espace vectoriel|ev]]
 - Soient $B_0$ et $B'_{0}$ des bases de $E$
 - Soient $B_1$ et $B'_{1}$ des bases de $F$
Soit $f$ une [[application linéaire]] de $E \to F$
 - Soit $A$ la matrice de $f$ dans $B_0$ vers $B_1$
 - Soit $B$ la matrice de $f$ dans $B'_{0}$ vers $B'_{1}$
Soient $P$ et $Q$ des matrices de changement de base
 - $P$ change de $B_0$ vers $B'_{0}$ (elle transforme un vecteur de $B'_{0}$ en un vecteur de $B_0$)
 - $Q$ change de $B_{1}$ vers $B'_{1}$ 
Pour tout vecteur $X \in E$, avec $Y = f(X) = AX$ avec $X$ dans $B_0$ et $Y$ dans $B_1$
Pour tout vecteur $X' \in F$ avec $Y' = f(X') = BX'$ avec $X'$ dans $B'_{0}$ et $Y'$ dans $B'_{1}$

![[changement de base 2022-11-04 15.41.02.excalidraw|100%]]

## Matrice de passage
Une matrice de changement de base (ou matrice de passage) est la matrice $P$ formée des vecteurs de la base d'arrivée en colonne.
Alors, $P^{-1}$ correspond à l'[[application linéaire]] qui passe d'un vecteur dans la base de départ à un vecteur dans la base d'arrivée.

> [!example] Exemple 
> Changement de la base $B = \{ (0, 1); (1, 0) \}$ vers $B' = \{ (\pi; \phi); (42; 73) \}$
> La matrice de passage $P$ de $B_0$ vers $B_1$ est : 
> $P = \begin{pmatrix} \pi & 42\\ \phi & 73\end{pmatrix}$, c'est-à-dire les vecteurs de $B'$ en colonne
> Alors, soit $X$ un vecteur exprimé dans $B$, et soit $X'$ le même vecteur exprimé dans $B'$, on a :
> $X = PX'$ ou bien $X' = P^{-1}X$
>  - [!]  le sens est inversé

## Changement de base d'une application linéaire
Soit $f$ une [[application linéaire]] 
$f$ a pour matrice $A$ dans la base $B_0$ vers $B_1$
$f$ a pour matrice $B$ dans la base $B'_{0}$ vers $B'_{1}$

On cherche a faire un changement de base de l'application, c'est-à-dire exprimer $A$ en fonction de $B$ ou inversement.

On voit ci-dessous qu'appliquer $A$ correspond à appliquer $P ^{-1}$, puis $B$, puis $Q$

> [!definition]- Démonstration
> On a les égalités suivantes
>  - $Y = AX$ 
>  - $Y = QY'$
>  - $X = PX'$ 
> Alors :
> $$\begin{align}
> Y = AX &\iff Y = APX' && \text{car } X = PX'\\
> &\iff QY' = APX' && \text{car } Y = QY' \\
> &\iff QBX' = APX' && \text{car } Y' = BX' \text{ (par définition)} \\
> &\iff QB = AP && \text{car c'est vrai pour tout } X' \\
> &\iff A = QBP ^{-1} \\
> &\iff B = Q ^{-1} A P
> \end{align}$$

> [!idea] Cas d'un [[endomorphisme]]
> Si $f$ est un [[endomorphisme]], c'est-à-dire que $E = F$ ($f$ est sur $E \to E$)
> Alors, on a $Q = P$. Le changement de base est donc simplififié :
> $A = P B P ^{-1}$ et $B = P ^{-1} A P$
>  - [i]  **Mnémo :** ancien passage nouveau (puis passage inverse)

![[changement de base 2022-11-04 15.41.02.excalidraw|900]]

