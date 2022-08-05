up::[[MOC analyse]]
#maths/analyse 
# développement limité

## Définition
Soient $n\in\mathbb N$,
$I$ un intervalle de $\mathbb R$ contenant $0$, ($0\in\dot I$, c.a.d que $0$ ne doit pas être une borne de $I$ : [[intérieur d'un intervalle|cf.]]),
et $f$ une fonction de $I$ dans $\mathbb R$.

On dit que $f$ possède un _développement limité à l'ordre $n$ **au voisinage de $0$**_ (noté $\DL_n(0)$ de $f$) s'il existe un polynôme $P$ de degré inférieur ou égal à $n$, à coefficients réels, et une fonction $\varepsilon$ de $I$ dans $\mathbb R$ tels que :

$\begin{align}f(x) &= P(x)+x^n\epsilon(x)\\ &=a_0+a_1x+a_2x^2+\ldots+a_nx^n+\underbrace{x^n\epsilon(x)}_{\text{reste}}\end{align}$

avec $\boxed{\lim_{x\rightarrow 0} \varepsilon(x) = 0}$

## Exemple

$\begin{align}f: & \mathbb R \setminus \{1\}\mapsto \mathbb R\\ &x \mapsto \dfrac1{1-x}\end{align}$


$\displaystyle\sum_{k=0}^n x^k = \dfrac{1-x^{n+1}}{1-x}$

Donc $\dfrac1{1-x} = 1+x+x^2+\ldots+x^n+x^n\underbrace{\dfrac{x}{1-x}}_{\varepsilon(x)}$

Vérification :
Soit $S = 1+x+x^2+\ldots+x^n \hspace{2em}(1)$
$x\cdot S = x+x^2+\ldots+x^n+x^{n+1} \hspace{2em}(2)$

$$\begin{aligned}
(1)-(2) &= \ldots\\[1ex]
S-x\cdot S &= 1-x^{n+1}\\[1ex]
S (1-x) &= 1-x^{n+1}\\[2ex]
S &= \dfrac{1-x^{n+1}}{1-x}
\end{aligned}$$


## Proposition

Soient $I$ un intervalle de $\R$ contenant $0$, et soit $F$ une fonction de $I$ dans $\R$.
Si $F$ est de [[classe d'une fonction|classe]] $C^1(I)$, et si $F'$ admet un $\DL_n(0)$, de partie régulière $P(x)$ ([[polynôme]]), alors $F$ possède un $\DL_{n+1}(0)$, de partie régulière la [[primitive]] de $P$ qui prend en $0$ la valeur $F(0)$
$\disp F(x) = \underbrace{F(0) + \int_0^x P(t) \d t}_{\text{partie régulière}} + x^{n+1}\varepsilon(x)$ avec $\disp\lim_{x\rightarrow0}\varepsilon(x) = 0$
On peut utiliser cette propriété pour calculer le $\DL$ de $F$.

## Propriétés

### Troncature
Soit $f$ une fonction admettant un $\DL_n(0)$, avec $\disp\DL_n(0):f(x) = \sum_{i=0}^n \left(a_ix^i\right) + x^n\varepsilon(x)$ avec $\disp\lim_{x\rightarrow0}\varepsilon(x) = 0$
$f$ possède un $\DL_k(0)$ pour tout $k\in[\![0; n]\!]$, et on a : $\disp\DL_k(0):f(x) = \underbrace{\sum_{i=0}^k\left(a_ix^i\right)}_{\text{partie régulière}} + x^n\varepsilon_2(x)$ avec $\disp\lim_{x\rightarrow0}\varepsilon_2(x) = 0$

### Opérations sur les DL
Soient $f$ et $g$ deux fonction admettant un $DL_n(x_0)$ :
     - $\DL_n(x_0): f + \DL_p(x_0): g = \DL_{\min (n; p)}(x_0): (f+g)$
 - $\DL_n(x_0): (f\times g) = (\DL_n(x_0): f) \times (\DL_n(x_0): g)$
     - $\DL_n(x_0): f \times \DL_p(x_0): g = \DL_{\min (n; p)}(x_0): (f\times g)$
 - Si $g(x_0)\neq0$, $\DL_n(x_0): \left(\dfrac fg\right) = \dfrac{\DL_n(x_0): f}{\DL_n(x_0): g} = \DL_n(x_0) f \times \DL_n(x_0): \dfrac1g$
     - Avec des ordre différents, on prends toujours le minimum.

### Composition
 Soient $f$ et $g$ deux fonctions telles que $f(0)=0$ et que $f$ et $g$ possèdent un $\DL_n(0)$
 Alors $f\circ g$ possède un $\DL_n(0)$
⚠️ Si $f(0)\neq 0$, on doit déterminer un $\DL_n(f(0)): g$

### Fonctions paires et impaires

Soit $f$ une [[fonction paire]], $\DL_n(x_0): f$ ne possède que des termes avec une puissance paire sur $x$ ($x^{2n}$). Le reste sera de la forme $x^{2n+1}\varepsilon(x)$.

Soit $f$ une [[fonction impaire]], $\DL_n(x_0): f$ ne possède que des termes avec une puissance impaire sur $x$ ($x^{2n+1}$). Le reste sera de la forme $x^{2n+2}\varepsilon(x)$.


## Interprétation
On peut voir le polynôme de Taylor comme le résultat que l'on obtient en extrayant des informations sur une fonction en un point donné :
 - Le terme de degré 0 (constante) sert à faire en sorte que $\DL(x_0): f(x_0) = f(x_0)$, c'est-à-dire qu'il permet que le développement limité **aie la même valeur que $f$ en $x_0$**
 - Le terme de degré $1$ sert à faire en sorte que le développement limité **aie la même tangente que $f$ en $x_0$**
 - Le terme de degré $2$ sert à faire en sorte que $\disp\left(\DL_2(x_0):f\right)^{(2)}(x_0) = f^{(2)}(x_0)$ (faire correspondre les **dérivées secondes en $x_0$**)
 - Le terme de degré $3$ sert à faire en sorte que $\disp\left(\DL_3(x_0):f\right)^{(3)}(x_0) = f^{(3)}(x_0)$ (faire correspondre les **dérivées troisièmes en $x_0$**)
 - $\vdots$
 - Le terme de degré $n$ sert à faire en sorte que $\disp\left(\DL_n(x_0):f\right)^{(n)}(x_0) = f^{(n)}(x_0)$ (faire correspondre les **dérivées troisièmes en $x_0$**)
 
C'est pour cette raison que faire tendre $n$ vers l'infini améliore l'approximation autour de $x_0$, mais pas forcément plus loin (car les informations extraites par les dérivées successives ne sont pas toujours suffisantes pour décrire toute la fonction) (Exemple : $\DL_n(1):\ln(x)$ ne [[fonction convergente|converge]] que lorsque $x\in[0;2]$)

Cf: [https://www.youtube.com/watch?v=3d6DsjIBzJ4](https://www.youtube.com/watch?v=3d6DsjIBzJ4 "https://www.youtube.com/watch?v=3d6DsjIBzJ4") (3B1B)
