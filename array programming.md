#informatique 
# array programming
----

## Bases d'APL



---

## Facilité d'expression des concepts qui apparaîssent dans les problèmes
Ease of Expressing Constructs Arising in Problems

---

### Exemple de la somme des entiers
_Somme des entiers de $1$ à $N$_

---
### Exemple de la somme des entiers
#### En maths
$$\sum_{k=1}^N k$$

---
### Exemple de la somme des entiers
#### Visuellement

```
    o
   o o
  o o o
 o o o o
o o o o o
```

---
### Exemple de la somme des entiers
#### En APL

```apl
    ⍳5 ⍝ entiers de 1 à 5
1 2 3 4 5

    +/⍳5
15
```


---
### Exemple de la somme des entiers
#### Autre visualisation


```
1-O
2-OO
3-OOO
4-OOOO
5-OOOOO
```

```
1-O XXXXX-5
2-OO XXXX-4
3-OOO XXX-3
4-OOOO XX-2
5-OOOOO X-1
```

```apl
    ⌽⍳5
5 4 3 2 1
    (⌽⍳5)+⍳5
6 6 6 6 6
    +/(⌽⍳5)+⍳5
30
    (+/(⌽⍳5)+⍳5)÷2
15
    5⍴6
6 6 6 6 6
    (+/5⍴6)÷2
15

    (6×5)÷2
15

    (N×N+1)÷2
```



