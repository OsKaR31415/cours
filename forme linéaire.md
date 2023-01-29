up:: [[application linéaire]]
title:: "$f : E \to \mathbb{R}$, $E$ un [[espace vectoriel|ev]]"
#maths/algèbre 

---

> [!definition] Forme linéaire
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Une [[application linéaire]] $f$ est une application de $E \to \mathbf{K}$
^definition

> [!definition]- Donner la définition d'une forme linéaire
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]] de [[base d'un espace vectoriel|base]] $\mathcal{B} = (e_1, e_2, e_3, \dots, e_{n})$
> Pour définir une forme linéaire $\varphi$ de $E$, on peut donner une des équations suivantes :
>  - $\varphi(\lambda_1e_1 + \lambda_2e_2 + \lambda_3e_3 + \cdots + \lambda _{n}e_{n}) = \lambda_1\varphi(e_1) + \lambda_1\varphi(e_2) + \lambda_1\varphi(e_3) + \cdots + \lambda _{n}\varphi(e_{n}) = \sum\limits_{k=1}^{n} \Big( \lambda _{k}\varphi(e_{k}) \Big)$
>      - on doit donner les valeurs de tous les $\lambda _{k}\varphi(e_{k})$
>  - $\varphi(e_1+e_2+e_3+\cdots+e_{n}) = \varphi(e_1) + \varphi(e_2)+\varphi(e_3) + \cdots + \varphi(e_{n}) = \sum\limits_{k=1}^{n} \Big( \varphi(e_{k}) \Big)$
>      - on doit donner les valeurs de tous les $\varphi(e_{k})$
>  - $\begin{cases} \varphi(e_{1}) = \lambda_1\\ \varphi(e_2) = \lambda_2\\ \varphi(e_3)=\lambda_3 \\ \vdots\\ \varphi(e_{n}=\lambda _{n})\end{cases}$
>      - on doit doner les valeurs de tous les $\lambda _{k}$
>  - $[\varphi]_{\mathcal{B}} = \begin{pmatrix}\lambda_1 & \lambda_2 & \lambda_3 & \cdots & \lambda _{n}\end{pmatrix}$
>      - on donne directement la matrice de $\varphi$ dans $\mathcal{B}$

# Propriétés
Soit $f$ une forme linéaire de $E$

 - $\dim (\ker \varphi) = \dim E - 1$
     - Exemple: 
         - $\varphi(x, y, z) = 2x-y-z$
         - $\ker \varphi = \{ (x, y, z) \in \mathbb{R}^{3} \mid 2x - y - z = 0 \}$
         - donc $\ker \varphi$ est un [[plan vectoriel]]
     - évident par le [[théorème du rang]], car $\text{rg}(\varphi) = 1$
 - toute forme linéaire est [[surjection|surjective]]

 - $\ker \varphi = \ker \psi \iff \varphi = \lambda \psi \mid _{\lambda \in \mathbf{K}^{*}}$
     - 



> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```

