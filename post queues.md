up:: [[MOC PKM|PKM]]
#PKM

----


> [!query] Sous-notes de [[post queues]]
> ```dataview
> TABLE up as "Up"
> FROM ""
> WHERE contains(up,    [[post queues]])
>    or contains(up.up, [[post queues]])
> WHERE file.name != this.file.name
> ```

