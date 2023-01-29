---
alias: [ "restart wacom graphic tablet drivers", "redémarrer les drivers wacom", "stop wacom tablet drivers", "arrêter les drivers des tablettes wacom" ]
---
up::
title::
#informatique 

---


```
launchctl unload /Library/LaunchAgents/com.wacom.*
```

```
launchctl load /Library/LaunchAgents/com.wacom.*
```