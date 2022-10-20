up::[[modèle OSI]]
#informatique #no-review 

---

 - couche la plus basse

![[couche physique 2022-09-20 13.16.26.excalidraw]]


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE econtains(list(up, up.up, up.up.up, up.up.up.up), this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```