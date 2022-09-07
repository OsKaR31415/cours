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

## I did

> [!todo] tasks done
> ```tasks
> done {{DATE}}
> short mode
> ```

## I am gratefull to

