up:: [[matrice diagonale]] 
title:: "méthode pour diagonaliser"
#maths/algèbre 

---
Diagonaliser permet de transformer une application linéaire en une composée $P D P ^{-1}$
On trouve $D$ la matrice diagonale, qui conserve les directions (chaque vecteur est multiplié par un coefficient, éventuellement différent)
$P$ est une matrice de passage.
$P D P ^{-1}$ est donc : `[changement de base] -> application conservant les directions -> [changement de base inverse]`.
Toutes les matrices ne sont pas diagonalisables, donc toutes 
# Méthode simple 
 - Calculer les valeurs de $\lambda$ telles que $\mathrm{\det} \left( A - \lambda I_{n} \right) = 0$ ([[polynôme]] de [[degré d'un polynôme|degré]] $n$)
     - Si on a $n$ [[valeur propre d'une matrice|valeurs propres]] distinctes, il suffit de les mettres comme coefficients d'une [[matrice diagonale]] pour diagonaliser $A$
     - [!] si on a certaines [[valeur propre d'une matrice|valeurs propres]] de [[valeur propre d'une matrice#Multiplicité|multiplicité]] $\geq 2$
         - il faut vérrifier que la dimension du [[sous espace propre]] associé à ces valeurs prores est égale à leur multiplicité
         - sinon, on ne pourra pas créer la matrice de changement de base
 - Chercher pour chaque valeur de $\lambda$ les vecteurs $u \neq 0_{E}$ tels que $A \cdot u = \lambda u$
 - On trouve $n$ vecteurs propres ($n$ est le degré du [[polynôme]] associé à $\det(A - \lambda I_{n})$)
 - Les vecteurs propres forment une base 
 - on note $P$ la matrice de passage formée de ces [[`|vecteur propre]] en colonne 
 - Alors :
     - $A = PDP^{-1}$ (où $D$ est $A$ diagonalisée)
     - $D = P ^{-1} A P$ (permet de trouver la matrice diagonale)
> [!example] Exemple 
> On pose $A = \begin{pmatrix}2&1&0\\0&1&-1\\0&2&4\end{pmatrix}$
> $\det (A - 2 I_{3}) = 0$ car alors une colonne est nulle
> Donc $2$ est une [[valeur propre d'une application linéaire|valeur propre]] 
> On cherche les vecteurs propres $u \neq \vec{0}$ tels que $A \cdot u = 2u$
> Alors, on remarque que $\begin{pmatrix}1\\0\\0\end{pmatrix}$ est un [[`|vecteur propre]] associé à la [[valeur propre d'une application linéaire|valeur propre]] $\lambda = 2$
> 

