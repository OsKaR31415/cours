---
gists:
  - id: 976cef2d994763cd454f2b461fa699c0
    url: 'https://gist.github.com/976cef2d994763cd454f2b461fa699c0'
    createdAt: '2022-09-23T09:52:01Z'
    updatedAt: '2022-09-23T10:27:58Z'
    filename: notions de base en maths.md
    isPublic: true
---


# Ensembles

## Notations

 - **Esembles par extension**
     - $\lbrace x \in E \mid \mathscr{P}(x) \rbrace$ est l'ensemble des $x$ dans $E$ _tels que_ la propriété $\mathscr{P}(x)$ est respectée
     - Exemples :
         - $\left\lbrace  x \in \mathbb{N} \mid \frac{x}{2} \in \mathbb{N}  \right\rbrace$ : les nombres pairs
         - $\lbrace x \in \mathbb{R} \mid x^{2}=x+1 \rbrace$ : solutions de $x^{2}=x+1$ sur $\mathbb{R}$
         - $\left\lbrace  x \in \mathbb{R} | \exists (n, k)\in \mathbb{Z}, x = \frac{n}{k}  \right\rbrace$ ensemble des _rationnels_ : $\mathbb{Q}$

 - $A \subset B$ : $A$ est _contenu_ dans $B$
     - $\forall x \in A, x \in B$
 - $A \subsetneq B$ : $A$ est _strictement mais différent de_ $B$
     - $\forall x \in A, x \in B$ et $\exists x \in A, x \not\in B$

 - $A \cup B$ : $A$ _union_ $B$ : éléments qui sont dans $A$ _ou_ dans $B$
     - $\lbrace x | x \in A \text{ ou } x \in B \rbrace$
 - $A \cap B$ : $A$ _inter_ $B$ : éléments qui sont dans $A$ _et_ dans $B$
     - $\lbrace x | x \in A \text{ et } x \in B \rbrace$


## Ensembles classiques
 - $\mathbb{N}$ : les entiers naturels : $\lbrace 0, 1, 2, 3, \dots \rbrace$
 - $\mathbb{Z}$ : les entiers _relatifs_ : $\lbrace \dots, -2, -1, 0, 1, 2, \dots \rbrace$
 - $\mathbb{Q}$ : les nombres _rationels_ (qui exprimables comme des fractions) : $\left\lbrace\dots \frac{1}{2}, \frac{1}{3}, \frac{137}{42}, 4, -\frac{1}{12}, \dots \right\rbrace$
 - $\mathbb{R}$ : les nombres _réels_ (tous les nombres classiques) : $\left\lbrace  \dots, \frac{\sqrt{ 3 }}{2}, \pi, 42, \frac{73}{67}, \dots \right\rbrace$
 - $\mathbb{C}$ : les nombres _complexes_ (avec $i^{2}=-1$) : $\left\lbrace  \dots -2, i+3, \sqrt{ 2 }i+\frac{1}{3}, i-\pi, 73i+42\dots  \right\rbrace$

### Nombres complexes

#### Définition
On remarque que l'équation $x^{2}=-1$ n'a pas de solutions sur $\mathbb{R}$.
On créé un nombre $i$ solution de cette équation : $i^{2}=-1$
Ce nombre n'est donc pas un réel : on l'appelle le nombre _imaginaire_.

l'ensemble des nombres _imaginaires_ (_imaginaires purs_), $\mathbb{I}$, est donc l'ensemble des $k\times i$ où $k \in \mathbb{R}$ : $\mathbb{I} = \lbrace k\times i \mid k \in \mathbb{R} \rbrace$

L'ensemble des nombres _complexes_ regroupe $\mathbb{R}$, $\mathbb{I}$, et tous les nombres "composites" de la forme $a+ib$ où $a$ et $b$ sont réels.
Donc : $\mathbb{R} = \lbrace a+ib\mid(a,b)\in\mathbb{R}^{2} \rbrace$

**Note:** $\mathbb{R}\subset\mathbb{C}$ et $\mathbb{I}\subset \mathbb{C}$ mais bien sûr $\mathbb{C} \neq \mathbb{R} \cup \mathbb{I}$ puisque, par exemple $i + 1$ est dans $\mathbb{C}$ mais ni dans $\mathbb{R}$, ni dans $\mathbb{I}$.

#### Propriétés
