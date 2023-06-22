---
title: Chapitre I
subtitle: Suites de fonctions
---
#maths/analyse 

# 1.0 Cadre étudié

$I \subset R$ (le plus souvent, $I$ est un intervalle)
Une suite de fonctions $(f_{n}(\cdot))_{n}$ :
$$\forall n \in \mathbb{N} \;(\text{ou} \mathbb{N}^{*}, \text{ ou}\dots), \quad f_{n}: I \to \mathbb{R}$$
On visualise $(f_{n}(\cdot))_{n}$ comme une famille de courbes (graphes des fonctions $f_{n}(\cdot)$)
On veut décrire la convergence des courbes en question vers une "courbe limite", qui serait le graphe d'une fonction $f(\cdot)$.
 - [!] Diverses notions de convergence peuvent être utiles ici

> [!info] Remarque
> On regardera parfois le cas des fonctions complexes (à valeurs dans $\mathbb{C}$, mais aussi définies sur $I \subset \mathbb{C}$);
> Il y a peu de différences avec les cas réels au niveau des notions mises en jeu.

> [!tldr] Exercice
>  1. $f_{n} : x \mapsto \frac{x}{n}$ sur $\mathbb{R}$
>  2. $f_{n} : x \to x^{n}$ sur $[0; 1]$
> Dessiner les graphes de $f_1, f_2, f_3, f_4, f_5,\dots$ et conjecturer la fonction limite dans chaque cas.
> On pourra se représenter les courbes "en mode film".

# I.1 Convergence simple

 - C'est la notion "facile" : la seule nouveauté, comparé au semestre 3, c'est la présence d'un paramètre $x \in I$ dans les calculs des $\lim\limits_{ n \to \infty } a_{n}$ (on aura $\forall n, \quad a_{n} = f_{n}(x)$)
 - La seule difficulté sera la disjonction des cas : on devra parfois choisir des techniues différentes de calcul de limite $\lim\limits_{ n \to \infty }f_{n}(x)$ selon la valeur fixée $x$
 - Le mot dordre de CVS est :
     - $x$ est fixé, $n$ bouge

> [!definition] Définition : Convergence simple
> Soit $I \subset \mathbb{R}$ et $\forall n \in \mathbb{N}\; (\text{ou } \mathbb{N}^{*},\dots) \quad f_{n}(\cdot)$ une fonction de $I$ dans $\mathbb{R}$
> On dit que $f_{n} \to f$ **simplement sur $I$** si :
> Pour tout $x \in I$ fixé, la suite numérique $(f_{n}(x))_{n}$ a une limite, et cette limite vaut $f(x)$ 
> On résume ceci dans $\boxed{\forall x \in I\quad \lim\limits_{ n \to \infty }f_{n}(x) = f(x)}$

On désignera la convergence simple par le sigle "CVS".
On pourra dire "convergence ponctuelle" à la place de "simple".

 - On remarque que le terme défini n'est pas "CVS", mais "CVS sur $I$". De fait, la notion dépend (un peu) de l'intervalle $I$ choisi

> [!example] Exemple 
> $f_{n} : x \mapsto x^{n}$ est définie sur $\mathbb{R}$.
>  -  Si l'on regarde cette suite sur $I = [0; 1]$, il y a CVS vers la fonction limite $f: x \mapsto \begin{cases} 0, x \in [0, 1[\\ 1, x = 1 \end{cases}$
>  - Si l'on regarde cette suite sur $I = \left[0; \frac{1}{2} \right]$, il y a CVS vers la fonction limite nulle en tout point
>  - Si l'on regarde cette suite sur $I = \mathbb{R}$, il n'y a pas CVS puisque pour certains $x \in I$, la suite $(x^{n})_{n}$ diverge

## Reformulation technique de CVS
A fin de comprendre la notion de convergence uniforme (CVU) qui fera l'objet du chapitre suivant, on va déchiffrer la notion de CVS en termes de $\varepsilon$ (ce langage s'impose dès que l'on tombe sur des preuves délicates !)

> [!definition] CVS en termes de $\varepsilon$
> On dit que la suite $(f_{n}(\cdot))_{n}$ de fonctions définies sur $I$ **converge simplement** (ponctuellement) sur $I$ vers la fonction limite $f(\cdot)$ si :
> $\boxed{\forall x \in I, \quad \left[ \forall \varepsilon > 0, \quad \exists N = N_{\varepsilon, x} \quad \text{tq} \quad \forall n \geq N \quad |f_{n}(x) - f(x)| \leq \varepsilon \right]}$

