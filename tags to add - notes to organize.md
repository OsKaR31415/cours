title::notes à refactor (tags à ajouter, notes todo...)
#PKM #no-review 

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


# notes without review state


> [!question] notes without review state
> ```dataview
> TABLE title
> FROM -#excalidraw
>  AND -#review
>  AND -#no-review
>  AND -#personne
>  AND -#flashcards
>  AND -#obsidian
>  AND -#CV
>  AND -#MOC
>  AND -#exercice
>  AND -#devoir
>  AND -#devoir-fait
>  AND -#cours
>  AND -#fac
>  AND -#demonstration
>  AND -#PKM
>  AND -#cuisine
>  AND -#not-done
>  AND -"sources"
>  AND -"daily"
>  AND -"__sekund__"
>  AND -"Excalidraw"
>  AND -"images"
>  AND -"kanban"
>  AND -"templates"
>  AND -"informatique" 
>  AND -"gists"
> WHERE !mindmap-plugin
> SORT contains(file.tags, "#not-done")
> ```

# Notes without tags

> [!missing] notes without tags
> ```dataview
> LIST FROM -"daily" AND -"informatique" AND -"templates" AND -"sources" AND -"__sekund__" AND -"gists"
> WHERE !file.tags
> ```
