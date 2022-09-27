up::[[base de données]]
#informatique #no-review 
# requête

Une "question" que l'on pose à une [[base de données]].

## Exemple

sur la [[BDD films]]

- lister les films réalisés par des américains
    - en [[langage à base de règles]]
    - `film_américain(t) <- réalisateurs(r, "américaine"), films(t, r, a)`
        - il existe une valeur de `r` associée à `"américaine"` dans l'instance de `réalisateurs`? et
        - on retrouve cette valeur dans l'instance de `films`
        - alors la valeur de `t` associée à la valeur de `r` dans l'instance de `films` fait partie du résultat

 - requêtes booléennes
     - Exemple : $\mathrm{ans}() \leftarrow \text{réalisateurx}(r, "américaine")$ 
     - renvoie une valeur booléenne selon si la règle est [[satisfaisable]] ou non
         - $\{ () \}$ (ensemble contenant le tuple vide) pour _vrai_
         - $\emptyset$ (ensemble vide) pour _faux_