up::[[obsidian]]
#obsidian
# MOC obsidian

> [!query] Sous-notes de [[obsidian]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(up,          [[obsidian]])
>    or contains(up.up,       [[obsidian]])
>    or contains(up.up.up,    [[obsidian]])
>    or contains(up.up.up.up, [[obsidian]])
> SORT up.up.up.up, up.up.up, up.up, up
> ```


```query
"up::[[obsidian]]"
```



