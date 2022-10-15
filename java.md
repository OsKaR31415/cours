up::[[langage de programmation]]
title::"[[paradygme programmation orientée objet|OO]], haut niveau"
#informatique #no-review 

----
> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

# OOP
voir : [[paradygme programmation orientée objet|OOP]]







## Méthodes


## Héritage












## Polymorphisme

> _polymorphisme_, vient du grec
> signifie "_peut prendre plusieurs formes_"

 - basé sur la notion d'[[java#Héritage|héritage]]

> [!example] Exemple
> ```java
> Point p = new Point();
> Object o = p;
> o.deplace(3, 4); // ERREUR : deplace n'est pas une méthode de Object
> Point p1 = (Point) o;
> p1.deplace(3, 4); // OK : conversion de type
> ((Point)o).deplace(3, 4); // OK aussi, mais nouvelle référence
> ```
> on remarque que `o`, qui est 


**Exemple :**
```java
class Animal {}
class Lion extends Animal {}
class Tigre extends Animal {}
class Ours extends Animal {}

public class Essai {
    public static void main(String args[]) {
        /* foo est de type Animal */
        Animal foo;
        /* mais sera un objet d'une de ces classes : */
        foo = new Lion();
        foo = new Tigre();
        foo = new Ours();
        
        Lion l;
        Lion l = new Animal(); /* ⚠️ erreur car incompatibilité de type */
    }
}
```

