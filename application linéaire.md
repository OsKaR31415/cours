#maths/algèbre 
# application linéaire
Soient $f$ une [[application]], et $E$ et $F$ deux [[espace vectoriel|espaces vectoriels]] réels,
$f: E \mapsto F$ est _linéaire_ ssi :
$\forall(u,v)\in E^2, \forall\lambda\in\R, f(u+v) = f(u) + f(v) \;\;\wedge\;\; f(\lambda u) = \lambda f(u)$


## Autre définition
Soient $f$ une [[application]], et $E$ et $F$ deux [[espace vectoriel|espaces vectoriels]] réels,
Une application $f: E \mapsto F$ est _linéaire_ ssi :
$\forall (u, v)\in E^2, \forall\lambda\in\R, f(\lambda u + v) = \lambda f(u) + f(v)$


## Exemples

L'application $\begin{aligned} Id: & E\mapsto E\\ & u \mapsto u \end{aligned}$ est une _application linéaire_

L'application $$\begin{aligned}
f: & \R^2 \mapsto \R\\
   & \begin{pmatrix} x\\y \end{pmatrix}
     \mapsto
     \begin{pmatrix}
         x + y\\
         x - y\\
         2x + 3y
     \end{pmatrix}
\end{aligned}$$