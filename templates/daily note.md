# {{DATE:YYYY-MM-DD}}

## Todo
- [ ] spaced repetition
- [ ] kung-fu

#### Devoirs
> [!todo] Devoirs
> ```dataview
> TABLE difficulty as "", due as "date", title as "description", file.etags as "tags"
> FROM #devoir
> WHERE contains(due, date(this.file.name))
> ```
> > [!done]- Devoirs faits
> > ```dataview
> > TABLE difficulty as "", due as "date", title as "description"
> > FROM #devoir-fait
> > WHERE contains(due, date(this.file.name))
> > ```

> [!query] anniversaires `=this.file.name`
> ```dataview
> TABLE title, anniv
> FROM #personne 
> WHERE contains(this.file.name, anniv)
> ```

## I did

> [!todo] tasks done
> ```tasks
> done {{DATE:YYYY-MM-DD}}
> short mode
> ```

## I am gratefull to

