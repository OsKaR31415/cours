#PKM #no-review 
# tags to add - notes to organize

## notes todo

> [!todo]
> ```dataview
> TABLE file.tasks.text
> FROM #todo
> WHERE contains(file.tasks.text, "#todo")
> WHERE contains(file.tasks.checked, false)
> WHERE file.name != this.file.name
> ```


## notes without review state


> [!question] notes without review state
> ```dataview
> LIST title
> FROM -#excalidraw AND -#review AND -#no-review AND -#personne AND -#flashcards AND -#obsidian AND -#CV AND -#MOC AND -#exercice AND -#devoir AND -#devoir-fait AND -#cours AND -#fac AND -#PKM AND -#cuisine AND -#not-done
>  AND -"sources" AND -"daily" AND -"__sekund__" AND -"Excalidraw" AND -"images" AND -"kanban" AND -"templates" AND -"informatique" 
> SORT contains(file.tags, "#not-done")
> ```

## Notes without tags

> [!missing] notes without tags
> ```dataview
> LIST FROM -"daily" AND -"informatique" AND -"templates" AND -"sources" AND -"__sekund__"
> WHERE !file.tags
> ```
