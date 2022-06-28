#maths/analyse 
# fonction indicatrice
La fonction _indicatrice_ (ou caractéristique) est une [[fonction]] définie sur un ensemble $E$ qui explicite l'appartenance ou non à un sous ensemble $F$ de $E$ de tout élément de $E$.
Formellement, la fonction _indicatrice_ d'un sous-ensemble $F$ d'un ensemble $E$ est une fonction :
$$
\begin{align}
I_F :& E \rightarrow \{0, 1\}\\
    & x \mapsto \left\{\begin{gathered}
        1 \text{ si } x\in F\\
        0 \text{ si } x\notin F
    \end{gathered}\right.
\end{align}
$$
```desmos-graph
y = x
```

## Notation
La fonction _indicatrice_ de $F$ peut être notée :
 - $\chi_F$
 - $1_F$
 - $\mathbb1_F$
 - $I_F$ 


## Propriétées
Soient $A$ et $B$ sont deux sous-ensembles de $E$

 - $(A \subseteq B) \iff (\chi_A \leq \chi_B)$
 - $\chi_{\overline A} = 1-\chi_A$
 - $\chi_{A\cup B} = \min\{\chi_A, \chi_B\} = \chi_A\times\chi_B$
 - $\chi_{A\cup B} = \max\{\chi_A, \chi_B\} = \chi_A+\chi_B-\chi_A\times\chi_B$
 - $\chi_{A\Delta B} = \chi_A+\chi_B-2\chi_A\times\chi_B$




