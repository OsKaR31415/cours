up::[[unix commandes]]
title::"command line live sessions (multiple users on the same command line)"
usage::"`upterm (host|...)`"
#informatique/unix #no-review 

---

When starting the host (with `upterm host`) you get the url for web connexion, and the command for ssh connexion.

# Advanced Usage

## command at startup

 - run command at startup : pass it as argument
     - `upterm host -- tmux new -t pair-programming` (new tmux session)
 - force every new connexion to run a command : `--force-command` parameter
     - `upterm host --force-command 'tmux attach -t pair-programming'` (connect everyone to a tmux session)

> [!example] Example : tmux setup for remote pair programming 
>  - the host creates a new session, `remote`
>  - Every client creates a new session attached to the host sesstion, `remote`
> - [p] That allows everyone to see the same session, but to be able to switch between panes and tabs independently.
> ```bash
> $> upterm host --force-command 'tmux new -t remote' -- tmux new -t remote
> ```


