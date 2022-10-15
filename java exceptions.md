up::[[java]]
title::"gestion des erreurs"
#informatique #no-review 

----

Gestion des erreurs avec java.

 - détections / traitement des erreurs
     - `try` `catch` et `finally`

# Détection d'erreurs

```java
public class TextException {
    public static void main(String[] args) {
        int i = 1;
        int j = 0;

        try {
            System.out.println("resultat = " + (i/j));
        } catch (ArithmeticException e) {
            System.out.println("division par 0");
        }
    }
}
```


Avec `throws` :
```java

```

