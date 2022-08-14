up::[[MOC analyse]]
#maths/analyse #review
# constante d'Euler-Mascheroni
Notée $\gamma$

## Définitions

 - $\gamma = \lim\limits_{ n \to \infty }(H_{n} - \ln(n))$
     - où $H_n$ est la [[série harmonique]]
 - $\gamma = \int\limits_{1}^{+\infty} \frac{1}{\lfloor x \rfloor} - \frac{1}{x} \d x$
     - où $\lfloor x \rfloor$ est la [[partie entière]] de $x$
     - Donc, $\gamma$ est l'aire en bleu :
```desmos-graph
    top=2;
left=1;
    bottom=-0.5;
---
y < 1/\floor(x) | y > 1/x
```


