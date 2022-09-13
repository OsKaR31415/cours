#obsidian #PKM 
up::[[obsidian]]
# obsidian workflow

> [!query] Sous-notes de [[obsidian workflow]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(file.outlinks, [[obsidian workflow]])
>    or contains(up,          [[obsidian workflow]])
>    or contains(up.up,       [[obsidian workflow]])
>    or contains(up.up.up,    [[obsidian workflow]])
>    or contains(up.up.up.up, [[obsidian workflow]])
> WHERE file.name != this.file.name
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```




> [!query] Sous-notes de [[obsidian workflow]]
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM ""
> WHERE contains(join(up, up.up, up.up.up, up.up.up.up, this.file.link))
> WHERE file.name != this.file.name
> SORT file.etags, up.up.up.up, up.up.up, up.up, up.file
> ```
