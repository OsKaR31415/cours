---
alias: [ "intégrale de 1/(x²+a²)" ]
---
up:: [[intégration]]
title:: "$\displaystyle \int \frac{1}{x^{2}+a^{2}} \, dx = \frac{1}{a}\arctan\left( \frac{x}{a} \right)$"
#maths/analyse 

---



# Généralisation

## composée avec une fonction quelconque

$\big(  \arctan(u) \big)' = u' \arctan'(u) = \frac{u'}{1+u^{2}}$ 
donc :
$\boxed{\displaystyle\int \frac{u'}{1+u^{2}} \, dx = \arctan(u)}$

## facteur devant le $x$

Plus généralement, on obtient
$\displaystyle \int \frac{1}{(kx)^{2} + a^{2}} \, dx = \frac{1}{ka} \arctan\left( \frac{xk}{a} \right)$

> [!definition] démonstration 
> $\displaystyle\int \frac{1}{a^{2}+(kx)^{2}} \, dx = \frac{1}{k^{2}}\int \frac{1}{ \frac{a^{2}}{k^{2}} +x^{2}} \, dx = \frac{1}{k^{2}}\times \frac{k}{a} \arctan\left( \frac{xk}{a} \right) = \boxed{\frac{1}{ka} \arctan\left( \frac{xk}{a} \right)}$

> [!example] Exemple
> $\displaystyle \int \frac{1}{1+2x^{2}} \, dx = \frac{1}{\sqrt{ 2 }} \arctan\left( \frac{x}{\sqrt{ 2 }} \right)$

