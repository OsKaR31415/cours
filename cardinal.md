#maths/ensembles #no-review 

---

Le _cardinal d'un ensemble_ est le **nombre d'éléments** de cet ensemble.
Soit $E$ un ensemble, on note $\text{card}(E)$ ou $|E|$ le cardinal de $E$.


## Définition

### Cardinal d'un ensemble fini
Un ensemble $E$ est dit fini s'il est vide, ou s'il existe un entier naturel $n\neq0$ et une suite finie $(x_1,\ldots,x_n)$ d'éléments de $E$ dans laquelle chaque élément de $E$ apparaît exactement une fois.
Autrement dit, un ensemble non vide est fini s'il est en [[bijection]] avec un intervalle d'entiers $[\![1;n]\!]$.
Dans ce cas, on dira que l'ensemble est de _cardinal_ $n$.

#### Propriétés
Soient $E$ et $F$ deux ensembles finis de cardinaux respectifs $k$ et $n$.
 - Si $E$ et $F$ peuvent être mises en bijection $|E| = |F|$.
 - Tout sous-ensemble de $E$ à un cardinal inférieur à $k$
     - $S\subseteq E \implies |S| \leq |E|$
     - $S\subsetneq E \implies |S| < |E|$
 - $|E\setminus A| = |E| - |A|$
 - $|A \cup B| = |A| + |B| - |A \cap B|$


### Cardinal d'un ensemble infini
#### Cas dénombrable
L'ensemble $\mathbb N$ n'est pas fini. Tout [[ensemble infini dénombrable]] est en bijection avec $\mathbb N$, et a donc le même cardinal.


