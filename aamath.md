#informatique 
# aamath
outil en [[ligne de commande]].
Permet d'afficher des expressions mathématiques en [[ASCII]].

## Exemple

L'expression
`int(cos(x^2/sqrt(1-tan(pi/12))), x = -pi/4 .. pi/4)`

est convertie en :
```aamath

   __
   ||
   --
    4
  /
 |
 |
 |          2
 |         x
 | cos ---------- dx
 |             __
 |             ||
 |     1 - tan --
 |              2
/
  __
 -||
 ---
  4
  
```


