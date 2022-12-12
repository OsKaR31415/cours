up::[[MOC algorithmes]] 
title::
#informatique/algorithmie #maths/arithmétique 

---

# Formalisme mathématique

Soient $a$ et $n$ dans $\mathbb{N}\setminus \{ 0,1 \}$
On cherche à calculer $a^{n}$
Avec un algorithme naïf récursif, il faut faire $n$ multiplications pour faire ce calcul.
On montre que l'on peut faire le même calcul avec au plus $2p$ multiplications, où $p = \left\lfloor \dfrac{\ln n}{\ln 2} \right\rfloor$

> [!note] Démonstration de la méthode 
> Soit $(u_{k}) \in \{ 0, 1 \}^{\mathbb{N}}$ une suite de chiffres binaires
> Soit $\displaystyle n = \sum\limits_{k=0}^{n}n_{k}2^{k}$ le nombre dont les chiffres sont ceux de $(u_{k})$
> On a :
> $\displaystyle a^{n} = \prod\limits_{k \in J}a^{2^{k}}$
> où $J = \{ k \in [\![0; p]\!] \mid u_{k} = 1 \}$
> avec $\displaystyle p = 2 \left\lfloor \frac{\ln n}{\ln 2} \right\rfloor$
> En utilisant $a^{2^{k+1}} = \left( a^{2^{k}} \right)^{2}$, il y à $p$ élévations au carré pour calculer $a^{2^{k}}$ (pour $k \in [\![1; p]\!]$).
> Alors, au plus $p$ multiplications donnent $a^{n}$
> 
> Il reste à noter que $2^{p} \leq n < 2^{p+1}$ et donc $p \ln 2 \leq \ln n < (p+1) \ln 2$


