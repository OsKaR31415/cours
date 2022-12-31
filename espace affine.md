up:: [[espace]]
title::
#maths/algèbre 

---

> [!definition] Espace affine
> On appelle _espace affine $\mathcal{E}$ associé à l'espace vectoriel $\vec{E}$_ un ensemble de points tel que :
>  - $\forall (A, B) \in \mathcal{E}^{2}, \quad \exists \vec{v} \in \vec{E}, \vec{v} = \overrightarrow{AB}$
>      - Pour tous points $(A, B) \in \mathcal{E}^{2}$ on peut trouver $\overrightarrow{AB} \in \vec{E}$
>      - chaque paire de points à son vecteur dans $\vec{E}$
>  - $\forall (A, B) \in \mathcal{E}, \quad \overrightarrow{AB} = - \overrightarrow{BA}$
>      - inverser les points oppose le vecteur
>  - $\forall (A, B, C) \in \mathcal{E}, \quad \overrightarrow{AC} = \overrightarrow{AB} + \overrightarrow{BC}$ ([[relation de chasles]])
>  - $\forall O\in \mathcal{E}, \quad \forall v \in \vec{E}, \quad \exists! A \in \mathcal{E}, \quad \overrightarrow{OA} = \vec{v}$
>      - Pour toute [[translation]] fixée, il existe une unique image de chaque point (la [[translation]] est une [[injection]])
>      - On déduit ensuite que la translation est une bijection par l'axiome $\overrightarrow{AB} = - \overrightarrow{BA}$
^definition

> [!definition] Repère d'un espace affine 
> Soit $\mathcal{E}$ un espace affine
> Soit $\vec{E}$ l'[[espace vectoriel]] associé à $\mathcal{E}$
> Un **repère** de $\mathcal{E}$ est constitué d'un point $O \in \mathcal{E}$ et d'une [[base d'un espace vectoriel|base]] de $\vec{E}$
> > [!example] Exemple 
> > Soit l'espace affine $\mathbb{R}^{2}$ associé à l'[[espace vectoriel]] $\mathbb{R}^{2}$
> > On note $(O, \vec{i}, \vec{j})$ les repères de $\mathbb{R}^{2}$, où $O$ est un point, et $\left\{ \vec{i}; \vec{j} \right\}$ une [[base d'un espace vectoriel|base]] de $\mathbb{R}^{2}$
> > 



# Propriétés


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up, file.name
> ```

