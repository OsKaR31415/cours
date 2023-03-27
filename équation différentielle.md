up::[[équation fonctionnelle]]
#maths/algèbre

----

 - [[équation différentielle du premier ordre]]

# Formes d'équation

## Equation Homogène
Les équations homogènes sont les équations de la forme :
$\sum\limits_{k=0}^{n} \big(a_{k}(x) y^{(k)}\big) = 0$ 
 - où $n\in\mathbb{N}^{*}$ est l'[[équation différentielle#Propriétés#ordre d'une équation|ordre de l'équation]]
 - où $(a_{k})$ est une [[suite]] de [[fonction|fonctions]]
 - où $a_{n}$ n'est pas la fonction nulle
 - où $y^{(k)}$ est la [[dérivées successives|dérivée k fois]] de $y$

## Equations d'ordre $n$

### [[équation différentielle du second ordre a coefficients constants]]
Les équations qui contiennent une fonction et sa dérivée seconde (et éventuellement sa dérivée première)


## Equation différentielle à variables séparées
On dit qu'une équation différentielle est à *variables séparées* lorsque les différentes variables ($y$, $x \ldots$) sont séparées

# Propriétés
## Ordre d'une équation
L'**ordre** d'une équation est le plus grand [[dérivées successives#Ordre|ordre]] des dérivées
On dit _équation du $n^{\text{ème}}$ ordre_ pour désigner une équation d'ordre $n$
Voir : [[équation différentielle#Equations d'ordre n]]

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```




