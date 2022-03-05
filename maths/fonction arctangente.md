# Fonction arctangente

La fonction $\arctan$ est la [[fonction réciproque]] de la [[fonction tangente]].

La fonction $\tan$ n'est pas [[bijection|bijective]] sur $\mathbb{R}$, mais réduite à l'intervalle $\left[-\dfrac\pi2; \dfrac\pi2\right]$, $\tan/_{[-\frac\pi2;\frac\pi2]}$ est [[fonction continue|continue]] et [[fonction monotone|strictement monotone]], donc elle est [[bijection|bijective]].
Elle possède donc une [[fonction réciproque]], la fonction $\arctan$ :

$$\begin{aligned}
\tan : &\left[-\dfrac\pi2; \dfrac\pi2\right] \rightarrow \mathbb{R}\\
       &x \mapsto \tan(x)
\end{aligned}$$

$$\begin{aligned}
\arctan : &\mathbb{R} \rightarrow \left[-\dfrac\pi2; \dfrac\pi2\right]\\
          &y\mapsto x \text{ tel que } y = \tan(x) \text{ et } y\in\left[-\dfrac\pi2; \dfrac\pi2\right]\
\end{aligned}$$

## Dérivée
La [[dérivation|dérivée]] de $\arctan$ est :
$$\begin{aligned}
\arctan'(x) &= \dfrac1{\tan'(\arctan x)}\\
            &= \dfrac1{1+\tan^2(arctan x)}\\
            &= \dfrac1{1+x^2}
\end{aligned}$$
Plus généralement, on a : $(\arctan(u))' = \dfrac{u'}{1+u^2}$
(en utilisant $(f\circ g)' = f'\times g'\circ f$)

## Equations avec des arctangentes

$$\arctan x = y \iff \left\{ \begin{array}{l} x = \tan y\\\text{et}\\y \in \left[-\dfrac\pi2;\dfrac\pi2\right]\end{array} \right.$$

