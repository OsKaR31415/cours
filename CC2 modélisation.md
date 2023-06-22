---
title: CC2 modélisation
author: Oscar Plaisant
documentclass: scrartcl
header-includes: |
    \usepackage[top=2cm, bottom=2.5cm, left=2cm, right=2cm]{geometry}
    \usepackage{amsmath, amssymb, amsfonts, mathrsfs}
---

# Partie 1

## 1.

$z_1'$ est de classe $C^{1}$, donc on peut appliquer le théorème de Cauchy-Lipschitz.
On remarque que $z_1 = z_2 = 0 \mapsto 0$ est une solution du système.
Donc, par unicité de la solution, et par continuité de $z_1$, on sait que $z_1$ ne peut pas changer de signe, car sinon elle croiserait une autre solution.
On peut faire le même raisonnement pour $z_2$.
Comme on sait que $z_1^{0} > 0$ et $z_2^{0} > 0$, on sait que les deux fonctions seront toujours positives.


## 2.

$$
\begin{align}
(z_1 + z_2)' &= z_1' + z_2'\\
&= z_1(a_{12}z_2 - (a_{12}+a_{21})z_1z_2) + z_2(a_{21}z_2 - (a_{12} +a_{21})z_1z_2) \\
&= z_1z_2a_{12}-z_1z_2a_{12}-z_1z_2a_{21} +(z_2)^{2}a_{21} -z_1(z_2)^{2}a_{12}-z_1(z_2)^{2}a_{21} \\
&= -z_1z_2a_{21}+(z_2)^{2}a_{21}-(z_2)^{2}(a_{21}-(a_{12}+a_{21})z_1)
\end{align}
$$

## 3.

Comme on sait que $z_1+z_2 = 1$, et que les deux fonctions sont positives, on sait qu'elles sont minorées par 0, et si l'une devient plus grande que $1$ pour un $t$ donné, on sait que l'autre devrait être négative, ce qui est impossible, donc elles sont majorées par $1$.

On sait que les solutions existent tout le temps, car elles sont continues, et car elles sont bornées, donc leurs limites en $+\infty$ et $-\infty$ sont réelles.

## 4.

$z_1+z_2 = 1 \iff z_2 = 1-z_1$, donc on peut réécrire le système comme :  $z_1' = z_1(a_{12}(1-z_1)-(a_{12}+a_{21})z_1(1-z_1))$, et on a $z_2' = -z_1'$

Voici la version python de cette fonction :

```python
def z_prime(z: float, a_12: float, a_21: float) -> float:
    return z * (a_12 * (1-z) - (a_12 + a_21) * z * (1-z))
```

## 5.

Les points d'équilibre sont les points pour lesquels $z_1'(t) = 0$. $z_1' = z_1(a_{12}(1-z_1)-(a_{12}+a_{21})z_1(1-z_1))$, donc soit $z_1 = 0$, soit $a_{12}(1-z_1)-(a_{12}+a_{21})z_1(1-z_1) = 0$
$$
\begin{align}
\begin{cases}
z_1 = 0\\
a_{12}(1-z_1)-(a_{12}+a_{21})z_1(1-z_1) = 0 \\
\end{cases}
&\iff
\begin{cases}
z_1=0\\
z_1 = 1\\
a_{12}-z_1(a_{12}+a_{21}) = 0\\
\end{cases}\\
&\iff \begin{cases}
z_1 = 0 \\
z_1 = 1 \\
z_1 = \dfrac{a_{12}}{a_{12}+a_{21}}
\end{cases}
\end{align}
$$

Les points d'équilibre positifs ou nuls sont $t = 0$, $t = 1$ et $t = \dfrac{a_{12}}{a_{12} +a_{21}}$ si on suppose que cette valeur est dans $[0, 1]$.

## 6.

Pour la méthode d'Euler implicite, on doit résoudre cette équation :
$$
\begin{align}
z_1^{t+h} = z_1^{t}+h\cdot z_1'(z_1^{t+h}) &\iff z_1^{t+h} = z_1^{t}+h\cdot [ z_1^{t+h} (a_{12}(1-z_1^{t+h}) - (a_{12}+a_{21})z_1^{t+h}(1-z_1^{t+h})) ] \\
&\iff z_1^{t} + hz_1^{t+h}(1-z_1^{t+h}) [ a_{12} - z_1^{t+h}(a_{12}+a_{21}) ] - z_1^{t+h} = 0 \\
&\iff z_1^{t} + ha_{12}z_1^{t+h}(1-z_1^{t+h}) -h(a_{12}+a_{21})(z_1^{t+h})^{2}(1-z_1^{t+h}) - z_1^{t+h} = 0 \\
&\iff z_1^{t} + ha_{12}z_1^{t+h} -ha_{12}(z_1^{t+h})^{2} -h(a_{12}+a_{21})(z_1^{t+h})^{2} +h(a_{12}+a_{21})(z_1^{t+h})^{3} -z_1^{t+h} = 0 \\
&\iff h(a_{12}+a_{21})(z_1^{t+h})^{3} - h(2a_{12}+a_{21})(z_1^{t +h})^{2} + ha_{12}z_1^{t+h} + z_1^{t} = 0
\end{align}
$$

