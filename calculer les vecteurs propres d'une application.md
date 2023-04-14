up::[[vecteur propre|vecteur propre]], [[valeur propre d'une application linéaire|valeur propre]]
#maths/algèbre  

---
Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
Soit $f : E \to E$ une [[application linéaire]] de matrice  $A = \begin{pmatrix}1&2\\2&1\end{pmatrix}$
$\det A \neq 0$ donc $f$ est [[bijection|bijective]].
Soit $\vec{u} \in E$
On cherche des solution à l'équation $f(\vec{u}) = \lambda\vec{u}$ ($\vec{u}$ un [[vecteur propre|vecteur propre]] et $\lambda$ une [[valeur propre d'une application linéaire|valeur propre]])
$\begin{align}f(\vec{u}) = \lambda \vec{u} &\iff A\vec{u} = \lambda \vec{u}\\ &\iff \left( A\vec{u} - \lambda\vec{u} \right) = \vec{0}\\ &\iff (A-\lambda\mathrm{Id}_{2})(\vec{u}) = \vec{0}\end{align}$
Or, on cherche $\vec{u} \neq 0$ donc il faut que 

