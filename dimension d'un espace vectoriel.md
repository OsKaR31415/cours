up::[[espace vectoriel]]
#maths/algèbre #review 
# dimension d'un espace vectoriel
Soit $E$ un [[espace vectoriel]].
On sait que $E$ admet une [[base d'un espace vectoriel|base]].
**Toutes les bases de $E$ on le même [[cardinal]]**.
Ce cardinal commun est appelé _dimension_ de $E$.

## Propriétés
 - $\{0_E\}$ est un espace vectoriel de dimension 0
 - toute [[famille de vecteurs génératrice|famille génératrice]] $G$ de $E$ vérifie $\card G \geq \dim E$ 
 . toute [[famille de vecteurs libre|famille libre]] $L$ de $E$ vérifie $\card L \leq \dim E$
 - $\card G = \dim E$    $\iff$    $G$ est une [[base d'un espace vectoriel|base]] de $E$
     - Car on sait que $G$ est une base de $E$ ssi $G$ est libre et génératrice
     - On en déduit que $\card G \geq \dim E$ et que $\card G\leq\dim E$
     - On a donc bien $\card G = \dim E$
 - si $H$ est un [[sous espace vectoriel|sev]] de $E$, alors $\dim H \leq \dim E$
 - si $H$ Est un [[sous espace vectoriel|sev]] de $E$, alors $\dim H = \dim E \;\;\iff\;\; H = E$
