---
quickshare-date: 2023-04-05 13:47:36
quickshare-url: "https://noteshare.space/note/clg3mk7h9706501pjm41my9in#4ZjKaXyJjespwdodKgrSvFMCQpB/+5JvxI6eoIZFwRM"
---
up::[[intégration]]
#maths/analyse 

----


$\displaystyle \int u' \times v \, dx = u\times v - \int u \times v' \, dx$

Formule de l'intégration par parties :

$\displaystyle \int u'(x)\times v(x) \, dx = u(x)\times v(x) - \int u(x)v'(x) \, dx$

Ou, avec bornes : 

$\displaystyle \int _{\alpha}^{\beta} u'(x)\times v(x) \, dx = \left[ u(x)\times v(x) \right]_{\alpha}^{\beta} - \int _{\alpha}^{\beta} u(x)\times v'(x) \, dx$


# Démonstration
On part de la formule pour la dérivée d'un produit :

$(u \times v) ' = u' \cdot  v - u\cdot v'$

Si on intègre les deux côtés :

$\displaystyle u \times v = \int u'\cdot v \, dx + \int u\cdot v' \, dx \quad \iff \quad u \times v - \int u \cdot v' \, dx = \int u'\cdot v \, dx$

On obtient bien la formule de l'intégration par parties :

$\boxed{\int u' \times v \, dx = u\times v - \int u \times v' \, dx}$


