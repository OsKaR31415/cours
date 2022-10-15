up::[[requête]]
#informatique #no-review 

----
Soit $q$ une [[requête]] $ans(u)\leftarrow R_1(u_1), \ldots, R_n(u_n)$
Soit $I$ une instance de [[base de données]] de schéma $D$
l'_image_ de (la réponse à) $q$ sur $I$ est :

 $q(I) = \{v(u) \;|\; v \text{ est une valuation sur } \mathrm{var}(q) \text{ et } \forall i\in[\![1, n]\!], v(u_i)\in I(R_i)\}$

## Exemple
sur la [[BDD films]]

- les films donc l'auteur est américain.e
    - $film\_américain(t) \leftarrow réalisateur(r, "américaine"), films(t, r, a)$

