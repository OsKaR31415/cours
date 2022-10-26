up::[[obsidian plugin dataview]]
title::"cound tasks completed in a file"
#obsidian 

---

 - simple solution :
     - `= length(filter(this.file.tasks.completed, (t) => t = true))` tasks completed
 - with html styling : 
     - `= "<button> tasks are " + round(length(filter(this.file.tasks.completed, (t) => t = true)) / length(this.file.tasks) * 100) + "% done </button>"`
 - with minimal's `<progress>` tag :
     - `= "<progress value='" + (length(filter(this.file.tasks.completed, (t) => t = true)) / length(this.file.tasks)) * 100 + "' max='100'></progress>" + "<br>" + round((length(filter(this.file.tasks.completed, (t) => t = true)) / length(this.file.tasks)) * 100) + "% completed"`


# Tasks 
 - [ ] foo
 - [x] bar 
 - [ ] foobar 
 - [ ] thing 
 - [x] those 
 - [x] then 
 - [ ] therefore