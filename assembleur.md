up::[[langage de programmation]]
#informatique #no-review #not-done 

---

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```



# Adressage 
 - immédiat : on met une valeur dans un registre (on donne la valeur)
 - indirect : valeur dans une case mémoire pointée par une adresse (on donne l'adresse)