date::2022-08-22
#exercice


# exercices espaces vectoriels 2022-08-22
## déterminer lesquels de ces ensembles forment des espaces vectoriels :

### $E_{2} = \{ (x;y;z) \in \R^{3} \mid x^{2} - z^{2} = 0 \}$

$E_{2} \neq \emptyset$ car $(0;0;0) \in E_{2}$

Soient $(x;y;z)\in E_{2}$ et $(x',y';z')\in E_{2}$

$\begin{align*} \lambda(x;y;z) + (x';y';z') = (\lambda x + x'; \lambda y+y'; \lambda z+z') \end{align*}$ 

Or, $x^{2} - z^{2} = 0 \iff x^{2} = z^{2} \iff |x| = |z|$ (de même pour $x'$ et $z'$)
on a donc :
$$\begin{align*}
\lambda|x|+|x'| = \lambda|z|+|z'| &\iff \lambda|x+x'| = \lambda|z+z'|\\
&\iff |\lambda x+x'| = |\lambda z+z'|\\
& \text{on peut passer le } \lambda \text{ dans la valeur absolue}\\
& \text{car il est des deux côtés}\\
&\iff (\lambda x+x')^{2}= (\lambda z+z')^{2}\\
&\iff (\lambda x+x')^{2} - (\lambda z + z')^{2} = 0
\end{align*}$$
Donc, la propriété $x^{2}- z^{2}= 0$ est stable par combinaison linéaire; et puisque $E_{2}$ est non-vide, $(E_{2}; +)$ est un [[espace vectoriel|ev]]

---

### $E_{3} = \{ (x;y;z) \in \R^{3}\mid x+y-z = x+y+z = 0\}$
$E_{3} \neq \emptyset$ car $(0;0;0) \in E_{3}$

$\lambda(x;y;z)+(x';y';z') = (\lambda x+x'; \lambda y+y'; \lambda z+z')$

$x+y-z = x+y+z = 0 \qquad (1)$
$x'+y'-z' = x'+y'+z' = 0 \qquad (2)$

Par combinaison linéaire :
$$\begin{align*}
\lambda(1) + (2) &: \lambda(x+y-z) + x'+y'-z' = x+y+z+x'+y'+z' = 0\\
&: \lambda x+x' + \lambda y + y' -\lambda z - z' = x+x'+y+y'+z+z' = 0\\
&: (\lambda x+x') + (\lambda y + y') -(\lambda z + z') = (x+x')+(y+y')+(z+z') = 0\\
\end{align*}$$
Donc, la propriété est stable par [[combinaison linéaire]]. Puisque $E_{3}$ est non-vide, $(E_{3};+)$ forme un [[espace vectoriel|ev]]

---

### $E_{4} = \{(x;y;z) \in \R^{3}\mid z(x^{2}+y^{2}) = 0 \}$
$E_{4} \neq \emptyset$ car $(0;0;0) \in E_{4}$

On a :

$z(x^{2} + y^{2}) = 0 \qquad (1)$
$z'(x'^{2} + y'^{2}) = 0 \qquad (2)$

Par [[combinaison linéaire]] :
$$\begin{align*}
\lambda(1)+(2) &: \lambda z(x^{2}+y^{2}) + z'(x'^{2}+y'^{2}) = 0\\
&: \lambda zx^{2}+ z'x'^{2} + \lambda zy^{2} + z'y'^{2} = 0\\
&: 
\end{align*}$$

$$\begin{align*}
(\lambda z+z')\big( (\lambda x+x')^{2} + (\lambda y+y')^{2} \big)= 0 &\iff (\lambda z+z')(\lambda^{2}x^{2}+2\lambda x x' + x'^{2} + \lambda^{2}y^{2} + 2 \lambda y y' + y'^{2}) = 0\\
&\iff \lambda^{3} z x^{2} + 2\lambda^{2}zxx' + \lambda zx'^{2} + \lambda^{3}zy^{2} + 2\lambda^{2}zyy' + \lambda zy'^{2} + \lambda^{2}z'x^{2} + 2\lambda z'xx' + z'x'^{2} \lambda^{2}z'y^{2} + 2\lambda z'yy' + z'y'^{2}\\
\end{align*}$$
$\lambda z(x^{2}+y^{2}) + z'(x'^{2}+y'^{2}) = \lambda zx^{2} + \lambda zy^{2} + z'x'^{2} + z'y'^{2}$

Donc : $(\lambda z+z')\big( (\lambda x+x')^{2} + (\lambda y+y')^{2} \big) \neq \lambda z(x^{2}+y^{2}) + z'(x'^{2}+y'^{2})$
Donc la propriété n'est pas stable par addition, et $(E_{4}; +)$ n'est pas un [[espace vectoriel|ev]]

## Montrer que $\R^{2}$ muni de ces lois est un ev

$(\R^{2},+)$ avec :
 - $(a;b)+(c;d) = (a+c;b+d)$
 - $\lambda(a;b) = (\lambda a; \lambda b)$
$$\begin{align*} \lambda \big( (a;b) + (c;d)\big) &= \lambda(a+c; b+d)\\&= \big(\lambda(a+c); \lambda(b+d)\big) \\&= (\lambda a+\lambda c; \lambda b + \lambda d) \\&= (\lambda a; \lambda b) + (\lambda c; \lambda d) \\&= \lambda(a; b) + \lambda(c;d) \end{align*}$$

---

$(\R^{2},+)$ avec :
 - $(a; b) + (c; d) = (a+c; b+d)$
 - $\lambda(a;b) = (\lambda^{2}a; \lambda^{2}b)$

$$\begin{align*}
\lambda \big( (a;b)+(c;d) \big) &= \lambda (a+c; b+d)\\
&= \big( \lambda^{2}(a+c); \lambda^{2}(b+d) \big)\\
&= (\lambda^{2} a+\lambda^{2} c; \lambda^{2} b+ \lambda^{2} d)\\
&= (\lambda^{2} a; \lambda^{2} b) + (\lambda^{2} c; \lambda^{2} d)\\
&= \lambda(a;b) + \lambda(c;d)
\end{align*}$$
Donc $+$ est bien un [[espace vectoriel|ev]] avec $\R^{2}$


---

$(\R^{2}, +)$ avec :
 - $(a; b)+(c;d) = (c;d)$
 - $\lambda(a;b) = (\lambda a; \lambda b)$


$\lambda \big((a;b)+(c;d)\big)$
$= \lambda(c;d)$
$= (\lambda c; \lambda d)$
$= (\lambda a; \lambda b) + (\lambda c; \lambda d)$
$= \lambda(a;b) + \lambda(c;d)$

Donc $+$ est bien un [[espace vectoriel|ev]] avec $\R^{2}$