Comme on sait que $z_1^{t+h} \in [0, 1]$, on sait que l'on peut utiliser un développement limité comme approximation.
On cherche alors à résoudre :

$-h(2a_{12}+a_{21})(z_1^{t+h})^{2} +ha_{12}z_1^{t+h}+z_1^{t} = 0$
$\Delta = h^{2}a_{12}^{2} + 4z_1^{t}h(2a_{12}+a_{21})$

Les solutions de cette équation sont donc : 


$\displaystyle z_1^{t+h} = \frac{ha_{12} - \sqrt{ h^{2}a_{12}^{2}+4hz_1^{t}(2a_{12}+a_{21}) }}{2h(2a_{12}+a_{21})}$ et $\displaystyle z_1^{t+h} = \frac{ha_{12} + \sqrt{ h^{2}a_{12}^{2}+4hz_1^{t}(2a_{12}+a_{21}) }}{2h(2a_{12}+a_{21})}$

$\Delta > (ha_{12})^{2}$ donc $\sqrt{ \Delta } > ha_{12}$ par croissance de la racine carrée. On sait donc que $\displaystyle \frac{ha_{12}-\sqrt{ \Delta }}{2h(2a_{12}+a_{21})} < 0$ (on suppose $a_{12}$ et $a_{21}$ positifs).

Comme on cherche une solution positive, on sait que la solution à utiliser est : $\displaystyle z_1^{t+h} = \frac{ha_{12} + \sqrt{ h^{2}a_{12}^{2}+4hz_1^{t}(2a_{12}+a_{21}) }}{2h(2a_{12}+a_{21})}$

On peut donc coder une fonction qui calcule $z_1^{t+h}$ en fonction de $z_1^{t}$, $h$, $a_{12}$ et $a_{21}$ :

```python
def next_z_implicit(z: float, a_12: float, a_21: float, h: float) -> float:
    return (h*a_12 + np.sqrt(h**2*a_12**2 + 4*h*z*(W := 2*a_12 + a_21))) / (2*h*W)
```


Le code complet pour la simulation est donc :

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
from typing import Callable

gradient = mpl.colormaps['plasma']


def z_prime(z: float, a_12: float, a_21: float) -> float:
    return z * (a_12 * (1-z) - (a_12 + a_21) * z * (1-z))

def next_z(z: float, a_12: float, a_21: float, h: float) -> float:
    return z + h * z_prime(z, a_12, a_21)

def next_z_implicit(z: float, a_12: float, a_21: float, h: float) -> float:
    return (h*a_12 + sqrt(h**2*a_12**2 + 4*h*z*(W := 2*a_12 + a_21))) / (2*h*W)

def euler_method(next_step: Callable, z_0, a_12, a_21, nb_steps: int, h=0.01):
    """The color changes depending on a_12 and a_21, but not z_0.
    This is so you can easily see what happens for any initial condition with
    the same parameters."""
    X = np.arange(nb_steps) * h
    values = []
    z = z_0
    for _ in X:
        values.append(z := next_z(z, h, a_12, a_21))

    plt.plot(values, linewidth=.6, color=gradient((a_12 + a_21) / 2))
    plt.xticks(range(nb_steps))


next_step_function = next_z
# next_step_function = next_z_implicit

# Plot for various initial conditions and values of a_12 and a_21
Z_0 = np.linspace(0, 1, 40)
for a_12 in np.linspace(.1, .9, 2):
    for a_21 in np.linspace(.1, .9, 5):
        euler_method(next_step_function,
                     z_0=Z_0, a_12=a_12, a_21=a_21,
                     nb_steps=4000, h=H)
plt.show()
```


## 7.

On observe que, sauf si les conditions initiales sont aux extrêmes ($z_1^{0} = 1$ ou $z_1^{0}=0$), les solutions convergent toutes vers un point d'équilibre. On peut donc conjecturer que $0$ et $1$ sont des points d'équilibre répulsifs, et que $\dfrac{a_{12}}{a_{12}+a_{21}}$ est le point d'équilibre attractif.

# Partie 2

## 8.

On obtient le système suivant :

$$\begin{cases}
z_1' = z_1(a_{12}z_2 + a_{13}(1-z_1-z_2) - q(z_1, z_2, 1-z_1-z_2)) \\
z_2' = z_2(a_{21}z_1 + a_{23}(1-z_1-z_2) - q(z_1, z_2, 1-z_1-z_2))
\end{cases}$$
## 9.

On commence par coder les fonctions correspondant à $z_1'$, $z_2'$ et $z_3'$ :

```python
def q(Z: list[float], A: mat_3x3) -> float:
    return (A[0][1]+A[1][0])*Z[0]*Z[1] + (A[0][2]+A[2][0])*Z[0]*Z[2] + (A[1][2]+A[2][1])*Z[1]*Z[2]

