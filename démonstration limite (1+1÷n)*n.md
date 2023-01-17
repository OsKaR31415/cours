---
alias: [ "démonstration lim (1 + 1/n)ⁿ = e" ]
---
up:: [[fonction exponentielle]]
title:: "$\displaystyle \lim\limits_{ n \to +\infty } \left( 1 + \frac{1}{n} \right)^{n} = e$"
#maths/analyse 

---

$$ \begin{align}
\lim\limits_{ n \to +\infty } \left( 1+\frac{1}{n} \right) ^{n} &= \lim\limits_{ n \to +oo } e^{ n \ln \left( 1+\frac{1}{n} \right)  } \\
&= \lim\limits_{ n \to +\infty } e^{ n \times \frac{1}{n} } && \text{par équivalence : } \ln\left( 1+\tfrac{1}{n} \right) \sim \tfrac{1}{n} \\
&&& \text{(développement limité)} \\
&= e
\end{align} $$

En général, on a même : $\displaystyle \lim\limits_{ n \to +\infty } \left( 1+\frac{x}{n} \right)^{n} = e^{ x }$ :

$$ \begin{align}
\lim\limits_{ n \to +\infty } \left( 1+\frac{x}{n} \right) ^{n} &= \lim\limits_{ n \to +oo } e^{ n \ln \left( 1+\frac{x}{n} \right)  } \\
&= \lim\limits_{ n \to +\infty } e^{ n \times \frac{x}{n} } && \text{par équivalence : } \ln\left( 1+\tfrac{x}{n} \right) \sim \tfrac{x}{n} \\
&&& \text{(développement limité)} \\
&= e^{x}
\end{align} $$

