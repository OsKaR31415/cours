---
sr-due: 2022-09-12
sr-interval: 22
sr-ease: 277
alias: ["équivalente"]
---
up::[[fonction]]
sibling::[[fonction négligeable]], [[fonction dominée en un point|domination]]
title::"$f \sim_{x_{0}} g \iff \lim\limits_{x \to x_{0}} \dfrac{f(x)}{g(x)} = 1$"
#maths/analyse #no-review 

----

> [!definition] Fonctions équivalentes
> Soient deux [[fonction|fonctions]] $f$ et $g$, on dit qu'elles sont _équivalentes en $x_0\in\overline{\mathbb{R}}$_, et on note $f(x)\sim_{x_0}g(x)$ quand :
> $\boxed{f(x)\sim_{x_0}g(x) \iff \lim_{x\rightarrow x_0} \dfrac{f(x)}{g(x)} = 1}$
^definition

> [!attention]
> On n'écrit pas $0 \sim_{x_{0}} f$ car c'est évidemment toujours faux
> **$f \sim_{x_{0}} 0$ n'a pas de sens**

> [!definition] autre définition
> $f \sim_{x_{0}} g$ si il existe $h$ telle que :
>  - $\lim\limits_{x_{0}}h = 1$
>  - $f = hg$
> Dans cette définition, on peut avoir $f \sim_{x_{0}} 0$
> Si $x_{0} = \pm \infty$, on peut définir $h$ seulement après $b \geq x_{0}$
> > [!attention] équivalence à $0$
> > Pour qu'une fonction $f$ soit équivalente à $0$ en $x_{0}$, il faut qu'elle soit égale à $0$ sur tout le voisinage (aussi proche que l'on veut) de $0$.
> > **Exemple : ** $\frac{1}{x} \not\sim_{+\infty} 0$ car on ne peut pas trouver de fonction $h$ pour laquelle $\frac{1}{x} = 0\times h(x)$ pour tout $x$ suffisament grand (l'égalité est vraie seulement à la limite)
> > **Exemple : ** $\sin x-x \sim_{0} 1$ (car $\frac{\sin x}{x} \sim_{0} 1$)
> > 
^definition-alternative

# Propriétés
 - L'équivalence est une [[relation d'équivalence]].

 - $f \sim g \implies f \circ \varphi \sim g \circ \varphi$
     - [[composition de fonctions]] **à droite**
     - la composition à gauche ne fonctionne pas
         - $x+1 \sim_{+\infty} x$ alors que $e^{x+1}\not\sim_{+\infty}e^{x}$
         - la composition fonctionne avec $\ln$ :
             - $f \sim g \implies \ln(f) \sim \ln(g)$


 - Si $\displaystyle\lim_{x \to x_{0}} f(x) = a \mid_{a \in \mathbb{R}^{*}}$ on a : $f \sim_{x_{0}} a$
     - Si $a = 0$ ou $a = \pm\infty$ alors $f \nsim_{x_{0}} a$

 - $f \sim_{x_{0}} g \iff \alpha f \sim_{x_{0}} \alpha g \Big|_{\text{si } \alpha \neq 0}$
     - stable par multiplication par un scalaire **non nul**
 - $f \sim g \iff f^{\alpha} \sim g^{\alpha} \Big|_{\alpha \in \mathbb{R}}$
     - stable par puissance

 - $f \sim_{x_{0}} g \iff f = g + o_{x_{0}}(g)$
     - [[démonstration correspondance équivalence et domination|démonstration]]

 - avec les [[polynôme|polynômes]] : Soit $P(x)=a_{0}+a_{1}x+a_{2}x^{2}+\cdots+a_{n}x^{n}$
     - au voisinage de $0$ : $P(x)\sim a_{k_{0}}x^{k_{0}}$ où $a_{k_{0}}$ est le premier coefficient non nul de $P(x)$
     - au voisinage de $\pm\infty$ : $P(x)\sim a_{n}x^{n}$
