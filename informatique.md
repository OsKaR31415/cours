up::[[MOC informatique|informatique]]
#informatique 
# informatique

> [!smallquery] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, description
> FROM #informatique 
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```
