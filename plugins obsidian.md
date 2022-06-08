#PKM
# plugins obsidian

## Core plugins

### Quick switcher ⭐️
 - ouvrir rapidement un fichier
 - probablement le plus utile de tous les plugins

### Daily notes
 - Créer et ouvrir des _daily notes_
 - a utiliser avec [[plugins obsidian#Calendar|calendar]]

### Slides
 - Créer des slides avec du markdown
     - utiliser `---` comme séparateur de slides
 - a utiliser avec [[plugins obsidian#Advanced Slides]]

## Community plugins

### Advanced Slides
 - Slides plus jolies
 - live preview
 - live preview dans un navigateur (serveur local)
 - chalkboard, progression, slide number ...

### Advanced Tables ⭐️
 - pour faire des Tables markdown
 - auto changement de la largeur des colonnes
 - (ajouter|supprimer) des (lignes|colonnes)
 - trier, aligner etc...
 - formules basiques (avec un langage nul)

### Annotator ⭐️
 - Annoter des pdf
 - Annotation stockées dans un fichier markdown
     - le fichier doit avoir `annotation-target: pdf_file_name.pdf` dans le yaml-front
 - annotations et highlights
 - mode dark (et meilleur pdf reader que obsidian)

### Calendar ⭐️
 - Vue "calendrier" sur les [[plugins obsidian#Daily notes|daily notes]]
 - Permet de vraiment utiliser les daily notes pour planifier
 - permet aussi de faire des _weekly notes_

### Completr
 - Auto-complétion
 - Auto-complétion du LaTeX (snippets)
 - plug-and-play

### Diagrams
 - Intégration de [drawio](https://draw.io)


### mindmap
 - Mindmap sur obsidian
 - voir une note comme une mindmap
 - amélioration : `Enhancing mindmap`
     - pour créer directement des mindmap (sans passer par du markdown)


### Excalidraw ⭐️
 - Intégration du site génial : [excalidraw](https://excalidraw.com)
 - intégration bien faîte
 - fonctionnalités en plus
     - Transclude (inclusion de notes qui sont mises à jour en direct)
     - LaTeX
     - liens clickables

### Extended mathJax
 - Support plus complet du LaTeX

### Filename heading sync
 - Le premier h1 du fichier est aussi le nom du fichier
 - ignorer certains fichiers
 - permet d'avoir un titre grand sans avoir un nom de fichier qui prends toujours de la place quand on lis le reste de la page

### Fullscreen mode plugin
 - mettre une page en plein écran

### Hider 
 - Cacher certains éléments de l'UI pour avoir plus de place pour le texte

### Hover editor
 - Permet d'avoir une fenêtre _dans_ obsidian
 - permet d'ouvrir un lien sur lequel on veut simplement faire une petite édition
 - supporte toutes les fenêtre (graph, [[plugins obsidian#Excalidraw|excalidraw]] etc.)


### Kanban
 - faire des kanban board
 - lien avec des notes (chaque "étiquette" du kanban est une note obsidian)
 - le fichier kanban est stocké comme un markdown

### Pandoc plugin
 - exporter les fichiers markdown sous plusieurs formats avec pandoc

### Sliding panes
 - autre vision du tiling window manager
 - permet de mettre des fenêtre côte à côte à l'infini (horizontalement)
 - permet toujours de splitter verticalement $\updownarrow\hspace{-1.5ex} =$
 - utile quand on à besoin de garder les précédens fichiers ouverts

### Spaced repetition ⭐️
 - répétition espacée (flashcards)
 - utilise le format anki : `question::réponse` ou bien `?` pour plusieurs lignes
 - implémente vraiment la répétition espacée (calcule quand la question doit être reposée)
 - permet aussi de _review_ des fichiers (mettre le tag `#review` dans le fichier)
