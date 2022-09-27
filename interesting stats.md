#PKM
# interesting stats

There are `$= dv.pages().length` notes in this vault.
 - `$= dv.pages("#MOC").length` [[Map of content|MOCs]]
 - by themes:
     - `$= dv.pages("#maths").length` #maths notes
     - `$= dv.pages("#informatique").length` #informatique notes
     - `$= dv.pages("#PKM").length` #PKM notes, `$= dv.pages("#obsidian").length` #obsidian notes


> [!query]- :obs_links_coming_in: Notes with a lot of inlinks (backlinks)
> notew with more than 10 inlinks
> ```dataview
> TABLE length(file.inlinks) as ":obs_links_coming_in:", title, description
> FROM ""
> WHERE length(file.inlinks) > 10
> sort sort(length(file.inlinks)) DESC
> ```

> [!query]- :obs_links_going_out: Notes with a lot of outlinks
> notew with more than 8 outlinks
> ```dataview
> TABLE length(file.outlinks) as ":obs_links_going_out:", title, description
> FROM ""
> WHERE length(file.outlinks) > 8
> sort sort(length(file.outlinks)) DESC
> ```

> [!query]- notes with a big inlinks/outlinks ratio
> I exclude notes with too few outlinks (less than 2)
> ```dataview
> TABLE round(length(file.inlinks) / length(file.outlinks), 2) AS ":fas_bars_progress:", title, description
> FROM ""
> WHERE length(file.outlinks) >= 2
> WHERE length(file.inlinks) / length(file.outlinks) > 2
> SORT length(file.inlinks) / (length(file.outlinks)) DESC
> ```

