---
sr-due: 2022-10-31
sr-interval: 46
sr-ease: 255
---

up::[[équation différentielle]]
#maths/algèbre #review 

----
[[équation différentielle]] dans laquelle seule les [[dérivées successives|dérivée première et seconde]] apparaîssent

# Forme 

## Forme usuelle
La forme la plus commune est : $ay'' + by' + cy = f(x)$ avec $a\neq0$
 - peut se ramèner à $y'' + ay' + by = f(x)$

## Equation avec condition initiale
Soit $(E)$ une [[équation différentielle du second ordre]] de la forme quelconque :
$(E): \Gamma(y'', y', y) = f(x)$

On donne des *conditions initiales* à $(E)$ lorsque l'on fixe des valeurs pour lesquelles on donne l'image par $y$ (ou par ses dérivées) :
**Exemples :** $\left\{\begin{gathered} y(x_{0}) = y_{0}\\ y(x_{1}) = y_{1}\end{gathered}\right.$ ou $\left\{\begin{gathered} y(x_{0}) = y_{0}\\ y'(x_{1}) = y_{1} \\ y''(x_{2}) = y_2 \end{gathered}\right.$



On donne souvent l'image par $y$ et $y'$ d'une même valeur : $\left\{ \begin{gathered} y(x_{0}) = y_{0}\\ y'(x_{0}) = y_{1} \end{gathered}\right.$

**Propriété :** pour des *conditions initiales* de la forme $y(x_{0}) = y_{0}$ et $y'(x_{0}) = y_{1}$, il existe **une unique solution** à l'équation


# Résolution

Soient $(1)$ et $(2)$ deux équations de [[équation différentielle du second ordre#Forme usuelle|forme usuelle]] ($a \neq 0$):

$(1) :\quad ay_{1}'' + by_{1}' + cy_{1} = f(x)$
$(2):\quad ay_{2}'' + by_{2}' + cy_{2} = f(x)$
$(1)-(2) : a(y_{1}-y_{2})'' + b(y_{1}-y_{2})' + c(y_{1}-y_{2}) = 0$ ([[équation différentielle#Equation Homogène|équation homogène]])

Donc, comme pour les [[équation différentielle du premier ordre|équations du premier ordre]], connaître la solution pour **l'équation sans second membre**, ainsi qu'une **solution particulière**, permet de connaître (par somme) la forme de l'**ensemble des solutions**


## Equation sans second membre
$(H): ay'' + by' + cy = 0$

On cherche une solution de la forme $y = e^{rx}$ ($r \in \C$ une constante)
En substituant $y$ dans $(H)$, on obtient :
$e^{rx}( ar^{2} + br + c ) = 0$
Or, $e^{rx}$ ne s'annule pas, donc :
$(H) \iff ar^{2} + br +c = 0$

### Polynôme caractéristique
On cherche donc les [[racines d'un polynôme|racines]] de $P(r) = ar^{2}+br+c$ le **polynôme caractéristique**

#### deux racines réelles
On appelle $r_{1}$ et $r_{2}$ ces deux racines distinctes ($(r_{1},r_{2})\in \R^{2}$)

Donc les solutions de l'équation $(H)$ sont :
$y_{1} = e^{r_{1}x}$, $y_{2}=e^{r_{2}x}$

Puisque $(H)$ est [[équation différentielle#Equation Homogène|homogène]], les solutions sont des [[combinaison linéaire|combinaisons linéaires]] de $y_{1}$ et $y_{2}$ :
$\boxed{S_{H} = \big\{c_{1}e^{r_{1}x} + c_{2}e^{r_{2}x} \big| (c_{1};c_{2}) \in \R^{2}\big\}}$



#### une racine double
Si $\Delta = 0$ (le [[discriminant]])
On note $s$ cette racine : $P(s) = 0$
On a aussi $P'(s) = 0$
Donc $\boxed{y_{1} = e^{sx}}$ est solution de $(H)$

On pose $\boxed{y_{2} = xe^{sx}}$, et on montre que $y_{2}$ est aussi solution
 - $y_{2}' = e^{sx}(sx + 1)$ $y_{2}'' = e^{sx}(s^{2}x + 2s)$
 - $\begin{align*} ay_{2}'' + by_{2}' + cy_{2} &= e^{sx}(a(s^{2}x + 2s) + b(sx + 1) + cx)\\ &= e^{sx}(\underbrace{(as^{2}+bs+c)}_{=P(s) = 0}x + \underbrace{(2as + b)}_{=P'(s)=0}) \end{align*}$
 - Donc, $y_{2}$ est annule bien $(H)$

Puisque $(H)$ est [[équation différentielle#Equation Homogène|homogène]], les solutions sont des [[combinaison linéaire|combinaisons linéaires]] de $y_{1}$ et $y_{2}$ :
$\boxed{S_{H} = \big\{ e^{sx}(c_{1}+c_{2}x) \big| (c_{1}; c_{2}) \in \R \big\}}$

#### deux racines complexes
Les deux racines sont $\lambda, \overline{\lambda}$
Dans ce cas, $\lambda$ et $\lambda$ sont [[conjugé complexe|conjugées]]

$\lambda = \alpha+i \beta$ et $\overline{\lambda} = \alpha - i \beta$ (avec $(\alpha, \beta) \in \R^{2}$)

Donc, les solutions de $(H)$ sont :
$y_{1} = e^{\lambda x} = e^{(\alpha+i \beta)x} = e^{\alpha x + i \beta x} = \boxed{e^{\alpha x}(\cos(\beta x) + i \sin(\beta x))}$
$y_{2} = e^{\overline{\lambda}x} = \boxed{e^{\alpha x}(\cos(\beta x) - i \sin(\beta x))}$

Puisque $(H)$ est [[équation différentielle#Equation Homogène|homogène]], les solutions sont des [[combinaison linéaire|combinaisons linéaires]] de $y_{1}$ et $y_{2}$ :
$S_{H} = \big\{x \mapsto e^{\alpha x}(c_{1} \cos(\beta x) + \underbrace{c_{2}\sin(\beta x)}_{\text{le } i \text{ est inclus dans } c_{2}}) \big| (c_{1}; c_{2})\in \C \big\}$

Si on veut les solutions réelles, on obtient :
$\boxed{S_{H}= \Big\{\big( x \mapsto e^{\alpha x} (d_{1} \cos(\beta x) + d_{2} \sin(\beta x)\big) \in \R^{\R}\Big| (d_{1}; d_{2}) \in \R \Big\}}$

### Résumé
Soit une équation :
$(H): ay'' + by' + cy = 0$

On cherche une solution de la forme $e^{rx} \quad\text{ avec } r \in \C$
Soit $\Delta = b^{2}-4ac$ le [[discriminant]] de $P(x) = ax^{2}+ bx+c$ (le [[équation différentielle du second ordre#Polynôme caractéristique|polynôme caractéristique]])

| $\Delta$     | racines                                  | forme des solutions                                        |
| ------------ | ---------------------------------------- | ---------------------------------------------------------- |
| $\Delta > 0$ | $(r_{1},r_{2})\in \R^{2}$                | $c_{1}e^{r_{1}x}+c_{2}e^{r_{2}x},\quad(c_{1},c_{2})\in \R$ |
| $\Delta=0$   | $s \in \R$                               | $e^{sx}(c_{1}+c_{2}x),\quad (c_{1},c_{2})\in \R$           |
| $\Delta<0$   | $(\lambda,\overline{\lambda})\in \C^{2}$ | $e^{\alpha x}(c_{1}\cos(\beta x)+ic_{2}\sin(\beta x)), \quad (c_{1};c_{2}) \in \R \quad \lambda = \alpha+i \beta$     |

## Equation avec second membre
Soit l'équation $(E): ay'' + by' + cy = f(x)$
On cherche une solution particulière

On connaît les solutions de $(H): ay''+by'+cy=0$
On appelle $y_{h}$ une de ces solutions
Soit $y_{p}$ une solution particulière de $(E)$
On a :
$S = \left\{(x \mapsto y_{p} + y_{h})\right\}$


 - Si $f$ est compliquée, on peut décomposer $(E)$ en plusieurs équations :

  $az_{1}''+bz_{1}' + cz_{1} = f_{1}(x)$
  $az_{2}''+bz_{2}' + cz_{2} = f_{2}(x)$
  $\vdots$
  $az_{k}''+bz_{k}' + cz_{k} = f_{k}(x)$
  (où $f(x) = \sum\limits_{i=1}^{k}f_{i}(x)$)
  Ensuite, on obient :
  $a\sum\limits z''_{i} + b \sum\limits z'_{i} + c \sum\limits z_{i} = \sum\limits f_{i}$
  donc : $y = \sum\limits_{i=1}^{k} z_i$

Voici quelques formes usuelles pour $f$
### Second membre de la forme $f(x)=e^{\lambda x} R(x)$
avec $\lambda \in \R$ et $R(x) \in \R[x]$ (parfois $\C[x]$)

On cherche une solution particulière de la forme $y_{p}(x)=e^{\lambda x} Q(x)$ où $Q \in \R[x]$

 - Si $\lambda$ n'est **pas une racine** du [[équation différentielle du second ordre#Polynôme caractéristique|polynôme caractéristique]] $P$ (si $P(\lambda) \neq 0$)
     - $\deg Q = \deg R$
 - Si $\lambda$ est une [[multiplicité d'une racine#Racine simple|racine simple]] de $P$
     - $\deg Q_{1} = \deg R$ avec $Q_{1} \in \R[x]$
     - on pose $Q(x) = xQ_{1}(x)$
 - Si $\lambda$ est une [[multiplicité d'une racine|racine double]] de $P$
     - $\deg Q_{2} = \deg R$ avec $Q_{2} \in \R[x]$
     - on pose $Q(x) = x^{2}Q_{2}(x)$

#### Trouver les coefficients de $Q$
on trouve les coefficients de $Q$ par identification : on remplace $y$ par $y_{p}=e^{\lambda x} R(x)$ dans l'expression de $(E)$

$ay_{p}''(x) + by_{p}'(x) + cy_{p}(x) = e^{\lambda x} R(x)$ avec $y_{p} = e^{\lambda x}Q(x)$

On obtient un système dont les variables sont les coefficients de $R$ et $\lambda$

### Second membre de la forme $f(x) = e^{rx}\cos(sx)R(x)$ ou $f(x) = e^{rx}\sin(sx)R(x)$
où $r \in \R$ et $R \in \R[x]$

#### Forme $f(x) = e^{rx}\cos(sx) R(x)$
 
$\begin{align} f(x) &= \text{Re}\big(f(x)\big) \qquad \text{(car } f \text{ est une fonction réelle)}\\ &= \text{Re}\big(e^{rx} \cos(sx) R(x)\big)\\ &= \text{Re}\big( e^{rx}(\cos(sx) + i \sin(sx))R(x) \big)\\ &= \text{Re}\big(  e^{rx}e^{isx}R(x) \big)\\ &= \boxed{\text{Re}\big(e^{(r+is)x}R(x)\big)} \end{align}$

On se ramène donc à la [[équation différentielle du second ordre#Second membre de la forme f x e lambda x R x|première forme]] : $e^{\lambda x} R(x)$ (ici $\lambda = r+is$)
en considérant uniquement la partie réelle de la fonction

#### Forme $f(x) = e^{rx}\sin(sx) R(x)$

$\begin{align} f(x) &= \text{Re}\big(f(x)\big) \qquad \text{(car } f \text{ est une fonction réelle)}\\ &= \text{Re}\big(e^{rx} \sin(sx) R(x)\big)\\ &= \text{Im}\big( e^{rx}(\cos(sx) + i \sin(sx))R(x) \big)\\ &= \text{Im}\big(  e^{rx}e^{isx}R(x) \big)\\ &= \boxed{\text{Im}\big(e^{(r+is)x}R(x)\big)} \end{align}$

On se ramène donc à la [[équation différentielle du second ordre#Second membre de la forme f x e lambda x R x|première forme]] : $e^{\lambda x} R(x)$ (ici $\lambda = r+is$)
en considérant uniquement la partie réelle de la fonction (qui est la partie imaginaire d'une autre fonction)


