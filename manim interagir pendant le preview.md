---
alias: [ "manim interactive embed", "manim shell pendant l'exécution" ]
---
up:: [[manim openGL]] 
title:: "ouvrir un shell ipython pour intéragir avec le preview ([[manim openGL|open gl]] seulement)"
#informatique/python 

---

Commande :
```python
self.interactive_embed()
```

 - mettre à la fin de la méthode `construct`
 - permet d'intéragir avec la fenêtre de preview
     - les commandes `self.play` et `self.wait` deviennent `play` et `wait`