Il est essentiel, dans cette définition, que **N est autorisé à dépendre de $x$** 
 - pour chaque $x$ fixé, $N_{\varepsilon, x}$ augmente lorsque $\varepsilon$ diminue. La façon qu'a $N_{\varepsilon,x}$ d'augmenter avec $\varepsilon \downarrow 0$ décrit la **vitesse de convergence** de la suite $f_{n}(x)$ vers la limite $f(x)$. Dans la notion de CVS, cette vitesse est donc autorisée à dépendre de $x$.

> [!example] Exemples
>  1. 
> 
> Pour $f_{n} : x \mapsto \frac{x}{n}$ sur $I = \mathbb{R}$, on calcule $\lim\limits_{ n \to +\infty } \frac{x}{n} = 0$ pour tout $x \in \mathbb{R}$.
> On trouve, pour $x \in \mathbb{R}$ et $\varepsilon > 0$, $N_{\varepsilon,x} = \frac{|x|}{\varepsilon}$.
> On voit que, si $\varepsilon = 10^{-2}$ :
>  - pour $x = 0$, $N = 0$ convient
>  - pour $x = 1$, $N = 100$ convient
> 
>  - pour $x = 1000$, $N = 1000000$ convient
> Lorsque x augmente, il faut dans cet exemple attendre plus longtemps pour la même précision d'approximation.
> 
>  2.
>  
> Pour $f_{n} : x \mapsto x^{n}$ sur $I = [0, 1]$, on calcule $\lim\limits_{ n \to \infty } f_{n}(x) = \begin{cases} 0 \text{ si } x \in [0, 1[\\ 1 \text{ si } x = 1 \end{cases}$
> On trouve, pour $x \in ]0, 1[$ et $\varepsilon > 0$ : $\displaystyle N_{\varepsilon,x} = \frac{\ln \frac{1}{\varepsilon}}{\ln \frac{1}{x}}$
> 
> $$\begin{align} \\ \\
> | f_{n}(x) - f(x) | \leq \varepsilon &\iff |x^{n} - 0| \leq \varepsilon\\ \\
> &\iff x^{n} \leq \varepsilon \iff n \ln x \leq \ln \varepsilon && \text{et, comme} 0 < x < 1 \\
> &\iff n \geq \frac{\ln 2}{\ln x} = \frac{-\ln \varepsilon}{- \ln x} = \frac{\ln \frac{1}{\varepsilon}}{\ln \frac{1}{x}} && \text{on a } \ln x < 0
> \end{align}$$
> On remarque qu'on a bien, à $x$ fixé, $N_{e,x}$ qui augmente lorsque $\varepsilon \searrow 0$
> De plus, la façon dont $N_{\varepsilon,x}$ augmente avec $\varepsilon \searrow 0$ dépend de la valeur de $x$ : 
> on a $N_{e, x} = \text{const}(x) \cdot \ln \frac{1}{\varepsilon}$ avec $\displaystyle \text{const}(x) = \frac{1}{\ln \frac{1}{x}} \begin{cases} \text{petite, si } x \approx 0\\ \text{grande si } x \approx 1 \end{cases}$
> 
> On remarquera que, pour $x=0$ et pour $x = 1$, $N_{\varepsilon,x} = 0$ convient : pour ces deux valeurs de $x$, on a la convergence instantannée de $f_{n}(x)$ vers sa limite $f(x)$ $\begin{pmatrix}f_{n}(0) = 0\\&\forall n \in \mathbb{N}: \text{2 suites stationnaires} \\f_{n}(1)=1\end{pmatrix}$
> 


> [!example] Exemples
>  1. $f_{n}(x) = \frac{x}{n}$ pour $I = \mathbb{R}$ :
>      - avec la valeur fixée du paramètre $x$, par exemple $x=2019$, on trouve $\lim\limits_{ n \to \infty }f_{n}(2019) = \lim\limits_{ n \to \infty } \frac{2019}{n} = \frac{2019}{+\infty} = 0$
>      - ce principe de calcul convient pour toute valeur de $x$ : $\lim\limits_{ n \to \infty }f_{n}(x) = \lim\limits_{ n \to \infty } \frac{x}{n} = \frac{x}{+\infty} = 0$
> Donc, $f_{n}(\cdot)$ converge vers la fonction nulle $f: x \mapsto 0$ simplement sur $\mathbb{R}$.
> 
>  2. $f_{n}(x) = x^{n}$ sur $I = [0, 1]$ :
>       - avec par exemple $x = \frac{2}{3}$, on trouve $\ln \frac{2}{3} = \left( \frac{2}{3} \right)^{n} \underset{n \to +\infty}{\longrightarrow} 0$ car $| \frac{2}{3} | < 1$ (la suite $q^{n}$ est un des exemples de Semestre 3 qui est de référence : il est à connaître par coeur)
> > [!info] Remarques
> >  - le même calcul s'applique pour chaque $x$ tel que $|x| < 1$; comme on a ici $x \in I = [0, 1]$, il s'applique à $x \in [0, 1[$ : pour tout $x \in [0,1[$ fixé, $f_{n}(x) = x^{n} \underset{\longrightarrow}{n \to +\infty}$.
> >  - le cas $x = 1$ est alors à traiter à part : on a $f_{n}(1) = 1^{n} = 1 \underset{n \to +\infty}{\longrightarrow} 1$.
> > 
> > La tentative de calcul de $\lim\limits_{ n \to \infty }f_{n}(x)$ fait apparaître la disjonction des cas : ici, $x \in [0, 1[$ et $x = 1$
> 
> Donc, $f_{n}(\cdot)$ CVS sur $[0, 1]$ vers $f: x \mapsto \begin{cases} 0, x \in [0, 1[\\ 1, x = 1\end{cases}$
> 
>  3. $\displaystyle f_{n}: x \mapsto \frac{n^{2}x -nx^{2}}{n^{2}x^{2} +x +n}$
> > [!info] Remarque
> > On voit facilement que $\forall n \geq 1, \quad n^{2}x^{2}+x+n > 0$ sur $\mathbb{R}$
> > donc $f_{n}(\cdot)$ est bien définie sur $\mathbb{R}$ quel que soit $n \geq 1$.
> 
>  - avec $x = 17$
>      - $f_{n}(17) = \frac{17n^{2}-17^{2}n}{17^{2}n^{2}+17+n} \underset{n \to +\infty}{\sim} \frac{17n^{2}}{17^{2}n^{2}} = \frac{1}{17}$ donc, $f_{n}(17) \underset{n \to +\infty}{\longrightarrow} \frac{1}{17}$
>  - le même principe de calcul s'appliquerait-il pour tout $x \in \mathbb{R}$ ? Il faut détailler le raisonnement d'équivalence :
> 
> $\displaystyle \underbrace{\frac{\boxed{n^{2}x} - nx^{2}}{\boxed{n^{2}x^{2}} + x +n}}_{\text{termes dominants encadrés}} = \frac{\cancel{n^{2}x}\left( 1 - \frac{nx^{2}}{n^{2}x} \right)}{\cancel{n^{2}}x^{\cancel2}\left( 1+ \frac{x}{n^{2}x^{2}} + \frac{n}{n^{2}x^{2}} \right)} = \frac{1}{x} \frac{1 - \frac{x}{n}}{1+\frac{1}{n^{2}} +\frac{1}{nx^{2}}} \underset{n \to +\infty}{\sim} \frac{1}{x}$
> 
> - [!]  A condition qu'on puisse diviser par $x$ dès le début du calcul !
> > Cette remarque nous amène à la disjonction des cas : $\begin{cases} x = 0\\x \neq 0 \end{cases}$
> 
>  - Pour $x \neq 0$, $f_{n}(x) \underset{n \to +\infty}{\longrightarrow} \frac{1}{x}$ d'après notre équivalence
>  - Pour $x = 0$, $f_{n}(x) = \frac{n^{2}\cdot 0 - n\cdot 0^{2}}{n^{2} \cdot 0^{2} + 0 + n} = \frac{0}{n} = 0 \underset{n \to +\infty}{\longrightarrow} 0$
>
> Conclusion : $f_{n}(\cdot)$ CVS sur $\mathbb{R}$ vers $f: x \mapsto \begin{cases} \frac{1}{x}, x \neq 0\\ 0, x = 0 \end{cases}$
> 
> > [!info] Remarque
> > Les cas à séparer apparaissent naturellement de la tentative de calcul, pour peu qu'on la fasse rigoureusement.
> 
>  4. $f_{n} : x \mapsto x(1-x)^{n}$ sur $I = [0, 1]$
> 
> La technique du calcul nous pousse à distinguer les cas $\begin{cases} |1-x| < 1 \text{ cad } x \in ]0,1] \\ |1-x|\geq 1 \text{ cad } x = 0\end{cases}$
> On trouve :
>  - $\forall x \in ]0,  1]$, $\lim\limits_{ n \to \infty }f_{n}(x) = \lim\limits_{ n \to \infty }x(1-x)^{n} = x \lim\limits_{ n \to \infty }(1-x)^{n} = x\cdot 0 = 0$
>  - $\lim\limits_{ n \to \infty } f_{n}(0) = \lim\limits_{ n \to \infty }0(1 - 0)^{n} = \lim\limits_{ n \to \infty }0 = 0$
> 
> Donc, $f_{n}(\cdot)$ CVS sur $[0, 1]$ vers la fonction identiquement nulle $f: x \mapsto 0$
> 
> 
>  5. $f_{n} : x \mapsto e^{ -nx^{2} }$ sur $I = \mathbb{R}$
> 
> On remarque que $-nx^{2} \underset{n \to +\infty}{\longrightarrow} - \infty$ **sauf pour $x = 0$**; d'où la disjonction des cas :
>  - $x = 0 \implies f_{n}(0) = e^{ -n\cdot 0^{2} } = e^{ 0 } = 1 \underset{n \to \infty}{\longrightarrow} 1$
>  - $x \neq 0 \implies f_{n}(x) = e^{ -nx^{2} } \underset{n \to \infty}{\longrightarrow} 0$
> 
> D'où la CVS de $f_{n}(\cdot)$ sur $\mathbb{R}$ vers la famille $f : x \mapsto \begin{cases} 1, x = 0\\ 0, x =\neq 0 \end{cases}$
> 
> > [!info] Remarques
> >  - On observe ici "une dégradation des propriétés de $f_{n}(\cdot)$" à la limite : la continuité des fonctions $f_{n}(\cdot)$ (évidentes) n'est pas hérités par la fonction limite $f(\cdot)$ (manifestement discontinue en $x = 0$)
> >  - On peut étudier la vitesse de convergence de $f_{n}(x)$ vers $f(x)$ selon la valeur de $x$. On trouvera que cette vitesse se dégrade lorsque $x$ s'approche de $0$.
> > 
> > **<u>Exercice</u> :** trouver $N_{\varepsilon,x}$ dans ce cas, et analyser son comportement
> > 
> > Ces deux remarques sont signes de **non-uniformité** de la convergence (affaire à suivre !)
>
>  6. $f_{n} : x \mapsto xe^{ -nx^{3} }$. 
> 
> On est amené à distinguer $x > 0$, $x = 0$ et $x < 0$.
> Considérée sur $I = \mathbb{R}$, la suite $(f_{n}(\cdot))n$ ne converge pas pour $x < 0$ (prendre $x = -13$ pour s'en convaincre) 
> 
> Considérée sur $I = \mathbb{R}^{+}$, la suite $(f_{n}(\cdot))_{n}$ converge vers $f$ itentiquement nulle (il convient de distinguer $x > 0$ et $x = 0$ dans le calcul)
> 
>  7. $\displaystyle f_{n} : x \mapsto \left( 1 - \frac{x}{n} \right)^{2nx}$ sur $I = ]-\infty, 1]$
> > [!info] Remarque  
> > $\forall x \in I, \forall n \geq 1, \quad 1 - \dfrac{x}{n} \geq 0$, ce qui donne un sens à la puissance non entière de $1 - \dfrac{x}{n}$
>  
> On arrive à calculer, sans disjonction de cas :
> $$\begin{align} \\
> \left( 1 - \frac{x}{n} \right) ^{2nx} &= \exp \left( 2nx \ln \left( 1 - \frac{x}{n} \right)  \right) \\
> &= \exp \left( 2nx \left( -\frac{x}{n} \right)  \right) 
> \end{align} $$







