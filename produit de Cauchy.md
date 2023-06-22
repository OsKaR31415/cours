alias: [ "produit de séries entières" ]
---
up:: [[série entière]], [[produit de séries]]
title:: "$\left( \sum\limits_{i \geq 0}\left( a_{i}x^{i} \right) \right) \cdot \left( \sum\limits_{j \geq 0}(b_{j}x^{j}) \right) = \sum\limits_{i \geq 0} \left( \sum\limits_{j=0}^{i} \left( a_{j}b_{i-j} \right) \; x^{i} \right)$"
#maths/analyse 

---

> [!definition] produit de Cauchy
> Soient $\sum\limits_{i\geq 0} \left( a_{i}x^{i} \right)$ et $\sum\limits_{j \geq 0} \left( b_{j}x^{j} \right)$ deux [[série entière|séries entières]]
> On peut calculer le produit de ces deux séries :
> $\left( \sum\limits_{i\geq 0}\left( a_{i}x^{i} \right) \right) \cdot \left( \sum\limits_{j \geq 0} \left( b_{j} x^{j} \right) \right) = \sum\limits_{\substack{i \in \mathbb{N}\\j \in \mathbb{N}}} \left( a_{i}b_{j}x^{i+j} \right) = \boxed{\sum\limits_{i=0}^{+\infty } \left( \sum\limits_{j=0}^{i} \left( a_{j}b_{i-j} \right) \; x^{i} \right)}$
^definition
