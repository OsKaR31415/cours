up::[[courbe paramétrée]]
#maths/analyse #review 
# dérivée d'une courbe paramétrée

## Définition 
Soit $\begin{align}f : & D\subset \mathbb{R} \rightarrow \mathbb{R}^{2}\\& t \mapsto (x(t); y(t)) \end{align}$ une [[courbe paramétrée]]
Soit $t_{0}\in D$
La courbe $f$ est **dérivable en $t_{0}$** ssi les deux [[fonction|fonctions]] $x$ et $y$ sont [[fonction dérivable|dérivables]] en $t_{0}$

### Vecteur dérivé
Si une [[courbe paramétrée]] $f$ est _dérivable_ en $t_0$, le **vecteur dérivé** de la courbe en $t_{0}$ est le vecteur $\begin{pmatrix} x'(t_{0})\\ y'(t_{0})\end{pmatrix}$

## Notation
Le _vecteur dérivé_ de $f$ en $t_{0}$ se note $\frac{\overrightarrow{\d M}}{\d t}(t_0)$

### Justification de la notation
Dans le vecteur $\frac{1}{t-t_{0}}\overrightarrow{M(t_{0})M(t)}$ (dont on cherche la limite pour avoir la dérivée en $t_{0}$) peut s'écrire $M(t)-M(t_{0})$ (une différence de deux point $B-A$ est un vecteur $\overrightarrow{AB}$)
Donc :
$$
\frac{\overrightarrow{\d M}}{\d t}(t_{0}) = \frac{\overrightarrow{\text{différence invinitésimale de M}}}{\text{différence infinitésimale de t}}\text{en }t_{0}
$$

