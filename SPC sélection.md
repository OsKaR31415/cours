up::[[algèbre SPC]]
#informatique 

----

Soient $j, k \in \mathbb{N}$ et $a \in \mathbf{dom}$, $I$ une instance de relation, tels que $\max(j, k) \leq \text{arité}(I)$

$\sigma_{j=a}(I) = \{ t \in I \mid t(j) = a \}$

$\sigma_{j=k}(I) = \{ t \in I \mid t(j) = t(k) \}$


# Sélection généralisée

Soit $\varphi$ une formule conjonctive de sélection : 
$\varphi = \gamma_{1} \wedge \gamma_{2} \wedge \cdots$
où les $\gamma _{i}$ sont des expressions de la forme $a = b$
on note :
$\sigma _{\varphi} = \sigma _{\gamma_{1}}\left( \sigma_{\gamma_{2}} (\cdots) \right)$

