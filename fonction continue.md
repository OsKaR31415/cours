---
sr-due: 2022-10-28
sr-interval: 83
sr-ease: 212
alias: "continue"
---
up::[[fonction]]
#maths/analyse #review 

----

> [!definition] Fonction continue
> Soit $I \subset \mathbb{R}$
> Soit $f: I \to R$
> Soit $a \in I$
>  - $f$ est _continue en $a$_ ssi :
>      - $\forall \varepsilon>0, \exists\eta > 0, \forall x\in I, (|x-a| < \eta \implies |f(x) - f(a)| < \epsilon)$
>  - $f$ est _continue sur $I$_ ssi :
>      - $\forall x \in I, \forall \varepsilon > 0, \exists \eta > 0, \forall y \in I, |x-y| \leq \eta \implies |f(x)-f(y)| \leq \varepsilon$

Autrement dit, $f$ est continue en $a$ si la [[limite]] de $f$ en $a$ existe

