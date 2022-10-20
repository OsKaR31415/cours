---
alias: ["arcsin", "arcsinus"]
---
up::[[fonction sinus]]
sibling:: [[fonction arccosinus]]
#maths/analyse #maths/trigonométrie #no-review 

----
La fonction arcsin est la [[fonction réciproque]] de la fonction [[fonction sinus]].

$$
\begin{align*}
\arcsin :\; & [-1; 1] \to \left[ -\frac{\pi}{2}; \frac{\pi}{2}\right]\\
&y \mapsto x \text{ tel que } y=\sin(x)
\end{align*}
$$

# Définition
$\sin$ est définie sur $\mathbb{R}$, et n'est pas [[bijection|bijective]] sur cet ensemble.
Mais si on la limite à certains intervalles, elle peut être bijective.
En particulier, sur $\left[-\dfrac\pi2; \dfrac\pi2\right]$, elle est [[fonction continue|continue]] et [[fonction monotone|strictement monotone]], elle est donc [[bijection|bijective]], et donc possède une réciproque, la fonction $\arcsin$

> [!définition]
> $$\begin{aligned}
> \sin: &\left[-\dfrac\pi2; \dfrac\pi2\right] \rightarrow \left[-1; 1\right]\\
>       &x \mapsto \sin(x)\\
> &\\
> \arcsin: &[-1; 1] \rightarrow \left[-\dfrac\pi2; \dfrac\pi2\right]\\
>     &x \mapsto y\text{ tel que }\sin(y) = x \text{ et } y\in\left[-\dfrac\pi2; \dfrac\pi2\right]\\
> \end{aligned}$$

 - [p] $\forall x\in\left[-\dfrac\pi2; \dfrac\pi2\right], \sin(\arcsin(x)) = x$
 - [!] $\forall x\in\mathbb{R}, \arcsin(\sin(x))\neq x$ (en général)
     - [p] $\forall x\in\left[\dfrac\pi2; \dfrac\pi2\right], \arcsin(\sin(x)) = x$ (seul cas où c'est égal)

# Notes

$\cos(\arcsin(x)) = \sqrt{1 - x^2}$
$\sin(\arccos(x)) = \sqrt{1 - x^2}$

# Dérivée
La [[dérivation|dérivée]] de $\arccos$ peut être calculée grâce à la formule de [[dérivation]] d'une fonction réciproque :
$(f^{-1})'(x) = \dfrac1{f'(f(x))}$
$$\begin{aligned}
\arcsin'(x) &= \dfrac1{\sin'(\arcsin x)}\\
&= \dfrac1{\cos(\arcsin x)}\\
&= \dfrac1{\sqrt{\cos^2(\arcsin x)}}\\
&= \dfrac1{\sqrt{1 - \sin^2(\arcsin x)}}\\
&= \dfrac1{\sqrt{1-x^2}}
\end{aligned}$$
(Voir [[dérivation]], notamment la dérivée d'une fonction réciproque)

# Equations avec des arcsinus
$$\arcsin x = y \iff \left\{ \begin{array}{l} x = \sin y\\\text{et}\\y \in \left[-\dfrac\pi2; \dfrac\pi2\right] \end{array} \right.$$

