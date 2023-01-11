---
sr-due: 2022-09-15
sr-interval: 32
sr-ease: 305
---

up::[[MOC analyse]]
#maths/analyse

---

# Définition
Une _courbe paramétrée plane_ est une [[application]] d'un sous-ensemble $D$ de $\mathbb{R}$ dans $\mathbb{R}^{2}$
$$\begin{align*}
f &: D\subset \mathbb{R} \rightarrow R^2\\
& t \mapsto f(t)
\end{align*}$$

 - application qui, à un réel $t$ (le **paramètre**) associe un _point_ du plan

 - On peut aussi écrire que $t \mapsto \begin{pmatrix} x(t)\\y(t) \end{pmatrix}$
 - Si on identifie $\mathbb{R}^2$ à $\mathbb{C}$, on à $t\mapsto x(t)+i \cdot y(t)$
     - On associe alors un nombre à un point du [[plan complexe]]

**Note :** malgré le nom de _courbe_ paramétrée, c'est bien une [[application]]
 - on remarque notamment que l'on à une information en plus de l'ensemble des points : l'ordre de parcours

# Notation
On écrit souvent les équations paramétriques de la manière suivante :
$$\left\{\begin{gathered}
x(t)=3\ln(t)\\
y(t)=2t^{2}+1
\end{gathered} \right., t\in D$$
 - $x$ et $y$ sont des fonctions de $D$ dans $\mathbb{R}$

On écrit également :
$z(t)=e^{it}, t\in D$
 - $z$ est une fonction de $D$ dans $\mathbb{C}$




# Exemples
 - $t\mapsto (\cos(t); \sin(t)), t\in[0;2\pi[$ paramétrisation du [[cercle trigonométrique]]
 - $t\mapsto(2t-3; 3t+1), t\in R$  paramétrisation de la droite passant par le point $A(-3, 1)$ et de vecteur directeur $\vec{u}(2, 3)$
 - $\lambda\mapsto\left((1-\lambda)x_{A}+\lambda x_{B}; (1-\lambda)y_{A} + \lambda y_{B}\right)$  paramétrisation du segment $[AB]$

# Propriétés

 - [[Support d'une courbe paramétrée]]
 - [[multiplicité d'un point d'une courbe paramétrée]]

## Représentation des fonctions
Si $f$ est une fonction de $D$ vers $\mathbb{R}$, on peut paramétriser le graphe de $f$.
On peut donc "_traduire_" $y=f(x)$ sous forme paramétrique :
$$\left\{\begin{gathered}
x(t)=t\\
y(t)=f(t)
\end{gathered}\right.$$


