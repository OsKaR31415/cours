up::[[développement limité]]
#maths/analyse #review 
# développements limités usuels
Ici, on pose $\displaystyle\forall i\in\mathbb N, \lim_{x\rightarrow0}\varepsilon_i(x) = 0$

$(1+x)^\alpha = 1+\alpha x + \dfrac{\alpha(\alpha - 1)x^2}{2!} + \cdots + \dfrac{\alpha(\alpha -1)\cdots (\alpha-n+1)x^n}{n!} + x^n\varepsilon_1(x)$, $\alpha\in\mathbb R$

$\dfrac1{1-x} = 1+x+x^2+x^3+ \cdots +x^n+x^n\varepsilon_2(x)$

$\dfrac1{1+x} = 1-x+x^2+ \cdots +(-1)^nx^n + x^n\varepsilon_3(x)$ soit $(1+x)^\alpha$ avec $\alpha = -1$

$\ln(1+x) = x-\dfrac{x^2}2+\dfrac{x^3}3+\cdots+(-1)^{n-1}\dfrac{x^n}n+x^n\varepsilon_4(x)$ penser que $\disp\left(x\mapsto\ln(1+x)\right)' = \left(x\mapsto \dfrac1{1+x}\right)$

$e^x = 1+\dfrac{x}{1!}+\dfrac{x^2}{2!}+\dfrac{x^3}{3!}+\cdots+\dfrac{x^n}{n!} + x^n\varepsilon_5(x)$

$\cos x = 1-\dfrac{x^2}{2!}+\dfrac{x^4}{4!}+\cdots+(-1)^n\dfrac{x^{2n}}{(2n)!}+x^{2n+1}\varepsilon_6(x)$

$\sin x = x-\dfrac{x^3}{3!}+\dfrac{x^5}{5!}+\cdots+(-1)^n\dfrac{x^{2n+1}}{(2n+1)!}+x^{2n+2}\varepsilon_7(x)$
