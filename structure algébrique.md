up::[[MOC algèbre]]
#maths/algèbre #no-review 
# structure algébrique
Une structure algébrique est un [[ensemble]] _muni_ d'une ou plusieurs [[loi de composition|lois de composition]].



> [!query]- Sous-notes de [[structure algébrique]]
> ```dataview
> TABLE up as "Up", up.up as "2-Up", up.up.up as "3-Up", up.up.up.up as "4-Up"
> FROM -#excalidraw AND -#MOC
> WHERE contains(file.outlinks, [[structure algébrique]])
>    or contains(up,          [[structure algébrique]])
>    or contains(up.up,       [[structure algébrique]])
>    or contains(up.up.up,    [[structure algébrique]])
>    or contains(up.up.up.up, [[structure algébrique]])
> WHERE file.name != this.file.name
> SORT up.up.up.up, up.up.up, up.up, up
> ```