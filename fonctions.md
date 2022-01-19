# Fonctions en Ocaml

Le mot clef `let` est utilisé pour assigner une fonction, de la même manière qu'une [[ocaml assignation|variable]].

```ocaml
(* max_length : string x string -> int
a, b -> returns the length of the longest string *)
let max_length a b =
 max(String.length a) (String.length b);;


max_length "" "ab" = 2;;
max_length "ab" "" = 2;;
max_length "aa" "bbb" = 3;;

```
