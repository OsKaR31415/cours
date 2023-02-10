up::[[LaTeX package polynom]]
title::"changer les paramètres avec `\polyset{option=value}`"
#informatique 

---

# Paramètres
On utilise la fonction `\polyset{...}` pour changer les paramètres

> [!info]- style d'affichage
> Il existe 3 styles pour la division : `A`, `B` et `C`
> ```latex
> \polyset{style=C}
> ```
> Pour le style `C` (qui affiche la division posée), on peut changer le **symbole utilisé** pour désigner la division :
> ```latex
> \polyset{style=C
>         div=÷}
> ```

> [!info]- expressions considérées comme des variables
> On peux préciser quels symboles sont des variables des polynômes :
> ```latex
> \polyset{vars=XYZ\xi}  % X, Y, Z et \xi sont des variables utiilisables
> \polylongdiv{\xi^2 + 2\xi - 3}{\xi + 2}
> \polylongdiv{Z^3 - 3Z}{Z - 1}
> ```

> [!info]- délimiteurs
> On peut changer les délimiteurs qui séparent les polynômes dans l'expression de la division.
> ```latex
> \polyset{delims={[}{]}}
> ```
> Pour les délimiteurs qui s'adaptent à la taille (`\left( ... \right)`), il faut utilser un argument par défaut :
> ```latex
> % voici la valeur par défaut de ce paramètre
> \polyset{delims=[{\left.}{\right.}]{\left(}{\right}}
> ```

