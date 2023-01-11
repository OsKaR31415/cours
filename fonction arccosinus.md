---
alias: ["arccos", "arccosinus", "fonction arccosinus"]
---
up::[[fonction cosinus]]
sibling::[[fonction arcsinus|arcsin]]
properties::
description::"$[-1;1] \to \left[ - \frac{\pi}{2}; \frac{\pi}{2} \right]$", "$x \mapsto \arccos(x)$"
derivative::"$- \dfrac{1}{\sqrt{1-x^{2}}}$"
primitive::"$x \arccos (x) - \sqrt{ 1 - x^{2} } + \text{cste.}$"
title::$\arccos$
#maths/analyse #maths/trigonométrie

----

La fonction $\arccos$ est la [[fonction réciproque]] de la [[fonction cosinus]].

La fonction $\cos$ n'est pas [[bijection|bijective]] sur $\mathbb{R}$, mais réduite à l'intervalle $[0; \pi]$, $\cos/_{[0;\pi]}$ est [[fonction continue|continue]] et [[fonction monotone|strictement monotone]], donc elle est bijective.
Elle possède donc une [[fonction réciproque]], la fonction $\arccos$ :


$$\begin{aligned}
\cos: &[0; \pi] \rightarrow [-1; 1]\\
      &x \mapsto \cos(x)\\
&\\
\arccos: &[-1; 1] \rightarrow \left[-\dfrac\pi2; \dfrac\pi2\right]\\
	&x \mapsto y\text{ tel que }\cos(y) = x \text{ et } y\in[0, \pi]\\
\end{aligned}$$

```desmos-graph
width=400pt; height=400pt;
top=3.5;
left= -2;right=2;
bottom=-0.5;
---
y=\arccos(x)
```

# Propriétés

 - $\cos(\arcsin(x)) = -\sqrt{1 - x^2}$
 - $\sin(\arccos(x)) = \sqrt{1 - x^2}$

## Dérivation
$\arccos$ est [[fonction dérivable|dérivable]] sur $\mathbb R$ (son [[ensemble de définition]]).
La [[dérivation|dérivée]] de $\arccos$ peut être calculée grâce à la formule de [[dérivation]] d'une fonction réciproque :
$(f^{-1})' = \dfrac1{f'\circ f^{-1}}$

- On à alors :
$$\begin{aligned}
\arccos'(x) &= \dfrac1{\cos'(\arccos x)}\\
&= -\dfrac1{\sin(\arccos x)}\\
&= -\dfrac1{\sqrt{\sin^2(\arccos x)}}\\
&= -\dfrac1{\sqrt{1 - \cos^2(\arccos x)}}\\
&= -\dfrac1{\sqrt{1 - x^2}}
\end{aligned}$$


## Equations avec des arccosinus
Pour résoudre une équation avec des $\arccos$, on commence par poser :
$$\arccos x = y \iff \left\{ \begin{array}{l} x = \cos y\\\text{et}\\y \in [0; \pi] \end{array} \right.$$
