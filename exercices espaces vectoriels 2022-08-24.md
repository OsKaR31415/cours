date::2022-08-24
#exercice #maths/algèbre 
# exercices espaces vectoriels 2022-08-24

## [[sous espace vectoriel|sev]] de $\R$ munis de $\times$
On munit $\R^{n}$ des lois produit usuelles. Parmi les sous-ensembles suivants $F$ de $\R^{n}$, lesquels sont des [[sous espace vectoriel|sev]] ?

### 1) $F = \{(x_{1},\ldots,x_{n})\in \R^{n} \mid x_{1} = 0\}$
$F \neq \emptyset$ car $F$ contient le vecteur nul.

Soient $u = (x_{1},\ldots,x_{n}) \in F$ et $u' = (x'_{1},\ldots,x'_{n}) \in F$
$x_{1} = 0$ et $x'_{1} = 0$
Donc : $u \times u' = (x_{1}\times x'_{1},\ldots,x_{n}\times x'_{n})$
Or, on sait que $x_{1} \times x'_{1} = 0$
Donc $u \times u' \in F$

$\square$

### 2) $F = \{(x_{1},\ldots,x_{n}) \in \R^{n} \mid x_{1} = 1\}$
$F \neq \emptyset$ car $F$ contient le vecteur unité.

Soient $u \in F$ et $u' \in F$ avec $u=(x_{1},\ldots,x_{n})$ et $u'=(x_{1},\ldots, x_{n})$
$u \times u' = (x_{1} \times x'_{1}, \ldots, x_{n} \times x'_{n})$
Or, $x_{1} = x'_{1} = 1$ donc $x_{1} \times x'_{1} = 1$
Donc $u \times u' \in F$
$F$ est un [[sous espace vectoriel|sev]] de $(\R^{n}, \times)$
$\square$

### 3) $F = \{(x_{1},\ldots,x_{n}) \in \R^{n} \mid x_{1} = x_{2}\}$
$F \neq \emptyset$ car $F$ contient le vecteur nul.

Soient $u \in F$ et $u' \in F$ avec $u=(x_{1},\ldots,x_{n})$ et $u'=(x_{1},\ldots, x_{n})$
$u \times u' = (x_{1} \times x'_{1}, \ldots, x_{n} \times x'_{n})$
Puisque $x_{1}=x_{2}$ et $x'_{1} = x'_{2}$, alors $x_{1} \times x'_{1} = x_{2} \times x'_{2}$
Donc $u \times u' \in F$
$F$ est un [[sous espace vectoriel|sev]] de $(\R^{n}, \times)$
$\square$

### 4) $F = \{(x_{1},\ldots,x_{n}) \in \R^{n} \mid x_{1}+\cdots + x_{n} = 0\}$
$F \neq \emptyset$ car $F$ contient le vecteur nul.

Soient $u \in F$ et $u' \in F$ avec $u=(x_{1},\ldots,x_{n})$ et $u'=(x_{1},\ldots, x_{n})$
$u \times u' = (x_{1} \times x'_{1}, \ldots, x_{n} \times x'_{n})$
Or, $x_{1}+\cdots+x_{n} = 0$ et $x'_{1}+\cdots +x'_{n} = 0$ n'implique pas que $x_{1}\times x'_{1}+\cdots+x_{n}\times x'_{n} = 0$
**Contre-exemple :**
 - $-1 + (-2) + 3 = 0$
 - $5 + (-2) + (-3) = 0$
 - pourtant $(-5) + 4 + (-9) \neq 0$

 Donc, $F$ n'est pas toujours un [[sous espace vectoriel|sev]] de $(\R^{n}, \times)$

### 5) $F = \{(x_{1},\ldots,x_{n}) \in \R^{n} \mid x_{1} \times x_{2} = 0\}$
$F \neq \emptyset$ car $F$ contient le vecteur nul.

Soient $u \in F$ et $u' \in F$ tels que $u = (x_{1},\ldots,x_{n})$ et $u' = (x'_{1},\ldots, x'_{n})$
$u \times u' = (x_{1}\times x'_{1}, x_{2}\times x'_{2}, \ldots, x_{n} \times x'_{n})$
On sait que $x_{1} \times x_{2} = 0$ et $x'_{1}\times x'_{2} = 0$
**On suppose que $x_{1} \times x'_{1} \neq 0$**
 - c'est possible si $x_{1} \neq 0$ et $x'_{1} \neq 0$
 - alors $x_{2} = 0$ et $x'_{2} = 0$
 - Donc $(x_{1}\times x'_{1}) \times (x_{2}\times x'_{2}) = 0$ et $u \times u' \in F$
