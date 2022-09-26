link::
title::
#personne
# {{TITLE}}


```dataview
TABLE title, description, elink(link) as "link"
FROM ""
WHERE contains(author, this.file.link)
```

