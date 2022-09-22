---
sr-due: 2022-09-29
sr-interval: 39
sr-ease: 278
alias: "morphismes"
---
up::[[structure algébrique]]
#maths/algèbre #review 
# morphisme

Soient $(E, *)$ et $(R,\bot)$ deux ensembles, munis chacun d'une [[loi de composition interne]].
Une application
$\begin{aligned}f: &(E,*)\mapsto (F,\bot)\\ &x\mapsto f(x)\end{aligned}$
est un morphisme de $(E,*)$ vers $(F,\bot)$ ssi :
$\forall (x,y)\in E^2, f(x*y) = f(x)\bot f(y)$
## Exemple
$$\begin{aligned}
\ln :& (\mathbb R, +) \mapsto (\mathbb R, \times)\\
&x\mapsto \ln(x)
\end{aligned}$$
Ici, on voit que $\ln$ "transforme" la loi $+$ en loi $\times$

