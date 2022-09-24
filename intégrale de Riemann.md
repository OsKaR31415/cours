up::[[intégration]]
#maths/analyse #review 
# intégrale de Riemann

Soit $\varphi\in\varepsilon([a,b])$ une [[fonction escalier]] sur $[a,b]$
Soit $s=(x_i)_{0\leq i\leq n}\in\cal S([a,b])$ une [[Subdivision d'un intervalle|subdivision]] sur $[a,b]$ _adaptée_ à $\varphi$
On note $\lambda_i$ la valeur de $\phi$ sur $]x_i,x_{i+1}[$
On montre que le réel :
$\disp\sum_{i=0}^{n-1}\Big( (x_i-x_{i+1})\lambda_i \Big)$

ne dépend pas de la subdivision adaptée à $\phi$.
Ce réel est appelé l'_intégrale de $\varphi$ sur $[a,b]$_ et noté $\disp\int_a^b\varphi(x)\d x$

## Fonction intégrable au sens de Riemann
une [[fonction bornée]] $f: [a,b]\rightarrow \mathbb{R}$ est _intégrable au sens de Riemann_, ou encore _Riemann intégrable_, si :
Pour tout $\varepsilon>0$ il existe des fonctions en escalier $\varphi$ et $\psi$ sur $[a,b]$ telles que :

$\disp \forall x\in[a,b], \varphi(x)\leq f(x)\leq \psi(x)$ et $\disp\int_a^b\Big( \psi(x) - \varphi(x) \Big) \d x \leq \varepsilon$

Si $f$ est _Riemann intégrable_ sur $[a,b]$, on a :

$$
\disp
\sup\left\{ \int_a^b\varphi(x)\d x \Big| \varphi\in\varepsilon([a,b]), \varphi\leq f\right\}
= 
\inf\left\{ \int_a^b \psi(x) \d x \Big| \psi\in\varepsilon([a,b]), f\leq\psi \right\}
$$
Et ce nombre est appelé l'_intégrale_ de $f$ sur $[a,b]$ et noté $\disp\int_a^b f(x)\d x$



## Propriétés

Toute fonction réelle [[fonction continue|continue]] sur un segment $[a,b]$ est _Riemann intégrable_.
De même pour toute [[fonction continue par morceaux]], pour toute fonction continue sauf en un nombre fini de points, pour toute fonction continue sauf en in nombre [[ensemble infini dénombrable|dénombrable]] de points.


Toute fonction réelle [[fonction monotone|monotone]] suru un segment $[a,b]$ est _Riemann intégrable_.

Soient $f$ et $g$ deux fonctions _Riemann intégrables_ sur $[a,b]$ et soit $k\in\mathbb{R}$,
Alors les fonctions $k\cdot f$ et $f+g$ sont _Riemann intégrables_.
De plus :
$\disp \int_a^b (k\cdot f)(x) \d x = k\cdot\int_a^b f(x)\d x$
et 
$\disp \int_a^b (f+g)(x)\d x = \int_a^b f(x)\d x + \int_a^b g(x) \d x$
(L'intégration est un [[morphisme]] sur l'ensemble des fonctions muni de l'addition et de la multiplication externe).


### Relation de Chasles
Soient $(a,b,c)\in\mathbb{R}^3$ tel que $a<b<c$ et $f$ une fonction intégrable au sens de Riemann sur $[a,c]$.
Alors la fonction $f$ est intégrable sur $[a,b]$ et sur $[b,c]$ et vérifie l'égalité :
$\disp\int_a^c f(x)\d x = \int_a^b f(x)\d x + \int_b^c f(x)\d x$

#### Généralisation
soit $f$ une fonction Riemann intégrable sur $[a,b]$.
On note $\disp\int_a^b f(x)\d x = -\int_a^b f(x)\d x$. Donc $\disp\int_a^a f(x)\d x = 0$
Alors, pour tout $(a,b,c)\in\mathbb{R}^3$ et toute fonction $f$ Riemann intégrable sur un segment contenant $a$, $b$ et $c$, on a la relation de Casles généralisée :
$\int_a^c f(x)\d x = \int_a^b f(x)\d x + \int_b^c f(x)\d x$

### Inégalités

Soient $f$ et $g$ deux fonctions Riemann intégrables sur $[a,b]$. On a :
 - si $f\geq0$, alors $\int_a^b f(x)\d x \geq 0$
 - si $f\leq g$, alors $\int_a^b f(x)\d x \leq \int_a^b g(x)\d x$



