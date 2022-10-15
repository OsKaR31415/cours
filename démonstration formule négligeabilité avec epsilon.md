up::[[négligabilité]]
#maths/analyse #demonstration #no-review 

---
Démonstration de $f = o_{+\infty}(g) \iff \forall \varepsilon > 0, \forall b \in \, \forall x \in X, x \geq b \implies |f(x)| \leq \varepsilon|g(x)|$


Supposons que $f = o_{+\infty}(g)$
Donc $f = hg$ avec $\lim\limits_{+\infty}h = 0$
Soit $\varepsilon > 0$ il existe $b \in \mathbb{R}$ tel que $x > b \implies |h(x)| < \varepsilon$
On suppose la propriété, on définit $h$ par :
$h(x) = \left\{\begin{lgathered} \frac{f(x)}{g(x)} \text{ si } g(x) \neq 0 \\ 0 \text{ si } g(x) = 0\end{lgathered}\right.$
Si $g(x) \neq 0$ on a $f(x) = h(x)g(x)$
Pour $\varepsilon = 1$, il existe $b \in \mathbb{R}$ tel que si $x \geq b$, $|f(x)| \leq |g(x)|$
Donc si $g(x) = 0$, $f(x) = 0$
Donc $f = hg$ est vérifiée

Soit $\varepsilon > 0$, il existe $b \in \mathbb{R}$ tel que $x \geq b \implies |f(x)| \leq \varepsilon|g(x)|$
Si $x \neq b$ et $g(x) \neq 0$, $|h(x)| = \frac{|f(x)|}{|g(x)|} \leq \varepsilon$
et si $g(x) = 0$, $|h(x)| = 0 \leq \varepsilon$
Donc $\lim\limits_{+\infty}h = 0$ et $f = o_{+\infty}(g)$

