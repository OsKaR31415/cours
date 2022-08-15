up::[[plugins obsidian]]
#obsidian #no-review 
# obdsidian plugin desmos
[github](https://github.com/Nigecat/obsidian-desmos)

Syntaxe du plugin [obsidian desmos](https://github.com/Nigecat/obsidian-desmos#offline-usage)

## Syntaxe de base
```desmos-graph
y = 2x
```

On peut :
 - faire plusieurs courbes en même temps (plusieurs lignes)
 - utiliser la syntaxe $\LaTeX$
```desmos-graph
y = \sin(x)
y = \frac{1}{x}
```


## Styles


### Styles de courbes
Les styles de courbes sont sur la même ligne que l'équation de la courbe, séparés par des `|`

#### couleur
choisir la couleur de chaque équation
 - nom : `red`, `green` etc.
 - couleur hex (`#42ddf5`...)
```desmos-graph
y=x^2|RED
```

#### type de ligne
choisir le type de ligne
possibilités :
 - ligne (e.g `y=x`)
     - `solid` (default)
     - `dashed`
     - `dotted`
 - point (e.g `(1, 4)`)
     - `point` (default)
     - `open`
     - `cross`
```desmos-graph
y=4|dotted|#ddbb22
x=2|green|dashed
```


#### restrictions sur les courbes
On peut ajouter des restrictions sur les définitons des courbes
 - sur la même ligne, séparées par des `|`
```desmos-graph
y=2|x>2
y=3|x > -2|x < 5
```

#### cacher une courbe
on ajoute `|hidden`
pratique lorsque l'on à défini une fonction mais qu'on ne veut pas la tracer (ici, pour avoir sa dérivée)
```desmos-graph
    f(x)=x^2|hidden
    f'(x)
```


#### labels
pour afficher du texte à côté d'un point
 - ne fonctionne pas pour les courbes (seulement les points)
```desmos-graph
(0,0)|label: (0,0)
(5,4)|label: point A
y=x|label:not showed
```


### Style de la fenêtre

On peux changer la taille de la grille
 - avec les attributs `left` `right` `top` et `bottom`
 - dans un header, séparé des fonctions par `---`
```desmos-graph
left=0; right=100;
top=10; bottom=-10;
---
y = \sin(x)
```

On peut régler les dimensions du rendu
 - avec les attributs `width` et `height`
 - toujours dans le header
```desmos-graph
width=400; height=400;
---
y=x^2 - 5
```

On peut désactiver la grille
 - avec la propriété `grid`
 - `grid=true` ou `grid=false`
```desmos-graph
grid=false;
width=300;height=300;
---
y=x^2
```



