---
gists:
  - id: cd5c909adde51bbeeb31dc01e4b1fe8a
    url: 'https://gist.github.com/cd5c909adde51bbeeb31dc01e4b1fe8a'
    createdAt: '2022-10-15T17:25:21Z'
    updatedAt: '2022-11-08T14:49:37Z'
    filename: décomposition en éléments simples.md
    isPublic: false
---
# Introduction 

## Fonction rationnelle
La décomposition en élément simple sert à exprimer de façon plus pratique des _fonctions rationelles_, c'est-à-dire des fonctions qui sont une fractions de _polynômes_. Par exemple :
$$f(x) = \frac{4x^{3}+9x - 3}{4x^{2}+7}$$

## But de la décomposition en éléments simples
La décomposition en éléments simples permet d'exprimer ces fonctions sous la forme d'une somme d'un polynôme et de fractions simples (les éléments simples) contenant une constante (ou éventuellement un polynôme de degré 1) divisée par un polynôme (de degré 2 au plus).
Pour reprendre l'exemple de la fonction $f$, sa décomposition en éléments simples est :
$$f = x + \frac{2x}{4x^{2}+7} - \frac{3}{4x^{2}+7}$$
C'est donc une autre forme pour _la même fonction_, qui est plus pratique, notammen pour intégrer la fonction ou pour d'autres manipulations algébriques.

### Terminologie
Encore avec l'exemple précédent,  $f = x + \frac{2x}{4x^{2}+7} - \frac{3}{4x^{2}+7}$, on distingue deux parties : la partie entière, et les éléments simples
$$f = \underbrace{x}_{\text{partie entière}} + \underbrace{\frac{2x}{4x^{2}+7} - \frac{3}{4x^{2}+7}}_{\text{éléments simples}}$$
La partie entière est un polynôme, et les éléments simples sont des fractions de polynôme de degré 1 au plus pour le nominateur, et 2 au plus pour le numérateur. Ce sont toujours des polynômes irréductibles qui sont au dénominateur (c'est le but de la décomposition : décomposer au maximum les dénominateurs) (c'est pourquoi ils peuvent être de degré 2 au maximum : les polynômes de degré 3 ou plus sont tous factorisables sur $\mathbb{R}$).

On note que :
 - on peut avoir plusieurs dénominateurs différent
     - par exemple, $x^{2} + \frac{3}{x+3} - \frac{5}{x^{2}+1} + \frac{1}{x}$ est une forme valide 
 - Si on travaille sur $\mathbb{C}$, les dénominateurs seront toujours de degré $1$

# Méthode

## Trouver la partie entière 
La partie entière est le résultat de la division de polynômes entre le numérateur et le dénominateur de la fonction de base.

Par exemple, la partie entière pour $\frac{x^3 - 3x +2}{x+1}$ est $x^{2} -x -2$ car $\underbrace{(x^{2} - x-2)}_{\text{partie entière}} \underbrace{(x + 1)}_{\text{diviseur}} + \underbrace{4}_{\text{reste}}= \underbrace{x^{3}-3x+2}_{\text{dividende}}$
Comme on l'a dit, la décomposition en éléments simples commence toujours par la partie entière.
Une fois que l'on a la partie entière, on sait que la fonction s'écrit : $\text{partie entière} + \dfrac{\text{reste}}{\text{diviseur}}$.
Dans l'exemple précédent, on a : $(x^{2} - x - 2) + \dfrac{4}{x+1}$
Dans ce cas, la décomposition est finie : $\frac{4}{x+1}$ est une fraction de deux polynômes que l'on ne peut pas factoriser

Remarques :
 - Si le numérateur est de plus faible de gré que le dénominateur, la partie entière est 0
     - Par exemple : $\dfrac{x^{2} - 2}{x^{3}+3x^{2}-x}$ (la division donne 0 reste $x^{2}-2$)
 - La décomposition du reste est la partie la plus compliquée

## Décomposition du reste
Prenons la fonction :
$\displaystyle g(x) = \frac{3x + 1}{x ^{2} - 1}$

La partie entière est bien nulle car le numérateur est de degré 1 quand le dénominateur est de degré 2 (et $1 < 2$)

Pour décomposer cette fraction, on commence par factoriser le dénominateur. Ici, $x^{2} - 1 = (x+1) (x-1)$

Ensuite, on sait que la décomposition sera de la forme :

$$\frac{a}{x+1} + \frac{b}{x-1}$$
c'est-à-dire une constante divisée par chacun des termes de la factorisation.

Encore un exemple : $\dfrac{2x+1}{x^{3}+2x^{2}+x+2}$
Le dénominateur se factorise :
$x^{3}+2x^{2}+x+2 = (x^{2}+1)(x+2)$ (on note que $x^{2}+1$ ne se factorise pas plus)
On a donc une décomposition de la forme :
$$ \frac{ax+b}{x^{2}+1} + \frac{d}{x+2} $$
On remarque que, puisque $x^{2} + 1$ est de degré 2, on doit mettre un polynôme de degré 1 au dessus.

La forme générale des décompositions est en fait :
$\displaystyle\text{partie entière} + \frac{\text{constante}}{\text{polynôme de degré 1}} +  \frac{\text{constante}}{\text{polynôme de degré 1}} + \cdots  + \frac{\text{polynôme de degré 1}}{\text{polynôme de degré 2}} + \frac{\text{polynôme de degré 1}}{\text{polynôme de degré 2}} + \cdots$
Où chaque polynôme dans les fraction est un [[polynôme irréductible]] (non factorisable).

