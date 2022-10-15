up::[[obsidian plugins]]
link::https://github.com/Stardusten/ob-table-enhancer/tree/master
title::"edition de tables, javascript dans les cellules"
#obsidian 

----

 - édition de tables (plus que le formattage de [[obsidian plugin advanced tables|advanced tables]])
     - fonctionne correctement avec le [[LaTeX]] et les styles
 - javascript dans les cellules
     - `>>>` pour interpréter le [[javascript]]
     - variables magiques
         - `c` : colonne actuelle (character array)
         - `nc` : colonne actuelle (number array)
         - `t` : la table entière
             - `t.cells` : tableau des cellules (comme strings)
                 - `t.cells[0]` ligne de titre
                 - `t.cells[0][0]` première cellule
                 - `t.cells.length` largeur
                 - `t.cells[0].length` hauteur
             - `t.formatRow` : les `----` contenux dans chaque colonne, dans un array
                 - exemple : `[' ---- ', ' ---- ', ' ------ ']`


> [!idea] Fonctions [[javascript]] utiles
>  - `array.length`
>  - `array.filter(x => condition(x))`
>  - `string.contains('test')`
>  - fonctions builtin :
>      - `sum`
>      - `avg`
>      - `min`
>      - `max`



# Examples

## Total

### Total simple
|         | prix |
| ------- | ---- |
|         | 10   |
|         | 3    |
|         | 9    |
| total : |>>>sum(nc)|

### Total de certaines valeurs

|     | gains |
| --- | ----- |
|     | 10    |
|     | 1     |
|     | 2     |
|     | 73    |
|     | -42   |
|     | 7     |
|  | -12   |
|total des gains :|>>>sum(nc.filter(x => x>=0))|
|total des pertes :|>>>sum(nc.filter(x => x<=0))|

### Compter des valeurs
Nombre d'occurences de "TODO" :
| task         | State |
| ------------ | ----- |
| do something |**TODO**|
| say hello    | DONE  |
| say goodbye  |TODO|
| hello hello  |TODO quickly|
| you say      | DONE  |
| goodbye      | TODO  |
| i say        |_TODO_|
| hello        |DONE ($y = \sqrt{1-x^2}$)|
| a faire :    |>>>c.filter(cell => cell.contains('TODO')).length|
|faits :|>>>c.filter(cell => cell.contains('DONE')).length|

