up::[[structure algébrique]]
description::"table d'une opération (résultat de l'application sur toutes les valeurs possible)"
#maths/algèbre #no-review 

----
Soit $E$ un ensemble non vide, et $*$ une [[loi de composition interne|LCI]] sur $E$.
On représente la loi par une _table de Cayley_.

## Propriété
Si la table est symétrique par rapport à sa diagonale, cad. si sa [[transposée]] est égale à elle-même, alors la loi est [[commutativité|commutative]].

## Exemple
Dans $\mathbb Z/_{5\mathbb Z}$, la loi étant $\dot{\times}$ :
$$\begin{array}{c|ccccc}
\dot\times & \dot0 & \dot1 & \dot2 & \dot3 & \dot4\\
\hline
\dot0 & \dot0 & \dot0 & \dot0 & \dot0 & \dot0 \\
\dot1 & \dot0 & \dot1 & \dot2 & \dot3 & \dot4 \\
\dot2 & \dot0 & \dot2 & \dot4 & \dot1 & \dot3 \\
\dot3 & \dot0 & \dot3 & \dot1 & \dot4 & \dot2 \\
\dot4 & \dot0 & \dot4 & \dot3 & \dot2 & \dot1 \\
\end{array}$$
