up::[[fonction cosinus hyperbolique|ch]]
sibling::[[démonstration de l'expression de l'arg sinus hyperbolique]]
description::"démonstration de $\arg\ch(x)=\ln\left(x + \sqrt{x^{2}-1}\right)$"
#maths/trigonométrie #demonstration  #no-review 

---

$$\begin{align*}
\ch(x) = y &\iff \frac{e^{x}+e^{-x}}{2} = y\\
&\iff e^{x}+e^{-x} = 2y \qquad y \text{ doit être } \geq 1\\
&\text{ si } y \geq 0 , \text{ avec } x \geq 0 \text{ (car } \ch \text{est paire})\\
&\iff e^{x} + e^{-x} = 2 y\\
&\iff e^{x} + \frac{1}{e^{x}} = 2y\\
&\iff e^{2x} + 1 = 2e^{x}y\\
&\iff (e^{x})^{2} - 2y(e^{x}) + 1 = 0\\
&\qquad \Delta = 4y^{2} - 4\\
&\qquad \qquad \text{puisque } y \geq 1, \Delta \geq 0\\
&\qquad \text{deux solutions, éventuellement identiques} :\\
&s_{1} = \frac{2y - \sqrt{4y^{2}-4}}{2} = y-\sqrt{y^{2}-1}\\
&s_{2} = y + \sqrt{y^{2}-1}\\
&\text{donc on a :}\\
&\iff \left\{\begin{lgathered} e^{x} = s_{1}\\\text{ou}\\ e^{x} = s_{2} \end{lgathered}\right.\\
&\text{on sait que } x \geq 0 \text{ donc } e^{x} \geq 1\\
&\text{Or, quand } y > 1 :\\
&\qquad s_{2}>1\\
&\qquad s_{1} \text{n'est pas toujours } > 1\\
&\iff e^{x} = s_{2}\\
&e^{x} = y + \sqrt{y^{2} - 1}\\
&x = \ln(y+\sqrt{y^{2}-1})\\
& 
\end{align*}$$


