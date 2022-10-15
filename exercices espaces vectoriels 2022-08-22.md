date::2022-08-22
#exercice #maths/algèbre 



----
# déterminer lesquels de ces ensembles forment des espaces vectoriels :

## $E_{2} = \{ (x;y;z) \in \mathbb{R}^{3} \mid x^{2} - z^{2} = 0 \}$

> [!error]- Démonstration fausse
> $E_{2} \neq \emptyset$ car $(0;0;0) \in E_{2}$
> 
> Soient $(x;y;z)\in E_{2}$ et $(x',y';z')\in E_{2}$
> 
> $\begin{align*} \lambda(x;y;z) + (x';y';z') = (\lambda x + x'; \lambda y+y'; \lambda z+z') \end{align*}$ 
> 
> Or, $x^{2} - z^{2} = 0 \iff x^{2} = z^{2} \iff |x| = |z|$ (de même pour $x'$ et $z'$)
> on a donc :
> $$\begin{align*}
> \lambda|x|+|x'| = \lambda|z|+|z'| &\iff \lambda|x+x'| = \lambda|z+z'|\\
> &\iff |\lambda x+x'| = |\lambda z+z'|\\
> & \text{on peut passer le } \lambda \text{ dans la valeur absolue}\\
> & \text{car il est des deux côtés}\\
> &\iff (\lambda x+x')^{2}= (\lambda z+z')^{2}\\
> &\iff (\lambda x+x')^{2} - (\lambda z + z')^{2} = 0
> \end{align*}$$
> Donc, la propriété $x^{2}- z^{2}= 0$ est stable par combinaison linéaire; et puisque $E_{2}$ est non-vide, $(E_{2}; +)$ est un [[espace vectoriel|ev]]
> 

> [!example] contre-exemple
> $(2; 1; -2) \in E_{2}$
> $(2; 1; 2) \in E_{2}$
> Pourtant $(2, 1; -2) + (2; 1; 2) = (4; 2; 0) \notin E_{2}$
> car $4^{2} \neq 0^{2}$

---

## $E_{3} = \{ (x;y;z) \in \mathbb{R}^{3}\mid x+y-z = x+y+z = 0\}$
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
Donc, la propriété est stable par [[combinaison linéaire]]. Puisque $E_{3}$ est non-vide, $(E_{3};+)$ forme un [[sous espace vectoriel|sev]]

> [!note] Autre méthode
> On sait que :
> $\left\{\begin{gathered} x +y-z = 0 \quad(1)\\ x+y+z=0 \quad(2) \end{gathered}\right.$
> 
> $(1) - (2) \iff -2z = 0 \iff z = 0$
> 
> alors $x+y = 0$, donc $y = -x$
> 
> Donc :
> $(x;y;z) \in E_{3} \iff (x;y;z) = x(1;-1;0) \mid_{x \in \mathbb{R}}$
>
> Donc $E_{3}$ est un [[sous espace vectoriel|sev]] de [[dimension d'un espace vectoriel|dimension]] 1 ([[droite vectorielle]], dont un vecteur générateur est $(1; -1; 0)$


---

## $E_{4} = \{(x;y;z) \in \mathbb{R}^{3}\mid z(x^{2}+y^{2}) = 0 \}$
$E_{4} \neq \emptyset$ car $(0;0;0) \in E_{4}$

On a :

$z(x^{2} + y^{2}) = 0 \qquad (1)$
$z'(x'^{2} + y'^{2}) = 0 \qquad (2)$

Par [[combinaison linéaire]] :
$$\begin{align*}
\lambda(1)+(2) &: \lambda z(x^{2}+y^{2}) + z'(x'^{2}+y'^{2}) = 0\\
&: \lambda zx^{2}+ z'x'^{2} + \lambda zy^{2} + z'y'^{2} = 0\\
\end{align*}$$

$$\begin{align*}
(\lambda z+z')\big( (\lambda x+x')^{2} + (\lambda y+y')^{2} \big)
&= (\lambda z+z')(\lambda^{2}x^{2}+2\lambda x x' + x'^{2} + \lambda^{2}y^{2} + 2 \lambda y y' + y'^{2}) \\
&= \lambda^{3} z x^{2} + 2\lambda^{2}zxx' + \lambda zx'^{2} + \lambda^{3}zy^{2} + 2\lambda^{2}zyy' + \lambda zy'^{2} + \lambda^{2}z'x^{2} + 2\lambda z'xx' + z'x'^{2} \lambda^{2}z'y^{2} + 2\lambda z'yy' + z'y'^{2}\\
\end{align*}$$
$\lambda z(x^{2}+y^{2}) + z'(x'^{2}+y'^{2}) = \lambda zx^{2} + \lambda zy^{2} + z'x'^{2} + z'y'^{2}$

Donc : $(\lambda z+z')\big( (\lambda x+x')^{2} + (\lambda y+y')^{2} \big) \neq \lambda z(x^{2}+y^{2}) + z'(x'^{2}+y'^{2})$ pour au moins certaines valeurs
Donc la propriété n'est pas stable par addition, et $(E_{4}; +)$ n'est pas un [[espace vectoriel|ev]]

> [!info] meilleure démonstration
> 
> $z(x^{2}+y^{2}) = 0 \iff \left\{ \begin{gathered} z=0\\\text{ou}\\x=y=0 \end{gathered} \right.$
> donc :
> $E_{4} = \big\{ (x;y;0), (0; 0; z) \big| (x;y;z) \in \mathbb{R}^{3} \big\}$
> 
> Or, $(1; 1; 0) \in E_{4}$ et $(0; 0; 1) \in E_{4}$
> mais $(1;1;0)+(0;0;1) = (1;1;1) \notin E_{4}$
> 
> $E_{4}$ n'est pas stable par addition, ce n'est donc pas un [[sous espace vectoriel|sev]]  

> [!note] méthode
> Quand la propriété est simple, pour montrer qu'un ensemble est un [[espace vectoriel|ev]], il est préférable de trouver un contre-exemple.
> Un moyen peut être d'écrire l'ensemble de façon plus explicite (comme dans la démonstration plus haut).

# Montrer que $\mathbb{R}^{2}$ muni de ces lois est un ev

$(\mathbb{R}^{2},+, \cdot)$ avec :
 - $(a;b)+(c;d) = (a+c;b+d)$
 - $\lambda(a;b) = (\lambda a; \lambda b)$
$$\begin{align*} \lambda \big( (a;b) + (c;d)\big) &= \lambda(a+c; b+d)\\&= \big(\lambda(a+c); \lambda(b+d)\big) \\&= (\lambda a+\lambda c; \lambda b + \lambda d) \\&= (\lambda a; \lambda b) + (\lambda c; \lambda d) \\&= \lambda(a; b) + \lambda(c;d) \end{align*}$$

> [!attention]
> dans ce cas (et dans les suivants), il faut préciser que $(\mathbb{R}^{2}, +)$ forme un [[groupe abélien]]
> car on a montré seulement la [[distributivité]] de $\cdot$ par rapport à $+$

---

$(\mathbb{R}^{2},+,\cdot)$ avec :
 - $(a; b) + (c; d) = (a+c; b+d)$
 - $\lambda(a;b) = (\lambda^{2}a; \lambda^{2}b)$

$$\begin{align*}
\lambda \big( (a;b)+(c;d) \big) &= \lambda (a+c; b+d)\\
&= \big( \lambda^{2}(a+c); \lambda^{2}(b+d) \big)\\
&= (\lambda^{2} a+\lambda^{2} c; \lambda^{2} b+ \lambda^{2} d)\\
&= (\lambda^{2} a; \lambda^{2} b) + (\lambda^{2} c; \lambda^{2} d)\\
&= \lambda(a;b) + \lambda(c;d)
\end{align*}$$
> [!attention]
> Ici aussi il faut aussi montrer que $(\mathbb{R}^{2}, +)$ est un [[groupe abélien]]


Donc $(\mathbb{R}^{2}, +, \cdot)$ est bien un [[espace vectoriel|ev]]

> [!note]
> 
> 
> On remarque que :
> $-1 \cdot (a;b) = (a,b)$
> Donc :
> $(a,b) + (a;b) = 0$
> Donc $(a;b = 0)$
> 
> Cet [[espace vectoriel|ev]] est en fait l'[[espace vectoriel nul]]

---

$(\mathbb{R}^{2}, +)$ avec :
 - $(a; b)+(c;d) = (c;d)$
 - $\lambda(a;b) = (\lambda a; \lambda b)$


$\lambda \big((a;b)+(c;d)\big)$
$= \lambda(c;d)$
$= (\lambda c; \lambda d)$
$= (\lambda a; \lambda b) + (\lambda c; \lambda d)$
$= \lambda(a;b) + \lambda(c;d)$


Donc $+$ est bien un [[espace vectoriel|ev]] avec $\mathbb{R}^{2}$

> [!info] meilleure démonstration
> $(a;b) + (c;d) = (c;d)$
> donc :
> $(a;b) = (c;d) - (c;d) = (0; 0)$
> 
> Cet [[espace vectoriel|ev]] est donc l'[[espace vectoriel nul]]

