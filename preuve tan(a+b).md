up::[[MOC trigonométrie]]
#maths/trigonométrie #demonstration  #no-review 

----

Preuve de $\tan(a+b) = \dfrac{\tan(a)+\tan(b)}{1-\tan(a)\tan(b)}$


$$\begin{align}
\tan(a+b) &= \dfrac{\sin(a+b)}{\cos(a+b)}\\
&= \dfrac{\sin(a)\cos(b) + \sin(b)\cos(a)}{\cos(a)\cos(b)-\sin(a)\sin(b)}\\
&= \dfrac{\sin(a)\cos(b)+\sin{b}\cos(a)}{\cos(a)\cos(b)\left(1-\dfrac{\sin(a)\sin(b)}{\cos(a)\cos(b)}\right)}\\
&= \dfrac{\dfrac{\sin(a)\cos(b)+\sin(b)\cos(a)}{\cos(a)\cos(b)}}{1-\tan(a)\tan(b)}\\
&= \dfrac{\dfrac{\sin(a)\cos(b)}{\cos(a)\cos(b)}+\dfrac{\sin(b)\cos(a)}{\cos(a)\cos(b)}}{1-\tan(a)\tan(b)}\\
&= \dfrac{\tan(a)+\tan(b)}{1-\tan(a)\tan(b)}
\end{align}$$

On utilise les [[formules de trigonométrie#Formules de somme|formules de somme]] pour le $\sin$ et le $\cos$.

