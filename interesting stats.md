#PKM
# interesting stats




```dataview
TABLE length(file.inlinks) as ":obs_links_coming_in:", title, description
FROM ""
WHERE length(file.inlinks) > 8
sort sort(length(file.inlinks)) DESC
```
