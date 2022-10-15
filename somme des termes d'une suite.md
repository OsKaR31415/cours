up::[[MOC dénombrement]]
#maths/dénombrement #maths/arithmétique #no-review 

----
Soit $u$ une [[suite]]

## Suite Arithmétique
Soit $u$ une suite arithmétique
### Somme des premiers termes
La somme des $n$ premiers termes de $u$ est :
$$\sum\limits_{k=0}^{n} u_{k}
= u_{0}+u_{1}+\cdots +u_{n}
= \frac{(n+1)(u_{0}+u_{n})}{2}$$
### Somme des termes
La somme des termes de $n_{0}$ à $n_{1}$ est :
$$\begin{align*}
u_{n_{0}}+u_{n_{0}+1}+\cdots +u_{n_{1}}
&= \sum\limits_{k=n_{0}}^{n}u_{k}\\
&= \frac{(n_{1}-n_{0})(u_{n_{0}}+u_{n_{1}})}{2}\\
&= \boxed{\frac{(\text{nombre de termes})(\text{premier terme } + \text{ dernier terme})}{2}}\\
\end{align*}$$
## Suite géométrique
Soit $u$ une suite géométrique de raison $q$

### Somme des premiers termes
$\sum\limits_{k=0}^{n}u_{k} = \left\{ \begin{gathered} u_{0} \frac{1-q^{n+1}}{1-q} \text{ si } q\neq 1\\ (n+1)u_{0} \text{ si } q=1 \end{gathered} \right.$

### Somme des termes
Somme termes de $n_{0}$ à $n_{1}$ :
$\sum\limits_{k=n_{0}}^{n_{1}}u_{k} = \left\{ \begin{gathered} \text{premier terme} \times \frac{(1-q^{\text{nombre de termes}})}{1-q} \text{ si } q\neq 1\\ (\text{nombre de termes } \times \text{premier terme}) \text{ si } q=1 \end{gathered} \right.$

