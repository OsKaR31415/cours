#PKM

----

There are `$= dv.pages().length` notes in this vault.
 - `$= dv.pages("#MOC").length` [[Map of content|MOCs]]
 - my notes contain :
     - `$= dv.pages("#maths").length` #maths notes
     - `$= dv.pages("#maths/algèbre").length` #maths/algèbre notes
     - `$= dv.pages("#informatique").length` #informatique notes
     - `$= dv.pages("#PKM").length` #PKM notes
     - `$= dv.pages("#obsidian").length` #obsidian notes


Statistics :
 - :obs_links_going_out: average of `$= Math.round(eval(dv.pages("").file.map((f)=>f.outlinks.length).join("+")) / (dv.pages("").file.length)*100)/100` outlinks per note
 - :obs_links_coming_in: average of `$= Math.round(eval(dv.pages("").file.map((f)=>f.inlinks.length).join("+")) / (dv.pages("").file.length)*100)/100` inlinks per note
     - 

> [!query]- :obs_links_coming_in: Notes with a lot of inlinks (backlinks)
> ```dataview
> TABLE length(file.inlinks) as ":obs_links_coming_in:", title, description
> FROM ""
> WHERE length(file.inlinks) > 10
> sort sort(length(file.inlinks)) DESC
> LIMIT 20
> ```

> [!query]- :obs_links_going_out: Notes with a lot of outlinks
> ```dataview
> TABLE length(file.outlinks) as ":obs_links_going_out:", title, description
> FROM -#MOC
> WHERE length(file.outlinks) > 8
> sort sort(length(file.outlinks)) DESC
> LIMIT 20
> ```

> [!query]- notes with a big inlinks/outlinks ratio
> I exclude notes with too few outlinks (less than 2)
> ```dataview
> TABLE round(length(file.inlinks) / length(file.outlinks), 2) AS ":fas_bars_progress:", title, description
> FROM ""
> WHERE length(file.outlinks) >= 2
> SORT length(file.inlinks) / (length(file.outlinks)) DESC
> LIMIT 20
> ```

> [!query]- notes with a big outlinks/inlinks ratio
> I exclude notes with too few inlinks (less than 2)
> ```dataview
> TABLE round(length(file.outlinks) / length(file.inlinks), 2) AS ":fas_bars_progress:", title, description
> FROM ""
> WHERE length(file.inlinks) >= 2
> SORT length(file.outlinks) / (length(file.inlinks)) DESC
> LIMIT 20
> ```


```dataview
TABLE title, up
FROM #obsidian
WHERE up=[[]]
```

