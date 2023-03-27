---
alias: [ "homebrew désinstaller avec les dépendances" ]
---
up:: [[homebrew]]
title:: "`brew uninstall <package> && brew autoremove`"
#informatique 

---

Pour désinstaller un package
```bash
brew uninstall <package>
```

On peut ensuite supprimer les packages qui n'ont pas de dépendants (les anciennes dépendances du package installé)

```bash
brew autoremove
```

