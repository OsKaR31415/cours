---
tags: no-review
title: Curiculum vitæ
author: Oscar Plaisant
documentclass: scrartcl
header-includes: |
    \usepackage[T1]{fontenc}
    \usepackage[utf8]{inputenc}
    \usepackage[french]{babel}
    \usepackage[top=2cm, bottom=2.5cm, left=2cm, right=2cm]{geometry}
    \usepackage{tikz}
    \usepackage{xcolor}

    \definecolor{white}{RGB}{255,255,255}
    \definecolor{gray}{HTML}{4D4D4D}
    \definecolor{maingray}{HTML}{B9B9B9}

    \newcommand\skills[1]{
        \begin{tikzpicture}[scale=0.5]
            \foreach [count=\i] \x/\y in {#1}{
                \draw[fill=maingray,maingray] (0,\i) rectangle (5,\i+0.2);
                \draw[fill=white,gray](0,\i) rectangle (\y,\i+0.2);
                \node[above right] at (0.2,\i+0.2) {\scriptsize\x};
            }
        \end{tikzpicture}
    }
---
#autres 

# CV LaTeX

\begin{tabular}{lcl}

Communication :               &  & Programmation :     \\
\skills{{Expression orale/5}} &  & \skills{{Python/4}} \\
\skills{{Anglais/4}}          &  & \skills{{APL/5}}    \\
                              &  & \skills{{Java/2}}   \\
                              &  & \skills{{Scheme/2}} \\
                              &  & \skills{{\LaTeX/4}} \\

\end{tabular}



# Profil


Les mathématiques m\'ont toujours passionné, et je souhaite depuis longtemps devenir chercheur. Plus récemment, je me suis également intéressé à l\'informatique.
Je suis très à l\'aise à l\'oral, et j\'adore transmettre mes connaissances, aider mes camarades, et c\'est pourquoi l\'enseignement m\'attire également, ainsi, le métier d'enseignant-chercheur est l'objectif que je vise.


# Engagement

J\'ai déjà et je compte développer encore dans le futur des engagements dans des associations qui mettent en avant les mathématiques et les sciences en général, pour tous les publics, comme l\'association _La nuit des Maths_, ou bien le _stage Évariste Gallois_.


### Mathématiques


 - Centre Évariste Gallois du 17 au 23 juin 2018 comme élève stagiaire (Direction Philippe Grillot)
 - Tournoi Français des Jeunes Mathématiciennes et Mathématiciens (TFJM2) : équipe finaliste à Tours du 11 et 12 mai 2019 ; finales à Paris Paristech du 30 mai au 2 juin 2019
 - Émissions sur Radio100%lycéens les en 2019 : \og{} Les automates cellulaires \fg{} et \og{} Le grec dans les sciences \fg{}.
 - Bénéficiaire du Pass VIP pour l\'association Nuit des Maths juin 2018 délivré par Jean-Christophe Deledicq
 - Concours Prologin ($1^\text{er}$ Tour admission 2019 Blois, $2^\text{ème}$ Tour Angers 9 février 2020)
 - Intervenant-conférencier aux cotés de Michel Criton et de Bertrand Hauchecorne pour La Nuit des Maths 2020 (présentation sur \og{} Le Jeu de la Vie \fg{} de John Conway) avec le soutien de Jean-Christophe Deledicq et Jean-Paul Delahayes.
 - Nuit des Maths 2020 : spectacle de magie sur le thème des mathématiques
 - Intervenant-conférencier auprès des élèves du Stage Gallois 2020 : présentation sur Les automates Cellulaires (conférences filmées disponibles sur le site du Centre Gallois)
 - Soutien, tutorat dispensé, en mathématiques, pour les élèves en difficulté des classes de 2de et terminale du Lycée Augustin Thierry
 - Stage CNRS du 18 au 22 décembre 2017 -- 20/20 Mention TB
 - Animateur d'une colonie de vacances mathématique (avec l'association "Kangourou des mathématiques") du 6 au 12 juillet 2022


### Activites personnelles

 - Conférences en ligne de mathématiques et d\'informatique
 - Cours de mathématiques et d\'informatique dispensés, niveau collège et lycée
 - Cours de mathématiques en extra-scolaire
 - Lectures spécialisées en mathématiques (abonner à la revue Tangente, collection complète \og{}Génies des Mathématiques\fg{}, romans, essais...)
 - Cours d\'anglais en extra-scolaire
 - Concerts de jazz, de musique classique
 - Club informatique au FabLab de Blois \og{} Coding-goûters \fg{} avec l\'association \og{} Loir-et-Cher tech \fg{}


### Parcours scolaire

 - Première année de licence d\'informatique de l\'université de Tours
 - Lycée :
     - Spécialités Maths et NSI
     - classe Européenne maths Anglais
     - Option Grec
     - Option Maths Expertes
 - Classes CHAM du CE1 à la classe de $3^\text{ème}$ (violon, percussions et chorale)


