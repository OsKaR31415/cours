up:: [[java]]
title:: "gérer des ensemble d'obets"
#informatique 

---

 - regroupement d'objets (éléments) 

# Types de collections

![[java collections 2022-10-24 08.45.06.excalidraw|800]]


## Critères de choix du type de collection

 - éléments ordonnés ou non
 - accès direct a un élément Est possible ou pas
 - accès à la valeur se fait 


# Collections
 - Accessibles en important `java.util`
 - depuis `JDK 5`, les collections sont [[java généricité|génériques]] : `Collection<E>`
 - certaines collections sont **ordonnées** : `ArrayList`, `Linked`list`
 - possiblité d'accéder 
 - possible d'ajouter `null`

 - méthodes
     - `compareTo`

## Itérateurs
 - **monodirectionnels** : parcours du début à la fin
 - **bidirectionnels** : parcours la collection dans les deux sens

 - notion d'ordre pour ne parcourir qu'une seule fois
     - explicite pour les collections ordonnées 
     - implicite pour les `Set` etc...

### Itérateurs monodirectionnels 
 - accessibles par la méthode `iterator()` qui implémente l'interface `Iterator<E>`
 - un itérateur qui indique une position courante qui d2signe un élément de la collection 
 - méthode `hasNext()` : savoir s'il y à un élément accessible dans la collection 
 - méthode `next()` : se placer sur et récupérer l'élément courant

```java
Iterator<E> iter = c.iterator();

while (iter.hasNext()) {
    E elem = iter.next();
    // exemple :
    if (condition) iter.remove();
}

for (E elem : iter) {
    // ...
}
```

#### Supprimer le premier élément 
```java
Iterator<E> iter = c.iterator();
E fst = iter.next();
iter.remove(); // on retire à iter, on ne fait pas `fst.remove()`
```

 - `remove` ne supprime pas l'élément à la position courante, mais l'objet qui à été accédé précédemment 
 - nécessaire d'avoir un objet courant pour appeler la méthode `remove`

### Itérateurs Bidirectionnels

#### Interface ListIterator 

 - collections `ArrayList` et `LinkedList` peuvent être parcourues dans les deux sens 
 - ajoute les méthodes `hasPrevious` et `previous` 
 - ajoute la méthode d'addition à la **position courante** `add`, ou de modification de l'élément courant avec la méthode `set`
 - exemple d'ajout dans une collection 
```java
ListIterator<E> it;
it = c.listIterator();
it.next(); // objet courant = 1er élément 
it.next(); // 2ème élément 
it.add(elem); // ajout en 2ème position
              // le 2ème élément devient le 3ème
```

##### Vecteurs dynamiques ArrayList
 - structure ordonnées, accès direct par indice, autorise les doublons 
 - comparable à un tableau :
     - accès rapide aux éléments 
     - éléments contigus en mémoire 
     - ajout et insertion en $\mathcal{O}(n)$ en moyenne (contre $\mathcal{O}(1)$ pour une liste chaînée)
 - mais :
     - nombre d'éléments put varier au cours de l'exécution 
     - accepte n'importe quels types, même `null`
 - dérive de `List<E>`
###### Ajout
```java
AraryList<E> v1 = new ArrayList<E> ();  // rempli de null
ArrayList<E> v2 = new ARrayList<E> (c); // rempli de c
```

 - ajout d'élément.s à une position donnée 
```java
v1.add(e1); // ajout à la fin
v1.add(3, e1); // ajout à l'index 3
```

 - `.addAll(iter)` : ajouter tous les éléments d'un itérateur
###### Suppression 
```java
E elem = v1.remove(3);
v2.removeRange(1, 4);
```
###### Parcours et accessseurs 
 - `.size()` : renvoie la taille du tableau 
 - `.get(idx)` : valeur à l'index `idx`
###### Autres méthodes

 - `isEmpty()`
 - `indexOf(object)` : indice de l'objet, `-1` s'il n'est pas dans la liste
 - `contains(object)`
 - `set(i, object)` : remplace l'élément situé en `i` par `object`
 - `clear()`
 - `isEmpty()`

