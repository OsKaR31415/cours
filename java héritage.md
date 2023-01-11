---
alias: "héritage"
---
up::[[java]], [[paradygme programmation orientée objet|OOP]]
#informatique

----


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

