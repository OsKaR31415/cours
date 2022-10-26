#exercice #maths 

----

# Serie I

## Exercice 1
### 1)
Soient $f$ et $g$ deux fonctions définies au voisinage de $0$, et telles que :
 - $f(x) = o(x)$
 - $g(x)=o(x^2)$
On cherche à montrer que $g(x) = o(f(x))$

**Contre-exemple :**
Si on a $f(x)=x^{5}$ et $g(x) = x^{3}$
Alors, on a bien :
 - $\lim\limits_{ x \to 0 } \frac{f(x)}{x} = \lim\limits_{ x \to 0 } x^{4} = 0$ donc $f(x)=o(x)$
 - $\lim\limits_{ x \to 0 } \frac{g(x)}{x^{2}} = \lim\limits_{ x \to 0 } x = 0$ donc $g(x)=o(x^{2})$
Or :
$$
\begin{align}
\lim\limits_{ x \to 0 } \frac{g(x)}{f(x)} &= \lim\limits_{ x \to 0 } \frac{x^{3}}{x^{5}} \\
&= \lim\limits_{ x \to 0 } \frac{1}{x^{2}} \\
&= +\infty
\end{align}
$$
Donc : $g(x)\neq o(f(x))$ alors que $f(x)=o(x)$ et $g(x)=o(x^{2})$

> [!note]
> Au voisinage de $0$ :
> Si :
>  - $f(x) = o(x^{i})$
>  - $g(x) = o(x^{j})$ avec $j > i$
> alors on a :
> $g = o(f)$
> > [!attention]
> > Au voisinage de $+\infty$, la propriété est inversée, et on a :
> > $f = o(g)$


### 2)
*Au voisinage de $0$*
On à : $f(x) = o(x)$
On cherche à montrer que $f(x) = o(x^{2})$

**Contre-exemple :**
Si $f(x) = x^{2}$,
On a bien : $\lim\limits_{ x \to 0 }\frac{f(x)}{x} = \lim\limits_{ x \to 0} x = 0$
Or, on a :
$\lim\limits_{ x \to 0 }\frac{f(x)}{x^{2}} = \lim\limits_{ x \to 0 } \frac{x^{2}}{x^{2}} = 1 \neq 0$
Donc $f(x) \neq o(x^{2})$ alors que $f(x) = o(x)$


### 3)
*au voisinage de $0$*
On a : $f(x) = o(x)$
On cherche à montrer que $f(x) \sim x$
Si $f(x) = o(x)$, alors $\lim\limits_{ x \to 0 } \frac{f(x)}{x} = 0$
Or, $f(x)\sim x \iff \lim\limits_{ x \to 0 }\frac{f(x)}{x} = 1$
Donc $f(x) \not\sim x$

---
## Exercice 2
> Soient :
> $f(x) = x (1+\sqrt{ x })$
> $g(x) = (x-1)\ln(x)(x+e^{-x})$

### 1)
 1. montrer que $f(x) \sim x^{\frac{3}{2}}$
$$
\begin{align}
\lim\limits_{ x \to 0 } \frac{f(x)}{x^{\frac{3}{2}}} &= \lim\limits_{ x \to 0 } \frac{x(1+\sqrt{ x })}{\sqrt{ x }^{3}} \\
&= \lim\limits_{ x \to 0 } \frac{1+\sqrt{ x }}{\sqrt{ x }} \\
&= \lim\limits_{ x \to 0 } \frac{1}{\sqrt{ x }}+1 \\
&= 1
\end{align}
$$
Donc on à bien $f(x) \sim x^{\frac{3}{2}}$



## Exercice 3

### 1.


### 2.

Soit $f: x \mapsto (\cos(x^{2}) + a)e^{x} - \sqrt{ x^{3} +2 }$

On cherche à montrer que $f(x) = \mathcal{O}(e^{x})$

On veut donc montrer que $\frac{f(x)}{e^{x}}$ reste borné au voisinage de $+\infty$ 

