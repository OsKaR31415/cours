---
alias: "calculus"
---
# MOC calculus

> [!query] Sous-notes de [[MOC calculus]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[MOC calculus]])
>    or contains(up,          [[MOC calculus]])
>    or contains(up.up,       [[MOC calculus]])
>    or contains(up.up.up,    [[MOC calculus]])
>    or contains(up.up.up.up, [[MOC calculus]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```