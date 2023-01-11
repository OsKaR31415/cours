---
alias: "démonstration sh(a+b)"
---
up::[[fonction sinus hyperbolique|sh]]
description::"démonstration de $\mathrm{sh}(a+b)=\mathrm{sh}(a)\mathrm{ch}(b)+\mathrm{sh}(b)\mathrm{ch}(a)$"
#maths/trigonométrie #démonstration  
# démonstration sinus hyperbolique d'une somme

$\mathrm{sh}(a)+\mathrm{ch}(a) = \dfrac{e^{a}-e^{-a}}{2}+\dfrac{e^{a}+e^{-a}}{2} = \dfrac{2e^{a}}{2} = e^a$
Donc :
$\boxed{e^{a} = \mathrm{sh}(a)+\mathrm{ch}(a)}$

Alors :

$$
\begin{align*}
\mathrm{sh}(a+b) &= \dfrac{e^{a+b} - e^{-a-b}}{2}\\
&= \dfrac{\big(\mathrm{sh}(a)+\mathrm{ch}(a)\big)\big(\mathrm{sh}(b)+\mathrm{ch}(b)\big) - \big(\mathrm{sh}(-a)+\mathrm{ch}(-a)\big)\big(\mathrm{sh}(-b)+\mathrm{ch}(-b)\big)}{2}\\
&= \dfrac{\big(\mathrm{sh}(a)+\mathrm{ch}(a)\big)\big(\mathrm{sh}(b)+\mathrm{ch}(b)\big) - \big(\mathrm{ch}(a)-\mathrm{sh}(a)\big)\big(\mathrm{ch}(b)-\mathrm{sh}(b)\big)}{2} \\\\
& \text{en développant :}\\
&= \dfrac{2\mathrm{sh}(a)\mathrm{ch}(b) + 2\mathrm{ch}(a)\mathrm{sh}(b)}{2}\\
&= \mathrm{sh}(a)\mathrm{ch}(b)+\mathrm{sh}(b)\mathrm{ch}(a)
\end{align*}
$$