> [!info] remarque
> Les voisinages de $+\infty$ sont de la forme $]A, +\infty[$ pour un certain $A$

Une condition suffisante est que $\displaystyle\lim\limits_{ x \to +\infty } \frac{f(x)}{e^{x}} = l \in \mathbb{R}$

> [!info] Rappel
> $l \in \mathbb{R}$ signifie que $l$ est borné.
> Pour inclure les limites infinies, on utilise $\overline{\mathbb{R}}$

$\displaystyle\frac{f(x)}{e^{x}}  = (\cos(x^{2})+a)  - \frac{\sqrt{ x^{3}+2 }}{e^{x}}$

On a :
 - $\cos(x^{2}) +a$ est bornée au voisinnage de $+\infty$
 - $\displaystyle\lim\limits_{ x \to +\infty } \frac{\sqrt{ x^{3}+2 }}{e^{x}} = \lim\limits_{ x \to +\infty } \sqrt{ \frac{x^{3}+2}{e^{2x}} } = 0$ (par croissances comparées)

On conclut que $\frac{f(x)}{e^{x}}$ est bornée au voisinnage de $+\infty$ 
(La somme de deux fonctions bornées est aussi bornée)

### 3.

Si on pose $a = 2$

A-t-on $f(x) \sim_{+\infty} 2e^{x}$ ?

Dans le 1. on a montré que : $f(x) \sim \left( \cos \left( x^{2} \right) +2 \right)e^{x}$

Donc la question se résume en cherchant si $\cos(x^{2}) + 2 \sim 2e^{x}$

> [!info] Remarque
> On utilise la transitivité de l'équivalence de fonctions :

On cherche donc à savoir si : $\left( \cos(x^{2}) + 2 \right) e^{x} \sim 2e^{x}$

La réponse est non car :

$\begin{align} \lim\limits_{ x \to + \infty } \frac{\left( \cos (x^{2}) + 2\right)e^{x}}{2e^{x}}  & = \lim\limits_{ x \to  +\infty } \frac{\cos(x^{2})+2}{2} \\ &= \lim\limits_{ x \to +\infty } \frac{\cos(x^{2})}{2} +1 \end{align}$

Cette limite n'existe pas, elle est donc différente de $1$, donc on à pas l'équivalence.


## Exercice 4
> Déterminer un équivalent simple des expressions suivantes au voisinage de $+\infty$

### 1.
#### a)

$-5 x ^{3} + \pi x ^{4} - \ln 2$

> [!definition] Propriété
> On sait que :
> $f(x) + o(f(x)) \sim f(x)$

$-5x^{3} = o(\pi x^{4})$ et $-\ln 2 = o(\pi x^{4})$

Donc : $\pi x^{4} - 5 x^{3} - \ln 2 = \pi x^{4}  + o(\pi x^{4}) + o(\pi x^{4})$
Et donc : $-5x^{3} + \pi x^{4} - \ln 2 \sim \pi x^{4}$


#### b)

$\displaystyle 2e^{x} - \frac{1}{3}x^{12}  k \sqrt{ 2 }\ln x$

> [!info] Rappel
> $\ln (bx) \ll P(x) \ll e^{ax}$
> quelque soient $(a, b) \in \mathbb{R}$ et $P \in \mathbb{R}[X]$ un polynôme

 - $\displaystyle- \frac{1}{3}x^{12} = o(2e^{x})$
 - $\sqrt{ 2 }\ln x = o(2e^{x})$
donc :
$2e^{x}- \frac{1}{3}x^{12} + \sqrt{ 2 }\ln x \sim 2e^{x}$


#### c)

$\displaystyle \frac{e^{x+2}+\ln x}{e^{x-1}+x+1}$

> [!info] Rappel
> On sait que, soient $f$ et $g$ des fonctions :
> $\displaystyle \frac{f_{1}(x)}{g_{1}(x)} \sim \frac{f_{2}(x)}{g_{2}(x)} \iff \begin{cases}f_{1}(x)\sim f_{2}(x)\\\text{et}\\ g_{1}(x) \sim g_{2}(x)\end{cases}$

Or, on a :
 - $e^{x+2} + \ln x \sim e^{x+2}$ 
 - $e^{x-1} + x+1 \sim e^{x-1}$

donc :

$\displaystyle \frac{e^{x+2}+\ln x}{e^{x-1}+x+1} \sim \frac{e^{x+1}}{e^{x-1}}$


On sait que : $\displaystyle\frac{e^{x+1}}{e^{x-1}} = e^{(x+1)-(x-1)} = e^{2}$

Donc : 
$\displaystyle \frac{e^{x+2}+\ln x}{e^{x-1}+x+1} \sim e^{2}$

#### d)
$\ln(x+2)$

$$
\begin{align}
\lim\limits_{ x \to +\infty } \frac{\ln(x+2)}{\ln(x)} &= \lim\limits_{ x \to +\infty } \frac{\ln \left( x \left( 1+\frac{2}{x} \right)  \right) }{\ln(x)} \\
&= \lim\limits_{ x \to +\infty } \frac{\ln(x) + \ln \left( 1+\frac{2}{x} \right) }{\ln(x)} \\
&= \lim\limits_{ x \to +\infty } 1+\frac{\ln \left( 1+\frac{2}{x} \right) }{\ln(x)} \\
&= 1
\end{align}
$$

Donc $\ln(x+2) \sim \ln(x)$


#### e)

$e^{2x} - 9e^{\sqrt{ x }} - \ln(3x)$

On a :
$e^{2x} - 9e^{\sqrt{ x }} - \ln(3x) \sim e^{2x} - 9e^{\sqrt{ x }}$

Donc, on veut montrer que $9e^{\sqrt{ x }} = o(e^{2x})$

$$
\begin{align}
\displaystyle\lim\limits_{ x \to +\infty } \frac{9e^{\sqrt{ x }}}{e^{2x}} &= \lim\limits_{ x \to +\infty }9 e^{\sqrt{ x }-2x} \\
&= \lim\limits_{ x \to +\infty } 9e^{2x\left( \frac{1}{2\sqrt{ x }}-1 \right) } \\
&= \lim\limits_{ x \to +\infty } 9e^{2x(-1)} & \text{car } \lim\limits_{ x \to +\infty } \frac{1}{2\sqrt{ x }} = 0 \\
&= \lim\limits_{ x \to +\infty }  9x^{-2x} \\
&= 0 & \text{car } \lim\limits_{ x \to +\infty } e^{-x} = 0
\end{align}
$$
#### f)
$\displaystyle x^{2}+8x^{2}\ln (x)+ \frac{2x}{\ln(x)}$

$\displaystyle x^{2}+8x^{2}\ln (x)+ \frac{2x}{\ln(x)} = \frac{x^{2}\ln(x) + 8x^{2}\ln^{2}(x) + 2x}{\ln(x)}$

$x^{2} = o\left( 8x^{2}\ln(x) \right)$ car $\lim\limits_{ x \to +\infty } \frac{x^{2}}{8x^{2}\ln(x)} = \lim\limits_{ x \to +\infty } \frac{1}{8\ln(x)} = 0$

De plus : $\displaystyle \frac{2x}{\ln(x)} = o\left( 8x^{2}\ln(x) \right)$ car $\ln$ est strictement positive au voisinage de $+\infty$

> [!note] Justification de $\dfrac{2x}{\ln(x)} = o\left( 8x^{2}\ln(x) \right)$
> $\dfrac{2x}{\ln(x)} < 2x$ au voisinage de $+\infty$
> et $2x = o\left( 8x^{2}\ln(x) \right)$
> Donc, nécoessaireemnt, $\displaystyle\frac{2x}{\ln(x)} = o\left( 8x^{2}\ln(x) \right)$

On conclut que  :

$8x^{2}\ln(x) + x^{2} + \frac{2x}{\ln(x)} \sim 8x^{2}\ln(x)$

#### f)
$x^{2}+8x^{2}x + \frac{2x}{\ln x}$

$x^{2} = o(8x^{2}\ln(x))$
car :
$\displaystyle\lim\limits_{ x \to +\infty } \frac{x^{2}}{8x^{2}\ln x} = \lim\limits_{ x \to +\infty } \frac{1}{8\ln x} = 0$


$\displaystyle\frac{2x}{\ln x} = o(8x^{2}\ln x)$
car :
$\displaystyle\lim\limits_{ x \to +\infty } \frac{\frac{2x}{\ln x}}{8x^{2}\ln x} = \lim\limits_{ x \to +\infty } \frac{2x}{8x^{2}\ln^{2}x} = \lim\limits_{ x \to +\infty }\frac{1}{4x\ln^{2}x} = 0$

Donc, on a :
$\boxed{x^{2} + 8x^{2} \ln x + \frac{2x}{\ln x} \sim 8x^{2}\ln x}$


#### g)

$\displaystyle\frac{\sin x}{x^{3}} - \frac{4}{x\sqrt{ x }} = \frac{\sin x-4x\sqrt{ x }}{x^{3}}$

Montrons que $\sin(x) = o(-4x\sqrt{ x })$ :
$-1 \leq \sin x\leq 1$
$\displaystyle \underbrace{-\frac{1}{-4x\sqrt{ x }}}_{\to_{+\infty} 0} \geq \frac{\sin x}{-4x\sqrt{ x }} \geq \underbrace{\frac{1}{-4x\sqrt{ x }}}_{\to _{+\infty}0}$
On a :
$\displaystyle\lim\limits_{ x \to +\infty } \frac{1}{4x\sqrt{ x }} = \lim\limits_{ x \to +\infty } -\frac{1}{4x\sqrt{ x }} = 0$
Donc, d'après le théorème des gendarmes, on sait que :
$\displaystyle \lim\limits_{ x \to +\infty } \frac{\sin x}{-4x\sqrt{ x }} = 0$

Puisque $\displaystyle\frac{1}{-4x\sqrt{ x }} = - \frac{4}{x\sqrt{ x }}$, on obtient :

$\boxed{\displaystyle \frac{\sin x}{x^{3}} - \frac{4}{x\sqrt{ x }} \sim - \frac{4}{x\sqrt{ x }}}$


#### h)

On a : $9 = o\left( e^{ 2x+3 } \right)$ car $\displaystyle\lim\limits_{ x \to  +\infty } \frac{9}{e^{ 2x+3 }} = 0$
(on peut donc enlever $9$)

On cherche à savoir si $e^{ 2x } = o\left( e^{ 2x+3 } \right)$

$\displaystyle\lim\limits_{ x \to +\infty } \frac{e^{ 2x }}{e^{ 2x+3 }} = \lim\limits_{ x \to +\infty } e^{ 2x - (2x+3)} = \lim\limits_{ x \to +\infty } e^{ -3 } \neq 0$

> [!note]
> On a $e^{ 2x } = \mathcal{O}\left( e^{ 2x+3 } \right)$ mais $e^{ 2x } \neq o\left( e^{ 2x+3 } \right)$

Donc, on devra garder $e^{ 2x }$ et $e^{ 2x + 3 }$

Alors, on obtient :

$\begin{align}e^{ 2x+3 } - e^{ 2x } - 9 &\sim e^{ 2x+3 } - e^{ 2x }\\ &\sim (e^{ 3 } -1)e^{ 2x }\end{align}$


#### i)

$\displaystyle \frac{\ln(3 +x^{4})}{\ln 3 + 2 \ln \left( 2x^{2} \right)}$ 
$$
\begin{align} 
\frac{\ln(3 +x^{4})}{\ln 3 + 2 \ln \left( 2x^{2} \right)} &= \frac{\ln\left( x^{4}\left( \frac{3}{x^{4}} +1 \right)  \right)}{\ln 3 + 2 \ln (2x^{2})} \\[1em]
&= \frac{\ln(x^{4}) + \ln \left( \frac{3}{x^{4}}  +1 \right) }{\ln(3) + 2\ln(2) + 2\ln(x^{2})} \\[1em]
&= \frac{4\ln(x) + \ln \left( \frac{3}{x^{4}} +1 \right) }{\ln(3) + 2\ln(2) +4\ln(x)} && \text{car } \ln \left( x^{2} \right)  = 2\ln x\\[1em]
\end{align}
$$ 
> [!note] Remarque
> On utilise le fait que $\ln(x^{2}) = 2\ln(x)$
> De manière générale, on a :
> $$\ln(x^{n}) = n\ln(x)$$
> Avec $x \in \mathbb{R}^{+}$ et $n \in \mathbb{R}$

On a :

$\ln \left( \frac{3}{x^{4}} +1 \right) = o\left( 4\ln(x) \right)$
car :
$\displaystyle\lim\limits_{ x \to  +\infty } \frac{\ln \left( \frac{3}{x^{4}} +1 \right)}{4\ln x} = \frac{0}{+\infty} = 0$

et :

$\ln(3) + 2\ln(2) = o(4\ln(x))$
car :
$\displaystyle\lim\limits_{ x \to +\infty } \frac{\ln(3) + 2\ln(2)}{4\ln(x)} = 0$

Donc, on obtient :

$\displaystyle\frac{\left( 4\ln(x) + \ln \left( \frac{3}{x^{4}}+1 \right) \right)}{\ln(3) + 2\ln(2) +4\ln(x)} \sim \frac{4\ln(x)}{4\ln(x)}$

Soit :

$\boxed{\frac{\left( 4\ln(x) + \ln \left( \frac{3}{x^{4}}+1 \right) \right)}{\ln(3) + 2\ln(2) +4\ln(x)} \sim 1}$

> [!note] Remarque
> On peut en déduire que :
> $\displaystyle\lim\limits_{ x \to +\infty } \frac{\ln \left( 3 + x^{4} \right)}{\ln(3) + 2\ln(2x^{2})} = 1$
> même si on n'a pas utilisé cette propriété pour montrer l'équivalence

### 2.
> Déterminer un équivalent simple des expressions suivantes au voisinage de $0$

#### a)

> $\sin x - 3$

$\mathrm{DL}_{2}(0): \sin x = x+o(x^{2})$

> [!info] Rappel
> Développement limité de $\sin x$ :
> $\displaystyle\sin x = x- \frac{x^{3}}{3!} + \frac{x^{5}}{5!} - \frac{x^{7}}{7!} + \cdots + \frac{x^{2n+1}}{(2n+1)!} + o\left( x^{2n+1} \right)$
> (mêmes termes que le développement de l'exponentielle, mais seulement les terme avec des puissances impaires - car le sinus est impair - et avec des signes alternés)
> > [!note]
> > Le mnémotechnique fonctionne également pour le cosinus, qui est pair
> 
> On peut en déduire une infinité d'équivalents du sinus :
>  - $\sin (x) \sim x$
>  - $\sin(x) \sim x - \frac{x^{3}}{3!}$
>  - $\sin(x) \sim x- \frac{x^{3}}{3!} + \frac{x^{5}}{5!}$
>  - $\sin(x) \sim x- \frac{x^{3}}{3!} + \frac{x^{5}}{5!} - \frac{x^{7}}{7!}$
>  - $\vdots$

On a : $\sin(x) - 3 = x+o(x^{2})-3$ 
On obtient donc :

$\boxed{\sin(x)-3 \sim x-3}$


#### b)
> $\sin(x)-x+x^{2}$

$\displaystyle\mathrm{DL}_{4}(0): \sin(x) = x- \frac{x^{3}}{3!} + o(x^{4})$

Donc $\displaystyle\sin(x) - x + x^{2} = \left( x- \frac{x^{3}}{3!}+o(x^{4})\right) - x + x^{2} = x^{2} - \frac{x^{3}}{3!} +o(x^{4})$
On obtient : $\displaystyle\sin(x)-x+x^{2} \sim x^{2} - \frac{x^{3}}{3!}$

On remarque qu'on pouvait arrêter le Développement limité à l'ordre 2 :
$\sin(x) = x + o(x^{2})$
pour obtenir : 

$\boxed{\sin(x)-x+x^{2} \sim x^{2}}$


#### c)

> $\sin(x)-x+ \frac{x^{3}}{6}\cos(x)-1$

$\mathrm{DL}_{3}(0):\cos(x) = 1 - \frac{x^{2}}{2} + o(x^{3})$
Donc :
$\displaystyle\frac{x^{3}}{6} \cos(x) = \frac{x^{3}}{6} - \frac{x^{5}}{12} o(x^{8})$

Aussi :
$$
\begin{align}
\sin(x)-x + \frac{x^{3}}{6}\cos(x) -1 &= x- \frac{x^{3}}{6} + \frac{x^{5}}{5!} +o(x^{6})-x + \frac{x^{3}}{6} - \frac{x^{5}}{12} + o(x^{6})\\
&= \frac{x^{5}}{5!} - \frac{x^{5}}{12} + \underbrace{o(x^{6}) + o(x^{6})}_{o(x^{6})} \\
&\sim \left( \frac{1}{5!} - \frac{1}{12} \right)x^{5}
\end{align}
$$

On obtient donc :

$\boxed{\sin(x)-x+ \frac{x^{3}}{6}\cos(x)-1 \sim \left( \frac{1}{5!} - \frac{1}{12} \right)x^{5}}$



# Serie II

## Exercice 1
> Trouver le domaine de définition et une primitive des fonctions suivantes

### 1. $h_{1}(x) = \cos (x)\sin(x)$

$\mathscr{D}_{h_{1}} = \mathbb{R}$

$$
\begin{align}
\int \cos(x)\sin(x) \, dx &= \frac{1}{2}\int 2\cos(x)\sin(x) \, dx \\
&= \frac{1}{2}\int 2 \sin'(x)\sin(x) \, dx  \\
&= \frac{1}{2}\sin ^{2}(x)+ \text{cste.}
\end{align}
$$
On obtient :
$\boxed{\int h_{1}(x) \, dx = \frac{1}{2}\sin ^{2}(x)+\text{cste.}}$

> [!note] Remarque
> De la même manière, si on utilise : $\cos(x)\sin(x) = -\cos(x)\cos'(x)$
> On obtient la même chose, avec un signe opposé :
> $\displaystyle\int h_{1}(x) \, dx = -\frac{1}{2}\cos ^{2}(x)+\text{cste.}$
> > [!note] Remarque de la remarque
> > Si on soustrait les deux primitives, on obtient :
> > $\frac{1}{2} \sin ^{2}(x) - \left( - \frac{1}{2} \cos ^{2}(x) \right) + \text{cste.} = \frac{1}{2} \left( \sin ^{2}(x) + \cos ^{2}(x) \right) + \text{cste.} = \frac{1}{2} + \text{cste.} = \text{cste}$
> > Ce qui est logique, puisque ce sont les primitives de la même fonction ($h_{1}(x) - h_{1}(x)$ est nulle, et la primitive de la fonction nulle est une fonction constante).


### 2. $h_{2}(x) = (2x-3)(2x^{2}-6x+4)$

Il y à deux méthodes possibles

#### développer l'expression
On peut développer $(2x-3)(2x^{2}-6x+4)$, puis intégrer le polynôme obtenu
 - [c] c'est long

#### Remarquer une forme particulière
$$
\begin{align} 
\int (2x-3)(2x^{2}-6x+4) \, dx &= \int 2\underbrace{(2x-3)}_{\text{dérivée de } x^{2}-3x+2}(x^{2}-3x+2) \, dx  \\
&= \int 2 u'(x)\times u(x) \, dx  && \text{avec } u(x) = x^{2}-3x+2 \\
&= \big( u(x) \big) ^{2} + \text{cste.} \\
&= \left( x^{2}-3x+2 \right) ^{2} + \text{cste.}  \\
&= x^{4} - 6x^{3} + 13x^{2} - 12x + 4 + \text{cste.}
\end{align}
$$
On obtient :
$\boxed{\int h_{2}(s) \, dx = x^{4}-6x^{3}+13x^{2}-12x+4+\text{cste.}}$


