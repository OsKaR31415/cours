up:: [[suite de fonctions]] 
title::
#maths/analyse 

---

> [!definition] suite de fonctions convergente
> Soit $(f_{n})$ une suite de fonctions de $I \subset \mathbb{R} \to \mathbb{R}$
> On dit que $f$ **converge (simplement) vers $f$ sur $I$** ssi :
> $\boxed{\forall \varepsilon>0, \quad \forall x \in I, \quad \exists \eta _{x} \in \mathbb{N}, \quad \forall n \geq \eta _{x}, \quad |f_{\eta _{x}}(x) - f(x)| \leq \varepsilon}$
> ^definition


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up
> ```

