up::[[génie logiciel]]
#informatique 

---

> [!smallquery] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(up,          this.file.link)
>    or contains(up.up,       this.file.link)
>    or contains(up.up.up,    this.file.link)
>    or contains(up.up.up.up, this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

