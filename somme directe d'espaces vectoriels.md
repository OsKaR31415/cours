up::[[somme d'espaces vectoriels]]
#maths/analyse #no-review 
# somme directe d'espaces vectoriels
Soit $(E, +, \cdot)$ un [[espace vectoriel réel]]
Soient $F$ et $G$ deux [[sous espace vectoriel|sous espaces vectoriels]] de $E$
$E$ est la _somme directe_ de $F$ et $G$ ssi :
 - $F + G = E$
     - $+$ désigne [[somme d'espaces vectoriels]]
 - La décomposition de tout [[vecteur]] de $F+G$ est **unique** : $\forall w \in F+G, \exists!(u;v)\in F \times G, u+v = w$
     - autrement dit : $F \cap G = \{0_E\}$
     - on dit que $F$ et $G$ sont [[espaces vectoriels supplémentaires|supplémentaires]]

On peut simplement dire que $F$ et $G$ sont en _somme directe_ ssi ils sont [[espaces vectoriels supplémentaires|supplémentaires]] et en [[somme d'espaces vectoriels|somme]]

On note : $\boxed{E = F \oplus G}$



## Propriétés
Soient $E = F \oplus G$

 - la [[famille de vecteurs]] formée par l'union de deux [[base d'un espace vectoriel|bases]] de $F$ et $G$ est [[famille de vecteurs libre|libre]]
     - il n'y a pas de vecteur en commun entre $F$ et $G$ autre que le [[vecteur nul]]