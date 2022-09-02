#PKM #no-review 
# tags to add - notes to organize


## notes todo

> [!todo]
> ```dataview
> TABLE file.tasks.text
> FROM #todo
> WHERE file.name != this.file.name
> ```


## notes without review state

> [!question] notes without review state
> ```dataview
> LIST FROM -#excalidraw AND -#review AND -#no-review AND -#personne AND -#flashcards AND -#obsidian AND -#CV AND -#MOC AND -#exercice AND -#devoir AND -#devoir-fait
> WHERE !contains(file.path, "sources")
>   and !contains(file.path, "daily")
>   and !contains(file.path, "__sekund__")
>   and !contains(file.path, "Excalidraw")
>   and !contains(file.path, "images")
>   and !contains(file.path, "kanban")
>   and !contains(file.path, "templates")
>   and !contains(file.path, "informatique")
> ```
> 


## notes without tags

> [!missing]
> ```dataview
> LIST FROM -"daily" AND -"informatique" AND -"templates" AND -"sources" AND -"__sekund__"
> WHERE !file.tags
> ```