#flashcards #maths

# Dérivation

[[dérivation|dérivée]] de $\sin x$ ::: [[intégration|primitive]] de $\cos x$ 
<!--SR:!2022-11-12,26,274!2022-12-03,47,275-->
[[dérivation|dérivée]] de $\cos x$ ::: [[intégration|primitive]] de $-\sin x$
<!--SR:!2023-04-20,240,330!2022-12-04,50,275-->
[[dérivation|dérivée]] de $\tan x$ ::: [[intégration|primitive]] de $1 + \tan^2 x$
<!--SR:!2022-10-22,3,172!2022-12-12,56,295-->
[[dérivation|dérivée]] de $\tan(x)$ en fonction de $\cos$ ::: [[intégration|primitive]] de $\dfrac{1}{\cos^{2}(x)}$
<!--SR:!2023-02-21,171,280!2022-11-04,19,255-->
[[dérivation|dérivée]] de $\arcsin x$ ::: [[intégration|primitive]] de $\dfrac1{\sqrt{1-x^2}}$
<!--SR:!2023-03-25,175,252!2022-12-03,49,275-->
[[dérivation|dérivée]] de $\arccos x$ ::: [[intégration|primitive]] de $-\dfrac1{\sqrt{1-x^2}}$
<!--SR:!2022-11-15,31,232!2022-11-03,17,235-->
[[dérivation|dérivée]] de $\arctan x$ ::: [[intégration|primitive]] de $\dfrac1{1+x^2}$
<!--SR:!2022-10-27,11,170!2022-11-08,22,255-->
[[dérivation|dérivée]] de $\ln |u|$ ::: [[intégration|primitive]] de $\dfrac{u'}u$
<!--SR:!2023-07-20,311,332!2022-12-18,61,275-->
[[dérivation|dérivée]] de $g\circ f$ ::: [[intégration|primitive]] de $f'\times g'\circ f$
<!--SR:!2023-02-20,166,252!2022-12-08,54,295-->
[[dérivation|dérivée]] de $f^{-1}$ ::: [[intégration|primitive]] de $\dfrac1{f'\circ f^{-1}}$
<!--SR:!2023-03-09,192,312!2022-11-06,22,255-->
[[intégration|primitive]] de $\ln(x)$ ::: [[dérivation|dérivée]] de $x \ln(x) - x + \text{cste.}$
<!--SR:!2022-10-23,4,243!2022-10-20,3,263-->
[[intégration|primitive]] de $\tan x$ ::: [[dérivation|dérivée]] de $-\ln(|\cos x|) + \text{cste.}$
<!--SR:!2022-10-20,3,263!2022-10-21,4,283-->
[[intégration|primitive]] de $\displaystyle\frac{1}{1-x^{2}}$ ::: [[dérivation|dérivée]] de $\arg \mathrm{th} (x) + \text{cste.}$
<!--SR:!2022-10-20,3,263!2022-10-20,1,223-->
[[intégration|primitive]] de $\displaystyle\frac{1}{x^{2}+a^{2}}$ ::: [[dérivation|dérivée]] de $\displaystyle\frac{1}{a} \arctan \left( \frac{x}{a} \right) + cste.$
<!--SR:!2022-11-12,27,256!2022-10-24,5,255-->

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


# Intégration


Formule de l'[[intégration par parties]]
?
$\displaystyle\int_\alpha^\beta u'(x)v(x)d x = \big[u(x)v(x)\big]_\alpha^\beta - \int_\alpha^\beta u(x)v'(x) d x$
<!--SR:!2023-05-29,272,332-->


