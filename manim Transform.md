---
title:|
  ```python
  self.play(Transform(A, B))
  self.play(Transform(A, C))
  ```
---
up:: [[manim animations]]
#informatique/python 

---

Pour transformer un objet en un autre, on utilise la fonction `Transform(A, B)`, qui créé l'animation qui transforme `A` en `B`.

> [!note] Transformer plusieurs fois
> Pour faire plusieurs transformations successives, il ne faut pas faire `A -> B` puis `B -> C`, mais plutôt `A -> B` puis `A -> C`.
> 
> Si on fait `A -> B` puis `B -> C`, une nouvelle instance de B est créée, puis transformée en C.

