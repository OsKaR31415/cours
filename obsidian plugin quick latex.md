#obsidian
up: [[plugins obsidian]]
# obsidian plugin quick latex

## Fermeture automatique
 - fermeture automatique des `(){}[]`
 - fermeture automatique des `$`
 - également supression automatique quand ils sont collés


## Ajout automatique

 - ajout de `\limits` après `sum`
 - ajout de `\left` et `\right` autour des parenthèses qui contiennent `\sum`, `\int` ou `\frac`
 -  puissances et indices
     - lorsque l'on tape une puissance ou un indice (`^` ou `_`), tout ce qui suit est considéré comme dans la puissance
     - lorsque l'on presse `space`, tout depuis la puissance ou l'indice est mis entre `{}`
 - `/` pour `\frac{}{}`
     - on peut taper une fraction avec `/` comme `1/x^2`
     - lorsque l'on presse `space`, la fraction est transformée en `\frac{1}{x^2}`
     - on peut utiliser des parenthèses pour préciser ce qui est dans la fraction
         - `e^x/x` donne $e^\frac{x}{x}$
         - `(e^x)/x` donne $\frac{e^x}{x}$
         - on peut mettre un espace pour délimiter le début de la fraction
             - `e^x = 1+ X/1! + x^2/2! + x^3/3!` donne $e^{x}=1+ \frac{x}{1!}+ \frac{x^{2}}{2!}+ \frac{x^{3}}{3!}$
 - raccourcis pour des environnements
     - align
         - raccourci : `alt+shift+A`
         - dans un environnement `align`, appuyer sur `enter` met un `\\` et un `&` à la ligne suivante
     - pmatrix
         - raccourci : `alt+shift+M` (matrice)
 - abbréviations
     - lettres greques
         - `pi` -> `\pi`
         - `la` -> `\lambda`
         - `De` -> `Delta` (majuscule)
     - symboles/commandes commun.ne.s
         - `sq` -> `\sqrt`
         - `bb` -> `\mathbb`
         - `bf` -> `\mathbf`
         - `te` -> `\text`
         - `inf` -> `\infty`
         - `cd` -> `cdot`
         - `qu` -> `\quad`
         - `ti` -> `\times`


