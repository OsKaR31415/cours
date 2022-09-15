---
alias: "formule de trigonométrie"
---
up::[[MOC trigonométrie]]
#maths/trigonométrie #no-review 
# formules de trigonométrie

> [!done] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, join(type) as "type"
> FROM #maths/trigonométrie AND -"templates"
> WHERE contains(up,          this.file.link)
>    or contains(up.up,       this.file.link)
>    or contains(up.up.up,    this.file.link)
>    or contains(up.up.up.up, this.file.link)
> WHERE file.link != this.file.link
> SORT join(type) DESC
> ```

