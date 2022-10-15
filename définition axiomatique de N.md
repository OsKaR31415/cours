up::[[axiomatique]]
#maths

---

# Axiomes de Peano
 - $0 \in \mathbb{N}$
 - si $x \in \mathbb{N}$ alors le successeur de $x$, noté $s(x)$ est dans $\mathbb{N}$ ($\forall x \in \mathbb{N}, s(x) \in \mathbb{N}$)
 - $\forall (x, y) \in \mathbb{N}^{2}, \quad s(x) = s(y) \iff x = y$
 - $\nexists x \in \mathbb{N}, \quad s(x) = 0$
 - $P(0) \wedge \forall n \in \mathbb{N}, (P(n) \implies P(n+1)) \quad \implies \quad \forall n \in \mathbb{N}, P(n)$
     - proposition de récurrence
     - équivalent à dire que _tout sous-ensemble de $\mathbb{N}$ a un plus petit élément ($\mathbb{N}$ est bien ordonné)_

# Théorie des ensembles
[[axiomes Zemerlo Frankel]]

 - $0 := \emptyset$
 - $1 := 0 \cup \{ 0 \} = \{ 0 \}$
 - $2 := 1 \cup \{ 1 \} = \{ 0 \} \cup \{ 1 \} = \{ 0,1 \}$
 - $3 := 2 \cup \{ 2 \} = \{ 0, 1, 2 \}$
 
Le _sucesseur_ est défini comme $s(x) = x \cup \{ x \}$

On utilise l'[[axiome de l'infini]] pour définir $\mathbb{N}$ :

![[axiome de l'infini#^definition]]

![[classe héréditaire#^definition|ensemble héréditaire]]

De plus, on a une relation d'ordre totale et d'ordre strict totale : $x \geq y \iff x \subset y$ et $x < y \iff x \in y$

Avec cette définition, le [[principe de récurrence]] n'est plus un axiome, mais on le démontre : [[ZF démonstration du principe de récurrence]]

# Propriétés

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), this.file.link)
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

