---
---
up::[[MOC trigonométrie]], [[MOC fonctions]]
derivative::$1+\tan^{2(x)} = \frac{1}{\cos^{2}(x)}$
description::"$\mathbb{R} \setminus \frac{\pi}{2}\mathbb{Z} \to \mathbb{R}$", "$x \mapsto \dfrac{\sin(x)}{\cos(x)}$"
primitive::"$- \ln \left| \cos x \right| + \text{cste.}$"
title::$\tan$
#maths/analyse #maths/trigonométrie

----
Notée $\tan$. Fonction trigonométrique (fonction circulaire).
Elle est une [[application]] sur $\{x\in\mathbb{R} | \cos x\neq 0\} = \mathbb{R}\setminus\left\{ \dfrac\pi2 + k\pi,  k\in\mathbb{Z} \right\}$
Elle est [[fonction impaire|impaire]], [[fonction croissante|strictement croissante]] et de période $\pi$

$\begin{align*} f: \quad & \mathbb{R}\setminus \left\{\frac{\pi}{2}+k \pi, k \in \mathbb{Z}\right\} \to \mathbb{R}\\ & x \mapsto \frac{\sin(x)}{\cos(x)} \end{align*}$

# Propriétés
$\tan(x) = \dfrac{\sin x}{\cos x}$ (voir [[fonction sinus]] et [[fonction cosinus]])
On peut déduire de cette formule la [[dérivation|dérivée]] de $\tan$.

# Dérivée
La [[dérivation|dérivée]] de $\tan$ est $1+\tan^2$ :
$$\begin{aligned}
\tan'(x) &= \left(x\mapsto\dfrac{\sin x}{\cos x}\right)'(x)\\
&= \dfrac{\cos^{2}(x) + \sin^{2} (x)}{\cos^{2(x)}} = \frac{1}{\cos^{2}}\\
&= 1+\dfrac{\sin^{2(x)}}{\cos^{2(x)}}\\
&= 1 + \tan^2(x)
\end{aligned}$$

# Réciproque
La fonction $\tan/_{[-\frac\pi2; \frac\pi2]}$ possède une réciproque, la [[fonction arctangente]].

