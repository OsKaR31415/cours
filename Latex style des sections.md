up::[[LaTeX]]
title::"comment changer le style des sections en latex"
#informatique



----
Comment changer le style des sections en LaTeX ?

# Numérotation des sections
La numérotation est définie par les commandes `\thechapter`, `\thesection`, `\thesubsection` etc.
On peut modifier leur définition pour changer le style des numérations :
```latex
% le compteur "section" donne le numéro de section
% Ici, on utilise des chiffres romains en majuscules
\renewcommand{\thesection}{\Roman{section}}

% Ici, les lettres de l'alphabet en minuscules :
\renewcommand{\thesubsection}{\alph{subsection}}
```

Problème : cela ne permet de changer que les numérotations, pas le style général

# Style complet avec titlesec
Le package `titlesec` permet de personnaliser réellement les sections

```latex
\usepackage{titlesec}

% sections
\titleformat
{\section} % command
[display] % shape
{\bfseries\Large\itshape} % format
{Story No. \ \thechapter} % label
{0.5ex} % sep
{
    \rule{\textwidth}{1pt}
    \vspace{1ex}
    \centering
} % before-code
[
\vspace{-0.5ex}%
\rule{\textwidth}{0.3pt}
] % after-code



% subsections
\titleformat{\subsection}[wrap] % wrap joins the title and the text without newline
{\normalfont\bfseries}
{\thesubsection.}{0.5em}{}
```

