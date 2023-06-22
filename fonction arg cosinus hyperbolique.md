---
alias: ["argch", "arg cosinus hyperbolique"]
---
up::[[fonction cosinus hyperbolique|ch]]
sibling::[[fonction arg sinus hyperbolique|argsh]]
derivative::$-\dfrac{1}{\sqrt{ x^{2} + 1 }} = \dfrac{1}{\sqrt{x^{2}-1}}$
description::"$[1;+\infty[ \to \mathbb{R}^{+}$", "$x \mapsto \ln \left( x+\sqrt{x^{2}-1} \right)$"
primitive::""
title::$\arg \mathrm{ch}$
#maths/analyse #maths/trigonométrie 

----
[[fonction réciproque]] du [[fonction cosinus hyperbolique|cosinus hyperbolique]]
:luc_alert_triangle: $\mathrm{ch}$ n'est une bijection que de $\mathbb{R}^{+}$ dans $\mathbb{R}^{+}$, $\arg\mathrm{ch}$ est donc la [[fonction réciproque|réciproque]] de $\mathrm{ch}/_{\mathbb{R}^{+}}$

$\begin{align*} \arg\mathrm{ch} : \quad & [1;+\infty[ \rightarrow \mathbb{R}^{+} \\ & y \mapsto x \text{ tel que } \mathrm{ch}(x) = y \\ &x \mapsto \ln\left(x + \sqrt{x^{2} - 1}\right)\end{align*}$


# Propriétés

 - $\arg\mathrm{ch}$ est définie sur $[1; +\infty[$ et à valeurs dans $\mathbb{R}^{+}$
 - $\arg\mathrm{ch}$ est [[fonction dérivable|dérivable]] sur $]1;+\infty[$ (pas en 1 à cause de la [[fonction racine carrée|racine carrée]])
     - $(\arg\mathrm{ch})'(x) = \dfrac{1}{\sqrt{x^{2}-1}}$
 - 

[[démonstration expression de l'arg cosinus hyperbolique|démonstration]] de $\arg\mathrm{ch} x = \ln \left( x+\sqrt{x^{2}-1} \right)$
