up::[[unix commandes]]
title::"compter le nombre de caractères, mots, lignes, d'un texte"
#informatique/linux 
# unix commande wc
 - `wc` pour "_Word Count_"

`wc [-cwl]`

> [!definition] utilisation
>  - argument `-c` : compter les caractères
>  - argument `-w` : compter les mots
>  - argument `-l` : compter les lignes


## Example

```bash
$ who | wc -l  # affiche le nombre d'utilisateurs connectés
7
```

