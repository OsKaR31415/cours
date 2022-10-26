> [!smallquery] devoirs
> ```dataview
> TABLE due, difficulty as "", title as "description"
> FROM #devoir AND -"templates"
> SORT importance ASC
> SORT due
> ```






#PKM