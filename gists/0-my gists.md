up:: [[MOC PKM|PKM]]
title::"list of my gists"
#PKM

---
# my gists

```dataview
TABLE gists.url as "link", gists.isPublic
FROM "gists"
WHERE file.link != this.file.link
SORT gists.isPublic
```

