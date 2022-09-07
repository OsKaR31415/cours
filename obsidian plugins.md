up::[[obsidian]]
title::"notes sur les plugins obsidian"
#obsidian #no-review 
# obsidian plugins

> [!query]
> ```dataview
> TABLE title as "description", link
> FROM #obsidian 
> WHERE contains(up, this.file.link)
> ```

