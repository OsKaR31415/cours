up:: sous [[sous-groupes de Z muni de +]] 
title:: "les sous groupes de $\mathbb{Z}$ sont les $m\mathbb{Z}$ où $m$ est le plus petit strictement positif du groupe"
#maths/algèbre 

---

On cherche à montrer une équivalence :
$G = n\mathbb{Z} \iff (G, +) \text{ est un sous groupe de } (\mathbb{Z}, +)$

# $G = n\mathbb{Z} \implies (G, +) \text{ est un sous groupe de } (\mathbb{Z}, +)$

Pour tout $n \in \mathbb{Z}$

$0 \in n\mathbb{Z}$, donc $n\mathbb{Z}$ contient l'élément neutre de $+$
 
Soient $(x, y) \in (n\mathbb{Z})^{2}$,
On sait que $n\mid x$ et $n\mid y$, donc $n\mid x+y$, et donc $x+y \in n\mathbb{Z}$
Alors, $n\mathbb{Z}$ est stable par addition

Soit $x \in n\mathbb{Z}$
Par définition, $n\mathbb{Z} = \{ nk \mid k \in \mathbb{Z} \}$
Donc, $\exists k \in \mathbb{Z}, nk = x$
Alors, $\exists k' \in \mathbb{Z}, nk' = -x$ avec $k' = -k$
Et donc, $-x \in n\mathbb{Z}$ car il s'exprime de la forme $nk'\mid k' \in \mathbb{Z}$

Donc, les $(n\mathbb{Z}, +)$ sont bien des [[sous groupe|sous groupes]] de $(\mathbb{Z}, +)$


# $(G, +) \text{ est un sous groupe de } (\mathbb{Z}, +) \implies G = n\mathbb{Z}$

Soit $G$ un [[sous groupe]] de $(\mathbb{Z}, +)$

Si $G = \{  0 \}$, alors $G = 0\mathbb{Z}$

Si $G$ n'est pas nul, alors il contient un élément $c \neq 0$, et donc contient $-c$.
Donc, $G$ contient au moins un élément strictement positif.

Soit $n$ le plus petit élément strictement positif de $G$ ($n = \max \left( \{ k \in G \mid k > 0 \} \right)$)
Pour tout $x \in G$
$\forall x \in G, \quad \exists (q, r) \in \mathbb{Z}^{2}, \quad x=qn + r$ avec $r \in [\![0, n-1]\!]$ (voir: [[division euclidienne]])
$n \in G$, et donc, par stabilité par $+$ :
$qn \in G$ et aussi $r = x - nq$ (car $x \in G$)
Donc, $r \in G$ et $0 \leq r < n-1$. Comme $n$ est le plus petit élément positif de $G$, on doit avoir $r = 0$
Donc, $x = nq$, donc tout élément de $G$ est multiple de $n$.
On a donc bien $\boxed{G = n\mathbb{Z}}$

# Conclusion

On a bien montré une implication dans les deux sens.
On peut conclure :

$$\large\boxed{G = n\mathbb{Z} \iff (G, +) \text{ est un sous groupe de } (\mathbb{Z}, +)}$$