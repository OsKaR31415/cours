up::[[MOC géométrie]]
#maths/géométrie #no-review 

----
Un **polygone** est une figure géométrique plane formée d'une _ligne brisée_ **fermée**, c'est-à-dire d'une suite cyclique de segments consécutifs


# Propriétés

## Ordre d'un polygone
L'ordre d'un polygone est le nombre de ses côtés (c'est évidemment aussi le nombre de ses sommets ou de ses angles)

### Elements opposés
Soit $n$ l'ordre d'un polygone
 - Si $n$ est pair
     - les sommmets séparés par $\frac{n}{2}$ côtés sont dits **opposés** entre eux
     - même chose pour les angles
     - même chose pour les côtés
 - Si $n$ est impair
     - les côtés sont **opposés** aux angles, et vice-versa
     - formellement : chaque côté est opposé a l'angle situé $\frac{n-1}{2}$ sommets plus loin

## Diagonales
Une **diagonale** d'un polygone est un segment qui joint deux sommets **non consécutifs** d'un polygone.

Un polygone d'[[polygone#Ordre d'un polygone|ordre]] $n$ possède $\disp \binom{n}{2}-n = \frac{n(n-3)}{2}$ diagonales


# Typologie des polygones

## Classement par convexité

### Polygone croisé
Un polygone est dit **croisé** si au moins deux de ses côtés sont sécants, c'est-à-dire si au moins deux de ses côtés non consécutifs se coupent.

### Polygone simple
Un polygone est dit **simple** si deux cotés non consécutifs ne se coupent pas et si deux côtés consécutifs n'ont en commun qu'un de leurs sommets.

### Polygone convexe
Un polygone est dit **convexe** si son intérieur est [[convexité|convexe]], c'est-a-dire si toutes ses [[polygone#Diagonales|diagonales]] sont entièrement dans son intérieur.

Exemple : Pentagone non-convexe
![[polygone 2022-07-26 16.40.43.excalidraw|200]]
Les diagonales en rouge ne sont pas à l'intérieur du polygône.

## Classement par symétries

### Notion d'élément de symétrie
Les _symétries d'un polygone d'ordre $n$_ sont les [[isométrie affine|isométries affines]] du [[plan euclidien]] qui [[permutation|permutent]] à la fois ses $n$ sommets et ses $n$ côtés.

Une telle [[application affine]] [[point fixe|fixe]] nécessairement l'[[isobarycentre]] $G$ des somments, donc ne peut être que de deux types :
 - une [[symétrie axiale]] dont l'axe passe par $G$
 - une [[rotation]] de centre $G$ dont l'angle est multiple de $\frac{2\pi}{n}$

### Polygone régulier
Un polygone **régulier** si il est _équilatéral_ (côtés égaux) et _équiangle_ (angles égaux).

Un polygone d'ordre $n$ est **régulier** si il est le "plus symétrique possible", c'est-à-dire que son [[groupe de symétrie]] est $D_n$ (un [[groupe diédral]]).


### Symétrie axiale
Le groupe de symétrie est [[groupe diédral|diédral]]
