up::[[obsidian plugins]]
title::"traîter le vault comme une base de donnée"
#obsidian #no-review 

----

```dataview
CALENDAR date
FROM "sources"
```


```dataview
TABLE title, description, properties
FROM ""
WHERE contains(up,          [[MOC trigonométrie]]) 
   or contains(up.up,       [[MOC trigonométrie]])
   or contains(up.up.up,    [[MOC trigonométrie]])
   or contains(up.up.up.up, [[MOC trigonométrie]])
WHERE contains(up,          [[MOC fonctions]])
   or contains(up.up,       [[MOC fonctions]])
   or contains(up.up.up,    [[MOC fonctions]])
   or contains(up.up.up.up, [[MOC fonctions]])
WHERE file.name != this.file.name
GROUP BY properties
```


Annotations :
```dataview
TABLE 
FROM ""
WHERE annotation-target
```



link to [[dataview test 1]]