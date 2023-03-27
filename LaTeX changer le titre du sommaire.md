up:: [[LaTeX]]
title:: "`\renewcommand{\contentsname}{New toc title}` (dans le front)"
link:: https://tex.stackexchange.com/questions/28516/how-to-change-the-title-of-toc
#informatique 

---

# préciser pour différent langages 

```latex
\documentclass{article}

\usepackage[english]{babel}

\addto\captionsenglish{% Replace "english" with the language you use
  \renewcommand{\contentsname}%
    {Whatever}%
}

\begin{document}

\tableofcontents

\section{Section}

\subsection{Subsection}

\end{document}
```


