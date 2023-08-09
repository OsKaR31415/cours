up:: [[quarto extensions]]
link:: https://github.com/schochastics/quarto-nutshell, https://ncase.me/nutshell/
#informatique #blog 

Nutshell est un système pour faire des inclusions de texte dépliables.

> [!info]- Fonctionnalités
> Nutshell permet de faire des "liens" qui, quand clique dessus, déplient une bulle qui contient plus de détails
> - cacher des sections dans un lien repliable
> - cacher des paragraphes dans un lien repliable
> - inclusions d'autres sites (wikipedia, youtube...)
> - "sections invisibles" : des sections qui ne sont pas affichées là où elles sont, mais là où un lien nutshell y fait référence
> - 🔗 ajouter un boutton qui permet d'intégrer les replis dans un autre site web !

> [!info]- Utiliser nutshell dans quarto
> Il faut préciser qu'on utilise le **filtre** *nutshell* dans le frontmatter yaml du document :
> ```yaml
> filters:
>   - nutshell
> ```

> [!example]- Exemple 
> ```markdown
> ---
> title: "Nutshell: Expandable Explanations"
> author: "David Schoch"
> format: html
> filters:
>   - nutshell
> ---
> 
> 
> ## [:What is Nutshell?](#what-is-nutshell)
> Nutshell is a tool to make "expandable explanations", like this! This lets your readers learn only the details they need, just-in-time, always-in-context.
> 
> Unlike links, Nutshell lets you include only the snippet you need, not the whole page. Plus, instead of being lost in a jungle of new tabs, your reader stays on one page, keeping their flow of reading. Even if you interrupt a sentence, Nutshell recaps the sentence afterwards, so your reader never loses context.
> 
> You can find more information on the nutshell [webpage](https://ncase.me/nutshell/) 
> 
> ## Test
> 
> This is a senseless paragraph
> 
> ## Testing Links
> 
> - [:link to senseless paragraph](#test)  
> - [:link to wikipedia article](https://en.wikipedia.org/wiki/Nutshell)
> - [:link to invisible sections](#x-invisible)
> 
> ## :x invisible
> 
> Use `## :x header` to include an invisible secion that can be linked to via nutshell 
> ```

