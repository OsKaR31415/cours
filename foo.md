---
anniv: 1970-01-01
supercool: 2020-10-10
---
link::
title::
#personne

---
Anniversaire :
```meta-bind
INPUT[date:supercool]
```


```dataview
TABLE title, description, elink(link) as "link"
FROM ""
WHERE contains(author, this.file.link)
```

