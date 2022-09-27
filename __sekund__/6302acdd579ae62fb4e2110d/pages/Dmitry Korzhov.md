# Dmitry Korzhov
type:: [[employee]]
role:: Product Researcher
email:: dmitriy.korzhov@improvado.io
department:: [[Knowledge team]]

## Obsidian tasks

### All tasks.
```dataview
TASK
WHERE !completed
WHERE contains(text, "Dmitry Korzhov")
WHERE !contains(text, "critical")
GROUP BY file.name
```

### Critical tasks. 
```dataview
TASK 
WHERE !completed
WHERE contains(text, "critical")
WHERE contains(text, "Dmitry Korzhov")
GROUP BY file.name
```

### Tasks for today.
```dataview
TASK
WHERE !completed 
WHERE contains(text, "Dmitry Korzhov")
WHERE (due.file.day) = date(today)
GROUP BY file.name
```



## Projects 

```dataview
TABLE
next_step as "Next step",
status
WHERE project_owner = [[Dmitry Korzhov]]
WHERE !contains(status, "done")
```

## Resources and Useful pages & links 
- [[From the Modern Data Stack to Knowledge Graphs]]
- [[What is a Knowledge Graph]]
- [[Knowledge Graphs and AI as a Service]]
- [[Liquid. The soul of a new graph database]]
- [[Completing a member knowledge graph with Graph Neural Networks]]
- [[Building The LinkedIn Knowledge Graph]]
- [[KG Course 2021]] 
- [[Keeping Your Notes Tidy - How do You Manage the Growing Number of Tags?]]
- [[Pattern for staying connected with your team at work]]
- [[My GTD - How I Organize Meetings and TODOs in Roam]]
- [[How do you organize your notes?]]

- [ ] Make [[Obsidian Onboarding page]]. [[Dmitry Korzhov]]