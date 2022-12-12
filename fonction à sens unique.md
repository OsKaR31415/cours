up:: [[cryptologie]] 
title:: "à partir de $x$, facile de calculer $f(x)$", "à partir de $y$, difficile de trouver $x$ tel que $y = f(x)$"
#informatique 

---

> [!definition] Fonction à sens unique
> $f$ qui ) toute suite finie de $0$ ou $1$ en associe une autre est à sens unique ssi :
>  - calculer $f(x)$ à partir de $x$ est faisable en temps polynomial
>  - à chaque fois qu'on essaie un algorithme $F$ polynomial, utilisant des tirages aléatoires, et à chaque fois qu'on se donne un entier $k$, alors la probabilité pour $x$ d'être trouvé en $k$
> 
^definition


# Propriétés

 - s'il existe une fonction à sens unique, alors la conjecture $P \neq NP$ est vraie
     - mais $P \neq NP$ n'implique pas l'existence d'une fonction à sens unique
 - on ne sait pas s'il existe des fonctions à sens unique


> [!definition] Théorème 
> Il existe des fonctions à sens unique ssi 
> pour toute fonction $t(n)$ telle que $t(n) \geq cn$ avec $c > 1$ :
> $K^{t}(Ob)$
> où $K^{t}(Ob)$ est la complexité de kolmogorov en ressources bornées par $t$
>  ---
>   - considéré comme un progrès important, car il semble effectivement que $K^{t}(Ob)$ est compliquée à calculer



## Fonctions présumées à sens unique

> [!query] sous-notes directes de `=this.file.link`
> ```dataview
> LIST title
> FROM ""
> WHERE econtains(up, this.file.link)
> ```

