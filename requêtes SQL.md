up::[[SQL]]
#informatique

----
Dans une [[base de données]]
| numemp | nom | emploi | embauche | salaire | prime | numdept | chef |
|--|--|--|--|--|--|--|--|--|
| 1 | Dupont | commercial | 2014-01-01 | 2003 | 500 | 1 | 4 |
| 2 | Dupuis | commercial | 2016-11-03 | 1800 | 200 | 1 | 1 |
| 8 | Fifi | secréteure | 2013-10-15 | 1450 | 100 | 4 | 3 |
| 3 | Leroux | directeur | 2016-11-03 | 1800 | 200 | 1 | 4 |
| 12 | Loulou | secrétaire | 2013-09-



# Sélection
```sql
SELECT * from nomTable
```

# Projection
projection -> choisir certaines colonnes

Sélectionner **certaines colonnes** :
```sql
select col1, col2
from nomTable
```

Sélectionner certaines colonnes en **supprimant les doublons** :
```sql
SELECT DISTINCT col1, col2
from nomTable
```

# Sélection
-> choisir certaines lignes

Sélectionner seulement les valeurs column des tuples donc la valeur other_col vaut 4.
```sql
SELECT DISTINCT column
FROM nomTable
WHERE other_col = 4
```




