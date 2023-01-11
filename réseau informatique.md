up::[[MOC informatique|informatique]]
title::"ordinateurs connectés, acheminant de l'information entre eux"
#informatique

----

> [!définition]
>  - un ensemble d'équipements et logiciels
>  - acheminement de l'information entre eux
>      - émetteur --> récepteur(s)

> [!example]- exemples
>  - [[internet]]
>  - réseau radio, télédiffusion
>  - téléphonie fixe
>  - réseaux mobiles


> [!query] Sous-notes de this.file.link
> ```dataview
> TABLE title, up as "Up"
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE contains(up,          this.file.link)
>    or contains(up.up,       this.file.link)
>    or contains(up.up.up,    this.file.link)
>    or contains(up.up.up.up, this.file.link)
> WHERE file.link != this.file.link
> SORT up.up.up.up, up.up.up, up.up, up
> ```

