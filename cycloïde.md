up::[[MOC analyse]]
#maths/analyse #no-review 
# cycloïde
La _cycloide_ est la courbe que parvourt un point choisi d'une roue lorsque celle-ci avance.

## Définitions
Définition comme une [[courbe paramétrée]] :
$$\left\{\begin{gathered}
x(t) = r(t-\sin(t))\\
y(t) = r(1-\cos(t))
\end{gathered}\right.$$
où $r$ est le rayon du cercle.
```desmos-graph
left=-0.5; right=2\pi;
---
a=2\pi|white
T=at|hidden
((T-\sin(T))/a, 1-\cos(T))
```

```functionplot
y = acos(1-x) - sin(acos(1-x))
```

## Propriétés
La cycloide renversée est une courbe [[brachistochrone]]
