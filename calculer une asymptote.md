---
up: [[asymptote]]
tags: maths/analyse, review
mindmap-plugin: basic
sr-due: 2022-08-18
sr-interval: 3
sr-ease: 261
---

# calculer une asymptote

## pour des courbes de fonctions

### $\disp\lim_{x\rightarrow\pm\infty} f(x) =$
- $\pm\infty$
   - $\disp\lim_{x\rightarrow\pm\infty} \frac{f(x)}{x} =$
      - $a, a\in\R^*$
         - $\disp\lim_{x\rightarrow\pm\infty}(f(x) - ax) =$
            - $b, b\in\R$
               - asymptote d'équation $y:ax+b$
            - $\pm\infty$ / pas de limite
               - [[branche parabolique]] de direction $y=ax$
      - $0$
         - [[branche parabolique]] de direction $Ox$
      - $\pm\infty$
         - [[branche parabolique]] de direction $Oy$
      - pas de limite
   - $\disp\lim_{x\rightarrow\pm\infty}\frac{f(x)}{g(x)} =$
      - $c, c\in\R$
         - $\disp\lim_{x\rightarrow\pm\infty}(f(x) - c\cdot g(x)) =$
            - $d,d\in\R$
               - courbe [[asymptote]] d'équation $y=c\cdot g(x) + d$
            - $\pm\infty$ / pas de limite
               - [[branche parabolique]] de même direction que $g$
      - $\pm\infty$ / pas de limite
         - [[branche parabolique]] de même direction que $g$
- $y_0, y_0\in\R$
   - [[asymptote]] horizontale
- pas de limite
   - on ne sait pas

## pour des [[courbe paramétrée|courbes paramétrées]]

### en un point $t_0\in\R$
- $x$ diverge mais pas $y$
   - $\lim\limits_{t\to t_0}(x(t)) =$
      - $\pm\infty$
         - [[asymptote]] horizontale d'équation $y=y(t_0)$
      - pas de limite
         - ?
- $y$ diverge mais pas $x$
   - de même que pour le cas symétrique : asymptote horizontale d'équation $x=x(t_0)$
- $x$ et $y$ divergent
   - $\lim\limits_{t\to t_0}\left( \dfrac{y(t)}{x(t)} \right)=$
      - $\pm\infty$
         - [[branche parabolique]] de direction $Oy$
      - $0$
         - [[branche parabolique]] de direction $Ox$ (car $x$ ne tend pas vers $0$)
      - $e\in\R^*$
         - $\lim\limits_{t\to t_0}(y(t) - e\cdot x(t))=$
            - $\pm\infty$ / pas de limite
               - [[branche parabolique]] de direction $y=ex$
            - $f\in\R$
               - [[asymptote]] d'équation $y=ex + f$

### en $t\to\pm\infty$
- $\lim\limits_{t\to\pm\infty}\left( \dfrac{y(t)}{x(t)} \right) =$
   - même chose que quand $x$ et $y$ divergent en un point $t_0$
