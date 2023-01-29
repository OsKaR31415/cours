up:: [[manim mobjects]]
title:: "`Axes(x_range=(-3, 3), y_range(-3, 3))`"
#informatique/python 

---

```python
ax = Axes(x_range=(-3, 3), y_range=(-3, 3))
```

# Exemple

```python
from manim import *

class TestScene(Scene):
    def construct(self):
        ax = Axes(x_range=(-3, 3), y_range=(-3, 3))
        curve = ax.plot(lambda x: (x+2)*x*(x-2)/2, color=GREEN)
        area = ax.get_area(curve, x_range=(-2, 0))
        self.play(Create(ax), Create(curve))
        self.play(Create(area))
```
