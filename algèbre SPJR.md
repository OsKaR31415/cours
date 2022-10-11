up::[[algèbre relationelle]]
#informatique 
# algèbre SPJR

| initiale | opération          | symbole   |
| -------- | ------------------ | --------- |
| S        | sélection          | $\sigma$  |
| P        | projection         | $\pi$     |
| J        | jointure naturelle | $\bowtie$ |
| R        | renommage          | $\rho$    |


## Exemples
$\text{réalisateur}[\text{nom}, \text{nationalité}]$
$\text{film}[\text{titre}, \text{nom}, \text{année}]$

lister les films réalisés par des américains
 - $\pi_{titre} \left( \sigma_{\text{nationalité} = "américaine"} (\text{réalisateurs}) \bowtie \rho_{\text{titre, réalisateur, année} \to \text{titre, nom, année}}(films) \right)$

## Propriétés

