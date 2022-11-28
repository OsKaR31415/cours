---
alias: [ "intégrale généralisée", "intégrale impropre" ]
---
up::[[intégration]]
#maths

----
Soit $]a; b]$ (resp. $[a; b[$) un intervalle de $\overline{\mathbb{R}}$
On dit que $f$ est _intégrable sur $]a; b]$ (resp. $[a; b[$)_ si la limite :
$\displaystyle\lim\limits_{ \xi \to a }\int_{\xi}^{b}f(x) \, dx$


 
> [!smallquery] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC AND -#demonstration
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```

