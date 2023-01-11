---
alias: [ "multiplicité" ]
---
up::[[racine]]
#maths/analyse

----

# Définition 
Soit $P$ un [[polynôme]] de [[polynôme#Degré|degré]] $n$
On sait que $P(x) = \prod\limits_{k=0}^{n} (x - a_{k})$   (forme factorisée)
Où $a_k$ une suite dont les valeurs sont les [[racines d'un polynôme|racines]] de $P$

Une racine $r$ est de **multiplicité** $m$ si elle apparaît *exactement* $m$ fois dans les coefficients $a_{k}$ (pour $k\in[\![1;n]\!]$)
Soit si elle apparaît $m$ fois dans la factorisation de $P$

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
