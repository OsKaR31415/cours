up::[[java objets]]
sibling::[[java interfaces]]
#informatique 
# java classe abstraite
Une classe abstraite est une classe pour laquelle on ne définit pas d'implémentation des méthodes. Le but est de pouvoir hériter de cette méthode

```java
abstract class Shape {
    abstract int area();
}
```

```java
class Square extends Shape {
    public int area() { 
        return this.width * this.height;
    }
}
```

