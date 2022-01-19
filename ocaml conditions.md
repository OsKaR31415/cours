# Conditions en Ocaml

```ocaml
(*             condition        alternative 
                   V                 V    *)
let abs x = if x < 0 then (- x) else x;;
(*                          ^
                        conséquence *)
```

