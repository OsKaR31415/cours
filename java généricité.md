up:: [[java]]
title:: "code utilisable sur un type quelconque"
#informatique

---

> [!definition] Généricité
> Possibilité d'écrire un cOde qui est utilisable avec des objets ou variables de types quelconques.
^definition

> [!info] Implémentation
>  - en faisant [[java héritage|hériter]] du type `Object`
>  - 

# Types génériques

```java
class Couple<T> {
    private T x, y;
    public Couple(T fst, T snd) {  // type des arguments adaptable
        x = fst;
        y = snd;
    }

    public T getSecond() { return y; }  // type de retour adaptable
}


```
 - paramètre `T` : utilisé comme type
 - utiliser uen seule lettre Majuscule


> [!attention] instanciation
>  - on ne peut pas instancier un objet de type `T`
>  - on ne peut pas créer un tableau d'un type générique

```java
Couple<Integer> c1 = new Couple(3, 4);
Couple<String>  c2 = new Couple("foo", "bar");
c1 instanceOf Couple; // true
c2 instanceOf Couple; // true
```

## Limites
 - possible de contraindre les types génériques à l'aide d'une clause d'héritage
```java
class Couple <T extends Number> {
...
}

Couple<Double> c; // OK
Couple<String> d; // Erreur
```
 - possible de faire de même avec les méthodes génériques 
 - possible de forcer le type génériques à implémenter une interface

## Dérivation sur les types génériques
```java
class C<T> {...}

class D<T> extends C<T> {...} // dérivation simple 
class E<T, U> extends C<T> {...} // + un type générique 
class F<T extends Number> extends C<T> {...} // contrainte

// rendre générique une c´sse dérivée d'une instance particulière
class G<T> extends A {...} // Type de base non générique 
class H<T> extends B<String> {...} // idem 

// Erreurs
class I extends C<T> {...} // /!\ Erreur
class J<T> extends C<T extends Number> {...} // /!\ Erreur
```

## Type Joker !

 - Si `T'` dérive de `T`, alors `C<T'>` ne dérive pas de `C<T>`
 
```java
Couple<Integer> a = new Couple<Integer>(3, 4);
Couple<Double> b = new Couple<Double>(3.2, 4.3);

Couple<?> c; // type joker
c = a;

c = b;
```

# Méthodes génériques

```java

```