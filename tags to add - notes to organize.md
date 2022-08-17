#PKM #no-review 
# tags to add - notes to organize

## notes without tags
```query
file:.md -tag:#science -tag:#maths -tag:#informatique -tag:#logique -tag:#excalidraw -tag:#obsidian -tag:#PKM -tag:#not-done -tag:#flashcards -tag:#todo -tag:#MOC -tag:#personne -tag:#annotation -tag:#autres -tag:#citation -tag:#conférence
AND -path:sources -path:daily -path:__sekund__ -path:Excalidraw -path:"images" -path:kanban -path:annotations -path:templates -path:informatique
```

## notes todo

```dataview
TABLE file.tasks.text
FROM #todo
WHERE file.name != this.file.name
```


## notes without review state

```dataview
LIST FROM ""
WHERE !contains(file.tags, "review")
  and !contains(file.tags, "no-review")
  and !contains(file.tags, "personne")
  and !contains(file.tags, "flashcards")
  and !contains(file.tags, "obsidian")
  and !contains(file.tags, "CV")
  and !contains(file.tags, "MOC")
  and !contains(file.path, "sources")
  and !contains(file.path, "daily")
  and !contains(file.path, "__sekund__")
  and !contains(file.path, "Excalidraw")
  and !contains(file.path, "images")
  and !contains(file.path, "kanban")
  and !contains(file.path, "templates")
  and !contains(file.path, "informatique")
```
