---
gists:
  - id: 982f721e53dce3613d68cd2512a4b721
    url: 'https://gist.github.com/982f721e53dce3613d68cd2512a4b721'
    createdAt: '2022-09-24T23:15:29Z'
    updatedAt: '2022-09-27T11:14:40Z'
    filename: 'Contre, l''usage abusif, de la virgule, dans la notation, mathématique.md'
    isPublic: true
---
# Contre, l'usage abusif, de la virgule, dans la notation, mathématique 

La notation mathématique traditionnelle cherche à traduire des phrases et des calculs en symboles. Par exemple, on peut dire "tous les nombres entiers sont pairs ou impairs", mais on peut également écrire $\forall n \in \mathbb{N}, \quad (2\mid n) \vee (2 \nmid n)$, ce qui veut dire la même chose.

La notation mathématique intéressante principalement pour deux choses :
 - elle est plus lisible : on préfère $\forall x \in N, \forall i, j \in \mathbb{N}, \quad i\times j|n \implies (i\mid n) \wedge (j\mid n)$ plutôt que "si un entier est divisible par le produit de deux entiers, alors il est divisible par chacun des deux entiers"
 - elle en plus rigoureuse : écrire des théorèmes ou expressions mathématiques en français peut être ambigu et sujet à interprétation

C'est pour ce deuxième point que la virgule pose un problème : elle rend la notation mathématique moins rigoureuse, et parfois même ambiguë.

## Les différentes significations de la virgule
Pour comprendre les problèmes de la virgule, listons les significations possibles de ce symbole :

 - pour des vecteurs, elle sépare les valeurs : $(x, y, z)$
 - Elle sépare les quantificateurs : $\forall x \in \mathbb{R}, \exists y \in \mathbb{R} \dots$
 - Elle signifie "tel que" : $\exists x \in \mathbb{R}, x^{2} < 42$
 - Elle "distribue" un $\in$ sur plusieurs valeurs : $\forall x, y \in \mathbb{R}\dots$

## Ambiguités créées par la virgule
Nous avons vu que la virgule possède plusieurs utilisations différentes. En fait, on peut aisément construire un exemple qui utilise toutes ces significations :

$\forall x, y \in \mathbb{R}, \exists y \in \mathbb{R}, y \in (x, y)$

Ici, on a le même problème qu'avec l'écriture en français : le même mot (symbole) peut avoir beaucoup de significations selon le contexte. On peut tout de même donner des règles qui permettent de reconnaître quelle interprétation est la bonne :
 - dans un vecteur (une valeur entre parenthèses), c'est un séparateur des coefficients du vecteur
 - avant un $\in$, c'est un raccourci pour dire que toutes les variables listées appartiennent à l'ensemble désigné
 - Après / entre des quantificateurs 
     - c'est un "tel que" s'il est suivi par une expression ou bien par un "il existe"
     - c'est un séparateur s'il est suivi par un quantificateur "pour tout" ( $\forall$ )

### Cas où la notation est vraiment ambigue
On a vu que, si les interprétations possibles de la virgule, on peut dire @de façon certaine laquelle est la bonne en fonction du contexte.

Mais il arrive que, quand on sait que l'on travaille sur un ensemble particulier (par exemple en arithmétique, on travaille très souvent sur $\mathbb{Z}$, ou bien en analyse sur $\mathbb{R}$) on note $\forall x, \dots$ pour dire $\forall x \in \text{ensemble concerné}, \dots$.
C'est un raccourci de notation qui est pratique, mais on peut alors écrire :


$\forall x,y \in \mathbb{R}$

Le problème est le suivant : si $y$ est une variable qui dépend de $x$ (par exemple, si on a posé avant $y = x+1$), on peut interpréter l'expression comme $\forall x \in \mathbb{R}, x+1 \in \mathbb{R}$. L'interprétation est logique, mais on a bien sûr d'abord pensé à ceci : $\forall x \in \mathbb{R}, \forall y \in \mathbb{R}$ (ou $\forall (x, y)\in \mathbb{R}^{2}$, ce qui est équivalent).

