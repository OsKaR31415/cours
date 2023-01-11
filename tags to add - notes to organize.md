title::notes à refactor (tags à ajouter, notes todo...)
#PKM

----

# notes todo

> [!todo]
> ```dataview
> TABLE file.tasks.text
> FROM #todo
> WHERE contains(file.tasks.text, "#todo")
> WHERE contains(file.tasks.checked, false)
> WHERE file.name != this.file.name
> ```


# Notes without tags

> [!missing] notes without tags
> ```dataview
> LIST FROM -"daily" AND -"informatique" AND -"templates" AND -"sources" AND -"__sekund__" AND -"gists"
> WHERE !file.tags
> ```
