up::[[musique]]
#art/musique

---

> [!query] sous-notes directes de `=this.file.link`
> ```dataview
> LIST title
> FROM ""
> WHERE econtains(up, this.file.link)
> ```
