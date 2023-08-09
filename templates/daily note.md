---
spaced_repetition: 0
kung_fu: 0
---

## Todo
- spaced repetition : `INPUT[toggle(onValue(1), offValue(0)):spaced_repetition]`
- kung-fu : `INPUT[number:kung_fu]` minutes

## I did
> [!smallquery]- Modified files
> ```dataview
> LIST file.mtime
> where file.mtime > date(this.file.name) and file.mtime < (date(this.file.name) + dur(1 day)) sort file.mtime asc
> ```

## Devoirs
> [!smalltodo]+ Devoirs
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

## I am gratefull to

