up::[[courbe paramétrée]]
#maths/analyse #no-review 

----
Des transformations du plan représentées comme fonction à composer à une [[courbe paramétrée]].
Puisqu'une courbe paramétrée est une [[application]] de $D\subset\R$ dans $\R^{2}$, les transformations du plan sont des [[application|applications]] de $\R^2$ dans $\R^2$ (c'est-à dire qu'a un point elles associent un point).

# Liste des transformations
On se place dans le plan d'origine $O$.
On note $(Ox)$ la droite des abscisses et $(Oy)$ celle des ordonnées.

## translation
$t_{\vec{u}} : (x, y) \mapsto (x+a, y+b)$ [[translation]] de [[vecteur]] $\vec{u}(a;b)$ 

## Réflexions
 - $S_{O_{x}} : (x,y)\mapsto (x, -y)$ [[réflexion]] d'axe $(Ox)$  
 - $S_{O_{y}}: (x,y)\mapsto (-x, y)$ [[réflexion]] d'axe $(Oy)$
 - $S_{D}:(x, y)\mapsto(y,x)$ [[réflexion]] d'axe la droite $D:y=x$
 - $S_{D'}:(x,y)\mapsto(-y,-x)$ [[réflexion]] d'axe la droite $D:y=-x$
 - $S_{D_{a}} : (x,y)\mapsto (2a - x, y)$ [[réflexion]] d'axe la droite $D_{a}:x=a$

## Symétries centrales
 - $S_{O}:(x,y)\mapsto (-x,-y)$ [[symétrie centrale]] de centre $O$
     - $S_{O} = S_{O_{x}} \circ S_{O_{y}}$ (voir [[transformations paramétrisées#Réflexions]])
 - $S_{I} : (x, y)\mapsto (2a-x, 2b-y)$ [[symétrie centrale]] de centre $I(a, b)$

## Rotations
 - $\text{rot}_{O, \frac{\pi}{2}}: (x,y)\mapsto (-y,x)$ [[rotation]] d'angle $\frac{\pi}{2}$
 - $\text{rot}_{O, -\frac{\pi}{2}}: (x,y)\mapsto (y,-x)$ [[rotation]] d'angle $-\frac{\pi}{2}$ 


