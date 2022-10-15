up::[[obsidian]]
title::"notes sur les plugins obsidian"
#obsidian #no-review 

----

> [!query]
> ```dataview
> TABLE title as "description", link
> FROM #obsidian 
> WHERE contains(up, this.file.link)
> SORT link="core plugin" DESC
> ```

