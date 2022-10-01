---
alias: "create branch"
name: "create branch"
---
up::[[Git Branches]]
title::"`git checkout -b <branch_name>` create and switch to", "`git branch <branch_nam>` create but don't switch"
#informatique 
# git create branch

Create branch and switch to that new branch
```bash
$> git checkout -b <branch_name>
Switched to new branch '<branch_name>'
```

Create branch but don't switch to that new branch
```bash
$> git branch -b <branch_name>
```

