#exercice 
up::[[L2_maths_geometrie_TD1.pdf]]
# exercices géometrie 2022-09-19


## Exercice 2
### 1)
> Montrer que l'ensemble des applications linéaires de $\mathbb{R}^{n}\to \mathbb{R}^{n}$ muni de la composition est un groupe $G$ non commutatif dès que $n \geq 2$

> [!error] Problème dans le sujet
> $(\mathcal{L}(\mathbb{R}^{n}, \mathbb{R}^{n}), \circ)$ n'est pas un [[groupe]] car toutes les applications de $\mathcal{L}(\mathbb{R}^{n}, \mathbb{R}^{n})$ ne sont pas [[bijection|bijectives]], et donc elles n'ont pas toutes un inverse.
> 
> > [!idea] compléments possibles
> > - l'ensemble des [[application linéaire|applications linéaires]] [[bijection|bijectives]] de $\mathbb{R}^{n}\to \mathbb{R}^{n}$ est un [[groupe]] 
> >  - l'ensemble des [[application linéaire|applications linéaires]] **[[surjection|surjectives]]** de $\mathbb{R}^{n}\to \mathbb{R}^{n}$ est un [[groupe]] 

Pour $n \geq 2$
On note $\mathcal{L}(\mathbb{R}^{n}, \mathbb{R}^{n})$ l'ensemble des applications linéaires de $\mathbb{R}^{n}\to \mathbb{R}^{n}$
 - $\mathcal{L}(\mathbb{R}^{n}, \mathbb{R}^{n}) \neq \emptyset$ car $(x \mapsto x) \in \mathcal{L}(\mathbb{R}^{n}, \mathbb{R}^{n})$
 - $\circ$ est une loi interne sur $\mathbb{R}^{n}$
     - Soient $(f, g) \in \left( \left( \mathbb{R}^{n} \right)^{\mathbb{R}^{n}} \right)^{2}$ deux [[application linéaire|applications linéaires]]
     - $f(\lambda u+v) = \lambda f(u)+f(v)$, de même pour $g$
     - $(g \circ f)(\lambda u+v)=g(\lambda f(u)+f(v))=\lambda(g \circ f)(u)+ (g \circ f)(v)$
     - Donc $(g \circ f)$ est aussi une [[application linéaire]], et $\circ$ est stable
 - $\circ$ est associative sur $\mathcal{L}(\mathbb{R}^{n}, \mathbb{R}^{n})$ car la [[multiplication de matrices]] est associative sur $\mathcal{M}_{n}[\mathbb{R}]$, et que la multiplication de matrices est équivalente à la composition d'applications linéaires associées
     - Soient $f$, $g$ et $h$ des [[application linéaire|applications linéaires]] de $\mathbb{R}^{n} \to \mathbb{R}^{n}$ 
     - $\begin{align}((f \circ g) \circ h)(\lambda u+v) &= (f \circ g)(\lambda h(u)+h(v))\\ &=f(\lambda(g \circ h)(u)+(g \circ h)(v))\\ &= \lambda(f \circ (g \circ h))(u) +(f \circ (g \circ h))(v)\\ &= (f \circ (g \circ h))(\lambda u+v) && \text{car on sait que } \circ \text{ est une LCI}\end{align}$
     - donc $((f \circ g)\circ h) = (f \circ (g \circ h))$
     - donc $\circ$ est associative 
 - On sait que toutes les applications de $G$ sont [[bijection|bijectives]] 
     - alors elles ont toutes une [[réciproque]] 
     - donc tous les éléments de $G$ sont symétrisables

Puisque $\circ$ est interne, associative et que tous les éléments de $G$ sont symétrisables par $\circ$, alors $(G, \circ)$ est un [[groupe]] 

### 2)
> Montrer que le [[centre d'un groupe|centre]] le $G$ est l'ensemble des [[homotétie|homotéties]] (non nulles)

On note $\mathrm{Z}(G)$ le [[centre d'un groupe|centre]] de $G$

 - toutes les [[homotétie|homotéties]] sont des [[application linéaire|applications linéaires]] et [[bijection|bijectives]] (sauf l'application nulle)
     - elles sont donc toutes contenues dans $G$
 - pour qu'une [[application linéaire]] $f$ soit une [[homotétie]], il faut que $\exists \lambda \in \mathbf{K}, \forall u \in E, f(u) = \lambda u$ 
     - 
$$
\mathrm{Z}(G) = \{ f \in G \mid \forall g \in G, f \circ g = g \circ f \}
$$