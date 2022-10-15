#exercice 
title::"TD1 d'analyse"

----
sujet : [[L2 maths analyse TD1-annotate]]

## Exercice 1
Pour chacune des suites dont le terme général est donné ci-dessous, déterminer son éventuelle limite.
Lorsque cette limite vaut $0^{+}$ ou $+\infty$, donner une équivalent simple.

---
$\disp u_{n} = \frac{n+\sqrt{n}}{n^{\frac{3}{2}}-n}$

$$\begin{align*}
u_{n} &= \frac{n + \sqrt{n}}{\sqrt{n}^{3}-n}\\
&= \frac{n^{2} + n \sqrt{n}}{\sqrt{n} - 1}\\
&= \frac{n^{2}\sqrt{n} + n^{2}}{1 - \frac{1}{\sqrt{n}}}\\
\end{align*}$$
$\lim\limits_{n \to \infty} \left( \frac{1-1}{\sqrt{n}} \right) = 1$
$\lim\limits_{n \to \infty}\left( n^{2} \sqrt{n} + n^{2} \right) = +\infty$
Donc, $\lim\limits_{n \to +\infty} u_{n} = +\infty$

---
$\disp u_{n} = \frac{2^{n}}{3^{n}+5^{n}}$

$$\begin{align*}
u_{n} &= \frac{2^{n}}{3^{n}+5^{n}}\\
&= \frac{2^{n}}{5^{n}\left( 1+ \left( \frac{3}{5} \right)^{n} \right)}\\
&= \left( \frac{2}{5} \right)^{n} \times \frac{1}{1+ \left(\frac{3}{5}\right)^{n}}
\end{align*}$$
$\lim\limits_{n \to +\infty} u_{n} = 0 \times \frac{1}{1+0}$ car $\frac{2}{5} < 1$ et $\frac{3}{5} < 1$

Equivalent simple :
puisque $\lim\limits_{n \to +\infty} \left( \dfrac{1}{1+\left( \frac{3}{5} \right)^{n}} \right) = 1$ et que $\lim\limits_{n \to +\infty} \left( \frac{2}{5} \right)^{n}$, alors on a :
$u_{n} \sim_{+\infty} \left( \frac{2}{5} \right)^{n}$

---
$\disp u_{n} = \ln \left( 1+ \frac{1}{n} \right)$

$\lim\limits_{n \to \infty} u_{n} = \ln(1+0) = 0$

---
$u_{n} = \sin \left( \frac{1}{n} \right)$

$$\begin{align*}
u_{n} &= \sin \left( \frac{1}{n} \right)\\
&= X + \frac{X^{2}}{2} + o(X^{2}) \text{ où } X=\frac{1}{n}\\
&= \frac{1}{n} + \frac{\frac{1}{n^{2}}}{2} + o\left(\frac{1}{n^{2}}\right)\\
&= \frac{1}{n} + \frac{1}{2n^{2}} + o\left(\frac{1}{n^{2}}\right)\\
\end{align*}$$
Or, $\lim\limits_{n \to \infty} \left(\frac{1}{n}\right) = \lim\limits_{n \to \infty} \left(\frac{1}{2n^{2}}\right) = 0$
Donc :
$\lim\limits_{n \to \infty}u_{n} = 0$

---
$\disp u_{n} = e^{\frac{2n}{n+\sqrt{3n}}}$

On étudie d'abord :
$s_{n} = \frac{2n}{n+\sqrt{3n}}$

$$\begin{align*}
s_{n}&= \frac{2n}{n\left(1+ \frac{\sqrt{3n}}{\sqrt{n}}\right)}\\
&= \frac{2}{1+ \frac{\sqrt{3}}{\sqrt{n}}}
\end{align*}$$
Donc :
$\lim\limits_{n \to \infty} s_{n} = 2$
et :
$\lim\limits_{n \to \infty}u_{n} = \lim\limits_{n \to }e^{v_{n}} = e^{2}$

---
$$\begin{align*}
u_{n} &= \tan \left(\frac{\pi}{2} \cos\left(\frac{1}{n}\right)\right)\\
&= \tan\left(\frac{\pi}{2} \times 1^{-}\right)\\
&= \tan \left( \frac{\pi}{2}^{-} \right)\\
&= +\infty
\end{align*}$$
**Equivalent simple :**

$$\begin{align*}
u_{n} &= \tan \left( \frac{\pi}{2} \cos \left( \frac{1}{n} \right) \right)\\
&= \tan \left( \frac{\pi}{2} \left( 1 - \frac{1}{2n^{2}} + o\left(\frac{1}{n^{2}}\right) \right) \right)\\
&= \tan \left( \frac{\pi}{2} - \frac{\pi}{2n^{2}} + o \left( \frac{1}{n^{2}} \right) \right)\\
&= 
\end{align*}$$


