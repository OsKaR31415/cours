---
description: |
  - [[python collections namedtuples|namedtuples]]
  - [[python  collections deque|deque]]
  - [[python collections ChainMap|ChainMap]]
  - [[python collections Counter|Counter]]
  - [[python collections OrderedDict|OrderedDict]]
  - [[python collections defaultdict|defaultdict]]
  - [[python collections UserDict|UserDict]]
  - [[python collections UserList|UserList]]
  - [[python collections UserString|UserString]]
---
up::[[python modules]]
title::"des types conteneurs alternatifs"
#informatique/python

----

> [!query] Sous-notes de `=this.file.link`
> ```dataview
> LIST title
> FROM -#cours AND -#exercice AND -"daily" AND -#excalidraw AND -#MOC
> WHERE any(map([up, up.up, up.up.up, up.up.up.up], (x) => econtains(x, this.file.link)))
> WHERE file != this.file
> SORT up!=this.file.link, up.up.up.up, up.up.up, up.up, up, file.name
> ```
