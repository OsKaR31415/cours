---
alias: "suite extraite"
---
up::[[suite]]
#maths/analyse #no-review 

----
Soit $(u_{n})$ une suite
Une _sous suite_ de $(u_{n})$ (ou _suite extraite_) est une suite de la forme :
$\left( u_{\varphi(n)} \right)_{n \in \N}$ où $\varphi : \N \rightarrow \N$ est strictement croissante


## Propriétés
Soit $(u_{n})$ une suite
Soit $\left( u_{\varphi(n)} \right)_{n \in \N}$ une sous-suite de $(u_{n})$

 - $\lim\limits_{n \rightarrow \infty} u_{n} = l \implies \lim\limits_{n \rightarrow \infty} u_{\varphi(n)}$

 - $\lim\limits_{n \to \infty} u_{n} = l  \iff  \forall \varphi \in \N^{\N}, \lim\limits_{n \to \infty} u_{\varphi(n)} = l$
     - $(u_{n})$ converge vers $l$ ssi **toute** sous-suite de $(u_{n})$ converge vers $l$

