---
sr-due: 2022-11-11
sr-interval: 97
sr-ease: 267
alias: "ev"
---
up::[[structure algébrique]]
#maths/algèbre #review 
# espace vectoriel

Un _espace vectoriel_ est un ensemble $E$ muni de deux opérations :
 - une [[loi de composition interne]] notée $+$
 - une [[loi de composition]] **externe** notée $\cdot$

Soit $K$ un [[corps]]

Ces deux opérations vérifient :
 - $(E, +)$ est un [[groupe abélien]] dont l'[[élément neutre]] est le vecteur nul $0_E$
 - $(E, \cdot)$ est un [[monoïde]] (à gauche) dont l'[[élément neutre]] est $1$
     - $\disp \forall\overrightarrow{u}\in E, \forall(\lambda, \mu) \in K^{2}, \left\{\begin{array}{l}(1\cdot \overrightarrow{u}=\overrightarrow{u})\\\text{et}\\(\lambda\cdot(\mu\cdot u)=(\lambda\mu)\cdot u))\end{array}\right.$
 - Liens entre $+$ et $\cdot$ :
     - [[distributivité]] de $\cdot$ par rapport à $+$ sur $E$ : $\forall\lambda\in K, \forall(\vec v, \vec u)\in E^{2},\quad\lambda\cdot(\vec u+\vec v) = \lambda\cdot\vec u + \lambda\cdot\vec v$ 
     - [[distributivité]] de $\cdot$ par rapport à $+$ sur $\mathbb R$ : $\forall(\lambda,\mu)\in K, \quad \forall\vec u\in E, (\lambda + \mu)\cdot\vec u = \lambda\cdot\vec u + \mu\cdot\vec u$

## Vocabulaire
On dit que $(E, +, \cdot)$ est l'espace vectoriel $E$ muni de $+$ et de $\cdot$ (la multiplication externe)

> [!definition] Espace vectoriel sur un corps
> Quand les valeurs de la multiplication sont les éléments d'un corps $K$, on dit que l'espace vectoriel est **sur $K$**

> [!definition] Éléments
> Les éléments de $E$ sont appelés les **[[vecteur]]**
> Les éléments de $K$ sont appelés les **scalaires**

## Exemples d'espaces vectoriels
 - Les espaces $\mathbb R$, $\mathbb R^2$, $\mathbb R^3$, ... $\mathbb R^n$ sont des espaces vectoriels (avec l'addition et la multiplication, et sur le corps $\R$)
 - L'ensemble des [[polynôme|polynômes]] (sur $\R$ ou $\C$)
 - L'ensemble des [[fonction dérivable|fonctions dérivables]] (sur $\R$ ou $\C$)


## Propriétés

 - L'intersection de deux [[sous espace vectoriel|sous-espaces vectoriels]] ([[sous espace vectoriel|sous-espaces]] d'un même espace vectoriel) est **toujours un [[espace vectoriel]]**
 - Le [[produit cartésien]] de deux [[espace vectoriel|espaces vectoriels]] est toujours un [[espace vectoriel]]
 - 

