---
alias: [ "live remote terminal share", "online remote live terminal sharing", "share online terminal" ]
---
up::[[unix commandes]]
title::"donner l'accès à un terminal ou à une commande via internet"
link::https://tsl0922.github.io/ttyd/
date::2022-12-22
#informatique 

---

> [!info] Démarrer un serveur
> `ttyd -p <port> <commande>`
> > [!example] Exemples
> >  - `ttyd -p 3141 zsh` Démarrer un terminal zsh
> >  - `ttyd vim` démarrer dirrectement avec vim
> >  - `ttyd tmux new -t perso` se connecter à une session tmux (nouvelle session attachée à une existante)


# Notes
 - Fonctionne très bien avec tmux
     - ne cherche pas à prendre la taille du plus petit écran (s'adapte à tous les écrans)