up::[[Orthonormaliser une famille de vecteurs]]
title:: "projeter chaque vecteur sur les vecteurs orthogonaux précédents"
#maths/algèbre 

---

> [!definition] Algorithme de gram schmidt
> Soit $E$ un $\mathbf{K}$-[[espace vectoriel]]
> Soit $S = \{ u_{1}; u_{2}; \cdots; u_{n} \}$ une [[famille de vecteurs]] de $E$ (avec $n < \dim E$)
> Pour [[Orthonormaliser une famille de vecteurs|orthonormaliser]] $S$, on créée une famille $S' = \{ w_{1}; w_{2}; \cdots; w_{n} \}$ de vecteurs [[Famille de vecteurs Orthogonale|orthogonale]] :
> Soit $\mathrm{proj}_{i}(v) = \dfrac{\langle v, i \rangle}{ \langle i, i \rangle } i$ le [[projeté orthogonal d'un vecteur|projeté]]
>  - $w_{1} = u_{1}$
>  - $w_{2} = u_{2} - \mathrm{proj}_{w_{1}}(u_{2})$
>  - $w_{3} = u_{3} - \mathrm{proj}_{w_{1}}(u_{3}) - \mathrm{proj}_{w_{2}}(u_{3})$
>  - $w_{4} = u_{4} - \mathrm{proj}_{w_{1}}(u_{4}) - \mathrm{proj}_{w_{2}}(u_{4}) - \mathrm{proj}_{w_{3}}(u_{4})$
>  - $\vdots$
>  - $u_{k} = w_{k} - \sum\limits_{i=1}^{k-1}\mathrm{proj}_{w_{i}}(u_{k})$
> On créée ensuite la [[Famille de vecteurs orthonormale|famille orthonormale]]  $O = \{ e_{1}; e_{2}; \cdots; e_{n} \}$ en linéarisant $S'$
>  - $e_{1} = \dfrac{1}{\|w_{1}\|}w_{1}$
>  - $e_{2} = \dfrac{1}{\|w_{2}\|}w_{2}$
>  - $\vdots$
>  - $e_{k} = \dfrac{1}{\|w_{k}\|}w_{k}$
> $O$ est donc la famille [[Orthonormaliser une famille de vecteurs|orthonormélisée]] à partir de $S$ 
^definition