**On suppose que $x_{2}\times x'_{2} \neq 0$
 - même raisonnement que dans le cas précédent
**On suppose que $x_{1}\times x'_{1} = 0$ et $x_{2}\times x'_{2} = 0$**
 - alors on à bien $u \times u'\in F$
**On suppose que $x_{1}\times x'_{1} \neq 0$ et $x_{2} \times x'_{2} \neq 0$**
 - impossible car dans ce cas, on ne peu pas avoir $x_{1} \times x_{2} = 0$
On à bien tous les cas, donc pour tout $(u, u') \in F^{2}$, on à bien $u \times u' \in F$
$(F, \times)$ est donc bien un [[sous espace vectoriel|sev]] de $(\R^{n}, \times)$



## Exercice 975
Soit $F$ le [[sous espace vectoriel|sev]] de $\R^{4}$ engendré par $u = (1,2,-5,3)$ et $v = (2,-1,4,7)$. Déterminer $\lambda$ et $\mu$ réels tels que $(\lambda, \mu, -37, -3) \in F$

Pour appartenir à $F$, un vecteur doit être une combinaison linéaire de $u$ et $v$, c'est-à-dire s'écrire comme :
$\alpha u + \beta v$

Donc, on doit avoir $-5 \alpha + 4 \beta = -37$ et $3 \alpha + 7 \beta = -3$
On utilise la méthode de résulution par déterminant (voir [[système linéaire à deux inconnues]])
$$\begin{align*}
\left\{ \begin{gathered}
-5 \alpha + 4 \beta = -37\\
3 \alpha + 7 \beta = -3
\end{gathered} \right. &\iff 
\left\{ \begin{gathered}
\alpha = \frac{1}{\small\begin{vmatrix}-5&4\\3&7\end{vmatrix}} \begin{vmatrix} -37&4\\-3&7 \end{vmatrix}\\
\beta = \frac{1}{\small\begin{vmatrix}-5&4\\3&7\end{vmatrix}} \begin{vmatrix} -5&-37\\3&-3 \end{vmatrix}
\end{gathered} \right.\\
&\iff \left\{ \begin{gathered}
\alpha = \frac{247}{47}\\
\beta = - \frac{126}{47}
\end{gathered} \right.
\end{align*}$$
Alors, on sait que $\lambda = \alpha + 2\beta = - \frac{5}{47}$ et que $\mu = 2\alpha - \beta = \frac{368}{47}$
Donc :
$\left\{ \begin{gathered} \lambda = - \frac{5}{47} \\ \text{et} \\ \mu = \frac{368}{47} \end{gathered} \right.$

## Exercice 976
Montrer que $a = (1, 2, 3)$ et $b = (2,-1,1)$ engendrent le même [[sous espace vectoriel|sev]] de $\R^{3}$ que $c=(1,0,1)$ et $d=(0,1,1)$

$(c; d)$ est une [[famille de vecteurs libre]] car $c$ et $d$ ne sont pas [[vecteurs colinéaires|colinéaires]], leur [[sous espace vectoriel|sev]] engendré est donc de [[dimension d'un espace vectoriel|dimension]] 2.
De même pour $(a;b)$.

Or, $a = c + 2d$ et $b = 2c - d$

Donc, puisque $(a;b)$ est [[famille de vecteurs libre|libre]] et engendre un [[sous espace vectoriel|sev]] de [[dimension d'un espace vectoriel|dimension]] 2, on peut dire qu'elle génère le même [[sous espace vectoriel|sev]] que $(c;d)$ car $(a;b)$ est contenue  dans le [[sous espace vectoriel|sev]] généré par $(c;d)$
 - $(a;b)$ est [[famille de vecteurs libre|libre]]
 - $a$ et $b$ ne sont pas [[vecteurs colinéaires|colinéaires]]
 - donc $(a;b)$ engendre un [[sous espace vectoriel|sev]] de [[dimension d'un espace vectoriel|dimension]] 2
 - $(a;b) \subset \text{Vect}(a;b)$

