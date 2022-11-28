up::[[obsidian workflow MOCs]], [[obsidian plugin dataview]] 
title:: "list of direct child of the current note", "kind of a breadcrumbs matrix"
#obsidian #PKM 

---

# The query

> [!query] sous-notes directes de `=this.file.link`
> ```dataview
> LIST title
> FROM ""
> WHERE econtains(up, this.file.link)
> ```