---
alias: [ "commande pour empêcher le système de se mettre en veille", "prevent system idle" ]
---
up::[[terminal commandes]] 
title:: "empêcher le système de se mettre en veille (Macos)"
#informatique 

---

 - prevent specific items to get idle
     - `-d` display
     - `-m` disk
     - `-i` system

 - `caffeinate -i <command>` to prevent idle while `<command>` is running (it forks and runs the command)

 - `-t <timeout>` to specify a timeout (in seconds) for which the assertion has to be valid 
 - 