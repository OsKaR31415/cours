---
alias: [ "critère d'Abel uniforme", "critère d'Abel uniforme pour les séries", "séries numériques critère d'Abel uniforme" ]
---
up:: [[convergence d'une série numérique]] 
#maths/analyse 

---

> [!definition] règle d'Abel uniforme
> Soit $(f_{n})$ une [[suite de fonctions]] d'un intervalle $I$
> On suppose $f_{n} = a_{n} \cdot v_{n}$
> Si :
>  - $a_{n}$ est une suite décroissante de fonctions positives sur $I$, qui [[suite de fonctions convergence uniforme|converge uniformément]] vers $0$
>  - $v_{n}$ a ses [[somme partielle d'une suite|sommes partielles]] bornées
>      - c.a.d. qu'elle vérrifie : $\exists A >0, \quad \forall n \geq 0, \quad \forall x \in I, \quad | v_0(x)+\cdots+v_{n}(x) | < A$
>
> Alors $(f_{n})$ est [[suite de fonctions convergence uniforme|uniformément convergente]]
^definition

> [!idea] Par rapport au critère d'Abel non uniforme
> Ce critère pour la convergence uniforme est comme le [[série de fonctions critère d'Abel|critère d'Abel non uniforme]], mais pour lequel la suite de fonctions qui tend vers $0$ doit [[suite de fonctions convergence uniforme|converger uniformément]]


