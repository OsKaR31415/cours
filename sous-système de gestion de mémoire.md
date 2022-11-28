up::[[système d'exploitation]]
title::"mémoire des (processus|données)"
#informatique/unix 

---

# Exigences
 - Délocalisation
     - programmeurs ne savent pas où le programme sera placé en mémoire (possibilité de [[swap d'un processus]]) 
     - convertir les références mémoire en adresses physiques
 - Protection 
     - pas d'**interférence**


> [!query] Sous-notes de `=this.file.link`
> ```dataview
> TABLE title, up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up.up.up.up, up.up.up, up.up, up
> ```