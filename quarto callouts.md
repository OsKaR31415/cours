up:: [[quarto blog]]
#informatique #blog 

```
::: {.callout-note}
Contents of the callout
:::
```
 - [i] there are 5 types of callouts
     - `note`, `tip`, `warning`, `caution`, `important`


Change callout **title**
```
::: {.callout-note}
## The title

contents
```


Collapsed (folded) callout, with no icon
```
::: {.callout-important collapse=true icon=false}
## The title

Content that is hidden by default
:::
```
 - [i] `collapse=true` will make the callout foldable, but visible by default
