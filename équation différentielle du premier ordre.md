---
sr-due: 2022-08-30
sr-interval: 16
sr-ease: 270
---

up::[[équation différentielle]]
#maths/algèbre #review
# équation différentielle du premier ordre
Des [[équation différentielle|équations différentielles]] dans lesquelles seule la [[dérivation|dérivée]] [[dérivées successives|première]] apparaît.

## Forme

### Forme usuelle
La forme la plus commune est : $y' + a(x)y = b(x)$
 - Si elles sont de la forme $m(x)y' + a(x)y = b(x)$, on les ramène à la forme précédente : $y' + \frac{a(x)}{m(x)}y = \frac{b(x)}{m(x)}$
     - Si $m(x)$ s'annule, on travaille par intervalle

### Equations homogènes
Les équations pour lesquelles $b(x): x\mapsto 0$ sont dites **homogènes**, ou **sans second membre**
Elles sont de la forme $y' + a(x)y = 0$

### Equation vérifiant une condition initiale
Soit une équation $y' +a(x)y = b(x)$, sur un intervalle $I$
La donnée d'une _condition initiale_ pour cette équation est la donnée de $x_{0}\in I$ et de $y_{0}\in\R$
Une solution satisfaisant cette _condition initiale_ est une solution $y$ telle que $y(x_{0}) = y_{0}$

### Equations a variables séparées
Une équation de la forme $f(y)\cdot y' = g(x)$ (ou bien = $(f\circ y)(x)\times y'(x) = g(x)$)

## Propriétés

### Linéarité
Soient $y_{1}$ et $y_2$ qui vérifient $y_{1}' + a(x)y_{1} = b(x)$ et $y_{2}' + a(x)y_{2} = b(x)$
On a:
 - $Y = y_{1} - y_{2}$ est solution de $Y' + a(x)Y = 0$

 - Si $y_{h}$ est solution de $y'+a(x)y = 0$
     - alors $y_{h} + y_1$ est aussi solution de $y'+a(x)y = b(x)$
     - On utilise cela pour trouver des solutions

Autrement dit : _la solution générale est la somme d'une solution particulière et de la solution de la forme homogène de l'équation_


## Résolution
### Résoudre une [[équation différentielle du premier ordre#Equations homogènes|equation homogène]]
On cherche la solution générale de l'équation $y' + a(x)y = 0$

$$\begin{align*}
y' + a(x)y = 0 &\iff y' = -a(x)y\\
\text{si } y \text{ ne s'annule pas : } & \iff \frac{y'}{y}= -a(x)\\
& \iff \big(\ln(|y|)\big)' = -a(x)\\
\text{si } A' = a :& \iff \ln|y| = -A(x) + \underbrace{C}_{C\in\R}\\
& \iff |y| = e^{-A(x)+C}\\
& \iff \left\{ \begin{gathered}
    y = e^{-A(x)} e^{C}\\
        \text{ ou }\\
    y = -e^{-A(x)} e^{C}\\
    \end{gathered} \right.\\
\text{on pose } K = \pm e^{C} & \iff y = Ke^{-A(x)}\\
& \text{On peut aussi avoir } K = 0, \text{ solution lorsque } y \text{ s'annule}
\end{align*}$$

### Résoudre l'équation complète
#### Méthode par variation de la constante
$y' + a(x)y = b(x)$
Une fois que l'on à résolu l'équation sans second membre.
On à donc trouvé $A$, une primitive de $a$

On pose $y(x) = M(x)e^{-A(x)}$
Alors : 
 - $y'(x) = M'(x)e^{-A(x)} - M(x)A'(x)e^{-A(x)}$
 - Donc : $y'(x) + a(x)y(x) = M'(x)e^{-A(x)} - \underbrace{a(x)M(x)e^{-A(x)}}_{a(x)y(x)} + a(x)y(x)$
 - $y'(x) + a(x)y(x) = M'(x)e^{-A(x)}$
 - Si $y$ est solution, alors $M'(x)e^{-A(x)} = b(x)$
 - $M'(x) = \frac{b(x)}{e^{-A(x)}} = b(x)e^{A(x)}$
 - Donc : $\disp M = \int b\times e^{A}\d x$
 - Et $M(x)e^{-A(x)}$ est une solution de l'équation
**Conclusion :**
Les solutions s'écrivent :
$\underbrace{M(x)e^{-A(x)}}_{\text{solution particulière}} + \underbrace{Ke^{-A(x)}}_{\text{solution de l'équation sans second membre}}$

Soit : 
$e^{-A(x)} (M(x) + K)$

### Résoudre l'équation avec une condition initiale
Lorsque l'on a aussi une [[équation différentielle du premier ordre#Forme#Equation vérrifiant une condition initiale|condition initiale]], on peut simplement d'abord résoudre l'équation différentielle, et ensuite déduire les valeurs des constantes de cette _condition initiale_.

### Résoudre une équation a variables séparées
Lorsque l'on a une [[équation différentielle du premier ordre#Forme#Equations a variables séparées|équation a variables séparées]]
Soit l'équation : $(E) : f(y)y' = g(x)$
On pose $F' = f$ ($f$ doit être intégrable)
Alors :
$(F\circ y)' = y' \times (F'\circ y) = f(y)\times y'$ 

Soit $G' = g$
$\begin{align*} (E):& f(y)y' = g(x)\\ & (F\circ y)' = G'\\ & F\circ y = G + \text{cste.}\\ \end{align*}$

