---
alias: [ "échelonnée" ]
---
up::[[famille de vecteurs]]
title:: "famille qui forme une matrice triangulaire", "[[famille de vecteurs échelonnée|échelonnée]] $\implies$[[famille de vecteurs libre|libre]]"
#maths/algèbre 

----

> [!definition] famille de vecteurs échelonnée
> Soient $v_1,\ldots,v_k$ des vecteurs de $\mathbb{R}^n$ avec $1\leq k \leq n$. On dit que la famille $\{v_1,\ldots,v_k\}$ est _échelonnée_ ssi :
>  - la **première coordonnée** de $v_1$ est non nulle et les autres sont nulles
>  - les **deux premières coordonnées** de $v_2$ sont non nulles et les autres sont nulles
>  - $\vdots$
>  - les **$k$ premières coordonnées** de $v_k$ sont non nulles et les autres sont nulles
> 
> C'est-à-dire ssi : $\forall i,t\in[\![1;k]\!]^2, (t>i \iff v_i[t] = 0)$
> (où $v_i[t]$ est là $t^{\text{ème}}$ coordonnée de $v_i$)
^definition

# Exemples
La famille $\left\{ \begin{pmatrix} 1\\0\\0 \end{pmatrix}; \begin{pmatrix} 2\\-4\\0 \end{pmatrix}; \begin{pmatrix} 2\\6\\3 \end{pmatrix}\right\}$ est _échelonnée_ dans $\mathbb{R}^3$.

La famille $\left\{ \begin{pmatrix} 1\\2\\0\\0 \end{pmatrix} \begin{pmatrix} 1\\-4\\0\\4 \end{pmatrix} \begin{pmatrix} 1\\2\\3\\-1 \end{pmatrix} \right\}$ n'est **pas** _échelonnée_ $\mathbb{R}^4$.


# Propriétés
 - Toute famille _échelonnée_ dans $\mathbb{R}^n$ est [[famille de vecteurs libre|libre]]

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```

