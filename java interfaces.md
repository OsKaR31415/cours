up::[[java objets]] 
sibling::[[java classe abstraite]]
#informatique #no-review 

----
Une classe peut implémenter plusieurs interfaces (simule l'[[java héritage|héritage]] multiple).

Contrairement à une [[java classe abstraite|classe abstraite]], une interface oblige ses classes héritées à implémenter les méthodes qu'elle possède.


```java
public interface I {
    public void A();
    public void B();
}
```

```java
public class X implements I {
    public void A() {...}
    public void B() {...}
}
```