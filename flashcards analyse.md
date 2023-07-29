#flashcards/maths/analyse #maths/analyse 


# Suites 

Somme des termes d'une [[suite géométrique]] $\displaystyle \sum\limits_{k=0}^{n}q^{k}$ ::: $\dfrac{1-q^{n+1}}{1-q}$
<!--SR:!2024-04-25,304,252!2024-05-16,325,272-->


Suite de Cauchy
??
Suite $(u_{n})_{n}$ telle que $\forall \varepsilon > 0, \quad \exists n \in \mathbb{N}, \quad \forall i>n, \forall j>n, \quad |u_{i}-u_{j}| < \varepsilon$
(la différence entre deux termes tend vers $0$ en $+\infty$ : $\lim\limits_{ i,j \to +\infty } |u_{i}-u_{j}| = 0$)
<!--SR:!2023-06-30,8,214!2023-12-19,222,254-->

Suite convergente 
??
Suite $(u_{n})_{n}$ telle que $\exists \mathscr{l} \in \mathbb{R}, \quad \forall \varepsilon>0, \quad \exists L>0, \quad \forall n \geq L, \quad |u_{n} - \mathscr{l}| \leq \varepsilon$
<!--SR:!2025-04-02,649,292!2023-12-30,187,212-->


# Limites

$\displaystyle\lim_{x \rightarrow 0} \frac{\sin x}{x} =$ :: $= 1$ (Car $\mathrm{DL}_{1}(0): \sin x = x + o(x)$)
<!--SR:!2025-06-26,777,290-->


$\lim\limits_{ n \to +\infty } \left( 1 + \dfrac{1}{n} \right)^{n}$ :: $e$ [[démonstration limite (1+1÷n)*n|démonstration]]
<!--SR:!2023-07-08,12,271-->

$\displaystyle \lim\limits_{ n \to +\infty } \left( 1 + \frac{x}{n} \right)^{n}$ :: $e^{x}$ [[démonstration limite (1+1÷n)*n|démonstration]]
<!--SR:!2023-07-09,13,271-->


# Séries

Théorème de Parseval
?
$\displaystyle\int_{-\pi}^{\pi} |f(x)|^{2} \, dx \pi \left( \frac{|a_0|^{2}}{2}+\sum\limits_{n=1}^{+\infty}\left( |a_{n}|^{2} + |b_{n}|^{2} \right) \right)$

Critère de Cauchy
?
$L = \limsup\limits_{ n \to \infty }|u_{n}|^{\frac{1}{n}}$ est fini.
Alors le rayon de CV est $\displaystyle R = \frac{1}{L}$
<!--SR:!2023-06-30,4,231-->

Règle d'Abel pour les séries
?
Si :
 - $a_{n}$ est décroissante et tend vers 0
 - $b_{n}$ a la suite de ses [[somme partielle d'une suite|sommes partielles]] bornée
alors $\sum\limits_{n} a_{n}b_{n}$ converge
<!--SR:!2023-07-07,11,271-->

Règle d'Abel **uniforme** pour une série
?
Si :
 - $a_{n}$ est décroissante, et [[série de fonctions convergence uniforme|converge uniformément]] vers 0
 - $b_{n}$ a ses [[somme partielle d'une suite|sommes partielles]] bornées
Alors $\sum\limits_{n} \left( a_{n} \cdot b_{n} \right)$ [[série de fonctions convergence uniforme|converge uniformément]] 
<!--SR:!2023-07-06,10,251-->

Produit de Cauchy de deux séries :
$\displaystyle \left( \sum\limits_{i\geq 0} a_{i} \right)\cdot \left( \sum\limits_{j \geq 0} b_{i} \right) = ?$
?
$\displaystyle \sum\limits_{d \geq 0} \left( x^{d} \sum\limits_{i=0}^{d} \left( a_{i} \cdot b_{d-i} \right) \right)$
<!--SR:!2023-07-01,3,211-->

## Séries de Fourier

Série de Fourier d'une fonction $f$
?
$\displaystyle a_0 = \frac{1}{\pi }\int_{-\pi}^{\pi} f(x) \, dx$
$\displaystyle a_n = \frac{1}{\pi }\int_{-\pi}^{\pi} f(x) \cos(nx) \, dx$
$\displaystyle b_{n} = \frac{1}{\pi} \int_{-\pi}^{\pi} f(x) \sin(nx) \, dx$
$\displaystyle SF_{f}(x) = \frac{a_0}{2} + \sum\limits_{n \geq 1} \Big( a_{n}\cos(nx) + b_{n}\sin(nx) \Big)$
<!--SR:!2023-06-29,1,232-->

Théorème de Parseval
??
$\displaystyle\int_{-\pi}^{\pi} |f(x)|^{2} \, dx = \pi \left[ \frac{|a_0|^{2}}{2} + \sum\limits_{n=0}^{+\infty} \Big( a_{n}\cos(nx) + b_{n}\sin(nx) \Big) \right]$

Soit $f$ une fonction $2\pi$-périodique
$\displaystyle\int_{-\pi}^{\pi } |f(x)|^{2} \, dx = ?$
??
Soit $f$ une fonction périodique
$\pi \left[ \frac{|a_0|^{2}}{2} + \sum\limits_{n=0}^{+\infty } \Big( a_{n}\cos(nx) + b_{n}\sin(nx) \Big) \right] = ?$


