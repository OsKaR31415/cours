---
description: |
  ```python
  from collections import defaultdict
  from pprint import pprint
  tree = lambda: defaultdict(tree)  # arbre = dictionnaire contenant un arbre
  example = tree()  # création de l'arbre
  example["A"]["A.1"]
  example["A"]["A.2"]["A.2.1"]
  example["B"]["B.1"]
  def tree_to_dicts(tree):  # transformer en vrai dictionnaire
      return {key: tree_to_dicts(tree[key]) for key in tree}
  pprint(tree_to_dicts(example))
  def add_path(tree, path):
      for node in path:
          tree = tree[node]
  add_path(example, ["B", "B.2", "B.2.1"])
  add_path(example, "B>B.2>B.2.2".split(">"))
  pprint(tree_to_dicts(example))
  ```
---
up::[[python]]
link::https://gist.github.com/hrldcpr/2012250
author::[[harold cooper]]
title::"definir des [[arbre|arbres]] avec les defaultdicts du module [[python module collections]]"

#informatique/python #no-review 
# python tree with defaultdicts
Permet de définir la structure d'[[arbre]] de manière simple, grace aux `defaultdicts` (module collections)


## Définition
```python
from collections import defaultdict

# un arbre est un dictionnaire contenant d'autres arbres
tree = lambda: defaultdict(tree)
# on peut aussi utiliser :
# def tree():
#     return defaultdict(tree)

```



## Créer

**Avec assignation**
 - les feuilles sont des valeurs (pas des dictionnaires vides)
 - [!] ne fonctionne pas avec toutes les fonctions listées ensuite
```python
users = tree()
users['harold']['username'] = 'hrldcpr'
users['handler']['username'] = 'matthandlersux'
```

**Sans assignation**
 - les feuilles sont des dictionnaires vides (avec clef mais pas valeur)
 - [p] plus proche du modèle habituel pour les [[arbre|arbres]] : les feuilles ont `null` comme enfant
```python
taxonomy = tree()
taxonomy['Animalia']['Chordata']['Mammalia']['Carnivora']['Felidae']['Felis']['cat']
taxonomy['Animalia']['Chordata']['Mammalia']['Carnivora']['Felidae']['Panthera']['lion']
taxonomy['Animalia']['Chordata']['Mammalia']['Carnivora']['Canidae']['Canis']['dog']
taxonomy['Animalia']['Chordata']['Mammalia']['Carnivora']['Canidae']['Canis']['coyote']
taxonomy['Plantae']['Solanales']['Solanaceae']['Solanum']['tomato']
taxonomy['Plantae']['Solanales']['Solanaceae']['Solanum']['potato']
taxonomy['Plantae']['Solanales']['Convolvulaceae']['Ipomoea']['sweet potato']
```


## Afficher

Il faut d'abord transformer les arbres en vrais dictionnaires
```python
def tree_to_dict(tree):
    # on transforme récursivement chaque branche de l'arbre en clef du dictionnaire
    # le cas de base est automatique : quand le dictionnaire est vide
    return {k: tree_to_dict(tree[k]) for k in tree}
```

Ensuite, on peut simplement utiliser prettyprint :
```python
from pprint import pprint
pprint(tree_to_dict(taxonomy))
```
```python
{'Animalia': {'Chordata': {'Mammalia': {'Carnivora': {'Canidae': {'Canis': {'coyote': {},
                                                                            'dog': {}}},
                                                      'Felidae': {'Felis': {'cat': {}},
                                                                  'Panthera': {'lion': {}}}}}}},
 'Plantae': {'Solanales': {'Convolvulaceae': {'Ipomoea': {'sweet potato': {}}},
                           'Solanaceae': {'Solanum': {'potato': {},
                                                      'tomato': {}}}}}}
```



## Modifier

**Ajouter un chemin**
 - on ajoute tout un chemin du graphe d'un seul coup
```python
def add_path(tree, path):
    for node in path:
        # for each node, you change the current subtree
            # since you modify an object contained in the original tree, the whole tree is modified
        tree = tree[path]

add_path(taxonomy,
    'Animalia>Chordata>Mammalia>Cetacea>Balaenopteridae>Balaenoptera>blue whale'.split('>'))
```
```python
# On peut aussi ajouter directement dans un sous-arbre
add_path(taxonomy['Animalia']['Chordata']['Mammalia'],
         "Cetacea>Balaenopteridae>Balaenoptera>blue whale".split('>'))
```