On voit donc que quelques cas (rares, il faut l'admettre) sont réellement sujets à interprétation

### Description des ensembles
Une autre notation intéressante est celle que l'on utilise pour décrire les ensembles.

La notation générale est : $\lbrace x \in E \mid \mathscr{P}(x) \rbrace$ où $\mathscr{P}$ est une propriété qui dépend de $x$.
On voit pafois aussi $\lbrace x \in E : \mathscr{P}(x) \rbrace$.

Bien sûr, la propriété $\mathscr{P}$ peut contenir des quantificateurs. Par exemple, on peut noter $\lbrace x \in \mathbb{R} \mid \not \exists y \in \mathbb{Q}, x \cdot y \in \mathbb{Z} \rbrace$

Ici, on note que le "tel que" est noté avec un $\mid$. L'utilisation de la virgule dans ce contexte est très rare. En effet, les expressions sont alors beaucoup moins lisibles : $\lbrace x \in \mathbb{R}, \forall y \in \mathbb{N}, x\cdot y \notin \mathbb{N} \rbrace$

Dans le contexte de la définition d'ensembles, il arrive également que l'on utilise la virgule comme "et" logique : $\left\lbrace  \frac{a}{b} \mid a \in \mathbb{Z}, b \in \mathbb{Z}^{\ast}  \right\rbrace$ ou même $\left\lbrace q \mid a \in \mathbb{Z}, b \in \mathbb{Z}^{\ast}, q = \frac{a}{b} \right\rbrace$.

On pourrait donc avoir cette formule : $\left\lbrace q, a, b \in \mathbb{Z}, b \neq 0, q = \frac{a}{b} \right\rbrace$, que l'on n'écrira bien sûr jamais, mais qui montre bien les nombreuses significations possibles de la virgule, et le travail d'interprétation que l'on doit faire à chaque fois pour deviner laquelle est la bonne.

## Solutions possibles

### Solution de la logique formelle
En logique formelle, quand on utilise les quantificateurs, on ne met jamais de virgules, ni pour les séparer, ni pour mettre plusieurs variables à la fois.
Par exemple, on ne noterait pas $\forall x, y \in \mathbb{R}, \exists z \in \mathbb{R}, z = x+y$, mais plutôt $\forall x \in \mathbb{R} \left( \forall y \in \mathbb{R} \left( \exists z \in \mathbb{R} \left( z = x+y \right) \right) \right)$

La solution consiste donc à :
 - ne jamais mettre deux variables ensemble (utiliser plusieurs quantificateurs, un par variable)
     - on peut aussi écrire $(x, y) \in \mathbb{R}^{2}$ (on a en fait qu'une seule variable : le vecteur $(x, y)$ )
 - mettre des parenthèses plutôt que des virgules (élimine toutes les ambiguïtés)

### Utiliser de meilleurs symboles
La solution proposée par la logique formelle est plutôt lourde (longue à écrire et moins lisible).

On peut, plus simplement, utiliser des symboles spécialisés pour chacune des significations

 - Le $;$ est un meilleur symbole pour séparer les éléments d'un vecteur
     - Dans les langues où c'est la virgule qui est l'indicateur pour les nombres décimaux, on préfère le " $;$ " dans les vecteurs
 - Pour "tel que", on préfère " $\mid$ ", " $/$ " ou bien quelquefois " $:$ "
     - **Exemple :** $\forall x \in \mathbb{R}, \exists y \in \mathbb{R} \mid y = x+1$ ou bien $\lbrace x \in \mathbb{R} : \cos(x) = 0 \rbrace$
 - Pour décrire que plusieurs variables sont dans un ensemble, on utilise $(x, y) \in \mathbb{R}^{2}$ ou bien $(x, y, z) \in \mathbb{R}^{3}$ etc.
     - On peut d'ailleurs utiliser le $;$ pour séparer les éléments : $(x;y;z)\in \mathbb{R}^{3}$

Ces remplacements ont plusieurs avantages :
 - ils retirent tout ambiguïté, même celles qui n'en sont pas, mais qui sont des erreurs de lecture
 - ils sont plus lisibles : avoir un symbole pour chaque signification permet au cerveau de comprendre et d'utiliser plus facilement ces symboles et de mieux les associer à leur signification

Ils ont cependant un problème : ils obligent parfois à être plus formel, et donc à écrire plus de choses.
Par exemple, $\left\lbrace \frac{a}{b} \mid a, b \in \mathbb{Z}, b \neq 0  \right\rbrace$ est plus lisible que $\left\lbrace \frac{a}{b} \mid (a;b)\in \mathbb{Z}\times \mathbb{Z}^{\ast}  \right\rbrace$, ou bien $\left\lbrace \frac{a}{b}\mid (a;b)\in\mathbb{Z}^{2} \wedge b\neq 0  \right\rbrace$ ou encore $\left\lbrace \frac{a}{b} \mid a \in \mathbb{Z} \wedge b \in \mathbb{Z}^{\ast}  \right\rbrace$ (bien sûr, les 4 ont la même signification, et sont donc tous aussi simples, mais il faut moins d'efforts au cerveau pour comprendre les valeurs possibles de $a$ et $b$ dans le premier cas, car la notation donne sans détour les informations que l'on recherche).

Il semble donc que, dans certains cas, c'est au contrainre l'utilisation de notation plus abrégées, par exemple avec des virgules, qui est plus lisible.

### Exemples
Voici quelques exemples d'expressions écrite en utilisant plus ou moins de virgules

| maximum de virgules                                                                      | intermédiaire                                                                                                    | minimum de virgules                                                                                                                     |
| ---------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| $\forall x, y \in \mathbb{R}, \exists a, b \in \mathbb{R}, x+y = a+b, x\neq a, y \neq b$ | $\forall (x, y) \in \mathbb{R}^{2}, \exists (a, b) \in \mathbb{R}^{2}, x+y = a+b \wedge x\neq a \wedge y \neq b$ | $\forall (x;y)\in\mathbb{R}^{2}, \exists (a;b)\in\mathbb{R}^{2}, x+y=a+b \wedge x\neq a \wedge y \neq b$                                |
| $\left\lbrace q,a,b\in\mathbb{Z}, b \neq 0, q=\frac{a}{b} \right\rbrace$                          | $\left\lbrace q \mid a \in \mathbb{Z}, b \in \mathbb{Z}^{\ast}, q = \frac{a}{b} \right\rbrace$                      | $\left\lbrace q \mid (a; b) \in \mathbb{Z}^{2} \wedge b \neq 0 \wedge q = \frac{a}{b} \right\rbrace$ ou bien $\left\lbrace q \mid (a; b) \in \mathbb{Z} \times \mathbb{Z}^{\ast} \wedge q = \frac{a}{b} \right\rbrace$ |

_(des exemples supplémentaire dans les commentaires sont les bienvenus)_

### Quand utiliser quoi ?

Nous avons vu que, dans certains cas, la virgule est plus lisible car elle abrège les notations, et nous évite des réflexions inutiles sur le sens qu'apporte un symbole donné.

Mon avis personnel est donc :

 - Dans un contexte où il est nécessaire d'être précis (articles, cours, énoncés...), utiliser des symboles adaptés pour chaque signification
     - notamment, le fait de ne pas utiliser de raccourcis de notation apporte un formalisme supplémentaire 
 - Dans un contexte où le but est simplement de faire comprendre (solution ou correction d'un exercice, cours et énoncés simples de choses connues ou évidentes), utiliser des virgules (et autres abbréviations) peut être avantageux
     - cela allège la rédaction et rend donc la lecture et la compréhension plus rapides
     - cela permet d'écrire plus vite (notamment utile losqu'on résout un exercice)
J'ajouterai que, avant d'utiliser des notations raccourcies, il est nécessaire de bien comprendre comment les notations formelles fonctionnent. Pour cela, écrire sans aucune abbréviations (de manière rigoureuse) est utile.
Il vaut mieux s'habituer d'abord à une utilisation stricte, puis ensuite utiliser des raccourcis quand c'est justifié (ceci ne se limite pas aux raccourcis de notation traités ici, mais est valable pour toutes les abbréviations, comme $2\mathbb{N}$ pour $\{ 2n \mid n \in \mathbb{N} \}$, ou bien $\sum\limits_{i}v_{i}$ pour $\sum\limits_{i=0}^n v_{i} \text{ où } n \text{ est la dimension du vecteur } v$)

## Conclusion
L'utilisation de la virgule dans la notation mathématique peut parfois conduire, sinon à des ambiguïtés, à des erreurs de lectures ou d'interprétation.

Les alternatives disponibles sont meilleures, car elles facilitent la compréhension et l'écriture des mathématiques.

Et en plus c'est beaucoup plus joli !

