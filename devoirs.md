#PKM #no-review 
# devoirs

> [!todo] Liste des devoirs
> ```dataview
> TABLE due, difficulty as "", title as "description"
> FROM #devoir AND -"templates"
> SORT due, importance
> ```



> [!done] Devoirs faits
> ```dataview
> TABLE due, title as "description"
> FROM #devoir-fait
> SORT due, description
> ```

