up::[[python modules]], [[unix redirection de flux]]
link::http://docopt.org/
date::2022-09-07
title::"module pour créer des utilitaires lignes de commande simplement a partir du message d'aide renvoyé par cette commande"
#informatique 
# docopt - utilitaires ligne de commande avec python
Permet de créer un parseur des arguments (comme [argparse](https://docs.python.org/3/library/argparse.html))
 - utilise la syntaxe des [[unix man|man pages]] pour le créer
     - beaucoup plus façile et intuitif

Il suffit de donner une chaîne de caractères contenant la description d'une commande.
**Exemple :**
```python
"""
Naval Fate.

Usage:
  naval_fate ship new <name>...
  naval_fate ship <name> move <x> <y> [--speed=<kn>]
  naval_fate ship shoot <x> <y>
  naval_fate mine (set|remove) <x> <y> [--moored|--drifting]
  naval_fate -h | --help
  naval_fate --version

Options:
  -h --help     Show this screen.
  --version     Show version.
  --speed=<kn>  Speed in knots [default: 10].
  --moored      Moored (anchored) mine.
  --drifting    Drifting mine.
"""
```



