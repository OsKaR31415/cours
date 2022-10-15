
----

# Exercice 3

## 1.


## 2.

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

## 3.

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


# Exercice 4
Déterminer un équivalent simple des expressions suivantes au voisinage de $+\infty$

## a)

$-5 x ^{3} + \pi x ^{4} - \ln 2$

> [!definition] Propriété
> On sait que :
> $f(x) + o(f(x)) \sim f(x)$

$-5x^{3} = o(\pi x^{4})$ et $-\ln 2 = o(\pi x^{4})$

Donc : $\pi x^{4} - 5 x^{3} - \ln 2 = \pi x^{4}  + o(\pi x^{4}) + o(\pi x^{4})$
Et donc : $-5x^{3} + \pi x^{4} - \ln 2 \sim \pi x^{4}$


## b)

$\displaystyle 2e^{x} - \frac{1}{3}x^{12}  k \sqrt{ 2 }\ln x$

> [!info] Rappel
> $\ln (bx) \ll P(x) \ll e^{ax}$
> quelque soient $(a, b) \in \mathbb{R}$ et $P \in \mathbb{R}[X]$ un polynôme

 - $\displaystyle- \frac{1}{3}x^{12} = o(2e^{x})$
 - $\sqrt{ 2 }\ln x = o(2e^{x})$
donc :
$2e^{x}- \frac{1}{3}x^{12} + \sqrt{ 2 }\ln x \sim 2e^{x}$


## c)

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

## d)
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


## e)

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
## f)
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
