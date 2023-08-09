up:: [[quarto blog]]
#informatique #blog 

> [!info]  Set the title
> and other usefull data
> ```yaml
> title: "The title"
> author: "Oscar Plaisant"
> description: "short description of the file"
> date: 1999-01-01
> ```

> [!info]  Style
> ```yaml
> # table of contents
> toc: true
> # automatic sections numbering
> number-sections: true
> # margins
> geometry:
>     - top=30mm
>     - left=30mm
> ```

> [!info]  Set the output format
> ```yaml
> format: pdf
> ```

> [!info]- format-specific settings
> ```yaml
> format:
>     html:
>         # fold the code and show only the result by default
>         code-fold: true
>         # table of contents
>         toc: true
>         # numbering of titles
>         number-sections: true
> ```
>  - [i] You can have multiple formats at the same time. Specifying default (for example `docx: default`) will make it the default
>  
> ```yaml
> 
> 
> ```
> 

> [!info]- Using jupyter
> - [!] you **have to** tell quarto what jupyter kernel to use
> ```yaml
> # choose the jupyter kernel
> jupyter: python3
> ```

