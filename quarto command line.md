up:: [[quarto blog]]
#informatique #blog 

> [!info]- creating a blog 
> - **Create :** `quarto create-project myblog --type website:blog`
>     - le blog sera dans le dossier `myblog`
> - **Preview** : `quarto preview myblog`
> - **Update publication** : `quarto publish quarto-pub`
> 
> - **Drafts** : Just add `draft: true` in the yaml. The post will only be published once that option is removed.
> - **freezing** : You can freeze a post by adding `freeze: true`
>     - The post won't be refreshed when rendering
>     - That is usefull to make the post future-proof, and to **speed up rendering**

> [!info]- rendering
> `quarto render file.qmd --to html`
> `quarto render file.qmd --to docx`
> 
> You can specify the output format in the yaml frontmatter, with the option `format`
> See the yaml options for more details
>  - if multiple output formats are specified, then multiple files will be created

> [!info]- preview
> `quarto preview file.qmd`
>  - opens the live preview browser window
