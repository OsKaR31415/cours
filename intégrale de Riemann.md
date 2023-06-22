up::[[intégration]]
author::[[Riemann]]
#maths/analyse 

----

Soit $\varphi\in\varepsilon([a,b])$ une [[fonction escalier]] sur $[a,b]$
Soit $s=(x_i)_{0\leq i\leq n}\in\cal S([a,b])$ une [[Subdivision d'un intervalle|subdivision]] sur $[a,b]$ _adaptée_ à $\varphi$
On note $\lambda_i$ la valeur de $\phi$ sur $]x_i,x_{i+1}[$
On montre que le réel :
$\displaystyle\sum_{i=0}^{n-1}\Big( (x_i-x_{i+1})\lambda_i \Big)$

ne dépend pas de la subdivision adaptée à $\phi$.
Ce réel est appelé l'_intégrale de $\varphi$ sur $[a,b]$_ et noté $\displaystyle\int_a^b\varphi(x)\, dx$

# Fonction intégrable au sens de Riemann
une [[fonction bornée]] $f: [a,b]\rightarrow \mathbb{R}$ est _intégrable au sens de Riemann_, ou encore _Riemann intégrable_, si :
Pour tout $\varepsilon>0$ il existe des fonctions en escalier $\varphi$ et $\psi$ sur $[a,b]$ telles que :

$\displaystyle \forall x\in[a,b], \varphi(x)\leq f(x)\leq \psi(x)$ et $\displaystyle\int_a^b\Big( \psi(x) - \varphi(x) \Big) \, dx \leq \varepsilon$

Si $f$ est _Riemann intégrable_ sur $[a,b]$, on a :

$$
\displaystyle
\sup\left\{ \int_a^b\varphi(x)\, dx \Big| \varphi\in\varepsilon([a,b]), \varphi\leq f\right\}
= 
\inf\left\{ \int_a^b \psi(x) \, dx \Big| \psi\in\varepsilon([a,b]), f\leq\psi \right\}
$$
Et ce nombre est appelé l'_intégrale_ de $f$ sur $[a,b]$ et noté $\displaystyle\int_a^b f(x)\, dx$

## Intégrale par les sommes de Riemann
Soit $\sigma = (s_{0}, \dots, s_{n})$ une [[Subdivision d'un intervalle|subdivision]] de $[a; b]$.
Soit $X = (x_{0}, \dots, x_{n-1})$ le $n$-uplet de $[a;b]$ adapté à $\sigma$
Soit $f \in C^{0}([a;b])$
On définit la somme de Riemann de $f$ associée à $\sigma$ et $X$ par :
$\displaystyle S_{\sigma, X}(f) = \sum\limits_{i=0}^{n-1}\Big((s_{i+1}-s_{i})f(x_{i})\Big)$

Ce nombre est la somme des aires des rectangles de base $[s_{i}; s_{i+1}]$ et de hauteur $f(x_{i})$, donc une approximation de l'aire sous le graphe $f$. En prenant des subdivisions de plus en plus fines, on converge vers l'aire sous le graphe, donc vers l'intégrale.

> [!definition]- Lemme (convergence avec des subdivisions plus fines)
> Soit $f \in C^{0}([a, b])$
> On note $\omega$ le module de continuité de $f$
> Soient $\sigma = (s_{0}, \dots, s_{n})$ et $\tau = (t_{0}, \dots, t_{n})$ deux subdivisions de $[a, b]$ telles que $\tau$ est plus fine que $\sigma$
> On pose :
>  - $X = (x_{0}, \dots, x_{n-1})$ un $n$-uplet de $[a, b]$ associé à $\sigma$
>  - $Y = (y_{0}, \dots, y_{n-1})$ un $n$-uplet de $[a, b]$ associé à $\tau$
> On a alors :
> $\left| S_{\sigma, X}(f) - S_{\tau, Y}(f) \right| \leq (b - a)\omega(P(\sigma))$
> 
> > [!info] Démonstration
> > Comme $\tau$ est plus fine que $\sigma$, pour tout $k \in \{ 0, \dots, n \}$, il existe $i_{k}\in [\![ 0; m]\!]$ tel que $s_{k} = t_{i_{k}}$. Ainsi si $i_{k} \leq i < i_{k+1} - 1$, on a $y_{i} \in [t_{i}, t_{i+1}] \subset [s_{k}, s_{k+1}]$



# Propriétés

Toute fonction réelle [[fonction continue|continue]] sur un segment $[a,b]$ est _Riemann intégrable_.
De même pour toute [[fonction continue par morceaux]], pour toute fonction continue sauf en un nombre fini de points, pour toute fonction continue sauf en in nombre [[ensemble infini dénombrable|dénombrable]] de points.


Toute fonction réelle [[fonction monotone|monotone]] suru un segment $[a,b]$ est _Riemann intégrable_.

Soient $f$ et $g$ deux fonctions _Riemann intégrables_ sur $[a,b]$ et soit $k\in\mathbb{R}$,
Alors les fonctions $k\cdot f$ et $f+g$ sont _Riemann intégrables_.
De plus :
$\displaystyle \int_a^b (k\cdot f)(x) \, dx = k\cdot\int_a^b f(x)\, dx$
et 
$\displaystyle \int_a^b (f+g)(x)\, dx = \int_a^b f(x)\, dx + \int_a^b g(x) \, dx$
(L'intégration est un [[morphisme]] sur l'ensemble des fonctions muni de l'addition et de la multiplication externe).


## Relation de Chasles
Soient $(a,b,c)\in\mathbb{R}^3$ tel que $a<b<c$ et $f$ une fonction intégrable au sens de Riemann sur $[a,c]$.
Alors la fonction $f$ est intégrable sur $[a,b]$ et sur $[b,c]$ et vérifie l'égalité :
$\displaystyle\int_a^c f(x)\, dx = \int_a^b f(x)\, dx + \int_b^c f(x)\, dx$

### Généralisation
soit $f$ une fonction Riemann intégrable sur $[a,b]$.
On note $\displaystyle\int_a^b f(x)\, dx = -\int_a^b f(x)\, dx$. Donc $\displaystyle\int_a^a f(x)\, dx = 0$
Alors, pour tout $(a,b,c)\in\mathbb{R}^3$ et toute fonction $f$ Riemann intégrable sur un segment contenant $a$, $b$ et $c$, on a la relation de Casles généralisée :
$\displaystyle\int_a^c f(x)\, dx = \int_a^b f(x)\, dx + \int_b^c f(x)\, dx$

## Inégalités

Soient $f$ et $g$ deux fonctions Riemann intégrables sur $[a,b]$. On a :
 - si $f\geq0$, alors $\int_a^b f(x)\, dx \geq 0$
 - si $f\leq g$, alors $\int_a^b f(x)\, dx \leq \int_a^b g(x)\, dx$



