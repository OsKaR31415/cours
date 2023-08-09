#flashcards/maths/analyse/dérivation #maths

# Dérivation

[[dérivation|dérivée]] de $\sin x$ ::: [[intégration|primitive]] de $\cos x$ 
<!--SR:!2025-12-14,902,314!2024-08-03,407,275-->
[[dérivation|dérivée]] de $\cos x$ ::: [[intégration|primitive]] de $-\sin x$
<!--SR:!2027-04-23,1397,350!2026-02-10,963,295-->
[[dérivation|dérivée]] de $\tan x$ ::: [[intégration|primitive]] de $1 + \tan^2 x$
<!--SR:!2023-09-03,31,130!2024-09-21,453,295-->
[[dérivation|dérivée]] de $\tan(x)$ en fonction de $\cos$ ::: [[intégration|primitive]] de $\dfrac{1}{\cos^{2}(x)}$
<!--SR:!2026-08-23,1154,300!2024-06-18,361,255-->
[[dérivation|dérivée]] de $\arcsin x$ ::: [[intégration|primitive]] de $\dfrac1{\sqrt{1-x^2}}$
<!--SR:!2025-01-04,558,252!2024-03-07,258,255-->
[[dérivation|dérivée]] de $\arccos x$ ::: [[intégration|primitive]] de $-\dfrac1{\sqrt{1-x^2}}$
<!--SR:!2024-05-31,340,232!2024-06-30,370,255-->
[[dérivation|dérivée]] de $\arctan x$ ::: [[intégration|primitive]] de $\dfrac1{1+x^2}$
<!--SR:!2024-03-09,257,190!2024-09-22,454,275-->
[[dérivation|dérivée]] de $\ln |u|$ ::: [[intégration|primitive]] de $\dfrac{u'}u$
<!--SR:!2027-08-29,1487,352!2023-08-06,3,235-->
[[dérivation|dérivée]] de $g\circ f$ ::: [[intégration|primitive]] de $f'\times g'\circ f$
<!--SR:!2023-12-04,123,252!2025-08-09,737,315-->
[[dérivation|dérivée]] de $f^{-1}$ ::: [[intégration|primitive]] de $\dfrac1{f'\circ f^{-1}}$
<!--SR:!2025-07-26,764,312!2024-07-01,371,255-->
[[intégration|primitive]] de $\ln(x)$ ::: [[dérivation|dérivée]] de $x \ln(x) - x + \text{cste.}$
<!--SR:!2023-09-27,55,223!2023-12-11,130,263-->
[[intégration|primitive]] de $\tan x$ ::: [[dérivation|dérivée]] de $-\ln(|\cos x|) + \text{cste.}$
<!--SR:!2025-07-21,756,263!2023-10-16,74,263-->
[[intégration|primitive]] de $\displaystyle\frac{1}{1-x^{2}}$ ::: [[dérivation|dérivée]] de $\arg \mathrm{th} (x) + \text{cste.}$
<!--SR:!2024-04-11,290,243!2023-08-06,3,163-->
[[intégration|primitive]] de $\displaystyle\frac{1}{x^{2}+a^{2}}$ ::: [[dérivation|dérivée]] de $\displaystyle\frac{1}{a} \arctan \left( \frac{x}{a} \right) + cste.$
<!--SR:!2024-07-03,376,256!2024-12-15,538,295-->

Formule générale de la [[dérivation]]
(définition de la dérivée)
?
$$f'(a) = \lim_{h\rightarrow0}\left(\dfrac{f(a+h) - f(a)}h\right)$$
<!--SR:!2024-12-23,546,252-->


Que vaut $(fg)^{(n)}$ ($fg$ [[dérivation|dérivée]] $n$ fois) ?
?
On utilise la _Formule de Leibniz_
$$(fg)^{(n)} = \sum_{k=0}^n \left( \binom{n}{k} f^{(k)}g^{(n-k)} \right)$$
<!--SR:!2027-01-30,1314,312-->


# Intégration


Formule de l'[[intégration par parties]]
?
$\displaystyle\int_\alpha^\beta u'(x)v(x)d x = \big[u(x)v(x)\big]_\alpha^\beta - \int_\alpha^\beta u(x)v'(x) d x$
<!--SR:!2027-03-30,1373,352-->


