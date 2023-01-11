#maths

----
Une _suite_ est une [[famille]] d'éléments - appelés ses _termes_ - indexée par les entiers naturels

> [!définition]
> Une suite $u$ dans un ensemble $E$ est une [[application]] $u: \mathbb{N} \to E$

> [!important] notation
> On note :
>  - $u_{n}$ (pour $u(n)$)
>  - $(u_n)_{n \in \mathbb{N}}$ (pour $u$)

> [!important] ensemble de définition particulier
> On peut réduire l'ensemble de définition d'une suite $u$ à $\left\{ n \in \mathbb{N} \mid n \leq n_{0} \right\}$
> On note alors $(u_{n})_{n \leq n_{0}}$

# Suite finie
Une _suite finie_ est une [[famille]] indexée par des entiers strictement positifs **inférieurs à un certain entier**. Cet entier est appelé _longueur de la suite_.

# Propriétés

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```

