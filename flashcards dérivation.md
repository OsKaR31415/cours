#flashcards #maths

## Dérivation

[[dérivation|dérivée]] de $\sin x$ ::: $\cos x$ 
<!--SR:!2022-10-05,4,274!2022-10-05,3,255-->
[[dérivation|dérivée]] de $\cos x$ ::: $-\sin x$
<!--SR:!2023-04-20,240,330!2022-10-05,3,255-->
[[dérivation|dérivée]] de $\tan x$ ::: $1 + \tan^2 x$
<!--SR:!2022-10-07,8,192!2022-10-06,4,275-->
[[dérivation|dérivée]] de $\tan(x)$ en fonction de $\cos$ ::: $\dfrac{1}{\cos^{2}(x)}$
<!--SR:!2023-02-21,171,280!2022-10-05,3,255-->
[[dérivation|dérivée]] de $\arcsin x$ ::: $\dfrac1{\sqrt{1-x^2}}$
<!--SR:!2023-03-25,175,252!2022-10-05,3,255-->
[[dérivation|dérivée]] de $\arccos x$ ::: $-\dfrac1{\sqrt{1-x^2}}$
<!--SR:!2022-10-09,10,232!2022-10-03,1,235-->
[[dérivation|dérivée]] de $\arctan x$ ::: $\dfrac1{1+x^2}$
<!--SR:!2022-10-03,4,190!2022-10-05,3,255-->

[[dérivation|dérivée]] de $\ln u$ ::: $\dfrac{u'}u$
<!--SR:!2023-07-20,311,332!2022-10-05,3,255-->
[[dérivation|dérivée]] de $\ln |u|$ ::: $\dfrac{u'}u$
<!--SR:!2023-01-28,158,292!2022-10-05,3,255-->
[[dérivation|dérivée]] de $g\circ f$ ::: $f'\times g'\circ f$
<!--SR:!2023-02-20,166,252!2022-10-06,4,275-->
[[dérivation|dérivée]] de $f^{-1}$ ::: $\dfrac1{f'\circ f^{-1}}$
<!--SR:!2023-03-09,192,312!2022-10-05,3,255-->


Formule générale de la [[dérivation]]
(définition de la dérivée)
?
$$f'(a) = \lim_{h\rightarrow0}\left(\dfrac{f(a+h) - f(a)}h\right)$$
<!--SR:!2023-02-19,153,252-->


Que vaut $(fg)^{(n)}$ ($fg$ [[dérivation|dérivée]] $n$ fois) ?
?
On utilise la _Formule de Leibniz_
$$(fg)^{(n)} = \sum_{k=0}^n \left( \binom{n}{k} f^{(k)}g^{(n-k)} \right)$$
<!--SR:!2022-12-07,123,292-->


## Intégration

[[intégration|primitive]] de $\ln x$ ::: $x\ln(x) - x + \text{cste.}$
<!--SR:!2022-11-16,58,227!2022-10-05,3,255-->
[[intégration|primitive]] de $\tan x$ ::: $-\ln(|\cos x|) + \text{cste.}$ 
<!--SR:!2022-11-20,55,207!2022-10-05,3,255-->
[[intégration|primitive]] de $\dfrac{1}{1-x^{2}}$ ::: $\arg\mathrm{th} (x) + cste.$
<!--SR:!2022-10-04,2,236!2022-10-03,1,235-->
[[intégration|primitive]] de $\displaystyle\frac{1}{x^{2}+a^{2}}$ ::: $\displaystyle\frac{1}{a} \arctan \left( \frac{x}{a} \right) + cste.$
<!--SR:!2022-10-04,3,256!2022-10-05,3,255-->


Formule de l'[[intégration par parties]]
?
$\displaystyle\int_\alpha^\beta u'(x)v(x)d x = \big[u(x)v(x)\big]_\alpha^\beta - \int_\alpha^\beta u(x)v'(x) d x$
<!--SR:!2023-05-29,272,332-->


