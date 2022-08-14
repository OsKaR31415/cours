---
alias: "arccos", "arccosinus", "fonction arccosinus"
---
up::[[fonction cosinus]]
#maths/analyse #maths/trigonométrie 
# fonction arccosinus

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
## Notes

$\cos(\arcsin(x)) = -\sqrt{1 - x^2}$
$\sin(\arccos(x)) = \sqrt{1 - x^2}$

## Dérivée
$\arccos$ est [[fonction dérivable|dérivable]] sur $\mathbb R$ (son [[ensemble de définition]]).
La [[dérivation|dérivée]] de $\arccos$ peut être calculée grâce à la formule de [[dérivation]] d'une fonction réciproque :
$(f^{-1})' = \dfrac1{f'\circ f^{-1}}$

On à alors :
$$\begin{aligned}
\arccos'(x) &= \dfrac1{\cos'(\arccos x)}\\
&= -\dfrac1{\sin(\arccos x)}\\
&= -\dfrac1{\sqrt{\sin^2(\arccos x)}}\\
&= -\dfrac1{\sqrt{1 - \cos^2(\arccos x)}}\\
&= -\dfrac1{\sqrt{1 - x^2}}
\end{aligned}$$


## Equations avec des arccosinus

$$\arccos x = y \iff \left\{ \begin{array}{l} x = \cos y\\\text{et}\\y \in [0; \pi] \end{array} \right.$$
