---
gists:
  - id: 92a99bc2c3393fdc0bc655384cd16e72
    url: 'https://gist.github.com/92a99bc2c3393fdc0bc655384cd16e72'
    createdAt: '2022-09-22T22:57:58Z'
    updatedAt: '2022-09-25T20:13:00Z'
    filename: cours analyse.md
    isPublic: true
---

# Notations de Laudau

## Négligeabilité
Soient deux fonctions $f$ et $g$, on dit que $f$ est négligeable devant $g$ en $x_{0}\in \overline{\mathbb{R}}$, et on note $f = o_{x_{0}}(g)$  :
$f = o_{x_{0}}(g) \iff \lim\limits_{ x \to x_{0} } \frac{f(x)}{g(x)} = 0$

### Définitions
#### Définition formelle
$f = o_{x_{0}}(g)$ ssi il existe une fonction $h$ telle que :
 - $\lim\limits_{ x_{0}} g = 0$
 - $f = hg$

#### Définition pratique
Pour les calculs, on utilise plutôt :
$f = o_{x_{0}}(g) \iff \lim\limits_{ x \to x_{0} } \frac{f(x)}{g(x)} = 0$

### Propriétés

 - $f = o_{x_{0}}(g) \implies f=O_{x_{0}}(g)$
     - où $O$ désigne la _domination en un point_
 - Si $f = o_{+\infty}(g)$ et $h = o_{+\infty}(g)$, alors $\lambda f+\mu h=o_{+\infty}(g)$ 
 - $o(1)=\varepsilon(x)$ car $\lim\limits \frac{o(1)}{1} = 0$ donc $\lim\limits$
 - $f \sim _{x_{0}} g \iff f = g+o_{x_{0}}(g)$

 
## Domination en un point
Soient deux fonctions $f$ et $g$ de $I \setminus \{ a \}$ à valeurs dans $\mathbb{R}$ (avec $a \in \overline{\mathbb{R}}$) 
$f$ est _dominée par $g$ en $a$_, ssi $\frac{f}{g}$ est **bornée au voisinage de $a$**.
On note alors $f = \mathcal{O}_{a}(g)$

### Définition
$f = \mathcal{O}_{a}(g) \iff \exists M \in \mathbb{R}^{+},\quad |f(x)| \leq M|g(x)| \text{au voisinage de } a$
Soit, formellement :
$\exists M\in\mathbb{R}^{+},\quad >  \exists \alpha \in\mathbb{R}^{+*},\quad \forall x \in ]a-\alpha; a+\alpha[,\quad |f(x)| \leq M|g(x)|$

### Propriétés
 - $f = \mathcal{O}_{x_{0}}(g) \iff g = \mathcal{O}_{x_{0}}(f)$
     - la domination est _commutative_
     - évident, car si $\frac{f}{g}$ est bornée, alors $\frac{g}{f}$ l'est aussi
 - $\mathcal{O}_{a}(1)$ désigne toute fonction bornée au voisinage de $a$


 - Si $f = \mathcal{O}(g)$ et $h = \mathcal{O}(g)$, alors $\lambda f + \mu h = \mathcal{O}(g) \mid_{(\lambda, \mu)\in\mathbb{R}^{2}}$
     - stable par combinaison linéaire
  - $\mathcal{O}(\mathcal{O}(f)) = \mathcal{O}(f)$
      - formellement : si $f = \mathcal{O}(g)$ et $g = \mathcal{O}(h)$ alors $f=\mathcal{O}(h)$
      - la domination est _transitive_

## Fonctions équivalentes
Soient $f$ et $g$ deux fonctions, on dit qu'elles sont _équivalentes en_ $x_{0}\in \overline{\mathbb{R}}$, et on note $f(x) \sim_{x_{0}} g(x)$ ssi :
$\boxed{f(x)\sim _{x_{0}} \iff \lim\limits_{ x \to x_{0} } \frac{f(x)}{g(x)} = 1}$


**Remarques :**
 - on écrit pas $0 \sim_{x_{0}} f$ car c'est évidamment toujours faux
 - ⚠️ $f \sim_{x_{0}} 0$ n'a pas de sens 

#### Autre définition
$f \sim_{x_{0}} g$ si il existe une fonction $h$ telle que :
 - $\lim\limits_{ x_{0} } h = 1$
 - $f = hg$
**Remarques** :
 - Dans cette définition, on peut avoir $f \sim_{x_{0}}0$
 - Si $x_{0}=\pm\infty$, on peut définir $h$ seulement $b \geq x_{0}$

#### Propriétés
 - l'équivalence de fonctions est une relation d'équivalence

 - $f \sim g \implies f \circ \varphi \sim g \circ \varphi$varphi
     - composition **à droite**
     - la composition à gauche **ne fonctionne pas**
         - $x+1 \sim_{+\infty} x$ alors que $e^{x+1}\not\sim_{+\infty} e^{x}$
         - la composition fonctionne avec $\ln$ :
             - $f \sim g \implies \ln(f) \sim \ln(g)$

 - si $\lim\limits_{ x \to x_{0} }f(x) = a \mid_{a \in \mathbb{R}^{*}}$ on a : $f \sim_{x_{0}} a$
     - si $a = 0$ ou $a = \pm \infty$ alors $f \not\sim_{x_{0}} a$
 - $f \sim_{x_{0}} g \iff \alpha f \sim_{x_{0}} \alpha g \mid_{\alpha \neq 0}$
     - stable par multiplication par un scalaire
 - $f \sim g \iff f^{\alpha}\sim g^{\alpha}\mid_{\alpha \in\mathbb{R}}$
     - stable par puissance
 - $\boxed{f\sim_{x_{0}}g \iff f = g+o_{x_{0}}(g)}$

 - Avec les polynômes : Soit $P(x) = a_{0}+a_{1}x+a_{2}x^{2}+\cdots+a_{n}x^{n}$ un polynôme de degré $n$ (donc $a_{n} \neq 0$)
     - au voisinage de $0$ : $P(x) \sim a_{0}$
     - au voisinage de $\pm\infty$ $P(x) \sim a_{n}x^{n}$

 - [ ] #todo continuer rédaction
