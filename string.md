# chaînes de caractères en Ocaml

Les chaînes de caractères sont entre `"`
La concaténation est faîte avec le `^`

```ocaml
# "test";;
- : string = "test"

# "autre " ^ "test";;
- : string = "autre test"

# int_of_string "7";;
- : int = 7

# int_of_string "test";;
- : Exception ...
```