def z_1_prime(Z: list[float], A: mat_3x3) -> float:
    return Z[0] * ( A[0][1]*Z[1] + A[0][2]*Z[2] + q(Z, A) )

def z_2_prime(Z: list[float], A: mat_3x3) -> float:
    return Z[1] * ( A[1][0]*Z[0] + A[1][2]*Z[2] + q(Z, A) )

def z_3_prime(Z: list[float], A: mat_3x3) -> float:
    return Z[2] * ( A[2][0]*Z[0] + A[2][1]*Z[1] + q(Z, A) )
```

On code ensuite la fonction d'approximation par méthode d'Euler :

```python
def next_z(Z: list[float], A: mat_3x3, h: float) -> list[float]:
    return [Z[0] + h * z_1_prime(Z, A),
            Z[1] + h * z_2_prime(Z, A),
            Z[2] + h * z_3_prime(Z, A)]

def Replicator3G(A: mat_3x3, Z_0: list[float], t_max: float, h: float) -> list[float]:
    values = [Z_0]
    Z = Z_0
    for _ in np.arange(0, t_max, step=h):
        values.append(Z := next_z(Z, A, h))
    return values
```

Finalement, on code la fonction d'affichage de l'approximation :

```python
def plot_3G_replicator(A, Z_0, t_max: float, h: float) -> list[float]:
    values = Replicator3G(A, Z_0, t_max, h)
    values = np.transpose(np.array(values))
    col = gradient(np.mean(Z_0))  # just a number that changes depending on A
    plt.plot(values[0], linewidth=.6, color=col)
    plt.plot(values[1], linewidth=.6, color=col)
    plt.plot(values[2], linewidth=.6, color=col)
```

On obtient donc le code suivant :

```python
import numpy as np
import matplotlib.pyplot as plt
import matplotlib as mpl
from typing import Callable, NewType

mat_3x3 = NewType('3x3 matrix', list[list[float]])

gradient = mpl.colormaps['plasma']

T = 3
h = 0.001
Z_1 = np.linspace(0, 1, 5)
Z_2 = np.linspace(0, 1, 5)
Z_3 = 1 - Z_1 - Z_2


def q(Z: list[float], A: mat_3x3) -> float:
    return (A[0][1]+A[1][0])*Z[0]*Z[1] + (A[0][2]+A[2][0])*Z[0]*Z[2] + (A[1][2]+A[2][1])*Z[1]*Z[2]

def z_1_prime(Z: list[float], A: mat_3x3) -> float:
    return Z[0] * ( A[0][1]*Z[1] + A[0][2]*Z[2] - q(Z, A) )

def z_2_prime(Z: list[float], A: mat_3x3) -> float:
    return Z[1] * ( A[1][0]*Z[0] + A[1][2]*Z[2] - q(Z, A) )

def z_3_prime(Z: list[float], A: mat_3x3) -> float:
    return Z[2] * ( A[2][0]*Z[0] + A[2][1]*Z[1] - q(Z, A) )

def next_z(Z: list[float], A: mat_3x3, h: float) -> list[float]:
    return [Z[0] + h * z_1_prime(Z, A),
            Z[1] + h * z_2_prime(Z, A),
            Z[2] + h * z_3_prime(Z, A)]

def Replicator3G(A: mat_3x3, Z_0: list[float], t_max: float, h: float) -> list[float]:
    values = [Z_0]
    Z = Z_0
    for _ in np.arange(0, t_max, step=h):
        values.append(Z := next_z(Z, A, h))
    return values


def plot_3G_replicator(A, Z_0, t_max: float, h: float) -> list[float]:
    values = Replicator3G(A, Z_0, t_max, h)
    values = np.transpose(np.array(values))
    col = gradient(np.mean(Z_0))  # just a number that changes depending on A
    plt.plot(values[0], linewidth=.6, color=col)
    plt.plot(values[1], linewidth=.6, color=col)
    plt.plot(values[2], linewidth=.6, color=col)

A_1 = [[0, 1, 1],
       [1, 0, 1],
       [1, 1, 0]]

A_2 = [[0, 1, 1],
       [1, 0, 1],
       [1, 1, 0]]

A_3 = [[ 0,  1, -1],
       [ 1,  0, -1],
       [-1, -1,  0]]

A_4 = [[ 0,  1, 1],
       [ 2,  0, 2],
       [-1, -1, 0]]

A_5 = np.array(A_4) * T


for z_1 in Z_1:
    for z_2 in Z_2:
        for z_3 in Z_3:
            plot_3G_replicator(
                A_5,  # change the parameters' matrix
                (z_1, z_2, z_3), T, h)

plt.show()
```

