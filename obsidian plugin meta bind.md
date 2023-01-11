---
valeur: 17
trucs_cools:
  - le nombre Septante-trois
  - les maths
  - les trucs cools listés plus haut
is_the_button_on: false
date_test: 2005-05-25
---
up:: [[obsidian plugins]]
title:: "Input fields inside notes, that change metadata"
link:: https://mprojectscode.github.io/obsidian-meta-bind-plugin-docs
#obsidian 

---

# Exemples
## Syntaxe pour les cibles
On peut fixer la cible pour chaque type d'entrée.
La syntaxe est la suivante :

`INPUT[input_type:target]`

La cible peut être précisée avec :
 - `nom_attribut` : modifie l'attribut dans le fichier actuel
 - `nom_du_fichier#nom_attribut` : modifie l'attribut dans le fichier précisé
 - `path/to/file#nom_attribut` : modifie dans un fichier à l'adresse précisée

## Bouton on/off (toggle)

```meta-bind
INPUT[toggle:is_the_button_on]
```
Les éléments sont synchronisés :
```meta-bind
INPUT[toggle:is_the_button_on]
```

## Texte
### petite zone de texte
```meta-bind
INPUT[text]
```

### zone de texte qu'on peut agrandir
```meta-bind
INPUT[text_area]
```

## Sliders
```meta-bind
INPUT[slider():valeur]
```

Changer les valeurs min/max :
```meta-bind
INPUT[slider(minValue(0), maxValue(50)):valeur]
```

Ajouter des labels :
```meta-bind
INPUT[slider(addLabels, minValue(0), maxValue(25)):valeur]
```

## Selecteurs
 - on utilise `option(<contenu>)` pour préciser chacune des options

### Sélection simple (radio)
```meta-bind
INPUT[select(option(truc), option(bidule), option(ognion))]
```

### Multi-sélecteur

```meta-bind
INPUT[multi_select(title(Trucs cools), option(le nombre 42), option(le nombre Septante-trois), option(les maths), option(les ordinateurs), option(les trucs cools listés plus haut)):trucs_cools]
```


## Dates
date :
```meta-bind
INPUT[date:date_test]
```

heure :
```meta-bind
INPUT[time:time]
```

popup_calendrier
```meta-bind
INPUT[date_picker:date_test]
```

