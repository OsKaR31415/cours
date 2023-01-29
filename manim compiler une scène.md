---
alias: [ "manim render" ]
---
up:: [[manim]] 
title:: "`manim -qm nom_du_fichier.py NomDeLaScene`"
#informatique/python 

---

Si on a [[manim créer une scène|créé une scène]], il faut la compiler pour obtenir une vidéo.

`manim -qm <nom_du_fichier.py> <NomDeLaScene>`
 - le nom de la scène est le nom de la classe que l'on a créée dans le fichier python ([[manim créer une scène]])

# Arguments

 - [i] `manim render --help` pour avoir tous les arguments

 - accessibilité
     - `-p` pour ouvrir un preview dès que la compilation est terminée
     - `-f` afficher le rendu dans l'explorateur de fichiers à la fin de la compilation
 - rendu
     - `--format [png|gif|mp4|webm|mov]` sauvegarder dans un autre format
     - `-q, --quality [l|m|h|p|k]` qualité de la vidéo finale
 - opengl
     - `--renderer opengl`
     - `-p` affiche un preview temporaire
     - pour enregistrer une vidéo, il faut ajouter `--write_to_movie`