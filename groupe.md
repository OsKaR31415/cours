#maths/algèbre #review 
# groupe

Un ensemble $G$ muni d'une [[loi de composition interne]] $*$ est un _groupe_ ssi :
- La loi est [[associativité|associative]]
- $G$ possède un [[élément neutre]]
- Tout élément de $G$ possède un [[éléments symétrisables|symétrique]] par $*$

## Ordre d'un groupe
L'_ordre d'un groupe_ est le [[cardinal]] de son ensemble **si celui-ci est fini**


## Propriétés

 - Un groupe n'est jamais vide
 - Les équivalences suivantes sont véfifiées :
     - $a*x = a*y \iff x=y$
     - $x*a = y*a \iff x = y$
     - $a*x=b \iff (a^{-1}*a)*x=a^{-1}*b \iff x=a^{-1}*b$
     - $x*a=b \iff x=b*a^{-1}$
 - L'itéré $n$-ème d'un élément s'écrie : $a^{*n}$ ou $a^n$
     - On pose $a^{*0}=e$
     - On note $(a^{-1})^{*n} = a^{-n}, (n\in\mathbb N)$
     - Alors: $(a^{-1})^{*n} = (a^{*n})^{-1}$

### Proposition
Soit $(G, *)$ un groupe, et $a\in G$.
Si il existe un entier naturel $n$ tel que $a^{*n} = e$, alors il existe un plus petit entier $n_0$ tel que $a^{*n_0} = e$.
On appelle alors $n_0$ _l'ordre de $a$_.
Si $n$ n'existe pas? on dit que $a$ est _d'ordre infini_.


## Exemples

