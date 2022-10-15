#logique #no-review 

----

Soit $V$ [[vocabulaire]] (ensemble fini de symboles) donné
On appelle _langage formel_ $L = <R, V>$ tout ensemble, potentiellement infini, de séquences de symboles de $V$ respectant les règles de formation ([[règle d'inférence|règles d'inférence]]) pour faire une **fbf** (formule bien formée).

# Exemple $L=(V, R)\text{ avec } V=\{a,b\}\text{ et }R = \{R1, R2\}$
 - $R1$ : $F$ est une fbf de $L$ si $F$ est formée d'un seul symbole appartenant à $V$
 - $R2$ : $F$ est une fbf de $L=<R, V>$ si $F = aG$ avec $G$ une fbf de $L$ 
> espression régulière pour ce langage : `a+|a*b`

