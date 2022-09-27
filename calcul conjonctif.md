up::[[requête]]
#informatique 
# calcul conjonctif

 - $R(a, b, \dots)$
 - $\varphi \wedge \psi$ où $\varphi$ et $\psi$ sont des requêtes valides
 - $\exists y \varphi$ où $\varphi$ est une rête valide (et $y$ est une variable)
## Exemple

en [[langage à base de règles]] :
 - $\text{ans}(r) \leftarrow \text{film}(t, r, a), \text{réalisateur}(r, n)$
en [[calcul conjonctif]] :
 - $\{ r \mid \exists t, a, n \text{film}(t, r, a) \wedge \text{réalisateur}(r, n)\}$

## Sous-notes

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

