
> [!smallquery] Liste des devoirs
> ```dataview
> TABLE due, "<progress value='"+difficulty+"' max='10'></progress>" as "difficulty", title as "description"
> FROM #devoir AND -"templates"
> SORT due, importance
> ```







#PKM