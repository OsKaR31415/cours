---
alias: [ "share terminal via ssh", "live remote terminal sharing" ]
---
up::[[terminal commandes]], [[ssh]]
title::"command line live sessions (multiple users on the same command line)"
usage::"`upterm (host|...)`"
#informatique/unix

---

When starting the host (with `upterm host`) you get the url for web connexion, and the command for ssh connexion.

# Connecting to a session
ssh does not support rsa by default now 

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


# The problem with ssh and rsa
 - ssh doesn't support rsa algorithm anymore
 - that means upterm won't work

Workaround :
 - Add the public key of the person that wants to connect to the `.ssh/authorized_hosts`
     - generate with `ssh-keygen`
 - Use these arguments (to connect) :
     - `ssh <the_hostname>@uptermd.upterm.dev -o "PubkeyAcceptedKeyTypes +ssh-rsa" -o "HostKeyAlgorithms +ssh-rsa"`
         - `<the_hostname>` is given by `upterm host`
         
