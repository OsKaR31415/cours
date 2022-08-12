up::[[fonction sinus hyperbolique]]
#maths/trigonométrie #no-review 
# démonstration sh(a+b)

$\sh(a)+\ch(a) = \dfrac{e^{a}-e^{-a}}{2}+\dfrac{e^{a}+e^{-a}}{2} = \dfrac{2e^{a}}{2} = e^a$
Donc :
$\boxed{e^{a} = \sh(a)+\ch(a)}$

Alors :

$$
\begin{align*}
\sh(a+b) &= \dfrac{e^{a+b} - e^{-a-b}}{2}\\
&= \dfrac{\big(\sh(a)+\ch(a)\big)\big(\sh(b)+\ch(b)\big) - \big(\sh(-a)+\ch(-a)\big)\big(\sh(-b)+\ch(-b)\big)}{2}\\
&= \dfrac{\big(\sh(a)+\ch(a)\big)\big(\sh(b)+\ch(b)\big) - \big(\ch(a)-\sh(a)\big)\big(\ch(b)-\sh(b)\big)}{2} \\\\
& \text{en développant :}\\
&= \dfrac{2\sh(a)\ch(b) + 2\ch(a)\sh(b)}{2}\\
&= \sh(a)\ch(b)+\sh(b)\ch(a)
\end{align*}
$$