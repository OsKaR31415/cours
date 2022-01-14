# Application réciproque

Soit $f$ une [[bijection]] de $E$ dans $f$:
$$f: E \rightarrow F$$
On sait qu'elle est [[injection|injective]] et [[surjection|surjective]], donc $\forall y \in F, \exists!x \in E, y = f(x)$, et on peut dire qu'il existe une [[application]] $f^{-1}$ telle que :
$$\begin{aligned}
f^{-1}: &F \rightarrow E\\
        &y \mapsto x \text{ tel que } y=f(x)
\end{aligned}$$

$$\begin{aligned}
f^{-1}: &F \rightarrow E\\
   &y \mapsto x\text{ tel que }y=f(x),\text{ avec } y\in F \text{ et } x\in E\\
\end{aligned}$$

## propriétés
$f^{-1}$ à le même sens de variation que $f$.

## composée
Lorsque l'on [[composée de fonction|compose]] $f$ et $f^{-1}$, on obtient une fonction identité :

$f \circ f^{-1} = id_E$     $(E \rightarrow F \rightarrow E)$
$f^{-1}\circ f = id_F$     $(F \rightarrow E \rightarrow F)$

**Attention :** généralement, $f\circ f^{-1} \neq f^{-1}\circ f$, car leur [[ensemble de définition|ensembles de définition]] sont différents.

## calcul de la fonction réciproque

### Exemple
$$\begin{aligned}
f: &\mathbb{R}^+ \rightarrow \mathbb{R}^+\\
   &x \mapsto x^2
\end{aligned}$$
Avec ces ensembles de départ et d'arrivée, $f$ est bien une bijection

### Exemples
Voir: [[fonction sinus]]
Voir: [[fonction cosinus]]
