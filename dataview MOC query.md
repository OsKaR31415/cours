up::[[obsidian workflow MOCs]], [[obsidian plugin dataview]]
title::"[[Depth-first search|DFS]] in the reciprocal of `up::` property"
#obsidian #PKM 

---

> [!important] goals
>  - have all the notes about a subject
>      - using [[obsidian plugin breadcrumbs|breadcrumbs]] hierarchy with `up::`
>      - auto-updating
>      - see what the note talks about
>          - `title` and `description` attributes

> [!note] implementation
>  - inside a custom [[obsidian callouts|callout]]
>      - make text smaller if needed
>          - `query` or `smallquery`
>      - wrappable callout (spoiler)
>  - [[Depth-first search]] order

## The query

> [!query] subnotes of `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```