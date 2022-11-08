up::[[LaTeX]]
title::"comment aligner correctement une suite d'équations"
#informatique #no-review 

----

# Alignement simple
$$\begin{align*}
\tan(a+b) &= \frac{\sin(a+b)}{\cos(a+b)}\\
&= \frac{\sin a \cos b + \sin b \cos a}{\cos a \cos b - \sin a \sin b}\\
&= \frac{\sin a \cos b}{\cos a \cos b - \sin a \sin b} + \frac{\sin b \cos a}{\cos a \cos b - \sin a \sin b}\\
&= \frac{\sin a \cos b}{\cos a \cos b - \sin a \sin b} + \frac{\frac{\sin b }{\cos b}}{1 - \frac{\sin a \sin b}{\cos a \cos b}}\\
&= \frac{\sin a \cos b}{\cos a \cos b - \sin a \sin b} + \frac{\tan b}{1 - \tan a \tan b}\\
&= \frac{\tan a}{1-\tan a \tan b} + \frac{\tan b}{1 - \tan a \tan b}\\
&= \frac{\tan a + \tan b}{1 - \tan a \tan b}
\end{align*}$$

# Alignement avec des commentaires

en utilisant une colonne supplémentaire
$$\begin{align*}
\tan(a+b) &= \frac{\sin(a+b)}{\cos(a+b)} && \text{par définition}\\
&= \frac{\sin a \cos b + \sin b \cos a}{\cos a \cos b - \sin a \sin b} && \text{formules de somme}\\
&= \frac{\sin a \cos b}{\cos a \cos b - \sin a \sin b} + \frac{\sin b \cos a}{\cos a \cos b - \sin a \sin b}\\
&= \frac{\sin a \cos b}{\cos a \cos b - \sin a \sin b} + \frac{\frac{\sin b }{\cos b}}{1 - \frac{\sin a \sin b}{\cos a \cos b}} && \text{simplification par } \cos a \cos b\\
&= \frac{\sin a \cos b}{\cos a \cos b - \sin a \sin b} + \frac{\tan b}{1 - \tan a \tan b} && \text{réduction}\\
&= \frac{\tan a}{1-\tan a \tan b} + \frac{\tan b}{1 - \tan a \tan b} && \text{simplification par } \cos a \cos b\\
&= \frac{\tan a + \tan b}{1 - \tan a \tan b}
\end{align*}$$


En utilisant `\tag{...}` (centré, avec des parenthèses automatiques :
$$\begin{align*}
\tan(a+b) &= \frac{\sin(a+b)}{\cos(a+b)} \tag{par définition}\\
&= \frac{\sin a \cos b + \sin b \cos a}{\cos a \cos b - \sin a \sin b} \tag{formules de somme}\\
&= \frac{\sin a \cos b}{\cos a \cos b - \sin a \sin b} + \frac{\sin b \cos a}{\cos a \cos b - \sin a \sin b}\\
&= \frac{\sin a \cos b}{\cos a \cos b - \sin a \sin b} + \frac{\frac{\sin b }{\cos b}}{1 - \frac{\sin a \sin b}{\cos a \cos b}} \tag{simplification par $\cos a \cos b$}\\
&= \frac{\sin a \cos b}{\cos a \cos b - \sin a \sin b} + \frac{\tan b}{1 - \tan a \tan b} \tag{réduction}\\
&= \frac{\tan a}{1-\tan a \tan b} + \frac{\tan b}{1 - \tan a \tan b} \tag{simplification par $\cos a \cos b$}\\
&= \frac{\tan a + \tan b}{1 - \tan a \tan b}
\end{align*}$$


