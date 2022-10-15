up::[[java]], [[paradygme programmation orientée objet|OOP]]
#informatique 

----

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

## Variables

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

## Méthodes

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

## Héritage
 -> [[java héritage]]