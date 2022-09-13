up::[[langage de programmation]]
title::"[[paradygme programmation orientée objet|OO]], haut niveau"
#informatique 
# java


## OOP
voir : [[paradygme programmation orientée objet|OOP]]

> [!note] Constructeurs
> Le constructeur est la fonction qui permet d'initialiser un objet (de créer un objet à partir de sa classe).
> un constructeur :
>  - a le même nom que la classe
>  - doit être `public`

> [!note] instanciation
> Pour créer un objet (en utilisant son constructeur) :
>  - On appelle le constructeur (même nom que la classe)
>  - On utilise `new`
> ```java
> MaClasse foo = new MaClasse("paramètres");
> ```

> [!note] attributs / méthodes
> Les attributs et méthodes sont appelés avec le `.` : `MaClasse.attr` désigne l'attribut `attr` de `MaClasse`

### Variables

#### Types de variables
> [!note] variable d'instance
>  - déclaration sans mots clef (simplement dans le corps de la classe)
>  - chaque instance de la classe a accès à **sa propre version** de la variable

> [!note] variable de classe
>  - définies avec `static`
>  - Toutes les instances de la class accèdent à **la même** variable

> [!note] constantes
>  - définies avec `final`
>  - ne peuvent pas être modifiées
> 

#### Champ des variables

 - [ ] #todo prendre notes sur la protée des variables / mots clefs de portée

### Méthodes

> [!note] redéfinir une méthode
> Pour redéfinir une méthode, on utilise le décorateur `@Override`
> ```java
> public class Foo extends Bar {
>     /* on remplace la méthode */
>     @Override
>     public Int getRandomNumber {
>         return 4
>     }
> }
> ```

### Héritage

> [!définition]
>  - création d'une nouvelle classe **dérivée** à partir d'une **classe de base**
>  - la classe dérivée _hérite_
>      - des attributs
>      - des méthodes
>  - on peut ajouter / modifier ces attributs hérités


on utilise `extends` pour faire hériter une classe :
```java
/* a Square is a Shape 
 * so it inherits from Shape */
public class Square extends Shape {
/* [...] */
}
```


> [!note] accès aux attributs
> une méthode de classe dérivée n'a pas accès aux attributs privés (`private`) de sa classe de base

> [!définition] super
> `super` désigne la classe parent au sein d'une classe héritée

> [!definition] Constructeur 
> Pour redéfinir le constructeur d'une classe héritée :
>  - On utilise le même nom
>  - On appelle `super([args])` en première ligne pour d'abord appeller le constructeur de la méthode parent

> [!note] redéfinition d'une méthode héritée
>  - la **redéfinition** doit conserver la signature de la méthode parente
>  - Si la signature change --> _surcharge_


> [!note] la classe `Object`
>  - toute classe dérive implicitement de `Object`
>  - `Object` contient 2 méthodes par défaut (toutes les classes en héritent)
>      - `toString` : adresse de l'objet (comme `string`)
>      - `Equals` : comparaison des adresses


### Polymorphisme

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

