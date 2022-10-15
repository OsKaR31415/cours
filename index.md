
----

> [!smallquery] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours
>  AND -#exercice
>  AND -"attachments"
>  AND -"daily"
>  AND -"Excalidraw"
>  AND -"images"
>  AND -"informatique"
>  AND -"kanban"
>  AND -"templates"
>  AND -"USB"
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> LIMIT 100
> ```

