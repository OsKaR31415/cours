
#flashcards #maths/analyse 

Formule de _Taylor-Young_ pour les **développements limités**
?
$$\text{DL}_n (x_0) f(x) = \sum_{k=0}^n\left( \dfrac{f^{(k)}(x_0)}{k!}(x-x_0)^k\right) + (x-x_0)^n\varepsilon(x)$$ 
avec $\displaystyle\lim_{x\rightarrow x_0} \varepsilon(x) = 0$
<!--SR:!2022-06-30,8,181-->


**Développement limité**
$\DL_n(0)(1+x)^\alpha = \ldots$
?
$1+\alpha x+\dfrac{\alpha(\alpha-1)x^2}{2!}+\cdots+\dfrac{\alpha(\alpha-1)\cdot(\alpha-n+1)x^n}{n!}+x^n\varepsilon(x)$
<!--SR:!2022-09-14,102,191-->

**Développement limité**
$\DL_n(0)\dfrac{1}{1-x} =\ldots$
?
$1+x+x^2+x^3+\cdots+x^n+x^n\varepsilon(x)$
<!--SR:!2022-07-02,7,151-->


**Développement limité**
$\DL_n(0)\dfrac{1}{1+x}=\ldots$
?
$\dfrac1{1+x} = 1-x+x^2+ \cdots +(-1)^nx^n + x^n\varepsilon(x)$
soit $(1+x)^\alpha$ avec $\alpha = -1$
<!--SR:!2022-07-05,10,170-->


**Développement limité**
$\DL_n(0)\ln(1+x) =\ldots$
?
$x-\dfrac{x^2}{2}+\dfrac{x^3}{3}+\cdots+(-1)^{n-1}\dfrac{x^n}{n}+x^n\varepsilon(x)$
Soit $\disp\sum_1^n\left( (-1)^{k-1}\dfrac{x^k}{k} \right) + x^n\varepsilon(x)$ Attention : commence à $k=1$ car $\ln(1+0) = 0$
<!--SR:!2022-06-29,1,130-->


**Développement limité**
$\DL_n(0)e^x = \ldots$
?
$1+\dfrac{x}{1!}+\dfrac{x^2}{2!}+\dfrac{x^3}{3!}+\cdots+\dfrac{x^n}{n!}+x^n\varepsilon(x)$
<!--SR:!2022-07-23,90,291-->


**Développement limité**
$\DL_{2n+1}(0)\cos x =\ldots$
?
$1-\dfrac{x^2}{2!}+\dfrac{x^4}{4!}+\cdots+(-1)^n\dfrac{x^{2n}}{(2n)!}+x^{2n+1}\varepsilon(x)$
Puissances **Paires** car $\cos$ est une [[fonction paire]].
Les parties régulières à l'ordre $2n$ et $2n+1$ sont les mêmes.
<!--SR:!2022-09-13,101,191-->


**Développement limité**
$\DL_n(0)\sin x =\ldots$
?
$x - \dfrac{x^3}{3!}+\dfrac{x^5}{5!}+\cdots+(-1)^n\dfrac{x^{2n+1}}{2n+1!}+x^{2n+2}\varepsilon(x)$
Puissances **Impaires** car $\sin$ est une [[fonction impaire]].
Les parties régulières à l'ordre $2n+1$ et $2n+2$ sont les mêmes.
<!--SR:!2022-08-23,80,151-->

