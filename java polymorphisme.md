up::[[java objets]]
#informatique

----

```java
class Animal {
    public void cri() {
        System.out.println("Le cri d'animaux");
    }
}

class Chat extends Animal {
    public void cri() {
        System.out.println("meow, meow");
    }
}

class Chien extends Animal {
    public void cri() {
        System.out.println("ouah, ouah");
    }
}
```


les classe `Chat` et `Chien` sont hérités, on peut donc donner à leurs instances le type `Animal` (leur classe parent) :
```java
Animal animal = new Animal(); // cri d'animaux
Chat chat = new Chat(); // cri du chat
Chien chien = new Chien(); // cri du chien
Animal chat = new Chat(); // cri du chat
```
