up::[[courbe paramétrée]]
#maths/algèbre 
# position de la tangente d'une courbe paramétrée
Soit une [[courbe paramétrée]] $f: t \mapsto M(t)$
Lorsque la courbe approche sa tangente en un point $t_0$, la courbe peut être positionée de plusieurs manières par rapport à sa tangente :

- **point d'allure ordinaire** :![[courbe paramétrée - point d'allure ordinaire.excalidraw|300]]
- **point d'inflexion** : ![[courbe paramétrée - point d'inflexion.excalidraw|300]]
- **rebroussement de première espèce** : ![[courbe paramétrée - rebroussement de première espèce.excalidraw|300]]
- **rebroussement de seconde espèce** :![[courbe paramétrée - rebroussement de seconde espèce.excalidraw|300]]

**Note :** rebroussements
Intuitivement, un rebroussement ne peut être qu'en un [[Point stationnaire d'une courbe paramétrique|point stationnaire]], car en un point où la "vitesse" est non nulle, on continue son chemin dans le même sens.


## Déterminer la position de la tangente
Soit $f: t\mapsto (x(t); y(t))$ une [[courbe paramétrée]]
Pour trouver la position de la tangente en $t_0$ à $f$, on calcule le [[développement limité]] de $x$ et $y$ au voisinage de $t_0$

Si on suppose que $t_{0} = 0$, on a : 
$M(t) = M(0) + t^{p}\vec{v} + t^{q}\vec{w} + t^{q}\vec{\epsilon}(t)$

où :
 - $(p, q)\in\N^{2}$ et $p < q$
 - $\vec{v}$ et $\vec{w}$ sont des [[vecteur|vecteurs]] non [[vecteurs colinéaires|colinéaires]]
     - Ils sont une [[base d'un espace vectoriel]] puisque l'on est en dimension 2
 - $\vec{\epsilon}(t)$ est un [[vecteur]] tel que $\disp\lim_{t\rightarrow t_{0}} (||\vec{\epsilon}(t)||) = 0$

En un tel point $M(0)$, la courbe $\mathscr C$ admet une tangente, dont un [[vecteur directeur]] est $\vec{v}$
La position de $\mathscr C$ par rapport à cette tangente est donnée par la [[parité]] de $p$ et $q$ :

![[courbe paramétrée - point d'allure ordinaire - parité.excalidraw]]
![[courbe paramétrée - point d'inflexion - parité.excalidraw]]
![[courbe paramétrée - rebroussement de première espèce - parité.excalidraw]]
![[courbe paramétrée - rebroussement de seconde espèce - parité.excalidraw]]

