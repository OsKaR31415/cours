up::[[algèbre relationelle]]
#informatique 

---
c'est une [[approche non nomée]] : les attributs sont différenciés par leur position (index) et pas par leur nom.


| initiale | opération         | symbole  |
|----:|:---:| -------- |
| S        | Sélection         | $\sigma$ |
| P        | Projection        | $\pi$    |
| C        | produit Cartésien | $\times$ |

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```


# Syntaxe des requêtes 
Pour une base de données de schéma $D$, une requête SPC $q$ est :
 - $R$, si $R\in D$, $\text{arité}(q) = \text{arité}(R)$
 - $\{ (a) \}$ si $a \in \mathbf{dom}$, $\text{arité}(q) = 1$
 - $\sigma_{\varphi}(q')$ si $q'$ est une requête, $\text{arité}(q) = \text{arité}(q')$
 - 

## Certaines reqêtes ne sont pas satisfiables
Exemple :
$\sigma_{1=a} \left( \sigma_{1=b} (I) \right)$ avec $\text{arité}(I) \geq 1$ et $a \neq b$

# Exemples
comment construire les tuples r2sultats de la requête "lister les films résalisés par des américains"
 1. **Sélection** des tupes de _réalisateurs_ correspondant à des réalisateurs américains
     - $I_{1} := \sigma_{2=''\text{américaine}''}(\text{réalisateurs})$
     - $I_{1} = \{ (\text{lucas}, \text{américaine}), (\text{lynch}, \text{américaine}), \dots \}$
 2. combinaison par **produit cartésien** de ces tupes avec ceux de _films_
     - $I_{2} = I_{1}\times \text{films} = \sigma_{2=\text{''américaine''}}(\text{réalisateurs}) \times \text{films}$
     - $I_{2} = \{ (\text{lucas}, \text{américaine}, dune), (\text{lucas}, \text{américaine}, \text{starwars}), \dots \}$
 3. restriction aux tupes où les positions correspondant aux réalisateurs ont les mêmes valeurs
     - $I_{3} = \sigma_{1=4}\left( \sigma_{2=\text{''américaine''}}(\text{réalisateurs}) \times \text{films} \right)$
 4. récupération des titres des films (**Projection**)
     - $I_{4} = \pi_{3}\left( \sigma_{1=4}\{ \sigma_{2=\text{''américaine''}}(\text{réalisateurs}) \times \text{films} \} \right)$


En quelle année est sorti "nikita" ?
 - $\pi_{3}( \sigma_{1=\text{"nikita"}}(\text{films}))$

quelle est la nationalité du réalisateur de "locataires"
 - $\pi_{5}(\sigma_{2=4}(\sigma_{1=\text{"locataires"}}(\text{films})\times \text{réalisateurs}))$