### cas des polynômes répétés

Parfois, le dénominateur avant la décomposition possède plusieurs fois le même polynôme au dénominateur (ou bien un polynôme a une certaine puissance).
Par exemple, dans $\frac{x^{2}+1}{(x-1)^{3}(x+3)}$

Dans ce cas, il faut mettre chaque puissance inférieure dans un dénominateur.
Exemple : si $(x-1)^{3}(x+3)$ est au dénominateur, les dénominateurs de la décomposition seront : 
 - $(x+3)$ cas de base bu précédemment
 - $(x-1)$ également évident
 - $(x-1)^{2}$ ⚠️ il faut bien penser à mettres les puissances plus grandes
 - $(x-1)^{3}$ 

Le cas fonctionne aussi si c'est un polynôme de degré $2$ qui est au carré :
$\displaystyle\frac{x+2}{(x^{2}+1)^{4}(x+3)} = \frac{a}{x+3} + \frac{b}{x^{2}+1} + \frac{c}{(x^{2}+1)^{2}} + \frac{d}{(x^{2}+1)^{3}}+\frac{e}{(x^{2}+1)^{4}}$


### Trouver la valeur des constantes 

###### Exemple 1

Prenons la décomposition suivante :
$$ \frac{3x+1}{x^{2}-1} = \frac{a}{x+1} + \frac{b}{x-1}$$
On ne connaît pas les valeurs de $a$ et de $b$.

Pour les trouver, on peut multiplier par les dénominateurs qui divisent $a$ et $b$ (ici $x+1$ et $x-1$), et donner une valeur à $x$ pour annuler des termes

Par exemple, si on multiplie par $x+1$, on obtient :

$$\frac{3x+1}{x-1} = a + \frac{b(x+1)}{x-1}$$
Ensuite, on pose $x = -1$ pour annuler $x+1$ (par lequel on à multiplié)
On obtient alors :
$$1 = a + 0$$
car le terme contenant $b$ est alors multiplié par $x+1$ soit par $0$. On sait maintenant que $a = 1$

On peut ensuite procéder de même avec $b$ :
$$
\begin{align}
&\frac{3x+1}{x^{2}-1} = \frac{a}{x+1} + \frac{b}{x-1} \\
&\frac{3x+1}{x+1} = \frac{a(x-1)}{x+1} + b && \text{on multiplie par } x-1 \\
&\text{ on pose }x = 1\\&\text{ pour annuler } x -1 \\
&2 = 0+b \\
&b = 2
\end{align}
$$
On a donc $\begin{cases}a = 1\\ b = 2\end{cases}$

Soit :

$$
\frac{3x+1}{x^{2}-1} = \frac{1}{x+1} + \frac{2}{x-1}
$$

###### Exemple 2
Si on prends la décomposition :

$$
\dfrac{2x+1}{x^{3}+2x^{2}+x+2} =
\frac{ax+b}{x^{2}+1} + \frac{d}{x+2}
$$

On peut utiliser la même méthode : 

$$
\begin{align}
&\dfrac{2x+1}{x^{3}+2x^{2}+x+2} = \frac{ax+b}{x^{2}+1} + \frac{d}{x+2} \\
& \frac{2x+1}{x^{2}+1} = \frac{(ax + b)(x+2)}{x ^{2} +1} + d && \text{on multiplie par } x+2 \\
&\text{ on fixe } x = -2 \text{ pour annuller } x+2 \\
& - \frac{3}{5} = 0 + d \\
& d = -\frac{3}{5}
\end{align}
$$
Si on multiplie par $x^{2} + 1$ on obtient :
$$\frac{2x+1}{x+2} = ax+b + \frac{d(x^{2}+1)}{x+2}$$
Problème : on remarque que l'on ne peut pas annuller $x^{2}+1$
Mais, dans ce cas, on connaît $d$, on peut donc donner une valeur simple pour $x$, comme $x = 0$ par exemple, et injecter aussi la valeur de $d$ dans l'équation :
$$ \frac{1}{2} = ax+b - \frac{3}{10} $$
Alors, on peut résoudre l'équation :
$$
\begin{align}
\frac{1}{2} = ax + b - \frac{3}{10} &\iff ax+b = \frac{4}{5}
\end{align}
$$
Mais il faut se rappeler que l'on à fixé $x$. Cette équation doit être valide pour $x = 0$, on a donc :
$a\times 0 + b = \frac{4}{5}$ soit $b = \frac{4}{5}$

On doit ensuite recommencer avec une autre valeur de $x$ pour trouver $a$.
Pour $x = 1$ on a :

$1 = ax+b - \frac{2}{5}$ soit $a + b = \frac{7}{5}$ puisque $x = 0$

Or, on sait que $b = \frac{4}{5}$, donc $a + \frac{4}{5} = \frac{7}{5}$ soit $a = \frac{3}{5}$

On peut donc enfin remplacer $a$, $b$ et $d$ par leurs valeurs dans la décomposition :

$$\frac{2x+1}{x^{3}+2x^{2}+x + 2} = \frac{\frac{3}{5}x + \frac{4}{5}}{x^{2}+1} + \frac{\frac{3}{5}}{x+2}$$
Et on peut simplifier un peu :
$$\frac{2x+1}{x^{3}+2x^{2}+x + 2} = \frac{x + 4}{5(x^{2}+1)} + \frac{3}{5(x+2)}$$



