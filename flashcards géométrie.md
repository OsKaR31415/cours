#flashcards/maths/géométrie

Equation cartésienne d'une droite :: $ax + by +c = 0$ avec $(a, b) \in \mathbb{R}^{2} \setminus \{ (0, 0) \}$
<!--SR:!2025-04-23,667,290-->

**Vecteur directeur** d'une droite d'équation $ax+by+c = 0$
?
$\begin{pmatrix}-b\\ a\end{pmatrix}$
 - [!] $b$ et $a$ sont inversés
<!--SR:!2023-09-24,52,230-->

**Vecteur orthogonal** à une droite d'équation $ax + by +c = 0$ 
?
$\begin{pmatrix}a\\b\end{pmatrix}$
simple si on sait que $\dfrac{|ax+by+c|}{\sqrt{ a^{2}+b^{2} }}$ est la distance d'un point à la droite
<!--SR:!2024-02-06,225,250-->

**Pente** d'une droite d'équation $ax+by+c = 0$
?
$p = -\dfrac{a}{b}$
Logique puisque le [[vecteur directeur]] est $\begin{pmatrix}-b\\ a\end{pmatrix}$
Simple à retrouver en mettant l'équation sous la forme $\displaystyle y = - \frac{a}{b}x - \frac{c}{b}$
<!--SR:!2023-08-05,2,190-->


Distance d'un point à une droite d'équation $ax+by+c = 0$
?
$\displaystyle\frac{|ax+by+c|}{\sqrt{ a^{2}+b^{2} }}$
Soit l'expression de la droite divisée par la norme du [[vecteur directeur]] (ou du vecteur orthogonal).
<!--SR:!2023-08-05,2,210-->

Mesure algébrique de $AB$ : $\overline{AB}$
?
**distance signée** en fonction d'un vecteur de référence
Généralement sur une droite affine.
Soit $\vec{u}$ le vecteur de référence, et $\overrightarrow{AB}$ colinéaire à $\vec{u}$, on à :
$\displaystyle\overline{AB} = \begin{cases} \frac{1}{\|\vec{u}\|} \|\vec{AB}\| & \text{si } \overrightarrow{AB} \text{ est dans le sens de } \vec{u}\\ - \frac{1}{\|\vec{u}\|} \| \overrightarrow{AB} \| & \text{si } \overrightarrow{AB}  \text{ est dans l'autre sens}\end{cases}$
<!--SR:!2024-02-25,244,270-->



