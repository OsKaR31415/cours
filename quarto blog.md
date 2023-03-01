up:: [[terminal commandes]] 
title:: "producing documents from rmarkdown"
link:: https://quarto.org/docs/get-started/hello/text-editor.html, https://quarto.org/docs/get-started/authoring/text-editor.html
#informatique 

---

# Usage

## Command line
### Rendering

`quarto render file.qmd --to html`
`quarto render file.qmd --to docx`

You can specify the output format in the yaml frontmatter, with the option `format`
See the yaml options for more details
 - if multiple output formats are specified, then multiple files will be created


### Preview

`quarto preview file.qmd`
 - opens the live preview browser window

## Mardown

### callouts

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

## YAML options

### Set the title
and other usefull data
```yaml
title: "The title"
author: "Oscar Plaisant"
```

### Style

```yaml
# table of contents
toc: true
# automatic sections numbering
number-sections: true
# margins
geometry:
    - top=30mm
    - left=30mm
```

### Set the format
Basically set the output format
```yaml
format: pdf
```


Different settings
```yaml
format:
    html:
        # fold the code and show only the result by default
        code-fold: true
        # table of contents
        toc: true
        # numbering of titles
        number-sections: true
```
 - [i] You can have multiple formats at the same time. Specifying default (for example `docx: default`) will make it the default
 
```yaml


```


```yaml
# choose the jupyter kernel
jupyter: python3
```


# Blog

## Command line
 - **Create :** `quarto create-project myblog --type website:blog`
     - le blog sera dans le dossier `myblog`
 - **Preview** : `quarto preview myblog`
 - **Update publication** : `quarto publish quarto-pub`

 - **Drafts** : Just add `draft: true` in the yaml. The post will only be published once that option is removed.
 - **freezing** : You can freeze a post by adding `freeze: true`
     - The post won't be refreshed when rendering
     - That is usefull to make the post future-proof, and to speed up rendering

