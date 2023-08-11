---
alias: [ "vim regex lookahead", "vim regex lookbehind", "vim regex lookaround", "lookahead", "lookbehind", "lookaround" ]
---
up:: [[vim regex]]
title:: "before and after matches"
#informatique 

---
Allows to match pattern after (lookahead) or before (lookbehind) the current pattern.

# Quick reference

 - `\zs` starts the selection (everything before is searched for but not matched)
 - `\ze` stop the selection (everything after is searched for but not matched)

|            | positive | negative |
| ---------- | -------- | -------- |
| lookahead  |`@=`|`@!`| 
| lookbehind |`@<=`|`@<!`| 

# Exemples 

> [!example] president (not (Macron|Hollande))
> To match President if it is **not** `President Macron` or `President Hollande`.
> Note that the match will select only `President` (else the regex is obvious).
> `President\(Macron\|Hollande\)\@!`
> Or, with verymagic mode 
> `\vPresident(Macron|Hollande)@!`

> [!example] python attributes, but not of self
> Match any python attribute (a word after a dot), except attributes of `self` (attributes of an object from the object itself)
> `\(self\)\@<!\.\zs\w\+`
> or, with verymagic mode 
> `\v(self)@<!.\zs\<+`
> 

