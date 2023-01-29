---
title: | 
  ```python
  from manim import *
  class NomDeLaScene(Scene):
      def construct(self):
          circle = Circle()
          self.play(Create(circle))
          self.wait()
  ```
---
up:: [[manim]]
#informatique/python 

---

```python
from manim import *

class NomDeLaScene(Scene):
    def construct(self):
        circle = Circle()
        self.play(Create(circle))
        self.wait()
```

 - [!] pour [[manim compiler une scène|compiler]], il faut préciser le bon nom de scène (ici `NomDeLaScene`)

