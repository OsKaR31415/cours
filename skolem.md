#logique 
# skolem
Un _skolem_ est une forme particulière de formules de la [[logique des predicats du premier ordre]].
Elle consiste en une formule sous [[forme normale conjonctive]] et [[forme prénèxe|prénèxe]], mais sur laquelle on à supprimé tous les [[quantificateurs]] existentiels ($\exists$) en utilisant des fonctions, pour ne garder que des quantificateurs $\forall$.

**Note :** On ne cherche pas à ce que la forme de skolem soit [[equivalence|équivalente]] à la formule originale. On veut simplement que **si l'une est [[satisfaisable]], l'autre le soit aussi**. On veut qu'elles soient [[equisatisfaisables]]

## Exemple
Soit la formule suivant : $\forall x \exists y \text{ Sup}(x, y)$
Avec $\text{Sup}(x, y) \equiv x < y$, et avec pour [[domaine d'interprétation]] $\N$
On sait que cette formule est vraie : on peut toujours trouver un entier plus grand que n'importe quel autre.
**Démonstration :**
Soit une [[interprétation]] $I_v(x)$ de $x$,
Il est possible de construire une [[interprétation]] $I_v(y) = I_v(x) + 1$
Comme $\N$ n'à pas de borne supérieure, cette interprétation existe toujours
Et dans ce cas, on à bien $\text{Sup}(I_v(x), I_v(y))$
**Lien avec la skolemisation :**
On a utilisé la fonction $f: x \mapsto x + 1$ pour faire cette démonstration.
On a posé que $y = f(x)$.
La skolemisation consiste à remplacer $y$ par $f(x)$ dans la formule :
$\forall x \exists y \text{Sup}(x, y)$ (forme normale)
$\forall x \text{Sup}{x, f(x)}$ (forme de _skolem_)
