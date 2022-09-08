up::[[youtube]]
link::https://www.youtube.com/c/VAplusmedia
title::"chaîne d'information (youtube)"
# VA Plus

> [!query] Contenu créé par `=this.file.link`
> ```dataview
> TABLE title, description
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(author, this.file.link)
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```

