up::[[obsidian]]
#obsidian #no-review 
# obsidian plugins
Plugins pour l'application [[obsidian]]

## Core plugins

### Quick switcher ⭐️
 - ouvrir rapidement un fichier
 - probablement le plus utile de tous les plugins

### Daily notes
 - Créer et ouvrir des _daily notes_
 - a utiliser avec [[obsidian plugins#Calendar|calendar]]

### Slides
 - Créer des slides avec du markdown
     - utiliser `---` comme séparateur de slides
 - a utiliser avec [[obsidian plugins#Advanced Slides]]

## Community plugins

### Advanced Slides
[github](https://github.com/MSzturc/obsidian-advanced-slides)
 - Slides plus jolies
 - live preview
 - live preview dans un navigateur (serveur local)
 - chalkboard, progression, slide number ...

### Advanced Tables ⭐️
[github](https://github.com/tgrosinger/advanced-tables-obsidian)
 - pour faire des Tables markdown
 - auto changement de la largeur des colonnes
 - (ajouter|supprimer) des (lignes|colonnes)
 - trier, aligner etc...
 - formules basiques (avec un langage nul)

### Annotator ⭐️
[github](https://github.com/elias-sundqvist/obsidian-annotator)
 - Annoter des pdf (et des epub)
 - Annotation stockées dans un fichier markdown
     - le fichier doit avoir `annotation-target: pdf_file_name.pdf` dans le yaml-front
 - annotations et highlights
 - mode dark (et meilleur pdf reader que obsidian)

### Calendar ⭐️
[github](https://github.com/liamcain/obsidian-calendar-plugin)
 - Vue "calendrier" sur les [[obsidian plugins#Daily notes|daily notes]]
 - Permet de vraiment utiliser les daily notes pour planifier
 - permet aussi de faire des _weekly notes_

### Completr
[github](https://github.com/tth05/obsidian-completr)
 - Auto-complétion
 - Auto-complétion du LaTeX (snippets)
 - plug-and-play

### Desmos
[github](https://github.com/Nigecat/obsidian-desmos)
 - tracer des courbes dans obsidian
 - [[obdsidian plugin desmos]]

### Diagrams
[github](https://github.com/zapthedingbat/drawio-obsidian)
 - Intégration de [drawio](https://draw.io)

### mindmap
[github](https://github.com/lynchjames/obsidian-mind-map)
 - Mindmap sur obsidian
 - voir une note comme une mindmap
 - amélioration : `Enhancing mindmap`
     - pour créer directement des mindmap (sans passer par du markdown)
     - les mindmap sont toujours stockées en markdown

### Excalidraw ⭐️
[github](https://github.com/zsviczian/obsidian-excalidraw-plugin)
 - Intégration du site génial : [excalidraw](https://excalidraw.com)
 - intégration bien faîte
 - fonctionnalités en plus
     - Transclude (inclusion de notes qui sont mises à jour en direct)
     - LaTeX
     - liens clickables

### Extended mathJax
[github](https://github.com/xldenis/obsidian-latex)
 - Support plus complet du LaTeX
     - préambule (dans `preamble.sty`)

### Filename heading sync
[github](https://github.com/dvcrn/obsidian-filename-heading-sync)
 - Le premier h1 du fichier est aussi le nom du fichier
 - peut ignorer certains fichiers
 - permet d'avoir un grand titre sans avoir un nom de fichier qui prends toujours de la place quand on lis le reste de la page

### Fullscreen mode plugin
[github](https://github.com/Razumihin/obsidian-fullscreen-plugin)
 - mettre une page en plein écran

### Hider 
[github](https://github.com/kepano/obsidian-hider)
 - Cacher certains éléments de l'UI pour avoir plus de place pour le texte

### Hover editor
[obsidian](https://github.com/nothingislost/obsidian-hover-editor)
 - Permet d'avoir une fenêtre _dans_ obsidian
 - permet d'ouvrir un lien sur lequel on veut simplement faire une petite édition
 - supporte toutes les fenêtre (graph, [[obsidian plugins#Excalidraw|excalidraw]] etc.)


### Kanban
[github](https://github.com/mgmeyers/obsidian-kanban)
 - faire des kanban board
 - lien avec des notes (on peut toujours mettre des liens wiki dans les étiquettes)
 - le fichier kanban est stocké comme un markdown

### Latex Suite
 - raccourcis clabier pour taper du LaTeX
     - j'utilise ceux de [[obsidian plugin quick latex|quick latex]]
 - conceal du $\LaTeX$ : permet de mieux voir ce que l'on tape


### Pandoc plugin
[github](https://github.com/OliverBalfour/obsidian-pandoc)
 - exporter les fichiers markdown sous plusieurs formats avec pandoc

### Quick explorer
[github](https://github.com/pjeby/quick-explorer/)
 - alternate file explorer
 - more keyboard based
 - shows preview with [[obsidian plugins#Hover editor|hover editor]]
 
### Quick latex for obsidian
[github](https://github.com/joeyuping/quick_latex_obsidian)
 - raccourcis clavier pour taper du LaTeX
 - [[obsidian plugin quick latex]]

### Sliding panes
[github](https://github.com/deathau/sliding-panes-obsidian)
 - autre vision du tiling window manager
 - permet de mettre des fenêtre côte à côte à l'infini (horizontalement)
 - permet toujours de splitter verticalement $\updownarrow\hspace{-1.5ex} =$
 - utile quand on à besoin de garder beaucoup de fichiers ouverts

### Spaced repetition ⭐️
[github](https://github.com/st3v3nmw/obsidian-spaced-repetition)
 - répétition espacée (flashcards)
 - utilise le format anki : `question::réponse` ou bien `?` pour plusieurs lignes
 - implémente vraiment la [[spaced repetition|répétition espacée]] (calcule quand la question doit être reposée)
 - permet aussi de _review_ des fichiers (mettre le tag `#review` dans le fichier)

### Task progress bar
[github](https://github.com/Quorafind/Obsidian-Task-Progress-Bar)
 - permet d'avoir des barres de progression pour chaque item de task (`- [ ]`), qui se met à jour quand on change le task comme faît (`- [x]`)
