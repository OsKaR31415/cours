---
alias: [ "multiplicité", "ordre d'une racine", "ordre" ]
---
up::[[racines d'un polynôme]]
title:: "pour une racine $r$", "$n$ tel que $P^{(n-1)}(r) = 0$ et $P^{(n)}(r) \neq 0$"
#maths/analyse

----
> [!definition] ordre d'une racine d'un polynôme
> Soit $P$ un [[polynôme]]
> Soit $r$ une [[racines d'un polynôme|racine]] de $P$
> l'**ordre** de $r$ est le plus grand $n$ tel que $r$ est une racine de $P^{(n-1)}$ ([[dérivées successives|dérivée n-ème de P]])
> C'est aussi le plus petit $n$ tel que $P^{(n)}(r) \neq 0$
> Sous forme factorisée, c'est la puissance du terme qui s'annule en $r$
^definition

> [!definition]
> Soit $P$ un [[polynôme]] de [[polynôme#Degré|degré]] $n$
> On sait que $P(x) = \prod\limits_{k=0}^{n} (x - a_{k})$   (forme factorisée)
> Où $a_k$ une suite dont les valeurs sont les [[racines d'un polynôme|racines]] de $P$
> 
> Une racine $r$ est de **multiplicité** $m$ si elle apparaît *exactement* $m$ fois dans les coefficients $a_{k}$ (pour $k\in[\![1;n]\!]$)
> Soit si elle apparaît $m$ fois dans la factorisation de $P$

# Propriétés

## Racine simple
Une racine est simple ssi sa _multiplicité_ est 1

## Nombre de racines
**[[théorème de d'Alembert]]**
Si on compte une racine de multiplicité $m$ comme $m$ racines
Le nombre de racines est toujours **égal** au [[polynôme#Degré|degré]] d'un polynôme

## Dérivation
Soit $r$ une _racine_ du polynôme $P$
La racine $r$ est de [[multiplicité d'une racine|multiplicité]] $n$ si et seulement si $r$ est aussi racine de la [[dérivées successives|dérivée n-ème]] de $P$ :

$r \text{ est de multiplicité } n \iff P^{(n)}(r)=0$

On peut utiliser cette propriété pour **trouver la multiplicité d'une racine**
