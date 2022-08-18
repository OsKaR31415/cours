#obsidian #PKM 
# obsidian workflow

> [!query] Sous-notes de [[obsidian workflow]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(file.outlinks, [[workflow obsidian]])
>    or contains(up,          [[workflow obsidian]])
>    or contains(up.up,       [[workflow obsidian]])
>    or contains(up.up.up,    [[workflow obsidian]])
>    or contains(up.up.up.up, [[workflow obsidian]])
> WHERE file.name != this.file.name
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```
